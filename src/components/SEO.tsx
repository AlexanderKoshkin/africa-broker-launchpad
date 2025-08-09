import { Helmet } from "react-helmet-async";

type SEOProps = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  jsonLd?: Record<string, any> | Record<string, any>[];
};

const BASE_URL = "https://www.africagrowthadvisors.com"; // Replace on deploy

export default function SEO({ title, description, path = "/", image, jsonLd }: SEOProps) {
  const url = `${BASE_URL}${path}`;
  const fullTitle = `${title}`;
  const ld = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      {image && <meta property="og:image" content={image} />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}

      {ld.map((obj, i) => (
        <script key={i} type="application/ld+json">{JSON.stringify(obj)}</script>
      ))}
    </Helmet>
  );
}
