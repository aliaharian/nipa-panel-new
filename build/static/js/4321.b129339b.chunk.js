"use strict";(self.webpackChunknipa_panel_new=self.webpackChunknipa_panel_new||[]).push([[4321],{934:function(e,t,n){n.d(t,{YN:function(){return x},jH:function(){return m},hu:function(){return f}});var r=n(4165),a=n(5861),o=n(9778),i=n(516);function s(){return l.apply(this,arguments)}function l(){return(l=(0,a.Z)((0,r.Z)().mark((function e(){var t,n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,null===(t=(0,i.Z)())||void 0===t?void 0:t.get("/order");case 2:return n=e.sent,e.abrupt("return",null===n||void 0===n?void 0:n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function c(){return u.apply(this,arguments)}function u(){return(u=(0,a.Z)((0,r.Z)().mark((function e(){var t,n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,null===(t=(0,i.Z)())||void 0===t?void 0:t.get("/orderGroup");case 2:return n=e.sent,e.abrupt("return",null===n||void 0===n?void 0:n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return p.apply(this,arguments)}function p(){return(p=(0,a.Z)((0,r.Z)().mark((function e(t){var n,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,null===(n=(0,i.Z)())||void 0===n?void 0:n.get("/order/"+t);case 2:return a=e.sent,e.abrupt("return",null===a||void 0===a?void 0:a.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var x=function(){var e=(0,o.a)({queryKey:["orderGroups"],queryFn:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()});return{data:e.data}},f=function(){var e=(0,o.a)({queryKey:["orders"],queryFn:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()});return{data:e.data}},m=function(e){var t=(0,o.a)({queryKey:["order",{id:e}],queryFn:function(){var t=(0,a.Z)((0,r.Z)().mark((function t(){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d(e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()});return{data:t.data}}},5443:function(e,t,n){n.d(t,{c:function(){return i},y:function(){return s}});var r=n(4165),a=n(5861),o=n(4999).Z.actions,i=function(e){return function(){var t=(0,a.Z)((0,r.Z)().mark((function t(n,a){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n(o.setApiLoading(e));case 1:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},s=function(e){return function(){var t=(0,a.Z)((0,r.Z)().mark((function t(n,a){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n(o.setCollapseMenu(e));case 1:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}},516:function(e,t,n){var r=n(3263),a=n(5443),o=n(2855),i=n(174);t.Z=function(){var e=r.Z.create({baseURL:"https://apidemo.nipaco.ir/api/v1",headers:localStorage.getItem("nipa_token")?{"Content-Type":"application/json",Accept:"application/json",language:localStorage.getItem("nipa-lang")||"fa",authorization:"Bearer "+localStorage.getItem("nipa_token")}:{"Content-Type":"application/json",Accept:"application/json"}});return e.interceptors.request.use((function(e){return o.Z.dispatch((0,a.c)(!0)),e}),(function(e){return o.Z.dispatch((0,a.c)(!1)),Promise.reject(e)})),e.interceptors.response.use((function(e){return o.Z.dispatch((0,a.c)(!1)),e}),(function(e){(e.response.status,403==e.response.status&&(document.location.href="/errors/403"),e.response.data.errors)?Object.keys(e.response.data.errors).map((function(t){return e.response.data.errors[t]})).forEach((function(e){i.Z.error(e)})):(console.log("err",e.response),i.Z.error(e.response.data.message||e.response.data.msg||e.response.data.error));return o.Z.dispatch((0,a.c)(!1)),Promise.reject(e)})),e}},1193:function(e,t,n){var r=n(9039);t.ZP={toISOLocal:function(e){var t=function(e){return("0"+e).slice(-2)},n=e.getTimezoneOffset();return n=Math.abs(n),e.getFullYear()+"-"+t(e.getMonth()+1)+"-"+t(e.getDate())},pluralize:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"s";return"".concat(e," ").concat(t).concat(1!==e?n:"")},fileToUrl:function(e){return new Promise((function(t,n){var r=new FileReader;r.onload=function(e){var n=e.target.result;t(n)},r.onerror=function(e){n(e.target.error)},r.readAsDataURL(e)}))},imageValidExtensions:["image/jpeg","image/jpg","image/png","image/gif"],base64ToBlob:function(e,t){for(var n=window.atob(e),r=n.length,a=new Uint8Array(r),o=0;o<r;++o)a[o]=n.charCodeAt(o);return new Blob([a],{type:t})},renderStatusStyle:function(e){var t;switch(e){case"success":t="bg-success-secondary text-success-primary ";break;case"warning":t="bg-warning-secondary text-warning-text ";break;case"error":t="bg-error-secondary text-error-primary ";break;case"info":t="bg-info-secondary text-info-primary ";break;default:t="bg-text-300 text-text-600 "}return t},toPersianDigitsPutCommas:function(e,t){var n="\u06f0".charCodeAt(0);!e&&(e="");var a=e.split(".");a[0].length>3&&(a[0]=a[0].replace(/\B(?=(\d{3})+(?!\d))/g,","));var o=a.join(".");return t||"fa"===r.Z.language?String(o).replace(/[0-9]/g,(function(e){return String.fromCharCode(e.charCodeAt(0)+n-48)})):o},fileToBlob:function(e){return new Blob([e],{type:e.type})},toPersianDigits:function(e,t){if(t||"fa"===r.Z.language){var n="\u06f0".charCodeAt(0);return String(e).replace(/[0-9]/g,(function(e){return String.fromCharCode(e.charCodeAt(0)+n-48)}))}return e},dateToTimestamp:function(e){return new Date(e).getTime()},renderChatTime:function(e,t,n){var a=Math.floor(Date.now());if(t)return n?new Date(e).toLocaleDateString("fa-IR"):new Date(e).toLocaleDateString("fa-IR")+" , "+new Date(e).toLocaleTimeString("fa-IR").slice(0,5);var o=Math.floor((a-e)/1e3);return o<60?r.Z.t("fewSecondsAgo"):o<3600?Math.floor(o/60)+" "+r.Z.t("minutesAgo"):o<86400?Math.floor(o/3600)+" "+r.Z.t("hoursAgo"):o<604800?Math.floor(o/86400)+" "+r.Z.t("daysAgo"):new Date(e).toLocaleDateString("fa-IR")},checkPermission:function(e){var t,n=null===(t=JSON.parse(localStorage.getItem("nipa_user")||"{}"))||void 0===t?void 0:t.permissions;return!(null===n||void 0===n||!n.find((function(t){return t.slug===e})))},convetToEnglishDigitsRemoveCommas:function(e){var t="\u06f0".charCodeAt(0);return String(e).replace(/[\u06f0-\u06f9]/g,(function(e){return String.fromCharCode(e.charCodeAt(0)-t+48)}))}}},7421:function(e,t,n){var r=n(9439),a=n(6739),o=n(2791),i=n(184);t.Z=function(e){var t=e.children,n=e.title,s=(0,o.useState)(!1),l=(0,r.Z)(s,2),c=l[0],u=l[1];return(0,i.jsxs)("div",{className:"mb-[20px]",children:[(0,i.jsxs)("div",{onClick:function(){u(!c)},className:"border border-text-300 w-full h-[72px] bg-white flex items-center justify-between px-[16px] rounded-[5px]",children:[(0,i.jsx)("p",{className:"text-primary-dark text-[16px] font-bold cursor-pointer",children:n}),(0,i.jsx)("div",{className:"w-[28px] h-[28px] bg-text-300 flex items-center justify-center rounded-[8px] cursor-pointer hover:bg-text-400 transition-all",children:(0,i.jsx)(a.Z,{className:"w-[18px] h-[18px] transition-all ".concat(c?"rotate-0":"rotate-180")})})]}),(0,i.jsx)("div",{className:"overflow-hidden ".concat(c?"h-auto opacity-100":"h-0 opacity-0"," w-full transition-all mt-[20px] flex flex-col justify-start items-start"),children:(0,i.jsx)("div",{className:"border border-text-300 bg-white rounded-[5px] w-full h-full",children:t})})]})}},6718:function(e,t,n){var r=n(9145),a=n(184);t.Z=function(e){var t=e.title,n=e.actions,o=e.handleBack;return(0,a.jsxs)("div",{className:"print:hidden w-full flex items-center justify-between mb-[20px]",children:[(0,a.jsxs)("div",{className:"flex items-center",children:[o?(0,a.jsx)("div",{className:"cursor-pointer",onClick:o,children:(0,a.jsx)(r.Z,{className:"mx-[12px] text-gray-500 ltr:rotate-180"})}):(0,a.jsx)("span",{className:"inline-block w-[14px] h-[14px] rounded-[2px] bg-secondary-main me-3"}),(0,a.jsx)("p",{className:"text-gray-500 font-black",children:t})]}),(0,a.jsx)("div",{className:"flex",children:n})]})}},2636:function(e,t,n){var r=n(3239),a=(n(2791),n(1087)),o=n(184);t.Z=function(e){var t=e.type,n=e.simple,i=e.bordered,s=e.href,l=e.text,c=e.onClick,u=e.icon,d=e.after,p=e.sm,x=e.xs,f=e.gray,m=e.disabled,h=e.loading,v=e.className,g="w-full ".concat(v," ").concat(x?"h-[36px]":p?"h-[38px]":"h-12"," rounded-[8px] flex items-center justify-center bg-primary-main text-white ").concat(i?"border border-primary-main bg-transparent !text-primary-main":"","\n   ").concat(n?"border-none bg-transparent !text-primary-main":"","\n   ").concat(f?"border-none !bg-text-200 !text-text-500":"","\n    ").concat(m?"opacity-90 cursor-not-allowed pointer-events-none":"","\n  "),b=function(){return u?(0,o.jsx)("div",{className:"inline-block me-1",children:u}):(0,o.jsx)(o.Fragment,{})};return(0,o.jsxs)(o.Fragment,{children:[s&&(0,o.jsxs)(a.rU,{to:s,className:g,children:[!d&&b(),h?(0,o.jsx)(r.Z,{className:"!text-white !w-[20px] !h-[20px]"}):l,d&&b()]}),t&&(0,o.jsxs)("button",{className:g,type:t,children:[!d&&b(),h?(0,o.jsx)(r.Z,{className:"!text-white !w-[20px] !h-[20px]"}):l,d&&b()]}),c&&(0,o.jsxs)("button",{className:g,onClick:c,children:[!d&&b(),h?(0,o.jsx)(r.Z,{className:"!text-white !w-[20px] !h-[20px]"}):l,d&&b()]})]})}},6612:function(e,t,n){var r=n(8854),a=n(184);t.Z=function(e){var t=e.title,n=e.subTitle,o=e.action;return(0,a.jsxs)("div",{className:"w-full flex flex-col items-center justify-center py-4",children:[(0,a.jsx)("div",{className:"svg:w-[40px] svg:h-[40px] mb-4 svg:text-text-500",children:(0,a.jsx)(r.Z,{})}),(0,a.jsx)("p",{className:"text-[14px] text-text-600 mb-4",children:t}),n&&(0,a.jsx)("p",{className:"text-[12px] text-text-600 mb-4",children:n}),o&&(0,a.jsx)("div",{className:"w-[130px]",children:o})]})}},8923:function(e,t,n){n(2791);var r=n(9504),a=n.n(r),o=n(4110),i=n(3466),s=n(1193),l=n(9230),c=n(184);t.Z=function(e){var t,n,r,u,d,p,x,f,m,h,v=e.name,g=e.label,b=e.formik,j=e.type,w=void 0===j?"text":j,Z=e.placeholder,y=e.maskChar,N=e.className,C=e.mask,k=e.inputActions,S=e.normal,T=e.endEndorement,D=e.multiline,A=e.readonly,_=e.value,P=(0,l.$G)().i18n;return(0,c.jsxs)("div",{className:"flex flex-col w-full items-start justify-start ".concat(N),children:[g&&(0,c.jsxs)("div",{className:"text-sm mb-2 flex justify-between w-full",children:[(0,c.jsx)("label",{htmlFor:v,className:"font-normal !text-xs",children:g}),null===k||void 0===k?void 0:k()]}),S?(0,c.jsx)(o.Z,{value:"number"==w?s.ZP.toPersianDigitsPutCommas(null===b||void 0===b||null===(u=b.values)||void 0===u?void 0:u[v]):null===b||void 0===b||null===(d=b.values)||void 0===d?void 0:d[v],type:"text",readOnly:A,id:v,name:v,multiline:D,rows:D?4:1,placeholder:Z||"",onChange:function(e){var t=s.ZP.convetToEnglishDigitsRemoveCommas(e.target.value),n="";if("number"==w){var r=t.replace(/[^0-9.]/g,"").split(".");n=r.length>1?(r[0]||"0")+"."+(r[1]||""):r[0]}else n=e.target.value;null===b||void 0===b||b.handleChange({target:{name:v,value:n}})},disableUnderline:!0,endAdornment:(0,c.jsx)(i.Z,{position:"end",children:T}),className:"!text-sm text-text-400 w-full ".concat(D?"h-[100px] resize-none !p-2":"h-12"," border border-text-400 rounded-[8px] p-2 focus:border-primary-main !outline-none invalid:border-error-primary ").concat(null!==b&&void 0!==b&&null!==(p=b.errors)&&void 0!==p&&p[v]&&null!==b&&void 0!==b&&null!==(x=b.touched)&&void 0!==x&&x[v]?"!border-error-primary":"")}):(0,c.jsx)(a(),{mask:C||"",maskChar:y||" ",value:_||(null===b||void 0===b||null===(t=b.values)||void 0===t?void 0:t[v]),type:w,dir:P.dir(),className:"w-full h-12 border border-text-400 rounded-[8px] p-2 text-sm focus:border-primary-main !outline-none invalid:border-error-primary ".concat(null!==b&&void 0!==b&&null!==(n=b.errors)&&void 0!==n&&n[v]&&null!==b&&void 0!==b&&null!==(r=b.touched)&&void 0!==r&&r[v]?"!border-error-primary":""),id:v,name:v,style:{direction:"tel"==w?"ltr":P.dir()},placeholder:Z||"",readOnly:A,onChange:function(e){null===b||void 0===b||b.handleChange({target:{name:v,value:e.target.value}})}}),(null===b||void 0===b||null===(f=b.errors)||void 0===f?void 0:f[v])&&(null===b||void 0===b||null===(m=b.touched)||void 0===m?void 0:m[v])&&(0,c.jsx)("p",{className:"text-error-primary text-[10px] mt-1",children:null===b||void 0===b||null===(h=b.errors)||void 0===h?void 0:h[v]})]})}},1745:function(e,t,n){n.d(t,{Z:function(){return c}});n(2791);var r=n(7865),a=n(9900),o=n(7064),i=n(911),s=n(1193),l=n(184);function c(e){var t,n,c,u=e.items,d=e.open,p=e.handleClose,x=e.anchorEl,f=e.profileInfo,m=JSON.parse(localStorage.getItem("nipa_user")||"");return(0,l.jsxs)(i.Z,{id:"demo-positioned-menu","aria-labelledby":"demo-positioned-button",anchorEl:x,open:d,onClose:p,sx:{"& .MuiPaper-root":{width:f?"280px":"190px",border:"1px solid #e8e8e8",boxShadow:"none",borderRadius:"8px !important",marginTop:1}},anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},children:[f&&(0,l.jsx)(r.Z,{sx:{backgroundColor:"white !important",padding:"24px 25px",borderBottom:"1px solid #ededed","&:hover":{backgroundColor:"#fff !important"},"& span":{fontSize:"14px !important",color:"#000"},"& svg":{color:"#7f7f7f !important"}},children:(0,l.jsxs)("div",{className:"flex w-full gap-x-[10px] items-center justify-start",children:[(0,l.jsx)("div",{className:"bg-primary-main/40 border border-text-300 w-[53px] h-[53px] overflow-hidden rounded-full flex items-center justify-center",children:m.avatar?(0,l.jsx)("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfm8UnQUb93iMa_J1a9GuKRJ1LWIzTD8dxrA&usqp=CAU",alt:"avatar",className:"w-full h-full fit-cover rounded-full"}):(0,l.jsx)("p",{className:"text-[20px] font-bold",children:null===(t=m.name)||void 0===t||null===(n=t.split(""))||void 0===n||null===(c=n[0])||void 0===c?void 0:c.toUpperCase()})}),(0,l.jsxs)("div",{children:[(0,l.jsxs)("p",{className:"text-text-800",children:[m.name," ",m.last_name]}),(0,l.jsx)("p",{className:"text-text-500 text-[14px] mt-1",children:s.ZP.toPersianDigits(m.mobile)})]})]})}),u.map((function(e,t){return(0,l.jsxs)(r.Z,{disabled:e.disabled,sx:{padding:f?"12px 25px":"6px 16px","&:hover":{backgroundColor:"#e9edf3"},"& span":{fontSize:"14px !important",color:"#000"}},onClick:e.onClick,children:[(0,l.jsx)(o.Z,{className:f?"svg:!text-text-700":"",children:e.icon}),(0,l.jsx)(a.Z,{className:f?"text-text-700":"",children:e.text})]},t)}))]})}},9134:function(e,t,n){var r=n(9439),a=n(5374),o=n(2791),i=n(184),s=function(e){var t=e.children;return(0,i.jsx)("div",{className:"h-[calc(100%-97px)] overflow-auto",children:t})},l=function(e){var t=e.children;return(0,i.jsx)("div",{children:t})},c=function(e){var t=e.open,n=e.handleClose,c=e.children,u=e.headerIcon,d=e.headerText,p=void 0===d?"":d,x=(0,o.useState)(Math.floor(1e3*Math.random())),f=(0,r.Z)(x,2),m=f[0];f[1];return(0,i.jsx)("div",{id:"dialog".concat(m),onClick:function(e){e.target.id==="dialog"+m&&(null===n||void 0===n||n())},className:"w-full h-full fixed bg-black-60 rtl:left-0 ltr:right-0 top-0 transition-all ".concat(t?"opacity-1 z-[999] delay-200":"pointer-events-none opacity-0 z-0 delay-300"),children:(0,i.jsxs)("div",{className:"h-full w-[60%] min-w-[900px] bg-white transition-all\t".concat(t?"translate-x-0 delay-300":"ltr:-translate-x-[100%] rtl:translate-x-[100%] delay-200"),children:[p&&(0,i.jsxs)("div",{className:"flex w-full px-8 py-6 items-center justify-between border-b border-text-300",children:[(0,i.jsxs)("div",{className:"flex items-center",children:[(0,i.jsx)("div",{className:"me-3 w-9 h-9 rounded-[12px] bg-primary-main flex items-center justify-center text-white",children:u}),(0,i.jsx)("p",{className:"text-[20px] leading-[20px] font-bold",children:p})]}),(0,i.jsx)("div",{className:"w-9 h-9",children:(0,i.jsx)("button",{onClick:n,className:"w-9 h-9",children:(0,i.jsx)(a.Z,{className:"w-9 h-9"})})})]}),(0,i.jsx)("div",{className:"flex justify-between w-full flex-col h-[calc(100%-85px)]",children:o.Children.map(c,(function(e){return e.type===s?(0,i.jsx)(s,{children:e.props.children}):e.type===l?(0,i.jsx)(l,{children:e.props.children}):void 0}))})]})})};c.Content=s,c.Footer=l,t.Z=c},1310:function(e,t,n){var r=n(3513),a=n(9230),o=n(184);t.Z=function(e){var t=e.columns,n=e.data,i=(0,a.$G)().i18n;return(0,o.jsx)(r.ZP,{direction:"ltr"===i.dir()?r.Nm.LTR:r.Nm.RTL,columns:t,data:n,className:"customTable",conditionalRowStyles:[{when:function(e){return"footer"===e.id},style:{backgroundColor:"rgba(247, 247, 247, 1)",borderTop:"2px solid #EDEDED","&:hover":{cursor:"pointer"}}}]})}},1594:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(1413),a=n(9439),o=n(6970),i=n(2791),s=n(184),l=function(e){var t=e.text,n=e.onClick,r=e.icon,a=e.after,o=e.ref,i=e.simple,l=void 0!==i&&i,c=function(){return r?(0,s.jsx)("div",{className:"inline-block text-text-600",children:r}):(0,s.jsx)(s.Fragment,{})};return(0,s.jsxs)("button",{ref:o,className:"".concat(l?"":"border border-text-400"," bg-transparent rounded-full text-text-900 w-full h-[38px] flex ltr:flex-row-reverse items-center justify-center hover:bg-text-4"),onClick:n,children:[!a&&c(),!l&&t,a&&c()]})},c=n(1745),u=n(9230),d=function(e){var t=e.row,n=e.handleAction,d=e.items,p=e.simple,x=void 0!==p&&p,f=(0,i.useRef)(null),m=(0,u.$G)().t,h=(0,i.useState)(!1),v=(0,a.Z)(h,2),g=v[0],b=v[1];return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:"".concat(x?"w-[20px]":"w-[92px] pb-[5px]"),ref:f,children:[(0,s.jsx)(l,{after:!0,icon:(0,s.jsx)(o.Z,{className:"rotate-90 pt-[5px]"}),text:m("action"),simple:x,onClick:function(){console.log(t),b(!0)}}),(0,s.jsx)(c.Z,{anchorEl:f.current,open:g,handleClose:function(){b(!1)},items:d.map((function(e){return(0,r.Z)((0,r.Z)({},e),{},{onClick:function(){return function(e,t){b(!1),n&&n(e,t)}(t,e.name)}})}))})]})})}},4321:function(e,t,n){n.r(t),n.d(t,{default:function(){return S}});var r=n(9439),a=n(9769),o=n(1369),i=n(2634),s=n(7139),l=n(747),c=n(4370),u=n(2791),d=n(6718),p=n(2636),x=n(9134),f=n(8923),m=n(5705),h=n(184),v=function(e){var t=e.open,n=e.handleClose,r=(0,m.TA)({initialValues:{mobile:""},onSubmit:function(e){console.log("values",e)}});return(0,h.jsx)(x.Z,{headerText:"\u0627\u0641\u0632\u0648\u062f\u0646 \u06a9\u0627\u0631\u0628\u0631 \u062c\u062f\u06cc\u062f",headerIcon:(0,h.jsx)(c.Z,{}),open:t,handleClose:n,children:(0,h.jsx)("div",{className:"p-7",children:(0,h.jsx)("form",{onSubmit:r.handleSubmit,className:"w-full",children:(0,h.jsxs)("div",{className:"mt-7 w-full grid grid-cols-2 gap-x-5 gap-y-7",children:[(0,h.jsx)(f.Z,{name:"mobile",label:"\u0634\u0645\u0627\u0631\u0647 \u0645\u0648\u0628\u0627\u06cc\u0644",type:"text",placeholder:"\u0634\u0645\u0627\u0631\u0647 \u0647\u0645\u0631\u0627\u0647 \u062e\u0648\u062f \u0631\u0627 \u0648\u0627\u0631\u062f \u0646\u0645\u0627\u06cc\u06cc\u062f",formik:r}),(0,h.jsx)(f.Z,{name:"mobile",label:"\u0634\u0645\u0627\u0631\u0647 \u0645\u0648\u0628\u0627\u06cc\u0644",type:"tel",placeholder:"\u0634\u0645\u0627\u0631\u0647 \u0647\u0645\u0631\u0627\u0647 \u062e\u0648\u062f \u0631\u0627 \u0648\u0627\u0631\u062f \u0646\u0645\u0627\u06cc\u06cc\u062f",formik:r})]})})})})},g=n(1310),b=n(1594),j=n(7047),w=n(7421),Z=n(1193),y=n(7689),N=n(6612),C=n(9230),k=n(934),S=function(){var e=(0,u.useState)([]),t=(0,r.Z)(e,2),n=t[0],x=t[1],f=(0,u.useState)(!1),m=(0,r.Z)(f,2),S=m[0],T=m[1],D=(0,y.s0)(),A=(0,C.$G)().t,_=(0,k.YN)().data,P=(0,k.hu)().data,F=(0,u.useCallback)((function(e,t){switch(t){case"edit":case"delete":default:break;case"view":D("/orders/".concat(e.id));break;case"nextStep":D("/orders/".concat(e.id,"/").concat(e.nextStep.id,"/showForm"))}}),[D]);return(0,u.useEffect)((function(){if(P){var e=[{name:A("orderCode"),selector:function(e){return e.id},sortable:!0},{name:A("productName"),selector:function(e){return e.product.name}},{name:A("submitDate"),selector:function(e){return e.jalali_date}},{name:A("customerName"),selector:function(e){return e.customer}},{name:A("count"),selector:function(e){return Z.ZP.toPersianDigits(e.count||1)}}];P.cols.forEach((function(t){e.push({name:t.field_label,selector:function(e){var n,r,a,o,i;return(null===(n=e.additional_data)||void 0===n||null===(r=n.find((function(e){return e.fild_name===t.fild_name})))||void 0===r||null===(a=r.field_value)||void 0===a?void 0:a.label)||(null===(o=e.additional_data)||void 0===o||null===(i=o.find((function(e){return e.fild_name===t.fild_name})))||void 0===i?void 0:i.field_value)||(0,h.jsx)("div",{className:"bg-error-secondary",children:A("dontHave")})}})})),e.push({name:A("status"),selector:function(e){var t;return null===e||void 0===e||null===(t=e.step)||void 0===t?void 0:t.step_name}}),e.push({allowOverflow:!0,button:!0,width:"120px",cell:function(e){var t,n=[];n.push({icon:(0,h.jsx)(a.Z,{variant:"Bold"}),text:A("viewDetails"),name:"view"});var r,l,c=null===(t=JSON.parse(localStorage.getItem("nipa_user")||"{}"))||void 0===t?void 0:t.roles,u=!1;c&&(u=null===(r=e.nextStep)||void 0===r||null===(l=r.roles)||void 0===l?void 0:l.some((function(e){return c.some((function(t){return t.slug===e.slug}))})));return u&&n.push({icon:(0,h.jsx)(o.Z,{variant:"Bold"}),text:e.nextStep.step_name||"",name:"nextStep"}),P.permissions.canEdit&&n.push({icon:(0,h.jsx)(i.Z,{variant:"Bold"}),text:A("edit"),name:"edit"}),P.permissions.canDelete&&n.push({icon:(0,h.jsx)(s.Z,{variant:"Bold"}),text:A("delete"),name:"delete"}),(0,h.jsx)(b.Z,{handleAction:F,items:[].concat(n),row:e})}}),x([].concat(e)),console.log("data.orders",P.cols)}}),[P,F,A]),(0,h.jsxs)("div",{className:"w-full h-full",children:[(0,h.jsx)(v,{open:S,handleClose:function(){return T(!1)}}),(0,h.jsx)(d.Z,{actions:(null===_||void 0===_?void 0:_.length)>0&&(0,h.jsxs)(h.Fragment,{children:[" ",(0,h.jsx)("div",{className:"w-[186px]",children:(0,h.jsx)(p.Z,{icon:(0,h.jsx)(l.Z,{}),text:A("advancedFilter"),onClick:function(){return T(!0)},simple:!0})}),(0,h.jsx)("div",{className:"w-[186px] ms-4",children:(0,h.jsx)(p.Z,{icon:(0,h.jsx)(c.Z,{}),text:A("addNewOrder"),href:"create"})})]}),title:A("orders")}),(0,h.jsx)("div",{children:(0,h.jsx)("div",{className:"w-full",children:_?_.length>0?_.map((function(e){return(0,h.jsx)(w.Z,{title:A("orderInfoTitle",{code:Z.ZP.toPersianDigits(e.id),date:Z.ZP.toPersianDigits(Z.ZP.renderChatTime(Z.ZP.dateToTimestamp(e.created_at))),user:e.user.name?e.user.name+" "+e.user.last_name:e.user.mobile}),children:(0,h.jsx)(g.Z,{columns:n,data:null===P||void 0===P?void 0:P.orders.filter((function(t){var n,r;return(null===(n=t.order_group)||void 0===n||null===(r=n[0])||void 0===r?void 0:r.id)===e.id}))})},e.id)})):(0,h.jsx)(N.Z,{title:A("noOrdersFound"),subTitle:A("orderFirstOrder")||"",action:(0,h.jsx)(p.Z,{icon:(0,h.jsx)(c.Z,{}),text:A("submitOrder"),href:"create",sm:!0})}):(0,h.jsx)("div",{className:"grid grid-cols-1 gap-[40px]",children:Array.from(Array(3).keys()).map((function(e,t){return(0,h.jsx)(j.Z,{variant:"rounded",width:"100%",height:72,animation:"wave"},t)}))})})})]})}}}]);
//# sourceMappingURL=4321.b129339b.chunk.js.map