(self.webpackChunknipa_panel_new=self.webpackChunknipa_panel_new||[]).push([[7862],{1544:function(e,t,n){"use strict";n.d(t,{Ol:function(){return b},_0:function(){return Z},Jh:function(){return y},pi:function(){return g}});var r=n(8556),i=n(9778),o=n(3713),a=n(4165),s=n(1413),l=n(5861),u=n(516);function c(){return(c=(0,l.Z)((0,a.Z)().mark((function e(t){var n,r;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,null===(n=(0,u.Z)())||void 0===n?void 0:n.post("/sendOtp",{mobile:t.mobile});case 2:return r=e.sent,e.abrupt("return",(0,s.Z)((0,s.Z)({},null===r||void 0===r?void 0:r.data),{},{mobile:t.mobile}));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(){return(d=(0,l.Z)((0,a.Z)().mark((function e(t){var n,r;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,null===(n=(0,u.Z)())||void 0===n?void 0:n.post("/confirmOtp",{mobile:t.mobile,otp:t.otp});case 2:return r=e.sent,e.abrupt("return",null===r||void 0===r?void 0:r.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(){return f.apply(this,arguments)}function f(){return(f=(0,l.Z)((0,a.Z)().mark((function e(){var t,n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,null===(t=(0,u.Z)())||void 0===t?void 0:t.get("/profile");case 2:return n=e.sent,e.abrupt("return",null===n||void 0===n?void 0:n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e){return m.apply(this,arguments)}function m(){return(m=(0,l.Z)((0,a.Z)().mark((function e(t){var n,r;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,null===(n=(0,u.Z)())||void 0===n?void 0:n.post("/completeProfile",t);case 2:return r=e.sent,e.abrupt("return",null===r||void 0===r?void 0:r.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var h=n(2737),x=n(7490),g=function(){var e=(0,h.T)(),t=(0,r.D)({mutationKey:["sendOtp"],mutationFn:function(e){return function(e){return c.apply(this,arguments)}(e)},onSuccess:function(t){e((0,x.cp)(t.mobile))}});return{mutate:t.mutate,loading:t.isPending}},Z=function(){var e=(0,h.T)(),t=(0,r.D)({mutationKey:["confirmOtp"],mutationFn:function(e){return function(e){return d.apply(this,arguments)}(e)},onSuccess:function(t){e((0,x.fY)(t))}});return{mutate:t.mutate,loading:t.isPending}},y=function(){var e=(0,i.a)({queryKey:["userInfo"],queryFn:p});return{data:e.data,isPending:e.isPending}},b=function(){var e=(0,o.NL)(),t=(0,r.D)({mutationKey:["completeProfile"],mutationFn:v,onSuccess:function(t){e.setQueryData(["userInfo"],t)}});return{mutate:t.mutate,loading:t.isPending}}},5443:function(e,t,n){"use strict";n.d(t,{c:function(){return a},y:function(){return s}});var r=n(4165),i=n(5861),o=n(4999).Z.actions,a=function(e){return function(){var t=(0,i.Z)((0,r.Z)().mark((function t(n,i){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n(o.setApiLoading(e));case 1:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},s=function(e){return function(){var t=(0,i.Z)((0,r.Z)().mark((function t(n,i){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n(o.setCollapseMenu(e));case 1:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}},2737:function(e,t,n){"use strict";n.d(t,{C:function(){return o},T:function(){return i}});var r=n(9434),i=function(){return(0,r.I0)()},o=r.v9},7490:function(e,t,n){"use strict";n.d(t,{KR:function(){return h},Sd:function(){return m},bG:function(){return x},kS:function(){return g},fY:function(){return v},cp:function(){return f}});var r=n(4165),i=n(5861),o=n(516);function a(){return(a=(0,i.Z)((0,r.Z)().mark((function e(t){var n,i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,null===(n=(0,o.Z)())||void 0===n?void 0:n.post("/sendOtp",{mobile:t.mobile});case 2:return i=e.sent,e.abrupt("return",null===i||void 0===i?void 0:i.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function s(){return(s=(0,i.Z)((0,r.Z)().mark((function e(t){var n,i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("cscscsc",t),e.next=3,null===(n=(0,o.Z)())||void 0===n?void 0:n.post("/confirmOtp",{mobile:t.mobile,otp:t.otp});case 3:return i=e.sent,e.abrupt("return",null===i||void 0===i?void 0:i.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(){return(l=(0,i.Z)((0,r.Z)().mark((function e(){var t,n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,null===(t=(0,o.Z)())||void 0===t?void 0:t.get("/roles");case 2:return n=e.sent,e.abrupt("return",null===n||void 0===n?void 0:n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function u(){return(u=(0,i.Z)((0,r.Z)().mark((function e(){var t,n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,null===(t=(0,o.Z)())||void 0===t?void 0:t.get("/profile");case 2:return n=e.sent,e.abrupt("return",null===n||void 0===n?void 0:n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function c(){return(c=(0,i.Z)((0,r.Z)().mark((function e(){var t,n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,null===(t=(0,o.Z)())||void 0===t?void 0:t.get("/customers");case 2:return n=e.sent,e.abrupt("return",null===n||void 0===n?void 0:n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var d={sendOtp:function(e){return a.apply(this,arguments)},confirmOtp:function(e){return s.apply(this,arguments)},getRolesList:function(){return l.apply(this,arguments)},getUserInfo:function(){return u.apply(this,arguments)},getCustomersList:function(){return c.apply(this,arguments)}},p=n(5797).Z.actions,f=function(e){return function(){var t=(0,i.Z)((0,r.Z)().mark((function t(n,i){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n(p.setUserMobile(e));case 1:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=(0,i.Z)((0,r.Z)().mark((function t(n,i){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n(p.setUserLogin(e));case 1:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},m=function(){return function(){var e=(0,i.Z)((0,r.Z)().mark((function e(t,n){var i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.getRolesList();case 2:i=e.sent,console.log(i),t(p.getRolesList(i));case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},h=function(){return function(){var e=(0,i.Z)((0,r.Z)().mark((function e(t,n){var i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.getCustomersList();case 2:i=e.sent,t(p.getCustomersList(i.customers));case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},x=function(){return function(){var e=(0,i.Z)((0,r.Z)().mark((function e(t,n){var i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.getUserInfo();case 2:i=e.sent,console.log(i),t(p.getUserInfo(i));case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},g=function(){return function(){var e=(0,i.Z)((0,r.Z)().mark((function e(t,n){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t(p.logout());case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}},516:function(e,t,n){"use strict";var r=n(3263),i=n(5443),o=n(2855),a=n(174);t.Z=function(){var e=r.Z.create({baseURL:"http://localhost:8000/api/v1",headers:localStorage.getItem("nipa_token")?{"Content-Type":"application/json",Accept:"application/json",language:localStorage.getItem("nipa-lang")||"fa",authorization:"Bearer "+localStorage.getItem("nipa_token")}:{"Content-Type":"application/json",Accept:"application/json"}});return e.interceptors.request.use((function(e){return o.Z.dispatch((0,i.c)(!0)),e}),(function(e){return o.Z.dispatch((0,i.c)(!1)),Promise.reject(e)})),e.interceptors.response.use((function(e){return o.Z.dispatch((0,i.c)(!1)),e}),(function(e){(e.response.status,403==e.response.status&&(document.location.href="/errors/403"),e.response.data.errors)?Object.keys(e.response.data.errors).map((function(t){return e.response.data.errors[t]})).forEach((function(e){a.Z.error(e)})):(console.log("err",e.response),a.Z.error(e.response.data.message||e.response.data.msg||e.response.data.error));return o.Z.dispatch((0,i.c)(!1)),Promise.reject(e)})),e}},1193:function(e,t,n){"use strict";var r=n(9039);t.ZP={toISOLocal:function(e){var t=function(e){return("0"+e).slice(-2)},n=e.getTimezoneOffset();return n=Math.abs(n),e.getFullYear()+"-"+t(e.getMonth()+1)+"-"+t(e.getDate())},pluralize:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"s";return"".concat(e," ").concat(t).concat(1!==e?n:"")},fileToUrl:function(e){return new Promise((function(t,n){var r=new FileReader;r.onload=function(e){var n=e.target.result;t(n)},r.onerror=function(e){n(e.target.error)},r.readAsDataURL(e)}))},imageValidExtensions:["image/jpeg","image/jpg","image/png","image/gif"],base64ToBlob:function(e,t){for(var n=window.atob(e),r=n.length,i=new Uint8Array(r),o=0;o<r;++o)i[o]=n.charCodeAt(o);return new Blob([i],{type:t})},renderStatusStyle:function(e){var t;switch(e){case"success":t="bg-success-secondary text-success-primary ";break;case"warning":t="bg-warning-secondary text-warning-text ";break;case"error":t="bg-error-secondary text-error-primary ";break;case"info":t="bg-info-secondary text-info-primary ";break;default:t="bg-text-300 text-text-600 "}return t},toPersianDigitsPutCommas:function(e,t){var n="\u06f0".charCodeAt(0);!e&&(e="");var i=e.split(".");i[0].length>3&&(i[0]=i[0].replace(/\B(?=(\d{3})+(?!\d))/g,","));var o=i.join(".");return t||"fa"===r.Z.language?String(o).replace(/[0-9]/g,(function(e){return String.fromCharCode(e.charCodeAt(0)+n-48)})):o},fileToBlob:function(e){return new Blob([e],{type:e.type})},toPersianDigits:function(e,t){if(t||"fa"===r.Z.language){var n="\u06f0".charCodeAt(0);return String(e).replace(/[0-9]/g,(function(e){return String.fromCharCode(e.charCodeAt(0)+n-48)}))}return e},dateToTimestamp:function(e){return new Date(e).getTime()},renderChatTime:function(e,t,n){var i=Math.floor(Date.now());if(t)return n?new Date(e).toLocaleDateString("fa-IR"):new Date(e).toLocaleDateString("fa-IR")+" , "+new Date(e).toLocaleTimeString("fa-IR").slice(0,5);var o=Math.floor((i-e)/1e3);return o<60?r.Z.t("fewSecondsAgo"):o<3600?Math.floor(o/60)+" "+r.Z.t("minutesAgo"):o<86400?Math.floor(o/3600)+" "+r.Z.t("hoursAgo"):o<604800?Math.floor(o/86400)+" "+r.Z.t("daysAgo"):new Date(e).toLocaleDateString("fa-IR")},checkPermission:function(e){var t,n=null===(t=JSON.parse(localStorage.getItem("nipa_user")||"{}"))||void 0===t?void 0:t.permissions;return!(null===n||void 0===n||!n.find((function(t){return t.slug===e})))},convetToEnglishDigitsRemoveCommas:function(e){var t="\u06f0".charCodeAt(0);return String(e).replace(/[\u06f0-\u06f9]/g,(function(e){return String.fromCharCode(e.charCodeAt(0)-t+48)}))}}},6718:function(e,t,n){"use strict";var r=n(9145),i=n(184);t.Z=function(e){var t=e.title,n=e.actions,o=e.handleBack;return(0,i.jsxs)("div",{className:"print:hidden w-full flex items-center justify-between mb-[20px]",children:[(0,i.jsxs)("div",{className:"flex items-center",children:[o?(0,i.jsx)("div",{className:"cursor-pointer",onClick:o,children:(0,i.jsx)(r.Z,{className:"mx-[12px] text-gray-500 ltr:rotate-180"})}):(0,i.jsx)("span",{className:"inline-block w-[14px] h-[14px] rounded-[2px] bg-secondary-main me-3"}),(0,i.jsx)("p",{className:"text-gray-500 font-black",children:t})]}),(0,i.jsx)("div",{className:"flex",children:n})]})}},2636:function(e,t,n){"use strict";var r=n(3239),i=(n(2791),n(1087)),o=n(184);t.Z=function(e){var t=e.type,n=e.simple,a=e.bordered,s=e.href,l=e.text,u=e.onClick,c=e.icon,d=e.after,p=e.sm,f=e.xs,v=e.gray,m=e.disabled,h=e.loading,x=e.className,g="w-full ".concat(x," ").concat(f?"h-[36px]":p?"h-[38px]":"h-12"," rounded-[8px] flex items-center justify-center bg-primary-main text-white ").concat(a?"border border-primary-main bg-transparent !text-primary-main":"","\n   ").concat(n?"border-none bg-transparent !text-primary-main":"","\n   ").concat(v?"border-none !bg-text-200 !text-text-500":"","\n    ").concat(m?"opacity-90 cursor-not-allowed pointer-events-none":"","\n  "),Z=function(){return c?(0,o.jsx)("div",{className:"inline-block me-1",children:c}):(0,o.jsx)(o.Fragment,{})};return(0,o.jsxs)(o.Fragment,{children:[s&&(0,o.jsxs)(i.rU,{to:s,className:g,children:[!d&&Z(),h?(0,o.jsx)(r.Z,{className:"!text-white !w-[20px] !h-[20px]"}):l,d&&Z()]}),t&&(0,o.jsxs)("button",{className:g,type:t,children:[!d&&Z(),h?(0,o.jsx)(r.Z,{className:"!text-white !w-[20px] !h-[20px]"}):l,d&&Z()]}),u&&(0,o.jsxs)("button",{className:g,onClick:u,children:[!d&&Z(),h?(0,o.jsx)(r.Z,{className:"!text-white !w-[20px] !h-[20px]"}):l,d&&Z()]})]})}},2253:function(e,t,n){"use strict";var r=n(1193),i=n(174),o=n(3958),a=n(1880),s=n(2791),l=n(9230),u=n(184);t.Z=function(e){var t=e.onFileDrop,n=e.acceptedTypes,c=e.maxSize,d=e.imageOnly,p=e.file,f=e.placeholder,v=e.fileRef,m=e.disabled,h=e.children,x=e.className,g=(0,s.useRef)(null),Z=(0,l.$G)(["common","validations"]).t;return(0,u.jsxs)("div",{ref:g,onDragOver:function(e){var t,n;e.preventDefault(),null===(t=g.current)||void 0===t||t.classList.add("!bg-primary-main"),null===(n=g.current)||void 0===n||n.classList.add("!text-white")},onDragLeave:function(e){var t,n;e.preventDefault(),null===(t=g.current)||void 0===t||t.classList.remove("!bg-primary-main"),null===(n=g.current)||void 0===n||n.classList.remove("!text-white")},onDrop:function(e){if(!m){var i,o;e.preventDefault(),null===(i=g.current)||void 0===i||i.classList.remove("!bg-primary-main"),null===(o=g.current)||void 0===o||o.classList.remove("!text-white");var a=e.dataTransfer.files[0];if(n&&!n.includes(a.type))return void console.error("File type not supported");if(d&&!r.ZP.imageValidExtensions.includes(a.type))return void console.error("File type not supported");if(c&&a.size>c)return void console.error("File size exceeds maximum limit");null===t||void 0===t||t(a)}},onClick:function(){g.current&&!m&&(g.current.querySelector('input[type="file"]').click(),console.log("ok"))},className:"w-full h-[144px] border border-dashed border-text-400 text-text-500 rounded-[6px] flex items-center justify-center cursor-pointer ".concat(x),children:[(0,u.jsx)("input",{type:"file",ref:v,style:{display:"none"},onChange:function(e){var o,a=null===(o=e.target.files)||void 0===o?void 0:o[0];if(a){if(n&&!n.includes(a.type))return void console.error("File type not supported");if(c&&a.size>c)return console.error("File size exceeds maximum limit"),void i.Z.error(Z("file_size_exceeds_maximum_limit",{ns:"validations"}));if(d&&!r.ZP.imageValidExtensions.includes(a.type))return console.error("File type not supported"),void i.Z.error(Z("file_type_not_supported",{ns:"validations"}));null===t||void 0===t||t(a)}}}),h||(0,u.jsxs)("div",{className:"flex items-center justify-center flex-col",children:[(0,u.jsx)("div",{className:"w-[30px] h-[30px]",children:d?(0,u.jsx)(o.Z,{className:"w-full h-full text-inherit"}):(0,u.jsx)(a.Z,{className:"w-full h-full text-inherit"})}),(0,u.jsx)("p",{className:"text-[14px] mt-[5px] font-medium text-inherit",children:p?p.name:f||"\u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646\u06cc\u062f"})]})]})}},8923:function(e,t,n){"use strict";n(2791);var r=n(9504),i=n.n(r),o=n(4110),a=n(3466),s=n(1193),l=n(9230),u=n(184);t.Z=function(e){var t,n,r,c,d,p,f,v,m,h,x=e.name,g=e.label,Z=e.formik,y=e.type,b=void 0===y?"text":y,w=e.placeholder,k=e.maskChar,j=e.className,C=e.mask,N=e.inputActions,O=e.normal,S=e.endEndorement,L=e.multiline,_=e.readonly,E=e.value,T=(0,l.$G)().i18n;return(0,u.jsxs)("div",{className:"flex flex-col w-full items-start justify-start ".concat(j),children:[g&&(0,u.jsxs)("div",{className:"text-sm mb-2 flex justify-between w-full",children:[(0,u.jsx)("label",{htmlFor:x,className:"font-normal !text-xs",children:g}),null===N||void 0===N?void 0:N()]}),O?(0,u.jsx)(o.Z,{value:"number"==b?s.ZP.toPersianDigitsPutCommas(null===Z||void 0===Z||null===(c=Z.values)||void 0===c?void 0:c[x]):null===Z||void 0===Z||null===(d=Z.values)||void 0===d?void 0:d[x],type:"text",readOnly:_,id:x,name:x,multiline:L,rows:L?4:1,placeholder:w||"",onChange:function(e){var t=s.ZP.convetToEnglishDigitsRemoveCommas(e.target.value),n="";if("number"==b){var r=t.replace(/[^0-9.]/g,"").split(".");n=r.length>1?(r[0]||"0")+"."+(r[1]||""):r[0]}else n=e.target.value;null===Z||void 0===Z||Z.handleChange({target:{name:x,value:n}})},disableUnderline:!0,endAdornment:(0,u.jsx)(a.Z,{position:"end",children:S}),className:"!text-sm text-text-400 w-full ".concat(L?"h-[100px] resize-none !p-2":"h-12"," border border-text-400 rounded-[8px] p-2 focus:border-primary-main !outline-none invalid:border-error-primary ").concat(null!==Z&&void 0!==Z&&null!==(p=Z.errors)&&void 0!==p&&p[x]&&null!==Z&&void 0!==Z&&null!==(f=Z.touched)&&void 0!==f&&f[x]?"!border-error-primary":"")}):(0,u.jsx)(i(),{mask:C||"",maskChar:k||" ",value:E||(null===Z||void 0===Z||null===(t=Z.values)||void 0===t?void 0:t[x]),type:b,dir:T.dir(),className:"w-full h-12 border border-text-400 rounded-[8px] p-2 text-sm focus:border-primary-main !outline-none invalid:border-error-primary ".concat(null!==Z&&void 0!==Z&&null!==(n=Z.errors)&&void 0!==n&&n[x]&&null!==Z&&void 0!==Z&&null!==(r=Z.touched)&&void 0!==r&&r[x]?"!border-error-primary":""),id:x,name:x,style:{direction:"tel"==b?"ltr":T.dir()},placeholder:w||"",readOnly:_,onChange:function(e){null===Z||void 0===Z||Z.handleChange({target:{name:x,value:e.target.value}})}}),(null===Z||void 0===Z||null===(v=Z.errors)||void 0===v?void 0:v[x])&&(null===Z||void 0===Z||null===(m=Z.touched)||void 0===m?void 0:m[x])&&(0,u.jsx)("p",{className:"text-error-primary text-[10px] mt-1",children:null===Z||void 0===Z||null===(h=Z.errors)||void 0===h?void 0:h[x]})]})}},4511:function(e,t,n){"use strict";var r=n(9439),i=n(2791),o=n(184);t.Z=function(e){var t=e.headerTitle,n=e.children,a=e.headerActions,s=e.printPadding,l=(0,i.useState)(!1),u=(0,r.Z)(l,2);u[0],u[1],(0,i.useRef)(null);return(0,o.jsxs)("div",{className:"w-full rounded-[6px] bg-white border border-text-300",children:[t&&(0,o.jsxs)("div",{className:"border-b border-text-300 ".concat(a?"py-4":"py-7"," ps-5 pe-6 w-full flex items-center justify-between"),children:[t&&(0,o.jsx)("div",{className:" flex",children:(0,o.jsx)("p",{className:"text-[18px] font-bold text-text-800",children:t})}),a&&(0,o.jsx)("div",{children:a})]}),(0,o.jsx)("div",{className:"py-8 px-5 ".concat(s?"print:px-0 print:py-0":""),children:n})]})}},7862:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return C}});var r=n(4165),i=n(1413),o=n(5861),a=n(9439),s=n(6718),l=n(9230),u=n(4511),c=n(2253),d=n(2791),p=n(1544),f=n(3958),v=n(3239),m=n(1724),h=n(8556),x=n(516);function g(e){return Z.apply(this,arguments)}function Z(){return(Z=(0,o.Z)((0,r.Z)().mark((function e(t){var n,o,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(o=new FormData).append("file",t),e.next=4,null===(n=(0,x.Z)())||void 0===n?void 0:n.post("/files",o,{headers:{"Content-Type":"multipart/form-data"}});case 4:return a=e.sent,e.abrupt("return",(0,i.Z)({},null===a||void 0===a?void 0:a.data));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var y=function(){var e=(0,h.D)({mutationKey:["uploadFile"],mutationFn:g});return{mutate:e.mutate,loading:e.isPending}},b=n(8923),w=n(5705),k=n(2636),j=n(184),C=function(){var e,t,n,h,x,g,Z,C,N,O=(0,l.$G)().t,S=(0,d.useRef)(null),L=(0,d.useState)(),_=(0,a.Z)(L,2),E=_[0],T=_[1],M=(0,d.useState)(""),P=(0,a.Z)(M,2),D=P[0],R=P[1],F=(0,d.useState)(!0),A=(0,a.Z)(F,2),I=A[0],z=A[1],U=(0,p.Jh)().data;console.log("user",null===U||void 0===U||null===(e=U.user)||void 0===e||null===(t=e.avatar)||void 0===t?void 0:t.hash_code);var B={name:null===U||void 0===U||null===(n=U.user)||void 0===n?void 0:n.name,last_name:null===U||void 0===U||null===(h=U.user)||void 0===h?void 0:h.last_name,mobile:null===U||void 0===U||null===(x=U.user)||void 0===x?void 0:x.mobile,email:null===U||void 0===U||null===(g=U.user)||void 0===g?void 0:g.email,avatar_hash_code:null===U||void 0===U||null===(Z=U.user)||void 0===Z||null===(C=Z.avatar)||void 0===C?void 0:C.hash_code},W=m.Ry().shape({name:m.Z_().required(O("name.required",{ns:"validations"})||""),last_name:m.Z_().required(O("lastName.required",{ns:"validations"})||"")}),V=(0,w.TA)({initialValues:B,validationSchema:W,onSubmit:function(){var e=(0,o.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:z(!0),H((0,i.Z)((0,i.Z)({},t),{},{mobile:null===U||void 0===U||null===(n=U.user)||void 0===n?void 0:n.mobile}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()});(0,d.useEffect)((function(){if(null!==U&&void 0!==U&&U.user){var e,t,n,r;if(null!==U&&void 0!==U&&null!==(e=U.user)&&void 0!==e&&null!==(t=e.avatar)&&void 0!==t&&t.hash_code)R("http://localhost:8000/api/v1/files/"+(null===U||void 0===U||null===(n=U.user)||void 0===n||null===(r=n.avatar)||void 0===r?void 0:r.hash_code)||0);V.setValues({name:U.user.name,last_name:U.user.last_name,mobile:U.user.mobile,email:U.user.email}),z(!1)}}),[U,null===U||void 0===U?void 0:U.user]);var K=y().mutate,q=(0,p.Ol)().mutate,H=function(e){q(e,{onSuccess:function(e){var t,n,r,i;null!==U&&void 0!==U&&null!==(t=U.user)&&void 0!==t&&null!==(n=t.avatar)&&void 0!==n&&n.hash_code&&R("http://localhost:8000/api/v1/files/"+(null===e||void 0===e||null===(r=e.user)||void 0===r||null===(i=r.avatar)||void 0===i?void 0:i.hash_code)||0)},onSettled:function(){z(!1)}})};return(0,j.jsxs)("div",{children:[(0,j.jsx)(s.Z,{title:O("profile.userInfo")}),(0,j.jsx)(u.Z,{headerTitle:O("profile.userInfo")||"",children:(0,j.jsx)("form",{onSubmit:V.handleSubmit,children:(0,j.jsxs)("div",{className:"grid grid-cols-2 gap-y-[30px] gap-x-4",children:[(0,j.jsx)(c.Z,{onFileDrop:function(e){z(!0),T(e),K(e,{onSuccess:function(e){var t;H({mobile:null===U||void 0===U||null===(t=U.user)||void 0===t?void 0:t.mobile,avatar_hash_code:e.file.hash_code})},onError:function(){z(!1)}})},placeholder:O("uploadProfilePic")||"",imageOnly:!0,fileRef:S,file:E,className:"h-[115px]",children:(0,j.jsxs)("div",{className:"flex items-center w-full h-full p-5 gap-x-5",children:[(0,j.jsxs)("div",{className:"flex items-center justify-center relative w-[75px] h-[75px] border border-text-300 rounded-full bg-text-300 overflow-hidden",children:[D?(0,j.jsx)("img",{src:D+"?thumbnail=true",alt:D,className:"w-full h-full object-cover"}):(0,j.jsx)(f.Z,{className:"w-[30px] h-[30px] text-inherit"}),I&&(0,j.jsx)("div",{className:"absolute flex items-center justify-center bg-primary-dark/30 w-full h-full rounded-full top-0 left-0",children:(0,j.jsx)(v.Z,{})})]}),(0,j.jsx)("p",{className:"text-sm",children:null!==U&&void 0!==U&&null!==(N=U.user)&&void 0!==N&&N.avatar?O("profile.updateAvatar"):O("profile.uploadAvatar")})]})}),(0,j.jsx)("div",{}),(0,j.jsx)("div",{children:(0,j.jsx)(b.Z,{className:"group",name:"name",label:O("name"),type:"text",placeholder:O("profile.enterName"),formik:V})}),(0,j.jsx)("div",{children:(0,j.jsx)(b.Z,{className:"group",name:"last_name",label:O("profile.lastName"),type:"text",placeholder:O("profile.enterLastName"),formik:V})}),(0,j.jsx)("div",{children:(0,j.jsx)(b.Z,{className:"group",name:"email",label:O("profile.email"),type:"text",placeholder:O("profile.enterEmail"),formik:V})}),(0,j.jsx)("div",{children:(0,j.jsx)(b.Z,{className:"group",name:"mobile",label:O("profile.mobile"),type:"text",placeholder:O("profile.enterMobile"),formik:V})}),(0,j.jsx)("div",{}),(0,j.jsx)("div",{className:"w-full flex justify-end",children:(0,j.jsx)("div",{className:"w-[163px] float-left",children:(0,j.jsx)(k.Z,{loading:I,disabled:I,type:"submit",text:O("saveChanges")})})})]})})})]})}},9145:function(e,t,n){"use strict";n.d(t,{Z:function(){return v}});var r=n(7573),i=n(2791),o=n(2007),a=n.n(o),s=["variant","color","size"],l=function(e){var t=e.color;return i.createElement(i.Fragment,null,i.createElement("path",{fill:t,d:"M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2zm2.34 10.53l-4.29 4.29c-.15.15-.34.22-.53.22s-.38-.07-.53-.22a.754.754 0 010-1.06l3.01-3.01H6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h10.19l-3.01-3.01a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l4.29 4.29a.75.75 0 010 1.06z"}))},u=function(e){var t=e.color;return i.createElement(i.Fragment,null,i.createElement("path",{stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"10",strokeWidth:"1.5",d:"M14.43 5.93L20.5 12l-6.07 6.07M11.01 12h9.32M3.5 12h3.47"}))},c=function(e){var t=e.color;return i.createElement(i.Fragment,null,i.createElement("path",{fill:t,d:"M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2z",opacity:".4"}),i.createElement("path",{fill:t,d:"M18.53 11.47l-4.29-4.29a.754.754 0 00-1.06 0c-.29.29-.29.77 0 1.06l3.01 3.01H6c-.41 0-.75.34-.75.75s.34.75.75.75h10.19l-3.01 3.01c-.29.29-.29.77 0 1.06.15.15.34.22.53.22s.38-.07.53-.22l4.29-4.29a.75.75 0 000-1.06z"}))},d=function(e){var t=e.color;return i.createElement(i.Fragment,null,i.createElement("path",{stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"10",strokeWidth:"1.5",d:"M14.43 5.93L20.5 12l-6.07 6.07M3.5 12h16.83"}))},p=function(e){var t=e.color;return i.createElement(i.Fragment,null,i.createElement("path",{fill:t,d:"M14.43 18.82c-.19 0-.38-.07-.53-.22a.754.754 0 010-1.06L19.44 12 13.9 6.46a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l6.07 6.07c.29.29.29.77 0 1.06l-6.07 6.07c-.15.15-.34.22-.53.22z"}),i.createElement("path",{fill:t,d:"M20.33 12.75H3.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h16.83c.41 0 .75.34.75.75s-.34.75-.75.75z"}))},f=function(e){var t=e.color;return i.createElement(i.Fragment,null,i.createElement("path",{stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"10",strokeWidth:"1.5",d:"M14.43 5.93L20.5 12l-6.07 6.07"}),i.createElement("path",{stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"10",strokeWidth:"1.5",d:"M3.5 12h16.83",opacity:".4"}))},v=(0,i.forwardRef)((function(e,t){var n=e.variant,o=e.color,a=e.size,v=(0,r._)(e,s);return i.createElement("svg",(0,r.a)({},v,{xmlns:"http://www.w3.org/2000/svg",ref:t,width:a,height:a,viewBox:"0 0 24 24",fill:"none"}),function(e,t){switch(e){case"Bold":return i.createElement(l,{color:t});case"Broken":return i.createElement(u,{color:t});case"Bulk":return i.createElement(c,{color:t});case"Linear":default:return i.createElement(d,{color:t});case"Outline":return i.createElement(p,{color:t});case"TwoTone":return i.createElement(f,{color:t})}}(n,o))}));v.propTypes={variant:a().oneOf(["Linear","Bold","Broken","Bulk","Outline","TwoTone"]),color:a().string,size:a().oneOfType([a().string,a().number])},v.defaultProps={variant:"Linear",color:"currentColor",size:"24"},v.displayName="ArrowRight"},7573:function(e,t,n){"use strict";function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},r.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}n.d(t,{_:function(){return i},a:function(){return r}})},888:function(e,t,n){"use strict";var r=n(9047);function i(){}function o(){}o.resetWarningCache=i,e.exports=function(){function e(e,t,n,i,o,a){if(a!==r){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:i};return n.PropTypes=n,n}},2007:function(e,t,n){e.exports=n(888)()},9047:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},8556:function(e,t,n){"use strict";n.d(t,{D:function(){return E}});var r,i,o,a,s,l,u=n(1413),c=n(9439),d=n(2791),p=n(5671),f=n(3144),v=n(7326),m=n(136),h=n(9388),x=n(101),g=n(2346),Z=n(6033),y=n(3889),b=n(3092),w=n(2756),k=n(7211),j=n(8974),C=n(5391),N=(r=new WeakMap,i=new WeakMap,o=new WeakMap,a=new WeakMap,s=new WeakSet,l=new WeakSet,function(e){(0,m.Z)(n,e);var t=(0,h.Z)(n);function n(e,u){var c;return(0,p.Z)(this,n),c=t.call(this),(0,x.Z)((0,v.Z)(c),l),(0,x.Z)((0,v.Z)(c),s),(0,g.Z)((0,v.Z)(c),r,{writable:!0,value:void 0}),(0,g.Z)((0,v.Z)(c),i,{writable:!0,value:void 0}),(0,g.Z)((0,v.Z)(c),o,{writable:!0,value:void 0}),(0,g.Z)((0,v.Z)(c),a,{writable:!0,value:void 0}),(0,b.Z)((0,v.Z)(c),i,void 0),(0,b.Z)((0,v.Z)(c),r,e),c.setOptions(u),c.bindMethods(),(0,y.Z)((0,v.Z)(c),s,O).call((0,v.Z)(c)),c}return(0,f.Z)(n,[{key:"bindMethods",value:function(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}},{key:"setOptions",value:function(e){var t,n=this.options;this.options=(0,Z.Z)(this,r).defaultMutationOptions(e),(0,C.VS)(n,this.options)||(0,Z.Z)(this,r).getMutationCache().notify({type:"observerOptionsUpdated",mutation:(0,Z.Z)(this,o),observer:this}),null===(t=(0,Z.Z)(this,o))||void 0===t||t.setOptions(this.options),null!==n&&void 0!==n&&n.mutationKey&&this.options.mutationKey&&(0,C.Ym)(n.mutationKey)!==(0,C.Ym)(this.options.mutationKey)&&this.reset()}},{key:"onUnsubscribe",value:function(){var e;this.hasListeners()||(null===(e=(0,Z.Z)(this,o))||void 0===e||e.removeObserver(this))}},{key:"onMutationUpdate",value:function(e){(0,y.Z)(this,s,O).call(this),(0,y.Z)(this,l,S).call(this,e)}},{key:"getCurrentResult",value:function(){return(0,Z.Z)(this,i)}},{key:"reset",value:function(){var e;null===(e=(0,Z.Z)(this,o))||void 0===e||e.removeObserver(this),(0,b.Z)(this,o,void 0),(0,y.Z)(this,s,O).call(this),(0,y.Z)(this,l,S).call(this)}},{key:"mutate",value:function(e,t){var n;return(0,b.Z)(this,a,t),null===(n=(0,Z.Z)(this,o))||void 0===n||n.removeObserver(this),(0,b.Z)(this,o,(0,Z.Z)(this,r).getMutationCache().build((0,Z.Z)(this,r),this.options)),(0,Z.Z)(this,o).addObserver(this),(0,Z.Z)(this,o).execute(e)}}]),n}(j.l));function O(){var e,t,n=null!==(e=null===(t=(0,Z.Z)(this,o))||void 0===t?void 0:t.state)&&void 0!==e?e:(0,w.R)();(0,b.Z)(this,i,(0,u.Z)((0,u.Z)({},n),{},{isPending:"pending"===n.status,isSuccess:"success"===n.status,isError:"error"===n.status,isIdle:"idle"===n.status,mutate:this.mutate,reset:this.reset}))}function S(e){var t=this;k.V.batch((function(){if((0,Z.Z)(t,a)&&t.hasListeners()){var n,r,o,s,l=(0,Z.Z)(t,i).variables,u=(0,Z.Z)(t,i).context;if("success"===(null===e||void 0===e?void 0:e.type))null===(n=(r=(0,Z.Z)(t,a)).onSuccess)||void 0===n||n.call(r,e.data,l,u),null===(o=(s=(0,Z.Z)(t,a)).onSettled)||void 0===o||o.call(s,e.data,null,l,u);else if("error"===(null===e||void 0===e?void 0:e.type)){var c,d,p,f;null===(c=(d=(0,Z.Z)(t,a)).onError)||void 0===c||c.call(d,e.error,l,u),null===(p=(f=(0,Z.Z)(t,a)).onSettled)||void 0===p||p.call(f,void 0,e.error,l,u)}}t.listeners.forEach((function(e){e((0,Z.Z)(t,i))}))}))}var L=n(3713),_=n(8981);function E(e,t){var n=(0,L.NL)(t),r=d.useState((function(){return new N(n,e)})),i=(0,c.Z)(r,1)[0];d.useEffect((function(){i.setOptions(e)}),[i,e]);var o=d.useSyncExternalStore(d.useCallback((function(e){return i.subscribe(k.V.batchCalls(e))}),[i]),(function(){return i.getCurrentResult()}),(function(){return i.getCurrentResult()})),a=d.useCallback((function(e,t){i.mutate(e,t).catch(T)}),[i]);if(o.error&&(0,_.L)(i.options.throwOnError,[o.error]))throw o.error;return(0,u.Z)((0,u.Z)({},o),{},{mutate:a,mutateAsync:o.mutate})}function T(){}}}]);
//# sourceMappingURL=7862.b77bd873.chunk.js.map