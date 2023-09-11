import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { dmSans, dmSansBold, ppB, ppEB, ppReg } from "../config/fonts";

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --font-ppReg: ${ppReg.style.fontFamily};
            --font-ppB: ${ppB.style.fontFamily};
            --font-ppEB: ${ppEB.style.fontFamily};
            --font-dmsans: ${dmSans.style.fontFamily};
            --font-dmsans-bold: ${dmSansBold.style.fontFamily};
          }
        `}
      </style>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}
