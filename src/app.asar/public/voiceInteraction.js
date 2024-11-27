!(function (s) {
  function e(e) {
    for (
      var t, n, o = e[0], i = e[1], r = e[2], c = 0, a = [];
      c < o.length;
      c++
    )
      (n = o[c]),
        Object.prototype.hasOwnProperty.call(l, n) && l[n] && a.push(l[n][0]),
        (l[n] = 0);
    for (t in i) Object.prototype.hasOwnProperty.call(i, t) && (s[t] = i[t]);
    for (p && p(e); a.length; ) a.shift()();
    return f.push.apply(f, r || []), _();
  }
  function _() {
    for (var e, t = 0; t < f.length; t++) {
      for (var n = f[t], o = !0, i = 1; i < n.length; i++) {
        var r = n[i];
        0 !== l[r] && (o = !1);
      }
      o && (f.splice(t--, 1), (e = c((c.s = n[0]))));
    }
    return e;
  }
  var n = {},
    l = { 47: 0 },
    f = [];
  function c(e) {
    if (n[e]) return n[e].exports;
    var t = (n[e] = { i: e, l: !1, exports: {} });
    return s[e].call(t.exports, t, t.exports, c), (t.l = !0), t.exports;
  }
  (c.m = s),
    (c.c = n),
    (c.d = function (e, t, n) {
      c.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (c.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (c.t = function (t, e) {
      if ((1 & e && (t = c(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var n = Object.create(null);
      if (
        (c.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var o in t)
          c.d(
            n,
            o,
            function (e) {
              return t[e];
            }.bind(null, o)
          );
      return n;
    }),
    (c.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return c.d(t, "a", t), t;
    }),
    (c.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (c.p = "");
  var t = (window.webpackJsonp = window.webpackJsonp || []),
    o = t.push.bind(t);
  (t.push = e), (t = t.slice());
  for (var i = 0; i < t.length; i++) e(t[i]);
  var p = o;
  f.push([890, 0]), _();
})({
  879: function (e, t, n) {
    var o = n(880);
    "string" == typeof o && (o = [[e.i, o, ""]]);
    var i = { hmr: !0, transform: void 0, insertInto: void 0 };
    n(12)(o, i);
    o.locals && (e.exports = o.locals);
  },
  880: function (e, t, n) {
    (t = e.exports = n(11)(!1)).push([
      e.i,
      ".voiceError__box__2pbk1tbe {\n  width: 100%;\n  height: 100%;\n  padding: 24px 0;\n  text-align: center;\n}\n.voiceError__box__2pbk1tbe .voiceError__title__1oOFd6cs {\n  font-size: 20px;\n  color: #ffffff;\n}\n.voiceError__box__2pbk1tbe .voiceError__message__1kRKMqth {\n  opacity: 0.7;\n  font-size: 14px;\n  color: #ffffff;\n  margin-top: 8px;\n}\n",
      "",
    ]),
      (t.locals = {
        box: "voiceError__box__2pbk1tbe",
        title: "voiceError__title__1oOFd6cs",
        message: "voiceError__message__1kRKMqth",
      });
  },
  881: function (e, t, n) {
    var o = n(882);
    "string" == typeof o && (o = [[e.i, o, ""]]);
    var i = { hmr: !0, transform: void 0, insertInto: void 0 };
    n(12)(o, i);
    o.locals && (e.exports = o.locals);
  },
  882: function (e, t, n) {
    (t = e.exports = n(11)(!1)).push([
      e.i,
      ".voiceInteraction__content__3lx1FxxH {\n  width: 100%;\n  height: 100%;\n  padding: 0 0 8px 0;\n}\n.voiceInteraction__content__3lx1FxxH .voiceInteraction__main__3tHcjqxC {\n  width: 100%;\n  height: 100%;\n  -webkit-box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.2);\n          box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.2);\n  border-radius: 4px;\n  background: rgba(35, 38, 41, 0.88);\n  border: 0.5px solid #000000;\n  padding: 0.5px;\n}\n.voiceInteraction__content__3lx1FxxH .voiceInteraction__main__3tHcjqxC .voiceInteraction__main-content__3sZGoxlr {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  border-radius: 4px;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n}\n.voiceInteraction__content__3lx1FxxH .voiceInteraction__main__3tHcjqxC .voiceInteraction__main-content__3sZGoxlr .voiceInteraction__close__YB4ESwI6 {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  width: 12px;\n  height: 12px;\n  background-color: rgba(255, 255, 255, 0.1);\n  border-radius: 6px;\n  text-align: center;\n  line-height: 8px;\n}\n.voiceInteraction__content__3lx1FxxH .voiceInteraction__main__3tHcjqxC .voiceInteraction__main-content__3sZGoxlr .voiceInteraction__close__YB4ESwI6 i {\n  display: inline-block;\n  vertical-align: middle;\n  font-size: 10px;\n  color: white;\n}\n",
      "",
    ]),
      (t.locals = {
        content: "voiceInteraction__content__3lx1FxxH",
        main: "voiceInteraction__main__3tHcjqxC",
        "main-content": "voiceInteraction__main-content__3sZGoxlr",
        close: "voiceInteraction__close__YB4ESwI6",
      });
  },
  883: function (e, t, n) {
    var o = n(884);
    "string" == typeof o && (o = [[e.i, o, ""]]);
    var i = { hmr: !0, transform: void 0, insertInto: void 0 };
    n(12)(o, i);
    o.locals && (e.exports = o.locals);
  },
  884: function (e, t, n) {
    (t = e.exports = n(11)(!1)).push([
      e.i,
      ".voiceInterList__box__3LA6CXVB {\n  width: 100%;\n  height: auto;\n  padding: 8px 10px 12px 10px;\n}\n.voiceInterList__box__3LA6CXVB .voiceInterList__info__1wnBB_bY {\n  width: 100%;\n  text-align: center;\n  opacity: 0.4;\n  font-size: 12px;\n  color: #ffffff;\n  line-height: 16px;\n}\n.voiceInterList__box__3LA6CXVB .voiceInterList__list__3iBo22Wz {\n  width: 100%;\n  list-style: none;\n  max-height: 163px;\n  overflow-y: auto;\n}\n.voiceInterList__box__3LA6CXVB .voiceInterList__list__3iBo22Wz::-webkit-scrollbar {\n  display: none;\n}\n.voiceInterList__box__3LA6CXVB .voiceInterList__list__3iBo22Wz li {\n  -webkit-transition: all 0.3s;\n  -o-transition: all 0.3s;\n  transition: all 0.3s;\n}\n.voiceInterList__box__3LA6CXVB .voiceInterList__list__3iBo22Wz li.voiceInterList__empty__tOuWPRnq {\n  font-size: 16px;\n  color: #ffffff;\n  text-align: center;\n  line-height: 22px;\n  margin-top: 16px;\n}\n.voiceInterList__box__3LA6CXVB .voiceInterList__list__3iBo22Wz li.voiceInterList__one-line__3pLMeMJ1 {\n  font-size: 16px;\n  color: #ffffff;\n  margin: 16px 0 0 0;\n  padding-left: 14px;\n  line-height: 22px;\n}\n.voiceInterList__box__3LA6CXVB .voiceInterList__list__3iBo22Wz li.voiceInterList__auto__1spq0Zkm {\n  font-size: 16px;\n  color: #ffffff;\n  padding-left: 14px;\n  margin-bottom: 8px;\n  line-height: 22px;\n}\n.voiceInterList__box__3LA6CXVB .voiceInterList__list__3iBo22Wz li.voiceInterList__user__22KM5oiB {\n  font-size: 14px;\n  color: #ffffff;\n  opacity: 0.7;\n  padding-left: 30px;\n  margin: 16px 0;\n  line-height: 20px;\n}\n.voiceInterList__box__3LA6CXVB .voiceInterList__list__3iBo22Wz li.voiceInterList__error__30Tq2gvJ {\n  font-size: 16px;\n  color: #ffffff;\n  margin: 16px 0 0 0;\n  padding-left: 14px;\n  line-height: 22px;\n}\n.voiceInterList__box__3LA6CXVB .voiceInterList__list__3iBo22Wz li.voiceInterList__broken__QiIMMNoc {\n  font-size: 16px;\n  color: #ffffff;\n  text-align: center;\n  line-height: 22px;\n  margin-top: 16px;\n}\n",
      "",
    ]),
      (t.locals = {
        box: "voiceInterList__box__3LA6CXVB",
        info: "voiceInterList__info__1wnBB_bY",
        list: "voiceInterList__list__3iBo22Wz",
        empty: "voiceInterList__empty__tOuWPRnq",
        "one-line": "voiceInterList__one-line__3pLMeMJ1",
        auto: "voiceInterList__auto__1spq0Zkm",
        user: "voiceInterList__user__22KM5oiB",
        error: "voiceInterList__error__30Tq2gvJ",
        broken: "voiceInterList__broken__QiIMMNoc",
      });
  },
  890: function (e, t, n) {
    "use strict";
    n.r(t);
    var o = n(0),
      c = n.n(o),
      i = n(18),
      r = n.n(i),
      a = n(15),
      s = n.n(a),
      _ = n(3),
      l = n.n(_),
      f = n(4),
      p = n.n(f),
      u = n(5),
      v = n.n(u),
      x = n(6),
      d = n.n(x),
      h = n(2),
      m = n.n(h);
    n(879);
    function b(e) {
      return c.a.createElement(
        "div",
        { className: "voiceError__box__2pbk1tbe" },
        c.a.createElement(
          "div",
          { className: "voiceError__title__1oOFd6cs" },
          c.a.createElement("p", null, "无法使用语音识别")
        ),
        c.a.createElement(
          "div",
          { className: "voiceError__message__1kRKMqth" },
          c.a.createElement("p", null, e.text || "网络已断开")
        )
      );
    }
    n(881);
    var g = n(8),
      I = n.n(g),
      L = (n(883), n(117)),
      y = n(7),
      w = {
        "./voiceInterList.less": {
          box: "voiceInterList__box__3LA6CXVB",
          info: "voiceInterList__info__1wnBB_bY",
          list: "voiceInterList__list__3iBo22Wz",
          empty: "voiceInterList__empty__tOuWPRnq",
          "one-line": "voiceInterList__one-line__3pLMeMJ1",
          auto: "voiceInterList__auto__1spq0Zkm",
          user: "voiceInterList__user__22KM5oiB",
          error: "voiceInterList__error__30Tq2gvJ",
          broken: "voiceInterList__broken__QiIMMNoc",
        },
      };
    function B(o) {
      var i = (function () {
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
        } catch (e) {
          return !1;
        }
      })();
      return function () {
        var e,
          t = m()(o);
        if (i) {
          var n = m()(this).constructor;
          e = Reflect.construct(t, arguments, n);
        } else e = t.apply(this, arguments);
        return d()(this, e);
      };
    }
    var E = 94,
      k = (function (e) {
        v()(r, e);
        var i = B(r);
        function r() {
          var e;
          l()(this, r);
          for (var t = arguments.length, n = new Array(t), o = 0; o < t; o++)
            n[o] = arguments[o];
          return (
            ((e = i.call.apply(i, [this].concat(n))).closeWindow = function () {
              setTimeout(function () {
                y.a.send("windowControl", {
                  typeName: "close",
                  windowName: "voiceInteraction",
                });
              }, 2e3);
            }),
            e
          );
        }
        return (
          p()(r, [
            {
              key: "componentDidUpdate",
              value: function (e) {
                e.list.length !== this.props.list.length &&
                  (this.refs.scrollBox.scrollTop =
                    this.refs.scrollBox.scrollHeight),
                  0 <= this.props.list.length &&
                    y.a.send(
                      "setVoiceWindowHeight",
                      this.refs.scrollBox.offsetHeight + E
                    );
              },
            },
            {
              key: "componentDidMount",
              value: function () {
                0 <= this.props.list.length &&
                  y.a.send(
                    "setVoiceWindowHeight",
                    this.refs.scrollBox.offsetHeight + E
                  );
              },
            },
            {
              key: "render",
              value: function () {
                var e = this.props,
                  t = e.list,
                  n = e.voiceList,
                  o = e.start;
                return c.a.createElement(
                  "div",
                  { className: "voiceInterList__box__3LA6CXVB" },
                  c.a.createElement(
                    "div",
                    { className: "voiceInterList__info__1wnBB_bY" },
                    c.a.createElement("p", null, "语音识别功能由小沃同学提供")
                  ),
                  c.a.createElement(
                    "ul",
                    {
                      className: "voiceInterList__list__3iBo22Wz",
                      ref: "scrollBox",
                    },
                    0 === t.length &&
                      c.a.createElement(
                        "li",
                        { className: "voiceInterList__empty__tOuWPRnq" },
                        c.a.createElement(
                          "p",
                          null,
                          "您好，请问需要什么帮助的吗？"
                        )
                      ),
                    1 === t.length &&
                      c.a.createElement(
                        "li",
                        { className: "voiceInterList__one-line__3pLMeMJ1" },
                        c.a.createElement("p", null, t[0].text)
                      ),
                    1 < t.length &&
                      t.map(function (e, t) {
                        return c.a.createElement(
                          "li",
                          { key: t, className: I()(e.type, w) },
                          c.a.createElement("p", null, e.text)
                        );
                      })
                  ),
                  c.a.createElement(L.a, { start: o, valuesList: n })
                );
              },
            },
          ]),
          r
        );
      })(o.PureComponent),
      C = n(19),
      M = n(65),
      W = n(20);
    var N,
      O = n(9);
    function z(o) {
      var i = (function () {
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
        } catch (e) {
          return !1;
        }
      })();
      return function () {
        var e,
          t = m()(o);
        if (i) {
          var n = m()(this).constructor;
          e = Reflect.construct(t, arguments, n);
        } else e = t.apply(this, arguments);
        return d()(this, e);
      };
    }
    var H = 112,
      j = 7001,
      q = 7002,
      V = 7003,
      R = 7005,
      A = 7006,
      P = 7004,
      X = 1e3,
      S =
        Object(O.a)(
          {},
          {
            stopVoice: function () {
              var i =
                  0 < arguments.length && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                n =
                  1 < arguments.length && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
              return function (o) {
                var e, t;
                return (
                  o(((e = i), { type: M.c, params: e, data: t || "" })),
                  Object(W.a)(
                    "voiceHost",
                    "/api/v1/voice/stop",
                    "post",
                    i,
                    n,
                    "{}"
                  ).then(
                    function (e) {
                      var t, n;
                      return (
                        o(
                          ((t = i),
                          (n = e),
                          { type: M.d, params: t, data: n || "" })
                        ),
                        e
                      );
                    },
                    function (e) {
                      var t, n;
                      return (
                        o(
                          ((t = i),
                          (n = e),
                          { type: M.b, params: t, data: n || "" })
                        ),
                        Promise.reject(e)
                      );
                    }
                  )
                );
              };
            },
          }
        )(
          (N = (function (e) {
            v()(r, e);
            var i = z(r);
            function r() {
              var o;
              l()(this, r);
              for (
                var e = arguments.length, t = new Array(e), n = 0;
                n < e;
                n++
              )
                t[n] = arguments[n];
              return (
                ((o = i.call.apply(i, [this].concat(t))).state = {
                  error: !1,
                  errorText: "",
                  list: [],
                  voiceList: [0, 0, 0],
                }),
                (o.wordList = []),
                (o.timeout = null),
                (o.handleClose = function () {
                  o.props.actions
                    .stopVoice()
                    .then(function () {
                      throw "...";
                    })
                    .catch(function () {
                      y.a.send("windowControl", {
                        windowName: "voiceInteraction",
                        typeName: "close",
                      });
                    });
                }),
                (o.setWindowHeight = function (e) {
                  y.a.send("setVoiceWindowHeight", e);
                }),
                (o.closeWindow = function () {
                  y.a.send("windowControl", {
                    typeName: "close",
                    windowName: "voiceInteraction",
                  });
                }),
                (o.onMessage = function () {
                  y.a.on("message", function (e) {
                    var t,
                      n = {};
                    switch (e.code) {
                      case j:
                        (n.error = !0), o.setWindowHeight(H);
                        break;
                      case q:
                        n.error = !1;
                        break;
                      case V:
                        (n.error = !1),
                          (n.voiceList = s()(e.data.volume)),
                          (t = function () {
                            setTimeout(function () {
                              o.setState({ voiceList: [0, 0, 0] });
                            }, 1e3);
                          });
                        break;
                      case R:
                        (n.error = !1),
                          o.wordList.push({ type: "user", text: e.data.asr }),
                          (n.list = s()(o.wordList));
                        break;
                      case A:
                        o.wordList.push({ type: "auto", text: e.data.tts }),
                          (n.list = s()(o.wordList));
                        break;
                      case P:
                        o.closeWindow();
                        break;
                      case X:
                        o.wordList.push({
                          type: "broken",
                          text: "服务断开，无法正常显示信息",
                        }),
                          (t = function () {
                            setTimeout(function () {
                              o.closeWindow();
                            }, 1e3);
                          }),
                          (n.list = s()(o.wordList));
                        break;
                      default:
                        return;
                    }
                    e.code === A
                      ? setTimeout(function () {
                          o.setState(n, t);
                        }, 500)
                      : o.setState(n, t);
                  });
                }),
                o
              );
            }
            return (
              p()(r, [
                {
                  key: "componentDidMount",
                  value: function () {
                    this.onMessage();
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e = this.state,
                      t = e.error,
                      n = e.errorText,
                      o = e.list,
                      i = e.voiceList,
                      r = this.handleClose;
                    return c.a.createElement(
                      "div",
                      { className: "voiceInteraction__content__3lx1FxxH" },
                      c.a.createElement(
                        "div",
                        {
                          className: "voiceInteraction__main__3tHcjqxC",
                          ref: "contentBox",
                        },
                        c.a.createElement(
                          "div",
                          {
                            className:
                              "voiceInteraction__main-content__3sZGoxlr",
                          },
                          c.a.createElement(
                            "div",
                            { className: "voiceInteraction__close__YB4ESwI6" },
                            c.a.createElement(C.a, { onClick: r }),
                            c.a.createElement(
                              "i",
                              { className: "iconfont" },
                              ""
                            )
                          ),
                          t && c.a.createElement(b, { text: n }),
                          !t &&
                            c.a.createElement(k, {
                              list: o,
                              start: !0,
                              voiceList: i,
                            })
                        )
                      )
                    );
                  },
                },
              ]),
              r
            );
          })(o.PureComponent))
        ) || N,
      T = (n(30), n(24)),
      F = n(29),
      J = n(21);
    var Y,
      Z = Object(F.a)("voiceInteraction");
    (Y = S),
      r.a.render(
        c.a.createElement(
          T.a,
          { store: Z },
          c.a.createElement(J.a, null, c.a.createElement(Y, null))
        ),
        document.getElementById("root")
      );
  },
});
