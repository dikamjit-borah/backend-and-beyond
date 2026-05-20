import React from "react";

const SITE_URL    = "https://backendandbeyond.com"; // ← match gatsby-config.js siteUrl
const SITE_NAME   = "Backend & Beyond";
const OG_IMAGE    = `${SITE_URL}/og-image.png`;     // ← add a 1200×630 image at static/og-image.png
const TWITTER     = "@backendandbeyond";

const SEO = ({
  title,
  description,
  pathname = "/",
  noIndex  = false,
}) => {
  const canonical = `${SITE_URL}${pathname}`;

  return (
    <>
      {/* ── Core ─────────────────────────────────────────── */}
      <title>{title}</title>
      <meta name="description"  content={description} />
      <meta name="viewport"     content="width=device-width, initial-scale=1" />
      <meta name="theme-color"  content="#2D0A6B" />
      <link rel="canonical"     href={canonical} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      {/* ── Open Graph ───────────────────────────────────── */}
      <meta property="og:type"        content="website" />
      <meta property="og:url"         content={canonical} />
      <meta property="og:site_name"   content={SITE_NAME} />
      <meta property="og:title"       content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image"       content={OG_IMAGE} />
      <meta property="og:image:width"  content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt"    content={`${SITE_NAME} — ${description}`} />

      {/* ── Twitter Card ─────────────────────────────────── */}
      <meta name="twitter:card"        content="summary_large_image" />
      <meta name="twitter:site"        content={TWITTER} />
      <meta name="twitter:creator"     content={TWITTER} />
      <meta name="twitter:title"       content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image"       content={OG_IMAGE} />
    </>
  );
};

export default SEO;
