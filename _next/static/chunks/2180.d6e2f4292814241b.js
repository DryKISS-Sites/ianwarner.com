"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2180],{5264:function(n,r,o){var e=o(3980),t={colour:e.string,disabled:e.bool,disabledColour:e.string,fixColour:e.string,hoverColour:(0,e.oneOfType)([e.bool,e.string]),onClick:e.func,size:(0,e.oneOfType)([e.number,e.string])};r.Z=t},3518:function(n,r,o){var e=o(7328),t=o(6670),i=o(6297),l=o(2228),u=o(2322),s=(o(2784),o(5545));function a(){var n=(0,l.Z)(["\n        height: ","px;\n        width: ","px;\n      "]);return a=function(){return n},n}function C(){var n=(0,l.Z)(["\n          transform: scale(",") ",";\n        "]);return C=function(){return n},n}function c(){var n=(0,l.Z)(["\n      cursor: pointer;\n    "]);return c=function(){return n},n}function d(){var n=(0,l.Z)(["\n  ","\n\n  path {\n    fill: ",";\n    stroke: ",";\n    transition: fill 0.2s ease;\n\n    ","\n  }\n\n  &:hover {\n    path {\n      fill: ",";\n    }\n  }\n\n  ","\n"]);return d=function(){return n},n}var f="default",v="hover",h=function(n,r){var o=r.colour,e=r.context,t=r.disabled,i=r.disabledColour,l=r.hoverColour,u=r.theme,s=u.ICONS,a=u.THEME_COLOUR,C=e?a.context:o||s.defaultIconColour;return n===f?t&&i?i:t?s.disabledIconColour:C:n===v&&l?(!0===l&&(l=s.hoverIconColour),t&&i?i:t?s.disabledIconColour:l||s.hoverIconColour||C):t?i||s.disabledIconColour:C},b=s.ZP.svg.withConfig({componentId:"sc-b0a149c7-0"})(d(),(function(n){var r=n.size;if("number"===typeof r)return(0,s.iv)(a(),r,r)}),(function(n){return h(f,n)}),(function(n){return n.stroke}),(function(n){var r=n.scale,o=n.translate;return r&&(0,s.iv)(C(),r,o||"")}),(function(n){return h(v,n)}),(function(n){var r=n.onClick,o=n.disabled;return r&&!o&&(0,s.iv)(c())}));r.Z=function(n){var r=n.children,o=n.colour,l=n.disabled,s=n.disabledColour,a=n.hoverColour,C=n.onClick,c=n.size,d=n.stroke,f=n.translate,v=(0,i.Z)(n,["children","colour","disabled","disabledColour","hoverColour","onClick","size","stroke","translate"]),h=v.mainSize,p="";if("string"===typeof c)switch(c){case"xs":p=12;break;case"sm":p=16;break;case"lg":p=24;break;case"xl":p=32;break;default:p=20}else p=c||20;var Z=1;return h&&p!==h&&(Z=Number(p/h)),(0,u.jsx)(b,(0,t.Z)((0,e.Z)({colour:o,disabled:l,disabledColour:s,hoverColour:a,onClick:C,scale:Z,size:p,stroke:d,translate:f,xmlns:"http://www.w3.org/2000/svg"},v),{children:r}))}},2180:function(n,r,o){o.r(r);var e=o(7328),t=o(6670),i=o(2322),l=(o(2784),o(5264)),u=o(3518),s=function(n){return(0,i.jsxs)(u.Z,(0,t.Z)((0,e.Z)({},n),{mainSize:20,children:[(0,i.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M10.8 0.438171C10.2862 0.34199 9.75632 0.289901 9.21445 0.285964C6.57637 0.266786 4.2034 1.40282 2.56973 3.21829V0.428571C2.56973 0.191893 2.37797 0 2.14144 0H0.428289C0.191766 0 0 0.191893 0 0.428571V7.58332C0 7.82 0.191766 8.01189 0.428289 8.01189H7.57832C7.81484 8.01189 8.00661 7.82 8.00661 7.58332V5.86904C8.00661 5.63236 7.81484 5.44046 7.57832 5.44046H4.07085C5.21274 3.87414 7.06095 2.85714 9.14871 2.85714C9.72029 2.85714 10.2739 2.93334 10.8 3.07615V0.438171ZM15.4287 9C15.4298 9.04749 15.4303 9.09511 15.4303 9.14286C15.4303 12.6173 12.6203 15.4286 9.14871 15.4286C7.55145 15.4286 6.09455 14.8334 4.98685 13.8526C4.81771 13.7029 4.56117 13.7116 4.40149 13.8714L3.18918 15.0845C3.01547 15.2583 3.02386 15.5415 3.20585 15.7066C4.77674 17.1317 6.86133 18 9.14871 18C14.0307 18 17.9896 14.0449 18 9.16211C18.0001 9.10795 17.9997 9.05392 17.9989 9H15.4287Z",fill:"white"}),(0,i.jsx)("path",{d:"M14.7378 6H13.75V2.19238L12.5708 2.55811V1.75488L14.6318 1.0166H14.7378V6ZM19.7075 3.94238C19.7075 4.63053 19.5651 5.1569 19.2803 5.52148C18.9954 5.88607 18.5785 6.06836 18.0293 6.06836C17.487 6.06836 17.0723 5.88949 16.7852 5.53174C16.498 5.17399 16.3511 4.6613 16.3442 3.99365V3.07764C16.3442 2.38265 16.4878 1.85514 16.7749 1.49512C17.0643 1.13509 17.4801 0.955078 18.0225 0.955078C18.5648 0.955078 18.9795 1.13395 19.2666 1.4917C19.5537 1.84717 19.7007 2.35872 19.7075 3.02637V3.94238ZM18.7197 2.9375C18.7197 2.52507 18.6628 2.22542 18.5488 2.03857C18.4372 1.84945 18.2617 1.75488 18.0225 1.75488C17.79 1.75488 17.618 1.84489 17.5063 2.0249C17.397 2.20264 17.3389 2.48177 17.332 2.8623V4.07227C17.332 4.47786 17.3867 4.77979 17.4961 4.97803C17.6077 5.17399 17.7855 5.27197 18.0293 5.27197C18.2708 5.27197 18.4451 5.17741 18.5522 4.98828C18.6593 4.79915 18.7152 4.50977 18.7197 4.12012V2.9375Z",fill:"white"})]}))};s.propTypes=l.Z,r.default=s}}]);