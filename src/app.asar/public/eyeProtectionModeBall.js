!(function (u) {
  function e(e) {
    for (
      var n, t, o = e[0], i = e[1], r = e[2], c = 0, a = [];
      c < o.length;
      c++
    )
      (t = o[c]),
        Object.prototype.hasOwnProperty.call(s, t) && s[t] && a.push(s[t][0]),
        (s[t] = 0);
    for (n in i) Object.prototype.hasOwnProperty.call(i, n) && (u[n] = i[n]);
    for (_ && _(e); a.length; ) a.shift()();
    return d.push.apply(d, r || []), l();
  }
  function l() {
    for (var e, n = 0; n < d.length; n++) {
      for (var t = d[n], o = !0, i = 1; i < t.length; i++) {
        var r = t[i];
        0 !== s[r] && (o = !1);
      }
      o && (d.splice(n--, 1), (e = c((c.s = t[0]))));
    }
    return e;
  }
  var t = {},
    s = { 11: 0 },
    d = [];
  function c(e) {
    if (t[e]) return t[e].exports;
    var n = (t[e] = { i: e, l: !1, exports: {} });
    return u[e].call(n.exports, n, n.exports, c), (n.l = !0), n.exports;
  }
  (c.m = u),
    (c.c = t),
    (c.d = function (e, n, t) {
      c.o(e, n) || Object.defineProperty(e, n, { enumerable: !0, get: t });
    }),
    (c.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (c.t = function (n, e) {
      if ((1 & e && (n = c(n)), 8 & e)) return n;
      if (4 & e && "object" == typeof n && n && n.__esModule) return n;
      var t = Object.create(null);
      if (
        (c.r(t),
        Object.defineProperty(t, "default", { enumerable: !0, value: n }),
        2 & e && "string" != typeof n)
      )
        for (var o in n)
          c.d(
            t,
            o,
            function (e) {
              return n[e];
            }.bind(null, o)
          );
      return t;
    }),
    (c.n = function (e) {
      var n =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return c.d(n, "a", n), n;
    }),
    (c.o = function (e, n) {
      return Object.prototype.hasOwnProperty.call(e, n);
    }),
    (c.p = "");
  var n = (window.webpackJsonp = window.webpackJsonp || []),
    o = n.push.bind(n);
  (n.push = e), (n = n.slice());
  for (var i = 0; i < n.length; i++) e(n[i]);
  var _ = o;
  d.push([907, 0]), l();
})({
  718: function (e, n, t) {
    var o = t(719);
    "string" == typeof o && (o = [[e.i, o, ""]]);
    var i = { hmr: !0, transform: void 0, insertInto: void 0 };
    t(12)(o, i);
    o.locals && (e.exports = o.locals);
  },
  719: function (e, n, t) {
    (n = e.exports = t(11)(!1)).push([
      e.i,
      ".index__box__2tLmQ8k5 {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  border-radius: 999px;\n  background: -webkit-gradient(linear, left top, left bottom, from(#62b6ff), to(#e8f1ff));\n  background: -o-linear-gradient(top, #62b6ff 0%, #e8f1ff 100%);\n  background: linear-gradient(180deg, #62b6ff 0%, #e8f1ff 100%);\n  overflow: hidden;\n  opacity: 1;\n  -webkit-transition: all 0.3s ease-in-out;\n  -o-transition: all 0.3s ease-in-out;\n  transition: all 0.3s ease-in-out;\n}\n.index__box__2tLmQ8k5.index__box-not-DWM__3bP3pnMr {\n  border-radius: 0;\n}\n.index__box__2tLmQ8k5.index__idle__1vjNfw4h {\n  opacity: 1;\n}\n.index__box__2tLmQ8k5 .index__container__1T6pVoac {\n  width: 100%;\n  height: 100%;\n  padding-top: 16px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.index__box__2tLmQ8k5 .index__title__3f6NgSY5 {\n  color: #000;\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 18px;\n}\n.index__box__2tLmQ8k5 .index__time__31AsumZF {\n  margin-top: 4px;\n  color: #000;\n  font-size: 24px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 24px;\n}\n.index__button__cGz9OgdO {\n  width: 100%;\n  height: 26px;\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  background: #1d70f2;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.index__button__cGz9OgdO span {\n  color: #fff;\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 18px;\n}\n",
      "",
    ]),
      (n.locals = {
        box: "index__box__2tLmQ8k5",
        "box-not-DWM": "index__box-not-DWM__3bP3pnMr",
        idle: "index__idle__1vjNfw4h",
        container: "index__container__1T6pVoac",
        title: "index__title__3f6NgSY5",
        time: "index__time__31AsumZF",
        button: "index__button__cGz9OgdO",
      });
  },
  907: function (e, n, t) {
    "use strict";
    t.r(n);
    var Q = t(0),
      Y = t.n(Q),
      o = t(18),
      i = t.n(o),
      r = t(17),
      W = t.n(r),
      c = t(8),
      G = t.n(c),
      F = (t(718), t(19)),
      V = t(7),
      X = {
        "./index.less": {
          box: "index__box__2tLmQ8k5",
          "box-not-DWM": "index__box-not-DWM__3bP3pnMr",
          idle: "index__idle__1vjNfw4h",
          container: "index__container__1T6pVoac",
          title: "index__title__3f6NgSY5",
          time: "index__time__31AsumZF",
          button: "index__button__cGz9OgdO",
        },
      };
    var a = t(21);
    t(30);
    var u;
    (u = function () {
      var e = Object(Q.useState)(null),
        n = W()(e, 2),
        o = n[0],
        i = n[1],
        t = Object(Q.useState)(!0),
        r = W()(t, 2),
        c = r[0],
        a = r[1],
        u = Object(Q.useRef)(!0),
        l = Object(Q.useState)(0),
        s = W()(l, 2),
        d = s[0],
        _ = s[1],
        f = Object(Q.useRef)(null),
        b = Object(Q.useRef)(!1),
        p = Object(Q.useRef)(!1),
        m = Object(Q.useRef)(0),
        x = Object(Q.useRef)(0),
        g = Object(Q.useRef)(null),
        h = Object(Q.useState)(!1),
        v = W()(h, 2),
        y = v[0],
        w = v[1],
        O = o || {},
        M = O.id,
        j = O.usageTimeAvailableMs,
        k = void 0 === j ? 0 : j,
        T = Object(Q.useMemo)(
          function () {
            return (null == o ? void 0 : o.usageTimeAvailableMs)
              ? (null == o ? void 0 : o.usageTimeAvailableMs) - d
              : 0;
          },
          [d, k]
        ),
        E = Object(Q.useMemo)(
          function () {
            return !T || T <= 0
              ? { minute: 0, second: 0 }
              : {
                  minute: Math.floor(T / 6e4),
                  second: Math.floor((T % 6e4) / 1e3),
                };
          },
          [T]
        ),
        P = E.minute,
        S = E.second;
      function N(t) {
        f.current = setTimeout(function () {
          f.current && clearTimeout(f.current),
            _(function (e) {
              if ((console.log("usedTime", e / 1e3, t / 1e3), u.current)) {
                var n = e + 1e3;
                return (
                  t <= n
                    ? (V.a.send("postEyeProtectionModeActionByRender", {
                        action: "openTimeOutPopups",
                        id: M,
                        data: o,
                      }),
                      V.a.send("windowControl", {
                        typeName: "close",
                        windowName: "eyeProtectionModeBall",
                      }),
                      console.log(
                        "倒计时已用时间大于等于可用时间，应该发送完成指令"
                      ),
                      a(!1),
                      (u.current = !1))
                    : (console.log("倒计时已用时间小于可用时间，继续倒计时"),
                      N(t)),
                  n
                );
              }
              return console.log("runStatusRef为false"), e;
            });
        }, 1e3);
      }
      function A(n) {
        return function (e) {
          (p.current = !1),
            (b.current = !0),
            "touch" === n
              ? ((m.current = e.touches[0].pageX),
                (x.current = e.touches[0].pageY))
              : ((m.current = e.clientX), (x.current = e.clientY));
        };
      }
      function R() {
        (b.current = !1),
          p.current &&
            ((p.current = !1),
            V.a.send("autoSetPosition", "eyeProtectionModeBall"));
      }
      function L(o) {
        return function (e) {
          var n, t;
          (t =
            "touch" === o
              ? ((n = e.touches[0].pageX - m.current),
                e.touches[0].pageY - x.current)
              : ((n = e.clientX - m.current), e.clientY - x.current)),
            b.current &&
              (V.a.send("windowMove", {
                x: n,
                y: t,
                windowName: window.windowName,
                width: 100,
                height: 100,
              }),
              (p.current = !0));
        };
      }
      function D() {
        clearTimeout(g.current),
          (g.current = setTimeout(function () {
            w(!0);
          }, 1e4));
      }
      function z() {
        D();
      }
      function B() {
        w(!1), clearTimeout(g.current);
      }
      return (
        Object(Q.useEffect)(function () {
          V.a.send("postEyeProtectionModeActionByRender", { action: "start" }),
            V.a.on("postEyeProtectionModeActionByMain", function (e) {
              var n = e.action,
                t = e.data;
              "start" === n &&
                (console.log("start", t), i(t), a(!0), (u.current = !0)),
                "pause" === n &&
                  (console.log("pause", t), a(!1), (u.current = !1)),
                "resumed" === n && (i(t), a(!0), _(0), (u.current = !0));
            }),
            document.addEventListener("mousemove", function (e) {
              L()(e);
            }),
            document.addEventListener("touchmove", function (e) {
              L("touch")(e);
            }),
            D();
        }, []),
        Object(Q.useEffect)(
          function () {
            0 < (null == o ? void 0 : o.usageTimeAvailableMs) &&
              (f.current && clearTimeout(f.current),
              N(o.usageTimeAvailableMs),
              V.a.send("postEyeProtectionModeActionByRender", {
                action: "update",
                data: o,
              }));
          },
          [o]
        ),
        Y.a.createElement(
          "div",
          {
            onMouseDown: B,
            onTouchStart: B,
            onTouchEnd: z,
            onMouseUp: z,
            className: G()(
              "box "
                .concat(window.DWMOpenState ? "" : "box-not-DWM", " ")
                .concat(y ? "idle" : ""),
              X
            ),
          },
          Y.a.createElement(
            "div",
            {
              className: "index__container__1T6pVoac",
              onMouseDown: A(),
              draggable: "true",
              onTouchStart: A("touch"),
              onTouchEnd: R,
              onMouseUp: R,
            },
            Y.a.createElement(
              "div",
              { className: "index__title__3f6NgSY5" },
              "护眼倒计时"
            ),
            Y.a.createElement(
              "div",
              { className: "index__time__31AsumZF" },
              9 < P ? P : "0".concat(P),
              ":",
              9 < S ? S : "0".concat(S)
            )
          ),
          Y.a.createElement(
            "div",
            { className: "index__button__cGz9OgdO" },
            Y.a.createElement(F.a, {
              onClick: function () {
                V.a.send("postEyeProtectionModeActionByRender", {
                  action: c ? "pause" : "resumed",
                  id: M,
                });
              },
              activeStyle: "scale",
            }),
            Y.a.createElement("span", null, c ? "暂停" : "恢复")
          )
        )
      );
    }),
      i.a.render(
        Y.a.createElement(a.a, null, Y.a.createElement(u, null)),
        document.getElementById("root")
      );
  },
});
