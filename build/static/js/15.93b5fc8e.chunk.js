(this.webpackJsonplandrick=this.webpackJsonplandrick||[]).push([[15],{153:function(e,t,a){"use strict";a.r(t);var i=a(1),n=a(9),c=a(10),r=a(12),s=a(11),o=a(0),l=a.n(o),d=a(49),g=a(52),b=a(53),j=a.p+"static/media/bg-portfolio.9fae24c3.jpg",m=function(e){Object(r.a)(a,e);var t=Object(s.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return Object(i.jsxs)(l.a.Fragment,{children:[Object(i.jsxs)("section",{className:"bg-half-260 d-table w-100",style:{background:"url(".concat(j,") center center")},children:[Object(i.jsx)("div",{className:"bg-overlay bg-overlay-white"}),Object(i.jsx)(d.a,{children:Object(i.jsx)(g.a,{className:"justify-content-center",children:Object(i.jsx)(b.a,{xs:"12",children:Object(i.jsxs)("div",{className:"title-heading text-center mt-5 pt-4",children:[Object(i.jsx)("h1",{className:"display-1 font-weight-bold mb-3",children:"Minimal Portfolio"}),Object(i.jsx)("p",{className:"para-desc mx-auto h6",children:"Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap4 html page."})]})})})})]}),Object(i.jsx)("div",{className:"position-relative",children:Object(i.jsx)("div",{className:"shape overflow-hidden text-white",children:Object(i.jsx)("svg",{viewBox:"0 0 2880 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(i.jsx)("path",{d:"M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z",fill:"currentColor"})})})})]})}}]),a}(o.Component),u=a(14),p=a(85),h=a(86),x=a(13),y=a(127),O=(a(136),a.p+"static/media/20.c209fa62.jpg"),v=a.p+"static/media/13.5b5018ae.jpg",f=a.p+"static/media/14.d80492dc.jpg",k=a.p+"static/media/15.143a6637.jpg",N=a.p+"static/media/16.0831adb4.jpg",C=a.p+"static/media/17.30406e31.jpg",w=a.p+"static/media/18.6575ea27.jpg",D=a.p+"static/media/19.654f2a91.jpg",B=[O,v,f,k,N,C,w,D],A=function(e){Object(r.a)(a,e);var t=Object(s.a)(a);function a(e){var i;return Object(n.a)(this,a),(i=t.call(this,e)).state={projects:[{image:O,title:"Iphone mockup",subtitle:"Branding",category:"Branding"},{image:v,title:"Mockup Collection",subtitle:"Mockup",category:"Designing"},{image:f,title:"Abstract images",subtitle:"Abstract",category:"Photography"},{image:k,title:"Yellow bg with Books",subtitle:"Company V-card",category:"Development"},{image:N,title:"Company V-card",subtitle:"V-card",category:"Branding"},{image:C,title:"Mockup box with paints",subtitle:"Photography",category:"Branding"},{image:w,title:"Coffee cup",subtitle:"Cups",category:"Designing"},{image:D,title:"Pen and article",subtitle:"Article",category:"Development"}],displayCategory:"All",photoIndex:0,isOpen:!1},i.setCategory.bind(Object(u.a)(i)),i}return Object(c.a)(a,[{key:"setCategory",value:function(e){this.setState({displayCategory:e})}},{key:"render",value:function(){var e=this,t=this.state,a=t.photoIndex,n=t.isOpen;return Object(i.jsx)(l.a.Fragment,{children:Object(i.jsxs)("section",{className:"section",children:[Object(i.jsx)(d.a,{children:Object(i.jsx)(g.a,{children:Object(i.jsxs)("ul",{className:"col container-filter list-unstyled categories-filter text-center",id:"filter",children:[Object(i.jsx)("li",{className:"list-inline-item mr-1",children:Object(i.jsx)(x.b,{to:"#",onClick:function(){return e.setCategory("All")},className:"All"===this.state.displayCategory?"categories border d-block text-dark rounded active":"categories border d-block text-dark rounded",children:"All"})}),Object(i.jsx)("li",{className:"list-inline-item mr-1",children:Object(i.jsx)(x.b,{to:"#",onClick:function(){return e.setCategory("Branding")},className:"Branding"===this.state.displayCategory?"categories border d-block text-dark rounded active":"categories border d-block text-dark rounded",children:"Branding"})}),Object(i.jsx)("li",{className:"list-inline-item mr-1",children:Object(i.jsx)(x.b,{to:"#",onClick:function(){return e.setCategory("Designing")},className:"Designing"===this.state.displayCategory?"categories border d-block text-dark rounded active":"categories border d-block text-dark rounded",children:"Designing"})}),Object(i.jsx)("li",{className:"list-inline-item mr-1",children:Object(i.jsx)(x.b,{to:"#",onClick:function(){return e.setCategory("Photography")},className:"Photography"===this.state.displayCategory?"categories border d-block text-dark rounded active":"categories border d-block text-dark rounded",children:"Photography"})}),Object(i.jsx)("li",{className:"list-inline-item",children:Object(i.jsx)(x.b,{to:"#",onClick:function(){return e.setCategory("Development")},className:"Development"===this.state.displayCategory?"categories border d-block text-dark rounded active":"categories border d-block text-dark rounded",children:"Development"})})]})})}),Object(i.jsxs)(d.a,{fluid:!0,children:[Object(i.jsx)(g.a,{className:"container-grid projects-wrapper",children:this.state.projects.filter((function(t){var a=t.category;return e.state.displayCategory===a||"All"===e.state.displayCategory})).map((function(t,a){var n=t.title,c=t.image,r=t.subtitle;return Object(i.jsx)(b.a,{lg:3,md:6,xs:12,className:"spacing mt-3",children:Object(i.jsx)(p.a,{className:"border-0 work-container work-grid position-relative d-block overflow-hidden rounded",children:Object(i.jsxs)(h.a,{className:"p-0",children:[Object(i.jsx)(x.b,{to:"#",className:"mfp-image d-inline-block",onClick:function(t){t.preventDefault(),e.setState({isOpen:!0,photoIndex:a})},children:Object(i.jsx)("img",{src:c,className:"img-fluid",alt:"work"})}),Object(i.jsxs)("div",{className:"content bg-white p-3",children:[Object(i.jsx)("h5",{className:"mb-0",children:Object(i.jsx)(x.b,{to:"page-work-detail",className:"text-dark title",children:n})}),Object(i.jsx)("h6",{className:"text-muted tag mb-0",children:r})]})]})})},a)}))}),n&&Object(i.jsx)(y.a,{mainSrc:B[a],nextSrc:B[(a+1)%B.length],prevSrc:B[(a+B.length-1)%B.length],imagePadding:100,onCloseRequest:function(){return e.setState({isOpen:!1})},onMovePrevRequest:function(){return e.setState({photoIndex:(a+B.length-1)%B.length})},onMoveNextRequest:function(){return e.setState({photoIndex:(a+1)%B.length})}})]})]})})}}]),a}(o.Component),P=function(e){Object(r.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(n.a)(this,a);for(var i=arguments.length,c=new Array(i),r=0;r<i;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).scrollNavigation=function(){var e=document.documentElement;(window.pageYOffset||e.scrollTop)-(e.clientTop||0)>80?document.getElementById("topnav").classList.add("nav-sticky"):document.getElementById("topnav").classList.remove("nav-sticky")},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){document.body.classList="",window.addEventListener("scroll",this.scrollNavigation,!0)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollNavigation,!0)}},{key:"render",value:function(){return Object(i.jsxs)(l.a.Fragment,{children:[Object(i.jsx)(m,{}),Object(i.jsx)(A,{})]})}}]),a}(o.Component);t.default=P}}]);
//# sourceMappingURL=15.93b5fc8e.chunk.js.map