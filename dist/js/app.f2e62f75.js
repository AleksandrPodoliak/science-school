(function(){var e={3482:function(e,t,n){"use strict";n.r(t),t["default"]={header:{nav:[e=>{const{normalize:t}=e;return t(["About us"])},e=>{const{normalize:t}=e;return t(["Education"])},e=>{const{normalize:t}=e;return t(["Price"])},e=>{const{normalize:t}=e;return t(["Teachers"])},e=>{const{normalize:t}=e;return t(["Gallery"])},e=>{const{normalize:t}=e;return t(["Contacts"])}]}}},5521:function(e,t,n){"use strict";n.r(t),t["default"]={header:{nav:[e=>{const{normalize:t}=e;return t(["О нас"])},e=>{const{normalize:t}=e;return t(["Обучение"])},e=>{const{normalize:t}=e;return t(["Цены"])},e=>{const{normalize:t}=e;return t(["Преподаватели"])},e=>{const{normalize:t}=e;return t(["Галерея"])},e=>{const{normalize:t}=e;return t(["Контакты"])}]}}},9338:function(e,t,n){"use strict";n.r(t),t["default"]={header:{nav:[e=>{const{normalize:t}=e;return t(["Про нас"])},e=>{const{normalize:t}=e;return t(["Навчання"])},e=>{const{normalize:t}=e;return t(["Ціни"])},e=>{const{normalize:t}=e;return t(["Викладачі"])},e=>{const{normalize:t}=e;return t(["Галерея"])},e=>{const{normalize:t}=e;return t(["Контакти"])}]}}},7606:function(e,t,n){"use strict";var r=n(9242),o=n(3396);const i={class:"container"};function s(e,t){const n=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)("div",i,[(0,o.Wm)(n)])}var c=n(89);const a={},l=(0,c.Z)(a,[["render",s]]);var u=l,p=n(2483);function d(e,t,n,r,i,s){const c=(0,o.up)("headerBlock"),a=(0,o.up)("sliderBlock");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(c),(0,o.Wm)(a)],64)}var f=n(7139),g=n.p+"img/logo-header.2ac7291b.svg";const m=e=>((0,o.dD)("data-v-608a0f64"),e=e(),(0,o.Cn)(),e),h={class:"header"},v=m((()=>(0,o._)("img",{src:g,alt:"logo",class:"header-logo"},null,-1))),w={class:"header-nav"},k={class:"header-nav__list"},b=["href"];function _(e,t,n,r,i,s){const c=(0,o.up)("LocaleSwitcher");return(0,o.wg)(),(0,o.iD)("div",h,[v,(0,o._)("nav",w,[(0,o._)("ul",k,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(s.navList,((e,t)=>((0,o.wg)(),(0,o.iD)("li",{class:"header-nav__list-item",key:t},[(0,o._)("a",{href:t},(0,f.zw)(e),9,b)])))),128))]),(0,o.Wm)(c)])])}const x={class:"switcher"},y={key:0,class:"switcher-select"},z={class:"switcher-select__list"},L=["onClick"];function S(e,t,n,r,i,s){const c=(0,o.Q2)("click-outside");return(0,o.wg)(),(0,o.iD)("div",x,[(0,o._)("div",{class:"switcher-button",onClick:t[0]||(t[0]=(...e)=>s.toggleLocaleSelect&&s.toggleLocaleSelect(...e))},(0,f.zw)(s.localeText),1),i.showLocaleSelect?(0,o.wy)(((0,o.wg)(),(0,o.iD)("div",y,[(0,o._)("ul",z,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(i.locales,((e,t)=>((0,o.wg)(),(0,o.iD)("li",{class:"switcher-select__item",key:t,onClick:t=>s.selectLocale(e.value)},(0,f.zw)(e.text),9,L)))),128))])])),[[c,s.toggleLocaleSelect]]):(0,o.kq)("",!0)])}var O={name:"LocaleSwitcher",data(){return{showLocaleSelect:!1,locales:[{value:"uk",text:"Українська"},{value:"en",text:"English"},{value:"ru",text:"Русский"}]}},computed:{localeText(){return"uk"==this.$i18n.locale?"Українська":"ru"==this.$i18n.locale?"Русский":"en"==this.$i18n.locale?"English":"Українська"}},methods:{toggleLocaleSelect(){this.showLocaleSelect=!this.showLocaleSelect},selectLocale(e){this.$i18n.locale=e,this.$router.replace(`/${e}`),this.toggleLocaleSelect()}}};const $=(0,c.Z)(O,[["render",S],["__scopeId","data-v-4b252ac1"]]);var j=$,D={name:"headerBlock",components:{LocaleSwitcher:j},computed:{navList(){return[this.$t("header.nav[0]"),this.$t("header.nav[1]"),this.$t("header.nav[2]"),this.$t("header.nav[3]"),this.$t("header.nav[4]"),this.$t("header.nav[5]")]}}};const P=(0,c.Z)(D,[["render",_],["__scopeId","data-v-608a0f64"]]);var T=P;const C={class:"swiper"},E=["src"];function B(e,t,n,r,i,s){const c=(0,o.up)("swiper-slide"),a=(0,o.up)("swiper");return(0,o.wg)(),(0,o.iD)("div",C,[(0,o.Wm)(a,{class:"swiper-wrapper",modules:r.modules,"slides-per-view":1,"space-between":50,navigation:"",pagination:{clickable:!0},loop:!0,speed:500,autoplay:{delay:5e3,disableOnInteraction:!1}},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(s.sliderList,((e,t)=>((0,o.wg)(),(0,o.j4)(c,{class:"swiper-slide",key:t},{default:(0,o.w5)((()=>[(0,o._)("img",{class:"swiper-slide__img",src:e,alt:"slide"},null,8,E)])),_:2},1024)))),128))])),_:1},8,["modules"])])}var W=n(3390),Z=n(5032),I={name:"sliderBlock",components:{Swiper:Z.tq,SwiperSlide:Z.o5},data(){return{baners:{ru:[n(2825),n(8654),n(277),n(7576),n(8609)],uk:[n(8280),n(9798),n(6030),n(2999),n(7703)],en:[n(9589),n(4222),n(7692),n(1096),n(230)]}}},setup(){return{modules:[W.W_,W.tl,W.s5,W.pt]}},computed:{sliderList(){return this.baners[this.$i18n.locale]}}};const M=(0,c.Z)(I,[["render",B],["__scopeId","data-v-4341b88a"]]);var H=M,Y={name:"mainPage",components:{headerBlock:T,sliderBlock:H}};const A=(0,c.Z)(Y,[["render",d]]);var K=A;const R=[{path:"/",redirect:"/uk",name:"home",component:K},{path:"/uk",name:"uk",component:K},{path:"/ru",name:"ru",component:K},{path:"/en",name:"en",component:K},{path:"/:catchAll(.*)",redirect:"/uk",name:"404",component:K}],q=(0,p.p7)({history:(0,p.PO)("/"),routes:R});var F=q,N=n(65),U=(0,N.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}}),G=n(5658);function Q(){const e=n(2528),t={};return e.keys().forEach((n=>{const r=n.match(/([A-Za-z0-9-_]+)\./i);if(r&&r.length>1){const o=r[1];t[o]=e(n).default}})),t}var J=(0,G.o)({legacy:!1,globalInjection:!0,locale:"uk",fallbackLocale:"uk",messages:Q()}),V=n(3051),X=n.n(V);const ee=(0,r.ri)(u);ee.use(J),ee.use(U),ee.use(F),ee.use(X()),ee.mount("#app"),setTimeout((()=>{F.currentRoute._value.path.match(/\/en/)&&(ee.config.globalProperties.$i18n.locale="en"),F.currentRoute._value.path.match(/\/ru/)&&(ee.config.globalProperties.$i18n.locale="ru"),F.currentRoute._value.path.match(/\/uk/)&&(ee.config.globalProperties.$i18n.locale="uk")}),0)},2528:function(e,t,n){var r={"./en.json":3482,"./ru.json":5521,"./uk.json":9338};function o(e){var t=i(e);return n(t)}function i(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=i,e.exports=o,o.id=2528},9589:function(e,t,n){"use strict";e.exports=n.p+"img/slide1en.658e130a.png"},2825:function(e,t,n){"use strict";e.exports=n.p+"img/slide1ru.37f50662.png"},8280:function(e,t,n){"use strict";e.exports=n.p+"img/slide1uk.f9f067fe.png"},4222:function(e,t,n){"use strict";e.exports=n.p+"img/slide2en.6f872dd8.png"},8654:function(e,t,n){"use strict";e.exports=n.p+"img/slide2ru.9b1d04ac.png"},9798:function(e,t,n){"use strict";e.exports=n.p+"img/slide2uk.18f649f5.png"},7692:function(e,t,n){"use strict";e.exports=n.p+"img/slide3en.6770c5d8.png"},277:function(e,t,n){"use strict";e.exports=n.p+"img/slide3ru.9f939d01.png"},6030:function(e,t,n){"use strict";e.exports=n.p+"img/slide3uk.e653c4cc.png"},1096:function(e,t,n){"use strict";e.exports=n.p+"img/slide4en.fb2c63e1.png"},7576:function(e,t,n){"use strict";e.exports=n.p+"img/slide4ru.23bbe6f0.png"},2999:function(e,t,n){"use strict";e.exports=n.p+"img/slide4uk.473ef4f9.png"},230:function(e,t,n){"use strict";e.exports=n.p+"img/slide5en.f472643c.png"},8609:function(e,t,n){"use strict";e.exports=n.p+"img/slide5ru.75ac73ee.png"},7703:function(e,t,n){"use strict";e.exports=n.p+"img/slide5uk.4e8516cf.png"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,i){if(!r){var s=1/0;for(u=0;u<e.length;u++){r=e[u][0],o=e[u][1],i=e[u][2];for(var c=!0,a=0;a<r.length;a++)(!1&i||s>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[a])}))?r.splice(a--,1):(c=!1,i<s&&(s=i));if(c){e.splice(u--,1);var l=o();void 0!==l&&(t=l)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[r,o,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,i,s=r[0],c=r[1],a=r[2],l=0;if(s.some((function(t){return 0!==e[t]}))){for(o in c)n.o(c,o)&&(n.m[o]=c[o]);if(a)var u=a(n)}for(t&&t(r);l<s.length;l++)i=s[l],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(u)},r=self["webpackChunkscience_school"]=self["webpackChunkscience_school"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(7606)}));r=n.O(r)})();
//# sourceMappingURL=app.f2e62f75.js.map