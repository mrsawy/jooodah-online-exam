"use strict";(self.webpackChunkquiz_app=self.webpackChunkquiz_app||[]).push([[379],{5379:(e,n,r)=>{r.r(n),r.d(n,{default:()=>A});var l=r(6907),s=r(2791),a=r(4420),o=r(9164),t=r(890),i=r(6029),d=r(7621),c=r(2363),u=r(9504),x=r(4294),v=r(7676),m=r(184);function g(e){let{level_en:n,level_ar:r,level:l,_id:o,name_en:g,name_ar:h,numberOfMinutes:w,questions:b}=e;const{questionsIsSet:f}=(0,a.v9)((e=>e.questions)),_=(0,a.I0)();return(0,m.jsx)(i.Z,{sx:{minWidth:275,textAlign:"center"},children:(0,m.jsxs)(d.Z,{variant:"outlined",children:[" ",(0,m.jsxs)(s.Fragment,{children:[(0,m.jsxs)(u.Z,{children:[(0,m.jsxs)(t.Z,{style:{direction:"rtl"},className:"cairo-ar",variant:"h5",component:"div",children:[r," -",h]}),(0,m.jsx)("br",{}),(0,m.jsxs)(t.Z,{variant:"h5",component:"div",children:[g," - ",n]}),(0,m.jsx)("br",{}),(0,m.jsxs)(t.Z,{sx:{fontSize:14},color:"text.secondary",gutterBottom:!0,children:[w," minutes"]})]}),(0,m.jsx)(c.Z,{style:{margin:"auto",textAlign:"center"},className:"flex justify-center items-center",children:(0,m.jsx)(x.Z,{onClick:()=>{document.querySelectorAll(".question-body").forEach((e=>{e.style.display="none",e.classList.add("hidden")})),_((0,v.xC)(l)),_(b&&!f?(0,v.xj)(b):(0,v.tI)(o))},size:"large",children:"View Questions"})})]})]})})}var h=r(7247),w=r(1830),b=r.n(w),f=r(3619),_=r(1286);const j=function(e){let{name:n,label:r,onChange:l,value:s,className:a,inputClassName:o,inputStyle:t}=e;return(0,m.jsxs)("div",{className:a,children:[(0,m.jsx)("label",{htmlFor:n,className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:r}),(0,m.jsx)("input",{type:"text",name:n,id:n,value:s,onChange:l,className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 "+o,placeholder:r,required:"",style:t})]})};const p=function(e){var n,r,l,o,t,i,d,c,u,g;let{questionId:h,levelId:w,oldQuestion:p,editMode:y}=e;console.log(p);const k=(0,s.useRef)(),N=(0,s.useRef)(),[C,A]=(0,s.useState)({value_ar:p?null===p||void 0===p||null===(n=p.value)||void 0===n?void 0:n.ar:"",value_en:p?null===p||void 0===p||null===(r=p.value)||void 0===r?void 0:r.en:"",levelId:w||"",wrong_ans_1_en:null!==p&&void 0!==p&&p.wrong_answers?null===p||void 0===p||null===(l=p.wrong_answers[0])||void 0===l?void 0:l.en:"",wrong_ans_1_ar:null!==p&&void 0!==p&&p.wrong_answers?null===p||void 0===p||null===(o=p.wrong_answers[0])||void 0===o?void 0:o.ar:"",wrong_ans_2_en:null!==p&&void 0!==p&&p.wrong_answers?null===p||void 0===p||null===(t=p.wrong_answers[1])||void 0===t?void 0:t.en:"",wrong_ans_2_ar:null!==p&&void 0!==p&&p.wrong_answers?null===p||void 0===p||null===(i=p.wrong_answers[1])||void 0===i?void 0:i.ar:"",wrong_ans_3_en:null!==p&&void 0!==p&&p.wrong_answers?null===p||void 0===p||null===(d=p.wrong_answers[2])||void 0===d?void 0:d.en:"",wrong_ans_3_ar:null!==p&&void 0!==p&&p.wrong_answers?null===p||void 0===p||null===(c=p.wrong_answers[2])||void 0===c?void 0:c.ar:"",correct_ans_en:null!==p&&void 0!==p&&p.wrong_answers?null===p||void 0===p||null===(u=p.correct_answer)||void 0===u?void 0:u.en:"",correct_ans_ar:null!==p&&void 0!==p&&p.wrong_answers?null===p||void 0===p||null===(g=p.correct_answer)||void 0===g?void 0:g.ar:""}),q=e=>{const{name:n,value:r}=e.target;A((e=>({...e,[n]:r})))},E=(0,a.I0)(),{levels:I,isError:L,message:Z,isLoading:S}=(0,a.v9)((e=>e.levels)),Q=()=>{let e=k.current,n=N.current;e.classList.remove("hidden"),n.classList.remove("hidden"),e.classList.add("flex")},W=()=>{let e=k.current,n=N.current;e.classList.remove("flex"),e.classList.add("hidden"),n.classList.add("hidden")},F=e=>{N.current&&!N.current.contains(e.target)&&W()};return(0,s.useEffect)((()=>(document.addEventListener("mousedown",F),()=>{document.removeEventListener("mousedown",F)})),[F]),(0,m.jsxs)(m.Fragment,{children:[y?(0,m.jsx)(x.Z,{variant:"contained",startIcon:(0,m.jsx)(_.Z,{}),onClick:Q,children:"Edit"}):(0,m.jsx)("button",{className:"ml-auto mr-auto mb-10  block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",type:"button",onClick:Q,children:"Add New Question"}),(0,m.jsx)("div",{style:{zIndex:1102},id:"crud-modal",tabIndex:"-1","aria-hidden":"true",ref:k,className:"  hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0  justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full bg-slate-300 bg-opacity-70",children:(0,m.jsx)("div",{ref:N,className:" hidden relative p-4 w-full max-w-7xl max-h-full m-auto",children:(0,m.jsxs)("div",{className:"relative bg-white rounded-lg shadow dark:bg-gray-700",children:[(0,m.jsxs)("div",{className:"flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600",children:[(0,m.jsx)("h3",{className:"text-lg font-semibold text-gray-900 dark:text-white",children:y?"Edit Question":"Create New Question"}),(0,m.jsxs)("button",{type:"button",className:"text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white","data-modal-toggle":"crud-modal",onClick:W,children:[(0,m.jsx)("svg",{className:"w-3 h-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14",children:(0,m.jsx)("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})}),(0,m.jsx)("span",{className:"sr-only",children:"Close modal"})]})]}),(0,m.jsxs)("form",{className:"p-4 md:p-5",onSubmit:e=>{e.preventDefault();Object.values(C).some((e=>!e))?b().fire({icon:"error",title:"Error!",text:"All fields must be filled."}):(E(y?(0,v.WW)({...C,questionId:h}):(0,v.PG)(C)),E((0,f.kf)()))},children:[(0,m.jsxs)("div",{className:"flex flex-col gap-4 mb-4 ",children:[(0,m.jsxs)("div",{className:"flex flex-nowrap justify-center items-center gap-9 w-full",children:[(0,m.jsx)(j,{label:"English Value",name:"value_en",value:C.value_en,onChange:q,className:"w-100"}),(0,m.jsx)(j,{label:"Arabic Value",name:"value_ar",value:C.value_ar,onChange:q,className:"w-100 ",inputClassName:"rtl text-right"})]}),(0,m.jsxs)("div",{className:"flex flex-nowrap justify-center items-center gap-9 w-full",children:[(0,m.jsx)(j,{label:"First Wrong Answer English",name:"wrong_ans_1_en",value:C.wrong_ans_1_en,onChange:q,className:"w-100"}),(0,m.jsx)(j,{label:"First Wrong Answer Arabic",name:"wrong_ans_1_ar",value:C.wrong_ans_1_ar,onChange:q,className:"w-100",inputClassName:"rtl text-right"})]}),(0,m.jsxs)("div",{className:"flex flex-nowrap justify-center items-center gap-9 w-full",children:[(0,m.jsx)(j,{label:"Second Wrong Answer English",name:"wrong_ans_2_en",value:C.wrong_ans_2_en,onChange:q,className:"w-100"}),(0,m.jsx)(j,{label:"Second Wrong Answer Arabic",name:"wrong_ans_2_ar",value:C.wrong_ans_2_ar,onChange:q,className:"w-100",inputClassName:"rtl text-right"})]}),(0,m.jsxs)("div",{className:"flex flex-nowrap justify-center items-center gap-9 w-full",children:[(0,m.jsx)(j,{label:"Third Wrong Answer English",name:"wrong_ans_3_en",value:C.wrong_ans_3_en,onChange:q,className:"w-100"}),(0,m.jsx)(j,{label:"Third Wrong Answer Arabic",name:"wrong_ans_3_ar",value:C.wrong_ans_3_ar,onChange:q,className:"w-100",inputClassName:"rtl text-right"})]}),(0,m.jsxs)("div",{className:"flex flex-nowrap justify-center items-center gap-9 w-full",children:[(0,m.jsx)(j,{label:"Correct Answer English",name:"correct_ans_en",value:C.correct_ans_en,onChange:q,className:"w-100"}),(0,m.jsx)(j,{label:"Correct Answer Arabic",name:"correct_ans_ar",value:C.correct_ans_ar,onChange:q,className:"w-100",inputClassName:"rtl text-right"})]}),!y&&(0,m.jsxs)("div",{className:"col-span-2 sm:col-span-1",children:[(0,m.jsx)("label",{htmlFor:"level",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"Level"}),(0,m.jsxs)("select",{name:"levelId",value:C.levelId,onChange:q,className:"bg-gray-50 border w-100 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500",children:[(0,m.jsx)("option",{selected:"",children:"Select Level"}),I.map((e=>(0,m.jsx)("option",{value:null===e||void 0===e?void 0:e._id,children:null===e||void 0===e?void 0:e.name_en},null===e||void 0===e?void 0:e._id)))]})]})]}),(0,m.jsxs)("button",{type:"submit",className:"text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",children:[(0,m.jsx)("svg",{className:"me-1 -ms-1 w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,m.jsx)("path",{"fill-rule":"evenodd",d:"M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z","clip-rule":"evenodd"})}),y?"Edit Question":"Add New Question"]})]})]})})})]})};function y(e){let{_id:n,correct_answer:r,wrong_answers:l,value:s,id:o,index:t}=e;const i=(0,a.I0)(),{currentQuestions:d,currentLevel:c,isLoading:u}=(0,a.v9)((e=>e.questions));return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("h2",{id:"accordion-color-heading-".concat(o,"-").concat(t),children:(0,m.jsxs)("button",{type:"button",class:"flex flex-wrap items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800 gap-3","data-accordion-target":"#accordion-color-body-".concat(o,"-").concat(t),"aria-expanded":"false","aria-controls":"accordion-color-body-".concat(o,"-").concat(t),onClick:()=>{const e=document.querySelector("#accordion-color-body-".concat(o,"-").concat(t));document.querySelectorAll(".question-body").forEach((e=>{e.style.display="none",e.classList.remove("hidden")}));const n=window.getComputedStyle(e).getPropertyValue("display");e.style.display="block"===n?"none":"block"},children:[(0,m.jsxs)("span",{style:{maxWidth:"97%",display:"inline-block",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:[(0,m.jsxs)("span",{className:" me-3",children:[t+1," ",")"]}),null===s||void 0===s?void 0:s.en]}),(0,m.jsxs)("div",{className:"flex flex-row items-center gap-8",children:[(0,m.jsxs)("div",{className:"flex flex-row items-center gap-5",children:[(0,m.jsx)(x.Z,{variant:"contained",startIcon:(0,m.jsx)(h.Z,{}),color:"error",onClick:()=>{b().fire({icon:"question",title:"Are you sure ?",iconHtml:"\u061f",confirmButtonText:"yes",cancelButtonText:"no",showCancelButton:!0,showCloseButton:!0}).then((e=>{e.isConfirmed&&(i((0,v.Km)({questionId:n,levelId:null===c||void 0===c?void 0:c._id})),i((0,f.kf)()))}))},children:"Delete"}),(0,m.jsx)(p,{editMode:!0,levelId:null===c||void 0===c?void 0:c._id,questionId:n,oldQuestion:{_id:n,value:s,correct_answer:r,wrong_answers:l}})]}),(0,m.jsx)("svg",{"data-accordion-icon":!0,class:"w-3 h-3 rotate-180 shrink-0","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 10 6",children:(0,m.jsx)("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5 5 1 1 5"})})]})]})}),(0,m.jsx)("div",{id:"accordion-color-body-".concat(o,"-").concat(t),class:"hidden question-body","aria-labelledby":"accordion-color-heading-".concat(o,"-").concat(t),children:(0,m.jsxs)("div",{class:"p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900",children:[(0,m.jsx)("h3",{className:"text-xl",children:"Question in Arabic"}),(0,m.jsx)("span",{className:"text-right rtl",children:null===s||void 0===s?void 0:s.ar}),(0,m.jsx)("br",{}),(0,m.jsx)("h3",{className:"text-xl",children:"Wrong answers (English) "}),(0,m.jsx)("ul",{children:null===l||void 0===l?void 0:l.map((e=>(0,m.jsxs)("li",{children:["- ",null===e||void 0===e?void 0:e.en]})))}),(0,m.jsx)("h3",{className:"text-xl",children:"Wrong answers (Arabic) "}),(0,m.jsx)("ul",{children:null===l||void 0===l?void 0:l.map((e=>(0,m.jsxs)("li",{children:["- ",null===e||void 0===e?void 0:e.ar]})))}),(0,m.jsx)("br",{}),(0,m.jsx)("h3",{className:"text-xl",children:"Correct answers (English) "}),"-"," ",(0,m.jsx)("span",{className:"text-lg text-green-400",children:null===r||void 0===r?void 0:r.en}),(0,m.jsx)("br",{}),(0,m.jsx)("h3",{className:"text-xl",children:"Correct answers (Arabic) "}),"-"," ",(0,m.jsx)("span",{className:"text-lg text-green-400",children:null===r||void 0===r?void 0:r.ar})]})})]})}var k=r(6264);const N=function(){const{currentQuestions:e,isError:n,message:r,isLoading:l}=(0,a.v9)((e=>e.questions));return(0,m.jsxs)("div",{id:"accordion-color","data-accordion":"collapse","data-active-classes":"bg-blue-100 dark:bg-gray-800 text-blue-600 dark:text-white",children:[l&&(0,m.jsx)(k.Z,{className:"h-50"}),!l&&Array.isArray(e)&&(null===e||void 0===e?void 0:e.map(((e,n)=>(0,s.createElement)(y,{...e,key:n,id:n,index:n}))))]})};function C(){const{levels:e,levelIsSet:n,isError:r,message:l,isLoading:i}=(0,a.v9)((e=>e.levels)),d=(0,a.I0)();return(0,s.useEffect)((()=>{d((0,f.kf)())}),[d]),(0,m.jsxs)(o.Z,{children:[(0,m.jsx)(t.Z,{variant:"h4",sx:{mb:5},children:"Here You Can Customize The Questions \ud83d\udc4b"}),i&&(0,m.jsx)(k.Z,{}),!i&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(p,{}),(0,m.jsx)("div",{className:"w-full flex justify-center items-center  gap-16 mb-8 flex-wrap",children:e.map((e=>(0,m.jsx)(g,{name_en:null===e||void 0===e?void 0:e.name_en,name_ar:null===e||void 0===e?void 0:e.name_ar,level_en:null===e||void 0===e?void 0:e.level_en,level_ar:null===e||void 0===e?void 0:e.level_ar,questions:null===e||void 0===e?void 0:e.questions,numberOfMinutes:null===e||void 0===e?void 0:e.numberOfMinutes,_id:null===e||void 0===e?void 0:e._id,level:e})))}),(0,m.jsx)(N,{})]})]})}function A(){return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(l.ql,{children:(0,m.jsx)("title",{children:" Questions "})}),(0,m.jsx)(C,{})]})}}}]);
//# sourceMappingURL=379.22d90710.chunk.js.map