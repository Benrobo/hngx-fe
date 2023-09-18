import "../styles/globals.css";
import "../styles/nprogress.css";
import nProgress from "nprogress";
import { ChakraProvider } from "@chakra-ui/react";
import { ppB, ppEB, ppReg } from "../config/fonts";
import { Router } from "next/router";
import ErrorBoundary from "../components/ErrorBoundary";
import { ClerkProvider } from "@clerk/nextjs";
import { DataContextProvider } from "../context/DataContext";

// nprogress loader
Router.events.on("routeChangeStart", nProgress.start);
Router.events.on("routeChangeError", nProgress.done);
Router.events.on("routeChangeComplete", nProgress.done);

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --font-ppReg: ${ppReg.style.fontFamily};
            --font-ppB: ${ppB.style.fontFamily};
            --font-ppEB: ${ppEB.style.fontFamily};
          }
        `}
      </style>
      <ErrorBoundary>
        <ClerkProvider>
          <ChakraProvider>
            <DataContextProvider>
              <Component {...pageProps} />
            </DataContextProvider>
          </ChakraProvider>
        </ClerkProvider>
      </ErrorBoundary>
    </>
  );
}
