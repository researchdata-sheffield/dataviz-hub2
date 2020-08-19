/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

import React from 'react'


// load scripts
export const onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    <script
      key="https://cdnjs.cloudflare.com/ajax/libs/trianglify/3.0.0/trianglify.min.js"
      src="https://cdnjs.cloudflare.com/ajax/libs/trianglify/3.0.0/trianglify.min.js"
      integrity="sha512-rjQcHsP3OLGWVRNiLLBeupOT+luccTXECmZvxA4jc9uZfBr/qkML4uTGqQbypT3YZ5psW9C/SQUolxFjx6mxwg=="
      crossOrigin="anonymous"
    />,
    <script 
      key="https://cdnjs.cloudflare.com/ajax/libs/d3/5.16.0/d3.min.js" 
      src="https://cdnjs.cloudflare.com/ajax/libs/d3/5.16.0/d3.min.js" 
      integrity="sha512-FHsFVKQ/T1KWJDGSbrUhTJyS1ph3eRrxI228ND0EGaEp6v4a/vGwPWd3Dtd/+9cI7ccofZvl/wulICEurHN1pg==" 
      crossOrigin="anonymous" 
    />

  ])
}