(function(e){function t(t){for(var i,s,r=t[0],l=t[1],c=t[2],d=0,p=[];d<r.length;d++)s=r[d],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&p.push(n[s][0]),n[s]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);u&&u(t);while(p.length)p.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],i=!0,r=1;r<a.length;r++){var l=a[r];0!==n[l]&&(i=!1)}i&&(o.splice(t--,1),e=s(s.s=a[0]))}return e}var i={},n={app:0},o=[];function s(t){if(i[t])return i[t].exports;var a=i[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=i,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)s.d(a,i,function(t){return e[t]}.bind(null,i));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=t,r=r.slice();for(var c=0;c<r.length;c++)t(r[c]);var u=l;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},1834:function(e,t,a){},"1cce":function(e,t,a){"use strict";var i=a("606b"),n=a.n(i);n.a},"31d7":function(e,t,a){},"3b58":function(e,t,a){"use strict";var i=a("ebf4"),n=a.n(i);n.a},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("appNavbar"),a("div",{staticClass:"container"},[a("router-view")],1)],1)},o=[],s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("nav",[a("div",{staticClass:"nav-wrapper"},[a("div",{staticClass:"container"},[a("router-link",{staticClass:"brand-logo center",attrs:{to:"/"}},[e._v("Employee Manager")]),a("ul",{staticClass:"right"},[a("li",{staticClass:"item"},[a("router-link",{attrs:{to:"/register"}},[e._v("register")])],1),a("li",[a("router-link",{attrs:{to:"/Login"}},[e._v("Login")])],1),a("li",[a("button",{staticClass:"btn black",on:{click:e.logout}},[e._v("Logout")])])])],1)])])},r=[],l=a("8aa5"),c=a.n(l),u={name:"navbar",data:function(){return{IsLoggedIn:!1,currentUser:!1}},methods:{logout:function(){var e=this;c.a.auth().signOut().then((function(){e.$router.push("/login")}))}}},d=u,p=(a("f002"),a("2877")),m=Object(p["a"])(d,s,r,!1,null,null,null),v=m.exports,f={data:function(){return{}},components:{appNavbar:v}},h=f,y=Object(p["a"])(h,n,o,!1,null,null,null),g=y.exports,_=(a("45fc"),a("8c4f")),b=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"row"},[a("div",{staticClass:"col m8"},[a("div",{attrs:{id:"dashboard"}},[a("ul",{staticClass:"collection with-header"},[e._m(0),e._l(e.employess,(function(t){return a("li",{key:t.id,staticClass:"collection-item"},[a("div",{staticClass:"chip"},[e._v(e._s(t.dept))]),e._v(" "+e._s(t.employee_id)+" : "+e._s(t.name)+" "),a("router-link",{staticClass:"secondary-content",attrs:{to:{name:"view_employee",params:{id:t.employee_id}}}},[a("i",{staticClass:"fa fa-eye"})])],1)}))],2),a("div",{staticClass:"fixed-action-btn"},[a("router-link",{staticClass:"btn-floating btn-large red",attrs:{to:"/NewEmployee"}},[a("i",{staticClass:"fa fa-plus"})])],1)])])])},w=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("li",{staticClass:"collection-header"},[a("h4",[e._v("Employees")])])}],C=(a("4160"),a("b0c0"),a("159b"),a("59ca")),x=a.n(C),E=(a("e71f"),{apiKey:"AIzaSyD07a446pTM-Rx55A7KAeT6o4iBkA3W2L0",authDomain:"vue-system-8a8f9.firebaseapp.com",databaseURL:"https://vue-system-8a8f9.firebaseio.com",projectId:"vue-system-8a8f9",storageBucket:"vue-system-8a8f9.appspot.com",messagingSenderId:"502346766783",appId:"1:502346766783:web:41122b48e9cda05b3d690a",measurementId:"G-VY5WELLCJ2"}),k=x.a.initializeApp(E),P=k.firestore(),$={name:"Dashboard",data:function(){return{employess:[]}},created:function(){var e=this;P.collection("1").orderBy("dept").get().then((function(t){t.forEach((function(t){var a={id:t.id,employee_id:t.data().employee_id,name:t.data().name,dept:t.data().dept,position:t.data().position};e.employess.push(a)}))}))}},N=$,O=(a("e813"),Object(p["a"])(N,b,w,!1,null,null,null)),q=O.exports,j=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"edit"}},[a("h2",[e._v("Edit employee")]),a("div",{staticClass:"row"},[a("form",{staticClass:"col m8 s12",on:{submit:function(t){return t.preventDefault(),e.udataEmployee(t)}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col m8 s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.employee_id,expression:"employee_id"}],attrs:{type:"text",placeholder:"Employee ID#",required:""},domProps:{value:e.employee_id},on:{input:function(t){t.target.composing||(e.employee_id=t.target.value)}}})])]),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col m8 s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",placeholder:"Name",required:""},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})])]),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col m8 s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.dept,expression:"dept"}],attrs:{type:"text",placeholder:"Deptrment",required:""},domProps:{value:e.dept},on:{input:function(t){t.target.composing||(e.dept=t.target.value)}}})])]),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col m8 s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.position,expression:"position"}],attrs:{type:"text",placeholder:"position",required:""},domProps:{value:e.position},on:{input:function(t){t.target.composing||(e.position=t.target.value)}}})])]),a("button",{staticClass:"btn",attrs:{type:"submit"}},[e._v("Updata")]),a("router-link",{staticClass:"btn grey",attrs:{to:"/"}},[e._v("Cancell")]),a("div",{staticClass:"fixed-action-btn"})],1)])])},D=[],I={name:"edit",data:function(){return{employee_id:null,name:null,dept:null,position:null}},beforeRouteEnter:function(e,t,a){P.collection("1").where("employee_id","==",e.params.employee_id).get().then((function(e){e.forEach((function(e){a((function(t){t.employee_id=e.data().employee_id,t.name=e.data().name,t.dept=e.data().dept,t.position=e.data().position}))}))}))},watch:{$route:"theData"},methods:{theData:function(){var e=this;P.collection("1").where("employee_id","==",this.$route.params.employee_id).get().then((function(t){t.forEach((function(t){e.temployee_id=t.data().employee_id,e.name=t.data().name,e.dept=t.data().dept,e.position=t.data().position}))}))},udataEmployee:function(){var e=this;P.collection("1").where("employee_id","==",this.$route.params.employee_id).get().then((function(t){t.forEach((function(t){t.ref.update({temployee_id:e.employee_id,name:e.name,dept:e.dept,position:e.position}).then((function(){e.$router.push({name:"view_employee",params:{id:e.employee_id}})}))}))}))}}},A=I,S=Object(p["a"])(A,j,D,!1,null,null,null),L=S.exports,R=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"employee"}},[a("h2",[e._v(" New employee")]),a("div",{staticClass:"row"},[a("form",{staticClass:"col m8 s12",on:{submit:function(t){return t.preventDefault(),e.saveEmployee(t)}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col m8 s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.employee_id,expression:"employee_id"}],attrs:{type:"text",placeholder:"Employee ID#",required:""},domProps:{value:e.employee_id},on:{input:function(t){t.target.composing||(e.employee_id=t.target.value)}}})])]),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col m8 s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",placeholder:"Name",required:""},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})])]),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col m8 s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.dept,expression:"dept"}],attrs:{type:"text",placeholder:"Deptrment",required:""},domProps:{value:e.dept},on:{input:function(t){t.target.composing||(e.dept=t.target.value)}}})])]),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col m8 s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.position,expression:"position"}],attrs:{type:"text",placeholder:"position",required:""},domProps:{value:e.position},on:{input:function(t){t.target.composing||(e.position=t.target.value)}}})])]),a("button",{staticClass:"btn",attrs:{type:"submit"}},[e._v("Submit")]),a("router-link",{staticClass:"btn grey",attrs:{to:"/"}},[e._v("Cancell")]),a("div",{staticClass:"fixed-action-btn"})],1)])])},M=[],U={name:"employee",data:function(){return{employee_id:null,name:null,dept:null,position:null}},methods:{saveEmployee:function(){var e=this;P.collection("1").add({employee_id:this.employee_id,name:this.name,dept:this.dept,position:this.position}).then((function(t){console.log(t),e.$router.push("/")}))}}},T=U,B=Object(p["a"])(T,R,M,!1,null,null,null),W=B.exports,G=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"view"}},[a("h2",[e._v("view employees")]),a("div",{staticClass:"row"},[a("div",{staticClass:"col s12 m6"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-content white-text"},[a("h3",{staticClass:"card-title"},[e._v(e._s(e.name))]),a("p",[e._v("I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.")])]),a("div",{staticClass:"card-action"},[a("span",[e._v(e._s(e.position))]),a("span",[e._v(e._s(e.dept))])])])])]),a("router-link",{staticClass:"btn grey",attrs:{to:"/"}},[e._v("Back")]),a("button",{staticClass:"btn red",on:{click:e.deleteEmployee}},[e._v("Delete")]),a("div",{staticClass:"fixed-action-btn"},[a("router-link",{staticClass:"btn-floating btn-large red",attrs:{to:{name:"edit_employee",params:{employee_id:e.employee_id}}}},[a("i",{staticClass:"fa fa-pencil"})])],1)],1)},J=[],z={name:"view",data:function(){return{employee_id:null,name:null,dept:null,position:null}},beforeRouteEnter:function(e,t,a){P.collection("1").where("employee_id","==",e.params.id).get().then((function(e){e.forEach((function(e){a((function(t){t.employee_id=e.data().employee_id,t.name=e.data().name,t.dept=e.data().dept,t.position=e.data().position}))}))}))},watch:{$route:"theData"},methods:{theData:function(){var e=this;P.collection("1").where("employee_id","==",this.$route.params.id).get().then((function(t){t.forEach((function(t){e.temployee_id=t.data().employee_id,e.name=t.data().name,e.dept=t.data().dept,e.position=t.data().position}))}))},deleteEmployee:function(){var e=this;confirm("Are you sure")&&P.collection("1").where("employee_id","==",this.$route.params.id).get().then((function(t){t.forEach((function(t){t.ref.delete(),e.$router.push("/")}))}))}}},K=z,V=(a("93e1"),Object(p["a"])(K,G,J,!1,null,null,null)),Y=V.exports,F=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"ourlogin"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col m8 s12 offset-m2"},[a("div",{staticClass:"login card-panel  white-text center"},[a("h3",[e._v("Login")]),a("form",[a("div",{staticClass:"input-field"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"text",id:"email",placeholder:"Email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),a("div",{staticClass:"input-field"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"text",id:"password",placeholder:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})])]),a("button",{staticClass:"btn btn-large grey lighten-4 black-text",attrs:{type:"submit"},on:{click:e.login}},[e._v("Submit")])])])])])])},H=[],Q={name:"login",data:function(){return{email:"",password:""}},methods:{login:function(e){var t=this;c.a.auth().signInWithEmailAndPassword(this.email,this.password).then((function(e){alert("you are logged In ".concat(e.email)),t.$router.push("/")})).catch((function(e){console.log(e)})),e.preventDefault()}}},X=Q,Z=(a("3b58"),Object(p["a"])(X,F,H,!1,null,null,null)),ee=Z.exports,te=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"ourlogin"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col m8 s12 offset-m2"},[a("div",{staticClass:"login card-panel  white-text center"},[a("h3",[e._v("Register")]),a("form",[a("div",{staticClass:"input-field"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"text",id:"email",placeholder:"Email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),a("div",{staticClass:"input-field"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"text",id:"password",placeholder:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})])]),a("button",{staticClass:"btn btn-large grey lighten-4 black-text",attrs:{type:"submit"},on:{click:e.register}},[e._v("Register")])])])])])])},ae=[],ie={name:"Register",data:function(){return{email:"",password:""}},methods:{register:function(e){var t=this;c.a.auth().createUserWithEmailAndPassword(this.email,this.password).then((function(e){alert("your account for ".concat(e.email)),t.$router.push("/")})).catch((function(e){console.log(e)})),e.preventDefault()}}},ne=ie,oe=(a("1cce"),Object(p["a"])(ne,te,ae,!1,null,null,null)),se=oe.exports;i["a"].use(_["a"]);var re=[{path:"/",name:"dashboard",component:q,meta:{requiresAuth:!0}},{path:"/Edit:employee_id",name:"edit_employee",component:L,meta:{requiresAuth:!0}},{path:"/NewEmployee",name:"New_employee",component:W,meta:{requiresAuth:!0}},{path:"/register",name:"Register",component:se,meta:{requiresAuth:!0}},{path:"/login",name:"login",component:ee,meta:{requiresGuest:!0}},{path:"/:id",name:"view_employee",component:Y,meta:{requiresAuth:!0}}],le=new _["a"]({mode:"history",base:"/",routes:re});le.beforeEach((function(e,t,a){e.matched.some((function(e){return e.meta.requiresAuth}))?c.a.auth().currentUser?a():a({path:"/login",query:{redirect:e.fullPath}}):e.matched.some((function(e){return e.meta.requiresGuest}))&&(c.a.auth().currentUser?a({path:"/",query:{redirect:e.fullPath}}):a())}));var ce=le,ue=a("2f62");i["a"].use(ue["a"]);var de=new ue["a"].Store({state:{},mutations:{},actions:{},modules:{}});a("b107");i["a"].config.productionTip=!1,new i["a"]({router:ce,store:de,render:function(e){return e(g)}}).$mount("#app")},"606b":function(e,t,a){},"65b8":function(e,t,a){},"93e1":function(e,t,a){"use strict";var i=a("65b8"),n=a.n(i);n.a},b107:function(e,t,a){},e813:function(e,t,a){"use strict";var i=a("31d7"),n=a.n(i);n.a},ebf4:function(e,t,a){},f002:function(e,t,a){"use strict";var i=a("1834"),n=a.n(i);n.a}});
//# sourceMappingURL=app.afb82f5d.js.map