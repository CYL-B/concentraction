/*https://www.apollographql.com/docs/react/api/link/introduction*/
import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  ApolloLink,
  from,
} from "@apollo/client";

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
      authorization: token,
      ...headers,
    },
  }
  
));
  return forward(operation);
});

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
