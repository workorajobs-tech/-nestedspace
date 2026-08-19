import { useEffect } from "react";

type MetaDescriptor = {
  name?: string;
  property?: string;
  content: string;
};

interface SeoProps {
  title: string;
  description: string;
  canonical: string;
  openGraphTitle?: string;
  openGraphDescription?: string;
  openGraphImage?: string;
  structuredData?: object;
}

const setMeta = ({ name, property, content }: MetaDescriptor) => {
  const selector = name ? `meta[name="${name}"]` : `meta[property="${property}"]`;
  let element = document.head.querySelector<HTMLMetaElement>(selector);

  if (!element) {
    element = document.createElement("meta");
    if (name) {
      element.setAttribute("name", name);
    }
    if (property) {
      element.setAttribute("property", property);
    }
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
};

export default function Seo({
  title,
  description,
  canonical,
  openGraphTitle = title,
  openGraphDescription = description,
  openGraphImage = "https://nestedspace.in/og-image.png",
  structuredData,
}: SeoProps) {
  useEffect(() => {
    document.title = title;

    setMeta({ name: "description", content: description });
    setMeta({ name: "robots", content: "index, follow" });
    setMeta({ property: "og:title", content: openGraphTitle });
    setMeta({ property: "og:description", content: openGraphDescription });
    setMeta({ property: "og:url", content: canonical });
    setMeta({ property: "og:type", content: "website" });
    setMeta({ property: "og:image", content: openGraphImage });
    setMeta({ name: "twitter:card", content: "summary_large_image" });
    setMeta({ name: "twitter:title", content: openGraphTitle });
    setMeta({ name: "twitter:description", content: openGraphDescription });
    setMeta({ name: "twitter:image", content: openGraphImage });

    let canonicalElement = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonicalElement) {
      canonicalElement = document.createElement("link");
      canonicalElement.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalElement);
    }
    canonicalElement.setAttribute("href", canonical);

    const scriptId = "page-structured-data";
    document.getElementById(scriptId)?.remove();

    if (structuredData) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }
  }, [canonical, description, openGraphDescription, openGraphImage, openGraphTitle, structuredData, title]);

  return null;
}
