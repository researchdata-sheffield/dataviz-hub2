import React from "react"
import SEO from "../components/shared/seo"
import { A } from "../components/style/blogPostStyle"

const Accessibility = () => (
  <> 
    <SEO 
      title="Accessibility Statement" 
      keywords={["the university of sheffield", "data visualisation", "data visualisation hub", "research", "Accessibility Statement"]} 
    />
    <div className="items-center justify-center bg-white pt-16 pb-24 min-h-70">
      <div className="text-black px-4 pb-10 lg:px-24 container mx-auto">
        <h1 className="accAbt text-5xl">Accessibility Statement</h1>
        <p>This <b>accessibility statement</b> applies to <A href="https://dataviz.shef.ac.uk"><b>https://dataviz.shef.ac.uk</b></A>.</p>
        <p>This website is run by <b>The University of Sheffield</b>. We want as many people as possible to be able to use this website. For example, that means you should be able to:</p>
        <ul className="list-disc list-inside ml-5">
          <li>change colours, contrast levels and fonts</li>
          <li>zoom in up to 300% without the text spilling off the screen</li>
          <li>navigate most of the website using just a keyboard</li>
          <li>navigate most of the website using speech recognition software</li>
          <li>listen to most of the website using a screen reader (including the most recent versions of JAWS, NVDA and VoiceOver)</li>
        </ul>
        <p>We&apos;ve also made the website text as simple as possible to understand. </p>
        <p><A href="https://mcmw.abilitynet.org.uk/">AbilityNet</A> has advice on making 
          your device easier to use if you have a disability.
        </p>
        <div className="accAbtSubItem">
            <h2 className="accAbt">How accessible this website is</h2>
            <p>We know some parts of this website are not fully accessible:</p>
            <ul className="list-disc list-inside ml-5">
              <li>the text will not reflow in a single column when you change the size of the browser window</li>
              <li>you cannot modify the line height or spacing of text</li>
              <li>most older PDF documents are not fully accessible to screen reader software</li>
              <li>user-generated files such as uploaded data visualisations</li>
              <li>you might not able to skip to the main content when using a screen reader</li>
            </ul>
            
            <h2 className="accAbt">Feedback and contact information</h2>
            <p>If you need information on this website in a different format like accessible PDF, large print, easy read, audio recording or braille, 
              please contact us on <A href="mailto:rdm@sheffield.ac.uk">email</A>.
            </p>
            <p>We&apos;ll consider your request and get back to you as soon as possible.</p>
              
            <h2 className="accAbt">Reporting accessibility problems with this website</h2>
            <p>We&apos;re always looking to improve the accessibility of this website. If you find any problems not listed on this page or think we&apos;re not meeting accessibility requirements, 
              contact <A href="mailto:rdm@sheffield.ac.uk">rdm@sheffield.ac.uk</A>.
            </p>
            
            <h2 className="accAbt">Enforcement procedure</h2>
            <p>The Equality and Human Rights Commission (EHRC) is responsible for enforcing the Public Sector Bodies (Websites and Mobile Applications) (No. 2) Accessibility Regulations 
              2018 (the &apos;accessibility regulations&apos;). If you&apos;re not happy with how we respond to your complaint, 
              contact <A href="https://www.equalityadvisoryservice.com/">the Equality Advisory and Support Service (EASS)</A>.
            </p>
        </div>
        
        <h1 className="accAbt">Technical information about the website&apos;s accessibility</h1>
        <p><b>The University of Sheffield</b> is committed to making its websites accessible, in accordance with the Public Sector Bodies (Websites and Mobile Applications) (No. 2) Accessibility Regulations 2018.</p>
        <div className="accAbtSubItem">
            <h2 className="accAbt">Compliance status</h2>
            <p>This website is partially compliant with the <A href="https://www.w3.org/TR/WCAG21/">Web Content 
              Accessibility Guidelines version 2.1</A> AA standard, due to the non-compliances and exemptions listed below.
            </p>
        </div>
        
        <h1 className="accAbt">Non-accessible content</h1>
        <p>The content listed below is non-accessible for the following reasons.</p>
        <div className="accAbtSubItem">
          {/* <h2 className="accAbt">Non-compliance accessibility regulations</h2> */}
          <h2 className="accAbt">Disproportionate burden</h2>
          <p><b>User generated content: </b>Some of the content on this website is generated and uploaded by individual users and as a result is not fully accessible. We believe 
            that reviewing and making sure each item of content is fully accessible would be a disproportionate burden within the meaning of the accessibility regulations. 
          </p>
        </div>
        
        <h1 className="accAbt">Content that&apos;s not within the scope of the accessibility regulations</h1>
        <p><b>User generated content: </b>Some of the content on this website is user-generated content that is not under our control and 
          is therefore exempt from meeting the accessibility regulations.
        </p>
        
        <h1 className="accAbt">Preparation of this accessibility statement</h1>
        <p>This statement was prepared on 20th September 2020. It was last reviewed on 20th September 2020. This website was last tested on 20 September 2020. The test was carried out by internal teams.</p>
        <p>We tested the whole public area of the website along with the external widgets such as Text to Speech Screen Reader, NVDA, WAVE (web accessibility evaluation tool), Firefox Accessibility, and Firefox Voice etc.</p>
      </div>
    </div>
  </>
)

export default Accessibility
