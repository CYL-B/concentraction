import {
    ApolloClient,
    InMemoryCache,
  } from "@apollo/client";

  //uri specifies the URL of our GraphQL server.
export const apolloClient = new ApolloClient({
    uri: "https://flyby-router-demo.herokuapp.com/",
    cache: new InMemoryCache(),
  });
  