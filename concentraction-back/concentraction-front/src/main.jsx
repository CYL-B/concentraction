import React from 'react'
import App from './App.jsx'
import './index.css'

//Apollo import
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

//uri specifies the URL of our GraphQL server.
const client = new ApolloClient({
  uri: 'https://flyby-router-demo.herokuapp.com/',
  cache: new InMemoryCache(),
});


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApolloProvider>
    <App />
    </ApolloProvider>
  </React.StrictMode>,
)