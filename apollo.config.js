require('dotenv').config();

module.exports = {
  client: {
    addTypename: true,
    excludes: ['**/node_modules/**'],
    includes: ['./**/*.{ts, tsx}'],
    service: {
      name: 'treelab-api',
      url: `${process.env.NEXT_PUBLIC_HTTP_PROTOCOL}://${process.env.NEXT_PUBLIC_GRAPHQL_URI}/graphql`,
    },
    tagName: 'gql',
    target: 'typescript',
  },
};
