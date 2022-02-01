"use strict";(self.webpackChunkreinherit_digital_hub_prototype=self.webpackChunkreinherit_digital_hub_prototype||[]).push([[478],{1809:function(e,t,r){r.d(t,{Z:function(){return _}});var n=r(6156),a=r(1253),c=r(5900),l=r.n(c),o=r(7294),i=r(9541),u=r(8870),s=r(6132),d=r(5893),m=["bsPrefix","className","variant","as"];function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var p=o.forwardRef((function(e,t){var r=e.bsPrefix,c=e.className,o=e.variant,u=e.as,s=void 0===u?"img":u,p=(0,a.Z)(e,m),b=(0,i.vE)(r,"card-img");return(0,d.jsx)(s,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({ref:t,className:l()(o?"".concat(b,"-").concat(o):b,c)},p))}));p.displayName="CardImg";var b=p,g=r(8893),y=["bsPrefix","className","as"];function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var h=o.forwardRef((function(e,t){var r=e.bsPrefix,n=e.className,c=e.as,u=void 0===c?"div":c,s=(0,a.Z)(e,y),m=(0,i.vE)(r,"card-header"),f=(0,o.useMemo)((function(){return{cardHeaderBsPrefix:m}}),[m]);return(0,d.jsx)(g.Z.Provider,{value:f,children:(0,d.jsx)(u,O(O({ref:t},s),{},{className:l()(n,m)}))})}));h.displayName="CardHeader";var E=h,j=["bsPrefix","className","bg","text","border","body","children","as"];function Z(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function w(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Z(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var x=(0,s.Z)("h5"),P=(0,s.Z)("h6"),N=(0,u.Z)("card-body"),k=(0,u.Z)("card-title",{Component:x}),S=(0,u.Z)("card-subtitle",{Component:P}),I=(0,u.Z)("card-link",{Component:"a"}),C=(0,u.Z)("card-text",{Component:"p"}),D=(0,u.Z)("card-footer"),T=(0,u.Z)("card-img-overlay"),R=o.forwardRef((function(e,t){var r=e.bsPrefix,n=e.className,c=e.bg,o=e.text,u=e.border,s=e.body,m=e.children,f=e.as,p=void 0===f?"div":f,b=(0,a.Z)(e,j),g=(0,i.vE)(r,"card");return(0,d.jsx)(p,w(w({ref:t},b),{},{className:l()(n,g,c&&"bg-".concat(c),o&&"text-".concat(o),u&&"border-".concat(u)),children:s?(0,d.jsx)(N,{children:m}):m}))}));R.displayName="Card",R.defaultProps={body:!1};var _=Object.assign(R,{Img:b,Title:k,Subtitle:S,Body:N,Link:I,Text:C,Header:E,Footer:D,ImgOverlay:T})},6213:function(e,t,r){var n=r(7294);t.Z=function(e){return n.createElement("iframe",Object.assign({},e,{src:e.htmlLoc}))}},4107:function(e,t,r){var n=r(7606),a=r(5444),c=r(7294),l=r(7408),o=r(1809),i=r(1708),u=r(8478);t.Z=function(e){var t=(0,u.T)();return c.createElement(l.Z,{key:e.uid},c.createElement(o.Z,{className:"shadow rounded border-light"},c.createElement(a.rU,{to:e.url,className:"text-decoration-none text-dark"},c.createElement(o.Z.Body,null,c.createElement(o.Z.Title,null,c.createElement(n.G,{icon:e.faIcon,size:"1x"})," ",e.title),c.createElement("br",null),c.createElement(o.Z.Text,null,e.excerpt),c.createElement("br",null))),c.createElement(o.Z.Footer,{className:"bg-light border-0"},c.createElement("small",{className:"text-muted d-inline"},e.targetAudience.map((function(e){return e+" "})),c.createElement(i.Z.Check,{type:"checkbox",label:"(save to personal collection)",defaultChecked:!!t.retrieveItem(e.uid),onClick:function(){return t.toggleItem({value:!1,id:e.uid,title:e.title,type:e.type})}})))))}},8116:function(e,t,r){var n=r(7294),a=r(994);t.Z=function(e){return n.createElement(a.Z,{xs:1,md:2,xl:3,className:"g-3"},e.children)}},8478:function(e,t,r){r.d(t,{T:function(){return a}});var n=r(7388),a=function(){var e="REINHERIT_COLLECTION",t=function(){if(!n.m.checkSSR()){var t=localStorage.getItem(e);if(!t)return localStorage.setItem(e,"[]"),[];var r=JSON.parse(t);return r||(localStorage.setItem(e,"[]"),[])}};return{retrieveItem:function(e){if(!n.m.checkSSR()){var r=t();if(0===r.length)return null;var a=r.find((function(t){return t.id===e}));return a||null}},toggleItem:function(r){if(!n.m.checkSSR()){var a=t();if(a.find((function(e){return e.id===r.id}))){var c=a.filter((function(e){return e.id!==r.id}));return localStorage.setItem(e,JSON.stringify(c)),c}var l=JSON.parse(JSON.stringify(a));return l.push(r),localStorage.setItem(e,JSON.stringify(l)),l}},retrieveCollection:t}};a()},1682:function(e,t,r){r.r(t),r.d(t,{default:function(){return y}});var n=r(7294),a=r(7190),c=r(5444),l=r(994),o=r(7408),i=r(6666),u=r(8478),s=r(3635),d=r(6213),m=r(8116),f=r(4107),p=function(){var e=(0,c.K2)(b),t=(0,i.n)(),r=((0,u.T)(),(0,s.q)().modeVal);return n.createElement(n.Fragment,null,t.signedIn&&n.createElement(n.Fragment,null,n.createElement("a",{href:"/admin/admin.html#/collections/training",target:"_blank"},"Add Training material here"),n.createElement(d.Z,{htmlLoc:"/admin/admin.html#/collections/training/",style:{width:"100%",height:"100vh",border:"2px solid lightgrey"}})),n.createElement(l.Z,null,n.createElement(o.Z,{className:"d-none d-lg-block",lg:2},n.createElement("div",null,n.createElement("b",{className:"text-secondary"},"Summary")),n.createElement("p",null,"Here you'll find a small overview ... oids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter ..."),n.createElement("div",null,n.createElement("b",{className:"text-secondary"},"Content")),n.createElement("ul",{className:"m-0 p-1 pt-0",style:{listStyle:"none"}},e.allMarkdownRemark.edges.map((function(e){return n.createElement("li",{className:"p-0 m-0"},n.createElement("small",null,n.createElement(c.rU,{to:"/content/training/"+e.node.id,className:"text-dark"},e.node.frontmatter.title)," ",n.createElement("span",{className:"text-muted"},"(",e.node.frontmatter.date,")")))})))),n.createElement(o.Z,null,n.createElement(m.Z,null,e.allMarkdownRemark.edges.map((function(e,t){return n.createElement(f.Z,{url:"/content/training/"+e.node.id+"?mode="+r,title:e.node.frontmatter.title,excerpt:e.node.excerpt,faIcon:a.To0,targetAudience:e.node.frontmatter.target_audience,type:"training",uid:e.node.id})}))))))},b="3054856876",g=r(5101),y=function(){return n.createElement(g.Z,null,n.createElement("h1",{className:"h2"},"Training"),n.createElement("br",null),n.createElement(p,null))}},7388:function(e,t,r){r.d(t,{m:function(){return n}});var n={checkSSR:function(){return"undefined"==typeof window}}}}]);
//# sourceMappingURL=component---src-pages-content-training-index-tsx-33132375f9d17f6e3fa4.js.map