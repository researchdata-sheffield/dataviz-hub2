(self.webpackChunkdatavizhub_tuos=self.webpackChunkdatavizhub_tuos||[]).push([[952],{38797:function(t,e,n){var i="[object Symbol]",o=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,a=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,r="\\u2700-\\u27bf",u="a-z\\xdf-\\xf6\\xf8-\\xff",l="A-Z\\xc0-\\xd6\\xd8-\\xde",s="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",d="['’]",c="["+s+"]",f="[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]",g="\\d+",p="[\\u2700-\\u27bf]",m="["+u+"]",h="[^\\ud800-\\udfff"+s+g+r+u+l+"]",x="(?:\\ud83c[\\udde6-\\uddff]){2}",b="[\\ud800-\\udbff][\\udc00-\\udfff]",y="["+l+"]",v="(?:"+m+"|"+h+")",w="(?:"+y+"|"+h+")",Z="(?:['’](?:d|ll|m|re|s|t|ve))?",N="(?:['’](?:D|LL|M|RE|S|T|VE))?",k="(?:[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]|\\ud83c[\\udffb-\\udfff])?",C="[\\ufe0e\\ufe0f]?",S=C+k+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",x,b].join("|")+")"+C+k+")*"),j="(?:"+[p,x,b].join("|")+")"+S,O=RegExp(d,"g"),I=RegExp(f,"g"),E=RegExp([y+"?"+m+"+"+Z+"(?="+[c,y,"$"].join("|")+")",w+"+"+N+"(?="+[c,y+v,"$"].join("|")+")",y+"?"+v+"+"+Z,y+"+"+N,g,j].join("|"),"g"),T=/[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,_="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,z="object"==typeof self&&self&&self.Object===Object&&self,L=_||z||Function("return this")();var A,P=(A={"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"ss"},function(t){return null==A?void 0:A[t]});var B=Object.prototype.toString,R=L.Symbol,U=R?R.prototype:void 0,V=U?U.toString:void 0;function M(t){if("string"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&B.call(t)==i}(t))return V?V.call(t):"";var e=t+"";return"0"==e&&1/t==-Infinity?"-0":e}function F(t){return null==t?"":M(t)}var q,D=(q=function(t,e,n){return t+(n?"-":"")+e.toLowerCase()},function(t){return function(t,e,n,i){var o=-1,a=t?t.length:0;for(i&&a&&(n=t[++o]);++o<a;)n=e(n,t[o],o,t);return n}(function(t,e,n){return t=F(t),void 0===(e=n?void 0:e)?function(t){return T.test(t)}(t)?function(t){return t.match(E)||[]}(t):function(t){return t.match(o)||[]}(t):t.match(e)||[]}(function(t){return(t=F(t))&&t.replace(a,P).replace(I,"")}(t).replace(O,"")),q,"")});t.exports=D},48419:function(t,e,n){"use strict";n.d(e,{Tz:function(){return o},mI:function(){return a},FA:function(){return r},kB:function(){return u},vb:function(){return s},Y0:function(){return d},$j:function(){return c},G7:function(){return f}});var i=n(53583),o=i.ZP.div.withConfig({displayName:"visStyle__ShareButton",componentId:"sc-14qwj2y-0"})(["a{margin:0}"]),a=i.ZP.div.withConfig({displayName:"visStyle__VisItem",componentId:"sc-14qwj2y-1"})(["display:block;height:100%;width:100%;position:relative;"," @media screen and (max-width:768px){padding-bottom:inherit;}"],(function(t){return 1==t.row&&t.col>1?"\n        padding-bottom: calc(100% / "+t.col+");\n      ":1==t.col&&t.row>1?"\n        padding-bottom: calc("+t.row+" * 100%);\n      ":1!=t.col&&1!=t.row?"\n        padding-bottom: calc("+t.row+" / "+t.col+" * 100%);\n      ":"\n      padding-bottom: 100%;\n    "})),r=i.ZP.div.withConfig({displayName:"visStyle__VisDiv",componentId:"sc-14qwj2y-2"})(["max-width:550px;margin:auto;"]),u=i.ZP.div.withConfig({displayName:"visStyle__WordCloud",componentId:"sc-14qwj2y-3"})(["text-align:center;width:",";height:",";border-radius:",";overflow-y:hidden;overflow-x:clip;padding:1rem;@media (max-width:768px){width:100%;height:100%;}@media (max-width:1440px){width:",";height:",";}&::before{content:'';height:100%;width:50%;float:left;shape-outside:polygon( 0 0,100% 0,60% 4%,40% 10%,20% 20%,10% 28.2%,5% 34.4%,0 50%,5% 65.6%,10% 71.8%,20% 80%,40% 90%,60% 96%,100% 100%,0% 100% );}div.word-cloud-wrap{text-align:center;display:contents;}div.word-cloud-wrap::before{content:'';height:100%;width:50%;float:right;shape-outside:polygon( 100% 0,0 0,40% 4%,60% 10%,80% 20%,90% 28.2%,95% 34.4%,100% 50%,95% 65.6%,90% 71.8%,80% 80%,60% 90%,40% 96%,0 100%,100% 100% );}.word{white-space:nowrap;border-radius:5px;display:inline-block;line-height:1;transition:.3s ease;font-family:TUoS Blake;vertical-align:middle;padding:",";&:hover{color:#00aeef !important;background-color:"," !important;}}"],(function(t){return t.width||"50%"}),(function(t){return t.height||"55%"}),(function(t){return t.radius||"10px"}),(function(t){return t.width||"60%"}),(function(t){return t.height||"55%"}),(function(t){return!0===t.backgroundColour?"8px 13px":""}),(function(t){return!0===t.backgroundColour?"#000":""})),l=i.ZP.button.withConfig({displayName:"visStyle__visHelperButton",componentId:"sc-14qwj2y-4"})(["position:fixed;bottom:20px;width:50px;height:50px;text-decoration:none;border-radius:35px;z-index:99;text-align:center;visibility:invisible;-webkit-transition:all 0.3s ease;-ms-transition:all 0.3s ease;-moz-transition:all 0.3s ease;-o-transition:all 0.3s ease;transition:all 0.3s ease;cursor:pointer;box-shadow:0 25px 50px -12px rgba(0,0,0,0.25);display:flex;flex-wrap:wrap;justify-content:center;align-items:center;&:focus{outline:none;}"]),s=(0,i.ZP)(l).withConfig({displayName:"visStyle__VisTagMenuBtn",componentId:"sc-14qwj2y-5"})(["opacity:0;right:140px;background-image:linear-gradient(135deg,rgb(255,121,180) 15%,rgb(255,134,250) 36%,rgb(41,197,255) 85%);&:hover{background-image:linear-gradient(45deg,rgb(255,121,180) 15%,rgb(255,134,250) 36%,rgb(41,197,255) 85%);}"]),d=(0,i.ZP)(l).withConfig({displayName:"visStyle__VisFooterBtn",componentId:"sc-14qwj2y-6"})(["opacity:0;right:80px;"]),c=(0,i.ZP)(l).withConfig({displayName:"visStyle__VisBackBtn",componentId:"sc-14qwj2y-7"})(["right:80px;opacity:1;"]),f=i.ZP.div.withConfig({displayName:"visStyle__EmbedCode",componentId:"sc-14qwj2y-8"})(["display:hidden;"])},74538:function(t,e,n){"use strict";n.d(e,{Z:function(){return O}});var i=n(67294),o=n(56292),a=n(25444),r=n(65957),u=n(48419),l=n(80014),s=n.n(l),d=n.p+"static/TUOS_PRIMARY_LOGO_LINEAR_BLACK-9dc28511e805e147ad2507cb69b5c261.png",c=n(96156),f=n(87329),g=n(38797),p=n.n(g),m=n(23431);function h(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function x(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?h(Object(n),!0).forEach((function(e){(0,c.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var b=i.memo((function(t){var e=t.words,n=t.width,o=t.height,l=t.radius,s=t.colours,d=t.backgroundColour,c=t.padding,g=t.menu,h=void 0===g?"":g,b=t.order,y=void 0===b?"default":b,v=t.minFontSize,w=void 0===v?.9:v,Z=t.maxFontSize,N=void 0===Z?2.1:Z,k=t.fontUnit,C=void 0===k?"rem":k,S=t.wordStyle,j=(0,i.useState)(e),O=j[0],I=j[1],E=s||["#808080","#ff5e5e","#fedf00","#0066b3","#6d3db3","#52ff9c","#ade1f8","#f0f0f0","#fff","#ff79b4","#89f064","#393939","#08e8ff","#00aeef"],T=d||[],_=C,z=N,L=w,A=(0,f.Z)(new Set(e.map((function(t){return t.count})))),P=(z-L)/(A.length-1);return(0,i.useEffect)((function(){return I(e),"random"==y&&I(O&&O.map((function(t){return{sort:Math.random(),value:t}})).sort((function(t,e){return t.sort-e.sort})).map((function(t){return t.value}))),function(){}}),[y,e]),(0,m.tZ)(u.kB,{width:n,height:o,radius:l,backgroundColour:T.length>0},(0,m.tZ)("div",{className:"word-cloud-wrap space-y-0 space-x-2 space-y-1"},O&&O.map((function(t){var e=(0,r.hQ)(L+P*(t.count-1),L,z),n=E[(0,r.LU)(E.length)]||"",i=T[(0,r.LU)(T.length)]||"";return(0,m.tZ)(a.Link,{key:t.name+" | "+t.type+(h?" | "+h:""),className:"word "+("category"==t.type?"font-semibold":""),to:"/visualisation/"+t.type+"/"+p()(t.name),style:x({fontSize:""+e+_,color:""+n,backgroundColor:""+i,padding:""+(c||"")},S||"")},t.name)}))))})),y=b;b.displayName="WordCloud";var v=n(10020),w=n(23201),Z=n(42775),N=n(9295),k=n(3750),C=n(92173),S=i.memo((function(t){var e=t.tagMenu,n=t.handleTagMenu,o=t.tags,a=(0,i.useState)(""),r=a[0],l=a[1],s=(0,i.useState)(o),d=s[0],c=s[1],f=(0,i.useState)(!1),g=f[0],p=f[1],h="text-white text-2xl transform group-hover:scale-110 transition duration-500";return(0,v.i)("vis-tag-button"),(0,v.i)("vis-footer-button"),(0,i.useEffect)((function(){var t=setTimeout((function(){return t=r.toLowerCase(),e=o.filter((function(e){return-1!=e.name.toLowerCase().indexOf(t)})),void c(e);var t,e}),1e3);return function(){clearTimeout(t)}}),[r]),(0,m.tZ)("div",{className:"relative"},(0,m.tZ)(u.vb,{onClick:function(){return n()},tabindex:"100",id:"vis-tag-button",className:"group",title:"Tag Menu"},(0,m.tZ)(w.YxP,{className:"text-white text-xl transform group-hover:scale-125 transition duration-500"})),(0,m.tZ)(u.Y0,{onClick:function(){return p(!g)},tabindex:"101",id:"vis-footer-button",className:"group "+(g?"bg-brand-blue":"bg-gray-800"),title:"Footer"},!g&&(0,m.tZ)(N.hwk,{className:h}),g&&(0,m.tZ)(N.oG4,{className:h})),(0,m.tZ)("div",{className:(e?"block":"translate-x-full")+" bg-gray-900 transform duration-500 transition fixed h-full w-full top-0 right-0",style:{zIndex:"1000",maxWidth:"450px"}},(0,m.tZ)("button",{onClick:function(){return n()},className:"text-gray-500 hover:text-red-400 bg-black rounded-md transition duration-300 text-lg px-3 py-1 absolute top-0 right-0 m-6 flex items-center"},(0,m.tZ)(Z.B4e,{className:"text-xl mr-1"}),"CLOSE"),(0,m.tZ)("div",{className:"w-full m-6"},(0,m.tZ)("div",{className:"inline-block focus:outline-none text-gray-600 bg-white shadow px-2 rounded-lg ml-2"},(0,m.tZ)(k.jRj,{className:"inline-block text-center text-xl -mt-2"}),(0,m.tZ)("input",{id:"tagSearch",onChange:function(t){return l(t.target.value)},value:r,className:"py-2 pl-2 text-base focus:outline-none pr-3 text-gray-600",style:{maxWidth:"50vw"},type:"text",name:"search",placeholder:"Search for tags"}))),(0,m.tZ)("div",{className:"w-full text-center"},0==d.length&&(0,m.tZ)("h1",{className:"text-gray-300"},"No results.")),(0,m.tZ)(y,{width:"100%",height:"auto",words:d,menu:"Tag menu",minFontSize:.97,maxFontSize:2.8,colour:["#808080","#ff5e5e","#fedf00","#6d3db3","#52ff9c","#ade1f8","#f0f0f0","#fff","#ff56a1","#89f064","#393939","#08e8ff","#00aeef"],wordStyle:{whiteSpace:"normal"}})),(0,m.tZ)(C.Z,{className:g?"fixed bottom-0":"hidden"}))})),j=S;S.displayName="VisTags";var O=function(t){var e=t.currentMDXs,n=t.nextPageRef,l=t.title,c=t.pageContext,f=(0,i.useState)(!1),g=f[0],p=f[1],h=l?"| "+l:"",x=l?(0,m.tZ)("p",null,"Viewing items in"," ",(0,m.tZ)("span",{className:"text-gray-400 font-semibold"},l),"."):(0,m.tZ)("p",null,"The latest from the University of Sheffield."),b=c.allVisCatTag&&c.allVisCatTag.length>1&&c.allVisCatTag.sort((function(t,e){return e.count.toString().localeCompare(t.count.toString(),"en",{numeric:!0})})).slice(0,20);function v(){p(!g)}return"undefined"!=typeof window&&localStorage.setItem("VisGoBackURL",c.pagePath),(0,m.tZ)("div",{className:"bg-gray-900"},(0,m.tZ)(o.Z,{title:"Visualisation "+h,keywords:["the university of sheffield","data visualisation","data visualisation hub","research","about dataviz",null!=l?l:""]}),(0,m.tZ)(j,{handleTagMenu:v,tagMenu:g,tags:c.allVisCatTag}),(0,m.tZ)("div",{className:"w-full pt-24 pb-8 text-center"},(0,m.tZ)("h1",{className:"w-full py-3 text-7xl font-extrabold",style:{background:"-webkit-linear-gradient(135deg, rgba(255,121,180,1) 50%, rgba(255,134,250,1) 36%, rgba(41,197,255,1) 35%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",MozBackgroundClip:"text",MozTextFillColor:"transparent"}},(0,m.tZ)(a.Link,{to:"/visualisation"},"InfoVis")),(0,m.tZ)("h3",{className:"text-gray-500"},x)),(0,m.tZ)("div",{className:"flex flex-wrap justify-center group"},(0,m.tZ)("div",{className:"flex w-full h-full justify-center"},(0,m.tZ)(y,{words:b,colours:["#ececec"],backgroundColour:["#1f2937"],padding:"8px 13px",order:"random"})),(0,m.tZ)("button",{onClick:function(){return v()},title:"Browse all tags",className:"text-center mt-3 lg:opacity-0 group-hover:opacity-100 text-brand-blue bg-black rounded-md transition duration-300 text-md px-3 py-2"},"Browse all tags")),(0,m.tZ)("div",{className:"min-h-80 flex flex-wrap justify-center pt-24 pb-32 bg-gray-900 px-5"},(0,m.tZ)("div",{className:"max-w-8xl w-full md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1",style:{gridAutoFlow:"dense",gridTemplateRows:"min-content"}},e.length>0&&e.map((function(t){var e,n,i=t.node,o=(0,r.MC)(i,!0),l=null!==(e=i.frontmatter.rowSpan)&&void 0!==e?e:1,c=null!==(n=i.frontmatter.columnSpan)&&void 0!==n?n:1;return(0,m.tZ)(a.Link,{to:i.fields.slug,key:i.id,style:{gridRow:"span "+l,gridColumn:"span "+c},className:"shadow-xl rounded-xl visualisationColourBorder"},(0,m.tZ)("img",{src:d,style:{maxWidth:"100px",left:"50%",top:"50%",transform:"translate(-50%, -50%)"},className:"absolute"}),(0,m.tZ)(s(),{delay:1e3},(0,m.tZ)(u.mI,{row:l,col:c},(0,m.tZ)("div",{className:"rounded-xl md:absolute md:top-0 md:left-0",style:{height:"100%",width:"100%",backgroundImage:"linear-gradient(135deg, #141e30 0%,#152033 6%,#20344c 65%,#243b55 100%)",backgroundRepeat:"no-repeat"}},(0,m.tZ)("img",{style:{height:"100%",width:"100%",objectFit:"cover",objectPosition:"center",transition:".2s ease-out"},className:"rounded-xl",src:o,alt:"Visualisation: "+i.frontmatter.title})))))})),(0,m.tZ)("div",{id:"visualisation-invite",style:{gridRow:"span 1",gridColumn:"span 1",visibility:"hidden"}},(0,m.tZ)(s(),{delay:1e3},(0,m.tZ)(u.mI,{row:1,col:1},(0,m.tZ)("div",{className:"group rounded-xl relative md:absolute md:top-0 md:left-0 text-center flex",style:{height:"100%",width:"100%",backgroundImage:"linear-gradient(135deg, #141e30 0%,#152033 6%,#20344c 65%,#243b55 100%)",backgroundRepeat:"no-repeat"}},(0,m.tZ)("h1",{className:"text-gray-300 font-bold m-auto"},"Add your visualisations here"),(0,m.tZ)(a.Link,{to:"/docs/21/07/2021/Contribute-visualisation",className:"absolute text-sm text-gray-200 font-bold cursor-pointer bg-gray-600 rounded-md py-1 px-2 hidden group-hover:block",style:{transform:"translate(-50%, 0%)",left:"50%",top:"70%"}},"Learn how")))))),(0,m.tZ)("div",{ref:n,style:{height:"100px",width:"100%"}})),(0,m.tZ)("div",{className:"text-center text-gray-600 pb-5 text-sm"},"This page is inspired by"," ",(0,m.tZ)("a",{href:"https://informationisbeautiful.net/beautifulnews",target:"_blank",rel:"noreferrer",className:"text-gray-500 hover:text-brand-blue"},"Beautiful News"),"."))}},54922:function(t,e,n){"use strict";n.d(e,{L:function(){return a}});var i=n(87329),o=n(67294);function a(t,e,n,a){var r=null!=a?a:10,u=null!=n?n:"visualisation-invite",l=(0,o.useState)((0,i.Z)(t.slice(0,r))),s=l[0],d=l[1],c=(0,o.useState)(!1),f=c[0],g=c[1],p=(0,o.useState)(t.length>r),m=p[0],h=p[1];return(0,o.useEffect)((function(){var t=new IntersectionObserver((function(t){t[0].isIntersecting&&g(!0)}),{root:null,rootMargin:"300px 0px 0px 0px"});e.current&&t.observe(e.current)}),[]),(0,o.useEffect)((function(){var e=t.length>s.length;if(h(e),!e){var n=document.querySelector("#"+u);n.style.visibility="visible",n.parentElement.appendChild(n)}}),[s]),(0,o.useEffect)((function(){if(f&&m){var e=t.length>s.length?t.slice(s.length,s.length+r):[];d([].concat((0,i.Z)(s),(0,i.Z)(e))),g(!1)}}),[f,m]),s}}}]);
//# sourceMappingURL=b51f199aa19f37d1bf4595db827078f98e6f061d-ad01f78a3a341d0d3d62.js.map