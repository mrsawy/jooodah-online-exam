"use strict";(self.webpackChunkquiz_app=self.webpackChunkquiz_app||[]).push([[206],{7206:(e,l,s)=>{s.r(l),s.d(l,{default:()=>b});var r=s(6907),t=(s(1830),s(2791)),a=s(4420),o=s(9164),n=s(890),d=s(184);var u=s(3862);const i=e=>{let{users:l}=e,s={},r=null===l||void 0===l?void 0:l.map((e=>null===e||void 0===e?void 0:e.result));return null===r||void 0===r||r.forEach((e=>{let l=(r=null===e||void 0===e?void 0:e.correctAnswers,t=null===e||void 0===e?void 0:e.totalQuestions,+(100*r/t).toFixed(0));var r,t;if(s[e.levelName]){let r=s[e.levelName].find((e=>(null===e||void 0===e?void 0:e.grade)==l));r?r.numberOfUsers++:s[e.levelName].push({grade:l,numberOfUsers:1})}else s[e.levelName]=[{grade:l,numberOfUsers:1}]})),Object.entries(s).map((e=>({id:e[0],label:e[0],value:e[1].reduce(((e,l)=>e+l.numberOfUsers),0)})))};function c(e){let{label:l,data:s,className:r}=e;const{users:o}=(0,a.v9)((e=>e.user));let n=i({users:o});const[c,v]=(0,t.useState)({}),[m,f]=(0,t.useState)({});return console.log(n),(0,t.useEffect)((()=>{const e=getComputedStyle(document.documentElement),l={labels:n.map((e=>null===e||void 0===e?void 0:e.label)),datasets:[{data:n.map((e=>null===e||void 0===e?void 0:e.value)),backgroundColor:[e.getPropertyValue("--blue-500"),e.getPropertyValue("--yellow-500"),e.getPropertyValue("--green-500")],hoverBackgroundColor:[e.getPropertyValue("--blue-400"),e.getPropertyValue("--yellow-400"),e.getPropertyValue("--green-400")]}]};v(l),f({plugins:{legend:{labels:{usePointStyle:!0}}}})}),[]),(0,d.jsx)("div",{className:"card flex justify-content-center mt-16",children:(0,d.jsx)(u.k,{type:"pie",data:c,options:m,className:"w-full md:w-30rem"})})}var v=s(6013);const m=function(){var e;const{users:l}=(0,a.v9)((e=>e.user));let s=(e=>{let{users:l}=e,s={},r=null===l||void 0===l?void 0:l.map((e=>null===e||void 0===e?void 0:e.result));return null===r||void 0===r||r.forEach((e=>{let l=+(100*(null===e||void 0===e?void 0:e.correctAnswers)/(null===e||void 0===e?void 0:e.totalQuestions)).toFixed(0);if(s[e.levelName]){let r=s[e.levelName].find((e=>(null===e||void 0===e?void 0:e.grade)==l));r?r.numberOfUsers++:s[e.levelName].push({grade:l,numberOfUsers:1})}else s[e.levelName]=[{grade:l,numberOfUsers:1}]})),s})({users:l});return console.log(s),(0,d.jsx)("div",{children:Object.keys(s).length&&(null===(e=Object.values(s))||void 0===e?void 0:e.map(((e,l)=>(0,d.jsx)("div",{children:(0,d.jsx)(v.G,{width:450,height:300,series:[{label:Object.keys(s)[l],data:e.map((e=>({x:null===e||void 0===e?void 0:e.numberOfUsers,y:null===e||void 0===e?void 0:e.grade,id:"".concat(l,"A")})))}]})}))))})};function f(){(0,a.I0)();return(0,d.jsxs)(o.Z,{maxWidth:"xl",children:[(0,d.jsx)(n.Z,{variant:"h4",sx:{mb:5},children:"Hi Joodah Admin , Welcome back \ud83d\udc4b"}),(0,d.jsxs)("div",{className:"flex flex-row flex-wrap  justify-between  items-start border rounded-2xl  m-auto border-5 xl:w-4/5",children:[(0,d.jsx)("div",{className:"border-r-4 py-11 lg:w-2/4",children:(0,d.jsx)(m,{})}),(0,d.jsx)("div",{className:"flex justify-center items-center w-full lg:w-2/4",children:(0,d.jsx)(c,{className:"mt-24"})})]})]})}function b(){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r.ql,{children:(0,d.jsx)("title",{children:" Joodah Dashboard "})}),(0,d.jsx)(f,{})]})}}}]);
//# sourceMappingURL=206.671da7ef.chunk.js.map