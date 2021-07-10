module.exports = {
  siteMetadata: {
    siteTitle: `Best of Balaji`,
    defaultTitle: `Best of Balaji`,
    siteTitleShort: `Best of Balaji`,
    siteDescription: `Health. Truth. Wealth. In that order.`,
    siteUrl: `https://bestofbalaji.com`,
    siteAuthor: `@1729ers`,
    siteImage: `/banner.png`,
    siteLanguage: `en`,
    themeColor: `#F5F5DC`,
    basePath: `/`,
  },
  flags: { PRESERVE_WEBPACK_CACHE: true },
  plugins: [
    {
      resolve: `@rocketseat/gatsby-theme-docs`,
      options: {
        configPath: `src/config`,
        docsPath: `src/docs`,
        repositoryUrl: `https://github.com/OdysLam/balajis-almanack`,
        baseDir: `/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Best of Balaji`,
        short_name: `BoB`,
        start_url: `/`,
        background_color: `#ffffff`,
        display: `standalone`,
        icon: `static/favicon.jpeg`,
      },
    },
    `gatsby-plugin-sitemap`,
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: `YOUR_ANALYTICS_ID`,
    //   },
    // },
    `gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://rocketdocs.netlify.app`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
