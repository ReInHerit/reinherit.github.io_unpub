(self.webpackChunkreinherit_digital_hub=self.webpackChunkreinherit_digital_hub||[]).push([[463],{3176:function(e,t,r){"use strict";r.d(t,{Z:function(){return B}});var n=r(5444),c=r(7294),a=r(6156),o=r(1253),l=r(5900),i=r.n(l),s=r(9541),u=r(8870),f=r(5893);function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var m=function(e){return c.forwardRef((function(t,r){return(0,f.jsx)("div",b(b({},t),{},{ref:r,className:i()(t.className,e)}))}))};function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var O=c.forwardRef((function(e,t){var r=e.bsPrefix,n=e.className,c=e.variant,l=e.as,u=void 0===l?"img":l,d=(0,o.Z)(e,["bsPrefix","className","variant","as"]),b=(0,s.vE)(r,"card-img");return(0,f.jsx)(u,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({ref:t,className:i()(c?"".concat(b,"-").concat(c):b,n)},d))}));O.displayName="CardImg";var y=O,g=r(8893);function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?j(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var h=c.forwardRef((function(e,t){var r=e.bsPrefix,n=e.className,a=e.as,l=void 0===a?"div":a,u=(0,o.Z)(e,["bsPrefix","className","as"]),d=(0,s.vE)(r,"card-header"),b=(0,c.useMemo)((function(){return{cardHeaderBsPrefix:d}}),[d]);return(0,f.jsx)(g.Z.Provider,{value:b,children:(0,f.jsx)(l,v(v({ref:t},u),{},{className:i()(n,d)}))})}));h.displayName="CardHeader";var P=h;function E(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function w(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?E(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Z=m("h5"),x=m("h6"),N=(0,u.Z)("card-body"),D=(0,u.Z)("card-title",{Component:Z}),k=(0,u.Z)("card-subtitle",{Component:x}),C=(0,u.Z)("card-link",{Component:"a"}),S=(0,u.Z)("card-text",{Component:"p"}),H=(0,u.Z)("card-footer"),I=(0,u.Z)("card-img-overlay"),R=c.forwardRef((function(e,t){var r=e.bsPrefix,n=e.className,c=e.bg,a=e.text,l=e.border,u=e.body,d=e.children,b=e.as,m=void 0===b?"div":b,p=(0,o.Z)(e,["bsPrefix","className","bg","text","border","body","children","as"]),O=(0,s.vE)(r,"card");return(0,f.jsx)(m,w(w({ref:t},p),{},{className:i()(n,O,c&&"bg-".concat(c),a&&"text-".concat(a),l&&"border-".concat(l)),children:u?(0,f.jsx)(N,{children:d}):d}))}));R.displayName="Card",R.defaultProps={body:!1};var _=Object.assign(R,{Img:y,Title:D,Subtitle:k,Body:N,Link:C,Text:S,Header:P,Footer:H,ImgOverlay:I}),T=r(7408),B=function(e){return c.createElement(T.Z,{key:e.uid&&e.uid},c.createElement(_,{className:"rounded rounded-0 reincard",style:{fontSize:".95em",borderColor:"black"}},c.createElement(n.rU,{to:e.url,className:"text-decoration-none text-dark"},c.createElement(_.Body,null,c.createElement(_.Title,{style:{fontSize:"1em"}},e.title),c.createElement("hr",null),c.createElement(_.Text,null,e.body),c.createElement("br",null),e.children)),(e.footerContent||e.uid)&&c.createElement(_.Footer,{className:"bg-white border-0"},c.createElement("small",{className:"text-muted d-inline"},e.footerContent&&e.footerContent,c.createElement("br",null)))))}},8116:function(e,t,r){"use strict";var n=r(7294),c=r(994);t.Z=function(e){return n.createElement(c.Z,{xs:1,md:3,xxl:3,className:"g-3"},e.children)}},5472:function(e,t,r){"use strict";var n=r(7294),c=r(7073),a=r(6187),o=r(7749),l=r(6172),i=r(8263),s=r(9749);t.Z=function(e){var t=e.children;return n.createElement(i.Z,null,n.createElement(s.Z,null),n.createElement(c.Z,null),n.createElement(o.Z,null),n.createElement(a.Z,{className:"rein_main_container pt-3",fluid:!0},t),n.createElement(l.Z,null))}},513:function(e,t,r){"use strict";var n=r(7294);t.Z=function(e){return n.createElement(n.Fragment,null,n.createElement("h1",e,e.children),e.subHeading&&n.createElement("h2",{className:"h5"},e.subHeading))}},5226:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return f}});var n=r(7294),c=r(5444),a=r(8116),o=r(3176),l=function(){var e=(0,c.K2)(i);return n.createElement(a.Z,null,e.allMarkdownRemark.edges.map((function(e){return n.createElement(o.Z,{body:e.node.excerpt,title:e.node.frontmatter.title,url:"/eshop/"+e.node.frontmatter.pageId,uid:e.node.frontmatter.pageId},n.createElement("img",{style:{maxWidth:200},src:e.node.frontmatter.thumbnail}))})))},i="1889714180",s=r(5472),u=r(513),f=function(){return n.createElement(s.Z,null,n.createElement(u.Z,{subHeading:"Collection of free downloadable artistic designs"},"eShop"),n.createElement("p",null,"Here you'll find all the free artistic designs created during the ReInHerit project. All are free to download and available for the public."),n.createElement(l,null))}}}]);
//# sourceMappingURL=component---src-pages-eshop-index-tsx-b382cab7334f5c24dd39.js.map