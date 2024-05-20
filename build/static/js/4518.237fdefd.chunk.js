"use strict";(self.webpackChunknipa_panel_new=self.webpackChunknipa_panel_new||[]).push([[4518],{4018:(e,i,a)=>{a.d(i,{A:()=>d});var l=a(670);const d={ordersList:async function(){var e;let i=await(null===(e=(0,l.A)())||void 0===e?void 0:e.get("/order"));return null===i||void 0===i?void 0:i.data},createOrder:async function(e){var i;let a=await(null===(i=(0,l.A)())||void 0===i?void 0:i.post("/order",e));return null===a||void 0===a?void 0:a.data},createOrderGroup:async function(e){var i;let a=await(null===(i=(0,l.A)())||void 0===i?void 0:i.post("/orderGroup",{customer_code:e}));return null===a||void 0===a?void 0:a.data},orderGroupsList:async function(){var e;let i=await(null===(e=(0,l.A)())||void 0===e?void 0:e.get("/orderGroup"));return null===i||void 0===i?void 0:i.data},orderDetail:async function(e){var i;let a=await(null===(i=(0,l.A)())||void 0===i?void 0:i.get("/order/"+e));return null===a||void 0===a?void 0:a.data},getCompleteInfo:async function(e){var i;let a=await(null===(i=(0,l.A)())||void 0===i?void 0:i.get("/order/"+e+"/complete"));return null===a||void 0===a?void 0:a.data},getStepInfo:async function(e,i){var a;let d=await(null===(a=(0,l.A)())||void 0===a?void 0:a.get("/step/"+e+"/"+i+"/complete"));return null===d||void 0===d?void 0:d.data}}},4518:(e,i,a)=>{a.r(i),a.d(i,{default:()=>m});var l=a(5101),d=a(3232),t=a(3216),o=a(4117),n=a(5043),r=a(3516),s=a(1461),u=a(4018),v=a(979),c=a(3033),p=a(7578),f=a(579);const m=()=>{const e=(0,t.Zp)(),{t:i}=(0,o.Bd)();let{orderId:a}=(0,t.g)();const[m,_]=(0,n.useState)(!1),[w,b]=(0,n.useState)([]),[x,y]=(0,n.useState)(),[h,g]=(0,n.useState)(),[A,j]=(0,n.useState)([]),[S,k]=(0,n.useState)(),[I,N]=(0,n.useState)(),C=(0,r.Wx)({initialValues:I,validationSchema:S,enableReinitialize:!0,onSubmit:async e=>{if(console.log("done!",x),a&&x){_(!0);await v.A.addUserAnswer(parseInt(a),x.id,e);_(!1)}}});(0,n.useEffect)((()=>{N((0,s.rS)(w)),k(c.Ik().shape((0,s.Cw)(w,A,C))),C.values&&(null===w||void 0===w||w.map((e=>{e.answer&&C.setFieldValue(e.name,e.answer)})))}),[w,C.values,A]),(0,n.useEffect)((()=>{F()}),[]);const F=async()=>{var e;let i=await u.A.getCompleteInfo(Number(a));g(i);const l=await v.A.getForm(null===i||void 0===i?void 0:i.form.id,a);y(l);let d=[];null===(e=l.fields)||void 0===e||e.map((e=>{var i,a;let t={key:e.id,name:e.name,placeholder:e.placeholder,label:e.label,type:e.type.type,typeId:e.type.id,required:e.required,answer:e.userAnswer,id:e.id,fromRelatedFields:!(null===e||void 0===e||null===(i=e.form)||void 0===i||!i.id||(null===e||void 0===e||null===(a=e.form)||void 0===a?void 0:a.id)==(null===l||void 0===l?void 0:l.id))};var o;("dropDown"!==e.type.type&&"checkbox"!==e.type.type||(t=e.basic_data_id?{...t,basic_data:e.basic_data,basic_data_id:e.basic_data_id,basicDataItems:e.basicDataItems.map((e=>({key:e.id,id:e.id,label:(0,f.jsx)("p",{children:e.label}),server_id:e.id,value:e.option}))),answer:e.userAnswer}:{...t,options:e.options.map((i=>({id:i.id,key:i.id,label:(0,f.jsx)("p",{children:i.label}),server_id:i.id,value:i.option,answer:e.userAnswer})))}),"uploadFile"===e.type.type)&&(t={...t,onlyImage:null===(o=JSON.parse(e.validation))||void 0===o?void 0:o.onlyImage,setPending:_,noBadge:!0});d.push({...t})})),j([...l.conditions]),b([...d])};return(0,f.jsxs)("div",{className:"w-full h-full",children:[(0,f.jsx)(d.A,{title:"\u062a\u06a9\u0645\u06cc\u0644 \u0633\u0641\u0627\u0631\u0634",handleBack:()=>e("/orders")}),(0,f.jsx)("div",{className:"w-full flex gap-x-[20px]",children:(0,f.jsx)("div",{className:"w-full bg-white border border-text-300 h-min rounded-[6px] px-[20px] py-[24px]",children:(0,f.jsxs)("form",{onSubmit:C.handleSubmit,children:[m&&(0,f.jsx)(l.A,{}),(0,f.jsx)("div",{children:w&&C&&(null===C||void 0===C?void 0:C.values)&&Object.keys(null===C||void 0===C?void 0:C.values).length>0&&w.map(((e,i)=>{const a=A.find((i=>i.relational_form_field_id==e.id));let l=!0;if(a){const e=w.find((e=>e.id==a.form_field_id));let i;var d,t,o,n;if(e)if(e.basic_data_id)i=null===e||void 0===e||null===(d=e.basicDataItems)||void 0===d?void 0:d.find((e=>e.server_id==a.form_field_option_id));else i=null===e||void 0===e||null===(t=e.options)||void 0===t?void 0:t.find((e=>e.server_id==a.form_field_option_id));if(e&&i)if(1==a.operation)l=C.values[e.name]===i.value||(null===(o=C.values[e.name])||void 0===o?void 0:o.indexOf(i.value))>-1;else l=!(C.values[e.name]===i.value||(null===(n=C.values[e.name])||void 0===n?void 0:n.indexOf(i.value))>-1)}return l?(0,f.jsx)("div",{className:"mt-[30px]",children:(0,s.dN)(e,(()=>{}),C)},i):(0,f.jsx)(f.Fragment,{})}))}),(0,f.jsx)("div",{className:"mt-[32px]",children:(0,f.jsx)(p.A,{after:!0,onClick:()=>{console.log("formi",C.values)},text:i("submitForm2")})})]})})})]})}}}]);
//# sourceMappingURL=4518.237fdefd.chunk.js.map