# Nested Space SEO baseline — 11 September 2026

Status: Search Console baseline recorded. Google Analytics account, property and web stream created with the user's approval. Tracking and visitor privacy controls are implemented locally on `codex/seo-baseline-tracking`. Google has received local test page views, a form-handoff event and a direct WhatsApp-click event. Publication and verification on the live website remain; Step 1 is not yet fully complete.

This report records observations from the signed-in Google Search Console and Analytics interfaces, local source files, and browser testing. The live website has not been changed. Optional Analytics email subscriptions were declined, and Google's Analytics Terms of Service and Data Processing Terms were accepted, with the user's explicit approval.

## Search visibility

Property: `sc-domain:nestedspace.in`.

Source: [Search Console Performance](https://search.google.com/search-console/performance/search-analytics?resource_id=sc-domain%3Anestedspace.in).

The selected report used **3 months**, search type **Web**, with no additional visible filters. The chart accessibility description covered 18 August–8 September 2026. The interface reported its last update as 5.5 hours ago at inspection time.

| Metric | Reported value |
| --- | ---: |
| Total clicks | 6 |
| Total impressions | 28 |
| Average CTR | 21.4% |
| Average position | 9.7 |

These are small-sample, property-wide figures. They do not establish strong rankings for commercial searches, a stable click-through rate, or a website conversion rate.

### Visible query rows

| Query | Clicks | Impressions |
| --- | ---: | ---: |
| nested spaces | 0 | 3 |
| nested | 0 | 2 |
| small business website bangalore | 0 | 2 |
| nested company | 0 | 1 |

Only these four query rows were visible. They do not explain all aggregate activity. Query-specific positions, CTRs, and query-to-page associations were not inspected. The Bangalore query is a research candidate, not sufficient evidence for choosing a market or creating another page.

### Visible page rows

| Page | Clicks | Impressions |
| --- | ---: | ---: |
| http://nestedspace.in/ | 6 | 13 |
| https://nestedspace.in/ | 0 | 21 |
| https://nestedspace.in/website-development-bangalore | 0 | 3 |

The page and property figures above are reproduced independently as displayed, rather than recalculated from each other. Historical HTTP activity alone does not prove a current redirect or canonical defect.

## Indexing and sitemap

Source: [Page indexing](https://search.google.com/search-console/index?resource_id=sc-domain%3Anestedspace.in), last updated 4 September 2026.

- Indexed: **17**.
- Not indexed summary: **0**.
- The summary table still showed one historical “Discovered - currently not indexed” row with a count of 1. Opening that report showed **0 affected pages** and no example URL. Do not treat that stale row as a confirmed current exclusion.
- This coverage snapshot is not a live inspection of every site route.

Source: [Sitemaps](https://search.google.com/search-console/sitemaps?resource_id=sc-domain%3Anestedspace.in).

| Field | Observed value |
| --- | --- |
| Sitemap | https://nestedspace.in/sitemap.xml |
| Submitted | 19 August 2026 |
| Last read | 7 September 2026 |
| Status | Success |
| Discovered pages | 16 |

## Homepage URL inspection

Inspected URL: `https://nestedspace.in/`. These results came from Google's indexed version; the “Test live URL” action was not run.

- URL is on Google; page is indexed.
- Last crawl: **11 September 2026, 4:00:59 PM**, as displayed by Search Console.
- Crawled as Googlebot smartphone.
- Crawling and indexing allowed: Yes.
- Page fetch: Successful.
- User-declared canonical: `https://nestedspace.in/`.
- Google-selected canonical: Inspected URL, matching the HTTPS homepage.
- HTTPS report link: Page is served over HTTPS.

## Visitor analytics and enquiries

- The Google account used for Search Console also has access to Analytics. Its picker showed one Firebase account with six app properties; no property named Nested Space was present. Searching Analytics properties for “nested” returned no results. This does not rule out an existing setup under another Google account or an unrelated property name.
- Google Analytics initially blocked inspection with an email-subscription preference dialog. The user approved “Uncheck all and save”; the choice was saved and the dashboard became accessible.
- A second browser session could not be inspected reliably because its computer-use window state was unavailable. The user explicitly chose to set up Nested Space in the same Google account as Search Console.
- No common Analytics, Tag Manager, Plausible, PostHog, or Umami integration was found in the checked local source, public files, homepage HTML, or package manifest. This source check alone does not prove the deployed site lacks externally injected tracking.
- `src/components/ContactPage.tsx` opens a prefilled WhatsApp URL on form submission. It does not itself send the WhatsApp message or save an enquiry to a backend.
- No enquiry was sent during the audit.
- Historical website sessions and contact-action counts were not available. Actual enquiry counts, qualified leads and conversion rate remain unverified; do not report unknown values as zero.

## Interpretation and remaining Step 1 work

The site is discoverable and indexed. The measured search exposure is very small. Low organic visibility is an evidenced constraint; the available data is insufficient to diagnose the site's conversion performance or identify all reasons for the absence of leads.

Remaining: publish the reviewed integration, verify production page views and contact events, and begin recording received enquiries separately. Local test traffic must not be presented as customer visits or leads.

### Created Analytics resources

[Open Analytics](https://analytics.google.com/analytics/web/#/a407669164p553803540/reports/intelligenthome).

| Resource | Value |
| --- | --- |
| Account | Nested Space — `407669164` |
| Property | Nested Space — Website — `553803540` |
| Web stream | Nested Space Website — `15762043340` |
| Website | https://nestedspace.in |
| Measurement ID | `G-F382QF3RNC` |
| Timezone / currency | India, GMT+05:30 / INR |
| Industry / business size | Business & Industrial / 1–10 employees |
| Business objectives | Generate leads; understand web/app traffic |

All four optional account-data-sharing options are disabled. Enhanced measurement is disabled to avoid duplicate SPA page views and automatic collection of form/outbound-link details. Advertising personalization and Google signals are disabled in the integration. No Analytics API secret was created.

### Implemented measurement

| Event / measurement | Meaning | Limits |
| --- | --- | --- |
| `page_view` | Initial load or client-side navigation after opting in | Repeated renders and fragment changes do not add views; canonical page URLs omit queries and fragments |
| `whatsapp_click` | Direct WhatsApp contact button activated | Contact intent, not a sent message |
| `contact_form_handoff` | Form passes its existing browser validation and the website attempts to open WhatsApp | Does not confirm popup success, message delivery, or a qualified lead |
| `phone_click` | Contact/footer telephone link activated | Does not confirm a connected call |
| Actual enquiry | Message or call received by the team | Record separately in the private enquiry log |
| Qualified lead | Received enquiry fits the service, scope and buying criteria | Assess separately; never infer from a button click |

Analytics loads only after the visitor allows it. The footer's **Privacy & cookies** control lets them reopen settings and withdraw permission. The six-month choice persists locally; withdrawal stops future measurement and clears the site's GA cookies. The notice explains Google Analytics and the WhatsApp handoff. No custom event includes names, phone numbers, business/form contents, messages, or prefilled WhatsApp URLs. Referrers are reduced to their origin and route metadata uses fixed canonical URLs.

Ordinary local development and unrelated preview hosts do not send events. Explicit development testing uses `http://127.0.0.1:3000/?analytics_debug=1`. This debug flag is disabled in production builds. Local events use canonical production page labels, so identify this session's traffic as tests when reading reports. No developer-traffic exclusion filter or Search Console link has been configured.

### Verification

- Production build: passed.
- Analytics tests: six passed, covering consent, route deduplication/revisits, event allowlists, URL sanitization, withdrawal, cookie cleanup, storage failure and local debug restrictions.
- Strict TypeScript check of new analytics/privacy modules: passed. The full project has pre-existing TypeScript errors in unrelated components and untyped JavaScript data imports; these were reproduced from the original commit.
- Safari: exercised decline, reopening settings, allowance, homepage/pricing navigation, form handoff and direct WhatsApp link. The test used synthetic form text. No WhatsApp message was sent and no phone call was made.
- Google Analytics realtime: received four local test page views (homepage and pricing), one `contact_form_handoff` and one `whatsapp_click`. The inspected form event exposed only automatic technical fields plus `page_location`, `page_title` and `placement`; its page URL was `https://nestedspace.in/`. These counts are tests, not customer traffic or leads.
- The phone-event dispatch is covered by the automated client test; a real telephone action was not invoked.
- Live production deployment and production collection have not been verified.

### Recording actual enquiries

Keep customer records in a private business sheet or CRM, **not in this repository or Google Analytics**. Start with these columns:

| Received date | Private enquiry ID | Channel | Source (if known) | Service requested | Qualified? | Stage | Next follow-up |
| --- | --- | --- | --- | --- | --- | --- | --- |

Add a row only when a real message or call arrives. Ask how the customer found Nested Space when practical; otherwise record “unknown.” Use stages such as new, replied, discussing scope, proposal, won and lost. Count received enquiries, qualified leads and wins separately each week. Keep test entries out. A click count is not an enquiry count, and unknown historical counts are not zero.

## Step 2

Choose the first customer segment and geographic market, then research its buying questions and search terms. A starting hypothesis based on the site's offer is small businesses in Kozhikode/Kerala seeking a first website. Validate the segment, service fit, and search competition before mapping target searches to existing pages. Do not infer a winning keyword or market from two impressions.

Subsequent owner decision: focus on **small businesses across India**. The completed initial [Step 2 research and page plan](./seo-step-2-keyword-plan-2026-09-11.md) uses that confirmed market and supersedes the local starting hypothesis above.
