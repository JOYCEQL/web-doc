var U=Object.defineProperty;var B=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var T=(o,t,e)=>t in o?U(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e,I=(o,t)=>{for(var e in t||(t={}))F.call(t,e)&&T(o,e,t[e]);if(B)for(var e of B(t))M.call(t,e)&&T(o,e,t[e]);return o};import{g as P,r as k,c as _,a as s,t as g,p as X,b as K,o as u,d as V,P as W,w as z,e as j,v as G,f as J,h as l,i as m,j as n,k as d,F as v,l as Q,m as S,n as Y,q as ee,s as L,u as te,x as $,y,z as oe,A as se,B as re,C as ne,V as ce}from"./vendor.8f742b33.js";const ae=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))c(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function e(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerpolicy&&(a.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?a.credentials="include":r.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function c(r){if(r.ep)return;r.ep=!0;const a=e(r);fetch(r.href,a)}};ae();var A={title:"Tracer UI",themes:{"color-body":"#fff","color-bar":"#fff","color-sub-bar":"#f5f5f5","color-text":"#555","color-sub-text":"#888","color-border":"rgba(0, 0, 0, 0.12)","color-shadow":"#eee","color-introduce-border":"#2196f3","color-primary":"#41b883","color-link":"#00c48f","color-type":"#00c48f","color-progress":"#1d92e9","color-progress-track":"#fff","color-side-bar":"#3a7afe","color-side-bar-active-background":"#e7f5ee","color-app-bar":"#3a7afe","color-nav-button-hover-background":"rgba(0, 0, 0, 0.08)","color-pc-language-active":"#3a7afe","color-pc-language-active-background":"#edf5ff","color-code-bg":"#ffffff","color-table-th-bg":"#fafafc","color-table-qoute-bg":"#fff"},darkThemes:{"color-body":"#121212","color-bar":"#1e1e1e","color-sub-bar":"#272727","color-text":"rgba(255, 255, 255, 0.82)","color-sub-text":"#aaa","color-border":"#333","color-shadow":"#121212","color-introduce-border":"#555","color-primary":"#41b883","color-link":"#10c48f","color-type":"#10c48f","color-progress":"#5580f8","color-progress-track":"#202020","color-side-bar":"#4a7afe","color-side-bar-active-background":"#233633","color-app-bar":"#4a7afe","color-nav-button-hover-background":"rgba(255, 255, 255, 0.08)","color-pc-language-active":"#4a7afe","color-pc-language-active-background":"#4a7afe20","color-code-bg":"#202020","color-table-th-bg":"#1e1e1e","color-table-qoute-bg":"#18181c"}};const x=[];function de(o){x.forEach(e=>document.documentElement.style.removeProperty(e)),x.length=0;const t=le(o);Object.entries(t).forEach(([e,c])=>{document.documentElement.style.setProperty(e,c),x.push(e)})}function O(o,t){const e=P(o,t,{}),c=Object.entries(e).reduce((r,[a,i])=>(r[`--doc-${a}`]=i,r),{});de(c)}function le(o){return Object.entries(o!=null?o:{}).reduce((t,[e,c])=>{const r=e.startsWith("--")?e:`--${ie(e)}`;return t[r]=c,t},{})}function ie(o){const t=/([^-])([A-Z])/g;return o.replace(t,"$1-$2").replace(t,"$1-$2").toLowerCase()}function q(o="tracer-theme"){var e;let t=window.localStorage.getItem(o);return t||(t=((e=window.matchMedia)==null?void 0:e.call(window,"(prefers-color-scheme: dark)").matches)?"darkThemes":"themes",window.localStorage.setItem(o,t)),t}const E=(o,t)=>{window.localStorage.setItem(o,t)};var ue="./assets/logo.6340a6c2.png";var h=(o,t)=>{const e=o.__vccOpts||o;for(const[c,r]of t)e[c]=r;return e};const _e={name:"AppHeader",setup(o){const t=P(A,"title"),e=k(q());return{title:t,currentThemes:e,toggleTheme:()=>{e.value=e.value==="darkThemes"?"themes":"darkThemes",console.log(e.value),O(A,e.value),E("tracer-theme",e.value)}}}},pe=o=>(X("data-v-6726b7e6"),o=o(),K(),o),me={class:"tracer-doc-header"},he={class:"tracer-doc-header_left"},fe=pe(()=>s("div",{class:"tracer-doc-header_logo"},[s("img",{src:ue})],-1)),be={class:"tracer-doc-header_title"},ge={key:0,class:"dark"},ve={key:1,class:"light"};function $e(o,t,e,c,r,a){return u(),_("div",me,[s("div",he,[fe,s("div",be,g(c.title),1)]),s("div",{class:"tracer-doc-header_right",onClick:t[0]||(t[0]=(...i)=>c.toggleTheme&&c.toggleTheme(...i))},[c.currentThemes==="darkThemes"?(u(),_("div",ge,"\u6DF1\u8272")):(u(),_("div",ve,"\u6D45\u8272"))])])}var ye=h(_e,[["render",$e],["__scopeId","data-v-6726b7e6"]]);const we={class:"markdown-body"},ke=s("h1",null,"Tracer UI",-1),Se=s("p",null,"Tracer UI \u662F\u4E00\u4E2A Vue3 \u7684PC\u7AEF\u7EC4\u4EF6\u5E93\u3002",-1),Ae=s("h2",null,"\u547D\u540D\u7531\u6765",-1),xe=s("p",null,'\u300A\u5B88\u671B\u5148\u950B\u300B\u7684\u82F1\u96C4\u730E\u7A7A(Tracer)\uFF0C\u5979\u7684\u7279\u70B9\u5C31\u662F"\u5FEB"\uFF0C\u8FD9\u4E2A\u7EC4\u4EF6\u5E93\u4EA6\u662F\u5982\u6B64\u3002',-1),Ce=s("h2",null,"\u6280\u672F\u685F",-1),Ne=s("p",null,"\u7EC4\u4EF6\u5E93\u9879\u76EE\u7531 Vue3.X + Vite2.0 \u642D\u5EFA, \u5305\u7BA1\u7406\u5DE5\u5177\u4F7F\u7528pnpm\u3002",-1),Be=[ke,Se,Ae,xe,Ce,Ne],Te={setup(o,{expose:t}){return t({frontmatter:{}}),(c,r)=>(u(),_("div",we,Be))}},Ie={class:"markdown-body"},Pe=s("h1",null,"\u5B89\u88C5",-1),Ve=s("p",null,"\u53EF\u4EE5\u9009\u62E9\u4E0B\u9762\u4E09\u79CD\u5305\u7BA1\u7406\u5668\u7684\u4EFB\u610F\u4E00\u79CD\uFF0C\u63A8\u8350pnpm\u3002",-1),ze=s("h2",null,"npm",-1),je=s("pre",null,[s("code",{class:"language-Shell"},`    npm install tracer-ui
`)],-1),Le=s("h2",null,"yarn",-1),Oe=s("pre",null,[s("code",{class:"language-Shell"},`    yarn add tracer-ui
`)],-1),qe=s("h2",null,"pnpm",-1),Ee=s("pre",null,[s("code",{class:"language-Shell"},`    pnpm install tracer-ui
`)],-1),De=[Pe,Ve,ze,je,Le,Oe,qe,Ee],He={setup(o,{expose:t}){return t({frontmatter:{}}),(c,r)=>(u(),_("div",Ie,De))}};const Ze={class:"markdown-body"},Re=s("h1",null,"\u4F7F\u7528",-1),Ue=s("h2",null,"\u5168\u91CF\u5F15\u5165",-1),Fe=s("pre",null,[s("code",{class:"language-js"},`//main.js
import { createApp } from 'vue'
import App from './App.vue'
import tracer from 'tracer-ui'
import 'tracer-ui/lib/style.css'
createApp(App).use(tracer).mount('#app')
`)],-1),Me=s("h2",null,"\u6309\u9700\u5F15\u5165",-1),Xe=s("p",null,"\u5B9E\u9645\u4E0A\u8FD9\u91CC\u7684\u6309\u9700\u5F15\u5165\u5355\u6307css",-1),Ke=s("pre",null,[s("code",{class:"language-js"},`//main.js
import { createApp } from 'vue'
import App from './App.vue'
import {Button} from 'tracer-ui'
import 'tracer-ui/lib/style/Button.css'
createApp(App).use(Button).mount('#app')
`)],-1),We=s("h2",null,"\u5355\u6587\u4EF6\u7EC4\u4EF6\u4E2D\u76F4\u63A5\u4F7F\u7528",-1),Ge=s("pre",null,[s("code",{class:"language-html"},`<template>
  <t-button>tracer-ui</t-button>
</template> 
`)],-1),Je=[Re,Ue,Fe,Me,Xe,Ke,We,Ge],Qe={setup(o,{expose:t}){return t({frontmatter:{}}),V(()=>{W.highlightAll()}),(c,r)=>(u(),_("div",Ze,Je))}};const Ye={props:{compName:{type:String,default:"",require:!0},demoName:{type:String,default:"",require:!0},moduleName:{type:String,default:"",require:!0}},data(){return{sourceCode:"",codeVisible:!1}},computed:{previewSourceCode(){return this.sourceCode.replace(/'\.\.\/\.\.\/index'/g,"")}},async mounted(){this.compName&&this.demoName&&(this.sourceCode=await fetch(`/packages/${this.compName}/example/${this.demoName}.vue`).then(o=>o.text())),await this.$nextTick(),Prism.highlightAll()},methods:{async copyCode(){},showSourceCode(){this.codeVisible=!this.codeVisible},onSuccess(){alert("\u590D\u5236\u6210\u529F")}}},et={class:"doc-preview"},tt={class:"preview-toolbar"},ot={class:"preview-toolbar_desc"},st={class:"preview-toolbar_btn"},rt=l("\u590D\u5236\u4EE3\u7801"),nt=[rt],ct={class:"source-code"},at={class:"language-html"},dt={class:"language-html"};function lt(o,t,e,c,r,a){const i=J("clipboard");return u(),_("div",et,[s("div",tt,[s("h3",ot,g(e.moduleName),1),s("span",st,[z((u(),_("span",null,nt)),[[i,a.previewSourceCode,"copy"],[i,a.onSuccess,"success"]]),s("span",{onClick:t[0]||(t[0]=(...p)=>a.showSourceCode&&a.showSourceCode(...p))},"\u67E5\u770B\u4EE3\u7801")])]),s("section",null,[j(o.$slots,"default")]),z(s("div",ct,[s("pre",at,[s("code",dt,g(a.previewSourceCode),1)])],512),[[G,r.codeVisible]])])}var D=h(Ye,[["render",lt]]);const it={},ut=l("\u9ED8\u8BA4\u6309\u94AE"),_t=l("\u6362\u79CD\u989C\u8272"),pt=l("\u4E3B\u8981\u6309\u94AE"),mt=l("\u6210\u529F\u6309\u94AE"),ht=l("\u4FE1\u606F\u6309\u94AE"),ft=l("\u8B66\u544A\u6309\u94AE"),bt=l("\u9519\u8BEF\u6309\u94AE"),gt=l("\u5706\u89D2\u6309\u94AE"),vt=l("+");function $t(o,t){const e=m("t-button");return u(),_(v,null,[n(e,null,{default:d(()=>[ut]),_:1}),n(e,{color:"#f2c97d"},{default:d(()=>[_t]),_:1}),n(e,{type:"primary"},{default:d(()=>[pt]),_:1}),n(e,{type:"success"},{default:d(()=>[mt]),_:1}),n(e,{type:"info"},{default:d(()=>[ht]),_:1}),n(e,{type:"warning"},{default:d(()=>[ft]),_:1}),n(e,{type:"error"},{default:d(()=>[bt]),_:1}),n(e,{round:"",type:"primary"},{default:d(()=>[gt]),_:1}),n(e,{circle:"",type:"primary"},{default:d(()=>[vt]),_:1})],64)}var yt=h(it,[["render",$t]]);const wt={},kt=l("\u5C0F\u5C3A\u5BF8"),St=l("\u9ED8\u8BA4\u5C3A\u5BF8"),At=l("\u5927\u5C3A\u5BF8");function xt(o,t){const e=m("t-button");return u(),_(v,null,[n(e,{size:"small",type:"primary"},{default:d(()=>[kt]),_:1}),n(e,{type:"primary"},{default:d(()=>[St]),_:1}),n(e,{size:"large",type:"primary"},{default:d(()=>[At]),_:1})],64)}var Ct=h(wt,[["render",xt]]);const Nt={},Bt=l("\u9ED8\u8BA4\u6309\u94AE"),Tt=l("\u6362\u79CD\u989C\u8272"),It=l("\u4E3B\u8981\u6309\u94AE"),Pt=l("\u6210\u529F\u6309\u94AE"),Vt=l("\u4FE1\u606F\u6309\u94AE"),zt=l("\u8B66\u544A\u6309\u94AE"),jt=l("\u9519\u8BEF\u6309\u94AE"),Lt=l("\u5706\u89D2\u6309\u94AE"),Ot=l("+");function qt(o,t){const e=m("t-button");return u(),_(v,null,[n(e,{disabled:""},{default:d(()=>[Bt]),_:1}),n(e,{color:"#f2c97d",disabled:""},{default:d(()=>[Tt]),_:1}),n(e,{type:"primary",disabled:""},{default:d(()=>[It]),_:1}),n(e,{type:"success",disabled:""},{default:d(()=>[Pt]),_:1}),n(e,{type:"info",disabled:""},{default:d(()=>[Vt]),_:1}),n(e,{type:"warning",disabled:""},{default:d(()=>[zt]),_:1}),n(e,{type:"error",disabled:""},{default:d(()=>[jt]),_:1}),n(e,{round:"",type:"primary",disabled:""},{default:d(()=>[Lt]),_:1}),n(e,{circle:"",type:"primary",disabled:""},{default:d(()=>[Ot]),_:1})],64)}var Et=h(Nt,[["render",qt]]);const Dt={components:{Preview:D,BaseUse:yt,Size:Ct,Disable:Et},setup(){}},Ht={class:"button-wrapper"};function Zt(o,t,e,c,r,a){const i=m("base-use"),p=m("Preview"),f=m("size"),b=m("disable");return u(),_("div",Ht,[n(p,{"comp-name":"Button","demo-name":"base",moduleName:"\u57FA\u7840"},{default:d(()=>[n(i)]),_:1}),n(p,{"comp-name":"Button","demo-name":"size",moduleName:"\u5C3A\u5BF8"},{default:d(()=>[n(f)]),_:1}),n(p,{"comp-name":"Button","demo-name":"disable",moduleName:"\u7981\u7528"},{default:d(()=>[n(b)]),_:1})])}var Rt=h(Dt,[["render",Zt],["__scopeId","data-v-9b52df94"]]);const Ut={class:"markdown-body"},Ft=s("h1",null,"\u6309\u94AE",-1),Mt=s("h2",null,"\u6F14\u793A",-1),Xt=Q("<h2>API</h2><h3>\u5C5E\u6027</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>color</code></td><td>\u6309\u94AE\u989C\u8272</td><td><em>string</em></td><td><code>null</code></td></tr><tr><td><code>type</code></td><td>\u6309\u94AE\u7C7B\u578B</td><td><code>&#39;default&#39; | &#39;primary&#39; |&#39;success&#39;|&#39;info&#39;|&#39;warning&#39;|&#39;error&#39;</code></td><td><code>default</code></td></tr><tr><td><code>size</code></td><td>\u6309\u94AE\u5C3A\u5BF8</td><td><code>&#39;default&#39; | &#39;large&#39; |&#39;small&#39;</code></td><td><code>default</code></td></tr><tr><td><code>round</code></td><td>\u662F\u5426\u4E3A\u5706\u89D2</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>circle</code></td><td>\u662F\u5426\u4E3A\u5706\u5F62</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>disabled</code></td><td>\u662F\u5426\u7981\u7528</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table><h3>\u4E8B\u4EF6</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td><code>click</code></td><td>\u70B9\u51FB\u6309\u94AE\u65F6\u89E6\u53D1</td><td><code>event: Event</code></td></tr></tbody></table><h3>\u63D2\u69FD</h3><table><thead><tr><th>\u63D2\u69FD\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td><code>default</code></td><td>\u6309\u94AE\u5185\u5BB9</td><td><code>-</code></td></tr></tbody></table>",7),Kt={setup(o,{expose:t}){return t({frontmatter:{}}),(c,r)=>(u(),_("div",Ut,[Ft,Mt,n(Rt),Xt]))}};var C={\u6587\u6863:[{title:"\u4ECB\u7ECD",name:"introduce",path:"/components/introduce",meta:{compZhName:"\u4ECB\u7ECD",compClassName:"introduce"},component:Te},{title:"\u5B89\u88C5",name:"install",path:"/components/install",meta:{compZhName:"\u5B89\u88C5",compClassName:"install"},component:He},{title:"\u4F7F\u7528",name:"use",path:"/components/use",meta:{compZhName:"\u4F7F\u7528",compClassName:"use"},component:Qe}],\u7EC4\u4EF6:[{title:"\u6309\u94AE",name:"button",path:"/components/button",meta:{compZhName:"\u6309\u94AE",compClassName:"button"},component:Kt}]};const Wt=S({name:"AppSideBar",setup(o){const t=Y({docRoutes:C});return I({},ee(t))}}),Gt={class:"tracer-doc-side"},Jt={class:"menu"},Qt={class:"menu-group-title text-overflow"};function Yt(o,t,e,c,r,a){const i=m("router-link");return u(),_("div",Gt,[s("div",Jt,[(u(!0),_(v,null,L(o.docRoutes,(p,f)=>(u(),_("div",{class:"menu-group",key:f},[s("span",Qt,g(f)+g(f!=="\u6587\u6863"?`\uFF08${p.length}\uFF09`:""),1),(u(!0),_(v,null,L(p,(b,R)=>(u(),te(i,{key:R,class:"menu-item text-overflow",to:`${b.path}`},{default:d(()=>[l(g(b.title),1)]),_:2},1032,["to"]))),128))]))),128))])])}var eo=h(Wt,[["render",Yt],["__scopeId","data-v-4ea79456"]]);const to=S({name:"TracerDoc",components:{AppSideBar:eo,AppHeader:ye},setup({props:o}){const t=k(q()),e=k(!0);V(async()=>{O(A,t.value),E("tracer-theme",t.value)});const c=()=>{e.value=!e.value},r=$(()=>({left:e.value?"0px":"-240px"})),a=$(()=>({left:e.value?"240px":"0px",transform:e.value?"rotate(180deg) translateX(50%)":"rotate(0deg) translateX(50%)"})),i=$(()=>({paddingLeft:e.value?"240px":"0px"}));return{asideVisible:e,currentThemes:t,toggleAsidStyle:a,toggleAside:c,mainStyle:i,asideStyle:r}}}),oo={class:"tracer-doc"},so=s("svg",{class:"icon","aria-hidden":"true"},[s("use",{"xlink:href":"#icon-arrow-right"})],-1),ro=[so];function no(o,t,e,c,r,a){const i=m("app-header"),p=m("app-side-bar"),f=m("router-view");return u(),_("div",oo,[n(i),s("div",{class:"app-main",style:y(o.mainStyle)},[n(p,{style:y(o.asideStyle),class:"aside"},null,8,["style"]),s("div",{class:"toggle-button",onClick:t[0]||(t[0]=(...b)=>o.toggleAside&&o.toggleAside(...b)),style:y(o.toggleAsidStyle)},ro,4),s("main",null,[n(f)])],4)])}var co=h(to,[["render",no]]);const ao=S({name:"TButton",props:{color:{type:String},round:{type:Boolean,default:!1},type:{type:String,default:"default"},size:{type:String,default:"default"},circle:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},emits:["click"],setup(o){const{color:t,round:e,type:c,size:r,circle:a,disabled:i}=o,p=$(()=>({[`t-type-${c}`]:c,[`t-button-${r}`]:r,["is-round"]:e,["is-circle"]:a,["is-disabled"]:i}));return{style:{background:t},classes:p}}});function lo(o,t,e,c,r,a){return u(),_("button",{class:oe(["t-button",o.classes]),onClick:t[0]||(t[0]=i=>o.$emit("click",i)),style:y(o.style)},[j(o.$slots,"default")],6)}var w=h(ao,[["render",lo]]);w.install=function(o){o.component(w.name,w)};const H=function(o){o.use(w)};typeof window!="undefined"&&window.Vue&&H(window.Vue);let N=[{path:"/",redirect:"/components/introduce"}];for(let o in C)N=[...N,...C[o]];const io={history:se(),routes:N,scrollBehavior(o,t){if(o.path!==t.path)return{top:0}}},uo=re(io);const Z=ne(co);Z.component("Preview",D);Z.use(uo).use(H).use(ce).mount("#app");
