(self.webpackChunkdatavizhub_tuos=self.webpackChunkdatavizhub_tuos||[]).push([[993],{5583:function(e,t,n){"use strict";n.r(t);var a=n(7294),r=n(5444),o=n(6613),s=n(2173),l=n(2634),i=n(6626),u=n(6292),c=n(563),d=n.n(c),f=n(7494),v=n(2723),g=n(7505),m=n(3431);t.default=function(e){var t=e.data.allMdx,n=e.pageContext,c=(0,a.useState)(!1),x=c[0],p=c[1];function h(){(p(!x),screen.width<=1280&&!1===x)&&document.querySelector("#tagMenu").scrollIntoView()}return(0,g.s)("blogBackground"),(0,m.tZ)(a.Fragment,null,(0,m.tZ)(u.Z,{title:"Blog",keywords:["the university of sheffield","data visualisation","data visualisation hub","research"]}),(0,m.tZ)(o.Z,null),(0,m.tZ)("div",{className:(1!=n.currentPage?"min-h-60":"min-h-100")+" w-full overflow-hidden flex flex-col items-center justify-center text-center relative z-10"},(0,m.tZ)("div",{id:"blogBackground",className:"absolute top-0 left-0 w-full h-full transform scale-110",style:{background:"linear-gradient(0deg, rgba(255, 255, 255, 0.70), rgba(255, 255, 255, 0.70)), url("+v.Z+")",backgroundPosition:"center",backgroundSize:"cover",backgroundAttachment:"fixed"}}),(0,m.tZ)(d(),{cascade:!0,top:!0,delay:700},(0,m.tZ)("div",{className:"text-black",style:{textShadow:"#fff 0px 0px 5px"}},(0,m.tZ)("h1",{className:"text-6xl font-extrabold"},"Blog"),(0,m.tZ)("p",{className:"text-md font-semibold mt-5 px-5",style:{maxWidth:"500px"}},"“The greatest value of a picture is when it forces us to notice what we never expected to see.” - John W. Tukey"))),(0,m.tZ)(d(),{cascade:!0,top:!0,delay:700},(0,m.tZ)("div",{className:1!==n.currentPage?"hidden":""},(0,m.tZ)(i.Z,{pageContext:n,handleTagMenu:h,tagMenu:x}),(0,m.tZ)("div",{className:"mt-10"},(0,m.tZ)(r.Link,{to:"/blog#read"},(0,m.tZ)(f.Zv,{className:"text-sm bg-gray-700 text-white hover:bg-black"},"Start reading")))))),(0,m.tZ)(l.Z,{allMdx:t,pageContext:n,pageType:"/blog",handleTagMenu:h,tagMenu:x}),(0,m.tZ)(s.Z,null))}},7505:function(e,t,n){"use strict";n.d(t,{s:function(){return r}});var a=n(7294);function r(e,t,n,r){void 0===t&&(t=!0),void 0===n&&(n=.06),void 0===r&&(r=.05);var o=(0,a.useState)({x:0,y:0}),s=o[0],l=o[1];return(0,a.useEffect)((function(){var a=function(e){var t=e.clientX-s.x,a=e.clientY-s.y;l({x:e.clientX,y:e.clientY});var i=function(e){var t=getComputedStyle(e),n=t.transform||t.MozTransform;if(null==typeof n||!n||"none"==n)return{x:0,y:0};var a=n.replace(/[^0-9\-.,]/g,"").split(",");return{x:parseInt(a[12])||parseInt(a[4]),y:parseInt(a[13])||parseInt(a[5])}}(o);o.style.transform="translate("+(-n*t+i.x)+"px, "+(-r*a+i.y)+"px) scale(1.1)"},o=document.querySelector("#"+e);if(o){o.style.transition="none";var i=o;return!0===t&&(i=o.parentElement),i.addEventListener("mousemove",a),i.addEventListener("mouseleave",(function(){o.style.transition=".5s ease",o.style.top=0,o.style.left=0})),function(){o&&(i.removeEventListener("mousemove",a),i.removeEventListener("mouseleave",(function(){o.style.transition="none"})))}}}),[s]),s}}}]);
//# sourceMappingURL=component---src-templates-blog-blog-template-jsx-2cbd6c5469749642f4c6.js.map