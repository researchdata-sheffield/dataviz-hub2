import React from 'react'
import Why from "../images/home/why.jpg"
import How from "../images/home/how.jpg"
import scroll_To from 'gatsby-plugin-smoothscroll'
import Fade from 'react-reveal/Fade'

const guide = () => {
  
  return (
    <div className="flex flex-wrap ipadp:pt-8 2xl:px-24">

      <Fade left duration={2000}>
        <div className="hidden ipadp:block ipadp:sticky ipadp:top-0 flex-col flex-wrap w-full ipadp:w-3/12 overflow-hidden ipadp:max-h-100 px-12 ipadp:py-32 leading-8">
          <div className="ipadp:border-r-1 border-gray-400 ipadp:py-16 text-right pr-6">
            <p onClick={() => scroll_To('#what')} className="hover:text-highlight_2 cursor-pointer">What is data visualisation</p>
            <p onClick={() => scroll_To('#why')} className="hover:text-highlight_2 cursor-pointer">Why is it important</p>
            <p onClick={() => scroll_To('#how')} className="hover:text-highlight_2 cursor-pointer">How this site could help</p>
            <p onClick={() => scroll_To('#start')} className="hover:text-highlight_2 cursor-pointer">Get started</p>
          </div>
        </div>
      </Fade>
      
      <div className="flex flex-wrap w-full ipadp:w-9/12  text-gray-600 mt-24">
        
        <Fade>
          <div id="what" className="flex-wrap ipadp:min-h-100 px-5 ipadp:px-24 my-12">
            <h1 className="font-semibold text-3xl"><p className="inline-block text-highlight_2 font-bold text-6xl">What</p> is data visualisation?</h1>
            <p className="leading-7 text-lg text-gray-600 py-10">
              Data visualisation generally considered as the graphical representation of information and data. The main purpose of data visualisation is to communicate information clearly and effectively by means of graphical representation. 
              However, this does not mean that data visualisation must be boring for its functional purpose, or extremely complicated to look gorgeous. <br /><br /> In order to effectively communicate ideas and concepts, 
              aesthetic and functions need to go hand in hand, and by visually communicating key aspects and features, deep insights into fairly sparse and complex data sets are achieved. Data visualisation is closely related to information graphics, 
              information visualisation, scientific visualisation, and statistical graphics. Data visualisation is currently an extremely active and critical aspect in research, teaching, and development.
            </p>
          </div> 
        

          <div id="why" className="flex-wrap ipadp:min-h-100 px-5 ipadp:px-24 my-12">
            <h1 className="font-semibold text-3xl"><p className="inline-block text-highlight_2 font-bold text-6xl">Why</p> is it important?</h1>
            <p className="leading-7 text-lg text-gray-600 py-10">
            The huge amount of data is one of the characteristics of the Internet era. Learn to quickly digest and absorb useful information in huge data groups can greatly help to seize 
            opportunities. Studies have shown that the amount of information we use visually is far greater than other senses. This also means that the possibility of finding relevant 
            information through data visualization is far greater than other methods, and it allow viewers to get more information.  <br /><br />
            <img src={Why} className="w-full lg:max-w-30 mx-auto border-4 border-gray-700" /> <br />
            While many organisations and companies across different sectors relying on data to gain insights and optimising their products, data visualisation is not yet an integral part of research communication. 
            Today, powerful, modern, open source, interactive and web-based visualisation tools have revolutionised the potential for research data impact, we are here to help our researchers make the most of their data and take advantage of such tools. 
            </p>
          </div> 

          <div id="how" className="flex-wrap ipadp:min-h-100 px-5 ipadp:px-24 my-12">
            <h1 className="font-semibold text-3xl"><p className="inline-block text-highlight_2 font-bold text-6xl">How</p> this site could help?</h1>
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
            <h1 className="font-semibold text-3xl"><p className="inline-block text-highlight_2 font-bold text-6xl">Get</p> started</h1>
            <p className="leading-9 text-lg text-gray-600 py-10">
              - Learn from documentations <br />
              - Share your data visualisations on ORDA showcase <br />
              - Join the google group &/or slack community <br />
              - Contribute to the blog <br />
              - Contribute to the documentation <br />
              - Get in touch with ideas for training, coding clubs, hackathons <br />
            </p>
          </div>  
        </Fade>
      </div>
    </div> 
  
  )

}

export default guide

