module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1666161189834, function(require, module, exports) {
function t(){return{use(t,e){"function"==typeof t&&(this.success=t),"function"==typeof e&&(this.error=e)},success:t=>t,error:t=>t}}class e{constructor(t){this.stuff=t}clone(){let t="function"==typeof this.stuff?this.stuff.bind(this.stuff):{};return Object.assign(t,this.stuff),t}make(t={},e,r){return"function"==typeof Proxy?this.proxy(t,e,r):this.defineProperty(t,e,r)}proxy(t,e,r){return this.stuff[e]={},t[e]=new Proxy(this.stuff[e],{get:(t,e,s)=>(t[e]||(t[e]=r(e)),Reflect.get(t,e,s))}),t}defineProperty(t,e,r){let s={};return t[e]={},Object.keys(wx).forEach(n=>{Object.defineProperty(t[e],n,{get:()=>(s[n]||(s[n]=r(n)),s[n])})}),t}}Promise.prototype.finally||(Promise.prototype.finally=function(t){let e=this.constructor;return this.then(r=>e.resolve(t()).then(()=>r),r=>e.resolve(t()).then(()=>{throw r}))}),module.exports=function r(s={},n=!0){function o(t,e){return this.method({url:t,data:e,method:o.defaults.method})}return function(t){["get","post","put","delete","options","head","trace","connect"].forEach(e=>{t[e]=(r,s)=>t.method({url:r,data:s,method:e})})}(o),function(e){e.defaults={url:"",method:"get",dataType:"json",responseType:"text",header:{"content-type":"application/json"}},e.interceptors={response:t(),request:t()}}(o),function(t){t.dataMerging=function(t,e,r){"string"==typeof e?(t.url=this.pathMerge(e),t.data=r,this.fnDefaults(t)):"object"==typeof e&&(e.url=this.pathMerge(e.url),Object.assign(t,e),this.fnDefaults(t))},t.pathMerge=function(t){return/^http[s]?:\/\//.test(t)?t:this.defaults.url+t},t.fnDefaults=function(t){["dataType","responseType","header"].forEach(e=>t[e]=t[e]?t[e]:this.defaults[e])}}(o),function(t){t.method=function({url:t,data:e,method:r,api:s="request"}){try{return new Promise((n,o)=>{let i=this.unite({url:t,data:e,method:r,resolve:n,reject:o});i=this.interceptors.request.success(i),wx[s](i)})}catch(t){return this.interceptors.request.error(t)}},t.unite=function({url:t,data:e,method:r,resolve:s,reject:n}){let o={success:t=>{let e=this.interceptors.response.success(t);s(e)},fail:t=>{let e=this.interceptors.response.error(t);n(e)}};return o.method=r,this.dataMerging(o,t,e),o}}(o),o.build=function(t,s){let n=new e(this),o=n.clone();return s&&n.make(o,"wx",t=>(e,r)=>this.method({url:e,data:r,api:t})),o.options(t),o.create=r,o},o.options=function(t){Object.keys(t).forEach(e=>this.defaults[e]=t[e])},o.build(s,n)};

}, function(modId) {var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1666161189834);
})()
//miniprogram-npm-outsideDeps=[]
//# sourceMappingURL=index.js.map