"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[267],{7267:function(e,r,a){a.r(r),a.d(r,{default:function(){return d}});var t=a(885),n=a(5562),s=a.n(n),o=a(304),u=a(2791),i=a(9434),l={loginForm:"LogIn_loginForm__6b9O-",input:"LogIn_input__hyhmW"},c=a(6085),m=a(6127),f=a(9634),p=a(184);function d(){var e=(0,i.v9)((function(e){return e.auth.authStatus})),r=(0,i.I0)(),a=(0,u.useState)(""),n=(0,t.Z)(a,2),d=n[0],h=n[1],g=(0,u.useState)(""),w=(0,t.Z)(g,2),v=w[0],_=w[1];(0,u.useEffect)((function(){"LogError"===e&&s().Notify.failure("Error: incorrectly entered email or password")}),[e]),(0,u.useEffect)((function(){return function(){return r((0,m._4)())}}),[r]);var b=function(e){var r=e.target.name,a=e.target.value;switch(r){case"email":return h(a);case"password":return _(a);default:return}};return(0,p.jsxs)("form",{className:l.loginForm,onSubmit:function(e){if(e.preventDefault(),""===d||""===v)return s().Notify.failure("Error: incorrectly entered email or password");r((0,c.vz)({email:d,password:v}))},children:[(0,p.jsxs)("label",{className:l.label,children:["Email",(0,p.jsx)("input",{placeholder:"Email",className:l.input,type:"email",name:"email",value:d,onChange:b})]}),(0,p.jsxs)("label",{children:["Password",(0,p.jsx)("input",{placeholder:"Password",className:l.input,type:"password",name:"password",value:v,onChange:b})]}),"LogPending"===e?(0,p.jsx)(f.aN,{}):(0,p.jsx)(o.Z,{type:"submit",variant:"primary",className:l.button,children:"Log in"})]})}}}]);
//# sourceMappingURL=267.9d53a774.chunk.js.map