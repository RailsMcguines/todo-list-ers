(this["webpackJsonptodo-list-ers"]=this["webpackJsonptodo-list-ers"]||[]).push([[0],{39:function(e,t,a){},41:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var s,c=a(1),n=a.n(c),i=a(6),l=a.n(i),r=(a(16),a(17),a(9)),o=a(7),d=a(8),j=a(11),h=a(10),u=(a(39),a(0)),b=function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).props=e,s.state={inputValue:"",namsur:"",tech:"",spe:"",city:"",tasks:[]},s}return Object(d.a)(a,[{key:"addHandle",value:function(){if(""!==this.state.namsur&&""!==this.state.tech&&""!==this.state.spe&&""!==this.state.city){var e=[];e.push(this.state.namsur),e.push(this.state.spe),e.push(this.state.tech),e.push(this.state.city),this.setState({tasks:[].concat(Object(r.a)(this.state.tasks),[e])}),this.setState({namsur:"",spe:"",tech:"",city:""});document.querySelector('#spe [value="op"]').selected=!0}}},{key:"handleInput",value:function(e){switch(e.target.name){case"namsur":this.setState({namsur:e.target.value});break;case"tech":this.setState({tech:e.target.value});break;case"spe":this.setState({spe:e.target.value});break;case"city":this.setState({city:e.target.value})}}},{key:"handleSelect",value:function(e){"op"!==e.target.value&&this.setState({spe:e.target.value})}},{key:"deleteItem",value:function(e){s=this.state.tasks.filter((function(t){return t!==e})),this.setState({tasks:s})}},{key:"render",value:function(){var e=this;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:"container",children:[Object(u.jsxs)("div",{className:"row mb-1",children:[Object(u.jsx)("div",{className:"col-3",children:"Name and Surname"}),Object(u.jsx)("div",{class:"col-9",children:Object(u.jsx)("input",{value:this.state.namsur,name:"namsur",onChange:function(t){return e.handleInput(t)},className:"form-control",type:"text",placeholder:"Enter Name","aria-label":"default input example"})})]}),Object(u.jsxs)("div",{className:"row mb-1",children:[Object(u.jsx)("div",{className:"col-3",children:"Specialty"}),Object(u.jsx)("div",{className:"col-9",children:Object(u.jsxs)("select",{name:"spe",id:"spe",className:"form-select","aria-label":"Default select example",onClick:function(t){return e.handleSelect(t)},children:[Object(u.jsx)("option",{value:"op",selected:!0,children:"Elige una opci\xf3n"}),Object(u.jsx)("option",{value:"Software development (Desktop)",children:"Software developement (Desktop)"}),Object(u.jsx)("option",{value:"Software development",children:"Software developement"}),Object(u.jsx)("option",{value:"Web development (Frontend)",children:"Web developement (Frontend)"}),Object(u.jsx)("option",{value:"Web development (Backend)",children:"Web developement (Backend)"}),Object(u.jsx)("option",{value:"Web development (FullStack)",children:"Web developement (FullStack)"}),Object(u.jsx)("option",{value:"Software development (Mobile)",children:"Software developement (Mobile)"}),Object(u.jsx)("option",{value:"Software developement (VideoGames)",children:"Software developement (VideoGames)"}),Object(u.jsx)("option",{value:"Data Base Administration",children:"Data Base Administration"}),Object(u.jsx)("option",{value:"Software Engineering",children:"Sotware Engineering"}),Object(u.jsx)("option",{value:"IT Securty",children:"IT Securty"}),Object(u.jsx)("option",{value:"DevOps Engineering",children:"DevOps Engineering"}),Object(u.jsx)("option",{value:"System Administration",children:"System Administration"})]})})]}),Object(u.jsxs)("div",{className:"row mb-1",children:[Object(u.jsx)("div",{className:"col-3",children:"Main Technology"}),Object(u.jsx)("div",{className:"col-9",children:Object(u.jsx)("input",{value:this.state.tech,id:"esp",name:"tech",onChange:function(t){return e.handleInput(t)},className:"form-control",type:"text",placeholder:"Enter main dev technolgy","aria-label":"default input example"})})]}),Object(u.jsxs)("div",{className:"row mb-2",children:[Object(u.jsx)("div",{className:"col-3",children:"City"}),Object(u.jsx)("div",{className:"col-9",children:Object(u.jsx)("input",{value:this.state.city,name:"city",onChange:function(t){return e.handleInput(t)},className:"form-control",type:"text",placeholder:"Enter City","aria-label":"default input example"})})]})]}),Object(u.jsx)("div",{className:"derecha",children:Object(u.jsx)("button",{className:"btn btn-dark bg-dark btn-add mt-2 mb-4",onClick:function(){return e.addHandle()},children:"Agregar"})}),Object(u.jsx)("div",{className:"text-aligned",children:Object(u.jsxs)("table",{children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"Nombre"}),Object(u.jsx)("th",{children:"Especialidad"}),Object(u.jsx)("th",{children:"Teconolg\xeda"}),Object(u.jsx)("th",{children:"Ciudad"}),Object(u.jsx)("th",{children:"Operaci\xf3n"})]})}),Object(u.jsx)("tbody",{children:this.state.tasks.map((function(t,a){return Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:t[0]}),Object(u.jsx)("td",{children:t[1]}),Object(u.jsx)("td",{children:t[2]}),Object(u.jsx)("td",{children:t[3]}),Object(u.jsx)("td",{className:"centro",children:Object(u.jsx)("button",{className:"btn btn-danger btn-sm",onClick:function(a){return e.deleteItem(t)},children:"Eliminar"})})]},t[0])}))})]})})]})}}]),a}(n.a.Component),m=(a(41),a.p+"static/media/techprof.15ec9c40.png");var p=function(){return Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("header",{className:"row alto",children:Object(u.jsx)("div",{className:"col main-title",children:Object(u.jsx)("h1",{children:"IT profile register"})})}),Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"col-1"}),Object(u.jsx)("div",{className:"col-9",children:Object(u.jsx)(b,{})}),Object(u.jsx)("div",{className:"col-2",children:Object(u.jsx)("img",{className:"tech",src:m,alt:"tech_profile"})})]}),Object(u.jsx)("nav",{className:"navbar fixed-bottom",children:Object(u.jsx)("p",{className:"autor",children:"EnzoRodriguez@LocalhostXL - La Rioja 2021"})})]})},v=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,46)).then((function(t){var a=t.getCLS,s=t.getFID,c=t.getFCP,n=t.getLCP,i=t.getTTFB;a(e),s(e),c(e),n(e),i(e)}))};l.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(p,{})}),document.getElementById("root")),v()}},[[43,1,2]]]);
//# sourceMappingURL=main.113ce934.chunk.js.map