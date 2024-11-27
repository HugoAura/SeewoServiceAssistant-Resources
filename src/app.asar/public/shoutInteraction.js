!(function (s) {
  function t(t) {
    for (
      var n, e, o = t[0], r = t[1], i = t[2], a = 0, c = [];
      a < o.length;
      a++
    )
      (e = o[a]),
        Object.prototype.hasOwnProperty.call(u, e) && u[e] && c.push(u[e][0]),
        (u[e] = 0);
    for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (s[n] = r[n]);
    for (f && f(t); c.length; ) c.shift()();
    return _.push.apply(_, i || []), l();
  }
  function l() {
    for (var t, n = 0; n < _.length; n++) {
      for (var e = _[n], o = !0, r = 1; r < e.length; r++) {
        var i = e[r];
        0 !== u[i] && (o = !1);
      }
      o && (_.splice(n--, 1), (t = a((a.s = e[0]))));
    }
    return t;
  }
  var e = {},
    u = { 40: 0 },
    _ = [];
  function a(t) {
    if (e[t]) return e[t].exports;
    var n = (e[t] = { i: t, l: !1, exports: {} });
    return s[t].call(n.exports, n, n.exports, a), (n.l = !0), n.exports;
  }
  (a.m = s),
    (a.c = e),
    (a.d = function (t, n, e) {
      a.o(t, n) || Object.defineProperty(t, n, { enumerable: !0, get: e });
    }),
    (a.r = function (t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (a.t = function (n, t) {
      if ((1 & t && (n = a(n)), 8 & t)) return n;
      if (4 & t && "object" == typeof n && n && n.__esModule) return n;
      var e = Object.create(null);
      if (
        (a.r(e),
        Object.defineProperty(e, "default", { enumerable: !0, value: n }),
        2 & t && "string" != typeof n)
      )
        for (var o in n)
          a.d(
            e,
            o,
            function (t) {
              return n[t];
            }.bind(null, o)
          );
      return e;
    }),
    (a.n = function (t) {
      var n =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return a.d(n, "a", n), n;
    }),
    (a.o = function (t, n) {
      return Object.prototype.hasOwnProperty.call(t, n);
    }),
    (a.p = "");
  var n = (window.webpackJsonp = window.webpackJsonp || []),
    o = n.push.bind(n);
  (n.push = t), (n = n.slice());
  for (var r = 0; r < n.length; r++) t(n[r]);
  var f = o;
  _.push([926, 0]), l();
})({
  862: function (t, n, e) {
    var o = e(863);
    "string" == typeof o && (o = [[t.i, o, ""]]);
    var r = { hmr: !0, transform: void 0, insertInto: void 0 };
    e(12)(o, r);
    o.locals && (t.exports = o.locals);
  },
  863: function (t, n, e) {
    (n = t.exports = e(11)(!1)).push([
      t.i,
      ".shoutInteraction__content__GxXGosSa {\n  width: 100%;\n  height: 100%;\n  padding: 0 0 8px 0;\n}\n.shoutInteraction__content__GxXGosSa .shoutInteraction__main__2zYtH90z {\n  width: 100%;\n  height: 100%;\n  -webkit-box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.2);\n          box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.2);\n  border-radius: 4px;\n  background: rgba(35, 38, 41, 0.88);\n  border: 0.5px solid #000000;\n  padding: 0.5px;\n}\n.shoutInteraction__content__GxXGosSa .shoutInteraction__main__2zYtH90z .shoutInteraction__main-content__3OKewEhV {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  border-radius: 4px;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  padding-top: 24px;\n}\n.shoutInteraction__content__GxXGosSa .shoutInteraction__main__2zYtH90z .shoutInteraction__main-content__3OKewEhV .shoutInteraction__title__3sckEUNE {\n  width: 100%;\n  font-size: 16px;\n  line-height: 24px;\n  text-align: center;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  /* 文本 Text/color-text-white */\n  color: #ffffff;\n}\n.shoutInteraction__content__GxXGosSa .shoutInteraction__main__2zYtH90z .shoutInteraction__main-content__3OKewEhV .shoutInteraction__title__3sckEUNE span {\n  display: inline-block;\n  max-width: 70%;\n  white-space: nowrap;\n  overflow: hidden;\n  -o-text-overflow: ellipsis;\n     text-overflow: ellipsis;\n}\n",
      "",
    ]),
      (n.locals = {
        content: "shoutInteraction__content__GxXGosSa",
        main: "shoutInteraction__main__2zYtH90z",
        "main-content": "shoutInteraction__main-content__3OKewEhV",
        title: "shoutInteraction__title__3sckEUNE",
      });
  },
  926: function (t, n, e) {
    "use strict";
    e.r(n);
    var o = e(0),
      a = e.n(o),
      r = e(18),
      i = e.n(r),
      c = e(3),
      s = e.n(c),
      l = e(4),
      u = e.n(l),
      _ = e(5),
      f = e.n(_),
      p = e(6),
      h = e.n(p),
      d = e(2),
      m = e.n(d),
      x = (e(862), e(117));
    function v(o) {
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
          n = m()(o);
        if (r) {
          var e = m()(this).constructor;
          t = Reflect.construct(n, arguments, e);
        } else t = n.apply(this, arguments);
        return h()(this, t);
      };
    }
    var b = (function (t) {
        f()(i, t);
        var r = v(i);
        function i() {
          var n;
          s()(this, i);
          for (var t = arguments.length, e = new Array(t), o = 0; o < t; o++)
            e[o] = arguments[o];
          return (
            ((n = r.call.apply(r, [this].concat(e))).state = {
              error: !1,
              errorText: "",
              list: [],
              voiceList: [0, 0, 0],
            }),
            (n.handleShoutList = function (t) {
              t && n.setState({ list: t });
            }),
            n
          );
        }
        return (
          u()(i, [
            {
              key: "componentDidMount",
              value: function () {
                _ACCEPT_DATA.getAndRegister("shoutList", this.handleShoutList);
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                _ACCEPT_DATA.removeOne("shoutList", this.handleShoutList);
              },
            },
            {
              key: "render",
              value: function () {
                var t = this.state,
                  n = t.voiceList,
                  e = t.list;
                return a.a.createElement(
                  "div",
                  { className: "shoutInteraction__content__GxXGosSa" },
                  a.a.createElement(
                    "div",
                    {
                      className: "shoutInteraction__main__2zYtH90z",
                      ref: "contentBox",
                    },
                    a.a.createElement(
                      "div",
                      { className: "shoutInteraction__main-content__3OKewEhV" },
                      a.a.createElement(
                        "div",
                        { className: "shoutInteraction__title__3sckEUNE" },
                        a.a.createElement(
                          "span",
                          null,
                          " ",
                          e
                            .map(function (t) {
                              return t.replace(/^(.).*/, "$1**") + "老师";
                            })
                            .join("、")
                        ),
                        "正在喊话"
                      )
                    ),
                    a.a.createElement(x.a, { start: !0, valuesList: n })
                  )
                );
              },
            },
          ]),
          i
        );
      })(o.PureComponent),
      y = (e(30), e(21));
    var g;
    (g = b),
      i.a.render(
        a.a.createElement(y.a, null, a.a.createElement(g, null)),
        document.getElementById("root")
      );
  },
});
