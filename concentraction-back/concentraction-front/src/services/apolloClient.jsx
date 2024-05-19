import { ApolloClient, InMemoryCache, createHttpLink} from "@apollo/client";
import { setContext } from '@apollo/client/link/context';

//connect the ApolloClient instance with the GraphQL API and .
const httpLink = createHttpLink({
  uri: "http://localhost:5050/",
});

//Add an authorization header to every HTTP request by chaining together Apollo Linkss
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = sessionStorage.getItem("token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

//uri specifies the URL of our GraphQL server.

export const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
