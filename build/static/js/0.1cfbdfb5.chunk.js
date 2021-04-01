/*! For license information please see 0.1cfbdfb5.chunk.js.LICENSE.txt */
(this["webpackJsonpgoit-react-hw-09-phonebook"]=this["webpackJsonpgoit-react-hw-09-phonebook"]||[]).push([[0],{100:function(e,a,t){"use strict";function r(e,a){if(null==e)return{};var t,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}t.d(a,"a",(function(){return r}))},101:function(e,a,t){var r;!function(){"use strict";var t={}.hasOwnProperty;function n(){for(var e=[],a=0;a<arguments.length;a++){var r=arguments[a];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)&&r.length){var l=n.apply(null,r);l&&e.push(l)}else if("object"===i)for(var o in r)t.call(r,o)&&r[o]&&e.push(o)}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(r=function(){return n}.apply(a,[]))||(e.exports=r)}()},102:function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));t(99);var r=t(1),n=t.n(r),i=n.a.createContext({});i.Consumer,i.Provider;function l(e,a){var t=Object(r.useContext)(i);return e||t[a]||a}},103:function(e,a,t){"use strict";var r=t(99),n=t(100),i=t(101),l=t.n(i),o=t(1),s=t.n(o),c=(t(106),t(7)),u=t.n(c),f={type:u.a.string,tooltip:u.a.bool,as:u.a.elementType},d=s.a.forwardRef((function(e,a){var t=e.as,i=void 0===t?"div":t,o=e.className,c=e.type,u=void 0===c?"valid":c,f=e.tooltip,d=void 0!==f&&f,m=Object(n.a)(e,["as","className","type","tooltip"]);return s.a.createElement(i,Object(r.a)({},m,{ref:a,className:l()(o,u+"-"+(d?"tooltip":"feedback"))}))}));d.displayName="Feedback",d.propTypes=f;var m=d,b=s.a.createContext({controlId:void 0}),v=t(102),p=s.a.forwardRef((function(e,a){var t=e.id,i=e.bsPrefix,c=e.bsCustomPrefix,u=e.className,f=e.type,d=void 0===f?"checkbox":f,m=e.isValid,p=void 0!==m&&m,y=e.isInvalid,h=void 0!==y&&y,O=e.isStatic,x=e.as,j=void 0===x?"input":x,N=Object(n.a)(e,["id","bsPrefix","bsCustomPrefix","className","type","isValid","isInvalid","isStatic","as"]),P=Object(o.useContext)(b),w=P.controlId,C=P.custom?[c,"custom-control-input"]:[i,"form-check-input"],E=C[0],I=C[1];return i=Object(v.a)(E,I),s.a.createElement(j,Object(r.a)({},N,{ref:a,type:d,id:t||w,className:l()(u,i,p&&"is-valid",h&&"is-invalid",O&&"position-static")}))}));p.displayName="FormCheckInput";var y=p,h=s.a.forwardRef((function(e,a){var t=e.bsPrefix,i=e.bsCustomPrefix,c=e.className,u=e.htmlFor,f=Object(n.a)(e,["bsPrefix","bsCustomPrefix","className","htmlFor"]),d=Object(o.useContext)(b),m=d.controlId,p=d.custom?[i,"custom-control-label"]:[t,"form-check-label"],y=p[0],h=p[1];return t=Object(v.a)(y,h),s.a.createElement("label",Object(r.a)({},f,{ref:a,htmlFor:u||m,className:l()(c,t)}))}));h.displayName="FormCheckLabel";var O=h,x=s.a.forwardRef((function(e,a){var t=e.id,i=e.bsPrefix,c=e.bsCustomPrefix,u=e.inline,f=void 0!==u&&u,d=e.disabled,p=void 0!==d&&d,h=e.isValid,x=void 0!==h&&h,j=e.isInvalid,N=void 0!==j&&j,P=e.feedbackTooltip,w=void 0!==P&&P,C=e.feedback,E=e.className,I=e.style,g=e.title,k=void 0===g?"":g,F=e.type,R=void 0===F?"checkbox":F,A=e.label,S=e.children,V=e.custom,T=e.as,L=void 0===T?"input":T,z=Object(n.a)(e,["id","bsPrefix","bsCustomPrefix","inline","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","title","type","label","children","custom","as"]),M="switch"===R||V,_=M?[c,"custom-control"]:[i,"form-check"],D=_[0],K=_[1];i=Object(v.a)(D,K);var q=Object(o.useContext)(b).controlId,G=Object(o.useMemo)((function(){return{controlId:t||q,custom:M}}),[q,M,t]),J=M||null!=A&&!1!==A&&!S,U=s.a.createElement(y,Object(r.a)({},z,{type:"switch"===R?"checkbox":R,ref:a,isValid:x,isInvalid:N,isStatic:!J,disabled:p,as:L}));return s.a.createElement(b.Provider,{value:G},s.a.createElement("div",{style:I,className:l()(E,i,M&&"custom-"+R,f&&i+"-inline")},S||s.a.createElement(s.a.Fragment,null,U,J&&s.a.createElement(O,{title:k},A),(x||N)&&s.a.createElement(m,{type:x?"valid":"invalid",tooltip:w},C))))}));x.displayName="FormCheck",x.Input=y,x.Label=O;var j=x,N=s.a.forwardRef((function(e,a){var t=e.id,i=e.bsPrefix,c=e.bsCustomPrefix,u=e.className,f=e.isValid,d=e.isInvalid,m=e.lang,p=e.as,y=void 0===p?"input":p,h=Object(n.a)(e,["id","bsPrefix","bsCustomPrefix","className","isValid","isInvalid","lang","as"]),O=Object(o.useContext)(b),x=O.controlId,j=O.custom?[c,"custom-file-input"]:[i,"form-control-file"],N=j[0],P=j[1];return i=Object(v.a)(N,P),s.a.createElement(y,Object(r.a)({},h,{ref:a,id:t||x,type:"file",lang:m,className:l()(u,i,f&&"is-valid",d&&"is-invalid")}))}));N.displayName="FormFileInput";var P=N,w=s.a.forwardRef((function(e,a){var t=e.bsPrefix,i=e.bsCustomPrefix,c=e.className,u=e.htmlFor,f=Object(n.a)(e,["bsPrefix","bsCustomPrefix","className","htmlFor"]),d=Object(o.useContext)(b),m=d.controlId,p=d.custom?[i,"custom-file-label"]:[t,"form-file-label"],y=p[0],h=p[1];return t=Object(v.a)(y,h),s.a.createElement("label",Object(r.a)({},f,{ref:a,htmlFor:u||m,className:l()(c,t),"data-browse":f["data-browse"]}))}));w.displayName="FormFileLabel";var C=w,E=s.a.forwardRef((function(e,a){var t=e.id,i=e.bsPrefix,c=e.bsCustomPrefix,u=e.disabled,f=void 0!==u&&u,d=e.isValid,p=void 0!==d&&d,y=e.isInvalid,h=void 0!==y&&y,O=e.feedbackTooltip,x=void 0!==O&&O,j=e.feedback,N=e.className,w=e.style,E=e.label,I=e.children,g=e.custom,k=e.lang,F=e["data-browse"],R=e.as,A=void 0===R?"div":R,S=e.inputAs,V=void 0===S?"input":S,T=Object(n.a)(e,["id","bsPrefix","bsCustomPrefix","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","label","children","custom","lang","data-browse","as","inputAs"]),L=g?[c,"custom"]:[i,"form-file"],z=L[0],M=L[1];i=Object(v.a)(z,M);var _=Object(o.useContext)(b).controlId,D=Object(o.useMemo)((function(){return{controlId:t||_,custom:g}}),[_,g,t]),K=null!=E&&!1!==E&&!I,q=s.a.createElement(P,Object(r.a)({},T,{ref:a,isValid:p,isInvalid:h,disabled:f,as:V,lang:k}));return s.a.createElement(b.Provider,{value:D},s.a.createElement(A,{style:w,className:l()(N,i,g&&"custom-file")},I||s.a.createElement(s.a.Fragment,null,g?s.a.createElement(s.a.Fragment,null,q,K&&s.a.createElement(C,{"data-browse":F},E)):s.a.createElement(s.a.Fragment,null,K&&s.a.createElement(C,null,E),q),(p||h)&&s.a.createElement(m,{type:p?"valid":"invalid",tooltip:x},j))))}));E.displayName="FormFile",E.Input=P,E.Label=C;var I=E,g=(t(109),s.a.forwardRef((function(e,a){var t,i,c=e.bsPrefix,u=e.bsCustomPrefix,f=e.type,d=e.size,m=e.htmlSize,p=e.id,y=e.className,h=e.isValid,O=void 0!==h&&h,x=e.isInvalid,j=void 0!==x&&x,N=e.plaintext,P=e.readOnly,w=e.custom,C=e.as,E=void 0===C?"input":C,I=Object(n.a)(e,["bsPrefix","bsCustomPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","custom","as"]),g=Object(o.useContext)(b).controlId,k=w?[u,"custom"]:[c,"form-control"],F=k[0],R=k[1];if(c=Object(v.a)(F,R),N)(i={})[c+"-plaintext"]=!0,t=i;else if("file"===f){var A;(A={})[c+"-file"]=!0,t=A}else if("range"===f){var S;(S={})[c+"-range"]=!0,t=S}else if("select"===E&&w){var V;(V={})[c+"-select"]=!0,V[c+"-select-"+d]=d,t=V}else{var T;(T={})[c]=!0,T[c+"-"+d]=d,t=T}return s.a.createElement(E,Object(r.a)({},I,{type:f,size:m,ref:a,readOnly:P,id:p||g,className:l()(y,t,O&&"is-valid",j&&"is-invalid")}))})));g.displayName="FormControl";var k=Object.assign(g,{Feedback:m}),F=s.a.forwardRef((function(e,a){var t=e.bsPrefix,i=e.className,c=e.children,u=e.controlId,f=e.as,d=void 0===f?"div":f,m=Object(n.a)(e,["bsPrefix","className","children","controlId","as"]);t=Object(v.a)(t,"form-group");var p=Object(o.useMemo)((function(){return{controlId:u}}),[u]);return s.a.createElement(b.Provider,{value:p},s.a.createElement(d,Object(r.a)({},m,{ref:a,className:l()(i,t)}),c))}));F.displayName="FormGroup";var R=F,A=["xl","lg","md","sm","xs"],S=s.a.forwardRef((function(e,a){var t=e.bsPrefix,i=e.className,o=e.as,c=void 0===o?"div":o,u=Object(n.a)(e,["bsPrefix","className","as"]),f=Object(v.a)(t,"col"),d=[],m=[];return A.forEach((function(e){var a,t,r,n=u[e];if(delete u[e],"object"===typeof n&&null!=n){var i=n.span;a=void 0===i||i,t=n.offset,r=n.order}else a=n;var l="xs"!==e?"-"+e:"";a&&d.push(!0===a?""+f+l:""+f+l+"-"+a),null!=r&&m.push("order"+l+"-"+r),null!=t&&m.push("offset"+l+"-"+t)})),d.length||d.push(f),s.a.createElement(c,Object(r.a)({},u,{ref:a,className:l.a.apply(void 0,[i].concat(d,m))}))}));S.displayName="Col";var V=S,T=s.a.forwardRef((function(e,a){var t=e.as,i=void 0===t?"label":t,c=e.bsPrefix,u=e.column,f=e.srOnly,d=e.className,m=e.htmlFor,p=Object(n.a)(e,["as","bsPrefix","column","srOnly","className","htmlFor"]),y=Object(o.useContext)(b).controlId;c=Object(v.a)(c,"form-label");var h="col-form-label";"string"===typeof u&&(h=h+" "+h+"-"+u);var O=l()(d,c,f&&"sr-only",u&&h);return m=m||y,u?s.a.createElement(V,Object(r.a)({as:"label",className:O,htmlFor:m},p)):s.a.createElement(i,Object(r.a)({ref:a,className:O,htmlFor:m},p))}));T.displayName="FormLabel",T.defaultProps={column:!1,srOnly:!1};var L=T,z=s.a.forwardRef((function(e,a){var t=e.bsPrefix,i=e.className,o=e.as,c=void 0===o?"small":o,u=e.muted,f=Object(n.a)(e,["bsPrefix","className","as","muted"]);return t=Object(v.a)(t,"form-text"),s.a.createElement(c,Object(r.a)({},f,{ref:a,className:l()(i,t,u&&"text-muted")}))}));z.displayName="FormText";var M=z,_=s.a.forwardRef((function(e,a){return s.a.createElement(j,Object(r.a)({},e,{ref:a,type:"switch"}))}));_.displayName="Switch",_.Input=j.Input,_.Label=j.Label;var D=_,K=/-(.)/g;var q=function(e){return e[0].toUpperCase()+(a=e,a.replace(K,(function(e,a){return a.toUpperCase()}))).slice(1);var a};var G=function(e,a){var t=void 0===a?{}:a,i=t.displayName,o=void 0===i?q(e):i,c=t.Component,u=t.defaultProps,f=s.a.forwardRef((function(a,t){var i=a.className,o=a.bsPrefix,u=a.as,f=void 0===u?c||"div":u,d=Object(n.a)(a,["className","bsPrefix","as"]),m=Object(v.a)(o,e);return s.a.createElement(f,Object(r.a)({ref:t,className:l()(i,m)},d))}));return f.defaultProps=u,f.displayName=o,f}("form-row"),J=s.a.forwardRef((function(e,a){var t=e.bsPrefix,i=e.inline,o=e.className,c=e.validated,u=e.as,f=void 0===u?"form":u,d=Object(n.a)(e,["bsPrefix","inline","className","validated","as"]);return t=Object(v.a)(t,"form"),s.a.createElement(f,Object(r.a)({},d,{ref:a,className:l()(o,c&&"was-validated",i&&t+"-inline")}))}));J.displayName="Form",J.defaultProps={inline:!1},J.Row=G,J.Group=R,J.Control=k,J.Check=j,J.File=I,J.Switch=D,J.Label=L,J.Text=M;a.a=J},104:function(e,a,t){"use strict";t.d(a,"a",(function(){return n}));var r=t(51);function n(e,a){return function(e){if(Array.isArray(e))return e}(e)||function(e,a){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var t=[],r=!0,n=!1,i=void 0;try{for(var l,o=e[Symbol.iterator]();!(r=(l=o.next()).done)&&(t.push(l.value),!a||t.length!==a);r=!0);}catch(s){n=!0,i=s}finally{try{r||null==o.return||o.return()}finally{if(n)throw i}}return t}}(e,a)||Object(r.a)(e,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},105:function(e,a,t){"use strict";var r=t(99),n=t(100),i=t(101),l=t.n(i),o=t(1),s=t.n(o),c=t(102);var u=function(){for(var e=arguments.length,a=new Array(e),t=0;t<e;t++)a[t]=arguments[t];return a.filter((function(e){return null!=e})).reduce((function(e,a){if("function"!==typeof a)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?a:function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];e.apply(this,r),a.apply(this,r)}}),null)};function f(e){return!e||"#"===e.trim()}var d=s.a.forwardRef((function(e,a){var t=e.as,i=void 0===t?"a":t,l=e.disabled,o=e.onKeyDown,c=Object(n.a)(e,["as","disabled","onKeyDown"]),d=function(e){var a=c.href,t=c.onClick;(l||f(a))&&e.preventDefault(),l?e.stopPropagation():t&&t(e)};return f(c.href)&&(c.role=c.role||"button",c.href=c.href||"#"),l&&(c.tabIndex=-1,c["aria-disabled"]=!0),s.a.createElement(i,Object(r.a)({ref:a},c,{onClick:d,onKeyDown:u((function(e){" "===e.key&&(e.preventDefault(),d(e))}),o)}))}));d.displayName="SafeAnchor";var m=d,b=s.a.forwardRef((function(e,a){var t=e.bsPrefix,i=e.variant,o=e.size,u=e.active,f=e.className,d=e.block,b=e.type,v=e.as,p=Object(n.a)(e,["bsPrefix","variant","size","active","className","block","type","as"]),y=Object(c.a)(t,"btn"),h=l()(f,y,u&&"active",i&&y+"-"+i,d&&y+"-block",o&&y+"-"+o);if(p.href)return s.a.createElement(m,Object(r.a)({},p,{as:v,ref:a,className:l()(h,p.disabled&&"disabled")}));a&&(p.ref=a),b?p.type=b:v||(p.type="button");var O=v||"button";return s.a.createElement(O,Object(r.a)({},p,{className:h}))}));b.displayName="Button",b.defaultProps={variant:"primary",active:!1,disabled:!1};a.a=b},106:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(){for(var e=arguments.length,a=Array(e),t=0;t<e;t++)a[t]=arguments[t];function r(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];var n=null;return a.forEach((function(e){if(null==n){var a=e.apply(void 0,t);null!=a&&(n=a)}})),n}return(0,i.default)(r)};var r,n=t(116),i=(r=n)&&r.__esModule?r:{default:r};e.exports=a.default},109:function(e,a,t){"use strict";var r=function(){};e.exports=r},116:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){function a(a,t,r,n,i,l){var o=n||"<<anonymous>>",s=l||r;if(null==t[r])return a?new Error("Required "+i+" `"+s+"` was not specified in `"+o+"`."):null;for(var c=arguments.length,u=Array(c>6?c-6:0),f=6;f<c;f++)u[f-6]=arguments[f];return e.apply(void 0,[t,r,o,i,s].concat(u))}var t=a.bind(null,!1);return t.isRequired=a.bind(null,!0),t},e.exports=a.default},99:function(e,a,t){"use strict";function r(){return(r=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}t.d(a,"a",(function(){return r}))}}]);
//# sourceMappingURL=0.1cfbdfb5.chunk.js.map