(self.webpackChunkdatavizhub_tuos=self.webpackChunkdatavizhub_tuos||[]).push([[995],{8501:function(t,e,a){"use strict";function r(t,e){var a={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(a[r]=t[r]);return a}function n(t,e){var a=e.left,r=e.right,n=e.up,o=e.down,i=e.top,s=e.bottom,l=e.mirror,u=e.opposite,d=(a?1:0)|(r?2:0)|(i||o?4:0)|(s||n?8:0)|(l?16:0)|(u?32:0)|(t?64:0);if(h.hasOwnProperty(d))return h[d];if(!l!=!(t&&u)){var g=[r,a,s,i,o,n];a=g[0],r=g[1],i=g[2],s=g[3],n=g[4],o=g[5]}var p=a||r,f=i||s||n||o,m=void 0;return p||f?t?m="40% {\n          opacity: 1;\n          transform: scale3d(.475, .475, .475) translate3d("+(p?(a?"":"-")+"42px":"0")+", "+(f?(o||i?"-":"")+"60px":"0")+", 0);\n        }\n        to {\n          opacity: 0;\n          transform: scale(.1) translate3d("+(p?(r?"":"-")+"2000px":"0")+", "+(f?(n||s?"":"-")+"2000px":"0")+", 0);\n          transform-origin: "+(f?"center bottom":(a?"left":"right")+" center")+";\n        }":m="from {\n          opacity: 0;\n          transform: scale3d(.1, .1, .1) translate3d("+(p?(a?"-":"")+"1000px":"0")+", "+(f?(o||i?"-":"")+"1000px":"0")+", 0);\n          animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n        }\n        60% {\n          opacity: 1;\n          transform: scale3d(.475, .475, .475) translate3d("+(p?(r?"-":"")+"10px":"0")+", "+(f?(n||s?"-":"")+"60px":"0")+", 0);\n          animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n        }":m=(t?"to":"from")+" {opacity: 0; transform: scale3d(.1, .1, .1);} "+(t?"from":"to")+" { opacity: 1; transform: none;}",h[d]=(0,c.animation)(m),h[d]}function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c.defaults,e=t.children,a=(t.out,t.forever),o=t.timeout,i=t.duration,s=void 0===i?c.defaults.duration:i,l=t.delay,d=void 0===l?c.defaults.delay:l,h=t.count,g=void 0===h?c.defaults.count:h,p=r(t,["children","out","forever","timeout","duration","delay","count"]),f={make:n,duration:void 0===o?s:o,delay:d,forever:a,count:g,style:{animationFillMode:"both"},reverse:p.left};return(0,u.default)(p,f,f,e)}Object.defineProperty(e,"__esModule",{value:!0});var i,s=a(5697),l=a(1719),u=(i=l)&&i.__esModule?i:{default:i},c=a(5321),d={out:s.bool,left:s.bool,right:s.bool,top:s.bool,bottom:s.bool,mirror:s.bool,opposite:s.bool,duration:s.number,timeout:s.number,delay:s.number,count:s.number,forever:s.bool},h={};o.propTypes=d,e.default=o,t.exports=e.default},7201:function(t,e,a){"use strict";a.r(e),a.d(e,{default:function(){return v}});var r=a(7294),n=a(6292),o=a(18),i=a(3552),s=a(5444),l=a(3750),u=a(926),c=a.n(u),d=a(8501),h=a.n(d),g=a(14),p=a.n(g),f=a.p+"static/search-cf9fb2a9c2596e7f265f0e65e8d5aa65.png",m=a(5957),y=a(3431),b=function(t){function e(){for(var e,a=arguments.length,r=new Array(a),n=0;n<a;n++)r[n]=arguments[n];return(e=t.call.apply(t,[this].concat(r))||this).state={query:"",results:[]},e.componentDidMount=function(){setTimeout((function(){if(e.props.location.state&&e.props.location.state.searchWord){var t=e.props.location.state.searchWord,a=document.getElementById("pageSearch");e.setState({query:t}),a.setAttribute("value",t),e.searchFromHome(t)}}),100)},e.search=function(t){var a=t.target.value;if(e.state.query.length>-1){var r=e.getSearchResults(a);e.setState({results:r,query:a})}else e.setState({results:[],query:a})},e.searchFromHome=function(t){var a=t;if(e.state.query.length>-1){var r=e.getSearchResults(a);e.setState({results:r,query:a})}else e.setState({results:[],query:a})},e}(0,i.Z)(e,t);var a=e.prototype;return a.render=function(){var t=this;return(0,y.tZ)("div",{className:this.props.classNames+" relative text-gray-700 w-full text-center"},(0,y.tZ)("div",{className:"pt-40 pb-10 bg-white",style:{backgroundImage:"url("+f+")",backgroundSize:"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat",width:"100%",minHeight:"600px"}},(0,y.tZ)(h(),{top:!0,duration:1e3,cascade:!0},(0,y.tZ)("p",{className:"text-lg text-gray-800 mb-5 font-extrabold"},"What are you looking for?")),(0,y.tZ)(p(),{bottom:!0,duration:1500},(0,y.tZ)("div",{className:"inline-block focus:outline-none text-gray-600 bg-white shadow p-3 rounded-lg"},(0,y.tZ)(l.jRj,{className:"inline-block text-center text-3xl -mt-1"}),(0,y.tZ)("input",{id:"pageSearch",onChange:this.search,onInput:this.search,autoComplete:"off",className:"search__input py-0 pl-4 text-lg focus:outline-none pr-5 text-gray-600",style:{minWidth:"25vw"},type:"text",name:"search",placeholder:"Search title, description, date..."})))),(0,y.tZ)("div",{className:"search__list bg-gray-100"},(0,y.tZ)((function(){if(t.state.results.length>0&&t.state.query.length>0){var e=(0,s.useStaticQuery)("3851183577");return(0,y.tZ)("div",null,(0,y.tZ)("div",{className:"bg-white text-gray-900 py-2"},"Found ",t.state.results.length," results for you."),(0,y.tZ)("div",{className:"flex flex-wrap py-10 xl:pt-16 xl:pb-64 justify-center bg-gray-100"},t.state.results.map((function(a,n){var o;e.allMdx.edges.map((function(t){var e=t.node;a.id==e.id&&(o=(0,m.MC)(e,!0))}));var i=(0,m.El)(a.title,8),s=(0,m.El)(a.description,30),l="text-blue-400 bg-black";return(0,y.tZ)("a",{href:""+a.url,target:"_blank",rel:"noopener noreferrer",key:n},(0,y.tZ)("div",{style:{width:"363px",backgroundImage:"url("+o+")",backgroundSize:"cover",backgroundPosition:"center",borderRadius:"10px",minHeight:"420px"},className:"shadow-lg hover:shadow-xl rounded-lg group text-left relative md:mx-6 my-6 transform hover:scale-105 transition duration-500"},(0,y.tZ)("div",{className:"rounded-lg max-h-60 w-full p-6 transition duration-700 bg-black-35 group-hover:bg-black-75",style:{minHeight:"420px"}},(0,y.tZ)("div",{className:"absolute pt-8 lg:pt-12 2xl:pt-16 overflow-hidden",style:{maxWidth:"320px"}},(0,y.tZ)("h1",{className:"mb-3 group-hover:-translate-y-8 text-white bg-gray-900 group-hover:text-brand-blue group-hover:bg-black font-bold text-lg transform transition duration-300 inline-block rounded-md",style:{textShadow:"none",padding:".15rem .65rem"}},a.type||"blog"),(0,y.tZ)("h1",{className:"group-hover:-translate-y-8 text-white font-bold leading-7 text-2xl transform transition duration-100"},(0,y.tZ)(c(),{highlightClassName:l,textToHighlight:i,searchWords:t.state.query.split()})),(0,y.tZ)("h1",{className:"group-hover:hidden text-gray-400 leading-7 my-4 font-bold text-lg transition duration-500",style:{textShadow:"#000 0px 0px 30px"}},a.author.map((function(e,a,r){return(0,y.tZ)(c(),{className:"text-white",highlightClassName:l,textToHighlight:r.length-1===a?e:e.concat(", "),searchWords:t.state.query.split(),key:e})}))),a.category&&(0,y.tZ)("h1",{className:"group-hover:hidden text-gray-200 font-bold transition duration-500"},"CAT:  ",a.category.map((function(e){return(0,y.tZ)(r.Fragment,null,(0,y.tZ)(c(),{key:e,className:"text-white",highlightClassName:l,textToHighlight:e.toUpperCase(),searchWords:t.state.query.split()}),(0,y.tZ)("span",null," "))}))),a.tag&&(0,y.tZ)("h1",{className:"group-hover:hidden text-gray-200 font-bold transition duration-500"},"TAG:  ",a.tag.map((function(e,a,r){return n<3&&(0,y.tZ)(c(),{className:"text-white",highlightClassName:l,textToHighlight:r.length-1===a?e.toUpperCase():e.toUpperCase().concat(", "),searchWords:t.state.query.split(),key:e})})),a.tag.length>3&&(0,y.tZ)("p",{className:"inline-block text-white"}," +",a.tag.length-3," more")),(0,y.tZ)("p",{className:"hidden group-hover:block my-4 text-xs text-gray-500 w-full font-semibold transform group-hover:-translate-y-12 transition duration-500"},(0,y.tZ)(c(),{highlightClassName:l,textToHighlight:a.url.toUpperCase(),searchWords:t.state.query.split()})),(0,y.tZ)("h1",{className:"hidden group-hover:block text-white leading-5 text-lg py-3 transform group-hover:-translate-y-12 transition duration-500"},(0,y.tZ)(c(),{highlightClassName:l,textToHighlight:s,searchWords:t.state.query.split()}))))))}))))}return t.state.query.length>0?(0,y.tZ)("div",{className:"bg-white text-gray-900 py-2"},"No results for ",t.state.query):(0,y.tZ)("div",{className:"bg-gray-50 text-gray-700 py-2"},"Type something in the search box ...")}),null)))},a.getSearchResults=function(t){var e=window.__FLEXSEARCH__.en.index,a=window.__FLEXSEARCH__.en.store;if(t&&e){var r=[];return Object.keys(e).forEach((function(a){var n;(n=r).push.apply(n,(0,o.Z)(e[a].values.search({query:t,suggest:!0})))})),r=Array.from(new Set(r)),a.filter((function(t){return r.includes(t.id)?t:null})).map((function(t){return t.node}))}return[]},e}(r.Component),v=function(t){var e=t.location;return(0,y.tZ)(r.Fragment,null,(0,y.tZ)(n.Z,{title:"Search",keywords:["the university of sheffield","data visualisation","data visualisation hub","research","dataviz.shef","search dataviz"]}),(0,y.tZ)("div",{className:"flex flex-wrap"},(0,y.tZ)(b,{location:e})))}},5957:function(t,e,a){"use strict";a.d(e,{El:function(){return o},MC:function(){return i},MH:function(){return s}});var r=a(5444),n=a(9285);function o(t,e){var a=t?t.split(" ").splice(0,e):"";return a.length<e?a.join(" "):a.join(" ").concat(" ...")}function i(t,e){var a;if(void 0===e&&(e=!1),t.frontmatter&&t.frontmatter.thumbnail&&t.frontmatter.thumbnail.childImageSharp)a=t.frontmatter.thumbnail.childImageSharp.gatsbyImageData;else{var o=(0,r.useStaticQuery)("3976606562"),i=Object.values(o);a=i[Math.floor(s()*i.length)].childImageSharp.gatsbyImageData}return!0===e?(0,n.e)(a):a}function s(){return"undefined"!=typeof window?window.crypto.getRandomValues(new Uint16Array(1))[0]/Math.pow(2,16):0}}}]);
//# sourceMappingURL=component---src-pages-search-jsx-3e315c5aa81d74f92ef7.js.map