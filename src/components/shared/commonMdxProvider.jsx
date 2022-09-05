import React from "react";
import { MDXProvider } from "@mdx-js/react";
import { commonMdxComponent } from "../style/commonMdxComponent";

export default function commonMdxProvider(props) {
  return (
    <MDXProvider
      components={{
        ...commonMdxComponent,
        ...props.components
      }}
    >
      {React.cloneElement(props.children, ...props)}
    </MDXProvider>
  );
}
