import "../styles/globals.css";

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";


export default function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <NextThemesProvider >
        <Component {...pageProps} />
      </NextThemesProvider>
    </NextUIProvider>
  );
}



