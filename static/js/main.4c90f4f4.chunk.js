(this["webpackJsonpmentor-app"]=this["webpackJsonpmentor-app"]||[]).push([[0],{57:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},87:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),s=a(39),r=a.n(s),i=(a(71),a(72),a(73),a(91)),o=a(9),l=a(55),j=(a(74),a(88),l.a.initializeApp({apiKey:"AIzaSyD1FEffXkZwvor03s4g5grGyMn0wYpeETk",authDomain:"mentorapp-b9397.firebaseapp.com",projectId:"mentorapp-b9397",storageBucket:"mentorapp-b9397.appspot.com",messagingSenderId:"400069391306",appId:"1:400069391306:web:b679dec3a6d995221a5533"})),u=l.a.firestore(),d=j.auth(),b=a(2),h=n.a.createContext();function x(){return Object(c.useContext)(h)}function p(e){var t=e.children,a=Object(c.useState)(),n=Object(o.a)(a,2),s=n[0],r=n[1],i=Object(c.useState)(!0),l=Object(o.a)(i,2),j=l[0],u=l[1];Object(c.useEffect)((function(){return d.onAuthStateChanged((function(e){r(e),u(!1)}))}),[]);var x={currentUser:s,login:function(e,t){return d.signInWithEmailAndPassword(e,t)},signup:function(e,t){return d.createUserWithEmailAndPassword(e,t)},logout:function(){return d.signOut()},resetPassword:function(e){return d.sendPasswordResetEmail(e)},updateEmail:function(e){return s.updateEmail(e)},updatePassword:function(e){return s.updatePassword(e)},updateProfile:function(e){return s.updateProfile({displayName:e})},updatePicture:function(e){return s.updateProfile({photoURL:e})}};return Object(b.jsx)(h.Provider,{value:x,children:!j&&t})}var m=a(16),O=a(11),f=a(10),g=a.n(f),v=a(17),y=a(96),w=a(95),N=a(90),S=a(98),k=a(97);function P(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(!0),r=Object(o.a)(s,2),l=r[0],j=r[1],d=x(),h=d.currentUser,p=d.logout,f=Object(O.g)(),P=Object(c.useState)([]),L=Object(o.a)(P,2),C=L[0],R=L[1],E=Object(c.useState)(""),I=Object(o.a)(E,2),U=I[0],G=I[1],B=h.uid,D=function(e){return new Promise((function(t){return setTimeout(t,e)}))};function F(){return(F=Object(v.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(""),e.prev=1,e.next=4,p();case 4:f.push("/front-page"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),n("Failed to log out");case 10:case"end":return e.stop()}}),e,null,[[1,7]])})))).apply(this,arguments)}return Object(c.useEffect)((function(){(function(){var e=Object(v.a)(g.a.mark((function e(){var t,a,c;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,j(!0),e.next=4,D(500);case 4:return t=u.collection("userinfo").doc("".concat(B)),e.next=7,t.get();case 7:a=e.sent,c=[],[a].forEach((function(e){var t=e.data();c.push(t.languages),G(t.description)})),R(c[0]),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log("error: ",e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}})()(),j(!1)}),[B,C]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)(y.a,{fixed:"top",variant:"pills",className:"me-2 justify-content-end",children:[Object(b.jsx)(w.a.Item,{className:"ms-2 me-2 mb-2",children:Object(b.jsx)(N.a,{href:"/inbox",variant:"outline-info",to:"/inbox",children:"Inbox"})}),Object(b.jsx)(w.a.Item,{className:"ms-2 me-2 mb-2",children:Object(b.jsx)(N.a,{href:"/front-page-logged",variant:"outline-info",to:"/front-page",children:"Home"})})]}),Object(b.jsx)(i.a,{className:"d-flex justify-content-center",children:Object(b.jsx)(S.a,{children:Object(b.jsxs)(S.a.Body,{children:[Object(b.jsxs)("h2",{className:"text-center mb-4",children:[h.displayName,"'s Profile"]}),a&&Object(b.jsx)(k.a,{variant:"danger",children:a}),Object(b.jsx)("div",{className:"d-flex justify-content-center",children:Object(b.jsx)("img",{alt:"display",className:"justify-content-center mb-2",style:{height:"50px"},src:h.photoURL})}),Object(b.jsx)("br",{}),Object(b.jsx)("strong",{className:"mt-2",children:"Email:"})," ",h.email,Object(b.jsx)("br",{}),Object(b.jsx)("strong",{children:"Display Name: "})," ",h.displayName,Object(b.jsx)("h5",{className:"text-center mt-3",children:"Languages I'm looking to learn:"}),Object(b.jsx)("div",{className:"text-center mt-3",children:Object(b.jsxs)("div",{children:[l?"Loading...":C.map((function(e){return Object(b.jsx)("li",{style:{listStyle:"none"},children:e},"".concat(e))})),Object(b.jsx)("br",{}),Object(b.jsx)("h5",{children:"About me:"}),U]})}),Object(b.jsx)(m.b,{to:"/update-profile",className:"btn btn-primary w-100 mb-2 mt-4",children:"Update Profile"})]})})}),Object(b.jsx)("div",{className:"w-100 text-center mt-2",children:Object(b.jsx)(N.a,{variant:"link",onClick:function(){return F.apply(this,arguments)},children:"Log Out"})})]})}var L=a(92),C=a(94),R=a(64),E=a(25);function I(){var e=Object(c.useRef)(),t=Object(c.useRef)(),a=Object(c.useRef)(),n=Object(c.useRef)(),s=Object(c.useRef)(),r=x(),l=r.currentUser,j=r.updatePassword,d=r.updateEmail,h=r.updateProfile,p=r.updatePicture,f=Object(c.useState)(""),y=Object(o.a)(f,2),w=y[0],P=y[1],I=Object(c.useState)(!1),U=Object(o.a)(I,2),G=(U[0],U[1]),B=Object(c.useState)(!1),D=Object(o.a)(B,2),F=D[0],A=D[1],J=Object(c.useState)(""),q=Object(o.a)(J,2),H=q[0],T=q[1],M=Object(O.g)(),W=l.uid,z=u.collection("userinfo").doc(W),V=function(e){return new Promise((function(t){return setTimeout(t,e)}))};return Object(c.useEffect)((function(){(function(){var e=Object(v.a)(g.a.mark((function e(){var t,a,c;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,G("true"),e.next=4,V(1e3);case 4:return t=u.collection("userinfo").doc("".concat(W)),e.next=7,t.get();case 7:a=e.sent,c=[],[a].forEach((function(e){var t=e.data();c.push(t)})),T(c),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log("error: ",e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}})()(),G("false")}),[W,H]),Object(b.jsxs)("div",{children:[Object(b.jsx)(i.a,{className:"w-100",children:Object(b.jsxs)(L.a,{children:[Object(b.jsx)(i.a,{className:"w-50",children:Object(b.jsx)(S.a,{className:"d-flex justify-content-center",children:Object(b.jsxs)(S.a.Body,{children:[Object(b.jsx)("h2",{className:"text-center mb-4",children:"Update Profile"}),w&&Object(b.jsx)(k.a,{variant:"danger",children:w}),Object(b.jsx)("div",{className:"d-flex justify-content-center",children:Object(b.jsxs)(C.a,{className:"w-50 text-center",onSubmit:function(c){c.preventDefault();var r=[];return A("true"),P(""),e.current.value!==l.email&&r.push(d(e.current.value)),n.current.value!==l.displayName&&r.push(h(n.current.value)),s.current.value!==l.photoURL&&r.push(p(s.current.value)),t.current.value&&r.push(j(t.current.value)),Promise.all(r).then((function(){M.push("/")})).catch((function(){P("Failed to update account")})).finally((function(){return A("false")})),t.current.value!==a.current.value?P("Passwords do not match"):n.current.value===l.displayName?P("Choose a new display name"):void 0},children:[Object(b.jsxs)(C.a.Group,{id:"email",children:[Object(b.jsx)(C.a.Label,{children:Object(b.jsx)("strong",{children:"Email"})}),Object(b.jsx)(C.a.Control,{type:"email",ref:e,required:!0,defaultValue:l.email})]}),Object(b.jsxs)(C.a.Group,{children:[Object(b.jsx)(C.a.Label,{children:Object(b.jsx)("strong",{children:"Display Name"})}),Object(b.jsx)(C.a.Control,{type:"text",ref:n,defaultValue:l.displayName,placeholder:"Display Name"})]}),Object(b.jsxs)(C.a.Group,{children:[Object(b.jsx)(C.a.Label,{children:Object(b.jsx)("strong",{children:"Display Picture URL"})}),Object(b.jsx)(C.a.Control,{type:"text",ref:s,defaultValue:l.photoURL,placeholder:"Display Picture URL"})]}),Object(b.jsxs)(C.a.Group,{id:"password",children:[Object(b.jsx)(C.a.Label,{children:Object(b.jsx)("strong",{children:"Password"})}),Object(b.jsx)(C.a.Control,{type:"password",ref:t,placeholder:"Keep blank to remain the same"})]}),Object(b.jsxs)(C.a.Group,{id:"password-confirm",children:[Object(b.jsx)(C.a.Label,{children:Object(b.jsx)("strong",{children:"Password Confirmation"})}),Object(b.jsx)(C.a.Control,{type:"password",ref:a,placeholder:"Keep blank to remain the same"})]}),Object(b.jsx)("div",{className:"text-center",children:Object(b.jsx)(N.a,{disabled:F,className:"w-40 mt-2",type:"submit",children:"Update Profile"})})]})})]})})}),Object(b.jsx)(i.a,{className:"w-50",children:Object(b.jsx)(S.a,{children:Object(b.jsx)(S.a.Body,{children:Object(b.jsx)(E.b,{initialValues:{languages:[],description:"",position:""},onSubmit:function(){var e=Object(v.a)(g.a.mark((function e(t){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V(500);case 2:z.set({languages:t.languages,uid:"".concat(l.uid),position:t.position,description:t.description,displayname:"".concat(l.displayName),userphoto:"".concat(l.photoURL)}).then((function(){M.push("/")})),console.log(t);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),children:function(e){e.values;var t=e.handleSubmit;return Object(b.jsxs)(C.a,{className:"text-center mt-4",onSubmit:t,children:[Object(b.jsxs)(C.a.Group,{children:[Object(b.jsx)("h4",{className:"mb-4",children:"What languages do you want to learn?"}),Object(b.jsxs)(i.a,{children:[Object(b.jsxs)(L.a,{children:[Object(b.jsxs)(R.a,{children:[Object(b.jsx)(C.a.Label,{className:"me-1",children:"Javascript-"}),Object(b.jsx)(E.a,{className:"me-1",type:"checkbox",name:"languages",value:"Javascript"}),Object(b.jsx)("br",{}),Object(b.jsx)(C.a.Label,{className:"me-1",children:"Python-"}),Object(b.jsx)(E.a,{className:"me-1",type:"checkbox",name:"languages",value:"Python"}),Object(b.jsx)("br",{}),Object(b.jsx)(C.a.Label,{className:"me-1",children:"Ruby-"}),Object(b.jsx)(E.a,{className:"me-1",type:"checkbox",name:"languages",value:"Ruby"}),Object(b.jsx)("br",{}),Object(b.jsx)(C.a.Label,{className:"me-1",children:"Java-"}),Object(b.jsx)(E.a,{className:"me-1",type:"checkbox",name:"languages",value:"Java"}),Object(b.jsx)("br",{})]}),Object(b.jsxs)(R.a,{children:[Object(b.jsx)(C.a.Label,{className:"me-1",children:"C-"}),Object(b.jsx)(E.a,{className:"me-1",type:"checkbox",name:"languages",value:"C"}),Object(b.jsx)("br",{}),Object(b.jsx)(C.a.Label,{className:"me-1",children:"C++-"}),Object(b.jsx)(E.a,{className:"me-1",type:"checkbox",name:"languages",value:"C++"}),Object(b.jsx)("br",{}),Object(b.jsx)(C.a.Label,{className:"me-1",children:"C#-"}),Object(b.jsx)(E.a,{className:"me-1",type:"checkbox",name:"languages",value:"C#"}),Object(b.jsx)("br",{}),Object(b.jsx)(C.a.Label,{className:"me-1",children:"PHP-"}),Object(b.jsx)(E.a,{className:"me-1",type:"checkbox",name:"languages",value:"PHP"}),Object(b.jsx)("br",{})]})]}),Object(b.jsx)("br",{}),Object(b.jsx)("h4",{className:"mb-4",children:"Are you a student, mentor or both?"}),Object(b.jsxs)(L.a,{children:[Object(b.jsxs)(R.a,{children:[Object(b.jsx)(C.a.Label,{className:"me-1",children:"Student -"}),Object(b.jsx)(E.a,{className:"me-1",type:"checkbox",name:"position",value:"student"})]}),Object(b.jsxs)(R.a,{children:[Object(b.jsx)(C.a.Label,{className:"me-1",children:"Mentor -"}),Object(b.jsx)(E.a,{className:"me-1",type:"checkbox",name:"position",value:"mentor"})]}),Object(b.jsxs)(R.a,{children:[Object(b.jsx)(C.a.Label,{className:"me-1",children:"Both -"}),Object(b.jsx)(E.a,{className:"me-1",type:"checkbox",name:"position",value:"both"})]})]}),Object(b.jsx)("br",{}),Object(b.jsxs)(L.a,{children:[Object(b.jsx)("h4",{className:"mb-4",children:"Tell us a bit about yourself!"}),Object(b.jsx)(C.a.Control,{as:"textarea",id:"description",maxLength:"300",name:"description",type:"textarea",placeholder:"Describe Yourself",defaultValue:H[0].description})]})]})]}),Object(b.jsx)("div",{className:"text-center mt-2",children:Object(b.jsx)(N.a,{type:"submit",children:"Update Profile"})})]})}})})})})]})}),Object(b.jsx)("div",{className:"w-100 text-center mt-2",children:Object(b.jsx)(m.b,{to:"/",children:"Cancel"})})]})}function U(){var e=Object(c.useRef)(),t=Object(c.useRef)(),a=Object(c.useRef)(),n=x().signup,s=Object(c.useState)(""),r=Object(o.a)(s,2),i=r[0],l=r[1],j=Object(c.useState)(!1),h=Object(o.a)(j,2),p=h[0],f=h[1],y=Object(O.g)();function w(){return(w=Object(v.a)(g.a.mark((function c(s){return g.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:if(s.preventDefault(),t.current.value===a.current.value){c.next=3;break}return c.abrupt("return",l("Passwords do not match"));case 3:return c.prev=3,l(""),f(!0),c.next=8,n(e.current.value,t.current.value);case 8:d.onAuthStateChanged((function(e){if(e){var t=e.uid;u.collection("userinfo").doc("".concat(t)).set({languages:["unset"],uid:"".concat(t),description:"Please update profile",userphoto:"https://static.libertyprim.com/files/varietes/pomme-akane-large.jpg?1569320193",displayname:"Newman",position:"both"}).then((function(){e.updateProfile({displayName:"Newman",photoURL:"https://static.libertyprim.com/files/varietes/pomme-akane-large.jpg?1569320193"})}))}else console.log("Error with signup")})),console.log("Document created!"),y.push("/"),c.next=17;break;case 13:c.prev=13,c.t0=c.catch(3),console.log(i),l("Failed to create an account");case 17:f(!1);case 18:case"end":return c.stop()}}),c,null,[[3,13]])})))).apply(this,arguments)}return Object(b.jsxs)("div",{children:[Object(b.jsx)(S.a,{children:Object(b.jsxs)(S.a.Body,{children:[Object(b.jsx)("h2",{className:"text-center mb-4",children:"Sign Up"}),i&&Object(b.jsx)(k.a,{variant:"danger",children:i}),Object(b.jsx)("div",{className:"d-flex justify-content-center",children:Object(b.jsxs)(C.a,{className:"w-50",onSubmit:function(e){return w.apply(this,arguments)},children:[Object(b.jsxs)(C.a.Group,{id:"email",children:[Object(b.jsx)(C.a.Label,{children:"Email"}),Object(b.jsx)(C.a.Control,{type:"email",ref:e,required:!0})]}),Object(b.jsxs)(C.a.Group,{id:"password",children:[Object(b.jsx)(C.a.Label,{children:"Password"}),Object(b.jsx)(C.a.Control,{type:"password",ref:t,required:!0})]}),Object(b.jsxs)(C.a.Group,{id:"password-confirm",children:[Object(b.jsx)(C.a.Label,{children:"Password Confirmation"}),Object(b.jsx)(C.a.Control,{type:"password",ref:a,required:!0})]}),Object(b.jsx)(N.a,{disabled:p,className:"w-100 mt-2",type:"submit",children:"Submit"})]})})]})}),Object(b.jsxs)("div",{className:"w-100 text-center mt-2",children:["Already have an account? ",Object(b.jsx)(m.b,{to:"/Login",children:"Log In"})]})]})}function G(){var e=Object(c.useRef)(),t=Object(c.useRef)(),a=x().login,n=Object(c.useState)(""),s=Object(o.a)(n,2),r=s[0],i=s[1],l=Object(c.useState)(!1),j=Object(o.a)(l,2),u=j[0],d=j[1],h=Object(O.g)();function p(){return(p=Object(v.a)(g.a.mark((function c(n){return g.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return n.preventDefault(),c.prev=1,i(""),d(!0),c.next=6,a(e.current.value,t.current.value);case 6:h.push("/"),c.next=12;break;case 9:c.prev=9,c.t0=c.catch(1),i("Failed to sign in");case 12:d(!1);case 13:case"end":return c.stop()}}),c,null,[[1,9]])})))).apply(this,arguments)}return Object(b.jsxs)("div",{className:"text-center",children:[Object(b.jsx)("div",{className:"d-flex justify-content-center",children:Object(b.jsx)(S.a,{className:"d-flex w-50 justify-content-center",children:Object(b.jsxs)(S.a.Body,{children:[Object(b.jsx)("h2",{className:"text-center mb-4",children:"Login"}),r&&Object(b.jsx)(k.a,{variant:"danger",children:r}),Object(b.jsxs)(C.a,{onSubmit:function(e){return p.apply(this,arguments)},children:[Object(b.jsxs)(C.a.Group,{id:"email",children:[Object(b.jsx)(C.a.Label,{children:"Email"}),Object(b.jsx)(C.a.Control,{type:"email",ref:e,required:!0})]}),Object(b.jsxs)(C.a.Group,{id:"password",children:[Object(b.jsx)(C.a.Label,{children:"Password"}),Object(b.jsx)(C.a.Control,{type:"password",ref:t,required:!0})]}),Object(b.jsx)(N.a,{disabled:u,className:"w-100 mt-2",type:"submit",children:"Login"})]}),Object(b.jsx)("div",{className:"w-100 text-center mt-3",children:Object(b.jsx)(m.b,{to:"/forgot-password",children:"Forgot Password?"})})]})})}),Object(b.jsxs)("div",{className:"w-100 text-center mt-2",children:["Need an account? ",Object(b.jsx)(m.b,{to:"/Signup",children:"Sign up"})]})]})}var B=a(50),D=a(66),F=["component"];function A(e){var t=e.component,a=Object(D.a)(e,F),c=x().currentUser;return Object(b.jsx)(O.b,Object(B.a)(Object(B.a)({},a),{},{render:function(e){return c?Object(b.jsx)(t,Object(B.a)({},e)):Object(b.jsx)(O.a,{to:"/front-page"})}}))}function J(){var e=Object(c.useRef)(),t=x().resetPassword,a=Object(c.useState)(""),n=Object(o.a)(a,2),s=n[0],r=n[1],i=Object(c.useState)(""),l=Object(o.a)(i,2),j=l[0],u=l[1],d=Object(c.useState)(!1),h=Object(o.a)(d,2),p=h[0],O=h[1];function f(){return(f=Object(v.a)(g.a.mark((function a(c){return g.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return c.preventDefault(),a.prev=1,u(""),r(""),O(!0),a.next=7,t(e.current.value);case 7:u("Check your inbox for further instructions"),a.next=13;break;case 10:a.prev=10,a.t0=a.catch(1),r("Failed to reset password");case 13:O(!1);case 14:case"end":return a.stop()}}),a,null,[[1,10]])})))).apply(this,arguments)}return Object(b.jsxs)("div",{children:[Object(b.jsx)(S.a,{children:Object(b.jsxs)(S.a.Body,{children:[Object(b.jsx)("h2",{className:"text-center mb-4",children:"Recover Password"}),s&&Object(b.jsx)(k.a,{variant:"danger",children:s}),j&&Object(b.jsx)(k.a,{variant:"success",children:j}),Object(b.jsxs)(C.a,{onSubmit:function(e){return f.apply(this,arguments)},children:[Object(b.jsxs)(C.a.Group,{id:"email",children:[Object(b.jsx)(C.a.Label,{children:"Email"}),Object(b.jsx)(C.a.Control,{type:"email",ref:e,required:!0})]}),Object(b.jsx)(N.a,{disabled:p,className:"w-100 mt-2",type:"submit",children:"Reset Password"})]}),Object(b.jsx)("div",{className:"w-100 text-center mt-3",children:Object(b.jsx)(m.b,{to:"/login",children:"Login"})})]})}),Object(b.jsxs)("div",{className:"w-100 text-center mt-2",children:["Need an account? ",Object(b.jsx)(m.b,{to:"/Signup",children:"Sign up"})]})]})}var q=function(){return Object(b.jsx)("div",{children:Object(b.jsxs)(S.a,{children:[Object(b.jsx)(S.a.Img,{variant:"top",src:"https://images.pexels.com/photos/4050299/pexels-photo-4050299.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"}),Object(b.jsxs)(S.a.Body,{className:"text-center",children:["As a mentor you are not only providing the help a student may need, but you are also working on credentials for your own future. We provide the means to add to your resume a reflection of your teaching rating and history.",Object(b.jsx)(N.a,{href:"/Signup",className:"w-100 text-center mt-2",children:"Get Started"})]})]})})};a(57);function H(){return Object(b.jsxs)("div",{children:[Object(b.jsxs)(y.a,{fixed:"top",variant:"pills",className:"w-100 align-items-center",children:[Object(b.jsx)(i.a,{children:Object(b.jsx)(y.a.Brand,{className:"mb-2",href:"",children:"MentorShip"})}),Object(b.jsxs)(i.a,{className:"justify-content-end",children:[Object(b.jsx)(w.a.Item,{children:Object(b.jsx)(N.a,{href:"/Login",variant:"outline-info",size:"sm",className:"ms-2 me-2 mb-2",to:"/Login",children:"Login"})}),Object(b.jsx)(w.a.Item,{children:Object(b.jsx)(N.a,{href:"/Signup",variant:"outline-info",size:"sm",className:"ms-1 me-4 mb-2",to:"/Signup",children:"Sign Up"})})]})]}),Object(b.jsx)(i.a,{children:Object(b.jsx)(S.a,{className:"text-center mb-4",children:Object(b.jsx)(S.a.Body,{className:"mb-1",children:"Learning to program is difficult. You don't have to do it alone. Often we may seek help only to be told to find our answers on Google. While it is true that we need to develop the skills to problem solve, some answers cannot be found on StackOverflow alone. Sometimes we need a guiding and helping hand."})})}),Object(b.jsx)(i.a,{id:"cardContainer",children:Object(b.jsxs)(L.a,{children:[Object(b.jsx)(R.a,{children:Object(b.jsx)(q,{})}),Object(b.jsx)(R.a,{children:Object(b.jsxs)(S.a,{children:[Object(b.jsx)(S.a.Img,{variant:"top",src:"https://images.pexels.com/photos/2173508/pexels-photo-2173508.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"}),Object(b.jsxs)(S.a.Body,{className:"text-center",children:["Students not only have the opportunity to broaden their knowledge but the student will objectively be able to quantify some of their learning experience through their lessons and student rating.",Object(b.jsx)(N.a,{href:"/Signup",className:"w-100 text-center mt-2",children:"Get Started"})]})]})})]})})]})}function T(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),a=t[0],n=t[1],s=Object(O.g)();return Object(b.jsxs)("div",{children:[Object(b.jsxs)(y.a,{fixed:"top",variant:"pills",className:"w-100 align-items-center",children:[Object(b.jsx)(i.a,{children:Object(b.jsx)(y.a.Brand,{className:"mb-2",href:"",children:Object(b.jsx)("h5",{children:"MentorShip"})})}),Object(b.jsx)(i.a,{fixed:"top",className:"d-flex justify-content-center",children:Object(b.jsx)(C.a,{className:"align-items-center w-100",onSubmit:function(){console.log("Searching for: ",a),s.push({pathname:"/results",search:a,state:a})},children:Object(b.jsxs)("div",{className:"d-flex",children:[Object(b.jsx)(C.a.Label,{className:"mt-2 w-50",children:Object(b.jsx)("h5",{children:"What I would like to learn:"})}),Object(b.jsxs)(C.a.Control,{className:"w-50",as:"select",value:a,onChange:function(e){console.log(e),n(e.target.value)},children:[Object(b.jsx)("option",{children:"\\/ Open to select language \\/"}),Object(b.jsx)("option",{value:"Javascript",children:"Javascript"}),Object(b.jsx)("option",{value:"Ruby",children:"Ruby"}),Object(b.jsx)("option",{value:"C",children:"C"}),Object(b.jsx)("option",{value:"C++",children:"C++"}),Object(b.jsx)("option",{value:"C#",children:"C#"}),Object(b.jsx)("option",{value:"Java",children:"Java"}),Object(b.jsx)("option",{value:"Python",children:"Python"}),Object(b.jsx)("option",{value:"PHP",children:"PHP"})]}),Object(b.jsx)(N.a,{variant:"outline-info",type:"submit",children:"Go!"})]})})}),Object(b.jsx)(i.a,{className:"justify-content-end",children:Object(b.jsx)(w.a.Item,{children:Object(b.jsx)(N.a,{href:"/",variant:"outline-info",size:"sm",className:"",to:"/",children:"Dashboard"})})})]}),Object(b.jsx)(i.a,{children:Object(b.jsx)(S.a,{className:"text-center mb-4",children:Object(b.jsx)(S.a.Body,{className:"mb-1",children:"Learning to program is difficult. You don't have to do it alone. Often we may seek help only to be told to find our answers on Google. While it is true that we need to develop the skills to problem solve, some answers cannot be found on StackOverflow alone. Sometimes we need a guiding and helping hand."})})}),Object(b.jsx)(i.a,{id:"cardContainer",children:Object(b.jsxs)(L.a,{children:[Object(b.jsx)(R.a,{children:Object(b.jsx)(q,{})}),Object(b.jsx)(R.a,{children:Object(b.jsxs)(S.a,{children:[Object(b.jsx)(S.a.Img,{variant:"top",src:"https://images.pexels.com/photos/2173508/pexels-photo-2173508.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"}),Object(b.jsxs)(S.a.Body,{className:"text-center",children:["Students not only have the opportunity to broaden their knowledge but the student will objectively be able to quantify some of their learning experience through their lessons and student rating.",Object(b.jsx)(N.a,{href:"/Signup",className:"w-100 text-center mt-2",children:"Get Started"})]})]})})]})})]})}var M=function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(),r=Object(o.a)(s,2),l=r[0],j=r[1],d=Object(O.h)(),h=x().currentUser,p=u.collection("userinfo"),m=h.uid,f=function(e){return new Promise((function(t){return setTimeout(t,e)}))},k=d.state;return Object(c.useEffect)((function(){(function(){var e=Object(v.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(!0),e.next=3,f(1e3);case 3:u.collection("userinfo").where("languages","array-contains",k).onSnapshot((function(e){var t=[];e.forEach((function(e){t.push(e.data())})),n(t)}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()(),j(!1)}),[m,p,k]),Object(b.jsxs)("div",{children:[Object(b.jsx)(y.a,{fixed:"top",variant:"pills",children:Object(b.jsxs)(i.a,{className:"justify-content-end",children:[Object(b.jsx)(w.a.Item,{children:Object(b.jsx)(N.a,{href:"/front-page-logged",variant:"outline-info",to:"/front-page",children:"Home"})}),Object(b.jsx)(w.a.Item,{children:Object(b.jsx)(N.a,{href:"/",variant:"outline-info",size:"sm",className:"ms-2",to:"/",children:"Dashboard"})})]})}),Object(b.jsxs)(S.a,{children:[k,l?"Loading...":a.map((function(e){return Object(b.jsxs)(S.a,{className:"w-25",children:[Object(b.jsx)("img",{alt:"display",style:{width:"50px",height:"50px"},src:e.userphoto},"".concat(e.displayname,"'s photo")),Object(b.jsxs)("h5",{children:[" ",e.displayname," "]},e.displayname),Object(b.jsx)("li",{style:{listStyle:"none"},children:e.languages},"".concat(e.languages)),Object(b.jsx)("p",{children:e.description},"".concat(e.displayname,"'s description"))]})}))]})]})},W=a(65),z=a(93),V=a(63),Y=function(){return Object(b.jsx)("div",{children:Object(b.jsx)("h5",{children:"Hello"})})};var K=function(){var e=function(e){return new Promise((function(t){return setTimeout(t,e)}))},t=Object(c.useState)(!1),a=Object(o.a)(t,2),n=a[0],s=a[1],r=Object(c.useState)(),i=Object(o.a)(r,2),l=i[0],j=i[1],d=Object(c.useState)([]),h=Object(o.a)(d,2),p=h[0],m=h[1],O=x().currentUser.uid,f=Object(c.useCallback)(function(){var t=Object(v.a)(g.a.mark((function t(a){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.delegateYield(g.a.mark((function t(){var c,n,r,i;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s(!0),t.next=3,e(2e3);case 3:c=[],n=Object(W.a)(a);try{for(n.s();!(r=n.n()).done;)i=r.value,u.collection("userinfo").where("uid","==",i).get().then((function(e){var t=[];e.forEach((function(e){t.push(e.data())})),c.push(t[0].displayname)})),m(c)}catch(o){n.e(o)}finally{n.f()}case 6:case"end":return t.stop()}}),t)}))(),"t0",2);case 2:t.next=7;break;case 4:t.prev=4,t.t1=t.catch(0),console.log("error: ",t.t1);case 7:s(!1);case 8:case"end":return t.stop()}}),t,null,[[0,4]])})));return function(e){return t.apply(this,arguments)}}(),[]);return Object(c.useEffect)((function(){(function(){var t=Object(v.a)(g.a.mark((function t(){var a,c,n;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,s(!0),t.next=4,e(2e3);case 4:return a=u.collection("messages").doc("".concat(O)),t.next=7,a.get();case 7:c=t.sent,n=[],[c].forEach((function(e){var t=e.data();for(var a in t)n.push(a)})),j(n),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(0),console.log("error: ",t.t0);case 16:case"end":return t.stop()}}),t,null,[[0,13]])})));return function(){return t.apply(this,arguments)}})()(),l&&f(l),s(!1)}),[O,f,l,p,n]),Object(b.jsxs)("div",{children:[Object(b.jsx)(y.a,{fixed:"top",variant:"pills",className:"me-2 justify-content-end",children:Object(b.jsx)(w.a.Item,{className:"ms-2 me-2 mb-2",children:Object(b.jsx)(N.a,{href:"/front-page-logged",variant:"outline-info",to:"/front-page",children:"Home"})})}),Object(b.jsx)("h3",{className:"text-center",children:"Inbox"}),Object(b.jsx)(S.a,{children:Object(b.jsxs)(L.a,{children:[Object(b.jsxs)(R.a,{xs:"4",children:[Object(b.jsx)(S.a,{className:"text-center",children:Object(b.jsx)("h4",{children:"Messages"})}),n?"Loading...":p.map((function(e){return Object(b.jsx)(S.a,{className:"text-center justify-content-center mt-2 h-50 w-100",children:Object(b.jsxs)("h5",{children:[" ",e," "]},e.id)},e)}))]}),Object(b.jsx)(R.a,{xs:"8",children:Object(b.jsxs)(S.a,{className:"text-center",children:[Object(b.jsx)("h4",{children:"Message Content"}),Object(b.jsx)(Y,{}),Object(b.jsx)(S.a,{children:Object(b.jsxs)(z.a,{fixed:"bottom",children:[Object(b.jsx)(V.a,{placeholder:"Send a new message"}),Object(b.jsx)(N.a,{variant:"outline-secondary",children:"Send"})]})})]})})]})})]})};var X=function(){return Object(b.jsx)(i.a,{className:"d-flex align-items-center justify-content-center",style:{minHeight:"100vh"},children:Object(b.jsx)("div",{className:"w-100",children:Object(b.jsx)(m.a,{children:Object(b.jsx)(p,{children:Object(b.jsxs)(O.d,{children:[Object(b.jsx)(A,{exact:!0,path:"/",component:P}),Object(b.jsx)(A,{path:"/update-profile",component:I}),Object(b.jsx)(A,{path:"/front-page-logged",component:T}),Object(b.jsx)(A,{path:"/inbox",component:K}),Object(b.jsx)(O.b,{path:"/signup",component:U}),Object(b.jsx)(O.b,{path:"/results",component:M}),Object(b.jsx)(O.b,{path:"/login",component:G}),Object(b.jsx)(O.b,{path:"/forgot-password",component:J}),Object(b.jsx)(O.b,{path:"/front-page",component:H})]})})})})})},Z=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,99)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),s(e),r(e)}))};r.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(X,{})}),document.getElementById("root")),Z()}},[[87,1,2]]]);
//# sourceMappingURL=main.4c90f4f4.chunk.js.map