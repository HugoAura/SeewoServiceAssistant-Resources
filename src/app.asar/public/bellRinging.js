!(function (s) {
  function n(n) {
    for (
      var t, e, i = n[0], o = n[1], r = n[2], a = 0, l = [];
      a < i.length;
      a++
    )
      (e = i[a]),
        Object.prototype.hasOwnProperty.call(g, e) && g[e] && l.push(g[e][0]),
        (g[e] = 0);
    for (t in o) Object.prototype.hasOwnProperty.call(o, t) && (s[t] = o[t]);
    for (f && f(n); l.length; ) l.shift()();
    return u.push.apply(u, r || []), c();
  }
  function c() {
    for (var n, t = 0; t < u.length; t++) {
      for (var e = u[t], i = !0, o = 1; o < e.length; o++) {
        var r = e[o];
        0 !== g[r] && (i = !1);
      }
      i && (u.splice(t--, 1), (n = a((a.s = e[0]))));
    }
    return n;
  }
  var e = {},
    g = { 2: 0 },
    u = [];
  function a(n) {
    if (e[n]) return e[n].exports;
    var t = (e[n] = { i: n, l: !1, exports: {} });
    return s[n].call(t.exports, t, t.exports, a), (t.l = !0), t.exports;
  }
  (a.m = s),
    (a.c = e),
    (a.d = function (n, t, e) {
      a.o(n, t) || Object.defineProperty(n, t, { enumerable: !0, get: e });
    }),
    (a.r = function (n) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(n, "__esModule", { value: !0 });
    }),
    (a.t = function (t, n) {
      if ((1 & n && (t = a(t)), 8 & n)) return t;
      if (4 & n && "object" == typeof t && t && t.__esModule) return t;
      var e = Object.create(null);
      if (
        (a.r(e),
        Object.defineProperty(e, "default", { enumerable: !0, value: t }),
        2 & n && "string" != typeof t)
      )
        for (var i in t)
          a.d(
            e,
            i,
            function (n) {
              return t[n];
            }.bind(null, i)
          );
      return e;
    }),
    (a.n = function (n) {
      var t =
        n && n.__esModule
          ? function () {
              return n.default;
            }
          : function () {
              return n;
            };
      return a.d(t, "a", t), t;
    }),
    (a.o = function (n, t) {
      return Object.prototype.hasOwnProperty.call(n, t);
    }),
    (a.p = "");
  var t = (window.webpackJsonp = window.webpackJsonp || []),
    i = t.push.bind(t);
  (t.push = n), (t = t.slice());
  for (var o = 0; o < t.length; o++) n(t[o]);
  var f = i;
  u.push([892, 0]), c();
})({
  669: function (n, t, e) {
    var i = e(670);
    "string" == typeof i && (i = [[n.i, i, ""]]);
    var o = { hmr: !0, transform: void 0, insertInto: void 0 };
    e(12)(i, o);
    i.locals && (n.exports = i.locals);
  },
  670: function (n, t, e) {
    var i = e(27);
    (t = n.exports = e(11)(!1)).push([
      n.i,
      ".bellRinging__content__3eu-4_qU {\n  width: 253px;\n  height: 64px;\n  background: rgba(9, 9, 9, 0.96);\n  border: 1px solid #000000;\n  -webkit-box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.4);\n          box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.4);\n  padding: 6px 12px;\n}\n.bellRinging__content__3eu-4_qU.bellRinging__radius__1-LkYyKH {\n  border-radius: 8px;\n}\n.bellRinging__content__3eu-4_qU .bellRinging__title__3AqO8Svk {\n  float: left;\n}\n.bellRinging__content__3eu-4_qU .bellRinging__title__3AqO8Svk .bellRinging__icon__3mEebmFv {\n  float: left;\n  width: 50px;\n  height: 52px;\n  background-image: url(" +
        i(e(671)) +
        ");\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n  -webkit-animation: bellRinging__alarm__2s3esm_y 0.5s infinite;\n          animation: bellRinging__alarm__2s3esm_y 0.5s infinite;\n}\n.bellRinging__content__3eu-4_qU .bellRinging__title__3AqO8Svk p {\n  float: left;\n  margin-left: 10px;\n  color: white;\n  font-size: 14px;\n  line-height: 52px;\n}\n.bellRinging__content__3eu-4_qU .bellRinging__button__NdmEMnw2 {\n  float: right;\n  margin: 16px 12px 0 0;\n  width: 50px;\n  text-align: right;\n  height: 20px;\n  border-left: #303030 1px solid;\n  font-size: 14px;\n  color: #303030;\n}\n.bellRinging__content__3eu-4_qU .bellRinging__button__NdmEMnw2.bellRinging__show__m2YIMbvE {\n  color: white;\n  cursor: pointer;\n}\n@-webkit-keyframes bellRinging__alarm__2s3esm_y {\n  0% {\n    -webkit-transform: rotate(10deg) scale(1);\n            transform: rotate(10deg) scale(1);\n  }\n  25% {\n    -webkit-transform: rotate(0deg) scale(1.05);\n            transform: rotate(0deg) scale(1.05);\n  }\n  50% {\n    -webkit-transform: rotate(-10deg) scale(1);\n            transform: rotate(-10deg) scale(1);\n  }\n  75% {\n    -webkit-transform: rotate(0deg) scale(1.05);\n            transform: rotate(0deg) scale(1.05);\n  }\n  100% {\n    -webkit-transform: rotate(10deg) scale(1);\n            transform: rotate(10deg) scale(1);\n  }\n}\n@keyframes bellRinging__alarm__2s3esm_y {\n  0% {\n    -webkit-transform: rotate(10deg) scale(1);\n            transform: rotate(10deg) scale(1);\n  }\n  25% {\n    -webkit-transform: rotate(0deg) scale(1.05);\n            transform: rotate(0deg) scale(1.05);\n  }\n  50% {\n    -webkit-transform: rotate(-10deg) scale(1);\n            transform: rotate(-10deg) scale(1);\n  }\n  75% {\n    -webkit-transform: rotate(0deg) scale(1.05);\n            transform: rotate(0deg) scale(1.05);\n  }\n  100% {\n    -webkit-transform: rotate(10deg) scale(1);\n            transform: rotate(10deg) scale(1);\n  }\n}\n",
      "",
    ]),
      (t.locals = {
        content: "bellRinging__content__3eu-4_qU",
        radius: "bellRinging__radius__1-LkYyKH",
        title: "bellRinging__title__3AqO8Svk",
        icon: "bellRinging__icon__3mEebmFv",
        alarm: "bellRinging__alarm__2s3esm_y",
        button: "bellRinging__button__NdmEMnw2",
        show: "bellRinging__show__m2YIMbvE",
      });
  },
  671: function (n, t) {
    n.exports =
      "data:image/png;base64,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";
  },
  892: function (n, t, e) {
    "use strict";
    e.r(t);
    var i = e(0),
      a = e.n(i),
      o = e(18),
      r = e.n(o),
      l = e(3),
      s = e.n(l),
      c = e(4),
      g = e.n(c),
      u = e(5),
      f = e.n(u),
      p = e(6),
      d = e.n(p),
      m = e(2),
      b = e.n(m),
      R = e(8),
      _ = e.n(R),
      h = (e(669), e(9)),
      k = e(61),
      w = e(20);
    var v,
      y = e(7),
      E = {
        "./bellRinging.less": {
          content: "bellRinging__content__3eu-4_qU",
          alarm: "bellRinging__alarm__2s3esm_y",
          radius: "bellRinging__radius__1-LkYyKH",
          title: "bellRinging__title__3AqO8Svk",
          icon: "bellRinging__icon__3mEebmFv",
          button: "bellRinging__button__NdmEMnw2",
          show: "bellRinging__show__m2YIMbvE",
        },
      };
    function x(i) {
      var o = (function () {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            ),
            !0
          );
        } catch (n) {
          return !1;
        }
      })();
      return function () {
        var n,
          t = b()(i);
        if (o) {
          var e = b()(this).constructor;
          n = Reflect.construct(t, arguments, e);
        } else n = t.apply(this, arguments);
        return d()(this, n);
      };
    }
    var S = window.DWMOpenState,
      P = 2,
      O = 2,
      C =
        Object(h.a)(
          {},
          {
            postStopBellRinging: function () {
              var o =
                  0 < arguments.length && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                e =
                  1 < arguments.length && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
              return function (i) {
                var n, t;
                return (
                  i(((n = o), { type: k.c, params: n, data: t || "" })),
                  Object(w.a)(
                    "hugoServiceHost",
                    "/api/v1/ring/stop",
                    "post",
                    o,
                    e,
                    "{}"
                  ).then(
                    function (n) {
                      var t, e;
                      return (
                        i(
                          ((t = o),
                          (e = n),
                          { type: k.d, params: t, data: e || "" })
                        ),
                        n
                      );
                    },
                    function (n) {
                      var t, e;
                      return (
                        i(
                          ((t = o),
                          (e = n),
                          { type: k.b, params: t, data: e || "" })
                        ),
                        Promise.reject(n)
                      );
                    }
                  )
                );
              };
            },
          }
        )(
          (v = (function (n) {
            f()(r, n);
            var o = x(r);
            function r() {
              var t;
              s()(this, r);
              for (
                var n = arguments.length, e = new Array(n), i = 0;
                i < n;
                i++
              )
                e[i] = arguments[i];
              return (
                ((t = o.call.apply(o, [this].concat(e))).state = {
                  canStop: !1,
                  musicPath: "",
                  id: "",
                }),
                (t.timeoutTodo = function () {
                  t.setState({ canStop: !0 });
                }),
                (t.startRing = function (n) {
                  t.setState(
                    { musicPath: n.ringFilePath, id: n.operationLogId },
                    function () {
                      t.refs.musicBox.play(),
                        setTimeout(function () {
                          t.refs.musicBox.pause(), t.stopMusic(P);
                        }, 1e3 * n.duration),
                        setTimeout(function () {
                          t.timeoutTodo();
                        }, 5e3);
                    }
                  );
                }),
                (t.stopMusic = function (n) {
                  t.props.actions
                    .postStopBellRinging({
                      status: n,
                      operationLogId: t.state.id,
                    })
                    .then(
                      function () {
                        y.a.send("windowControl", {
                          typeName: "destroy",
                          windowName: "bellRinging",
                        });
                      },
                      function () {
                        y.a.send("windowControl", {
                          typeName: "destroy",
                          windowName: "bellRinging",
                        });
                      }
                    );
                }),
                (t.handleStopRinging = function () {
                  t.state.canStop && (t.refs.musicBox.pause(), t.stopMusic(O));
                }),
                t
              );
            }
            return (
              g()(r, [
                {
                  key: "componentDidMount",
                  value: function () {
                    var t = this;
                    y.a.send("getBellRingingMessage", ""),
                      y.a.on("bellRingingMessage", function (n) {
                        t.startRing(n);
                      });
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var n = this.handleStopRinging,
                      t = this.state,
                      e = t.canStop,
                      i = t.musicPath;
                    return a.a.createElement(
                      "div",
                      {
                        className:
                          "clear " + _()(S ? "content radius" : "content", E),
                      },
                      a.a.createElement("audio", {
                        ref: "musicBox",
                        autoPlay: !0,
                        loop: "loop",
                        style: { visibility: "hidden" },
                        src: i,
                      }),
                      a.a.createElement(
                        "div",
                        { className: "bellRinging__title__3AqO8Svk" },
                        a.a.createElement("div", {
                          className: "bellRinging__icon__3mEebmFv",
                        }),
                        a.a.createElement("p", null, "打铃")
                      ),
                      a.a.createElement(
                        "div",
                        {
                          onClick: n,
                          className: _()(e ? "button show" : "button", E),
                        },
                        a.a.createElement("p", null, "关闭")
                      )
                    );
                  },
                },
              ]),
              r
            );
          })(i.PureComponent))
        ) || v,
      Y = e(24),
      I = e(29),
      U = (e(30), e(21));
    var M,
      q = Object(I.a)("bellRinging");
    (M = C),
      r.a.render(
        a.a.createElement(
          Y.a,
          { store: q },
          a.a.createElement(U.a, null, a.a.createElement(M, null))
        ),
        document.getElementById("root")
      );
  },
});
