(this.webpackJsonptodomachine=this.webpackJsonptodomachine||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(1),c=n.n(o),a=n(4),r=n.n(a),s=(n(12),n(13),n(14),n(6)),l=n(2);var u=n(0),i=c.a.createContext();function d(e){var t=function(e,t){var n=c.a.useState(!1),o=Object(l.a)(n,2),a=o[0],r=o[1],s=c.a.useState(!0),u=Object(l.a)(s,2),i=u[0],d=u[1],j=c.a.useState(t),b=Object(l.a)(j,2),m=b[0],O=b[1];return c.a.useEffect((function(){setTimeout((function(){try{var n,o=localStorage.getItem(e);o?n=JSON.parse(o):(localStorage.setItem(e,JSON.stringify(t)),n=t),O(n),d(!1)}catch(a){r(a)}}),1e3)})),{item:m,saveItem:function(t){try{var n=JSON.stringify(t);localStorage.setItem(e,n),O(t)}catch(a){r(a)}},loading:i,error:a}}("TODOS_V1",[]),n=t.item,o=t.saveItem,a=t.loading,r=t.error,d=c.a.useState(""),j=Object(l.a)(d,2),b=j[0],m=j[1],O=c.a.useState(!1),h=Object(l.a)(O,2),f=h[0],x=h[1],p=n.filter((function(e){return!!e.completed})).length,v=n.length,T=[];T=!b.length>=1?n:n.filter((function(e){var t=e.text.toLowerCase(),n=b.toLowerCase();return t.includes(n)}));return Object(u.jsx)(i.Provider,{value:{loading:a,error:r,totalTodos:v,completedTodos:p,searchValue:b,setSearchValue:m,searchedTodos:T,completeTodo:function(e){var t=n.findIndex((function(t){return t.text===e})),c=Object(s.a)(n);c[t].completed=!0,o(c)},deleteTodo:function(e){var t=n.findIndex((function(t){return t.text===e})),c=Object(s.a)(n);c.splice(t,1),o(c)},addTodo:function(e){var t=Object(s.a)(n);t.push({completed:!1,text:e}),o(t)},openModal:f,setOpenModal:x},children:e.children})}function j(){var e=c.a.useContext(i),t=e.totalTodos,n=e.completedTodos;return Object(u.jsxs)("h2",{className:"TodoCounter",children:["Has completado ",n," de ",t," TODOs"]})}n(16);function b(){var e=c.a.useContext(i),t=e.searchValue,n=e.setSearchValue;return Object(u.jsx)("input",{className:"TodoSearch",placeholder:"Cebolla",value:t,onChange:function(e){n(e.target.value)}})}n(17);function m(e){return Object(u.jsx)("button",{className:"CreateTodoButton",onClick:function(){e.setOpenModal((function(e){return!e}))},children:"+"})}n(18);function O(e){return Object(u.jsxs)("li",{className:"TodoItem",children:[Object(u.jsx)("span",{className:"Icon Icon-check ".concat(e.completed&&"Icon-check--active"),onClick:e.onComplete,children:"\u221a"}),Object(u.jsx)("p",{className:"TodoItem-p ".concat(e.completed&&"TodoItem-p--complete"),children:e.text}),Object(u.jsx)("span",{className:"Icon Icon-delete",onClick:e.onDelete,children:"X"})]})}n(19);function h(e){return Object(u.jsx)("section",{children:Object(u.jsx)("ul",{children:e.children})})}n(20);function f(e){var t=e.children;return r.a.createPortal(Object(u.jsx)("div",{className:"ModalBackground",children:t}),document.getElementById("modal"))}n(21);function x(){var e=c.a.useContext(i),t=e.addTodo,n=e.setOpenModal,o=c.a.useState(""),a=Object(l.a)(o,2),r=a[0],s=a[1];return Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(r),n(!1)},children:[Object(u.jsx)("label",{children:"Escribe tu nuevo TODO"}),Object(u.jsx)("textarea",{placeholder:"Cortar cebolla para el almuerzo",value:r,onChange:function(e){s(e.target.value)}}),Object(u.jsxs)("div",{className:"TodoForm-buttonContainer",children:[Object(u.jsx)("button",{type:"button",onClick:function(){n(!1)},className:"TodoForm-button TodoForm-button--cancel",children:"Cancelar"}),Object(u.jsx)("button",{type:"submit",className:"TodoForm-button TodoForm-button--add",children:"A\xf1adir"})]})]})}function p(){var e=c.a.useContext(i),t=e.error,n=e.loading,o=e.searchedTodos,a=e.completeTodo,r=e.deleteTodo,s=e.openModal,l=e.setOpenModal;return Object(u.jsxs)(c.a.Fragment,{children:[Object(u.jsx)(j,{}),Object(u.jsx)(b,{}),Object(u.jsxs)(h,{children:[t&&Object(u.jsx)("p",{children:"Desep\xe9rate, hubo un error..."}),n&&Object(u.jsx)("p",{children:"Estamos cargando, no desesperes..."}),!n&&!o.length&&Object(u.jsx)("p",{children:"\xa1Crea tu primer TODO!"}),o.map((function(e){return Object(u.jsx)(O,{text:e.text,completed:e.completed,onComplete:function(){return a(e.text)},onDelete:function(){return r(e.text)}},e.text)}))]}),!!s&&Object(u.jsx)(f,{children:Object(u.jsx)(x,{})}),Object(u.jsx)(m,{setOpenModal:l})]})}var v=function(){return Object(u.jsx)(d,{children:Object(u.jsx)(p,{})})},T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,23)).then((function(t){var n=t.getCLS,o=t.getFID,c=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),o(e),c(e),a(e),r(e)}))};r.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(v,{})}),document.getElementById("root")),T()}],[[22,1,2]]]);
//# sourceMappingURL=main.b1017e9e.chunk.js.map