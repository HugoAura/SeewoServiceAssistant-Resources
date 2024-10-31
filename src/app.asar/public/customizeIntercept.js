!(function (s) {
  function t(t) {
    for (
      var e, n, o = t[0], r = t[1], c = t[2], i = 0, _ = [];
      i < o.length;
      i++
    )
      (n = o[i]),
        Object.prototype.hasOwnProperty.call(l, n) && l[n] && _.push(l[n][0]),
        (l[n] = 0);
    for (e in r) Object.prototype.hasOwnProperty.call(r, e) && (s[e] = r[e]);
    for (m && m(t); _.length; ) _.shift()();
    return p.push.apply(p, c || []), a();
  }
  function a() {
    for (var t, e = 0; e < p.length; e++) {
      for (var n = p[e], o = !0, r = 1; r < n.length; r++) {
        var c = n[r];
        0 !== l[c] && (o = !1);
      }
      o && (p.splice(e--, 1), (t = i((i.s = n[0]))));
    }
    return t;
  }
  var n = {},
    l = { 4: 0 },
    p = [];
  function i(t) {
    if (n[t]) return n[t].exports;
    var e = (n[t] = { i: t, l: !1, exports: {} });
    return s[t].call(e.exports, e, e.exports, i), (e.l = !0), e.exports;
  }
  (i.m = s),
    (i.c = n),
    (i.d = function (t, e, n) {
      i.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
    }),
    (i.r = function (t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (i.t = function (e, t) {
      if ((1 & t && (e = i(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (i.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var o in e)
          i.d(
            n,
            o,
            function (t) {
              return e[t];
            }.bind(null, o)
          );
      return n;
    }),
    (i.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return i.d(e, "a", e), e;
    }),
    (i.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (i.p = "");
  var e = (window.webpackJsonp = window.webpackJsonp || []),
    o = e.push.bind(e);
  (e.push = t), (e = e.slice());
  for (var r = 0; r < e.length; r++) t(e[r]);
  var m = o;
  p.push([887, 0]), a();
})({
  669: function (t, e, n) {
    var o = n(670);
    "string" == typeof o && (o = [[t.i, o, ""]]);
    var r = { hmr: !0, transform: void 0, insertInto: void 0 };
    n(12)(o, r);
    o.locals && (t.exports = o.locals);
  },
  670: function (t, e, n) {
    (e = t.exports = n(11)(!1)).push([
      t.i,
      ".customizeIntercept__content__111Q2n_g {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  -webkit-transition: all 0.3s;\n  -o-transition: all 0.3s;\n  transition: all 0.3s;\n}\n.customizeIntercept__content__111Q2n_g.customizeIntercept__open__3iOgj6Tx {\n  background-color: rgba(0, 0, 0, 0.6);\n}\n.customizeIntercept__content__111Q2n_g.customizeIntercept__close__1EnD1Jrs {\n  background-color: rgba(0, 0, 0, 0.05);\n}\n.customizeIntercept__content__111Q2n_g .customizeIntercept__start__3ClLnyi8 {\n  position: relative;\n  width: 100%;\n  text-align: center;\n  top: 50%;\n  margin: 0 auto;\n  -webkit-transform: translateY(-50%);\n      -ms-transform: translateY(-50%);\n          transform: translateY(-50%);\n  font-size: 16px;\n  color: white;\n}\n.customizeIntercept__content__111Q2n_g .customizeIntercept__start__3ClLnyi8 .customizeIntercept__close-button__vodkT3MG {\n  width: 104px;\n  height: 32px;\n  border: 1px solid #ffffff;\n  border-radius: 2px;\n  color: white;\n  line-height: 30px;\n  text-align: center;\n  font-size: 14px;\n  margin: 16px auto;\n}\n.customizeIntercept__content__111Q2n_g .customizeIntercept__close-all__2Z0Il1FF {\n  position: absolute;\n  top: 24px;\n  right: 24px;\n  width: 40px;\n  height: 40px;\n  font-size: 40px;\n  line-height: 40px;\n  text-align: center;\n  color: white;\n  cursor: pointer;\n  -webkit-transition: -webkit-transform 0.5s;\n  transition: -webkit-transform 0.5s;\n  -o-transition: transform 0.5s;\n  transition: transform 0.5s;\n  transition: transform 0.5s, -webkit-transform 0.5s;\n}\n.customizeIntercept__content__111Q2n_g .customizeIntercept__close-all__2Z0Il1FF:active {\n  -webkit-transform: scale(0.75);\n      -ms-transform: scale(0.75);\n          transform: scale(0.75);\n}\n.customizeIntercept__content__111Q2n_g .customizeIntercept__box__3QVAW897 {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0px;\n  max-width: 100%;\n  max-height: 100%;\n  border: 2px solid #ff8800;\n  background-color: rgba(0, 0, 0, 0.6);\n  -webkit-transition: all 0.3s;\n  -o-transition: all 0.3s;\n  transition: all 0.3s;\n}\n.customizeIntercept__content__111Q2n_g .customizeIntercept__box__3QVAW897 .customizeIntercept__can-intercept__3MQrJBTl {\n  width: 100%;\n  height: 100%;\n}\n.customizeIntercept__content__111Q2n_g .customizeIntercept__box__3QVAW897 .customizeIntercept__can-intercept__3MQrJBTl .customizeIntercept__middle__23Oe00z- {\n  position: relative;\n  width: 100%;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n      -ms-transform: translateY(-50%);\n          transform: translateY(-50%);\n  text-align: center;\n}\n.customizeIntercept__content__111Q2n_g .customizeIntercept__box__3QVAW897 .customizeIntercept__can-intercept__3MQrJBTl .customizeIntercept__middle__23Oe00z- .customizeIntercept__title__VJUsUaz4 {\n  width: 100%;\n  height: 18px;\n  line-height: 18px;\n  font-size: 14px;\n  color: white;\n}\n.customizeIntercept__content__111Q2n_g .customizeIntercept__box__3QVAW897 .customizeIntercept__can-intercept__3MQrJBTl .customizeIntercept__middle__23Oe00z- .customizeIntercept__button-list__2J-JmY2D {\n  margin-top: 20px;\n  width: 100%;\n}\n.customizeIntercept__content__111Q2n_g .customizeIntercept__box__3QVAW897 .customizeIntercept__can-intercept__3MQrJBTl .customizeIntercept__middle__23Oe00z- .customizeIntercept__button-list__2J-JmY2D div {\n  display: inline-block;\n  width: 104px;\n  height: 32px;\n  margin: 0 8px;\n  border-radius: 2px;\n  line-height: 32px;\n  font-size: 14px;\n  -webkit-transition: -webkit-transform 0.5s;\n  transition: -webkit-transform 0.5s;\n  -o-transition: transform 0.5s;\n  transition: transform 0.5s;\n  transition: transform 0.5s, -webkit-transform 0.5s;\n  cursor: pointer;\n}\n.customizeIntercept__content__111Q2n_g .customizeIntercept__box__3QVAW897 .customizeIntercept__can-intercept__3MQrJBTl .customizeIntercept__middle__23Oe00z- .customizeIntercept__button-list__2J-JmY2D div:active {\n  -webkit-transform: scale(0.75);\n      -ms-transform: scale(0.75);\n          transform: scale(0.75);\n}\n.customizeIntercept__content__111Q2n_g .customizeIntercept__box__3QVAW897 .customizeIntercept__can-intercept__3MQrJBTl .customizeIntercept__middle__23Oe00z- .customizeIntercept__button-list__2J-JmY2D div.customizeIntercept__cancell__2glRbopK {\n  color: #2c3144;\n  background-color: #fff;\n}\n.customizeIntercept__content__111Q2n_g .customizeIntercept__box__3QVAW897 .customizeIntercept__can-intercept__3MQrJBTl .customizeIntercept__middle__23Oe00z- .customizeIntercept__button-list__2J-JmY2D div.customizeIntercept__done__1dykkhFH {\n  color: white;\n  background-color: #3da4ff;\n}\n.customizeIntercept__content__111Q2n_g .customizeIntercept__box__3QVAW897 .customizeIntercept__not-intercept__sdZ2MkFr {\n  width: 100%;\n  height: 100%;\n}\n.customizeIntercept__content__111Q2n_g .customizeIntercept__box__3QVAW897 .customizeIntercept__not-intercept__sdZ2MkFr .customizeIntercept__prompt__2mUjTZNi {\n  position: relative;\n  width: 100%;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n      -ms-transform: translateY(-50%);\n          transform: translateY(-50%);\n  text-align: center;\n  font-size: 14px;\n  color: white;\n}\n.customizeIntercept__content__111Q2n_g .customizeIntercept__box__3QVAW897 .customizeIntercept__not-intercept__sdZ2MkFr .customizeIntercept__prompt__2mUjTZNi .customizeIntercept__close-button__vodkT3MG {\n  width: 104px;\n  height: 32px;\n  border: 1px solid #ffffff;\n  border-radius: 2px;\n  color: white;\n  line-height: 30px;\n  text-align: center;\n  font-size: 14px;\n  margin: 16px auto;\n}\n.customizeIntercept__content__111Q2n_g .customizeIntercept__box__3QVAW897 .customizeIntercept__close__1EnD1Jrs {\n  position: absolute;\n  top: 8px;\n  right: 8px;\n  width: 16px;\n  height: 16px;\n  font-size: 16px;\n  line-height: 16px;\n  text-align: center;\n  color: white;\n  cursor: pointer;\n  -webkit-transition: -webkit-transform 0.5s;\n  transition: -webkit-transform 0.5s;\n  -o-transition: transform 0.5s;\n  transition: transform 0.5s;\n  transition: transform 0.5s, -webkit-transform 0.5s;\n}\n.customizeIntercept__content__111Q2n_g .customizeIntercept__box__3QVAW897 .customizeIntercept__close__1EnD1Jrs:active {\n  -webkit-transform: scale(0.75);\n      -ms-transform: scale(0.75);\n          transform: scale(0.75);\n}\n",
      "",
    ]),
      (e.locals = {
        content: "customizeIntercept__content__111Q2n_g",
        open: "customizeIntercept__open__3iOgj6Tx",
        close: "customizeIntercept__close__1EnD1Jrs",
        start: "customizeIntercept__start__3ClLnyi8",
        "close-button": "customizeIntercept__close-button__vodkT3MG",
        "close-all": "customizeIntercept__close-all__2Z0Il1FF",
        box: "customizeIntercept__box__3QVAW897",
        "can-intercept": "customizeIntercept__can-intercept__3MQrJBTl",
        middle: "customizeIntercept__middle__23Oe00z-",
        title: "customizeIntercept__title__VJUsUaz4",
        "button-list": "customizeIntercept__button-list__2J-JmY2D",
        cancell: "customizeIntercept__cancell__2glRbopK",
        done: "customizeIntercept__done__1dykkhFH",
        "not-intercept": "customizeIntercept__not-intercept__sdZ2MkFr",
        prompt: "customizeIntercept__prompt__2mUjTZNi",
      });
  },
  887: function (t, e, n) {
    "use strict";
    n.r(e);
    var o = n(0),
      s = n.n(o),
      r = n(18),
      c = n.n(r),
      i = n(3),
      _ = n.n(i),
      a = n(4),
      l = n.n(a),
      p = n(5),
      m = n.n(p),
      u = n(6),
      d = n.n(u),
      f = n(2),
      z = n.n(f),
      I = n(8),
      h = n.n(I),
      w = n(47),
      b = n(21);
    n(669);
    var g,
      x = n(9),
      v = n(7),
      k = n(20),
      y = {
        "./customizeIntercept.less": {
          content: "customizeIntercept__content__111Q2n_g",
          open: "customizeIntercept__open__3iOgj6Tx",
          close: "customizeIntercept__close__1EnD1Jrs",
          start: "customizeIntercept__start__3ClLnyi8",
          "close-button": "customizeIntercept__close-button__vodkT3MG",
          "close-all": "customizeIntercept__close-all__2Z0Il1FF",
          box: "customizeIntercept__box__3QVAW897",
          "can-intercept": "customizeIntercept__can-intercept__3MQrJBTl",
          middle: "customizeIntercept__middle__23Oe00z-",
          title: "customizeIntercept__title__VJUsUaz4",
          "button-list": "customizeIntercept__button-list__2J-JmY2D",
          cancell: "customizeIntercept__cancell__2glRbopK",
          done: "customizeIntercept__done__1dykkhFH",
          "not-intercept": "customizeIntercept__not-intercept__sdZ2MkFr",
          prompt: "customizeIntercept__prompt__2mUjTZNi",
        },
      };
    function Q(o) {
      var r = (function () {
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
        } catch (t) {
          return !1;
        }
      })();
      return function () {
        var t,
          e = z()(o);
        if (r) {
          var n = z()(this).constructor;
          t = Reflect.construct(e, arguments, n);
        } else t = e.apply(this, arguments);
        return d()(this, t);
      };
    }
    var E =
        Object(x.a)(
          {},
          {
            postCatchWindow: function () {
              var r =
                  0 < arguments.length && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                n =
                  1 < arguments.length && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
              return function (o) {
                var t, e;
                return (
                  o(((t = r), { type: w.c, params: t, data: e || "" })),
                  Object(b.a)(
                    "adblockHttpHost",
                    "/api/v1/windowBlock/window/info",
                    "post",
                    r,
                    n,
                    "{}"
                  ).then(
                    function (t) {
                      var e, n;
                      return (
                        o(
                          ((e = r),
                          (n = t),
                          { type: w.d, params: e, data: n || "" })
                        ),
                        t
                      );
                    },
                    function (t) {
                      var e, n;
                      return (
                        o(
                          ((e = r),
                          (n = t),
                          { type: w.b, params: e, data: n || "" })
                        ),
                        Promise.reject(t)
                      );
                    }
                  )
                );
              };
            },
            postInterceptAction: function () {
              var r =
                  0 < arguments.length && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                n =
                  1 < arguments.length && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
              return function (o) {
                var t, e;
                return (
                  o(((t = r), { type: w.g, params: t, data: e || "" })),
                  Object(b.a)(
                    "adblockHttpHost",
                    "/api/v1/windowBlock/window/block",
                    "post",
                    r,
                    n,
                    "{}"
                  ).then(
                    function (t) {
                      var e, n;
                      return (
                        o(
                          ((e = r),
                          (n = t),
                          { type: w.h, params: e, data: n || "" })
                        ),
                        t
                      );
                    },
                    function (t) {
                      var e, n;
                      return (
                        o(
                          ((e = r),
                          (n = t),
                          { type: w.f, params: e, data: n || "" })
                        ),
                        Promise.reject(t)
                      );
                    }
                  )
                );
              };
            },
          }
        )(
          (g = (function (t) {
            m()(c, t);
            var o = Q(c);
            function c() {
              var r;
              _()(this, c);
              for (
                var t = arguments.length, e = new Array(t), n = 0;
                n < t;
                n++
              )
                e[n] = arguments[n];
              return (
                ((r = o.call.apply(o, [this].concat(e))).state = {
                  hasWindow: !1,
                  canInterCept: !0,
                  boxStyle: {},
                  windowName: "",
                }),
                (r.windowData = null),
                (r.handleClose = function () {
                  v.a.send("windowControl", {
                    typeName: "close",
                    windowName: "customizeIntercept",
                  }),
                    v.a.send("windowControl", {
                      typeName: "show",
                      windowName: "assistant",
                    });
                }),
                (r.handleCatchWindow = function (t) {
                  (t.target !== r.refs.parent && t.target !== r.refs.word) ||
                    (v.a.send("windowControl", {
                      typeName: "hide",
                      windowName: "customizeIntercept",
                    }),
                    r.props.actions.postCatchWindow({
                      x: t.screenX * window.scaleFactor,
                      y: t.screenY * window.scaleFactor,
                    }));
                }),
                (r.listenMessage = function () {
                  v.a.on("customizeWindow", function (t) {
                    var e = t.scaleFactor,
                      n = t.data,
                      o = {};
                    (window.scaleFactor = e),
                      (o.boxStyle = {
                        width: n.width / e + "px",
                        height: n.height / e + "px",
                        left: n.pos_x / e + "px",
                        top: n.pos_y / e + "px",
                      }),
                      (o.hasWindow = !0),
                      n.block
                        ? ((o.canInterCept = !0), (o.windowName = n.title))
                        : ((o.windowName = n.title), (o.canInterCept = !1)),
                      (r.windowData = n),
                      r.setState(o);
                  });
                }),
                (r.handleIntercept = function () {
                  var t = r.windowData.handle;
                  r.props.actions.postInterceptAction({ handle: t }).then(
                    function () {
                      v.a.send("windowControl", {
                        typeName: "close",
                        windowName: "customizeIntercept",
                      }),
                        v.a.send("windowControl", {
                          typeName: "show",
                          windowName: "assistant",
                        });
                    },
                    function () {
                      v.a.send("windowControl", {
                        typeName: "close",
                        windowName: "customizeIntercept",
                      }),
                        v.a.send("windowControl", {
                          typeName: "show",
                          windowName: "assistant",
                        });
                    }
                  );
                }),
                r
              );
            }
            return (
              l()(c, [
                {
                  key: "componentDidMount",
                  value: function () {
                    var e = this;
                    this.listenMessage(),
                      document.addEventListener("keydown", function (t) {
                        27 === t.keyCode && e.handleClose();
                      });
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var t = this.state,
                      e = t.hasWindow,
                      n = t.canInterCept,
                      o = t.boxStyle,
                      r = t.windowName,
                      c = this.handleClose,
                      i = this.handleCatchWindow,
                      _ = this.handleIntercept;
                    return s.a.createElement(
                      "div",
                      {
                        ref: "parent",
                        onClick: i,
                        className: h()(e ? "content close" : "content open", y),
                      },
                      !e &&
                        s.a.createElement(
                          s.a.Fragment,
                          null,
                          s.a.createElement(
                            "div",
                            {
                              className: "customizeIntercept__start__3ClLnyi8",
                            },
                            s.a.createElement(
                              "p",
                              { ref: "word" },
                              "点击弹窗以拦截"
                            ),
                            s.a.createElement(
                              "div",
                              {
                                className:
                                  "customizeIntercept__close-button__vodkT3MG",
                              },
                              s.a.createElement(k.a, {
                                activeStyle: "scale",
                                onClick: c,
                              }),
                              s.a.createElement("p", null, "取消拦截")
                            )
                          ),
                          s.a.createElement(
                            "div",
                            {
                              className:
                                "customizeIntercept__close-all__2Z0Il1FF",
                              onClick: c,
                            },
                            s.a.createElement(
                              "p",
                              null,
                              s.a.createElement(
                                "i",
                                { className: "iconfont" },
                                ""
                              )
                            )
                          )
                        ),
                      e &&
                        s.a.createElement(
                          "div",
                          {
                            className: "customizeIntercept__box__3QVAW897",
                            style: o,
                          },
                          n &&
                            e &&
                            s.a.createElement(
                              "div",
                              {
                                className:
                                  "customizeIntercept__can-intercept__3MQrJBTl",
                              },
                              s.a.createElement(
                                "div",
                                {
                                  className:
                                    "customizeIntercept__middle__23Oe00z-",
                                },
                                s.a.createElement(
                                  "div",
                                  {
                                    className:
                                      "customizeIntercept__title__VJUsUaz4",
                                  },
                                  s.a.createElement("p", null, "弹窗：", r)
                                ),
                                s.a.createElement(
                                  "div",
                                  {
                                    className:
                                      "customizeIntercept__button-list__2J-JmY2D",
                                  },
                                  s.a.createElement(
                                    "div",
                                    {
                                      className:
                                        "customizeIntercept__cancell__2glRbopK",
                                      onClick: c,
                                    },
                                    s.a.createElement("p", null, "取消拦截")
                                  ),
                                  s.a.createElement(
                                    "div",
                                    {
                                      className:
                                        "customizeIntercept__done__1dykkhFH",
                                      onClick: _,
                                    },
                                    s.a.createElement("p", null, "添加拦截")
                                  )
                                )
                              )
                            ),
                          !n &&
                            e &&
                            s.a.createElement(
                              "div",
                              {
                                className:
                                  "customizeIntercept__not-intercept__sdZ2MkFr",
                              },
                              s.a.createElement(
                                "div",
                                {
                                  className:
                                    "customizeIntercept__prompt__2mUjTZNi",
                                },
                                s.a.createElement(
                                  "p",
                                  null,
                                  r,
                                  "窗口不支持拦截"
                                ),
                                s.a.createElement(
                                  "div",
                                  {
                                    className:
                                      "customizeIntercept__close-button__vodkT3MG",
                                  },
                                  s.a.createElement(k.a, {
                                    activeStyle: "scale",
                                    onClick: c,
                                  }),
                                  s.a.createElement("p", null, "取消拦截")
                                )
                              )
                            ),
                          s.a.createElement(
                            "div",
                            {
                              className: "customizeIntercept__close__1EnD1Jrs",
                              onClick: c,
                            },
                            s.a.createElement(
                              "p",
                              null,
                              s.a.createElement(
                                "i",
                                { className: "iconfont" },
                                ""
                              )
                            )
                          )
                        )
                    );
                  },
                },
              ]),
              c
            );
          })(o.PureComponent))
        ) || g,
      N = n(24),
      J = n(29),
      C = n(22);
    n(30);
    var M,
      O = Object(J.a)("customizeIntercept");
    (M = E),
      c.a.render(
        s.a.createElement(
          N.a,
          { store: O },
          s.a.createElement(C.a, null, s.a.createElement(M, null))
        ),
        document.getElementById("root")
      );
  },
});
