import { createAnalyticsClient } from "./client";

// Local tests require an explicit URL flag. Normal development never sends analytics.
const isBrowser = typeof window !== "undefined";
const debug = isBrowser && import.meta.env.DEV &&
  new URLSearchParams(window.location.search).get("analytics_debug") === "1";
export const analytics: ReturnType<typeof createAnalyticsClient> = isBrowser
  ? createAnalyticsClient(window, document, debug)
  : { getChoice: () => null, setChoice: () => {}, syncChoice: () => {}, page: () => {}, contact: () => {} };
