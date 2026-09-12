# Nested Space — Step 5: clear offer and easier enquiries

**Owner correction after review:** The offer now reads “Starter website · ₹2,000 build” and “Hosting included. Only the domain costs extra.” The one-page restriction was removed from the homepage, pricing, starter content, shared SEO-page cards, FAQs and metadata. [Current starter terms](./starter-offer-terms.md) supersede the earlier offer wording recorded below.

12 September 2026. **Implemented and reviewed locally; not published.** This follows Step 5 of the original roadmap: make the offer easy to understand and enquire about. The starter's detailed scope and costs were already clarified in Step 3; this step focuses on the homepage and mobile contact journey.

## What changed

- The homepage opening identifies the audience as small businesses across India and describes a website's practical purpose. It shows the **₹2,000 one-page build** and **domain/hosting extra** before the main enquiry button. The price links directly to the package details. The existing design, work preview and payment-after-approval reassurance remain.
- The form now has **three fields instead of five**: name and business/project name required, website details optional. WhatsApp number and city were removed. The conversation already continues on WhatsApp, so entering that number again is unnecessary for this first enquiry.
- Persistent labels identify required and optional fields. Autofill remains available for name and business. Blank-only required values are rejected. Text limits prevent unusually long WhatsApp drafts.
- **Chat on WhatsApp** appears above the form, including on mobile. Visitors can start a conversation without completing it. The generic chat draft asks to discuss a business website and no longer implies an unconditional 48-hour launch.
- The contact area includes a short package reminder: build price, separate domain/hosting costs, first-version timing after content is ready, review before payment and paid later updates. Phone contact and detailed pricing remain available.
- After a valid form handoff, the website explains that the visitor must send the prepared message in WhatsApp. It provides a retry link and phone option. It does not say an enquiry has been sent or received. Editing a field removes the previous handoff notice.
- Contact FAQs use native expandable details, making their answers present in the static HTML and operable by keyboard.
- The prerendered form is disabled until its JavaScript handler is ready, preventing a default GET submission from putting enquiry entries into the page URL. Direct chat and phone links remain available without JavaScript, with an explanatory no-script message.

The decisions follow [web.dev's form-label guidance](https://web.dev/learn/forms/design-basics) and the official [WhatsApp click-to-chat format](https://faq.whatsapp.com/5913398998672934). Better usability does not itself establish higher rankings or more leads; [Google's page-experience guidance](https://developers.google.com/search/docs/appearance/page-experience) distinguishes user experience from guaranteed search outcomes.

## Checks

- Production build passed, including the static SEO checks on all 18 public pages and the custom error page. All **297 internal links** resolve to valid pages or section IDs.
- Homepage, contact area, pricing and the starter page checked at 390px and 320px widths without horizontal overflow. Desktop homepage and contact layout visually reviewed. At 390×844, the price, extra-cost note and primary enquiry button were visible in the initial screen.
- Browser validation stopped both empty and blank-only required fields. A synthetic handoff opened the correct WhatsApp destination with trimmed values and correctly encoded ampersand, rupee symbol and punctuation. The test tab was closed without sending a message; test entries were cleared.
- Direct chat appears before the form on mobile. The price link, pricing-to-contact navigation, native FAQ interaction and handoff-notice reset were checked.
- Static HTML contains disabled form controls and a working direct-chat link. Hydration enables the form; no hydration errors were reported in the review tab.
- All six existing analytics tests passed. The normal local preview loaded no Google Analytics script. Contact-action events remain distinct from received messages, and form values are not passed to analytics.
- `git diff --check` passed. The full-project type check still has 36 existing diagnostics and no new diagnostics; it is not a clean full-project type check.

## Remaining

Publish only when the combined changes are ready to go live. Earlier Steps 1 and 4 still require production tracking checks, HTTPS enforcement and live route/sitemap verification. After publication, compare visits, contact actions and actual received enquiries; this task did not measure a conversion-rate improvement.

The next original roadmap step is **Step 6: build trust with evidence**, using clearly labelled project case studies and verified business information.

[Homepage preview](http://127.0.0.1:3011/) · [Enquiry preview](http://127.0.0.1:3011/#contact-section)
