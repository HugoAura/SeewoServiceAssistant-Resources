!(function (_) {
  function e(e) {
    for (
      var n, t, o = e[0], r = e[1], i = e[2], a = 0, l = [];
      a < o.length;
      a++
    )
      (t = o[a]),
        Object.prototype.hasOwnProperty.call(d, t) && d[t] && l.push(d[t][0]),
        (d[t] = 0);
    for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (_[n] = r[n]);
    for (f && f(e); l.length; ) l.shift()();
    return u.push.apply(u, i || []), c();
  }
  function c() {
    for (var e, n = 0; n < u.length; n++) {
      for (var t = u[n], o = !0, r = 1; r < t.length; r++) {
        var i = t[r];
        0 !== d[i] && (o = !1);
      }
      o && (u.splice(n--, 1), (e = a((a.s = t[0]))));
    }
    return e;
  }
  var t = {},
    d = { 19: 0 },
    u = [];
  function a(e) {
    if (t[e]) return t[e].exports;
    var n = (t[e] = { i: e, l: !1, exports: {} });
    return _[e].call(n.exports, n, n.exports, a), (n.l = !0), n.exports;
  }
  (a.m = _),
    (a.c = t),
    (a.d = function (e, n, t) {
      a.o(e, n) || Object.defineProperty(e, n, { enumerable: !0, get: t });
    }),
    (a.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (a.t = function (n, e) {
      if ((1 & e && (n = a(n)), 8 & e)) return n;
      if (4 & e && "object" == typeof n && n && n.__esModule) return n;
      var t = Object.create(null);
      if (
        (a.r(t),
        Object.defineProperty(t, "default", { enumerable: !0, value: n }),
        2 & e && "string" != typeof n)
      )
        for (var o in n)
          a.d(
            t,
            o,
            function (e) {
              return n[e];
            }.bind(null, o)
          );
      return t;
    }),
    (a.n = function (e) {
      var n =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return a.d(n, "a", n), n;
    }),
    (a.o = function (e, n) {
      return Object.prototype.hasOwnProperty.call(e, n);
    }),
    (a.p = "");
  var n = (window.webpackJsonp = window.webpackJsonp || []),
    o = n.push.bind(n);
  (n.push = e), (n = n.slice());
  for (var r = 0; r < n.length; r++) e(n[r]);
  var f = o;
  u.push([896, 0]), c();
})({
  746: function (e, n, t) {
    var o = t(747);
    "string" == typeof o && (o = [[e.i, o, ""]]);
    var r = { hmr: !0, transform: void 0, insertInto: void 0 };
    t(12)(o, r);
    o.locals && (e.exports = o.locals);
  },
  747: function (e, n, t) {
    (n = e.exports = t(11)(!1)).push([
      e.i,
      ".index__modal__15Y5Dvnm {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  background-color: #fff;\n  padding: 40px 0 0 0;\n  text-align: center;\n}\n.index__modal__15Y5Dvnm .index__title__Ih5GVLW4 {\n  font-weight: 400;\n  font-size: 24px;\n  line-height: 32px;\n  /* identical to box height */\n  color: #2c3144;\n}\n.index__modal__15Y5Dvnm .index__content__S1K8JSbg {\n  margin-top: 14px;\n  font-size: 14px;\n  line-height: 22px;\n  /* or 157% */\n  text-align: center;\n  color: #9598a1;\n}\n.index__modal__15Y5Dvnm .index__footer__-27zfU_z {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 48px;\n  line-height: 48px;\n  text-align: center;\n  border-top: 1px solid #e9eaec;\n}\n.index__modal__15Y5Dvnm .index__footer__-27zfU_z .index__confirm__1m1bix3Z {\n  font-size: 16px;\n  color: #3da4ff;\n  cursor: pointer;\n}\n",
      "",
    ]),
      (n.locals = {
        modal: "index__modal__15Y5Dvnm",
        title: "index__title__Ih5GVLW4",
        content: "index__content__S1K8JSbg",
        footer: "index__footer__-27zfU_z",
        confirm: "index__confirm__1m1bix3Z",
      });
  },
  896: function (e, n, t) {
    "use strict";
    t.r(n);
    var _ = t(0),
      c = t.n(_),
      o = t(18),
      r = t.n(o),
      i = t(17),
      d = t.n(i);
    t(746);
    function u(e) {
      var n = e.title,
        t = e.content,
        o = e.handleClose;
      return c.a.createElement(
        "div",
        {
          className: "index__modal__15Y5Dvnm",
          style: { WebkitAppRegion: "drag" },
        },
        c.a.createElement("div", { className: "index__title__Ih5GVLW4" }, n),
        c.a.createElement("div", {
          className: "index__content__S1K8JSbg",
          dangerouslySetInnerHTML: { __html: t },
        }),
        c.a.createElement(
          "div",
          {
            className: "index__footer__-27zfU_z",
            style: { WebkitAppRegion: "no-drag" },
          },
          c.a.createElement(
            "div",
            { className: "index__confirm__1m1bix3Z", onClick: o },
            c.a.createElement("span", null, "知道了")
          )
        )
      );
    }
    var f = t(7),
      a = function () {
        var e = Object(_.useState)("提示"),
          n = d()(e, 2),
          t = n[0],
          o = n[1],
          r = Object(_.useState)(""),
          i = d()(r, 2),
          a = i[0],
          l = i[1];
        return (
          Object(_.useEffect)(function () {
            var e, n, t;
            o(
              null !==
                (n =
                  null === (e = window.urlParams) || void 0 === e
                    ? void 0
                    : e.title) && void 0 !== n
                ? n
                : "提示"
            ),
              l(
                decodeURIComponent(
                  null === (t = window.urlParams) || void 0 === t
                    ? void 0
                    : t.content
                )
              );
          }, []),
          c.a.createElement(u, {
            content: a,
            handleClose: function () {
              f.a.send("windowControl", {
                typeName: "close",
                windowName: window.windowName,
              });
            },
            title: t,
          })
        );
      },
      l = (a = Object(_.memo)(a)),
      s = t(21);
    t(30);
    window.DWMOpenState ? t(360) : t(361);
    var p;
    (p = l),
      r.a.render(
        c.a.createElement(
          s.a,
          { needReloadForPortRenew: !0 },
          c.a.createElement(p, null)
        ),
        document.getElementById("root")
      );
  },
});
