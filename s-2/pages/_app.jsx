import { Poppins, DM_Sans } from "@next/font/google";
import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";

const ppReg = Poppins({
  subsets: ["latin"],
  variable: "--font-ppReg",
  weight: ["400"],
});

// bold poppins
const ppB = Poppins({
  subsets: ["latin"],
  variable: "--font-ppB",
  weight: ["600"],
});

// extra bold
const ppEB = Poppins({
  subsets: ["latin"],
  variable: "--font-ppEB",
  weight: ["900"],
});

// dm SANS
const dmSans = Poppins({
  subsets: ["latin"],
  variable: "--font-dmsans",
  weight: ["500"],
});

const dmSansBold = Poppins({
  subsets: ["latin"],
  variable: "--font-dmsans-bold",
  weight: ["700"],
});

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
