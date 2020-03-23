import React from 'react'
import { Link } from "gatsby"
import Why from "../images/home/why.jpg"
import How from "../images/home/how.jpg"

function guide() {
  
  return (
    <div className="flex flex-wrap ipadp:pt-40 2xl:px-48">

      <div className="hidden ipadp:block ipadp:sticky ipadp:top-0 flex-col flex-wrap w-full ipadp:w-3/12 overflow-hidden ipadp:max-h-100 px-12 ipadp:py-32 leading-8">
        <div className="ipadp:border-r-1 border-gray-400 ipadp:py-16">
          <p><Link to="/#what" activeStyle={{color: "#00aeef"}} partiallyActive={true}>What is data visualisation</Link></p>
          <p><Link to="/#why" activeStyle={{color: "#00aeef"}} partiallyActive={true}>Why is it important</Link></p>
          <p><Link to="/#how" activeStyle={{color: "#00aeef"}} partiallyActive={true}>How this site could help</Link></p>
          <p><Link to="/#start" activeStyle={{color: "#00aeef"}} partiallyActive={true}>Get started</Link></p>
        </div>
      </div>
      
      <div className="flex flex-wrap w-full ipadp:w-9/12  text-gray-600 mt-24">
        
        <div id="what" className="flex-wrap ipadp:min-h-100 px-5 ipadp:px-24 my-12">
          <p className="font-semibold text-3xl"><h1 className="inline-block text-highlight_2 font-bold text-6xl">What</h1> is data visualisation?</p>
          <p className="leading-7 text-lg text-gray-600 py-10">
            Data visualisation generally considered as the graphical representation of information and data. The main purpose of data visualisation is to communicate information clearly and effectively by means of graphical representation. 
            However, this does not mean that data visualisation must be boring for its functional purpose, or extremely complicated to look gorgeous. <br /><br /> In order to effectively communicate ideas and concepts, 
            aesthetic and functions need to go hand in hand, and by visually communicating key aspects and features, deep insights into fairly sparse and complex data sets are achieved. Data visualisation is closely related to information graphics, 
            information visualisation, scientific visualisation, and statistical graphics. Data visualisation is currently an extremely active and critical aspect in research, teaching, and development.
          </p>
        </div> 
      
        <div id="why" className="flex-wrap ipadp:min-h-100 px-5 ipadp:px-24 my-12">
          <p className="font-semibold text-3xl"><h1 className="inline-block text-highlight_2 font-bold text-6xl">Why</h1> is it important?</p>
          <p className="leading-7 text-lg text-gray-600 py-10">
          The huge amount of data is one of the characteristics of the Internet era. Learn to quickly digest and absorb useful information in huge data groups can greatly help to seize 
          opportunities. Studies have shown that the amount of information we use visually is far greater than other senses. This also means that the possibility of finding relevant 
          information through data visualization is far greater than other methods, and it allow viewers to get more information.  <br /><br />
          <img src={Why} className="max-w-30 mx-auto border-4 border-gray-700" /> <br />
          While many organisations and companies across different sectors relying on data to gain insights and optimising their products, data visualisation is not yet an integral part of research communication. 
          Today, powerful, modern, open source, interactive and web-based visualisation tools have revolutionised the potential for research data impact, we are here to help our researchers make the most of their data and take advantage of such tools. 
          </p>
        </div> 

        <div id="how" className="flex-wrap ipadp:min-h-100 px-5 ipadp:px-24 my-12">
          <p className="font-semibold text-3xl"><h1 className="inline-block text-highlight_2 font-bold text-6xl">How</h1> this site could help?</p>
          <p className="leading-9 text-lg text-gray-600 py-10">
            
            Support through: <br />
              - Documentation on dataviz best practice and use of tools  <br />
              - Communication channels  <br />
              - Capacity building opportunities through Events  <br />
              - Help when you needed <br />
              - Contribution <br />

            <img src={How} className="max-w-30 mx-auto mt-10" /> <br />
          </p>
        </div>  

        <div id="start" className="flex-wrap ipadp:min-h-100 px-5 ipadp:px-24 my-12">
          <p className="font-semibold text-3xl"><h1 className="inline-block text-highlight_2 font-bold text-6xl">Get</h1> started</p>
          <p className="leading-9 text-lg text-gray-600 py-10">
            - Learn from documentations <br />
            - Share your data visualisations on ORDA showcase <br />
            - Join the google group &/or slack community <br />
            - Contribute to the blog <br />
            - Contribute to the documentation <br />
            - Get in touch with ideas for training, coding clubs, hackathons <br />
          </p>
        </div>  

      </div>
    </div> 
  
  )

}

export default guide

