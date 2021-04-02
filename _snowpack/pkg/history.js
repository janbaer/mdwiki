function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var m,x=m||(m={});x.Pop="POP";x.Push="PUSH";x.Replace="REPLACE";var y=function(a){return a};function A(a){a.preventDefault();a.returnValue="";}
function B(){var a=[];return {get length(){return a.length},push:function(b){a.push(b);return function(){a=a.filter(function(a){return a!==b});}},call:function(b){a.forEach(function(a){return a&&a(b)});}}}function D(){return Math.random().toString(36).substr(2,8)}function E(a){var b=a.pathname,g=a.search;a=a.hash;return (void 0===b?"/":b)+(void 0===g?"":g)+(void 0===a?"":a)}
function F(a){var b={};if(a){var g=a.indexOf("#");0<=g&&(b.hash=a.substr(g),a=a.substr(0,g));g=a.indexOf("?");0<=g&&(b.search=a.substr(g),a=a.substr(0,g));a&&(b.pathname=a);}return b}
function createHashHistory(a){function b(){var a=F(f.location.hash.substr(1)),c=a.pathname,b=a.search;a=a.hash;var e=p.state||{};return [e.idx,y({pathname:void 0===c?"/":c,search:void 0===b?"":b,hash:void 0===a?"":a,state:e.usr||null,key:e.key||"default"})]}function g(){if(n)k.call(n),n=null;else {var a=m.Pop,c=b(),e=c[0];c=c[1];if(k.length)if(null!=e){var f=l-e;f&&(n={action:a,location:c,retry:function(){h(-1*f);}},h(f));}else;else w(a);}}function t(a){var d=document.querySelector("base"),c="";d&&d.getAttribute("href")&&(d=f.location.href,c=d.indexOf("#"),c=-1===c?d:d.slice(0,c));return c+"#"+("string"===typeof a?a:E(a))}function v(a,b){void 0===b&&(b=null);return y(_extends({},c,{},"string"===typeof a?F(a):a,{state:b,key:D()}))}function w(a){q=a;a=b();l=a[0];c=a[1];e.call({action:q,location:c});}function u(a,c){function d(){u(a,c);}var b=m.Push,e=v(a,c);if(!k.length||(k.call({action:b,location:e,retry:d}),!1)){var g=[{usr:e.state,key:e.key,idx:l+1},t(e)];e=g[0];g=g[1];try{p.pushState(e,"",g);}catch(H){f.location.assign(g);}w(b);}}function r(a,c){function d(){r(a,c);}var e=m.Replace,b=v(a,c);k.length&&(k.call({action:e,
location:b,retry:d}),1)||(b=[{usr:b.state,key:b.key,idx:l},t(b)],p.replaceState(b[0],"",b[1]),w(e));}function h(a){p.go(a);}void 0===a&&(a={});a=a.window;var f=void 0===a?document.defaultView:a,p=f.history,n=null;f.addEventListener("popstate",g);f.addEventListener("hashchange",function(){var a=b()[1];E(a)!==E(c)&&g();});var q=m.Pop;a=b();var l=a[0],c=a[1],e=B(),k=B();null==l&&(l=0,p.replaceState(_extends({},p.state,{idx:l}),""));return {get action(){return q},get location(){return c},createHref:t,push:u,
replace:r,go:h,back:function(){h(-1);},forward:function(){h(1);},listen:function(a){return e.push(a)},block:function(a){var c=k.push(a);1===k.length&&f.addEventListener("beforeunload",A);return function(){c();k.length||f.removeEventListener("beforeunload",A);}}}}

export { createHashHistory };
