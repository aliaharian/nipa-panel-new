(self.webpackChunknipa_panel_new=self.webpackChunknipa_panel_new||[]).push([[3867],{3154:(e,t,r)=>{"use strict";r.d(t,{m8:()=>o,KW:()=>i,li:()=>s});var n=r(3747),a=r(670);const o=()=>{const{data:e}=(0,n.I)({queryKey:["orderGroups"],queryFn:async()=>await async function(){var e;let t=await(null===(e=(0,a.A)())||void 0===e?void 0:e.get("/orderGroup"));return null===t||void 0===t?void 0:t.data}()});return{data:e}},s=()=>{const{data:e}=(0,n.I)({queryKey:["orders"],queryFn:async()=>await async function(){var e;let t=await(null===(e=(0,a.A)())||void 0===e?void 0:e.get("/order"));return null===t||void 0===t?void 0:t.data}()});return{data:e}},i=e=>{const{data:t}=(0,n.I)({queryKey:["order",{id:e}],queryFn:async()=>await async function(e){var t;let r=await(null===(t=(0,a.A)())||void 0===t?void 0:t.get("/order/"+e));return null===r||void 0===r?void 0:r.data}(e)});return{data:t}}},6041:(e,t,r)=>{"use strict";r.d(t,{J3:()=>o,WG:()=>s,hR:()=>a});const n=r(8852).A.actions,a=e=>async(t,r)=>{t(n.setApiLoading(e))},o=e=>async(t,r)=>{t(n.setCollapseMenu(e))},s=e=>async(t,r)=>{t(n.setOpenMenu(e))}},670:(e,t,r)=>{"use strict";r.d(t,{A:()=>i});var n=r(7154),a=r(6041),o=r(6254),s=r(5424);const i=()=>{const e=n.A.create({baseURL:"https://apidemo.nipaco.ir/api/v1",headers:localStorage.getItem("nipa_token")?{"Content-Type":"application/json",Accept:"application/json",language:localStorage.getItem("nipa-lang")||"fa",authorization:"Bearer "+localStorage.getItem("nipa_token")}:{"Content-Type":"application/json",Accept:"application/json"}});return e.interceptors.request.use((function(e){return o.A.dispatch((0,a.hR)(!0)),e}),(function(e){return o.A.dispatch((0,a.hR)(!1)),Promise.reject(e)})),e.interceptors.response.use((function(e){return o.A.dispatch((0,a.hR)(!1)),e}),(function(e){if(e.response.status,403==e.response.status&&(document.location.href="/errors/403"),e.response.data.errors){Object.keys(e.response.data.errors).map((t=>e.response.data.errors[t])).forEach((e=>{s.A.error(e)}))}else console.log("err",e.response),s.A.error(e.response.data.message||e.response.data.msg||e.response.data.error);return o.A.dispatch((0,a.hR)(!1)),Promise.reject(e)})),e}},6640:(e,t,r)=>{"use strict";r.d(t,{Ay:()=>a});var n=r(1735);const a={toISOLocal:function(e){var t=e=>("0"+e).slice(-2),r=e.getTimezoneOffset();return r=Math.abs(r),e.getFullYear()+"-"+t(e.getMonth()+1)+"-"+t(e.getDate())},pluralize:function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"s";return"".concat(e," ").concat(t).concat(1!==e?r:"")},fileToUrl:e=>new Promise(((t,r)=>{const n=new FileReader;n.onload=function(e){const r=e.target.result;t(r)},n.onerror=function(e){r(e.target.error)},n.readAsDataURL(e)})),imageValidExtensions:["image/jpeg","image/jpg","image/png","image/gif"],base64ToBlob:function(e,t){const r=window.atob(e),n=r.length,a=new Uint8Array(n);for(let o=0;o<n;++o)a[o]=r.charCodeAt(o);return new Blob([a],{type:t})},renderStatusStyle:e=>{let t;switch(e){case"success":t="bg-success-secondary text-success-primary ";break;case"warning":t="bg-warning-secondary text-warning-text ";break;case"error":t="bg-error-secondary text-error-primary ";break;case"info":t="bg-info-secondary text-info-primary ";break;default:t="bg-text-300 text-text-600 "}return t},toPersianDigitsPutCommas:(e,t)=>{const r="\u06f0".charCodeAt(0);!e&&(e="");let a=e.split(".");a[0].length>3&&(a[0]=a[0].replace(/\B(?=(\d{3})+(?!\d))/g,","));const o=a.join(".");if(t||"fa"===n.A.language){return String(o).replace(/[0-9]/g,(e=>String.fromCharCode(e.charCodeAt(0)+r-48)))}return o},fileToBlob:function(e){return new Blob([e],{type:e.type})},toPersianDigits:(e,t)=>{if(t||"fa"===n.A.language){const t="\u06f0".charCodeAt(0);return String(e).replace(/[0-9]/g,(e=>String.fromCharCode(e.charCodeAt(0)+t-48)))}return e},dateToTimestamp:e=>new Date(e).getTime(),renderChatTime:(e,t,r)=>{let a=Math.floor(Date.now());if(t)return r?new Date(e).toLocaleDateString("fa-IR"):new Date(e).toLocaleDateString("fa-IR")+" , "+new Date(e).toLocaleTimeString("fa-IR").slice(0,5);let o=Math.floor((a-e)/1e3);return o<60?n.A.t("fewSecondsAgo"):o<3600?Math.floor(o/60)+" "+n.A.t("minutesAgo"):o<86400?Math.floor(o/3600)+" "+n.A.t("hoursAgo"):o<604800?Math.floor(o/86400)+" "+n.A.t("daysAgo"):new Date(e).toLocaleDateString("fa-IR")},checkPermission:e=>{var t;let r=null===(t=JSON.parse(localStorage.getItem("nipa_user")||"{}"))||void 0===t?void 0:t.permissions;return!(null===r||void 0===r||!r.find((t=>t.slug===e)))},convetToEnglishDigitsRemoveCommas:e=>{const t="\u06f0".charCodeAt(0);return String(e).replace(/[\u06f0-\u06f9]/g,(e=>String.fromCharCode(e.charCodeAt(0)-t+48)))}}},3232:(e,t,r)=>{"use strict";r.d(t,{A:()=>o});var n=r(7281),a=r(579);const o=e=>{let{title:t,actions:r,handleBack:o}=e;return(0,a.jsxs)("div",{className:"print:hidden w-full flex items-center justify-between mb-[20px]",children:[(0,a.jsxs)("div",{className:"flex items-center",children:[o?(0,a.jsx)("div",{className:"cursor-pointer",onClick:o,children:(0,a.jsx)(n.A,{className:"mx-[12px] text-gray-500 ltr:rotate-180"})}):(0,a.jsx)("span",{className:"inline-block w-[14px] h-[14px] rounded-[2px] bg-secondary-main me-3"}),(0,a.jsx)("p",{className:"text-gray-500 font-black",children:t})]}),(0,a.jsx)("div",{className:"flex",children:r})]})}},7578:(e,t,r)=>{"use strict";r.d(t,{A:()=>s});var n=r(1637),a=(r(5043),r(5475)),o=r(579);const s=e=>{let{type:t,simple:r,bordered:s,href:i,text:c,onClick:l,icon:d,after:u,sm:p,xs:m,gray:h,disabled:x,loading:f,className:v}=e;const g="w-full ".concat(v," ").concat(m?"h-[36px]":p?"h-[38px]":"h-12"," rounded-[8px] flex items-center justify-center bg-primary-main text-white ").concat(s?"border border-primary-main bg-transparent !text-primary-main":"","\n   ").concat(r?"border-none bg-transparent !text-primary-main":"","\n   ").concat(h?"border-none !bg-text-200 !text-text-500":"","\n    ").concat(x?"opacity-90 cursor-not-allowed pointer-events-none":"","\n  "),y=()=>d?(0,o.jsx)("div",{className:"inline-block me-1",children:d}):(0,o.jsx)(o.Fragment,{});return(0,o.jsxs)(o.Fragment,{children:[i&&(0,o.jsxs)(a.N_,{to:i,className:g,children:[!u&&y(),f?(0,o.jsx)(n.A,{className:"!text-white !w-[20px] !h-[20px]"}):c,u&&y()]}),t&&(0,o.jsxs)("button",{className:g,type:t,children:[!u&&y(),f?(0,o.jsx)(n.A,{className:"!text-white !w-[20px] !h-[20px]"}):c,u&&y()]}),l&&(0,o.jsxs)("button",{className:g,onClick:l,children:[!u&&y(),f?(0,o.jsx)(n.A,{className:"!text-white !w-[20px] !h-[20px]"}):c,u&&y()]})]})}},3867:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>u});var n=r(3232),a=r(3216),o=r(4117),s=r(6640),i=r(7578),c=r(6317),l=r(3154),d=r(579);const u=()=>{var e;const t=(0,a.Zp)();let{orderId:r}=(0,a.g)();const{t:u}=(0,o.Bd)(),{data:p}=(0,l.KW)(parseInt(r||""));return(0,d.jsxs)("div",{className:"w-full h-full",children:[(0,d.jsx)(n.A,{title:"\u062c\u0632\u06cc\u06cc\u0627\u062a \u0633\u0641\u0627\u0631\u0634",handleBack:()=>t("/orders")}),p?(0,d.jsxs)("div",{className:"w-full flex flex-col bg-white rounded-[6px]",children:[(0,d.jsxs)("div",{className:"px-[20px] py-[30px] flex items-center justify-between border-b border-text-400 w-full",children:[(0,d.jsxs)("div",{children:[u("orderCode")," : ",r]}),(0,d.jsx)("div",{className:"w-[150px]",children:(0,d.jsx)(i.A,{sm:!0,simple:!0,icon:(0,d.jsx)(c.A,{}),href:"/",bordered:!0,text:u("viewFactor")})})]}),(0,d.jsxs)("div",{className:"px-[20px] py-[25px] w-full",children:[(0,d.jsxs)("div",{className:"flex items-center justify-between flex-wrap border-b border-text-400 pb-[20px]",children:[(0,d.jsxs)("div",{className:"flex items-center",children:[(0,d.jsx)("p",{className:"text-[14px] text-text-500",children:u("userName")}),(0,d.jsx)("p",{className:"text-[14px] text-text-700 ms-2",children:p.order.user.name?p.order.user.name+" "+p.order.user.last_name:p.order.user.mobile})]}),(0,d.jsxs)("div",{className:"flex items-center",children:[(0,d.jsx)("p",{className:"text-[14px] text-text-500",children:u("mobilePhone")}),(0,d.jsx)("p",{className:"text-[14px] text-text-700 ms-2",children:p.order.user.mobile})]}),(0,d.jsxs)("div",{className:"flex items-center",children:[(0,d.jsx)("p",{className:"text-[14px] text-text-500",children:u("submitDate")}),(0,d.jsx)("p",{className:"text-[14px] text-text-700 ms-2",children:s.Ay.renderChatTime(s.Ay.dateToTimestamp(p.order.created_at))})]}),(0,d.jsxs)("div",{className:"flex items-center",children:[(0,d.jsx)("p",{className:"text-[14px] text-text-500",children:u("recieverName")}),(0,d.jsx)("p",{className:"text-[14px] text-text-700 ms-2",children:p.order.customer_name})]})]}),(0,d.jsx)("div",{className:"flex items-center justify-start flex-wrap border-b border-text-400 py-[20px] gap-y-[25px] gap-x-[45px]",children:null===p||void 0===p||null===(e=p.userAnswers)||void 0===e?void 0:e.map(((e,t)=>{const r=e[0];return(0,d.jsxs)("div",{className:"flex items-center",children:[(0,d.jsxs)("p",{className:"text-[14px] text-text-500",children:[r.form_field.label,":"]}),(0,d.jsx)("p",{className:"text-[14px] text-text-700 ms-2",children:e.map(((t,r)=>{if("uploadFile"===t.form_field.type.type)return(0,d.jsx)("a",{href:"https://apidemo.nipaco.ir/api/v1/files/"+t.answer,className:"text-white font-bold text-[14px] text-text-700 mx-2 bg-primary-main rounded-[8px] px-3 py-2",target:"_blank",rel:"noreferrer",children:"\u062f\u0627\u0646\u0644\u0648\u062f \u067e\u06cc\u0648\u0633\u062a"},r);if("datePicker"===t.form_field.type.type)return s.Ay.renderChatTime(s.Ay.dateToTimestamp(t.answer),!0,!0);{let n=t.answerObject?t.answerObject.name||t.answerObject.label:t.answer;return r<e.length-1?n+" - ":n}}))})]},t)}))})]})]}):(0,d.jsx)("p",{children:"please wait..."})]})}},1637:(e,t,r)=>{"use strict";r.d(t,{A:()=>O});var n=r(7528),a=r(8587),o=r(8168),s=r(5043),i=r(8387),c=r(8606),l=r(3290),d=r(6803),u=r(7864),p=r(4535),m=r(7056),h=r(4579);function x(e){return(0,h.Ay)("MuiCircularProgress",e)}(0,m.A)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);var f,v,g,y,k=r(579);const w=["className","color","disableShrink","size","style","thickness","value","variant"];let b,j,A,M;const E=44,C=(0,l.i7)(b||(b=f||(f=(0,n.A)(["\n  0% {\n    transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n"])))),N=(0,l.i7)(j||(j=v||(v=(0,n.A)(["\n  0% {\n    stroke-dasharray: 1px, 200px;\n    stroke-dashoffset: 0;\n  }\n\n  50% {\n    stroke-dasharray: 100px, 200px;\n    stroke-dashoffset: -15px;\n  }\n\n  100% {\n    stroke-dasharray: 100px, 200px;\n    stroke-dashoffset: -125px;\n  }\n"])))),S=(0,p.Ay)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[r.variant],t["color".concat((0,d.A)(r.color))]]}})((e=>{let{ownerState:t,theme:r}=e;return(0,o.A)({display:"inline-block"},"determinate"===t.variant&&{transition:r.transitions.create("transform")},"inherit"!==t.color&&{color:(r.vars||r).palette[t.color].main})}),(e=>{let{ownerState:t}=e;return"indeterminate"===t.variant&&(0,l.AH)(A||(A=g||(g=(0,n.A)(["\n      animation: "," 1.4s linear infinite;\n    "]))),C)})),T=(0,p.Ay)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(e,t)=>t.svg})({display:"block"}),L=(0,p.Ay)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.circle,t["circle".concat((0,d.A)(r.variant))],r.disableShrink&&t.circleDisableShrink]}})((e=>{let{ownerState:t,theme:r}=e;return(0,o.A)({stroke:"currentColor"},"determinate"===t.variant&&{transition:r.transitions.create("stroke-dashoffset")},"indeterminate"===t.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0})}),(e=>{let{ownerState:t}=e;return"indeterminate"===t.variant&&!t.disableShrink&&(0,l.AH)(M||(M=y||(y=(0,n.A)(["\n      animation: "," 1.4s ease-in-out infinite;\n    "]))),N)})),O=s.forwardRef((function(e,t){const r=(0,u.A)({props:e,name:"MuiCircularProgress"}),{className:n,color:s="primary",disableShrink:l=!1,size:p=40,style:m,thickness:h=3.6,value:f=0,variant:v="indeterminate"}=r,g=(0,a.A)(r,w),y=(0,o.A)({},r,{color:s,disableShrink:l,size:p,thickness:h,value:f,variant:v}),b=(e=>{const{classes:t,variant:r,color:n,disableShrink:a}=e,o={root:["root",r,"color".concat((0,d.A)(n))],svg:["svg"],circle:["circle","circle".concat((0,d.A)(r)),a&&"circleDisableShrink"]};return(0,c.A)(o,x,t)})(y),j={},A={},M={};if("determinate"===v){const e=2*Math.PI*((E-h)/2);j.strokeDasharray=e.toFixed(3),M["aria-valuenow"]=Math.round(f),j.strokeDashoffset="".concat(((100-f)/100*e).toFixed(3),"px"),A.transform="rotate(-90deg)"}return(0,k.jsx)(S,(0,o.A)({className:(0,i.A)(b.root,n),style:(0,o.A)({width:p,height:p},A,m),ownerState:y,ref:t,role:"progressbar"},M,g,{children:(0,k.jsx)(T,{className:b.svg,ownerState:y,viewBox:"".concat(22," ").concat(22," ").concat(E," ").concat(E),children:(0,k.jsx)(L,{className:b.circle,style:j,ownerState:y,cx:E,cy:E,r:(E-h)/2,fill:"none",strokeWidth:h})})}))}))},7281:(e,t,r)=>{"use strict";r.d(t,{A:()=>h});var n=r(4069),a=r(5043),o=r(5173),s=r.n(o),i=["variant","color","size"],c=function(e){var t=e.color;return a.createElement(a.Fragment,null,a.createElement("path",{fill:t,d:"M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2zm2.34 10.53l-4.29 4.29c-.15.15-.34.22-.53.22s-.38-.07-.53-.22a.754.754 0 010-1.06l3.01-3.01H6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h10.19l-3.01-3.01a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l4.29 4.29a.75.75 0 010 1.06z"}))},l=function(e){var t=e.color;return a.createElement(a.Fragment,null,a.createElement("path",{stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"10",strokeWidth:"1.5",d:"M14.43 5.93L20.5 12l-6.07 6.07M11.01 12h9.32M3.5 12h3.47"}))},d=function(e){var t=e.color;return a.createElement(a.Fragment,null,a.createElement("path",{fill:t,d:"M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2z",opacity:".4"}),a.createElement("path",{fill:t,d:"M18.53 11.47l-4.29-4.29a.754.754 0 00-1.06 0c-.29.29-.29.77 0 1.06l3.01 3.01H6c-.41 0-.75.34-.75.75s.34.75.75.75h10.19l-3.01 3.01c-.29.29-.29.77 0 1.06.15.15.34.22.53.22s.38-.07.53-.22l4.29-4.29a.75.75 0 000-1.06z"}))},u=function(e){var t=e.color;return a.createElement(a.Fragment,null,a.createElement("path",{stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"10",strokeWidth:"1.5",d:"M14.43 5.93L20.5 12l-6.07 6.07M3.5 12h16.83"}))},p=function(e){var t=e.color;return a.createElement(a.Fragment,null,a.createElement("path",{fill:t,d:"M14.43 18.82c-.19 0-.38-.07-.53-.22a.754.754 0 010-1.06L19.44 12 13.9 6.46a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l6.07 6.07c.29.29.29.77 0 1.06l-6.07 6.07c-.15.15-.34.22-.53.22z"}),a.createElement("path",{fill:t,d:"M20.33 12.75H3.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h16.83c.41 0 .75.34.75.75s-.34.75-.75.75z"}))},m=function(e){var t=e.color;return a.createElement(a.Fragment,null,a.createElement("path",{stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"10",strokeWidth:"1.5",d:"M14.43 5.93L20.5 12l-6.07 6.07"}),a.createElement("path",{stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"10",strokeWidth:"1.5",d:"M3.5 12h16.83",opacity:".4"}))},h=(0,a.forwardRef)((function(e,t){var r=e.variant,o=e.color,s=e.size,h=(0,n._)(e,i);return a.createElement("svg",(0,n.a)({},h,{xmlns:"http://www.w3.org/2000/svg",ref:t,width:s,height:s,viewBox:"0 0 24 24",fill:"none"}),function(e,t){switch(e){case"Bold":return a.createElement(c,{color:t});case"Broken":return a.createElement(l,{color:t});case"Bulk":return a.createElement(d,{color:t});case"Linear":default:return a.createElement(u,{color:t});case"Outline":return a.createElement(p,{color:t});case"TwoTone":return a.createElement(m,{color:t})}}(r,o))}));h.propTypes={variant:s().oneOf(["Linear","Bold","Broken","Bulk","Outline","TwoTone"]),color:s().string,size:s().oneOfType([s().string,s().number])},h.defaultProps={variant:"Linear",color:"currentColor",size:"24"},h.displayName="ArrowRight"},6317:(e,t,r)=>{"use strict";r.d(t,{A:()=>h});var n=r(4069),a=r(5043),o=r(5173),s=r.n(o),i=["variant","color","size"],c=function(e){var t=e.color;return a.createElement(a.Fragment,null,a.createElement("path",{d:"M15.8 2.21c-.41-.41-1.12-.13-1.12.44v3.49c0 1.46 1.24 2.67 2.75 2.67.95.01 2.27.01 3.4.01.57 0 .87-.67.47-1.07-1.44-1.45-4.02-4.06-5.5-5.54Z",fill:t}),a.createElement("path",{d:"M20.5 10.19h-2.89c-2.37 0-4.3-1.93-4.3-4.3V3c0-.55-.45-1-1-1H8.07C4.99 2 2.5 4 2.5 7.57v8.86C2.5 20 4.99 22 8.07 22h7.86c3.08 0 5.57-2 5.57-5.57v-5.24c0-.55-.45-1-1-1Zm-9 7.56h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75Zm2-4h-6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75Z",fill:t}))},l=function(e){var t=e.color;return a.createElement(a.Fragment,null,a.createElement("path",{d:"M12 13h1M7 13h2.45M7 17h4M2 9c0-5 2-7 7-7h5M22 10v5c0 5-2 7-7 7H9c-5 0-7-2-7-7v-2.02M18 10c-3 0-4-1-4-4V2l8 8",stroke:t,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}))},d=function(e){var t=e.color;return a.createElement(a.Fragment,null,a.createElement("path",{opacity:".4",d:"M20.5 10.19h-2.89c-2.37 0-4.3-1.93-4.3-4.3V3c0-.55-.45-1-1-1H8.07C4.99 2 2.5 4 2.5 7.57v8.86C2.5 20 4.99 22 8.07 22h7.86c3.08 0 5.57-2 5.57-5.57v-5.24c0-.55-.45-1-1-1Z",fill:t}),a.createElement("path",{d:"M15.8 2.21c-.41-.41-1.12-.13-1.12.44v3.49c0 1.46 1.24 2.67 2.75 2.67.95.01 2.27.01 3.4.01.57 0 .87-.67.47-1.07-1.44-1.45-4.02-4.06-5.5-5.54ZM13.5 13.75h-6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75ZM11.5 17.75h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75Z",fill:t}))},u=function(e){var t=e.color;return a.createElement(a.Fragment,null,a.createElement("path",{d:"M21 7v10c0 3-1.5 5-5 5H8c-3.5 0-5-2-5-5V7c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5Z",stroke:t,strokeWidth:"1.5",strokeMiterlimit:"10",strokeLinecap:"round",strokeLinejoin:"round"}),a.createElement("path",{d:"M14.5 4.5v2c0 1.1.9 2 2 2h2M8 13h4M8 17h8",stroke:t,strokeWidth:"1.5",strokeMiterlimit:"10",strokeLinecap:"round",strokeLinejoin:"round"}))},p=function(e){var t=e.color;return a.createElement(a.Fragment,null,a.createElement("path",{d:"M16 22.75H8c-3.65 0-5.75-2.1-5.75-5.75V7c0-3.65 2.1-5.75 5.75-5.75h8c3.65 0 5.75 2.1 5.75 5.75v10c0 3.65-2.1 5.75-5.75 5.75Zm-8-20C5.14 2.75 3.75 4.14 3.75 7v10c0 2.86 1.39 4.25 4.25 4.25h8c2.86 0 4.25-1.39 4.25-4.25V7c0-2.86-1.39-4.25-4.25-4.25H8Z",fill:t}),a.createElement("path",{d:"M18.5 9.25h-2c-1.52 0-2.75-1.23-2.75-2.75v-2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 .69.56 1.25 1.25 1.25h2c.41 0 .75.34.75.75s-.34.75-.75.75ZM12 13.75H8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75ZM16 17.75H8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h8c.41 0 .75.34.75.75s-.34.75-.75.75Z",fill:t}))},m=function(e){var t=e.color;return a.createElement(a.Fragment,null,a.createElement("path",{d:"M21 7v10c0 3-1.5 5-5 5H8c-3.5 0-5-2-5-5V7c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5Z",stroke:t,strokeWidth:"1.5",strokeMiterlimit:"10",strokeLinecap:"round",strokeLinejoin:"round"}),a.createElement("path",{opacity:".4",d:"M14.5 4.5v2c0 1.1.9 2 2 2h2M8 13h4M8 17h8",stroke:t,strokeWidth:"1.5",strokeMiterlimit:"10",strokeLinecap:"round",strokeLinejoin:"round"}))},h=(0,a.forwardRef)((function(e,t){var r=e.variant,o=e.color,s=e.size,h=(0,n._)(e,i);return a.createElement("svg",(0,n.a)({},h,{xmlns:"http://www.w3.org/2000/svg",ref:t,width:s,height:s,viewBox:"0 0 24 24",fill:"none"}),function(e,t){switch(e){case"Bold":return a.createElement(c,{color:t});case"Broken":return a.createElement(l,{color:t});case"Bulk":return a.createElement(d,{color:t});case"Linear":default:return a.createElement(u,{color:t});case"Outline":return a.createElement(p,{color:t});case"TwoTone":return a.createElement(m,{color:t})}}(r,o))}));h.propTypes={variant:s().oneOf(["Linear","Bold","Broken","Bulk","Outline","TwoTone"]),color:s().string,size:s().oneOfType([s().string,s().number])},h.defaultProps={variant:"Linear",color:"currentColor",size:"24"},h.displayName="DocumentText"},4069:(e,t,r)=>{"use strict";function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},n.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}r.d(t,{_:()=>a,a:()=>n})},1497:(e,t,r)=>{"use strict";var n=r(3218);function a(){}function o(){}o.resetWarningCache=a,e.exports=function(){function e(e,t,r,a,o,s){if(s!==n){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:a};return r.PropTypes=r,r}},5173:(e,t,r)=>{e.exports=r(1497)()},3218:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=3867.f64850de.chunk.js.map