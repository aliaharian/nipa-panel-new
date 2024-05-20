"use strict";(self.webpackChunknipa_panel_new=self.webpackChunknipa_panel_new||[]).push([[8053],{7311:(e,t,l)=>{l.d(t,{G:()=>o,j:()=>a});var s=l(9456);const a=()=>(0,s.wA)(),o=s.d4},7099:(e,t,l)=>{l.d(t,{DD:()=>u,JK:()=>o,Jm:()=>c,Nb:()=>i,Tu:()=>r,cz:()=>n,vc:()=>d,x7:()=>p});var s=l(8875);const a=l(8870).A.actions,o=()=>async(e,t)=>{const l=await s.A.productsList();e(a.productsList(l))},i=e=>async(t,l)=>{const o=await s.A.productStepsList(e);t(a.productStepsList(o))},n=e=>async(t,l)=>{if(0===e)return t(a.productStepInfo(null));const o=await s.A.productStepInfo(e);t(a.productStepInfo(o))},r=e=>async(t,l)=>{const o=await s.A.saveProduct(e);t(a.saveProduct(o))},d=(e,t)=>async(l,i)=>{const n=await s.A.updateProduct(e,t);l(a.updateProduct(n)),l(o())},c=e=>async(t,l)=>{t(a.setSaveSuccess(e))},u=e=>async(t,l)=>{const o=await s.A.deleteProduct(e);t(a.deleteProduct(o))},p=e=>async(t,l)=>{t(a.setDeleteSuccess(e))}},8875:(e,t,l)=>{l.d(t,{A:()=>a});var s=l(670);const a={productsList:async function(){var e;let t=await(null===(e=(0,s.A)())||void 0===e?void 0:e.get("/products"));return null===t||void 0===t?void 0:t.data},saveProduct:async function(e){var t,l;let a=await(null===(t=(0,s.A)())||void 0===t?void 0:t.post("/products",{name:e.name,code:e.code,custom:e.custom,price:e.price,count_type:e.count_type,status:e.status,description:e.description,images:null===(l=e.images)||void 0===l?void 0:l.map((e=>e.hashCode))}));return null===a||void 0===a?void 0:a.data},deleteProduct:async function(e){var t;let l=await(null===(t=(0,s.A)())||void 0===t?void 0:t.delete("/products/".concat(e)));return null===l||void 0===l?void 0:l.data},productStepsList:async function(e){var t;let l=await(null===(t=(0,s.A)())||void 0===t?void 0:t.get("/product/".concat(e,"/steps")));return null===l||void 0===l?void 0:l.data},productStepInfo:async function(e){var t;let l=await(null===(t=(0,s.A)())||void 0===t?void 0:t.get("/productSteps/".concat(e)));return null===l||void 0===l?void 0:l.data},setProductStepRoles:async function(e,t){var l;let a=await(null===(l=(0,s.A)())||void 0===l?void 0:l.post("/product/steps/".concat(e,"/setRoles"),{roles:t.join(",")}));return null===a||void 0===a?void 0:a.data},addProductConditions:async function(e){var t;let l=await(null===(t=(0,s.A)())||void 0===t?void 0:t.post("/product/steps/conditions",{step_id:e.stepId,field_id:e.fieldId,option_id:e.optionId,next_step_id:e.nextStepId}));return null===l||void 0===l?void 0:l.data},getProduct:async function(e){var t;let l=await(null===(t=(0,s.A)())||void 0===t?void 0:t.get("/products/".concat(e)));return null===l||void 0===l?void 0:l.data},updateProduct:async function(e,t){var l,a;let o=await(null===(l=(0,s.A)())||void 0===l?void 0:l.put("/products/".concat(e),{name:t.name,code:t.code,custom:t.custom,count_type:t.count_type,price:t.price,status:t.status,description:t.description,images:null===(a=t.images)||void 0===a?void 0:a.map((e=>e.hashCode))}));return null===o||void 0===o?void 0:o.data}}},8962:(e,t,l)=>{l.d(t,{A:()=>i});var s=l(5043),a=l(6839),o=l(579);const i=e=>{var t,l,i,n;let{name:r,label:d,formik:c,className:u,inputActions:p}=e;const x=(0,s.useRef)(null);return(0,o.jsxs)("div",{className:"flex flex-col w-full items-start justify-start ".concat(u),children:[(0,o.jsxs)("div",{className:"text-sm mb-2 flex justify-between w-full",children:[(0,o.jsx)("label",{htmlFor:r,children:d}),null===p||void 0===p?void 0:p()]}),(0,o.jsx)(a.K,{onInit:(e,t)=>x.current=t,id:r,value:null===(t=c.values)||void 0===t?void 0:t[r],onEditorChange:e=>{c.handleChange({target:{name:r,value:e}})},apiKey:"ajj87dt2tkk9iay286x5uxdjdb685g4spq516y5lacgqlerz",init:{height:150,width:"100%",menubar:!1,toolbar:"undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat",content_style:"body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"}}),(null===(l=c.errors)||void 0===l?void 0:l[r])&&(null===(i=c.touched)||void 0===i?void 0:i[r])&&(0,o.jsx)("p",{className:"text-error-primary text-[10px] mt-1",children:null===(n=c.errors)||void 0===n?void 0:n[r]})]})}},2280:(e,t,l)=>{l.d(t,{A:()=>j});var s=l(5043),a=l(6525),o=l(3397),i=l(1234),n=l(9600),r=l(4117),d=l(6640),c=l(1637),u=l(579);const p=e=>{let{src:t,badge:l,handleDelete:a,handleFullscreen:p,handleViewImage:x,hashCode:m}=e;const[h,v]=(0,s.useState)(),[f,j]=(0,s.useState)(!1),{t:g}=(0,r.Bd)(["common","validations"]);return(0,s.useEffect)((()=>{if(t.hash_code){v("https://apidemo.nipaco.ir/api/v1/files/"+t.hash_code)}else d.Ay.fileToUrl(t).then((e=>{v(e)}))}),[]),(0,s.useEffect)((()=>{var e;j((null===t||void 0===t||null===(e=t.type)||void 0===e?void 0:e.search("image"))>-1)}),[t]),(0,u.jsx)("div",{className:"group/item w-full h-full rounded-[6px] overflow-hidden relative",children:(0,u.jsxs)("div",{className:"w-full h-full relative",children:[l&&f&&(0,u.jsx)("p",{className:"right-[8px] top-[8px] text-[10px] inline-block absolute py-[5px] px-[8px] bg-secondary-500 text-white rounded-[4px]",children:l}),f?(0,u.jsx)("img",{src:h,alt:"",className:"w-full h-full object-cover rounded-[6px]"}):(0,u.jsxs)("div",{className:"w-full h-full flex items-center justify-center flex-col text-primary-main",children:[(0,u.jsx)(o.A,{className:"w-8 h-8"}),(0,u.jsx)("p",{className:"mt-2",children:t.name})]}),(0,u.jsxs)("div",{className:"absolute top-0 left-0 bg-black-60 w-full h-full flex grid grid-rows-3 ".concat(m?"opacity-0":"opacity-100"," pointer-events-none group-hover/item:opacity-100 group-hover/item:pointer-events-auto transition-all"),children:[(0,u.jsx)("div",{}),(0,u.jsx)("div",{children:m?x&&(0,u.jsx)("p",{onClick:x,className:"cursor-pointer text-[10px] inline-block py-[5px] px-[8px] bg-secondary-500 text-white rounded-[4px]",children:g(f?"viewImage":"viewFile")}):(0,u.jsx)(c.A,{})}),(0,u.jsxs)("div",{className:"w-full flex items-center justify-between px-[10px] py-[12px] text-white",children:[m&&p&&(0,u.jsx)("div",{className:"cursor-pointer",onClick:p,children:f&&(0,u.jsx)(i.A,{})}),m&&a&&(0,u.jsx)("div",{className:"cursor-pointer",onClick:a,children:(0,u.jsx)(n.A,{})})]})]})]})})};var x=l(9218);const m=e=>{let{url:t}=e;return(0,u.jsxs)("div",{id:"image-fullscreen",className:"fixed w-[100vw] h-[100vh] bg-black-90 flex flex-col items-center justify-center left-0 top-0 z-[999]",children:[(0,u.jsx)("div",{className:"w-full h-[60px] px-16 pt-8 flex items-center text-white",children:(0,u.jsx)(x.A,{onClick:()=>{document.body.removeChild(document.getElementById("image-fullscreen"))},className:"w-[40px] h-[40px] cursor-pointer"})}),(0,u.jsx)("div",{className:"w-full h-[calc(100%-60px)] flex items-center justify-center pb-10",children:(0,u.jsx)("img",{src:t,className:"w-full max-w-[70vw] h-full object-contain",alt:""})})]})};var h=l(4391),v=l(670),f=l(5424);const j=e=>{var t,l,o,i,n;let{name:c,label:x,formik:j,placeholder:g,className:b,imageOnly:y,setPending:w,mock:A,noBadge:N}=e;const{t:C}=(0,r.Bd)(["common","validations"]),k=(0,s.useRef)(null),[S,P]=(0,s.useState)([]),[_,I]=(0,s.useState)(!1),T=async(e,t,l)=>{var s=new FormData;s.append("file",e);try{var a,o,i;let e=await(null===(a=(0,v.A)())||void 0===a?void 0:a.post("/files",s,{headers:{"Content-Type":"multipart/form-data"}}));if(null!==e&&void 0!==e&&null!==(o=e.data)&&void 0!==o&&null!==(i=o.file)&&void 0!==i&&i.hash_code){const s=[...l],a=s.findIndex((e=>e.name===t));-1!==a&&(s[a]={...s[a],hashCode:e.data.file.hash_code},P([...s]))}I(!1)}catch(n){const e=[...l],s=e.findIndex((e=>e.name===t));-1!==s&&(e.splice(s,1),P([...e])),f.A.error(C("validations:uploadError")),I(!1)}};var E;((0,s.useEffect)((()=>{j.setFieldValue(c,S)}),[S]),(null===(t=j.values)||void 0===t||null===(l=t[c])||void 0===l?void 0:l.length)>0&&0==S.length)&&P((null===(E=j.values)||void 0===E?void 0:E[c])||[]);return(0,s.useEffect)((()=>{w&&w(_)}),[_]),(0,u.jsxs)("div",{className:"flex flex-col w-full items-start justify-start ".concat(b),children:[(0,u.jsx)("div",{className:"text-sm mb-2 flex justify-between w-full",children:(0,u.jsx)("label",{className:"font-normal",htmlFor:c,children:x})}),(0,u.jsxs)("div",{className:"bg-text-300 w-full p-[14px] grid grid-cols-5 gap-x-5 gap-y-5",children:[S.length<5&&(0,u.jsx)("div",{className:"bg-white w-full h-min rounded-[6px]",children:(0,u.jsx)(a.A,{disabled:_,name:"uploadFile",imageOnly:y,fileRef:k,placeholder:_?C("pleaseWait")||"":g||"",formik:{handleChange:e=>{A||((async e=>{const t=[...S],l=c+"_"+Math.floor(100*Math.random());t.push({name:l,value:e.target.value,hashCode:null}),P([...t]),I(!0),T(e.target.value,l,t)})(e),k.current&&(k.current.value=""))}}})}),S.map(((e,t)=>(0,u.jsx)("div",{className:"bg-white rounded-[6px] w-full h-[144px]",children:(0,u.jsx)(p,{src:(null===e||void 0===e?void 0:e.value)||(null===e||void 0===e?void 0:e.file),hashCode:e.hashCode,handleDelete:()=>{(async(e,t)=>{let l=[...S];try{var s;await(null===(s=(0,v.A)())||void 0===s?void 0:s.delete("/files/".concat(e.hashCode))),l.splice(t,1),P([...l]),f.A.success(C("validations:imageDeleteSuccess"))}catch(a){f.A.error(C("validations:imageDeleteError"))}})(e,t)},handleFullscreen:()=>{(e=>{d.Ay.imageValidExtensions.includes(e.type)&&d.Ay.fileToUrl(e).then((e=>{const t=document.createElement("div");t.setAttribute("id","image-fullscreen"),document.body.appendChild(t),h.createRoot(t).render((0,u.jsx)(m,{url:e}))}))})(e.value)},handleViewImage:()=>{(e=>{const t=d.Ay.fileToBlob(e),l=URL.createObjectURL(t);window.open(l,"_blank")})(e.value)},badge:0!==t||N?"":C("mainImage")||""})},t)))]}),(null===(o=j.errors)||void 0===o?void 0:o[c])&&(null===(i=j.touched)||void 0===i?void 0:i[c])&&(0,u.jsx)("p",{className:"text-error-primary text-[10px] mt-1",children:null===(n=j.errors)||void 0===n?void 0:n[c]})]})}},5439:(e,t,l)=>{l.d(t,{A:()=>u});l(5043);var s=l(673),a=l(8734),o=l(2050),i=l(344),n=l(6227),r=l(378),d=l(6640),c=l(579);function u(e){var t,l,u;let{items:p,open:x,handleClose:m,anchorEl:h,profileInfo:v}=e;const f=JSON.parse(localStorage.getItem("nipa_user")||"");return(0,i.A)("(max-width:767px)")?(0,c.jsx)(n.A,{open:x,onClose:m,fullWidth:!0,children:"hello"}):(0,c.jsxs)(r.A,{id:"demo-positioned-menu","aria-labelledby":"demo-positioned-button",anchorEl:h,open:x,onClose:m,sx:{"& .MuiPaper-root":{width:v?"280px":"190px",border:"1px solid #e8e8e8",boxShadow:"none",borderRadius:"8px !important",marginTop:1}},anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},children:[v&&(0,c.jsx)(s.A,{sx:{backgroundColor:"white !important",padding:"24px 25px",borderBottom:"1px solid #ededed","&:hover":{backgroundColor:"#fff !important"},"& span":{fontSize:"14px !important",color:"#000"},"& svg":{color:"#7f7f7f !important"}},children:(0,c.jsxs)("div",{className:"flex w-full gap-x-[10px] items-center justify-start",children:[(0,c.jsx)("div",{className:"bg-primary-main/40 border border-text-300 w-[53px] h-[53px] overflow-hidden rounded-full flex items-center justify-center",children:f.avatar?(0,c.jsx)("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfm8UnQUb93iMa_J1a9GuKRJ1LWIzTD8dxrA&usqp=CAU",alt:"avatar",className:"w-full h-full fit-cover rounded-full"}):(0,c.jsx)("p",{className:"text-[20px] font-bold",children:null===(t=f.name)||void 0===t||null===(l=t.split(""))||void 0===l||null===(u=l[0])||void 0===u?void 0:u.toUpperCase()})}),(0,c.jsxs)("div",{children:[(0,c.jsxs)("p",{className:"text-text-800",children:[f.name," ",f.last_name]}),(0,c.jsx)("p",{className:"text-text-500 text-[14px] mt-1",children:d.Ay.toPersianDigits(f.mobile)})]})]})}),p.map(((e,t)=>(0,c.jsxs)(s.A,{disabled:e.disabled,sx:{padding:v?"12px 25px":"6px 16px","&:hover":{backgroundColor:"#e9edf3"},"& span":{fontSize:"14px !important",color:"#000"}},onClick:e.onClick,children:[(0,c.jsx)(o.A,{className:v?"svg:!text-text-700":"",children:e.icon}),(0,c.jsx)(a.A,{className:v?"text-text-700":"",children:e.text})]},t)))]})}},8955:(e,t,l)=>{l.d(t,{A:()=>d});l(5043);var s=l(2240),a=l(9600),o=l(4117),i=l(7578),n=l(1637),r=l(579);const d=e=>{let{open:t,onClose:l,title:d,handleConfirm:c,loading:u}=e;const{t:p}=(0,o.Bd)(["common","validations"]);return(0,r.jsxs)(s.A,{open:t,onClose:l,children:[(0,r.jsx)("div",{className:"w-14 h-14 mb-[10px] bg-primary-250 rounded-full items-center justify-center flex text-primary-main",children:(0,r.jsx)(a.A,{variant:"Bold"})}),(0,r.jsx)("div",{children:(0,r.jsx)("p",{className:"text-center text-[16px] font-semibold mb-[35px]",children:d})}),(0,r.jsxs)("div",{className:"flex items-center justify-between w-full max-w-[236px]",children:[(0,r.jsx)("div",{className:"w-[102px]",children:(0,r.jsx)(i.A,{disabled:u,text:u?(0,r.jsx)(n.A,{color:"inherit",size:24}):p("yes"),onClick:u?()=>{}:c})}),(0,r.jsx)("div",{className:"w-[102px]",children:(0,r.jsx)(i.A,{disabled:u,text:p("no"),onClick:u?()=>{}:l,bordered:!0})})]})]})}},2240:(e,t,l)=>{l.d(t,{A:()=>d});var s=l(4836),a=l(6227),o=l(1503),i=l(5043),n=l(579);const r=i.forwardRef((function(e,t){return(0,n.jsx)(s.A,{direction:"up",ref:t,...e})})),d=e=>{let{open:t,onClose:l,children:s}=e;return(0,n.jsx)(a.A,{open:t,TransitionComponent:r,keepMounted:!0,onClose:l,"aria-describedby":"alert-dialog-slide-description",sx:{"& .MuiDialog-paper":{width:"452px"}},children:(0,n.jsx)(o.A,{className:"flex items-center justify-center flex-col",children:s})})}},1968:(e,t,l)=>{l.d(t,{A:()=>d});var s=l(9218),a=l(5043),o=l(579);const i=e=>{let{children:t}=e;return(0,o.jsx)("div",{className:"h-[calc(100%-97px)] overflow-auto",children:t})},n=e=>{let{children:t}=e;return(0,o.jsx)("div",{children:t})},r=e=>{let{open:t,handleClose:l,children:r,headerIcon:d,headerText:c=""}=e;const[u,p]=(0,a.useState)(Math.floor(1e3*Math.random()));return(0,o.jsx)("div",{id:"dialog".concat(u),onClick:e=>{e.target.id==="dialog"+u&&(null===l||void 0===l||l())},className:"w-full h-full fixed bg-black-60 rtl:left-0 ltr:right-0 top-0 transition-all ".concat(t?"opacity-1 z-[999] delay-200":"pointer-events-none opacity-0 z-0 delay-300"),children:(0,o.jsxs)("div",{className:"h-full w-[60%] min-w-[900px] bg-white transition-all\t".concat(t?"translate-x-0 delay-300":"ltr:-translate-x-[100%] rtl:translate-x-[100%] delay-200"),children:[c&&(0,o.jsxs)("div",{className:"flex w-full px-8 py-6 items-center justify-between border-b border-text-300",children:[(0,o.jsxs)("div",{className:"flex items-center",children:[(0,o.jsx)("div",{className:"me-3 w-9 h-9 rounded-[12px] bg-primary-main flex items-center justify-center text-white",children:d}),(0,o.jsx)("p",{className:"text-[20px] leading-[20px] font-bold",children:c})]}),(0,o.jsx)("div",{className:"w-9 h-9",children:(0,o.jsx)("button",{onClick:l,className:"w-9 h-9",children:(0,o.jsx)(s.A,{className:"w-9 h-9"})})})]}),(0,o.jsx)("div",{className:"flex justify-between w-full flex-col h-[calc(100%-85px)]",children:a.Children.map(r,(e=>e.type===i?(0,o.jsx)(i,{children:e.props.children}):e.type===n?(0,o.jsx)(n,{children:e.props.children}):void 0))})]})})};r.Content=i,r.Footer=n;const d=r},6180:(e,t,l)=>{l.d(t,{A:()=>o});var s=l(8185),a=l(579);const o=()=>(0,a.jsxs)("div",{className:"grid",children:[(0,a.jsx)("div",{className:"w-full h-[71px] bg-text-200 border border-text-300 rounded-t-[4px] grid grid-cols-6 items-center justify-center px-4",children:Array.from(Array(5).keys()).map(((e,t)=>(0,a.jsx)(s.A,{variant:"rounded",width:"37px",height:18,animation:"wave"},t)))}),Array.from(Array(5).keys()).map(((e,t)=>(0,a.jsxs)("div",{className:"w-full h-[71px] border border-text-300 border-t-0 rounded-t-[4px] grid grid-cols-6 items-center justify-center px-4",children:[Array.from(Array(5).keys()).map(((e,t)=>(0,a.jsx)(s.A,{variant:"rounded",width:"45px",height:18,animation:"wave"},t))),(0,a.jsx)("div",{className:"w-[120px] flex items-cente justify-center",children:(0,a.jsx)("div",{className:"w-[92px] h-[38px] rounded-full border border-text-400 flex items-center justify-center",children:(0,a.jsx)(s.A,{variant:"rounded",width:"47px",height:14,animation:"wave"})})})]},t)))]})},7652:(e,t,l)=>{l.d(t,{A:()=>i});var s=l(8786),a=l(4117),o=l(579);const i=e=>{let{columns:t,data:l}=e;const{i18n:i}=(0,a.Bd)();return(0,o.jsx)(s.Ay,{direction:"ltr"===i.dir()?s.OP.LTR:s.OP.RTL,columns:t,data:l,className:"customTable",conditionalRowStyles:[{when:e=>"footer"===e.id,style:{backgroundColor:"rgba(247, 247, 247, 1)",borderTop:"2px solid #EDEDED","&:hover":{cursor:"pointer"}}}]})}},2314:(e,t,l)=>{l.d(t,{A:()=>d});var s=l(1237),a=l(5043),o=l(579);const i=e=>{let{text:t,onClick:l,icon:s,after:a,ref:i,simple:n=!1}=e;const r=()=>s?(0,o.jsx)("div",{className:"inline-block text-text-600",children:s}):(0,o.jsx)(o.Fragment,{});return(0,o.jsxs)("button",{ref:i,className:"".concat(n?"":"border border-text-400"," bg-transparent rounded-full text-text-900 w-full h-[38px] flex ltr:flex-row-reverse items-center justify-center hover:bg-text-4"),onClick:l,children:[!a&&r(),!n&&t,a&&r()]})};var n=l(5439),r=l(4117);const d=e=>{let{row:t,handleAction:l,items:d,simple:c=!1}=e;const u=(0,a.useRef)(null),{t:p}=(0,r.Bd)(),[x,m]=(0,a.useState)(!1);return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{className:"".concat(c?"w-[20px]":"w-[92px] pb-[5px]"),ref:u,children:[(0,o.jsx)(i,{after:!0,icon:(0,o.jsx)(s.A,{className:"rotate-90 pt-[5px]"}),text:p("action"),simple:c,onClick:()=>{console.log(t),m(!0)}}),(0,o.jsx)(n.A,{anchorEl:u.current,open:x,handleClose:()=>{m(!1)},items:d.map((e=>({...e,onClick:()=>((e,t)=>{m(!1),l&&l(e,t)})(t,e.name)})))})]})})}},8053:(e,t,l)=>{l.r(t),l.d(t,{default:()=>T});var s=l(208),a=l(152),o=l(9600),i=l(6421),n=l(5043),r=l(3232),d=l(7578),c=l(7652),u=l(2314),p=l(7311),x=l(4117),m=l(7099),h=l(1128),v=l(1968),f=l(9973),j=l(3516),g=l(2087),b=l(2280),y=l(8962),w=l(3033),A=l(5424),N=l(8875),C=l(5101),k=l(579);const S=e=>{let{open:t,handleClose:l,selectedProductId:s}=e;const{t:a}=(0,x.Bd)(["common","validations"]),o=(0,p.j)(),r=(0,p.G)((e=>e.products.saveSuccess)),[c,u]=(0,n.useState)();(0,n.useEffect)((()=>{!async function(){if(s){const e=await N.A.getProduct(s);u(e)}}()}),[s]);const[S,P]=(0,n.useState)(!1),_=w.Ik().shape({code:w.Yj().required(a("productCode.required",{ns:"validations"})||""),name:w.Yj().required(a("productName.required",{ns:"validations"})||""),description:w.Yj().required(a("productDescription.required",{ns:"validations"})||""),count_type:w.Yj().required(a("countType.required",{ns:"validations"})||""),price:w.Yj().when("custom",{is:0,then:w.Yj().required(a("productPrice.required",{ns:"validations"})||""),otherwise:w.Yj()})}),I=(0,j.Wx)({initialValues:{code:"",name:"",status:1,custom:1,description:"",price:"",count_type:"quantity",images:[]},validationSchema:_,onSubmit:e=>{o(s?(0,m.vc)(s,e):(0,m.Tu)(e))}}),T=()=>{l&&l(),u(void 0),I.resetForm()};return(0,n.useEffect)((()=>{r&&(T(),o((0,m.Jm)(!1)),A.A.success(a(s?"updateProductSuccess":"addProductSuccess")))}),[r]),console.log("formik",I),(0,n.useEffect)((()=>{!function(){var e,t,l,s;c&&(I.setFieldValue("code",c.code),I.setFieldValue("name",c.name),I.setFieldValue("status",c.status),I.setFieldValue("custom",c.custom),I.setFieldValue("count_type",c.count_type),I.setFieldValue("description",null===(e=c.details)||void 0===e||null===(t=e[0])||void 0===t?void 0:t.description),I.setFieldValue("price",(null===(l=c.details)||void 0===l||null===(s=l[0])||void 0===s?void 0:s.price)||""),I.setFieldValue("images",c.images))}()}),[c]),(0,k.jsxs)(v.A,{headerText:a("addProduct"),headerIcon:(0,k.jsx)(i.A,{}),open:t,handleClose:T,children:[(0,k.jsxs)(v.A.Content,{children:[s&&!c&&(0,k.jsx)(C.A,{}),(0,k.jsxs)("div",{className:"p-7 font-bold text-[18px]",children:[(0,k.jsx)("p",{className:"text-start",children:a("enterProductDetail")}),(0,k.jsxs)("form",{onSubmit:I.handleSubmit,className:"w-full",children:[(0,k.jsxs)("div",{className:"mt-7 w-full grid grid-cols-2 gap-x-5 gap-y-7",children:[(0,k.jsx)(f.A,{name:"code",label:a("productCode"),type:"text",placeholder:a("productCode.placeholder",{ns:"validations"}),formik:I}),(0,k.jsx)(f.A,{name:"name",label:a("productName"),type:"text",placeholder:a("productName.placeholder",{ns:"validations"}),formik:I}),(0,k.jsx)(g.A,{className:"group",name:"status",label:a("status"),options:[{label:(0,k.jsx)("p",{children:a("active")}),value:1},{label:(0,k.jsx)("p",{children:a("inactive")}),value:0}],placeholder:a("productStatus.placeholder",{ns:"validations"}),formik:I}),(0,k.jsx)(g.A,{className:"group",name:"custom",label:a("productType"),options:[{label:(0,k.jsx)("p",{children:a("custom")}),value:1},{label:(0,k.jsx)("p",{children:a("normal")}),value:0}],placeholder:a("productType.placeholder",{ns:"validations"}),formik:I})]}),(0,k.jsx)("div",{className:"mt-7 w-full grid grid-cols-1 gap-x-5 gap-y-7",children:(0,k.jsx)(g.A,{className:"group",name:"count_type",label:a("countType"),options:[{label:(0,k.jsx)("p",{children:a("quantity")}),value:"quantity"},{label:(0,k.jsx)("p",{children:a("m2")}),value:"m2"}],placeholder:a("countType.placeholder",{ns:"validations"}),formik:I})}),0==I.values.custom&&(0,k.jsx)("div",{className:"mt-7 w-full grid grid-cols-1 gap-x-5 gap-y-7",children:(0,k.jsx)(f.A,{name:"price",label:a("price"),type:"number",placeholder:a("productPrice.placeholder",{ns:"validations"}),formik:I})}),(0,k.jsx)("div",{className:"mt-7 w-full grid grid-cols-1 gap-x-5 gap-y-7",children:t&&(0,k.jsx)(b.A,{className:"group",name:"images",label:a("productImages"),placeholder:a("uploadNewImage"),imageOnly:!0,formik:I,setPending:P})}),(0,k.jsx)("div",{className:"mt-7 w-full grid grid-cols-1 gap-x-5 gap-y-7",children:(0,k.jsx)(y.A,{name:"description",label:a("description"),formik:I})})]})]})]}),(0,k.jsx)(v.A.Footer,{children:(0,k.jsxs)("div",{className:"py-[24px] border-t border-text-300 px-7 flex justify-between",children:[(0,k.jsx)("div",{className:"w-[126px]",children:(0,k.jsx)(d.A,{disabled:S,text:"\u0627\u0646\u0635\u0631\u0627\u0641",onClick:T,gray:!0})}),(0,k.jsx)("div",{className:"w-[207px]",children:(0,k.jsx)(d.A,{disabled:S,icon:s?(0,k.jsx)(h.A,{}):(0,k.jsx)(i.A,{}),text:a(s?"editProduct":"addProduct"),onClick:()=>{I.handleSubmit()}})})]})})]})};var P=l(8955),_=l(3216),I=l(6180);const T=()=>{const e=(0,p.G)((e=>e.products.products)),[t,l]=(0,n.useState)([]),[h,v]=(0,n.useState)(!1),f=(0,_.Zp)(),j=(0,p.G)((e=>e.products.deleteSuccess)),{t:g}=(0,x.Bd)("common"),[b,y]=(0,n.useState)(null),[w,N]=(0,n.useState)(!1),[C,T]=(0,n.useState)(!1),E=(0,p.j)();(0,n.useEffect)((()=>{E((0,m.JK)())}),[]),(0,n.useEffect)((()=>{if(e){console.log("data123",e);let t=[{name:g("productCode"),selector:e=>e.code,sortable:!0},{name:g("title"),selector:e=>e.name,sortable:!0},{name:g("productType"),selector:e=>e.custom?g("custom"):g("normal"),sortable:!0},{name:g("countType"),selector:e=>g(e.count_type),sortable:!0},{name:g("status"),selector:e=>g("active"),sortable:!0}];t.push({allowOverflow:!0,button:!0,width:"120px",cell:e=>(0,k.jsx)(u.A,{items:[{icon:(0,k.jsx)(s.A,{variant:"Bold"}),text:g("edit"),name:"edit"},e.custom&&{icon:(0,k.jsx)(a.A,{variant:"Bold"}),text:g("manageSteps"),name:"steps"},{icon:(0,k.jsx)(o.A,{variant:"Bold"}),text:g("delete"),name:"delete"}].filter(Boolean),handleAction:F,row:e})}),l([...t]),console.log("data.orders",e.cols)}}),[e]);const F=(e,t)=>{switch(console.log("row",e),console.log("action",t),y(e),t){case"delete":v(!0);break;case"steps":f("".concat(e.code,"/steps"));break;case"edit":T(!0)}};(0,n.useEffect)((()=>{j&&(N(!1),v(!1),A.A.success(g("deleteProductSuccess")),setTimeout((()=>{E((0,m.x7)(!1))}),100))}),[j]);return(0,k.jsxs)("div",{className:"w-full h-full",children:[(0,k.jsx)(S,{open:C,handleClose:()=>{T(!1),y(null)},selectedProductId:(null===b||void 0===b?void 0:b.id)||void 0}),(0,k.jsx)(P.A,{title:g("deleteProductConfirmation"),open:h,onClose:()=>{v(!1)},handleConfirm:()=>{N(!0),console.log("selectedRow",b),E((0,m.DD)(b.id))},loading:w}),(0,k.jsx)(r.A,{actions:(0,k.jsx)(k.Fragment,{children:(0,k.jsx)("div",{className:"w-[186px] ms-4",children:(0,k.jsx)(d.A,{icon:(0,k.jsx)(i.A,{}),text:g("addProduct"),onClick:()=>T(!0)})})}),title:g("products")}),(0,k.jsx)("div",{children:e?(0,k.jsx)(c.A,{columns:t,data:e||[]}):(0,k.jsx)(I.A,{})})]})}}}]);
//# sourceMappingURL=8053.c22293c5.chunk.js.map