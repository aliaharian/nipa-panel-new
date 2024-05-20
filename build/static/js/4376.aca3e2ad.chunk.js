"use strict";(self.webpackChunknipa_panel_new=self.webpackChunknipa_panel_new||[]).push([[4376],{540:(e,t,n)=>{function o(e){return"string"===typeof e}n.d(t,{g:()=>o})},1053:(e,t,n)=>{n.d(t,{A:()=>o});const o=n(5043).createContext(void 0)},4827:(e,t,n)=>{function o(e){let{props:t,states:n,muiFormControl:o}=e;return n.reduce(((e,n)=>(e[n]=t[n],o&&"undefined"===typeof t[n]&&(e[n]=o[n]),e)),{})}n.d(t,{A:()=>o})},5213:(e,t,n)=>{n.d(t,{A:()=>a});var o=n(5043),r=n(1053);function a(){return o.useContext(r.A)}},3360:(e,t,n)=>{n.d(t,{A:()=>g});var o=n(8587),r=n(8168),a=n(5043),i=n(8606),l=n(835),s=n(645),d=n(4535),u=n(1475),p=n(7864),c=n(3138),m=n(579);const h=["disableUnderline","components","componentsProps","fullWidth","inputComponent","multiline","slotProps","slots","type"],f=(0,d.Ay)(s.Sh,{shouldForwardProp:e=>(0,u.A)(e)||"classes"===e,name:"MuiInput",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[...(0,s.WC)(e,t),!n.disableUnderline&&t.underline]}})((e=>{let{theme:t,ownerState:n}=e;let o="light"===t.palette.mode?"rgba(0, 0, 0, 0.42)":"rgba(255, 255, 255, 0.7)";return t.vars&&(o="rgba(".concat(t.vars.palette.common.onBackgroundChannel," / ").concat(t.vars.opacity.inputUnderline,")")),(0,r.A)({position:"relative"},n.formControl&&{"label + &":{marginTop:16}},!n.disableUnderline&&{"&::after":{borderBottom:"2px solid ".concat((t.vars||t).palette[n.color].main),left:0,bottom:0,content:'""',position:"absolute",right:0,transform:"scaleX(0)",transition:t.transitions.create("transform",{duration:t.transitions.duration.shorter,easing:t.transitions.easing.easeOut}),pointerEvents:"none"},["&.".concat(c.A.focused,":after")]:{transform:"scaleX(1) translateX(0)"},["&.".concat(c.A.error)]:{"&::before, &::after":{borderBottomColor:(t.vars||t).palette.error.main}},"&::before":{borderBottom:"1px solid ".concat(o),left:0,bottom:0,content:'"\\00a0"',position:"absolute",right:0,transition:t.transitions.create("border-bottom-color",{duration:t.transitions.duration.shorter}),pointerEvents:"none"},["&:hover:not(.".concat(c.A.disabled,", .").concat(c.A.error,"):before")]:{borderBottom:"2px solid ".concat((t.vars||t).palette.text.primary),"@media (hover: none)":{borderBottom:"1px solid ".concat(o)}},["&.".concat(c.A.disabled,":before")]:{borderBottomStyle:"dotted"}})})),A=(0,d.Ay)(s.f3,{name:"MuiInput",slot:"Input",overridesResolver:s.Oj})({}),b=a.forwardRef((function(e,t){var n,a,d,u;const b=(0,p.A)({props:e,name:"MuiInput"}),{disableUnderline:g,components:v={},componentsProps:y,fullWidth:w=!1,inputComponent:x="input",multiline:S=!1,slotProps:C,slots:R={},type:B="text"}=b,z=(0,o.A)(b,h),M=(e=>{const{classes:t,disableUnderline:n}=e,o={root:["root",!n&&"underline"],input:["input"]},a=(0,i.A)(o,c.B,t);return(0,r.A)({},t,a)})(b),I={root:{ownerState:{disableUnderline:g}}},W=(null!=C?C:y)?(0,l.A)(null!=C?C:y,I):I,k=null!=(n=null!=(a=R.root)?a:v.Root)?n:f,P=null!=(d=null!=(u=R.input)?u:v.Input)?d:A;return(0,m.jsx)(s.Ay,(0,r.A)({slots:{root:k,input:P},slotProps:W,fullWidth:w,inputComponent:x,multiline:S,ref:t,type:B},z,{classes:M}))}));b.muiName="Input";const g=b},3138:(e,t,n)=>{n.d(t,{A:()=>s,B:()=>l});var o=n(8168),r=n(7056),a=n(4579),i=n(1470);function l(e){return(0,a.Ay)("MuiInput",e)}const s=(0,o.A)({},i.A,(0,r.A)("MuiInput",["root","underline","input"]))},1787:(e,t,n)=>{n.d(t,{A:()=>x});var o=n(8587),r=n(8168),a=n(5043),i=n(8387),l=n(8606),s=n(6803),d=n(5865),u=n(1053),p=n(5213),c=n(4535),m=n(7056),h=n(4579);function f(e){return(0,h.Ay)("MuiInputAdornment",e)}const A=(0,m.A)("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]);var b,g=n(7864),v=n(579);const y=["children","className","component","disablePointerEvents","disableTypography","position","variant"],w=(0,c.Ay)("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t["position".concat((0,s.A)(n.position))],!0===n.disablePointerEvents&&t.disablePointerEvents,t[n.variant]]}})((e=>{let{theme:t,ownerState:n}=e;return(0,r.A)({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(t.vars||t).palette.action.active},"filled"===n.variant&&{["&.".concat(A.positionStart,"&:not(.").concat(A.hiddenLabel,")")]:{marginTop:16}},"start"===n.position&&{marginRight:8},"end"===n.position&&{marginLeft:8},!0===n.disablePointerEvents&&{pointerEvents:"none"})})),x=a.forwardRef((function(e,t){const n=(0,g.A)({props:e,name:"MuiInputAdornment"}),{children:c,className:m,component:h="div",disablePointerEvents:A=!1,disableTypography:x=!1,position:S,variant:C}=n,R=(0,o.A)(n,y),B=(0,p.A)()||{};let z=C;C&&B.variant,B&&!z&&(z=B.variant);const M=(0,r.A)({},n,{hiddenLabel:B.hiddenLabel,size:B.size,disablePointerEvents:A,position:S,variant:z}),I=(e=>{const{classes:t,disablePointerEvents:n,hiddenLabel:o,position:r,size:a,variant:i}=e,d={root:["root",n&&"disablePointerEvents",r&&"position".concat((0,s.A)(r)),i,o&&"hiddenLabel",a&&"size".concat((0,s.A)(a))]};return(0,l.A)(d,f,t)})(M);return(0,v.jsx)(u.A.Provider,{value:null,children:(0,v.jsx)(w,(0,r.A)({as:h,ownerState:M,className:(0,i.A)(I.root,m),ref:t},R,{children:"string"!==typeof c||x?(0,v.jsxs)(a.Fragment,{children:["start"===S?b||(b=(0,v.jsx)("span",{className:"notranslate",children:"\u200b"})):null,c]}):(0,v.jsx)(d.A,{color:"text.secondary",children:c})}))})}))},645:(e,t,n)=>{n.d(t,{f3:()=>O,Sh:()=>F,Ay:()=>U,Oj:()=>T,WC:()=>N});var o=n(8587),r=n(8168),a=n(6632),i=n(5043),l=n(8387),s=n(7042),d=n(6288),u=n(3844),p=n(6440),c=n(579);const m=["onChange","maxRows","minRows","style","value"];function h(e){return parseInt(e,10)||0}const f={visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"};const A=i.forwardRef((function(e,t){const{onChange:n,maxRows:a,minRows:l=1,style:A,value:b}=e,g=(0,o.A)(e,m),{current:v}=i.useRef(null!=b),y=i.useRef(null),w=(0,s.A)(t,y),x=i.useRef(null),S=i.useCallback((()=>{const t=y.current,n=(0,d.A)(t).getComputedStyle(t);if("0px"===n.width)return{outerHeightStyle:0,overflowing:!1};const o=x.current;o.style.width=n.width,o.value=t.value||e.placeholder||"x","\n"===o.value.slice(-1)&&(o.value+=" ");const r=n.boxSizing,i=h(n.paddingBottom)+h(n.paddingTop),s=h(n.borderBottomWidth)+h(n.borderTopWidth),u=o.scrollHeight;o.value="x";const p=o.scrollHeight;let c=u;l&&(c=Math.max(Number(l)*p,c)),a&&(c=Math.min(Number(a)*p,c)),c=Math.max(c,p);return{outerHeightStyle:c+("border-box"===r?i+s:0),overflowing:Math.abs(c-u)<=1}}),[a,l,e.placeholder]),C=i.useCallback((()=>{const e=S();if(void 0===(t=e)||null===t||0===Object.keys(t).length||0===t.outerHeightStyle&&!t.overflowing)return;var t;const n=y.current;n.style.height="".concat(e.outerHeightStyle,"px"),n.style.overflow=e.overflowing?"hidden":""}),[S]);(0,u.A)((()=>{const e=()=>{C()};let t;const n=(0,p.A)(e),o=y.current,r=(0,d.A)(o);let a;return r.addEventListener("resize",n),"undefined"!==typeof ResizeObserver&&(a=new ResizeObserver(e),a.observe(o)),()=>{n.clear(),cancelAnimationFrame(t),r.removeEventListener("resize",n),a&&a.disconnect()}}),[S,C]),(0,u.A)((()=>{C()}));return(0,c.jsxs)(i.Fragment,{children:[(0,c.jsx)("textarea",(0,r.A)({value:b,onChange:e=>{v||C(),n&&n(e)},ref:w,rows:l,style:A},g)),(0,c.jsx)("textarea",{"aria-hidden":!0,className:e.className,readOnly:!0,ref:x,tabIndex:-1,style:(0,r.A)({},f,A,{paddingTop:0,paddingBottom:0})})]})}));var b=n(540),g=n(8606),v=n(4827),y=n(1053),w=n(5213),x=n(4535),S=n(7864),C=n(6803),R=n(5849),B=n(5013),z=n(869),M=n(5527);const I=function(e){let{styles:t,themeId:n,defaultTheme:o={}}=e;const r=(0,M.A)(o),a="function"===typeof t?t(n&&r[n]||r):t;return(0,c.jsx)(z.A,{styles:a})};var W=n(4936),k=n(3375);const P=function(e){return(0,c.jsx)(I,(0,r.A)({},e,{defaultTheme:W.A,themeId:k.A}))};var E=n(112),j=n(1470);const L=["aria-describedby","autoComplete","autoFocus","className","color","components","componentsProps","defaultValue","disabled","disableInjectingGlobalStyles","endAdornment","error","fullWidth","id","inputComponent","inputProps","inputRef","margin","maxRows","minRows","multiline","name","onBlur","onChange","onClick","onFocus","onKeyDown","onKeyUp","placeholder","readOnly","renderSuffix","rows","size","slotProps","slots","startAdornment","type","value"],N=(e,t)=>{const{ownerState:n}=e;return[t.root,n.formControl&&t.formControl,n.startAdornment&&t.adornedStart,n.endAdornment&&t.adornedEnd,n.error&&t.error,"small"===n.size&&t.sizeSmall,n.multiline&&t.multiline,n.color&&t["color".concat((0,C.A)(n.color))],n.fullWidth&&t.fullWidth,n.hiddenLabel&&t.hiddenLabel]},T=(e,t)=>{const{ownerState:n}=e;return[t.input,"small"===n.size&&t.inputSizeSmall,n.multiline&&t.inputMultiline,"search"===n.type&&t.inputTypeSearch,n.startAdornment&&t.inputAdornedStart,n.endAdornment&&t.inputAdornedEnd,n.hiddenLabel&&t.inputHiddenLabel]},F=(0,x.Ay)("div",{name:"MuiInputBase",slot:"Root",overridesResolver:N})((e=>{let{theme:t,ownerState:n}=e;return(0,r.A)({},t.typography.body1,{color:(t.vars||t).palette.text.primary,lineHeight:"1.4375em",boxSizing:"border-box",position:"relative",cursor:"text",display:"inline-flex",alignItems:"center",["&.".concat(j.A.disabled)]:{color:(t.vars||t).palette.text.disabled,cursor:"default"}},n.multiline&&(0,r.A)({padding:"4px 0 5px"},"small"===n.size&&{paddingTop:1}),n.fullWidth&&{width:"100%"})})),O=(0,x.Ay)("input",{name:"MuiInputBase",slot:"Input",overridesResolver:T})((e=>{let{theme:t,ownerState:n}=e;const o="light"===t.palette.mode,a=(0,r.A)({color:"currentColor"},t.vars?{opacity:t.vars.opacity.inputPlaceholder}:{opacity:o?.42:.5},{transition:t.transitions.create("opacity",{duration:t.transitions.duration.shorter})}),i={opacity:"0 !important"},l=t.vars?{opacity:t.vars.opacity.inputPlaceholder}:{opacity:o?.42:.5};return(0,r.A)({font:"inherit",letterSpacing:"inherit",color:"currentColor",padding:"4px 0 5px",border:0,boxSizing:"content-box",background:"none",height:"1.4375em",margin:0,WebkitTapHighlightColor:"transparent",display:"block",minWidth:0,width:"100%",animationName:"mui-auto-fill-cancel",animationDuration:"10ms","&::-webkit-input-placeholder":a,"&::-moz-placeholder":a,"&:-ms-input-placeholder":a,"&::-ms-input-placeholder":a,"&:focus":{outline:0},"&:invalid":{boxShadow:"none"},"&::-webkit-search-decoration":{WebkitAppearance:"none"},["label[data-shrink=false] + .".concat(j.A.formControl," &")]:{"&::-webkit-input-placeholder":i,"&::-moz-placeholder":i,"&:-ms-input-placeholder":i,"&::-ms-input-placeholder":i,"&:focus::-webkit-input-placeholder":l,"&:focus::-moz-placeholder":l,"&:focus:-ms-input-placeholder":l,"&:focus::-ms-input-placeholder":l},["&.".concat(j.A.disabled)]:{opacity:1,WebkitTextFillColor:(t.vars||t).palette.text.disabled},"&:-webkit-autofill":{animationDuration:"5000s",animationName:"mui-auto-fill"}},"small"===n.size&&{paddingTop:1},n.multiline&&{height:"auto",resize:"none",padding:0,paddingTop:0},"search"===n.type&&{MozAppearance:"textfield"})})),H=(0,c.jsx)(P,{styles:{"@keyframes mui-auto-fill":{from:{display:"block"}},"@keyframes mui-auto-fill-cancel":{from:{display:"block"}}}}),U=i.forwardRef((function(e,t){var n;const s=(0,S.A)({props:e,name:"MuiInputBase"}),{"aria-describedby":d,autoComplete:u,autoFocus:p,className:m,components:h={},componentsProps:f={},defaultValue:x,disabled:z,disableInjectingGlobalStyles:M,endAdornment:I,fullWidth:W=!1,id:k,inputComponent:P="input",inputProps:N={},inputRef:T,maxRows:U,minRows:K,multiline:q=!1,name:D,onBlur:V,onChange:_,onClick:X,onFocus:G,onKeyDown:J,onKeyUp:Z,placeholder:Q,readOnly:Y,renderSuffix:$,rows:ee,slotProps:te={},slots:ne={},startAdornment:oe,type:re="text",value:ae}=s,ie=(0,o.A)(s,L),le=null!=N.value?N.value:ae,{current:se}=i.useRef(null!=le),de=i.useRef(),ue=i.useCallback((e=>{0}),[]),pe=(0,R.A)(de,T,N.ref,ue),[ce,me]=i.useState(!1),he=(0,w.A)();const fe=(0,v.A)({props:s,muiFormControl:he,states:["color","disabled","error","hiddenLabel","size","required","filled"]});fe.focused=he?he.focused:ce,i.useEffect((()=>{!he&&z&&ce&&(me(!1),V&&V())}),[he,z,ce,V]);const Ae=he&&he.onFilled,be=he&&he.onEmpty,ge=i.useCallback((e=>{(0,E.lq)(e)?Ae&&Ae():be&&be()}),[Ae,be]);(0,B.A)((()=>{se&&ge({value:le})}),[le,ge,se]);i.useEffect((()=>{ge(de.current)}),[]);let ve=P,ye=N;q&&"input"===ve&&(ye=ee?(0,r.A)({type:void 0,minRows:ee,maxRows:ee},ye):(0,r.A)({type:void 0,maxRows:U,minRows:K},ye),ve=A);i.useEffect((()=>{he&&he.setAdornedStart(Boolean(oe))}),[he,oe]);const we=(0,r.A)({},s,{color:fe.color||"primary",disabled:fe.disabled,endAdornment:I,error:fe.error,focused:fe.focused,formControl:he,fullWidth:W,hiddenLabel:fe.hiddenLabel,multiline:q,size:fe.size,startAdornment:oe,type:re}),xe=(e=>{const{classes:t,color:n,disabled:o,error:r,endAdornment:a,focused:i,formControl:l,fullWidth:s,hiddenLabel:d,multiline:u,readOnly:p,size:c,startAdornment:m,type:h}=e,f={root:["root","color".concat((0,C.A)(n)),o&&"disabled",r&&"error",s&&"fullWidth",i&&"focused",l&&"formControl",c&&"medium"!==c&&"size".concat((0,C.A)(c)),u&&"multiline",m&&"adornedStart",a&&"adornedEnd",d&&"hiddenLabel",p&&"readOnly"],input:["input",o&&"disabled","search"===h&&"inputTypeSearch",u&&"inputMultiline","small"===c&&"inputSizeSmall",d&&"inputHiddenLabel",m&&"inputAdornedStart",a&&"inputAdornedEnd",p&&"readOnly"]};return(0,g.A)(f,j.g,t)})(we),Se=ne.root||h.Root||F,Ce=te.root||f.root||{},Re=ne.input||h.Input||O;return ye=(0,r.A)({},ye,null!=(n=te.input)?n:f.input),(0,c.jsxs)(i.Fragment,{children:[!M&&H,(0,c.jsxs)(Se,(0,r.A)({},Ce,!(0,b.g)(Se)&&{ownerState:(0,r.A)({},we,Ce.ownerState)},{ref:t,onClick:e=>{de.current&&e.currentTarget===e.target&&de.current.focus(),X&&X(e)}},ie,{className:(0,l.A)(xe.root,Ce.className,m,Y&&"MuiInputBase-readOnly"),children:[oe,(0,c.jsx)(y.A.Provider,{value:null,children:(0,c.jsx)(Re,(0,r.A)({ownerState:we,"aria-invalid":fe.error,"aria-describedby":d,autoComplete:u,autoFocus:p,defaultValue:x,disabled:fe.disabled,id:k,onAnimationStart:e=>{ge("mui-auto-fill-cancel"===e.animationName?de.current:{value:"x"})},name:D,placeholder:Q,readOnly:Y,required:fe.required,rows:ee,value:le,onKeyDown:J,onKeyUp:Z,type:re},ye,!(0,b.g)(Re)&&{as:ve,ownerState:(0,r.A)({},we,ye.ownerState)},{ref:pe,className:(0,l.A)(xe.input,ye.className,Y&&"MuiInputBase-readOnly"),onBlur:e=>{V&&V(e),N.onBlur&&N.onBlur(e),he&&he.onBlur?he.onBlur(e):me(!1)},onChange:function(e){if(!se){const t=e.target||de.current;if(null==t)throw new Error((0,a.A)(1));ge({value:t.value})}for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];N.onChange&&N.onChange(e,...n),_&&_(e,...n)},onFocus:e=>{fe.disabled?e.stopPropagation():(G&&G(e),N.onFocus&&N.onFocus(e),he&&he.onFocus?he.onFocus(e):me(!0))}}))}),I,$?$((0,r.A)({},fe,{startAdornment:oe})):null]}))]})}))},1470:(e,t,n)=>{n.d(t,{A:()=>i,g:()=>a});var o=n(7056),r=n(4579);function a(e){return(0,r.Ay)("MuiInputBase",e)}const i=(0,o.A)("MuiInputBase",["root","formControl","focused","disabled","adornedStart","adornedEnd","error","sizeSmall","multiline","colorSecondary","fullWidth","hiddenLabel","readOnly","input","inputSizeSmall","inputMultiline","inputTypeSearch","inputAdornedStart","inputAdornedEnd","inputHiddenLabel"])},112:(e,t,n)=>{function o(e){return null!=e&&!(Array.isArray(e)&&0===e.length)}function r(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e&&(o(e.value)&&""!==e.value||t&&o(e.defaultValue)&&""!==e.defaultValue)}function a(e){return e.startAdornment}n.d(t,{gr:()=>a,lq:()=>r})},5865:(e,t,n)=>{n.d(t,{A:()=>y});var o=n(8587),r=n(8168),a=n(5043),i=n(8387),l=n(8698),s=n(8606),d=n(4535),u=n(7864),p=n(6803),c=n(7056),m=n(4579);function h(e){return(0,m.Ay)("MuiTypography",e)}(0,c.A)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var f=n(579);const A=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],b=(0,d.Ay)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.variant&&t[n.variant],"inherit"!==n.align&&t["align".concat((0,p.A)(n.align))],n.noWrap&&t.noWrap,n.gutterBottom&&t.gutterBottom,n.paragraph&&t.paragraph]}})((e=>{let{theme:t,ownerState:n}=e;return(0,r.A)({margin:0},"inherit"===n.variant&&{font:"inherit"},"inherit"!==n.variant&&t.typography[n.variant],"inherit"!==n.align&&{textAlign:n.align},n.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},n.gutterBottom&&{marginBottom:"0.35em"},n.paragraph&&{marginBottom:16})})),g={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},v={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},y=a.forwardRef((function(e,t){const n=(0,u.A)({props:e,name:"MuiTypography"}),a=(e=>v[e]||e)(n.color),d=(0,l.A)((0,r.A)({},n,{color:a})),{align:c="inherit",className:m,component:y,gutterBottom:w=!1,noWrap:x=!1,paragraph:S=!1,variant:C="body1",variantMapping:R=g}=d,B=(0,o.A)(d,A),z=(0,r.A)({},d,{align:c,color:a,className:m,component:y,gutterBottom:w,noWrap:x,paragraph:S,variant:C,variantMapping:R}),M=y||(S?"p":R[C]||g[C])||"span",I=(e=>{const{align:t,gutterBottom:n,noWrap:o,paragraph:r,variant:a,classes:i}=e,l={root:["root",a,"inherit"!==e.align&&"align".concat((0,p.A)(t)),n&&"gutterBottom",o&&"noWrap",r&&"paragraph"]};return(0,s.A)(l,h,i)})(z);return(0,f.jsx)(b,(0,r.A)({as:M,ref:t,ownerState:z,className:(0,i.A)(I.root,m)},B))}))},5013:(e,t,n)=>{n.d(t,{A:()=>o});const o=n(3844).A}}]);
//# sourceMappingURL=4376.aca3e2ad.chunk.js.map