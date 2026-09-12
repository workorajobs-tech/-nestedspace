# Step 6 — Project evidence and business information

Status: implemented and reviewed locally on 12 September 2026. Not committed, pushed or published. Live search visibility and customer outcomes have not been established by these changes.

## What visitors can now assess

- `/samples#big-bangs-case-study` explains the Big Bangs demonstration project: design focus, website format, visual direction and a browse → product → Instagram enquiry journey. It includes the existing website screenshot and links to the live collection and product page.
- The homepage project card, starter service page and About page link directly to this story. The story links back to the team and enquiry form.
- Big Bangs is explicitly labelled a demonstration project. No paid client relationship, delivery statistic, testimonial or sales result is claimed. The story states that enquiries and sales have not been measured for this case study.
- Sweet Crumbs Bakery, Urban Threads and FinEdge Studio are labelled illustrative concepts. The former “48h delivery” and “Lead ready” badges were replaced with design-focus labels, and the misleading “WhatsApp checkout” label was removed. The miniature previews are decorative; the actual enquiry actions are normal links.
- The existing About page and founder portraits are preserved. A new business details section uses the shared business information for Nested Space’s name, Kozhikode/Kerala location, telephone number and existing company social profiles, alongside the agreed India-wide small-business focus.
- The About-page telephone link uses the existing consent-controlled phone-click measurement, with an `about` placement. It records a contact action, not a received lead.
- Samples metadata and the keyword map now describe the demonstration case study and illustrative concepts consistently.

## Evidence checked

The following first-party demo pages were inspected in the browser on 12 September 2026:

| Page | Observed evidence |
| --- | --- |
| [Big Bangs homepage](https://big-bangs.pages.dev/) | Navy/lime design, product showcase, motion control, collection and product links |
| [Jackets collection](https://big-bangs.pages.dev/shop?category=jackets) | Jackets category selected, four matching product cards; choosing Denim changed the selection and showed the Baggy Blue Denim product |
| [Amber Colourblock Windbreaker](https://big-bangs.pages.dev/product/amber-hooded-windbreaker) | Product description, colour, two-image gallery, fit details, related products and Instagram enquiry link; next-image control changed the displayed image |

The existing `public/showcase/big-bangs-poster.webp` was visually inspected before reuse. The caption identifies it as a preview from the demonstration website. These observations support the visible feature descriptions, not a complete audit of the external demo.

Founder names and roles came from the existing About and Contact pages. Business information and company profile destinations came from `src/seo/businessEntity.js`; this work does not constitute independent verification of business registration, office access, profile ownership or Business Profile eligibility. No office hours, awards, ratings or additional founder biographies were invented.

Google’s [people-first content guidance](https://developers.google.com/search/docs/fundamentals/creating-helpful-content) informed the emphasis on original examples and clear information about who is behind the website. This is not a ranking guarantee.

## Validation

- Production build passed: 19 indexable routes plus a custom 404, with rendered content, page metadata, local assets, sitemap and 358 internal links checked.
- Browser checks covered desktop at 1280px and phones at 390px and 320px. New sections remained within the viewport, and the project screenshot loaded correctly.
- Homepage → project story → About and sample → contact-form navigation worked. The contact form became available after hydration. No messages or calls were sent.
- A browser hydration warning revealed that the long-running preview server still had a route list from before About was added. Direct `/about` incorrectly returned the 404 document. Restarting the preview server with the current catalog resolved it: all 19 public routes now return 200 with content, and an unknown route returns 404. A fresh About load and navigation to the story reported no browser errors or warnings. The preview uses the final production build.
- Six analytics tests passed, including consent restrictions, safe event data and the new About-page placement. Ordinary localhost browsing does not send analytics.
- Type checking remains blocked by 33 existing diagnostics. Adding declarations for the shared business information removed three earlier diagnostics; no new diagnostics remain from this step.
- The current ESLint configuration covers JavaScript/JSX only. JavaScript metadata lint passed; TSX files are not covered by that lint configuration. Changed components were checked through TypeScript diagnostics, the production build and browser review.
- `git diff --check` passed.

## Current offer and next work

The offer remains **₹2,000 for the starter website, hosting included, only the domain extra**, with no stated one-page limit. Larger catalogue features in the demo are examples to discuss when agreeing scope, not a promise that every demo feature is included in the starter package. See [current starter terms](./starter-offer-terms.md).

Step 7 is measured mobile speed and usability. Real customer case studies can be added once there is a completed engagement, permission to share it and evidence for any stated outcome. Publishing the reviewed website, enforcing HTTPS and verifying live analytics/Search Console remain pending from earlier steps.
