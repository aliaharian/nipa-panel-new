(self.webpackChunknipa_panel_new=self.webpackChunknipa_panel_new||[]).push([[586],{9504:function(e,t,n){e.exports=n(269)},269:function(e,t,n){"use strict";var o,s=(o=n(2791))&&"object"==typeof o&&"default"in o?o.default:o,a=n(4164);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function r(e,t){e.prototype=Object.create(t.prototype),function(e,t){for(var n=Object.getOwnPropertyNames(t),o=0;o<n.length;o++){var s=n[o],a=Object.getOwnPropertyDescriptor(t,s);a&&a.configurable&&void 0===e[s]&&Object.defineProperty(e,s,a)}}(e.prototype.constructor=e,t)}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var l=function(e,t,n,o,s,a,i,r){if(!e){var u;if(void 0===t)u=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[n,o,s,a,i,r],c=0;(u=new Error(t.replace(/%s/g,(function(){return l[c++]})))).name="Invariant Violation"}throw u.framesToPop=1,u}};function c(e,t,n){if("selectionStart"in e&&"selectionEnd"in e)e.selectionStart=t,e.selectionEnd=n;else{var o=e.createTextRange();o.collapse(!0),o.moveStart("character",t),o.moveEnd("character",n-t),o.select()}}var h={9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"};function f(e,t,n){var o="",s="",a=null,i=[];if(void 0===t&&(t="_"),null==n&&(n=h),!e||"string"!=typeof e)return{maskChar:t,formatChars:n,mask:null,prefix:null,lastEditablePosition:null,permanents:[]};var r=!1;return e.split("").forEach((function(e){r=!r&&"\\"===e||(r||!n[e]?(i.push(o.length),o.length===i.length-1&&(s+=e)):a=o.length+1,o+=e,!1)})),{maskChar:t,formatChars:n,prefix:s,mask:o,lastEditablePosition:a,permanents:i}}function p(e,t){return-1!==e.permanents.indexOf(t)}function v(e,t,n){var o=e.mask,s=e.formatChars;if(!n)return!1;if(p(e,t))return o[t]===n;var a=s[o[t]];return new RegExp(a).test(n)}function d(e,t){return t.split("").every((function(t,n){return p(e,n)||!v(e,n,t)}))}function m(e,t){var n=e.maskChar,o=e.prefix;if(!n){for(;t.length>o.length&&p(e,t.length-1);)t=t.slice(0,t.length-1);return t.length}for(var s=o.length,a=t.length;a>=o.length;a--){var i=t[a];if(!p(e,a)&&v(e,a,i)){s=a+1;break}}return s}function g(e,t){return m(e,t)===e.mask.length}function k(e,t){var n=e.maskChar,o=e.mask,s=e.prefix;if(!n){for((t=w(e,"",t,0)).length<s.length&&(t=s);t.length<o.length&&p(e,t.length);)t+=o[t.length];return t}if(t)return w(e,k(e,""),t,0);for(var a=0;a<o.length;a++)p(e,a)?t+=o[a]:t+=n;return t}function w(e,t,n,o){var s=e.mask,a=e.maskChar,i=e.prefix,r=n.split(""),u=g(e,t);return!a&&o>t.length&&(t+=s.slice(t.length,o)),r.every((function(n){for(;c=n,p(e,l=o)&&c!==s[l];){if(o>=t.length&&(t+=s[o]),r=n,a&&p(e,o)&&r===a)return!0;if(++o>=s.length)return!1}var r,l,c;return!v(e,o,n)&&n!==a||(o<t.length?t=a||u||o<i.length?t.slice(0,o)+n+t.slice(o+1):(t=t.slice(0,o)+n+t.slice(o),k(e,t)):a||(t+=n),++o<s.length)})),t}function C(e,t){for(var n=e.mask,o=t;o<n.length;++o)if(!p(e,o))return o;return null}function S(e){return e||0===e?e+"":""}function O(e,t,n,o,s){var a=e.mask,i=e.prefix,r=e.lastEditablePosition,u=t,l="",c=0,h=0,f=Math.min(s.start,n.start);return n.end>s.start?h=(c=function(e,t,n,o){var s=e.mask,a=e.maskChar,i=n.split(""),r=o;return i.every((function(t){for(;i=t,p(e,n=o)&&i!==s[n];)if(++o>=s.length)return!1;var n,i;return(v(e,o,t)||t===a)&&o++,o<s.length})),o-r}(e,0,l=u.slice(s.start,n.end),f))?s.length:0:u.length<o.length&&(h=o.length-u.length),u=o,h&&(1!==h||s.length||(f=s.start===n.start?C(e,n.start):function(e,t){for(var n=t;0<=n;--n)if(!p(e,n))return n;return null}(e,n.start)),u=function(e,t,n,o){var s=n+o,a=e.maskChar,i=e.mask,r=e.prefix,u=t.split("");if(a)return u.map((function(t,o){return o<n||s<=o?t:p(e,o)?i[o]:a})).join("");for(var l=s;l<u.length;l++)p(e,l)&&(u[l]="");return n=Math.max(r.length,n),u.splice(n,s-n),t=u.join(""),k(e,t)}(e,u,f,h)),u=w(e,u,l,f),(f+=c)>=a.length?f=a.length:f<i.length&&!c?f=i.length:f>=i.length&&f<r&&c&&(f=C(e,f)),l||(l=null),{value:u=k(e,u),enteredString:l,selection:{start:f,end:f}}}function b(e){return"function"==typeof e}function Z(){return window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame}function M(e){return(Z()?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame:function(){return setTimeout(e,1e3/60)})(e)}function y(e){(Z()||clearTimeout)(e)}var I=function(e){function t(t){var n=e.call(this,t)||this;n.focused=!1,n.mounted=!1,n.previousSelection=null,n.selectionDeferId=null,n.saveSelectionLoopDeferId=null,n.saveSelectionLoop=function(){n.previousSelection=n.getSelection(),n.saveSelectionLoopDeferId=M(n.saveSelectionLoop)},n.runSaveSelectionLoop=function(){null===n.saveSelectionLoopDeferId&&n.saveSelectionLoop()},n.stopSaveSelectionLoop=function(){null!==n.saveSelectionLoopDeferId&&(y(n.saveSelectionLoopDeferId),n.saveSelectionLoopDeferId=null,n.previousSelection=null)},n.getInputDOMNode=function(){if(!n.mounted)return null;var e=a.findDOMNode(u(u(n))),t="undefined"!=typeof window&&e instanceof window.Element;if(e&&!t)return null;if("INPUT"!==e.nodeName&&(e=e.querySelector("input")),!e)throw new Error("react-input-mask: inputComponent doesn't contain input node");return e},n.getInputValue=function(){var e=n.getInputDOMNode();return e?e.value:null},n.setInputValue=function(e){var t=n.getInputDOMNode();t&&(n.value=e,t.value=e)},n.setCursorToEnd=function(){var e=m(n.maskOptions,n.value),t=C(n.maskOptions,e);null!==t&&n.setCursorPosition(t)},n.setSelection=function(e,t,o){void 0===o&&(o={});var s=n.getInputDOMNode(),a=n.isFocused();s&&a&&(o.deferred||c(s,e,t),null!==n.selectionDeferId&&y(n.selectionDeferId),n.selectionDeferId=M((function(){n.selectionDeferId=null,c(s,e,t)})),n.previousSelection={start:e,end:t,length:Math.abs(t-e)})},n.getSelection=function(){return function(e){var t=0,n=0;if("selectionStart"in e&&"selectionEnd"in e)t=e.selectionStart,n=e.selectionEnd;else{var o=document.selection.createRange();o.parentElement()===e&&(t=-o.moveStart("character",-e.value.length),n=-o.moveEnd("character",-e.value.length))}return{start:t,end:n,length:n-t}}(n.getInputDOMNode())},n.getCursorPosition=function(){return n.getSelection().start},n.setCursorPosition=function(e){n.setSelection(e,e)},n.isFocused=function(){return n.focused},n.getBeforeMaskedValueChangeConfig=function(){var e=n.maskOptions,t=e.mask,o=e.maskChar,s=e.permanents,a=e.formatChars;return{mask:t,maskChar:o,permanents:s,alwaysShowMask:!!n.props.alwaysShowMask,formatChars:a}},n.isInputAutofilled=function(e,t,o,s){var a=n.getInputDOMNode();try{if(a.matches(":-webkit-autofill"))return!0}catch(l){}return!n.focused||s.end<o.length&&t.end===e.length},n.onChange=function(e){var t=u(u(n)).beforePasteState,o=u(u(n)).previousSelection,s=n.props.beforeMaskedValueChange,a=n.getInputValue(),i=n.value,r=n.getSelection();n.isInputAutofilled(a,r,i,o)&&(i=k(n.maskOptions,""),o={start:0,end:0,length:0}),t&&(o=t.selection,i=t.value,r={start:o.start+a.length,end:o.start+a.length,length:0},a=i.slice(0,o.start)+a+i.slice(o.end),n.beforePasteState=null);var l=O(n.maskOptions,a,r,i,o),c=l.enteredString,h=l.selection,f=l.value;if(b(s)){var p=s({value:f,selection:h},{value:i,selection:o},c,n.getBeforeMaskedValueChangeConfig());f=p.value,h=p.selection}n.setInputValue(f),b(n.props.onChange)&&n.props.onChange(e),n.isWindowsPhoneBrowser?n.setSelection(h.start,h.end,{deferred:!0}):n.setSelection(h.start,h.end)},n.onFocus=function(e){var t=n.props.beforeMaskedValueChange,o=n.maskOptions,s=o.mask,a=o.prefix;if(n.focused=!0,n.mounted=!0,s){if(n.value)m(n.maskOptions,n.value)<n.maskOptions.mask.length&&n.setCursorToEnd();else{var i=k(n.maskOptions,a),r=k(n.maskOptions,i),u=m(n.maskOptions,r),l=C(n.maskOptions,u),c={start:l,end:l};if(b(t)){var h=t({value:r,selection:c},{value:n.value,selection:null},null,n.getBeforeMaskedValueChangeConfig());r=h.value,c=h.selection}var f=r!==n.getInputValue();f&&n.setInputValue(r),f&&b(n.props.onChange)&&n.props.onChange(e),n.setSelection(c.start,c.end)}n.runSaveSelectionLoop()}b(n.props.onFocus)&&n.props.onFocus(e)},n.onBlur=function(e){var t=n.props.beforeMaskedValueChange,o=n.maskOptions.mask;if(n.stopSaveSelectionLoop(),n.focused=!1,o&&!n.props.alwaysShowMask&&d(n.maskOptions,n.value)){var s="";b(t)&&(s=t({value:s,selection:null},{value:n.value,selection:n.previousSelection},null,n.getBeforeMaskedValueChangeConfig()).value);var a=s!==n.getInputValue();a&&n.setInputValue(s),a&&b(n.props.onChange)&&n.props.onChange(e)}b(n.props.onBlur)&&n.props.onBlur(e)},n.onMouseDown=function(e){if(!n.focused&&document.addEventListener){n.mouseDownX=e.clientX,n.mouseDownY=e.clientY,n.mouseDownTime=(new Date).getTime();document.addEventListener("mouseup",(function e(t){if(document.removeEventListener("mouseup",e),n.focused){var o=Math.abs(t.clientX-n.mouseDownX),s=Math.abs(t.clientY-n.mouseDownY),a=Math.max(o,s),i=(new Date).getTime()-n.mouseDownTime;(a<=10&&i<=200||a<=5&&i<=300)&&n.setCursorToEnd()}}))}b(n.props.onMouseDown)&&n.props.onMouseDown(e)},n.onPaste=function(e){b(n.props.onPaste)&&n.props.onPaste(e),e.defaultPrevented||(n.beforePasteState={value:n.getInputValue(),selection:n.getSelection()},n.setInputValue(""))},n.handleRef=function(e){null==n.props.children&&b(n.props.inputRef)&&n.props.inputRef(e)};var o=t.mask,s=t.maskChar,i=t.formatChars,r=t.alwaysShowMask,l=t.beforeMaskedValueChange,h=t.defaultValue,p=t.value;n.maskOptions=f(o,s,i),null==h&&(h=""),null==p&&(p=h);var v=S(p);if(n.maskOptions.mask&&(r||v)&&(v=k(n.maskOptions,v),b(l))){var g=t.value;null==t.value&&(g=h),v=l({value:v,selection:null},{value:g=S(g),selection:null},null,n.getBeforeMaskedValueChangeConfig()).value}return n.value=v,n}r(t,e);var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.getInputDOMNode()&&(this.isWindowsPhoneBrowser=function(){var e=new RegExp("windows","i"),t=new RegExp("phone","i"),n=navigator.userAgent;return e.test(n)&&t.test(n)}(),this.maskOptions.mask&&this.getInputValue()!==this.value&&this.setInputValue(this.value))},n.componentDidUpdate=function(){var e=this.previousSelection,t=this.props,n=t.beforeMaskedValueChange,o=t.alwaysShowMask,s=t.mask,a=t.maskChar,i=t.formatChars,r=this.maskOptions,u=o||this.isFocused(),l=null!=this.props.value,c=l?S(this.props.value):this.value,h=e?e.start:null;if(this.maskOptions=f(s,a,i),this.maskOptions.mask){!r.mask&&this.isFocused()&&this.runSaveSelectionLoop();var p=this.maskOptions.mask&&this.maskOptions.mask!==r.mask;if(r.mask||l||(c=this.getInputValue()),(p||this.maskOptions.mask&&(c||u))&&(c=k(this.maskOptions,c)),p){var v=m(this.maskOptions,c);(null===h||v<h)&&(h=g(this.maskOptions,c)?v:C(this.maskOptions,v))}!this.maskOptions.mask||!d(this.maskOptions,c)||u||l&&this.props.value||(c="");var w={start:h,end:h};if(b(n)){var O=n({value:c,selection:w},{value:this.value,selection:this.previousSelection},null,this.getBeforeMaskedValueChangeConfig());c=O.value,w=O.selection}this.value=c;var Z=this.getInputValue()!==this.value;Z?(this.setInputValue(this.value),this.forceUpdate()):p&&this.forceUpdate();var M=!1;null!=w.start&&null!=w.end&&(M=!e||e.start!==w.start||e.end!==w.end),(M||Z)&&this.setSelection(w.start,w.end)}else r.mask&&(this.stopSaveSelectionLoop(),this.forceUpdate())},n.componentWillUnmount=function(){this.mounted=!1,null!==this.selectionDeferId&&y(this.selectionDeferId),this.stopSaveSelectionLoop()},n.render=function(){var e,t=this.props,n=(t.mask,t.alwaysShowMask,t.maskChar,t.formatChars,t.inputRef,t.beforeMaskedValueChange,t.children),o=function(e,t){if(null==e)return{};var n,o,s={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],0<=t.indexOf(n)||(s[n]=e[n]);return s}(t,["mask","alwaysShowMask","maskChar","formatChars","inputRef","beforeMaskedValueChange","children"]);if(n){b(n)||l(!1);var a=["onChange","onPaste","onMouseDown","onFocus","onBlur","value","disabled","readOnly"],r=i({},o);a.forEach((function(e){return delete r[e]})),e=n(r),a.filter((function(t){return null!=e.props[t]&&e.props[t]!==o[t]})).length&&l(!1)}else e=s.createElement("input",i({ref:this.handleRef},o));var u={onFocus:this.onFocus,onBlur:this.onBlur};return this.maskOptions.mask&&(o.disabled||o.readOnly||(u.onChange=this.onChange,u.onPaste=this.onPaste,u.onMouseDown=this.onMouseDown),null!=o.value&&(u.value=this.value)),e=s.cloneElement(e,u)},t}(s.Component);e.exports=I},8556:function(e,t,n){"use strict";n.d(t,{D:function(){return P}});var o,s,a,i,r,u,l=n(1413),c=n(9439),h=n(2791),f=n(5671),p=n(3144),v=n(7326),d=n(136),m=n(9388),g=n(101),k=n(2346),w=n(6033),C=n(3889),S=n(3092),O=n(2756),b=n(7211),Z=n(8974),M=n(5391),y=(o=new WeakMap,s=new WeakMap,a=new WeakMap,i=new WeakMap,r=new WeakSet,u=new WeakSet,function(e){(0,d.Z)(n,e);var t=(0,m.Z)(n);function n(e,l){var c;return(0,f.Z)(this,n),c=t.call(this),(0,g.Z)((0,v.Z)(c),u),(0,g.Z)((0,v.Z)(c),r),(0,k.Z)((0,v.Z)(c),o,{writable:!0,value:void 0}),(0,k.Z)((0,v.Z)(c),s,{writable:!0,value:void 0}),(0,k.Z)((0,v.Z)(c),a,{writable:!0,value:void 0}),(0,k.Z)((0,v.Z)(c),i,{writable:!0,value:void 0}),(0,S.Z)((0,v.Z)(c),s,void 0),(0,S.Z)((0,v.Z)(c),o,e),c.setOptions(l),c.bindMethods(),(0,C.Z)((0,v.Z)(c),r,I).call((0,v.Z)(c)),c}return(0,p.Z)(n,[{key:"bindMethods",value:function(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}},{key:"setOptions",value:function(e){var t,n=this.options;this.options=(0,w.Z)(this,o).defaultMutationOptions(e),(0,M.VS)(n,this.options)||(0,w.Z)(this,o).getMutationCache().notify({type:"observerOptionsUpdated",mutation:(0,w.Z)(this,a),observer:this}),null===(t=(0,w.Z)(this,a))||void 0===t||t.setOptions(this.options),null!==n&&void 0!==n&&n.mutationKey&&this.options.mutationKey&&(0,M.Ym)(n.mutationKey)!==(0,M.Ym)(this.options.mutationKey)&&this.reset()}},{key:"onUnsubscribe",value:function(){var e;this.hasListeners()||(null===(e=(0,w.Z)(this,a))||void 0===e||e.removeObserver(this))}},{key:"onMutationUpdate",value:function(e){(0,C.Z)(this,r,I).call(this),(0,C.Z)(this,u,D).call(this,e)}},{key:"getCurrentResult",value:function(){return(0,w.Z)(this,s)}},{key:"reset",value:function(){var e;null===(e=(0,w.Z)(this,a))||void 0===e||e.removeObserver(this),(0,S.Z)(this,a,void 0),(0,C.Z)(this,r,I).call(this),(0,C.Z)(this,u,D).call(this)}},{key:"mutate",value:function(e,t){var n;return(0,S.Z)(this,i,t),null===(n=(0,w.Z)(this,a))||void 0===n||n.removeObserver(this),(0,S.Z)(this,a,(0,w.Z)(this,o).getMutationCache().build((0,w.Z)(this,o),this.options)),(0,w.Z)(this,a).addObserver(this),(0,w.Z)(this,a).execute(e)}}]),n}(Z.l));function I(){var e,t,n=null!==(e=null===(t=(0,w.Z)(this,a))||void 0===t?void 0:t.state)&&void 0!==e?e:(0,O.R)();(0,S.Z)(this,s,(0,l.Z)((0,l.Z)({},n),{},{isPending:"pending"===n.status,isSuccess:"success"===n.status,isError:"error"===n.status,isIdle:"idle"===n.status,mutate:this.mutate,reset:this.reset}))}function D(e){var t=this;b.V.batch((function(){if((0,w.Z)(t,i)&&t.hasListeners()){var n,o,a,r,u=(0,w.Z)(t,s).variables,l=(0,w.Z)(t,s).context;if("success"===(null===e||void 0===e?void 0:e.type))null===(n=(o=(0,w.Z)(t,i)).onSuccess)||void 0===n||n.call(o,e.data,u,l),null===(a=(r=(0,w.Z)(t,i)).onSettled)||void 0===a||a.call(r,e.data,null,u,l);else if("error"===(null===e||void 0===e?void 0:e.type)){var c,h,f,p;null===(c=(h=(0,w.Z)(t,i)).onError)||void 0===c||c.call(h,e.error,u,l),null===(f=(p=(0,w.Z)(t,i)).onSettled)||void 0===f||f.call(p,void 0,e.error,u,l)}}t.listeners.forEach((function(e){e((0,w.Z)(t,s))}))}))}var E=n(3713),V=n(8981);function P(e,t){var n=(0,E.NL)(t),o=h.useState((function(){return new y(n,e)})),s=(0,c.Z)(o,1)[0];h.useEffect((function(){s.setOptions(e)}),[s,e]);var a=h.useSyncExternalStore(h.useCallback((function(e){return s.subscribe(b.V.batchCalls(e))}),[s]),(function(){return s.getCurrentResult()}),(function(){return s.getCurrentResult()})),i=h.useCallback((function(e,t){s.mutate(e,t).catch(L)}),[s]);if(a.error&&(0,V.L)(s.options.throwOnError,[a.error]))throw a.error;return(0,l.Z)((0,l.Z)({},a),{},{mutate:i,mutateAsync:a.mutate})}function L(){}}}]);
//# sourceMappingURL=586.d560605e.chunk.js.map