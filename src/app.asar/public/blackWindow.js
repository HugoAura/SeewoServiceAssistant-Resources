!(function (a) {
  function e(e) {
    for (
      var t, n, r = e[0], o = e[1], u = e[2], l = 0, i = [];
      l < r.length;
      l++
    )
      (n = r[l]),
        Object.prototype.hasOwnProperty.call(f, n) && f[n] && i.push(f[n][0]),
        (f[n] = 0);
    for (t in o) Object.prototype.hasOwnProperty.call(o, t) && (a[t] = o[t]);
    for (d && d(e); i.length; ) i.shift()();
    return p.push.apply(p, u || []), c();
  }
  function c() {
    for (var e, t = 0; t < p.length; t++) {
      for (var n = p[t], r = !0, o = 1; o < n.length; o++) {
        var u = n[o];
        0 !== f[u] && (r = !1);
      }
      r && (p.splice(t--, 1), (e = l((l.s = n[0]))));
    }
    return e;
  }
  var n = {},
    f = { 3: 0 },
    p = [];
  function l(e) {
    if (n[e]) return n[e].exports;
    var t = (n[e] = { i: e, l: !1, exports: {} });
    return a[e].call(t.exports, t, t.exports, l), (t.l = !0), t.exports;
  }
  (l.m = a),
    (l.c = n),
    (l.d = function (e, t, n) {
      l.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (l.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (l.t = function (t, e) {
      if ((1 & e && (t = l(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var n = Object.create(null);
      if (
        (l.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var r in t)
          l.d(
            n,
            r,
            function (e) {
              return t[e];
            }.bind(null, r)
          );
      return n;
    }),
    (l.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return l.d(t, "a", t), t;
    }),
    (l.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (l.p = "");
  var t = (window.webpackJsonp = window.webpackJsonp || []),
    r = t.push.bind(t);
  (t.push = e), (t = t.slice());
  for (var o = 0; o < t.length; o++) e(t[o]);
  var d = r;
  p.push([903, 0]), c();
})({
  903: function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n(0),
      o = n.n(r),
      u = n(18),
      l = n.n(u),
      i = (n(30), n(7)),
      a = Object(r.memo)(function () {
        return o.a.createElement("div", {
          style: { width: "100%", height: "100%", backgroundColor: "#000" },
          onClick: function () {
            i.a.send("windowControl", {
              typeName: "multipleFullscreenWindowClose",
              windowName: "blackWindow",
            });
          },
        });
      });
    l.a.render(o.a.createElement(a, null), document.getElementById("root"));
  },
});
