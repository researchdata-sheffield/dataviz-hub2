(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{F2w4:function(t,e,a){t.exports=a.p+"static/bg-d2e315389be310ad1df988334939fa79.jpg"},Muxj:function(t,e,a){"use strict";a.r(e);var r=a("q1tI"),n=a.n(r),s=a("gY85"),i=a("aN7D"),o=a("c6+h"),c=a("t8Zj"),l=a("9Hrx"),u=a("Wbzz"),h=a("Tgqd"),d=a("WG1l"),g=a.n(d),p=a("hXnw"),b=a.n(p),f=a("/eHF"),m=a.n(f),x=a("F2w4"),y=a.n(x),v=a("x/DL"),j=a("AeFk"),O=function(t){function e(){for(var e,a=arguments.length,r=new Array(a),n=0;n<a;n++)r[n]=arguments[n];return(e=t.call.apply(t,[this].concat(r))||this).state={query:"",results:[]},e.componentDidMount=function(){setTimeout((function(){if(e.props.location.state&&e.props.location.state.searchWord){var t=e.props.location.state.searchWord,a=document.getElementById("pageSearch");e.setState({query:t}),a.setAttribute("value",t),e.searchFromHome(t)}}),100)},e.search=function(t){var a=t.target.value;if(e.state.query.length>-1){var r=e.getSearchResults(a);e.setState({results:r,query:a})}else e.setState({results:[],query:a})},e.searchFromHome=function(t){var a=t;if(e.state.query.length>-1){var r=e.getSearchResults(a);e.setState({results:r,query:a})}else e.setState({results:[],query:a})},e}Object(l.a)(e,t);var a=e.prototype;return a.render=function(){var t=this;return Object(j.a)("div",{className:this.props.classNames+" relative text-gray-700 w-full text-center"},Object(j.a)("div",{className:"min-h-60 pt-40 pb-10",style:{backgroundImage:"url("+y.a+")",backgroundSize:"cover",width:"100%"}},Object(j.a)(b.a,{top:!0,duration:1e3,cascade:!0},Object(j.a)("p",{className:"text-2xl xl:text-3xl text-white mb-3 font-semibold"},"Search@dataviz.shef")),Object(j.a)(m.a,{bottom:!0,duration:1500},Object(j.a)("div",{className:"inline-block focus:outline-none text-gray-600 bg-white shadow p-3 rounded-lg"},Object(j.a)(h.a,{className:"inline-block text-center text-3xl -mt-1"}),Object(j.a)("input",{id:"pageSearch",onChange:this.search,onInput:this.search,autoComplete:"off",className:"search__input py-0 pl-4 text-lg focus:outline-none pr-5 text-gray-600",style:{minWidth:"25vw"},type:"text",name:"search",placeholder:"Search title, description, date..."})))),Object(j.a)("div",{className:"search__list bg-gray-100"},Object(j.a)((function(){if(t.state.results.length>0&&t.state.query.length>0){var e=Object(u.useStaticQuery)("2868699018");return Object(j.a)("div",null,Object(j.a)("div",{className:"bg-orange-700 text-gray-100 py-2"},"Found ",t.state.results.length," results for you."),Object(j.a)("div",{className:"flex flex-wrap py-10 xl:pt-32 xl:pb-64 justify-center bg-gray-100"},t.state.results.map((function(a,r){var n;e.allMdx.edges.map((function(t){var e=t.node;a.id==e.id&&(n=Object(v.a)(e))}));var s=Object(v.c)(a.title,8),i=Object(v.c)(a.description,30),o="text-blue-400 bg-black";return Object(j.a)("a",{href:""+a.url,target:"_blank",rel:"noopener noreferrer",key:r},Object(j.a)("div",{style:{width:"363px",backgroundImage:"url("+n+")",backgroundSize:"cover",backgroundPosition:"center",borderRadius:"10px",minHeight:"420px"},className:"shadow-lg hover:shadow-xl rounded-lg group text-left relative md:mx-6 my-6 transform hover:scale-105 transition duration-500"},Object(j.a)("div",{className:"rounded-lg max-h-60 w-full p-6 transition duration-700 bg-black-35 group-hover:bg-black-75",style:{minHeight:"420px"}},Object(j.a)("div",{className:"absolute pt-8 lg:pt-16 2xl:pt-24 overflow-hidden",style:{maxWidth:"320px"}},Object(j.a)("h1",{className:"group-hover:-translate-y-8 text-white font-bold leading-7 text-2xl transform transition duration-100"},Object(j.a)(g.a,{highlightClassName:o,textToHighlight:s,searchWords:t.state.query.split()})),Object(j.a)("h1",{className:"group-hover:hidden text-gray-400 leading-7 my-4 font-bold text-lg transition duration-500",style:{textShadow:"#000 0px 0px 30px"}},a.author.map((function(e,a,r){return Object(j.a)(g.a,{className:"text-white",highlightClassName:o,textToHighlight:r.length-1===a?e:e.concat(", "),searchWords:t.state.query.split(),key:e})}))),Object(j.a)("h1",{className:"group-hover:hidden text-gray-400 font-bold transition duration-500"},"CAT:  ",Object(j.a)(g.a,{className:"text-white",highlightClassName:o,textToHighlight:a.category[0].toUpperCase(),searchWords:t.state.query.split()})),Object(j.a)("h1",{className:"group-hover:hidden text-gray-400 font-bold transition duration-500"},"TAG:  ",a.tag.map((function(e,a,n){return r<3&&Object(j.a)(g.a,{className:"text-white",highlightClassName:o,textToHighlight:n.length-1===a?e.toUpperCase():e.toUpperCase().concat(", "),searchWords:t.state.query.split(),key:e})})),a.tag.length>3&&Object(j.a)("p",{className:"inline-block text-white"}," +",a.tag.length-3," more")),Object(j.a)("p",{className:"hidden group-hover:block my-4 text-xs text-gray-500 w-full font-semibold transform group-hover:-translate-y-12 transition duration-500"},Object(j.a)(g.a,{highlightClassName:o,textToHighlight:a.url.slice(5).toUpperCase(),searchWords:t.state.query.split()})),Object(j.a)("h1",{className:"hidden group-hover:block text-white leading-5 text-lg py-3 transform group-hover:-translate-y-12 transition duration-500"},Object(j.a)(g.a,{highlightClassName:o,textToHighlight:i,searchWords:t.state.query.split()}))))))}))))}return t.state.query.length>0?Object(j.a)("div",{className:"bg-orange-700 text-gray-100 py-2"},"No results for ",t.state.query):Object(j.a)("div",{className:"bg-orange-700 text-gray-100 py-2"},"Awaiting for your input ...")}),null)))},a.getSearchResults=function(t){var e=window.__FLEXSEARCH__.en.index,a=window.__FLEXSEARCH__.en.store;if(t&&e){var r=[];return Object.keys(e).forEach((function(a){var n;(n=r).push.apply(n,Object(c.a)(e[a].values.search({query:t,suggest:!0})))})),r=Array.from(new Set(r)),a.filter((function(t){return r.includes(t.id)?t:null})).map((function(t){return t.node}))}return[]},e}(r.Component);e.default=function(t){var e=t.location;return Object(j.a)(n.a.Fragment,null,Object(j.a)(s.a,{title:"Search",keywords:["the university of sheffield","data visualisation","data visualisation hub","research","dataviz.shef","search dataviz"]}),Object(j.a)(i.a,null),Object(j.a)("div",{className:"flex flex-wrap"},Object(j.a)(O,{location:e})),Object(j.a)(o.a,null))}},ZdGz:function(t,e,a){t.exports=a.p+"static/no_image_1-cbab1c85fd0b5df4703007ed018da08a.png"},iR2b:function(t,e,a){t.exports=a.p+"static/no_image_5-0b0b76e89033963a72b34200d192a851.png"},qNCg:function(t,e,a){t.exports=a.p+"static/no_image_2-8588841d1e101e5cd1794737b8392414.png"},"sh/8":function(t,e,a){t.exports=a.p+"static/no_image_3-5fff908ab0abc7a6edf3a19225c0b9a5.png"},uhbi:function(t,e,a){t.exports=a.p+"static/no_image_4-c823d2bf145dd881fe77c9265116b3e8.png"},"x/DL":function(t,e,a){"use strict";a.d(e,"c",(function(){return g})),a.d(e,"a",(function(){return p})),a.d(e,"b",(function(){return b}));var r=a("ZdGz"),n=a.n(r),s=a("qNCg"),i=a.n(s),o=a("sh/8"),c=a.n(o),l=a("uhbi"),u=a.n(l),h=a("iR2b"),d=a.n(h);function g(t,e){var a=t?t.split(" ").splice(0,e):"";return a=a.length<e?a.join(" "):a.join(" ").concat(" ...")}function p(t){var e;if(t.frontmatter&&t.frontmatter.thumbnail&&t.frontmatter.thumbnail.childImageSharp)e=t.frontmatter.thumbnail.childImageSharp.fluid.src;else{var a=[n.a,i.a,c.a,u.a,d.a];e=a[Math.floor(b()*a.length)]}return e}function b(){return"undefined"!=typeof window&&window.crypto.getRandomValues(new Uint16Array(1))[0]/Math.pow(2,16)}}}]);
//# sourceMappingURL=component---src-pages-search-jsx-4950ec606b602cd8278a.js.map