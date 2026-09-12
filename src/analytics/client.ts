export type AnalyticsChoice = "granted" | "denied";
export type ContactAction = "whatsapp_click" | "contact_form_handoff" | "phone_click";
export const measurementId = "G-F382QF3RNC";
export const consentKey = "nestedspace.analytics.v1";
const consentLifetime = 180 * 24 * 60 * 60 * 1000;

type AnalyticsWindow = Window & {
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
  [key: `ga-disable-${string}`]: boolean;
};

export function createAnalyticsClient(browserWindow: Window, doc: Document, debug = false) {
  const win = browserWindow as AnalyticsWindow;
  let memoryChoice: AnalyticsChoice | null = null;
  let storageUnavailable = false;
  let initialized = false;
  let currentPage: { page_location: string; page_title: string } | null = null;
  let lastPage = "";
  let referrer = "";
  const enabledHost = ["nestedspace.in", "www.nestedspace.in"].includes(win.location.hostname) ||
    (debug && ["localhost", "127.0.0.1"].includes(win.location.hostname));

  try {
    if (doc.referrer) referrer = new URL(doc.referrer).origin + "/";
  } catch { /* Ignore malformed referrers. */ }

  function getChoice(): AnalyticsChoice | null {
    if (storageUnavailable) return memoryChoice;
    try {
      const saved = JSON.parse(win.localStorage.getItem(consentKey) ?? "null");
      return saved && saved.expires > Date.now() &&
        ["granted", "denied"].includes(saved.choice) ? saved.choice : null;
    } catch {
      storageUnavailable = true;
      return memoryChoice;
    }
  }

  function clearCookies() {
    const domains = ["", win.location.hostname, `.${win.location.hostname}`, ".nestedspace.in"];
    for (const item of doc.cookie.split(";")) {
      const name = item.trim().split("=")[0];
      if (name === "_ga" || name.startsWith("_ga_")) {
        for (const domain of domains) {
          doc.cookie = `${name}=; Max-Age=0; path=/;${domain ? ` domain=${domain};` : ""}`;
        }
      }
    }
  }

  function initialize() {
    if (!enabledHost || getChoice() !== "granted") return false;
    win[`ga-disable-${measurementId}`] = false;
    if (initialized) return true;
    initialized = true;
    win.dataLayer = win.dataLayer || [];
    win.gtag = function (..._args: unknown[]) { win.dataLayer!.push(arguments); };
    win.gtag("consent", "default", {
      analytics_storage: "granted", ad_storage: "denied",
      ad_user_data: "denied", ad_personalization: "denied",
    });
    win.gtag("js", new Date());
    win.gtag("config", measurementId, {
      send_page_view: false,
      allow_google_signals: false,
      allow_ad_personalization_signals: false,
      cookie_expires: 60 * 60 * 24 * 180,
      page_location: currentPage?.page_location ?? "https://nestedspace.in/",
      page_referrer: referrer,
      ...(debug ? { debug_mode: true } : {}),
    });
    const script = doc.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    script.referrerPolicy = "origin";
    doc.head.appendChild(script);
    return true;
  }

  function sendPage() {
    if (!currentPage || !initialize() || currentPage.page_location === lastPage) return;
    win.gtag!("set", { ...currentPage, page_referrer: referrer });
    win.gtag!("event", "page_view", {
      ...currentPage, page_referrer: referrer,
      ...(debug ? { debug_mode: true } : {}),
    });
    referrer = currentPage.page_location;
    lastPage = currentPage.page_location;
  }

  function setChoice(choice: AnalyticsChoice) {
    memoryChoice = choice;
    try {
      win.localStorage.setItem(consentKey, JSON.stringify({
        choice, expires: Date.now() + consentLifetime,
      }));
    } catch { storageUnavailable = true; }
    syncChoice();
  }

  function syncChoice() {
    if (getChoice() === "granted") {
      sendPage();
    } else {
      win[`ga-disable-${measurementId}`] = true;
      lastPage = "";
      clearCookies();
    }
  }

  function page(title: string, canonical: string) {
    try {
      const url = new URL(canonical);
      if (url.origin !== "https://nestedspace.in") return;
      // Metadata comes from our route configuration, never from form fields or the query string.
      currentPage = { page_title: title, page_location: url.origin + url.pathname };
      sendPage();
    } catch { /* Analytics must never interrupt navigation. */ }
  }

  function contact(action: ContactAction, placement: "contact" | "footer" | "about") {
    if (!currentPage || !initialize()) return;
    // Only explicitly named actions and placements are sent, never link URLs or form values.
    if (!["whatsapp_click", "contact_form_handoff", "phone_click"].includes(action)) return;
    if (!["contact", "footer", "about"].includes(placement)) return;
    win.gtag!("event", action, {
      ...currentPage, placement,
      ...(debug ? { debug_mode: true } : {}),
    });
  }

  return { getChoice, setChoice, syncChoice, page, contact };
}
