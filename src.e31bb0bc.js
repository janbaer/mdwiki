// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/preact/dist/preact.module.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.render = D;
exports.hydrate = H;
exports.h = exports.createElement = a;
exports.Fragment = p;
exports.createRef = v;
exports.Component = d;
exports.cloneElement = I;
exports.createContext = L;
exports.toChildArray = _;
exports._unmount = O;
exports.options = void 0;
var n,
    l,
    u,
    t,
    i,
    r,
    f = {},
    e = [],
    o = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|^--/i;
exports.options = n;

function c(n, l) {
  for (var u in l) n[u] = l[u];

  return n;
}

function s(n) {
  var l = n.parentNode;
  l && l.removeChild(n);
}

function a(n, l, u) {
  var t,
      i,
      r,
      f,
      e = arguments;
  if (l = c({}, l), arguments.length > 3) for (u = [u], t = 3; t < arguments.length; t++) u.push(e[t]);
  if (null != u && (l.children = u), null != n && null != n.defaultProps) for (i in n.defaultProps) void 0 === l[i] && (l[i] = n.defaultProps[i]);
  return f = l.key, null != (r = l.ref) && delete l.ref, null != f && delete l.key, h(n, l, f, r);
}

function h(l, u, t, i) {
  var r = {
    type: l,
    props: u,
    key: t,
    ref: i,
    __k: null,
    __p: null,
    __b: 0,
    __e: null,
    l: null,
    __c: null,
    constructor: void 0
  };
  return n.vnode && n.vnode(r), r;
}

function v() {
  return {};
}

function p(n) {
  return n.children;
}

function y(n) {
  if (null == n || "boolean" == typeof n) return null;
  if ("string" == typeof n || "number" == typeof n) return h(null, n, null, null);

  if (null != n.__e || null != n.__c) {
    var l = h(n.type, n.props, n.key, null);
    return l.__e = n.__e, l;
  }

  return n;
}

function d(n, l) {
  this.props = n, this.context = l;
}

function m(n, l) {
  if (null == l) return n.__p ? m(n.__p, n.__p.__k.indexOf(n) + 1) : null;

  for (var u; l < n.__k.length; l++) if (null != (u = n.__k[l])) return "function" != typeof u.type ? u.__e : m(u, 0);

  return "function" == typeof n.type ? m(n) : null;
}

function w(n) {
  var l, u;

  if (null != (n = n.__p) && null != n.__c) {
    for (n.__e = n.__c.base = null, l = 0; l < n.__k.length; l++) if (null != (u = n.__k[l]) && null != u.__e) {
      n.__e = n.__c.base = u.__e;
      break;
    }

    return w(n);
  }
}

function b(t) {
  !t.__d && (t.__d = !0) && 1 === l.push(t) && (n.debounceRendering || u)(k);
}

function k() {
  var n;

  for (l.sort(function (n, l) {
    return l.__v.__b - n.__v.__b;
  }); n = l.pop();) n.__d && n.forceUpdate(!1);
}

function g(n, l, u, t, i, r, o, c) {
  var a,
      h,
      v,
      p,
      d,
      m,
      w,
      b,
      k = l.__k || _(l.props.children, l.__k = [], y, !0),
      g = u && u.__k || e,
      x = g.length;

  if (c == f) if (c = null, null != r) c = r[0];else for (h = 0; !c && h < x; h++) c = g[h] && g[h].__e;

  for (h = 0; h < k.length; h++) if (null != (a = k[h] = y(k[h]))) {
    if (a.__p = l, a.__b = l.__b + 1, null === (p = g[h]) || p && a.key == p.key && a.type === p.type) g[h] = void 0;else for (v = 0; v < x; v++) {
      if ((p = g[v]) && a.key == p.key && a.type === p.type) {
        g[v] = void 0;
        break;
      }

      p = null;
    }

    if (d = N(n, a, p = p || f, t, i, r, o, null, c), (v = a.ref) && p.ref != v && (b || (b = [])).push(v, a.__c || d), null != d) {
      if (null == w && (w = d), null != a.l) d = a.l, a.l = null;else if (r == p || d != c || null == d.parentNode) n: if (null == c || c.parentNode !== n) n.appendChild(d);else {
        for (m = c, v = 0; (m = m.nextSibling) && v < x; v += 2) if (m == d) break n;

        n.insertBefore(d, c);
      }
      c = d.nextSibling, "function" == typeof l.type && (l.l = d);
    }
  }

  if (l.__e = w, null != r && "function" != typeof l.type) for (h = r.length; h--;) null != r[h] && s(r[h]);

  for (h = x; h--;) null != g[h] && O(g[h], l);

  if (b) for (h = 0; h < b.length; h++) A(b[h], b[++h], l);
}

function _(n, l, u, t) {
  if (null == l && (l = []), null == n || "boolean" == typeof n) t && l.push(null);else if (Array.isArray(n)) for (var i = 0; i < n.length; i++) _(n[i], l, u, t);else l.push(u ? u(n) : n);
  return l;
}

function x(n, l, u, t) {
  var i,
      r,
      f = Object.keys(l).sort();

  for (i = 0; i < f.length; i++) "children" === (r = f[i]) || "key" === r || u && ("value" === r || "checked" === r ? n : u)[r] === l[r] || C(n, r, l[r], u[r], t);

  for (i in u) "children" === i || "key" === i || i in l || C(n, i, null, u[i], t);
}

function C(n, l, u, r, e) {
  var s, a, h, v;
  if ("style" === (l = e ? "className" === l ? "class" : l : "class" === l ? "className" : l)) for (a in s = c(c({}, r), u)) (u || f)[a] !== (r || f)[a] && n.style.setProperty("-" === a[0] && "-" === a[1] ? a : a.replace(t, "-$&"), u && a in u ? "number" == typeof s[a] && !1 === o.test(a) ? s[a] + "px" : s[a] : "");else if ("o" === l[0] && "n" === l[1]) h = l !== (l = l.replace(/Capture$/, "")), v = l.toLowerCase(), l = (v in n ? v : l).slice(2), u ? (r || n.addEventListener(l, P, h), (n.u || (n.u = {}))[l] = u) : n.removeEventListener(l, P, h);else if ("list" !== l && "tagName" !== l && !e && l in n) {
    if (n.length && "value" == l) for (l = n.length; l--;) n.options[l].selected = n.options[l].value == u;else n[l] = null == u ? "" : u;
  } else "function" != typeof u && "dangerouslySetInnerHTML" !== l && (l !== (l = l.replace(/^xlink:?/, "")) ? null == u || !1 === u ? n.removeAttributeNS(i, l.toLowerCase()) : n.setAttributeNS(i, l.toLowerCase(), u) : null == u || !1 === u ? n.removeAttribute(l) : n.setAttribute(l, u));
}

function P(l) {
  return this.u[l.type](n.event ? n.event(l) : l);
}

function N(l, u, t, i, r, f, e, o, s) {
  var a,
      h,
      v,
      m,
      w,
      b,
      k,
      x,
      C,
      P,
      N = u.type;
  if (void 0 !== u.constructor) return null;
  (a = n.__b) && a(u);

  try {
    n: if ("function" == typeof N) {
      if (x = u.props, C = (a = N.contextType) && i[a.__c], P = a ? C ? C.props.value : a.__p : i, t.__c ? k = (h = u.__c = t.__c).__p = h.__E : (N.prototype && N.prototype.render ? u.__c = h = new N(x, P) : (u.__c = h = new d(x, P), h.constructor = N, h.render = T), C && C.sub(h), h.props = x, h.state || (h.state = {}), h.context = P, h.__n = i, v = h.__d = !0, h.__h = []), null == h.__s && (h.__s = h.state), null != N.getDerivedStateFromProps && c(h.__s == h.state ? h.__s = c({}, h.__s) : h.__s, N.getDerivedStateFromProps(x, h.__s)), v) null == N.getDerivedStateFromProps && null != h.componentWillMount && h.componentWillMount(), null != h.componentDidMount && e.push(h);else {
        if (null == N.getDerivedStateFromProps && null == o && null != h.componentWillReceiveProps && h.componentWillReceiveProps(x, P), !o && null != h.shouldComponentUpdate && !1 === h.shouldComponentUpdate(x, h.__s, P)) {
          h.props = x, h.state = h.__s, h.__d = !1, h.__v = u, u.__e = t.__e, u.__k = t.__k;
          break n;
        }

        null != h.componentWillUpdate && h.componentWillUpdate(x, h.__s, P);
      }
      m = h.props, w = h.state, h.context = P, h.props = x, h.state = h.__s, (a = n.__r) && a(u), h.__d = !1, h.__v = u, h.__P = l;

      try {
        _(null != (a = h.render(h.props, h.state, h.context)) && a.type == p && null == a.key ? a.props.children : a, u.__k = [], y, !0);
      } catch (l) {
        if ((a = n.__E) && a(l, u, t)) break n;
        throw l;
      }

      for (null != h.getChildContext && (i = c(c({}, i), h.getChildContext())), v || null == h.getSnapshotBeforeUpdate || (b = h.getSnapshotBeforeUpdate(m, w)), g(l, u, t, i, r, f, e, s), h.base = u.__e; a = h.__h.pop();) a.call(h);

      v || null == m || null == h.componentDidUpdate || h.componentDidUpdate(m, w, b), k && (h.__E = h.__p = null);
    } else u.__e = j(t.__e, u, t, i, r, f, e);

    (a = n.diffed) && a(u);
  } catch (n) {
    z(n, u.__p);
  }

  return u.__e;
}

function $(l, u) {
  for (var t; t = l.pop();) try {
    t.componentDidMount();
  } catch (n) {
    z(n, t.__v.__p);
  }

  n.__c && n.__c(u);
}

function j(n, l, u, t, i, r, o) {
  var c,
      s,
      a,
      h,
      v = u.props,
      p = l.props;
  if (i = "svg" === l.type || i, null == n && null != r) for (c = 0; c < r.length; c++) if (null != (s = r[c]) && (null === l.type ? 3 === s.nodeType : s.localName === l.type)) {
    n = s, r[c] = null;
    break;
  }

  if (null == n) {
    if (null === l.type) return document.createTextNode(p);
    n = i ? document.createElementNS("http://www.w3.org/2000/svg", l.type) : document.createElement(l.type), r = null;
  }

  return null === l.type ? v !== p && (n.data = p) : l !== u && (null != r && (r = e.slice.call(n.childNodes)), a = (v = u.props || f).dangerouslySetInnerHTML, ((h = p.dangerouslySetInnerHTML) || a) && null == r && (h && a && h.__html == a.__html || (n.innerHTML = h && h.__html || "")), p.multiple && (n.multiple = p.multiple), g(n, l, u, t, "foreignObject" !== l.type && i, r, o, f), x(n, p, v, i)), n;
}

function A(n, l, u) {
  try {
    "function" == typeof n ? n(l) : n.current = l;
  } catch (n) {
    z(n, u);
  }
}

function O(l, u, t) {
  var i, r, f;

  if (n.unmount && n.unmount(l), (i = l.ref) && A(i, null, u), t || "function" == typeof l.type || (t = null != (r = l.__e)), l.__e = l.l = null, null != (i = l.__c)) {
    if (i.componentWillUnmount) try {
      i.componentWillUnmount();
    } catch (n) {
      z(n, u);
    }
    i.base = i.__P = null;
  }

  if (i = l.__k) for (f = 0; f < i.length; f++) i[f] && O(i[f], u, t);
  null != r && s(r);
}

function T(n, l, u) {
  return this.constructor(n, u);
}

function z(l, u) {
  var t;

  for (n.__e && n.__e(l, u); u; u = u.__p) if ((t = u.__c) && !t.__p) try {
    if (t.constructor && null != t.constructor.getDerivedStateFromError) t.setState(t.constructor.getDerivedStateFromError(l));else {
      if (null == t.componentDidCatch) continue;
      t.componentDidCatch(l);
    }
    return b(t.__E = t);
  } catch (n) {
    l = n;
  }

  throw l;
}

function D(l, u, t) {
  var i, r;
  n.__p && n.__p(l, u), i = u.__k, l = a(p, null, [l]), r = [], N(u, t ? l : u.__k = l, i || f, f, void 0 !== u.ownerSVGElement, t ? [t] : i ? null : e.slice.call(u.childNodes), r, !1, t || f), $(r, l);
}

function H(n, l) {
  l.__k = null, D(n, l);
}

function I(n, l) {
  return l = c(c({}, n.props), l), arguments.length > 2 && (l.children = e.slice.call(arguments, 2)), h(n.type, l, l.key || n.key, l.ref || n.ref);
}

function L(n) {
  var l = {},
      u = {
    __c: "__cC" + r++,
    __p: n,
    Consumer: function (n, l) {
      return n.children(l);
    },
    Provider: function (n) {
      var t,
          i = this;
      return this.getChildContext || (t = [], this.getChildContext = function () {
        return l[u.__c] = i, l;
      }, this.shouldComponentUpdate = function (n) {
        t.some(function (l) {
          l.__P && (l.context = n.value, b(l));
        });
      }, this.sub = function (n) {
        t.push(n);
        var l = n.componentWillUnmount;

        n.componentWillUnmount = function () {
          t.splice(t.indexOf(n), 1), l && l.call(n);
        };
      }), n.children;
    }
  };
  return u.Consumer.contextType = u, u;
}

exports.options = n = {}, d.prototype.setState = function (n, l) {
  var u = this.__s !== this.state && this.__s || (this.__s = c({}, this.state));
  ("function" != typeof n || (n = n(u, this.props))) && c(u, n), null != n && this.__v && (l && this.__h.push(l), b(this));
}, d.prototype.forceUpdate = function (n) {
  var l,
      u,
      t,
      i = this.__v,
      r = this.__v.__e,
      f = this.__P;
  f && (l = !1 !== n, u = [], t = N(f, i, c({}, i), this.__n, void 0 !== f.ownerSVGElement, null, u, l, null == r ? m(i) : r), $(u, i), t != r && w(i)), n && n();
}, d.prototype.render = p, l = [], u = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, t = /[A-Z]/g, i = "http://www.w3.org/1999/xlink", r = 0;
},{}],"../node_modules/preact/debug/dist/debug.module.js":[function(require,module,exports) {
"use strict";

var _preact = require("preact");

var r = {};

function o(n) {
  return n.type === _preact.Fragment ? "Wrapper" : "function" == typeof n.type ? "Composite" : "string" == typeof n.type ? "Native" : "Text";
}

function i(n) {
  return n.type === _preact.Fragment ? "Fragment" : "function" == typeof n.type ? n.type.displayName || n.type.name : "string" == typeof n.type ? n.type : "#text";
}

function a(n, e, t) {
  var r = e.pop(),
      o = e.reduce(function (n, e) {
    return n ? n[e] : null;
  }, n);
  o && (o[r] = t);
}

function u(e) {
  var t = e.__c,
      r = null;
  null != t && t instanceof _preact.Component && (r = {
    setState: t.setState.bind(t),
    forceUpdate: t.forceUpdate.bind(t),
    setInState: function (n, e) {
      t.setState(function (t) {
        return a(t, n, e), t;
      });
    },
    setInProps: function (n, r) {
      a(e.props, n, r), t.setState({});
    },
    setInContext: function (n, e) {
      a(t.context, n, e), t.setState({});
    }
  });
  var u = c(e),
      s = e.endTime - e.startTime;
  return {
    nodeType: o(e),
    type: e.type,
    name: i(e),
    ref: e.ref || null,
    key: e.key || null,
    updater: r,
    text: null === e.type ? e.props : null,
    state: null != t && t instanceof _preact.Component ? t.state : null,
    props: e.props,
    children: null !== e.type ? null != u && 1 == u.length && null === u[0].type ? u[0].props : u : null,
    publicInstance: l(e),
    memoizedInteractions: [],
    actualDuration: s,
    actualStartTime: e.startTime,
    treeBaseDuration: s
  };
}

function c(n) {
  return null == n.__c ? null != n.__k ? n.__k.filter(Boolean) : [] : null != n.__k ? n.__k.filter(Boolean) : null;
}

function s(n) {
  return n.type === _preact.Fragment && null === n.__p;
}

function l(n) {
  return s(n) ? n.__k.length > 0 && null != n.__k[0] && null != n.__k[0].__e ? n.__k[0].__e.parentNode : n : null != n.__c ? n.__c : n.type === _preact.Fragment ? n.props : n.__e;
}

function f(n, e, t) {
  if (null == n || null == e) return !1;

  for (var r in n) if ((!t || "children" != r || null == e[r]) && n[r] !== e[r]) return !1;

  return Object.keys(n).length === Object.keys(e).length;
}

function d(n) {
  var e = n.props,
      t = i(n),
      r = "";
  if (e) for (var o in e) if (e.hasOwnProperty(o) && "children" !== o) {
    var a = e[o];
    "function" == typeof a && (a = "function " + (a.displayName || a.name) + "() {}"), a = Object(a) !== a || a.toString ? a + "" : Object.prototype.toString.call(a), r += " " + o + "=" + JSON.stringify(a);
  }
  var u = e.children;
  return "<" + t + r + (u && u.length ? ">..</" + t + ">" : " />");
}

var h = function (n, e) {
  this.rid = e, this.hook = n, this.pending = [], this.inst2vnode = new WeakMap(), this.connected = !1;
};

function p(n) {
  return function (e) {
    try {
      return n(e);
    } catch (n) {
      console.error("The react devtools encountered an error"), console.error(n);
    }
  };
}

h.prototype.markConnected = function () {
  this.connected = !0, this.flushPendingEvents();
}, h.prototype.flushPendingEvents = function () {
  if (this.connected) {
    var n = this.pending;
    this.pending = [];

    for (var e = 0; e < n.length; e++) {
      var t = n[e];
      this.hook.emit(t.type, t);
    }
  }
}, h.prototype.mount = function (n) {
  this.inst2vnode.set(l(n), n);
  var e = u(n),
      t = [{
    internalInstance: n,
    data: e,
    renderer: this.rid,
    type: "mount"
  }];
  if (Array.isArray(e.children)) for (var r, o = e.children.slice(); null != (r = o.pop());) {
    var i = c(r);
    o.push.apply(o, i), this.inst2vnode.set(l(r), r);
    var a = u(r);
    t.push({
      internalInstance: r,
      data: a,
      renderer: this.rid,
      type: "mount"
    });
  }

  for (var f = t.length; --f >= 0;) this.pending.push(t[f]);

  s(n) && this.pending.push({
    internalInstance: n,
    data: e,
    renderer: this.rid,
    type: "root"
  });
}, h.prototype.update = function (n) {
  var e = u(n);
  if (Array.isArray(e.children)) for (var t = 0; t < e.children.length; t++) {
    var r = e.children[t],
        o = l(r);
    null == this.inst2vnode.get(o) ? this.mount(r) : this.update(r), e.children[t] = this.inst2vnode.get(o);
  }
  var i = this.inst2vnode.get(e.publicInstance);
  !function (n, e) {
    return n.props !== e.props && !f(n.props, e.props, !0) || null != n.__c && !f(e.__c.__u, e.__c.state) || n.__e !== e.__e || n.ref !== e.ref;
  }(i, n) ? this.pending.push({
    internalInstance: i,
    data: e,
    renderer: this.rid,
    type: "updateProfileTimes"
  }) : this.pending.push({
    internalInstance: i,
    data: e,
    renderer: this.rid,
    type: "update"
  });
}, h.prototype.handleCommitFiberRoot = function (n) {
  var e = l(n);
  this.inst2vnode.has(e) ? this.update(n) : this.mount(n);
  var t = null;
  if (s(n)) n.treeBaseDuration = 0, t = n;else for (t = n; null != t.__p;) t = t.__p;
  return this.pending.push({
    internalInstance: t,
    renderer: this.rid,
    data: u(t),
    type: "rootCommitted"
  }), this.flushPendingEvents(), n;
}, h.prototype.handleCommitFiberUnmount = function (n) {
  var e = l(n);
  this.inst2vnode.delete(e), this.pending.push({
    internalInstance: n,
    renderer: this.rid,
    type: "unmount"
  });
}, h.prototype.getNativeFromReactElement = function (n) {
  return n.__e;
}, h.prototype.getReactElementFromNative = function (n) {
  return this.inst2vnode.get(n) || null;
}, h.prototype.walkTree = function () {}, h.prototype.cleanup = function () {};

var v = function () {},
    y = Date.now;

try {
  y = performance.now.bind(performance);
} catch (n) {}

"development" === "development" && (function () {
  var n = _preact.options.__b,
      e = _preact.options.diffed,
      o = _preact.options.vnode,
      a = {
    useEffect: {},
    useLayoutEffect: {},
    lazyPropTypes: {}
  };
  _preact.options.__e = function (n, e) {
    var t = e && e.__c;
    t && "function" == typeof n.then && (n = new Error("Missing Suspense. The throwing component was: " + (t.displayName || t.name)));
  }, _preact.options.__p = function (n, e) {
    if (!e) throw new Error("Undefined parent passed to render(), this is the second argument.\nCheck if the element is available in the DOM/has the correct id.");
    var t;

    switch (e.nodeType) {
      case 1:
      case 11:
      case 9:
        t = !0;
        break;

      default:
        t = !1;
    }

    if (!t) throw new Error("\n\t\t\tExpected a valid HTML node as a second argument to render.\n\t\t\tReceived " + e + " instead: render(<" + (n.type.name || n.type) + " />, " + e + ");\n\t\t");
  }, _preact.options.__b = function (e) {
    if (null != e) {
      var t,
          o,
          u,
          c,
          s = e.type;
      if (void 0 === s) throw new Error("Undefined component passed to createElement()\n\nYou likely forgot to export your component or might have mixed up default and named imports" + d(e));

      if (null != s && "object" == typeof s) {
        if (void 0 !== s.t && void 0 !== s.__e) {
          var l = "Did you accidentally pass a JSX literal as JSX twice?\n\n  let My" + i(s) + " = " + d(s) + ";\n  let vnode = <My" + i(s) + " />;\n\nThis usually happens when you export a JSX literal and not the component.";
          throw new Error("Invalid type passed to createElement(): " + s + "\n\n" + l + "\n");
        }

        throw new Error("Invalid type passed to createElement(): " + (Array.isArray(s) ? "array" : s));
      }

      if (void 0 !== e.ref && "function" != typeof e.ref && "object" != typeof e.ref && !("$$typeof" in e)) throw new Error('Component\'s "ref" property should be a function, or an object created by createRef(), but got [' + typeof e.ref + "] instead\n" + d(e));
      if ("string" == typeof e.type) for (var f in e.props) if ("o" === f[0] && "n" === f[1] && "function" != typeof e.props[f] && null != e.props[f]) throw new Error("Component's \"" + f + '" property should be a function, but got [' + typeof e.props[f] + "] instead\n" + d(e));

      if ("function" == typeof e.type && e.type.propTypes) {
        if ("Lazy" === e.type.displayName && !a.lazyPropTypes[e.type]) {
          var h = "PropTypes are not supported on lazy(). Use propTypes on the wrapped component itself. ";

          try {
            var p = e.type();
            a.lazyPropTypes[e.type] = !0, console.warn(h + "Component wrapped in lazy() is " + (p.type.displayName || p.type.name));
          } catch (n) {
            console.warn(h + "We will log the wrapped component's name once it is loaded.");
          }
        }

        t = e.type.propTypes, o = e.props, u = i(e), c = d(e), Object.keys(t).forEach(function (n) {
          var e;

          try {
            e = t[n](o, n, c, u, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
          } catch (n) {
            e = n;
          }

          !e || e.message in r || (r[e.message] = !0, console.error("Failed " + u + " type: " + e.message));
        });
      }

      n && n(e);
    }
  }, _preact.options.__h = function (n) {
    if (!n) throw new Error("Hook can only be invoked from render methods.");
  };

  var u = function (n, e) {
    return {
      get: function () {
        throw new Error("getting vnode." + n + " is deprecated, " + e);
      },
      set: function () {
        throw new Error("setting vnode." + n + " is not allowed, " + e);
      }
    };
  },
      c = {
    nodeName: u("nodeName", "use vnode.type"),
    attributes: u("attributes", "use vnode.props"),
    children: u("children", "use vnode.props.children")
  };

  _preact.options.vnode = function (n) {
    var e, t;
    n.props && n.props.o && (e = n.props.o, delete n.props.o), n.props && n.props.i && (t = n.props.i, delete n.props.i), n.i = t, n.o = e, Object.defineProperties(n, c), o && o(n);
  }, _preact.options.diffed = function (n) {
    if (null != n) {
      if (n.__c && n.__c.u) {
        var t = n.__c.u;
        t.s.forEach(function (e) {
          !e.l || e.h && Array.isArray(e.h) || console.warn("In " + (n.type.name || n.type) + " you are calling useMemo/useCallback without passing arguments.\nThis is a noop since it will not be able to memoize, it will execute it every render.");
        }), t.p.length > 0 && t.p.forEach(function (e) {
          e.h && Array.isArray(e.h) || a.useEffect[n.type] || (a.useEffect[n.type] = !0, console.warn('You should provide an array of arguments as the second argument to the "useEffect" hook.\n\nNot doing so will invoke this effect on every render.\n\nThis effect can be found in the render of ' + (n.type.name || n.type) + "."));
        }), t.v.length > 0 && t.v.forEach(function (e) {
          e.h && Array.isArray(e.h) || a.useLayoutEffect[n.type] || (a.useLayoutEffect[n.type] = !0, console.warn('You should provide an array of arguments as the second argument to the "useLayoutEffect" hook.\n\nNot doing so will invoke this effect on every render.\n\nThis effect can be found in the render of ' + (n.type.name || n.type) + "."));
        });
      }

      if (null != n.__k) for (var r = [], o = 0; o < n.__k.length; o++) {
        var i = n.__k[o];

        if (i && null != i.key) {
          var u = i.key;

          if (-1 !== r.indexOf(u)) {
            console.error('Following component has two or more children with the same key attribute: "' + u + '". This may cause glitches and misbehavior in rendering process. Component: \n\n' + d(n));
            break;
          }

          r.push(u);
        }
      }
      e && e(n);
    }
  };
}(), function () {
  var r = window.__REACT_DEVTOOLS_GLOBAL_HOOK__;

  if (null != r) {
    var o = v,
        i = v,
        a = Math.random().toString(16).slice(2),
        u = new h(r, a);
    p(function () {
      var n = !1;

      try {
        n = "production" !== "development";
      } catch (n) {}

      window.parent.postMessage({
        source: "react-devtools-detector",
        reactBuildType: n ? "development" : "production"
      }, "*");
      var t = {
        bundleType: n ? 1 : 0,
        version: "16.5.2",
        rendererPackageName: "preact",
        findHostInstanceByFiber: function (n) {
          return n.__e;
        },
        findFiberByHostInstance: function (n) {
          return u.inst2vnode.get(n) || null;
        }
      };
      r._renderers[a] = t, Object.defineProperty(r.helpers, a, {
        get: function () {
          return u;
        },
        set: function () {
          u.connected || c.markConnected();
        }
      });
      var c = r.helpers[a];
      r.emit("renderer-attached", {
        id: a,
        renderer: t,
        helpers: c
      }), o = p(function (n) {
        if (n.type !== _preact.Fragment || 0 != n.__k.length) {
          var t = r.getFiberRoots(a);
          n = c.handleCommitFiberRoot(n), t.has(n) || t.add(n);
        }
      }), i = p(function (n) {
        r.onCommitFiberUnmount(a, n);
      });
    })();
    var c = _preact.options.vnode,
        s = _preact.options.__c,
        l = _preact.options.unmount,
        f = _preact.options.__b,
        d = _preact.options.diffed;
    _preact.options.vnode = function (n) {
      n.startTime = NaN, n.endTime = NaN, n.startTime = 0, n.endTime = -1, c && c(n);
    }, _preact.options.__b = function (n) {
      n.startTime = y(), null != f && f(n);
    }, _preact.options.diffed = function (n) {
      n.endTime = y(), null != d && d(n);
    }, _preact.options.__c = p(function (n) {
      null != s && s(n), null != n && o(n);
    }), _preact.options.unmount = p(function (n) {
      null != l && l(n), i(n);
    });
    var m = _preact.Component.prototype.setState;

    _preact.Component.prototype.setState = function (n, e) {
      var t = this.__s !== this.state && this.__s || (this.__s = Object.assign({}, this.state));
      return this.__u = Object.assign({}, t), m.call(this, n, e);
    };
  }
}());
},{"preact":"../node_modules/preact/dist/preact.module.js"}],"../node_modules/preact-router/dist/preact-router.es.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCurrentUrl = getCurrentUrl;
exports.route = route;
exports.default = exports.Link = exports.Route = exports.Router = exports.subscribers = void 0;

var _preact = require("preact");

var EMPTY$1 = {};

function assign(obj, props) {
  // eslint-disable-next-line guard-for-in
  for (var i in props) {
    obj[i] = props[i];
  }

  return obj;
}

function exec(url, route, opts) {
  var reg = /(?:\?([^#]*))?(#.*)?$/,
      c = url.match(reg),
      matches = {},
      ret;

  if (c && c[1]) {
    var p = c[1].split('&');

    for (var i = 0; i < p.length; i++) {
      var r = p[i].split('=');
      matches[decodeURIComponent(r[0])] = decodeURIComponent(r.slice(1).join('='));
    }
  }

  url = segmentize(url.replace(reg, ''));
  route = segmentize(route || '');
  var max = Math.max(url.length, route.length);

  for (var i$1 = 0; i$1 < max; i$1++) {
    if (route[i$1] && route[i$1].charAt(0) === ':') {
      var param = route[i$1].replace(/(^\:|[+*?]+$)/g, ''),
          flags = (route[i$1].match(/[+*?]+$/) || EMPTY$1)[0] || '',
          plus = ~flags.indexOf('+'),
          star = ~flags.indexOf('*'),
          val = url[i$1] || '';

      if (!val && !star && (flags.indexOf('?') < 0 || plus)) {
        ret = false;
        break;
      }

      matches[param] = decodeURIComponent(val);

      if (plus || star) {
        matches[param] = url.slice(i$1).map(decodeURIComponent).join('/');
        break;
      }
    } else if (route[i$1] !== url[i$1]) {
      ret = false;
      break;
    }
  }

  if (opts.default !== true && ret === false) {
    return false;
  }

  return matches;
}

function pathRankSort(a, b) {
  return a.rank < b.rank ? 1 : a.rank > b.rank ? -1 : a.index - b.index;
} // filter out VNodes without attributes (which are unrankeable), and add `index`/`rank` properties to be used in sorting.


function prepareVNodeForRanking(vnode, index) {
  vnode.index = index;
  vnode.rank = rankChild(vnode);
  return vnode.props;
}

function segmentize(url) {
  return url.replace(/(^\/+|\/+$)/g, '').split('/');
}

function rankSegment(segment) {
  return segment.charAt(0) == ':' ? 1 + '*+?'.indexOf(segment.charAt(segment.length - 1)) || 4 : 5;
}

function rank(path) {
  return segmentize(path).map(rankSegment).join('');
}

function rankChild(vnode) {
  return vnode.props.default ? 0 : rank(vnode.props.path);
}

var customHistory = null;
var ROUTERS = [];
var subscribers = [];
exports.subscribers = subscribers;
var EMPTY = {};

function setUrl(url, type) {
  if (type === void 0) type = 'push';

  if (customHistory && customHistory[type]) {
    customHistory[type](url);
  } else if (typeof history !== 'undefined' && history[type + 'State']) {
    history[type + 'State'](null, null, url);
  }
}

function getCurrentUrl() {
  var url;

  if (customHistory && customHistory.location) {
    url = customHistory.location;
  } else if (customHistory && customHistory.getCurrentLocation) {
    url = customHistory.getCurrentLocation();
  } else {
    url = typeof location !== 'undefined' ? location : EMPTY;
  }

  return "" + (url.pathname || '') + (url.search || '');
}

function route(url, replace) {
  if (replace === void 0) replace = false;

  if (typeof url !== 'string' && url.url) {
    replace = url.replace;
    url = url.url;
  } // only push URL into history if we can handle it


  if (canRoute(url)) {
    setUrl(url, replace ? 'replace' : 'push');
  }

  return routeTo(url);
}
/** Check if the given URL can be handled by any router instances. */


function canRoute(url) {
  for (var i = ROUTERS.length; i--;) {
    if (ROUTERS[i].canRoute(url)) {
      return true;
    }
  }

  return false;
}
/** Tell all router instances to handle the given URL.  */


function routeTo(url) {
  var didRoute = false;

  for (var i = 0; i < ROUTERS.length; i++) {
    if (ROUTERS[i].routeTo(url) === true) {
      didRoute = true;
    }
  }

  for (var i$1 = subscribers.length; i$1--;) {
    subscribers[i$1](url);
  }

  return didRoute;
}

function routeFromLink(node) {
  // only valid elements
  if (!node || !node.getAttribute) {
    return;
  }

  var href = node.getAttribute('href'),
      target = node.getAttribute('target'); // ignore links with targets and non-path URLs

  if (!href || !href.match(/^\//g) || target && !target.match(/^_?self$/i)) {
    return;
  } // attempt to route, if no match simply cede control to browser


  return route(href);
}

function handleLinkClick(e) {
  if (e.button == 0) {
    routeFromLink(e.currentTarget || e.target || this);
    return prevent(e);
  }
}

function prevent(e) {
  if (e) {
    if (e.stopImmediatePropagation) {
      e.stopImmediatePropagation();
    }

    if (e.stopPropagation) {
      e.stopPropagation();
    }

    e.preventDefault();
  }

  return false;
}

function delegateLinkHandler(e) {
  // ignore events the browser takes care of already:
  if (e.ctrlKey || e.metaKey || e.altKey || e.shiftKey || e.button !== 0) {
    return;
  }

  var t = e.target;

  do {
    if (String(t.nodeName).toUpperCase() === 'A' && t.getAttribute('href')) {
      if (t.hasAttribute('native')) {
        return;
      } // if link is handled by the router, prevent browser defaults


      if (routeFromLink(t)) {
        return prevent(e);
      }
    }
  } while (t = t.parentNode);
}

var eventListenersInitialized = false;

function initEventListeners() {
  if (eventListenersInitialized) {
    return;
  }

  if (typeof addEventListener === 'function') {
    if (!customHistory) {
      addEventListener('popstate', function () {
        routeTo(getCurrentUrl());
      });
    }

    addEventListener('click', delegateLinkHandler);
  }

  eventListenersInitialized = true;
}

var Router = function (Component$$1) {
  function Router(props) {
    Component$$1.call(this, props);

    if (props.history) {
      customHistory = props.history;
    }

    this.state = {
      url: props.url || getCurrentUrl()
    };
    initEventListeners();
  }

  if (Component$$1) Router.__proto__ = Component$$1;
  Router.prototype = Object.create(Component$$1 && Component$$1.prototype);
  Router.prototype.constructor = Router;

  Router.prototype.shouldComponentUpdate = function shouldComponentUpdate(props) {
    if (props.static !== true) {
      return true;
    }

    return props.url !== this.props.url || props.onChange !== this.props.onChange;
  };
  /** Check if the given URL can be matched against any children */


  Router.prototype.canRoute = function canRoute(url) {
    var children = (0, _preact.toChildArray)(this.props.children);
    return this.getMatchingChildren(children, url, false).length > 0;
  };
  /** Re-render children with a new URL to match against. */


  Router.prototype.routeTo = function routeTo(url) {
    this._didRoute = false;
    this.setState({
      url: url
    }); // if we're in the middle of an update, don't synchronously re-route.

    if (this.updating) {
      return this.canRoute(url);
    }

    this.forceUpdate();
    return this._didRoute;
  };

  Router.prototype.componentWillMount = function componentWillMount() {
    ROUTERS.push(this);
    this.updating = true;
  };

  Router.prototype.componentDidMount = function componentDidMount() {
    var this$1 = this;

    if (customHistory) {
      this.unlisten = customHistory.listen(function (location) {
        this$1.routeTo("" + (location.pathname || '') + (location.search || ''));
      });
    }

    this.updating = false;
  };

  Router.prototype.componentWillUnmount = function componentWillUnmount() {
    if (typeof this.unlisten === 'function') {
      this.unlisten();
    }

    ROUTERS.splice(ROUTERS.indexOf(this), 1);
  };

  Router.prototype.componentWillUpdate = function componentWillUpdate() {
    this.updating = true;
  };

  Router.prototype.componentDidUpdate = function componentDidUpdate() {
    this.updating = false;
  };

  Router.prototype.getMatchingChildren = function getMatchingChildren(children, url, invoke) {
    return children.filter(prepareVNodeForRanking).sort(pathRankSort).map(function (vnode) {
      var matches = exec(url, vnode.props.path, vnode.props);

      if (matches) {
        if (invoke !== false) {
          var newProps = {
            url: url,
            matches: matches
          };
          assign(newProps, matches);
          delete newProps.ref;
          delete newProps.key;
          return (0, _preact.cloneElement)(vnode, newProps);
        }

        return vnode;
      }
    }).filter(Boolean);
  };

  Router.prototype.render = function render(ref, ref$1) {
    var children = ref.children;
    var onChange = ref.onChange;
    var url = ref$1.url;
    var active = this.getMatchingChildren((0, _preact.toChildArray)(children), url, true);
    var current = active[0] || null;
    this._didRoute = !!current;
    var previous = this.previousUrl;

    if (url !== previous) {
      this.previousUrl = url;

      if (typeof onChange === 'function') {
        onChange({
          router: this,
          url: url,
          previous: previous,
          active: active,
          current: current
        });
      }
    }

    return current;
  };

  return Router;
}(_preact.Component);

exports.Router = Router;

var Link = function (props) {
  return (0, _preact.createElement)('a', assign({
    onClick: handleLinkClick
  }, props));
};

exports.Link = Link;

var Route = function (props) {
  return (0, _preact.createElement)(props.component, props);
};

exports.Route = Route;
Router.subscribers = subscribers;
Router.getCurrentUrl = getCurrentUrl;
Router.route = route;
Router.Router = Router;
Router.Route = Route;
Router.Link = Link;
var _default = Router;
exports.default = _default;
},{"preact":"../node_modules/preact/dist/preact.module.js"}],"../node_modules/preact/hooks/dist/hooks.module.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useState = e;
exports.useReducer = a;
exports.useEffect = v;
exports.useLayoutEffect = p;
exports.useRef = d;
exports.useImperativeHandle = l;
exports.useMemo = m;
exports.useCallback = s;
exports.useContext = y;
exports.useDebugValue = _;

var _preact = require("preact");

var t,
    r,
    u = [],
    f = _preact.options.__r;

_preact.options.__r = function (n) {
  f && f(n), t = 0, (r = n.__c).__H && (r.__H.t = q(r.__H.t));
};

var i = _preact.options.diffed;

_preact.options.diffed = function (n) {
  i && i(n);
  var t = n.__c;

  if (t) {
    var r = t.__H;
    r && (r.u = q(r.u));
  }
};

var o = _preact.options.unmount;

function c(t) {
  _preact.options.__h && _preact.options.__h(r);
  var u = r.__H || (r.__H = {
    i: [],
    t: [],
    u: []
  });
  return t >= u.i.length && u.i.push({}), u.i[t];
}

function e(n) {
  return a(L, n);
}

function a(n, u, f) {
  var i = c(t++);
  return i.__c || (i.__c = r, i.o = [f ? f(u) : L(null, u), function (t) {
    var r = n(i.o[0], t);
    i.o[0] !== r && (i.o[0] = r, i.__c.setState({}));
  }]), i.o;
}

function v(n, u) {
  var f = c(t++);
  F(f.v, u) && (f.o = n, f.v = u, r.__H.t.push(f), g(r));
}

function p(n, u) {
  var f = c(t++);
  F(f.v, u) && (f.o = n, f.v = u, r.__H.u.push(f));
}

function d(n) {
  return m(function () {
    return {
      current: n
    };
  }, []);
}

function l(n, r, u) {
  var f = c(t++);
  F(f.v, u) && (f.v = u, n && (n.current = r()));
}

function m(n, r) {
  var u = c(t++);
  return F(u.v, r) ? (u.v = r, u.p = n, u.o = n()) : u.o;
}

function s(n, t) {
  return m(function () {
    return n;
  }, t);
}

function y(n) {
  var u = r.context[n.__c];
  if (!u) return n.__p;
  var f = c(t++);
  return null == f.o && (f.o = !0, u.sub(r)), u.props.value;
}

function _(t, r) {
  _preact.options.useDebugValue && _preact.options.useDebugValue(r ? r(t) : t);
}

_preact.options.unmount = function (n) {
  o && o(n);
  var t = n.__c;

  if (t) {
    var r = t.__H;
    r && r.i.forEach(function (n) {
      return n.l && n.l();
    });
  }
};

var g = function () {};

function w() {
  u.some(function (n) {
    n.m = !1, n.__P && (n.__H.t = q(n.__H.t));
  }), u = [];
}

function E() {
  setTimeout(w);
}

function q(n) {
  return n.forEach(x), n.forEach(A), [];
}

function x(n) {
  n.l && n.l();
}

function A(n) {
  var t = n.o();
  "function" == typeof t && (n.l = t);
}

function F(n, t) {
  return !n || t.some(function (t, r) {
    return t !== n[r];
  });
}

function L(n, t) {
  return "function" == typeof t ? t(n) : t;
}

"undefined" != typeof window && (g = function (t) {
  !t.m && (t.m = !0) && 1 === u.push(t) && (_preact.options.requestAnimationFrame ? _preact.options.requestAnimationFrame(w) : requestAnimationFrame(E));
});
},{"preact":"../node_modules/preact/dist/preact.module.js"}],"../node_modules/preact/compat/dist/compat.module.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  version: true,
  Children: true,
  render: true,
  hydrate: true,
  unmountComponentAtNode: true,
  createPortal: true,
  createElement: true,
  createFactory: true,
  cloneElement: true,
  isValidElement: true,
  findDOMNode: true,
  PureComponent: true,
  memo: true,
  forwardRef: true,
  unstable_batchedUpdates: true,
  Suspense: true,
  lazy: true,
  createContext: true,
  createRef: true,
  Fragment: true,
  Component: true
};
exports.hydrate = exports.render = C;
exports.unmountComponentAtNode = _;
exports.createPortal = E;
exports.createElement = N;
exports.createFactory = x;
exports.cloneElement = S;
exports.isValidElement = O;
exports.findDOMNode = M;
exports.memo = U;
exports.forwardRef = Z;
exports.unstable_batchedUpdates = L;
Object.defineProperty(exports, "createContext", {
  enumerable: true,
  get: function () {
    return _preact.createContext;
  }
});
Object.defineProperty(exports, "createRef", {
  enumerable: true,
  get: function () {
    return _preact.createRef;
  }
});
Object.defineProperty(exports, "Fragment", {
  enumerable: true,
  get: function () {
    return _preact.Fragment;
  }
});
Object.defineProperty(exports, "Component", {
  enumerable: true,
  get: function () {
    return _preact.Component;
  }
});
exports.lazy = exports.Suspense = exports.PureComponent = exports.Children = exports.version = exports.default = void 0;

var n = _interopRequireWildcard(require("preact/hooks"));

Object.keys(n).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return n[key];
    }
  });
});

var _preact = require("preact");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function d(n, t) {
  for (var r in t) n[r] = t[r];

  return n;
}

function h() {
  this.t = [];
}

(h.prototype = new _preact.Component()).o = function (n) {
  var t = this;
  t.t.push(n);

  var r = function () {
    t.t[t.t.indexOf(n)] = t.t[t.t.length - 1], t.t.pop(), 0 == t.t.length && ((0, _preact._unmount)(t.props.fallback), t.__v.__e = null, t.__v.__k = t.state.i, t.setState({
      i: null
    }));
  };

  null == t.state.i && (t.setState({
    i: t.__v.__k
  }), function n(t) {
    for (var r = 0; r < t.length; r++) {
      var e = t[r];
      null != e && ("function" != typeof e.type && e.__e ? (i = void 0, (i = (o = e.__e).parentNode) && i.removeChild(o)) : e.__k && n(e.__k));
    }

    var o, i;
  }(t.__v.__k), t.__v.__k = []), n.then(r, r);
}, h.prototype.render = function (n, t) {
  return t.i ? n.fallback : n.children;
};
var p = "16.8.0",
    m = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103,
    y = /^(?:accent|alignment|arabic|baseline|cap|clip|color|fill|flood|font|glyph|horiz|marker|overline|paint|stop|strikethrough|stroke|text|underline|unicode|units|v|vector|vert|word|writing|x)[A-Z]/,
    b = _preact.options.event;
exports.version = p;

_preact.options.event = function (n) {
  return b && (n = b(n)), n.persist = function () {}, n.nativeEvent = n;
};

var g = _preact.options.__E;

function x(n) {
  return N.bind(null, n);
}

function C(n, t, r) {
  return (0, _preact.render)(n, t), "function" == typeof r && r(), n ? n.__c : null;
}

_preact.options.__E = function (n, t, r) {
  return g && g(n, t, r) || function (n, t, r) {
    if (n.then) for (var e, o = t; o; o = o.__p) if ((e = o.__c) && e.o) return r && (t.__e = r.__e, t.__k = r.__k), e.o(n), !0;
    return !1;
  }(n, t, r);
};

var w = function () {};

function k(n) {
  var t = (0, _preact.h)(w, {
    context: this.context
  }, n.vnode),
      r = n.container;
  return n.container !== this.container && ((0, _preact.hydrate)("", r), this.container = r), C(t, r), this.componentWillUnmount = function () {
    C(null, r);
  }, null;
}

function E(n, t) {
  return (0, _preact.h)(k, {
    vnode: n,
    container: t
  });
}

w.prototype.getChildContext = function () {
  return this.props.context;
}, w.prototype.render = function (n) {
  return n.children;
};

var A = function (n, t) {
  return n ? (0, _preact.toChildArray)(n).map(t) : null;
},
    F = {
  map: A,
  forEach: A,
  count: function (n) {
    return n ? (0, _preact.toChildArray)(n).length : 0;
  },
  only: function (n) {
    if (1 !== (n = (0, _preact.toChildArray)(n)).length) throw new Error("Children.only() expects only one child.");
    return n[0];
  },
  toArray: _preact.toChildArray
};

exports.Children = F;

function N() {
  for (var n = [], t = arguments.length; t--;) n[t] = arguments[t];

  var r = _preact.h.apply(void 0, n),
      e = r.type,
      o = r.props;

  return "function" != typeof e && (o.defaultValue && (o.value || 0 === o.value || (o.value = o.defaultValue), delete o.defaultValue), Array.isArray(o.value) && o.multiple && "select" === e && ((0, _preact.toChildArray)(o.children).forEach(function (n) {
    -1 != o.value.indexOf(n.props.value) && (n.props.selected = !0);
  }), delete o.value), function (n, t) {
    var r, e, o;

    for (o in t) if (r = y.test(o)) break;

    if (r) for (o in e = n.props = {}, t) e[y.test(o) ? o.replace(/([A-Z0-9])/, "-$1").toLowerCase() : o] = t[o];
  }(r, o)), r.preactCompatNormalized = !1, R(r);
}

function R(n) {
  return n.preactCompatNormalized = !0, function (n) {
    var t = n.props;
    (t.class || t.className) && (j.enumerable = "className" in t, t.className && (t.class = t.className), Object.defineProperty(t, "className", j));
  }(n), n;
}

function S(n) {
  if (!O(n)) return n;
  var t = R(_preact.cloneElement.apply(null, arguments));
  return t.$$typeof = m, t;
}

function O(n) {
  return !!n && n.$$typeof === m;
}

function _(n) {
  return !!n.__k && ((0, _preact.render)(null, n), !0);
}

var j = {
  configurable: !0,
  get: function () {
    return this.class;
  }
};

function z(n, t) {
  for (var r in n) if (!(r in t)) return !0;

  for (var e in t) if (n[e] !== t[e]) return !0;

  return !1;
}

function M(n) {
  return n && (n.base || 1 === n.nodeType && n) || null;
}

var P = function (n) {
  function t(t) {
    n.call(this, t), this.isPureReactComponent = !0;
  }

  return n && (t.__proto__ = n), (t.prototype = Object.create(n && n.prototype)).constructor = t, t.prototype.shouldComponentUpdate = function (n, t) {
    return z(this.props, n) || z(this.state, t);
  }, t;
}(_preact.Component);

exports.PureComponent = P;

function U(n, t) {
  function r(n) {
    var r = this.props.ref,
        e = r == n.ref;
    return e || (r.call ? r(null) : r.current = null), (t ? !t(this.props, n) : z(this.props, n)) || !e;
  }

  function e(t) {
    return this.shouldComponentUpdate = r, (0, _preact.h)(n, d({}, t));
  }

  return e.displayName = "Memo(" + (n.displayName || n.name) + ")", e.u = !0, e;
}

function W(n, t) {
  Object.defineProperty(n.prototype, "UNSAFE_" + t, {
    configurable: !0,
    get: function () {
      return this[t];
    },
    set: function (n) {
      this[t] = n;
    }
  });
}

function Z(n) {
  function t(t) {
    var r = t.ref;
    return delete t.ref, n(t, r);
  }

  return t.u = !0, t.displayName = "ForwardRef(" + (n.displayName || n.name) + ")", t;
}

_preact.Component.prototype.isReactComponent = {}, W(_preact.Component, "componentWillMount"), W(_preact.Component, "componentWillReceiveProps"), W(_preact.Component, "componentWillUpdate");
var D = _preact.options.vnode;

function L(n, t) {
  n(t);
}

_preact.options.vnode = function (n) {
  n.$$typeof = m, function (t) {
    var r = n.type,
        e = n.props;

    if (e && "string" == typeof r) {
      var o = {};

      for (var i in e) o[i.toLowerCase()] = i;

      if (o.ondoubleclick && (e.ondblclick = e[o.ondoubleclick], delete e[o.ondoubleclick]), o.onbeforeinput && (e.onbeforeinput = e[o.onbeforeinput], delete e[o.onbeforeinput]), o.onchange && ("textarea" === r || "input" === r.toLowerCase() && !/^fil|che|rad/i.test(e.type))) {
        var u = o.oninput || "oninput";
        e[u] || (e[u] = e[o.onchange], delete e[o.onchange]);
      }
    }
  }();
  var t = n.type;
  t && t.u && n.ref && (n.props.ref = n.ref, n.ref = null), D && D(n);
};

var V = h,
    $ = function (n) {
  var t, e, o;

  function i(i) {
    if (t || (t = n()).then(function (n) {
      e = n.default;
    }, function (n) {
      o = n;
    }), o) throw o;
    if (!e) throw t;
    return (0, _preact.createElement)(e, i);
  }

  return i.displayName = "Lazy", i;
};

exports.lazy = $;
exports.Suspense = V;

var _default = d({
  version: "16.8.0",
  Children: F,
  render: C,
  hydrate: C,
  unmountComponentAtNode: _,
  createPortal: E,
  createElement: N,
  createContext: _preact.createContext,
  createFactory: x,
  cloneElement: S,
  createRef: _preact.createRef,
  Fragment: _preact.Fragment,
  isValidElement: O,
  findDOMNode: M,
  Component: _preact.Component,
  PureComponent: P,
  memo: U,
  forwardRef: Z,
  unstable_batchedUpdates: L
}, n);

exports.default = _default;
},{"preact/hooks":"../node_modules/preact/hooks/dist/hooks.module.js","preact":"../node_modules/preact/dist/preact.module.js"}],"../node_modules/classnames/index.js":[function(require,module,exports) {
var define;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {
		// register as 'classnames', consistent with npm package name
		define('classnames', [], function () {
			return classNames;
		});
	} else {
		window.classNames = classNames;
	}
}());

},{}],"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"app/components/footer.less":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"app/components/footer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _preact = require("preact");

require("./footer.less");

const Footer = ({
  appVersion
}) => (0, _preact.h)("footer", null, (0, _preact.h)("strong", null, "MDWiki 3.", appVersion), "\xA0-\xA0Copyright 2018 by Jan Baer");

var _default = Footer;
exports.default = _default;
},{"preact":"../node_modules/preact/dist/preact.module.js","./footer.less":"app/components/footer.less"}],"app/components/app-title.less":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"app/components/app-title.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _preact = require("preact");

require("./app-title.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LogoSvg = function LogoSvg(props) {
  return (0, _preact.h)("svg", props, (0, _preact.h)("path", {
    d: "M141.657 103.538c5.277 66.026 16.797 129.944 51.198 191.49l13.01.097 82.29-73.42-78.434-198.2-56.54 54.01-11.524 26.023z",
    fill: "#fdfcf8",
    fillRule: "evenodd"
  }), (0, _preact.h)("path", {
    d: "M75.84 103.608c5.278 66.025 18.78 130.786 53.18 192.331l20.335.183 61.968-77.718-67.418-194.829-56.54 54.008-11.524 26.025z",
    fill: "#f4eed7",
    fillRule: "evenodd"
  }), (0, _preact.h)("path", {
    d: "M.219 102.194c5.377 69.284 27.015 131.34 52.459 191.705l26.802-.33 70.4-80.038L68.284 22.16l-56.54 54.01L.219 102.193z",
    fill: "#e9ddaf",
    fillRule: "evenodd"
  }), (0, _preact.h)("path", {
    d: "M213.327 4.063c-27.187 26.301-54.062 52.374-54.062 52.374l9.656 19.657C182.015 63.113 195.182 51.696 207.733 39c26.434 58.035 44.445 104.812 66.599 166.647 7.253 20.088 5.774 20.987-11.563 31.844-27.854 13.851-36.672 22.937-69.87 58.259h22.718c27.754-25.092 38.056-33.947 72.809-52.26 12.294-7.097 13.98-16.058 8.937-30-16.261-45.196-51.49-142.605-84.036-209.428z",
    fill: "#5f96d3"
  }), (0, _preact.h)("path", {
    d: "M142.452 4.688C122.565 18.111 107.224 37.431 89.921 54l7.094 22.625c13.54-10.67 25.325-23.536 37.5-35.719l65.656 164.688c3.786 11.15-2.176 21.072-14.156 31.875-14.35 11.532-43.893 38.42-57.282 58.906h20.375c21.385-21.966 25.246-24.947 49.594-46.031 16.347-16.679 31.114-25.221 23.406-46.594L142.452 4.687z",
    fill: "#2a62a1",
    fillRule: "evenodd"
  }), (0, _preact.h)("path", {
    d: "M75.327 3.625c-5.301 1.78-9.712 5.198-13.844 8.813C5.395 66.41 3.14 68.688 3.14 68.688.188 71.43-.058 75.44-.017 79.468l.236 22.726s25.904-25.181 64.577-62.413C85.614 94.02 107.341 147.968 128.733 202c2.93 8.163-4.082 14.853-12.968 23.781-12.274 11.974-37.945 36.622-64.219 69.531H77.89l63.312-69.437c6.02-8.278 13.503-16.371 10.344-23.875L75.327 3.625z",
    fill: "#15304f",
    fillRule: "evenodd"
  }));
};

LogoSvg.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  version: "1",
  width: "300",
  height: "300",
  viewBox: "0 0 300 300"
};

const AppTitle = () => {
  return (0, _preact.h)("a", {
    href: "/",
    title: "MDWiki"
  }, (0, _preact.h)(LogoSvg, {
    class: "AppTitle-logoSvg"
  }));
};

var _default = AppTitle;
exports.default = _default;
},{"react":"../node_modules/preact/compat/dist/compat.module.js","preact":"../node_modules/preact/dist/preact.module.js","./app-title.less":"app/components/app-title.less"}],"app/components/navbar-button.less":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"app/components/navbar-button.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _preact = require("preact");

require("./navbar-button.less");

const NavbarButton = ({
  children,
  title,
  onClick
}) => {
  return (0, _preact.h)("button", {
    class: "NavbarButton-button",
    title: title,
    onClick: onClick
  }, children);
};

var _default = NavbarButton;
exports.default = _default;
},{"preact":"../node_modules/preact/dist/preact.module.js","./navbar-button.less":"app/components/navbar-button.less"}],"app/services/navigator.service.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _preactRouter = require("preact-router");

class NavigatorService {
  gotoHome() {
    (0, _preactRouter.route)('/');
  }

  gotoConnect(token) {
    let path = '/connect';

    if (token) {
      path += `?token=${token}`;
    }

    (0, _preactRouter.route)(path);
  }

  gotoSearch(searchTerm) {
    let path = '/search';

    if (searchTerm) {
      path += `?q=${searchTerm}`;
    }

    (0, _preactRouter.route)(path);
  }

  gotoPage(pageName) {
    (0, _preactRouter.route)(`/?page=${pageName}`);
  }

}

var _default = new NavigatorService();

exports.default = _default;
},{"preact-router":"../node_modules/preact-router/dist/preact-router.es.js"}],"app/components/connect-button.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _preact = require("preact");

var _navbarButton = _interopRequireDefault(require("./navbar-button"));

var _navigator = _interopRequireDefault(require("~/app/services/navigator.service"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GithubSvg = function GithubSvg(props) {
  return (0, _preact.h)("svg", props, (0, _preact.h)("path", {
    d: "M145.66 0C65.219 0 0 65.219 0 145.66c0 80.45 65.219 145.66 145.66 145.66s145.66-65.21 145.66-145.66C291.319 65.219 226.1 0 145.66 0zm40.802 256.625c-.838-11.398-1.775-25.518-1.83-31.235-.364-4.388-.838-15.549-11.434-22.677 42.068-3.523 62.087-26.774 63.526-57.499 1.202-17.497-5.754-32.883-18.107-45.3.628-13.282-.401-29.023-1.256-35.941-9.486-2.731-31.608 8.949-37.79 13.947-13.037-5.062-44.945-6.837-64.336 0-13.747-9.668-29.396-15.64-37.926-13.974-7.875 17.452-2.813 33.948-1.275 35.914-10.142 9.268-24.289 20.675-20.447 44.572 6.163 35.04 30.816 53.94 70.508 58.564-8.466 1.73-9.896 8.048-10.606 10.788-26.656 10.997-34.275-6.791-37.644-11.425-11.188-13.847-21.23-9.832-21.849-9.614-.601.218-1.056 1.092-.992 1.511.564 2.986 6.655 6.018 6.955 6.263 8.257 6.154 11.316 17.27 13.2 20.438 11.844 19.473 39.374 11.398 39.638 11.562.018 1.702-.191 16.032-.355 27.184C64.245 245.992 27.311 200.2 27.311 145.66c0-65.365 52.984-118.348 118.348-118.348S264.008 80.295 264.008 145.66c0 51.008-32.318 94.332-77.546 110.965z"
  }));
};

GithubSvg.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 291.32 291.32"
};

const ConnectButton = () => {
  return (0, _preact.h)(_navbarButton.default, {
    title: "Connect to a GitHub repository",
    onClick: () => _navigator.default.gotoConnect()
  }, (0, _preact.h)(GithubSvg, null));
};

var _default = ConnectButton;
exports.default = _default;
},{"react":"../node_modules/preact/compat/dist/compat.module.js","preact":"../node_modules/preact/dist/preact.module.js","./navbar-button":"app/components/navbar-button.js","~/app/services/navigator.service":"app/services/navigator.service.js"}],"app/components/login-button.less":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"app/components/login-button.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _preact = require("preact");

var _preactRouter = require("preact-router");

var _navbarButton = _interopRequireDefault(require("./navbar-button"));

require("./login-button.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const LoginButton = ({
  user = {}
}) => {
  return (0, _preact.h)(_navbarButton.default, {
    title: `Your're logged in as ${user.userName}`,
    onClick: () => (0, _preactRouter.route)('/connect?logout')
  }, (0, _preact.h)("img", {
    class: "LoginButton-userImage",
    src: user.avatarUrl,
    alt: user.userName
  }));
};

var _default = LoginButton;
exports.default = _default;
},{"preact":"../node_modules/preact/dist/preact.module.js","preact-router":"../node_modules/preact-router/dist/preact-router.es.js","./navbar-button":"app/components/navbar-button.js","./login-button.less":"app/components/login-button.less"}],"app/components/sidebar-button.less":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"app/components/sidebar-button.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _preact = require("preact");

require("./sidebar-button.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HamburgerMenuSvg = function HamburgerMenuSvg(props) {
  return (0, _preact.h)("svg", props, (0, _preact.h)("path", {
    d: "M4 10h24a2 2 0 0 0 0-4H4a2 2 0 0 0 0 4zm24 4H4a2 2 0 0 0 0 4h24a2 2 0 0 0 0-4zm0 8H4a2 2 0 0 0 0 4h24a2 2 0 0 0 0-4z"
  }));
};

HamburgerMenuSvg.defaultProps = {
  height: "32",
  viewBox: "0 0 32 32",
  width: "32",
  xmlns: "http://www.w3.org/2000/svg"
};

const SidebarButton = ({
  showSidebar,
  onClick
}) => {
  return (0, _preact.h)("button", {
    class: "SidebarButton-button",
    title: "Add",
    onClick: onClick
  }, (0, _preact.h)(HamburgerMenuSvg, null));
};

var _default = SidebarButton;
exports.default = _default;
},{"react":"../node_modules/preact/compat/dist/compat.module.js","preact":"../node_modules/preact/dist/preact.module.js","./sidebar-button.less":"app/components/sidebar-button.less"}],"app/components/search-box.less":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"app/components/search-box.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _preact = require("preact");

var _hooks = require("preact/hooks");

require("./search-box.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SearchSvg = function SearchSvg(props) {
  return (0, _preact.h)("svg", props, (0, _preact.h)("path", {
    d: "M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
  }), (0, _preact.h)("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }));
};

SearchSvg.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

const SearchBox = ({
  onSearch
}) => {
  const [searchTerm, setSearchTerm] = (0, _hooks.useState)('');

  function onInputKeyDown(e) {
    if (e.code === 'Enter') {
      onSearch(e.target.value);
    }
  }

  return (0, _preact.h)("div", {
    class: "Searchbox-container"
  }, (0, _preact.h)("button", {
    title: "Search",
    onClick: () => onSearch(searchTerm)
  }, (0, _preact.h)(SearchSvg, null)), (0, _preact.h)("input", {
    type: "text",
    name: "search",
    placeholder: "Type here to search...",
    class: "search-text",
    onChange: e => setSearchTerm(e.target.value),
    onKeyDown: onInputKeyDown,
    value: searchTerm
  }));
};

var _default = SearchBox;
exports.default = _default;
},{"react":"../node_modules/preact/compat/dist/compat.module.js","preact":"../node_modules/preact/dist/preact.module.js","preact/hooks":"../node_modules/preact/hooks/dist/hooks.module.js","./search-box.less":"app/components/search-box.less"}],"app/helpers/page-grouper.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = groupPages;

function groupPages(pages) {
  return pages.reduce((groups, page) => {
    const currentGroup = groups.length > 0 ? groups[groups.length - 1] : undefined;
    const firstLetter = page.name.substr(0, 1).toUpperCase();

    if (!currentGroup || currentGroup.letter !== firstLetter) {
      groups.push({
        letter: firstLetter,
        pages: [page]
      });
    } else {
      currentGroup.pages.push(page);
    }

    return groups;
  }, []);
}
},{}],"app/pages/home/components/sidebar.less":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"app/pages/home/components/sidebar.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _preact = require("preact");

var _pageGrouper = _interopRequireDefault(require("~/app/helpers/page-grouper"));

require("./sidebar.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Sidebar extends _preact.Component {
  constructor(props) {
    super(props);
    this.renderPageEntry = this.renderPageEntry.bind(this);
    this.renderGroup = this.renderGroup.bind(this);
    this.renderGroupLink = this.renderGroupLink.bind(this);
    this.scrollTo = this.scrollTo.bind(this);
  }

  gotoPage(page) {
    this.props.onClick(page.name);
  }

  scrollTo(e) {
    e.preventDefault();
    document.querySelector(`#group${e.target.innerText}`).scrollIntoView({
      behavior: 'smooth'
    });
  }

  renderPageEntry(page) {
    return (0, _preact.h)("li", null, (0, _preact.h)("button", {
      onClick: () => this.gotoPage(page)
    }, page.name));
  }

  renderGroup(group) {
    return (0, _preact.h)("div", null, (0, _preact.h)("h4", {
      id: `group${group.letter}`,
      class: "Sidebar-pageGroupHeader"
    }, group.letter), (0, _preact.h)("ul", {
      class: "Sidebar-list"
    }, group.pages.map(this.renderPageEntry)));
  }

  renderGroupLink(group) {
    return (0, _preact.h)("a", {
      href: "#",
      onClick: this.scrollTo
    }, group.letter);
  }

  render({
    pages
  }, state) {
    const groups = (0, _pageGrouper.default)(pages);
    return (0, _preact.h)("div", {
      class: "Sidebar-listContainer"
    }, (0, _preact.h)("div", {
      class: "Sidebar-groupLinkContainer"
    }, groups.map(this.renderGroupLink)), groups.map(this.renderGroup));
  }

}

exports.default = Sidebar;
},{"preact":"../node_modules/preact/dist/preact.module.js","~/app/helpers/page-grouper":"app/helpers/page-grouper.js","./sidebar.less":"app/pages/home/components/sidebar.less"}],"../node_modules/xtend/immutable.js":[function(require,module,exports) {
module.exports = extend;
var hasOwnProperty = Object.prototype.hasOwnProperty;

function extend() {
  var target = {};

  for (var i = 0; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
}
},{}],"../node_modules/extend/index.js":[function(require,module,exports) {
'use strict';

var hasOwn = Object.prototype.hasOwnProperty;
var toStr = Object.prototype.toString;
var defineProperty = Object.defineProperty;
var gOPD = Object.getOwnPropertyDescriptor;

var isArray = function isArray(arr) {
	if (typeof Array.isArray === 'function') {
		return Array.isArray(arr);
	}

	return toStr.call(arr) === '[object Array]';
};

var isPlainObject = function isPlainObject(obj) {
	if (!obj || toStr.call(obj) !== '[object Object]') {
		return false;
	}

	var hasOwnConstructor = hasOwn.call(obj, 'constructor');
	var hasIsPrototypeOf = obj.constructor && obj.constructor.prototype && hasOwn.call(obj.constructor.prototype, 'isPrototypeOf');
	// Not own constructor property must be Object
	if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) {
		return false;
	}

	// Own properties are enumerated firstly, so to speed up,
	// if last one is own, then all properties are own.
	var key;
	for (key in obj) { /**/ }

	return typeof key === 'undefined' || hasOwn.call(obj, key);
};

// If name is '__proto__', and Object.defineProperty is available, define __proto__ as an own property on target
var setProperty = function setProperty(target, options) {
	if (defineProperty && options.name === '__proto__') {
		defineProperty(target, options.name, {
			enumerable: true,
			configurable: true,
			value: options.newValue,
			writable: true
		});
	} else {
		target[options.name] = options.newValue;
	}
};

// Return undefined instead of __proto__ if '__proto__' is not an own property
var getProperty = function getProperty(obj, name) {
	if (name === '__proto__') {
		if (!hasOwn.call(obj, name)) {
			return void 0;
		} else if (gOPD) {
			// In early versions of node, obj['__proto__'] is buggy when obj has
			// __proto__ as an own property. Object.getOwnPropertyDescriptor() works.
			return gOPD(obj, name).value;
		}
	}

	return obj[name];
};

module.exports = function extend() {
	var options, name, src, copy, copyIsArray, clone;
	var target = arguments[0];
	var i = 1;
	var length = arguments.length;
	var deep = false;

	// Handle a deep copy situation
	if (typeof target === 'boolean') {
		deep = target;
		target = arguments[1] || {};
		// skip the boolean and the target
		i = 2;
	}
	if (target == null || (typeof target !== 'object' && typeof target !== 'function')) {
		target = {};
	}

	for (; i < length; ++i) {
		options = arguments[i];
		// Only deal with non-null/undefined values
		if (options != null) {
			// Extend the base object
			for (name in options) {
				src = getProperty(target, name);
				copy = getProperty(options, name);

				// Prevent never-ending loop
				if (target !== copy) {
					// Recurse if we're merging plain objects or arrays
					if (deep && copy && (isPlainObject(copy) || (copyIsArray = isArray(copy)))) {
						if (copyIsArray) {
							copyIsArray = false;
							clone = src && isArray(src) ? src : [];
						} else {
							clone = src && isPlainObject(src) ? src : {};
						}

						// Never move original objects, clone them
						setProperty(target, { name: name, newValue: extend(deep, clone, copy) });

					// Don't bring in undefined values
					} else if (typeof copy !== 'undefined') {
						setProperty(target, { name: name, newValue: copy });
					}
				}
			}
		}
	}

	// Return the modified object
	return target;
};

},{}],"../node_modules/bail/index.js":[function(require,module,exports) {
'use strict'

module.exports = bail

function bail(err) {
  if (err) {
    throw err
  }
}

},{}],"../node_modules/unist-util-stringify-position/index.js":[function(require,module,exports) {
'use strict'

var own = {}.hasOwnProperty

module.exports = stringify

function stringify(value) {
  /* Nothing. */
  if (!value || typeof value !== 'object') {
    return null
  }

  /* Node. */
  if (own.call(value, 'position') || own.call(value, 'type')) {
    return position(value.position)
  }

  /* Position. */
  if (own.call(value, 'start') || own.call(value, 'end')) {
    return position(value)
  }

  /* Point. */
  if (own.call(value, 'line') || own.call(value, 'column')) {
    return point(value)
  }

  /* ? */
  return null
}

function point(point) {
  if (!point || typeof point !== 'object') {
    point = {}
  }

  return index(point.line) + ':' + index(point.column)
}

function position(pos) {
  if (!pos || typeof pos !== 'object') {
    pos = {}
  }

  return point(pos.start) + '-' + point(pos.end)
}

function index(value) {
  return value && typeof value === 'number' ? value : 1
}

},{}],"../node_modules/vfile-message/index.js":[function(require,module,exports) {
'use strict'

var stringify = require('unist-util-stringify-position')

module.exports = VMessage

// Inherit from `Error#`.
function VMessagePrototype() {}
VMessagePrototype.prototype = Error.prototype
VMessage.prototype = new VMessagePrototype()

// Message properties.
var proto = VMessage.prototype

proto.file = ''
proto.name = ''
proto.reason = ''
proto.message = ''
proto.stack = ''
proto.fatal = null
proto.column = null
proto.line = null

// Construct a new VMessage.
//
// Note: We cannot invoke `Error` on the created context, as that adds readonly
// `line` and `column` attributes on Safari 9, thus throwing and failing the
// data.
function VMessage(reason, position, origin) {
  var parts
  var range
  var location

  if (typeof position === 'string') {
    origin = position
    position = null
  }

  parts = parseOrigin(origin)
  range = stringify(position) || '1:1'

  location = {
    start: {line: null, column: null},
    end: {line: null, column: null}
  }

  // Node.
  if (position && position.position) {
    position = position.position
  }

  if (position) {
    // Position.
    if (position.start) {
      location = position
      position = position.start
    } else {
      // Point.
      location.start = position
    }
  }

  if (reason.stack) {
    this.stack = reason.stack
    reason = reason.message
  }

  this.message = reason
  this.name = range
  this.reason = reason
  this.line = position ? position.line : null
  this.column = position ? position.column : null
  this.location = location
  this.source = parts[0]
  this.ruleId = parts[1]
}

function parseOrigin(origin) {
  var result = [null, null]
  var index

  if (typeof origin === 'string') {
    index = origin.indexOf(':')

    if (index === -1) {
      result[1] = origin
    } else {
      result[0] = origin.slice(0, index)
      result[1] = origin.slice(index + 1)
    }
  }

  return result
}

},{"unist-util-stringify-position":"../node_modules/unist-util-stringify-position/index.js"}],"../node_modules/process/browser.js":[function(require,module,exports) {

// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}

(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }

  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}

var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }

  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;

  while (len) {
    currentQueue = queue;
    queue = [];

    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(fun, args));

  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}; // v8 likes predictible objects


function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};

process.title = 'browser';
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues

process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};
},{}],"../node_modules/path-browserify/index.js":[function(require,module,exports) {
var process = require("process");
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.
var splitPathRe =
    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
var splitPath = function(filename) {
  return splitPathRe.exec(filename).slice(1);
};

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function(path) {
  var result = splitPath(path),
      root = result[0],
      dir = result[1];

  if (!root && !dir) {
    // No dirname whatsoever
    return '.';
  }

  if (dir) {
    // It has a dirname, strip trailing slash
    dir = dir.substr(0, dir.length - 1);
  }

  return root + dir;
};


exports.basename = function(path, ext) {
  var f = splitPath(path)[2];
  // TODO: make this comparison case-insensitive on windows?
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};


exports.extname = function(path) {
  return splitPath(path)[3];
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

},{"process":"../node_modules/process/browser.js"}],"../node_modules/replace-ext/index.js":[function(require,module,exports) {
'use strict';

var path = require('path');

function replaceExt(npath, ext) {
  if (typeof npath !== 'string') {
    return npath;
  }

  if (npath.length === 0) {
    return npath;
  }

  var nFileName = path.basename(npath, path.extname(npath)) + ext;
  return path.join(path.dirname(npath), nFileName);
}

module.exports = replaceExt;
},{"path":"../node_modules/path-browserify/index.js"}],"../node_modules/is-buffer/index.js":[function(require,module,exports) {
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}

},{}],"../node_modules/vfile/core.js":[function(require,module,exports) {
var process = require("process");
'use strict';

var path = require('path');
var replace = require('replace-ext');
var buffer = require('is-buffer');

module.exports = VFile;

var own = {}.hasOwnProperty;
var proto = VFile.prototype;

proto.toString = toString;

/* Order of setting (least specific to most), we need this because
 * otherwise `{stem: 'a', path: '~/b.js'}` would throw, as a path
 * is needed before a stem can be set. */
var order = [
  'history',
  'path',
  'basename',
  'stem',
  'extname',
  'dirname'
];

/* Construct a new file. */
function VFile(options) {
  var prop;
  var index;
  var length;

  if (!options) {
    options = {};
  } else if (typeof options === 'string' || buffer(options)) {
    options = {contents: options};
  } else if ('message' in options && 'messages' in options) {
    return options;
  }

  if (!(this instanceof VFile)) {
    return new VFile(options);
  }

  this.data = {};
  this.messages = [];
  this.history = [];
  this.cwd = process.cwd();

  /* Set path related properties in the correct order. */
  index = -1;
  length = order.length;

  while (++index < length) {
    prop = order[index];

    if (own.call(options, prop)) {
      this[prop] = options[prop];
    }
  }

  /* Set non-path related properties. */
  for (prop in options) {
    if (order.indexOf(prop) === -1) {
      this[prop] = options[prop];
    }
  }
}

/* Access full path (`~/index.min.js`). */
Object.defineProperty(proto, 'path', {
  get: function () {
    return this.history[this.history.length - 1];
  },
  set: function (path) {
    assertNonEmpty(path, 'path');

    if (path !== this.path) {
      this.history.push(path);
    }
  }
});

/* Access parent path (`~`). */
Object.defineProperty(proto, 'dirname', {
  get: function () {
    return typeof this.path === 'string' ? path.dirname(this.path) : undefined;
  },
  set: function (dirname) {
    assertPath(this.path, 'dirname');
    this.path = path.join(dirname || '', this.basename);
  }
});

/* Access basename (`index.min.js`). */
Object.defineProperty(proto, 'basename', {
  get: function () {
    return typeof this.path === 'string' ? path.basename(this.path) : undefined;
  },
  set: function (basename) {
    assertNonEmpty(basename, 'basename');
    assertPart(basename, 'basename');
    this.path = path.join(this.dirname || '', basename);
  }
});

/* Access extname (`.js`). */
Object.defineProperty(proto, 'extname', {
  get: function () {
    return typeof this.path === 'string' ? path.extname(this.path) : undefined;
  },
  set: function (extname) {
    var ext = extname || '';

    assertPart(ext, 'extname');
    assertPath(this.path, 'extname');

    if (ext) {
      if (ext.charAt(0) !== '.') {
        throw new Error('`extname` must start with `.`');
      }

      if (ext.indexOf('.', 1) !== -1) {
        throw new Error('`extname` cannot contain multiple dots');
      }
    }

    this.path = replace(this.path, ext);
  }
});

/* Access stem (`index.min`). */
Object.defineProperty(proto, 'stem', {
  get: function () {
    return typeof this.path === 'string' ? path.basename(this.path, this.extname) : undefined;
  },
  set: function (stem) {
    assertNonEmpty(stem, 'stem');
    assertPart(stem, 'stem');
    this.path = path.join(this.dirname || '', stem + (this.extname || ''));
  }
});

/* Get the value of the file. */
function toString(encoding) {
  var value = this.contents || '';
  return buffer(value) ? value.toString(encoding) : String(value);
}

/* Assert that `part` is not a path (i.e., does
 * not contain `path.sep`). */
function assertPart(part, name) {
  if (part.indexOf(path.sep) !== -1) {
    throw new Error('`' + name + '` cannot be a path: did not expect `' + path.sep + '`');
  }
}

/* Assert that `part` is not empty. */
function assertNonEmpty(part, name) {
  if (!part) {
    throw new Error('`' + name + '` cannot be empty');
  }
}

/* Assert `path` exists. */
function assertPath(path, name) {
  if (!path) {
    throw new Error('Setting `' + name + '` requires `path` to be set too');
  }
}

},{"path":"../node_modules/path-browserify/index.js","replace-ext":"../node_modules/replace-ext/index.js","is-buffer":"../node_modules/is-buffer/index.js","process":"../node_modules/process/browser.js"}],"../node_modules/vfile/index.js":[function(require,module,exports) {
'use strict';

var VMessage = require('vfile-message');
var VFile = require('./core.js');

module.exports = VFile;

var proto = VFile.prototype;

proto.message = message;
proto.info = info;
proto.fail = fail;

/* Slight backwards compatibility.  Remove in the future. */
proto.warn = message;

/* Create a message with `reason` at `position`.
 * When an error is passed in as `reason`, copies the stack. */
function message(reason, position, origin) {
  var filePath = this.path;
  var message = new VMessage(reason, position, origin);

  if (filePath) {
    message.name = filePath + ':' + message.name;
    message.file = filePath;
  }

  message.fatal = false;

  this.messages.push(message);

  return message;
}

/* Fail. Creates a vmessage, associates it with the file,
 * and throws it. */
function fail() {
  var message = this.message.apply(this, arguments);

  message.fatal = true;

  throw message;
}

/* Info. Creates a vmessage, associates it with the file,
 * and marks the fatality as null. */
function info() {
  var message = this.message.apply(this, arguments);

  message.fatal = null;

  return message;
}

},{"vfile-message":"../node_modules/vfile-message/index.js","./core.js":"../node_modules/vfile/core.js"}],"../node_modules/trough/wrap.js":[function(require,module,exports) {
'use strict'

var slice = [].slice

module.exports = wrap

/* Wrap `fn`.  Can be sync or async; return a promise,
 * receive a completion handler, return new values and
 * errors. */
function wrap(fn, callback) {
  var invoked

  return wrapped

  function wrapped() {
    var params = slice.call(arguments, 0)
    var callback = fn.length > params.length
    var result

    if (callback) {
      params.push(done)
    }

    try {
      result = fn.apply(null, params)
    } catch (err) {
      /* Well, this is quite the pickle.  `fn` received
       * a callback and invoked it (thus continuing the
       * pipeline), but later also threw an error.
       * We’re not about to restart the pipeline again,
       * so the only thing left to do is to throw the
       * thing instea. */
      if (callback && invoked) {
        throw err
      }

      return done(err)
    }

    if (!callback) {
      if (result && typeof result.then === 'function') {
        result.then(then, done)
      } else if (result instanceof Error) {
        done(result)
      } else {
        then(result)
      }
    }
  }

  /* Invoke `next`, only once. */
  function done() {
    if (!invoked) {
      invoked = true

      callback.apply(null, arguments)
    }
  }

  /* Invoke `done` with one value.
   * Tracks if an error is passed, too. */
  function then(value) {
    done(null, value)
  }
}

},{}],"../node_modules/trough/index.js":[function(require,module,exports) {
'use strict'

var wrap = require('./wrap.js')

module.exports = trough

trough.wrap = wrap

var slice = [].slice

/* Create new middleware. */
function trough() {
  var fns = []
  var middleware = {}

  middleware.run = run
  middleware.use = use

  return middleware

  /* Run `fns`.  Last argument must be
   * a completion handler. */
  function run() {
    var index = -1
    var input = slice.call(arguments, 0, -1)
    var done = arguments[arguments.length - 1]

    if (typeof done !== 'function') {
      throw new Error('Expected function as last argument, not ' + done)
    }

    next.apply(null, [null].concat(input))

    /* Run the next `fn`, if any. */
    function next(err) {
      var fn = fns[++index]
      var params = slice.call(arguments, 0)
      var values = params.slice(1)
      var length = input.length
      var pos = -1

      if (err) {
        done(err)
        return
      }

      /* Copy non-nully input into values. */
      while (++pos < length) {
        if (values[pos] === null || values[pos] === undefined) {
          values[pos] = input[pos]
        }
      }

      input = values

      /* Next or done. */
      if (fn) {
        wrap(fn, next).apply(null, input)
      } else {
        done.apply(null, [null].concat(input))
      }
    }
  }

  /* Add `fn` to the list. */
  function use(fn) {
    if (typeof fn !== 'function') {
      throw new Error('Expected `fn` to be a function, not ' + fn)
    }

    fns.push(fn)

    return middleware
  }
}

},{"./wrap.js":"../node_modules/trough/wrap.js"}],"../node_modules/x-is-string/index.js":[function(require,module,exports) {
var toString = Object.prototype.toString

module.exports = isString

function isString(obj) {
    return toString.call(obj) === "[object String]"
}

},{}],"../node_modules/is-plain-obj/index.js":[function(require,module,exports) {
'use strict';

var toString = Object.prototype.toString;

module.exports = function (x) {
  var prototype;
  return toString.call(x) === '[object Object]' && (prototype = Object.getPrototypeOf(x), prototype === null || prototype === Object.getPrototypeOf({}));
};
},{}],"../node_modules/unified/index.js":[function(require,module,exports) {
var process = require("process");
'use strict'

/* Dependencies. */
var extend = require('extend')
var bail = require('bail')
var vfile = require('vfile')
var trough = require('trough')
var string = require('x-is-string')
var plain = require('is-plain-obj')

/* Expose a frozen processor. */
module.exports = unified().freeze()

var slice = [].slice
var own = {}.hasOwnProperty

/* Process pipeline. */
var pipeline = trough()
  .use(pipelineParse)
  .use(pipelineRun)
  .use(pipelineStringify)

function pipelineParse(p, ctx) {
  ctx.tree = p.parse(ctx.file)
}

function pipelineRun(p, ctx, next) {
  p.run(ctx.tree, ctx.file, done)

  function done(err, tree, file) {
    if (err) {
      next(err)
    } else {
      ctx.tree = tree
      ctx.file = file
      next()
    }
  }
}

function pipelineStringify(p, ctx) {
  ctx.file.contents = p.stringify(ctx.tree, ctx.file)
}

/* Function to create the first processor. */
function unified() {
  var attachers = []
  var transformers = trough()
  var namespace = {}
  var frozen = false
  var freezeIndex = -1

  /* Data management. */
  processor.data = data

  /* Lock. */
  processor.freeze = freeze

  /* Plug-ins. */
  processor.attachers = attachers
  processor.use = use

  /* API. */
  processor.parse = parse
  processor.stringify = stringify
  processor.run = run
  processor.runSync = runSync
  processor.process = process
  processor.processSync = processSync

  /* Expose. */
  return processor

  /* Create a new processor based on the processor
   * in the current scope. */
  function processor() {
    var destination = unified()
    var length = attachers.length
    var index = -1

    while (++index < length) {
      destination.use.apply(null, attachers[index])
    }

    destination.data(extend(true, {}, namespace))

    return destination
  }

  /* Freeze: used to signal a processor that has finished
   * configuration.
   *
   * For example, take unified itself.  It’s frozen.
   * Plug-ins should not be added to it.  Rather, it should
   * be extended, by invoking it, before modifying it.
   *
   * In essence, always invoke this when exporting a
   * processor. */
  function freeze() {
    var values
    var plugin
    var options
    var transformer

    if (frozen) {
      return processor
    }

    while (++freezeIndex < attachers.length) {
      values = attachers[freezeIndex]
      plugin = values[0]
      options = values[1]
      transformer = null

      if (options === false) {
        continue
      }

      if (options === true) {
        values[1] = undefined
      }

      transformer = plugin.apply(processor, values.slice(1))

      if (typeof transformer === 'function') {
        transformers.use(transformer)
      }
    }

    frozen = true
    freezeIndex = Infinity

    return processor
  }

  /* Data management.
   * Getter / setter for processor-specific informtion. */
  function data(key, value) {
    if (string(key)) {
      /* Set `key`. */
      if (arguments.length === 2) {
        assertUnfrozen('data', frozen)

        namespace[key] = value

        return processor
      }

      /* Get `key`. */
      return (own.call(namespace, key) && namespace[key]) || null
    }

    /* Set space. */
    if (key) {
      assertUnfrozen('data', frozen)
      namespace = key
      return processor
    }

    /* Get space. */
    return namespace
  }

  /* Plug-in management.
   *
   * Pass it:
   * *   an attacher and options,
   * *   a preset,
   * *   a list of presets, attachers, and arguments (list
   *     of attachers and options). */
  function use(value) {
    var settings

    assertUnfrozen('use', frozen)

    if (value === null || value === undefined) {
      /* Empty */
    } else if (typeof value === 'function') {
      addPlugin.apply(null, arguments)
    } else if (typeof value === 'object') {
      if ('length' in value) {
        addList(value)
      } else {
        addPreset(value)
      }
    } else {
      throw new Error('Expected usable value, not `' + value + '`')
    }

    if (settings) {
      namespace.settings = extend(namespace.settings || {}, settings)
    }

    return processor

    function addPreset(result) {
      addList(result.plugins)

      if (result.settings) {
        settings = extend(settings || {}, result.settings)
      }
    }

    function add(value) {
      if (typeof value === 'function') {
        addPlugin(value)
      } else if (typeof value === 'object') {
        if ('length' in value) {
          addPlugin.apply(null, value)
        } else {
          addPreset(value)
        }
      } else {
        throw new Error('Expected usable value, not `' + value + '`')
      }
    }

    function addList(plugins) {
      var length
      var index

      if (plugins === null || plugins === undefined) {
        /* Empty */
      } else if (typeof plugins === 'object' && 'length' in plugins) {
        length = plugins.length
        index = -1

        while (++index < length) {
          add(plugins[index])
        }
      } else {
        throw new Error('Expected a list of plugins, not `' + plugins + '`')
      }
    }

    function addPlugin(plugin, value) {
      var entry = find(plugin)

      if (entry) {
        if (plain(entry[1]) && plain(value)) {
          value = extend(entry[1], value)
        }

        entry[1] = value
      } else {
        attachers.push(slice.call(arguments))
      }
    }
  }

  function find(plugin) {
    var length = attachers.length
    var index = -1
    var entry

    while (++index < length) {
      entry = attachers[index]

      if (entry[0] === plugin) {
        return entry
      }
    }
  }

  /* Parse a file (in string or VFile representation)
   * into a Unist node using the `Parser` on the
   * processor. */
  function parse(doc) {
    var file = vfile(doc)
    var Parser

    freeze()
    Parser = processor.Parser
    assertParser('parse', Parser)

    if (newable(Parser)) {
      return new Parser(String(file), file).parse()
    }

    return Parser(String(file), file) // eslint-disable-line new-cap
  }

  /* Run transforms on a Unist node representation of a file
   * (in string or VFile representation), async. */
  function run(node, file, cb) {
    assertNode(node)
    freeze()

    if (!cb && typeof file === 'function') {
      cb = file
      file = null
    }

    if (!cb) {
      return new Promise(executor)
    }

    executor(null, cb)

    function executor(resolve, reject) {
      transformers.run(node, vfile(file), done)

      function done(err, tree, file) {
        tree = tree || node
        if (err) {
          reject(err)
        } else if (resolve) {
          resolve(tree)
        } else {
          cb(null, tree, file)
        }
      }
    }
  }

  /* Run transforms on a Unist node representation of a file
   * (in string or VFile representation), sync. */
  function runSync(node, file) {
    var complete = false
    var result

    run(node, file, done)

    assertDone('runSync', 'run', complete)

    return result

    function done(err, tree) {
      complete = true
      bail(err)
      result = tree
    }
  }

  /* Stringify a Unist node representation of a file
   * (in string or VFile representation) into a string
   * using the `Compiler` on the processor. */
  function stringify(node, doc) {
    var file = vfile(doc)
    var Compiler

    freeze()
    Compiler = processor.Compiler
    assertCompiler('stringify', Compiler)
    assertNode(node)

    if (newable(Compiler)) {
      return new Compiler(node, file).compile()
    }

    return Compiler(node, file) // eslint-disable-line new-cap
  }

  /* Parse a file (in string or VFile representation)
   * into a Unist node using the `Parser` on the processor,
   * then run transforms on that node, and compile the
   * resulting node using the `Compiler` on the processor,
   * and store that result on the VFile. */
  function process(doc, cb) {
    freeze()
    assertParser('process', processor.Parser)
    assertCompiler('process', processor.Compiler)

    if (!cb) {
      return new Promise(executor)
    }

    executor(null, cb)

    function executor(resolve, reject) {
      var file = vfile(doc)

      pipeline.run(processor, {file: file}, done)

      function done(err) {
        if (err) {
          reject(err)
        } else if (resolve) {
          resolve(file)
        } else {
          cb(null, file)
        }
      }
    }
  }

  /* Process the given document (in string or VFile
   * representation), sync. */
  function processSync(doc) {
    var complete = false
    var file

    freeze()
    assertParser('processSync', processor.Parser)
    assertCompiler('processSync', processor.Compiler)
    file = vfile(doc)

    process(file, done)

    assertDone('processSync', 'process', complete)

    return file

    function done(err) {
      complete = true
      bail(err)
    }
  }
}

/* Check if `func` is a constructor. */
function newable(value) {
  return typeof value === 'function' && keys(value.prototype)
}

/* Check if `value` is an object with keys. */
function keys(value) {
  var key
  for (key in value) {
    return true
  }
  return false
}

/* Assert a parser is available. */
function assertParser(name, Parser) {
  if (typeof Parser !== 'function') {
    throw new Error('Cannot `' + name + '` without `Parser`')
  }
}

/* Assert a compiler is available. */
function assertCompiler(name, Compiler) {
  if (typeof Compiler !== 'function') {
    throw new Error('Cannot `' + name + '` without `Compiler`')
  }
}

/* Assert the processor is not frozen. */
function assertUnfrozen(name, frozen) {
  if (frozen) {
    throw new Error(
      [
        'Cannot invoke `' + name + '` on a frozen processor.\nCreate a new ',
        'processor first, by invoking it: use `processor()` instead of ',
        '`processor`.'
      ].join('')
    )
  }
}

/* Assert `node` is a Unist node. */
function assertNode(node) {
  if (!node || !string(node.type)) {
    throw new Error('Expected node, got `' + node + '`')
  }
}

/* Assert that `complete` is `true`. */
function assertDone(name, asyncName, complete) {
  if (!complete) {
    throw new Error(
      '`' + name + '` finished async. Use `' + asyncName + '` instead'
    )
  }
}

},{"extend":"../node_modules/extend/index.js","bail":"../node_modules/bail/index.js","vfile":"../node_modules/vfile/index.js","trough":"../node_modules/trough/index.js","x-is-string":"../node_modules/x-is-string/index.js","is-plain-obj":"../node_modules/is-plain-obj/index.js","process":"../node_modules/process/browser.js"}],"../node_modules/inherits/inherits_browser.js":[function(require,module,exports) {
if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}

},{}],"../node_modules/unherit/index.js":[function(require,module,exports) {
'use strict'

var xtend = require('xtend')
var inherits = require('inherits')

module.exports = unherit

/* Create a custom constructor which can be modified
 * without affecting the original class. */
function unherit(Super) {
  var result
  var key
  var value

  inherits(Of, Super)
  inherits(From, Of)

  /* Clone values. */
  result = Of.prototype

  for (key in result) {
    value = result[key]

    if (value && typeof value === 'object') {
      result[key] = 'concat' in value ? value.concat() : xtend(value)
    }
  }

  return Of

  /* Constructor accepting a single argument,
   * which itself is an `arguments` object. */
  function From(parameters) {
    return Super.apply(this, parameters)
  }

  /* Constructor accepting variadic arguments. */
  function Of() {
    if (!(this instanceof Of)) {
      return new From(arguments)
    }

    return Super.apply(this, arguments)
  }
}

},{"xtend":"../node_modules/xtend/immutable.js","inherits":"../node_modules/inherits/inherits_browser.js"}],"../node_modules/state-toggle/index.js":[function(require,module,exports) {
'use strict'

module.exports = factory

/* Construct a state `toggler`: a function which inverses
 * `property` in context based on its current value.
 * The by `toggler` returned function restores that value. */
function factory(key, state, ctx) {
  return enter

  function enter() {
    var context = ctx || this
    var current = context[key]

    context[key] = !state

    return exit

    function exit() {
      context[key] = current
    }
  }
}

},{}],"../node_modules/vfile-location/index.js":[function(require,module,exports) {
'use strict'

module.exports = factory

function factory(file) {
  var contents = indices(String(file))

  return {
    toPosition: offsetToPositionFactory(contents),
    toOffset: positionToOffsetFactory(contents)
  }
}

// Factory to get the line and column-based `position` for `offset` in the bound
// indices.
function offsetToPositionFactory(indices) {
  return offsetToPosition

  // Get the line and column-based `position` for `offset` in the bound indices.
  function offsetToPosition(offset) {
    var index = -1
    var length = indices.length

    if (offset < 0) {
      return {}
    }

    while (++index < length) {
      if (indices[index] > offset) {
        return {
          line: index + 1,
          column: offset - (indices[index - 1] || 0) + 1,
          offset: offset
        }
      }
    }

    return {}
  }
}

// Factory to get the `offset` for a line and column-based `position` in the
// bound indices.
function positionToOffsetFactory(indices) {
  return positionToOffset

  // Get the `offset` for a line and column-based `position` in the bound
  // indices.
  function positionToOffset(position) {
    var line = position && position.line
    var column = position && position.column

    if (!isNaN(line) && !isNaN(column) && line - 1 in indices) {
      return (indices[line - 2] || 0) + column - 1 || 0
    }

    return -1
  }
}

// Get indices of line-breaks in `value`.
function indices(value) {
  var result = []
  var index = value.indexOf('\n')

  while (index !== -1) {
    result.push(index + 1)
    index = value.indexOf('\n', index + 1)
  }

  result.push(value.length + 1)

  return result
}

},{}],"../node_modules/remark-parse/lib/unescape.js":[function(require,module,exports) {
'use strict';

module.exports = factory;

/* Factory to de-escape a value, based on a list at `key`
 * in `ctx`. */
function factory(ctx, key) {
  return unescape;

  /* De-escape a string using the expression at `key`
   * in `ctx`. */
  function unescape(value) {
    var prev = 0;
    var index = value.indexOf('\\');
    var escape = ctx[key];
    var queue = [];
    var character;

    while (index !== -1) {
      queue.push(value.slice(prev, index));
      prev = index + 1;
      character = value.charAt(prev);

      /* If the following character is not a valid escape,
       * add the slash. */
      if (!character || escape.indexOf(character) === -1) {
        queue.push('\\');
      }

      index = value.indexOf('\\', prev);
    }

    queue.push(value.slice(prev));

    return queue.join('');
  }
}

},{}],"../node_modules/character-entities-legacy/index.json":[function(require,module,exports) {
module.exports = {
  "AElig": "Æ",
  "AMP": "&",
  "Aacute": "Á",
  "Acirc": "Â",
  "Agrave": "À",
  "Aring": "Å",
  "Atilde": "Ã",
  "Auml": "Ä",
  "COPY": "©",
  "Ccedil": "Ç",
  "ETH": "Ð",
  "Eacute": "É",
  "Ecirc": "Ê",
  "Egrave": "È",
  "Euml": "Ë",
  "GT": ">",
  "Iacute": "Í",
  "Icirc": "Î",
  "Igrave": "Ì",
  "Iuml": "Ï",
  "LT": "<",
  "Ntilde": "Ñ",
  "Oacute": "Ó",
  "Ocirc": "Ô",
  "Ograve": "Ò",
  "Oslash": "Ø",
  "Otilde": "Õ",
  "Ouml": "Ö",
  "QUOT": "\"",
  "REG": "®",
  "THORN": "Þ",
  "Uacute": "Ú",
  "Ucirc": "Û",
  "Ugrave": "Ù",
  "Uuml": "Ü",
  "Yacute": "Ý",
  "aacute": "á",
  "acirc": "â",
  "acute": "´",
  "aelig": "æ",
  "agrave": "à",
  "amp": "&",
  "aring": "å",
  "atilde": "ã",
  "auml": "ä",
  "brvbar": "¦",
  "ccedil": "ç",
  "cedil": "¸",
  "cent": "¢",
  "copy": "©",
  "curren": "¤",
  "deg": "°",
  "divide": "÷",
  "eacute": "é",
  "ecirc": "ê",
  "egrave": "è",
  "eth": "ð",
  "euml": "ë",
  "frac12": "½",
  "frac14": "¼",
  "frac34": "¾",
  "gt": ">",
  "iacute": "í",
  "icirc": "î",
  "iexcl": "¡",
  "igrave": "ì",
  "iquest": "¿",
  "iuml": "ï",
  "laquo": "«",
  "lt": "<",
  "macr": "¯",
  "micro": "µ",
  "middot": "·",
  "nbsp": " ",
  "not": "¬",
  "ntilde": "ñ",
  "oacute": "ó",
  "ocirc": "ô",
  "ograve": "ò",
  "ordf": "ª",
  "ordm": "º",
  "oslash": "ø",
  "otilde": "õ",
  "ouml": "ö",
  "para": "¶",
  "plusmn": "±",
  "pound": "£",
  "quot": "\"",
  "raquo": "»",
  "reg": "®",
  "sect": "§",
  "shy": "­",
  "sup1": "¹",
  "sup2": "²",
  "sup3": "³",
  "szlig": "ß",
  "thorn": "þ",
  "times": "×",
  "uacute": "ú",
  "ucirc": "û",
  "ugrave": "ù",
  "uml": "¨",
  "uuml": "ü",
  "yacute": "ý",
  "yen": "¥",
  "yuml": "ÿ"
}
;
},{}],"../node_modules/character-reference-invalid/index.json":[function(require,module,exports) {
module.exports = {
  "0": "�",
  "128": "€",
  "130": "‚",
  "131": "ƒ",
  "132": "„",
  "133": "…",
  "134": "†",
  "135": "‡",
  "136": "ˆ",
  "137": "‰",
  "138": "Š",
  "139": "‹",
  "140": "Œ",
  "142": "Ž",
  "145": "‘",
  "146": "’",
  "147": "“",
  "148": "”",
  "149": "•",
  "150": "–",
  "151": "—",
  "152": "˜",
  "153": "™",
  "154": "š",
  "155": "›",
  "156": "œ",
  "158": "ž",
  "159": "Ÿ"
}
;
},{}],"../node_modules/is-decimal/index.js":[function(require,module,exports) {
'use strict'

module.exports = decimal

/* Check if the given character code, or the character
 * code at the first character, is decimal. */
function decimal(character) {
  var code = typeof character === 'string' ? character.charCodeAt(0) : character

  return code >= 48 && code <= 57 /* 0-9 */
}

},{}],"../node_modules/is-hexadecimal/index.js":[function(require,module,exports) {
'use strict'

module.exports = hexadecimal

/* Check if the given character code, or the character
 * code at the first character, is hexadecimal. */
function hexadecimal(character) {
  var code = typeof character === 'string' ? character.charCodeAt(0) : character

  return (
    (code >= 97 /* a */ && code <= 102) /* z */ ||
    (code >= 65 /* A */ && code <= 70) /* Z */ ||
    (code >= 48 /* A */ && code <= 57) /* Z */
  )
}

},{}],"../node_modules/is-alphabetical/index.js":[function(require,module,exports) {
'use strict'

module.exports = alphabetical

/* Check if the given character code, or the character
 * code at the first character, is alphabetical. */
function alphabetical(character) {
  var code = typeof character === 'string' ? character.charCodeAt(0) : character

  return (
    (code >= 97 && code <= 122) /* a-z */ ||
    (code >= 65 && code <= 90) /* A-Z */
  )
}

},{}],"../node_modules/is-alphanumerical/index.js":[function(require,module,exports) {
'use strict'

var alphabetical = require('is-alphabetical')
var decimal = require('is-decimal')

module.exports = alphanumerical

/* Check if the given character code, or the character
 * code at the first character, is alphanumerical. */
function alphanumerical(character) {
  return alphabetical(character) || decimal(character)
}

},{"is-alphabetical":"../node_modules/is-alphabetical/index.js","is-decimal":"../node_modules/is-decimal/index.js"}],"../node_modules/parse-entities/decode-entity.browser.js":[function(require,module,exports) {
'use strict'

/* eslint-env browser */

var el

module.exports = decodeEntity

function decodeEntity(characters) {
  var entity = '&' + characters + ';'
  var char

  el = el || document.createElement('i')
  el.innerHTML = entity
  char = el.textContent

  // Some entities do not require the closing semicolon (&not - for instance),
  // which leads to situations where parsing the assumed entity of &notit; will
  // result in the string `¬it;`.  When we encounter a trailing semicolon after
  // parsing and the entity to decode was not a semicolon (&semi;), we can
  // assume that the matching was incomplete
  if (char.slice(-1) === ';' && characters !== 'semi') {
    return false
  }

  // If the decoded string is equal to the input, the entity was not valid
  return char === entity ? false : char
}

},{}],"../node_modules/parse-entities/index.js":[function(require,module,exports) {
'use strict'

var legacy = require('character-entities-legacy')
var invalid = require('character-reference-invalid')
var decimal = require('is-decimal')
var hexadecimal = require('is-hexadecimal')
var alphanumerical = require('is-alphanumerical')
var decodeEntity = require('./decode-entity')

module.exports = parseEntities

var own = {}.hasOwnProperty
var fromCharCode = String.fromCharCode
var noop = Function.prototype

/* Default settings. */
var defaults = {
  warning: null,
  reference: null,
  text: null,
  warningContext: null,
  referenceContext: null,
  textContext: null,
  position: {},
  additional: null,
  attribute: false,
  nonTerminated: true
}

/* Reference types. */
var NAMED = 'named'
var HEXADECIMAL = 'hexadecimal'
var DECIMAL = 'decimal'

/* Map of bases. */
var BASE = {}

BASE[HEXADECIMAL] = 16
BASE[DECIMAL] = 10

/* Map of types to tests. Each type of character reference
 * accepts different characters. This test is used to
 * detect whether a reference has ended (as the semicolon
 * is not strictly needed). */
var TESTS = {}

TESTS[NAMED] = alphanumerical
TESTS[DECIMAL] = decimal
TESTS[HEXADECIMAL] = hexadecimal

/* Warning messages. */
var NAMED_NOT_TERMINATED = 1
var NUMERIC_NOT_TERMINATED = 2
var NAMED_EMPTY = 3
var NUMERIC_EMPTY = 4
var NAMED_UNKNOWN = 5
var NUMERIC_DISALLOWED = 6
var NUMERIC_PROHIBITED = 7

var MESSAGES = {}

MESSAGES[NAMED_NOT_TERMINATED] =
  'Named character references must be terminated by a semicolon'
MESSAGES[NUMERIC_NOT_TERMINATED] =
  'Numeric character references must be terminated by a semicolon'
MESSAGES[NAMED_EMPTY] = 'Named character references cannot be empty'
MESSAGES[NUMERIC_EMPTY] = 'Numeric character references cannot be empty'
MESSAGES[NAMED_UNKNOWN] = 'Named character references must be known'
MESSAGES[NUMERIC_DISALLOWED] =
  'Numeric character references cannot be disallowed'
MESSAGES[NUMERIC_PROHIBITED] =
  'Numeric character references cannot be outside the permissible Unicode range'

/* Wrap to ensure clean parameters are given to `parse`. */
function parseEntities(value, options) {
  var settings = {}
  var option
  var key

  if (!options) {
    options = {}
  }

  for (key in defaults) {
    option = options[key]
    settings[key] =
      option === null || option === undefined ? defaults[key] : option
  }

  if (settings.position.indent || settings.position.start) {
    settings.indent = settings.position.indent || []
    settings.position = settings.position.start
  }

  return parse(value, settings)
}

/* Parse entities. */
function parse(value, settings) {
  var additional = settings.additional
  var nonTerminated = settings.nonTerminated
  var handleText = settings.text
  var handleReference = settings.reference
  var handleWarning = settings.warning
  var textContext = settings.textContext
  var referenceContext = settings.referenceContext
  var warningContext = settings.warningContext
  var pos = settings.position
  var indent = settings.indent || []
  var length = value.length
  var index = 0
  var lines = -1
  var column = pos.column || 1
  var line = pos.line || 1
  var queue = ''
  var result = []
  var entityCharacters
  var namedEntity
  var terminated
  var characters
  var character
  var reference
  var following
  var warning
  var reason
  var output
  var entity
  var begin
  var start
  var type
  var test
  var prev
  var next
  var diff
  var end

  /* Cache the current point. */
  prev = now()

  /* Wrap `handleWarning`. */
  warning = handleWarning ? parseError : noop

  /* Ensure the algorithm walks over the first character
   * and the end (inclusive). */
  index--
  length++

  while (++index < length) {
    /* If the previous character was a newline. */
    if (character === '\n') {
      column = indent[lines] || 1
    }

    character = at(index)

    /* Handle anything other than an ampersand,
     * including newlines and EOF. */
    if (character !== '&') {
      if (character === '\n') {
        line++
        lines++
        column = 0
      }

      if (character) {
        queue += character
        column++
      } else {
        flush()
      }
    } else {
      following = at(index + 1)

      /* The behaviour depends on the identity of the next
       * character. */
      if (
        following === '\t' /* Tab */ ||
        following === '\n' /* Newline */ ||
        following === '\f' /* Form feed */ ||
        following === ' ' /* Space */ ||
        following === '<' /* Less-than */ ||
        following === '&' /* Ampersand */ ||
        following === '' ||
        (additional && following === additional)
      ) {
        /* Not a character reference. No characters
         * are consumed, and nothing is returned.
         * This is not an error, either. */
        queue += character
        column++

        continue
      }

      start = index + 1
      begin = start
      end = start

      /* Numerical entity. */
      if (following !== '#') {
        type = NAMED
      } else {
        end = ++begin

        /* The behaviour further depends on the
         * character after the U+0023 NUMBER SIGN. */
        following = at(end)

        if (following === 'x' || following === 'X') {
          /* ASCII hex digits. */
          type = HEXADECIMAL
          end = ++begin
        } else {
          /* ASCII digits. */
          type = DECIMAL
        }
      }

      entityCharacters = ''
      entity = ''
      characters = ''
      test = TESTS[type]
      end--

      while (++end < length) {
        following = at(end)

        if (!test(following)) {
          break
        }

        characters += following

        /* Check if we can match a legacy named
         * reference.  If so, we cache that as the
         * last viable named reference.  This
         * ensures we do not need to walk backwards
         * later. */
        if (type === NAMED && own.call(legacy, characters)) {
          entityCharacters = characters
          entity = legacy[characters]
        }
      }

      terminated = at(end) === ';'

      if (terminated) {
        end++

        namedEntity = type === NAMED ? decodeEntity(characters) : false

        if (namedEntity) {
          entityCharacters = characters
          entity = namedEntity
        }
      }

      diff = 1 + end - start

      if (!terminated && !nonTerminated) {
        /* Empty. */
      } else if (!characters) {
        /* An empty (possible) entity is valid, unless
         * its numeric (thus an ampersand followed by
         * an octothorp). */
        if (type !== NAMED) {
          warning(NUMERIC_EMPTY, diff)
        }
      } else if (type === NAMED) {
        /* An ampersand followed by anything
         * unknown, and not terminated, is invalid. */
        if (terminated && !entity) {
          warning(NAMED_UNKNOWN, 1)
        } else {
          /* If theres something after an entity
           * name which is not known, cap the
           * reference. */
          if (entityCharacters !== characters) {
            end = begin + entityCharacters.length
            diff = 1 + end - begin
            terminated = false
          }

          /* If the reference is not terminated,
           * warn. */
          if (!terminated) {
            reason = entityCharacters ? NAMED_NOT_TERMINATED : NAMED_EMPTY

            if (!settings.attribute) {
              warning(reason, diff)
            } else {
              following = at(end)

              if (following === '=') {
                warning(reason, diff)
                entity = null
              } else if (alphanumerical(following)) {
                entity = null
              } else {
                warning(reason, diff)
              }
            }
          }
        }

        reference = entity
      } else {
        if (!terminated) {
          /* All non-terminated numeric entities are
           * not rendered, and trigger a warning. */
          warning(NUMERIC_NOT_TERMINATED, diff)
        }

        /* When terminated and number, parse as
         * either hexadecimal or decimal. */
        reference = parseInt(characters, BASE[type])

        /* Trigger a warning when the parsed number
         * is prohibited, and replace with
         * replacement character. */
        if (prohibited(reference)) {
          warning(NUMERIC_PROHIBITED, diff)
          reference = '\uFFFD'
        } else if (reference in invalid) {
          /* Trigger a warning when the parsed number
           * is disallowed, and replace by an
           * alternative. */
          warning(NUMERIC_DISALLOWED, diff)
          reference = invalid[reference]
        } else {
          /* Parse the number. */
          output = ''

          /* Trigger a warning when the parsed
           * number should not be used. */
          if (disallowed(reference)) {
            warning(NUMERIC_DISALLOWED, diff)
          }

          /* Stringify the number. */
          if (reference > 0xffff) {
            reference -= 0x10000
            output += fromCharCode((reference >>> (10 & 0x3ff)) | 0xd800)
            reference = 0xdc00 | (reference & 0x3ff)
          }

          reference = output + fromCharCode(reference)
        }
      }

      /* If we could not find a reference, queue the
       * checked characters (as normal characters),
       * and move the pointer to their end. This is
       * possible because we can be certain neither
       * newlines nor ampersands are included. */
      if (!reference) {
        characters = value.slice(start - 1, end)
        queue += characters
        column += characters.length
        index = end - 1
      } else {
        /* Found it! First eat the queued
         * characters as normal text, then eat
         * an entity. */
        flush()

        prev = now()
        index = end - 1
        column += end - start + 1
        result.push(reference)
        next = now()
        next.offset++

        if (handleReference) {
          handleReference.call(
            referenceContext,
            reference,
            {start: prev, end: next},
            value.slice(start - 1, end)
          )
        }

        prev = next
      }
    }
  }

  /* Return the reduced nodes, and any possible warnings. */
  return result.join('')

  /* Get current position. */
  function now() {
    return {
      line: line,
      column: column,
      offset: index + (pos.offset || 0)
    }
  }

  /* “Throw” a parse-error: a warning. */
  function parseError(code, offset) {
    var position = now()

    position.column += offset
    position.offset += offset

    handleWarning.call(warningContext, MESSAGES[code], position, code)
  }

  /* Get character at position. */
  function at(position) {
    return value.charAt(position)
  }

  /* Flush `queue` (normal text). Macro invoked before
   * each entity and at the end of `value`.
   * Does nothing when `queue` is empty. */
  function flush() {
    if (queue) {
      result.push(queue)

      if (handleText) {
        handleText.call(textContext, queue, {start: prev, end: now()})
      }

      queue = ''
    }
  }
}

/* Check if `character` is outside the permissible unicode range. */
function prohibited(code) {
  return (code >= 0xd800 && code <= 0xdfff) || code > 0x10ffff
}

/* Check if `character` is disallowed. */
function disallowed(code) {
  return (
    (code >= 0x0001 && code <= 0x0008) ||
    code === 0x000b ||
    (code >= 0x000d && code <= 0x001f) ||
    (code >= 0x007f && code <= 0x009f) ||
    (code >= 0xfdd0 && code <= 0xfdef) ||
    (code & 0xffff) === 0xffff ||
    (code & 0xffff) === 0xfffe
  )
}

},{"character-entities-legacy":"../node_modules/character-entities-legacy/index.json","character-reference-invalid":"../node_modules/character-reference-invalid/index.json","is-decimal":"../node_modules/is-decimal/index.js","is-hexadecimal":"../node_modules/is-hexadecimal/index.js","is-alphanumerical":"../node_modules/is-alphanumerical/index.js","./decode-entity":"../node_modules/parse-entities/decode-entity.browser.js"}],"../node_modules/remark-parse/lib/decode.js":[function(require,module,exports) {
'use strict';

var xtend = require('xtend');
var entities = require('parse-entities');

module.exports = factory;

/* Factory to create an entity decoder. */
function factory(ctx) {
  decoder.raw = decodeRaw;

  return decoder;

  /* Normalize `position` to add an `indent`. */
  function normalize(position) {
    var offsets = ctx.offset;
    var line = position.line;
    var result = [];

    while (++line) {
      if (!(line in offsets)) {
        break;
      }

      result.push((offsets[line] || 0) + 1);
    }

    return {
      start: position,
      indent: result
    };
  }

  /* Handle a warning.
   * See https://github.com/wooorm/parse-entities
   * for the warnings. */
  function handleWarning(reason, position, code) {
    if (code === 3) {
      return;
    }

    ctx.file.message(reason, position);
  }

  /* Decode `value` (at `position`) into text-nodes. */
  function decoder(value, position, handler) {
    entities(value, {
      position: normalize(position),
      warning: handleWarning,
      text: handler,
      reference: handler,
      textContext: ctx,
      referenceContext: ctx
    });
  }

  /* Decode `value` (at `position`) into a string. */
  function decodeRaw(value, position, options) {
    return entities(value, xtend(options, {
      position: normalize(position),
      warning: handleWarning
    }));
  }
}

},{"xtend":"../node_modules/xtend/immutable.js","parse-entities":"../node_modules/parse-entities/index.js"}],"../node_modules/remark-parse/lib/tokenizer.js":[function(require,module,exports) {
'use strict';

module.exports = factory;

var MERGEABLE_NODES = {
  text: mergeText,
  blockquote: mergeBlockquote
};

/* Check whether a node is mergeable with adjacent nodes. */
function mergeable(node) {
  var start;
  var end;

  if (node.type !== 'text' || !node.position) {
    return true;
  }

  start = node.position.start;
  end = node.position.end;

  /* Only merge nodes which occupy the same size as their
   * `value`. */
  return start.line !== end.line ||
      end.column - start.column === node.value.length;
}

/* Merge two text nodes: `node` into `prev`. */
function mergeText(prev, node) {
  prev.value += node.value;

  return prev;
}

/* Merge two blockquotes: `node` into `prev`, unless in
 * CommonMark mode. */
function mergeBlockquote(prev, node) {
  if (this.options.commonmark) {
    return node;
  }

  prev.children = prev.children.concat(node.children);

  return prev;
}

/* Construct a tokenizer.  This creates both
 * `tokenizeInline` and `tokenizeBlock`. */
function factory(type) {
  return tokenize;

  /* Tokenizer for a bound `type`. */
  function tokenize(value, location) {
    var self = this;
    var offset = self.offset;
    var tokens = [];
    var methods = self[type + 'Methods'];
    var tokenizers = self[type + 'Tokenizers'];
    var line = location.line;
    var column = location.column;
    var index;
    var length;
    var method;
    var name;
    var matched;
    var valueLength;

    /* Trim white space only lines. */
    if (!value) {
      return tokens;
    }

    /* Expose on `eat`. */
    eat.now = now;
    eat.file = self.file;

    /* Sync initial offset. */
    updatePosition('');

    /* Iterate over `value`, and iterate over all
     * tokenizers.  When one eats something, re-iterate
     * with the remaining value.  If no tokenizer eats,
     * something failed (should not happen) and an
     * exception is thrown. */
    while (value) {
      index = -1;
      length = methods.length;
      matched = false;

      while (++index < length) {
        name = methods[index];
        method = tokenizers[name];

        if (
          method &&
          /* istanbul ignore next */ (!method.onlyAtStart || self.atStart) &&
          (!method.notInList || !self.inList) &&
          (!method.notInBlock || !self.inBlock) &&
          (!method.notInLink || !self.inLink)
        ) {
          valueLength = value.length;

          method.apply(self, [eat, value]);

          matched = valueLength !== value.length;

          if (matched) {
            break;
          }
        }
      }

      /* istanbul ignore if */
      if (!matched) {
        self.file.fail(new Error('Infinite loop'), eat.now());
      }
    }

    self.eof = now();

    return tokens;

    /* Update line, column, and offset based on
     * `value`. */
    function updatePosition(subvalue) {
      var lastIndex = -1;
      var index = subvalue.indexOf('\n');

      while (index !== -1) {
        line++;
        lastIndex = index;
        index = subvalue.indexOf('\n', index + 1);
      }

      if (lastIndex === -1) {
        column += subvalue.length;
      } else {
        column = subvalue.length - lastIndex;
      }

      if (line in offset) {
        if (lastIndex !== -1) {
          column += offset[line];
        } else if (column <= offset[line]) {
          column = offset[line] + 1;
        }
      }
    }

    /* Get offset.  Called before the first character is
     * eaten to retrieve the range's offsets. */
    function getOffset() {
      var indentation = [];
      var pos = line + 1;

      /* Done.  Called when the last character is
       * eaten to retrieve the range’s offsets. */
      return function () {
        var last = line + 1;

        while (pos < last) {
          indentation.push((offset[pos] || 0) + 1);

          pos++;
        }

        return indentation;
      };
    }

    /* Get the current position. */
    function now() {
      var pos = {line: line, column: column};

      pos.offset = self.toOffset(pos);

      return pos;
    }

    /* Store position information for a node. */
    function Position(start) {
      this.start = start;
      this.end = now();
    }

    /* Throw when a value is incorrectly eaten.
     * This shouldn’t happen but will throw on new,
     * incorrect rules. */
    function validateEat(subvalue) {
      /* istanbul ignore if */
      if (value.substring(0, subvalue.length) !== subvalue) {
        /* Capture stack-trace. */
        self.file.fail(
          new Error(
            'Incorrectly eaten value: please report this ' +
            'warning on http://git.io/vg5Ft'
          ),
          now()
        );
      }
    }

    /* Mark position and patch `node.position`. */
    function position() {
      var before = now();

      return update;

      /* Add the position to a node. */
      function update(node, indent) {
        var prev = node.position;
        var start = prev ? prev.start : before;
        var combined = [];
        var n = prev && prev.end.line;
        var l = before.line;

        node.position = new Position(start);

        /* If there was already a `position`, this
         * node was merged.  Fixing `start` wasn’t
         * hard, but the indent is different.
         * Especially because some information, the
         * indent between `n` and `l` wasn’t
         * tracked.  Luckily, that space is
         * (should be?) empty, so we can safely
         * check for it now. */
        if (prev && indent && prev.indent) {
          combined = prev.indent;

          if (n < l) {
            while (++n < l) {
              combined.push((offset[n] || 0) + 1);
            }

            combined.push(before.column);
          }

          indent = combined.concat(indent);
        }

        node.position.indent = indent || [];

        return node;
      }
    }

    /* Add `node` to `parent`s children or to `tokens`.
     * Performs merges where possible. */
    function add(node, parent) {
      var children = parent ? parent.children : tokens;
      var prev = children[children.length - 1];

      if (
        prev &&
        node.type === prev.type &&
        node.type in MERGEABLE_NODES &&
        mergeable(prev) &&
        mergeable(node)
      ) {
        node = MERGEABLE_NODES[node.type].call(self, prev, node);
      }

      if (node !== prev) {
        children.push(node);
      }

      if (self.atStart && tokens.length !== 0) {
        self.exitStart();
      }

      return node;
    }

    /* Remove `subvalue` from `value`.
     * `subvalue` must be at the start of `value`. */
    function eat(subvalue) {
      var indent = getOffset();
      var pos = position();
      var current = now();

      validateEat(subvalue);

      apply.reset = reset;
      reset.test = test;
      apply.test = test;

      value = value.substring(subvalue.length);

      updatePosition(subvalue);

      indent = indent();

      return apply;

      /* Add the given arguments, add `position` to
       * the returned node, and return the node. */
      function apply(node, parent) {
        return pos(add(pos(node), parent), indent);
      }

      /* Functions just like apply, but resets the
       * content:  the line and column are reversed,
       * and the eaten value is re-added.
       * This is useful for nodes with a single
       * type of content, such as lists and tables.
       * See `apply` above for what parameters are
       * expected. */
      function reset() {
        var node = apply.apply(null, arguments);

        line = current.line;
        column = current.column;
        value = subvalue + value;

        return node;
      }

      /* Test the position, after eating, and reverse
       * to a not-eaten state. */
      function test() {
        var result = pos({});

        line = current.line;
        column = current.column;
        value = subvalue + value;

        return result.position;
      }
    }
  }
}

},{}],"../node_modules/markdown-escapes/index.js":[function(require,module,exports) {
'use strict'

module.exports = escapes

var defaults = [
  '\\',
  '`',
  '*',
  '{',
  '}',
  '[',
  ']',
  '(',
  ')',
  '#',
  '+',
  '-',
  '.',
  '!',
  '_',
  '>'
]

var gfm = defaults.concat(['~', '|'])

var commonmark = gfm.concat([
  '\n',
  '"',
  '$',
  '%',
  '&',
  "'",
  ',',
  '/',
  ':',
  ';',
  '<',
  '=',
  '?',
  '@',
  '^'
])

escapes.default = defaults
escapes.gfm = gfm
escapes.commonmark = commonmark

/* Get markdown escapes. */
function escapes(options) {
  var settings = options || {}

  if (settings.commonmark) {
    return commonmark
  }

  return settings.gfm ? gfm : defaults
}

},{}],"../node_modules/remark-parse/lib/block-elements.json":[function(require,module,exports) {
module.exports = [
  "address",
  "article",
  "aside",
  "base",
  "basefont",
  "blockquote",
  "body",
  "caption",
  "center",
  "col",
  "colgroup",
  "dd",
  "details",
  "dialog",
  "dir",
  "div",
  "dl",
  "dt",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "frame",
  "frameset",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "iframe",
  "legend",
  "li",
  "link",
  "main",
  "menu",
  "menuitem",
  "meta",
  "nav",
  "noframes",
  "ol",
  "optgroup",
  "option",
  "p",
  "param",
  "pre",
  "section",
  "source",
  "title",
  "summary",
  "table",
  "tbody",
  "td",
  "tfoot",
  "th",
  "thead",
  "title",
  "tr",
  "track",
  "ul"
]
;
},{}],"../node_modules/remark-parse/lib/defaults.js":[function(require,module,exports) {
'use strict';

module.exports = {
  position: true,
  gfm: true,
  commonmark: false,
  footnotes: false,
  pedantic: false,
  blocks: require('./block-elements.json')
};

},{"./block-elements.json":"../node_modules/remark-parse/lib/block-elements.json"}],"../node_modules/remark-parse/lib/set-options.js":[function(require,module,exports) {
'use strict';

var xtend = require('xtend');
var escapes = require('markdown-escapes');
var defaults = require('./defaults');

module.exports = setOptions;

function setOptions(options) {
  var self = this;
  var current = self.options;
  var key;
  var value;

  if (options == null) {
    options = {};
  } else if (typeof options === 'object') {
    options = xtend(options);
  } else {
    throw new Error(
      'Invalid value `' + options + '` ' +
      'for setting `options`'
    );
  }

  for (key in defaults) {
    value = options[key];

    if (value == null) {
      value = current[key];
    }

    if (
      (key !== 'blocks' && typeof value !== 'boolean') ||
      (key === 'blocks' && typeof value !== 'object')
    ) {
      throw new Error('Invalid value `' + value + '` for setting `options.' + key + '`');
    }

    options[key] = value;
  }

  self.options = options;
  self.escape = escapes(options);

  return self;
}

},{"xtend":"../node_modules/xtend/immutable.js","markdown-escapes":"../node_modules/markdown-escapes/index.js","./defaults":"../node_modules/remark-parse/lib/defaults.js"}],"../node_modules/unist-util-is/index.js":[function(require,module,exports) {
'use strict'

/* eslint-disable max-params */

/* Expose. */
module.exports = is

/* Assert if `test` passes for `node`.
 * When a `parent` node is known the `index` of node */
function is(test, node, index, parent, context) {
  var hasParent = parent !== null && parent !== undefined
  var hasIndex = index !== null && index !== undefined
  var check = convert(test)

  if (
    hasIndex &&
    (typeof index !== 'number' || index < 0 || index === Infinity)
  ) {
    throw new Error('Expected positive finite index or child node')
  }

  if (hasParent && (!is(null, parent) || !parent.children)) {
    throw new Error('Expected parent node')
  }

  if (!node || !node.type || typeof node.type !== 'string') {
    return false
  }

  if (hasParent !== hasIndex) {
    throw new Error('Expected both parent and index')
  }

  return Boolean(check.call(context, node, index, parent))
}

function convert(test) {
  if (typeof test === 'string') {
    return typeFactory(test)
  }

  if (test === null || test === undefined) {
    return ok
  }

  if (typeof test === 'object') {
    return ('length' in test ? anyFactory : matchesFactory)(test)
  }

  if (typeof test === 'function') {
    return test
  }

  throw new Error('Expected function, string, or object as test')
}

function convertAll(tests) {
  var results = []
  var length = tests.length
  var index = -1

  while (++index < length) {
    results[index] = convert(tests[index])
  }

  return results
}

/* Utility assert each property in `test` is represented
 * in `node`, and each values are strictly equal. */
function matchesFactory(test) {
  return matches

  function matches(node) {
    var key

    for (key in test) {
      if (node[key] !== test[key]) {
        return false
      }
    }

    return true
  }
}

function anyFactory(tests) {
  var checks = convertAll(tests)
  var length = checks.length

  return matches

  function matches() {
    var index = -1

    while (++index < length) {
      if (checks[index].apply(this, arguments)) {
        return true
      }
    }

    return false
  }
}

/* Utility to convert a string into a function which checks
 * a given node’s type for said string. */
function typeFactory(test) {
  return type

  function type(node) {
    return Boolean(node && node.type === test)
  }
}

/* Utility to return true. */
function ok() {
  return true
}

},{}],"../node_modules/unist-util-visit/node_modules/unist-util-visit-parents/index.js":[function(require,module,exports) {
'use strict'

module.exports = visitParents

var is = require('unist-util-is')

var CONTINUE = true
var SKIP = 'skip'
var EXIT = false

visitParents.CONTINUE = CONTINUE
visitParents.SKIP = SKIP
visitParents.EXIT = EXIT

function visitParents(tree, test, visitor, reverse) {
  if (typeof test === 'function' && typeof visitor !== 'function') {
    reverse = visitor
    visitor = test
    test = null
  }

  one(tree, null, [])

  // Visit a single node.
  function one(node, index, parents) {
    var result

    if (!test || is(test, node, index, parents[parents.length - 1] || null)) {
      result = visitor(node, parents)

      if (result === EXIT) {
        return result
      }
    }

    if (node.children && result !== SKIP) {
      return all(node.children, parents.concat(node)) === EXIT ? EXIT : result
    }

    return result
  }

  // Visit children in `parent`.
  function all(children, parents) {
    var min = -1
    var step = reverse ? -1 : 1
    var index = (reverse ? children.length : min) + step
    var child
    var result

    while (index > min && index < children.length) {
      child = children[index]
      result = child && one(child, index, parents)

      if (result === EXIT) {
        return result
      }

      index = typeof result === 'number' ? result : index + step
    }
  }
}

},{"unist-util-is":"../node_modules/unist-util-is/index.js"}],"../node_modules/unist-util-visit/index.js":[function(require,module,exports) {
'use strict'

module.exports = visit

var visitParents = require('unist-util-visit-parents')

var CONTINUE = visitParents.CONTINUE
var SKIP = visitParents.SKIP
var EXIT = visitParents.EXIT

visit.CONTINUE = CONTINUE
visit.SKIP = SKIP
visit.EXIT = EXIT

function visit(tree, test, visitor, reverse) {
  if (typeof test === 'function' && typeof visitor !== 'function') {
    reverse = visitor
    visitor = test
    test = null
  }

  visitParents(tree, test, overload, reverse)

  function overload(node, parents) {
    var parent = parents[parents.length - 1]
    var index = parent ? parent.children.indexOf(node) : null
    return visitor(node, index, parent)
  }
}

},{"unist-util-visit-parents":"../node_modules/unist-util-visit/node_modules/unist-util-visit-parents/index.js"}],"../node_modules/unist-util-remove-position/index.js":[function(require,module,exports) {
'use strict'

var visit = require('unist-util-visit')

module.exports = removePosition

/* Remove `position`s from `tree`. */
function removePosition(node, force) {
  visit(node, force ? hard : soft)
  return node
}

function hard(node) {
  delete node.position
}

function soft(node) {
  node.position = undefined
}

},{"unist-util-visit":"../node_modules/unist-util-visit/index.js"}],"../node_modules/remark-parse/lib/parse.js":[function(require,module,exports) {
'use strict';

var xtend = require('xtend');
var removePosition = require('unist-util-remove-position');

module.exports = parse;

var C_NEWLINE = '\n';
var EXPRESSION_LINE_BREAKS = /\r\n|\r/g;

/* Parse the bound file. */
function parse() {
  var self = this;
  var value = String(self.file);
  var start = {line: 1, column: 1, offset: 0};
  var content = xtend(start);
  var node;

  /* Clean non-unix newlines: `\r\n` and `\r` are all
   * changed to `\n`.  This should not affect positional
   * information. */
  value = value.replace(EXPRESSION_LINE_BREAKS, C_NEWLINE);

  if (value.charCodeAt(0) === 0xFEFF) {
    value = value.slice(1);

    content.column++;
    content.offset++;
  }

  node = {
    type: 'root',
    children: self.tokenizeBlock(value, content),
    position: {
      start: start,
      end: self.eof || xtend(start)
    }
  };

  if (!self.options.position) {
    removePosition(node, true);
  }

  return node;
}

},{"xtend":"../node_modules/xtend/immutable.js","unist-util-remove-position":"../node_modules/unist-util-remove-position/index.js"}],"../node_modules/is-whitespace-character/index.js":[function(require,module,exports) {
'use strict'

module.exports = whitespace

var fromCode = String.fromCharCode
var re = /\s/

/* Check if the given character code, or the character
 * code at the first character, is a whitespace character. */
function whitespace(character) {
  return re.test(
    typeof character === 'number' ? fromCode(character) : character.charAt(0)
  )
}

},{}],"../node_modules/remark-parse/lib/tokenize/newline.js":[function(require,module,exports) {
'use strict';

var whitespace = require('is-whitespace-character');

module.exports = newline;

/* Tokenise newline. */
function newline(eat, value, silent) {
  var character = value.charAt(0);
  var length;
  var subvalue;
  var queue;
  var index;

  if (character !== '\n') {
    return;
  }

  /* istanbul ignore if - never used (yet) */
  if (silent) {
    return true;
  }

  index = 1;
  length = value.length;
  subvalue = character;
  queue = '';

  while (index < length) {
    character = value.charAt(index);

    if (!whitespace(character)) {
      break;
    }

    queue += character;

    if (character === '\n') {
      subvalue += queue;
      queue = '';
    }

    index++;
  }

  eat(subvalue);
}

},{"is-whitespace-character":"../node_modules/is-whitespace-character/index.js"}],"../node_modules/repeat-string/index.js":[function(require,module,exports) {
/*!
 * repeat-string <https://github.com/jonschlinkert/repeat-string>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */
'use strict';
/**
 * Results cache
 */

var res = '';
var cache;
/**
 * Expose `repeat`
 */

module.exports = repeat;
/**
 * Repeat the given `string` the specified `number`
 * of times.
 *
 * **Example:**
 *
 * ```js
 * var repeat = require('repeat-string');
 * repeat('A', 5);
 * //=> AAAAA
 * ```
 *
 * @param {String} `string` The string to repeat
 * @param {Number} `number` The number of times to repeat the string
 * @return {String} Repeated string
 * @api public
 */

function repeat(str, num) {
  if (typeof str !== 'string') {
    throw new TypeError('expected a string');
  } // cover common, quick use cases


  if (num === 1) return str;
  if (num === 2) return str + str;
  var max = str.length * num;

  if (cache !== str || typeof cache === 'undefined') {
    cache = str;
    res = '';
  } else if (res.length >= max) {
    return res.substr(0, max);
  }

  while (max > res.length && num > 1) {
    if (num & 1) {
      res += str;
    }

    num >>= 1;
    str += str;
  }

  res += str;
  res = res.substr(0, max);
  return res;
}
},{}],"../node_modules/trim-trailing-lines/index.js":[function(require,module,exports) {
'use strict'

module.exports = trimTrailingLines

var line = '\n'

/* Remove final newline characters from `value`. */
function trimTrailingLines(value) {
  var val = String(value)
  var index = val.length

  while (val.charAt(--index) === line) {
    /* Empty */
  }

  return val.slice(0, index + 1)
}

},{}],"../node_modules/remark-parse/lib/tokenize/code-indented.js":[function(require,module,exports) {
'use strict';

var repeat = require('repeat-string');
var trim = require('trim-trailing-lines');

module.exports = indentedCode;

var C_NEWLINE = '\n';
var C_TAB = '\t';
var C_SPACE = ' ';

var CODE_INDENT_COUNT = 4;
var CODE_INDENT = repeat(C_SPACE, CODE_INDENT_COUNT);

/* Tokenise indented code. */
function indentedCode(eat, value, silent) {
  var index = -1;
  var length = value.length;
  var subvalue = '';
  var content = '';
  var subvalueQueue = '';
  var contentQueue = '';
  var character;
  var blankQueue;
  var indent;

  while (++index < length) {
    character = value.charAt(index);

    if (indent) {
      indent = false;

      subvalue += subvalueQueue;
      content += contentQueue;
      subvalueQueue = '';
      contentQueue = '';

      if (character === C_NEWLINE) {
        subvalueQueue = character;
        contentQueue = character;
      } else {
        subvalue += character;
        content += character;

        while (++index < length) {
          character = value.charAt(index);

          if (!character || character === C_NEWLINE) {
            contentQueue = character;
            subvalueQueue = character;
            break;
          }

          subvalue += character;
          content += character;
        }
      }
    } else if (
      character === C_SPACE &&
      value.charAt(index + 1) === character &&
      value.charAt(index + 2) === character &&
      value.charAt(index + 3) === character
    ) {
      subvalueQueue += CODE_INDENT;
      index += 3;
      indent = true;
    } else if (character === C_TAB) {
      subvalueQueue += character;
      indent = true;
    } else {
      blankQueue = '';

      while (character === C_TAB || character === C_SPACE) {
        blankQueue += character;
        character = value.charAt(++index);
      }

      if (character !== C_NEWLINE) {
        break;
      }

      subvalueQueue += blankQueue + character;
      contentQueue += character;
    }
  }

  if (content) {
    if (silent) {
      return true;
    }

    return eat(subvalue)({
      type: 'code',
      lang: null,
      value: trim(content)
    });
  }
}

},{"repeat-string":"../node_modules/repeat-string/index.js","trim-trailing-lines":"../node_modules/trim-trailing-lines/index.js"}],"../node_modules/remark-parse/lib/tokenize/code-fenced.js":[function(require,module,exports) {
'use strict';

var trim = require('trim-trailing-lines');

module.exports = fencedCode;

var C_NEWLINE = '\n';
var C_TAB = '\t';
var C_SPACE = ' ';
var C_TILDE = '~';
var C_TICK = '`';

var MIN_FENCE_COUNT = 3;
var CODE_INDENT_COUNT = 4;

function fencedCode(eat, value, silent) {
  var self = this;
  var settings = self.options;
  var length = value.length + 1;
  var index = 0;
  var subvalue = '';
  var fenceCount;
  var marker;
  var character;
  var flag;
  var queue;
  var content;
  var exdentedContent;
  var closing;
  var exdentedClosing;
  var indent;
  var now;

  if (!settings.gfm) {
    return;
  }

  /* Eat initial spacing. */
  while (index < length) {
    character = value.charAt(index);

    if (character !== C_SPACE && character !== C_TAB) {
      break;
    }

    subvalue += character;
    index++;
  }

  indent = index;

  /* Eat the fence. */
  character = value.charAt(index);

  if (character !== C_TILDE && character !== C_TICK) {
    return;
  }

  index++;
  marker = character;
  fenceCount = 1;
  subvalue += character;

  while (index < length) {
    character = value.charAt(index);

    if (character !== marker) {
      break;
    }

    subvalue += character;
    fenceCount++;
    index++;
  }

  if (fenceCount < MIN_FENCE_COUNT) {
    return;
  }

  /* Eat spacing before flag. */
  while (index < length) {
    character = value.charAt(index);

    if (character !== C_SPACE && character !== C_TAB) {
      break;
    }

    subvalue += character;
    index++;
  }

  /* Eat flag. */
  flag = '';
  queue = '';

  while (index < length) {
    character = value.charAt(index);

    if (
      character === C_NEWLINE ||
      character === C_TILDE ||
      character === C_TICK
    ) {
      break;
    }

    if (character === C_SPACE || character === C_TAB) {
      queue += character;
    } else {
      flag += queue + character;
      queue = '';
    }

    index++;
  }

  character = value.charAt(index);

  if (character && character !== C_NEWLINE) {
    return;
  }

  if (silent) {
    return true;
  }

  now = eat.now();
  now.column += subvalue.length;
  now.offset += subvalue.length;

  subvalue += flag;
  flag = self.decode.raw(self.unescape(flag), now);

  if (queue) {
    subvalue += queue;
  }

  queue = '';
  closing = '';
  exdentedClosing = '';
  content = '';
  exdentedContent = '';

  /* Eat content. */
  while (index < length) {
    character = value.charAt(index);
    content += closing;
    exdentedContent += exdentedClosing;
    closing = '';
    exdentedClosing = '';

    if (character !== C_NEWLINE) {
      content += character;
      exdentedClosing += character;
      index++;
      continue;
    }

    /* Add the newline to `subvalue` if its the first
     * character.  Otherwise, add it to the `closing`
     * queue. */
    if (content) {
      closing += character;
      exdentedClosing += character;
    } else {
      subvalue += character;
    }

    queue = '';
    index++;

    while (index < length) {
      character = value.charAt(index);

      if (character !== C_SPACE) {
        break;
      }

      queue += character;
      index++;
    }

    closing += queue;
    exdentedClosing += queue.slice(indent);

    if (queue.length >= CODE_INDENT_COUNT) {
      continue;
    }

    queue = '';

    while (index < length) {
      character = value.charAt(index);

      if (character !== marker) {
        break;
      }

      queue += character;
      index++;
    }

    closing += queue;
    exdentedClosing += queue;

    if (queue.length < fenceCount) {
      continue;
    }

    queue = '';

    while (index < length) {
      character = value.charAt(index);

      if (character !== C_SPACE && character !== C_TAB) {
        break;
      }

      closing += character;
      exdentedClosing += character;
      index++;
    }

    if (!character || character === C_NEWLINE) {
      break;
    }
  }

  subvalue += content + closing;

  return eat(subvalue)({
    type: 'code',
    lang: flag || null,
    value: trim(exdentedContent)
  });
}

},{"trim-trailing-lines":"../node_modules/trim-trailing-lines/index.js"}],"../node_modules/trim/index.js":[function(require,module,exports) {

exports = module.exports = trim;

function trim(str){
  return str.replace(/^\s*|\s*$/g, '');
}

exports.left = function(str){
  return str.replace(/^\s*/, '');
};

exports.right = function(str){
  return str.replace(/\s*$/, '');
};

},{}],"../node_modules/remark-parse/lib/util/interrupt.js":[function(require,module,exports) {
'use strict';

module.exports = interrupt;

function interrupt(interruptors, tokenizers, ctx, params) {
  var bools = ['pedantic', 'commonmark'];
  var count = bools.length;
  var length = interruptors.length;
  var index = -1;
  var interruptor;
  var config;
  var fn;
  var offset;
  var bool;
  var ignore;

  while (++index < length) {
    interruptor = interruptors[index];
    config = interruptor[1] || {};
    fn = interruptor[0];
    offset = -1;
    ignore = false;

    while (++offset < count) {
      bool = bools[offset];

      if (config[bool] !== undefined && config[bool] !== ctx.options[bool]) {
        ignore = true;
        break;
      }
    }

    if (ignore) {
      continue;
    }

    if (tokenizers[fn].apply(ctx, params)) {
      return true;
    }
  }

  return false;
}

},{}],"../node_modules/remark-parse/lib/tokenize/blockquote.js":[function(require,module,exports) {
'use strict';

var trim = require('trim');
var interrupt = require('../util/interrupt');

module.exports = blockquote;

var C_NEWLINE = '\n';
var C_TAB = '\t';
var C_SPACE = ' ';
var C_GT = '>';

/* Tokenise a blockquote. */
function blockquote(eat, value, silent) {
  var self = this;
  var offsets = self.offset;
  var tokenizers = self.blockTokenizers;
  var interruptors = self.interruptBlockquote;
  var now = eat.now();
  var currentLine = now.line;
  var length = value.length;
  var values = [];
  var contents = [];
  var indents = [];
  var add;
  var index = 0;
  var character;
  var rest;
  var nextIndex;
  var content;
  var line;
  var startIndex;
  var prefixed;
  var exit;

  while (index < length) {
    character = value.charAt(index);

    if (character !== C_SPACE && character !== C_TAB) {
      break;
    }

    index++;
  }

  if (value.charAt(index) !== C_GT) {
    return;
  }

  if (silent) {
    return true;
  }

  index = 0;

  while (index < length) {
    nextIndex = value.indexOf(C_NEWLINE, index);
    startIndex = index;
    prefixed = false;

    if (nextIndex === -1) {
      nextIndex = length;
    }

    while (index < length) {
      character = value.charAt(index);

      if (character !== C_SPACE && character !== C_TAB) {
        break;
      }

      index++;
    }

    if (value.charAt(index) === C_GT) {
      index++;
      prefixed = true;

      if (value.charAt(index) === C_SPACE) {
        index++;
      }
    } else {
      index = startIndex;
    }

    content = value.slice(index, nextIndex);

    if (!prefixed && !trim(content)) {
      index = startIndex;
      break;
    }

    if (!prefixed) {
      rest = value.slice(index);

      /* Check if the following code contains a possible
       * block. */
      if (interrupt(interruptors, tokenizers, self, [eat, rest, true])) {
        break;
      }
    }

    line = startIndex === index ? content : value.slice(startIndex, nextIndex);

    indents.push(index - startIndex);
    values.push(line);
    contents.push(content);

    index = nextIndex + 1;
  }

  index = -1;
  length = indents.length;
  add = eat(values.join(C_NEWLINE));

  while (++index < length) {
    offsets[currentLine] = (offsets[currentLine] || 0) + indents[index];
    currentLine++;
  }

  exit = self.enterBlock();
  contents = self.tokenizeBlock(contents.join(C_NEWLINE), now);
  exit();

  return add({
    type: 'blockquote',
    children: contents
  });
}

},{"trim":"../node_modules/trim/index.js","../util/interrupt":"../node_modules/remark-parse/lib/util/interrupt.js"}],"../node_modules/remark-parse/lib/tokenize/heading-atx.js":[function(require,module,exports) {
'use strict';

module.exports = atxHeading;

var C_NEWLINE = '\n';
var C_TAB = '\t';
var C_SPACE = ' ';
var C_HASH = '#';

var MAX_ATX_COUNT = 6;

function atxHeading(eat, value, silent) {
  var self = this;
  var settings = self.options;
  var length = value.length + 1;
  var index = -1;
  var now = eat.now();
  var subvalue = '';
  var content = '';
  var character;
  var queue;
  var depth;

  /* Eat initial spacing. */
  while (++index < length) {
    character = value.charAt(index);

    if (character !== C_SPACE && character !== C_TAB) {
      index--;
      break;
    }

    subvalue += character;
  }

  /* Eat hashes. */
  depth = 0;

  while (++index <= length) {
    character = value.charAt(index);

    if (character !== C_HASH) {
      index--;
      break;
    }

    subvalue += character;
    depth++;
  }

  if (depth > MAX_ATX_COUNT) {
    return;
  }

  if (
    !depth ||
    (!settings.pedantic && value.charAt(index + 1) === C_HASH)
  ) {
    return;
  }

  length = value.length + 1;

  /* Eat intermediate white-space. */
  queue = '';

  while (++index < length) {
    character = value.charAt(index);

    if (character !== C_SPACE && character !== C_TAB) {
      index--;
      break;
    }

    queue += character;
  }

  /* Exit when not in pedantic mode without spacing. */
  if (
    !settings.pedantic &&
    queue.length === 0 &&
    character &&
    character !== C_NEWLINE
  ) {
    return;
  }

  if (silent) {
    return true;
  }

  /* Eat content. */
  subvalue += queue;
  queue = '';
  content = '';

  while (++index < length) {
    character = value.charAt(index);

    if (!character || character === C_NEWLINE) {
      break;
    }

    if (
      character !== C_SPACE &&
      character !== C_TAB &&
      character !== C_HASH
    ) {
      content += queue + character;
      queue = '';
      continue;
    }

    while (character === C_SPACE || character === C_TAB) {
      queue += character;
      character = value.charAt(++index);
    }

    while (character === C_HASH) {
      queue += character;
      character = value.charAt(++index);
    }

    while (character === C_SPACE || character === C_TAB) {
      queue += character;
      character = value.charAt(++index);
    }

    index--;
  }

  now.column += subvalue.length;
  now.offset += subvalue.length;
  subvalue += content + queue;

  return eat(subvalue)({
    type: 'heading',
    depth: depth,
    children: self.tokenizeInline(content, now)
  });
}

},{}],"../node_modules/remark-parse/lib/tokenize/thematic-break.js":[function(require,module,exports) {
'use strict';

module.exports = thematicBreak;

var C_NEWLINE = '\n';
var C_TAB = '\t';
var C_SPACE = ' ';
var C_ASTERISK = '*';
var C_UNDERSCORE = '_';
var C_DASH = '-';

var THEMATIC_BREAK_MARKER_COUNT = 3;

function thematicBreak(eat, value, silent) {
  var index = -1;
  var length = value.length + 1;
  var subvalue = '';
  var character;
  var marker;
  var markerCount;
  var queue;

  while (++index < length) {
    character = value.charAt(index);

    if (character !== C_TAB && character !== C_SPACE) {
      break;
    }

    subvalue += character;
  }

  if (
    character !== C_ASTERISK &&
    character !== C_DASH &&
    character !== C_UNDERSCORE
  ) {
    return;
  }

  marker = character;
  subvalue += character;
  markerCount = 1;
  queue = '';

  while (++index < length) {
    character = value.charAt(index);

    if (character === marker) {
      markerCount++;
      subvalue += queue + marker;
      queue = '';
    } else if (character === C_SPACE) {
      queue += character;
    } else if (
      markerCount >= THEMATIC_BREAK_MARKER_COUNT &&
      (!character || character === C_NEWLINE)
    ) {
      subvalue += queue;

      if (silent) {
        return true;
      }

      return eat(subvalue)({type: 'thematicBreak'});
    } else {
      return;
    }
  }
}

},{}],"../node_modules/remark-parse/lib/util/get-indentation.js":[function(require,module,exports) {
'use strict';

module.exports = indentation;

/* Map of characters, and their column length,
 * which can be used as indentation. */
var characters = {' ': 1, '\t': 4};

/* Gets indentation information for a line. */
function indentation(value) {
  var index = 0;
  var indent = 0;
  var character = value.charAt(index);
  var stops = {};
  var size;

  while (character in characters) {
    size = characters[character];

    indent += size;

    if (size > 1) {
      indent = Math.floor(indent / size) * size;
    }

    stops[indent] = index;

    character = value.charAt(++index);
  }

  return {indent: indent, stops: stops};
}

},{}],"../node_modules/remark-parse/lib/util/remove-indentation.js":[function(require,module,exports) {
'use strict';

var trim = require('trim');
var repeat = require('repeat-string');
var getIndent = require('./get-indentation');

module.exports = indentation;

var C_SPACE = ' ';
var C_NEWLINE = '\n';
var C_TAB = '\t';

/* Remove the minimum indent from every line in `value`.
 * Supports both tab, spaced, and mixed indentation (as
 * well as possible). */
function indentation(value, maximum) {
  var values = value.split(C_NEWLINE);
  var position = values.length + 1;
  var minIndent = Infinity;
  var matrix = [];
  var index;
  var indentation;
  var stops;
  var padding;

  values.unshift(repeat(C_SPACE, maximum) + '!');

  while (position--) {
    indentation = getIndent(values[position]);

    matrix[position] = indentation.stops;

    if (trim(values[position]).length === 0) {
      continue;
    }

    if (indentation.indent) {
      if (indentation.indent > 0 && indentation.indent < minIndent) {
        minIndent = indentation.indent;
      }
    } else {
      minIndent = Infinity;

      break;
    }
  }

  if (minIndent !== Infinity) {
    position = values.length;

    while (position--) {
      stops = matrix[position];
      index = minIndent;

      while (index && !(index in stops)) {
        index--;
      }

      if (
        trim(values[position]).length !== 0 &&
        minIndent &&
        index !== minIndent
      ) {
        padding = C_TAB;
      } else {
        padding = '';
      }

      values[position] = padding + values[position].slice(
        index in stops ? stops[index] + 1 : 0
      );
    }
  }

  values.shift();

  return values.join(C_NEWLINE);
}

},{"trim":"../node_modules/trim/index.js","repeat-string":"../node_modules/repeat-string/index.js","./get-indentation":"../node_modules/remark-parse/lib/util/get-indentation.js"}],"../node_modules/remark-parse/lib/tokenize/list.js":[function(require,module,exports) {
'use strict';

/* eslint-disable max-params */

var trim = require('trim');
var repeat = require('repeat-string');
var decimal = require('is-decimal');
var getIndent = require('../util/get-indentation');
var removeIndent = require('../util/remove-indentation');
var interrupt = require('../util/interrupt');

module.exports = list;

var C_ASTERISK = '*';
var C_UNDERSCORE = '_';
var C_PLUS = '+';
var C_DASH = '-';
var C_DOT = '.';
var C_SPACE = ' ';
var C_NEWLINE = '\n';
var C_TAB = '\t';
var C_PAREN_CLOSE = ')';
var C_X_LOWER = 'x';

var TAB_SIZE = 4;
var EXPRESSION_LOOSE_LIST_ITEM = /\n\n(?!\s*$)/;
var EXPRESSION_TASK_ITEM = /^\[([ \t]|x|X)][ \t]/;
var EXPRESSION_BULLET = /^([ \t]*)([*+-]|\d+[.)])( {1,4}(?! )| |\t|$|(?=\n))([^\n]*)/;
var EXPRESSION_PEDANTIC_BULLET = /^([ \t]*)([*+-]|\d+[.)])([ \t]+)/;
var EXPRESSION_INITIAL_INDENT = /^( {1,4}|\t)?/gm;

/* Map of characters which can be used to mark
 * list-items. */
var LIST_UNORDERED_MARKERS = {};

LIST_UNORDERED_MARKERS[C_ASTERISK] = true;
LIST_UNORDERED_MARKERS[C_PLUS] = true;
LIST_UNORDERED_MARKERS[C_DASH] = true;

/* Map of characters which can be used to mark
 * list-items after a digit. */
var LIST_ORDERED_MARKERS = {};

LIST_ORDERED_MARKERS[C_DOT] = true;

/* Map of characters which can be used to mark
 * list-items after a digit. */
var LIST_ORDERED_COMMONMARK_MARKERS = {};

LIST_ORDERED_COMMONMARK_MARKERS[C_DOT] = true;
LIST_ORDERED_COMMONMARK_MARKERS[C_PAREN_CLOSE] = true;

function list(eat, value, silent) {
  var self = this;
  var commonmark = self.options.commonmark;
  var pedantic = self.options.pedantic;
  var tokenizers = self.blockTokenizers;
  var interuptors = self.interruptList;
  var markers;
  var index = 0;
  var length = value.length;
  var start = null;
  var size = 0;
  var queue;
  var ordered;
  var character;
  var marker;
  var nextIndex;
  var startIndex;
  var prefixed;
  var currentMarker;
  var content;
  var line;
  var prevEmpty;
  var empty;
  var items;
  var allLines;
  var emptyLines;
  var item;
  var enterTop;
  var exitBlockquote;
  var isLoose;
  var node;
  var now;
  var end;
  var indented;

  while (index < length) {
    character = value.charAt(index);

    if (character === C_TAB) {
      size += TAB_SIZE - (size % TAB_SIZE);
    } else if (character === C_SPACE) {
      size++;
    } else {
      break;
    }

    index++;
  }

  if (size >= TAB_SIZE) {
    return;
  }

  character = value.charAt(index);

  markers = commonmark ?
    LIST_ORDERED_COMMONMARK_MARKERS :
    LIST_ORDERED_MARKERS;

  if (LIST_UNORDERED_MARKERS[character] === true) {
    marker = character;
    ordered = false;
  } else {
    ordered = true;
    queue = '';

    while (index < length) {
      character = value.charAt(index);

      if (!decimal(character)) {
        break;
      }

      queue += character;
      index++;
    }

    character = value.charAt(index);

    if (!queue || markers[character] !== true) {
      return;
    }

    start = parseInt(queue, 10);
    marker = character;
  }

  character = value.charAt(++index);

  if (character !== C_SPACE && character !== C_TAB) {
    return;
  }

  if (silent) {
    return true;
  }

  index = 0;
  items = [];
  allLines = [];
  emptyLines = [];

  while (index < length) {
    nextIndex = value.indexOf(C_NEWLINE, index);
    startIndex = index;
    prefixed = false;
    indented = false;

    if (nextIndex === -1) {
      nextIndex = length;
    }

    end = index + TAB_SIZE;
    size = 0;

    while (index < length) {
      character = value.charAt(index);

      if (character === C_TAB) {
        size += TAB_SIZE - (size % TAB_SIZE);
      } else if (character === C_SPACE) {
        size++;
      } else {
        break;
      }

      index++;
    }

    if (size >= TAB_SIZE) {
      indented = true;
    }

    if (item && size >= item.indent) {
      indented = true;
    }

    character = value.charAt(index);
    currentMarker = null;

    if (!indented) {
      if (LIST_UNORDERED_MARKERS[character] === true) {
        currentMarker = character;
        index++;
        size++;
      } else {
        queue = '';

        while (index < length) {
          character = value.charAt(index);

          if (!decimal(character)) {
            break;
          }

          queue += character;
          index++;
        }

        character = value.charAt(index);
        index++;

        if (queue && markers[character] === true) {
          currentMarker = character;
          size += queue.length + 1;
        }
      }

      if (currentMarker) {
        character = value.charAt(index);

        if (character === C_TAB) {
          size += TAB_SIZE - (size % TAB_SIZE);
          index++;
        } else if (character === C_SPACE) {
          end = index + TAB_SIZE;

          while (index < end) {
            if (value.charAt(index) !== C_SPACE) {
              break;
            }

            index++;
            size++;
          }

          if (index === end && value.charAt(index) === C_SPACE) {
            index -= TAB_SIZE - 1;
            size -= TAB_SIZE - 1;
          }
        } else if (character !== C_NEWLINE && character !== '') {
          currentMarker = null;
        }
      }
    }

    if (currentMarker) {
      if (!pedantic && marker !== currentMarker) {
        break;
      }

      prefixed = true;
    } else {
      if (!commonmark && !indented && value.charAt(startIndex) === C_SPACE) {
        indented = true;
      } else if (commonmark && item) {
        indented = size >= item.indent || size > TAB_SIZE;
      }

      prefixed = false;
      index = startIndex;
    }

    line = value.slice(startIndex, nextIndex);
    content = startIndex === index ? line : value.slice(index, nextIndex);

    if (
      currentMarker === C_ASTERISK ||
      currentMarker === C_UNDERSCORE ||
      currentMarker === C_DASH
    ) {
      if (tokenizers.thematicBreak.call(self, eat, line, true)) {
        break;
      }
    }

    prevEmpty = empty;
    empty = !trim(content).length;

    if (indented && item) {
      item.value = item.value.concat(emptyLines, line);
      allLines = allLines.concat(emptyLines, line);
      emptyLines = [];
    } else if (prefixed) {
      if (emptyLines.length !== 0) {
        item.value.push('');
        item.trail = emptyLines.concat();
      }

      item = {
        value: [line],
        indent: size,
        trail: []
      };

      items.push(item);
      allLines = allLines.concat(emptyLines, line);
      emptyLines = [];
    } else if (empty) {
      if (prevEmpty) {
        break;
      }

      emptyLines.push(line);
    } else {
      if (prevEmpty) {
        break;
      }

      if (interrupt(interuptors, tokenizers, self, [eat, line, true])) {
        break;
      }

      item.value = item.value.concat(emptyLines, line);
      allLines = allLines.concat(emptyLines, line);
      emptyLines = [];
    }

    index = nextIndex + 1;
  }

  node = eat(allLines.join(C_NEWLINE)).reset({
    type: 'list',
    ordered: ordered,
    start: start,
    loose: null,
    children: []
  });

  enterTop = self.enterList();
  exitBlockquote = self.enterBlock();
  isLoose = false;
  index = -1;
  length = items.length;

  while (++index < length) {
    item = items[index].value.join(C_NEWLINE);
    now = eat.now();

    item = eat(item)(listItem(self, item, now), node);

    if (item.loose) {
      isLoose = true;
    }

    item = items[index].trail.join(C_NEWLINE);

    if (index !== length - 1) {
      item += C_NEWLINE;
    }

    eat(item);
  }

  enterTop();
  exitBlockquote();

  node.loose = isLoose;

  return node;
}

function listItem(ctx, value, position) {
  var offsets = ctx.offset;
  var fn = ctx.options.pedantic ? pedanticListItem : normalListItem;
  var checked = null;
  var task;
  var indent;

  value = fn.apply(null, arguments);

  if (ctx.options.gfm) {
    task = value.match(EXPRESSION_TASK_ITEM);

    if (task) {
      indent = task[0].length;
      checked = task[1].toLowerCase() === C_X_LOWER;
      offsets[position.line] += indent;
      value = value.slice(indent);
    }
  }

  return {
    type: 'listItem',
    loose: EXPRESSION_LOOSE_LIST_ITEM.test(value) ||
      value.charAt(value.length - 1) === C_NEWLINE,
    checked: checked,
    children: ctx.tokenizeBlock(value, position)
  };
}

/* Create a list-item using overly simple mechanics. */
function pedanticListItem(ctx, value, position) {
  var offsets = ctx.offset;
  var line = position.line;

  /* Remove the list-item’s bullet. */
  value = value.replace(EXPRESSION_PEDANTIC_BULLET, replacer);

  /* The initial line was also matched by the below, so
   * we reset the `line`. */
  line = position.line;

  return value.replace(EXPRESSION_INITIAL_INDENT, replacer);

  /* A simple replacer which removed all matches,
   * and adds their length to `offset`. */
  function replacer($0) {
    offsets[line] = (offsets[line] || 0) + $0.length;
    line++;

    return '';
  }
}

/* Create a list-item using sane mechanics. */
function normalListItem(ctx, value, position) {
  var offsets = ctx.offset;
  var line = position.line;
  var max;
  var bullet;
  var rest;
  var lines;
  var trimmedLines;
  var index;
  var length;

  /* Remove the list-item’s bullet. */
  value = value.replace(EXPRESSION_BULLET, replacer);

  lines = value.split(C_NEWLINE);

  trimmedLines = removeIndent(value, getIndent(max).indent).split(C_NEWLINE);

  /* We replaced the initial bullet with something
   * else above, which was used to trick
   * `removeIndentation` into removing some more
   * characters when possible.  However, that could
   * result in the initial line to be stripped more
   * than it should be. */
  trimmedLines[0] = rest;

  offsets[line] = (offsets[line] || 0) + bullet.length;
  line++;

  index = 0;
  length = lines.length;

  while (++index < length) {
    offsets[line] = (offsets[line] || 0) +
      lines[index].length - trimmedLines[index].length;
    line++;
  }

  return trimmedLines.join(C_NEWLINE);

  function replacer($0, $1, $2, $3, $4) {
    bullet = $1 + $2 + $3;
    rest = $4;

    /* Make sure that the first nine numbered list items
     * can indent with an extra space.  That is, when
     * the bullet did not receive an extra final space. */
    if (Number($2) < 10 && bullet.length % 2 === 1) {
      $2 = C_SPACE + $2;
    }

    max = $1 + repeat(C_SPACE, $2.length) + $3;

    return max + rest;
  }
}

},{"trim":"../node_modules/trim/index.js","repeat-string":"../node_modules/repeat-string/index.js","is-decimal":"../node_modules/is-decimal/index.js","../util/get-indentation":"../node_modules/remark-parse/lib/util/get-indentation.js","../util/remove-indentation":"../node_modules/remark-parse/lib/util/remove-indentation.js","../util/interrupt":"../node_modules/remark-parse/lib/util/interrupt.js"}],"../node_modules/remark-parse/lib/tokenize/heading-setext.js":[function(require,module,exports) {
'use strict';

module.exports = setextHeading;

var C_NEWLINE = '\n';
var C_TAB = '\t';
var C_SPACE = ' ';
var C_EQUALS = '=';
var C_DASH = '-';

var MAX_HEADING_INDENT = 3;

/* Map of characters which can be used to mark setext
 * headers, mapping to their corresponding depth. */
var SETEXT_MARKERS = {};

SETEXT_MARKERS[C_EQUALS] = 1;
SETEXT_MARKERS[C_DASH] = 2;

function setextHeading(eat, value, silent) {
  var self = this;
  var now = eat.now();
  var length = value.length;
  var index = -1;
  var subvalue = '';
  var content;
  var queue;
  var character;
  var marker;
  var depth;

  /* Eat initial indentation. */
  while (++index < length) {
    character = value.charAt(index);

    if (character !== C_SPACE || index >= MAX_HEADING_INDENT) {
      index--;
      break;
    }

    subvalue += character;
  }

  /* Eat content. */
  content = '';
  queue = '';

  while (++index < length) {
    character = value.charAt(index);

    if (character === C_NEWLINE) {
      index--;
      break;
    }

    if (character === C_SPACE || character === C_TAB) {
      queue += character;
    } else {
      content += queue + character;
      queue = '';
    }
  }

  now.column += subvalue.length;
  now.offset += subvalue.length;
  subvalue += content + queue;

  /* Ensure the content is followed by a newline and a
   * valid marker. */
  character = value.charAt(++index);
  marker = value.charAt(++index);

  if (character !== C_NEWLINE || !SETEXT_MARKERS[marker]) {
    return;
  }

  subvalue += character;

  /* Eat Setext-line. */
  queue = marker;
  depth = SETEXT_MARKERS[marker];

  while (++index < length) {
    character = value.charAt(index);

    if (character !== marker) {
      if (character !== C_NEWLINE) {
        return;
      }

      index--;
      break;
    }

    queue += character;
  }

  if (silent) {
    return true;
  }

  return eat(subvalue + queue)({
    type: 'heading',
    depth: depth,
    children: self.tokenizeInline(content, now)
  });
}

},{}],"../node_modules/remark-parse/lib/util/html.js":[function(require,module,exports) {
'use strict';

var attributeName = '[a-zA-Z_:][a-zA-Z0-9:._-]*';
var unquoted = '[^"\'=<>`\\u0000-\\u0020]+';
var singleQuoted = '\'[^\']*\'';
var doubleQuoted = '"[^"]*"';
var attributeValue = '(?:' + unquoted + '|' + singleQuoted + '|' + doubleQuoted + ')';
var attribute = '(?:\\s+' + attributeName + '(?:\\s*=\\s*' + attributeValue + ')?)';
var openTag = '<[A-Za-z][A-Za-z0-9\\-]*' + attribute + '*\\s*\\/?>';
var closeTag = '<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>';
var comment = '<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->';
var processing = '<[?].*?[?]>';
var declaration = '<![A-Za-z]+\\s+[^>]*>';
var cdata = '<!\\[CDATA\\[[\\s\\S]*?\\]\\]>';

exports.openCloseTag = new RegExp('^(?:' + openTag + '|' + closeTag + ')');

exports.tag = new RegExp('^(?:' +
  openTag + '|' +
  closeTag + '|' +
  comment + '|' +
  processing + '|' +
  declaration + '|' +
  cdata +
')');

},{}],"../node_modules/remark-parse/lib/tokenize/html-block.js":[function(require,module,exports) {
'use strict';

var openCloseTag = require('../util/html').openCloseTag;

module.exports = blockHTML;

var C_TAB = '\t';
var C_SPACE = ' ';
var C_NEWLINE = '\n';
var C_LT = '<';

function blockHTML(eat, value, silent) {
  var self = this;
  var blocks = self.options.blocks;
  var length = value.length;
  var index = 0;
  var next;
  var line;
  var offset;
  var character;
  var count;
  var sequence;
  var subvalue;

  var sequences = [
    [/^<(script|pre|style)(?=(\s|>|$))/i, /<\/(script|pre|style)>/i, true],
    [/^<!--/, /-->/, true],
    [/^<\?/, /\?>/, true],
    [/^<![A-Za-z]/, />/, true],
    [/^<!\[CDATA\[/, /\]\]>/, true],
    [new RegExp('^</?(' + blocks.join('|') + ')(?=(\\s|/?>|$))', 'i'), /^$/, true],
    [new RegExp(openCloseTag.source + '\\s*$'), /^$/, false]
  ];

  /* Eat initial spacing. */
  while (index < length) {
    character = value.charAt(index);

    if (character !== C_TAB && character !== C_SPACE) {
      break;
    }

    index++;
  }

  if (value.charAt(index) !== C_LT) {
    return;
  }

  next = value.indexOf(C_NEWLINE, index + 1);
  next = next === -1 ? length : next;
  line = value.slice(index, next);
  offset = -1;
  count = sequences.length;

  while (++offset < count) {
    if (sequences[offset][0].test(line)) {
      sequence = sequences[offset];
      break;
    }
  }

  if (!sequence) {
    return;
  }

  if (silent) {
    return sequence[2];
  }

  index = next;

  if (!sequence[1].test(line)) {
    while (index < length) {
      next = value.indexOf(C_NEWLINE, index + 1);
      next = next === -1 ? length : next;
      line = value.slice(index + 1, next);

      if (sequence[1].test(line)) {
        if (line) {
          index = next;
        }

        break;
      }

      index = next;
    }
  }

  subvalue = value.slice(0, index);

  return eat(subvalue)({type: 'html', value: subvalue});
}

},{"../util/html":"../node_modules/remark-parse/lib/util/html.js"}],"../node_modules/collapse-white-space/index.js":[function(require,module,exports) {
'use strict'

module.exports = collapse

/* collapse(' \t\nbar \nbaz\t'); // ' bar baz ' */
function collapse(value) {
  return String(value).replace(/\s+/g, ' ')
}

},{}],"../node_modules/remark-parse/lib/util/normalize.js":[function(require,module,exports) {
'use strict';

var collapseWhiteSpace = require('collapse-white-space');

module.exports = normalize;

/* Normalize an identifier.  Collapses multiple white space
 * characters into a single space, and removes casing. */
function normalize(value) {
  return collapseWhiteSpace(value).toLowerCase();
}

},{"collapse-white-space":"../node_modules/collapse-white-space/index.js"}],"../node_modules/remark-parse/lib/tokenize/footnote-definition.js":[function(require,module,exports) {
'use strict';

var whitespace = require('is-whitespace-character');
var normalize = require('../util/normalize');

module.exports = footnoteDefinition;
footnoteDefinition.notInList = true;
footnoteDefinition.notInBlock = true;

var C_BACKSLASH = '\\';
var C_NEWLINE = '\n';
var C_TAB = '\t';
var C_SPACE = ' ';
var C_BRACKET_OPEN = '[';
var C_BRACKET_CLOSE = ']';
var C_CARET = '^';
var C_COLON = ':';

var EXPRESSION_INITIAL_TAB = /^( {4}|\t)?/gm;

function footnoteDefinition(eat, value, silent) {
  var self = this;
  var offsets = self.offset;
  var index;
  var length;
  var subvalue;
  var now;
  var currentLine;
  var content;
  var queue;
  var subqueue;
  var character;
  var identifier;
  var add;
  var exit;

  if (!self.options.footnotes) {
    return;
  }

  index = 0;
  length = value.length;
  subvalue = '';
  now = eat.now();
  currentLine = now.line;

  while (index < length) {
    character = value.charAt(index);

    if (!whitespace(character)) {
      break;
    }

    subvalue += character;
    index++;
  }

  if (
    value.charAt(index) !== C_BRACKET_OPEN ||
    value.charAt(index + 1) !== C_CARET
  ) {
    return;
  }

  subvalue += C_BRACKET_OPEN + C_CARET;
  index = subvalue.length;
  queue = '';

  while (index < length) {
    character = value.charAt(index);

    if (character === C_BRACKET_CLOSE) {
      break;
    } else if (character === C_BACKSLASH) {
      queue += character;
      index++;
      character = value.charAt(index);
    }

    queue += character;
    index++;
  }

  if (
    !queue ||
    value.charAt(index) !== C_BRACKET_CLOSE ||
    value.charAt(index + 1) !== C_COLON
  ) {
    return;
  }

  if (silent) {
    return true;
  }

  identifier = normalize(queue);
  subvalue += queue + C_BRACKET_CLOSE + C_COLON;
  index = subvalue.length;

  while (index < length) {
    character = value.charAt(index);

    if (character !== C_TAB && character !== C_SPACE) {
      break;
    }

    subvalue += character;
    index++;
  }

  now.column += subvalue.length;
  now.offset += subvalue.length;
  queue = '';
  content = '';
  subqueue = '';

  while (index < length) {
    character = value.charAt(index);

    if (character === C_NEWLINE) {
      subqueue = character;
      index++;

      while (index < length) {
        character = value.charAt(index);

        if (character !== C_NEWLINE) {
          break;
        }

        subqueue += character;
        index++;
      }

      queue += subqueue;
      subqueue = '';

      while (index < length) {
        character = value.charAt(index);

        if (character !== C_SPACE) {
          break;
        }

        subqueue += character;
        index++;
      }

      if (subqueue.length === 0) {
        break;
      }

      queue += subqueue;
    }

    if (queue) {
      content += queue;
      queue = '';
    }

    content += character;
    index++;
  }

  subvalue += content;

  content = content.replace(EXPRESSION_INITIAL_TAB, function (line) {
    offsets[currentLine] = (offsets[currentLine] || 0) + line.length;
    currentLine++;

    return '';
  });

  add = eat(subvalue);

  exit = self.enterBlock();
  content = self.tokenizeBlock(content, now);
  exit();

  return add({
    type: 'footnoteDefinition',
    identifier: identifier,
    children: content
  });
}

},{"is-whitespace-character":"../node_modules/is-whitespace-character/index.js","../util/normalize":"../node_modules/remark-parse/lib/util/normalize.js"}],"../node_modules/remark-parse/lib/tokenize/definition.js":[function(require,module,exports) {
'use strict';

var whitespace = require('is-whitespace-character');
var normalize = require('../util/normalize');

module.exports = definition;
definition.notInList = true;
definition.notInBlock = true;

var C_DOUBLE_QUOTE = '"';
var C_SINGLE_QUOTE = '\'';
var C_BACKSLASH = '\\';
var C_NEWLINE = '\n';
var C_TAB = '\t';
var C_SPACE = ' ';
var C_BRACKET_OPEN = '[';
var C_BRACKET_CLOSE = ']';
var C_PAREN_OPEN = '(';
var C_PAREN_CLOSE = ')';
var C_COLON = ':';
var C_LT = '<';
var C_GT = '>';

function definition(eat, value, silent) {
  var self = this;
  var commonmark = self.options.commonmark;
  var index = 0;
  var length = value.length;
  var subvalue = '';
  var beforeURL;
  var beforeTitle;
  var queue;
  var character;
  var test;
  var identifier;
  var url;
  var title;

  while (index < length) {
    character = value.charAt(index);

    if (character !== C_SPACE && character !== C_TAB) {
      break;
    }

    subvalue += character;
    index++;
  }

  character = value.charAt(index);

  if (character !== C_BRACKET_OPEN) {
    return;
  }

  index++;
  subvalue += character;
  queue = '';

  while (index < length) {
    character = value.charAt(index);

    if (character === C_BRACKET_CLOSE) {
      break;
    } else if (character === C_BACKSLASH) {
      queue += character;
      index++;
      character = value.charAt(index);
    }

    queue += character;
    index++;
  }

  if (
    !queue ||
    value.charAt(index) !== C_BRACKET_CLOSE ||
    value.charAt(index + 1) !== C_COLON
  ) {
    return;
  }

  identifier = queue;
  subvalue += queue + C_BRACKET_CLOSE + C_COLON;
  index = subvalue.length;
  queue = '';

  while (index < length) {
    character = value.charAt(index);

    if (
      character !== C_TAB &&
      character !== C_SPACE &&
      character !== C_NEWLINE
    ) {
      break;
    }

    subvalue += character;
    index++;
  }

  character = value.charAt(index);
  queue = '';
  beforeURL = subvalue;

  if (character === C_LT) {
    index++;

    while (index < length) {
      character = value.charAt(index);

      if (!isEnclosedURLCharacter(character)) {
        break;
      }

      queue += character;
      index++;
    }

    character = value.charAt(index);

    if (character === isEnclosedURLCharacter.delimiter) {
      subvalue += C_LT + queue + character;
      index++;
    } else {
      if (commonmark) {
        return;
      }

      index -= queue.length + 1;
      queue = '';
    }
  }

  if (!queue) {
    while (index < length) {
      character = value.charAt(index);

      if (!isUnclosedURLCharacter(character)) {
        break;
      }

      queue += character;
      index++;
    }

    subvalue += queue;
  }

  if (!queue) {
    return;
  }

  url = queue;
  queue = '';

  while (index < length) {
    character = value.charAt(index);

    if (
      character !== C_TAB &&
      character !== C_SPACE &&
      character !== C_NEWLINE
    ) {
      break;
    }

    queue += character;
    index++;
  }

  character = value.charAt(index);
  test = null;

  if (character === C_DOUBLE_QUOTE) {
    test = C_DOUBLE_QUOTE;
  } else if (character === C_SINGLE_QUOTE) {
    test = C_SINGLE_QUOTE;
  } else if (character === C_PAREN_OPEN) {
    test = C_PAREN_CLOSE;
  }

  if (!test) {
    queue = '';
    index = subvalue.length;
  } else if (queue) {
    subvalue += queue + character;
    index = subvalue.length;
    queue = '';

    while (index < length) {
      character = value.charAt(index);

      if (character === test) {
        break;
      }

      if (character === C_NEWLINE) {
        index++;
        character = value.charAt(index);

        if (character === C_NEWLINE || character === test) {
          return;
        }

        queue += C_NEWLINE;
      }

      queue += character;
      index++;
    }

    character = value.charAt(index);

    if (character !== test) {
      return;
    }

    beforeTitle = subvalue;
    subvalue += queue + character;
    index++;
    title = queue;
    queue = '';
  } else {
    return;
  }

  while (index < length) {
    character = value.charAt(index);

    if (character !== C_TAB && character !== C_SPACE) {
      break;
    }

    subvalue += character;
    index++;
  }

  character = value.charAt(index);

  if (!character || character === C_NEWLINE) {
    if (silent) {
      return true;
    }

    beforeURL = eat(beforeURL).test().end;
    url = self.decode.raw(self.unescape(url), beforeURL, {nonTerminated: false});

    if (title) {
      beforeTitle = eat(beforeTitle).test().end;
      title = self.decode.raw(self.unescape(title), beforeTitle);
    }

    return eat(subvalue)({
      type: 'definition',
      identifier: normalize(identifier),
      title: title || null,
      url: url
    });
  }
}

/* Check if `character` can be inside an enclosed URI. */
function isEnclosedURLCharacter(character) {
  return character !== C_GT &&
    character !== C_BRACKET_OPEN &&
    character !== C_BRACKET_CLOSE;
}

isEnclosedURLCharacter.delimiter = C_GT;

/* Check if `character` can be inside an unclosed URI. */
function isUnclosedURLCharacter(character) {
  return character !== C_BRACKET_OPEN &&
    character !== C_BRACKET_CLOSE &&
    !whitespace(character);
}

},{"is-whitespace-character":"../node_modules/is-whitespace-character/index.js","../util/normalize":"../node_modules/remark-parse/lib/util/normalize.js"}],"../node_modules/remark-parse/lib/tokenize/table.js":[function(require,module,exports) {
'use strict';

var whitespace = require('is-whitespace-character');

module.exports = table;

var C_BACKSLASH = '\\';
var C_TICK = '`';
var C_DASH = '-';
var C_PIPE = '|';
var C_COLON = ':';
var C_SPACE = ' ';
var C_NEWLINE = '\n';
var C_TAB = '\t';

var MIN_TABLE_COLUMNS = 1;
var MIN_TABLE_ROWS = 2;

var TABLE_ALIGN_LEFT = 'left';
var TABLE_ALIGN_CENTER = 'center';
var TABLE_ALIGN_RIGHT = 'right';
var TABLE_ALIGN_NONE = null;

function table(eat, value, silent) {
  var self = this;
  var index;
  var alignments;
  var alignment;
  var subvalue;
  var row;
  var length;
  var lines;
  var queue;
  var character;
  var hasDash;
  var align;
  var cell;
  var preamble;
  var count;
  var opening;
  var now;
  var position;
  var lineCount;
  var line;
  var rows;
  var table;
  var lineIndex;
  var pipeIndex;
  var first;

  /* Exit when not in gfm-mode. */
  if (!self.options.gfm) {
    return;
  }

  /* Get the rows.
   * Detecting tables soon is hard, so there are some
   * checks for performance here, such as the minimum
   * number of rows, and allowed characters in the
   * alignment row. */
  index = 0;
  lineCount = 0;
  length = value.length + 1;
  lines = [];

  while (index < length) {
    lineIndex = value.indexOf(C_NEWLINE, index);
    pipeIndex = value.indexOf(C_PIPE, index + 1);

    if (lineIndex === -1) {
      lineIndex = value.length;
    }

    if (pipeIndex === -1 || pipeIndex > lineIndex) {
      if (lineCount < MIN_TABLE_ROWS) {
        return;
      }

      break;
    }

    lines.push(value.slice(index, lineIndex));
    lineCount++;
    index = lineIndex + 1;
  }

  /* Parse the alignment row. */
  subvalue = lines.join(C_NEWLINE);
  alignments = lines.splice(1, 1)[0] || [];
  index = 0;
  length = alignments.length;
  lineCount--;
  alignment = false;
  align = [];

  while (index < length) {
    character = alignments.charAt(index);

    if (character === C_PIPE) {
      hasDash = null;

      if (alignment === false) {
        if (first === false) {
          return;
        }
      } else {
        align.push(alignment);
        alignment = false;
      }

      first = false;
    } else if (character === C_DASH) {
      hasDash = true;
      alignment = alignment || TABLE_ALIGN_NONE;
    } else if (character === C_COLON) {
      if (alignment === TABLE_ALIGN_LEFT) {
        alignment = TABLE_ALIGN_CENTER;
      } else if (hasDash && alignment === TABLE_ALIGN_NONE) {
        alignment = TABLE_ALIGN_RIGHT;
      } else {
        alignment = TABLE_ALIGN_LEFT;
      }
    } else if (!whitespace(character)) {
      return;
    }

    index++;
  }

  if (alignment !== false) {
    align.push(alignment);
  }

  /* Exit when without enough columns. */
  if (align.length < MIN_TABLE_COLUMNS) {
    return;
  }

  /* istanbul ignore if - never used (yet) */
  if (silent) {
    return true;
  }

  /* Parse the rows. */
  position = -1;
  rows = [];

  table = eat(subvalue).reset({
    type: 'table',
    align: align,
    children: rows
  });

  while (++position < lineCount) {
    line = lines[position];
    row = {type: 'tableRow', children: []};

    /* Eat a newline character when this is not the
     * first row. */
    if (position) {
      eat(C_NEWLINE);
    }

    /* Eat the row. */
    eat(line).reset(row, table);

    length = line.length + 1;
    index = 0;
    queue = '';
    cell = '';
    preamble = true;
    count = null;
    opening = null;

    while (index < length) {
      character = line.charAt(index);

      if (character === C_TAB || character === C_SPACE) {
        if (cell) {
          queue += character;
        } else {
          eat(character);
        }

        index++;
        continue;
      }

      if (character === '' || character === C_PIPE) {
        if (preamble) {
          eat(character);
        } else {
          if (character && opening) {
            queue += character;
            index++;
            continue;
          }

          if ((cell || character) && !preamble) {
            subvalue = cell;

            if (queue.length > 1) {
              if (character) {
                subvalue += queue.slice(0, queue.length - 1);
                queue = queue.charAt(queue.length - 1);
              } else {
                subvalue += queue;
                queue = '';
              }
            }

            now = eat.now();

            eat(subvalue)({
              type: 'tableCell',
              children: self.tokenizeInline(cell, now)
            }, row);
          }

          eat(queue + character);

          queue = '';
          cell = '';
        }
      } else {
        if (queue) {
          cell += queue;
          queue = '';
        }

        cell += character;

        if (character === C_BACKSLASH && index !== length - 2) {
          cell += line.charAt(index + 1);
          index++;
        }

        if (character === C_TICK) {
          count = 1;

          while (line.charAt(index + 1) === character) {
            cell += character;
            index++;
            count++;
          }

          if (!opening) {
            opening = count;
          } else if (count >= opening) {
            opening = 0;
          }
        }
      }

      preamble = false;
      index++;
    }

    /* Eat the alignment row. */
    if (!position) {
      eat(C_NEWLINE + alignments);
    }
  }

  return table;
}

},{"is-whitespace-character":"../node_modules/is-whitespace-character/index.js"}],"../node_modules/remark-parse/lib/tokenize/paragraph.js":[function(require,module,exports) {
'use strict';

var trim = require('trim');
var decimal = require('is-decimal');
var trimTrailingLines = require('trim-trailing-lines');
var interrupt = require('../util/interrupt');

module.exports = paragraph;

var C_NEWLINE = '\n';
var C_TAB = '\t';
var C_SPACE = ' ';

var TAB_SIZE = 4;

/* Tokenise paragraph. */
function paragraph(eat, value, silent) {
  var self = this;
  var settings = self.options;
  var commonmark = settings.commonmark;
  var gfm = settings.gfm;
  var tokenizers = self.blockTokenizers;
  var interruptors = self.interruptParagraph;
  var index = value.indexOf(C_NEWLINE);
  var length = value.length;
  var position;
  var subvalue;
  var character;
  var size;
  var now;

  while (index < length) {
    /* Eat everything if there’s no following newline. */
    if (index === -1) {
      index = length;
      break;
    }

    /* Stop if the next character is NEWLINE. */
    if (value.charAt(index + 1) === C_NEWLINE) {
      break;
    }

    /* In commonmark-mode, following indented lines
     * are part of the paragraph. */
    if (commonmark) {
      size = 0;
      position = index + 1;

      while (position < length) {
        character = value.charAt(position);

        if (character === C_TAB) {
          size = TAB_SIZE;
          break;
        } else if (character === C_SPACE) {
          size++;
        } else {
          break;
        }

        position++;
      }

      if (size >= TAB_SIZE) {
        index = value.indexOf(C_NEWLINE, index + 1);
        continue;
      }
    }

    subvalue = value.slice(index + 1);

    /* Check if the following code contains a possible
     * block. */
    if (interrupt(interruptors, tokenizers, self, [eat, subvalue, true])) {
      break;
    }

    /* Break if the following line starts a list, when
     * already in a list, or when in commonmark, or when
     * in gfm mode and the bullet is *not* numeric. */
    if (
      tokenizers.list.call(self, eat, subvalue, true) &&
      (
        self.inList ||
        commonmark ||
        (gfm && !decimal(trim.left(subvalue).charAt(0)))
      )
    ) {
      break;
    }

    position = index;
    index = value.indexOf(C_NEWLINE, index + 1);

    if (index !== -1 && trim(value.slice(position, index)) === '') {
      index = position;
      break;
    }
  }

  subvalue = value.slice(0, index);

  if (trim(subvalue) === '') {
    eat(subvalue);

    return null;
  }

  /* istanbul ignore if - never used (yet) */
  if (silent) {
    return true;
  }

  now = eat.now();
  subvalue = trimTrailingLines(subvalue);

  return eat(subvalue)({
    type: 'paragraph',
    children: self.tokenizeInline(subvalue, now)
  });
}

},{"trim":"../node_modules/trim/index.js","is-decimal":"../node_modules/is-decimal/index.js","trim-trailing-lines":"../node_modules/trim-trailing-lines/index.js","../util/interrupt":"../node_modules/remark-parse/lib/util/interrupt.js"}],"../node_modules/remark-parse/lib/locate/escape.js":[function(require,module,exports) {
'use strict';

module.exports = locate;

function locate(value, fromIndex) {
  return value.indexOf('\\', fromIndex);
}

},{}],"../node_modules/remark-parse/lib/tokenize/escape.js":[function(require,module,exports) {
'use strict';

var locate = require('../locate/escape');

module.exports = escape;
escape.locator = locate;

function escape(eat, value, silent) {
  var self = this;
  var character;
  var node;

  if (value.charAt(0) === '\\') {
    character = value.charAt(1);

    if (self.escape.indexOf(character) !== -1) {
      /* istanbul ignore if - never used (yet) */
      if (silent) {
        return true;
      }

      if (character === '\n') {
        node = {type: 'break'};
      } else {
        node = {
          type: 'text',
          value: character
        };
      }

      return eat('\\' + character)(node);
    }
  }
}

},{"../locate/escape":"../node_modules/remark-parse/lib/locate/escape.js"}],"../node_modules/remark-parse/lib/locate/tag.js":[function(require,module,exports) {
'use strict';

module.exports = locate;

function locate(value, fromIndex) {
  return value.indexOf('<', fromIndex);
}

},{}],"../node_modules/remark-parse/lib/tokenize/auto-link.js":[function(require,module,exports) {
'use strict';

var whitespace = require('is-whitespace-character');
var decode = require('parse-entities');
var locate = require('../locate/tag');

module.exports = autoLink;
autoLink.locator = locate;
autoLink.notInLink = true;

var C_LT = '<';
var C_GT = '>';
var C_AT_SIGN = '@';
var C_SLASH = '/';
var MAILTO = 'mailto:';
var MAILTO_LENGTH = MAILTO.length;

/* Tokenise a link. */
function autoLink(eat, value, silent) {
  var self;
  var subvalue;
  var length;
  var index;
  var queue;
  var character;
  var hasAtCharacter;
  var link;
  var now;
  var content;
  var tokenizers;
  var exit;

  if (value.charAt(0) !== C_LT) {
    return;
  }

  self = this;
  subvalue = '';
  length = value.length;
  index = 0;
  queue = '';
  hasAtCharacter = false;
  link = '';

  index++;
  subvalue = C_LT;

  while (index < length) {
    character = value.charAt(index);

    if (
      whitespace(character) ||
      character === C_GT ||
      character === C_AT_SIGN ||
      (character === ':' && value.charAt(index + 1) === C_SLASH)
    ) {
      break;
    }

    queue += character;
    index++;
  }

  if (!queue) {
    return;
  }

  link += queue;
  queue = '';

  character = value.charAt(index);
  link += character;
  index++;

  if (character === C_AT_SIGN) {
    hasAtCharacter = true;
  } else {
    if (
      character !== ':' ||
      value.charAt(index + 1) !== C_SLASH
    ) {
      return;
    }

    link += C_SLASH;
    index++;
  }

  while (index < length) {
    character = value.charAt(index);

    if (whitespace(character) || character === C_GT) {
      break;
    }

    queue += character;
    index++;
  }

  character = value.charAt(index);

  if (!queue || character !== C_GT) {
    return;
  }

  /* istanbul ignore if - never used (yet) */
  if (silent) {
    return true;
  }

  link += queue;
  content = link;
  subvalue += link + character;
  now = eat.now();
  now.column++;
  now.offset++;

  if (hasAtCharacter) {
    if (link.slice(0, MAILTO_LENGTH).toLowerCase() === MAILTO) {
      content = content.substr(MAILTO_LENGTH);
      now.column += MAILTO_LENGTH;
      now.offset += MAILTO_LENGTH;
    } else {
      link = MAILTO + link;
    }
  }

  /* Temporarily remove all tokenizers except text in autolinks. */
  tokenizers = self.inlineTokenizers;
  self.inlineTokenizers = {text: tokenizers.text};

  exit = self.enterLink();

  content = self.tokenizeInline(content, now);

  self.inlineTokenizers = tokenizers;
  exit();

  return eat(subvalue)({
    type: 'link',
    title: null,
    url: decode(link, {nonTerminated: false}),
    children: content
  });
}

},{"is-whitespace-character":"../node_modules/is-whitespace-character/index.js","parse-entities":"../node_modules/parse-entities/index.js","../locate/tag":"../node_modules/remark-parse/lib/locate/tag.js"}],"../node_modules/remark-parse/lib/locate/url.js":[function(require,module,exports) {
'use strict';

module.exports = locate;

var PROTOCOLS = ['https://', 'http://', 'mailto:'];

function locate(value, fromIndex) {
  var length = PROTOCOLS.length;
  var index = -1;
  var min = -1;
  var position;

  if (!this.options.gfm) {
    return -1;
  }

  while (++index < length) {
    position = value.indexOf(PROTOCOLS[index], fromIndex);

    if (position !== -1 && (position < min || min === -1)) {
      min = position;
    }
  }

  return min;
}

},{}],"../node_modules/remark-parse/lib/tokenize/url.js":[function(require,module,exports) {
'use strict';

var decode = require('parse-entities');
var whitespace = require('is-whitespace-character');
var locate = require('../locate/url');

module.exports = url;
url.locator = locate;
url.notInLink = true;

var C_BRACKET_OPEN = '[';
var C_BRACKET_CLOSE = ']';
var C_PAREN_OPEN = '(';
var C_PAREN_CLOSE = ')';
var C_LT = '<';
var C_AT_SIGN = '@';

var HTTP_PROTOCOL = 'http://';
var HTTPS_PROTOCOL = 'https://';
var MAILTO_PROTOCOL = 'mailto:';

var PROTOCOLS = [
  HTTP_PROTOCOL,
  HTTPS_PROTOCOL,
  MAILTO_PROTOCOL
];

var PROTOCOLS_LENGTH = PROTOCOLS.length;

function url(eat, value, silent) {
  var self = this;
  var subvalue;
  var content;
  var character;
  var index;
  var position;
  var protocol;
  var match;
  var length;
  var queue;
  var parenCount;
  var nextCharacter;
  var exit;

  if (!self.options.gfm) {
    return;
  }

  subvalue = '';
  index = -1;
  length = PROTOCOLS_LENGTH;

  while (++index < length) {
    protocol = PROTOCOLS[index];
    match = value.slice(0, protocol.length);

    if (match.toLowerCase() === protocol) {
      subvalue = match;
      break;
    }
  }

  if (!subvalue) {
    return;
  }

  index = subvalue.length;
  length = value.length;
  queue = '';
  parenCount = 0;

  while (index < length) {
    character = value.charAt(index);

    if (whitespace(character) || character === C_LT) {
      break;
    }

    if (
      character === '.' ||
      character === ',' ||
      character === ':' ||
      character === ';' ||
      character === '"' ||
      character === '\'' ||
      character === ')' ||
      character === ']'
    ) {
      nextCharacter = value.charAt(index + 1);

      if (!nextCharacter || whitespace(nextCharacter)) {
        break;
      }
    }

    if (character === C_PAREN_OPEN || character === C_BRACKET_OPEN) {
      parenCount++;
    }

    if (character === C_PAREN_CLOSE || character === C_BRACKET_CLOSE) {
      parenCount--;

      if (parenCount < 0) {
        break;
      }
    }

    queue += character;
    index++;
  }

  if (!queue) {
    return;
  }

  subvalue += queue;
  content = subvalue;

  if (protocol === MAILTO_PROTOCOL) {
    position = queue.indexOf(C_AT_SIGN);

    if (position === -1 || position === length - 1) {
      return;
    }

    content = content.substr(MAILTO_PROTOCOL.length);
  }

  /* istanbul ignore if - never used (yet) */
  if (silent) {
    return true;
  }

  exit = self.enterLink();
  content = self.tokenizeInline(content, eat.now());
  exit();

  return eat(subvalue)({
    type: 'link',
    title: null,
    url: decode(subvalue, {nonTerminated: false}),
    children: content
  });
}

},{"parse-entities":"../node_modules/parse-entities/index.js","is-whitespace-character":"../node_modules/is-whitespace-character/index.js","../locate/url":"../node_modules/remark-parse/lib/locate/url.js"}],"../node_modules/remark-parse/lib/tokenize/html-inline.js":[function(require,module,exports) {
'use strict';

var alphabetical = require('is-alphabetical');
var locate = require('../locate/tag');
var tag = require('../util/html').tag;

module.exports = inlineHTML;
inlineHTML.locator = locate;

var EXPRESSION_HTML_LINK_OPEN = /^<a /i;
var EXPRESSION_HTML_LINK_CLOSE = /^<\/a>/i;

function inlineHTML(eat, value, silent) {
  var self = this;
  var length = value.length;
  var character;
  var subvalue;

  if (value.charAt(0) !== '<' || length < 3) {
    return;
  }

  character = value.charAt(1);

  if (
    !alphabetical(character) &&
    character !== '?' &&
    character !== '!' &&
    character !== '/'
  ) {
    return;
  }

  subvalue = value.match(tag);

  if (!subvalue) {
    return;
  }

  /* istanbul ignore if - not used yet. */
  if (silent) {
    return true;
  }

  subvalue = subvalue[0];

  if (!self.inLink && EXPRESSION_HTML_LINK_OPEN.test(subvalue)) {
    self.inLink = true;
  } else if (self.inLink && EXPRESSION_HTML_LINK_CLOSE.test(subvalue)) {
    self.inLink = false;
  }

  return eat(subvalue)({type: 'html', value: subvalue});
}

},{"is-alphabetical":"../node_modules/is-alphabetical/index.js","../locate/tag":"../node_modules/remark-parse/lib/locate/tag.js","../util/html":"../node_modules/remark-parse/lib/util/html.js"}],"../node_modules/remark-parse/lib/locate/link.js":[function(require,module,exports) {
'use strict';

module.exports = locate;

function locate(value, fromIndex) {
  var link = value.indexOf('[', fromIndex);
  var image = value.indexOf('![', fromIndex);

  if (image === -1) {
    return link;
  }

  /* Link can never be `-1` if an image is found, so we don’t need
   * to check for that :) */
  return link < image ? link : image;
}

},{}],"../node_modules/remark-parse/lib/tokenize/link.js":[function(require,module,exports) {
'use strict';

var whitespace = require('is-whitespace-character');
var locate = require('../locate/link');

module.exports = link;
link.locator = locate;

var own = {}.hasOwnProperty;

var C_BACKSLASH = '\\';
var C_BRACKET_OPEN = '[';
var C_BRACKET_CLOSE = ']';
var C_PAREN_OPEN = '(';
var C_PAREN_CLOSE = ')';
var C_LT = '<';
var C_GT = '>';
var C_TICK = '`';
var C_DOUBLE_QUOTE = '"';
var C_SINGLE_QUOTE = '\'';

/* Map of characters, which can be used to mark link
 * and image titles. */
var LINK_MARKERS = {};

LINK_MARKERS[C_DOUBLE_QUOTE] = C_DOUBLE_QUOTE;
LINK_MARKERS[C_SINGLE_QUOTE] = C_SINGLE_QUOTE;

/* Map of characters, which can be used to mark link
 * and image titles in commonmark-mode. */
var COMMONMARK_LINK_MARKERS = {};

COMMONMARK_LINK_MARKERS[C_DOUBLE_QUOTE] = C_DOUBLE_QUOTE;
COMMONMARK_LINK_MARKERS[C_SINGLE_QUOTE] = C_SINGLE_QUOTE;
COMMONMARK_LINK_MARKERS[C_PAREN_OPEN] = C_PAREN_CLOSE;

function link(eat, value, silent) {
  var self = this;
  var subvalue = '';
  var index = 0;
  var character = value.charAt(0);
  var pedantic = self.options.pedantic;
  var commonmark = self.options.commonmark;
  var gfm = self.options.gfm;
  var closed;
  var count;
  var opening;
  var beforeURL;
  var beforeTitle;
  var subqueue;
  var hasMarker;
  var markers;
  var isImage;
  var content;
  var marker;
  var length;
  var title;
  var depth;
  var queue;
  var url;
  var now;
  var exit;
  var node;

  /* Detect whether this is an image. */
  if (character === '!') {
    isImage = true;
    subvalue = character;
    character = value.charAt(++index);
  }

  /* Eat the opening. */
  if (character !== C_BRACKET_OPEN) {
    return;
  }

  /* Exit when this is a link and we’re already inside
   * a link. */
  if (!isImage && self.inLink) {
    return;
  }

  subvalue += character;
  queue = '';
  index++;

  /* Eat the content. */
  length = value.length;
  now = eat.now();
  depth = 0;

  now.column += index;
  now.offset += index;

  while (index < length) {
    character = value.charAt(index);
    subqueue = character;

    if (character === C_TICK) {
      /* Inline-code in link content. */
      count = 1;

      while (value.charAt(index + 1) === C_TICK) {
        subqueue += character;
        index++;
        count++;
      }

      if (!opening) {
        opening = count;
      } else if (count >= opening) {
        opening = 0;
      }
    } else if (character === C_BACKSLASH) {
      /* Allow brackets to be escaped. */
      index++;
      subqueue += value.charAt(index);
    /* In GFM mode, brackets in code still count.
     * In all other modes, they don’t.  This empty
     * block prevents the next statements are
     * entered. */
    } else if ((!opening || gfm) && character === C_BRACKET_OPEN) {
      depth++;
    } else if ((!opening || gfm) && character === C_BRACKET_CLOSE) {
      if (depth) {
        depth--;
      } else {
        /* Allow white-space between content and
         * url in GFM mode. */
        if (!pedantic) {
          while (index < length) {
            character = value.charAt(index + 1);

            if (!whitespace(character)) {
              break;
            }

            subqueue += character;
            index++;
          }
        }

        if (value.charAt(index + 1) !== C_PAREN_OPEN) {
          return;
        }

        subqueue += C_PAREN_OPEN;
        closed = true;
        index++;

        break;
      }
    }

    queue += subqueue;
    subqueue = '';
    index++;
  }

  /* Eat the content closing. */
  if (!closed) {
    return;
  }

  content = queue;
  subvalue += queue + subqueue;
  index++;

  /* Eat white-space. */
  while (index < length) {
    character = value.charAt(index);

    if (!whitespace(character)) {
      break;
    }

    subvalue += character;
    index++;
  }

  /* Eat the URL. */
  character = value.charAt(index);
  markers = commonmark ? COMMONMARK_LINK_MARKERS : LINK_MARKERS;
  queue = '';
  beforeURL = subvalue;

  if (character === C_LT) {
    index++;
    beforeURL += C_LT;

    while (index < length) {
      character = value.charAt(index);

      if (character === C_GT) {
        break;
      }

      if (commonmark && character === '\n') {
        return;
      }

      queue += character;
      index++;
    }

    if (value.charAt(index) !== C_GT) {
      return;
    }

    subvalue += C_LT + queue + C_GT;
    url = queue;
    index++;
  } else {
    character = null;
    subqueue = '';

    while (index < length) {
      character = value.charAt(index);

      if (subqueue && own.call(markers, character)) {
        break;
      }

      if (whitespace(character)) {
        if (!pedantic) {
          break;
        }

        subqueue += character;
      } else {
        if (character === C_PAREN_OPEN) {
          depth++;
        } else if (character === C_PAREN_CLOSE) {
          if (depth === 0) {
            break;
          }

          depth--;
        }

        queue += subqueue;
        subqueue = '';

        if (character === C_BACKSLASH) {
          queue += C_BACKSLASH;
          character = value.charAt(++index);
        }

        queue += character;
      }

      index++;
    }

    subvalue += queue;
    url = queue;
    index = subvalue.length;
  }

  /* Eat white-space. */
  queue = '';

  while (index < length) {
    character = value.charAt(index);

    if (!whitespace(character)) {
      break;
    }

    queue += character;
    index++;
  }

  character = value.charAt(index);
  subvalue += queue;

  /* Eat the title. */
  if (queue && own.call(markers, character)) {
    index++;
    subvalue += character;
    queue = '';
    marker = markers[character];
    beforeTitle = subvalue;

    /* In commonmark-mode, things are pretty easy: the
     * marker cannot occur inside the title.
     *
     * Non-commonmark does, however, support nested
     * delimiters. */
    if (commonmark) {
      while (index < length) {
        character = value.charAt(index);

        if (character === marker) {
          break;
        }

        if (character === C_BACKSLASH) {
          queue += C_BACKSLASH;
          character = value.charAt(++index);
        }

        index++;
        queue += character;
      }

      character = value.charAt(index);

      if (character !== marker) {
        return;
      }

      title = queue;
      subvalue += queue + character;
      index++;

      while (index < length) {
        character = value.charAt(index);

        if (!whitespace(character)) {
          break;
        }

        subvalue += character;
        index++;
      }
    } else {
      subqueue = '';

      while (index < length) {
        character = value.charAt(index);

        if (character === marker) {
          if (hasMarker) {
            queue += marker + subqueue;
            subqueue = '';
          }

          hasMarker = true;
        } else if (!hasMarker) {
          queue += character;
        } else if (character === C_PAREN_CLOSE) {
          subvalue += queue + marker + subqueue;
          title = queue;
          break;
        } else if (whitespace(character)) {
          subqueue += character;
        } else {
          queue += marker + subqueue + character;
          subqueue = '';
          hasMarker = false;
        }

        index++;
      }
    }
  }

  if (value.charAt(index) !== C_PAREN_CLOSE) {
    return;
  }

  /* istanbul ignore if - never used (yet) */
  if (silent) {
    return true;
  }

  subvalue += C_PAREN_CLOSE;

  url = self.decode.raw(self.unescape(url), eat(beforeURL).test().end, {nonTerminated: false});

  if (title) {
    beforeTitle = eat(beforeTitle).test().end;
    title = self.decode.raw(self.unescape(title), beforeTitle);
  }

  node = {
    type: isImage ? 'image' : 'link',
    title: title || null,
    url: url
  };

  if (isImage) {
    node.alt = self.decode.raw(self.unescape(content), now) || null;
  } else {
    exit = self.enterLink();
    node.children = self.tokenizeInline(content, now);
    exit();
  }

  return eat(subvalue)(node);
}

},{"is-whitespace-character":"../node_modules/is-whitespace-character/index.js","../locate/link":"../node_modules/remark-parse/lib/locate/link.js"}],"../node_modules/remark-parse/lib/tokenize/reference.js":[function(require,module,exports) {
'use strict';

var whitespace = require('is-whitespace-character');
var locate = require('../locate/link');
var normalize = require('../util/normalize');

module.exports = reference;
reference.locator = locate;

var T_LINK = 'link';
var T_IMAGE = 'image';
var T_FOOTNOTE = 'footnote';
var REFERENCE_TYPE_SHORTCUT = 'shortcut';
var REFERENCE_TYPE_COLLAPSED = 'collapsed';
var REFERENCE_TYPE_FULL = 'full';
var C_CARET = '^';
var C_BACKSLASH = '\\';
var C_BRACKET_OPEN = '[';
var C_BRACKET_CLOSE = ']';

function reference(eat, value, silent) {
  var self = this;
  var character = value.charAt(0);
  var index = 0;
  var length = value.length;
  var subvalue = '';
  var intro = '';
  var type = T_LINK;
  var referenceType = REFERENCE_TYPE_SHORTCUT;
  var content;
  var identifier;
  var now;
  var node;
  var exit;
  var queue;
  var bracketed;
  var depth;

  /* Check whether we’re eating an image. */
  if (character === '!') {
    type = T_IMAGE;
    intro = character;
    character = value.charAt(++index);
  }

  if (character !== C_BRACKET_OPEN) {
    return;
  }

  index++;
  intro += character;
  queue = '';

  /* Check whether we’re eating a footnote. */
  if (self.options.footnotes && value.charAt(index) === C_CARET) {
    /* Exit if `![^` is found, so the `!` will be seen as text after this,
     * and we’ll enter this function again when `[^` is found. */
    if (type === T_IMAGE) {
      return;
    }

    intro += C_CARET;
    index++;
    type = T_FOOTNOTE;
  }

  /* Eat the text. */
  depth = 0;

  while (index < length) {
    character = value.charAt(index);

    if (character === C_BRACKET_OPEN) {
      bracketed = true;
      depth++;
    } else if (character === C_BRACKET_CLOSE) {
      if (!depth) {
        break;
      }

      depth--;
    }

    if (character === C_BACKSLASH) {
      queue += C_BACKSLASH;
      character = value.charAt(++index);
    }

    queue += character;
    index++;
  }

  subvalue = queue;
  content = queue;
  character = value.charAt(index);

  if (character !== C_BRACKET_CLOSE) {
    return;
  }

  index++;
  subvalue += character;
  queue = '';

  while (index < length) {
    character = value.charAt(index);

    if (!whitespace(character)) {
      break;
    }

    queue += character;
    index++;
  }

  character = value.charAt(index);

  /* Inline footnotes cannot have an identifier. */
  if (type !== T_FOOTNOTE && character === C_BRACKET_OPEN) {
    identifier = '';
    queue += character;
    index++;

    while (index < length) {
      character = value.charAt(index);

      if (character === C_BRACKET_OPEN || character === C_BRACKET_CLOSE) {
        break;
      }

      if (character === C_BACKSLASH) {
        identifier += C_BACKSLASH;
        character = value.charAt(++index);
      }

      identifier += character;
      index++;
    }

    character = value.charAt(index);

    if (character === C_BRACKET_CLOSE) {
      referenceType = identifier ? REFERENCE_TYPE_FULL : REFERENCE_TYPE_COLLAPSED;
      queue += identifier + character;
      index++;
    } else {
      identifier = '';
    }

    subvalue += queue;
    queue = '';
  } else {
    if (!content) {
      return;
    }

    identifier = content;
  }

  /* Brackets cannot be inside the identifier. */
  if (referenceType !== REFERENCE_TYPE_FULL && bracketed) {
    return;
  }

  subvalue = intro + subvalue;

  if (type === T_LINK && self.inLink) {
    return null;
  }

  /* istanbul ignore if - never used (yet) */
  if (silent) {
    return true;
  }

  if (type === T_FOOTNOTE && content.indexOf(' ') !== -1) {
    return eat(subvalue)({
      type: 'footnote',
      children: this.tokenizeInline(content, eat.now())
    });
  }

  now = eat.now();
  now.column += intro.length;
  now.offset += intro.length;
  identifier = referenceType === REFERENCE_TYPE_FULL ? identifier : content;

  node = {
    type: type + 'Reference',
    identifier: normalize(identifier)
  };

  if (type === T_LINK || type === T_IMAGE) {
    node.referenceType = referenceType;
  }

  if (type === T_LINK) {
    exit = self.enterLink();
    node.children = self.tokenizeInline(content, now);
    exit();
  } else if (type === T_IMAGE) {
    node.alt = self.decode.raw(self.unescape(content), now) || null;
  }

  return eat(subvalue)(node);
}

},{"is-whitespace-character":"../node_modules/is-whitespace-character/index.js","../locate/link":"../node_modules/remark-parse/lib/locate/link.js","../util/normalize":"../node_modules/remark-parse/lib/util/normalize.js"}],"../node_modules/remark-parse/lib/locate/strong.js":[function(require,module,exports) {
'use strict';

module.exports = locate;

function locate(value, fromIndex) {
  var asterisk = value.indexOf('**', fromIndex);
  var underscore = value.indexOf('__', fromIndex);

  if (underscore === -1) {
    return asterisk;
  }

  if (asterisk === -1) {
    return underscore;
  }

  return underscore < asterisk ? underscore : asterisk;
}

},{}],"../node_modules/remark-parse/lib/tokenize/strong.js":[function(require,module,exports) {
'use strict';

var trim = require('trim');
var whitespace = require('is-whitespace-character');
var locate = require('../locate/strong');

module.exports = strong;
strong.locator = locate;

var C_ASTERISK = '*';
var C_UNDERSCORE = '_';

function strong(eat, value, silent) {
  var self = this;
  var index = 0;
  var character = value.charAt(index);
  var now;
  var pedantic;
  var marker;
  var queue;
  var subvalue;
  var length;
  var prev;

  if (
    (character !== C_ASTERISK && character !== C_UNDERSCORE) ||
    value.charAt(++index) !== character
  ) {
    return;
  }

  pedantic = self.options.pedantic;
  marker = character;
  subvalue = marker + marker;
  length = value.length;
  index++;
  queue = '';
  character = '';

  if (pedantic && whitespace(value.charAt(index))) {
    return;
  }

  while (index < length) {
    prev = character;
    character = value.charAt(index);

    if (
      character === marker &&
      value.charAt(index + 1) === marker &&
      (!pedantic || !whitespace(prev))
    ) {
      character = value.charAt(index + 2);

      if (character !== marker) {
        if (!trim(queue)) {
          return;
        }

        /* istanbul ignore if - never used (yet) */
        if (silent) {
          return true;
        }

        now = eat.now();
        now.column += 2;
        now.offset += 2;

        return eat(subvalue + queue + subvalue)({
          type: 'strong',
          children: self.tokenizeInline(queue, now)
        });
      }
    }

    if (!pedantic && character === '\\') {
      queue += character;
      character = value.charAt(++index);
    }

    queue += character;
    index++;
  }
}

},{"trim":"../node_modules/trim/index.js","is-whitespace-character":"../node_modules/is-whitespace-character/index.js","../locate/strong":"../node_modules/remark-parse/lib/locate/strong.js"}],"../node_modules/is-word-character/index.js":[function(require,module,exports) {
'use strict'

module.exports = wordCharacter

var fromCode = String.fromCharCode
var re = /\w/

/* Check if the given character code, or the character
 * code at the first character, is a word character. */
function wordCharacter(character) {
  return re.test(
    typeof character === 'number' ? fromCode(character) : character.charAt(0)
  )
}

},{}],"../node_modules/remark-parse/lib/locate/emphasis.js":[function(require,module,exports) {
'use strict';

module.exports = locate;

function locate(value, fromIndex) {
  var asterisk = value.indexOf('*', fromIndex);
  var underscore = value.indexOf('_', fromIndex);

  if (underscore === -1) {
    return asterisk;
  }

  if (asterisk === -1) {
    return underscore;
  }

  return underscore < asterisk ? underscore : asterisk;
}

},{}],"../node_modules/remark-parse/lib/tokenize/emphasis.js":[function(require,module,exports) {
'use strict';

var trim = require('trim');
var word = require('is-word-character');
var whitespace = require('is-whitespace-character');
var locate = require('../locate/emphasis');

module.exports = emphasis;
emphasis.locator = locate;

var C_ASTERISK = '*';
var C_UNDERSCORE = '_';

function emphasis(eat, value, silent) {
  var self = this;
  var index = 0;
  var character = value.charAt(index);
  var now;
  var pedantic;
  var marker;
  var queue;
  var subvalue;
  var length;
  var prev;

  if (character !== C_ASTERISK && character !== C_UNDERSCORE) {
    return;
  }

  pedantic = self.options.pedantic;
  subvalue = character;
  marker = character;
  length = value.length;
  index++;
  queue = '';
  character = '';

  if (pedantic && whitespace(value.charAt(index))) {
    return;
  }

  while (index < length) {
    prev = character;
    character = value.charAt(index);

    if (character === marker && (!pedantic || !whitespace(prev))) {
      character = value.charAt(++index);

      if (character !== marker) {
        if (!trim(queue) || prev === marker) {
          return;
        }

        if (!pedantic && marker === C_UNDERSCORE && word(character)) {
          queue += marker;
          continue;
        }

        /* istanbul ignore if - never used (yet) */
        if (silent) {
          return true;
        }

        now = eat.now();
        now.column++;
        now.offset++;

        return eat(subvalue + queue + marker)({
          type: 'emphasis',
          children: self.tokenizeInline(queue, now)
        });
      }

      queue += marker;
    }

    if (!pedantic && character === '\\') {
      queue += character;
      character = value.charAt(++index);
    }

    queue += character;
    index++;
  }
}

},{"trim":"../node_modules/trim/index.js","is-word-character":"../node_modules/is-word-character/index.js","is-whitespace-character":"../node_modules/is-whitespace-character/index.js","../locate/emphasis":"../node_modules/remark-parse/lib/locate/emphasis.js"}],"../node_modules/remark-parse/lib/locate/delete.js":[function(require,module,exports) {
'use strict';

module.exports = locate;

function locate(value, fromIndex) {
  return value.indexOf('~~', fromIndex);
}

},{}],"../node_modules/remark-parse/lib/tokenize/delete.js":[function(require,module,exports) {
'use strict';

var whitespace = require('is-whitespace-character');
var locate = require('../locate/delete');

module.exports = strikethrough;
strikethrough.locator = locate;

var C_TILDE = '~';
var DOUBLE = '~~';

function strikethrough(eat, value, silent) {
  var self = this;
  var character = '';
  var previous = '';
  var preceding = '';
  var subvalue = '';
  var index;
  var length;
  var now;

  if (
    !self.options.gfm ||
    value.charAt(0) !== C_TILDE ||
    value.charAt(1) !== C_TILDE ||
    whitespace(value.charAt(2))
  ) {
    return;
  }

  index = 1;
  length = value.length;
  now = eat.now();
  now.column += 2;
  now.offset += 2;

  while (++index < length) {
    character = value.charAt(index);

    if (
      character === C_TILDE &&
      previous === C_TILDE &&
      (!preceding || !whitespace(preceding))
    ) {
      /* istanbul ignore if - never used (yet) */
      if (silent) {
        return true;
      }

      return eat(DOUBLE + subvalue + DOUBLE)({
        type: 'delete',
        children: self.tokenizeInline(subvalue, now)
      });
    }

    subvalue += previous;
    preceding = previous;
    previous = character;
  }
}

},{"is-whitespace-character":"../node_modules/is-whitespace-character/index.js","../locate/delete":"../node_modules/remark-parse/lib/locate/delete.js"}],"../node_modules/remark-parse/lib/locate/code-inline.js":[function(require,module,exports) {
'use strict';

module.exports = locate;

function locate(value, fromIndex) {
  return value.indexOf('`', fromIndex);
}

},{}],"../node_modules/remark-parse/lib/tokenize/code-inline.js":[function(require,module,exports) {
'use strict';

var whitespace = require('is-whitespace-character');
var locate = require('../locate/code-inline');

module.exports = inlineCode;
inlineCode.locator = locate;

var C_TICK = '`';

/* Tokenise inline code. */
function inlineCode(eat, value, silent) {
  var length = value.length;
  var index = 0;
  var queue = '';
  var tickQueue = '';
  var contentQueue;
  var subqueue;
  var count;
  var openingCount;
  var subvalue;
  var character;
  var found;
  var next;

  while (index < length) {
    if (value.charAt(index) !== C_TICK) {
      break;
    }

    queue += C_TICK;
    index++;
  }

  if (!queue) {
    return;
  }

  subvalue = queue;
  openingCount = index;
  queue = '';
  next = value.charAt(index);
  count = 0;

  while (index < length) {
    character = next;
    next = value.charAt(index + 1);

    if (character === C_TICK) {
      count++;
      tickQueue += character;
    } else {
      count = 0;
      queue += character;
    }

    if (count && next !== C_TICK) {
      if (count === openingCount) {
        subvalue += queue + tickQueue;
        found = true;
        break;
      }

      queue += tickQueue;
      tickQueue = '';
    }

    index++;
  }

  if (!found) {
    if (openingCount % 2 !== 0) {
      return;
    }

    queue = '';
  }

  /* istanbul ignore if - never used (yet) */
  if (silent) {
    return true;
  }

  contentQueue = '';
  subqueue = '';
  length = queue.length;
  index = -1;

  while (++index < length) {
    character = queue.charAt(index);

    if (whitespace(character)) {
      subqueue += character;
      continue;
    }

    if (subqueue) {
      if (contentQueue) {
        contentQueue += subqueue;
      }

      subqueue = '';
    }

    contentQueue += character;
  }

  return eat(subvalue)({
    type: 'inlineCode',
    value: contentQueue
  });
}

},{"is-whitespace-character":"../node_modules/is-whitespace-character/index.js","../locate/code-inline":"../node_modules/remark-parse/lib/locate/code-inline.js"}],"../node_modules/remark-parse/lib/locate/break.js":[function(require,module,exports) {
'use strict';

module.exports = locate;

function locate(value, fromIndex) {
  var index = value.indexOf('\n', fromIndex);

  while (index > fromIndex) {
    if (value.charAt(index - 1) !== ' ') {
      break;
    }

    index--;
  }

  return index;
}

},{}],"../node_modules/remark-parse/lib/tokenize/break.js":[function(require,module,exports) {
'use strict';

var locate = require('../locate/break');

module.exports = hardBreak;
hardBreak.locator = locate;

var MIN_BREAK_LENGTH = 2;

function hardBreak(eat, value, silent) {
  var length = value.length;
  var index = -1;
  var queue = '';
  var character;

  while (++index < length) {
    character = value.charAt(index);

    if (character === '\n') {
      if (index < MIN_BREAK_LENGTH) {
        return;
      }

      /* istanbul ignore if - never used (yet) */
      if (silent) {
        return true;
      }

      queue += character;

      return eat(queue)({type: 'break'});
    }

    if (character !== ' ') {
      return;
    }

    queue += character;
  }
}

},{"../locate/break":"../node_modules/remark-parse/lib/locate/break.js"}],"../node_modules/remark-parse/lib/tokenize/text.js":[function(require,module,exports) {
'use strict';

module.exports = text;

function text(eat, value, silent) {
  var self = this;
  var methods;
  var tokenizers;
  var index;
  var length;
  var subvalue;
  var position;
  var tokenizer;
  var name;
  var min;
  var now;

  /* istanbul ignore if - never used (yet) */
  if (silent) {
    return true;
  }

  methods = self.inlineMethods;
  length = methods.length;
  tokenizers = self.inlineTokenizers;
  index = -1;
  min = value.length;

  while (++index < length) {
    name = methods[index];

    if (name === 'text' || !tokenizers[name]) {
      continue;
    }

    tokenizer = tokenizers[name].locator;

    if (!tokenizer) {
      eat.file.fail('Missing locator: `' + name + '`');
    }

    position = tokenizer.call(self, value, 1);

    if (position !== -1 && position < min) {
      min = position;
    }
  }

  subvalue = value.slice(0, min);
  now = eat.now();

  self.decode(subvalue, now, function (content, position, source) {
    eat(source || content)({
      type: 'text',
      value: content
    });
  });
}

},{}],"../node_modules/remark-parse/lib/parser.js":[function(require,module,exports) {
'use strict';

var xtend = require('xtend');
var toggle = require('state-toggle');
var vfileLocation = require('vfile-location');
var unescape = require('./unescape');
var decode = require('./decode');
var tokenizer = require('./tokenizer');

module.exports = Parser;

function Parser(doc, file) {
  this.file = file;
  this.offset = {};
  this.options = xtend(this.options);
  this.setOptions({});

  this.inList = false;
  this.inBlock = false;
  this.inLink = false;
  this.atStart = true;

  this.toOffset = vfileLocation(file).toOffset;
  this.unescape = unescape(this, 'escape');
  this.decode = decode(this);
}

var proto = Parser.prototype;

/* Expose core. */
proto.setOptions = require('./set-options');
proto.parse = require('./parse');

/* Expose `defaults`. */
proto.options = require('./defaults');

/* Enter and exit helpers. */
proto.exitStart = toggle('atStart', true);
proto.enterList = toggle('inList', false);
proto.enterLink = toggle('inLink', false);
proto.enterBlock = toggle('inBlock', false);

/* Nodes that can interupt a paragraph:
 *
 * ```markdown
 * A paragraph, followed by a thematic break.
 * ___
 * ```
 *
 * In the above example, the thematic break “interupts”
 * the paragraph. */
proto.interruptParagraph = [
  ['thematicBreak'],
  ['atxHeading'],
  ['fencedCode'],
  ['blockquote'],
  ['html'],
  ['setextHeading', {commonmark: false}],
  ['definition', {commonmark: false}],
  ['footnote', {commonmark: false}]
];

/* Nodes that can interupt a list:
 *
 * ```markdown
 * - One
 * ___
 * ```
 *
 * In the above example, the thematic break “interupts”
 * the list. */
proto.interruptList = [
  ['atxHeading', {pedantic: false}],
  ['fencedCode', {pedantic: false}],
  ['thematicBreak', {pedantic: false}],
  ['definition', {commonmark: false}],
  ['footnote', {commonmark: false}]
];

/* Nodes that can interupt a blockquote:
 *
 * ```markdown
 * > A paragraph.
 * ___
 * ```
 *
 * In the above example, the thematic break “interupts”
 * the blockquote. */
proto.interruptBlockquote = [
  ['indentedCode', {commonmark: true}],
  ['fencedCode', {commonmark: true}],
  ['atxHeading', {commonmark: true}],
  ['setextHeading', {commonmark: true}],
  ['thematicBreak', {commonmark: true}],
  ['html', {commonmark: true}],
  ['list', {commonmark: true}],
  ['definition', {commonmark: false}],
  ['footnote', {commonmark: false}]
];

/* Handlers. */
proto.blockTokenizers = {
  newline: require('./tokenize/newline'),
  indentedCode: require('./tokenize/code-indented'),
  fencedCode: require('./tokenize/code-fenced'),
  blockquote: require('./tokenize/blockquote'),
  atxHeading: require('./tokenize/heading-atx'),
  thematicBreak: require('./tokenize/thematic-break'),
  list: require('./tokenize/list'),
  setextHeading: require('./tokenize/heading-setext'),
  html: require('./tokenize/html-block'),
  footnote: require('./tokenize/footnote-definition'),
  definition: require('./tokenize/definition'),
  table: require('./tokenize/table'),
  paragraph: require('./tokenize/paragraph')
};

proto.inlineTokenizers = {
  escape: require('./tokenize/escape'),
  autoLink: require('./tokenize/auto-link'),
  url: require('./tokenize/url'),
  html: require('./tokenize/html-inline'),
  link: require('./tokenize/link'),
  reference: require('./tokenize/reference'),
  strong: require('./tokenize/strong'),
  emphasis: require('./tokenize/emphasis'),
  deletion: require('./tokenize/delete'),
  code: require('./tokenize/code-inline'),
  break: require('./tokenize/break'),
  text: require('./tokenize/text')
};

/* Expose precedence. */
proto.blockMethods = keys(proto.blockTokenizers);
proto.inlineMethods = keys(proto.inlineTokenizers);

/* Tokenizers. */
proto.tokenizeBlock = tokenizer('block');
proto.tokenizeInline = tokenizer('inline');
proto.tokenizeFactory = tokenizer;

/* Get all keys in `value`. */
function keys(value) {
  var result = [];
  var key;

  for (key in value) {
    result.push(key);
  }

  return result;
}

},{"xtend":"../node_modules/xtend/immutable.js","state-toggle":"../node_modules/state-toggle/index.js","vfile-location":"../node_modules/vfile-location/index.js","./unescape":"../node_modules/remark-parse/lib/unescape.js","./decode":"../node_modules/remark-parse/lib/decode.js","./tokenizer":"../node_modules/remark-parse/lib/tokenizer.js","./set-options":"../node_modules/remark-parse/lib/set-options.js","./parse":"../node_modules/remark-parse/lib/parse.js","./defaults":"../node_modules/remark-parse/lib/defaults.js","./tokenize/newline":"../node_modules/remark-parse/lib/tokenize/newline.js","./tokenize/code-indented":"../node_modules/remark-parse/lib/tokenize/code-indented.js","./tokenize/code-fenced":"../node_modules/remark-parse/lib/tokenize/code-fenced.js","./tokenize/blockquote":"../node_modules/remark-parse/lib/tokenize/blockquote.js","./tokenize/heading-atx":"../node_modules/remark-parse/lib/tokenize/heading-atx.js","./tokenize/thematic-break":"../node_modules/remark-parse/lib/tokenize/thematic-break.js","./tokenize/list":"../node_modules/remark-parse/lib/tokenize/list.js","./tokenize/heading-setext":"../node_modules/remark-parse/lib/tokenize/heading-setext.js","./tokenize/html-block":"../node_modules/remark-parse/lib/tokenize/html-block.js","./tokenize/footnote-definition":"../node_modules/remark-parse/lib/tokenize/footnote-definition.js","./tokenize/definition":"../node_modules/remark-parse/lib/tokenize/definition.js","./tokenize/table":"../node_modules/remark-parse/lib/tokenize/table.js","./tokenize/paragraph":"../node_modules/remark-parse/lib/tokenize/paragraph.js","./tokenize/escape":"../node_modules/remark-parse/lib/tokenize/escape.js","./tokenize/auto-link":"../node_modules/remark-parse/lib/tokenize/auto-link.js","./tokenize/url":"../node_modules/remark-parse/lib/tokenize/url.js","./tokenize/html-inline":"../node_modules/remark-parse/lib/tokenize/html-inline.js","./tokenize/link":"../node_modules/remark-parse/lib/tokenize/link.js","./tokenize/reference":"../node_modules/remark-parse/lib/tokenize/reference.js","./tokenize/strong":"../node_modules/remark-parse/lib/tokenize/strong.js","./tokenize/emphasis":"../node_modules/remark-parse/lib/tokenize/emphasis.js","./tokenize/delete":"../node_modules/remark-parse/lib/tokenize/delete.js","./tokenize/code-inline":"../node_modules/remark-parse/lib/tokenize/code-inline.js","./tokenize/break":"../node_modules/remark-parse/lib/tokenize/break.js","./tokenize/text":"../node_modules/remark-parse/lib/tokenize/text.js"}],"../node_modules/remark-parse/index.js":[function(require,module,exports) {
'use strict';

var unherit = require('unherit');
var xtend = require('xtend');
var Parser = require('./lib/parser.js');

module.exports = parse;
parse.Parser = Parser;

function parse(options) {
  var Local = unherit(Parser);
  Local.prototype.options = xtend(Local.prototype.options, this.data('settings'), options);
  this.Parser = Local;
}

},{"unherit":"../node_modules/unherit/index.js","xtend":"../node_modules/xtend/immutable.js","./lib/parser.js":"../node_modules/remark-parse/lib/parser.js"}],"../node_modules/react-is/cjs/react-is.development.js":[function(require,module,exports) {
/** @license React v16.8.6
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict';

if ("development" !== "production") {
  (function () {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    }); // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
    // nor polyfill, then a plain number is used for performance.

    var hasSymbol = typeof Symbol === 'function' && Symbol.for;
    var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
    var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
    var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
    var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
    var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
    var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
    var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
    var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
    var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
    var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
    var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
    var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
    var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

    function isValidElementType(type) {
      return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
    }
    /**
     * Forked from fbjs/warning:
     * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
     *
     * Only change is we use console.warn instead of console.error,
     * and do nothing when 'console' is not supported.
     * This really simplifies the code.
     * ---
     * Similar to invariant but only logs a warning if the condition is not met.
     * This can be used to log issues in development environments in critical
     * paths. Removing the logging code for production environments will keep the
     * same logic and follow the same code paths.
     */


    var lowPriorityWarning = function () {};

    {
      var printWarning = function (format) {
        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        var argIndex = 0;
        var message = 'Warning: ' + format.replace(/%s/g, function () {
          return args[argIndex++];
        });

        if (typeof console !== 'undefined') {
          console.warn(message);
        }

        try {
          // --- Welcome to debugging React ---
          // This error was thrown as a convenience so that you can use this stack
          // to find the callsite that caused this warning to fire.
          throw new Error(message);
        } catch (x) {}
      };

      lowPriorityWarning = function (condition, format) {
        if (format === undefined) {
          throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
        }

        if (!condition) {
          for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
            args[_key2 - 2] = arguments[_key2];
          }

          printWarning.apply(undefined, [format].concat(args));
        }
      };
    }
    var lowPriorityWarning$1 = lowPriorityWarning;

    function typeOf(object) {
      if (typeof object === 'object' && object !== null) {
        var $$typeof = object.$$typeof;

        switch ($$typeof) {
          case REACT_ELEMENT_TYPE:
            var type = object.type;

            switch (type) {
              case REACT_ASYNC_MODE_TYPE:
              case REACT_CONCURRENT_MODE_TYPE:
              case REACT_FRAGMENT_TYPE:
              case REACT_PROFILER_TYPE:
              case REACT_STRICT_MODE_TYPE:
              case REACT_SUSPENSE_TYPE:
                return type;

              default:
                var $$typeofType = type && type.$$typeof;

                switch ($$typeofType) {
                  case REACT_CONTEXT_TYPE:
                  case REACT_FORWARD_REF_TYPE:
                  case REACT_PROVIDER_TYPE:
                    return $$typeofType;

                  default:
                    return $$typeof;
                }

            }

          case REACT_LAZY_TYPE:
          case REACT_MEMO_TYPE:
          case REACT_PORTAL_TYPE:
            return $$typeof;
        }
      }

      return undefined;
    } // AsyncMode is deprecated along with isAsyncMode


    var AsyncMode = REACT_ASYNC_MODE_TYPE;
    var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
    var ContextConsumer = REACT_CONTEXT_TYPE;
    var ContextProvider = REACT_PROVIDER_TYPE;
    var Element = REACT_ELEMENT_TYPE;
    var ForwardRef = REACT_FORWARD_REF_TYPE;
    var Fragment = REACT_FRAGMENT_TYPE;
    var Lazy = REACT_LAZY_TYPE;
    var Memo = REACT_MEMO_TYPE;
    var Portal = REACT_PORTAL_TYPE;
    var Profiler = REACT_PROFILER_TYPE;
    var StrictMode = REACT_STRICT_MODE_TYPE;
    var Suspense = REACT_SUSPENSE_TYPE;
    var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

    function isAsyncMode(object) {
      {
        if (!hasWarnedAboutDeprecatedIsAsyncMode) {
          hasWarnedAboutDeprecatedIsAsyncMode = true;
          lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
        }
      }
      return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
    }

    function isConcurrentMode(object) {
      return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
    }

    function isContextConsumer(object) {
      return typeOf(object) === REACT_CONTEXT_TYPE;
    }

    function isContextProvider(object) {
      return typeOf(object) === REACT_PROVIDER_TYPE;
    }

    function isElement(object) {
      return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
    }

    function isForwardRef(object) {
      return typeOf(object) === REACT_FORWARD_REF_TYPE;
    }

    function isFragment(object) {
      return typeOf(object) === REACT_FRAGMENT_TYPE;
    }

    function isLazy(object) {
      return typeOf(object) === REACT_LAZY_TYPE;
    }

    function isMemo(object) {
      return typeOf(object) === REACT_MEMO_TYPE;
    }

    function isPortal(object) {
      return typeOf(object) === REACT_PORTAL_TYPE;
    }

    function isProfiler(object) {
      return typeOf(object) === REACT_PROFILER_TYPE;
    }

    function isStrictMode(object) {
      return typeOf(object) === REACT_STRICT_MODE_TYPE;
    }

    function isSuspense(object) {
      return typeOf(object) === REACT_SUSPENSE_TYPE;
    }

    exports.typeOf = typeOf;
    exports.AsyncMode = AsyncMode;
    exports.ConcurrentMode = ConcurrentMode;
    exports.ContextConsumer = ContextConsumer;
    exports.ContextProvider = ContextProvider;
    exports.Element = Element;
    exports.ForwardRef = ForwardRef;
    exports.Fragment = Fragment;
    exports.Lazy = Lazy;
    exports.Memo = Memo;
    exports.Portal = Portal;
    exports.Profiler = Profiler;
    exports.StrictMode = StrictMode;
    exports.Suspense = Suspense;
    exports.isValidElementType = isValidElementType;
    exports.isAsyncMode = isAsyncMode;
    exports.isConcurrentMode = isConcurrentMode;
    exports.isContextConsumer = isContextConsumer;
    exports.isContextProvider = isContextProvider;
    exports.isElement = isElement;
    exports.isForwardRef = isForwardRef;
    exports.isFragment = isFragment;
    exports.isLazy = isLazy;
    exports.isMemo = isMemo;
    exports.isPortal = isPortal;
    exports.isProfiler = isProfiler;
    exports.isStrictMode = isStrictMode;
    exports.isSuspense = isSuspense;
  })();
}
},{}],"../node_modules/react-is/index.js":[function(require,module,exports) {
'use strict';

if ("development" === 'production') {
  module.exports = require('./cjs/react-is.production.min.js');
} else {
  module.exports = require('./cjs/react-is.development.js');
}
},{"./cjs/react-is.development.js":"../node_modules/react-is/cjs/react-is.development.js"}],"../node_modules/object-assign/index.js":[function(require,module,exports) {
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
'use strict';
/* eslint-disable no-unused-vars */

var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
  if (val === null || val === undefined) {
    throw new TypeError('Object.assign cannot be called with null or undefined');
  }

  return Object(val);
}

function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    } // Detect buggy property enumeration order in older V8 versions.
    // https://bugs.chromium.org/p/v8/issues/detail?id=4118


    var test1 = new String('abc'); // eslint-disable-line no-new-wrappers

    test1[5] = 'de';

    if (Object.getOwnPropertyNames(test1)[0] === '5') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test2 = {};

    for (var i = 0; i < 10; i++) {
      test2['_' + String.fromCharCode(i)] = i;
    }

    var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
      return test2[n];
    });

    if (order2.join('') !== '0123456789') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test3 = {};
    'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
      test3[letter] = letter;
    });

    if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
      return false;
    }

    return true;
  } catch (err) {
    // We don't expect any of the above to throw, but better to be safe.
    return false;
  }
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
  var from;
  var to = toObject(target);
  var symbols;

  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);

    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }

    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);

      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from, symbols[i])) {
          to[symbols[i]] = from[symbols[i]];
        }
      }
    }
  }

  return to;
};
},{}],"../node_modules/prop-types/lib/ReactPropTypesSecret.js":[function(require,module,exports) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;

},{}],"../node_modules/prop-types/checkPropTypes.js":[function(require,module,exports) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict';

var printWarning = function () {};

if ("development" !== 'production') {
  var ReactPropTypesSecret = require('./lib/ReactPropTypesSecret');

  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function (text) {
    var message = 'Warning: ' + text;

    if (typeof console !== 'undefined') {
      console.error(message);
    }

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}
/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */


function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if ("development" !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }

        if (error && !(error instanceof Error)) {
          printWarning((componentName || 'React class') + ': type specification of ' + location + ' `' + typeSpecName + '` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a ' + typeof error + '. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).');
        }

        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;
          var stack = getStack ? getStack() : '';
          printWarning('Failed ' + location + ' type: ' + error.message + (stack != null ? stack : ''));
        }
      }
    }
  }
}
/**
 * Resets warning cache when testing.
 *
 * @private
 */


checkPropTypes.resetWarningCache = function () {
  if ("development" !== 'production') {
    loggedTypeFailures = {};
  }
};

module.exports = checkPropTypes;
},{"./lib/ReactPropTypesSecret":"../node_modules/prop-types/lib/ReactPropTypesSecret.js"}],"../node_modules/prop-types/factoryWithTypeCheckers.js":[function(require,module,exports) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict';

var ReactIs = require('react-is');

var assign = require('object-assign');

var ReactPropTypesSecret = require('./lib/ReactPropTypesSecret');

var checkPropTypes = require('./checkPropTypes');

var has = Function.call.bind(Object.prototype.hasOwnProperty);

var printWarning = function () {};

if ("development" !== 'production') {
  printWarning = function (text) {
    var message = 'Warning: ' + text;

    if (typeof console !== 'undefined') {
      console.error(message);
    }

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function (isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */

  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);

    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }
  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */


  var ANONYMOUS = '<<anonymous>>'; // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.

  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),
    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker
  };
  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */

  /*eslint-disable no-self-compare*/

  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */


  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  } // Make `instanceof Error` still work for returned errors.


  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if ("development" !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }

    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use `PropTypes.checkPropTypes()` to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
          err.name = 'Invariant Violation';
          throw err;
        } else if ("development" !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;

          if (!manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
          manualPropTypeWarningCount < 3) {
            printWarning('You are manually calling a React.PropTypes validation ' + 'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' + 'and will throw in the standalone `prop-types` package. ' + 'You may be seeing this warning due to a third-party PropTypes ' + 'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.');
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }

      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }

          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }

        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);
    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);

      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }

      var propValue = props[propName];

      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }

      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);

        if (error instanceof Error) {
          return error;
        }
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];

      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];

      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if ("development" !== 'production') {
        if (arguments.length > 1) {
          printWarning('Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' + 'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).');
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }

      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];

      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);

        if (type === 'symbol') {
          return String(value);
        }

        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }

    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }

      var propValue = props[propName];
      var propType = getPropType(propValue);

      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }

      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);

          if (error instanceof Error) {
            return error;
          }
        }
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      "development" !== 'production' ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];

      if (typeof checker !== 'function') {
        printWarning('Invalid argument supplied to oneOfType. Expected an array of check functions, but ' + 'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.');
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];

        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }

    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);

      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }

      for (var key in shapeTypes) {
        var checker = shapeTypes[key];

        if (!checker) {
          continue;
        }

        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);

        if (error) {
          return error;
        }
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);

      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      } // We need to check all keys in case some are required but missing from
      // props.


      var allKeys = assign({}, props[propName], shapeTypes);

      for (var key in allKeys) {
        var checker = shapeTypes[key];

        if (!checker) {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' + '\nBad object: ' + JSON.stringify(props[propName], null, '  ') + '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  '));
        }

        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);

        if (error) {
          return error;
        }
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;

      case 'boolean':
        return !propValue;

      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }

        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);

        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;

          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;

              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;

      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    } // falsy value can't be a Symbol


    if (!propValue) {
      return false;
    } // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'


    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    } // Fallback for non-spec compliant Symbols which are polyfilled.


    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  } // Equivalent of `typeof` but with special handling for array and regexp.


  function getPropType(propValue) {
    var propType = typeof propValue;

    if (Array.isArray(propValue)) {
      return 'array';
    }

    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }

    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }

    return propType;
  } // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.


  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }

    var propType = getPropType(propValue);

    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }

    return propType;
  } // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"


  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);

    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;

      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;

      default:
        return type;
    }
  } // Returns class name of the object, if any.


  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }

    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;
  return ReactPropTypes;
};
},{"react-is":"../node_modules/react-is/index.js","object-assign":"../node_modules/object-assign/index.js","./lib/ReactPropTypesSecret":"../node_modules/prop-types/lib/ReactPropTypesSecret.js","./checkPropTypes":"../node_modules/prop-types/checkPropTypes.js"}],"../node_modules/prop-types/index.js":[function(require,module,exports) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
if ("development" !== 'production') {
  var ReactIs = require('react-is'); // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod


  var throwOnDirectAccess = true;
  module.exports = require('./factoryWithTypeCheckers')(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = require('./factoryWithThrowingShims')();
}
},{"react-is":"../node_modules/react-is/index.js","./factoryWithTypeCheckers":"../node_modules/prop-types/factoryWithTypeCheckers.js"}],"../node_modules/unist-util-visit-parents/index.js":[function(require,module,exports) {
'use strict'

/* Expose. */
module.exports = visitParents

/* Visit. */
function visitParents(tree, type, visitor) {
  var stack = []

  if (typeof type === 'function') {
    visitor = type
    type = null
  }

  one(tree)

  /* Visit a single node. */
  function one(node) {
    var result

    if (!type || node.type === type) {
      result = visitor(node, stack.concat())
    }

    if (node.children && result !== false) {
      return all(node.children, node)
    }

    return result
  }

  /* Visit children in `parent`. */
  function all(children, parent) {
    var length = children.length
    var index = -1
    var child

    stack.push(parent)

    while (++index < length) {
      child = children[index]

      if (child && one(child) === false) {
        return false
      }
    }

    stack.pop()

    return true
  }
}

},{}],"../node_modules/mdast-add-list-metadata/index.js":[function(require,module,exports) {
var visitWithParents = require('unist-util-visit-parents');

function addListMetadata() {
  return function (ast) {
    visitWithParents(ast, 'list', function (listNode, parents) {
      var depth = 0, i, n;
      for (i = 0, n = parents.length; i < n; i++) {
        if (parents[i].type === 'list') depth += 1;
      }
      for (i = 0, n = listNode.children.length; i < n; i++) {
        var child = listNode.children[i];
        child.index = i;
        child.ordered = listNode.ordered;
      }
      listNode.depth = depth;
    });
    return ast;
  };
}

module.exports = addListMetadata;

},{"unist-util-visit-parents":"../node_modules/unist-util-visit-parents/index.js"}],"../node_modules/react-markdown/lib/plugins/naive-html.js":[function(require,module,exports) {
"use strict";

/**
 * Naive, simple plugin to match inline nodes without attributes
 * This allows say <strong>foo</strong>, but not <strong class="very">foo</strong>
 * For proper HTML support, you'll want a different plugin
 **/
var visit = require('unist-util-visit');

var type = 'virtualHtml';
var selfClosingRe = /^<(area|base|br|col|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)\s*\/?>$/i;
var simpleTagRe = /^<(\/?)([a-z]+)\s*>$/;

module.exports = function (tree) {
  var open;
  var currentParent;
  visit(tree, 'html', function (node, index, parent) {
    if (currentParent !== parent) {
      open = [];
      currentParent = parent;
    }

    var selfClosing = getSelfClosing(node);

    if (selfClosing) {
      parent.children.splice(index, 1, {
        type: type,
        tag: selfClosing,
        position: node.position
      });
      return true;
    }

    var current = getSimpleTag(node, parent);

    if (!current) {
      return true;
    }

    var matching = findAndPull(open, current.tag);

    if (matching) {
      parent.children.splice(index, 0, virtual(current, matching, parent));
    } else if (!current.opening) {
      open.push(current);
    }

    return true;
  }, true // Iterate in reverse
  );
  return tree;
};

function findAndPull(open, matchingTag) {
  var i = open.length;

  while (i--) {
    if (open[i].tag === matchingTag) {
      return open.splice(i, 1)[0];
    }
  }

  return false;
}

function getSimpleTag(node, parent) {
  var match = node.value.match(simpleTagRe);
  return match ? {
    tag: match[2],
    opening: !match[1],
    node: node
  } : false;
}

function getSelfClosing(node) {
  var match = node.value.match(selfClosingRe);
  return match ? match[1] : false;
}

function virtual(fromNode, toNode, parent) {
  var fromIndex = parent.children.indexOf(fromNode.node);
  var toIndex = parent.children.indexOf(toNode.node);
  var extracted = parent.children.splice(fromIndex, toIndex - fromIndex + 1);
  var children = extracted.slice(1, -1);
  return {
    type: type,
    children: children,
    tag: fromNode.tag,
    position: {
      start: fromNode.node.position.start,
      end: toNode.node.position.end,
      indent: []
    }
  };
}
},{"unist-util-visit":"../node_modules/unist-util-visit/index.js"}],"../node_modules/react-markdown/lib/plugins/disallow-node.js":[function(require,module,exports) {
"use strict";

var visit = require('unist-util-visit');

exports.ofType = function (types, mode) {
  return function (node) {
    types.forEach(function (type) {
      return visit(node, type, disallow, true);
    });
    return node;
  };

  function disallow(node, index, parent) {
    if (parent) {
      untangle(node, index, parent, mode);
    }
  }
};

exports.ifNotMatch = function (allowNode, mode) {
  return function (node) {
    visit(node, disallow, true);
    return node;
  };

  function disallow(node, index, parent) {
    if (parent && !allowNode(node, index, parent)) {
      untangle(node, index, parent, mode);
    }
  }
};

function untangle(node, index, parent, mode) {
  if (mode === 'remove') {
    parent.children.splice(index, 1);
  } else if (mode === 'unwrap') {
    var args = [index, 1];

    if (node.children) {
      args = args.concat(node.children);
    }

    Array.prototype.splice.apply(parent.children, args);
  }
}
},{"unist-util-visit":"../node_modules/unist-util-visit/index.js"}],"../node_modules/react-markdown/lib/ast-to-react.js":[function(require,module,exports) {
'use strict';

var React = require('react');

var xtend = require('xtend');

function astToReact(node, options) {
  var parent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var index = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var renderer = options.renderers[node.type];
  var pos = node.position.start;
  var key = [node.type, pos.line, pos.column].join('-');

  if (typeof renderer !== 'function' && typeof renderer !== 'string' && !isReactFragment(renderer)) {
    throw new Error("Renderer for type `".concat(node.type, "` not defined or is not renderable"));
  }

  var nodeProps = getNodeProps(node, key, options, renderer, parent, index);
  return React.createElement(renderer, nodeProps, nodeProps.children || resolveChildren() || undefined);

  function resolveChildren() {
    return node.children && node.children.map(function (childNode, i) {
      return astToReact(childNode, options, {
        node: node,
        props: nodeProps
      }, i);
    });
  }
}

function isReactFragment(renderer) {
  return React.Fragment && React.Fragment === renderer;
} // eslint-disable-next-line max-params, complexity


function getNodeProps(node, key, opts, renderer, parent, index) {
  var props = {
    key: key
  };
  var isTagRenderer = typeof renderer === 'string'; // `sourcePos` is true if the user wants source information (line/column info from markdown source)

  if (opts.sourcePos && node.position) {
    props['data-sourcepos'] = flattenPosition(node.position);
  }

  if (opts.rawSourcePos && !isTagRenderer) {
    props.sourcePosition = node.position;
  } // If `includeNodeIndex` is true, pass node index info to all non-tag renderers


  if (opts.includeNodeIndex && parent.node && parent.node.children && !isTagRenderer) {
    props.index = parent.node.children.indexOf(node);
    props.parentChildCount = parent.node.children.length;
  }

  var ref = node.identifier !== null && node.identifier !== undefined ? opts.definitions[node.identifier] || {} : null;

  switch (node.type) {
    case 'root':
      assignDefined(props, {
        className: opts.className
      });
      break;

    case 'text':
      props.nodeKey = key;
      props.children = node.value;
      break;

    case 'heading':
      props.level = node.depth;
      break;

    case 'list':
      props.start = node.start;
      props.ordered = node.ordered;
      props.tight = !node.loose;
      props.depth = node.depth;
      break;

    case 'listItem':
      props.checked = node.checked;
      props.tight = !node.loose;
      props.ordered = node.ordered;
      props.index = node.index;
      props.children = getListItemChildren(node, parent).map(function (childNode, i) {
        return astToReact(childNode, opts, {
          node: node,
          props: props
        }, i);
      });
      break;

    case 'definition':
      assignDefined(props, {
        identifier: node.identifier,
        title: node.title,
        url: node.url
      });
      break;

    case 'code':
      assignDefined(props, {
        language: node.lang && node.lang.split(/\s/, 1)[0]
      });
      break;

    case 'inlineCode':
      props.children = node.value;
      props.inline = true;
      break;

    case 'link':
      assignDefined(props, {
        title: node.title || undefined,
        target: typeof opts.linkTarget === 'function' ? opts.linkTarget(node.url, node.children, node.title) : opts.linkTarget,
        href: opts.transformLinkUri ? opts.transformLinkUri(node.url, node.children, node.title) : node.url
      });
      break;

    case 'image':
      assignDefined(props, {
        alt: node.alt || undefined,
        title: node.title || undefined,
        src: opts.transformImageUri ? opts.transformImageUri(node.url, node.children, node.title, node.alt) : node.url
      });
      break;

    case 'linkReference':
      assignDefined(props, xtend(ref, {
        href: opts.transformLinkUri ? opts.transformLinkUri(ref.href) : ref.href
      }));
      break;

    case 'imageReference':
      assignDefined(props, {
        src: opts.transformImageUri && ref.href ? opts.transformImageUri(ref.href, node.children, ref.title, node.alt) : ref.href,
        title: ref.title || undefined,
        alt: node.alt || undefined
      });
      break;

    case 'table':
    case 'tableHead':
    case 'tableBody':
      props.columnAlignment = node.align;
      break;

    case 'tableRow':
      props.isHeader = parent.node.type === 'tableHead';
      props.columnAlignment = parent.props.columnAlignment;
      break;

    case 'tableCell':
      assignDefined(props, {
        isHeader: parent.props.isHeader,
        align: parent.props.columnAlignment[index]
      });
      break;

    case 'virtualHtml':
      props.tag = node.tag;
      break;

    case 'html':
      // @todo find a better way than this
      props.isBlock = node.position.start.line !== node.position.end.line;
      props.escapeHtml = opts.escapeHtml;
      props.skipHtml = opts.skipHtml;
      break;

    case 'parsedHtml':
      {
        var parsedChildren;

        if (node.children) {
          parsedChildren = node.children.map(function (child, i) {
            return astToReact(child, opts, {
              node: node,
              props: props
            }, i);
          });
        }

        props.escapeHtml = opts.escapeHtml;
        props.skipHtml = opts.skipHtml;
        props.element = mergeNodeChildren(node, parsedChildren);
        break;
      }

    default:
      assignDefined(props, xtend(node, {
        type: undefined,
        position: undefined,
        children: undefined
      }));
  }

  if (!isTagRenderer && node.value) {
    props.value = node.value;
  }

  return props;
}

function assignDefined(target, attrs) {
  for (var key in attrs) {
    if (typeof attrs[key] !== 'undefined') {
      target[key] = attrs[key];
    }
  }
}

function mergeNodeChildren(node, parsedChildren) {
  var el = node.element;

  if (Array.isArray(el)) {
    var Fragment = React.Fragment || 'div';
    return React.createElement(Fragment, null, el);
  }

  if (el.props.children || parsedChildren) {
    var children = React.Children.toArray(el.props.children).concat(parsedChildren);
    return React.cloneElement(el, null, children);
  }

  return React.cloneElement(el, null);
}

function flattenPosition(pos) {
  return [pos.start.line, ':', pos.start.column, '-', pos.end.line, ':', pos.end.column].map(String).join('');
}

function getListItemChildren(node, parent) {
  if (node.loose) {
    return node.children;
  }

  if (parent.node && node.index > 0 && parent.node.children[node.index - 1].loose) {
    return node.children;
  }

  return unwrapParagraphs(node);
}

function unwrapParagraphs(node) {
  return node.children.reduce(function (array, child) {
    return array.concat(child.type === 'paragraph' ? child.children || [] : [child]);
  }, []);
}

module.exports = astToReact;
},{"react":"../node_modules/preact/compat/dist/compat.module.js","xtend":"../node_modules/xtend/immutable.js"}],"../node_modules/react-markdown/lib/wrap-table-rows.js":[function(require,module,exports) {
'use strict';

var visit = require('unist-util-visit');

module.exports = function (node) {
  visit(node, 'table', wrap);
  return node;
};

function wrap(table) {
  var children = table.children;
  table.children = [{
    type: 'tableHead',
    align: table.align,
    children: [children[0]],
    position: children[0].position
  }];

  if (children.length > 1) {
    table.children.push({
      type: 'tableBody',
      align: table.align,
      children: children.slice(1),
      position: {
        start: children[1].position.start,
        end: children[children.length - 1].position.end
      }
    });
  }
}
},{"unist-util-visit":"../node_modules/unist-util-visit/index.js"}],"../node_modules/react-markdown/lib/get-definitions.js":[function(require,module,exports) {
'use strict';

module.exports = function getDefinitions(node) {
  var defs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return (node.children || []).reduce(function (definitions, child) {
    if (child.type === 'definition') {
      definitions[child.identifier] = {
        href: child.url,
        title: child.title
      };
    }

    return getDefinitions(child, definitions);
  }, defs);
};
},{}],"../node_modules/react-markdown/lib/uri-transformer.js":[function(require,module,exports) {
"use strict";

var protocols = ['http', 'https', 'mailto', 'tel'];

module.exports = function uriTransformer(uri) {
  var url = (uri || '').trim();
  var first = url.charAt(0);

  if (first === '#' || first === '/') {
    return url;
  }

  var colon = url.indexOf(':');

  if (colon === -1) {
    return url;
  }

  var length = protocols.length;
  var index = -1;

  while (++index < length) {
    var protocol = protocols[index];

    if (colon === protocol.length && url.slice(0, protocol.length).toLowerCase() === protocol) {
      return url;
    }
  }

  index = url.indexOf('?');

  if (index !== -1 && colon > index) {
    return url;
  }

  index = url.indexOf('#');

  if (index !== -1 && colon > index) {
    return url;
  } // eslint-disable-next-line no-script-url


  return 'javascript:void(0)';
};
},{}],"../node_modules/react-markdown/lib/renderers.js":[function(require,module,exports) {
/* eslint-disable react/prop-types, react/no-multi-comp */
'use strict';

var xtend = require('xtend');

var React = require('react');

var supportsStringRender = parseInt((React.version || '16').slice(0, 2), 10) >= 16;
var createElement = React.createElement;
module.exports = {
  break: 'br',
  paragraph: 'p',
  emphasis: 'em',
  strong: 'strong',
  thematicBreak: 'hr',
  blockquote: 'blockquote',
  delete: 'del',
  link: 'a',
  image: 'img',
  linkReference: 'a',
  imageReference: 'img',
  table: SimpleRenderer.bind(null, 'table'),
  tableHead: SimpleRenderer.bind(null, 'thead'),
  tableBody: SimpleRenderer.bind(null, 'tbody'),
  tableRow: SimpleRenderer.bind(null, 'tr'),
  tableCell: TableCell,
  root: Root,
  text: TextRenderer,
  list: List,
  listItem: ListItem,
  definition: NullRenderer,
  heading: Heading,
  inlineCode: InlineCode,
  code: CodeBlock,
  html: Html,
  virtualHtml: VirtualHtml,
  parsedHtml: ParsedHtml
};

function TextRenderer(props) {
  return supportsStringRender ? props.children : createElement('span', null, props.children);
}

function Root(props) {
  var useFragment = !props.className;
  var root = useFragment ? React.Fragment || 'div' : 'div';
  return createElement(root, useFragment ? null : props, props.children);
}

function SimpleRenderer(tag, props) {
  return createElement(tag, getCoreProps(props), props.children);
}

function TableCell(props) {
  var style = props.align ? {
    textAlign: props.align
  } : undefined;
  var coreProps = getCoreProps(props);
  return createElement(props.isHeader ? 'th' : 'td', style ? xtend({
    style: style
  }, coreProps) : coreProps, props.children);
}

function Heading(props) {
  return createElement("h".concat(props.level), getCoreProps(props), props.children);
}

function List(props) {
  var attrs = getCoreProps(props);

  if (props.start !== null && props.start !== 1) {
    attrs.start = props.start.toString();
  }

  return createElement(props.ordered ? 'ol' : 'ul', attrs, props.children);
}

function ListItem(props) {
  var checkbox = null;

  if (props.checked !== null) {
    var checked = props.checked;
    checkbox = createElement('input', {
      type: 'checkbox',
      checked: checked,
      readOnly: true
    });
  }

  return createElement('li', getCoreProps(props), checkbox, props.children);
}

function CodeBlock(props) {
  var className = props.language && "language-".concat(props.language);
  var code = createElement('code', className ? {
    className: className
  } : null, props.value);
  return createElement('pre', getCoreProps(props), code);
}

function InlineCode(props) {
  return createElement('code', getCoreProps(props), props.children);
}

function Html(props) {
  if (props.skipHtml) {
    return null;
  }

  var tag = props.isBlock ? 'div' : 'span';

  if (props.escapeHtml) {
    var comp = React.Fragment || tag;
    return createElement(comp, null, props.value);
  }

  var nodeProps = {
    dangerouslySetInnerHTML: {
      __html: props.value
    }
  };
  return createElement(tag, nodeProps);
}

function ParsedHtml(props) {
  return props['data-sourcepos'] ? React.cloneElement(props.element, {
    'data-sourcepos': props['data-sourcepos']
  }) : props.element;
}

function VirtualHtml(props) {
  return createElement(props.tag, getCoreProps(props), props.children);
}

function NullRenderer() {
  return null;
}

function getCoreProps(props) {
  return props['data-sourcepos'] ? {
    'data-sourcepos': props['data-sourcepos']
  } : {};
}
},{"xtend":"../node_modules/xtend/immutable.js","react":"../node_modules/preact/compat/dist/compat.module.js"}],"../node_modules/react-markdown/lib/symbols.js":[function(require,module,exports) {
"use strict";

var HtmlParser = '__RMD_HTML_PARSER__';
exports.HtmlParser = typeof Symbol === 'undefined' ? HtmlParser : Symbol(HtmlParser);
},{}],"../node_modules/react-markdown/lib/react-markdown.js":[function(require,module,exports) {
'use strict';

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var xtend = require('xtend');

var unified = require('unified');

var parse = require('remark-parse');

var PropTypes = require('prop-types');

var addListMetadata = require('mdast-add-list-metadata');

var naiveHtml = require('./plugins/naive-html');

var disallowNode = require('./plugins/disallow-node');

var astToReact = require('./ast-to-react');

var wrapTableRows = require('./wrap-table-rows');

var getDefinitions = require('./get-definitions');

var uriTransformer = require('./uri-transformer');

var defaultRenderers = require('./renderers');

var symbols = require('./symbols');

var allTypes = Object.keys(defaultRenderers);

var ReactMarkdown = function ReactMarkdown(props) {
  var src = props.source || props.children || '';
  var parserOptions = props.parserOptions;

  if (props.allowedTypes && props.disallowedTypes) {
    throw new Error('Only one of `allowedTypes` and `disallowedTypes` should be defined');
  }

  var renderers = xtend(defaultRenderers, props.renderers);
  var plugins = [[parse, parserOptions]].concat(props.plugins || []);
  var parser = plugins.reduce(applyParserPlugin, unified());
  var rawAst = parser.parse(src);
  var renderProps = xtend(props, {
    renderers: renderers,
    definitions: getDefinitions(rawAst)
  });
  var astPlugins = determineAstPlugins(props);
  var ast = astPlugins.reduce(function (node, plugin) {
    return plugin(node, renderProps);
  }, rawAst);
  return astToReact(ast, renderProps);
};

function applyParserPlugin(parser, plugin) {
  return Array.isArray(plugin) ? parser.use.apply(parser, _toConsumableArray(plugin)) : parser.use(plugin);
}

function determineAstPlugins(props) {
  var plugins = [wrapTableRows, addListMetadata()];
  var disallowedTypes = props.disallowedTypes;

  if (props.allowedTypes) {
    disallowedTypes = allTypes.filter(function (type) {
      return type !== 'root' && props.allowedTypes.indexOf(type) === -1;
    });
  }

  var removalMethod = props.unwrapDisallowed ? 'unwrap' : 'remove';

  if (disallowedTypes && disallowedTypes.length > 0) {
    plugins.push(disallowNode.ofType(disallowedTypes, removalMethod));
  }

  if (props.allowNode) {
    plugins.push(disallowNode.ifNotMatch(props.allowNode, removalMethod));
  }

  var renderHtml = !props.escapeHtml && !props.skipHtml;
  var hasHtmlParser = (props.astPlugins || []).some(function (item) {
    var plugin = Array.isArray(item) ? item[0] : item;
    return plugin.identity === symbols.HtmlParser;
  });

  if (renderHtml && !hasHtmlParser) {
    plugins.push(naiveHtml);
  }

  return props.astPlugins ? plugins.concat(props.astPlugins) : plugins;
}

ReactMarkdown.defaultProps = {
  renderers: {},
  escapeHtml: true,
  skipHtml: false,
  sourcePos: false,
  rawSourcePos: false,
  transformLinkUri: uriTransformer,
  astPlugins: [],
  plugins: [],
  parserOptions: {}
};
ReactMarkdown.propTypes = {
  className: PropTypes.string,
  source: PropTypes.string,
  children: PropTypes.string,
  sourcePos: PropTypes.bool,
  rawSourcePos: PropTypes.bool,
  escapeHtml: PropTypes.bool,
  skipHtml: PropTypes.bool,
  allowNode: PropTypes.func,
  allowedTypes: PropTypes.arrayOf(PropTypes.oneOf(allTypes)),
  disallowedTypes: PropTypes.arrayOf(PropTypes.oneOf(allTypes)),
  transformLinkUri: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
  linkTarget: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  transformImageUri: PropTypes.func,
  astPlugins: PropTypes.arrayOf(PropTypes.func),
  unwrapDisallowed: PropTypes.bool,
  renderers: PropTypes.object,
  plugins: PropTypes.array,
  parserOptions: PropTypes.object
};
ReactMarkdown.types = allTypes;
ReactMarkdown.renderers = defaultRenderers;
ReactMarkdown.uriTransformer = uriTransformer;
module.exports = ReactMarkdown;
},{"xtend":"../node_modules/xtend/immutable.js","unified":"../node_modules/unified/index.js","remark-parse":"../node_modules/remark-parse/index.js","prop-types":"../node_modules/prop-types/index.js","mdast-add-list-metadata":"../node_modules/mdast-add-list-metadata/index.js","./plugins/naive-html":"../node_modules/react-markdown/lib/plugins/naive-html.js","./plugins/disallow-node":"../node_modules/react-markdown/lib/plugins/disallow-node.js","./ast-to-react":"../node_modules/react-markdown/lib/ast-to-react.js","./wrap-table-rows":"../node_modules/react-markdown/lib/wrap-table-rows.js","./get-definitions":"../node_modules/react-markdown/lib/get-definitions.js","./uri-transformer":"../node_modules/react-markdown/lib/uri-transformer.js","./renderers":"../node_modules/react-markdown/lib/renderers.js","./symbols":"../node_modules/react-markdown/lib/symbols.js"}],"app/pages/home/components/link.less":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"app/pages/home/components/link.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _preact = require("preact");

var _navigator = _interopRequireDefault(require("~/app/services/navigator.service"));

require("./link.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isExternalLink(href) {
  if (href) {
    return href.startsWith('http');
  }

  return true;
}

;

const Link = ({
  href,
  children
}) => {
  if (isExternalLink(href)) {
    return (0, _preact.h)("a", {
      href: href,
      target: "_blank",
      rel: "noopener noreferrer"
    }, children);
  }

  const pageName = href.substr(1);
  return (0, _preact.h)("button", {
    type: "button",
    className: "Link-button",
    onClick: () => _navigator.default.gotoPage(pageName)
  }, children);
};

var _default = Link;
exports.default = _default;
},{"preact":"../node_modules/preact/dist/preact.module.js","~/app/services/navigator.service":"app/services/navigator.service.js","./link.less":"app/pages/home/components/link.less"}],"app/components/modal-dialog.less":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"app/components/modal-dialog.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _preact = require("preact");

require("./modal-dialog.less");

const ModalDialog = ({
  title,
  description,
  isValid = true,
  onHideDialog,
  children
}) => {
  return (0, _preact.h)("div", {
    class: "ModalDialog-backgroundContainer"
  }, (0, _preact.h)("dialog", {
    class: "ModalDialog-dialog",
    open: true
  }, (0, _preact.h)("h3", null, title), (0, _preact.h)("div", {
    class: "ModalDialog-descriptionLabel"
  }, description), children, (0, _preact.h)("div", {
    class: "ModalDialog-dialogContainer"
  }, (0, _preact.h)("button", {
    class: "button",
    onClick: () => onHideDialog(false)
  }, "Cancel"), (0, _preact.h)("button", {
    class: "button button-primary",
    disabled: !isValid,
    onClick: () => onHideDialog(true)
  }, "Ok"))));
};

var _default = ModalDialog;
exports.default = _default;
},{"preact":"../node_modules/preact/dist/preact.module.js","./modal-dialog.less":"app/components/modal-dialog.less"}],"app/components/modal-input-dialog.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _preact = require("preact");

var _modalDialog = _interopRequireDefault(require("./modal-dialog"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ModalInputDialog extends _preact.Component {
  constructor(props) {
    super(props);
    const inputValue = props.inputValue || '';
    this.state = {
      inputValue,
      isValid: this.validate(inputValue)
    };
    this.onInputKeyUp = this.onInputKeyUp.bind(this);
    this.onInputFocus = this.onInputFocus.bind(this);
    this.hideDialog = this.hideDialog.bind(this);
  }

  componentDidMount() {
    if (this.input) {
      this.input.focus();
    }
  }

  hideDialog(dialogResult, inputValue) {
    this.props.onHideDialog(dialogResult, dialogResult ? inputValue || this.state.inputValue : undefined);
  }

  validate(inputValue) {
    return !!inputValue;
  }

  async onChangeValue(inputValue) {
    const isValid = this.validate(inputValue);
    return new Promise(resolve => {
      this.setState({
        isValid,
        inputValue
      }, resolve());
    });
  }

  async onInputKeyUp(e) {
    if (e.key === 'Escape') {
      this.hideDialog(false);
      return;
    }

    const inputValue = e.target.value;
    await this.onChangeValue(inputValue);

    if (e.key === 'Enter') {
      if (this.validate(inputValue)) {
        this.hideDialog(true, inputValue);
      }
    }
  }

  onInputFocus(e) {
    e.target.select();
  }

  render({
    title,
    description
  }, {
    inputValue,
    isValid
  }) {
    return (0, _preact.h)(_modalDialog.default, {
      onHideDialog: this.hideDialog,
      isValid: isValid,
      title: title,
      description: description
    }, (0, _preact.h)("input", {
      class: "input",
      type: "text",
      ref: input => {
        this.input = input;
      },
      value: inputValue,
      onKeyUp: this.onInputKeyUp,
      onFocus: this.onInputFocus
    }));
  }

}

exports.default = ModalInputDialog;
},{"preact":"../node_modules/preact/dist/preact.module.js","./modal-dialog":"app/components/modal-dialog.js"}],"../node_modules/lodash/_isPrototype.js":[function(require,module,exports) {
/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;

},{}],"../node_modules/lodash/_overArg.js":[function(require,module,exports) {
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;

},{}],"../node_modules/lodash/_nativeKeys.js":[function(require,module,exports) {
var overArg = require('./_overArg');

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;

},{"./_overArg":"../node_modules/lodash/_overArg.js"}],"../node_modules/lodash/_baseKeys.js":[function(require,module,exports) {
var isPrototype = require('./_isPrototype'),
    nativeKeys = require('./_nativeKeys');

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;

},{"./_isPrototype":"../node_modules/lodash/_isPrototype.js","./_nativeKeys":"../node_modules/lodash/_nativeKeys.js"}],"../node_modules/lodash/_freeGlobal.js":[function(require,module,exports) {
var global = arguments[3];
/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

},{}],"../node_modules/lodash/_root.js":[function(require,module,exports) {
var freeGlobal = require('./_freeGlobal');

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;

},{"./_freeGlobal":"../node_modules/lodash/_freeGlobal.js"}],"../node_modules/lodash/_Symbol.js":[function(require,module,exports) {
var root = require('./_root');

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;

},{"./_root":"../node_modules/lodash/_root.js"}],"../node_modules/lodash/_getRawTag.js":[function(require,module,exports) {
var Symbol = require('./_Symbol');

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;

},{"./_Symbol":"../node_modules/lodash/_Symbol.js"}],"../node_modules/lodash/_objectToString.js":[function(require,module,exports) {
/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;

},{}],"../node_modules/lodash/_baseGetTag.js":[function(require,module,exports) {
var Symbol = require('./_Symbol'),
    getRawTag = require('./_getRawTag'),
    objectToString = require('./_objectToString');

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;

},{"./_Symbol":"../node_modules/lodash/_Symbol.js","./_getRawTag":"../node_modules/lodash/_getRawTag.js","./_objectToString":"../node_modules/lodash/_objectToString.js"}],"../node_modules/lodash/isObject.js":[function(require,module,exports) {
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;

},{}],"../node_modules/lodash/isFunction.js":[function(require,module,exports) {
var baseGetTag = require('./_baseGetTag'),
    isObject = require('./isObject');

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;

},{"./_baseGetTag":"../node_modules/lodash/_baseGetTag.js","./isObject":"../node_modules/lodash/isObject.js"}],"../node_modules/lodash/_coreJsData.js":[function(require,module,exports) {
var root = require('./_root');

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;

},{"./_root":"../node_modules/lodash/_root.js"}],"../node_modules/lodash/_isMasked.js":[function(require,module,exports) {
var coreJsData = require('./_coreJsData');

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;

},{"./_coreJsData":"../node_modules/lodash/_coreJsData.js"}],"../node_modules/lodash/_toSource.js":[function(require,module,exports) {
/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;

},{}],"../node_modules/lodash/_baseIsNative.js":[function(require,module,exports) {
var isFunction = require('./isFunction'),
    isMasked = require('./_isMasked'),
    isObject = require('./isObject'),
    toSource = require('./_toSource');

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;

},{"./isFunction":"../node_modules/lodash/isFunction.js","./_isMasked":"../node_modules/lodash/_isMasked.js","./isObject":"../node_modules/lodash/isObject.js","./_toSource":"../node_modules/lodash/_toSource.js"}],"../node_modules/lodash/_getValue.js":[function(require,module,exports) {
/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;

},{}],"../node_modules/lodash/_getNative.js":[function(require,module,exports) {
var baseIsNative = require('./_baseIsNative'),
    getValue = require('./_getValue');

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;

},{"./_baseIsNative":"../node_modules/lodash/_baseIsNative.js","./_getValue":"../node_modules/lodash/_getValue.js"}],"../node_modules/lodash/_DataView.js":[function(require,module,exports) {
var getNative = require('./_getNative'),
    root = require('./_root');

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;

},{"./_getNative":"../node_modules/lodash/_getNative.js","./_root":"../node_modules/lodash/_root.js"}],"../node_modules/lodash/_Map.js":[function(require,module,exports) {
var getNative = require('./_getNative'),
    root = require('./_root');

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;

},{"./_getNative":"../node_modules/lodash/_getNative.js","./_root":"../node_modules/lodash/_root.js"}],"../node_modules/lodash/_Promise.js":[function(require,module,exports) {
var getNative = require('./_getNative'),
    root = require('./_root');

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;

},{"./_getNative":"../node_modules/lodash/_getNative.js","./_root":"../node_modules/lodash/_root.js"}],"../node_modules/lodash/_Set.js":[function(require,module,exports) {
var getNative = require('./_getNative'),
    root = require('./_root');

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;

},{"./_getNative":"../node_modules/lodash/_getNative.js","./_root":"../node_modules/lodash/_root.js"}],"../node_modules/lodash/_WeakMap.js":[function(require,module,exports) {
var getNative = require('./_getNative'),
    root = require('./_root');

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;

},{"./_getNative":"../node_modules/lodash/_getNative.js","./_root":"../node_modules/lodash/_root.js"}],"../node_modules/lodash/_getTag.js":[function(require,module,exports) {
var DataView = require('./_DataView'),
    Map = require('./_Map'),
    Promise = require('./_Promise'),
    Set = require('./_Set'),
    WeakMap = require('./_WeakMap'),
    baseGetTag = require('./_baseGetTag'),
    toSource = require('./_toSource');

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

module.exports = getTag;

},{"./_DataView":"../node_modules/lodash/_DataView.js","./_Map":"../node_modules/lodash/_Map.js","./_Promise":"../node_modules/lodash/_Promise.js","./_Set":"../node_modules/lodash/_Set.js","./_WeakMap":"../node_modules/lodash/_WeakMap.js","./_baseGetTag":"../node_modules/lodash/_baseGetTag.js","./_toSource":"../node_modules/lodash/_toSource.js"}],"../node_modules/lodash/isObjectLike.js":[function(require,module,exports) {
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;

},{}],"../node_modules/lodash/_baseIsArguments.js":[function(require,module,exports) {
var baseGetTag = require('./_baseGetTag'),
    isObjectLike = require('./isObjectLike');

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;

},{"./_baseGetTag":"../node_modules/lodash/_baseGetTag.js","./isObjectLike":"../node_modules/lodash/isObjectLike.js"}],"../node_modules/lodash/isArguments.js":[function(require,module,exports) {
var baseIsArguments = require('./_baseIsArguments'),
    isObjectLike = require('./isObjectLike');

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;

},{"./_baseIsArguments":"../node_modules/lodash/_baseIsArguments.js","./isObjectLike":"../node_modules/lodash/isObjectLike.js"}],"../node_modules/lodash/isArray.js":[function(require,module,exports) {
/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;

},{}],"../node_modules/lodash/isLength.js":[function(require,module,exports) {
/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;

},{}],"../node_modules/lodash/isArrayLike.js":[function(require,module,exports) {
var isFunction = require('./isFunction'),
    isLength = require('./isLength');

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;

},{"./isFunction":"../node_modules/lodash/isFunction.js","./isLength":"../node_modules/lodash/isLength.js"}],"../node_modules/lodash/stubFalse.js":[function(require,module,exports) {
/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;

},{}],"../node_modules/lodash/isBuffer.js":[function(require,module,exports) {

var root = require('./_root'),
    stubFalse = require('./stubFalse');

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;

},{"./_root":"../node_modules/lodash/_root.js","./stubFalse":"../node_modules/lodash/stubFalse.js"}],"../node_modules/lodash/_baseIsTypedArray.js":[function(require,module,exports) {
var baseGetTag = require('./_baseGetTag'),
    isLength = require('./isLength'),
    isObjectLike = require('./isObjectLike');

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;

},{"./_baseGetTag":"../node_modules/lodash/_baseGetTag.js","./isLength":"../node_modules/lodash/isLength.js","./isObjectLike":"../node_modules/lodash/isObjectLike.js"}],"../node_modules/lodash/_baseUnary.js":[function(require,module,exports) {
/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;

},{}],"../node_modules/lodash/_nodeUtil.js":[function(require,module,exports) {
var freeGlobal = require('./_freeGlobal');

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;

},{"./_freeGlobal":"../node_modules/lodash/_freeGlobal.js"}],"../node_modules/lodash/isTypedArray.js":[function(require,module,exports) {
var baseIsTypedArray = require('./_baseIsTypedArray'),
    baseUnary = require('./_baseUnary'),
    nodeUtil = require('./_nodeUtil');

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;

},{"./_baseIsTypedArray":"../node_modules/lodash/_baseIsTypedArray.js","./_baseUnary":"../node_modules/lodash/_baseUnary.js","./_nodeUtil":"../node_modules/lodash/_nodeUtil.js"}],"../node_modules/lodash/isEmpty.js":[function(require,module,exports) {
var baseKeys = require('./_baseKeys'),
    getTag = require('./_getTag'),
    isArguments = require('./isArguments'),
    isArray = require('./isArray'),
    isArrayLike = require('./isArrayLike'),
    isBuffer = require('./isBuffer'),
    isPrototype = require('./_isPrototype'),
    isTypedArray = require('./isTypedArray');

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    setTag = '[object Set]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if `value` is an empty object, collection, map, or set.
 *
 * Objects are considered empty if they have no own enumerable string keyed
 * properties.
 *
 * Array-like values such as `arguments` objects, arrays, buffers, strings, or
 * jQuery-like collections are considered empty if they have a `length` of `0`.
 * Similarly, maps and sets are considered empty if they have a `size` of `0`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is empty, else `false`.
 * @example
 *
 * _.isEmpty(null);
 * // => true
 *
 * _.isEmpty(true);
 * // => true
 *
 * _.isEmpty(1);
 * // => true
 *
 * _.isEmpty([1, 2, 3]);
 * // => false
 *
 * _.isEmpty({ 'a': 1 });
 * // => false
 */
function isEmpty(value) {
  if (value == null) {
    return true;
  }
  if (isArrayLike(value) &&
      (isArray(value) || typeof value == 'string' || typeof value.splice == 'function' ||
        isBuffer(value) || isTypedArray(value) || isArguments(value))) {
    return !value.length;
  }
  var tag = getTag(value);
  if (tag == mapTag || tag == setTag) {
    return !value.size;
  }
  if (isPrototype(value)) {
    return !baseKeys(value).length;
  }
  for (var key in value) {
    if (hasOwnProperty.call(value, key)) {
      return false;
    }
  }
  return true;
}

module.exports = isEmpty;

},{"./_baseKeys":"../node_modules/lodash/_baseKeys.js","./_getTag":"../node_modules/lodash/_getTag.js","./isArguments":"../node_modules/lodash/isArguments.js","./isArray":"../node_modules/lodash/isArray.js","./isArrayLike":"../node_modules/lodash/isArrayLike.js","./isBuffer":"../node_modules/lodash/isBuffer.js","./_isPrototype":"../node_modules/lodash/_isPrototype.js","./isTypedArray":"../node_modules/lodash/isTypedArray.js"}],"../node_modules/lodash/_nativeCreate.js":[function(require,module,exports) {
var getNative = require('./_getNative');

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;

},{"./_getNative":"../node_modules/lodash/_getNative.js"}],"../node_modules/lodash/_hashClear.js":[function(require,module,exports) {
var nativeCreate = require('./_nativeCreate');

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;

},{"./_nativeCreate":"../node_modules/lodash/_nativeCreate.js"}],"../node_modules/lodash/_hashDelete.js":[function(require,module,exports) {
/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;

},{}],"../node_modules/lodash/_hashGet.js":[function(require,module,exports) {
var nativeCreate = require('./_nativeCreate');

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;

},{"./_nativeCreate":"../node_modules/lodash/_nativeCreate.js"}],"../node_modules/lodash/_hashHas.js":[function(require,module,exports) {
var nativeCreate = require('./_nativeCreate');

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;

},{"./_nativeCreate":"../node_modules/lodash/_nativeCreate.js"}],"../node_modules/lodash/_hashSet.js":[function(require,module,exports) {
var nativeCreate = require('./_nativeCreate');

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;

},{"./_nativeCreate":"../node_modules/lodash/_nativeCreate.js"}],"../node_modules/lodash/_Hash.js":[function(require,module,exports) {
var hashClear = require('./_hashClear'),
    hashDelete = require('./_hashDelete'),
    hashGet = require('./_hashGet'),
    hashHas = require('./_hashHas'),
    hashSet = require('./_hashSet');

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;

},{"./_hashClear":"../node_modules/lodash/_hashClear.js","./_hashDelete":"../node_modules/lodash/_hashDelete.js","./_hashGet":"../node_modules/lodash/_hashGet.js","./_hashHas":"../node_modules/lodash/_hashHas.js","./_hashSet":"../node_modules/lodash/_hashSet.js"}],"../node_modules/lodash/_listCacheClear.js":[function(require,module,exports) {
/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;

},{}],"../node_modules/lodash/eq.js":[function(require,module,exports) {
/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;

},{}],"../node_modules/lodash/_assocIndexOf.js":[function(require,module,exports) {
var eq = require('./eq');

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;

},{"./eq":"../node_modules/lodash/eq.js"}],"../node_modules/lodash/_listCacheDelete.js":[function(require,module,exports) {
var assocIndexOf = require('./_assocIndexOf');

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;

},{"./_assocIndexOf":"../node_modules/lodash/_assocIndexOf.js"}],"../node_modules/lodash/_listCacheGet.js":[function(require,module,exports) {
var assocIndexOf = require('./_assocIndexOf');

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;

},{"./_assocIndexOf":"../node_modules/lodash/_assocIndexOf.js"}],"../node_modules/lodash/_listCacheHas.js":[function(require,module,exports) {
var assocIndexOf = require('./_assocIndexOf');

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;

},{"./_assocIndexOf":"../node_modules/lodash/_assocIndexOf.js"}],"../node_modules/lodash/_listCacheSet.js":[function(require,module,exports) {
var assocIndexOf = require('./_assocIndexOf');

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;

},{"./_assocIndexOf":"../node_modules/lodash/_assocIndexOf.js"}],"../node_modules/lodash/_ListCache.js":[function(require,module,exports) {
var listCacheClear = require('./_listCacheClear'),
    listCacheDelete = require('./_listCacheDelete'),
    listCacheGet = require('./_listCacheGet'),
    listCacheHas = require('./_listCacheHas'),
    listCacheSet = require('./_listCacheSet');

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;

},{"./_listCacheClear":"../node_modules/lodash/_listCacheClear.js","./_listCacheDelete":"../node_modules/lodash/_listCacheDelete.js","./_listCacheGet":"../node_modules/lodash/_listCacheGet.js","./_listCacheHas":"../node_modules/lodash/_listCacheHas.js","./_listCacheSet":"../node_modules/lodash/_listCacheSet.js"}],"../node_modules/lodash/_mapCacheClear.js":[function(require,module,exports) {
var Hash = require('./_Hash'),
    ListCache = require('./_ListCache'),
    Map = require('./_Map');

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;

},{"./_Hash":"../node_modules/lodash/_Hash.js","./_ListCache":"../node_modules/lodash/_ListCache.js","./_Map":"../node_modules/lodash/_Map.js"}],"../node_modules/lodash/_isKeyable.js":[function(require,module,exports) {
/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;

},{}],"../node_modules/lodash/_getMapData.js":[function(require,module,exports) {
var isKeyable = require('./_isKeyable');

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;

},{"./_isKeyable":"../node_modules/lodash/_isKeyable.js"}],"../node_modules/lodash/_mapCacheDelete.js":[function(require,module,exports) {
var getMapData = require('./_getMapData');

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;

},{"./_getMapData":"../node_modules/lodash/_getMapData.js"}],"../node_modules/lodash/_mapCacheGet.js":[function(require,module,exports) {
var getMapData = require('./_getMapData');

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;

},{"./_getMapData":"../node_modules/lodash/_getMapData.js"}],"../node_modules/lodash/_mapCacheHas.js":[function(require,module,exports) {
var getMapData = require('./_getMapData');

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;

},{"./_getMapData":"../node_modules/lodash/_getMapData.js"}],"../node_modules/lodash/_mapCacheSet.js":[function(require,module,exports) {
var getMapData = require('./_getMapData');

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;

},{"./_getMapData":"../node_modules/lodash/_getMapData.js"}],"../node_modules/lodash/_MapCache.js":[function(require,module,exports) {
var mapCacheClear = require('./_mapCacheClear'),
    mapCacheDelete = require('./_mapCacheDelete'),
    mapCacheGet = require('./_mapCacheGet'),
    mapCacheHas = require('./_mapCacheHas'),
    mapCacheSet = require('./_mapCacheSet');

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;

},{"./_mapCacheClear":"../node_modules/lodash/_mapCacheClear.js","./_mapCacheDelete":"../node_modules/lodash/_mapCacheDelete.js","./_mapCacheGet":"../node_modules/lodash/_mapCacheGet.js","./_mapCacheHas":"../node_modules/lodash/_mapCacheHas.js","./_mapCacheSet":"../node_modules/lodash/_mapCacheSet.js"}],"../node_modules/lodash/_setCacheAdd.js":[function(require,module,exports) {
/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

module.exports = setCacheAdd;

},{}],"../node_modules/lodash/_setCacheHas.js":[function(require,module,exports) {
/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

module.exports = setCacheHas;

},{}],"../node_modules/lodash/_SetCache.js":[function(require,module,exports) {
var MapCache = require('./_MapCache'),
    setCacheAdd = require('./_setCacheAdd'),
    setCacheHas = require('./_setCacheHas');

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

module.exports = SetCache;

},{"./_MapCache":"../node_modules/lodash/_MapCache.js","./_setCacheAdd":"../node_modules/lodash/_setCacheAdd.js","./_setCacheHas":"../node_modules/lodash/_setCacheHas.js"}],"../node_modules/lodash/_baseFindIndex.js":[function(require,module,exports) {
/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

module.exports = baseFindIndex;

},{}],"../node_modules/lodash/_baseIsNaN.js":[function(require,module,exports) {
/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

module.exports = baseIsNaN;

},{}],"../node_modules/lodash/_strictIndexOf.js":[function(require,module,exports) {
/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

module.exports = strictIndexOf;

},{}],"../node_modules/lodash/_baseIndexOf.js":[function(require,module,exports) {
var baseFindIndex = require('./_baseFindIndex'),
    baseIsNaN = require('./_baseIsNaN'),
    strictIndexOf = require('./_strictIndexOf');

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  return value === value
    ? strictIndexOf(array, value, fromIndex)
    : baseFindIndex(array, baseIsNaN, fromIndex);
}

module.exports = baseIndexOf;

},{"./_baseFindIndex":"../node_modules/lodash/_baseFindIndex.js","./_baseIsNaN":"../node_modules/lodash/_baseIsNaN.js","./_strictIndexOf":"../node_modules/lodash/_strictIndexOf.js"}],"../node_modules/lodash/_arrayIncludes.js":[function(require,module,exports) {
var baseIndexOf = require('./_baseIndexOf');

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length && baseIndexOf(array, value, 0) > -1;
}

module.exports = arrayIncludes;

},{"./_baseIndexOf":"../node_modules/lodash/_baseIndexOf.js"}],"../node_modules/lodash/_arrayIncludesWith.js":[function(require,module,exports) {
/**
 * This function is like `arrayIncludes` except that it accepts a comparator.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludesWith(array, value, comparator) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }
  return false;
}

module.exports = arrayIncludesWith;

},{}],"../node_modules/lodash/_arrayMap.js":[function(require,module,exports) {
/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;

},{}],"../node_modules/lodash/_cacheHas.js":[function(require,module,exports) {
/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

module.exports = cacheHas;

},{}],"../node_modules/lodash/_baseDifference.js":[function(require,module,exports) {
var SetCache = require('./_SetCache'),
    arrayIncludes = require('./_arrayIncludes'),
    arrayIncludesWith = require('./_arrayIncludesWith'),
    arrayMap = require('./_arrayMap'),
    baseUnary = require('./_baseUnary'),
    cacheHas = require('./_cacheHas');

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * The base implementation of methods like `_.difference` without support
 * for excluding multiple arrays or iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Array} values The values to exclude.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new array of filtered values.
 */
function baseDifference(array, values, iteratee, comparator) {
  var index = -1,
      includes = arrayIncludes,
      isCommon = true,
      length = array.length,
      result = [],
      valuesLength = values.length;

  if (!length) {
    return result;
  }
  if (iteratee) {
    values = arrayMap(values, baseUnary(iteratee));
  }
  if (comparator) {
    includes = arrayIncludesWith;
    isCommon = false;
  }
  else if (values.length >= LARGE_ARRAY_SIZE) {
    includes = cacheHas;
    isCommon = false;
    values = new SetCache(values);
  }
  outer:
  while (++index < length) {
    var value = array[index],
        computed = iteratee == null ? value : iteratee(value);

    value = (comparator || value !== 0) ? value : 0;
    if (isCommon && computed === computed) {
      var valuesIndex = valuesLength;
      while (valuesIndex--) {
        if (values[valuesIndex] === computed) {
          continue outer;
        }
      }
      result.push(value);
    }
    else if (!includes(values, computed, comparator)) {
      result.push(value);
    }
  }
  return result;
}

module.exports = baseDifference;

},{"./_SetCache":"../node_modules/lodash/_SetCache.js","./_arrayIncludes":"../node_modules/lodash/_arrayIncludes.js","./_arrayIncludesWith":"../node_modules/lodash/_arrayIncludesWith.js","./_arrayMap":"../node_modules/lodash/_arrayMap.js","./_baseUnary":"../node_modules/lodash/_baseUnary.js","./_cacheHas":"../node_modules/lodash/_cacheHas.js"}],"../node_modules/lodash/_arrayPush.js":[function(require,module,exports) {
/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;

},{}],"../node_modules/lodash/_isFlattenable.js":[function(require,module,exports) {
var Symbol = require('./_Symbol'),
    isArguments = require('./isArguments'),
    isArray = require('./isArray');

/** Built-in value references. */
var spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return isArray(value) || isArguments(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

module.exports = isFlattenable;

},{"./_Symbol":"../node_modules/lodash/_Symbol.js","./isArguments":"../node_modules/lodash/isArguments.js","./isArray":"../node_modules/lodash/isArray.js"}],"../node_modules/lodash/_baseFlatten.js":[function(require,module,exports) {
var arrayPush = require('./_arrayPush'),
    isFlattenable = require('./_isFlattenable');

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

module.exports = baseFlatten;

},{"./_arrayPush":"../node_modules/lodash/_arrayPush.js","./_isFlattenable":"../node_modules/lodash/_isFlattenable.js"}],"../node_modules/lodash/identity.js":[function(require,module,exports) {
/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;

},{}],"../node_modules/lodash/_apply.js":[function(require,module,exports) {
/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

module.exports = apply;

},{}],"../node_modules/lodash/_overRest.js":[function(require,module,exports) {
var apply = require('./_apply');

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

module.exports = overRest;

},{"./_apply":"../node_modules/lodash/_apply.js"}],"../node_modules/lodash/constant.js":[function(require,module,exports) {
/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

module.exports = constant;

},{}],"../node_modules/lodash/_defineProperty.js":[function(require,module,exports) {
var getNative = require('./_getNative');

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;

},{"./_getNative":"../node_modules/lodash/_getNative.js"}],"../node_modules/lodash/_baseSetToString.js":[function(require,module,exports) {
var constant = require('./constant'),
    defineProperty = require('./_defineProperty'),
    identity = require('./identity');

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

module.exports = baseSetToString;

},{"./constant":"../node_modules/lodash/constant.js","./_defineProperty":"../node_modules/lodash/_defineProperty.js","./identity":"../node_modules/lodash/identity.js"}],"../node_modules/lodash/_shortOut.js":[function(require,module,exports) {
/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

module.exports = shortOut;

},{}],"../node_modules/lodash/_setToString.js":[function(require,module,exports) {
var baseSetToString = require('./_baseSetToString'),
    shortOut = require('./_shortOut');

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

module.exports = setToString;

},{"./_baseSetToString":"../node_modules/lodash/_baseSetToString.js","./_shortOut":"../node_modules/lodash/_shortOut.js"}],"../node_modules/lodash/_baseRest.js":[function(require,module,exports) {
var identity = require('./identity'),
    overRest = require('./_overRest'),
    setToString = require('./_setToString');

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

module.exports = baseRest;

},{"./identity":"../node_modules/lodash/identity.js","./_overRest":"../node_modules/lodash/_overRest.js","./_setToString":"../node_modules/lodash/_setToString.js"}],"../node_modules/lodash/isArrayLikeObject.js":[function(require,module,exports) {
var isArrayLike = require('./isArrayLike'),
    isObjectLike = require('./isObjectLike');

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

module.exports = isArrayLikeObject;

},{"./isArrayLike":"../node_modules/lodash/isArrayLike.js","./isObjectLike":"../node_modules/lodash/isObjectLike.js"}],"../node_modules/lodash/difference.js":[function(require,module,exports) {
var baseDifference = require('./_baseDifference'),
    baseFlatten = require('./_baseFlatten'),
    baseRest = require('./_baseRest'),
    isArrayLikeObject = require('./isArrayLikeObject');

/**
 * Creates an array of `array` values not included in the other given arrays
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons. The order and references of result values are
 * determined by the first array.
 *
 * **Note:** Unlike `_.pullAll`, this method returns a new array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {...Array} [values] The values to exclude.
 * @returns {Array} Returns the new array of filtered values.
 * @see _.without, _.xor
 * @example
 *
 * _.difference([2, 1], [2, 3]);
 * // => [1]
 */
var difference = baseRest(function(array, values) {
  return isArrayLikeObject(array)
    ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true))
    : [];
});

module.exports = difference;

},{"./_baseDifference":"../node_modules/lodash/_baseDifference.js","./_baseFlatten":"../node_modules/lodash/_baseFlatten.js","./_baseRest":"../node_modules/lodash/_baseRest.js","./isArrayLikeObject":"../node_modules/lodash/isArrayLikeObject.js"}],"../node_modules/lodash/_stackClear.js":[function(require,module,exports) {
var ListCache = require('./_ListCache');

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

module.exports = stackClear;

},{"./_ListCache":"../node_modules/lodash/_ListCache.js"}],"../node_modules/lodash/_stackDelete.js":[function(require,module,exports) {
/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;

},{}],"../node_modules/lodash/_stackGet.js":[function(require,module,exports) {
/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;

},{}],"../node_modules/lodash/_stackHas.js":[function(require,module,exports) {
/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;

},{}],"../node_modules/lodash/_stackSet.js":[function(require,module,exports) {
var ListCache = require('./_ListCache'),
    Map = require('./_Map'),
    MapCache = require('./_MapCache');

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;

},{"./_ListCache":"../node_modules/lodash/_ListCache.js","./_Map":"../node_modules/lodash/_Map.js","./_MapCache":"../node_modules/lodash/_MapCache.js"}],"../node_modules/lodash/_Stack.js":[function(require,module,exports) {
var ListCache = require('./_ListCache'),
    stackClear = require('./_stackClear'),
    stackDelete = require('./_stackDelete'),
    stackGet = require('./_stackGet'),
    stackHas = require('./_stackHas'),
    stackSet = require('./_stackSet');

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;

},{"./_ListCache":"../node_modules/lodash/_ListCache.js","./_stackClear":"../node_modules/lodash/_stackClear.js","./_stackDelete":"../node_modules/lodash/_stackDelete.js","./_stackGet":"../node_modules/lodash/_stackGet.js","./_stackHas":"../node_modules/lodash/_stackHas.js","./_stackSet":"../node_modules/lodash/_stackSet.js"}],"../node_modules/lodash/_arraySome.js":[function(require,module,exports) {
/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

module.exports = arraySome;

},{}],"../node_modules/lodash/_equalArrays.js":[function(require,module,exports) {
var SetCache = require('./_SetCache'),
    arraySome = require('./_arraySome'),
    cacheHas = require('./_cacheHas');

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

module.exports = equalArrays;

},{"./_SetCache":"../node_modules/lodash/_SetCache.js","./_arraySome":"../node_modules/lodash/_arraySome.js","./_cacheHas":"../node_modules/lodash/_cacheHas.js"}],"../node_modules/lodash/_Uint8Array.js":[function(require,module,exports) {
var root = require('./_root');

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;

},{"./_root":"../node_modules/lodash/_root.js"}],"../node_modules/lodash/_mapToArray.js":[function(require,module,exports) {
/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

module.exports = mapToArray;

},{}],"../node_modules/lodash/_setToArray.js":[function(require,module,exports) {
/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

module.exports = setToArray;

},{}],"../node_modules/lodash/_equalByTag.js":[function(require,module,exports) {
var Symbol = require('./_Symbol'),
    Uint8Array = require('./_Uint8Array'),
    eq = require('./eq'),
    equalArrays = require('./_equalArrays'),
    mapToArray = require('./_mapToArray'),
    setToArray = require('./_setToArray');

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

module.exports = equalByTag;

},{"./_Symbol":"../node_modules/lodash/_Symbol.js","./_Uint8Array":"../node_modules/lodash/_Uint8Array.js","./eq":"../node_modules/lodash/eq.js","./_equalArrays":"../node_modules/lodash/_equalArrays.js","./_mapToArray":"../node_modules/lodash/_mapToArray.js","./_setToArray":"../node_modules/lodash/_setToArray.js"}],"../node_modules/lodash/_baseGetAllKeys.js":[function(require,module,exports) {
var arrayPush = require('./_arrayPush'),
    isArray = require('./isArray');

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

module.exports = baseGetAllKeys;

},{"./_arrayPush":"../node_modules/lodash/_arrayPush.js","./isArray":"../node_modules/lodash/isArray.js"}],"../node_modules/lodash/_arrayFilter.js":[function(require,module,exports) {
/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = arrayFilter;

},{}],"../node_modules/lodash/stubArray.js":[function(require,module,exports) {
/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;

},{}],"../node_modules/lodash/_getSymbols.js":[function(require,module,exports) {
var arrayFilter = require('./_arrayFilter'),
    stubArray = require('./stubArray');

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

module.exports = getSymbols;

},{"./_arrayFilter":"../node_modules/lodash/_arrayFilter.js","./stubArray":"../node_modules/lodash/stubArray.js"}],"../node_modules/lodash/_baseTimes.js":[function(require,module,exports) {
/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;

},{}],"../node_modules/lodash/_isIndex.js":[function(require,module,exports) {
/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;

},{}],"../node_modules/lodash/_arrayLikeKeys.js":[function(require,module,exports) {
var baseTimes = require('./_baseTimes'),
    isArguments = require('./isArguments'),
    isArray = require('./isArray'),
    isBuffer = require('./isBuffer'),
    isIndex = require('./_isIndex'),
    isTypedArray = require('./isTypedArray');

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;

},{"./_baseTimes":"../node_modules/lodash/_baseTimes.js","./isArguments":"../node_modules/lodash/isArguments.js","./isArray":"../node_modules/lodash/isArray.js","./isBuffer":"../node_modules/lodash/isBuffer.js","./_isIndex":"../node_modules/lodash/_isIndex.js","./isTypedArray":"../node_modules/lodash/isTypedArray.js"}],"../node_modules/lodash/keys.js":[function(require,module,exports) {
var arrayLikeKeys = require('./_arrayLikeKeys'),
    baseKeys = require('./_baseKeys'),
    isArrayLike = require('./isArrayLike');

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;

},{"./_arrayLikeKeys":"../node_modules/lodash/_arrayLikeKeys.js","./_baseKeys":"../node_modules/lodash/_baseKeys.js","./isArrayLike":"../node_modules/lodash/isArrayLike.js"}],"../node_modules/lodash/_getAllKeys.js":[function(require,module,exports) {
var baseGetAllKeys = require('./_baseGetAllKeys'),
    getSymbols = require('./_getSymbols'),
    keys = require('./keys');

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

module.exports = getAllKeys;

},{"./_baseGetAllKeys":"../node_modules/lodash/_baseGetAllKeys.js","./_getSymbols":"../node_modules/lodash/_getSymbols.js","./keys":"../node_modules/lodash/keys.js"}],"../node_modules/lodash/_equalObjects.js":[function(require,module,exports) {
var getAllKeys = require('./_getAllKeys');

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

module.exports = equalObjects;

},{"./_getAllKeys":"../node_modules/lodash/_getAllKeys.js"}],"../node_modules/lodash/_baseIsEqualDeep.js":[function(require,module,exports) {
var Stack = require('./_Stack'),
    equalArrays = require('./_equalArrays'),
    equalByTag = require('./_equalByTag'),
    equalObjects = require('./_equalObjects'),
    getTag = require('./_getTag'),
    isArray = require('./isArray'),
    isBuffer = require('./isBuffer'),
    isTypedArray = require('./isTypedArray');

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

module.exports = baseIsEqualDeep;

},{"./_Stack":"../node_modules/lodash/_Stack.js","./_equalArrays":"../node_modules/lodash/_equalArrays.js","./_equalByTag":"../node_modules/lodash/_equalByTag.js","./_equalObjects":"../node_modules/lodash/_equalObjects.js","./_getTag":"../node_modules/lodash/_getTag.js","./isArray":"../node_modules/lodash/isArray.js","./isBuffer":"../node_modules/lodash/isBuffer.js","./isTypedArray":"../node_modules/lodash/isTypedArray.js"}],"../node_modules/lodash/_baseIsEqual.js":[function(require,module,exports) {
var baseIsEqualDeep = require('./_baseIsEqualDeep'),
    isObjectLike = require('./isObjectLike');

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

module.exports = baseIsEqual;

},{"./_baseIsEqualDeep":"../node_modules/lodash/_baseIsEqualDeep.js","./isObjectLike":"../node_modules/lodash/isObjectLike.js"}],"../node_modules/lodash/isEqual.js":[function(require,module,exports) {
var baseIsEqual = require('./_baseIsEqual');

/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */
function isEqual(value, other) {
  return baseIsEqual(value, other);
}

module.exports = isEqual;

},{"./_baseIsEqual":"../node_modules/lodash/_baseIsEqual.js"}],"app/components/hotkey.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _preact = require("preact");

var _isEmpty = _interopRequireDefault(require("lodash/isEmpty"));

var _difference = _interopRequireDefault(require("lodash/difference"));

var _isEqual = _interopRequireDefault(require("lodash/isEqual"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class HotKey extends _preact.Component {
  constructor(props) {
    super(props);
    this.state = {
      buffer: [],
      eventsBuffer: []
    };
    this.onKeyPress = this.onKeyPress.bind(this);
  }

  componentDidMount() {
    window.document.addEventListener('keydown', this.onKeyPress);
  }

  componentWillUnmount() {
    window.document.removeEventListener('keydown', this.onKeyPress);
  }

  onKeyPress(e) {
    const {
      keys,
      onKeysCoincide,
      simultaneous
    } = this.props;
    const {
      buffer,
      eventsBuffer
    } = this.state;
    const key = e && e.key && e.key.toLowerCase() || null;
    const maxLength = keys.length;
    let newBuffer = [];
    let newEventsBuffer = [];

    if (key) {
      if (buffer.length >= maxLength) {
        newBuffer = buffer.slice(1).concat(key);
        newEventsBuffer = eventsBuffer.slice(1).concat(e);
      } else {
        newBuffer = buffer.concat(key);
        newEventsBuffer = eventsBuffer.concat(e);
      }
    }

    const isKeySetEmpty = !maxLength || maxLength === 0;
    const areKeysPressedTogether = simultaneous && (0, _isEmpty.default)((0, _difference.default)(keys, newBuffer));
    const areKeysPressedSequently = !simultaneous && (0, _isEqual.default)(keys, newBuffer);

    if (!isKeySetEmpty) {
      if (areKeysPressedTogether || areKeysPressedSequently) {
        onKeysCoincide(newBuffer, newEventsBuffer);
        this.setState({
          buffer: [],
          eventsBuffer: []
        });
      } else {
        this.setState({
          buffer: newBuffer,
          eventsBuffer: newEventsBuffer
        });
      }
    }
  }

  render() {
    return null;
  }

}

exports.default = HotKey;
},{"preact":"../node_modules/preact/dist/preact.module.js","lodash/isEmpty":"../node_modules/lodash/isEmpty.js","lodash/difference":"../node_modules/lodash/difference.js","lodash/isEqual":"../node_modules/lodash/isEqual.js"}],"app/pages/home/components/page-content-toolbar.less":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"app/pages/home/components/page-content-toolbar.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _preact = require("preact");

var _classnames = _interopRequireDefault(require("classnames"));

require("./page-content-toolbar.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AddSvg = function AddSvg(props) {
  return (0, _preact.h)("svg", props, (0, _preact.h)("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }), (0, _preact.h)("path", {
    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"
  }));
};

AddSvg.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

var EditSvg = function EditSvg(props) {
  return (0, _preact.h)("svg", props, (0, _preact.h)("path", {
    d: "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
  }), (0, _preact.h)("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }));
};

EditSvg.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

var DeleteSvg = function DeleteSvg(props) {
  return (0, _preact.h)("svg", props, (0, _preact.h)("path", {
    d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
  }), (0, _preact.h)("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }));
};

DeleteSvg.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

const PageContentToolbar = ({
  onNewClick,
  onEditClick,
  onDeleteClick,
  canDelete
}) => {
  const classname = (0, _classnames.default)({
    'is-disabled': !canDelete
  });
  return (0, _preact.h)("div", {
    class: "PageContent-toolbar editor-toolbar"
  }, (0, _preact.h)("button", {
    onClick: () => onNewClick()
  }, (0, _preact.h)(AddSvg, null)), (0, _preact.h)("button", {
    onClick: () => onEditClick()
  }, (0, _preact.h)(EditSvg, null)), (0, _preact.h)("button", {
    class: classname,
    disabled: !canDelete,
    onClick: () => onDeleteClick()
  }, (0, _preact.h)(DeleteSvg, {
    class: classname
  })));
};

var _default = PageContentToolbar;
exports.default = _default;
},{"react":"../node_modules/preact/compat/dist/compat.module.js","preact":"../node_modules/preact/dist/preact.module.js","classnames":"../node_modules/classnames/index.js","./page-content-toolbar.less":"app/pages/home/components/page-content-toolbar.less"}],"../node_modules/easymde/dist/easymde.min.css":[function(require,module,exports) {

        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"app/pages/home/components/page-content.less":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"app/pages/home/components/page-content.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _preact = require("preact");

var _reactMarkdown = _interopRequireDefault(require("react-markdown"));

var _link = _interopRequireDefault(require("./link"));

var _modalDialog = _interopRequireDefault(require("~/app/components/modal-dialog"));

var _modalInputDialog = _interopRequireDefault(require("~/app/components/modal-input-dialog"));

var _hotkey = _interopRequireDefault(require("~/app/components/hotkey"));

var _pageContentToolbar = _interopRequireDefault(require("./page-content-toolbar"));

require("./../../../../../node_modules/easymde/dist/easymde.min.css");

require("./page-content.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class PageContent extends _preact.Component {
  constructor(props) {
    super(props);
    this.state = {
      isNewPageDialogShown: false,
      isDeletePageDialogShown: false
    };
    this.onNewPageDialogHide = this.onNewPageDialogHide.bind(this);
    this.onDeletePageHide = this.onDeletePageHide.bind(this);
  }

  async toggleNewPageDialog() {
    const isNewPageDialogShown = !this.state.isNewPageDialogShown;
    return new Promise(resolve => {
      this.setState({
        isNewPageDialogShown
      }, resolve());
    });
  }

  async toggleDeletePageDialog() {
    const isDeletePageDialogShown = !this.state.isDeletePageDialogShown;
    return new Promise(resolve => {
      this.setState({
        isDeletePageDialogShown
      }, resolve());
    });
  }

  async onNewPageDialogHide(dialogResult, pageName) {
    await this.toggleNewPageDialog();

    if (dialogResult) {
      await this.props.onNew(pageName);
    }
  }

  async onDeletePageHide(dialogResult) {
    await this.toggleDeletePageDialog();

    if (dialogResult) {
      await this.props.onDelete();
    }
  }

  renderNewPageDialog(isNewPageDialogShown) {
    if (!isNewPageDialogShown) {
      return null;
    }

    return (0, _preact.h)(_modalInputDialog.default, {
      title: "New page",
      description: "Please enter a name for the new page",
      onHideDialog: this.onNewPageDialogHide
    });
  }

  renderDeletePageDialog(isDeletePageDialogShown) {
    if (!isDeletePageDialogShown) {
      return null;
    }

    return (0, _preact.h)(_modalDialog.default, {
      title: "DeletePage",
      description: "Do you really want to delete the current page",
      onHideDialog: this.onDeletePageHide
    });
  }

  render({
    pageName,
    content,
    onNew,
    onEdit,
    onDelete
  }, {
    isNewPageDialogShown,
    isDeletePageDialogShown
  }) {
    const canDelete = pageName !== 'index';
    return (0, _preact.h)("div", {
      class: "PageContent-container"
    }, this.renderNewPageDialog(isNewPageDialogShown), this.renderDeletePageDialog(isDeletePageDialogShown), (0, _preact.h)(_pageContentToolbar.default, {
      onNewClick: () => this.toggleNewPageDialog(),
      onEditClick: onEdit,
      onDeleteClick: () => this.toggleDeletePageDialog(),
      canDelete: canDelete
    }), (0, _preact.h)("div", {
      class: "PageContent-body markdown-body"
    }, (0, _preact.h)(_reactMarkdown.default, {
      source: content,
      renderers: {
        link: _link.default
      }
    })), (0, _preact.h)(_hotkey.default, {
      keys: ['shift', 'e'],
      simultaneous: true,
      onKeysCoincide: onEdit
    }), (0, _preact.h)(_hotkey.default, {
      keys: ['alt', 'n'],
      simultaneous: true,
      onKeysCoincide: () => this.toggleNewPageDialog()
    }));
  }

}

exports.default = PageContent;
},{"preact":"../node_modules/preact/dist/preact.module.js","react-markdown":"../node_modules/react-markdown/lib/react-markdown.js","./link":"app/pages/home/components/link.js","~/app/components/modal-dialog":"app/components/modal-dialog.js","~/app/components/modal-input-dialog":"app/components/modal-input-dialog.js","~/app/components/hotkey":"app/components/hotkey.js","./page-content-toolbar":"app/pages/home/components/page-content-toolbar.js","./../../../../../node_modules/easymde/dist/easymde.min.css":"../node_modules/easymde/dist/easymde.min.css","./page-content.less":"app/pages/home/components/page-content.less"}],"app/services/storage.service.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class StorageService {
  getDb() {
    return window.localStorage;
  }

  get(key) {
    return this.getDb().getItem(key);
  }

  set(key, value) {
    this.getDb().setItem(key, value);
  }

  setObject(key, object) {
    this.set(key, JSON.stringify(object));
  }

  getObject(key) {
    const value = this.get(key);

    if (value) {
      return JSON.parse(value);
    }

    return undefined;
  }

  delete(key) {
    this.getDb().removeItem(key);
  }

}

var _default = new StorageService();

exports.default = _default;
},{}],"app/services/configuration.service.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _storage = _interopRequireDefault(require("./storage.service"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const STORE_KEY = 'mdwiki-config';
const APP_VERSION_STORE_KEY = 'mdwiki-version';

class ConfigurationService {
  constructor() {
    this.isLocal = window.location.host.startsWith('localhost');
    this.isLan = window.location.host.startsWith('192.168.178');
    this.config = _storage.default.getObject(STORE_KEY);
    navigator.serviceWorker.addEventListener('message', event => {
      switch (event.data.type) {
        case 'update':
        case 'activate':
          if (event.data.version) {
            _storage.default.set(APP_VERSION_STORE_KEY, event.data.version);
          }

      }
    });
  }

  save(user, repository, oauthToken) {
    this.config = {
      user,
      repository,
      oauthToken
    };

    _storage.default.setObject(STORE_KEY, this.config);
  }

  clear() {
    _storage.default.delete(STORE_KEY);

    this.config = null;
  }

  get oauthLoginUrl() {
    let oauthClientId = 'ca7d513bb2a616052f76';

    if (this.isLocal) {
      oauthClientId = '80a8ebcf2785af9f5c32';
    } else if (this.isLan) {
      oauthClientId = '5e9db2b459c52458a8a2';
    }

    return `https://github-oauth-bridge.now.sh/login?clientId=${oauthClientId}`;
  }

  get user() {
    if (this.config) {
      return this.config.user;
    }
  }

  get repository() {
    if (this.config) {
      return this.config.repository;
    }
  }

  get oauthToken() {
    if (this.config) {
      return this.config.oauthToken;
    }
  }

  get appVersion() {
    return _storage.default.get(APP_VERSION_STORE_KEY) || 1;
  }

}

var _default = new ConfigurationService();

exports.default = _default;
},{"./storage.service":"app/services/storage.service.js"}],"app/services/github.service.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const GITHUB_API_URL = 'https://api.github.com';

class GithubService {
  _buildOptions(oauthToken, method = 'GET') {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    if (oauthToken) {
      headers.append('Authorization', `token ${oauthToken}`);
    }

    return {
      method,
      headers
    };
  }

  _mapPage(page) {
    if (page) {
      return {
        name: page.name.substr(0, page.name.length - 3),
        path: page.path,
        sha: page.sha,
        content: this._decodeContent(page.content)
      };
    }

    return undefined;
  }

  _appendExtension(path) {
    if (!path.endsWith('.md')) {
      return `${path}.md`;
    }

    return path;
  }

  _markdownFilesOnly(page) {
    return page.name.endsWith('.md');
  }

  async _get(url, oauthToken) {
    const options = this._buildOptions(oauthToken, 'GET');

    const response = await fetch(`${GITHUB_API_URL}${url}`, options);

    if (response.status === 200) {
      return response.json();
    }

    return undefined;
  }

  async _put(url, body, oauthToken) {
    const EXPECTED_STATUS = [200, 201];

    const options = this._buildOptions(oauthToken, 'PUT');

    options.body = JSON.stringify(body);
    const response = await fetch(`${GITHUB_API_URL}${url}`, options);

    if (EXPECTED_STATUS.some(s => s === response.status)) {
      return response.json();
    }

    return undefined;
  }

  async _delete(url, body, oauthToken) {
    const options = this._buildOptions(oauthToken, 'DELETE');

    options.body = JSON.stringify(body);
    const response = await fetch(`${GITHUB_API_URL}${url}`, options);

    if (response.status === 200) {
      return response.json();
    }

    return undefined;
  }

  _decodeContent(content) {
    if (content) {
      return decodeURIComponent(escape(window.atob(content)));
    }

    return undefined;
  }

  _encodeContent(content) {
    return window.btoa(unescape(encodeURIComponent(content)));
  }

  async getAuthenticatedUser(oauthToken) {
    const user = await this._get('/user', oauthToken);

    if (user) {
      const {
        avatar_url,
        email,
        login,
        name
      } = user; // eslint-disable-line camelcase

      return {
        avatarUrl: avatar_url,
        email,
        loginName: login,
        userName: name
      };
    }

    return undefined;
  }

  async getUserRepositories(user, oauthToken) {
    return this._get(`/users/${user}/repos?per_page=100`, oauthToken);
  }

  async getPages(userName, repository, oauthToken) {
    const pages = await this._get(`/repos/${userName}/${repository}/contents`, oauthToken);
    return pages.filter(this._markdownFilesOnly).map(page => this._mapPage(page));
  }

  async getPage(userName, repository, path, oauthToken) {
    const page = await this._get(`/repos/${userName}/${repository}/contents/${this._appendExtension(path)}`, oauthToken);
    return this._mapPage(page);
  }

  async searchPages(userName, repository, searchTerm, oauthToken) {
    const searchUrl = `/search/code?q=${escape(searchTerm)}+in:file+extension:md+repo:${userName}/${repository}`;
    const searchResult = await this._get(searchUrl, oauthToken);
    searchResult.items = searchResult.items.map(page => this._mapPage(page));
    return searchResult;
  }

  createPage(userName, repository, pageName, content, commitMessage, oauthToken) {
    return this._createOrUpdatePage(userName, repository, this._appendExtension(pageName), content, commitMessage, undefined, oauthToken);
  }

  updatedPage(userName, repository, page, content, commitMessage, oauthToken) {
    return this._createOrUpdatePage(userName, repository, page.path, content, commitMessage, page.sha, oauthToken);
  }

  async _createOrUpdatePage(userName, repository, path, content, commitMessage, sha, oauthToken) {
    const url = `/repos/${userName}/${repository}/contents/${path}`;
    const body = {
      message: commitMessage,
      content: this._encodeContent(content),
      sha
    };
    const response = await this._put(url, body, oauthToken);
    const page = response.content;
    page.content = body.content;
    return this._mapPage(page);
  }

  deletePage(userName, repository, page, commitMessage, oauthToken) {
    const {
      path,
      sha
    } = page;
    const url = `/repos/${userName}/${repository}/contents/${path}`;
    const body = {
      message: commitMessage,
      sha
    };
    return this._delete(url, body, oauthToken);
  }

}

var _default = new GithubService();

exports.default = _default;
},{}],"app/stores/page.store.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _configurationService = _interopRequireDefault(require("./../services/configuration.service.js"));

var _githubService = _interopRequireDefault(require("./../services/github.service.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class PageStore {
  constructor() {
    this.pages = [];
    this.page = {
      content: ''
    };
  }

  async loadPages() {
    const {
      user,
      repository,
      oauthToken
    } = _configurationService.default;
    const pages = await _githubService.default.getPages(user.loginName, repository, oauthToken);
    this.pages = this._sortByName(this._excludePages(pages));
    return this.pages;
  }

  async loadPage(pageName) {
    const {
      user,
      repository,
      oauthToken
    } = _configurationService.default;
    const page = await _githubService.default.getPage(user.loginName, repository, pageName, oauthToken);
    this.page = page;
    return this.page;
  }

  async createPage(pageName) {
    const {
      user,
      repository,
      oauthToken
    } = _configurationService.default;
    const {
      pages
    } = this;
    const commitMessage = `Create new page ${pageName}`;
    const content = `# ${pageName}`;
    pageName = pageName.replace(/\s/g, '_');
    const page = await _githubService.default.createPage(user.loginName, repository, pageName, content, commitMessage, oauthToken);
    pages.push(page);
    this.pages = this._sortByName(pages);
    this.page = page;
    return this.page;
  }

  async updatePage(content, commitMessage) {
    const {
      user,
      repository,
      oauthToken
    } = _configurationService.default;
    const {
      pages,
      page
    } = this;
    const updatedPage = await _githubService.default.updatedPage(user.loginName, repository, page, content, commitMessage, oauthToken);
    this.pages = pages;
    this.page = updatedPage;
    return updatedPage;
  }

  async deletePage() {
    const {
      user,
      repository,
      oauthToken
    } = _configurationService.default;
    const {
      pages,
      page
    } = this;
    const commitMessage = `Delete page ${page.name}`;
    await _githubService.default.deletePage(user.loginName, repository, page, commitMessage, oauthToken);
    const index = pages.indexOf(p => p.name === page.name);
    pages.splice(index, 1);
    this.pages = pages;
  }

  _excludePages(pages) {
    const PAGES_TO_EXCLUDE = ['readme', 'index'];
    return pages.filter(p => !PAGES_TO_EXCLUDE.some(name => name === p.name.toLowerCase()));
  }

  _sortByName(pages) {
    return pages.sort((p1, p2) => {
      return p1.name.localeCompare(p2.name);
    });
  }

}

var _default = PageStore;
exports.default = _default;
},{"./../services/configuration.service.js":"app/services/configuration.service.js","./../services/github.service.js":"app/services/github.service.js"}],"app/pages/home/index.less":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../node_modules/parcel-bundler/src/builtins/bundle-loader.js":[function(require,module,exports) {
var getBundleURL = require('./bundle-url').getBundleURL;

function loadBundlesLazy(bundles) {
  if (!Array.isArray(bundles)) {
    bundles = [bundles];
  }

  var id = bundles[bundles.length - 1];

  try {
    return Promise.resolve(require(id));
  } catch (err) {
    if (err.code === 'MODULE_NOT_FOUND') {
      return new LazyPromise(function (resolve, reject) {
        loadBundles(bundles.slice(0, -1)).then(function () {
          return require(id);
        }).then(resolve, reject);
      });
    }

    throw err;
  }
}

function loadBundles(bundles) {
  return Promise.all(bundles.map(loadBundle));
}

var bundleLoaders = {};

function registerBundleLoader(type, loader) {
  bundleLoaders[type] = loader;
}

module.exports = exports = loadBundlesLazy;
exports.load = loadBundles;
exports.register = registerBundleLoader;
var bundles = {};

function loadBundle(bundle) {
  var id;

  if (Array.isArray(bundle)) {
    id = bundle[1];
    bundle = bundle[0];
  }

  if (bundles[bundle]) {
    return bundles[bundle];
  }

  var type = (bundle.substring(bundle.lastIndexOf('.') + 1, bundle.length) || bundle).toLowerCase();
  var bundleLoader = bundleLoaders[type];

  if (bundleLoader) {
    return bundles[bundle] = bundleLoader(getBundleURL() + bundle).then(function (resolved) {
      if (resolved) {
        module.bundle.register(id, resolved);
      }

      return resolved;
    }).catch(function (e) {
      delete bundles[bundle];
      throw e;
    });
  }
}

function LazyPromise(executor) {
  this.executor = executor;
  this.promise = null;
}

LazyPromise.prototype.then = function (onSuccess, onError) {
  if (this.promise === null) this.promise = new Promise(this.executor);
  return this.promise.then(onSuccess, onError);
};

LazyPromise.prototype.catch = function (onError) {
  if (this.promise === null) this.promise = new Promise(this.executor);
  return this.promise.catch(onError);
};
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"app/pages/home/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _preact = require("preact");

var _compat = require("preact/compat");

var _classnames = _interopRequireDefault(require("classnames"));

var _footer = _interopRequireDefault(require("~/app/components/footer"));

var _appTitle = _interopRequireDefault(require("~/app/components/app-title"));

var _connectButton = _interopRequireDefault(require("~/app/components/connect-button"));

var _loginButton = _interopRequireDefault(require("~/app/components/login-button"));

var _sidebarButton = _interopRequireDefault(require("~/app/components/sidebar-button"));

var _searchBox = _interopRequireDefault(require("~/app/components/search-box"));

var _sidebar = _interopRequireDefault(require("./components/sidebar"));

var _pageContent = _interopRequireDefault(require("./components/page-content"));

var _configuration = _interopRequireDefault(require("~/app/services/configuration.service"));

var _navigator = _interopRequireDefault(require("~/app/services/navigator.service"));

var _page = _interopRequireDefault(require("./../../stores/page.store"));

require("./index.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const PageEditor = (0, _compat.lazy)(() => require("_bundle_loader")(require.resolve('./components/page-editor')));

class HomePage extends _preact.Component {
  constructor(props) {
    super(props);
    this.store = new _page.default();
    const {
      pages,
      page
    } = this.store;
    this.state = {
      showSidebar: false,
      pages,
      page,
      isInEditMode: false,
      isNewPageDialogShown: false
    };
    this.toggleSidebar = this.toggleSidebar.bind(this);
    this.onGotoPage = this.onGotoPage.bind(this);
    this.onStartSearch = this.onStartSearch.bind(this);
    this.onNewPage = this.onNewPage.bind(this);
    this.onEditPage = this.onEditPage.bind(this);
    this.onDeletePage = this.onDeletePage.bind(this);
    this.onSavePage = this.onSavePage.bind(this);
    this.onCancelEditPage = this.onCancelEditPage.bind(this);
  }

  componentWillReceiveProps(nextProps, nextState) {
    if (nextProps.page !== this.props.page) {
      this.loadPage(nextProps.page);
    }
  }

  onStartSearch(searchTerm) {
    _navigator.default.gotoSearch(searchTerm);
  }

  async loadPages() {
    const pages = await this.store.loadPages();
    this.setState({
      pages
    });
  }

  async loadPage(pageName = 'index') {
    const page = await this.store.loadPage(pageName);
    this.setState({
      page
    });
  }

  async componentDidMount() {
    if (_configuration.default.user) {
      await this.loadPages();
      const {
        page
      } = this.props;
      await this.loadPage(page);
    }
  }

  toggleSidebar() {
    const showSidebar = !this.state.showSidebar;
    this.setState({
      showSidebar
    });
  }

  onGotoPage(pageName) {
    _navigator.default.gotoPage(pageName);

    if (this.state.showSidebar) {
      this.toggleSidebar();
    }
  }

  toggleEditMode() {
    const isInEditMode = !this.state.isInEditMode;
    this.setState({
      isInEditMode
    });
  }

  onEditPage() {
    this.toggleEditMode();
  }

  onCancelEditPage() {
    this.toggleEditMode();
  }

  async onDeletePage() {
    await this.store.deletePage();
    const nextPageName = this.store.pages.length > 0 ? this.store.pages[0].name : 'index';

    _navigator.default.gotoPage(nextPageName);
  }

  async onNewPage(pageName) {
    const page = await this.store.createPage(pageName);

    _navigator.default.gotoPage(page.name);
  }

  async onSavePage(content, commitMessage) {
    const page = await this.store.updatePage(content, commitMessage);
    this.setState({
      page
    }, () => this.toggleEditMode());
  }

  renderPageContent(pageName, content) {
    return (0, _preact.h)(_pageContent.default, {
      pageName: pageName,
      content: content,
      onNew: this.onNewPage,
      onEdit: this.onEditPage,
      onDelete: this.onDeletePage
    });
  }

  renderPageEditor(pageName, content) {
    return (0, _preact.h)(_compat.Suspense, {
      fallback: (0, _preact.h)("div", null, "Loading Markdown-editor...")
    }, (0, _preact.h)(PageEditor, {
      pageName: pageName,
      content: content,
      onSave: this.onSavePage,
      onCancel: this.onCancelEditPage
    }));
  }

  render(props, {
    showSidebar,
    isInEditMode,
    pages,
    page
  }) {
    const leftSidebarContainerClassname = (0, _classnames.default)('HomePage-sidebarContainer', {
      'is-shown': showSidebar
    });
    const user = _configuration.default.user;
    return (0, _preact.h)("div", {
      class: "App-container"
    }, (0, _preact.h)("header", {
      class: "HomePage-header"
    }, (0, _preact.h)("nav", {
      class: "HomePage-leftNavbar"
    }, (0, _preact.h)(_sidebarButton.default, {
      onClick: this.toggleSidebar,
      showSidebar: showSidebar
    })), (0, _preact.h)(_appTitle.default, null), (0, _preact.h)("nav", null, (0, _preact.h)(_searchBox.default, {
      onSearch: this.onStartSearch
    })), (0, _preact.h)("nav", {
      class: "HomePage-rightNavbar"
    }, (0, _preact.h)(_connectButton.default, null), (0, _preact.h)(_loginButton.default, {
      user: user
    }))), (0, _preact.h)("main", null, (0, _preact.h)("div", {
      class: "HomePage-container"
    }, (0, _preact.h)("div", {
      class: leftSidebarContainerClassname
    }, (0, _preact.h)(_sidebar.default, {
      pages: pages,
      onClick: this.onGotoPage
    })), (0, _preact.h)("div", {
      class: "HomePage-contentContainer"
    }, !isInEditMode && this.renderPageContent(page.name, page.content), isInEditMode && this.renderPageEditor(page.name, page.content)))), (0, _preact.h)(_footer.default, {
      appVersion: _configuration.default.appVersion
    }));
  }

}

exports.default = HomePage;
},{"preact":"../node_modules/preact/dist/preact.module.js","preact/compat":"../node_modules/preact/compat/dist/compat.module.js","classnames":"../node_modules/classnames/index.js","~/app/components/footer":"app/components/footer.js","~/app/components/app-title":"app/components/app-title.js","~/app/components/connect-button":"app/components/connect-button.js","~/app/components/login-button":"app/components/login-button.js","~/app/components/sidebar-button":"app/components/sidebar-button.js","~/app/components/search-box":"app/components/search-box.js","./components/sidebar":"app/pages/home/components/sidebar.js","./components/page-content":"app/pages/home/components/page-content.js","~/app/services/configuration.service":"app/services/configuration.service.js","~/app/services/navigator.service":"app/services/navigator.service.js","./../../stores/page.store":"app/stores/page.store.js","./index.less":"app/pages/home/index.less","_bundle_loader":"../node_modules/parcel-bundler/src/builtins/bundle-loader.js","./components/page-editor":[["page-editor.371fac1d.js","app/pages/home/components/page-editor.js"],"page-editor.371fac1d.js.map","page-editor.371fac1d.css","app/pages/home/components/page-editor.js"]}],"app/pages/connect/components/repositories-selection.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _preact = require("preact");

const RepositoriesSelection = ({
  repositories,
  selectedRepository,
  onSelectedRepositoryChanged,
  onConnectClick
}) => {
  return (0, _preact.h)(_preact.Fragment, null, (0, _preact.h)("h3", null, "Select an existing repository where the data should be saved"), (0, _preact.h)("form", {
    onSubmit: e => e.preventDefault()
  }, (0, _preact.h)("select", {
    class: "select",
    onChange: e => onSelectedRepositoryChanged(e.target.value)
  }, (0, _preact.h)("option", {
    disabled: true,
    selected: true,
    value: true
  }, " -- select a repository -- "), repositories.map(r => (0, _preact.h)("option", {
    value: r.name
  }, r.name))), (0, _preact.h)("br", null), (0, _preact.h)("br", null), (0, _preact.h)("button", {
    class: "button button-primary",
    onClick: () => onConnectClick(),
    disabled: !selectedRepository
  }, "Connect")));
};

var _default = RepositoriesSelection;
exports.default = _default;
},{"preact":"../node_modules/preact/dist/preact.module.js"}],"app/pages/connect/components/login-state.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _preact = require("preact");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GithubSvg = function GithubSvg(props) {
  return (0, _preact.h)("svg", props, (0, _preact.h)("path", {
    d: "M145.66 0C65.219 0 0 65.219 0 145.66c0 80.45 65.219 145.66 145.66 145.66s145.66-65.21 145.66-145.66C291.319 65.219 226.1 0 145.66 0zm40.802 256.625c-.838-11.398-1.775-25.518-1.83-31.235-.364-4.388-.838-15.549-11.434-22.677 42.068-3.523 62.087-26.774 63.526-57.499 1.202-17.497-5.754-32.883-18.107-45.3.628-13.282-.401-29.023-1.256-35.941-9.486-2.731-31.608 8.949-37.79 13.947-13.037-5.062-44.945-6.837-64.336 0-13.747-9.668-29.396-15.64-37.926-13.974-7.875 17.452-2.813 33.948-1.275 35.914-10.142 9.268-24.289 20.675-20.447 44.572 6.163 35.04 30.816 53.94 70.508 58.564-8.466 1.73-9.896 8.048-10.606 10.788-26.656 10.997-34.275-6.791-37.644-11.425-11.188-13.847-21.23-9.832-21.849-9.614-.601.218-1.056 1.092-.992 1.511.564 2.986 6.655 6.018 6.955 6.263 8.257 6.154 11.316 17.27 13.2 20.438 11.844 19.473 39.374 11.398 39.638 11.562.018 1.702-.191 16.032-.355 27.184C64.245 245.992 27.311 200.2 27.311 145.66c0-65.365 52.984-118.348 118.348-118.348S264.008 80.295 264.008 145.66c0 51.008-32.318 94.332-77.546 110.965z"
  }));
};

GithubSvg.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 291.32 291.32"
};

const LoginState = ({
  user,
  onLoginClick
}) => {
  if (user) {
    return (0, _preact.h)("div", {
      class: "ConnectPage-userContainer"
    }, (0, _preact.h)("h3", null, "You're logged in as:"), (0, _preact.h)("img", {
      class: "ConnectPage-userImage",
      src: user.avatarUrl,
      alt: user.userName
    }), (0, _preact.h)("span", {
      class: "ConnectPage-userName"
    }, user.userName));
  }

  return (0, _preact.h)("button", {
    class: "button button-primary ConnectPage-githubButton",
    onClick: () => onLoginClick()
  }, (0, _preact.h)(GithubSvg, null), "Login with using Github");
};

var _default = LoginState;
exports.default = _default;
},{"react":"../node_modules/preact/compat/dist/compat.module.js","preact":"../node_modules/preact/dist/preact.module.js"}],"app/pages/connect/index.less":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"app/pages/connect/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _preact = require("preact");

var _appTitle = _interopRequireDefault(require("~/app/components/app-title"));

var _footer = _interopRequireDefault(require("~/app/components/footer"));

var _configuration = _interopRequireDefault(require("~/app/services/configuration.service"));

var _github = _interopRequireDefault(require("~/app/services/github.service"));

var _navigator = _interopRequireDefault(require("~/app/services/navigator.service"));

var _repositoriesSelection = _interopRequireDefault(require("./components/repositories-selection"));

var _loginState = _interopRequireDefault(require("./components/login-state"));

require("./index.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ConnectPage extends _preact.Component {
  constructor(props) {
    super(props);
    this.state = {
      repositories: [],
      selectedRepository: undefined
    };
    this.changeSelectedRepository = this.changeSelectedRepository.bind(this);
    this.navigateToGithub = this.navigateToGithub.bind(this);
  }

  componentDidMount() {
    if (this.props.logout !== undefined) {
      this.disconnect();
    }

    const token = this.props.token || _configuration.default.oauthToken;

    if (token) {
      this.verifyOauthToken(token);
    }

    if (_configuration.default.repository) {
      this.changeSelectedRepository(_configuration.default.repository);
    }
  }

  navigateToGithub() {
    window.location.href = _configuration.default.oauthLoginUrl;
  }

  async verifyOauthToken(oauthToken) {
    const user = await _github.default.getAuthenticatedUser(oauthToken);

    if (user) {
      const repositories = await _github.default.getUserRepositories(user.loginName, oauthToken);
      this.setState({
        user,
        repositories,
        oauthToken
      });
    }
  }

  changeSelectedRepository(selectedRepository) {
    this.setState({
      selectedRepository
    });
  }

  connect() {
    const {
      user,
      selectedRepository,
      oauthToken
    } = this.state;

    _configuration.default.save(user, selectedRepository, oauthToken);

    _navigator.default.gotoHome();
  }

  disconnect() {
    _configuration.default.clear();
  }

  render(props, {
    user,
    repositories,
    selectedRepository
  }) {
    return (0, _preact.h)("div", {
      class: "App-container"
    }, (0, _preact.h)("header", {
      class: "ConnectPage-header"
    }, (0, _preact.h)(_appTitle.default, null)), (0, _preact.h)("main", null, (0, _preact.h)("div", {
      class: "ConnectPage-contentContainer"
    }, (0, _preact.h)("h2", null, "Login and connect"), (0, _preact.h)("p", {
      class: "ConnectPage-description"
    }, "To be able to work with MDWiki you have to login with your ", (0, _preact.h)("strong", null, "GitHub"), " account and then select a Git repository where the data should be saved. MDWiki will create for each page a new file in the repository and each change will be saved with a new commit. And since the data will be saved on ", (0, _preact.h)("strong", null, "Github"), " as ", (0, _preact.h)("strong", null, "Markdown"), " files, you can use and change it also outside from MDWiki."), (0, _preact.h)(_loginState.default, {
      user: user,
      onLoginClick: this.navigateToGithub
    }), user && (0, _preact.h)(_repositoriesSelection.default, {
      repositories: repositories,
      selectedRepository: selectedRepository,
      onSelectedRepositoryChanged: this.changeSelectedRepository,
      onConnectClick: () => this.connect()
    }))), (0, _preact.h)(_footer.default, {
      appVersion: _configuration.default.appVersion
    }));
  }

}

exports.default = ConnectPage;
},{"preact":"../node_modules/preact/dist/preact.module.js","~/app/components/app-title":"app/components/app-title.js","~/app/components/footer":"app/components/footer.js","~/app/services/configuration.service":"app/services/configuration.service.js","~/app/services/github.service":"app/services/github.service.js","~/app/services/navigator.service":"app/services/navigator.service.js","./components/repositories-selection":"app/pages/connect/components/repositories-selection.js","./components/login-state":"app/pages/connect/components/login-state.js","./index.less":"app/pages/connect/index.less"}],"app/pages/search/components/search-result.less":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"app/pages/search/components/search-result.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _preact = require("preact");

require("./search-result.less");

function renderSearchResultItem(page, onSearchItemClicked) {
  return (0, _preact.h)("li", {
    key: page.name
  }, (0, _preact.h)("button", {
    type: "button",
    class: "SearchResult-linkButton",
    onClick: () => onSearchItemClicked(page.name)
  }, page.name));
}

const SearchResult = ({
  searchResultItems,
  onSearchItemClicked
}) => {
  return (0, _preact.h)("ul", null, searchResultItems.map(item => renderSearchResultItem(item, onSearchItemClicked)));
};

var _default = SearchResult;
exports.default = _default;
},{"preact":"../node_modules/preact/dist/preact.module.js","./search-result.less":"app/pages/search/components/search-result.less"}],"app/pages/search/components/search-input.less":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"app/pages/search/components/search-input.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _preact = require("preact");

var _hooks = require("preact/hooks");

require("./search-input.less");

const SearchInput = props => {
  const searchInputRef = (0, _hooks.useRef)(null);
  const [searchTerm, setSearchTerm] = (0, _hooks.useState)(props.searchTerm);
  (0, _hooks.useEffect)(() => {
    searchInputRef.current.focus();
  }, []);

  function onInputKeyDown(e) {
    if (e.code === 'Enter') {
      props.onSearch(e.target.value);
    }
  }

  return (0, _preact.h)("div", {
    class: "SearchInput-container"
  }, (0, _preact.h)("input", {
    class: "input",
    type: "text",
    value: searchTerm,
    ref: searchInputRef,
    onChange: e => setSearchTerm(e.target.value),
    onKeyDown: onInputKeyDown
  }), (0, _preact.h)("button", {
    class: "button button-primary button-small",
    onClick: () => props.onSearch(searchTerm)
  }, "Search"));
};

var _default = SearchInput;
exports.default = _default;
},{"preact":"../node_modules/preact/dist/preact.module.js","preact/hooks":"../node_modules/preact/hooks/dist/hooks.module.js","./search-input.less":"app/pages/search/components/search-input.less"}],"app/pages/search/index.less":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"app/pages/search/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _preact = require("preact");

var _footer = _interopRequireDefault(require("~/app/components/footer"));

var _appTitle = _interopRequireDefault(require("~/app/components/app-title"));

var _loginButton = _interopRequireDefault(require("~/app/components/login-button"));

var _connectButton = _interopRequireDefault(require("~/app/components/connect-button"));

var _searchResult = _interopRequireDefault(require("./components/search-result"));

var _searchInput = _interopRequireDefault(require("./components/search-input"));

var _configuration = _interopRequireDefault(require("~/app/services/configuration.service"));

var _github = _interopRequireDefault(require("~/app/services/github.service"));

var _navigator = _interopRequireDefault(require("~/app/services/navigator.service"));

require("./index.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class SearchPage extends _preact.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      searchResult: {
        items: []
      }
    };
    this.onSearchItemClicked = this.onSearchItemClicked.bind(this);
    this.search = this.search.bind(this);
  }

  componentDidMount() {
    const searchTerm = this.props.q;

    if (searchTerm) {
      this.search(searchTerm);
    }
  }

  async search(searchTerm) {
    const {
      user,
      repository,
      oauthToken
    } = _configuration.default;
    const searchResult = await _github.default.searchPages(user.loginName, repository, searchTerm, oauthToken);
    this.setState({
      searchTerm,
      searchResult
    });
  }

  onSearchItemClicked(pageName) {
    _navigator.default.gotoPage(pageName);
  }

  render(props, {
    searchTerm,
    searchResult
  }) {
    const {
      user,
      appVersion
    } = _configuration.default;
    searchTerm = searchTerm || props.q;
    return (0, _preact.h)("div", {
      class: "App-container"
    }, (0, _preact.h)("header", {
      class: "SearchPage-header"
    }, (0, _preact.h)(_appTitle.default, null), (0, _preact.h)("nav", null, (0, _preact.h)(_connectButton.default, null), (0, _preact.h)(_loginButton.default, {
      user: user
    }))), (0, _preact.h)("main", null, (0, _preact.h)("div", {
      class: "SearchPage-container"
    }, (0, _preact.h)(_searchInput.default, {
      searchTerm: searchTerm,
      onSearch: this.search
    }), (0, _preact.h)(_searchResult.default, {
      searchResultItems: searchResult.items,
      onSearchItemClicked: this.onSearchItemClicked
    }))), (0, _preact.h)(_footer.default, {
      appVersion: appVersion
    }));
  }

}

exports.default = SearchPage;
},{"preact":"../node_modules/preact/dist/preact.module.js","~/app/components/footer":"app/components/footer.js","~/app/components/app-title":"app/components/app-title.js","~/app/components/login-button":"app/components/login-button.js","~/app/components/connect-button":"app/components/connect-button.js","./components/search-result":"app/pages/search/components/search-result.js","./components/search-input":"app/pages/search/components/search-input.js","~/app/services/configuration.service":"app/services/configuration.service.js","~/app/services/github.service":"app/services/github.service.js","~/app/services/navigator.service":"app/services/navigator.service.js","./index.less":"app/pages/search/index.less"}],"app/app.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _preact = require("preact");

var _preactRouter = require("preact-router");

var _home = _interopRequireDefault(require("./pages/home"));

var _connect = _interopRequireDefault(require("./pages/connect"));

var _search = _interopRequireDefault(require("./pages/search"));

var _configuration = _interopRequireDefault(require("~/app/services/configuration.service"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class App extends _preact.Component {
  constructor() {
    super();
    this.handleRoute = this.handleRoute.bind(this);
  }

  isConnected() {
    return !!_configuration.default.user;
  }

  handleRoute(e) {
    switch (e.current.props.path) {
      case '/':
        const isConnected = this.isConnected();

        if (!isConnected) {
          let path = '/connect';

          if (e.current.props.token) {
            path += `?token=${e.current.props.token}`;
          }

          (0, _preactRouter.route)(path, true);
        }

        break;
    }
  }

  render() {
    return (0, _preact.h)(_preactRouter.Router, {
      onChange: this.handleRoute
    }, (0, _preact.h)(_home.default, {
      path: "/"
    }), (0, _preact.h)(_connect.default, {
      path: "/connect"
    }), (0, _preact.h)(_search.default, {
      path: "/search"
    }));
  }

}

var _default = App;
exports.default = _default;
},{"preact":"../node_modules/preact/dist/preact.module.js","preact-router":"../node_modules/preact-router/dist/preact-router.es.js","./pages/home":"app/pages/home/index.js","./pages/connect":"app/pages/connect/index.js","./pages/search":"app/pages/search/index.js","~/app/services/configuration.service":"app/services/configuration.service.js"}],"index.js":[function(require,module,exports) {
"use strict";

var _preact = require("preact");

require("preact/debug");

var _app = _interopRequireDefault(require("./app/app.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function renderApp() {
  (0, _preact.render)((0, _preact.h)(_app.default, null), document.body);
}

renderApp();

if (module.hot) {
  module.hot.accept(renderApp);
}
},{"preact":"../node_modules/preact/dist/preact.module.js","preact/debug":"../node_modules/preact/debug/dist/debug.module.js","./app/app.js":"app/app.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "41681" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}],"../node_modules/parcel-bundler/src/builtins/loaders/browser/css-loader.js":[function(require,module,exports) {
module.exports = function loadCSSBundle(bundle) {
  return new Promise(function (resolve, reject) {
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = bundle;

    link.onerror = function (e) {
      link.onerror = link.onload = null;
      reject(e);
    };

    link.onload = function () {
      link.onerror = link.onload = null;
      resolve();
    };

    document.getElementsByTagName('head')[0].appendChild(link);
  });
};
},{}],"../node_modules/parcel-bundler/src/builtins/loaders/browser/js-loader.js":[function(require,module,exports) {
module.exports = function loadJSBundle(bundle) {
  return new Promise(function (resolve, reject) {
    var script = document.createElement('script');
    script.async = true;
    script.type = 'text/javascript';
    script.charset = 'utf-8';
    script.src = bundle;

    script.onerror = function (e) {
      script.onerror = script.onload = null;
      reject(e);
    };

    script.onload = function () {
      script.onerror = script.onload = null;
      resolve();
    };

    document.getElementsByTagName('head')[0].appendChild(script);
  });
};
},{}],0:[function(require,module,exports) {
var b=require("../node_modules/parcel-bundler/src/builtins/bundle-loader.js");b.register("css",require("../node_modules/parcel-bundler/src/builtins/loaders/browser/css-loader.js"));b.register("js",require("../node_modules/parcel-bundler/src/builtins/loaders/browser/js-loader.js"));
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js",0,"index.js"], null)
//# sourceMappingURL=/src.e31bb0bc.js.map