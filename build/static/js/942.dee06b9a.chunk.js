(self.webpackChunknipa_panel_new=self.webpackChunknipa_panel_new||[]).push([[942],{934:function(e,r,t){"use strict";t.d(r,{YN:function(){return f},jH:function(){return h},hu:function(){return m}});var n=t(4165),a=t(5861),o=t(9778),i=t(516);function c(){return s.apply(this,arguments)}function s(){return(s=(0,a.Z)((0,n.Z)().mark((function e(){var r,t;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,null===(r=(0,i.Z)())||void 0===r?void 0:r.get("/order");case 2:return t=e.sent,e.abrupt("return",null===t||void 0===t?void 0:t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(){return u.apply(this,arguments)}function u(){return(u=(0,a.Z)((0,n.Z)().mark((function e(){var r,t;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,null===(r=(0,i.Z)())||void 0===r?void 0:r.get("/orderGroup");case 2:return t=e.sent,e.abrupt("return",null===t||void 0===t?void 0:t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return p.apply(this,arguments)}function p(){return(p=(0,a.Z)((0,n.Z)().mark((function e(r){var t,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,null===(t=(0,i.Z)())||void 0===t?void 0:t.get("/order/"+r);case 2:return a=e.sent,e.abrupt("return",null===a||void 0===a?void 0:a.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var f=function(){var e=(0,o.a)({queryKey:["orderGroups"],queryFn:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()});return{data:e.data}},m=function(){var e=(0,o.a)({queryKey:["orders"],queryFn:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()});return{data:e.data}},h=function(e){var r=(0,o.a)({queryKey:["order",{id:e}],queryFn:function(){var r=(0,a.Z)((0,n.Z)().mark((function r(){return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,d(e);case 2:return r.abrupt("return",r.sent);case 3:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}()});return{data:r.data}}},5443:function(e,r,t){"use strict";t.d(r,{c:function(){return i},y:function(){return c}});var n=t(4165),a=t(5861),o=t(4999).Z.actions,i=function(e){return function(){var r=(0,a.Z)((0,n.Z)().mark((function r(t,a){return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:t(o.setApiLoading(e));case 1:case"end":return r.stop()}}),r)})));return function(e,t){return r.apply(this,arguments)}}()},c=function(e){return function(){var r=(0,a.Z)((0,n.Z)().mark((function r(t,a){return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:t(o.setCollapseMenu(e));case 1:case"end":return r.stop()}}),r)})));return function(e,t){return r.apply(this,arguments)}}()}},516:function(e,r,t){"use strict";var n=t(3263),a=t(5443),o=t(2855),i=t(174);r.Z=function(){var e=n.Z.create({baseURL:"http://localhost:8000/api/v1",headers:localStorage.getItem("nipa_token")?{"Content-Type":"application/json",Accept:"application/json",language:localStorage.getItem("nipa-lang")||"fa",authorization:"Bearer "+localStorage.getItem("nipa_token")}:{"Content-Type":"application/json",Accept:"application/json"}});return e.interceptors.request.use((function(e){return o.Z.dispatch((0,a.c)(!0)),e}),(function(e){return o.Z.dispatch((0,a.c)(!1)),Promise.reject(e)})),e.interceptors.response.use((function(e){return o.Z.dispatch((0,a.c)(!1)),e}),(function(e){(e.response.status,403==e.response.status&&(document.location.href="/errors/403"),e.response.data.errors)?Object.keys(e.response.data.errors).map((function(r){return e.response.data.errors[r]})).forEach((function(e){i.Z.error(e)})):(console.log("err",e.response),i.Z.error(e.response.data.message||e.response.data.msg||e.response.data.error));return o.Z.dispatch((0,a.c)(!1)),Promise.reject(e)})),e}},1193:function(e,r,t){"use strict";var n=t(9039);r.ZP={toISOLocal:function(e){var r=function(e){return("0"+e).slice(-2)},t=e.getTimezoneOffset();return t=Math.abs(t),e.getFullYear()+"-"+r(e.getMonth()+1)+"-"+r(e.getDate())},pluralize:function(e,r){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"s";return"".concat(e," ").concat(r).concat(1!==e?t:"")},fileToUrl:function(e){return new Promise((function(r,t){var n=new FileReader;n.onload=function(e){var t=e.target.result;r(t)},n.onerror=function(e){t(e.target.error)},n.readAsDataURL(e)}))},imageValidExtensions:["image/jpeg","image/jpg","image/png","image/gif"],base64ToBlob:function(e,r){for(var t=window.atob(e),n=t.length,a=new Uint8Array(n),o=0;o<n;++o)a[o]=t.charCodeAt(o);return new Blob([a],{type:r})},renderStatusStyle:function(e){var r;switch(e){case"success":r="bg-success-secondary text-success-primary ";break;case"warning":r="bg-warning-secondary text-warning-text ";break;case"error":r="bg-error-secondary text-error-primary ";break;case"info":r="bg-info-secondary text-info-primary ";break;default:r="bg-text-300 text-text-600 "}return r},toPersianDigitsPutCommas:function(e,r){var t="\u06f0".charCodeAt(0);!e&&(e="");var a=e.split(".");a[0].length>3&&(a[0]=a[0].replace(/\B(?=(\d{3})+(?!\d))/g,","));var o=a.join(".");return r||"fa"===n.Z.language?String(o).replace(/[0-9]/g,(function(e){return String.fromCharCode(e.charCodeAt(0)+t-48)})):o},fileToBlob:function(e){return new Blob([e],{type:e.type})},toPersianDigits:function(e,r){if(r||"fa"===n.Z.language){var t="\u06f0".charCodeAt(0);return String(e).replace(/[0-9]/g,(function(e){return String.fromCharCode(e.charCodeAt(0)+t-48)}))}return e},dateToTimestamp:function(e){return new Date(e).getTime()},renderChatTime:function(e,r,t){var a=Math.floor(Date.now());if(r)return t?new Date(e).toLocaleDateString("fa-IR"):new Date(e).toLocaleDateString("fa-IR")+" , "+new Date(e).toLocaleTimeString("fa-IR").slice(0,5);var o=Math.floor((a-e)/1e3);return o<60?n.Z.t("fewSecondsAgo"):o<3600?Math.floor(o/60)+" "+n.Z.t("minutesAgo"):o<86400?Math.floor(o/3600)+" "+n.Z.t("hoursAgo"):o<604800?Math.floor(o/86400)+" "+n.Z.t("daysAgo"):new Date(e).toLocaleDateString("fa-IR")},checkPermission:function(e){var r,t=null===(r=JSON.parse(localStorage.getItem("nipa_user")||"{}"))||void 0===r?void 0:r.permissions;return!(null===t||void 0===t||!t.find((function(r){return r.slug===e})))},convetToEnglishDigitsRemoveCommas:function(e){var r="\u06f0".charCodeAt(0);return String(e).replace(/[\u06f0-\u06f9]/g,(function(e){return String.fromCharCode(e.charCodeAt(0)-r+48)}))}}},6718:function(e,r,t){"use strict";var n=t(9145),a=t(184);r.Z=function(e){var r=e.title,t=e.actions,o=e.handleBack;return(0,a.jsxs)("div",{className:"print:hidden w-full flex items-center justify-between mb-[20px]",children:[(0,a.jsxs)("div",{className:"flex items-center",children:[o?(0,a.jsx)("div",{className:"cursor-pointer",onClick:o,children:(0,a.jsx)(n.Z,{className:"mx-[12px] text-gray-500 ltr:rotate-180"})}):(0,a.jsx)("span",{className:"inline-block w-[14px] h-[14px] rounded-[2px] bg-secondary-main me-3"}),(0,a.jsx)("p",{className:"text-gray-500 font-black",children:r})]}),(0,a.jsx)("div",{className:"flex",children:t})]})}},2636:function(e,r,t){"use strict";var n=t(3239),a=(t(2791),t(1087)),o=t(184);r.Z=function(e){var r=e.type,t=e.simple,i=e.bordered,c=e.href,s=e.text,l=e.onClick,u=e.icon,d=e.after,p=e.sm,f=e.xs,m=e.gray,h=e.disabled,x=e.loading,v=e.className,g="w-full ".concat(v," ").concat(f?"h-[36px]":p?"h-[38px]":"h-12"," rounded-[8px] flex items-center justify-center bg-primary-main text-white ").concat(i?"border border-primary-main bg-transparent !text-primary-main":"","\n   ").concat(t?"border-none bg-transparent !text-primary-main":"","\n   ").concat(m?"border-none !bg-text-200 !text-text-500":"","\n    ").concat(h?"opacity-90 cursor-not-allowed pointer-events-none":"","\n  "),k=function(){return u?(0,o.jsx)("div",{className:"inline-block me-1",children:u}):(0,o.jsx)(o.Fragment,{})};return(0,o.jsxs)(o.Fragment,{children:[c&&(0,o.jsxs)(a.rU,{to:c,className:g,children:[!d&&k(),x?(0,o.jsx)(n.Z,{className:"!text-white !w-[20px] !h-[20px]"}):s,d&&k()]}),r&&(0,o.jsxs)("button",{className:g,type:r,children:[!d&&k(),x?(0,o.jsx)(n.Z,{className:"!text-white !w-[20px] !h-[20px]"}):s,d&&k()]}),l&&(0,o.jsxs)("button",{className:g,onClick:l,children:[!d&&k(),x?(0,o.jsx)(n.Z,{className:"!text-white !w-[20px] !h-[20px]"}):s,d&&k()]})]})}},942:function(e,r,t){"use strict";t.r(r);var n=t(6718),a=t(7689),o=t(9230),i=t(1193),c=t(2636),s=t(1880),l=t(934),u=t(184);r.default=function(){var e,r=(0,a.s0)(),t=(0,a.UO)().orderId,d=(0,o.$G)().t,p=(0,l.jH)(parseInt(t||"")).data;return(0,u.jsxs)("div",{className:"w-full h-full",children:[(0,u.jsx)(n.Z,{title:"\u062c\u0632\u06cc\u06cc\u0627\u062a \u0633\u0641\u0627\u0631\u0634",handleBack:function(){return r("/orders")}}),p?(0,u.jsxs)("div",{className:"w-full flex flex-col bg-white rounded-[6px]",children:[(0,u.jsxs)("div",{className:"px-[20px] py-[30px] flex items-center justify-between border-b border-text-400 w-full",children:[(0,u.jsxs)("div",{children:[d("orderCode")," : ",t]}),(0,u.jsx)("div",{className:"w-[150px]",children:(0,u.jsx)(c.Z,{sm:!0,simple:!0,icon:(0,u.jsx)(s.Z,{}),href:"/",bordered:!0,text:d("viewFactor")})})]}),(0,u.jsxs)("div",{className:"px-[20px] py-[25px] w-full",children:[(0,u.jsxs)("div",{className:"flex items-center justify-between flex-wrap border-b border-text-400 pb-[20px]",children:[(0,u.jsxs)("div",{className:"flex items-center",children:[(0,u.jsx)("p",{className:"text-[14px] text-text-500",children:d("userName")}),(0,u.jsx)("p",{className:"text-[14px] text-text-700 ms-2",children:p.order.user.name?p.order.user.name+" "+p.order.user.last_name:p.order.user.mobile})]}),(0,u.jsxs)("div",{className:"flex items-center",children:[(0,u.jsx)("p",{className:"text-[14px] text-text-500",children:d("mobilePhone")}),(0,u.jsx)("p",{className:"text-[14px] text-text-700 ms-2",children:p.order.user.mobile})]}),(0,u.jsxs)("div",{className:"flex items-center",children:[(0,u.jsx)("p",{className:"text-[14px] text-text-500",children:d("submitDate")}),(0,u.jsx)("p",{className:"text-[14px] text-text-700 ms-2",children:i.ZP.renderChatTime(i.ZP.dateToTimestamp(p.order.created_at))})]}),(0,u.jsxs)("div",{className:"flex items-center",children:[(0,u.jsx)("p",{className:"text-[14px] text-text-500",children:d("recieverName")}),(0,u.jsx)("p",{className:"text-[14px] text-text-700 ms-2",children:p.order.customer_name})]})]}),(0,u.jsx)("div",{className:"flex items-center justify-start flex-wrap border-b border-text-400 py-[20px] gap-y-[25px] gap-x-[45px]",children:null===p||void 0===p||null===(e=p.userAnswers)||void 0===e?void 0:e.map((function(e,r){var t=e[0];return(0,u.jsxs)("div",{className:"flex items-center",children:[(0,u.jsxs)("p",{className:"text-[14px] text-text-500",children:[t.form_field.label,":"]}),(0,u.jsx)("p",{className:"text-[14px] text-text-700 ms-2",children:e.map((function(r,t){if("uploadFile"===r.form_field.type.type)return(0,u.jsx)("a",{href:"http://localhost:8000/api/v1/files/"+r.answer,className:"text-white font-bold text-[14px] text-text-700 mx-2 bg-primary-main rounded-[8px] px-3 py-2",target:"_blank",rel:"noreferrer",children:"\u062f\u0627\u0646\u0644\u0648\u062f \u067e\u06cc\u0648\u0633\u062a"},t);var n=r.answerObject?r.answerObject.name||r.answerObject.label:r.answer;return t<e.length-1?n+" - ":n}))})]},r)}))})]})]}):(0,u.jsx)("p",{children:"please wait..."})]})}},3239:function(e,r,t){"use strict";t.d(r,{Z:function(){return O}});var n=t(168),a=t(3366),o=t(7462),i=t(2791),c=t(8182),s=t(4419),l=t(2554),u=t(4036),d=t(3736),p=t(724),f=t(5878),m=t(7225);function h(e){return(0,m.Z)("MuiCircularProgress",e)}(0,f.Z)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);var x,v,g,k,y,w,b,Z,j=t(184),M=["className","color","disableShrink","size","style","thickness","value","variant"],E=44,C=(0,l.F4)(y||(y=x||(x=(0,n.Z)(["\n  0% {\n    transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n"])))),N=(0,l.F4)(w||(w=v||(v=(0,n.Z)(["\n  0% {\n    stroke-dasharray: 1px, 200px;\n    stroke-dashoffset: 0;\n  }\n\n  50% {\n    stroke-dasharray: 100px, 200px;\n    stroke-dashoffset: -15px;\n  }\n\n  100% {\n    stroke-dasharray: 100px, 200px;\n    stroke-dashoffset: -125px;\n  }\n"])))),S=(0,p.ZP)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:function(e,r){var t=e.ownerState;return[r.root,r[t.variant],r["color".concat((0,u.Z)(t.color))]]}})((function(e){var r=e.ownerState,t=e.theme;return(0,o.Z)({display:"inline-block"},"determinate"===r.variant&&{transition:t.transitions.create("transform")},"inherit"!==r.color&&{color:(t.vars||t).palette[r.color].main})}),(function(e){return"indeterminate"===e.ownerState.variant&&(0,l.iv)(b||(b=g||(g=(0,n.Z)(["\n      animation: "," 1.4s linear infinite;\n    "]))),C)})),L=(0,p.ZP)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:function(e,r){return r.svg}})({display:"block"}),T=(0,p.ZP)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:function(e,r){var t=e.ownerState;return[r.circle,r["circle".concat((0,u.Z)(t.variant))],t.disableShrink&&r.circleDisableShrink]}})((function(e){var r=e.ownerState,t=e.theme;return(0,o.Z)({stroke:"currentColor"},"determinate"===r.variant&&{transition:t.transitions.create("stroke-dashoffset")},"indeterminate"===r.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0})}),(function(e){var r=e.ownerState;return"indeterminate"===r.variant&&!r.disableShrink&&(0,l.iv)(Z||(Z=k||(k=(0,n.Z)(["\n      animation: "," 1.4s ease-in-out infinite;\n    "]))),N)})),O=i.forwardRef((function(e,r){var t=(0,d.Z)({props:e,name:"MuiCircularProgress"}),n=t.className,i=t.color,l=void 0===i?"primary":i,p=t.disableShrink,f=void 0!==p&&p,m=t.size,x=void 0===m?40:m,v=t.style,g=t.thickness,k=void 0===g?3.6:g,y=t.value,w=void 0===y?0:y,b=t.variant,Z=void 0===b?"indeterminate":b,C=(0,a.Z)(t,M),N=(0,o.Z)({},t,{color:l,disableShrink:f,size:x,thickness:k,value:w,variant:Z}),O=function(e){var r=e.classes,t=e.variant,n=e.color,a=e.disableShrink,o={root:["root",t,"color".concat((0,u.Z)(n))],svg:["svg"],circle:["circle","circle".concat((0,u.Z)(t)),a&&"circleDisableShrink"]};return(0,s.Z)(o,h,r)}(N),P={},D={},F={};if("determinate"===Z){var _=2*Math.PI*((E-k)/2);P.strokeDasharray=_.toFixed(3),F["aria-valuenow"]=Math.round(w),P.strokeDashoffset="".concat(((100-w)/100*_).toFixed(3),"px"),D.transform="rotate(-90deg)"}return(0,j.jsx)(S,(0,o.Z)({className:(0,c.Z)(O.root,n),style:(0,o.Z)({width:x,height:x},D,v),ownerState:N,ref:r,role:"progressbar"},F,C,{children:(0,j.jsx)(L,{className:O.svg,ownerState:N,viewBox:"".concat(22," ").concat(22," ").concat(E," ").concat(E),children:(0,j.jsx)(T,{className:O.circle,style:P,ownerState:N,cx:E,cy:E,r:(E-k)/2,fill:"none",strokeWidth:k})})}))}))},9145:function(e,r,t){"use strict";t.d(r,{Z:function(){return m}});var n=t(7573),a=t(2791),o=t(2007),i=t.n(o),c=["variant","color","size"],s=function(e){var r=e.color;return a.createElement(a.Fragment,null,a.createElement("path",{fill:r,d:"M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2zm2.34 10.53l-4.29 4.29c-.15.15-.34.22-.53.22s-.38-.07-.53-.22a.754.754 0 010-1.06l3.01-3.01H6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h10.19l-3.01-3.01a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l4.29 4.29a.75.75 0 010 1.06z"}))},l=function(e){var r=e.color;return a.createElement(a.Fragment,null,a.createElement("path",{stroke:r,strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"10",strokeWidth:"1.5",d:"M14.43 5.93L20.5 12l-6.07 6.07M11.01 12h9.32M3.5 12h3.47"}))},u=function(e){var r=e.color;return a.createElement(a.Fragment,null,a.createElement("path",{fill:r,d:"M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2z",opacity:".4"}),a.createElement("path",{fill:r,d:"M18.53 11.47l-4.29-4.29a.754.754 0 00-1.06 0c-.29.29-.29.77 0 1.06l3.01 3.01H6c-.41 0-.75.34-.75.75s.34.75.75.75h10.19l-3.01 3.01c-.29.29-.29.77 0 1.06.15.15.34.22.53.22s.38-.07.53-.22l4.29-4.29a.75.75 0 000-1.06z"}))},d=function(e){var r=e.color;return a.createElement(a.Fragment,null,a.createElement("path",{stroke:r,strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"10",strokeWidth:"1.5",d:"M14.43 5.93L20.5 12l-6.07 6.07M3.5 12h16.83"}))},p=function(e){var r=e.color;return a.createElement(a.Fragment,null,a.createElement("path",{fill:r,d:"M14.43 18.82c-.19 0-.38-.07-.53-.22a.754.754 0 010-1.06L19.44 12 13.9 6.46a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l6.07 6.07c.29.29.29.77 0 1.06l-6.07 6.07c-.15.15-.34.22-.53.22z"}),a.createElement("path",{fill:r,d:"M20.33 12.75H3.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h16.83c.41 0 .75.34.75.75s-.34.75-.75.75z"}))},f=function(e){var r=e.color;return a.createElement(a.Fragment,null,a.createElement("path",{stroke:r,strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"10",strokeWidth:"1.5",d:"M14.43 5.93L20.5 12l-6.07 6.07"}),a.createElement("path",{stroke:r,strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"10",strokeWidth:"1.5",d:"M3.5 12h16.83",opacity:".4"}))},m=(0,a.forwardRef)((function(e,r){var t=e.variant,o=e.color,i=e.size,m=(0,n._)(e,c);return a.createElement("svg",(0,n.a)({},m,{xmlns:"http://www.w3.org/2000/svg",ref:r,width:i,height:i,viewBox:"0 0 24 24",fill:"none"}),function(e,r){switch(e){case"Bold":return a.createElement(s,{color:r});case"Broken":return a.createElement(l,{color:r});case"Bulk":return a.createElement(u,{color:r});case"Linear":default:return a.createElement(d,{color:r});case"Outline":return a.createElement(p,{color:r});case"TwoTone":return a.createElement(f,{color:r})}}(t,o))}));m.propTypes={variant:i().oneOf(["Linear","Bold","Broken","Bulk","Outline","TwoTone"]),color:i().string,size:i().oneOfType([i().string,i().number])},m.defaultProps={variant:"Linear",color:"currentColor",size:"24"},m.displayName="ArrowRight"},1880:function(e,r,t){"use strict";t.d(r,{Z:function(){return m}});var n=t(7573),a=t(2791),o=t(2007),i=t.n(o),c=["variant","color","size"],s=function(e){var r=e.color;return a.createElement(a.Fragment,null,a.createElement("path",{d:"M15.8 2.21c-.41-.41-1.12-.13-1.12.44v3.49c0 1.46 1.24 2.67 2.75 2.67.95.01 2.27.01 3.4.01.57 0 .87-.67.47-1.07-1.44-1.45-4.02-4.06-5.5-5.54Z",fill:r}),a.createElement("path",{d:"M20.5 10.19h-2.89c-2.37 0-4.3-1.93-4.3-4.3V3c0-.55-.45-1-1-1H8.07C4.99 2 2.5 4 2.5 7.57v8.86C2.5 20 4.99 22 8.07 22h7.86c3.08 0 5.57-2 5.57-5.57v-5.24c0-.55-.45-1-1-1Zm-9 7.56h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75Zm2-4h-6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75Z",fill:r}))},l=function(e){var r=e.color;return a.createElement(a.Fragment,null,a.createElement("path",{d:"M12 13h1M7 13h2.45M7 17h4M2 9c0-5 2-7 7-7h5M22 10v5c0 5-2 7-7 7H9c-5 0-7-2-7-7v-2.02M18 10c-3 0-4-1-4-4V2l8 8",stroke:r,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}))},u=function(e){var r=e.color;return a.createElement(a.Fragment,null,a.createElement("path",{opacity:".4",d:"M20.5 10.19h-2.89c-2.37 0-4.3-1.93-4.3-4.3V3c0-.55-.45-1-1-1H8.07C4.99 2 2.5 4 2.5 7.57v8.86C2.5 20 4.99 22 8.07 22h7.86c3.08 0 5.57-2 5.57-5.57v-5.24c0-.55-.45-1-1-1Z",fill:r}),a.createElement("path",{d:"M15.8 2.21c-.41-.41-1.12-.13-1.12.44v3.49c0 1.46 1.24 2.67 2.75 2.67.95.01 2.27.01 3.4.01.57 0 .87-.67.47-1.07-1.44-1.45-4.02-4.06-5.5-5.54ZM13.5 13.75h-6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75ZM11.5 17.75h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75Z",fill:r}))},d=function(e){var r=e.color;return a.createElement(a.Fragment,null,a.createElement("path",{d:"M21 7v10c0 3-1.5 5-5 5H8c-3.5 0-5-2-5-5V7c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5Z",stroke:r,strokeWidth:"1.5",strokeMiterlimit:"10",strokeLinecap:"round",strokeLinejoin:"round"}),a.createElement("path",{d:"M14.5 4.5v2c0 1.1.9 2 2 2h2M8 13h4M8 17h8",stroke:r,strokeWidth:"1.5",strokeMiterlimit:"10",strokeLinecap:"round",strokeLinejoin:"round"}))},p=function(e){var r=e.color;return a.createElement(a.Fragment,null,a.createElement("path",{d:"M16 22.75H8c-3.65 0-5.75-2.1-5.75-5.75V7c0-3.65 2.1-5.75 5.75-5.75h8c3.65 0 5.75 2.1 5.75 5.75v10c0 3.65-2.1 5.75-5.75 5.75Zm-8-20C5.14 2.75 3.75 4.14 3.75 7v10c0 2.86 1.39 4.25 4.25 4.25h8c2.86 0 4.25-1.39 4.25-4.25V7c0-2.86-1.39-4.25-4.25-4.25H8Z",fill:r}),a.createElement("path",{d:"M18.5 9.25h-2c-1.52 0-2.75-1.23-2.75-2.75v-2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 .69.56 1.25 1.25 1.25h2c.41 0 .75.34.75.75s-.34.75-.75.75ZM12 13.75H8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75ZM16 17.75H8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h8c.41 0 .75.34.75.75s-.34.75-.75.75Z",fill:r}))},f=function(e){var r=e.color;return a.createElement(a.Fragment,null,a.createElement("path",{d:"M21 7v10c0 3-1.5 5-5 5H8c-3.5 0-5-2-5-5V7c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5Z",stroke:r,strokeWidth:"1.5",strokeMiterlimit:"10",strokeLinecap:"round",strokeLinejoin:"round"}),a.createElement("path",{opacity:".4",d:"M14.5 4.5v2c0 1.1.9 2 2 2h2M8 13h4M8 17h8",stroke:r,strokeWidth:"1.5",strokeMiterlimit:"10",strokeLinecap:"round",strokeLinejoin:"round"}))},m=(0,a.forwardRef)((function(e,r){var t=e.variant,o=e.color,i=e.size,m=(0,n._)(e,c);return a.createElement("svg",(0,n.a)({},m,{xmlns:"http://www.w3.org/2000/svg",ref:r,width:i,height:i,viewBox:"0 0 24 24",fill:"none"}),function(e,r){switch(e){case"Bold":return a.createElement(s,{color:r});case"Broken":return a.createElement(l,{color:r});case"Bulk":return a.createElement(u,{color:r});case"Linear":default:return a.createElement(d,{color:r});case"Outline":return a.createElement(p,{color:r});case"TwoTone":return a.createElement(f,{color:r})}}(t,o))}));m.propTypes={variant:i().oneOf(["Linear","Bold","Broken","Bulk","Outline","TwoTone"]),color:i().string,size:i().oneOfType([i().string,i().number])},m.defaultProps={variant:"Linear",color:"currentColor",size:"24"},m.displayName="DocumentText"},7573:function(e,r,t){"use strict";function n(){return n=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},n.apply(this,arguments)}function a(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}t.d(r,{_:function(){return a},a:function(){return n}})},888:function(e,r,t){"use strict";var n=t(9047);function a(){}function o(){}o.resetWarningCache=a,e.exports=function(){function e(e,r,t,a,o,i){if(i!==n){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function r(){return e}e.isRequired=e;var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:r,element:e,elementType:e,instanceOf:r,node:e,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:o,resetWarningCache:a};return t.PropTypes=t,t}},2007:function(e,r,t){e.exports=t(888)()},9047:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=942.dee06b9a.chunk.js.map