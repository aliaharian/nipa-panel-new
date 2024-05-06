"use strict";(self.webpackChunknipa_panel_new=self.webpackChunknipa_panel_new||[]).push([[1791],{7311:(e,t,o)=>{o.d(t,{G:()=>a,j:()=>r});var n=o(9456);const r=()=>(0,n.wA)(),a=n.d4},4018:(e,t,o)=>{o.d(t,{A:()=>r});var n=o(670);const r={ordersList:async function(){var e;let t=await(null===(e=(0,n.A)())||void 0===e?void 0:e.get("/order"));return null===t||void 0===t?void 0:t.data},createOrder:async function(e){var t;let o=await(null===(t=(0,n.A)())||void 0===t?void 0:t.post("/order",e));return null===o||void 0===o?void 0:o.data},createOrderGroup:async function(e){var t;let o=await(null===(t=(0,n.A)())||void 0===t?void 0:t.post("/orderGroup",{customer_code:e}));return null===o||void 0===o?void 0:o.data},orderGroupsList:async function(){var e;let t=await(null===(e=(0,n.A)())||void 0===e?void 0:e.get("/orderGroup"));return null===t||void 0===t?void 0:t.data},orderDetail:async function(e){var t;let o=await(null===(t=(0,n.A)())||void 0===t?void 0:t.get("/order/"+e));return null===o||void 0===o?void 0:o.data},getCompleteInfo:async function(e){var t;let o=await(null===(t=(0,n.A)())||void 0===t?void 0:t.get("/order/"+e+"/complete"));return null===o||void 0===o?void 0:o.data},getStepInfo:async function(e,t){var o;let r=await(null===(o=(0,n.A)())||void 0===o?void 0:o.get("/step/"+e+"/"+t+"/complete"));return null===r||void 0===r?void 0:r.data}}},7099:(e,t,o)=>{o.d(t,{DD:()=>u,JK:()=>a,Jm:()=>d,Nb:()=>l,Tu:()=>s,cz:()=>i,vc:()=>c,x7:()=>v});var n=o(8875);const r=o(8870).A.actions,a=()=>async(e,t)=>{const o=await n.A.productsList();e(r.productsList(o))},l=e=>async(t,o)=>{const a=await n.A.productStepsList(e);t(r.productStepsList(a))},i=e=>async(t,o)=>{if(0===e)return t(r.productStepInfo(null));const a=await n.A.productStepInfo(e);t(r.productStepInfo(a))},s=e=>async(t,o)=>{const a=await n.A.saveProduct(e);t(r.saveProduct(a))},c=(e,t)=>async(o,l)=>{const i=await n.A.updateProduct(e,t);o(r.updateProduct(i)),o(a())},d=e=>async(t,o)=>{t(r.setSaveSuccess(e))},u=e=>async(t,o)=>{const a=await n.A.deleteProduct(e);t(r.deleteProduct(a))},v=e=>async(t,o)=>{t(r.setDeleteSuccess(e))}},8875:(e,t,o)=>{o.d(t,{A:()=>r});var n=o(670);const r={productsList:async function(){var e;let t=await(null===(e=(0,n.A)())||void 0===e?void 0:e.get("/products"));return null===t||void 0===t?void 0:t.data},saveProduct:async function(e){var t,o;let r=await(null===(t=(0,n.A)())||void 0===t?void 0:t.post("/products",{name:e.name,code:e.code,custom:e.custom,price:e.price,count_type:e.count_type,status:e.status,description:e.description,images:null===(o=e.images)||void 0===o?void 0:o.map((e=>e.hashCode))}));return null===r||void 0===r?void 0:r.data},deleteProduct:async function(e){var t;let o=await(null===(t=(0,n.A)())||void 0===t?void 0:t.delete("/products/".concat(e)));return null===o||void 0===o?void 0:o.data},productStepsList:async function(e){var t;let o=await(null===(t=(0,n.A)())||void 0===t?void 0:t.get("/product/".concat(e,"/steps")));return null===o||void 0===o?void 0:o.data},productStepInfo:async function(e){var t;let o=await(null===(t=(0,n.A)())||void 0===t?void 0:t.get("/productSteps/".concat(e)));return null===o||void 0===o?void 0:o.data},setProductStepRoles:async function(e,t){var o;let r=await(null===(o=(0,n.A)())||void 0===o?void 0:o.post("/product/steps/".concat(e,"/setRoles"),{roles:t.join(",")}));return null===r||void 0===r?void 0:r.data},addProductConditions:async function(e){var t;let o=await(null===(t=(0,n.A)())||void 0===t?void 0:t.post("/product/steps/conditions",{step_id:e.stepId,field_id:e.fieldId,option_id:e.optionId,next_step_id:e.nextStepId}));return null===o||void 0===o?void 0:o.data},getProduct:async function(e){var t;let o=await(null===(t=(0,n.A)())||void 0===t?void 0:t.get("/products/".concat(e)));return null===o||void 0===o?void 0:o.data},updateProduct:async function(e,t){var o,r;let a=await(null===(o=(0,n.A)())||void 0===o?void 0:o.put("/products/".concat(e),{name:t.name,code:t.code,custom:t.custom,count_type:t.count_type,price:t.price,status:t.status,description:t.description,images:null===(r=t.images)||void 0===r?void 0:r.map((e=>e.hashCode))}));return null===a||void 0===a?void 0:a.data}}},7417:(e,t,o)=>{o.d(t,{gJ:()=>c,Up:()=>s,ug:()=>d,ri:()=>u,PT:()=>i,ex:()=>l});var n=o(670);const r={sendOtp:async function(e){var t;let o=await(null===(t=(0,n.A)())||void 0===t?void 0:t.post("/sendOtp",{mobile:e.mobile}));return null===o||void 0===o?void 0:o.data},confirmOtp:async function(e){var t;console.log("cscscsc",e);let o=await(null===(t=(0,n.A)())||void 0===t?void 0:t.post("/confirmOtp",{mobile:e.mobile,otp:e.otp}));return null===o||void 0===o?void 0:o.data},getRolesList:async function(){var e;let t=await(null===(e=(0,n.A)())||void 0===e?void 0:e.get("/roles"));return null===t||void 0===t?void 0:t.data},getUserInfo:async function(){var e;let t=await(null===(e=(0,n.A)())||void 0===e?void 0:e.get("/profile"));return null===t||void 0===t?void 0:t.data},getCustomersList:async function(){var e;let t=await(null===(e=(0,n.A)())||void 0===e?void 0:e.get("/customers"));return null===t||void 0===t?void 0:t.data}};const a=o(5730).A.actions,l=e=>async(t,o)=>{t(a.setUserMobile(e))},i=e=>async(t,o)=>{t(a.setUserLogin(e))},s=()=>async(e,t)=>{const o=await r.getRolesList();console.log(o),e(a.getRolesList(o))},c=()=>async(e,t)=>{const o=await r.getCustomersList();e(a.getCustomersList(o.customers))},d=()=>async(e,t)=>{const o=await r.getUserInfo();console.log(o),e(a.getUserInfo(o))},u=()=>async(e,t)=>{e(a.logout())}},1791:(e,t,o)=>{o.r(t),o.d(t,{default:()=>V});var n=o(3232),r=o(3216),a=o(5043),l=o(4117),i=o(2087),s=o(579);const c=e=>{let{products:t,handleSelectProduct:o}=e;const{t:n}=(0,l.Bd)();return(0,s.jsx)("div",{children:(0,s.jsx)(i.A,{className:"group",name:"products",label:n("selectedProduct"),options:null===t||void 0===t?void 0:t.map((e=>({label:(0,s.jsx)("p",{children:e.name}),value:e.id||0}))),placeholder:n("pleaseSelectProduct"),formik:{handleChange:e=>{o(e.target.value)}}})})};var d=o(7311),u=o(7099),v=o(979),p=o(1461),m=o(7578),f=o(6421),h=o(7281),x=o(8406),g=o(3516),w=o(3033),y=o(5101);const k=e=>{let{selectedOrder:t,products:o,handleClearOrder:n,handleSaveOrder:r}=e;const{t:c}=(0,l.Bd)(),[d,u]=(0,a.useState)(),[k,j]=(0,a.useState)([]),[E,b]=(0,a.useState)([]),[A,_]=(0,a.useState)(!1),[L,M]=(0,a.useState)(!1),[S,C]=(0,a.useState)(!1),O=o.find((e=>e.id===t.product_id));(0,a.useEffect)((()=>{T()}),[]);const[N,F]=(0,a.useState)(),[I,P]=(0,a.useState)(),B=(0,g.Wx)({initialValues:I,validationSchema:N,enableReinitialize:!0,onSubmit:async e=>{console.log("ok",e),O&&r(O,e,S)}});(0,a.useEffect)((()=>{P((0,p.rS)(k)),F(w.Ik().shape((0,p.Cw)(k,E,B)))}),[k,B.values,E]);const H=e=>{C(e),B.handleSubmit(B.values)},T=async()=>{if(null!==O&&void 0!==O&&O.initialFormId){var e;const t=await v.A.getForm(null===O||void 0===O?void 0:O.initialFormId);u(t);let o=[];null===(e=t.fields)||void 0===e||e.map((e=>{var n,r;let a={key:e.id,name:e.name,placeholder:e.placeholder,label:e.label,type:e.type.type,typeId:e.type.id,required:e.required,id:e.id,fromRelatedFields:!(null===e||void 0===e||null===(n=e.form)||void 0===n||!n.id||(null===e||void 0===e||null===(r=e.form)||void 0===r?void 0:r.id)==(null===t||void 0===t?void 0:t.id))};var l;("dropDown"!==e.type.type&&"checkbox"!==e.type.type||(a=e.basic_data_id?{...a,basic_data:e.basic_data,basic_data_id:e.basic_data_id,basicDataItems:e.basicDataItems.map((e=>({key:e.id,id:e.id,label:(0,s.jsx)("p",{children:e.label}),server_id:e.id,value:e.option})))}:{...a,options:e.options.map((e=>({id:e.id,key:e.id,label:(0,s.jsx)("p",{children:e.label}),server_id:e.id,value:e.option})))}),"uploadFile"===e.type.type)&&(a={...a,onlyImage:null===(l=JSON.parse(e.validation))||void 0===l?void 0:l.onlyImage,setPending:M,noBadge:!0});o.push({...a})})),b([...t.conditions]),j([...o])}};return console.log("formik",B.errors),(0,s.jsxs)("form",{onSubmit:B.handleSubmit,children:[L&&(0,s.jsx)(y.A,{}),(0,s.jsxs)("div",{children:[(0,s.jsx)(i.A,{className:"group",name:"product",label:c("selectedProduct"),options:null===o||void 0===o?void 0:o.map(((e,t)=>({label:(0,s.jsx)("p",{children:e.name}),value:e.id||0,key:e.id||t}))),placeholder:c("pleaseSelectProduct"),disabled:!0,formik:{values:{product:t.product_id},handleChange:e=>{}}}),(0,s.jsx)("div",{children:k&&B&&(null===B||void 0===B?void 0:B.values)&&Object.keys(null===B||void 0===B?void 0:B.values).length>0&&k.map(((e,t)=>{const o=E.find((t=>t.relational_form_field_id==e.id));let n=!0;if(o){const e=k.find((e=>e.id==o.form_field_id));let t;var r,a,l,i;if(e)if(e.basic_data_id)t=null===e||void 0===e||null===(r=e.basicDataItems)||void 0===r?void 0:r.find((e=>e.id==o.basic_data_item_id));else t=null===e||void 0===e||null===(a=e.options)||void 0===a?void 0:a.find((e=>e.server_id==o.form_field_option_id));if(e&&t)if(1==o.operation)n=B.values[e.name]===t.value||(null===(l=B.values[e.name])||void 0===l?void 0:l.indexOf(t.value))>-1;else n=!(B.values[e.name]===t.value||(null===(i=B.values[e.name])||void 0===i?void 0:i.indexOf(t.value))>-1)}return n?(0,s.jsx)("div",{className:"mt-[30px]",children:(0,p.dN)(e,(()=>{}),B)},t):(0,s.jsx)(s.Fragment,{})}))}),(0,s.jsx)("div",{className:"mt-[30px] mb-[50px]",children:(0,s.jsx)(m.A,{icon:(0,s.jsx)(f.A,{}),onClick:()=>{H(!0)},bordered:!0,text:c("addProductToOrder")})}),(0,s.jsxs)("div",{className:"w-full flex items-center justify-between",children:[(0,s.jsx)("div",{className:"w-[227px]",children:(0,s.jsx)(m.A,{icon:(0,s.jsx)(h.A,{className:"me-2"}),onClick:n,gray:!0,text:c("backToPrevStep")})}),(0,s.jsx)("div",{className:"w-[202px]",children:(0,s.jsx)(m.A,{icon:(0,s.jsx)(x.A,{className:"ms-2"}),after:!0,onClick:()=>H(!1),text:c("saveAndContinue")})})]})]})]})};var j=o(6640),E=o(1906),b=o(9600),A=o(4069),_=o(5173),L=o.n(_),M=["variant","color","size"],S=function(e){var t=e.color;return a.createElement(a.Fragment,null,a.createElement("path",{d:"M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2ZM18 12.75H6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h12c.41 0 .75.34.75.75s-.34.75-.75.75Z",fill:t}))},C=function(e){var t=e.color;return a.createElement(a.Fragment,null,a.createElement("path",{d:"M16 12h2M6 12h5.66",stroke:t,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}))},O=function(e){var t=e.color;return a.createElement(a.Fragment,null,a.createElement("path",{opacity:".4",d:"M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2Z",fill:t}),a.createElement("path",{d:"M18 12.75H6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h12c.41 0 .75.34.75.75s-.34.75-.75.75Z",fill:t}))},N=function(e){var t=e.color;return a.createElement(a.Fragment,null,a.createElement("path",{d:"M6 12h12",stroke:t,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}))},F=function(e){var t=e.color;return a.createElement(a.Fragment,null,a.createElement("path",{d:"M18 12.75H6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h12c.41 0 .75.34.75.75s-.34.75-.75.75Z",fill:t}))},I=function(e){var t=e.color;return a.createElement(a.Fragment,null,a.createElement("path",{d:"M6 12h12",stroke:t,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}))},P=(0,a.forwardRef)((function(e,t){var o=e.variant,n=e.color,r=e.size,l=(0,A._)(e,M);return a.createElement("svg",(0,A.a)({},l,{xmlns:"http://www.w3.org/2000/svg",ref:t,width:r,height:r,viewBox:"0 0 24 24",fill:"none"}),function(e,t){switch(e){case"Bold":return a.createElement(S,{color:t});case"Broken":return a.createElement(C,{color:t});case"Bulk":return a.createElement(O,{color:t});case"Linear":default:return a.createElement(N,{color:t});case"Outline":return a.createElement(F,{color:t});case"TwoTone":return a.createElement(I,{color:t})}}(o,n))}));P.propTypes={variant:L().oneOf(["Linear","Bold","Broken","Bulk","Outline","TwoTone"]),color:L().string,size:L().oneOfType([L().string,L().number])},P.defaultProps={variant:"Linear",color:"currentColor",size:"24"},P.displayName="Minus";const B=e=>{let{item:t,handleIncrease:o,handleDecrease:n}=e;const{t:r}=(0,l.Bd)();return(0,s.jsxs)("div",{className:"flex border border-text-400 px-[14px] py-[7px] rounded-[8px] items-center justify-between mt-2",children:[(0,s.jsx)("div",{children:(0,s.jsx)("p",{className:"text-[14px] text-text-500",children:r("productName")})}),(0,s.jsx)("div",{children:(0,s.jsx)("p",{children:t.product_name})}),(0,s.jsxs)("div",{className:"bg-text-200 p-2 rounded-[8px] flex items-center justify-between w-[97px]",children:[(0,s.jsx)(E.A,{className:"!w-6 !max-w-[24px] !min-w-[24px] !p-[2px] h-6",onClick:o,children:(0,s.jsx)(f.A,{className:"text-primary-main"})}),(0,s.jsx)("p",{className:"pointer-events-none select-none text-[16px] text-primary-main",children:j.Ay.toPersianDigits(t.count)}),(0,s.jsx)(E.A,{className:"!w-6 !max-w-[24px] !min-w-[24px] !p-[2px] h-6",onClick:n,children:1==t.count?(0,s.jsx)(b.A,{className:"text-error-primary"}):(0,s.jsx)(P,{className:"text-primary-main"})})]})]})};var H=o(7417);const T=e=>{let{orders:t,handleEditOrder:o,handleSubmitForm:n}=e;console.log("orders",t);const{t:r}=(0,l.Bd)(),[c,u]=(0,a.useState)(0),v=(0,d.G)((e=>e.users.customers)),p=(0,d.j)(),[f,h]=(0,a.useState)();(0,a.useEffect)((()=>{!v&&j.Ay.checkPermission("add-order-as-another")&&p((0,H.gJ)())}),[]),(0,a.useEffect)((()=>{let e=0;null===t||void 0===t||t.map((t=>{e+=t.count})),u(e)}),[t]);return(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{children:j.Ay.checkPermission("add-order-as-another")&&(0,s.jsx)("div",{className:"flex rounded-[8px] items-center justify-between mb-5",children:(0,s.jsx)(i.A,{className:"group",name:"customers",label:r("customer"),options:null===v||void 0===v?void 0:v.map((e=>({label:(0,s.jsx)("p",{children:"".concat(e.code," - ").concat(e.user.name?e.user.name+" "+e.user.last_name:e.user.mobile)}),value:e.code}))),placeholder:r("pleaseSelectCustomer"),formik:{handleChange:e=>{h(e.target.value)}}})})}),(0,s.jsxs)("div",{className:"flex items-center justify-between text-primary-main font-bold mb-[29px]",children:[(0,s.jsx)("p",{children:r("productsOfThisOrder")}),(0,s.jsxs)("p",{children:[j.Ay.toPersianDigits(c)," ",r("product")]})]}),t.map(((e,t)=>(0,s.jsx)(B,{item:e,handleIncrease:()=>(e=>{o({...e,count:e.count+1})})(e),handleDecrease:()=>(e=>{o({...e,count:e.count>0?e.count-1:0})})(e)},t))),(0,s.jsx)("div",{className:"mt-[32px]",children:(0,s.jsx)(m.A,{after:!0,onClick:()=>n(f),text:r("submitForm")})})]})};var z=o(4018);const V=()=>{const e=(0,r.Zp)(),{t:t}=(0,l.Bd)(),[o,i]=(0,a.useState)(!1),v=JSON.parse(localStorage.getItem("nipa_user")||""),[p,m]=(0,a.useState)([]),[f,h]=(0,a.useState)(),x=(0,d.G)((e=>e.products.products)),g=(0,d.j)();(0,a.useEffect)((()=>{g((0,u.JK)())}),[]);return(0,s.jsxs)("div",{className:"w-full h-full",children:[o&&(0,s.jsx)(y.A,{}),(0,s.jsx)(n.A,{title:t("createNewOrder"),handleBack:()=>e("/orders")}),(0,s.jsxs)("div",{className:"w-full flex gap-x-[20px]",children:[(0,s.jsx)("div",{className:"".concat(p.length>0?"w-[calc(100%-340px)]":"w-full"," bg-white border border-text-300 h-min rounded-[6px] px-[20px] py-[24px]"),children:null!==f&&void 0!==f&&f.product_id?(0,s.jsx)(k,{handleSaveOrder:(e,t,o)=>{let n={product_id:e.id,product_name:e.name,saved:!0,values:t,form_id:e.initialFormId,id:Math.floor(1e4*Math.random()),count:1,custom:0};m([...p,{...n}]),h(null)},products:null===x||void 0===x?void 0:x.filter((e=>(e.initialFormId||0===e.custom)&&1===e.status)),handleClearOrder:()=>{h(null)},selectedOrder:f}):(0,s.jsx)(c,{products:null===x||void 0===x?void 0:x.filter((e=>(e.initialFormId||0===e.custom)&&1===e.status)),handleSelectProduct:e=>{const t=null===x||void 0===x?void 0:x.find((t=>t.id==e));if(console.log("prod",t),0==(null===t||void 0===t?void 0:t.custom)){let o={product_id:e,product_name:t.name,saved:!0,values:null,form_id:null,custom:0,id:Math.floor(1e4*Math.random()),count:1};m([...p,{...o}]),h(null)}else h({product_id:e,saved:!1})}})}),p.length>0&&(0,s.jsx)("div",{className:"w-[320px] h-min bg-white border border-text-300 rounded-[6px] px-[16px] py-[18px]",children:(0,s.jsx)(T,{handleSubmitForm:async t=>{var o;i(!0);const n=t||(null===(o=v.customer)||void 0===o?void 0:o.code);console.log("all neede data",n,p);const r={customer_code:n,orders:p.map((e=>({count:e.count,product_id:e.product_id,form_id:e.form_id||null,data:e.form_id?e.values:null})))};console.log("requestObject",r);const a=await z.A.createOrder(r);console.log("response",a),i(!1),await e("/orders")},orders:p,handleEditOrder:e=>{console.log("order",e);const t=p.findIndex((t=>t.id==e.id));if(t>-1){let o=[...p];e.count<=0?o.splice(t,1):o[t]={...e},m([...o])}}})})]})]})}},6421:(e,t,o)=>{o.d(t,{A:()=>m});var n=o(4069),r=o(5043),a=o(5173),l=o.n(a),i=["variant","color","size"],s=function(e){var t=e.color;return r.createElement(r.Fragment,null,r.createElement("path",{d:"M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2ZM18 12.75h-5.25V18c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-5.25H6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5.25V6c0-.41.34-.75.75-.75s.75.34.75.75v5.25H18c.41 0 .75.34.75.75s-.34.75-.75.75Z",fill:t}))},c=function(e){var t=e.color;return r.createElement(r.Fragment,null,r.createElement("path",{d:"M12 18V6M16 12h2M6 12h5.66M12 18V6",stroke:t,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}))},d=function(e){var t=e.color;return r.createElement(r.Fragment,null,r.createElement("path",{opacity:".4",d:"M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2Z",fill:t}),r.createElement("path",{d:"M18 11.25h-5.25V6c0-.41-.34-.75-.75-.75s-.75.34-.75.75v5.25H6c-.41 0-.75.34-.75.75s.34.75.75.75h5.25V18c0 .41.34.75.75.75s.75-.34.75-.75v-5.25H18c.41 0 .75-.34.75-.75s-.34-.75-.75-.75Z",fill:t}))},u=function(e){var t=e.color;return r.createElement(r.Fragment,null,r.createElement("path",{d:"M6 12h12M12 18V6",stroke:t,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}))},v=function(e){var t=e.color;return r.createElement(r.Fragment,null,r.createElement("path",{d:"M18 12.75H6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h12c.41 0 .75.34.75.75s-.34.75-.75.75Z",fill:t}),r.createElement("path",{d:"M12 18.75c-.41 0-.75-.34-.75-.75V6c0-.41.34-.75.75-.75s.75.34.75.75v12c0 .41-.34.75-.75.75Z",fill:t}))},p=function(e){var t=e.color;return r.createElement(r.Fragment,null,r.createElement("path",{opacity:".4",d:"M6 12h12",stroke:t,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),r.createElement("path",{d:"M12 18V6",stroke:t,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}))},m=(0,r.forwardRef)((function(e,t){var o=e.variant,a=e.color,l=e.size,m=(0,n._)(e,i);return r.createElement("svg",(0,n.a)({},m,{xmlns:"http://www.w3.org/2000/svg",ref:t,width:l,height:l,viewBox:"0 0 24 24",fill:"none"}),function(e,t){switch(e){case"Bold":return r.createElement(s,{color:t});case"Broken":return r.createElement(c,{color:t});case"Bulk":return r.createElement(d,{color:t});case"Linear":default:return r.createElement(u,{color:t});case"Outline":return r.createElement(v,{color:t});case"TwoTone":return r.createElement(p,{color:t})}}(o,a))}));m.propTypes={variant:l().oneOf(["Linear","Bold","Broken","Bulk","Outline","TwoTone"]),color:l().string,size:l().oneOfType([l().string,l().number])},m.defaultProps={variant:"Linear",color:"currentColor",size:"24"},m.displayName="Add"},8406:(e,t,o)=>{o.d(t,{A:()=>m});var n=o(4069),r=o(5043),a=o(5173),l=o.n(a),i=["variant","color","size"],s=function(e){var t=e.color;return r.createElement(r.Fragment,null,r.createElement("path",{fill:t,d:"M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2zM18 12.75H7.81l3.01 3.01c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22s-.38-.07-.53-.22l-4.29-4.29a.75.75 0 010-1.06l4.29-4.29c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-3.01 3.01H18c.41 0 .75.34.75.75s-.34.75-.75.75z"}))},c=function(e){var t=e.color;return r.createElement(r.Fragment,null,r.createElement("path",{stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"10",strokeWidth:"1.5",d:"M9.57 5.93L3.5 12l6.07 6.07M12.82 12H3.5M20.33 12h-3.48"}))},d=function(e){var t=e.color;return r.createElement(r.Fragment,null,r.createElement("path",{fill:t,d:"M7.81 2h8.37C19.83 2 22 4.17 22 7.81v8.37c0 3.64-2.17 5.81-5.81 5.81H7.81C4.17 22 2 19.83 2 16.19V7.81C2 4.17 4.17 2 7.81 2z",opacity:".4"}),r.createElement("path",{fill:t,d:"M5.47 11.47l4.29-4.29c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-3.01 3.01H18c.41 0 .75.34.75.75s-.34.75-.75.75H7.81l3.01 3.01c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22s-.38-.07-.53-.22l-4.29-4.29a.75.75 0 010-1.06z"}))},u=function(e){var t=e.color;return r.createElement(r.Fragment,null,r.createElement("path",{stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"10",strokeWidth:"1.5",d:"M9.57 5.93L3.5 12l6.07 6.07M20.5 12H3.67"}))},v=function(e){var t=e.color;return r.createElement(r.Fragment,null,r.createElement("path",{fill:t,d:"M9.57 18.82c-.19 0-.38-.07-.53-.22l-6.07-6.07a.754.754 0 010-1.06L9.04 5.4c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06L4.56 12l5.54 5.54c.29.29.29.77 0 1.06-.14.15-.34.22-.53.22z"}),r.createElement("path",{fill:t,d:"M20.5 12.75H3.67c-.41 0-.75-.34-.75-.75s.34-.75.75-.75H20.5c.41 0 .75.34.75.75s-.34.75-.75.75z"}))},p=function(e){var t=e.color;return r.createElement(r.Fragment,null,r.createElement("path",{stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"10",strokeWidth:"1.5",d:"M9.57 5.93L3.5 12l6.07 6.07"}),r.createElement("path",{stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"10",strokeWidth:"1.5",d:"M20.5 12H3.67",opacity:".4"}))},m=(0,r.forwardRef)((function(e,t){var o=e.variant,a=e.color,l=e.size,m=(0,n._)(e,i);return r.createElement("svg",(0,n.a)({},m,{xmlns:"http://www.w3.org/2000/svg",ref:t,width:l,height:l,viewBox:"0 0 24 24",fill:"none"}),function(e,t){switch(e){case"Bold":return r.createElement(s,{color:t});case"Broken":return r.createElement(c,{color:t});case"Bulk":return r.createElement(d,{color:t});case"Linear":default:return r.createElement(u,{color:t});case"Outline":return r.createElement(v,{color:t});case"TwoTone":return r.createElement(p,{color:t})}}(o,a))}));m.propTypes={variant:l().oneOf(["Linear","Bold","Broken","Bulk","Outline","TwoTone"]),color:l().string,size:l().oneOfType([l().string,l().number])},m.defaultProps={variant:"Linear",color:"currentColor",size:"24"},m.displayName="ArrowLeft"}}]);
//# sourceMappingURL=1791.34183176.chunk.js.map