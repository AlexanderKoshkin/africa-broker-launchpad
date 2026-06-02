import { Helmet } from "react-helmet-async";

type SEOProps = {
  title: string;
  description: string;
  path?: string;
  canonicalUrl?: string;
  image?: string;
  ogImage?: string;
  ogType?: string;
  jsonLd?: Record<string, any> | Record<string, any>[];
};

const BASE_URL = "https://aga-licensing.com";

export default function SEO({
  title,
  description,
  path = "/",
  canonicalUrl,
  image,
  ogImage,
  ogType = "website",
  jsonLd,
}: SEOProps) {
  // Always canonicalize to the new domain, even if a legacy full URL is passed in.
  let canonicalPath = path;
  if (canonicalUrl) {
    try {
      canonicalPath = new URL(canonicalUrl).pathname || "/";
    } catch {
      canonicalPath = canonicalUrl.startsWith("/") ? canonicalUrl : `/${canonicalUrl}`;
    }
  }
  const url = `${BASE_URL}${canonicalPath}`;
  const socialImage = ogImage ?? image;
  const ld = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={url} />
      {socialImage && <meta property="og:image" content={socialImage} />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {socialImage && <meta name="twitter:image" content={socialImage} />}

      {ld.map((obj, i) => (
        <script key={i} type="application/ld+json">{JSON.stringify(obj)}</script>
      ))}
    </Helmet>
  );
}
