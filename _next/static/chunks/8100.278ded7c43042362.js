"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8100],{8100:function(n,e,t){t.r(e),t.d(e,{default:function(){return A}});var r=t(2322),i=t(2784),u=t(3980);function o(){return o=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},o.apply(this,arguments)}t(3463);var c=function(n,e,t){return n=(n=n<=t?n:t)>=e?n:e},a=function(){var n=!1,e=[],t=function t(){n=!0;var r=e.shift();if(r)return r(t);n=!1};return{clear:function(){n=!1,e=[]},enqueue:function(r){e.push(r),n||1!==e.length||t()}}},s=function(n){(0,i.useEffect)(n,[])},f=function(n){return++n%1e6},l=function(n){void 0===n&&(n={});var e=function(){var n=(0,i.useState)(0)[1];return(0,i.useCallback)((function(){return n(f)}),[])}(),t=(0,i.useRef)(o({},n));return[(0,i.useCallback)((function(){return t.current}),[]),(0,i.useCallback)((function(n){n&&(Object.assign(t.current,n),e())}),[])]},d=function(n,e){var t=function(){var n=(0,i.useRef)(!0);return n.current?(n.current=!1,!0):n.current}();(0,i.useEffect)((function(){if(!t)return n()}),e)},v=function(){},h={isFinished:!0,progress:0,sideEffect:v},p=function(n){var e=void 0===n?{}:n,t=e.animationDuration,r=void 0===t?200:t,u=e.incrementDuration,f=void 0===u?800:u,p=e.isAnimating,m=void 0!==p&&p,g=e.minimum,b=void 0===g?.08:g,x=l(h),C=x[0],E=x[1],y=(0,i.useRef)(null),k=(0,i.useRef)(null);s((function(){y.current=a(),k.current=function(){var n;return{cancel:function(){n&&window.cancelAnimationFrame(n)},schedule:function(e,t){var r;n=window.requestAnimationFrame((function i(u){u-(r=r||u)>t?e():n=window.requestAnimationFrame(i)}))}}}()}));var q=(0,i.useCallback)((function(){var n,e;null==(n=k.current)||n.cancel(),null==(e=y.current)||e.clear()}),[]),w=(0,i.useCallback)((function(n){var e,t,i;if(1===(n=c(n,b,1)))return q(),null==(t=y.current)||t.enqueue((function(e){E({progress:n,sideEffect:function(){var n;return null==(n=k.current)?void 0:n.schedule(e,r)}})})),void(null==(i=y.current)||i.enqueue((function(){E({isFinished:!0,sideEffect:q})})));null==(e=y.current)||e.enqueue((function(e){E({isFinished:!1,progress:n,sideEffect:function(){var n;return null==(n=k.current)?void 0:n.schedule(e,r)}})}))}),[r,q,b,y,E,k]),D=(0,i.useCallback)((function(){w(function(n){var e=0;return n>=0&&n<.2?e=.1:n>=.2&&n<.5?e=.04:n>=.5&&n<.8?e=.02:n>=.8&&n<.99&&(e=.005),c(n+e,0,.994)}(C().progress))}),[C,w]),F=(0,i.useCallback)((function(){!function n(){var e;D(),null==(e=y.current)||e.enqueue((function(e){var t;null==(t=k.current)||t.schedule((function(){n(),e()}),f)}))}()}),[f,y,k,D]),j=(0,i.useRef)(v),O=C().sideEffect;return(0,i.useEffect)((function(){j.current=D})),s((function(){return m&&F(),q})),d((function(){C().sideEffect()}),[C,O]),d((function(){m?E(o({},h,{sideEffect:F})):w(1)}),[m,w,E,F]),{animationDuration:r,isFinished:C().isFinished,progress:C().progress}},m=["children"],g=function(n){var e=n.children,t=function(n,e){if(null==n)return{};var t,r,i={},u=Object.keys(n);for(r=0;r<u.length;r++)t=u[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,m);return e(p(t))};var b={animationDuration:u.number.isRequired,children:u.node.isRequired,isFinished:u.bool.isRequired},x=function(n){var e=n.animationDuration,t=n.children,i=n.isFinished;return(0,r.jsx)("div",{style:{opacity:i?0:1,pointerEvents:"none",transition:"opacity ".concat(e,"ms linear")},children:t})};x.propTypes=b;var C=x,E=t(2228),y=t(5545);function k(){var n=(0,E.Z)(["\n  background-color: ",";\n  height: 0.25rem;\n  left: 0;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: 1031;\n"]);return k=function(){return n},n}var q={animationDuration:u.number.isRequired,context:u.string,progress:u.number.isRequired},w=function(n){var e=n.animationDuration,t=n.context,i=void 0===t?"info":t,u=n.progress;return(0,r.jsx)(D,{animationDuration:e,progress:u,context:i,style:{marginLeft:"".concat(100*(-1+u),"%"),transition:"margin-left ".concat(e,"ms linear")}})},D=y.ZP.div.withConfig({componentId:"sc-85608281-0"})(k(),(function(n){var e=n.context;return n.theme.COLOUR[e]}));w.propTypes=q;var F=w,j=t(3228),O={context:(0,u.oneOf)(Object.values(j.Z)),isAnimating:u.bool,instanceKey:u.string,router:(0,u.shape)({events:(0,u.shape)({on:u.any})})},R=function(n){var e=n.context,t=void 0===e?"info":e,u=n.instanceKey,o=void 0===u?null:u,c=n.isAnimating,a=void 0!==c&&c,s=n.router,f=void 0!==s&&s;console.log(f);var l=(0,i.useState)(!1),d=l[0],v=l[1],h=(0,i.useState)(null),p=h[0],m=h[1],b=function(){v(!0),m((new Date).getTime())},x=function(){v(!1)};return(0,i.useEffect)((function(){f&&(f.events.on("routeChangeStart",b),f.events.on("routeChangeComplete",x),f.events.on("routeChangeError",x))}),[]),(0,r.jsx)(g,{isAnimating:d||a,children:function(n){var e=n.animationDuration,i=n.isFinished,u=n.progress;return(0,r.jsx)(C,{animationDuration:e,isFinished:i,children:(0,r.jsx)(F,{animationDuration:e,context:t,progress:u})})}},p||o)};R.propTypes=O;var A=R}}]);