/*! For license information please see 87.0d022b30.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[87],{87:function(e,t,r){r.d(t,{lr:function(){return d},rU:function(){return v}});var n=r(762),a=r(791),o=r(689),c=r(989);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}function u(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}function l(e){return void 0===e&&(e=""),new URLSearchParams("string"===typeof e||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((function(t,r){var n=e[r];return t.concat(Array.isArray(n)?n.map((function(e){return[r,e]})):[[r,n]])}),[]))}var s=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];var f="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement,v=a.forwardRef((function(e,t){var r,n=e.onClick,l=e.relative,v=e.reloadDocument,p=e.replace,h=e.state,d=e.target,y=e.to,m=e.preventScrollReset,w=u(e,s),R=!1;if(f&&"string"===typeof y&&/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i.test(y)){r=y;var g=new URL(window.location.href),k=y.startsWith("//")?new URL(g.protocol+y):new URL(y);k.origin===g.origin?y=k.pathname+k.search+k.hash:R=!0}var b=(0,o.oQ)(y,{relative:l}),S=function(e,t){var r=void 0===t?{}:t,n=r.target,i=r.replace,u=r.state,l=r.preventScrollReset,s=r.relative,f=(0,o.s0)(),v=(0,o.TH)(),p=(0,o.WU)(e,{relative:s});return a.useCallback((function(t){if(function(e,t){return 0===e.button&&(!t||"_self"===t)&&!function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)}(t,n)){t.preventDefault();var r=void 0!==i?i:(0,c.Ep)(v)===(0,c.Ep)(p);f(e,{replace:r,state:u,preventScrollReset:l,relative:s})}}),[v,f,p,i,u,n,e,l,s])}(y,{replace:p,state:h,target:d,preventScrollReset:m,relative:l});return a.createElement("a",i({},w,{href:r||b,onClick:R||v?n:function(e){n&&n(e),e.defaultPrevented||S(e)},ref:t,target:d}))}));var p,h;function d(e){var t=a.useRef(l(e)),r=a.useRef(!1),c=(0,o.TH)(),i=a.useMemo((function(){return function(e,t){var r=l(e);if(t){var a,o=(0,n.Z)(t.keys());try{var c=function(){var e=a.value;r.has(e)||t.getAll(e).forEach((function(t){r.append(e,t)}))};for(o.s();!(a=o.n()).done;)c()}catch(i){o.e(i)}finally{o.f()}}return r}(c.search,r.current?null:t.current)}),[c.search]),u=(0,o.s0)(),s=a.useCallback((function(e,t){var n=l("function"===typeof e?e(i):e);r.current=!0,u("?"+n,t)}),[u,i]);return[i,s]}(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(p||(p={})),function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"}(h||(h={}))}}]);
//# sourceMappingURL=87.0d022b30.chunk.js.map