import React from 'react'
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { H1, H2, H3, H4, H5, H6, P, A, Ol, Li, Hr, Del, Pre, Ul, BlockQuote, Link, EM, Table, LPItem, LPWrap, IMG, TwitterBtn } from "../style/blogPostStyle"
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion';
import Tab from "./tab";

export default function commonMdxProvider(props) {

  return (
    <MDXProvider 
      components={{ 
        h1: H1, h2: H2, h3: H3, h4: H4, h5: H5, h6: H6, p: P, a: A, ol: Ol, li: Li, hr: Hr, del: Del, 
        pre: Pre, ul: Ul, blockquote: BlockQuote, Link: Link, em: EM, img: IMG, table: Table, 
        Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel, 
        LPWrap, LPItem, TwitterBtn, Tab, ...props.components
      }}
    >
      <MDXRenderer className={props.className} {...props}>{props.mdx.body}</MDXRenderer>
    </MDXProvider>
  )
}
