type SchemaNode = Record<string, unknown>;

export const officialSocialProfiles: Readonly<{
  instagram: string;
  linkedin: string;
}>;

export const businessEntity: Readonly<{
  name: string;
  legalName: string;
  brandName: string;
  website: string;
  homeUrl: string;
  logoUrl: string;
  telephone: string;
  businessType: string;
  address: Readonly<{
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    addressCountry: string;
  }>;
  serviceArea: readonly string[];
  serviceAreaText: string;
  serviceAreaSentence: string;
  customersCanVisitOffice: boolean;
  businessHours: SchemaNode | readonly SchemaNode[] | null;
  googleMapsUrl: string | null;
  googleBusinessProfileUrl: string | null;
  socialProfiles: readonly string[];
}>;

export const siteUrl: string;
export const socialImage: string;
export function getCanonicalUrl(path?: string): string;
export function getTelephoneHref(): string;
export function getBusinessAddressText(): string;
export function getPostalAddressSchema(): SchemaNode;
export function getAreaServedSchema(): SchemaNode[];
export function getOrganizationSchema(): SchemaNode;
export function getLocalBusinessSchema(): SchemaNode;
export function getWebSiteSchema(): SchemaNode;
export function getBusinessEntityGraph(): SchemaNode[];
