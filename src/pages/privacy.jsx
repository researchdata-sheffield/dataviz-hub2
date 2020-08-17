import React from "react"
import SEO from "../components/shared/seo"
import Header from "../components/shared/header"
import Footer from "../components/shared/footer"
import { A } from "../components/style/blogPostStyle"

const PrivacyPage = () => (
  <> 
    <SEO 
      title="Privacy" 
      keywords={["the university of sheffield", "data visualisation", "data visualisation hub", "research", "Privacy"]} 
    />
    <Header />

    <div className="items-center justify-center bg-white py-24">
      <div className="text-black px-4 py-10 lg:px-24 container mx-auto shadow-lg" style={{fontFamily: "TUoS Blake"}}>
        <h1 className="text-2xl font-bold leading-tight">Dataviz.Shef Privacy Policy</h1>
        <p className="text-lg mt-3">
          This <A href="https://www.sheffield.ac.uk/privacy">privacy statement</A> explains what types of 
          personal information will generally be gathered when you visit <strong>this</strong> website, 
          and how this information will be used. Where this specific site differs, or collects additional 
          information, further details are given below.
        </p>

      </div>
    </div>

    <Footer />
  </>
)

export default PrivacyPage
