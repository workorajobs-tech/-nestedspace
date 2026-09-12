import assert from "node:assert/strict";
import { test } from "node:test";
import { createAnalyticsClient, consentKey, measurementId } from "../src/analytics/client.ts";

function fixture(host = "nestedspace.in", debug = false) {
  const storage = new Map<string, string>();
  const scripts: unknown[] = [];
  const removedCookies: string[] = [];
  const win = {
    location: { hostname: host },
    localStorage: {
      getItem: (key: string) => storage.get(key) ?? null,
      setItem: (key: string, value: string) => { storage.set(key, value); },
    },
    dataLayer: [] as unknown[],
  };
  const doc = {
    referrer: "https://www.google.com/search?q=private-test-query",
    get cookie() { return "_ga=test; _ga_F382QF3RNC=session; necessary=keep"; },
    set cookie(value: string) { removedCookies.push(value); },
    createElement: () => ({}),
    head: { appendChild: (script: unknown) => scripts.push(script) },
  };
  const client = createAnalyticsClient(
    win as unknown as Parameters<typeof createAnalyticsClient>[0],
    doc as unknown as Document, debug,
  );
  const commands = () => win.dataLayer.map((entry) => Array.from(entry as ArrayLike<unknown>));
  const events = () => commands().filter((entry) => entry[0] === "event");
  return { client, win, storage, scripts, removedCookies, commands, events };
}

test("no script or events before permission, after decline, or on ordinary localhost", () => {
  for (const host of ["nestedspace.in", "localhost"]) {
    const f = fixture(host);
    f.client.page("Home", "https://nestedspace.in/");
    f.client.contact("whatsapp_click", "contact");
    f.client.contact("phone_click", "about");
    assert.equal(f.scripts.length, 0);
    f.client.setChoice("denied");
    f.client.page("Pricing", "https://nestedspace.in/pricing");
    assert.equal(f.events().length, 0);
    if (host === "localhost") {
      f.client.setChoice("granted");
      assert.equal(f.scripts.length, 0);
    }
  }
});

test("consent records the current route once; route revisits count and rerenders do not", () => {
  const f = fixture();
  f.client.page("Home", "https://nestedspace.in/");
  f.client.page("Pricing", "https://nestedspace.in/pricing");
  f.client.setChoice("granted");
  f.client.syncChoice();
  f.client.page("Pricing", "https://nestedspace.in/pricing");
  assert.equal(f.events().length, 1);
  f.client.page("Home", "https://nestedspace.in/");
  f.client.page("Pricing", "https://nestedspace.in/pricing");
  assert.equal(f.events().length, 3);
  assert.equal(f.scripts.length, 1);
  assert.equal((f.events()[1][2] as Record<string, unknown>).page_referrer, "https://nestedspace.in/pricing");
});

test("URLs and contact events exclude query strings, fragments and unknown values", () => {
  const f = fixture();
  f.client.page("Home", "https://nestedspace.in/?email=private@example.com#private");
  f.client.setChoice("granted");
  f.client.contact("contact_form_handoff", "contact");
  f.client.contact("whatsapp_click", "contact");
  f.client.contact("phone_click", "footer");
  f.client.contact("phone_click", "about");
  f.client.contact("private@example.com" as never, "contact");
  f.client.contact("phone_click", "private@example.com" as never);
  f.client.page("Invalid", "https://unrelated.example/private");
  assert.equal(f.events().length, 5);
  assert.equal((f.events()[4][2] as Record<string, unknown>).placement, "about");
  const serialized = JSON.stringify(f.commands());
  assert.ok(!serialized.includes("private"));
  assert.ok(!serialized.includes("wa.me"));
  assert.ok(!serialized.includes("generate_lead"));
  assert.equal((f.events()[0][2] as Record<string, unknown>).page_referrer, "https://www.google.com/");
});

test("withdrawal stops tracking, clears only GA cookies and permits a new opt-in", () => {
  const f = fixture();
  f.client.page("Home", "https://nestedspace.in/");
  f.client.setChoice("granted");
  f.client.setChoice("denied");
  assert.equal((f.win as Record<string, unknown>)[`ga-disable-${measurementId}`], true);
  f.client.contact("phone_click", "footer");
  f.client.page("Pricing", "https://nestedspace.in/pricing");
  assert.equal(f.events().length, 1);
  assert.ok(f.removedCookies.length > 0);
  assert.ok(f.removedCookies.every((cookie) => cookie.startsWith("_ga")));
  f.client.setChoice("granted");
  assert.equal(f.events().length, 2);
  assert.equal(f.scripts.length, 1);
});

test("expired permission, another tab's decline and unavailable storage are handled", () => {
  const f = fixture();
  f.storage.set(consentKey, JSON.stringify({ choice: "granted", expires: Date.now() - 1 }));
  assert.equal(f.client.getChoice(), null);
  f.client.page("Home", "https://nestedspace.in/");
  f.client.setChoice("granted");
  f.storage.set(consentKey, JSON.stringify({ choice: "denied", expires: Date.now() + 10000 }));
  f.client.syncChoice();
  f.client.contact("phone_click", "footer");
  assert.equal(f.events().length, 1);
  const blocked = fixture();
  blocked.win.localStorage.setItem = () => { throw new Error("Storage blocked"); };
  blocked.client.page("Home", "https://nestedspace.in/");
  blocked.client.setChoice("granted");
  assert.equal(blocked.client.getChoice(), "granted");
  assert.equal(blocked.events().length, 1);
});

test("explicit local debug sends debug events only on allowed hosts", () => {
  for (const host of ["localhost", "127.0.0.1", "unrelated.example"]) {
    const f = fixture(host, true);
    f.client.page("Home", "https://nestedspace.in/");
    f.client.setChoice("granted");
    if (host === "unrelated.example") assert.equal(f.events().length, 0);
    else assert.equal((f.events()[0][2] as Record<string, unknown>).debug_mode, true);
  }
});
