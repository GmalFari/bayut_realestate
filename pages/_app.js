import Router from "next/router";
import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from '../components/Layout';
import "nprogress/nprogress.css";
import NProgress  from "nprogress";
import { useEffect } from "react";

import "./carousel.scss";
function MyApp({Component,pageProps,router}){
    useEffect(() => {
        const handleRouteStart = () => NProgress.start();
        const handleRouteDone = () => NProgress.done();
        router.events.on("routeChangeStart", handleRouteStart);
        router.events.on("routeChangeComplete", handleRouteDone);
        router.events.on("routeChangeError", handleRouteDone);
     
        return () => {
          // Make sure to remove the event handler on unmount!
          router.events.off("routeChangeStart", handleRouteStart);
          router.events.off("routeChangeComplete", handleRouteDone);
          router.events.off("routeChangeError", handleRouteDone);
        };
      }, [router]);
    return (
        
        <ChakraProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ChakraProvider>
    );
}


export default MyApp