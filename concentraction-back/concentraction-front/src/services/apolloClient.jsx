import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

//connect the ApolloClient instance with the GraphQL API.
const httpLink = createHttpLink({
  uri: "http://localhost:5050/",
});

//uri specifies the URL of our GraphQL server.

export const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});
