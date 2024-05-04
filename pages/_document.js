import { Html, Head, Main, NextScript } from "next/document";
import { Nav } from "../components/navbar";
import { Foot } from "../components/footer";
import { NextUIProvider } from "@nextui-org/react";

export default function Document() {
  return (
    <NextUIProvider>
      <Html lang="en">
        <Head />

        <body>
          <Nav />
          <Main />
          <Foot />
        </body>

        <NextScript />
      </Html>
    </NextUIProvider>
  );
}
