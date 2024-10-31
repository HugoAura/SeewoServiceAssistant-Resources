!(function (_) {
  function n(n) {
    for (
      var e, t, o = n[0], i = n[1], r = n[2], a = 0, c = [];
      a < o.length;
      a++
    )
      (t = o[a]),
        Object.prototype.hasOwnProperty.call(l, t) && l[t] && c.push(l[t][0]),
        (l[t] = 0);
    for (e in i) Object.prototype.hasOwnProperty.call(i, e) && (_[e] = i[e]);
    for (x && x(n); c.length; ) c.shift()();
    return d.push.apply(d, r || []), s();
  }
  function s() {
    for (var n, e = 0; e < d.length; e++) {
      for (var t = d[e], o = !0, i = 1; i < t.length; i++) {
        var r = t[i];
        0 !== l[r] && (o = !1);
      }
      o && (d.splice(e--, 1), (n = a((a.s = t[0]))));
    }
    return n;
  }
  var t = {},
    l = { 27: 0 },
    d = [];
  function a(n) {
    if (t[n]) return t[n].exports;
    var e = (t[n] = { i: n, l: !1, exports: {} });
    return _[n].call(e.exports, e, e.exports, a), (e.l = !0), e.exports;
  }
  (a.m = _),
    (a.c = t),
    (a.d = function (n, e, t) {
      a.o(n, e) || Object.defineProperty(n, e, { enumerable: !0, get: t });
    }),
    (a.r = function (n) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(n, "__esModule", { value: !0 });
    }),
    (a.t = function (e, n) {
      if ((1 & n && (e = a(e)), 8 & n)) return e;
      if (4 & n && "object" == typeof e && e && e.__esModule) return e;
      var t = Object.create(null);
      if (
        (a.r(t),
        Object.defineProperty(t, "default", { enumerable: !0, value: e }),
        2 & n && "string" != typeof e)
      )
        for (var o in e)
          a.d(
            t,
            o,
            function (n) {
              return e[n];
            }.bind(null, o)
          );
      return t;
    }),
    (a.n = function (n) {
      var e =
        n && n.__esModule
          ? function () {
              return n.default;
            }
          : function () {
              return n;
            };
      return a.d(e, "a", e), e;
    }),
    (a.o = function (n, e) {
      return Object.prototype.hasOwnProperty.call(n, e);
    }),
    (a.p = "");
  var e = (window.webpackJsonp = window.webpackJsonp || []),
    o = e.push.bind(e);
  (e.push = n), (e = e.slice());
  for (var i = 0; i < e.length; i++) n(e[i]);
  var x = o;
  d.push([912, 0]), s();
})({
  798: function (n, e, t) {
    var o = t(799);
    "string" == typeof o && (o = [[n.i, o, ""]]);
    var i = { hmr: !0, transform: void 0, insertInto: void 0 };
    t(12)(o, i);
    o.locals && (n.exports = o.locals);
  },
  799: function (n, e, t) {
    (e = n.exports = t(11)(!1)).push([
      n.i,
      ".index__box__aPxzhBsu {\n  width: 100%;\n  height: 100%;\n  border-radius: 4px;\n  background-color: rgba(0, 0, 0, 0.6);\n  overflow: hidden;\n}\n.index__box-not-dwn__2pKvOyOD {\n  width: 100%;\n  height: 100%;\n  background-color: #2c3144;\n  overflow: hidden;\n}\n.index__container__1XS96dY8 {\n  position: relative;\n  background: #ffffff;\n  -webkit-box-shadow: 0 4px 16px 0 rgba(44, 49, 68, 0.2);\n          box-shadow: 0 4px 16px 0 rgba(44, 49, 68, 0.2);\n  border-radius: 4px;\n  padding: 80px;\n  top: 50%;\n  margin: 0 auto;\n  -webkit-transition: -webkit-transform 0.15s;\n  transition: -webkit-transform 0.15s;\n  -o-transition: transform 0.15s;\n  transition: transform 0.15s;\n  transition: transform 0.15s, -webkit-transform 0.15s;\n}\n.index__container-short__3k7Ea5p- {\n  width: 55%;\n}\n.index__container-long__1GVD1Dc8 {\n  width: 73%;\n}\n.index__container-show__1-TcPEGK {\n  opacity: 1;\n  -webkit-transform: scale(1) translateY(-50%);\n      -ms-transform: scale(1) translateY(-50%);\n          transform: scale(1) translateY(-50%);\n}\n.index__container-hide__QiKvjjdC {\n  opacity: 0;\n  -webkit-transform: scale(0.75) translateY(-50%);\n      -ms-transform: scale(0.75) translateY(-50%);\n          transform: scale(0.75) translateY(-50%);\n}\n.index__header__R2LkMh9U {\n  font-size: 44px;\n  line-height: 66px;\n  text-align: center;\n}\n.index__content-box__2nHgPN6N {\n  margin-top: 24px;\n  color: #333333;\n}\n.index__content-box__2nHgPN6N div {\n  width: 100%;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.index__content-box__2nHgPN6N div span {\n  word-wrap: break-word;\n  word-break: break-all;\n}\n.index__close__zVRegJBa {\n  position: absolute;\n  right: 16px;\n  top: 16px;\n  width: 32px;\n  height: 32px;\n  color: #333333;\n  list-style: 32px;\n  text-align: center;\n}\n.index__close__zVRegJBa i {\n  font-size: 32px;\n}\n",
      "",
    ]),
      (e.locals = {
        box: "index__box__aPxzhBsu",
        "box-not-dwn": "index__box-not-dwn__2pKvOyOD",
        container: "index__container__1XS96dY8",
        "container-short": "index__container-short__3k7Ea5p-",
        "container-long": "index__container-long__1GVD1Dc8",
        "container-show": "index__container-show__1-TcPEGK",
        "container-hide": "index__container-hide__QiKvjjdC",
        header: "index__header__R2LkMh9U",
        "content-box": "index__content-box__2nHgPN6N",
        close: "index__close__zVRegJBa",
      });
  },
  912: function (n, e, t) {
    "use strict";
    t.r(e);
    var v = t(0),
      y = t.n(v),
      o = t(18),
      i = t.n(o),
      r = t(17),
      k = t.n(r),
      a = t(8),
      O = t.n(a),
      j = (t(798), t(20)),
      P = t(7),
      E = {
        "./index.less": {
          box: "index__box__aPxzhBsu",
          "box-not-dwn": "index__box-not-dwn__2pKvOyOD",
          container: "index__container__1XS96dY8",
          "container-short": "index__container-short__3k7Ea5p-",
          "container-long": "index__container-long__1GVD1Dc8",
          "container-show": "index__container-show__1-TcPEGK",
          "container-hide": "index__container-hide__QiKvjjdC",
          header: "index__header__R2LkMh9U",
          "content-box": "index__content-box__2nHgPN6N",
          close: "index__close__zVRegJBa",
        },
      };
    function c() {
      function n(n) {
        if (n) {
          var e =
            n.content.length < 30
              ? { fontSize: "60px", lineHeight: "90px" }
              : { fontSize: "50px", lineHeight: "75px" };
          _(n.title),
            i(n.content),
            x({
              fontWeight: n.fontWeight,
              fontSize: e.fontSize,
              lineHeight: e.lineHeight,
              color: n.color,
            }),
            h({ color: n.color, fontWeight: n.fontWeight }),
            m(!0);
        }
      }
      var e = Object(v.useState)(""),
        t = k()(e, 2),
        o = t[0],
        i = t[1],
        r = Object(v.useState)(""),
        a = k()(r, 2),
        c = a[0],
        _ = a[1],
        s = Object(v.useState)({}),
        l = k()(s, 2),
        d = l[0],
        x = l[1],
        p = Object(v.useState)({}),
        f = k()(p, 2),
        u = f[0],
        h = f[1],
        b = Object(v.useState)(!1),
        g = k()(b, 2),
        w = g[0],
        m = g[1];
      return (
        Object(v.useEffect)(function () {
          return (
            N.getAndRegister("popupsNotificationMessage", n),
            function () {
              N.removeOne("popupsNotificationMessage", n);
            }
          );
        }, []),
        y.a.createElement(
          "div",
          { className: O()(window.DWMOpenState ? "box" : "box-not-dwn ", E) },
          y.a.createElement(
            "div",
            {
              className: O()(
                "container "
                  .concat(w ? "container-show" : "container-hide", " ")
                  .concat(30 < o.length ? "container-long" : "container-short"),
                E
              ),
            },
            y.a.createElement(
              "div",
              { className: "index__header__R2LkMh9U", style: u },
              c || "消息通知"
            ),
            y.a.createElement(
              "div",
              { className: "index__content-box__2nHgPN6N" },
              y.a.createElement(
                "div",
                { style: d },
                y.a.createElement("span", null, o)
              )
            ),
            y.a.createElement(
              "div",
              { className: "index__close__zVRegJBa" },
              y.a.createElement(j.a, {
                onClick: function () {
                  m(!1),
                    setTimeout(function () {
                      P.a.send("PostClosePopupNotificationWindow");
                    }, 150);
                },
              }),
              y.a.createElement("i", { className: "iconfont" }, "")
            )
          )
        )
      );
    }
    var N = window._ACCEPT_DATA,
      _ = t(24),
      s = t(29),
      l = t(22);
    t(30);
    var d,
      x = Object(s.a)("screenLock");
    (d = c),
      i.a.render(
        y.a.createElement(
          _.a,
          { store: x },
          y.a.createElement(l.a, null, y.a.createElement(d, null))
        ),
        document.getElementById("root")
      );
  },
});
