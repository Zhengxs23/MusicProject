(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1df3301f"],{7803:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"reg_back"},[a("h2",[t._v("新用户注册")]),a("div",{staticClass:"reg_center"},[a("div",{staticClass:"reg_form"},[a("form",{attrs:{action:"#",method:"post"}},[a("table",[a("tr",[t._m(0),a("td",{staticClass:"td_right"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.uname,expression:"uname"}],attrs:{type:"text",name:"username",placeholder:"请输入用户名",id:"username"},domProps:{value:t.uname},on:{input:function(e){e.target.composing||(t.uname=e.target.value)}}})])]),a("tr",[t._m(1),a("td",{staticClass:"td_right"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.pword,expression:"pword"}],attrs:{type:"password",name:"password",placeholder:"请输入密码",id:"password"},domProps:{value:t.pword},on:{input:function(e){e.target.composing||(t.pword=e.target.value)}}})])]),t._m(2),t._m(3),t._m(4)])])]),a("button",{staticClass:"res_btn",on:{click:t.toRes}},[t._v("注册")])])])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("td",{staticClass:"td_left"},[a("label",{attrs:{for:"username"}},[t._v("用户名")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("td",{staticClass:"td_left"},[a("label",{attrs:{for:"password"}},[t._v("密码")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("td",{staticClass:"td_left"},[a("label",{attrs:{for:"Email"}},[t._v("Email")])]),a("td",{staticClass:"td_right"},[a("input",{attrs:{type:"email",name:"email",placeholder:"请输入Email",id:"Email"}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("td",{staticClass:"td_left"},[a("label",{attrs:{for:"rename"}},[t._v("姓名")])]),a("td",{staticClass:"td_right"},[a("input",{attrs:{type:"text",name:"rename",placeholder:"请输入真实姓名",id:"rename"}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("td",{staticClass:"td_left"},[a("label",{attrs:{for:"Telphone"}},[t._v("手机号")])]),a("td",{staticClass:"td_right"},[a("input",{attrs:{type:"text",name:"telphone",placeholder:"请输入您的手机号",id:"Telphone"}})])])}],n={data:function(){return{uname:"",pword:""}},methods:{toRes:function(){""!=this.uname&&""!=this.pword?this.$router.push("/login"):alert("请补充完整信息")}},beforeRouteLeave:function(t,e,a){if(""!=this.uname&&""!=this.pword){var s=confirm("表单尚未提交时候离开页面");sessionStorage.setItem("uname",this.uname),sessionStorage.setItem("pword",this.pword),sessionStorage.setItem("cf",s),a()}}},i=n,o=(a("ddb4"),a("2877")),l=Object(o["a"])(i,s,r,!1,null,null,null);e["default"]=l.exports},ddb4:function(t,e,a){"use strict";a("ec8f")},ec8f:function(t,e,a){}}]);
//# sourceMappingURL=chunk-1df3301f.d63e7340.js.map