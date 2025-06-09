"use strict";var d=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var v=d(function(w,g){
var i=require('@stdlib/assert-is-collection/dist'),m=require('@stdlib/array-dtypes/dist'),o=require('@stdlib/array-dtype/dist'),u=require('@stdlib/array-base-assert-contains/dist'),s=require('@stdlib/array-base-join/dist'),h=require('@stdlib/stats-strided-mskmin/dist').ndarray,a=require('@stdlib/error-tools-fmtprodmsg/dist'),n=m("real_and_generic"),l="generic";function y(r,e){var t;if(!i(r))throw new TypeError(a('2Gv2O',r));if(t=o(r)||l,!u(n,t))throw new TypeError(a('2GvHZ',s(n,'", "'),t));if(!i(e))throw new TypeError(a('2Gv2y',e));if(t=o(e)||l,!u(n,t))throw new TypeError(a('2GvHq',s(n,'", "'),t));if(r.length!==e.length)throw new RangeError(a('2Gv1E'));return h(r.length,r,1,0,e,1,0)}g.exports=y
});var c=v();module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
