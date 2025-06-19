
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../pages/theme";
import Router from "next/router";
import NProgress from "nprogress";
import Head from "next/head";
import Layout from "../components/Layout";


function MyApp({ Component, pageProps }) {

  NProgress.configure({ showSpinner: false });
  Router.events.on("routeChangeStart", () => { NProgress.start(); });
  Router.events.on("routeChangeComplete", () => { NProgress.done(); });

  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css" />
      </Head>
      <ChakraProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
