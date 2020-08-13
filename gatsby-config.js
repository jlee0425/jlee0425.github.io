require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})
module.exports = {
  siteMetadata: {
    title: `Jake Lee`,
    title_short: `jlee`,
    description: `Jake Lee's Portfolio`,
    author: `@jlee0425`
  },
  plugins: [
    'gatsby-plugin-layout',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `home`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`
      }
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Roboto`,
            variants: [`400`, `700`]
          }
        ]
      }
    },
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: 'jlee0425',
        accessToken: `${process.env.API_KEY}`,
        linkResolver: ({ node, key, value }) => post => `/projects/${post.uid}`,
        schemas: {
          project_detail: require('./src/schemas/project_detail.json')
        },
        shouldDownloadImage: ({ node, key, value }) => true
      }
    }
  ]
}