import React from "react"
import SEO from "../components/shared/seo"
import { A } from "../components/style/blogPostStyle"

const Privacy = () => (
  <> 
    <SEO 
      title="Privacy" 
      keywords={["the university of sheffield", "data visualisation", "data visualisation hub", "research", "Privacy"]} 
    />

    <div className="items-center justify-center bg-white py-24 min-h-70">
      <div className="text-black px-4 py-10 lg:px-24 container mx-auto shadow-sm">
        <h1 className="text-5xl font-bold leading-tight">Privacy Policy</h1>
        <p className="text-lg mt-3">
          This <A href="https://www.sheffield.ac.uk/privacy">privacy statement</A> explains what types of 
          personal information will generally be gathered when you visit <strong>this</strong> website, 
          and how this information will be used. Where this specific site differs, or collects additional 
          information, further details are given below.
        </p>

      </div>
    </div>
  </>
)

export default Privacy
