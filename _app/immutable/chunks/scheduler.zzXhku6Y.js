function y(){}function k(t,n){for(const e in n)t[e]=n[e];return t}function w(t){return t()}function D(){return Object.create(null)}function j(t){t.forEach(w)}function E(t){return typeof t=="function"}function F(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function M(t){return Object.keys(t).length===0}function v(t,...n){if(t==null){for(const o of n)o(void 0);return y}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function S(t,n,e){t.$$.on_destroy.push(v(n,e))}function A(t,n,e,o){if(t){const r=m(t,n,e,o);return t[0](r)}}function m(t,n,e,o){return t[1]&&o?k(e.ctx.slice(),t[1](o(n))):e.ctx}function B(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const f=[],d=Math.max(n.dirty.length,r.length);for(let u=0;u<d;u+=1)f[u]=n.dirty[u]|r[u];return f}return n.dirty|r}return n.dirty}function P(t,n,e,o,r,f){if(r){const d=m(n,e,o,f);t.p(d,r)}}function U(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let o=0;o<e;o++)n[o]=-1;return n}return-1}function G(t){const n={};for(const e in t)e[0]!=="$"&&(n[e]=t[e]);return n}function H(t,n){const e={};n=new Set(n);for(const o in t)!n.has(o)&&o[0]!=="$"&&(e[o]=t[o]);return e}function I(t){return t&&E(t.destroy)?t.destroy:y}let l;function _(t){l=t}function i(){if(!l)throw new Error("Function called outside component initialization");return l}function J(t){i().$$.on_mount.push(t)}function K(t){i().$$.after_update.push(t)}function L(t){i().$$.on_destroy.push(t)}function N(t,n){return i().$$.context.set(t,n),n}function Q(t){return i().$$.context.get(t)}const a=[],g=[];let c=[];const b=[],x=Promise.resolve();let p=!1;function C(){p||(p=!0,x.then(q))}function R(){return C(),x}function O(t){c.push(t)}const h=new Set;let s=0;function q(){if(s!==0)return;const t=l;do{try{for(;s<a.length;){const n=a[s];s++,_(n),z(n.$$)}}catch(n){throw a.length=0,s=0,n}for(_(null),a.length=0,s=0;g.length;)g.pop()();for(let n=0;n<c.length;n+=1){const e=c[n];h.has(e)||(h.add(e),e())}c.length=0}while(a.length);for(;b.length;)b.pop()();p=!1,h.clear(),_(t)}function z(t){if(t.fragment!==null){t.update(),j(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(O)}}function T(t){const n=[],e=[];c.forEach(o=>t.indexOf(o)===-1?n.push(o):e.push(o)),e.forEach(o=>o()),c=n}export{U as A,B,Q as C,N as D,L as E,v as F,K as a,g as b,S as c,D as d,M as e,q as f,O as g,T as h,E as i,l as j,_ as k,w as l,a as m,y as n,J as o,C as p,H as q,j as r,F as s,R as t,i as u,k as v,G as w,A as x,I as y,P as z};
