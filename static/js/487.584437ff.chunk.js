"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[487],{361:function(t,n,e){e.d(n,{LL:function(){return a},_n:function(){return r},fq:function(){return c},vR:function(){return o}});var r="https://api.themoviedb.org/3",a="api_key=102d4305e0abdbf0fd48836d5abb1978",c="/trending/movie/day",o="/movie/"},487:function(t,n,e){e.r(n),e.d(n,{default:function(){return d}});var r=e(861),a=e(439),c=e(687),o=e.n(c),i=e(791),u=e(912),s=e(689),f=e(361),l=e(184);function d(){var t=(0,s.UO)().filmId,n=(0,i.useState)([]),e=(0,a.Z)(n,2),c=e[0],d=e[1];return(0,i.useEffect)((function(){if(t){var n=function(){var n=(0,r.Z)(o().mark((function n(){var e,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,e="".concat(f._n).concat(f.vR).concat(t,"/credits?").concat(f.LL,"&language=en-US"),n.next=4,u.Z.get(e);case 4:r=n.sent,console.log(r.data.cast),d(r.data.cast),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(){return n.apply(this,arguments)}}();n()}}),[t]),(0,l.jsx)("div",{children:(0,l.jsx)("ul",{children:c.map((function(t){var n=t.profile_path,e=t.original_name,r=t.cast_id;return(0,l.jsxs)("li",{children:[n&&(0,l.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(n),alt:"".concat(e),height:"100",onError:function(t){var n=t.currentTarget;n.onerror=null,n.src="https://ik.imagekit.io/tc8jxffbcvf/default-movie-portrait_EmJUj9Tda5wa.jpg?tr=fo-auto,di-"}}),(0,l.jsx)("p",{children:e})]},r)}))})})}}}]);
//# sourceMappingURL=487.584437ff.chunk.js.map