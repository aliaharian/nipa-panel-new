"use strict";(self.webpackChunknipa_panel_new=self.webpackChunknipa_panel_new||[]).push([[7179],{7072:function(t,e,n){n.d(e,{G7:function(){return G},gd:function(){return E},cp:function(){return M},u7:function(){return V},hJ:function(){return z},TC:function(){return R},A1:function(){return W},UD:function(){return C},lW:function(){return O},Fs:function(){return A},qI:function(){return T},TQ:function(){return H},DN:function(){return L},op:function(){return Q},i9:function(){return B},Wc:function(){return J}});var r=n(4165),a=n(5861),i=n(9778),o=n(3713),u=n(8556),c=n(516),s=n(1193);function l(t,e){return d.apply(this,arguments)}function d(){return(d=(0,a.Z)((0,r.Z)().mark((function t(e,n){var a,i,o;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=Object.keys(n||{}).map((function(t){return null!==n[t]?"".concat(t,"=").concat(n[t],"&"):""})).join("").slice(0,-1),console.log("params",i),t.next=4,null===(a=(0,c.Z)())||void 0===a?void 0:a.get("/factor?page=".concat(e,"&").concat(i));case 4:return o=t.sent,t.abrupt("return",null===o||void 0===o?void 0:o.data);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function p(){return(p=(0,a.Z)((0,r.Z)().mark((function t(e){var n,a;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,null===(n=(0,c.Z)())||void 0===n?void 0:n.post("/factor/".concat(e.factorId,"/factorStatus"),{factor_status_enum:e.statusSlug,description:e.description,name:e.name});case 2:return a=t.sent,t.abrupt("return",null===a||void 0===a?void 0:a.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(t){return v.apply(this,arguments)}function v(){return(v=(0,a.Z)((0,r.Z)().mark((function t(e){var n,a,i;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,null===(n=(0,c.Z)())||void 0===n?void 0:n.get("/factor/".concat(e));case 2:return i=t.sent,t.abrupt("return",null===i||void 0===i||null===(a=i.data)||void 0===a?void 0:a.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(t){return y.apply(this,arguments)}function y(){return(y=(0,a.Z)((0,r.Z)().mark((function t(e){var n,a;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,null===(n=(0,c.Z)())||void 0===n?void 0:n.get("/factor/paymentStep?factor_id=".concat(e));case 2:return a=t.sent,t.abrupt("return",null===a||void 0===a?void 0:a.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t){return x.apply(this,arguments)}function x(){return(x=(0,a.Z)((0,r.Z)().mark((function t(e){var n,a,i;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,null===(n=(0,c.Z)())||void 0===n?void 0:n.get("/factor/paymentStep/".concat(e));case 2:return i=t.sent,t.abrupt("return",null===i||void 0===i||null===(a=i.data)||void 0===a?void 0:a.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function Z(){return(Z=(0,a.Z)((0,r.Z)().mark((function t(e,n){var a,i;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,null===(a=(0,c.Z)())||void 0===a?void 0:a.post("/factor/".concat(e,"/factorItem"),{code:n.code,name:n.name,count_type:n.countType,width:n.width,height:n.height,count:n.count,unit_price:n.unitPrice,off_price:n.offPrice,additional_price:n.additionalPrice,description:n.description});case 2:return i=t.sent,t.abrupt("return",null===i||void 0===i?void 0:i.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function w(){return(w=(0,a.Z)((0,r.Z)().mark((function t(e,n){var a,i;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,null===(a=(0,c.Z)())||void 0===a?void 0:a.put("/factor/".concat(e,"/factorItem/").concat(n.id),{code:n.code,name:n.name,count_type:n.countType,width:n.width,height:n.height,count:n.count,unit_price:n.unitPrice,off_price:n.offPrice,additional_price:n.additionalPrice,description:n.description});case 2:return i=t.sent,t.abrupt("return",null===i||void 0===i?void 0:i.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function b(){return(b=(0,a.Z)((0,r.Z)().mark((function t(e,n){var a,i;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,null===(a=(0,c.Z)())||void 0===a?void 0:a.delete("/factor/".concat(e,"/factorItem/").concat(n));case 2:return i=t.sent,t.abrupt("return",null===i||void 0===i?void 0:i.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function g(){return(g=(0,a.Z)((0,r.Z)().mark((function t(e,n){var a,i;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,null===(a=(0,c.Z)())||void 0===a?void 0:a.post("/factor/paymentStep",{factor_id:e,step_number:n.stepNumber,payable_price:n.payablePrice,allow_online:"online"==n.isOnline||"all"==n.isOnline,allow_offline:"offline"==n.isOnline||"all"==n.isOnline,pay_time:s.ZP.toISOLocal(n.payTime)+" 00:00:00"});case 2:return i=t.sent,t.abrupt("return",null===i||void 0===i?void 0:i.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function j(){return(j=(0,a.Z)((0,r.Z)().mark((function t(e,n){var a,i;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,null===(a=(0,c.Z)())||void 0===a?void 0:a.put("/factor/paymentStep/".concat(n.id),{factor_id:e,step_number:n.stepNumber,payable_price:n.payablePrice,allow_online:"online"==n.isOnline||"all"==n.isOnline,allow_offline:"offline"==n.isOnline||"all"==n.isOnline,pay_time:s.ZP.toISOLocal(n.payTime)+" 00:00:00"});case 2:return i=t.sent,t.abrupt("return",null===i||void 0===i?void 0:i.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function k(){return(k=(0,a.Z)((0,r.Z)().mark((function t(e){var n,a;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,null===(n=(0,c.Z)())||void 0===n?void 0:n.delete("/factor/paymentStep/".concat(e));case 2:return a=t.sent,t.abrupt("return",null===a||void 0===a?void 0:a.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function _(){return(_=(0,a.Z)((0,r.Z)().mark((function t(e,n){var a,i;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,null===(a=(0,c.Z)())||void 0===a?void 0:a.put("/factor/".concat(e),{expire_date:n.expireDate,description:n.description});case 2:return i=t.sent,t.abrupt("return",null===i||void 0===i?void 0:i.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function N(){return(N=(0,a.Z)((0,r.Z)().mark((function t(e){var n,a;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,null===(n=(0,c.Z)())||void 0===n?void 0:n.post("/factor/".concat(e,"/accept"));case 2:return a=t.sent,t.abrupt("return",null===a||void 0===a?void 0:a.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function S(){return(S=(0,a.Z)((0,r.Z)().mark((function t(e){var n,a;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,null===(n=(0,c.Z)())||void 0===n?void 0:n.post("/factor/".concat(e,"/acceptByCustomer"));case 2:return a=t.sent,t.abrupt("return",null===a||void 0===a?void 0:a.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function P(){return(P=(0,a.Z)((0,r.Z)().mark((function t(e,n,a){var i,o;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,null===(i=(0,c.Z)())||void 0===i?void 0:i.post("/factor/payment/pay",{factor_payment_step_id:e,method:n,fileId:null!==a&&void 0!==a?a:null});case 2:return o=t.sent,t.abrupt("return",null===o||void 0===o?void 0:o.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function F(){return I.apply(this,arguments)}function I(){return(I=(0,a.Z)((0,r.Z)().mark((function t(){var e,n;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,null===(e=(0,c.Z)())||void 0===e?void 0:e.get("/factor/payment/status");case 2:return n=t.sent,t.abrupt("return",null===n||void 0===n?void 0:n.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function K(t){return D.apply(this,arguments)}function D(){return(D=(0,a.Z)((0,r.Z)().mark((function t(e){var n,a,i,o,u;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.factor_payment_id,i=e.verified,o=e.adminDescription,t.next=3,null===(n=(0,c.Z)())||void 0===n?void 0:n.post("/factor/payment/verifyOffline",{factor_payment_id:a,verified:i,adminDescription:o});case 3:return u=t.sent,t.abrupt("return",null===u||void 0===u?void 0:u.data);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var q=n(2791),T=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments.length>1?arguments[1]:void 0,n=function(t){var e={};return Object.keys(t).forEach((function(n){t[n]&&(e[n]=t[n])})),e},o=(0,q.useCallback)(n,[]),u=(0,i.a)({queryKey:["invoices",{page:t,filters:o(e)}],queryFn:function(){var n=(0,a.Z)((0,r.Z)().mark((function n(){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,l(t,o(e));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()}),c=u.data;return{data:c}},C=function(t){var e=(0,i.a)({queryKey:["invoice",{code:t}],queryFn:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var n,a,i,o,u,c,l,d;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f(t);case 2:return o=e.sent,e.next=5,m(o.id);case 5:return u=e.sent,c=null===(n=o.last_status)||void 0===n?void 0:n.factor_status_enum,l=s.ZP.renderStatusStyle(null===c||void 0===c?void 0:c.description),d={name:null===(a=o.last_status)||void 0===a?void 0:a.factor_status_enum.name,slug:null===(i=o.last_status)||void 0===i?void 0:i.factor_status_enum.slug,style:l},e.abrupt("return",{factorInfo:o,factorPayments:u,factorStatus:d});case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()});return{data:e.data,isPending:e.isPending}},O=function(t){var e=(0,i.a)({queryKey:["paynemtStep",{paymentStepId:t}],queryFn:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),enabled:!!t});return{data:e.data,isPending:e.isPending}},A=function(){var t=(0,i.a)({queryKey:["paynemtStatuses"],queryFn:function(){var t=(0,a.Z)((0,r.Z)().mark((function t(){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,F();case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()});return{data:t.data,isPending:t.isPending}},L=function(t){var e=(0,o.NL)(),n=(0,u.D)({mutationKey:["updateInvoice"],mutationFn:function(t){return function(t,e){return _.apply(this,arguments)}(t.id,t.data)},onSuccess:function(n){e.invalidateQueries({queryKey:["invoice",{code:t}]})}});return{mutate:n.mutate}},M=function(t){var e=(0,o.NL)(),n=(0,u.D)({mutationKey:["addInvoiceItem"],mutationFn:function(t){return function(t,e){return Z.apply(this,arguments)}(t.id,t.data)},onSuccess:function(n){e.invalidateQueries({queryKey:["invoice",{code:t}]})}});return{mutate:n.mutate}},Q=function(t){var e=(0,o.NL)(),n=(0,u.D)({mutationKey:["updateInvoiceItem"],mutationFn:function(t){return function(t,e){return w.apply(this,arguments)}(t.id,t.data)},onSuccess:function(n){e.invalidateQueries({queryKey:["invoice",{code:t}]})}});return{mutate:n.mutate}},R=function(t){var e=(0,o.NL)(),n=(0,u.D)({mutationKey:["deleteInvoiceItem"],mutationFn:function(t){return function(t,e){return b.apply(this,arguments)}(t.id,t.data)},onSuccess:function(n){e.invalidateQueries({queryKey:["invoice",{code:t}]})}});return{mutate:n.mutate}},V=function(t){var e=(0,o.NL)(),n=(0,u.D)({mutationKey:["addPaymentStep"],mutationFn:function(t){return function(t,e){return g.apply(this,arguments)}(t.id,t.data)},onSuccess:function(n){e.invalidateQueries({queryKey:["invoice",{code:t}]})}});return{mutate:n.mutate}},B=function(t){var e=(0,o.NL)(),n=(0,u.D)({mutationKey:["updatePaymentStep"],mutationFn:function(t){return function(t,e){return j.apply(this,arguments)}(t.id,t.data)},onSuccess:function(n){e.invalidateQueries({queryKey:["invoice",{code:t}]})}});return{mutate:n.mutate}},W=function(t){var e=(0,o.NL)(),n=(0,u.D)({mutationKey:["deletePaymentStep"],mutationFn:function(t){return function(t){return k.apply(this,arguments)}(t.id)},onSuccess:function(n){e.invalidateQueries({queryKey:["invoice",{code:t}]})}});return{mutate:n.mutate}},G=function(t){var e=(0,o.NL)(),n=(0,u.D)({mutationKey:["acceptFactor"],mutationFn:function(t){return function(t){return N.apply(this,arguments)}(t)},onSuccess:function(n){e.invalidateQueries({queryKey:["invoice",{code:t}]})}});return{mutate:n.mutate}},z=function(t){var e=(0,o.NL)(),n=(0,u.D)({mutationKey:["changeFactorStatus"],mutationFn:function(t){return function(t){return p.apply(this,arguments)}(t)},onSuccess:function(n){e.invalidateQueries({queryKey:["invoice",{code:t}]})}});return{mutate:n.mutate}},E=function(t){var e=(0,o.NL)(),n=(0,u.D)({mutationKey:["acceptFactorByCustomer"],mutationFn:function(t){return function(t){return S.apply(this,arguments)}(t)},onSuccess:function(n){e.invalidateQueries({queryKey:["invoice",{code:t}]})}});return{mutate:n.mutate}},H=function(t){var e=(0,o.NL)(),n=(0,u.D)({mutationKey:["payFactor"],mutationFn:function(t){return function(t,e,n){return P.apply(this,arguments)}(t.stepId,t.method,t.fileId)},onSuccess:function(n){e.invalidateQueries({queryKey:["invoice",{code:t}]})}});return{mutate:n.mutate}},J=function(){return{mutate:(0,u.D)({mutationKey:["verifyOfflinePayment"],mutationFn:K}).mutate}}},2737:function(t,e,n){n.d(e,{C:function(){return i},T:function(){return a}});var r=n(9434),a=function(){return(0,r.I0)()},i=r.v9},3398:function(t,e,n){var r=n(1413),a=n(6499),i=n(1652),o=n(7583),u=n(6082),c=n(593),s=n(175),l=n(6725),d=n(2791),p=n(2636),f=n(9230),v=n(184);e.Z=function(t){var e=t.className,n=t.name,m=t.label,y=t.inputActions,h=t.placeholder,x=t.formik,Z=t.disablePast,w=t.disabled,b=d.useRef(null),g=(0,f.$G)("common").t;return(0,v.jsx)(i._,{dateAdapter:u.Y,children:(0,v.jsxs)("div",{className:"flex flex-col w-full items-start justify-start ".concat(e),children:[(0,v.jsxs)("div",{className:"text-xs mb-2 flex justify-between w-full",children:[(0,v.jsx)("label",{className:"font-normal",htmlFor:n,children:m}),null===y||void 0===y?void 0:y()]}),(0,v.jsx)(o.O,{value:x.values[n],disablePast:Z,disabled:w,onAccept:function(t){console.log("newValue",t),x.setFieldValue(n,t)},className:"w-full",timezone:"Asia/Tehran",inputRef:b,slots:{toolbar:function(t){var e;return(0,v.jsxs)("div",{className:"p-4 MuiPickersToolbar-root MuiPickersLayout-toolbar bg-primary-main text-white css-1eurbeq-MuiPickersToolbar-root-MuiDatePickerToolbar-root",children:[(0,v.jsx)("span",{className:"text-white text-[12px]",children:"\u062a\u0627\u0631\u06cc\u062e \u0645\u0648\u0631\u062f \u0646\u0638\u0631 \u062e\u0648\u062f \u0631\u0627 \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646\u06cc\u062f"}),(0,v.jsx)("div",{className:"mt-2 MuiPickersToolbar-content css-15jcv2p-MuiPickersToolbar-content",children:(0,v.jsx)("h4",{className:"text-[30px] MuiTypography-root MuiTypography-h4 MuiTypography-alignCenter MuiDatePickerToolbar-title css-3jvy96-MuiTypography-root-MuiDatePickerToolbar-title",children:(null===(e=t.value)||void 0===e?void 0:e.toLocaleDateString("fa-IR",{month:"long",day:"numeric"}))||"\u0627\u0646\u062a\u062e\u0627\u0628 \u062a\u0627\u0631\u06cc\u062e"})})]})},textField:function(t){var e;return(0,v.jsx)(a.Z,(0,r.Z)((0,r.Z)({},t),{},{value:(null===(e=t.ownerState.value)||void 0===e?void 0:e.toLocaleDateString("fa-IR",{year:"numeric",month:"long",day:"numeric"}))||""}))},leftArrowIcon:function(){return(0,v.jsx)(c.Z,{style:{width:20,height:20}})},rightArrowIcon:function(){return(0,v.jsx)(s.Z,{style:{width:20,height:20}})},actionBar:function(t){return(0,v.jsxs)("div",{className:"[grid-column:1/4] [grid-row:3] py-4 border-t border-text-300 px-4 flex justify-between",children:[(0,v.jsx)("div",{className:"w-[80px]",children:(0,v.jsx)(p.Z,{text:g("deleteDate"),onClick:function(){t.onClear()},simple:!0,sm:!0,className:"!text-error-primary !text-sm"})}),(0,v.jsx)("div",{className:"w-[100px]",children:(0,v.jsx)(p.Z,{sm:!0,text:"\u062a\u0627\u06cc\u06cc\u062f",onClick:function(){t.onAccept()}})})]})}},slotProps:{textField:{className:"rounded-[6px]",label:"",placeholder:h||"",classes:{root:"!cursor-pointer !border-solid !border !hover:border-primary-main !border-text-400 rounded-[6px] h-12 !outline-none !shadow-none"},InputProps:{classes:{root:" h-12 pe-2 !ps-2",input:"!cursor-pointer !text-xs !font-bold hover:!border-primary-main focus:!border-primary-main",notchedOutline:"!border-none !outline-none !shadow-none"},endAdornment:(0,v.jsx)("div",{className:"w-[20px] h-[20px]",children:(0,v.jsx)(l.Z,{style:{width:20,height:20,color:"#757575"}})})},inputProps:{}},toolbar:{className:"bg-primary-main text-white"},calendarHeader:{className:"[&>*:nth-child(1)]:ms-0 w-full flex justify-between items-center"}}})]})})}},745:function(t,e,n){var r=n(9439),a=n(2791),i=n(1782),o=n(184);e.Z=function(t){var e,n,u,c=t.name,s=t.label,l=t.formik,d=(t.type,t.placeholder),p=(t.maskChar,t.className),f=(t.mask,t.inputActions),v=t.options,m=t.disabled,y=t.readonly,h=t.lgText,x=(0,a.useState)(null),Z=(0,r.Z)(x,2),w=Z[0],b=Z[1];return(0,o.jsxs)("div",{className:"flex flex-col w-full items-start justify-start ".concat(p),children:[(0,o.jsxs)("div",{className:"".concat(h?"text-md":"text-xs"," mb-2 flex justify-between w-full"),children:[(0,o.jsx)("label",{className:"font-normal",htmlFor:c,children:s}),null===f||void 0===f?void 0:f()]}),(0,o.jsx)(i.ZP,{isDisabled:m,defaultValue:l.values?l.values[c]:w,onChange:function(t){b(t),console.log("nice car",t),l.handleChange({target:{name:c,value:t.value,type:t.type}})},value:l.values?null===v||void 0===v?void 0:v.find((function(t){return t.value===l.values[c]})):w,placeholder:d,options:v,className:"w-full h-12 !outline-none",isSearchable:!1,menuIsOpen:!y&&void 0,classNames:{control:function(t){return"h-12 !rounded-[6px] !outline-none !shadow-none ".concat(t.isFocused?"!border-primary-main":"border-text-300")},placeholder:function(t){return"rtl:text-right ltr:text-left ".concat(h?"text-md":"text-xs")},singleValue:function(t){return"rtl:text-right ltr:text-left ".concat(h?"text-md":"text-xs")},input:function(t){return"rtl:text-right ltr:text-left ".concat(h?"text-md":"text-xs")},valueContainer:function(t){return"!outline-none"},indicatorSeparator:function(t){return"!hidden"},menu:function(t){return"!shadow-none border border-text-400 !rounded-[6px] py-[6px]"},option:function(t){return"p-[6px] ".concat((t.isFocused,""))}},styles:{option:function(t,e){return{"&>p":{cursor:"pointer",backgroundColor:e.isFocused||e.isSelected?"#eef3fa":"#fff",height:40,display:"flex",fontWeight:"normal",alignItems:"center",justifyContent:"flex-start",padding:"10px",borderRadius:"4px",color:"#1f1f1f"}}}}}),(null===(e=l.errors)||void 0===e?void 0:e[c])&&(null===(n=l.touched)||void 0===n?void 0:n[c])&&(0,o.jsx)("p",{className:"text-error-primary text-[10px] mt-1",children:null===(u=l.errors)||void 0===u?void 0:u[c]})]})}},9354:function(t,e,n){var r=n(7047),a=n(184);e.Z=function(){return(0,a.jsxs)("div",{className:"grid",children:[(0,a.jsx)("div",{className:"w-full h-[71px] bg-text-200 border border-text-300 rounded-t-[4px] grid grid-cols-6 items-center justify-center px-4",children:Array.from(Array(5).keys()).map((function(t,e){return(0,a.jsx)(r.Z,{variant:"rounded",width:"37px",height:18,animation:"wave"},e)}))}),Array.from(Array(5).keys()).map((function(t,e){return(0,a.jsxs)("div",{className:"w-full h-[71px] border border-text-300 border-t-0 rounded-t-[4px] grid grid-cols-6 items-center justify-center px-4",children:[Array.from(Array(5).keys()).map((function(t,e){return(0,a.jsx)(r.Z,{variant:"rounded",width:"45px",height:18,animation:"wave"},e)})),(0,a.jsx)("div",{className:"w-[120px] flex items-cente justify-center",children:(0,a.jsx)("div",{className:"w-[92px] h-[38px] rounded-full border border-text-400 flex items-center justify-center",children:(0,a.jsx)(r.Z,{variant:"rounded",width:"47px",height:14,animation:"wave"})})})]},e)}))]})}}}]);
//# sourceMappingURL=7179.f554daa1.chunk.js.map