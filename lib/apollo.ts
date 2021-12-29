import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import getConfig from 'next/config';

import { getToken } from '../utils/cookie';

const { publicRuntimeConfig } = getConfig();

const httpLink = createHttpLink({
  uri: `${publicRuntimeConfig.NEXT_PUBLIC_HTTP_PROTOCOL}://${publicRuntimeConfig.NEXT_PUBLIC_GRAPHQL_URI}/graphql`,
});

const authLink = setContext((_, { headers }) => {
  const token = getToken();

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

export const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
