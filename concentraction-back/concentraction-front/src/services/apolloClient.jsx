/*https://www.apollographql.com/docs/react/api/link/introduction*/
import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  ApolloLink,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";

//connect the ApolloClient instance with the GraphQL API and .
const httpLink = createHttpLink({
  uri: "http://localhost:5050/graphql",
});

//Add an authorization header to every HTTP request by chaining together Apollo Linkss
const authLink = new ApolloLink((operation, forward) => {
  // get the authentication token from local storage if it exists
  const token = sessionStorage.getItem("token");
  console.log("tokenfront", token);

  operation.setContext(({ headers }) => ({
    // return the headers to the context
    headers: {
      authorization: token ? token : "",
      ...headers,
    },
  }));
  return forward(operation);
});

// const errorLink = onError(({ graphQLErrors, networkError }) => {
//   if (graphQLErrors)
//     graphQLErrors.forEach(({ message, locations, path }) =>
//       console.log(
//         `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
//       )
//     );
//   if (networkError) console.error(`[Network error]: ${networkError}`);
// });


// const authLink = new ApolloLink((operation, forward) =>
//   operation.setContext((_, { headers }) => {
//     // get the authentication token from local storage if it exists
//     const token = sessionStorage.getItem("token")
//     ;
//     // return the headers to the context
//     return (
//       forward(operation)
//     );
//   })
// );

//uri specifies the URL of our GraphQL server.

export const apolloClient = new ApolloClient({
  link: from([authLink, httpLink]),
  cache: new InMemoryCache(),
  connectToDevTools: true,
});
