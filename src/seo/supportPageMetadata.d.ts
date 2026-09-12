interface PageMetadata {
  title: string;
  description: string;
  canonical: string;
  openGraphTitle?: string;
  openGraphDescription?: string;
  robots?: string;
}
export const pricingPageMetadata: PageMetadata;
export const aboutPageMetadata: PageMetadata;
export const samplesPageMetadata: PageMetadata;
export const notFoundMetadata: PageMetadata;
export function getSupportPageHtml(metadata: PageMetadata): string;
