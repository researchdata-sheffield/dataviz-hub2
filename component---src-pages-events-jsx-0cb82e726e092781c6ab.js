(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"4fMs":function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),l=a.n(r),n=a("gY85"),s=a("aN7D"),o=a("c6+h"),c=a("Wbzz"),d=a("1eu9"),i=a.n(d),b=a("AeFk"),m=function(e){var t=e.className,a=e.children;return Object(b.a)(c.StaticQuery,{query:"1792964189",render:function(e){var r=e.desktop.childImageSharp.fluid;return Object(b.a)(i.a,{className:t,fluid:r,style:{backgroundAttachment:"fixed"}},a)}})},u=a("ma3e"),f=a("x/DL"),v=function(e){var t=e.allEventbriteEvents,a=t.edges.length;return t&&a>0?Object(b.a)(l.a.Fragment,null,t.edges.map((function(e){var t=e.node,a=Object(f.c)(t.summary,20);return Object(b.a)("a",{className:"flex flex-col-reverse md:flex-row flex-wrap w-full overflow-y-hidden shadow-lg hover:shadow-2xl bg-white my-3 lg:my-1 text-gray-700 group border-solid",style:{transition:".5s ease"},href:t.url,key:t.id,target:"_blank",rel:"noopener noreferrer"},Object(b.a)("div",{className:"w-full md:w-9/12 py-4 px-4"},Object(b.a)("p",{className:"font-semibold text-lg text-black group-hover:text-brand-blue leading-5"},t.name.text),Object(b.a)("p",{className:"text-gray-700 mt-1 leading-tight text-sm group-hover:text-black"},a),Object(b.a)("p",{className:"flex pt-4 text-sm"},Object(b.a)(u.e,{className:"mr-1"}),t.start.local),Object(b.a)("div",{className:"flex flex-wrap text-sm"},Object(b.a)("p",{className:"flex"},t.online_event&&Object(b.a)(u.g,{className:"mr-1 mt-1"})," ",t.online_event&&"Online Event"),Object(b.a)("p",{className:"flex"},t.venue&&Object(b.a)(u.g,{className:"mr-1 mt-1"}),t.venue&&t.venue.name&&t.venue.name+", ",t.venue&&t.venue.address.address_1&&t.venue.address.address_1+", ",t.venue&&t.venue.address.city&&t.venue.address.city+", ",t.venue&&t.venue.address.postal_code&&t.venue.address.postal_code))),Object(b.a)("div",{className:"w-full md:w-3/12 overflow-hidden relative min-h-15 2xl:min-h-15",style:{backgroundImage:"url("+t.logo.original.url+")",backgroundPosition:"center",backgroundSize:"cover",transition:".5s ease"}},Object(b.a)("button",{href:t.url,target:"_blank",rel:"noopener noreferrer",className:"hidden group-hover:flex py-1 px-3 font-bold text-md bg-black text-white hover:bg-blue-700 absolute",style:{bottom:"0%",right:"0%"}},"Register")))}))):Object(b.a)("div",{className:"mt-16 text-blue-800"},"No upcoming events at the moment, please come back later.")},g=a("1oaH"),p=function(e){var t=e.pastEvent;return Object(b.a)("div",{className:"w-full md:w-4/5 lg:w-4/12 2xl:w-3/12 lg:rounded-r-xl md:mt-10 lg:mt-0 p-6 pb-8 text-gray-100 border-t-8 border-gray-800 min-h-50",style:{background:"rgba(0,0,0,.8)"}},Object(b.a)("h1",{className:"text-xl pt-2 pb-6 font-semibold"},"Past Events"),t.edges.map((function(e){var t=e.node,a=Object(f.c)(t.summary,15);return Object(b.a)("div",{className:"cursor-pointer flex flex-wrap p-4 w-full overflow-hidden group pastEvent",key:t.id,onClick:function(){return window.open(t.url,"_blank","noopener, noreferrer")}},Object(b.a)("p",{className:"font-semibold text-md text-black leading-4"},t.name.text),Object(b.a)("p",{className:"text-gray-700 text-xs leading-4 mt-1"},a),Object(b.a)("p",{className:"mt-2 text-xs text-black"},t.start.local))})),t.edges.length>0&&Object(b.a)("div",{className:"flex justify-center w-full"},Object(b.a)(g.f,{onClick:function(){return window.open("https://www.eventbrite.co.uk/o/scholarly-communications-team-the-university-of-sheffield-library-7528476001","_blank","noopener, noreferrer")},className:"w-full mt-0 hover:bg-blue-800 hover:text-white"},"More")))},x=function(e){var t=e.pastEventBlog;return Object(b.a)("div",{className:"w-full md:w-11/12 2xl:w-10/12 px-6 lg:mt-6 lg:mb-16 pb-8 lg:py-6 border-t-8 border-gray-800 min-h-50 rounded-xl",style:{background:"rgba(255,255,255,.9)"}},Object(b.a)("h1",{className:"text-2xl pt-2 pb-6 font-semibold"},"Event articles"),t.edges.map((function(e){var t=e.node,a=Object(f.c)(t.frontmatter.description,20);return Object(b.a)("div",{className:"flex flex-wrap transition duration-500 overflow-hidden p-3 md:w-1/2 lg:w-1/4 rounded-md bg-white group hover:border-1 hover:border-gray-600 border-1 border-white",key:t.id},Object(b.a)(c.Link,{to:t.fields.slug},Object(b.a)("p",{className:"font-bold text-black leading-5"},t.frontmatter.title),Object(b.a)("p",{className:"text-gray-700 mt-1 text-sm leading-4"},a),Object(b.a)("p",{className:"mt-2 text-sm text-black"},t.frontmatter.date)))})))},h=a("wd/R"),w=a.n(h);t.default=function(e){var t=e.data,a=t.eventBrite,c=t.pastEvent,d=t.pastEventBlog,i=Object(r.useState)(w()().format("ddd DD MMMM YYYY, hh:mm A")),u=i[0],f=i[1];return Object(r.useEffect)((function(){f(w()().format("ddd DD MMMM YYYY, hh:mm A"))}),[]),Object(b.a)(l.a.Fragment,null,Object(b.a)(n.a,{title:"Events",keywords:["the university of sheffield","data visualisation","data visualisation hub","research","dataviz events","dataviz.shef"]}),Object(b.a)(s.a,null),Object(b.a)(m,{className:"flex flex-wrap flex-grow-0 items-center justify-center min-h-100"},Object(b.a)("div",{className:"flex flex-wrap w-full justify-center my-16 lg:my-24"},Object(b.a)("div",{className:"w-full lg:w-7/12 p-6 text-black overflow-auto border-t-8 border-red-700 min-h-70 lg:rounded-l-xl",style:{background:"rgba(255,255,255,.95)"}},Object(b.a)("h1",{className:"inline-block text-2xl font-semibold"},"Upcoming Events"),Object(b.a)("div",{className:"text-gray-900 mb-8"},"Today: ",u),Object(b.a)(v,{allEventbriteEvents:a})),Object(b.a)(p,{pastEvent:c})),Object(b.a)(x,{pastEventBlog:d})),Object(b.a)(o.a,null))}}}]);
//# sourceMappingURL=component---src-pages-events-jsx-0cb82e726e092781c6ab.js.map