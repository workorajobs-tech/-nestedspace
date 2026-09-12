# Nested Space — Step 3: starter website content and enquiry path

**Later owner correction:** The starter is not limited to one page. Hosting is included; only the domain costs extra. [Current starter terms](./starter-offer-terms.md) supersede the earlier offer wording recorded below. Public copy and FAQ data have been updated.

Prepared 12 September 2026. Implemented locally on `codex/seo-baseline-tracking`; not committed, pushed or published. Earlier analytics changes remain in the same working tree.

## Confirmed offer

- Audience: small businesses across India.
- ₹2,000 covers the one-page starter website build. The customer pays domain and hosting separately.
- Updates after completion carry an additional charge. The copy says the charge is agreed for the requested changes; no fixed update fee or free maintenance period was invented.
- The existing offer includes one revision round, a first version within 48 hours after required content is ready, and payment after approval. The copy now distinguishes the first version from the final launch date.
- Source-file ownership and domain/hosting account ownership were not confirmed. No new ownership promises were added.

## Changes ready for review

The existing `/small-business-website-development` page now explains the package, suitable customers, exclusions, content requirements, remote process, pricing and next step. It uses a dedicated responsive layout, a single H1, descriptive links and nine expandable FAQs.

The Big Bangs work example is explicitly labelled a catalogue demo. Its extra features are identified as separately scoped, beyond the starter package. It is not presented as a paid-client result or evidence of lead growth.

The page links to `/pricing#starter-package`, `/samples`, larger service options and the homepage request form. The form's WhatsApp handoff is explained: visitors must review and send the prepared message in WhatsApp.

The pricing page now breaks down the build, domain/hosting and renewal costs, first-version timing, revisions, payment, paid updates and larger requirements. Homepage starter copy and its package link, and the contact FAQ, were aligned with the confirmed terms.

Starter page content and generated metadata share one JSON source. The generated HTML retains its existing URL and canonical, with updated title, description and FAQ data. The keyword map now reflects the India-wide starter focus and includes pricing and samples. The internal link map matches the new starter-page destinations.

A browser check exposed an existing fixed-delay problem with direct section links on lazily loaded pages. Route scrolling now waits for the page to mount inside Suspense before locating the target. Direct loading of the pricing package link was rechecked successfully.

## Verification

- Production build passed. The remaining build warning is the existing outdated Browserslist data notice.
- The new starter component passed an isolated strict TypeScript check. The whole-project check still reports the same 40 diagnostic lines as the earlier check, compared after normalising line numbers; those existing issues are not fixed by this content task.
- Built HTML assertions passed for the title, one canonical, matching structured data and nine FAQs. All six service routes remain unique; the other five retain their generic content fields. Keyword-map title matches the starter content.
- Desktop starter layout and work image checked in Safari. Mobile starter hero and FAQ expansion, pricing details and enquiry-form navigation checked in Brave at a 390px viewport. Desktop pricing and a fresh direct package-link load checked in Brave. The business-website service page still renders its original content.
- `git diff --check` passed. No actual enquiry was sent during these checks.

## Review links and remaining work

With the local development server running:

- [Starter page](http://127.0.0.1:3010/small-business-website-development)
- [Starter pricing details](http://127.0.0.1:3010/pricing#starter-package)

Publication and live tracking verification remain pending. This step does not establish rankings or lead growth. A subsequent technical SEO review should examine rendered indexing, performance and the existing broader service/location pages; the current application still relies on JavaScript for page body rendering.

## Design follow-up — all SEO pages

The owner requested that every SEO page match the current homepage design after reviewing the light starter-page preview. All **six service pages and nine location pages** now use the existing dark space background, shared dark header/footer, readable light text, purple glass-style cards and brand-gradient buttons. The existing homepage, pricing and samples retain their space design.

`SeoPageLayout` reuses the existing background and reduced-motion/pause controls. Each page renders one background canvas. `StarterWebsiteOffer` shares the confirmed package details across all 15 SEO pages. The service and location templates now have breadcrumbs and expandable native FAQs; their FAQ text and structured data remain unchanged. The existing light service-page stylesheet was replaced with the new design, including responsive sections, cards, related links and closing contact panels.

Verification completed on 12 September:

- All 15 routes rendered in the browser at desktop size and at 390px: one H1, one background canvas, correct canonical, dark theme and no horizontal overflow. On phones, the hero becomes one column.
- Starter, business and Malappuram pages also checked at 320px, alongside homepage, pricing and samples; no horizontal overflow.
- Desktop starter and Kozhikode layouts and mobile Hyderabad, pricing and FAQ layouts visually reviewed. Native FAQ expansion works by keyboard and click. The pause button changes state, and mobile navigation opens, navigates to pricing and closes.
- Production build and isolated strict checks for the new layout and starter components passed. All 15 built HTML files retain their expected titles, canonicals and structured data. No runtime console errors were captured in the verification tab.
- Whole-project diagnostics fell from 40 to 38 lines after removing two unused imports; comparison against the earlier output found no new diagnostics. Existing project-wide type issues remain outside this visual change.

All changes remain local and unpublished.
