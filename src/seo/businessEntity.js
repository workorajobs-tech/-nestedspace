const website = "https://nestedspace.in";

export const businessEntity = Object.freeze({
  name: "Nested Space",
  legalName: "Nested Space",
  brandName: "Nested Space",
  website,
  homeUrl: `${website}/`,
  logoUrl: `${website}/og-image.png`,
  telephone: "+91 9656838767",
  businessType: "Software company",
  address: Object.freeze({
    streetAddress: "Hilite Business Park",
    addressLocality: "Kozhikode",
    addressRegion: "Kerala",
    addressCountry: "India",
  }),
  serviceArea: Object.freeze(["Kerala", "India"]),
  serviceAreaText: "Kerala, India",
  serviceAreaSentence: "Serving businesses across Kerala and throughout India.",
  customersCanVisitOffice: true,
  businessHours: null,
  googleMapsUrl: null,
  googleBusinessProfileUrl: null,
  socialProfiles: Object.freeze([]),
});

export const siteUrl = businessEntity.website;
export const socialImage = businessEntity.logoUrl;

export const getCanonicalUrl = (path = "/") => `${siteUrl}${path === "/" ? "/" : path}`;

export const getTelephoneHref = () => `tel:${businessEntity.telephone.replace(/\s/g, "")}`;

export const getBusinessAddressText = () =>
  `${businessEntity.address.streetAddress}, ${businessEntity.address.addressLocality}, ${businessEntity.address.addressRegion}, ${businessEntity.address.addressCountry}`;

export const getPostalAddressSchema = () => ({
  "@type": "PostalAddress",
  streetAddress: businessEntity.address.streetAddress,
  addressLocality: businessEntity.address.addressLocality,
  addressRegion: businessEntity.address.addressRegion,
  addressCountry: businessEntity.address.addressCountry,
});

export const getAreaServedSchema = () => [
  {
    "@type": "AdministrativeArea",
    name: "Kerala",
  },
  {
    "@type": "Country",
    name: "India",
  },
];

export const getOrganizationSchema = () => {
  const schema = {
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: businessEntity.name,
    legalName: businessEntity.legalName,
    url: businessEntity.homeUrl,
    logo: businessEntity.logoUrl,
    telephone: businessEntity.telephone,
    address: getPostalAddressSchema(),
    areaServed: getAreaServedSchema(),
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: businessEntity.telephone,
        contactType: "customer enquiries",
        areaServed: businessEntity.serviceAreaText,
      },
    ],
  };

  if (businessEntity.socialProfiles.length > 0) {
    schema.sameAs = [...businessEntity.socialProfiles];
  }

  return schema;
};

export const getLocalBusinessSchema = () => {
  const schema = {
    "@type": ["LocalBusiness", "SoftwareCompany"],
    "@id": `${siteUrl}/#local-business`,
    name: businessEntity.name,
    legalName: businessEntity.legalName,
    url: businessEntity.homeUrl,
    image: businessEntity.logoUrl,
    telephone: businessEntity.telephone,
    address: getPostalAddressSchema(),
    areaServed: getAreaServedSchema(),
    description:
      "Nested Space is a software company based in Kozhikode, Kerala, serving businesses across Kerala and throughout India.",
    parentOrganization: {
      "@id": `${siteUrl}/#organization`,
    },
  };

  if (businessEntity.businessHours) {
    schema.openingHoursSpecification = businessEntity.businessHours;
  }

  if (businessEntity.googleMapsUrl) {
    schema.hasMap = businessEntity.googleMapsUrl;
  }

  return schema;
};

export const getWebSiteSchema = () => ({
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  url: businessEntity.homeUrl,
  name: businessEntity.name,
  publisher: {
    "@id": `${siteUrl}/#organization`,
  },
});

export const getBusinessEntityGraph = () => [
  getOrganizationSchema(),
  getLocalBusinessSchema(),
  getWebSiteSchema(),
];
