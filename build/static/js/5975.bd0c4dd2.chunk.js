"use strict";(self.webpackChunknipa_panel_new=self.webpackChunknipa_panel_new||[]).push([[5975],{5622:(e,t,o)=>{o.d(t,{A:()=>Qe});var n=o(8168),r=o(8587),i=o(5043),a=o(7042),s=o(3844),l=o(2144);function p(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function c(e){return e instanceof p(e).Element||e instanceof Element}function u(e){return e instanceof p(e).HTMLElement||e instanceof HTMLElement}function f(e){return"undefined"!==typeof ShadowRoot&&(e instanceof p(e).ShadowRoot||e instanceof ShadowRoot)}var d=Math.max,m=Math.min,h=Math.round;function v(){var e=navigator.userAgentData;return null!=e&&e.brands&&Array.isArray(e.brands)?e.brands.map((function(e){return e.brand+"/"+e.version})).join(" "):navigator.userAgent}function g(){return!/^((?!chrome|android).)*safari/i.test(v())}function y(e,t,o){void 0===t&&(t=!1),void 0===o&&(o=!1);var n=e.getBoundingClientRect(),r=1,i=1;t&&u(e)&&(r=e.offsetWidth>0&&h(n.width)/e.offsetWidth||1,i=e.offsetHeight>0&&h(n.height)/e.offsetHeight||1);var a=(c(e)?p(e):window).visualViewport,s=!g()&&o,l=(n.left+(s&&a?a.offsetLeft:0))/r,f=(n.top+(s&&a?a.offsetTop:0))/i,d=n.width/r,m=n.height/i;return{width:d,height:m,top:f,right:l+d,bottom:f+m,left:l,x:l,y:f}}function b(e){var t=p(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function w(e){return e?(e.nodeName||"").toLowerCase():null}function x(e){return((c(e)?e.ownerDocument:e.document)||window.document).documentElement}function O(e){return y(x(e)).left+b(e).scrollLeft}function A(e){return p(e).getComputedStyle(e)}function E(e){var t=A(e),o=t.overflow,n=t.overflowX,r=t.overflowY;return/auto|scroll|overlay|hidden/.test(o+r+n)}function P(e,t,o){void 0===o&&(o=!1);var n=u(t),r=u(t)&&function(e){var t=e.getBoundingClientRect(),o=h(t.width)/e.offsetWidth||1,n=h(t.height)/e.offsetHeight||1;return 1!==o||1!==n}(t),i=x(t),a=y(e,r,o),s={scrollLeft:0,scrollTop:0},l={x:0,y:0};return(n||!n&&!o)&&(("body"!==w(t)||E(i))&&(s=function(e){return e!==p(e)&&u(e)?{scrollLeft:(t=e).scrollLeft,scrollTop:t.scrollTop}:b(e);var t}(t)),u(t)?((l=y(t,!0)).x+=t.clientLeft,l.y+=t.clientTop):i&&(l.x=O(i))),{x:a.left+s.scrollLeft-l.x,y:a.top+s.scrollTop-l.y,width:a.width,height:a.height}}function k(e){var t=y(e),o=e.offsetWidth,n=e.offsetHeight;return Math.abs(t.width-o)<=1&&(o=t.width),Math.abs(t.height-n)<=1&&(n=t.height),{x:e.offsetLeft,y:e.offsetTop,width:o,height:n}}function T(e){return"html"===w(e)?e:e.assignedSlot||e.parentNode||(f(e)?e.host:null)||x(e)}function M(e){return["html","body","#document"].indexOf(w(e))>=0?e.ownerDocument.body:u(e)&&E(e)?e:M(T(e))}function R(e,t){var o;void 0===t&&(t=[]);var n=M(e),r=n===(null==(o=e.ownerDocument)?void 0:o.body),i=p(n),a=r?[i].concat(i.visualViewport||[],E(n)?n:[]):n,s=t.concat(a);return r?s:s.concat(R(T(a)))}function j(e){return["table","td","th"].indexOf(w(e))>=0}function L(e){return u(e)&&"fixed"!==A(e).position?e.offsetParent:null}function D(e){for(var t=p(e),o=L(e);o&&j(o)&&"static"===A(o).position;)o=L(o);return o&&("html"===w(o)||"body"===w(o)&&"static"===A(o).position)?t:o||function(e){var t=/firefox/i.test(v());if(/Trident/i.test(v())&&u(e)&&"fixed"===A(e).position)return null;var o=T(e);for(f(o)&&(o=o.host);u(o)&&["html","body"].indexOf(w(o))<0;){var n=A(o);if("none"!==n.transform||"none"!==n.perspective||"paint"===n.contain||-1!==["transform","perspective"].indexOf(n.willChange)||t&&"filter"===n.willChange||t&&n.filter&&"none"!==n.filter)return o;o=o.parentNode}return null}(e)||t}var W="top",B="bottom",C="right",S="left",H="auto",F=[W,B,C,S],N="start",I="end",z="clippingParents",_="viewport",V="popper",q="reference",U=F.reduce((function(e,t){return e.concat([t+"-"+N,t+"-"+I])}),[]),X=[].concat(F,[H]).reduce((function(e,t){return e.concat([t,t+"-"+N,t+"-"+I])}),[]),Y=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function Q(e){var t=new Map,o=new Set,n=[];function r(e){o.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!o.has(e)){var n=t.get(e);n&&r(n)}})),n.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){o.has(e.name)||r(e)})),n}function Z(e){var t;return function(){return t||(t=new Promise((function(o){Promise.resolve().then((function(){t=void 0,o(e())}))}))),t}}var G={placement:"bottom",modifiers:[],strategy:"absolute"};function J(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];return!t.some((function(e){return!(e&&"function"===typeof e.getBoundingClientRect)}))}function K(e){void 0===e&&(e={});var t=e,o=t.defaultModifiers,n=void 0===o?[]:o,r=t.defaultOptions,i=void 0===r?G:r;return function(e,t,o){void 0===o&&(o=i);var r={placement:"bottom",orderedModifiers:[],options:Object.assign({},G,i),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},a=[],s=!1,l={state:r,setOptions:function(o){var s="function"===typeof o?o(r.options):o;p(),r.options=Object.assign({},i,r.options,s),r.scrollParents={reference:c(e)?R(e):e.contextElement?R(e.contextElement):[],popper:R(t)};var u=function(e){var t=Q(e);return Y.reduce((function(e,o){return e.concat(t.filter((function(e){return e.phase===o})))}),[])}(function(e){var t=e.reduce((function(e,t){var o=e[t.name];return e[t.name]=o?Object.assign({},o,t,{options:Object.assign({},o.options,t.options),data:Object.assign({},o.data,t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}([].concat(n,r.options.modifiers)));return r.orderedModifiers=u.filter((function(e){return e.enabled})),r.orderedModifiers.forEach((function(e){var t=e.name,o=e.options,n=void 0===o?{}:o,i=e.effect;if("function"===typeof i){var s=i({state:r,name:t,instance:l,options:n}),p=function(){};a.push(s||p)}})),l.update()},forceUpdate:function(){if(!s){var e=r.elements,t=e.reference,o=e.popper;if(J(t,o)){r.rects={reference:P(t,D(o),"fixed"===r.options.strategy),popper:k(o)},r.reset=!1,r.placement=r.options.placement,r.orderedModifiers.forEach((function(e){return r.modifiersData[e.name]=Object.assign({},e.data)}));for(var n=0;n<r.orderedModifiers.length;n++)if(!0!==r.reset){var i=r.orderedModifiers[n],a=i.fn,p=i.options,c=void 0===p?{}:p,u=i.name;"function"===typeof a&&(r=a({state:r,options:c,name:u,instance:l})||r)}else r.reset=!1,n=-1}}},update:Z((function(){return new Promise((function(e){l.forceUpdate(),e(r)}))})),destroy:function(){p(),s=!0}};if(!J(e,t))return l;function p(){a.forEach((function(e){return e()})),a=[]}return l.setOptions(o).then((function(e){!s&&o.onFirstUpdate&&o.onFirstUpdate(e)})),l}}var $={passive:!0};function ee(e){return e.split("-")[0]}function te(e){return e.split("-")[1]}function oe(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function ne(e){var t,o=e.reference,n=e.element,r=e.placement,i=r?ee(r):null,a=r?te(r):null,s=o.x+o.width/2-n.width/2,l=o.y+o.height/2-n.height/2;switch(i){case W:t={x:s,y:o.y-n.height};break;case B:t={x:s,y:o.y+o.height};break;case C:t={x:o.x+o.width,y:l};break;case S:t={x:o.x-n.width,y:l};break;default:t={x:o.x,y:o.y}}var p=i?oe(i):null;if(null!=p){var c="y"===p?"height":"width";switch(a){case N:t[p]=t[p]-(o[c]/2-n[c]/2);break;case I:t[p]=t[p]+(o[c]/2-n[c]/2)}}return t}var re={top:"auto",right:"auto",bottom:"auto",left:"auto"};function ie(e){var t,o=e.popper,n=e.popperRect,r=e.placement,i=e.variation,a=e.offsets,s=e.position,l=e.gpuAcceleration,c=e.adaptive,u=e.roundOffsets,f=e.isFixed,d=a.x,m=void 0===d?0:d,v=a.y,g=void 0===v?0:v,y="function"===typeof u?u({x:m,y:g}):{x:m,y:g};m=y.x,g=y.y;var b=a.hasOwnProperty("x"),w=a.hasOwnProperty("y"),O=S,E=W,P=window;if(c){var k=D(o),T="clientHeight",M="clientWidth";if(k===p(o)&&"static"!==A(k=x(o)).position&&"absolute"===s&&(T="scrollHeight",M="scrollWidth"),r===W||(r===S||r===C)&&i===I)E=B,g-=(f&&k===P&&P.visualViewport?P.visualViewport.height:k[T])-n.height,g*=l?1:-1;if(r===S||(r===W||r===B)&&i===I)O=C,m-=(f&&k===P&&P.visualViewport?P.visualViewport.width:k[M])-n.width,m*=l?1:-1}var R,j=Object.assign({position:s},c&&re),L=!0===u?function(e,t){var o=e.x,n=e.y,r=t.devicePixelRatio||1;return{x:h(o*r)/r||0,y:h(n*r)/r||0}}({x:m,y:g},p(o)):{x:m,y:g};return m=L.x,g=L.y,l?Object.assign({},j,((R={})[E]=w?"0":"",R[O]=b?"0":"",R.transform=(P.devicePixelRatio||1)<=1?"translate("+m+"px, "+g+"px)":"translate3d("+m+"px, "+g+"px, 0)",R)):Object.assign({},j,((t={})[E]=w?g+"px":"",t[O]=b?m+"px":"",t.transform="",t))}const ae={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,o=e.options,n=e.name,r=o.offset,i=void 0===r?[0,0]:r,a=X.reduce((function(e,o){return e[o]=function(e,t,o){var n=ee(e),r=[S,W].indexOf(n)>=0?-1:1,i="function"===typeof o?o(Object.assign({},t,{placement:e})):o,a=i[0],s=i[1];return a=a||0,s=(s||0)*r,[S,C].indexOf(n)>=0?{x:s,y:a}:{x:a,y:s}}(o,t.rects,i),e}),{}),s=a[t.placement],l=s.x,p=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=l,t.modifiersData.popperOffsets.y+=p),t.modifiersData[n]=a}};var se={left:"right",right:"left",bottom:"top",top:"bottom"};function le(e){return e.replace(/left|right|bottom|top/g,(function(e){return se[e]}))}var pe={start:"end",end:"start"};function ce(e){return e.replace(/start|end/g,(function(e){return pe[e]}))}function ue(e,t){var o=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(o&&f(o)){var n=t;do{if(n&&e.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function fe(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function de(e,t,o){return t===_?fe(function(e,t){var o=p(e),n=x(e),r=o.visualViewport,i=n.clientWidth,a=n.clientHeight,s=0,l=0;if(r){i=r.width,a=r.height;var c=g();(c||!c&&"fixed"===t)&&(s=r.offsetLeft,l=r.offsetTop)}return{width:i,height:a,x:s+O(e),y:l}}(e,o)):c(t)?function(e,t){var o=y(e,!1,"fixed"===t);return o.top=o.top+e.clientTop,o.left=o.left+e.clientLeft,o.bottom=o.top+e.clientHeight,o.right=o.left+e.clientWidth,o.width=e.clientWidth,o.height=e.clientHeight,o.x=o.left,o.y=o.top,o}(t,o):fe(function(e){var t,o=x(e),n=b(e),r=null==(t=e.ownerDocument)?void 0:t.body,i=d(o.scrollWidth,o.clientWidth,r?r.scrollWidth:0,r?r.clientWidth:0),a=d(o.scrollHeight,o.clientHeight,r?r.scrollHeight:0,r?r.clientHeight:0),s=-n.scrollLeft+O(e),l=-n.scrollTop;return"rtl"===A(r||o).direction&&(s+=d(o.clientWidth,r?r.clientWidth:0)-i),{width:i,height:a,x:s,y:l}}(x(e)))}function me(e,t,o,n){var r="clippingParents"===t?function(e){var t=R(T(e)),o=["absolute","fixed"].indexOf(A(e).position)>=0&&u(e)?D(e):e;return c(o)?t.filter((function(e){return c(e)&&ue(e,o)&&"body"!==w(e)})):[]}(e):[].concat(t),i=[].concat(r,[o]),a=i[0],s=i.reduce((function(t,o){var r=de(e,o,n);return t.top=d(r.top,t.top),t.right=m(r.right,t.right),t.bottom=m(r.bottom,t.bottom),t.left=d(r.left,t.left),t}),de(e,a,n));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function he(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function ve(e,t){return t.reduce((function(t,o){return t[o]=e,t}),{})}function ge(e,t){void 0===t&&(t={});var o=t,n=o.placement,r=void 0===n?e.placement:n,i=o.strategy,a=void 0===i?e.strategy:i,s=o.boundary,l=void 0===s?z:s,p=o.rootBoundary,u=void 0===p?_:p,f=o.elementContext,d=void 0===f?V:f,m=o.altBoundary,h=void 0!==m&&m,v=o.padding,g=void 0===v?0:v,b=he("number"!==typeof g?g:ve(g,F)),w=d===V?q:V,O=e.rects.popper,A=e.elements[h?w:d],E=me(c(A)?A:A.contextElement||x(e.elements.popper),l,u,a),P=y(e.elements.reference),k=ne({reference:P,element:O,strategy:"absolute",placement:r}),T=fe(Object.assign({},O,k)),M=d===V?T:P,R={top:E.top-M.top+b.top,bottom:M.bottom-E.bottom+b.bottom,left:E.left-M.left+b.left,right:M.right-E.right+b.right},j=e.modifiersData.offset;if(d===V&&j){var L=j[r];Object.keys(R).forEach((function(e){var t=[C,B].indexOf(e)>=0?1:-1,o=[W,B].indexOf(e)>=0?"y":"x";R[e]+=L[o]*t}))}return R}function ye(e,t,o){return d(e,m(t,o))}const be={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,o=e.options,n=e.name,r=o.mainAxis,i=void 0===r||r,a=o.altAxis,s=void 0!==a&&a,l=o.boundary,p=o.rootBoundary,c=o.altBoundary,u=o.padding,f=o.tether,h=void 0===f||f,v=o.tetherOffset,g=void 0===v?0:v,y=ge(t,{boundary:l,rootBoundary:p,padding:u,altBoundary:c}),b=ee(t.placement),w=te(t.placement),x=!w,O=oe(b),A="x"===O?"y":"x",E=t.modifiersData.popperOffsets,P=t.rects.reference,T=t.rects.popper,M="function"===typeof g?g(Object.assign({},t.rects,{placement:t.placement})):g,R="number"===typeof M?{mainAxis:M,altAxis:M}:Object.assign({mainAxis:0,altAxis:0},M),j=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,L={x:0,y:0};if(E){if(i){var H,F="y"===O?W:S,I="y"===O?B:C,z="y"===O?"height":"width",_=E[O],V=_+y[F],q=_-y[I],U=h?-T[z]/2:0,X=w===N?P[z]:T[z],Y=w===N?-T[z]:-P[z],Q=t.elements.arrow,Z=h&&Q?k(Q):{width:0,height:0},G=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},J=G[F],K=G[I],$=ye(0,P[z],Z[z]),ne=x?P[z]/2-U-$-J-R.mainAxis:X-$-J-R.mainAxis,re=x?-P[z]/2+U+$+K+R.mainAxis:Y+$+K+R.mainAxis,ie=t.elements.arrow&&D(t.elements.arrow),ae=ie?"y"===O?ie.clientTop||0:ie.clientLeft||0:0,se=null!=(H=null==j?void 0:j[O])?H:0,le=_+re-se,pe=ye(h?m(V,_+ne-se-ae):V,_,h?d(q,le):q);E[O]=pe,L[O]=pe-_}if(s){var ce,ue="x"===O?W:S,fe="x"===O?B:C,de=E[A],me="y"===A?"height":"width",he=de+y[ue],ve=de-y[fe],be=-1!==[W,S].indexOf(b),we=null!=(ce=null==j?void 0:j[A])?ce:0,xe=be?he:de-P[me]-T[me]-we+R.altAxis,Oe=be?de+P[me]+T[me]-we-R.altAxis:ve,Ae=h&&be?function(e,t,o){var n=ye(e,t,o);return n>o?o:n}(xe,de,Oe):ye(h?xe:he,de,h?Oe:ve);E[A]=Ae,L[A]=Ae-de}t.modifiersData[n]=L}},requiresIfExists:["offset"]};const we={name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,o=e.state,n=e.name,r=e.options,i=o.elements.arrow,a=o.modifiersData.popperOffsets,s=ee(o.placement),l=oe(s),p=[S,C].indexOf(s)>=0?"height":"width";if(i&&a){var c=function(e,t){return he("number"!==typeof(e="function"===typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:ve(e,F))}(r.padding,o),u=k(i),f="y"===l?W:S,d="y"===l?B:C,m=o.rects.reference[p]+o.rects.reference[l]-a[l]-o.rects.popper[p],h=a[l]-o.rects.reference[l],v=D(i),g=v?"y"===l?v.clientHeight||0:v.clientWidth||0:0,y=m/2-h/2,b=c[f],w=g-u[p]-c[d],x=g/2-u[p]/2+y,O=ye(b,x,w),A=l;o.modifiersData[n]=((t={})[A]=O,t.centerOffset=O-x,t)}},effect:function(e){var t=e.state,o=e.options.element,n=void 0===o?"[data-popper-arrow]":o;null!=n&&("string"!==typeof n||(n=t.elements.popper.querySelector(n)))&&ue(t.elements.popper,n)&&(t.elements.arrow=n)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function xe(e,t,o){return void 0===o&&(o={x:0,y:0}),{top:e.top-t.height-o.y,right:e.right-t.width+o.x,bottom:e.bottom-t.height+o.y,left:e.left-t.width-o.x}}function Oe(e){return[W,C,B,S].some((function(t){return e[t]>=0}))}var Ae=K({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,o=e.instance,n=e.options,r=n.scroll,i=void 0===r||r,a=n.resize,s=void 0===a||a,l=p(t.elements.popper),c=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&c.forEach((function(e){e.addEventListener("scroll",o.update,$)})),s&&l.addEventListener("resize",o.update,$),function(){i&&c.forEach((function(e){e.removeEventListener("scroll",o.update,$)})),s&&l.removeEventListener("resize",o.update,$)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,o=e.name;t.modifiersData[o]=ne({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,o=e.options,n=o.gpuAcceleration,r=void 0===n||n,i=o.adaptive,a=void 0===i||i,s=o.roundOffsets,l=void 0===s||s,p={placement:ee(t.placement),variation:te(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:r,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,ie(Object.assign({},p,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:l})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,ie(Object.assign({},p,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var o=t.styles[e]||{},n=t.attributes[e]||{},r=t.elements[e];u(r)&&w(r)&&(Object.assign(r.style,o),Object.keys(n).forEach((function(e){var t=n[e];!1===t?r.removeAttribute(e):r.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,o={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,o.popper),t.styles=o,t.elements.arrow&&Object.assign(t.elements.arrow.style,o.arrow),function(){Object.keys(t.elements).forEach((function(e){var n=t.elements[e],r=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:o[e]).reduce((function(e,t){return e[t]="",e}),{});u(n)&&w(n)&&(Object.assign(n.style,i),Object.keys(r).forEach((function(e){n.removeAttribute(e)})))}))}},requires:["computeStyles"]},ae,{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,o=e.options,n=e.name;if(!t.modifiersData[n]._skip){for(var r=o.mainAxis,i=void 0===r||r,a=o.altAxis,s=void 0===a||a,l=o.fallbackPlacements,p=o.padding,c=o.boundary,u=o.rootBoundary,f=o.altBoundary,d=o.flipVariations,m=void 0===d||d,h=o.allowedAutoPlacements,v=t.options.placement,g=ee(v),y=l||(g===v||!m?[le(v)]:function(e){if(ee(e)===H)return[];var t=le(e);return[ce(e),t,ce(t)]}(v)),b=[v].concat(y).reduce((function(e,o){return e.concat(ee(o)===H?function(e,t){void 0===t&&(t={});var o=t,n=o.placement,r=o.boundary,i=o.rootBoundary,a=o.padding,s=o.flipVariations,l=o.allowedAutoPlacements,p=void 0===l?X:l,c=te(n),u=c?s?U:U.filter((function(e){return te(e)===c})):F,f=u.filter((function(e){return p.indexOf(e)>=0}));0===f.length&&(f=u);var d=f.reduce((function(t,o){return t[o]=ge(e,{placement:o,boundary:r,rootBoundary:i,padding:a})[ee(o)],t}),{});return Object.keys(d).sort((function(e,t){return d[e]-d[t]}))}(t,{placement:o,boundary:c,rootBoundary:u,padding:p,flipVariations:m,allowedAutoPlacements:h}):o)}),[]),w=t.rects.reference,x=t.rects.popper,O=new Map,A=!0,E=b[0],P=0;P<b.length;P++){var k=b[P],T=ee(k),M=te(k)===N,R=[W,B].indexOf(T)>=0,j=R?"width":"height",L=ge(t,{placement:k,boundary:c,rootBoundary:u,altBoundary:f,padding:p}),D=R?M?C:S:M?B:W;w[j]>x[j]&&(D=le(D));var I=le(D),z=[];if(i&&z.push(L[T]<=0),s&&z.push(L[D]<=0,L[I]<=0),z.every((function(e){return e}))){E=k,A=!1;break}O.set(k,z)}if(A)for(var _=function(e){var t=b.find((function(t){var o=O.get(t);if(o)return o.slice(0,e).every((function(e){return e}))}));if(t)return E=t,"break"},V=m?3:1;V>0;V--){if("break"===_(V))break}t.placement!==E&&(t.modifiersData[n]._skip=!0,t.placement=E,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},be,we,{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,o=e.name,n=t.rects.reference,r=t.rects.popper,i=t.modifiersData.preventOverflow,a=ge(t,{elementContext:"reference"}),s=ge(t,{altBoundary:!0}),l=xe(a,n),p=xe(s,r,i),c=Oe(l),u=Oe(p);t.modifiersData[o]={referenceClippingOffsets:l,popperEscapeOffsets:p,isReferenceHidden:c,hasPopperEscaped:u},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":c,"data-popper-escaped":u})}}]}),Ee=o(8606),Pe=o(5990),ke=o(4579);const Te="base";function Me(e,t){const o=ke.li[t];return o?(n=o,"".concat(Te,"--").concat(n)):function(e,t){return"".concat(Te,"-").concat(e,"-").concat(t)}(e,t);var n}const Re="Popper";function je(e){return Me(Re,e)}!function(e,t){const o={};t.forEach((t=>{o[t]=Me(e,t)}))}(Re,["root"]);var Le=o(9442),De=o(579);const We={disableDefaultClasses:!1},Be=i.createContext(We);const Ce=["anchorEl","children","direction","disablePortal","modifiers","open","placement","popperOptions","popperRef","slotProps","slots","TransitionProps","ownerState"],Se=["anchorEl","children","container","direction","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","style","transition","slotProps","slots"];function He(e){return"function"===typeof e?e():e}function Fe(e){return void 0!==e.nodeType}const Ne=()=>(0,Ee.A)({root:["root"]},function(e){const{disableDefaultClasses:t}=i.useContext(Be);return o=>t?"":e(o)}(je)),Ie={},ze=i.forwardRef((function(e,t){var o;const{anchorEl:l,children:p,direction:c,disablePortal:u,modifiers:f,open:d,placement:m,popperOptions:h,popperRef:v,slotProps:g={},slots:y={},TransitionProps:b}=e,w=(0,r.A)(e,Ce),x=i.useRef(null),O=(0,a.A)(x,t),A=i.useRef(null),E=(0,a.A)(A,v),P=i.useRef(E);(0,s.A)((()=>{P.current=E}),[E]),i.useImperativeHandle(v,(()=>A.current),[]);const k=function(e,t){if("ltr"===t)return e;switch(e){case"bottom-end":return"bottom-start";case"bottom-start":return"bottom-end";case"top-end":return"top-start";case"top-start":return"top-end";default:return e}}(m,c),[T,M]=i.useState(k),[R,j]=i.useState(He(l));i.useEffect((()=>{A.current&&A.current.forceUpdate()})),i.useEffect((()=>{l&&j(He(l))}),[l]),(0,s.A)((()=>{if(!R||!d)return;let e=[{name:"preventOverflow",options:{altBoundary:u}},{name:"flip",options:{altBoundary:u}},{name:"onUpdate",enabled:!0,phase:"afterWrite",fn:e=>{let{state:t}=e;M(t.placement)}}];null!=f&&(e=e.concat(f)),h&&null!=h.modifiers&&(e=e.concat(h.modifiers));const t=Ae(R,x.current,(0,n.A)({placement:k},h,{modifiers:e}));return P.current(t),()=>{t.destroy(),P.current(null)}}),[R,u,f,d,h,k]);const L={placement:T};null!==b&&(L.TransitionProps=b);const D=Ne(),W=null!=(o=y.root)?o:"div",B=(0,Le.Q)({elementType:W,externalSlotProps:g.root,externalForwardedProps:w,additionalProps:{role:"tooltip",ref:O},ownerState:e,className:D.root});return(0,De.jsx)(W,(0,n.A)({},B,{children:"function"===typeof p?p(L):p}))})),_e=i.forwardRef((function(e,t){const{anchorEl:o,children:a,container:s,direction:p="ltr",disablePortal:c=!1,keepMounted:u=!1,modifiers:f,open:d,placement:m="bottom",popperOptions:h=Ie,popperRef:v,style:g,transition:y=!1,slotProps:b={},slots:w={}}=e,x=(0,r.A)(e,Se),[O,A]=i.useState(!0);if(!u&&!d&&(!y||O))return null;let E;if(s)E=s;else if(o){const e=He(o);E=e&&Fe(e)?(0,l.A)(e).body:(0,l.A)(null).body}const P=d||!u||y&&!O?void 0:"none",k=y?{in:d,onEnter:()=>{A(!1)},onExited:()=>{A(!0)}}:void 0;return(0,De.jsx)(Pe.Z,{disablePortal:c,container:E,children:(0,De.jsx)(ze,(0,n.A)({anchorEl:o,direction:p,disablePortal:c,modifiers:f,ref:t,open:y?!O:d,placement:m,popperOptions:h,popperRef:v,slotProps:b,slots:w},x,{style:(0,n.A)({position:"fixed",top:0,left:0,display:P},g),TransitionProps:k,children:a}))})}));var Ve=o(2374),qe=o(4535),Ue=o(7864);const Xe=["anchorEl","component","components","componentsProps","container","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","transition","slots","slotProps"],Ye=(0,qe.Ay)(_e,{name:"MuiPopper",slot:"Root",overridesResolver:(e,t)=>t.root})({}),Qe=i.forwardRef((function(e,t){var o;const i=(0,Ve.A)(),a=(0,Ue.A)({props:e,name:"MuiPopper"}),{anchorEl:s,component:l,components:p,componentsProps:c,container:u,disablePortal:f,keepMounted:d,modifiers:m,open:h,placement:v,popperOptions:g,popperRef:y,transition:b,slots:w,slotProps:x}=a,O=(0,r.A)(a,Xe),A=null!=(o=null==w?void 0:w.root)?o:null==p?void 0:p.Root,E=(0,n.A)({anchorEl:s,container:u,disablePortal:f,keepMounted:d,modifiers:m,open:h,placement:v,popperOptions:g,popperRef:y,transition:b},O);return(0,De.jsx)(Ye,(0,n.A)({as:l,direction:null==i?void 0:i.direction,slots:{root:A},slotProps:null!=x?x:c},E,{ref:t}))}))},683:(e,t,o)=>{o.d(t,{A:()=>S});var n=o(8587),r=o(8168),i=o(5043),a=o(8387),s=o(1140),l=o(2205),p=o(8606),c=o(7266),u=o(875),f=o(4535),d=o(6240),m=o(7864),h=o(6803),v=o(6328),g=o(5622),y=o(3319),b=o(5849);const w=o(992).A;var x=o(2191),O=o(4516),A=o(7056),E=o(4579);function P(e){return(0,E.Ay)("MuiTooltip",e)}const k=(0,A.A)("MuiTooltip",["popper","popperInteractive","popperArrow","popperClose","tooltip","tooltipArrow","touch","tooltipPlacementLeft","tooltipPlacementRight","tooltipPlacementTop","tooltipPlacementBottom","arrow"]);var T=o(579);const M=["arrow","children","classes","components","componentsProps","describeChild","disableFocusListener","disableHoverListener","disableInteractive","disableTouchListener","enterDelay","enterNextDelay","enterTouchDelay","followCursor","id","leaveDelay","leaveTouchDelay","onClose","onOpen","open","placement","PopperComponent","PopperProps","slotProps","slots","title","TransitionComponent","TransitionProps"];const R=(0,f.Ay)(g.A,{name:"MuiTooltip",slot:"Popper",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.popper,!o.disableInteractive&&t.popperInteractive,o.arrow&&t.popperArrow,!o.open&&t.popperClose]}})((e=>{let{theme:t,ownerState:o,open:n}=e;return(0,r.A)({zIndex:(t.vars||t).zIndex.tooltip,pointerEvents:"none"},!o.disableInteractive&&{pointerEvents:"auto"},!n&&{pointerEvents:"none"},o.arrow&&{['&[data-popper-placement*="bottom"] .'.concat(k.arrow)]:{top:0,marginTop:"-0.71em","&::before":{transformOrigin:"0 100%"}},['&[data-popper-placement*="top"] .'.concat(k.arrow)]:{bottom:0,marginBottom:"-0.71em","&::before":{transformOrigin:"100% 0"}},['&[data-popper-placement*="right"] .'.concat(k.arrow)]:(0,r.A)({},o.isRtl?{right:0,marginRight:"-0.71em"}:{left:0,marginLeft:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"100% 100%"}}),['&[data-popper-placement*="left"] .'.concat(k.arrow)]:(0,r.A)({},o.isRtl?{left:0,marginLeft:"-0.71em"}:{right:0,marginRight:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"0 0"}})})})),j=(0,f.Ay)("div",{name:"MuiTooltip",slot:"Tooltip",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.tooltip,o.touch&&t.touch,o.arrow&&t.tooltipArrow,t["tooltipPlacement".concat((0,h.A)(o.placement.split("-")[0]))]]}})((e=>{let{theme:t,ownerState:o}=e;return(0,r.A)({backgroundColor:t.vars?t.vars.palette.Tooltip.bg:(0,c.X4)(t.palette.grey[700],.92),borderRadius:(t.vars||t).shape.borderRadius,color:(t.vars||t).palette.common.white,fontFamily:t.typography.fontFamily,padding:"4px 8px",fontSize:t.typography.pxToRem(11),maxWidth:300,margin:2,wordWrap:"break-word",fontWeight:t.typography.fontWeightMedium},o.arrow&&{position:"relative",margin:0},o.touch&&{padding:"8px 16px",fontSize:t.typography.pxToRem(14),lineHeight:"".concat((n=16/14,Math.round(1e5*n)/1e5),"em"),fontWeight:t.typography.fontWeightRegular},{[".".concat(k.popper,'[data-popper-placement*="left"] &')]:(0,r.A)({transformOrigin:"right center"},o.isRtl?(0,r.A)({marginLeft:"14px"},o.touch&&{marginLeft:"24px"}):(0,r.A)({marginRight:"14px"},o.touch&&{marginRight:"24px"})),[".".concat(k.popper,'[data-popper-placement*="right"] &')]:(0,r.A)({transformOrigin:"left center"},o.isRtl?(0,r.A)({marginRight:"14px"},o.touch&&{marginRight:"24px"}):(0,r.A)({marginLeft:"14px"},o.touch&&{marginLeft:"24px"})),[".".concat(k.popper,'[data-popper-placement*="top"] &')]:(0,r.A)({transformOrigin:"center bottom",marginBottom:"14px"},o.touch&&{marginBottom:"24px"}),[".".concat(k.popper,'[data-popper-placement*="bottom"] &')]:(0,r.A)({transformOrigin:"center top",marginTop:"14px"},o.touch&&{marginTop:"24px"})});var n})),L=(0,f.Ay)("span",{name:"MuiTooltip",slot:"Arrow",overridesResolver:(e,t)=>t.arrow})((e=>{let{theme:t}=e;return{overflow:"hidden",position:"absolute",width:"1em",height:"0.71em",boxSizing:"border-box",color:t.vars?t.vars.palette.Tooltip.bg:(0,c.X4)(t.palette.grey[700],.9),"&::before":{content:'""',margin:"auto",display:"block",width:"100%",height:"100%",backgroundColor:"currentColor",transform:"rotate(45deg)"}}}));let D=!1;const W=new s.E;let B={x:0,y:0};function C(e,t){return function(o){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];t&&t(o,...r),e(o,...r)}}const S=i.forwardRef((function(e,t){var o,c,f,A,E,k,S,H,F,N,I,z,_,V,q,U,X,Y,Q;const Z=(0,m.A)({props:e,name:"MuiTooltip"}),{arrow:G=!1,children:J,components:K={},componentsProps:$={},describeChild:ee=!1,disableFocusListener:te=!1,disableHoverListener:oe=!1,disableInteractive:ne=!1,disableTouchListener:re=!1,enterDelay:ie=100,enterNextDelay:ae=0,enterTouchDelay:se=700,followCursor:le=!1,id:pe,leaveDelay:ce=0,leaveTouchDelay:ue=1500,onClose:fe,onOpen:de,open:me,placement:he="bottom",PopperComponent:ve,PopperProps:ge={},slotProps:ye={},slots:be={},title:we,TransitionComponent:xe=v.A,TransitionProps:Oe}=Z,Ae=(0,n.A)(Z,M),Ee=i.isValidElement(J)?J:(0,T.jsx)("span",{children:J}),Pe=(0,d.A)(),ke=(0,u.I)(),[Te,Me]=i.useState(),[Re,je]=i.useState(null),Le=i.useRef(!1),De=ne||le,We=(0,s.A)(),Be=(0,s.A)(),Ce=(0,s.A)(),Se=(0,s.A)(),[He,Fe]=(0,O.A)({controlled:me,default:!1,name:"Tooltip",state:"open"});let Ne=He;const Ie=w(pe),ze=i.useRef(),_e=(0,y.A)((()=>{void 0!==ze.current&&(document.body.style.WebkitUserSelect=ze.current,ze.current=void 0),Se.clear()}));i.useEffect((()=>_e),[_e]);const Ve=e=>{W.clear(),D=!0,Fe(!0),de&&!Ne&&de(e)},qe=(0,y.A)((e=>{W.start(800+ce,(()=>{D=!1})),Fe(!1),fe&&Ne&&fe(e),We.start(Pe.transitions.duration.shortest,(()=>{Le.current=!1}))})),Ue=e=>{Le.current&&"touchstart"!==e.type||(Te&&Te.removeAttribute("title"),Be.clear(),Ce.clear(),ie||D&&ae?Be.start(D?ae:ie,(()=>{Ve(e)})):Ve(e))},Xe=e=>{Be.clear(),Ce.start(ce,(()=>{qe(e)}))},{isFocusVisibleRef:Ye,onBlur:Qe,onFocus:Ze,ref:Ge}=(0,x.A)(),[,Je]=i.useState(!1),Ke=e=>{Qe(e),!1===Ye.current&&(Je(!1),Xe(e))},$e=e=>{Te||Me(e.currentTarget),Ze(e),!0===Ye.current&&(Je(!0),Ue(e))},et=e=>{Le.current=!0;const t=Ee.props;t.onTouchStart&&t.onTouchStart(e)},tt=e=>{et(e),Ce.clear(),We.clear(),_e(),ze.current=document.body.style.WebkitUserSelect,document.body.style.WebkitUserSelect="none",Se.start(se,(()=>{document.body.style.WebkitUserSelect=ze.current,Ue(e)}))},ot=e=>{Ee.props.onTouchEnd&&Ee.props.onTouchEnd(e),_e(),Ce.start(ue,(()=>{qe(e)}))};i.useEffect((()=>{if(Ne)return document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)};function e(e){"Escape"!==e.key&&"Esc"!==e.key||qe(e)}}),[qe,Ne]);const nt=(0,b.A)(Ee.ref,Ge,Me,t);we||0===we||(Ne=!1);const rt=i.useRef(),it={},at="string"===typeof we;ee?(it.title=Ne||!at||oe?null:we,it["aria-describedby"]=Ne?Ie:null):(it["aria-label"]=at?we:null,it["aria-labelledby"]=Ne&&!at?Ie:null);const st=(0,r.A)({},it,Ae,Ee.props,{className:(0,a.A)(Ae.className,Ee.props.className),onTouchStart:et,ref:nt},le?{onMouseMove:e=>{const t=Ee.props;t.onMouseMove&&t.onMouseMove(e),B={x:e.clientX,y:e.clientY},rt.current&&rt.current.update()}}:{});const lt={};re||(st.onTouchStart=tt,st.onTouchEnd=ot),oe||(st.onMouseOver=C(Ue,st.onMouseOver),st.onMouseLeave=C(Xe,st.onMouseLeave),De||(lt.onMouseOver=Ue,lt.onMouseLeave=Xe)),te||(st.onFocus=C($e,st.onFocus),st.onBlur=C(Ke,st.onBlur),De||(lt.onFocus=$e,lt.onBlur=Ke));const pt=i.useMemo((()=>{var e;let t=[{name:"arrow",enabled:Boolean(Re),options:{element:Re,padding:4}}];return null!=(e=ge.popperOptions)&&e.modifiers&&(t=t.concat(ge.popperOptions.modifiers)),(0,r.A)({},ge.popperOptions,{modifiers:t})}),[Re,ge]),ct=(0,r.A)({},Z,{isRtl:ke,arrow:G,disableInteractive:De,placement:he,PopperComponentProp:ve,touch:Le.current}),ut=(e=>{const{classes:t,disableInteractive:o,arrow:n,touch:r,placement:i}=e,a={popper:["popper",!o&&"popperInteractive",n&&"popperArrow"],tooltip:["tooltip",n&&"tooltipArrow",r&&"touch","tooltipPlacement".concat((0,h.A)(i.split("-")[0]))],arrow:["arrow"]};return(0,p.A)(a,P,t)})(ct),ft=null!=(o=null!=(c=be.popper)?c:K.Popper)?o:R,dt=null!=(f=null!=(A=null!=(E=be.transition)?E:K.Transition)?A:xe)?f:v.A,mt=null!=(k=null!=(S=be.tooltip)?S:K.Tooltip)?k:j,ht=null!=(H=null!=(F=be.arrow)?F:K.Arrow)?H:L,vt=(0,l.X)(ft,(0,r.A)({},ge,null!=(N=ye.popper)?N:$.popper,{className:(0,a.A)(ut.popper,null==ge?void 0:ge.className,null==(I=null!=(z=ye.popper)?z:$.popper)?void 0:I.className)}),ct),gt=(0,l.X)(dt,(0,r.A)({},Oe,null!=(_=ye.transition)?_:$.transition),ct),yt=(0,l.X)(mt,(0,r.A)({},null!=(V=ye.tooltip)?V:$.tooltip,{className:(0,a.A)(ut.tooltip,null==(q=null!=(U=ye.tooltip)?U:$.tooltip)?void 0:q.className)}),ct),bt=(0,l.X)(ht,(0,r.A)({},null!=(X=ye.arrow)?X:$.arrow,{className:(0,a.A)(ut.arrow,null==(Y=null!=(Q=ye.arrow)?Q:$.arrow)?void 0:Y.className)}),ct);return(0,T.jsxs)(i.Fragment,{children:[i.cloneElement(Ee,st),(0,T.jsx)(ft,(0,r.A)({as:null!=ve?ve:g.A,placement:he,anchorEl:le?{getBoundingClientRect:()=>({top:B.y,left:B.x,right:B.x,bottom:B.y,width:0,height:0})}:Te,popperRef:rt,open:!!Te&&Ne,id:Ie,transition:!0},lt,vt,{popperOptions:pt,children:e=>{let{TransitionProps:t}=e;return(0,T.jsx)(dt,(0,r.A)({timeout:Pe.transitions.duration.shorter},t,gt,{children:(0,T.jsxs)(mt,(0,r.A)({},yt,{children:[we,G?(0,T.jsx)(ht,(0,r.A)({},bt,{ref:je})):null]}))}))}}))]})}))},2374:(e,t,o)=>{t.A=void 0;var n=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var o=i(t);if(o&&o.has(e))return o.get(e);var n={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var s=r?Object.getOwnPropertyDescriptor(e,a):null;s&&(s.get||s.set)?Object.defineProperty(n,a,s):n[a]=e[a]}return n.default=e,o&&o.set(e,n),n}(o(5043)),r=o(7688);function i(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,o=new WeakMap;return(i=function(e){return e?o:t})(e)}t.A=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;const t=n.useContext(r.ThemeContext);return t&&(o=t,0!==Object.keys(o).length)?t:e;var o}},5961:(e,t,o)=>{o.d(t,{A:()=>m});var n=o(4069),r=o(5043),i=o(5173),a=o.n(i),s=["variant","color","size"],l=function(e){var t=e.color;return r.createElement(r.Fragment,null,r.createElement("path",{fill:t,d:"M17.919 8.18H6.079c-.96 0-1.44 1.16-.76 1.84l5.18 5.18c.83.83 2.18.83 3.01 0l1.97-1.97 3.21-3.21c.67-.68.19-1.84-.77-1.84z"}))},p=function(e){var t=e.color;return r.createElement(r.Fragment,null,r.createElement("path",{stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"10",strokeWidth:"1.5",d:"M16.01 12.85l-2.62 2.62c-.77.77-2.03.77-2.8 0L4.08 8.95M19.92 8.95l-1.04 1.04"}))},c=function(e){var t=e.color;return r.createElement(r.Fragment,null,r.createElement("path",{fill:t,d:"M15.48 13.23l-3.79-5.05H6.08c-.96 0-1.44 1.16-.76 1.84l5.18 5.18c.83.83 2.18.83 3.01 0l1.97-1.97z",opacity:".4"}),r.createElement("path",{fill:t,d:"M17.92 8.18h-6.23l3.79 5.05 3.21-3.21c.67-.68.19-1.84-.77-1.84z"}))},u=function(e){var t=e.color;return r.createElement(r.Fragment,null,r.createElement("path",{stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"10",strokeWidth:"1.5",d:"M19.92 8.95l-6.52 6.52c-.77.77-2.03.77-2.8 0L4.08 8.95"}))},f=function(e){var t=e.color;return r.createElement(r.Fragment,null,r.createElement("path",{fill:t,d:"M12 16.8c-.7 0-1.4-.27-1.93-.8L3.55 9.48a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l6.52 6.52c.48.48 1.26.48 1.74 0l6.52-6.52c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06L13.93 16c-.53.53-1.23.8-1.93.8z"}))},d=function(e){var t=e.color;return r.createElement(r.Fragment,null,r.createElement("path",{stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"10",strokeWidth:"1.5",d:"M19.92 8.95l-6.52 6.52c-.77.77-2.03.77-2.8 0L4.08 8.95"}))},m=(0,r.forwardRef)((function(e,t){var o=e.variant,i=e.color,a=e.size,m=(0,n._)(e,s);return r.createElement("svg",(0,n.a)({},m,{xmlns:"http://www.w3.org/2000/svg",ref:t,width:a,height:a,viewBox:"0 0 24 24",fill:"none"}),function(e,t){switch(e){case"Bold":return r.createElement(l,{color:t});case"Broken":return r.createElement(p,{color:t});case"Bulk":return r.createElement(c,{color:t});case"Linear":default:return r.createElement(u,{color:t});case"Outline":return r.createElement(f,{color:t});case"TwoTone":return r.createElement(d,{color:t})}}(o,i))}));m.propTypes={variant:a().oneOf(["Linear","Bold","Broken","Bulk","Outline","TwoTone"]),color:a().string,size:a().oneOfType([a().string,a().number])},m.defaultProps={variant:"Linear",color:"currentColor",size:"24"},m.displayName="ArrowDown2"}}]);
//# sourceMappingURL=5975.bd0c4dd2.chunk.js.map