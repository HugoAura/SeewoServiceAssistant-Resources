!(function (u) {
  function e(e) {
    for (
      var n, t, o = e[0], r = e[1], a = e[2], i = 0, l = [];
      i < o.length;
      i++
    )
      (t = o[i]),
        Object.prototype.hasOwnProperty.call(d, t) && d[t] && l.push(d[t][0]),
        (d[t] = 0);
    for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (u[n] = r[n]);
    for (f && f(e); l.length; ) l.shift()();
    return s.push.apply(s, a || []), c();
  }
  function c() {
    for (var e, n = 0; n < s.length; n++) {
      for (var t = s[n], o = !0, r = 1; r < t.length; r++) {
        var a = t[r];
        0 !== d[a] && (o = !1);
      }
      o && (s.splice(n--, 1), (e = i((i.s = t[0]))));
    }
    return e;
  }
  var t = {},
    d = { 17: 0 },
    s = [];
  function i(e) {
    if (t[e]) return t[e].exports;
    var n = (t[e] = { i: e, l: !1, exports: {} });
    return u[e].call(n.exports, n, n.exports, i), (n.l = !0), n.exports;
  }
  (i.m = u),
    (i.c = t),
    (i.d = function (e, n, t) {
      i.o(e, n) || Object.defineProperty(e, n, { enumerable: !0, get: t });
    }),
    (i.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (i.t = function (n, e) {
      if ((1 & e && (n = i(n)), 8 & e)) return n;
      if (4 & e && "object" == typeof n && n && n.__esModule) return n;
      var t = Object.create(null);
      if (
        (i.r(t),
        Object.defineProperty(t, "default", { enumerable: !0, value: n }),
        2 & e && "string" != typeof n)
      )
        for (var o in n)
          i.d(
            t,
            o,
            function (e) {
              return n[e];
            }.bind(null, o)
          );
      return t;
    }),
    (i.n = function (e) {
      var n =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return i.d(n, "a", n), n;
    }),
    (i.o = function (e, n) {
      return Object.prototype.hasOwnProperty.call(e, n);
    }),
    (i.p = "");
  var n = (window.webpackJsonp = window.webpackJsonp || []),
    o = n.push.bind(n);
  (n.push = e), (n = n.slice());
  for (var r = 0; r < n.length; r++) e(n[r]);
  var f = o;
  s.push([905, 0]), c();
})({
  736: function (e, n, t) {
    var o = t(737);
    "string" == typeof o && (o = [[e.i, o, ""]]);
    var r = { hmr: !0, transform: void 0, insertInto: void 0 };
    t(12)(o, r);
    o.locals && (e.exports = o.locals);
  },
  737: function (e, n, t) {
    (n = e.exports = t(11)(!1)).push([
      e.i,
      ".index__modal-box__34JtN46u > div > div {\n  -webkit-box-shadow: none !important;\n          box-shadow: none !important;\n}\n",
      "",
    ]),
      (n.locals = { "modal-box": "index__modal-box__34JtN46u" });
  },
  905: function (e, n, t) {
    "use strict";
    t.r(n);
    var r = t(0),
      a = t.n(r),
      o = t(18),
      i = t.n(o),
      l = t(17),
      u = t.n(l),
      c = t(56),
      d = t(7),
      s = t(37);
    t(736);
    var f = function () {
        var e = Object(r.useState)(!1),
          n = u()(e, 2),
          t = n[0],
          o = n[1];
        return (
          Object(r.useEffect)(function () {
            o(!0);
          }, []),
          a.a.createElement(
            s.a,
            null,
            a.a.createElement(
              "div",
              { className: "index__modal-box__34JtN46u" },
              a.a.createElement(c.a, {
                show: t,
                onOk: function () {
                  d.a.send("uninstallApp"),
                    d.a.send("windowControl", {
                      typeName: "close",
                      windowName: window.windowName,
                    });
                },
                onCancell: function () {
                  d.a.send("windowControl", {
                    typeName: "close",
                    windowName: window.windowName,
                  });
                },
              })
            )
          )
        );
      },
      p = (f = Object(r.memo)(f)),
      w = t(22),
      m = (t(30), t(24)),
      b = t(79);
    window.DWMOpenState ? t(360) : t(361);
    var v;
    (v = p),
      i.a.render(
        a.a.createElement(
          m.a,
          { store: b.a },
          a.a.createElement(
            w.a,
            { needReloadForPortRenew: !0 },
            a.a.createElement(v, null)
          )
        ),
        document.getElementById("root")
      );
  },
});
