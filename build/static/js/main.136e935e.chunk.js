(this["webpackJsonpfirebase-auth"]=this["webpackJsonpfirebase-auth"]||[]).push([[0],{58:function(e,t,c){"use strict";c.r(t);var r=c(0),n=c.n(r),a=c(19),s=c.n(a),i=(c(48),c(61)),j=c(10),o=c(7),l=c(8),d=c(31),u=(c(49),d.a.initializeApp({apiKey:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_FIREBASE_API_KEY,authDomain:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_FIREBASE_AUTH_DOMAIN,projectId:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_FIREBASE_PROJECT_ID,storageBucket:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_FIREBASE_STORAGE_BUCKET,messagingSenderId:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_FIREBASE_MESSAGING_SENDER_ID,appId:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_FIREBASE_APP_ID})),b=u.auth(),O=c(1),p=Object(r.createContext)();function h(){return Object(r.useContext)(p)}function x(e){var t=e.children,c=Object(r.useState)(),n=Object(l.a)(c,2),a=n[0],s=n[1];Object(r.useEffect)((function(){return b.onAuthStateChanged((function(e){s(e)}))}),[]);var i={currentUser:a,signUp:function(e,t){return b.createUserWithEmailAndPassword(e,t)},login:function(e,t){return b.signInWithEmailAndPassword(e,t)},logout:function(){return b.signOut()},resetPassword:function(e){return b.sendPasswordResetEmail(e)},updateEmail:function(e){return a.updateEmail(e)},updatePassword:function(e){return a.updatePassword(e)}};return Object(O.jsx)(p.Provider,{value:i,children:t})}var m=c(11),f=c.n(m),S=c(17),v=c(65),E=c(63),_=c(64),g=c(60),w=function(){var e=Object(r.useRef)(),t=Object(r.useRef)(),c=Object(r.useRef)(),a=h(),s=a.signUp,i=a.currentUser,o=Object(r.useState)(""),d=Object(l.a)(o,2),u=d[0],b=d[1],p=Object(r.useState)(!1),x=Object(l.a)(p,2),m=x[0],w=x[1];function P(){return(P=Object(S.a)(f.a.mark((function r(n){return f.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(n.preventDefault(),t.current.value===c.current.value){r.next=3;break}return r.abrupt("return",b("password donot match!"));case 3:return r.prev=3,b(""),w(!0),r.next=8,s(e.current.value,t.current.value);case 8:r.next=13;break;case 10:r.prev=10,r.t0=r.catch(3),b("Failde to create an account!");case 13:w(!1);case 14:case"end":return r.stop()}}),r,null,[[3,10]])})))).apply(this,arguments)}return Object(O.jsxs)(n.a.Fragment,{children:[Object(O.jsx)(v.a,{children:Object(O.jsxs)(v.a.Body,{children:[Object(O.jsx)("h2",{className:"text-center mb-4",children:"Sign Up"}),u&&Object(O.jsx)(E.a,{variant:"danger",children:u}),i&&i.email,Object(O.jsxs)(_.a,{onSubmit:function(e){return P.apply(this,arguments)},children:[Object(O.jsxs)(_.a.Group,{id:"email",children:[Object(O.jsx)(_.a.Label,{children:"Email"}),Object(O.jsx)(_.a.Control,{type:"email",ref:e,required:!0})]}),Object(O.jsxs)(_.a.Group,{id:"password",children:[Object(O.jsx)(_.a.Label,{children:"Password"}),Object(O.jsx)(_.a.Control,{type:"password",ref:t,required:!0})]}),Object(O.jsxs)(_.a.Group,{id:"password-confirm",children:[Object(O.jsx)(_.a.Label,{children:"Password Confirmation"}),Object(O.jsx)(_.a.Control,{type:"password",ref:c,required:!0})]}),Object(O.jsx)(g.a,{disabled:m,className:"w-100",type:"submit",children:"Sign up"})]})]})}),Object(O.jsxs)("div",{className:"w-100 text-center mt-3",children:["Already have an account ?",Object(O.jsx)(j.b,{to:"/login",children:"Log in"})]})]})},P=c(62),T=c(35),C=c(38),R=c(39),A=c(43),N=c(40);function y(e){return console.log("from user component :",e.users),Object(O.jsx)("div",{children:Object(O.jsx)("ul",{children:e.users.map((function(e){e.id}))})})}r.Component;function D(){var e=Object(r.useState)(""),t=Object(l.a)(e,2),c=t[0],a=t[1],s=Object(r.useState)([]),d=Object(l.a)(s,2),u=d[0],b=d[1],p=h(),x=p.currentUser,m=p.logout,_=Object(o.g)();function w(){return(w=Object(S.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(""),e.prev=1,e.next=4,m();case 4:_.push("/login"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),a("Failed to log Out");case 10:case"end":return e.stop()}}),e,null,[[1,7]])})))).apply(this,arguments)}var C=function(){var e=Object(S.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/users");case 2:return t=e.sent,console.log(t),e.t0=b,e.next=7,t.json();case 7:e.t1=e.sent,(0,e.t0)(e.t1),console.log("Users : ",u);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){C()}),[]),Object(O.jsx)(n.a.Fragment,{children:Object(O.jsx)(i.a,{children:Object(O.jsxs)(P.a,{children:[Object(O.jsxs)(T.a,{md:4,children:[Object(O.jsx)(v.a,{children:Object(O.jsxs)(v.a.Body,{children:[Object(O.jsx)("h2",{className:"text-center mb-4",children:"Profile"}),c&&Object(O.jsx)(E.a,{variant:"danger",children:c}),Object(O.jsxs)("p",{children:[Object(O.jsx)("strong",{children:"Email : "}),x&&x.email]}),Object(O.jsx)(j.b,{className:"btn btn-primary w-100 mt-3",to:"/update-profile",children:"Update Profile"})]})}),Object(O.jsx)(g.a,{variant:"link",onClick:function(){return w.apply(this,arguments)},className:"w-100",type:"submit",children:"Log out"})]}),Object(O.jsxs)(T.a,{md:8,children:[Object(O.jsx)("h3",{children:"User lists : "}),Object(O.jsx)("hr",{}),Object(O.jsx)(P.a,{children:u.map((function(e){return Object(O.jsx)(T.a,{md:6,children:Object(O.jsxs)(v.a,{className:"mb-3",children:[Object(O.jsx)(v.a.Img,{variant:"top",src:e.url}),Object(O.jsxs)(v.a.Body,{children:[Object(O.jsx)(v.a.Title,{children:e.name}),Object(O.jsxs)(v.a.Text,{children:[Object(O.jsxs)("p",{children:[Object(O.jsxs)("strong",{className:"text-capitalize",children:["Email :"," "]})," ",e.email]}),Object(O.jsxs)("p",{children:[Object(O.jsxs)("strong",{className:"text-capitalize",children:["phone :"," "]})," ",e.phone]}),Object(O.jsxs)("p",{children:[Object(O.jsxs)("strong",{className:"text-capitalize",children:["website :"," "]})," ",e.website]}),Object(O.jsxs)("p",{children:[Object(O.jsxs)("strong",{className:"text-capitalize",children:["company :"," "]}),e.company.name]})]})]})]})},e.id)}))})]})]})})})}function F(){var e=Object(r.useRef)(),t=Object(r.useRef)(),c=h(),a=c.login,s=c.currentUser,d=Object(r.useState)(""),u=Object(l.a)(d,2),b=u[0],p=u[1],x=Object(r.useState)(!1),m=Object(l.a)(x,2),w=m[0],C=m[1],R=Object(o.g)();function A(){return(A=Object(S.a)(f.a.mark((function c(r){return f.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return r.preventDefault(),c.prev=1,p(""),C(!0),c.next=6,a(e.current.value,t.current.value);case 6:R.push("/"),c.next=12;break;case 9:c.prev=9,c.t0=c.catch(1),p("Failde to sign in");case 12:C(!1);case 13:case"end":return c.stop()}}),c,null,[[1,9]])})))).apply(this,arguments)}return Object(O.jsx)(n.a.Fragment,{children:Object(O.jsx)(i.a,{children:Object(O.jsx)(P.a,{className:"justify-content-center",children:Object(O.jsxs)(T.a,{md:6,children:[Object(O.jsx)(v.a,{children:Object(O.jsxs)(v.a.Body,{children:[Object(O.jsx)("h2",{className:"text-center mb-4",children:"Login"}),b&&Object(O.jsx)(E.a,{variant:"danger",children:b}),s&&s.email,Object(O.jsxs)(_.a,{onSubmit:function(e){return A.apply(this,arguments)},children:[Object(O.jsxs)(_.a.Group,{id:"email",children:[Object(O.jsx)(_.a.Label,{children:"Email"}),Object(O.jsx)(_.a.Control,{type:"email",ref:e,required:!0})]}),Object(O.jsxs)(_.a.Group,{id:"password",children:[Object(O.jsx)(_.a.Label,{children:"Password"}),Object(O.jsx)(_.a.Control,{type:"password",ref:t,required:!0})]}),Object(O.jsx)(g.a,{disabled:w,className:"w-100",type:"submit",children:"Login"}),Object(O.jsxs)("div",{className:"w-100 text-center mt-3",children:[Object(O.jsx)(j.b,{to:"/forgot-password",children:" Forgot Password"})," ?"]})]})]})}),Object(O.jsxs)("div",{className:"w-100 text-center mt-3",children:["Need an account",Object(O.jsx)(j.b,{to:"/signup",children:" Signup"})," ?"]})]})})})})}var U=c(22),L=c(41);function I(e){var t=e.component,c=Object(L.a)(e,["component"]),r=h().currentUser;return Object(O.jsx)(n.a.Fragment,{children:Object(O.jsx)(o.b,Object(U.a)(Object(U.a)({},c),{},{render:function(e){return r?Object(O.jsx)(t,Object(U.a)({},e)):Object(O.jsx)(o.a,{to:"/login"})}}))})}function B(){var e=Object(r.useRef)(),t=h().resetPassword,c=Object(r.useState)(""),a=Object(l.a)(c,2),s=a[0],o=a[1],d=Object(r.useState)(""),u=Object(l.a)(d,2),b=u[0],p=u[1],x=Object(r.useState)(!1),m=Object(l.a)(x,2),w=m[0],P=m[1];function T(){return(T=Object(S.a)(f.a.mark((function c(r){return f.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return r.preventDefault(),c.prev=1,o(""),p(""),P(!0),c.next=7,t(e.current.value);case 7:p("Check your inbox for further info"),c.next=13;break;case 10:c.prev=10,c.t0=c.catch(1),o("Failde to reset Email");case 13:P(!1);case 14:case"end":return c.stop()}}),c,null,[[1,10]])})))).apply(this,arguments)}return Object(O.jsx)(n.a.Fragment,{children:Object(O.jsxs)(i.a,{children:[Object(O.jsx)(v.a,{children:Object(O.jsxs)(v.a.Body,{children:[Object(O.jsx)("h2",{className:"text-center mb-4",children:"Forgot Password"}),s&&Object(O.jsx)(E.a,{variant:"danger",children:s}),b&&Object(O.jsx)(E.a,{variant:"success",children:b}),Object(O.jsxs)(_.a,{onSubmit:function(e){return T.apply(this,arguments)},children:[Object(O.jsxs)(_.a.Group,{id:"email",children:[Object(O.jsx)(_.a.Label,{children:"Email"}),Object(O.jsx)(_.a.Control,{type:"email",ref:e,required:!0})]}),Object(O.jsx)(g.a,{disabled:w,className:"w-100",type:"submit",children:"Reset Password"}),Object(O.jsx)("div",{className:"w-100 text-center mt-3",children:Object(O.jsx)(j.b,{to:"/login",children:" Login"})})]})]})}),Object(O.jsxs)("div",{className:"w-100 text-center mt-3",children:["Need an account",Object(O.jsx)(j.b,{to:"/signup",children:" Signup"})," ?"]})]})})}var K=function(){var e=Object(r.useRef)(),t=Object(r.useRef)(),c=Object(r.useRef)(),a=h(),s=a.currentUser,i=a.updateEmail,d=a.updatePassword,u=Object(r.useState)(""),b=Object(l.a)(u,2),p=b[0],x=b[1],m=Object(r.useState)(!1),f=Object(l.a)(m,2),S=f[0],w=f[1],P=Object(o.g)();return Object(O.jsxs)(n.a.Fragment,{children:[Object(O.jsx)(v.a,{children:Object(O.jsxs)(v.a.Body,{children:[Object(O.jsx)("h2",{className:"text-center mb-4",children:"Update profile"}),p&&Object(O.jsx)(E.a,{variant:"danger",children:p}),Object(O.jsxs)(_.a,{onSubmit:function(c){c.preventDefault();var r=[];x(""),w(!0),e.current.value!==s.email&&r.push(i(e.current.value)),t.current.value&&r.push(d(t.current.value)),Promise.all(r).then((function(){P.push("/")})).catch((function(){x("Failed to update Account")})).finally((function(){w(!1)}))},children:[Object(O.jsxs)(_.a.Group,{id:"email",children:[Object(O.jsx)(_.a.Label,{children:"Email"}),Object(O.jsx)(_.a.Control,{type:"email",ref:e,required:!0,defaultValue:s.email})]}),Object(O.jsxs)(_.a.Group,{id:"password",children:[Object(O.jsx)(_.a.Label,{children:"Password"}),Object(O.jsx)(_.a.Control,{type:"password",ref:t,placeholder:"leave blank to keep them same"})]}),Object(O.jsxs)(_.a.Group,{id:"password-confirm",children:[Object(O.jsx)(_.a.Label,{children:"Password Confirmation"}),Object(O.jsx)(_.a.Control,{type:"password",ref:c,placeholder:"leave blank to keep them same"})]}),Object(O.jsx)(g.a,{disabled:S,className:"w-100",type:"submit",children:"Update Profile"})]})]})}),Object(O.jsx)("div",{className:"w-100 text-center mt-3",children:Object(O.jsx)(j.b,{to:"/",children:"Cancel"})})]})};var k=function(){return Object(O.jsx)(i.a,{className:"App-header mt-4 pt-5",children:Object(O.jsx)(j.a,{children:Object(O.jsx)(x,{children:Object(O.jsxs)(o.d,{children:[Object(O.jsx)(I,{exact:!0,path:"/",component:D}),Object(O.jsx)(I,{path:"/update-profile",component:K}),Object(O.jsx)(o.b,{path:"/signup",component:w}),Object(O.jsx)(o.b,{path:"/login",component:F}),Object(O.jsx)(o.b,{path:"/forgot-password",component:B})]})})})})};s.a.render(Object(O.jsx)(n.a.StrictMode,{children:Object(O.jsx)(k,{})}),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.136e935e.chunk.js.map