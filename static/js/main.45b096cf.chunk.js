(this["webpackJsonpnetflic-clone"]=this["webpackJsonpnetflic-clone"]||[]).push([[0],{25:function(e,t,c){},26:function(e,t,c){},33:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(18),r=c.n(s),l=(c(25),c(6)),i=c(20),o=(c(26),c(8)),d=c.n(o),j=c(11),b=c(0);function u(e){var t=Object(n.useState)(""),c=Object(l.a)(t,2),a=c[0],s=c[1];return Object(b.jsx)("nav",{class:"navbar navbar-expand-lg navbar-light bg-light",children:Object(b.jsxs)("div",{class:"container-fluid",children:[Object(b.jsx)(j.b,{class:"navbar-brand",to:"/",children:e.title}),Object(b.jsx)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(b.jsx)("span",{class:"navbar-toggler-icon"})}),Object(b.jsxs)("div",{class:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(b.jsx)("ul",{class:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(b.jsx)("li",{class:"nav-item",children:Object(b.jsx)(j.b,{class:"nav-link active","aria-current":"page",to:"/about",children:"About"})})}),e.searchbar&&Object(b.jsxs)("form",{class:"d-flex",to:"/search",onSubmit:function(t){t.preventDefault(),console.log("Searching for :",a),e.searchFun(a)},children:[Object(b.jsx)("input",{class:"form-control me-2",value:a,onChange:function(e){return s(e.target.value)},type:"search",placeholder:"Search","aria-label":"Search"}),Object(b.jsx)("button",{class:"btn btn-outline-success",type:"submit",children:"Search"})]})]})]})})}u.defaultProps={title:"Title here",searchbar:!0},u.PropType={title:d.a.string.isRequired,searchbar:d.a.bool};c(33);function x(e){var t=e.list,c=e.ondelete;return Object(b.jsxs)("div",{className:"container-md todoelement",children:[Object(b.jsxs)("div",{class:"card",children:[Object(b.jsxs)("div",{class:"card-header",children:["Work Id : ",t.id]}),Object(b.jsxs)("div",{class:"card-body",children:[Object(b.jsxs)("h5",{class:"card-title",children:["Place of work : ",t.place]}),Object(b.jsxs)("p",{class:"card-text",children:["work : ",t.work]}),Object(b.jsx)("button",{class:"btn btn-danger btn-sm",onClick:function(){c(t)},children:"Delete"})]})]}),Object(b.jsx)("hr",{})]})}var h=c.p+"static/media/nodata.58120292.png";function O(e){return Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("h1",{className:"text-center",children:"Upcoming Events"}),0==e.todo.length?Object(b.jsx)("div",{className:"text-center",children:Object(b.jsx)("img",{className:"nodatapic",src:h})}):e.todo.map((function(t){return Object(b.jsx)(x,{list:t,ondelete:e.ondelete},t.id)}))]})}c(34);function m(){return Object(b.jsxs)("footer",{class:"myfooter my-5 pt-5 text-muted text-center text-small",children:[Object(b.jsx)("p",{class:"mb-1",children:"\xa9 2017\u20132021 Bhupinder_Demo"}),Object(b.jsx)("ul",{class:"list-inline",children:Object(b.jsx)("li",{class:"list-inline-item",children:Object(b.jsx)("a",{href:"#",children:"Back To Top"})})})]})}c(35);function v(e){var t=Object(n.useState)(""),c=Object(l.a)(t,2),a=c[0],s=c[1],r=Object(n.useState)(""),i=Object(l.a)(r,2),o=i[0],d=i[1],j=Object(n.useState)(!1),u=Object(l.a)(j,2),x=u[0],h=u[1];return Object(b.jsxs)("form",{onSubmit:function(t){t.preventDefault(),""===a||""===o?h(!0):(h(!1),e.adding(a,o))},children:[x?Object(b.jsxs)("div",{class:"alert alert-primary d-flex align-items-center",role:"alert",children:[Object(b.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"currentColor",class:"bi bi-exclamation-triangle-fill flex-shrink-0 me-2",viewBox:"0 0 16 16",role:"img","aria-label":"Warning:",children:Object(b.jsx)("path",{d:"M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"})}),Object(b.jsx)("div",{children:"All Fields are compulsory."})]}):"",Object(b.jsxs)("div",{className:"container-lg p-2 addevent",children:[Object(b.jsx)("div",{className:"container",children:Object(b.jsx)("h3",{className:"text-center",children:"Add Events"})}),Object(b.jsxs)("div",{class:"mb-5",children:[Object(b.jsx)("label",{for:"exampleFormControlInput1",class:"form-label text-start   ",children:"Place Of Event :"}),Object(b.jsx)("input",{value:a,type:"text",onChange:function(e){s(e.target.value)},class:"form-control",id:"exampleFormControlInput1",placeholder:"Amritsar"})]}),Object(b.jsxs)("div",{class:"mb-5",children:[Object(b.jsx)("label",{for:"exampleFormControlTextarea1",class:"form-label",children:"Event Detail:"}),Object(b.jsx)("textarea",{value:o,onChange:function(e){d(e.target.value)},class:"form-control",id:"exampleFormControlTextarea1",rows:"3"})]}),Object(b.jsx)("div",{className:"text-center",children:Object(b.jsx)("button",{className:"btn btn-light addbtn",children:"Add Topic"})})]})]})}function p(e){return Object(b.jsx)("div",{className:"text-end",children:Object(b.jsx)("button",{className:"btn btn-outline-danger m-3",onClick:e.addbutton,children:e.name})})}var g=c.p+"static/media/bhupinderpic.f842b976.jpg";function f(){return Object(b.jsx)("div",{className:"container text-center",style:{padding:"10px"},children:Object(b.jsxs)("div",{class:"card",style:{width:"20rem",margin:"auto"},children:[Object(b.jsx)("img",{src:g,class:"card-img-top"}),Object(b.jsxs)("div",{class:"card-body",children:[Object(b.jsx)("p",{class:"card-text",children:"Name : Bhupinder"}),Object(b.jsx)("p",{class:"card-text",children:"Btech CSE 2022"}),Object(b.jsx)("p",{class:"card-text",children:"Ph.no. 7901926491"}),Object(b.jsx)("p",{class:"card-text",children:"Guru Nanak Dev University"})]})]})})}function S(e){return Object(b.jsx)("div",{className:"text-center",children:Object(b.jsxs)("h1",{children:["Searched Results for ... ",e.searchTxt]})})}var C=c(2);var N=function(){function e(e){console.log("Deleted list : ",e),d(o.filter((function(t){return t!==e})))}function t(e,t){console.log("place stored :",e," work stored :",t);var c=1;0!==o.length&&(c=o[o.length-1].id+1);var n={id:c,place:e,work:t};d([].concat(Object(i.a)(o),[n])),N(!1),D(!0),F("Add Events")}function c(){console.log("add btn called"),!1===g?(N(!0),F("Close X"),D(!1)):(N(!1),D(!0),F("Add Events"))}var a;a="null"===localStorage.getItem("Tododata")?[]:JSON.parse(localStorage.getItem("Tododata"));var s=Object(n.useState)(a),r=Object(l.a)(s,2),o=r[0],d=r[1],x=Object(n.useState)(!1),h=Object(l.a)(x,2),g=h[0],N=h[1],y=Object(n.useState)("Add Events"),w=Object(l.a)(y,2),k=w[0],F=w[1],T=Object(n.useState)(!0),E=Object(l.a)(T,2),A=E[0],D=E[1],I=Object(n.useState)(""),B=Object(l.a)(I,2),P=B[0],L=B[1];return Object(n.useEffect)((function(){localStorage.setItem("Tododata",JSON.stringify(o))}),[o]),Object(b.jsx)("div",{children:Object(b.jsxs)(j.a,{children:[Object(b.jsx)(u,{title:"Daily Events",searchbar:!1,searchFun:function(e){L(e)}}),Object(b.jsxs)(C.c,{children:[Object(b.jsx)(C.a,{exact:!0,path:"/",render:function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(p,{name:k,addbutton:c}),g?Object(b.jsx)(v,{adding:t}):"",A?Object(b.jsx)(O,{todo:o,ondelete:e}):""]})}}),Object(b.jsx)(C.a,{exact:!0,path:"/about",render:function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(f,{})})}}),Object(b.jsx)(C.a,{exact:!0,path:"/search",render:function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(S,{searchtxt:P,todolist:o})})}})]}),Object(b.jsx)(m,{})]})})},y=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,37)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),s(e),r(e)}))};r.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(N,{})}),document.getElementById("root")),y()}},[[36,1,2]]]);
//# sourceMappingURL=main.45b096cf.chunk.js.map