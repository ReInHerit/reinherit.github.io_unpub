(self.webpackChunkreinherit_digital_hub=self.webpackChunkreinherit_digital_hub||[]).push([[221],{3176:function(e,t,r){"use strict";r.d(t,{Z:function(){return z}});var n=r(5444),a=r(7294),c=r(6156),o=r(1253),i=r(5900),l=r.n(i),s=r(9541),u=r(8870),d=r(5893);function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){(0,c.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var m=function(e){return a.forwardRef((function(t,r){return(0,d.jsx)("div",b(b({},t),{},{ref:r,className:l()(t.className,e)}))}))};function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var O=a.forwardRef((function(e,t){var r=e.bsPrefix,n=e.className,a=e.variant,i=e.as,u=void 0===i?"img":i,f=(0,o.Z)(e,["bsPrefix","className","variant","as"]),b=(0,s.vE)(r,"card-img");return(0,d.jsx)(u,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){(0,c.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({ref:t,className:l()(a?"".concat(b,"-").concat(a):b,n)},f))}));O.displayName="CardImg";var y=O,g=r(8893);function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?j(Object(r),!0).forEach((function(t){(0,c.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var h=a.forwardRef((function(e,t){var r=e.bsPrefix,n=e.className,c=e.as,i=void 0===c?"div":c,u=(0,o.Z)(e,["bsPrefix","className","as"]),f=(0,s.vE)(r,"card-header"),b=(0,a.useMemo)((function(){return{cardHeaderBsPrefix:f}}),[f]);return(0,d.jsx)(g.Z.Provider,{value:b,children:(0,d.jsx)(i,v(v({ref:t},u),{},{className:l()(n,f)}))})}));h.displayName="CardHeader";var P=h;function E(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function w(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?E(Object(r),!0).forEach((function(t){(0,c.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Z=m("h5"),x=m("h6"),N=(0,u.Z)("card-body"),k=(0,u.Z)("card-title",{Component:Z}),D=(0,u.Z)("card-subtitle",{Component:x}),C=(0,u.Z)("card-link",{Component:"a"}),H=(0,u.Z)("card-text",{Component:"p"}),S=(0,u.Z)("card-footer"),I=(0,u.Z)("card-img-overlay"),R=a.forwardRef((function(e,t){var r=e.bsPrefix,n=e.className,a=e.bg,c=e.text,i=e.border,u=e.body,f=e.children,b=e.as,m=void 0===b?"div":b,p=(0,o.Z)(e,["bsPrefix","className","bg","text","border","body","children","as"]),O=(0,s.vE)(r,"card");return(0,d.jsx)(m,w(w({ref:t},p),{},{className:l()(n,O,a&&"bg-".concat(a),c&&"text-".concat(c),i&&"border-".concat(i)),children:u?(0,d.jsx)(N,{children:f}):f}))}));R.displayName="Card",R.defaultProps={body:!1};var _=Object.assign(R,{Img:y,Title:k,Subtitle:D,Body:N,Link:C,Text:H,Header:P,Footer:S,ImgOverlay:I}),T=r(7408),z=function(e){return a.createElement(T.Z,{key:e.uid&&e.uid},a.createElement(_,{className:"rounded rounded-0 reincard",style:{fontSize:".95em",borderColor:"black"}},a.createElement(n.rU,{to:e.url,className:"text-decoration-none text-dark"},a.createElement(_.Body,null,a.createElement(_.Title,{style:{fontSize:"1em"}},e.title),a.createElement("hr",null),a.createElement(_.Text,null,e.body),a.createElement("br",null),e.children)),(e.footerContent||e.uid)&&a.createElement(_.Footer,{className:"bg-white border-0"},a.createElement("small",{className:"text-muted d-inline"},e.footerContent&&e.footerContent,a.createElement("br",null)))))}},8116:function(e,t,r){"use strict";var n=r(7294),a=r(994);t.Z=function(e){return n.createElement(a.Z,{xs:1,md:3,xxl:3,className:"g-3"},e.children)}},5472:function(e,t,r){"use strict";var n=r(7294),a=r(7073),c=r(6187),o=r(7749),i=r(6172),l=r(8263),s=r(9749);t.Z=function(e){var t=e.children;return n.createElement(l.Z,null,n.createElement(s.Z,null),n.createElement(a.Z,null),n.createElement(o.Z,null),n.createElement(c.Z,{className:"rein_main_container pt-3",fluid:!0},t),n.createElement(i.Z,null))}},513:function(e,t,r){"use strict";var n=r(7294);t.Z=function(e){return n.createElement(n.Fragment,null,n.createElement("h1",e,e.children),e.subHeading&&n.createElement("h2",{className:"h5"},e.subHeading))}},2741:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return d}});var n=r(7294),a=r(5472),c=r(5444),o=r(8116),i=r(3176),l=function(){var e=(0,c.K2)(s);return n.createElement(o.Z,null,e.allMarkdownRemark.edges.map((function(e,t){return n.createElement(i.Z,{key:e.node.frontmatter.pageId,url:"/webinars/"+e.node.frontmatter.pageId,title:e.node.frontmatter.title,body:e.node.excerpt,uid:e.node.frontmatter.pageId})})))},s="2377769633",u=r(513),d=function(){return n.createElement(a.Z,null,n.createElement(u.Z,{subHeading:"Webinars related to cultural heritage management provided by ReInHerit"},"Webinars"),n.createElement("p",null,"Here you will find training material either on the tools developed in the ReInHerit-project or generally on digitization in the CH sector, CH management and preservation."),n.createElement(l,null))}}}]);
//# sourceMappingURL=component---src-pages-webinars-index-tsx-ebe913bd872da0e27b83.js.map