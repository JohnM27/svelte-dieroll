import{s as W,x as Z,v as C,y as X,z as J,A as K,B as Q,i as Te,r as Ce,q as v,u as ae,o as we,w as oe,b as x,D as de,n as ze,F as je}from"../chunks/scheduler.zzXhku6Y.js";import{S as $,i as ee,e as re,c as le,a as ie,d as E,C as q,g as z,D as se,n as b,l as A,r as he,u as R,k as me,v as w,w as H,q as Fe,x as M,m as ke,s as Ne,f as Ve,o as Ue,t as Ye,b as Xe}from"../chunks/index.dAren2Gv.js";import{_ as te,a as ge,M as qe,c as L,u as Ee,g as G,f as ue,d as Ge,b as Be,e as _e,S as Se}from"../chunks/classAdderBuilder.lLTJ11dA.js";import{r as We}from"../chunks/index.Z1WYoNO_.js";const Ze=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global,Je=!0,Ke="always",Et=Object.freeze(Object.defineProperty({__proto__:null,prerender:Je,trailingSlash:Ke},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var D={FIXED_CLASS:"mdc-top-app-bar--fixed",FIXED_SCROLLED_CLASS:"mdc-top-app-bar--fixed-scrolled",SHORT_CLASS:"mdc-top-app-bar--short",SHORT_COLLAPSED_CLASS:"mdc-top-app-bar--short-collapsed",SHORT_HAS_ACTION_ITEM_CLASS:"mdc-top-app-bar--short-has-action-item"},Y={DEBOUNCE_THROTTLE_RESIZE_TIME_MS:100,MAX_TOP_APP_BAR_HEIGHT:128},Qe={ACTION_ITEM_SELECTOR:".mdc-top-app-bar__action-item",NAVIGATION_EVENT:"MDCTopAppBar:nav",NAVIGATION_ICON_SELECTOR:".mdc-top-app-bar__navigation-icon",ROOT_SELECTOR:".mdc-top-app-bar",TITLE_SELECTOR:".mdc-top-app-bar__title"};/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var pe=function(n){te(e,n);function e(t){return n.call(this,ge(ge({},e.defaultAdapter),t))||this}return Object.defineProperty(e,"strings",{get:function(){return Qe},enumerable:!1,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return D},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return Y},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setStyle:function(){},getTopAppBarHeight:function(){return 0},notifyNavigationIconClicked:function(){},getViewportScrollY:function(){return 0},getTotalActionItems:function(){return 0}}},enumerable:!1,configurable:!0}),e.prototype.handleTargetScroll=function(){},e.prototype.handleWindowResize=function(){},e.prototype.handleNavigationClick=function(){this.adapter.notifyNavigationIconClicked()},e}(qe);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var U=0,ne=function(n){te(e,n);function e(t){var s=n.call(this,t)||this;return s.wasDocked=!0,s.isDockedShowing=!0,s.currentAppBarOffsetTop=0,s.isCurrentlyBeingResized=!1,s.resizeThrottleId=U,s.resizeDebounceId=U,s.lastScrollPosition=s.adapter.getViewportScrollY(),s.topAppBarHeight=s.adapter.getTopAppBarHeight(),s}return e.prototype.destroy=function(){n.prototype.destroy.call(this),this.adapter.setStyle("top","")},e.prototype.handleTargetScroll=function(){var t=Math.max(this.adapter.getViewportScrollY(),0),s=t-this.lastScrollPosition;this.lastScrollPosition=t,this.isCurrentlyBeingResized||(this.currentAppBarOffsetTop-=s,this.currentAppBarOffsetTop>0?this.currentAppBarOffsetTop=0:Math.abs(this.currentAppBarOffsetTop)>this.topAppBarHeight&&(this.currentAppBarOffsetTop=-this.topAppBarHeight),this.moveTopAppBar())},e.prototype.handleWindowResize=function(){var t=this;this.resizeThrottleId||(this.resizeThrottleId=setTimeout(function(){t.resizeThrottleId=U,t.throttledResizeHandler()},Y.DEBOUNCE_THROTTLE_RESIZE_TIME_MS)),this.isCurrentlyBeingResized=!0,this.resizeDebounceId&&clearTimeout(this.resizeDebounceId),this.resizeDebounceId=setTimeout(function(){t.handleTargetScroll(),t.isCurrentlyBeingResized=!1,t.resizeDebounceId=U},Y.DEBOUNCE_THROTTLE_RESIZE_TIME_MS)},e.prototype.checkForUpdate=function(){var t=-this.topAppBarHeight,s=this.currentAppBarOffsetTop<0,a=this.currentAppBarOffsetTop>t,o=s&&a;if(o)this.wasDocked=!1;else if(this.wasDocked){if(this.isDockedShowing!==a)return this.isDockedShowing=a,!0}else return this.wasDocked=!0,!0;return o},e.prototype.moveTopAppBar=function(){if(this.checkForUpdate()){var t=this.currentAppBarOffsetTop;Math.abs(t)>=this.topAppBarHeight&&(t=-Y.MAX_TOP_APP_BAR_HEIGHT),this.adapter.setStyle("top",t+"px")}},e.prototype.throttledResizeHandler=function(){var t=this.adapter.getTopAppBarHeight();this.topAppBarHeight!==t&&(this.wasDocked=!1,this.currentAppBarOffsetTop-=this.topAppBarHeight-t,this.topAppBarHeight=t),this.handleTargetScroll()},e}(pe);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var xe=function(n){te(e,n);function e(){var t=n!==null&&n.apply(this,arguments)||this;return t.wasScrolled=!1,t}return e.prototype.handleTargetScroll=function(){var t=this.adapter.getViewportScrollY();t<=0?this.wasScrolled&&(this.adapter.removeClass(D.FIXED_SCROLLED_CLASS),this.wasScrolled=!1):this.wasScrolled||(this.adapter.addClass(D.FIXED_SCROLLED_CLASS),this.wasScrolled=!0)},e}(ne);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var $e=function(n){te(e,n);function e(t){var s=n.call(this,t)||this;return s.collapsed=!1,s.isAlwaysCollapsed=!1,s}return Object.defineProperty(e.prototype,"isCollapsed",{get:function(){return this.collapsed},enumerable:!1,configurable:!0}),e.prototype.init=function(){n.prototype.init.call(this),this.adapter.getTotalActionItems()>0&&this.adapter.addClass(D.SHORT_HAS_ACTION_ITEM_CLASS),this.setAlwaysCollapsed(this.adapter.hasClass(D.SHORT_COLLAPSED_CLASS))},e.prototype.setAlwaysCollapsed=function(t){this.isAlwaysCollapsed=!!t,this.isAlwaysCollapsed?this.collapse():this.maybeCollapseBar()},e.prototype.getAlwaysCollapsed=function(){return this.isAlwaysCollapsed},e.prototype.handleTargetScroll=function(){this.maybeCollapseBar()},e.prototype.maybeCollapseBar=function(){if(!this.isAlwaysCollapsed){var t=this.adapter.getViewportScrollY();t<=0?this.collapsed&&this.uncollapse():this.collapsed||this.collapse()}},e.prototype.uncollapse=function(){this.adapter.removeClass(D.SHORT_COLLAPSED_CLASS),this.collapsed=!1},e.prototype.collapse=function(){this.adapter.addClass(D.SHORT_COLLAPSED_CLASS),this.collapsed=!0},e}(pe);const{window:be}=Ze;function et(n){let e,t,s,a,o,i,r;const u=n[22].default,f=Z(u,n,n[21],null);let g=[{class:t=L({[n[2]]:!0,"mdc-top-app-bar":!0,"mdc-top-app-bar--short":n[4]==="short","mdc-top-app-bar--short-collapsed":n[0],"mdc-top-app-bar--fixed":n[4]==="fixed","smui-top-app-bar--static":n[4]==="static","smui-top-app-bar--color-secondary":n[5]==="secondary","mdc-top-app-bar--prominent":n[6],"mdc-top-app-bar--dense":n[7],...n[11]})},{style:s=Object.entries(n[12]).map(Ae).concat([n[3]]).join(" ")},n[15]],c={};for(let l=0;l<g.length;l+=1)c=C(c,g[l]);return{c(){e=re("header"),f&&f.c(),this.h()},l(l){e=le(l,"HEADER",{class:!0,style:!0});var h=ie(e);f&&f.l(h),h.forEach(E),this.h()},h(){q(e,c)},m(l,h){z(l,e,h),f&&f.m(e,null),n[25](e),o=!0,i||(r=[se(be,"resize",n[23]),se(be,"scroll",n[24]),X(a=Ee.call(null,e,n[1])),X(n[13].call(null,e)),se(e,"SMUITopAppBarIconButton:nav",n[26])],i=!0)},p(l,h){f&&f.p&&(!o||h[0]&2097152)&&J(f,u,l,l[21],o?Q(u,l[21],h,null):K(l[21]),null),q(e,c=G(g,[(!o||h[0]&2293&&t!==(t=L({[l[2]]:!0,"mdc-top-app-bar":!0,"mdc-top-app-bar--short":l[4]==="short","mdc-top-app-bar--short-collapsed":l[0],"mdc-top-app-bar--fixed":l[4]==="fixed","smui-top-app-bar--static":l[4]==="static","smui-top-app-bar--color-secondary":l[5]==="secondary","mdc-top-app-bar--prominent":l[6],"mdc-top-app-bar--dense":l[7],...l[11]})))&&{class:t},(!o||h[0]&4104&&s!==(s=Object.entries(l[12]).map(Ae).concat([l[3]]).join(" ")))&&{style:s},h[0]&32768&&l[15]])),a&&Te(a.update)&&h[0]&2&&a.update.call(null,l[1])},i(l){o||(b(f,l),o=!0)},o(l){A(f,l),o=!1},d(l){l&&E(e),f&&f.d(l),n[25](null),i=!1,Ce(r)}}}const Ae=([n,e])=>`${n}: ${e};`;function tt(n,e,t){const s=["use","class","style","variant","color","collapsed","prominent","dense","scrollTarget","getPropStore","getElement"];let a=v(e,s),{$$slots:o={},$$scope:i}=e;const r=ue(ae());let u=()=>{};function f(p){return p===u}let{use:g=[]}=e,{class:c=""}=e,{style:l=""}=e,{variant:h="standard"}=e,{color:y="primary"}=e,{collapsed:m=u}=e;const P=!f(m)&&!!m;f(m)&&(m=!1);let{prominent:B=!1}=e,{dense:O=!1}=e,{scrollTarget:_=void 0}=e,T,d,S={},I={},F,ye=We({variant:h,prominent:B,dense:O},p=>{t(18,F=p)}),j,k=h;we(()=>(t(9,d=ce()),d.init(),()=>{d.destroy()}));function ce(){const p={static:pe,short:$e,fixed:xe,standard:ne}[h]||ne;return new p({hasClass:Oe,addClass:Ie,removeClass:De,setStyle:Le,getTopAppBarHeight:()=>T.clientHeight,notifyNavigationIconClicked:()=>Ge(T,"SMUITopAppBar:nav",void 0,void 0,!0),getViewportScrollY:()=>_==null?window.pageYOffset:_.scrollTop,getTotalActionItems:()=>T.querySelectorAll(".mdc-top-app-bar__action-item").length})}function Oe(p){return p in S?S[p]:fe().classList.contains(p)}function Ie(p){S[p]||t(11,S[p]=!0,S)}function De(p){(!(p in S)||S[p])&&t(11,S[p]=!1,S)}function Le(p,V){I[p]!=V&&(V===""||V==null?(delete I[p],t(12,I),t(20,k),t(4,h),t(9,d)):t(12,I[p]=V,I))}function N(){d&&(d.handleTargetScroll(),h==="short"&&t(0,m="isCollapsed"in d&&d.isCollapsed))}function Re(){return ye}function fe(){return T}const He=()=>h!=="short"&&h!=="fixed"&&d&&d.handleWindowResize(),Me=()=>_==null&&N();function Pe(p){x[p?"unshift":"push"](()=>{T=p,t(10,T)})}const ve=()=>d&&d.handleNavigationClick();return n.$$set=p=>{e=C(C({},e),oe(p)),t(15,a=v(e,s)),"use"in p&&t(1,g=p.use),"class"in p&&t(2,c=p.class),"style"in p&&t(3,l=p.style),"variant"in p&&t(4,h=p.variant),"color"in p&&t(5,y=p.color),"collapsed"in p&&t(0,m=p.collapsed),"prominent"in p&&t(6,B=p.prominent),"dense"in p&&t(7,O=p.dense),"scrollTarget"in p&&t(8,_=p.scrollTarget),"$$scope"in p&&t(21,i=p.$$scope)},n.$$.update=()=>{n.$$.dirty[0]&262352&&F&&F({variant:h,prominent:B,dense:O}),n.$$.dirty[0]&1049104&&k!==h&&d&&(t(20,k=h),d.destroy(),t(11,S={}),t(12,I={}),t(9,d=ce()),d.init()),n.$$.dirty[0]&528&&d&&h==="short"&&"setAlwaysCollapsed"in d&&d.setAlwaysCollapsed(P),n.$$.dirty[0]&524544&&j!==_&&(j&&j.removeEventListener("scroll",N),_&&_.addEventListener("scroll",N),t(19,j=_))},[m,g,c,l,h,y,B,O,_,d,T,S,I,r,N,a,Re,fe,F,j,k,i,o,He,Me,Pe,ve]}class st extends ${constructor(e){super(),ee(this,e,tt,et,W,{use:1,class:2,style:3,variant:4,color:5,collapsed:0,prominent:6,dense:7,scrollTarget:8,getPropStore:16,getElement:17},null,[-1,-1])}get getPropStore(){return this.$$.ctx[16]}get getElement(){return this.$$.ctx[17]}}const nt=Be({class:"mdc-top-app-bar__row",tag:"div"});function at(n){let e,t,s,a,o,i;const r=n[9].default,u=Z(r,n,n[8],null);let f=[{class:t=L({[n[1]]:!0,"mdc-top-app-bar__section":!0,"mdc-top-app-bar__section--align-start":n[2]==="start","mdc-top-app-bar__section--align-end":n[2]==="end"})},n[3]?{role:"toolbar"}:{},n[6]],g={};for(let c=0;c<f.length;c+=1)g=C(g,f[c]);return{c(){e=re("section"),u&&u.c(),this.h()},l(c){e=le(c,"SECTION",{class:!0});var l=ie(e);u&&u.l(l),l.forEach(E),this.h()},h(){q(e,g)},m(c,l){z(c,e,l),u&&u.m(e,null),n[10](e),a=!0,o||(i=[X(s=Ee.call(null,e,n[0])),X(n[5].call(null,e))],o=!0)},p(c,[l]){u&&u.p&&(!a||l&256)&&J(u,r,c,c[8],a?Q(r,c[8],l,null):K(c[8]),null),q(e,g=G(f,[(!a||l&6&&t!==(t=L({[c[1]]:!0,"mdc-top-app-bar__section":!0,"mdc-top-app-bar__section--align-start":c[2]==="start","mdc-top-app-bar__section--align-end":c[2]==="end"})))&&{class:t},l&8&&(c[3]?{role:"toolbar"}:{}),l&64&&c[6]])),s&&Te(s.update)&&l&1&&s.update.call(null,c[0])},i(c){a||(b(u,c),a=!0)},o(c){A(u,c),a=!1},d(c){c&&E(e),u&&u.d(c),n[10](null),o=!1,Ce(i)}}}function ot(n,e,t){const s=["use","class","align","toolbar","getElement"];let a=v(e,s),{$$slots:o={},$$scope:i}=e;const r=ue(ae());let{use:u=[]}=e,{class:f=""}=e,{align:g="start"}=e,{toolbar:c=!1}=e,l;de("SMUI:icon-button:context",c?"top-app-bar:action":"top-app-bar:navigation"),de("SMUI:button:context",c?"top-app-bar:action":"top-app-bar:navigation");function h(){return l}function y(m){x[m?"unshift":"push"](()=>{l=m,t(4,l)})}return n.$$set=m=>{e=C(C({},e),oe(m)),t(6,a=v(e,s)),"use"in m&&t(0,u=m.use),"class"in m&&t(1,f=m.class),"align"in m&&t(2,g=m.align),"toolbar"in m&&t(3,c=m.toolbar),"$$scope"in m&&t(8,i=m.$$scope)},[u,f,g,c,l,r,a,h,i,o,y]}class rt extends ${constructor(e){super(),ee(this,e,ot,at,W,{use:0,class:1,align:2,toolbar:3,getElement:7})}get getElement(){return this.$$.ctx[7]}}const lt=Be({class:"mdc-top-app-bar__title",tag:"span"});function it(n){let e;const t=n[12].default,s=Z(t,n,n[14],null);return{c(){s&&s.c()},l(a){s&&s.l(a)},m(a,o){s&&s.m(a,o),e=!0},p(a,o){s&&s.p&&(!e||o&16384)&&J(s,t,a,a[14],e?Q(t,a[14],o,null):K(a[14]),null)},i(a){e||(b(s,a),e=!0)},o(a){A(s,a),e=!1},d(a){s&&s.d(a)}}}function ut(n){let e,t,s;const a=[{tag:n[3]},{use:[n[7],...n[0]]},{class:L({[n[1]]:!0,[n[6]]:!0})},n[8]];var o=n[2];function i(r,u){let f={$$slots:{default:[it]},$$scope:{ctx:r}};if(u!==void 0&&u&459)f=G(a,[u&8&&{tag:r[3]},u&129&&{use:[r[7],...r[0]]},u&66&&{class:L({[r[1]]:!0,[r[6]]:!0})},u&256&&_e(r[8])]);else for(let g=0;g<a.length;g+=1)f=C(f,a[g]);return{props:f}}return o&&(e=he(o,i(n)),n[13](e)),{c(){e&&R(e.$$.fragment),t=me()},l(r){e&&w(e.$$.fragment,r),t=me()},m(r,u){e&&H(e,r,u),z(r,t,u),s=!0},p(r,[u]){if(u&4&&o!==(o=r[2])){if(e){Fe();const f=e;A(f.$$.fragment,1,0,()=>{M(f,1)}),ke()}o?(e=he(o,i(r,u)),r[13](e),R(e.$$.fragment),b(e.$$.fragment,1),H(e,t.parentNode,t)):e=null}else if(o){const f=u&459?G(a,[u&8&&{tag:r[3]},u&129&&{use:[r[7],...r[0]]},u&66&&{class:L({[r[1]]:!0,[r[6]]:!0})},u&256&&_e(r[8])]):{};u&16384&&(f.$$scope={dirty:u,ctx:r}),e.$set(f)}},i(r){s||(e&&b(e.$$.fragment,r),s=!0)},o(r){e&&A(e.$$.fragment,r),s=!1},d(r){r&&E(t),n[13](null),e&&M(e,r)}}}function pt(n,e,t){let s,a;const o=["use","class","topAppBar","component","tag","getElement"];let i=v(e,o),r,u=ze,f=()=>(u(),u=je(s,d=>t(11,r=d)),s);n.$$.on_destroy.push(()=>u());let{$$slots:g={},$$scope:c}=e;const l=ue(ae());let{use:h=[]}=e,{class:y=""}=e,{topAppBar:m}=e,P,{component:B=Se}=e,{tag:O=B===Se?"main":void 0}=e;function _(){return P.getElement()}function T(d){x[d?"unshift":"push"](()=>{P=d,t(5,P)})}return n.$$set=d=>{e=C(C({},e),oe(d)),t(8,i=v(e,o)),"use"in d&&t(0,h=d.use),"class"in d&&t(1,y=d.class),"topAppBar"in d&&t(9,m=d.topAppBar),"component"in d&&t(2,B=d.component),"tag"in d&&t(3,O=d.tag),"$$scope"in d&&t(14,c=d.$$scope)},n.$$.update=()=>{n.$$.dirty&512&&f(t(4,s=m&&m.getPropStore())),n.$$.dirty&2064&&t(6,a=!s||r.variant==="static"?"":r.variant==="short"?"mdc-top-app-bar--short-fixed-adjust":r.prominent&&r.dense?"mdc-top-app-bar--dense-prominent-fixed-adjust":r.prominent?"mdc-top-app-bar--prominent-fixed-adjust":r.dense?"mdc-top-app-bar--dense-fixed-adjust":"mdc-top-app-bar--fixed-adjust")},[h,y,B,O,s,P,a,l,i,m,_,r,g,T,c]}class ct extends ${constructor(e){super(),ee(this,e,pt,ut,W,{use:0,class:1,topAppBar:9,component:2,tag:3,getElement:10})}get getElement(){return this.$$.ctx[10]}}function ft(n){let e;return{c(){e=Ye("Die Roll App")},l(t){e=Xe(t,"Die Roll App")},m(t,s){z(t,e,s)},d(t){t&&E(e)}}}function dt(n){let e,t;return e=new lt({props:{$$slots:{default:[ft]},$$scope:{ctx:n}}}),{c(){R(e.$$.fragment)},l(s){w(e.$$.fragment,s)},m(s,a){H(e,s,a),t=!0},p(s,a){const o={};a&8&&(o.$$scope={dirty:a,ctx:s}),e.$set(o)},i(s){t||(b(e.$$.fragment,s),t=!0)},o(s){A(e.$$.fragment,s),t=!1},d(s){M(e,s)}}}function ht(n){let e,t;return e=new rt({props:{$$slots:{default:[dt]},$$scope:{ctx:n}}}),{c(){R(e.$$.fragment)},l(s){w(e.$$.fragment,s)},m(s,a){H(e,s,a),t=!0},p(s,a){const o={};a&8&&(o.$$scope={dirty:a,ctx:s}),e.$set(o)},i(s){t||(b(e.$$.fragment,s),t=!0)},o(s){A(e.$$.fragment,s),t=!1},d(s){M(e,s)}}}function mt(n){let e,t;return e=new nt({props:{$$slots:{default:[ht]},$$scope:{ctx:n}}}),{c(){R(e.$$.fragment)},l(s){w(e.$$.fragment,s)},m(s,a){H(e,s,a),t=!0},p(s,a){const o={};a&8&&(o.$$scope={dirty:a,ctx:s}),e.$set(o)},i(s){t||(b(e.$$.fragment,s),t=!0)},o(s){A(e.$$.fragment,s),t=!1},d(s){M(e,s)}}}function gt(n){let e,t;const s=n[1].default,a=Z(s,n,n[3],null);return{c(){e=re("div"),a&&a.c(),this.h()},l(o){e=le(o,"DIV",{class:!0});var i=ie(e);a&&a.l(i),i.forEach(E),this.h()},h(){Ue(e,"class","content svelte-1ldbd3a")},m(o,i){z(o,e,i),a&&a.m(e,null),t=!0},p(o,i){a&&a.p&&(!t||i&8)&&J(a,s,o,o[3],t?Q(s,o[3],i,null):K(o[3]),null)},i(o){t||(b(a,o),t=!0)},o(o){A(a,o),t=!1},d(o){o&&E(e),a&&a.d(o)}}}function _t(n){let e,t,s,a,o={variant:"fixed",$$slots:{default:[mt]},$$scope:{ctx:n}};return e=new st({props:o}),n[2](e),s=new ct({props:{topAppBar:n[0],$$slots:{default:[gt]},$$scope:{ctx:n}}}),{c(){R(e.$$.fragment),t=Ne(),R(s.$$.fragment)},l(i){w(e.$$.fragment,i),t=Ve(i),w(s.$$.fragment,i)},m(i,r){H(e,i,r),z(i,t,r),H(s,i,r),a=!0},p(i,[r]){const u={};r&8&&(u.$$scope={dirty:r,ctx:i}),e.$set(u);const f={};r&1&&(f.topAppBar=i[0]),r&8&&(f.$$scope={dirty:r,ctx:i}),s.$set(f)},i(i){a||(b(e.$$.fragment,i),b(s.$$.fragment,i),a=!0)},o(i){A(e.$$.fragment,i),A(s.$$.fragment,i),a=!1},d(i){i&&E(t),n[2](null),M(e,i),M(s,i)}}}function St(n,e,t){let{$$slots:s={},$$scope:a}=e,o;function i(r){x[r?"unshift":"push"](()=>{o=r,t(0,o)})}return n.$$set=r=>{"$$scope"in r&&t(3,a=r.$$scope)},[o,s,i,a]}class Bt extends ${constructor(e){super(),ee(this,e,St,_t,W,{})}}export{Bt as component,Et as universal};
