import "../styles/globals.css";
import React from "react";
import { store } from "../store";
import { Provider } from "react-redux";
import Layout from "../components/layout";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout
      {...pageProps}>
      <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
