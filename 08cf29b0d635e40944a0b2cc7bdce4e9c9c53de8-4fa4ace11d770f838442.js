(self.webpackChunkdatavizhub_tuos=self.webpackChunkdatavizhub_tuos||[]).push([[3447],{32993:function(t,e,n){var r=n(40122),o="undefined"!=typeof Element,i="function"==typeof Map,a="function"==typeof Set,c="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function u(t,e){if(t===e)return!0;if(t&&e&&"object"==typeof t&&"object"==typeof e){if(t.constructor!==e.constructor)return!1;var n,r,s,f;if(Array.isArray(t)){if((n=t.length)!=e.length)return!1;for(r=n;0!=r--;)if(!u(t[r],e[r]))return!1;return!0}if(i&&t instanceof Map&&e instanceof Map){if(t.size!==e.size)return!1;for(f=t.entries();!(r=f.next()).done;)if(!e.has(r.value[0]))return!1;for(f=t.entries();!(r=f.next()).done;)if(!u(r.value[1],e.get(r.value[0])))return!1;return!0}if(a&&t instanceof Set&&e instanceof Set){if(t.size!==e.size)return!1;for(f=t.entries();!(r=f.next()).done;)if(!e.has(r.value[0]))return!1;return!0}if(c&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(e)){if((n=t.length)!=e.length)return!1;for(r=n;0!=r--;)if(t[r]!==e[r])return!1;return!0}if(t.constructor===RegExp)return t.source===e.source&&t.flags===e.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===e.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===e.toString();if((n=(s=Object.keys(t)).length)!==Object.keys(e).length)return!1;for(r=n;0!=r--;)if(!Object.prototype.hasOwnProperty.call(e,s[r]))return!1;if(o&&t instanceof Element)return!1;for(r=n;0!=r--;)if(("_owner"!==s[r]&&"__v"!==s[r]&&"__o"!==s[r]||!t.$$typeof)&&!u(t[s[r]],e[s[r]]))return!1;return!0}return t!=t&&e!=e}t.exports=function(t,e){try{return u(t,e)}catch(n){if((n.message||"").match(/stack|recursion/i))return r.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},35414:function(t,e,n){"use strict";n.d(e,{q:function(){return mt}});var r,o,i,a,c=n(45697),u=n.n(c),s=n(24839),f=n.n(s),l=n(32993),p=n.n(l),d=n(67294),y=n(46494),h=n.n(y),m=n(40122),b="bodyAttributes",T="htmlAttributes",g="titleAttributes",v={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},w=(Object.keys(v).map((function(t){return v[t]})),"charset"),A="cssText",O="href",C="http-equiv",S="innerHTML",E="itemprop",j="name",k="property",P="rel",I="src",L="target",x={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},M="defaultTitle",N="defer",R="encodeSpecialCharacters",_="onChangeClientState",q="titleTemplate",D=Object.keys(x).reduce((function(t,e){return t[x[e]]=e,t}),{}),B=[v.NOSCRIPT,v.SCRIPT,v.STYLE],H="data-react-helmet",z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Y=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},F=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),U=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},K=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n},V=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},W=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===e?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},Z=function(t){var e=X(t,v.TITLE),n=X(t,q);if(n&&e)return n.replace(/%s/g,(function(){return Array.isArray(e)?e.join(""):e}));var r=X(t,M);return e||r||void 0},$=function(t){return X(t,_)||function(){}},Q=function(t,e){return e.filter((function(e){return void 0!==e[t]})).map((function(e){return e[t]})).reduce((function(t,e){return U({},t,e)}),{})},G=function(t,e){return e.filter((function(t){return void 0!==t[v.BASE]})).map((function(t){return t[v.BASE]})).reverse().reduce((function(e,n){if(!e.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==t.indexOf(i)&&n[i])return e.concat(n)}return e}),[])},J=function(t,e,n){var r={};return n.filter((function(e){return!!Array.isArray(e[t])||(void 0!==e[t]&&ot("Helmet: "+t+' should be of type "Array". Instead found type "'+z(e[t])+'"'),!1)})).map((function(e){return e[t]})).reverse().reduce((function(t,n){var o={};n.filter((function(t){for(var n=void 0,i=Object.keys(t),a=0;a<i.length;a++){var c=i[a],u=c.toLowerCase();-1===e.indexOf(u)||n===P&&"canonical"===t[n].toLowerCase()||u===P&&"stylesheet"===t[u].toLowerCase()||(n=u),-1===e.indexOf(c)||c!==S&&c!==A&&c!==E||(n=c)}if(!n||!t[n])return!1;var s=t[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][s]&&(o[n][s]=!0,!0)})).reverse().forEach((function(e){return t.push(e)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var c=i[a],u=h()({},r[c],o[c]);r[c]=u}return t}),[]).reverse()},X=function(t,e){for(var n=t.length-1;n>=0;n--){var r=t[n];if(r.hasOwnProperty(e))return r[e]}return null},tt=(r=Date.now(),function(t){var e=Date.now();e-r>16?(r=e,t(e)):setTimeout((function(){tt(t)}),0)}),et=function(t){return clearTimeout(t)},nt="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||tt:n.g.requestAnimationFrame||tt,rt="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||et:n.g.cancelAnimationFrame||et,ot=function(t){return m&&"function"==typeof m.warn&&m.warn(t)},it=null,at=function(t,e){var n=t.baseTag,r=t.bodyAttributes,o=t.htmlAttributes,i=t.linkTags,a=t.metaTags,c=t.noscriptTags,u=t.onChangeClientState,s=t.scriptTags,f=t.styleTags,l=t.title,p=t.titleAttributes;st(v.BODY,r),st(v.HTML,o),ut(l,p);var d={baseTag:ft(v.BASE,n),linkTags:ft(v.LINK,i),metaTags:ft(v.META,a),noscriptTags:ft(v.NOSCRIPT,c),scriptTags:ft(v.SCRIPT,s),styleTags:ft(v.STYLE,f)},y={},h={};Object.keys(d).forEach((function(t){var e=d[t],n=e.newTags,r=e.oldTags;n.length&&(y[t]=n),r.length&&(h[t]=d[t].oldTags)})),e&&e(),u(t,y,h)},ct=function(t){return Array.isArray(t)?t.join(""):t},ut=function(t,e){void 0!==t&&document.title!==t&&(document.title=ct(t)),st(v.TITLE,e)},st=function(t,e){var n=document.getElementsByTagName(t)[0];if(n){for(var r=n.getAttribute(H),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(e),c=0;c<a.length;c++){var u=a[c],s=e[u]||"";n.getAttribute(u)!==s&&n.setAttribute(u,s),-1===o.indexOf(u)&&o.push(u);var f=i.indexOf(u);-1!==f&&i.splice(f,1)}for(var l=i.length-1;l>=0;l--)n.removeAttribute(i[l]);o.length===i.length?n.removeAttribute(H):n.getAttribute(H)!==a.join(",")&&n.setAttribute(H,a.join(","))}},ft=function(t,e){var n=document.head||document.querySelector(v.HEAD),r=n.querySelectorAll(t+"["+"data-react-helmet]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return e&&e.length&&e.forEach((function(e){var n=document.createElement(t);for(var r in e)if(e.hasOwnProperty(r))if(r===S)n.innerHTML=e.innerHTML;else if(r===A)n.styleSheet?n.styleSheet.cssText=e.cssText:n.appendChild(document.createTextNode(e.cssText));else{var c=void 0===e[r]?"":e[r];n.setAttribute(r,c)}n.setAttribute(H,"true"),o.some((function(t,e){return a=e,n.isEqualNode(t)}))?o.splice(a,1):i.push(n)})),o.forEach((function(t){return t.parentNode.removeChild(t)})),i.forEach((function(t){return n.appendChild(t)})),{oldTags:o,newTags:i}},lt=function(t){return Object.keys(t).reduce((function(e,n){var r=void 0!==t[n]?n+'="'+t[n]+'"':""+n;return e?e+" "+r:r}),"")},pt=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,n){return e[x[n]||n]=t[n],e}),e)},dt=function(t,e,n){switch(t){case v.TITLE:return{toComponent:function(){return t=e.title,n=e.titleAttributes,(r={key:t})[H]=!0,o=pt(n,r),[d.createElement(v.TITLE,o,t)];var t,n,r,o},toString:function(){return function(t,e,n,r){var o=lt(n),i=ct(e);return o?"<"+t+' data-react-helmet="true" '+o+">"+W(i,r)+"</"+t+">":"<"+t+' data-react-helmet="true">'+W(i,r)+"</"+t+">"}(t,e.title,e.titleAttributes,n)}};case b:case T:return{toComponent:function(){return pt(e)},toString:function(){return lt(e)}};default:return{toComponent:function(){return function(t,e){return e.map((function(e,n){var r,o=((r={key:n})[H]=!0,r);return Object.keys(e).forEach((function(t){var n=x[t]||t;if(n===S||n===A){var r=e.innerHTML||e.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=e[t]})),d.createElement(t,o)}))}(t,e)},toString:function(){return function(t,e,n){return e.reduce((function(e,r){var o=Object.keys(r).filter((function(t){return!(t===S||t===A)})).reduce((function(t,e){var o=void 0===r[e]?e:e+'="'+W(r[e],n)+'"';return t?t+" "+o:o}),""),i=r.innerHTML||r.cssText||"",a=-1===B.indexOf(t);return e+"<"+t+' data-react-helmet="true" '+o+(a?"/>":">"+i+"</"+t+">")}),"")}(t,e,n)}}}},yt=function(t){var e=t.baseTag,n=t.bodyAttributes,r=t.encode,o=t.htmlAttributes,i=t.linkTags,a=t.metaTags,c=t.noscriptTags,u=t.scriptTags,s=t.styleTags,f=t.title,l=void 0===f?"":f,p=t.titleAttributes;return{base:dt(v.BASE,e,r),bodyAttributes:dt(b,n,r),htmlAttributes:dt(T,o,r),link:dt(v.LINK,i,r),meta:dt(v.META,a,r),noscript:dt(v.NOSCRIPT,c,r),script:dt(v.SCRIPT,u,r),style:dt(v.STYLE,s,r),title:dt(v.TITLE,{title:l,titleAttributes:p},r)}},ht=f()((function(t){return{baseTag:G([O,L],t),bodyAttributes:Q(b,t),defer:X(t,N),encode:X(t,R),htmlAttributes:Q(T,t),linkTags:J(v.LINK,[P,O],t),metaTags:J(v.META,[j,w,C,k,E],t),noscriptTags:J(v.NOSCRIPT,[S],t),onChangeClientState:$(t),scriptTags:J(v.SCRIPT,[I,S],t),styleTags:J(v.STYLE,[A],t),title:Z(t),titleAttributes:Q(g,t)}}),(function(t){it&&rt(it),t.defer?it=nt((function(){at(t,(function(){it=null}))})):(at(t),it=null)}),yt)((function(){return null})),mt=(o=ht,a=i=function(t){function e(){return Y(this,e),V(this,t.apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.shouldComponentUpdate=function(t){return!p()(this.props,t)},e.prototype.mapNestedChildrenToProps=function(t,e){if(!e)return null;switch(t.type){case v.SCRIPT:case v.NOSCRIPT:return{innerHTML:e};case v.STYLE:return{cssText:e}}throw new Error("<"+t.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},e.prototype.flattenArrayTypeChildren=function(t){var e,n=t.child,r=t.arrayTypeChildren,o=t.newChildProps,i=t.nestedChildren;return U({},r,((e={})[n.type]=[].concat(r[n.type]||[],[U({},o,this.mapNestedChildrenToProps(n,i))]),e))},e.prototype.mapObjectTypeChildren=function(t){var e,n,r=t.child,o=t.newProps,i=t.newChildProps,a=t.nestedChildren;switch(r.type){case v.TITLE:return U({},o,((e={})[r.type]=a,e.titleAttributes=U({},i),e));case v.BODY:return U({},o,{bodyAttributes:U({},i)});case v.HTML:return U({},o,{htmlAttributes:U({},i)})}return U({},o,((n={})[r.type]=U({},i),n))},e.prototype.mapArrayTypeChildrenToProps=function(t,e){var n=U({},e);return Object.keys(t).forEach((function(e){var r;n=U({},n,((r={})[e]=t[e],r))})),n},e.prototype.warnOnInvalidChildren=function(t,e){return!0},e.prototype.mapChildrenToProps=function(t,e){var n=this,r={};return d.Children.forEach(t,(function(t){if(t&&t.props){var o=t.props,i=o.children,a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,n){return e[D[n]||n]=t[n],e}),e)}(K(o,["children"]));switch(n.warnOnInvalidChildren(t,i),t.type){case v.LINK:case v.META:case v.NOSCRIPT:case v.SCRIPT:case v.STYLE:r=n.flattenArrayTypeChildren({child:t,arrayTypeChildren:r,newChildProps:a,nestedChildren:i});break;default:e=n.mapObjectTypeChildren({child:t,newProps:e,newChildProps:a,nestedChildren:i})}}})),e=this.mapArrayTypeChildrenToProps(r,e)},e.prototype.render=function(){var t=this.props,e=t.children,n=K(t,["children"]),r=U({},n);return e&&(r=this.mapChildrenToProps(e,r)),d.createElement(o,r)},F(e,null,[{key:"canUseDOM",set:function(t){o.canUseDOM=t}}]),e}(d.Component),i.propTypes={base:u().object,bodyAttributes:u().object,children:u().oneOfType([u().arrayOf(u().node),u().node]),defaultTitle:u().string,defer:u().bool,encodeSpecialCharacters:u().bool,htmlAttributes:u().object,link:u().arrayOf(u().object),meta:u().arrayOf(u().object),noscript:u().arrayOf(u().object),onChangeClientState:u().func,script:u().arrayOf(u().object),style:u().arrayOf(u().object),title:u().string,titleAttributes:u().object,titleTemplate:u().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=o.peek,i.rewind=function(){var t=o.rewind();return t||(t=yt({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},a);mt.renderStatic=mt.rewind},24839:function(t,e,n){"use strict";var r,o=n(67294),i=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);t.exports=function(t,e,n){if("function"!=typeof t)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof e)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var u,s=[];function f(){u=t(s.map((function(t){return t.props}))),l.canUseDOM?e(u):n&&(u=n(u))}var l=function(t){var e,n;function o(){return t.apply(this,arguments)||this}n=t,(e=o).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,o.peek=function(){return u},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var t=u;return u=void 0,s=[],t};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){s.push(this),f()},a.componentDidUpdate=function(){f()},a.componentWillUnmount=function(){var t=s.indexOf(this);s.splice(t,1),f()},a.render=function(){return i.createElement(r,this.props)},o}(o.PureComponent);return a(l,"displayName","SideEffect("+function(t){return t.displayName||t.name||"Component"}(r)+")"),a(l,"canUseDOM",c),l}}},56292:function(t,e,n){"use strict";n(67294);var r=n(35414),o=n(25444),i=n(6125),a=n(23431),c=function(t){var e,n=t.title,c=t.author,u=t.description,s=t.lang,f=t.keywords,l=t.twitterCard,p=t.twitterImage,d=t.twitterImageAlt,y=t.meta,h=(0,o.useStaticQuery)("3815917638"),m=h.site,b=h.ogImage,T=u||m.siteMetadata.description,g=c||"dataviz.shef.ac.uk",v=l||"summary_large_image",w=(0,i.e)(p)||(0,i.e)(null==b||null===(e=b.childImageSharp)||void 0===e?void 0:e.gatsbyImageData),A=d||"Thumbnail for the website - dataviz.shef.ac.uk";return(0,a.tZ)(r.q,{defer:!1,htmlAttributes:{lang:s},title:n,titleTemplate:"%s | "+m.siteMetadata.title,meta:[{name:"description",content:T},{property:"og:title",content:n},{property:"og:description",content:T},{property:"og:type",content:"website"},{property:"twitter:site",content:"dataviz.shef.ac.uk"},{property:"twitter:site:id",content:"@OpenResShef"},{name:"twitter:card",content:v},{name:"twitter:creator",content:g},{name:"twitter:title",content:n},{name:"twitter:description",content:T},{name:"twitter:image",content:"https://dataviz.shef.ac.uk"+w},{name:"twitter:image:alt",content:A}].concat(y).concat(f.length>0?{name:"keywords",content:f.join(",")}:[])})};c.defaultProps={lang:"en",meta:[],description:"",keywords:[]},e.Z=c}}]);
//# sourceMappingURL=08cf29b0d635e40944a0b2cc7bdce4e9c9c53de8-4fa4ace11d770f838442.js.map