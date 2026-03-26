"use strict";var v=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var s=v(function(q,u){
var a=require('@stdlib/math-base-assert-is-nan/dist'),n=require('@stdlib/math-base-special-beta/dist');function c(e,r){var i,t;return a(e)||e<=0||a(r)||r<=0?NaN:(i=r*n(1+1/e,r),t=r*n(1+2/e,r),t-i*i)}u.exports=c
});var m=s();module.exports=m;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
