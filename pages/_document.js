import { Html,Head, Main, NextScript } from "next/document";



export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function Document() {
  return (
    
      <Html lang="en">
       <Head/>

        <body className=" min-h-screen bg-background ">
        
     
            <Main />
          
            <NextScript />
        </body>

       
      </Html>
   
  );
}
