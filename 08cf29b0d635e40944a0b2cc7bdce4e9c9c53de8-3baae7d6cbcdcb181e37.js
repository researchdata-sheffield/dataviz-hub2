(self.webpackChunkdatavizhub_tuos=self.webpackChunkdatavizhub_tuos||[]).push([[3447],{46494:function(t){"use strict";t.exports=Object.assign},32993:function(t,e,r){var n=r(40122),o="undefined"!=typeof Element,i="function"==typeof Map,a="function"==typeof Set,c="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function u(t,e){if(t===e)return!0;if(t&&e&&"object"==typeof t&&"object"==typeof e){if(t.constructor!==e.constructor)return!1;var r,n,s,f;if(Array.isArray(t)){if((r=t.length)!=e.length)return!1;for(n=r;0!=n--;)if(!u(t[n],e[n]))return!1;return!0}if(i&&t instanceof Map&&e instanceof Map){if(t.size!==e.size)return!1;for(f=t.entries();!(n=f.next()).done;)if(!e.has(n.value[0]))return!1;for(f=t.entries();!(n=f.next()).done;)if(!u(n.value[1],e.get(n.value[0])))return!1;return!0}if(a&&t instanceof Set&&e instanceof Set){if(t.size!==e.size)return!1;for(f=t.entries();!(n=f.next()).done;)if(!e.has(n.value[0]))return!1;return!0}if(c&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(e)){if((r=t.length)!=e.length)return!1;for(n=r;0!=n--;)if(t[n]!==e[n])return!1;return!0}if(t.constructor===RegExp)return t.source===e.source&&t.flags===e.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===e.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===e.toString();if((r=(s=Object.keys(t)).length)!==Object.keys(e).length)return!1;for(n=r;0!=n--;)if(!Object.prototype.hasOwnProperty.call(e,s[n]))return!1;if(o&&t instanceof Element)return!1;for(n=r;0!=n--;)if(("_owner"!==s[n]&&"__v"!==s[n]&&"__o"!==s[n]||!t.$$typeof)&&!u(t[s[n]],e[s[n]]))return!1;return!0}return t!=t&&e!=e}t.exports=function(t,e){try{return u(t,e)}catch(r){if((r.message||"").match(/stack|recursion/i))return n.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},35414:function(t,e,r){"use strict";r.d(e,{q:function(){return mt}});var n,o,i,a,c=r(45697),u=r.n(c),s=r(24839),f=r.n(s),l=r(32993),p=r.n(l),d=r(67294),h=r(46494),y=r.n(h),m=r(40122),b="bodyAttributes",g="htmlAttributes",T="titleAttributes",v={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},w=(Object.keys(v).map((function(t){return v[t]})),"charset"),A="cssText",O="href",C="http-equiv",S="innerHTML",E="itemprop",k="name",j="property",P="rel",I="src",L="target",x={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},M="defaultTitle",N="defer",R="encodeSpecialCharacters",_="onChangeClientState",q="titleTemplate",D=Object.keys(x).reduce((function(t,e){return t[x[e]]=e,t}),{}),B=[v.NOSCRIPT,v.SCRIPT,v.STYLE],H="data-react-helmet",z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Y=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},F=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),U=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},K=function(t,e){var r={};for(var n in t)e.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n]);return r},Z=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},V=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===e?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},W=function(t){var e=X(t,v.TITLE),r=X(t,q);if(r&&e)return r.replace(/%s/g,(function(){return Array.isArray(e)?e.join(""):e}));var n=X(t,M);return e||n||void 0},$=function(t){return X(t,_)||function(){}},Q=function(t,e){return e.filter((function(e){return void 0!==e[t]})).map((function(e){return e[t]})).reduce((function(t,e){return U({},t,e)}),{})},G=function(t,e){return e.filter((function(t){return void 0!==t[v.BASE]})).map((function(t){return t[v.BASE]})).reverse().reduce((function(e,r){if(!e.length)for(var n=Object.keys(r),o=0;o<n.length;o++){var i=n[o].toLowerCase();if(-1!==t.indexOf(i)&&r[i])return e.concat(r)}return e}),[])},J=function(t,e,r){var n={};return r.filter((function(e){return!!Array.isArray(e[t])||(void 0!==e[t]&&ot("Helmet: "+t+' should be of type "Array". Instead found type "'+z(e[t])+'"'),!1)})).map((function(e){return e[t]})).reverse().reduce((function(t,r){var o={};r.filter((function(t){for(var r=void 0,i=Object.keys(t),a=0;a<i.length;a++){var c=i[a],u=c.toLowerCase();-1===e.indexOf(u)||r===P&&"canonical"===t[r].toLowerCase()||u===P&&"stylesheet"===t[u].toLowerCase()||(r=u),-1===e.indexOf(c)||c!==S&&c!==A&&c!==E||(r=c)}if(!r||!t[r])return!1;var s=t[r].toLowerCase();return n[r]||(n[r]={}),o[r]||(o[r]={}),!n[r][s]&&(o[r][s]=!0,!0)})).reverse().forEach((function(e){return t.push(e)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var c=i[a],u=y()({},n[c],o[c]);n[c]=u}return t}),[]).reverse()},X=function(t,e){for(var r=t.length-1;r>=0;r--){var n=t[r];if(n.hasOwnProperty(e))return n[e]}return null},tt=(n=Date.now(),function(t){var e=Date.now();e-n>16?(n=e,t(e)):setTimeout((function(){tt(t)}),0)}),et=function(t){return clearTimeout(t)},rt="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||tt:r.g.requestAnimationFrame||tt,nt="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||et:r.g.cancelAnimationFrame||et,ot=function(t){return m&&"function"==typeof m.warn&&m.warn(t)},it=null,at=function(t,e){var r=t.baseTag,n=t.bodyAttributes,o=t.htmlAttributes,i=t.linkTags,a=t.metaTags,c=t.noscriptTags,u=t.onChangeClientState,s=t.scriptTags,f=t.styleTags,l=t.title,p=t.titleAttributes;st(v.BODY,n),st(v.HTML,o),ut(l,p);var d={baseTag:ft(v.BASE,r),linkTags:ft(v.LINK,i),metaTags:ft(v.META,a),noscriptTags:ft(v.NOSCRIPT,c),scriptTags:ft(v.SCRIPT,s),styleTags:ft(v.STYLE,f)},h={},y={};Object.keys(d).forEach((function(t){var e=d[t],r=e.newTags,n=e.oldTags;r.length&&(h[t]=r),n.length&&(y[t]=d[t].oldTags)})),e&&e(),u(t,h,y)},ct=function(t){return Array.isArray(t)?t.join(""):t},ut=function(t,e){void 0!==t&&document.title!==t&&(document.title=ct(t)),st(v.TITLE,e)},st=function(t,e){var r=document.getElementsByTagName(t)[0];if(r){for(var n=r.getAttribute(H),o=n?n.split(","):[],i=[].concat(o),a=Object.keys(e),c=0;c<a.length;c++){var u=a[c],s=e[u]||"";r.getAttribute(u)!==s&&r.setAttribute(u,s),-1===o.indexOf(u)&&o.push(u);var f=i.indexOf(u);-1!==f&&i.splice(f,1)}for(var l=i.length-1;l>=0;l--)r.removeAttribute(i[l]);o.length===i.length?r.removeAttribute(H):r.getAttribute(H)!==a.join(",")&&r.setAttribute(H,a.join(","))}},ft=function(t,e){var r=document.head||document.querySelector(v.HEAD),n=r.querySelectorAll(t+"["+"data-react-helmet]"),o=Array.prototype.slice.call(n),i=[],a=void 0;return e&&e.length&&e.forEach((function(e){var r=document.createElement(t);for(var n in e)if(e.hasOwnProperty(n))if(n===S)r.innerHTML=e.innerHTML;else if(n===A)r.styleSheet?r.styleSheet.cssText=e.cssText:r.appendChild(document.createTextNode(e.cssText));else{var c=void 0===e[n]?"":e[n];r.setAttribute(n,c)}r.setAttribute(H,"true"),o.some((function(t,e){return a=e,r.isEqualNode(t)}))?o.splice(a,1):i.push(r)})),o.forEach((function(t){return t.parentNode.removeChild(t)})),i.forEach((function(t){return r.appendChild(t)})),{oldTags:o,newTags:i}},lt=function(t){return Object.keys(t).reduce((function(e,r){var n=void 0!==t[r]?r+'="'+t[r]+'"':""+r;return e?e+" "+n:n}),"")},pt=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,r){return e[x[r]||r]=t[r],e}),e)},dt=function(t,e,r){switch(t){case v.TITLE:return{toComponent:function(){return t=e.title,r=e.titleAttributes,(n={key:t})[H]=!0,o=pt(r,n),[d.createElement(v.TITLE,o,t)];var t,r,n,o},toString:function(){return function(t,e,r,n){var o=lt(r),i=ct(e);return o?"<"+t+' data-react-helmet="true" '+o+">"+V(i,n)+"</"+t+">":"<"+t+' data-react-helmet="true">'+V(i,n)+"</"+t+">"}(t,e.title,e.titleAttributes,r)}};case b:case g:return{toComponent:function(){return pt(e)},toString:function(){return lt(e)}};default:return{toComponent:function(){return function(t,e){return e.map((function(e,r){var n,o=((n={key:r})[H]=!0,n);return Object.keys(e).forEach((function(t){var r=x[t]||t;if(r===S||r===A){var n=e.innerHTML||e.cssText;o.dangerouslySetInnerHTML={__html:n}}else o[r]=e[t]})),d.createElement(t,o)}))}(t,e)},toString:function(){return function(t,e,r){return e.reduce((function(e,n){var o=Object.keys(n).filter((function(t){return!(t===S||t===A)})).reduce((function(t,e){var o=void 0===n[e]?e:e+'="'+V(n[e],r)+'"';return t?t+" "+o:o}),""),i=n.innerHTML||n.cssText||"",a=-1===B.indexOf(t);return e+"<"+t+' data-react-helmet="true" '+o+(a?"/>":">"+i+"</"+t+">")}),"")}(t,e,r)}}}},ht=function(t){var e=t.baseTag,r=t.bodyAttributes,n=t.encode,o=t.htmlAttributes,i=t.linkTags,a=t.metaTags,c=t.noscriptTags,u=t.scriptTags,s=t.styleTags,f=t.title,l=void 0===f?"":f,p=t.titleAttributes;return{base:dt(v.BASE,e,n),bodyAttributes:dt(b,r,n),htmlAttributes:dt(g,o,n),link:dt(v.LINK,i,n),meta:dt(v.META,a,n),noscript:dt(v.NOSCRIPT,c,n),script:dt(v.SCRIPT,u,n),style:dt(v.STYLE,s,n),title:dt(v.TITLE,{title:l,titleAttributes:p},n)}},yt=f()((function(t){return{baseTag:G([O,L],t),bodyAttributes:Q(b,t),defer:X(t,N),encode:X(t,R),htmlAttributes:Q(g,t),linkTags:J(v.LINK,[P,O],t),metaTags:J(v.META,[k,w,C,j,E],t),noscriptTags:J(v.NOSCRIPT,[S],t),onChangeClientState:$(t),scriptTags:J(v.SCRIPT,[I,S],t),styleTags:J(v.STYLE,[A],t),title:W(t),titleAttributes:Q(T,t)}}),(function(t){it&&nt(it),t.defer?it=rt((function(){at(t,(function(){it=null}))})):(at(t),it=null)}),ht)((function(){return null})),mt=(o=yt,a=i=function(t){function e(){return Y(this,e),Z(this,t.apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.shouldComponentUpdate=function(t){return!p()(this.props,t)},e.prototype.mapNestedChildrenToProps=function(t,e){if(!e)return null;switch(t.type){case v.SCRIPT:case v.NOSCRIPT:return{innerHTML:e};case v.STYLE:return{cssText:e}}throw new Error("<"+t.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},e.prototype.flattenArrayTypeChildren=function(t){var e,r=t.child,n=t.arrayTypeChildren,o=t.newChildProps,i=t.nestedChildren;return U({},n,((e={})[r.type]=[].concat(n[r.type]||[],[U({},o,this.mapNestedChildrenToProps(r,i))]),e))},e.prototype.mapObjectTypeChildren=function(t){var e,r,n=t.child,o=t.newProps,i=t.newChildProps,a=t.nestedChildren;switch(n.type){case v.TITLE:return U({},o,((e={})[n.type]=a,e.titleAttributes=U({},i),e));case v.BODY:return U({},o,{bodyAttributes:U({},i)});case v.HTML:return U({},o,{htmlAttributes:U({},i)})}return U({},o,((r={})[n.type]=U({},i),r))},e.prototype.mapArrayTypeChildrenToProps=function(t,e){var r=U({},e);return Object.keys(t).forEach((function(e){var n;r=U({},r,((n={})[e]=t[e],n))})),r},e.prototype.warnOnInvalidChildren=function(t,e){return!0},e.prototype.mapChildrenToProps=function(t,e){var r=this,n={};return d.Children.forEach(t,(function(t){if(t&&t.props){var o=t.props,i=o.children,a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,r){return e[D[r]||r]=t[r],e}),e)}(K(o,["children"]));switch(r.warnOnInvalidChildren(t,i),t.type){case v.LINK:case v.META:case v.NOSCRIPT:case v.SCRIPT:case v.STYLE:n=r.flattenArrayTypeChildren({child:t,arrayTypeChildren:n,newChildProps:a,nestedChildren:i});break;default:e=r.mapObjectTypeChildren({child:t,newProps:e,newChildProps:a,nestedChildren:i})}}})),e=this.mapArrayTypeChildrenToProps(n,e)},e.prototype.render=function(){var t=this.props,e=t.children,r=K(t,["children"]),n=U({},r);return e&&(n=this.mapChildrenToProps(e,n)),d.createElement(o,n)},F(e,null,[{key:"canUseDOM",set:function(t){o.canUseDOM=t}}]),e}(d.Component),i.propTypes={base:u().object,bodyAttributes:u().object,children:u().oneOfType([u().arrayOf(u().node),u().node]),defaultTitle:u().string,defer:u().bool,encodeSpecialCharacters:u().bool,htmlAttributes:u().object,link:u().arrayOf(u().object),meta:u().arrayOf(u().object),noscript:u().arrayOf(u().object),onChangeClientState:u().func,script:u().arrayOf(u().object),style:u().arrayOf(u().object),title:u().string,titleAttributes:u().object,titleTemplate:u().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=o.peek,i.rewind=function(){var t=o.rewind();return t||(t=ht({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},a);mt.renderStatic=mt.rewind},24839:function(t,e,r){"use strict";var n,o=r(67294),i=(n=o)&&"object"==typeof n&&"default"in n?n.default:n;function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);t.exports=function(t,e,r){if("function"!=typeof t)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof e)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var u,s=[];function f(){u=t(s.map((function(t){return t.props}))),l.canUseDOM?e(u):r&&(u=r(u))}var l=function(t){var e,r;function o(){return t.apply(this,arguments)||this}r=t,(e=o).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r,o.peek=function(){return u},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var t=u;return u=void 0,s=[],t};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){s.push(this),f()},a.componentDidUpdate=function(){f()},a.componentWillUnmount=function(){var t=s.indexOf(this);s.splice(t,1),f()},a.render=function(){return i.createElement(n,this.props)},o}(o.PureComponent);return a(l,"displayName","SideEffect("+function(t){return t.displayName||t.name||"Component"}(n)+")"),a(l,"canUseDOM",c),l}}},75871:function(t,e,r){"use strict";r(67294);var n=r(35414),o=r(1597),i=r(89230),a=r(23431),c=function(t){var e,r=t.title,c=t.author,u=t.description,s=t.lang,f=t.keywords,l=t.twitterCard,p=t.twitterImage,d=t.twitterImageAlt,h=t.meta,y=(0,o.useStaticQuery)("3815917638"),m=y.site,b=y.ogImage,g=u||m.siteMetadata.description,T=c||"dataviz.shef.ac.uk",v=l||"summary_large_image",w=(0,i.d)(p)||(0,i.d)(null==b||null===(e=b.childImageSharp)||void 0===e?void 0:e.gatsbyImageData),A=d||"Thumbnail for the website - dataviz.shef.ac.uk";return(0,a.tZ)(n.q,{defer:!1,htmlAttributes:{lang:s},title:r,titleTemplate:"%s | "+m.siteMetadata.title,meta:[{name:"description",content:g},{property:"og:title",content:r},{property:"og:description",content:g},{property:"og:type",content:"website"},{property:"twitter:site",content:"dataviz.shef.ac.uk"},{property:"twitter:site:id",content:"@OpenResShef"},{name:"twitter:card",content:v},{name:"twitter:creator",content:T},{name:"twitter:title",content:r},{name:"twitter:description",content:g},{name:"twitter:image",content:"https://dataviz.shef.ac.uk"+w},{name:"twitter:image:alt",content:A}].concat(h).concat(f.length>0?{name:"keywords",content:f.join(",")}:[])},(0,a.tZ)("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),(0,a.tZ)("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:!0}),(0,a.tZ)("link",{href:"https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&family=Source+Serif+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap",rel:"stylesheet"}))};c.defaultProps={lang:"en",meta:[],description:"",keywords:[]},e.Z=c}}]);
//# sourceMappingURL=08cf29b0d635e40944a0b2cc7bdce4e9c9c53de8-3baae7d6cbcdcb181e37.js.map