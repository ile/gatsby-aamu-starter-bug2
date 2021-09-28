require('dotenv').config();

const AAMU_HOST = 'https://api.aamu.app/api/v1/graphql/';

module.exports = {
  siteMetadata: {
    title: 'Gatsby Aamu.app starter',
  },
  plugins: [
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/public/static`,
      },
    },
    {
      resolve: 'gatsby-source-graphql',
      options: {
        // Arbitrary name for the remote schema Query type
        typeName: `Aamu`,
        // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
        fieldName: `aamu`,
        // Url to query from
        url: AAMU_HOST,
        headers: {
          "x-api-key": process.env.AAMU_API_KEY
        },
      }
    }
  ],
}
