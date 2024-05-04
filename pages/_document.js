import { Html, Head, Main, NextScript } from "next/document";
import { Nav } from "../components/navbar";
import { Foot } from "../components/footer";
import { NextUIProvider } from "@nextui-org/react";
import { Providers } from "../components/providers";
export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function Document() {
  return (
    <NextUIProvider>
      <Html lang="en">
        <Head />

        <body>
          <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
            <Nav />
            <Main />
            <Foot />
          </Providers>
        </body>

        <NextScript />
      </Html>
    </NextUIProvider>
  );
}
