module.exports = {
  pathPrefix: `/my-portfolio/`, // This path is subpath of your hosting https://domain/portfolio
  siteMetadata: {
    title: `Tev's portfolio`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Tevin Thuku',
        short_name: 'Tev',
        start_url: '/my-portfolio',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'standalone',
        icon: 'src/assets/img/website-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
};
