(self.webpackChunkreinherit_digital_hub=self.webpackChunkreinherit_digital_hub||[]).push([[722],{3176:function(e,t,r){"use strict";r.d(t,{Z:function(){return U}});var n=r(8014),a=r(7606),c=r(5444),l=r(7294),o=r(6156),i=r(1253),s=r(5900),m=r.n(s),u=r(9541),b=r(8870),d=r(5893);function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var y=function(e){return l.forwardRef((function(t,r){return(0,d.jsx)("div",p(p({},t),{},{ref:r,className:m()(t.className,e)}))}))};function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var E=l.forwardRef((function(e,t){var r=e.bsPrefix,n=e.className,a=e.variant,c=e.as,l=void 0===c?"img":c,s=(0,i.Z)(e,["bsPrefix","className","variant","as"]),b=(0,u.vE)(r,"card-img");return(0,d.jsx)(l,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({ref:t,className:m()(a?"".concat(b,"-").concat(a):b,n)},s))}));E.displayName="CardImg";var g=E,v=r(8893);function O(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function x(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?O(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var j=l.forwardRef((function(e,t){var r=e.bsPrefix,n=e.className,a=e.as,c=void 0===a?"div":a,o=(0,i.Z)(e,["bsPrefix","className","as"]),s=(0,u.vE)(r,"card-header"),b=(0,l.useMemo)((function(){return{cardHeaderBsPrefix:s}}),[s]);return(0,d.jsx)(v.Z.Provider,{value:b,children:(0,d.jsx)(c,x(x({ref:t},o),{},{className:m()(n,s)}))})}));j.displayName="CardHeader";var w=j;function N(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function P(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?N(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):N(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Z=y("h5"),k=y("h6"),H=(0,b.Z)("card-body"),S=(0,b.Z)("card-title",{Component:Z}),_=(0,b.Z)("card-subtitle",{Component:k}),z=(0,b.Z)("card-link",{Component:"a"}),D=(0,b.Z)("card-text",{Component:"p"}),C=(0,b.Z)("card-footer"),R=(0,b.Z)("card-img-overlay"),I=l.forwardRef((function(e,t){var r=e.bsPrefix,n=e.className,a=e.bg,c=e.text,l=e.border,o=e.body,s=e.children,b=e.as,f=void 0===b?"div":b,p=(0,i.Z)(e,["bsPrefix","className","bg","text","border","body","children","as"]),y=(0,u.vE)(r,"card");return(0,d.jsx)(f,P(P({ref:t},p),{},{className:m()(n,y,a&&"bg-".concat(a),c&&"text-".concat(c),l&&"border-".concat(l)),children:o?(0,d.jsx)(H,{children:s}):s}))}));I.displayName="Card",I.defaultProps={body:!1};var G=Object.assign(I,{Img:g,Title:S,Subtitle:_,Body:H,Link:z,Text:D,Header:w,Footer:C,ImgOverlay:R}),T=r(7408),U=function(e){return l.createElement(T.Z,{key:e.uid&&e.uid},l.createElement(G,{className:"rounded rounded-5 reincard border-0 shadow",style:{fontSize:".95em"}},l.createElement(c.rU,{to:e.url,className:"text-decoration-none text-dark"},l.createElement(G.Body,{style:{minHeight:"200px"}},l.createElement(G.Title,{style:{fontSize:"1em"}},l.createElement(a.G,{style:{fill:"red"},icon:n.gMD,size:"1x",className:"me-md-1"})," ",e.title),l.createElement("hr",null),l.createElement(G.Text,null,e.body),e.children)),l.createElement(G.Footer,{className:"border-0"},l.createElement("small",{className:"text-muted d-inline"},e.footerContent&&e.footerContent,l.createElement("br",null)))))}},8116:function(e,t,r){"use strict";var n=r(7294),a=r(994);t.Z=function(e){return n.createElement(a.Z,{xs:1,md:3,xxl:3,className:"g-3"},e.children)}},8439:function(e,t,r){"use strict";r.d(t,{Z:function(){return p}});var n=r(7294),a=r(8014),c=r(7606),l=r(6594),o=r(5444),i=r(7190),s=function(){return n.createElement("div",{className:"pt-3 mt-4 bg-white text-center"},n.createElement("div",{className:"pb-3"},n.createElement("img",{className:"pb-0 mb-0",style:{maxHeight:"18vh"},src:"/images/thumbnails/make_it_your_own.JPG"}),n.createElement("h2",{style:{marginTop:"-2vh",color:"grey"},className:"h4"},"ReInHerit Digital Hub"),n.createElement(o.rU,{to:"/resources"},n.createElement(l.Z,{variant:"outline-light border text-center ps-4 pe-4 m-1"},n.createElement(c.G,{icon:a.CgH,size:"1x",style:{fontSize:"1.25em"}}),n.createElement("small",{className:"text-muted"}," Resources"))),n.createElement(o.rU,{to:"/networkinghub"},n.createElement(l.Z,{variant:"outline-light border text-center ps-4 pe-4 m-1"},n.createElement(c.G,{icon:a.Z6I,size:"1x",style:{fontSize:"1.25em"}}),n.createElement("small",{className:"text-muted"}," Networking"))),n.createElement(o.rU,{to:"/visitorhub"},n.createElement(l.Z,{variant:"outline-light border text-center ps-4 pe-4 m-1"},n.createElement(c.G,{icon:a.cnt,size:"1x",style:{fontSize:"1.25em"}}),n.createElement("small",{className:"text-muted"}," Content"))),n.createElement("span",{className:"border btn text-center ps-4 pe-4 m-1 rounded"},n.createElement("a",{className:"text-decoration-none",href:"https://www.facebook.com/ReInHerit/",target:"_blank","aria-label":"ReInHerit on facebook"},n.createElement(c.G,{className:"ms-1",icon:i.neY,style:{fontSize:"1.25em"}})),n.createElement("a",{className:"text-decoration-none",href:"https://linkedin.com/company/reinherit-h2020/",target:"_blank","aria-label":"ReInHerit on linkedin"},n.createElement(c.G,{className:"ms-1",icon:i.D9H,style:{fontSize:"1.25em"}})," "),n.createElement("a",{className:"text-decoration-none",href:"https://www.tiktok.com/@reinherit_",target:"_blank","aria-label":"ReInHerit on tiktok"},n.createElement(c.G,{className:"ms-1",icon:i.ABo,style:{fontSize:"1.25em"}})," "),n.createElement("a",{className:"text-decoration-none",href:"https://mobile.twitter.com/reinherit_",target:"_blank","aria-label":"ReInHerit on twitter"},n.createElement(c.G,{className:"ms-1",icon:i.mdU,style:{fontSize:"1.25em"}})," "),n.createElement("a",{className:"text-decoration-none",href:"https://www.instagram.com/reinherit_/",target:"_blank","aria-label":"ReInHerit on instagram"},n.createElement(c.G,{className:"ms-1",icon:i.Zzi,style:{fontSize:"1.25em"}})," ")),n.createElement(o.rU,{to:"/cms","aria-label":"ReInHerit on cms"},n.createElement(l.Z,{variant:"outline-light border text-center ps-3 pe-3 m-1"},n.createElement(c.G,{icon:a.b7W,size:"1x",style:{fontSize:"1.25em"}})))))},m=r(6187),u=r(7749),b=r(6172),d=r(8263),f=r(9749),p=function(e){var t=e.children;return n.createElement(d.Z,null,n.createElement(f.Z,null),n.createElement(s,null),n.createElement(u.Z,null),n.createElement(m.Z,{className:"rein_main_container pt-sm-4 pt-md-0",style:{marginTop:"2vh"},fluid:!0},t),n.createElement(b.Z,null))}},513:function(e,t,r){"use strict";var n=r(5444),a=r(7294);t.Z=function(e){return a.createElement(a.Fragment,null,a.createElement("div",{className:"mb-3",style:{fontSize:"1.25em"}},a.createElement(n.rU,{to:"/",className:"text-decoration-none"},a.createElement("b",{style:{color:"rgb(46, 172, 200)"}},"Home")),e.breadCrumb&&e.breadCrumb.length>0&&e.breadCrumb.map((function(e,t){return a.createElement(a.Fragment,null,a.createElement("span",null," / "),0===t?a.createElement("b",null,a.createElement(n.rU,{style:{color:0===t?"#ee3f98":"",textEmphasis:"800"},key:"breadcrumb__"+t,className:"text-decoration-none",to:e.value},e.label)):a.createElement(n.rU,{style:{color:0===t?"#ee3f98":"",textEmphasis:"800"},key:"breadcrumb__"+t,className:"text-decoration-none",to:e.value},e.label))}))),a.createElement("div",{className:"p-3 p-md-4 shadow rounded mb-3 bg-white"},a.createElement("div",null,a.createElement("h1",Object.assign({className:"h2"},e),e.children),e.subHeading&&a.createElement("h2",{className:"h5"},e.subHeading),e.subText&&a.createElement("p",null,e.subText))))}},8315:function(e,t,r){"use strict";r.r(t);var n=r(7294),a=r(8116),c=r(3176),l=r(8439),o=r(513);t.default=function(){return n.createElement(l.Z,null,n.createElement(o.Z,{subHeading:"Cultural heritage events organised by ReInHerit",subText:"Here you'll find an overview of all cultural heritage related events provided via ReInHerit, like artistic performances.",breadCrumb:[{label:"Events",value:"/events"}]},"Events overview"),n.createElement(a.Z,null,n.createElement(c.Z,{title:"Performances",url:"/performances",body:"Performances developed and carried out in the course of the ReInHerit project."}),n.createElement(c.Z,{title:"Traveling exhibitions",url:"/exhibs/travel",body:"On site exhibitions and related material provided by ReInHerit."}),n.createElement(c.Z,{title:"Hackathon",url:"/hackathon",body:"Hackathon organized by ReInHerit"})))}}}]);
//# sourceMappingURL=component---src-pages-events-index-tsx-29404264a08130ed5384.js.map