"use strict";(self.webpackChunkreinherit_digital_hub_prototype=self.webpackChunkreinherit_digital_hub_prototype||[]).push([[339],{1809:function(e,t,r){r.d(t,{Z:function(){return T}});var n=r(6156),c=r(1253),a=r(5900),o=r.n(a),l=r(7294),i=r(9541),u=r(8870),s=r(6132),f=r(5893),d=["bsPrefix","className","variant","as"];function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var p=l.forwardRef((function(e,t){var r=e.bsPrefix,a=e.className,l=e.variant,u=e.as,s=void 0===u?"img":u,p=(0,c.Z)(e,d),b=(0,i.vE)(r,"card-img");return(0,f.jsx)(s,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({ref:t,className:o()(l?"".concat(b,"-").concat(l):b,a)},p))}));p.displayName="CardImg";var b=p,g=r(8893),y=["bsPrefix","className","as"];function O(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?O(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var h=l.forwardRef((function(e,t){var r=e.bsPrefix,n=e.className,a=e.as,u=void 0===a?"div":a,s=(0,c.Z)(e,y),d=(0,i.vE)(r,"card-header"),m=(0,l.useMemo)((function(){return{cardHeaderBsPrefix:d}}),[d]);return(0,f.jsx)(g.Z.Provider,{value:m,children:(0,f.jsx)(u,v(v({ref:t},s),{},{className:o()(n,d)}))})}));h.displayName="CardHeader";var j=h,E=["bsPrefix","className","bg","text","border","body","children","as"];function P(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function w(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?P(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):P(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var x=(0,s.Z)("h5"),Z=(0,s.Z)("h6"),S=(0,u.Z)("card-body"),N=(0,u.Z)("card-title",{Component:x}),k=(0,u.Z)("card-subtitle",{Component:Z}),I=(0,u.Z)("card-link",{Component:"a"}),C=(0,u.Z)("card-text",{Component:"p"}),D=(0,u.Z)("card-footer"),R=(0,u.Z)("card-img-overlay"),_=l.forwardRef((function(e,t){var r=e.bsPrefix,n=e.className,a=e.bg,l=e.text,u=e.border,s=e.body,d=e.children,m=e.as,p=void 0===m?"div":m,b=(0,c.Z)(e,E),g=(0,i.vE)(r,"card");return(0,f.jsx)(p,w(w({ref:t},b),{},{className:o()(n,g,a&&"bg-".concat(a),l&&"text-".concat(l),u&&"border-".concat(u)),children:s?(0,f.jsx)(S,{children:d}):d}))}));_.displayName="Card",_.defaultProps={body:!1};var T=Object.assign(_,{Img:b,Title:N,Subtitle:k,Body:S,Link:I,Text:C,Header:j,Footer:D,ImgOverlay:R})},845:function(e,t,r){var n=r(7294),c=r(994),a=r(7408);t.Z=function(e){return n.createElement(c.Z,null,n.createElement(a.Z,null,e.side),n.createElement(a.Z,{lg:12,xxl:10},e.children))}},4107:function(e,t,r){var n=r(7606),c=r(5444),a=r(7294),o=r(7408),l=r(1809),i=r(1708),u=r(8478);t.Z=function(e){var t=(0,u.T)();return a.createElement(o.Z,{key:e.uid&&e.uid},a.createElement(l.Z,{className:"shadow rounded border-light",style:{fontSize:".95em"}},a.createElement(c.rU,{to:e.url,className:"text-decoration-none text-dark"},a.createElement(l.Z.Body,null,a.createElement(l.Z.Title,{style:{fontSize:"1.2em"}},a.createElement(n.G,{icon:e.faIcon,size:"1x"})," ",e.title),a.createElement(l.Z.Text,null,e.excerpt),a.createElement("br",null),e.children)),a.createElement(l.Z.Footer,{className:"bg-light border-0"},a.createElement("small",{className:"text-muted d-inline"},e.targetAudience.map((function(e){return e+" "})),e.uid&&a.createElement(i.Z.Check,{type:"checkbox",label:"(save to personal collection)",defaultChecked:!!t.retrieveItem(e.uid),onClick:function(){return t.toggleItem({value:!1,id:e.uid,title:e.title,type:e.type})}}),e.footerContent&&e.footerContent))))}},8116:function(e,t,r){var n=r(7294),c=r(994);t.Z=function(e){return n.createElement(c.Z,{xs:1,md:2,xxl:3,className:"g-3"},e.children)}},8478:function(e,t,r){r.d(t,{T:function(){return c}});var n=r(7388),c=function(){var e="REINHERIT_COLLECTION",t=function(){if(!n.m.checkSSR()){var t=localStorage.getItem(e);if(!t)return localStorage.setItem(e,"[]"),[];var r=JSON.parse(t);return r||(localStorage.setItem(e,"[]"),[])}};return{retrieveItem:function(e){if(!n.m.checkSSR()){var r=t();if(0===r.length)return null;var c=r.find((function(t){return t.id===e}));return c||null}},toggleItem:function(r){if(!n.m.checkSSR()){var c=t();if(c.find((function(e){return e.id===r.id}))){var a=c.filter((function(e){return e.id!==r.id}));return localStorage.setItem(e,JSON.stringify(a)),a}var o=JSON.parse(JSON.stringify(c));return o.push(r),localStorage.setItem(e,JSON.stringify(o)),o}},retrieveCollection:t,saveCollection:function(t){n.m.checkSSR()||localStorage.setItem(e,JSON.stringify(t))}}};c()},1771:function(e,t,r){r.r(t),r.d(t,{default:function(){return S}});var n=r(7294),c=r(845),a=r(8014),o=r(5444),l=r(6156),i=r(1253),u=r(5900),s=r.n(u),f=r(9541),d=r(5893),m=["bsPrefix","bg","pill","text","className","as"];function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){(0,l.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var g=n.forwardRef((function(e,t){var r=e.bsPrefix,n=e.bg,c=e.pill,a=e.text,o=e.className,l=e.as,u=void 0===l?"span":l,p=(0,i.Z)(e,m),g=(0,f.vE)(r,"badge");return(0,d.jsx)(u,b(b({ref:t},p),{},{className:s()(o,g,c&&"rounded-pill",a&&"text-".concat(a),n&&"bg-".concat(n))}))}));g.displayName="Badge",g.defaultProps={bg:"primary",pill:!1};var y=g,O=r(9850),v=r(6666),h=r(1735),j=r(8478),E=r(8116),P=r(4107),w=function(){var e=(0,o.K2)(x),t=(0,v.n)(),r=((0,j.T)(),(0,h.h)().theme);return n.createElement(n.Fragment,null,n.createElement("p",null,"Login example. User role: ",t.curUserRole),t.signedIn&&n.createElement("p",null,n.createElement("a",{href:"/admin/admin.html#/collections/news",target:"_blank"},n.createElement(y,{bg:"",style:{background:r.styles.MAIN_COLOR}},"Add +"," "))," ","You are currently seeing news available for:"," ",n.createElement("b",null,O.U[r.groupKey].LABEL)),n.createElement(E.Z,null,e.allMarkdownRemark.edges.map((function(e){return e.node.frontmatter.target_audience.includes(r.groupKey)?n.createElement(P.Z,{key:e.node.fields.typeCountId,excerpt:e.node.excerpt,faIcon:a.Fwd,targetAudience:e.node.frontmatter.target_audience,title:e.node.frontmatter.title,type:"news",url:"/content/news/"+e.node.fields.typeCountId+"?mode="+r.mode,uid:e.node.fields.typeCountId},n.createElement("span",null,e.node.fields.typeCountId)):null}))))},x="179328149",Z=r(5101),S=function(){return n.createElement(Z.Z,null,n.createElement("h1",null,"News"),n.createElement("br",null),n.createElement(c.Z,{side:n.createElement(n.Fragment,null,n.createElement("p",null,"All news relevant for Reinherit ... "),n.createElement("p",null,"Scroll down / click on card etc. ... "))},n.createElement(w,null)))}},7388:function(e,t,r){r.d(t,{m:function(){return n}});var n={checkSSR:function(){return"undefined"==typeof window}}}}]);
//# sourceMappingURL=component---src-pages-content-news-index-tsx-19301ee1c437a3f58fc7.js.map