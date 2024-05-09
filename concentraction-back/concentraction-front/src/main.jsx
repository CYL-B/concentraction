import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

//Apollo import
import {ApolloProvider} from "@apollo/client";
import {apolloClient} from "./services/apolloClient.jsx";

//router import
import { RouterProvider } from "react-router-dom";
import { routerNav } from "./services/react-router-dom.jsx";

//Redux import
import {Provider} from 'react-redux';
// import {store} from './store.js';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={routerNav} >
    <ApolloProvider client={apolloClient}>
      <App />
    </ApolloProvider>
    </RouterProvider>
  </React.StrictMode>
);
