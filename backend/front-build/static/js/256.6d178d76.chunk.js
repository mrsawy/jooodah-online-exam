"use strict";(self.webpackChunkquiz_app=self.webpackChunkquiz_app||[]).push([[256],{3256:(e,n,o)=>{o.r(n),o.d(n,{default:()=>z});var t=o(6907),r=o(6029),s=o(4294),i=o(9164),l=o(890),a=o(2434),c=o(2791),u=o(3366),d=o(7462),p=o(9278),x=o(838),h=o(4036),m=o(6934),f=o(1402),y=o(6943),g=o(2071),j=o(9703),v=o(4657);function Z(e){return(0,v.ZP)("MuiLink",e)}const b=(0,j.Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]);var w=o(8529),k=o(4131);const C={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},B=e=>{let{theme:n,ownerState:o}=e;const t=(e=>C[e]||e)(o.color),r=(0,w.DW)(n,"palette.".concat(t),!1)||o.color,s=(0,w.DW)(n,"palette.".concat(t,"Channel"));return"vars"in n&&s?"rgba(".concat(s," / 0.4)"):(0,k.Fq)(r,.4)};var S=o(184);const G=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],D=(0,m.ZP)(l.Z,{name:"MuiLink",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:o}=e;return[n.root,n["underline".concat((0,h.Z)(o.underline))],"button"===o.component&&n.button]}})((e=>{let{theme:n,ownerState:o}=e;return(0,d.Z)({},"none"===o.underline&&{textDecoration:"none"},"hover"===o.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===o.underline&&(0,d.Z)({textDecoration:"underline"},"inherit"!==o.color&&{textDecorationColor:B({theme:n,ownerState:o})},{"&:hover":{textDecorationColor:"inherit"}}),"button"===o.component&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},["&.".concat(b.focusVisible)]:{outline:"auto"}})})),F=c.forwardRef((function(e,n){const o=(0,f.Z)({props:e,name:"MuiLink"}),{className:t,color:r="primary",component:s="a",onBlur:i,onFocus:l,TypographyClasses:a,underline:m="always",variant:j="inherit",sx:v}=o,b=(0,u.Z)(o,G),{isFocusVisibleRef:w,onBlur:k,onFocus:B,ref:F}=(0,y.Z)(),[M,R]=c.useState(!1),A=(0,g.Z)(n,F),V=(0,d.Z)({},o,{color:r,component:s,focusVisible:M,underline:m,variant:j}),z=(e=>{const{classes:n,component:o,focusVisible:t,underline:r}=e,s={root:["root","underline".concat((0,h.Z)(r)),"button"===o&&"button",t&&"focusVisible"]};return(0,x.Z)(s,Z,n)})(V);return(0,S.jsx)(D,(0,d.Z)({color:r,className:(0,p.Z)(z.root,t),classes:a,component:s,onBlur:e=>{k(e),!1===w.current&&R(!1),i&&i(e)},onFocus:e=>{B(e),!0===w.current&&R(!0),l&&l(e)},ref:A,ownerState:V,variant:j,sx:[...Object.keys(C).includes(r)?[]:[{color:r}],...Array.isArray(v)?v:[v]]},b))}));var M=o(3967);const R=(0,c.forwardRef)(((e,n)=>{let{disabledLink:o=!1,sx:t,...s}=e;const i=(0,M.Z)(),l=i.palette.primary.light,c=i.palette.primary.main,u=i.palette.primary.dark,d=(0,S.jsx)(r.Z,{ref:n,component:"div",sx:{width:40,height:40,display:"inline-flex",...t},...s,children:(0,S.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 512 512",children:[(0,S.jsxs)("defs",{children:[(0,S.jsxs)("linearGradient",{id:"BG1",x1:"100%",x2:"50%",y1:"9.946%",y2:"50%",children:[(0,S.jsx)("stop",{offset:"0%",stopColor:u}),(0,S.jsx)("stop",{offset:"100%",stopColor:c})]}),(0,S.jsxs)("linearGradient",{id:"BG2",x1:"50%",x2:"50%",y1:"0%",y2:"100%",children:[(0,S.jsx)("stop",{offset:"0%",stopColor:l}),(0,S.jsx)("stop",{offset:"100%",stopColor:c})]}),(0,S.jsxs)("linearGradient",{id:"BG3",x1:"50%",x2:"50%",y1:"0%",y2:"100%",children:[(0,S.jsx)("stop",{offset:"0%",stopColor:l}),(0,S.jsx)("stop",{offset:"100%",stopColor:c})]})]}),(0,S.jsxs)("g",{fill:c,fillRule:"evenodd",stroke:"none",strokeWidth:"1",children:[(0,S.jsx)("path",{fill:"url(#BG1)",d:"M183.168 285.573l-2.918 5.298-2.973 5.363-2.846 5.095-2.274 4.043-2.186 3.857-2.506 4.383-1.6 2.774-2.294 3.939-1.099 1.869-1.416 2.388-1.025 1.713-1.317 2.18-.95 1.558-1.514 2.447-.866 1.38-.833 1.312-.802 1.246-.77 1.18-.739 1.111-.935 1.38-.664.956-.425.6-.41.572-.59.8-.376.497-.537.69-.171.214c-10.76 13.37-22.496 23.493-36.93 29.334-30.346 14.262-68.07 14.929-97.202-2.704l72.347-124.682 2.8-1.72c49.257-29.326 73.08 1.117 94.02 40.927z"}),(0,S.jsx)("path",{fill:"url(#BG2)",d:"M444.31 229.726c-46.27-80.956-94.1-157.228-149.043-45.344-7.516 14.384-12.995 42.337-25.267 42.337v-.142c-12.272 0-17.75-27.953-25.265-42.337C189.79 72.356 141.96 148.628 95.69 229.584c-3.483 6.106-6.828 11.932-9.69 16.996 106.038-67.127 97.11 135.667 184 137.278V384c86.891-1.611 77.962-204.405 184-137.28-2.86-5.062-6.206-10.888-9.69-16.994"}),(0,S.jsx)("path",{fill:"url(#BG3)",d:"M450 384c26.509 0 48-21.491 48-48s-21.491-48-48-48-48 21.491-48 48 21.491 48 48 48"})]})]})});return o?d:(0,S.jsx)(F,{component:a.r,href:"/",sx:{display:"contents"},children:d})})),A=R;function V(){const e=(0,S.jsx)(r.Z,{component:"header",sx:{top:0,left:0,width:1,lineHeight:0,position:"fixed",p:e=>({xs:e.spacing(3,3,0),sm:e.spacing(5,5,0)})},children:(0,S.jsx)(A,{})});return(0,S.jsxs)(S.Fragment,{children:[e,(0,S.jsx)(i.Z,{children:(0,S.jsxs)(r.Z,{sx:{py:12,maxWidth:480,mx:"auto",display:"flex",minHeight:"100vh",textAlign:"center",alignItems:"center",flexDirection:"column",justifyContent:"center"},children:[(0,S.jsx)(l.Z,{variant:"h3",sx:{mb:3},children:"Sorry, page not found!"}),(0,S.jsx)(l.Z,{sx:{color:"text.secondary"},children:"Sorry, we couldn\u2019t find the page you\u2019re looking for. Perhaps you\u2019ve mistyped the URL? Be sure to check your spelling."}),(0,S.jsx)(r.Z,{component:"img",src:"/assets/illustrations/illustration_404.svg",sx:{mx:"auto",height:260,my:{xs:5,sm:10}}}),(0,S.jsx)(s.Z,{href:"/",size:"large",variant:"contained",component:a.r,children:"Go to Home"})]})})]})}function z(){return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(t.ql,{children:(0,S.jsx)("title",{children:" 404 Page Not Found "})}),(0,S.jsx)(V,{})]})}}}]);
//# sourceMappingURL=256.6d178d76.chunk.js.map