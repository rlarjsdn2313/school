(this.webpackJsonpschool=this.webpackJsonpschool||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){},32:function(e,t,c){},33:function(e,t,c){},34:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),r=c(9),a=c.n(r),i=(c(16),c(2)),j=c(35),o=(c(17),c(0));var h=function(e){var t=Object(n.useState)(""),c=Object(i.a)(t,2),s=c[0],r=c[1],a=Object(n.useState)(!1),h=Object(i.a)(a,2),u=h[0],b=h[1],d=Object(n.useState)(!1),l=Object(i.a)(d,2),O=l[0],f=l[1],x=Object(j.a)(["password"])[1];return""!==s&&(fetch("http://christmasletter.tk:3000/api/check/default/"+s).then((function(e){return e.json()})).then((function(e){return f(e.check)})),fetch("http://christmasletter.tk:3000/api/check/admin/"+s).then((function(e){return e.json()})).then((function(e){return b(e.check)}))),Object(n.useEffect)((function(){!0===u?e.setCheck("admin"):!0===O?e.setCheck("default"):e.setCheck("nothing"),x("password",s)})),Object(o.jsx)("div",{className:"Login",children:Object(o.jsxs)("div",{className:"box1",children:[Object(o.jsxs)("div",{className:"h1",children:["\ube44\ubc00\ubc88\ud638",Object(o.jsx)("br",{}),"\uc785\ub825"]}),Object(o.jsx)("input",{className:"password",placeholder:"Password",value:s,onChange:function(e){r(e.target.value)}})]})})},u=c(10);var b=function(e){var t=Object(n.useState)(0),c=Object(i.a)(t,2),s=c[0],r=c[1];return fetch("http://christmasletter.tk:3000/api/read/"+e.no+"/"+e.password).then((function(e){return e.json()})).then((function(e){return r(e)})),0===s?Object(o.jsx)("div",{className:"Article",children:Object(o.jsx)("h1",{children:"Loading..."})}):Object(o.jsxs)("div",{className:"Article",children:[Object(o.jsxs)("h1",{className:"date",children:[s.date[0],"\ub144 ",s.date[1],"\uc6d4 ",s.date[2],"\uc77c"]}),Object(o.jsx)("div",{className:"content",children:Object(u.a)(s.article)})]})};c(32);var d=function(){var e=Object(n.useState)(0),t=Object(i.a)(e,2),c=t[0],s=t[1],r=Object(j.a)(["password"]),a=Object(i.a)(r,1)[0];if(fetch("http://christmasletter.tk:3000/api/read/0/"+a.password).then((function(e){return e.json()})).then((function(e){return s(e)})),0===c)return Object(o.jsx)("div",{className:"Articles",children:"Loading..."});for(var h=[],u=c.no;u>=1;u--)h.push(u);return h.reverse(),Object(o.jsx)("div",{className:"Articles",children:function(e){return e.map((function(e,t){return Object(o.jsxs)("div",{children:[Object(o.jsx)(b,{no:e,password:a.password},e),Object(o.jsx)("br",{}),Object(o.jsx)("hr",{width:"70%",align:"center",color:"#FFFFF3"}),Object(o.jsx)("br",{})]})}))}(h)})};c(33);var l=function(){var e=Object(n.useState)("nothing"),t=Object(i.a)(e,2),c=t[0],s=t[1];return document.querySelector("title").innerHTML="208","default"===c?Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)("header",{className:"title",children:"208"}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)(d,{})]}):Object(o.jsx)("div",{className:"App",children:Object(o.jsx)(h,{setCheck:s})})},O=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,36)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,a=t.getTTFB;c(e),n(e),s(e),r(e),a(e)}))};a.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(l,{})}),document.getElementById("root")),O()}},[[34,1,2]]]);
//# sourceMappingURL=main.c0b743bb.chunk.js.map