import React from "react";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { commonMdxComponent } from "../style/commonMdxComponent";

export default function commonMdxProvider(props) {
  return (
    <MDXProvider
      components={{
        ...commonMdxComponent,
        ...props.components
      }}
    >
      <MDXRenderer className={props.className} {...props}>
        {props.mdx.body}
      </MDXRenderer>
    </MDXProvider>
  );
}
