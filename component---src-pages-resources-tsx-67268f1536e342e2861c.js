(self.webpackChunkreinherit_digital_hub=self.webpackChunkreinherit_digital_hub||[]).push([[60],{3176:function(e,t,r){"use strict";r.d(t,{Z:function(){return U}});var n=r(8014),a=r(7606),o=r(5444),l=r(7294),c=r(6156),i=r(1253),s=r(5900),m=r.n(s),u=r(9541),d=r(8870),b=r(5893);function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){(0,c.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var h=function(e){return l.forwardRef((function(t,r){return(0,b.jsx)("div",f(f({},t),{},{ref:r,className:m()(t.className,e)}))}))};function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var g=l.forwardRef((function(e,t){var r=e.bsPrefix,n=e.className,a=e.variant,o=e.as,l=void 0===o?"img":o,s=(0,i.Z)(e,["bsPrefix","className","variant","as"]),d=(0,u.vE)(r,"card-img");return(0,b.jsx)(l,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){(0,c.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({ref:t,className:m()(a?"".concat(d,"-").concat(a):d,n)},s))}));g.displayName="CardImg";var E=g,v=r(8893);function O(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function j(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?O(Object(r),!0).forEach((function(t){(0,c.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var w=l.forwardRef((function(e,t){var r=e.bsPrefix,n=e.className,a=e.as,o=void 0===a?"div":a,c=(0,i.Z)(e,["bsPrefix","className","as"]),s=(0,u.vE)(r,"card-header"),d=(0,l.useMemo)((function(){return{cardHeaderBsPrefix:s}}),[s]);return(0,b.jsx)(v.Z.Provider,{value:d,children:(0,b.jsx)(o,j(j({ref:t},c),{},{className:m()(n,s)}))})}));w.displayName="CardHeader";var x=w;function N(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function P(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?N(Object(r),!0).forEach((function(t){(0,c.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):N(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Z=h("h5"),k=h("h6"),H=(0,d.Z)("card-body"),R=(0,d.Z)("card-title",{Component:Z}),S=(0,d.Z)("card-subtitle",{Component:k}),_=(0,d.Z)("card-link",{Component:"a"}),C=(0,d.Z)("card-text",{Component:"p"}),z=(0,d.Z)("card-footer"),D=(0,d.Z)("card-img-overlay"),I=l.forwardRef((function(e,t){var r=e.bsPrefix,n=e.className,a=e.bg,o=e.text,l=e.border,c=e.body,s=e.children,d=e.as,p=void 0===d?"div":d,f=(0,i.Z)(e,["bsPrefix","className","bg","text","border","body","children","as"]),h=(0,u.vE)(r,"card");return(0,b.jsx)(p,P(P({ref:t},f),{},{className:m()(n,h,a&&"bg-".concat(a),o&&"text-".concat(o),l&&"border-".concat(l)),children:c?(0,b.jsx)(H,{children:s}):s}))}));I.displayName="Card",I.defaultProps={body:!1};var G=Object.assign(I,{Img:E,Title:R,Subtitle:S,Body:H,Link:_,Text:C,Header:x,Footer:z,ImgOverlay:D}),T=r(7408),U=function(e){return l.createElement(T.Z,{key:e.uid&&e.uid},l.createElement(G,{className:"rounded rounded-5 reincard border-0 shadow",style:{fontSize:".95em"}},l.createElement(o.rU,{to:e.url,className:"text-decoration-none text-dark"},l.createElement(G.Body,{style:{minHeight:"200px"}},l.createElement(G.Title,{style:{fontSize:"1em"}},l.createElement(a.G,{style:{fill:"red"},icon:n.gMD,size:"1x",className:"me-md-1"})," ",e.title),l.createElement("hr",null),l.createElement(G.Text,null,e.body),e.children)),l.createElement(G.Footer,{className:"border-0"},l.createElement("small",{className:"text-muted d-inline"},e.footerContent&&e.footerContent,l.createElement("br",null)))))}},8116:function(e,t,r){"use strict";var n=r(7294),a=r(994);t.Z=function(e){return n.createElement(a.Z,{xs:1,md:3,xxl:3,className:"g-3"},e.children)}},8439:function(e,t,r){"use strict";r.d(t,{Z:function(){return f}});var n=r(7294),a=r(8014),o=r(7606),l=r(6594),c=r(5444),i=r(7190),s=function(){return n.createElement("div",{className:"pt-3 mt-4 bg-white text-center"},n.createElement("div",{className:"pb-3"},n.createElement("img",{className:"pb-0 mb-0",style:{maxWidth:"15vw",minHeight:"18vh"},src:"/images/thumbnails/make_it_your_own.JPG"}),n.createElement("h2",{style:{marginTop:"-2vh",color:"grey"},className:"h4"},"ReInHerit Digital Hub"),n.createElement(c.rU,{to:"/resources"},n.createElement(l.Z,{variant:"outline-light border text-center ps-4 pe-4 me-2"},n.createElement(o.G,{icon:a.CgH,size:"1x",style:{fontSize:"1.25em"}}),n.createElement("small",{className:"text-muted"}," Resources"))),n.createElement(c.rU,{to:"/networkinghub"},n.createElement(l.Z,{variant:"outline-light border text-center ps-4 pe-4 me-2"},n.createElement(o.G,{icon:a.Z6I,size:"1x",style:{fontSize:"1.25em"}}),n.createElement("small",{className:"text-muted"}," Networking"))),n.createElement(c.rU,{to:"/visitorhub"},n.createElement(l.Z,{variant:"outline-light border text-center ps-4 pe-4 me-2"},n.createElement(o.G,{icon:a.cnt,size:"1x",style:{fontSize:"1.25em"}}),n.createElement("small",{className:"text-muted"}," Content"))),n.createElement("span",{className:"border btn text-center ps-4 pe-4 me-2 rounded"},n.createElement("a",{className:"text-decoration-none",href:"https://www.facebook.com/ReInHerit/",target:"_blank","aria-label":"ReInHerit on facebook"},n.createElement(o.G,{className:"ms-1",icon:i.neY,style:{fontSize:"1.25em"}})),n.createElement("a",{className:"text-decoration-none",href:"https://linkedin.com/company/reinherit-h2020/",target:"_blank","aria-label":"ReInHerit on linkedin"},n.createElement(o.G,{className:"ms-1",icon:i.D9H,style:{fontSize:"1.25em"}})," "),n.createElement("a",{className:"text-decoration-none",href:"https://www.tiktok.com/@reinherit_",target:"_blank","aria-label":"ReInHerit on tiktok"},n.createElement(o.G,{className:"ms-1",icon:i.ABo,style:{fontSize:"1.25em"}})," "),n.createElement("a",{className:"text-decoration-none",href:"https://mobile.twitter.com/reinherit_",target:"_blank","aria-label":"ReInHerit on twitter"},n.createElement(o.G,{className:"ms-1",icon:i.mdU,style:{fontSize:"1.25em"}})," "),n.createElement("a",{className:"text-decoration-none",href:"https://www.instagram.com/reinherit_/",target:"_blank","aria-label":"ReInHerit on instagram"},n.createElement(o.G,{className:"ms-1",icon:i.Zzi,style:{fontSize:"1.25em"}})," ")),n.createElement(c.rU,{to:"/cms","aria-label":"ReInHerit on cms"},n.createElement(l.Z,{variant:"outline-light border text-center ps-3 pe-3 me-2"},n.createElement(o.G,{icon:a.b7W,size:"1x",style:{fontSize:"1.25em"}})))))},m=r(6187),u=r(7749),d=r(6172),b=r(8263),p=r(9749),f=function(e){var t=e.children;return n.createElement(b.Z,null,n.createElement(p.Z,null),n.createElement(s,null),n.createElement(u.Z,null),n.createElement(m.Z,{className:"rein_main_container pt-sm-4 pt-md-0",style:{marginTop:"2vh"},fluid:!0},t),n.createElement(d.Z,null))}},513:function(e,t,r){"use strict";var n=r(5444),a=r(7294);t.Z=function(e){return a.createElement(a.Fragment,null,a.createElement("div",{className:"mb-3",style:{fontSize:"1.25em"}},a.createElement(n.rU,{to:"/",className:"text-decoration-none"},a.createElement("b",{style:{color:"rgb(46, 172, 200)"}},"Home")),e.breadCrumb&&e.breadCrumb.length>0&&e.breadCrumb.map((function(e,t){return a.createElement(a.Fragment,null,a.createElement("span",null," / "),0===t?a.createElement("b",null,a.createElement(n.rU,{style:{color:0===t?"#ee3f98":"",textEmphasis:"800"},key:"breadcrumb__"+t,className:"text-decoration-none",to:e.value},e.label)):a.createElement(n.rU,{style:{color:0===t?"#ee3f98":"",textEmphasis:"800"},key:"breadcrumb__"+t,className:"text-decoration-none",to:e.value},e.label))}))),a.createElement("div",{className:"p-3 p-md-4 shadow rounded mb-3 bg-white"},a.createElement("div",null,a.createElement("h1",Object.assign({className:"h2"},e),e.children),e.subHeading&&a.createElement("h2",{className:"h5"},e.subHeading),e.subText&&a.createElement("p",null,e.subText))))}},321:function(e,t,r){"use strict";r.r(t);var n=r(7294),a=r(8116),o=r(3176),l=r(8439),c=r(513);t.default=function(){return n.createElement(l.Z,null,n.createElement(c.Z,{subHeading:"Useful tools, educational material, guidelines, etc. for cultural heritage professionals.",subText:"Here you'll find an overview of all resources developed and provided by ReInHerit. Browse through the items and learn how to implement them in your institution.",breadCrumb:[{label:"Resources",value:"/resources"}]},"Resources"),n.createElement(a.Z,null,n.createElement(o.Z,{title:"Tool apps",url:"/tools/apps",body:"Applications that are either developed within the ReInHerit project or play an important role for CH management or preservation."}),n.createElement(o.Z,{title:"Tool components",url:"/tools/components",body:"Necessary building blocks for the applications provided by ReInHerit."}),n.createElement(o.Z,{title:"Webinars",body:"Training material either on the tools developed in the ReInHerit-project or generally on digitization in the CH sector, CH management and preservation. ",url:"/webinars"}),n.createElement(o.Z,{title:"Game",body:"Video game developed within the ReInHerit project.",url:"/tools"}),n.createElement(o.Z,{title:"Performances",body:"Performances developed and carried out in the course of the ReInHerit project.",url:"/tools"}),n.createElement(o.Z,{title:"Best practices",body:"Guidelines, recommendations and manuals related to digital cultural heritage management.",url:"/tools"})))}}}]);
//# sourceMappingURL=component---src-pages-resources-tsx-67268f1536e342e2861c.js.map