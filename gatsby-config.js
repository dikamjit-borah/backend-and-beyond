/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Backend & Beyond`,
    description: `We build custom SaaS platforms, AI agents, and full-stack web applications. Backend & Beyond is a software engineering studio that turns ideas into production systems.`,
    siteUrl: `https://backendandbeyond.com`,
    twitterHandle: `@backendandbeyond`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/`,
      },
    },
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        // add multiple tracking IDs and a pageview event will be fired for all of them.
        trackingIds: ["G-XXXXXXXXXX"],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: ["/preview/**", "/do-not-track/me/too/"],
        },
      },
    },
  ],
};
