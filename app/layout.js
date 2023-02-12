"use client";
import GlobalStyle from "@/app/styles/globals";
import StyledComponentsRegistry from "@/app/styles/lib/StyledComponentsRegistry";
import "sanitize.css";
import "sanitize.css/forms.css";
import "sanitize.css/typography.css";



export default function RootLayout( { children } ) {
    return ( <html lang="en">
    {/*
     <head /> will contain the components returned by the nearest parent
     head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
     */ }
    <head/>
    <body>
    {/* GlobalStyle must remain outside StyledComponentsRegistry scope */ }
    {/* https://beta.nextjs.org/docs/styling/css-in-js#styled-components */ }
    <GlobalStyle/>
    <StyledComponentsRegistry>
        { children }
    </StyledComponentsRegistry>
    </body>
    </html> );
}
