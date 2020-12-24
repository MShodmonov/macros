/*! For license information please see 13.4bae54c4.chunk.js.LICENSE.txt */
(this.webpackJsonplandrick=this.webpackJsonplandrick||[]).push([[13],{157:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(9),i=n(10),o=n(14),c=n(12),s=n(11),l=n(0),u=n.n(l),d=n(13),f=n(49),v=function(e){Object(c.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).scrollSection=function(){var e;a.scrollTargetIds.forEach((function(t,n){e=document.getElementById(t).offsetTop-(a.headerBackground?document.querySelector("div[data-nav='list']").scrollHeight:0),window.pageYOffset>=e&&window.pageYOffset<e+document.getElementById(t).scrollHeight?(a.getNavLinkElement(t).classList.add(a.activeNavClass),a.getNavLinkElement(t).parentNode.classList.add(a.activeNavClass),a.clearOtherNavLinkActiveStyle(t)):(a.getNavLinkElement(t).classList.remove(a.activeNavClass),a.getNavLinkElement(t).parentNode.classList.remove(a.activeNavClass)),window.innerHeight+window.pageYOffset>=document.body.scrollHeight&&n===a.scrollTargetIds.length-1&&(a.getNavLinkElement(t).classList.add(a.activeNavClass),a.getNavLinkElement(t).parentNode.classList.add(a.activeNavClass),a.clearOtherNavLinkActiveStyle(t))}))},a.props=e,a.scrollTargetIds=a.props.scrollTargetIds,a.activeNavClass=a.props.activeNavClass,a.scrollDuration=Number(a.props.scrollDuration)||1e3,a.headerBackground="true"===a.props.headerBackground,a.props.router&&"HashRouter"===a.props.router?(a.homeDefaultLink="#/",a.hashIdentifier="#/#"):(a.homeDefaultLink="/",a.hashIdentifier="#"),a.scrollSection.bind(Object(o.a)(a)),a}return Object(i.a)(n,[{key:"easeInOutQuad",value:function(e,t,n,a){return(e/=a/2)<1?n/2*e*e+t:-n/2*(--e*(e-2)-1)+t}},{key:"scrollTo",value:function(e,t,n){var a=this,r=t-e,i=0;!function t(){i+=10;var o=a.easeInOutQuad(i,e,r,n);window.scrollTo(0,o),i<n&&setTimeout(t,10)}()}},{key:"getNavLinkElement",value:function(e){return document.querySelector("a[href='".concat(this.hashIdentifier).concat(e,"']"))}},{key:"getNavToSectionID",value:function(e){return e.includes(this.hashIdentifier)?e.replace(this.hashIdentifier,""):""}},{key:"componentDidMount",value:function(){var e=this;document.querySelector("a[href='".concat(this.homeDefaultLink,"']"))&&document.querySelector("a[href='".concat(this.homeDefaultLink,"']")).addEventListener("click",(function(t){t.preventDefault(),e.scrollTo(window.pageYOffset,0,e.scrollDuration),window.location.hash=""})),document.querySelector("div[data-nav='list']").querySelectorAll("a").forEach((function(t){t.addEventListener("click",(function(n){n.preventDefault();var a=e.getNavToSectionID(t.getAttribute("href"));if(a){var r=document.getElementById(a).offsetTop-(e.headerBackground?document.querySelector("div[data-nav='list']").scrollHeight:0);e.scrollTo(window.pageYOffset,r,e.scrollDuration)}else e.scrollTo(window.pageYOffset,0,e.scrollDuration)}))})),window.addEventListener("scroll",this.scrollSection,!0)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollSection,!0)}},{key:"clearOtherNavLinkActiveStyle",value:function(e){var t=this;this.scrollTargetIds.forEach((function(n,a){n!==e&&(t.getNavLinkElement(n).classList.remove(t.activeNavClass),t.getNavLinkElement(n).parentNode.classList.remove(t.activeNavClass))}))}},{key:"render",value:function(){return Object(a.jsx)("div",{"data-nav":"list",className:this.props.className,children:this.props.children})}}]),n}(l.Component),h=n(47),p=function(e){Object(c.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={navItems:[{id:1,idnm:"home",navheading:"Home"},{id:3,idnm:"service",navheading:"Feature"},{id:3,idnm:"testimonial",navheading:"Review"},{id:4,idnm:"pricing",navheading:"Price"},{id:6,idnm:"contact",navheading:"Contact"}],isOpen:!1},a.toggleLine=a.toggleLine.bind(Object(o.a)(a)),a}return Object(i.a)(n,[{key:"toggleLine",value:function(){this.setState((function(e){return{isOpen:!e.isOpen}}))}},{key:"render",value:function(){var e=this.state.navItems.map((function(e){return e.idnm}));return Object(a.jsx)(u.a.Fragment,{children:Object(a.jsx)("header",{id:"topnav",className:"defaultscroll sticky",children:Object(a.jsxs)(f.a,{children:[Object(a.jsx)("div",{children:Object(a.jsx)(d.b,{className:"logo",to:"#",children:Object(a.jsx)("img",{src:h.a,height:"24",alt:""})})}),Object(a.jsx)("div",{className:"buy-button",children:Object(a.jsx)(d.b,{to:"https://1.envato.market/landrickreactjs",target:"_blank",className:"btn btn-primary",children:"Buy Now"})}),Object(a.jsx)("div",{className:"menu-extras",children:Object(a.jsx)("div",{className:"menu-item",children:Object(a.jsx)(d.b,{to:"#",onClick:this.toggleLine,className:this.state.isOpen?"navbar-toggle open":"navbar-toggle",children:Object(a.jsxs)("div",{className:"lines",children:[Object(a.jsx)("span",{}),Object(a.jsx)("span",{}),Object(a.jsx)("span",{})]})})})}),Object(a.jsx)(v,{scrollTargetIds:e,scrollDuration:"800",headerBackground:"false",activeNavClass:"active",children:Object(a.jsx)("div",{id:"navigation",style:{display:this.state.isOpen?"block":"none"},children:Object(a.jsx)("ul",{className:"navigation-menu",children:this.state.navItems.map((function(e,t){return Object(a.jsx)("li",{className:"Home"===e.navheading?"has-submenu active":"has-submenu",children:Object(a.jsxs)("a",{href:"#"+e.idnm,children:[" ",e.navheading]})},t)}))})})})]})})})}}]),n}(l.Component);t.default=p},42:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var i=typeof a;if("string"===i||"number"===i)e.push(a);else if(Array.isArray(a)&&a.length){var o=r.apply(null,a);o&&e.push(o)}else if("object"===i)for(var c in a)n.call(a,c)&&a[c]&&e.push(c)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},43:function(e,t,n){"use strict";n.d(t,"m",(function(){return o})),n.d(t,"f",(function(){return c})),n.d(t,"d",(function(){return s})),n.d(t,"j",(function(){return l})),n.d(t,"k",(function(){return u})),n.d(t,"l",(function(){return d})),n.d(t,"p",(function(){return v})),n.d(t,"o",(function(){return p})),n.d(t,"n",(function(){return m})),n.d(t,"b",(function(){return g})),n.d(t,"a",(function(){return b})),n.d(t,"i",(function(){return y})),n.d(t,"c",(function(){return j})),n.d(t,"h",(function(){return k})),n.d(t,"g",(function(){return x})),n.d(t,"e",(function(){return E}));var a,r=n(7),i=n.n(r);function o(e){document.body.style.paddingRight=e>0?e+"px":null}function c(){var e=window.getComputedStyle(document.body,null);return parseInt(e&&e.getPropertyValue("padding-right")||0,10)}function s(){var e=function(){var e=document.createElement("div");e.style.position="absolute",e.style.top="-9999px",e.style.width="50px",e.style.height="50px",e.style.overflow="scroll",document.body.appendChild(e);var t=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),t}(),t=document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")[0],n=t?parseInt(t.style.paddingRight||0,10):0;document.body.clientWidth<window.innerWidth&&o(n+e)}function l(e,t){return void 0===e&&(e=""),void 0===t&&(t=a),t?e.split(" ").map((function(e){return t[e]||e})).join(" "):e}function u(e,t){var n={};return Object.keys(e).forEach((function(a){-1===t.indexOf(a)&&(n[a]=e[a])})),n}function d(e,t){for(var n,a=Array.isArray(t)?t:[t],r=a.length,i={};r>0;)i[n=a[r-=1]]=e[n];return i}var f={};function v(e){f[e]||("undefined"!==typeof console&&console.error(e),f[e]=!0)}var h="object"===typeof window&&window.Element||function(){};var p=i.a.oneOfType([i.a.string,i.a.func,function(e,t,n){if(!(e[t]instanceof h))return new Error("Invalid prop `"+t+"` supplied to `"+n+"`. Expected prop to be an instance of Element. Validation failed.")},i.a.shape({current:i.a.any})]),m=i.a.oneOfType([i.a.func,i.a.string,i.a.shape({$$typeof:i.a.symbol,render:i.a.func}),i.a.arrayOf(i.a.oneOfType([i.a.func,i.a.string,i.a.shape({$$typeof:i.a.symbol,render:i.a.func})]))]),g={Fade:150,Collapse:350,Modal:300,Carousel:600},b=["in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],y={esc:27,space:32,enter:13,tab:9,up:38,down:40,home:36,end:35,n:78,p:80},j=!("undefined"===typeof window||!window.document||!window.document.createElement);function O(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}function k(e){var t=typeof e;return null!=e&&("object"===t||"function"===t)}function N(e){if(function(e){return!(!e||"object"!==typeof e)&&"current"in e}(e))return e.current;if(function(e){if(!k(e))return!1;var t=O(e);return"[object Function]"===t||"[object AsyncFunction]"===t||"[object GeneratorFunction]"===t||"[object Proxy]"===t}(e))return e();if("string"===typeof e&&j){var t=document.querySelectorAll(e);if(t.length||(t=document.querySelectorAll("#"+e)),!t.length)throw new Error("The target '"+e+"' could not be identified in the dom, tip: check spelling");return t}return e}function w(e){return null!==e&&(Array.isArray(e)||j&&"number"===typeof e.length)}function x(e,t){var n=N(e);return t?w(n)?n:null===n?[]:[n]:w(n)?n[0]:n}var E=["a[href]","area[href]","input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","object","embed","[tabindex]:not(.modal)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])']},47:function(e,t,n){"use strict";t.a=n.p+"static/media/logo-dark.fb945915.png"},49:function(e,t,n){"use strict";var a=n(3),r=n(8),i=n(0),o=n.n(i),c=n(7),s=n.n(c),l=n(42),u=n.n(l),d=n(43),f={tag:d.n,fluid:s.a.oneOfType([s.a.bool,s.a.string]),className:s.a.string,cssModule:s.a.object},v=function(e){var t=e.className,n=e.cssModule,i=e.fluid,c=e.tag,s=Object(r.a)(e,["className","cssModule","fluid","tag"]),l="container";!0===i?l="container-fluid":i&&(l="container-"+i);var f=Object(d.j)(u()(t,l),n);return o.a.createElement(c,Object(a.a)({},s,{className:f}))};v.propTypes=f,v.defaultProps={tag:"div"},t.a=v}}]);
//# sourceMappingURL=13.4bae54c4.chunk.js.map