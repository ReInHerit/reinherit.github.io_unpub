(self.webpackChunkreinherit_digital_hub=self.webpackChunkreinherit_digital_hub||[]).push([[221],{3176:function(e,t,r){"use strict";r.d(t,{Z:function(){return W}});var n=r(8014),a=r(7606),c=r(5444),o=r(7294),i=r(6156),l=r(1253),s=r(5900),u=r.n(s),m=r(9541),d=r(8870),b=r(5893);function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var O=function(e){return o.forwardRef((function(t,r){return(0,b.jsx)("div",p(p({},t),{},{ref:r,className:u()(t.className,e)}))}))};function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var g=o.forwardRef((function(e,t){var r=e.bsPrefix,n=e.className,a=e.variant,c=e.as,o=void 0===c?"img":c,s=(0,l.Z)(e,["bsPrefix","className","variant","as"]),d=(0,m.vE)(r,"card-img");return(0,b.jsx)(o,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({ref:t,className:u()(a?"".concat(d,"-").concat(a):d,n)},s))}));g.displayName="CardImg";var v=g,h=r(8893);function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function E(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?j(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var P=o.forwardRef((function(e,t){var r=e.bsPrefix,n=e.className,a=e.as,c=void 0===a?"div":a,i=(0,l.Z)(e,["bsPrefix","className","as"]),s=(0,m.vE)(r,"card-header"),d=(0,o.useMemo)((function(){return{cardHeaderBsPrefix:s}}),[s]);return(0,b.jsx)(h.Z.Provider,{value:d,children:(0,b.jsx)(c,E(E({ref:t},i),{},{className:u()(n,s)}))})}));P.displayName="CardHeader";var w=P;function x(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Z(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?x(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):x(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var N=O("h5"),D=O("h6"),C=(0,d.Z)("card-body"),k=(0,d.Z)("card-title",{Component:N}),H=(0,d.Z)("card-subtitle",{Component:D}),S=(0,d.Z)("card-link",{Component:"a"}),I=(0,d.Z)("card-text",{Component:"p"}),T=(0,d.Z)("card-footer"),R=(0,d.Z)("card-img-overlay"),_=o.forwardRef((function(e,t){var r=e.bsPrefix,n=e.className,a=e.bg,c=e.text,o=e.border,i=e.body,s=e.children,d=e.as,f=void 0===d?"div":d,p=(0,l.Z)(e,["bsPrefix","className","bg","text","border","body","children","as"]),O=(0,m.vE)(r,"card");return(0,b.jsx)(f,Z(Z({ref:t},p),{},{className:u()(n,O,a&&"bg-".concat(a),c&&"text-".concat(c),o&&"border-".concat(o)),children:i?(0,b.jsx)(C,{children:s}):s}))}));_.displayName="Card",_.defaultProps={body:!1};var z=Object.assign(_,{Img:v,Title:k,Subtitle:H,Body:C,Link:S,Text:I,Header:w,Footer:T,ImgOverlay:R}),F=r(7408),W=function(e){return o.createElement(F.Z,{key:e.uid&&e.uid},o.createElement(z,{className:"rounded rounded-5 reincard border-0 shadow",style:{fontSize:".95em"}},o.createElement(c.rU,{to:e.url,className:"text-decoration-none text-dark"},o.createElement(z.Body,{style:{minHeight:"200px"}},o.createElement(z.Title,{style:{fontSize:"1em"}},o.createElement(a.G,{style:{fill:"red"},icon:n.gMD,size:"1x",className:"me-md-1"})," ",e.title),o.createElement("hr",null),o.createElement(z.Text,null,e.body),e.children)),o.createElement(z.Footer,{className:"border-0"},o.createElement("small",{className:"text-muted d-inline"},e.footerContent&&e.footerContent,o.createElement("br",null)))))}},8116:function(e,t,r){"use strict";var n=r(7294),a=r(994);t.Z=function(e){return n.createElement(a.Z,{xs:1,md:3,xxl:3,className:"g-3"},e.children)}},3605:function(e,t,r){"use strict";var n=r(7294);t.Z=function(e){return n.createElement("img",{src:e.src,style:{maxWidth:100,maxHeight:100}})}},5472:function(e,t,r){"use strict";var n=r(7294),a=r(7073),c=r(6187),o=r(7749),i=r(6172),l=r(8263),s=r(9749);t.Z=function(e){var t=e.children;return n.createElement(l.Z,null,n.createElement(s.Z,null),n.createElement(a.Z,null),n.createElement(o.Z,null),n.createElement(c.Z,{className:"rein_main_container pt-sm-4 pt-md-4",style:{marginTop:"10vh"},fluid:!0},t),n.createElement(i.Z,null))}},513:function(e,t,r){"use strict";var n=r(5444),a=r(7294);t.Z=function(e){return a.createElement(a.Fragment,null,a.createElement("div",{className:"mb-2"},a.createElement(n.rU,{to:"/",className:"text-decoration-none"},a.createElement("b",{style:{color:"rgb(46, 172, 200)"}},"Digital-hub")),e.breadCrumb&&e.breadCrumb.length>0&&e.breadCrumb.map((function(e){return a.createElement(a.Fragment,null," ","/"," ",a.createElement(n.rU,{className:"text-decoration-none",to:e.value},e.label))}))),a.createElement("div",{className:"p-3 p-md-4 shadow rounded mb-3 bg-white"},a.createElement("div",null,a.createElement("h1",Object.assign({className:"h2"},e),e.children),e.subHeading&&a.createElement("h2",{className:"h5"},e.subHeading),e.subText&&a.createElement("p",null,e.subText))))}},2741:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return d}});var n=r(7294),a=r(5472),c=r(5444),o=r(8116),i=r(3176),l=r(3605),s=function(){var e=(0,c.K2)(u);return n.createElement(o.Z,null,e.allMarkdownRemark.edges.map((function(e,t){return n.createElement(i.Z,{key:e.node.frontmatter.pageId,url:"/webinars/"+e.node.frontmatter.pageId,title:e.node.frontmatter.title,body:e.node.excerpt,uid:e.node.frontmatter.pageId},e.node.frontmatter.thumbnail&&n.createElement(l.Z,{src:e.node.frontmatter.thumbnail}))})))},u="1574604725",m=r(513),d=function(){return n.createElement(a.Z,null,n.createElement(m.Z,{subHeading:"Webinars related to cultural heritage management provided by ReInHerit",subText:"Here you will find training material either on the tools developed in the ReInHerit-project or generally on digitization in the CH sector, CH management and preservation.",breadCrumb:[{label:"Webinars",value:"/webinars"}]},"Webinars"),n.createElement(s,null))}}}]);
//# sourceMappingURL=component---src-pages-webinars-index-tsx-e1ea354e22a3fc86e912.js.map