(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{"4g0I":function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var l=a("q1tI");function i(e,t){function a(e,t,l){if(void 0===l&&(l="add"),"H"===t.substring(0,1)){var i=e.parentElement,s="remove"===l;s?i.classList.remove("active"):i.classList.add("active"),"H1"!==t&&a(i.parentElement,"H"+(t.substring(1)-1),s?"remove":"add")}}Object(l.useEffect)((function(){function l(){var l=new IntersectionObserver((function(t){t.forEach((function(t){var l=t.target.getAttribute("id"),i=document.querySelector(e+'[href="#'+l+'"]');null!==i&&(t.intersectionRatio>0?a(i,t.target.tagName):a(i,t.target.tagName,"remove"))}))}));document.querySelectorAll(t+" [id]").forEach((function(e){l.observe(e)}))}return document.addEventListener("DOMContentLoaded",l),function(){document.removeEventListener("DOMContentLoaded",l)}}),[])}},vJOq:function(e,t,a){"use strict";a.r(t);var l=a("q1tI"),i=a.n(l),s=a("Wbzz"),c=a("gY85"),r=a("7ljp"),n=a("A2+M"),o=a("qhky"),d=(a("vg9a"),a("YwZP")),m=a("HA0E"),b=a("4g0I"),u=a("aN7D"),x=a("c6+h"),p=a("R3Wf"),f=a("SQX1"),j=a("jPax"),O=a("GyWp"),g=a("/eHF"),h=a.n(g),v=a("e3s2"),y=a("v7au"),N=a("cpGi"),k=a("AeFk");t.default=function(e){var t,a=e.data.mdx,g=e.pageContext,w=Object(d.useLocation)(),E=a.frontmatter,L=E.title,S=E.date,T=E.author,A=E.disableTOC,I=E.type,C=g.prev,W=g.next,F="https://github.com/researchdata-sheffield/dataviz-hub2/tree/development/content/"+I+a.fields.slugOrigin+"index.mdx",q="https://"+w.host+a.fields.slug,B=a.frontmatter.title+" - "+a.frontmatter.description,H=a.frontmatter.d3?a.frontmatter.d3:null;H&&H.map((function(e){e.includes("https://")?Object(m.a)(e,"",!1):Object(m.a)(Object(s.withPrefix)("d3/"+e),"",!1)})),"true"===A?t=null:(t=a.tableOfContents,Object(b.a)(".TOC li a",".mdxBody"));var M=function(e){return Object(k.a)("li",{key:e.title,className:"pb-1 list-none"},Object(k.a)("a",{href:e.url,className:"inline-block"},Object(k.a)("p",null,e.title)),e.items?Object(k.a)("ul",{className:"pl-3"},e.items.map(P)):Object(k.a)(i.a.Fragment,null))},P=function e(t){return Object(k.a)("li",{key:t.title,className:"pt-1 list-none"},t.url?Object(k.a)("a",{href:t.url}," ",t.title):Object(k.a)(i.a.Fragment,null),t.items?Object(k.a)("ul",{className:"pl-3"},t.items.map(e)):Object(k.a)(i.a.Fragment,null))};return Object(l.useEffect)((function(){})),Object(k.a)("div",{className:"relative",key:a.id},Object(k.a)(c.a,{title:L,keywords:["the university of sheffield","data visualisation","data visualisation hub","research","blog"]}),Object(k.a)(u.a,null),Object(k.a)(o.a,null,Object(k.a)("script",{async:!0,src:"https://platform.twitter.com/widgets.js",charset:"utf-8",type:"text/javascript"})),Object(k.a)(h.a,{top:!0,delay:300},Object(k.a)("div",{id:"headElement",className:"flex flex-wrap justify-center self-center content-center items-center m-auto",style:{minHeight:"500px"}},Object(k.a)("div",{className:"flex flex-col flex-wrap text-center text-white pt-24 pb-10"},Object(k.a)("div",{className:"px-3 lg:px-48 2xl:px-78 leading-tight"},Object(k.a)("h1",{id:"title",className:"text-4xl xl:text-5xl text-gray-800 font-extrabold"},L)),Object(k.a)("div",{className:"flex justify-center mt-12 items-center"},T.map((function(e){return Object(k.a)("img",{className:"rounded-full mx-1 h-30px w-30px lg:h-40px lg:w-40px 2xl:h-50px 2xl:w-50px border-1 border-gray-100",key:e.name,src:e.avatar.childImageSharp.fluid.src})})),Object(k.a)("div",{className:"inline-block px-2 text-left font-semibold text-gray-800"},Object(k.a)("h1",{className:"text-sm xl:text-base"},T.map((function(e,t){return T.length===t+1?e.name:e.name+" · "}))),Object(k.a)("h1",{className:"text-xs xl:text-sm"},S," · ",a.fields.readingTime.text))),Object(k.a)("div",{className:"pb-2 border-b-1 border-gray-200 hidden md:block mx-auto mt-16",style:{maxWidth:"1000px",minWidth:"400px"}})))),Object(k.a)("div",{className:"flex flex-wrap relative pt-10 mx-auto",style:{maxWidth:"1200px"}},Object(k.a)("div",{className:"left-0 top-0 sticky hidden lg:block z-10"},Object(k.a)(h.a,{left:!0,cascade:!0,delay:1e3,duration:1300},Object(k.a)("div",{className:"flex flex-col text-xs",style:{maxWidth:"40px",height:"0",overflow:"visible"}},Object(k.a)(v.Twitter,{className:"greyScale-100 hover:greyScale-0 mt-28 transition duration-500",solid:!0,small:!0,message:B,link:q}),Object(k.a)(v.Facebook,{className:"greyScale-100 hover:greyScale-0 transition duration-500",solid:!0,small:!0,link:q}),Object(k.a)(v.Mail,{className:"hover:bg-red-600 transition duration-500",solid:!0,small:!0,subject:B,link:q}),Object(k.a)(v.Linkedin,{className:"greyScale-100 hover:greyScale-0 transition duration-500",solid:!0,small:!0,message:B,link:q}),Object(k.a)("hr",{className:"my-3"}),Object(k.a)("a",{href:F,target:"_blank",rel:"noopener noreferrer","data-tip":"","data-for":"share_editpost",offset:{top:100,left:100}},Object(k.a)("div",{className:"m-2 mt-1 bg-transparent text-black flex justify-center rounded-md text-xl transition duration-500"},Object(k.a)(y.c,null))),Object(k.a)(N.a,{id:"share_editpost"},"Edit this ",I||"post"," on GitHub")))),Object(k.a)("div",{className:"w-full shadow-md flex flex-wrap justify-center -mt-12 lg:mt-0",style:{backgroundColor:"#f3f3f3"}},Object(k.a)("div",{className:(t&&0===Object.keys(t).length?"flex-row":"flex-col w-1/4")+" flex text-sm justify-center items-center py-2 lg:hidden ml-10",style:{maxWidth:"50px"}},Object(k.a)(v.Twitter,{solid:!0,small:!0,message:B,link:q}),Object(k.a)(v.Facebook,{solid:!0,small:!0,link:q}),Object(k.a)(v.Mail,{solid:!0,small:!0,className:"bg-red-600",subject:B,link:q}),Object(k.a)(v.Linkedin,{solid:!0,small:!0,message:B,link:q}),Object(k.a)("a",{href:F,target:"_blank",rel:"noopener noreferrer"},Object(k.a)("div",{className:"m-2 py-1 px-2 bg-gray-800 hover:bg-brand-blue text-white flex justify-center rounded-md text-xl"},Object(k.a)(y.c,null)))),Object(k.a)("div",{className:" "+(t&&t.items?"pt-8 pb-5":"hidden")+" mx-auto overflow-auto text-black lg:hidden px-2"},t&&t.items&&Object(k.a)("p",{className:"font-bold mb-3 pb-2 border-b-1 border-gray-300"},"TABLE OF CONTENTS"),t&&t.items&&t.items.map(M))),Object(k.a)("div",{className:" "+(t&&t.items?"mdxBody":"")+" relative mx-auto pt-0 pb-16 px-5 leading-8 text-lg",style:{color:"#24292e",maxWidth:"700px"}},Object(k.a)(r.MDXProvider,{components:{h1:f.e,h2:f.f,h3:f.g,h4:f.h,h5:f.i,h6:f.j,p:f.r,a:f.a,ol:f.q,li:f.o,hr:f.k,del:f.c,pre:f.s,ul:f.v,blockquote:f.b,Link:f.p,em:f.d,img:f.l,table:f.t,Accordion:j.a,AccordionItem:j.b,AccordionItemHeading:j.d,AccordionItemButton:j.c,AccordionItemPanel:j.e,LPWrap:f.n,LPItem:f.m,TwitterBtn:f.u}},Object(k.a)(n.MDXRenderer,{className:"text-gray-100"},a.body))),Object(k.a)("div",{className:" "+(t&&t.items?"lg:w-2/12 lg:block":"")+" hidden noScrollBar lg:sticky lg:top-0 lg:right-0 pt-10 pb-10 max-h-100 overflow-auto"},Object(k.a)("p",{className:"font-bold mb-4 pb-2 text-gray-800 text-lg",style:{borderBottom:"1px solid #eaeaea"}},"TABLE OF CONTENTS"),Object(k.a)("div",{className:"px-1 text-base TOC lg:pb-10"},t&&t.items&&t.items.map(M)))),Object(k.a)(p.a,{mdx:a,type:I,prev:C,next:W,share:[B,q],github:F}),Object(k.a)(O.a,{mdx:a}),Object(k.a)(x.a,null))}}}]);
//# sourceMappingURL=component---src-templates-docs-docs-template-jsx-9d3f95f5a24b8c1a031f.js.map