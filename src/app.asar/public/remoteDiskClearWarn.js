!(function (l) {
  function e(e) {
    for (
      var n, t, i = e[0], r = e[1], o = e[2], a = 0, c = [];
      a < i.length;
      a++
    )
      (t = i[a]),
        Object.prototype.hasOwnProperty.call(u, t) && u[t] && c.push(u[t][0]),
        (u[t] = 0);
    for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (l[n] = r[n]);
    for (s && s(e); c.length; ) c.shift()();
    return d.push.apply(d, o || []), _();
  }
  function _() {
    for (var e, n = 0; n < d.length; n++) {
      for (var t = d[n], i = !0, r = 1; r < t.length; r++) {
        var o = t[r];
        0 !== u[o] && (i = !1);
      }
      i && (d.splice(n--, 1), (e = a((a.s = t[0]))));
    }
    return e;
  }
  var t = {},
    u = { 32: 0 },
    d = [];
  function a(e) {
    if (t[e]) return t[e].exports;
    var n = (t[e] = { i: e, l: !1, exports: {} });
    return l[e].call(n.exports, n, n.exports, a), (n.l = !0), n.exports;
  }
  (a.m = l),
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
        for (var i in n)
          a.d(
            t,
            i,
            function (e) {
              return n[e];
            }.bind(null, i)
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
    i = n.push.bind(n);
  (n.push = e), (n = n.slice());
  for (var r = 0; r < n.length; r++) e(n[r]);
  var s = i;
  d.push([916, 0]), _();
})({
  820: function (e, n, t) {
    var i = t(821);
    "string" == typeof i && (i = [[e.i, i, ""]]);
    var r = { hmr: !0, transform: void 0, insertInto: void 0 };
    t(12)(i, r);
    i.locals && (e.exports = i.locals);
  },
  821: function (e, n, t) {
    var i = t(27);
    (n = e.exports = t(11)(!1)).push([
      e.i,
      ".index__container__175qXE9u {\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  background-color: rgba(0, 0, 0, 0.75);\n  color: #ffffff;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n.index__container__175qXE9u .index__loading__3e-RHnVr {\n  width: 270px;\n  height: 270px;\n  background-image: url(" +
        i(t(822)) +
        ");\n  background-size: contain;\n  background-repeat: no-repeat;\n  margin: 0 auto;\n}\n.index__container__175qXE9u .index__title__2mRyFkjk {\n  margin-top: -27px;\n  font-weight: 400;\n  font-size: 28px;\n  line-height: 42px;\n}\n.index__container__175qXE9u .index__error-title__JlF3BvsG {\n  font-size: 28px;\n  line-height: 42px;\n  text-align: center;\n}\n.index__container__175qXE9u .index__error-reason__7dNg8-yg {\n  font-weight: 400;\n  font-size: 20px;\n  line-height: 30px;\n  margin-top: 32px;\n}\n.index__container__175qXE9u .index__button__1vl_SBay {\n  width: 200px;\n  height: 72px;\n  margin: 80px auto 0;\n  font-weight: 400;\n  font-size: 24px;\n  line-height: 72px;\n  text-align: center;\n  background: #1d70f2;\n  border-radius: 60px;\n  cursor: pointer;\n}\n.index__container__175qXE9u .index__done-icon__2K6Cwp4X {\n  width: 68px;\n  height: 68px;\n  background-image: url(" +
        i(t(823)) +
        ");\n  background-size: contain;\n  background-repeat: no-repeat;\n  margin: 0 auto;\n}\n.index__container__175qXE9u .index__done-title__3yoA9Mzb {\n  margin-top: 24px;\n  font-size: 28px;\n  line-height: 42px;\n}\n",
      "",
    ]),
      (n.locals = {
        container: "index__container__175qXE9u",
        loading: "index__loading__3e-RHnVr",
        title: "index__title__2mRyFkjk",
        "error-title": "index__error-title__JlF3BvsG",
        "error-reason": "index__error-reason__7dNg8-yg",
        button: "index__button__1vl_SBay",
        "done-icon": "index__done-icon__2K6Cwp4X",
        "done-title": "index__done-title__3yoA9Mzb",
      });
  },
  822: function (e, n, t) {
    e.exports = t.p + "730d9e0f7cf1b34fb6269b0fa0c91bec.gif";
  },
  823: function (e, n) {
    e.exports =
      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjgiIGhlaWdodD0iNjgiIHZpZXdCb3g9IjAgMCA2OCA2OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNC4yNSAzNEM0LjI1IDE3LjU2NzggMTcuNTY3OCA0LjI1IDM0IDQuMjVDNTAuNDMyMiA0LjI1IDYzLjc1IDE3LjU2NzggNjMuNzUgMzRDNjMuNzUgNTAuNDMyMiA1MC40MzIyIDYzLjc1IDM0IDYzLjc1QzE3LjU2NzggNjMuNzUgNC4yNSA1MC40MzIyIDQuMjUgMzRaTTQ3Ljc2NyAyMy45OTc0QzQ4LjU5NjggMjQuODI3MyA0OC41OTY4IDI2LjE3MjcgNDcuNzY3IDI3LjAwMjZMMzEuNzM5MiA0My4wMzAzQzMxLjY1NjIgNDMuMTEzNCAzMS41Njc5IDQzLjE4ODIgMzEuNDc1NiA0My4yNTQ2QzMxLjQwOTUgNDMuMzQ2MyAzMS4zMzUxIDQzLjQzMzkgMzEuMjUyNiA0My41MTY1QzMwLjQyMjcgNDQuMzQ2NCAyOS4wNzczIDQ0LjM0NjQgMjguMjQ3NCA0My41MTY1TDE5Ljc0NzQgMzUuMDE2NUMxOC45MTc1IDM0LjE4NjYgMTguOTE3NSAzMi44NDExIDE5Ljc0NzQgMzIuMDExM0MyMC41NzczIDMxLjE4MTQgMjEuOTIyNyAzMS4xODE0IDIyLjc1MjYgMzIuMDExM0wyOS43NTAyIDM5LjAwODlMNDQuNzYxOCAyMy45OTc0QzQ1LjU5MTYgMjMuMTY3NSA0Ni45MzcxIDIzLjE2NzUgNDcuNzY3IDIzLjk5NzRaIiBmaWxsPSIjMDBDQzdFIi8+DQo8L3N2Zz4NCg==";
  },
  916: function (e, n, t) {
    "use strict";
    t.r(n);
    var M = t(0),
      p = t.n(M),
      i = t(18),
      r = t.n(i),
      o = t(15),
      x = t.n(o),
      a = t(17),
      f = t.n(a),
      j = t(7);
    t(820);
    var N = 1,
      z = 2,
      m = 3,
      c = function () {
        var e = Object(M.useState)(N),
          n = f()(e, 2),
          t = n[0],
          i = n[1],
          r = Object(M.useState)([]),
          o = f()(r, 2),
          a = o[0],
          c = o[1],
          l = Object(M.useState)([]),
          _ = f()(l, 2),
          u = _[0],
          d = _[1];
        function s(e) {
          e &&
            (c(
              x()(
                e.drivePathList.map(function (e) {
                  return e.split(":").shift();
                })
              )
            ),
            i(
              "finish" === e.status
                ? m
                : e.errorList && e.errorList.length
                ? z
                : N
            ),
            d(e.errorList),
            "finish" === e.status &&
              setTimeout(function () {
                g();
              }, 2e3));
        }
        function g() {
          j.a.send("closeDiskFormatProgressWindow");
        }
        return (
          Object(M.useEffect)(function () {
            return (
              window._ACCEPT_DATA.getAndRegister("diskFormatProgress", s),
              function () {
                window._ACCEPT_DATA.removeOne("diskFormatProgress", s);
              }
            );
          }, []),
          p.a.createElement(
            "div",
            { className: "index__container__175qXE9u" },
            t === N &&
              p.a.createElement(
                "div",
                null,
                p.a.createElement("div", {
                  className: "index__loading__3e-RHnVr",
                }),
                p.a.createElement(
                  "p",
                  { className: "index__title__2mRyFkjk" },
                  a.join("\\").toUpperCase(),
                  "磁盘格式化中，请勿关机、重启设备"
                )
              ),
            t === z &&
              p.a.createElement(
                "div",
                null,
                p.a.createElement(
                  "p",
                  { className: "index__error-title__JlF3BvsG" },
                  "格式化失败，原因如下："
                ),
                p.a.createElement(
                  "div",
                  { className: "index__error-reason__7dNg8-yg" },
                  u.map(function (e, n) {
                    return p.a.createElement("p", { key: n }, n + 1, "、", e);
                  })
                ),
                p.a.createElement(
                  "div",
                  { className: "index__button__1vl_SBay", onClick: g },
                  p.a.createElement("span", null, "我知道了")
                )
              ),
            t === m &&
              p.a.createElement(
                "div",
                null,
                p.a.createElement("div", {
                  className: "index__done-icon__2K6Cwp4X",
                }),
                p.a.createElement(
                  "p",
                  { className: "index__done-title__3yoA9Mzb" },
                  "格式化已完成"
                )
              )
          )
        );
      },
      l = (c = Object(M.memo)(c)),
      _ = t(22);
    t(30);
    var u;
    (u = l),
      r.a.render(
        p.a.createElement(
          _.a,
          { needReloadForPortRenew: !0 },
          p.a.createElement(u, null)
        ),
        document.getElementById("root")
      );
  },
});
