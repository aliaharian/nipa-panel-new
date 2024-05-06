"use strict";(self.webpackChunknipa_panel_new=self.webpackChunknipa_panel_new||[]).push([[7838],{6041:(e,t,n)=>{n.d(t,{J3:()=>r,WG:()=>s,hR:()=>o});const a=n(8852).A.actions,o=e=>async(t,n)=>{t(a.setApiLoading(e))},r=e=>async(t,n)=>{t(a.setCollapseMenu(e))},s=e=>async(t,n)=>{t(a.setOpenMenu(e))}},7311:(e,t,n)=>{n.d(t,{G:()=>r,j:()=>o});var a=n(9456);const o=()=>(0,a.wA)(),r=a.d4},7417:(e,t,n)=>{n.d(t,{gJ:()=>c,Up:()=>l,ug:()=>d,ri:()=>p,PT:()=>i,ex:()=>s});var a=n(670);const o={sendOtp:async function(e){var t;let n=await(null===(t=(0,a.A)())||void 0===t?void 0:t.post("/sendOtp",{mobile:e.mobile}));return null===n||void 0===n?void 0:n.data},confirmOtp:async function(e){var t;console.log("cscscsc",e);let n=await(null===(t=(0,a.A)())||void 0===t?void 0:t.post("/confirmOtp",{mobile:e.mobile,otp:e.otp}));return null===n||void 0===n?void 0:n.data},getRolesList:async function(){var e;let t=await(null===(e=(0,a.A)())||void 0===e?void 0:e.get("/roles"));return null===t||void 0===t?void 0:t.data},getUserInfo:async function(){var e;let t=await(null===(e=(0,a.A)())||void 0===e?void 0:e.get("/profile"));return null===t||void 0===t?void 0:t.data},getCustomersList:async function(){var e;let t=await(null===(e=(0,a.A)())||void 0===e?void 0:e.get("/customers"));return null===t||void 0===t?void 0:t.data}};const r=n(5730).A.actions,s=e=>async(t,n)=>{t(r.setUserMobile(e))},i=e=>async(t,n)=>{t(r.setUserLogin(e))},l=()=>async(e,t)=>{const n=await o.getRolesList();console.log(n),e(r.getRolesList(n))},c=()=>async(e,t)=>{const n=await o.getCustomersList();e(r.getCustomersList(n.customers))},d=()=>async(e,t)=>{const n=await o.getUserInfo();console.log(n),e(r.getUserInfo(n))},p=()=>async(e,t)=>{e(r.logout())}},670:(e,t,n)=>{n.d(t,{A:()=>i});var a=n(7154),o=n(6041),r=n(6254),s=n(5424);const i=()=>{const e=a.A.create({baseURL:"https://apidemo.nipaco.ir/api/v1",headers:localStorage.getItem("nipa_token")?{"Content-Type":"application/json",Accept:"application/json",language:localStorage.getItem("nipa-lang")||"fa",authorization:"Bearer "+localStorage.getItem("nipa_token")}:{"Content-Type":"application/json",Accept:"application/json"}});return e.interceptors.request.use((function(e){return r.A.dispatch((0,o.hR)(!0)),e}),(function(e){return r.A.dispatch((0,o.hR)(!1)),Promise.reject(e)})),e.interceptors.response.use((function(e){return r.A.dispatch((0,o.hR)(!1)),e}),(function(e){if(e.response.status,403==e.response.status&&(document.location.href="/errors/403"),e.response.data.errors){Object.keys(e.response.data.errors).map((t=>e.response.data.errors[t])).forEach((e=>{s.A.error(e)}))}else console.log("err",e.response),s.A.error(e.response.data.message||e.response.data.msg||e.response.data.error);return r.A.dispatch((0,o.hR)(!1)),Promise.reject(e)})),e}},6640:(e,t,n)=>{n.d(t,{Ay:()=>o});var a=n(1735);const o={toISOLocal:function(e){var t=e=>("0"+e).slice(-2),n=e.getTimezoneOffset();return n=Math.abs(n),e.getFullYear()+"-"+t(e.getMonth()+1)+"-"+t(e.getDate())},pluralize:function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"s";return"".concat(e," ").concat(t).concat(1!==e?n:"")},fileToUrl:e=>new Promise(((t,n)=>{const a=new FileReader;a.onload=function(e){const n=e.target.result;t(n)},a.onerror=function(e){n(e.target.error)},a.readAsDataURL(e)})),imageValidExtensions:["image/jpeg","image/jpg","image/png","image/gif"],base64ToBlob:function(e,t){const n=window.atob(e),a=n.length,o=new Uint8Array(a);for(let r=0;r<a;++r)o[r]=n.charCodeAt(r);return new Blob([o],{type:t})},renderStatusStyle:e=>{let t;switch(e){case"success":t="bg-success-secondary text-success-primary ";break;case"warning":t="bg-warning-secondary text-warning-text ";break;case"error":t="bg-error-secondary text-error-primary ";break;case"info":t="bg-info-secondary text-info-primary ";break;default:t="bg-text-300 text-text-600 "}return t},toPersianDigitsPutCommas:(e,t)=>{const n="\u06f0".charCodeAt(0);!e&&(e="");let o=e.split(".");o[0].length>3&&(o[0]=o[0].replace(/\B(?=(\d{3})+(?!\d))/g,","));const r=o.join(".");if(t||"fa"===a.A.language){return String(r).replace(/[0-9]/g,(e=>String.fromCharCode(e.charCodeAt(0)+n-48)))}return r},fileToBlob:function(e){return new Blob([e],{type:e.type})},toPersianDigits:(e,t)=>{if(t||"fa"===a.A.language){const t="\u06f0".charCodeAt(0);return String(e).replace(/[0-9]/g,(e=>String.fromCharCode(e.charCodeAt(0)+t-48)))}return e},dateToTimestamp:e=>new Date(e).getTime(),renderChatTime:(e,t,n)=>{let o=Math.floor(Date.now());if(t)return n?new Date(e).toLocaleDateString("fa-IR"):new Date(e).toLocaleDateString("fa-IR")+" , "+new Date(e).toLocaleTimeString("fa-IR").slice(0,5);let r=Math.floor((o-e)/1e3);return r<60?a.A.t("fewSecondsAgo"):r<3600?Math.floor(r/60)+" "+a.A.t("minutesAgo"):r<86400?Math.floor(r/3600)+" "+a.A.t("hoursAgo"):r<604800?Math.floor(r/86400)+" "+a.A.t("daysAgo"):new Date(e).toLocaleDateString("fa-IR")},checkPermission:e=>{var t;let n=null===(t=JSON.parse(localStorage.getItem("nipa_user")||"{}"))||void 0===t?void 0:t.permissions;return!(null===n||void 0===n||!n.find((t=>t.slug===e)))},convetToEnglishDigitsRemoveCommas:e=>{const t="\u06f0".charCodeAt(0);return String(e).replace(/[\u06f0-\u06f9]/g,(e=>String.fromCharCode(e.charCodeAt(0)-t+48)))}}},1744:(e,t,n)=>{n.d(t,{A:()=>o});n(5043);var a=n(579);const o=()=>(0,a.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFEAAAAnCAYAAAB39KTqAAAFVElEQVR42u3aa4iUVRzH8TPj6JKlNXl5oZUwFNK+CG27YFepsexCbOhYKlkYDIWJZeizSiaW5S5RL7rZQneycCDJxNWaUotdstwEo0UrNspLWtGokJfc3fn3Jc6Lwx/nmYd55pndwBef3WHOwDC/+T/nf55zxoydvtaEFEPcMv2sAR4yMFETkf9UI8AEzACRgyA/0EMcjflYg1EwGIRr8RRex6tYjJEwNVQY6CFegBwOowMPwOB6bEURorwLUyMZiNU80EIchmch2K3mmyb8AynhEEyNNEOs7EAKcQr2QbAAMRgksA5iFR3i6IGpkU6IlYKJQAppq2yIcaxCL/bjStVMFtmxIvpQLBHmDzCOK7ABO/E5Flbxw4lViHq6sHJ+IQ7BhxB8gzFqPOsE1os+VZHimANjLYEoPZgJE1LW/XAwEchDHIVSIQ7GWgi+RJ0av9mZA3tR9AnwYwxBHPMgJWyACakVYnkRBDgIzUEr0YNgF0apsTHO/NiHHp+5cDfOg8G9OOkT4vdIVHE+TEcQYtypeM9Kni7EWyE4jBEwiDkdepdTcX0+AbbjXBhMhZTRhcEwIYgjGUGIsSDdeZjzbc6ArsB2t3GoMMXxnlOBt+EIpIwtMCGkIVY3TK3oECfjFIpYBGNdhx8hVlER6288AmPNxAlIAIur0VRqdKeSQt7K6hDvV83hLeTQAylTfVtQ73T2ZvRCAjiE0TA4u8JNDC/KpmLFoN8rr0Oc5gSlFS1RtqPRaQpjsRmCoCZhKFbgADowvJJNB8ur4oLaP0ToEBNYAymjiHbMVh11Nn5XVeunF/dhJPaosaUh1m9eFRfUnQgeolWHJWjHTvyBvfgObViMCTCOqfgMYgUNsRHj8BdEWYd4rUPUIVk6xGa/xXYcunyTOAtGSeAWbCxVrT5hHsVkjMcBCLSWfqzEHMSRUiF2l5oTG7EeI2B8XIoXsQdSgX2ot+9z1Od1d4cIsRWmEjoky3NCzKixVjfEhyH4GS3I4kHMxzK8iQ70+DUdn+rrwTuoQ726hLU/kQgRot86Mem+1soj7a43lQKyaELBHdNLnOGQChWh/+vqm+LcEfnd/p3C1aEvQRuK0qBC0LrVeDmF0y22N4UMUTuOlTgHdVgF8dGHeWHXiVYnknq8yjI6xBgm4lAFwekQj2E1zofBOHRByvDC7iUq3epORuuEBB3Xl7ffznY9tkIqsB+v4BJ1dHAY4uMkZsHgwrBbYQEUkHbCb4UOrNk9frWakEUyyPFAAhlsC1iR32IhEk4Xm4NfIX5swDdhPHbgIEbBVCAZoLpyTgiaZ6XC7OJoMVyOWWjCcjyBJ3EPbsBFajN3BjogAXyKFKbhGAR7Qx6xJpGDrrwc0pFvhVlxTMNQmIAuxuPYjaDz6TOIo0U9vwwxmJBSPpWVRNpqiOq07yUcRBtW4jHrUSywj5/HGnShBxLQ15iAwfhCjf1Ugy2sVohPJ69aiEORh1TRDkyHwWX4DaLcGPV5tA+vWiFqy3EcEkI77oKxWkossOfWOMBCTUK0JuLtoOtH6yBeU5V1B36BQFsBE6G8DkwHq+bNNDzkVdg5NPiH6C+JO/EcNmOT9QnW4wO8gEa1oXoV2iDQTuAhmIhlIcg76z61JrTzpQ3Nh+cXYjXFbHjvQ0rYqyq1FtLI66ai7qnLyYQO0TmEn4/bMQnjMQHT8TS2l9lgeBnJ/gzPyiNpx/XznpJRl3yoEGOYi69wBBJQF1bjGpgayaC7RFPxoHd4UtE0Fn+jner7CNuwGW3YiDewFFMxCKbGCtCXrofkQPml7P9BCmkr+sN7/pxRmTMhVtO/mVQuuTrjJykAAAAASUVORK5CYII=",alt:""})},5439:(e,t,n)=>{n.d(t,{A:()=>p});n(5043);var a=n(673),o=n(8734),r=n(2050),s=n(344),i=n(6227),l=n(378),c=n(6640),d=n(579);function p(e){var t,n,p;let{items:m,open:u,handleClose:x,anchorEl:g,profileInfo:h}=e;const f=JSON.parse(localStorage.getItem("nipa_user")||"");return(0,s.A)("(max-width:767px)")?(0,d.jsx)(i.A,{open:u,onClose:x,fullWidth:!0,children:"hello"}):(0,d.jsxs)(l.A,{id:"demo-positioned-menu","aria-labelledby":"demo-positioned-button",anchorEl:g,open:u,onClose:x,sx:{"& .MuiPaper-root":{width:h?"280px":"190px",border:"1px solid #e8e8e8",boxShadow:"none",borderRadius:"8px !important",marginTop:1}},anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},children:[h&&(0,d.jsx)(a.A,{sx:{backgroundColor:"white !important",padding:"24px 25px",borderBottom:"1px solid #ededed","&:hover":{backgroundColor:"#fff !important"},"& span":{fontSize:"14px !important",color:"#000"},"& svg":{color:"#7f7f7f !important"}},children:(0,d.jsxs)("div",{className:"flex w-full gap-x-[10px] items-center justify-start",children:[(0,d.jsx)("div",{className:"bg-primary-main/40 border border-text-300 w-[53px] h-[53px] overflow-hidden rounded-full flex items-center justify-center",children:f.avatar?(0,d.jsx)("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfm8UnQUb93iMa_J1a9GuKRJ1LWIzTD8dxrA&usqp=CAU",alt:"avatar",className:"w-full h-full fit-cover rounded-full"}):(0,d.jsx)("p",{className:"text-[20px] font-bold",children:null===(t=f.name)||void 0===t||null===(n=t.split(""))||void 0===n||null===(p=n[0])||void 0===p?void 0:p.toUpperCase()})}),(0,d.jsxs)("div",{children:[(0,d.jsxs)("p",{className:"text-text-800",children:[f.name," ",f.last_name]}),(0,d.jsx)("p",{className:"text-text-500 text-[14px] mt-1",children:c.Ay.toPersianDigits(f.mobile)})]})]})}),m.map(((e,t)=>(0,d.jsxs)(a.A,{disabled:e.disabled,sx:{padding:h?"12px 25px":"6px 16px","&:hover":{backgroundColor:"#e9edf3"},"& span":{fontSize:"14px !important",color:"#000"}},onClick:e.onClick,children:[(0,d.jsx)(r.A,{className:h?"svg:!text-text-700":"",children:e.icon}),(0,d.jsx)(o.A,{className:h?"text-text-700":"",children:e.text})]},t)))]})}},7838:(e,t,n)=>{n.r(t),n.d(t,{default:()=>D});var a=n(5043),o=n(3216),r=n(7281),s=n(1802),i=n(5591),l=n(5961),c=n(8159),d=n(1483),p=n(9818),m=n(6041),u=n(7311),x=n(5439),g=n(7417),h=n(4117),f=n(1906),v=n(579);const A=()=>{var e,t,n;const A=(0,u.j)(),j=(0,u.G)((e=>e.app.collapseMenu)),w=(0,u.G)((e=>e.app.openMenu)),b=JSON.parse(localStorage.getItem("nipa_user")||""),{i18n:y}=(0,h.Bd)(),C=(0,a.useRef)(null),N=(0,o.Zp)(),[B,E]=(0,a.useState)(!1);(0,a.useEffect)((()=>(R(),document.addEventListener("resize",R),()=>{document.removeEventListener("resize",R)})),[]);const R=()=>{window.innerWidth<767?A((0,m.WG)(!1)):A((0,m.WG)(!0))};return(0,v.jsxs)("div",{className:"md:px-6 print:hidden w-full h-[80px] bg-white flex items-center justify-between pe-9 sticky top-0 z-50",children:[(0,v.jsxs)("div",{children:[(0,v.jsx)(r.A,{onClick:()=>{console.log("collapse menu"),A((0,m.J3)(!j))},className:"ltr:rotate-180 ".concat(j&&"rtl:rotate-180 ltr:rotate-0"," md:hidden")}),(0,v.jsx)(s.A,{onClick:()=>{A((0,m.WG)(!w))},className:"md:block hidden cursor-pointer"})]}),(0,v.jsxs)("div",{className:"flex md:items-center",children:[(0,v.jsx)(f.A,{className:"!rounded-full w-[60px] h-[60px] !p-0 md:w-11 md:!max-w-[44px] md:!min-w-[44px] md:h-11",children:(0,v.jsx)("div",{className:"rounded-full svg:text-text-800 !border !border-text-300 flex items-center justify-center w-full h-full",children:(0,v.jsx)(i.A,{className:"md:w-6 md:h-6"})})}),(0,v.jsxs)("div",{ref:C,onClick:()=>E(!0),className:"flex items-center pe-2 ps-4 cursor-pointer h-[60px] rounded-[30px] border border-text-300 ms-6\n          md:p-0 md:justify-center md:w-11 md:h-11\n          ",children:[(0,v.jsx)("div",{className:"bg-primary-main/40 border border-text-300 w-[46px] h-[46px] \n          overflow-hidden rounded-full flex items-center justify-center\n          md:w-11 md:h-11 md:!min-w-[44px]\n          ",children:b.avatar?(0,v.jsx)("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfm8UnQUb93iMa_J1a9GuKRJ1LWIzTD8dxrA&usqp=CAU",alt:"avatar",className:"w-full h-full fit-cover rounded-full"}):(0,v.jsx)("p",{className:"text-[20px] font-bold md:text-[16px]",children:null===(e=b.name)||void 0===e||null===(t=e.split(""))||void 0===t||null===(n=t[0])||void 0===n?void 0:n.toUpperCase()})}),(0,v.jsx)("p",{className:"mx-[10px] md:hidden",children:b.name?b.name+" "+b.last_name:b.mobile}),(0,v.jsx)(l.A,{className:"md:hidden"})]}),(0,v.jsx)(x.A,{anchorEl:C.current,open:B,profileInfo:!0,handleClose:()=>{E(!1)},items:[{icon:(0,v.jsx)(c.A,{}),text:"\u0648\u06cc\u0631\u0627\u06cc\u0634 \u067e\u0631\u0648\u0641\u0627\u06cc\u0644",onClick:()=>{E(!1),setTimeout((()=>{N("/profile")}),10)}},{icon:(0,v.jsx)(d.A,{}),text:"\u062a\u063a\u06cc\u06cc\u0631 \u0632\u0628\u0627\u0646",onClick:()=>{var e;e="fa"===y.language?"en":"fa",y.changeLanguage(e),document.body.dir=y.dir(),localStorage.setItem("nipa-lang",e),window.location.reload(),E(!1)}},{icon:(0,v.jsx)(p.A,{}),text:"\u062e\u0631\u0648\u062c",onClick:()=>{A((0,g.ri)())}}]})]})]})};var j=n(4672),w=n(9701),b=n(4837),y=n(3177),C=n(6122),N=n(2251),B=n(8229),E=n(6624),R=n(9485),k=n(377),I=n(1744),L=n(5475);const T=e=>{let{icon:t,title:n,active:a,route:o,collapseMenu:r}=e;return(0,v.jsxs)("div",{className:"flex w-full",children:[(0,v.jsx)("div",{className:"w-[4px] h-[46px] rtl:rounded-l-[8px] ltr:rounded-r-[8px] me-4 ".concat(a?"bg-primary-main":"")}),(0,v.jsx)(L.N_,{to:o,className:"w-full mb-[17px] px-[10px] py-[11px] flex svg:text-text-500 svg:hover:text-primary-main hover:bg-primary-nav rounded-[8px] text-text-800\n        ".concat(r&&"flex items-center justify-center"," hover:text-primary-main hover:font-bold ").concat(a?"bg-primary-nav svg:text-primary-main !text-primary-main font-bold":""),children:(0,v.jsxs)("div",{className:"nav-item flex",children:[(0,v.jsx)("div",{className:"nav-item-icon ".concat(r?"me-0":"me-4"),children:t}),!r&&(0,v.jsx)("p",{children:n})]})})]})};var U=n(6640);const O=()=>{const{t:e}=(0,h.Bd)("nav"),{pathname:t}=(0,o.zy)(),n=(0,u.G)((e=>e.app.collapseMenu));console.log("pathnme",t);const a=[{icon:(0,v.jsx)(j.A,{variant:"/dashboard"===t?"Bold":"Linear"}),title:e("dashboard"),route:"/dashboard",permission:"manage-dashboard"},{icon:(0,v.jsx)(w.A,{variant:"/orders"===t?"Bold":"Linear"}),title:e("orders"),route:"/orders"},{icon:(0,v.jsx)(b.A,{variant:"/finance"===t?"Bold":"Linear"}),title:e("finance"),route:"/finance"},{icon:(0,v.jsx)(y.A,{variant:"/maps"===t?"Bold":"Linear"}),title:e("maps"),route:"/maps",permission:"manage-maps"},{icon:(0,v.jsx)(C.A,{variant:"/produce"===t?"Bold":"Linear"}),title:e("production"),route:"/produce",permission:"manage-production"},{icon:(0,v.jsx)(N.A,{variant:"/install"===t?"Bold":"Linear"}),title:e("measurement_and_installation"),route:"/install",permission:"manage-install"},{icon:(0,v.jsx)(B.A,{variant:"/send"===t?"Bold":"Linear"}),title:e("shipping"),route:"/send",permission:"manage-shipping"},{icon:(0,v.jsx)(E.A,{variant:t.includes("products")?"Bold":"Linear"}),title:e("products"),route:"/products",permission:"manage-products"},{icon:(0,v.jsx)(R.A,{variant:t.includes("basicDatas")?"Bold":"Linear"}),title:e("basicDatas"),route:"/basicDatas",permission:"manage-basic-data"},{icon:(0,v.jsx)(d.A,{variant:t.includes("translations")?"Bold":"Linear"}),title:e("translations"),route:"/translations",permission:"manage-translation"},{icon:(0,v.jsx)(k.A,{variant:t.includes("wallet")?"Bold":"Linear"}),title:e("walletAndTransactions"),route:"/wallet"},{icon:(0,v.jsx)(c.A,{variant:t.includes("permissions")?"Bold":"Linear"}),title:e("permissions"),route:"/permissions",permission:"manage-permissions"}];return(0,v.jsx)("div",{className:"flex flex-col ".concat(n?"w-[84px]":"w-[280px]"," h-screen bg-white\n      "),children:(0,v.jsxs)("div",{className:"flex flex-col flex-1 h-0",children:[(0,v.jsx)("div",{className:"flex items-center justify-center h-[80px] px-4 bg-gray-800",children:(0,v.jsx)(I.A,{})}),(0,v.jsx)("nav",{className:"flex-1 pe-5 py-[13px] ps-0 bg-gray-800 md:h-[calc(100%-80px)] md:overflow-auto",children:a.map(((e,a)=>(e.permission&&U.Ay.checkPermission(e.permission)||!e.permission)&&(0,v.jsx)(T,{collapseMenu:n,route:e.route,icon:e.icon,title:e.title,active:t.includes(e.route)},a)))})]})})};var M=n(344),S=n(2220);const D=()=>{const e=(0,u.G)((e=>e.app.collapseMenu)),t=(0,u.G)((e=>e.app.openMenu)),n=(0,M.A)("(max-width:767px)"),a=(0,u.j)();return(0,v.jsxs)("div",{className:"mx-auto flex h-[100vh] overflow-auto relative  bg-primary-100 print:overflow-visible",children:[(0,v.jsx)("div",{className:"print:hidden h-full sticky top-0\n      md:fixed md:z-[999] transition-all\n      ".concat(t?"md:right-0":"md:right-[-100%]","\n      "),children:n?(0,v.jsx)(S.A,{open:t,className:"!justify-start",onClick:()=>{a((0,m.WG)(!1))},children:(0,v.jsx)(O,{})}):(0,v.jsx)(O,{})}),(0,v.jsxs)("div",{className:"w-full min-h-screen h-max\n       ".concat(e?"max-w-[calc(100vw-84px)]":"max-w-[calc(100vw-280px)]"," print:!max-w-[100vw]\n       md:max-w-[100vw] \n       "),children:[(0,v.jsx)(A,{}),(0,v.jsx)("div",{className:"p-[31px] print:p-10",children:(0,v.jsx)(o.sv,{})})]})]})}}}]);
//# sourceMappingURL=7838.b7969026.chunk.js.map