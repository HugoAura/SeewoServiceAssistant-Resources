!(function (l) {
  function e(e) {
    for (
      var r, t, n = e[0], o = e[1], i = e[2], u = 0, p = [];
      u < n.length;
      u++
    )
      (t = n[u]),
        Object.prototype.hasOwnProperty.call(d, t) && d[t] && p.push(d[t][0]),
        (d[t] = 0);
    for (r in o) Object.prototype.hasOwnProperty.call(o, r) && (l[r] = o[r]);
    for (c && c(e); p.length; ) p.shift()();
    return f.push.apply(f, i || []), a();
  }
  function a() {
    for (var e, r = 0; r < f.length; r++) {
      for (var t = f[r], n = !0, o = 1; o < t.length; o++) {
        var i = t[o];
        0 !== d[i] && (n = !1);
      }
      n && (f.splice(r--, 1), (e = u((u.s = t[0]))));
    }
    return e;
  }
  var t = {},
    d = { 40: 0 },
    f = [];
  function u(e) {
    if (t[e]) return t[e].exports;
    var r = (t[e] = { i: e, l: !1, exports: {} });
    return l[e].call(r.exports, r, r.exports, u), (r.l = !0), r.exports;
  }
  (u.m = l),
    (u.c = t),
    (u.d = function (e, r, t) {
      u.o(e, r) || Object.defineProperty(e, r, { enumerable: !0, get: t });
    }),
    (u.r = function (e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (u.t = function (r, e) {
      if ((1 & e && (r = u(r)), 8 & e)) return r;
      if (4 & e && 'object' == typeof r && r && r.__esModule) return r;
      var t = Object.create(null);
      if (
        (u.r(t),
        Object.defineProperty(t, 'default', { enumerable: !0, value: r }),
        2 & e && 'string' != typeof r)
      )
        for (var n in r)
          u.d(
            t,
            n,
            function (e) {
              return r[e];
            }.bind(null, n)
          );
      return t;
    }),
    (u.n = function (e) {
      var r =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return u.d(r, 'a', r), r;
    }),
    (u.o = function (e, r) {
      return Object.prototype.hasOwnProperty.call(e, r);
    }),
    (u.p = '');
  var r = (window.webpackJsonp = window.webpackJsonp || []),
    n = r.push.bind(r);
  (r.push = e), (r = r.slice());
  for (var o = 0; o < r.length; o++) e(r[o]);
  var c = n;
  f.push([866, 0]), a();
})({
  866: function (e, r, t) {
    'use strict';
    t.r(r);
    t(30);
    document.getElementById('root').innerHTML =
      '\n    <div style=\'width: 100%; height: 100%; padding: 8px;\'>\n        <div style="width: 100%; height: 100%; border: 10px solid #FF4C00; border-radius: 99999px; box-shadow: 0 2px 8px 0 rgba(255,76,0,0.50);">\n            <div style="width: 100%; height: 100%; border-radius: 9999px;  box-shadow: inset 0 2px 8px 0 rgba(255,76,0,0.50);"></div>\n        </div>\n    </div>\n';
  },
});
