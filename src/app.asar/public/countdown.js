!(function (l) {
  function e(e) {
    for (
      var n, t, o = e[0], a = e[1], r = e[2], i = 0, c = [];
      i < o.length;
      i++
    )
      (t = o[i]),
        Object.prototype.hasOwnProperty.call(_, t) && _[t] && c.push(_[t][0]),
        (_[t] = 0);
    for (n in a) Object.prototype.hasOwnProperty.call(a, n) && (l[n] = a[n]);
    for (f && f(e); c.length; ) c.shift()();
    return s.push.apply(s, r || []), d();
  }
  function d() {
    for (var e, n = 0; n < s.length; n++) {
      for (var t = s[n], o = !0, a = 1; a < t.length; a++) {
        var r = t[a];
        0 !== _[r] && (o = !1);
      }
      o && (s.splice(n--, 1), (e = i((i.s = t[0]))));
    }
    return e;
  }
  var t = {},
    _ = { 4: 0 },
    s = [];
  function i(e) {
    if (t[e]) return t[e].exports;
    var n = (t[e] = { i: e, l: !1, exports: {} });
    return l[e].call(n.exports, n, n.exports, i), (n.l = !0), n.exports;
  }
  (i.m = l),
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
  for (var a = 0; a < n.length; a++) e(n[a]);
  var f = o;
  s.push([904, 0]), d();
})({
  672: function (e, n, t) {
    var o = t(673);
    "string" == typeof o && (o = [[e.i, o, ""]]);
    var a = { hmr: !0, transform: void 0, insertInto: void 0 };
    t(12)(o, a);
    o.locals && (e.exports = o.locals);
  },
  673: function (e, n, t) {
    (n = e.exports = t(11)(!1)).push([
      e.i,
      ".index__content__1WCMLExJ {\n  width: 100%;\n  height: 100%;\n  border-radius: 4px;\n  background-color: rgba(0, 0, 0, 0.3);\n  overflow: hidden;\n}\n.index__content-not-DWM__1984C57w {\n  width: 100%;\n  height: 100%;\n  background-color: #2c3144;\n  overflow: hidden;\n}\n.index__header__1t2Th0uE {\n  height: 48px;\n  line-height: 48px;\n  padding-left: 32px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.3);\n  font-weight: 600;\n  font-size: 16px;\n  color: #ffffff;\n  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);\n}\n.index__context__3--08Dhi {\n  padding-top: 30px;\n  text-align: center;\n}\n.index__context__3--08Dhi .index__event__1HnIIbMh {\n  font-size: 16px;\n  color: #ffffff;\n  line-height: 24px;\n  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);\n}\n.index__context__3--08Dhi .index__day__2HhcQSKl {\n  margin-top: 8px;\n  font-size: 100px;\n  color: #ffffff;\n  line-height: 100px;\n  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);\n}\n.index__context__3--08Dhi .index__day__2HhcQSKl span {\n  font-size: 24px;\n  color: #ffffff;\n}\n.index__target-date__NUJjJZY2 {\n  position: absolute;\n  width: 100%;\n  bottom: 8px;\n  left: 0;\n  line-height: 24px;\n  text-align: center;\n  font-size: 14px;\n  color: #ffffff;\n}\n",
      "",
    ]),
      (n.locals = {
        content: "index__content__1WCMLExJ",
        "content-not-DWM": "index__content-not-DWM__1984C57w",
        header: "index__header__1t2Th0uE",
        context: "index__context__3--08Dhi",
        event: "index__event__1HnIIbMh",
        day: "index__day__2HhcQSKl",
        "target-date": "index__target-date__NUJjJZY2",
      });
  },
  904: function (e, n, t) {
    "use strict";
    t.r(n);
    var o = t(0),
      r = t.n(o),
      a = t(18),
      i = t.n(a),
      c = t(24),
      l = t(29),
      d = t(3),
      _ = t.n(d),
      s = t(4),
      f = t.n(s),
      u = t(5),
      p = t.n(u),
      x = t(6),
      h = t.n(x),
      m = t(2),
      v = t.n(m),
      g = t(8),
      y = t.n(g),
      w = t(38),
      b = t(7),
      M = (t(672), t(13)),
      D = t.n(M),
      E = {
        "./index.less": {
          content: "index__content__1WCMLExJ",
          "content-not-DWM": "index__content-not-DWM__1984C57w",
          header: "index__header__1t2Th0uE",
          context: "index__context__3--08Dhi",
          event: "index__event__1HnIIbMh",
          day: "index__day__2HhcQSKl",
          "target-date": "index__target-date__NUJjJZY2",
        },
      };
    function S(o) {
      var a = (function () {
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
          n = v()(o);
        if (a) {
          var t = v()(this).constructor;
          e = Reflect.construct(n, arguments, t);
        } else e = n.apply(this, arguments);
        return h()(this, e);
      };
    }
    D.a.locale("zh-cn");
    var T = (function (e) {
        p()(a, e);
        var o = S(a);
        function a() {
          var r;
          _()(this, a);
          for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++)
            n[t] = arguments[t];
          return (
            ((r = o.call.apply(o, [this].concat(n))).state = {
              day: -1,
              event: "",
              boxStyle: window.DWMOpenState ? "content" : "content-not-DWM",
            }),
            (r.interval = null),
            (r.listenMessage = function () {
              b.a.on("countdownMessage", function (e) {
                var n = new Date(1e3 * e.commandParams.endDate),
                  t = r.computeDay(e.systemTime, e.commandParams.endDate);
                r.setCountdownTask(1e3 * e.systemTime),
                  w.a.info("倒计日开始：", t + "天"),
                  r.setState({
                    day: t,
                    event: e.commandParams.events,
                    targetDate: "".concat(D()(n).format("YYYY年MM月DD日")),
                  });
              }),
                b.a.on("DWMOpenState", function (e) {
                  "content" === r.state.boxStyle &&
                    r.setState({ boxStyle: e ? "content" : "content-not-DWM" });
                });
            }),
            (r.setCountdownTask = function (e) {
              var n = new Date(e),
                t = n.toLocaleDateString(),
                o = new Date(t).getTime() + 864e5,
                a = o - n.getTime();
              w.a.info("倒计日倒计时计算", {
                day: r.state.day,
                intervalTime: a,
              }),
                clearTimeout(r.interval),
                (r.interval = setTimeout(function () {
                  0 === r.state.day
                    ? r.closeWindow()
                    : (r.setState({ day: r.state.day - 1 }),
                      r.setCountdownTask(o));
                }, a));
            }),
            (r.closeWindow = function () {
              b.a.send("windowControl", {
                typeName: "close",
                windowName: window.windowName,
              });
            }),
            (r.getMessageFromNode = function () {
              b.a.send("getCountdownMessage", "");
            }),
            r
          );
        }
        return (
          f()(a, [
            {
              key: "computeDay",
              value: function (e, n) {
                var t = n - e;
                return Math.floor(t / 86400);
              },
            },
            {
              key: "componentDidMount",
              value: function () {
                this.listenMessage(), this.getMessageFromNode();
              },
            },
            {
              key: "render",
              value: function () {
                var e = this.state,
                  n = e.day,
                  t = e.event,
                  o = e.boxStyle;
                return (
                  0 <= n &&
                  r.a.createElement(
                    "div",
                    { className: y()(o, E) },
                    r.a.createElement(
                      "div",
                      { className: "index__header__1t2Th0uE" },
                      r.a.createElement("p", null, "倒计日")
                    ),
                    r.a.createElement(
                      "div",
                      { className: "index__context__3--08Dhi" },
                      r.a.createElement(
                        "p",
                        { className: "index__event__1HnIIbMh" },
                        "距离",
                        t,
                        "仅有"
                      ),
                      r.a.createElement(
                        "p",
                        { className: "index__day__2HhcQSKl" },
                        n,
                        r.a.createElement("span", null, "天")
                      )
                    ),
                    r.a.createElement(
                      "div",
                      { className: "index__target-date__NUJjJZY2" },
                      r.a.createElement(
                        "p",
                        null,
                        "目标日期：",
                        this.state.targetDate
                      )
                    )
                  )
                );
              },
            },
          ]),
          a
        );
      })(o.PureComponent),
      N = t(21);
    t(30);
    var O,
      j = Object(l.a)("countdown");
    (O = T),
      i.a.render(
        r.a.createElement(
          c.a,
          { store: j },
          r.a.createElement(N.a, null, r.a.createElement(O, null))
        ),
        document.getElementById("root")
      );
  },
});
