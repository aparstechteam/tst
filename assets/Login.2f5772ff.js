import{_ as d,o as m,a as u,b as e,w as i,g as n,n as c,h as g}from"./index.c798d666.js";const _={name:"LoginFrom",beforeRouteEnter(o,t,l){if(!localStorage.getItem("tst_user")){l();return}l({path:"/"})},data(){return{login_in_submission:!1,login_show_alert:!1,login_alert_variant:"bg-blue-500",login_alert_msg:"Please wait! Untill your login in progress.",loading:!1,email:"",password:""}},methods:{getUserData(){localStorage.getItem("tst_user")?(this.loading=!1,this.$router.replace("/restricted")):(this.loading=!0,this.$store.dispatch("getUserData",{email:this.email,password:this.password}).then(o=>{o.role&&this.$router.replace("/"),this.loading=!1}).catch(o=>{this.loading=!1,this.login_show_alert=!0,this.login_alert_variant="bg-red-500",this.login_alert_msg="Invalid email or password"}))}}},f={class:"container py-20 mx-auto md:w-1/2"},h=e("h1",{class:"text-3xl text-center"},"TST REPORT",-1),b={class:"form-control"},w=e("label",{class:"label",autocomplete:"off"},[e("span",{class:"label-text"},"Email")],-1),x={class:"form-control"},v=e("label",{class:"label",autocomplete:"off"},[e("span",{class:"label-text"},"Password")],-1);function y(o,t,l,p,s,r){return m(),u("div",f,[h,e("form",{onSubmit:t[2]||(t[2]=g((...a)=>r.getUserData&&r.getUserData(...a),["prevent"]))},[e("div",b,[w,i(e("input",{type:"email","onUpdate:modelValue":t[0]||(t[0]=a=>s.email=a),class:"input input-bordered input-primary",autocomplete:"email",placeholder:"e.g example@example.com"},null,512),[[n,s.email]])]),e("div",x,[v,i(e("input",{type:"password",autocomplete:"current-password","onUpdate:modelValue":t[1]||(t[1]=a=>s.password=a),class:"input input-bordered input-primary"},null,512),[[n,s.password]])]),e("button",{type:"submit",class:c(["mt-2 btn btn-primary btn-block",{loading:s.loading}])},"Login",2)],32)])}var D=d(_,[["render",y]]);export{D as default};
