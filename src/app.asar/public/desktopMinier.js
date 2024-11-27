!(function (l) {
  function n(n) {
    for (
      var e, t, o = n[0], r = n[1], i = n[2], a = 0, s = [];
      a < o.length;
      a++
    )
      (t = o[a]),
        Object.prototype.hasOwnProperty.call(c, t) && c[t] && s.push(c[t][0]),
        (c[t] = 0);
    for (e in r) Object.prototype.hasOwnProperty.call(r, e) && (l[e] = r[e]);
    for (f && f(n); s.length; ) s.shift()();
    return d.push.apply(d, i || []), u();
  }
  function u() {
    for (var n, e = 0; e < d.length; e++) {
      for (var t = d[e], o = !0, r = 1; r < t.length; r++) {
        var i = t[r];
        0 !== c[i] && (o = !1);
      }
      o && (d.splice(e--, 1), (n = a((a.s = t[0]))));
    }
    return n;
  }
  var t = {},
    c = { 7: 0 },
    d = [];
  function a(n) {
    if (t[n]) return t[n].exports;
    var e = (t[n] = { i: n, l: !1, exports: {} });
    return l[n].call(e.exports, e, e.exports, a), (e.l = !0), e.exports;
  }
  (a.m = l),
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
  for (var r = 0; r < e.length; r++) n(e[r]);
  var f = o;
  d.push([905, 0]), u();
})({
  687: function (n, e, t) {
    var o = t(688);
    "string" == typeof o && (o = [[n.i, o, ""]]);
    var r = { hmr: !0, transform: void 0, insertInto: void 0 };
    t(12)(o, r);
    o.locals && (n.exports = o.locals);
  },
  688: function (n, e, t) {
    var o = t(27);
    (e = n.exports = t(11)(!1)).push([
      n.i,
      ".index__box__3FOdoQsq {\n  position: relative;\n  margin: 0 auto;\n  top: 50%;\n  width: 56px;\n  height: 56px;\n  cursor: pointer;\n  -webkit-transition: all 0.5s ease-in-out;\n  -o-transition: all 0.5s ease-in-out;\n  transition: all 0.5s ease-in-out;\n  overflow: hidden;\n}\n.index__box__3FOdoQsq.index__show__-uGFlwYS {\n  -webkit-box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.25);\n          box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.25);\n  background: #3da4ff;\n  -webkit-transform: translateY(-50%) scale(1);\n      -ms-transform: translateY(-50%) scale(1);\n          transform: translateY(-50%) scale(1);\n  border-radius: 28px;\n  opacity: 1;\n}\n.index__box__3FOdoQsq.index__hide__MzdCkJQC {\n  -webkit-transform: translateY(-50%) scale(0.5);\n      -ms-transform: translateY(-50%) scale(0.5);\n          transform: translateY(-50%) scale(0.5);\n  border-radius: 0px;\n  background: transparent;\n  opacity: 0;\n}\n.index__box__3FOdoQsq div {\n  position: relative;\n  -webkit-transition: all 1s;\n  -o-transition: all 1s;\n  transition: all 1s;\n  top: 54%;\n  margin: 0 auto;\n  -webkit-transform: translateY(-50%);\n      -ms-transform: translateY(-50%);\n          transform: translateY(-50%);\n  width: 32px;\n  height: 32px;\n  background: url(" +
        o(t(358)) +
        ");\n  background-size: cover;\n  background-position: center;\n}\n",
      "",
    ]),
      (e.locals = {
        box: "index__box__3FOdoQsq",
        show: "index__show__-uGFlwYS",
        hide: "index__hide__MzdCkJQC",
      });
  },
  905: function (n, e, t) {
    "use strict";
    t.r(e);
    var o = t(0),
      r = t.n(o),
      i = t(18),
      a = t.n(i),
      s = t(3),
      l = t.n(s),
      u = t(4),
      c = t.n(u),
      d = t(5),
      f = t.n(d),
      p = t(6),
      h = t.n(p),
      v = t(2),
      _ = t.n(v),
      w = t(8),
      m = t.n(w),
      b = (t(687), t(7)),
      x = {
        "./index.less": {
          box: "index__box__3FOdoQsq",
          show: "index__show__-uGFlwYS",
          hide: "index__hide__MzdCkJQC",
        },
      };
    function y(o) {
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
        } catch (n) {
          return !1;
        }
      })();
      return function () {
        var n,
          e = _()(o);
        if (r) {
          var t = _()(this).constructor;
          n = Reflect.construct(e, arguments, t);
        } else n = e.apply(this, arguments);
        return h()(this, n);
      };
    }
    var g = (function (n) {
        f()(i, n);
        var o = y(i);
        function i() {
          var r;
          l()(this, i);
          for (var n = arguments.length, e = new Array(n), t = 0; t < n; t++)
            e[t] = arguments[t];
          return (
            ((r = o.call.apply(o, [this].concat(e))).state = { show: !1 }),
            (r.startTime = 0),
            (r.oldClientX = 0),
            (r.oldClientY = 0),
            (r.clickDown = !1),
            (r.move = !1),
            (r.setShow = function () {
              r.setState({ show: !0 });
            }),
            (r.handleMouseDown = function (e) {
              return function (n) {
                (r.move = !1),
                  (r.clickDown = !0),
                  "touch" === e
                    ? ((r.clientX = n.touches[0].pageX),
                      (r.clientY = n.touches[0].pageY))
                    : ((r.clientX = n.clientX), (r.clientY = n.clientY));
              };
            }),
            (r.handleMouseUp = function () {
              (r.clickDown = !1),
                r.move
                  ? ((r.move = !1),
                    b.a.send("autoSetPosition", "desktopMinier"))
                  : r.setState({ show: !1 }, function () {
                      setTimeout(function () {
                        b.a.send("desktopAssistantShow"),
                          b.a.send("windowControl", {
                            typeName: "destroy",
                            windowName: "desktopMinier",
                          });
                      }, 500);
                    });
            }),
            (r.handleMove = function (o) {
              return function (n) {
                var e, t;
                (t =
                  "touch" === o
                    ? ((e = n.touches[0].pageX - r.clientX),
                      n.touches[0].pageY - r.clientY)
                    : ((e = n.clientX - r.clientX), n.clientY - r.clientY)),
                  r.clickDown &&
                    (b.a.send("minierMove", {
                      x: e,
                      y: t,
                      windowName: "desktopMinier",
                    }),
                    (r.move = !0));
              };
            }),
            r
          );
        }
        return (
          c()(i, [
            {
              key: "componentDidMount",
              value: function () {
                var e = this;
                setTimeout(function () {
                  e.setShow();
                }, 0),
                  document.addEventListener("mousemove", function (n) {
                    e.handleMove()(n);
                  }),
                  document.addEventListener("touchmove", function (n) {
                    e.handleMove("touch")(n);
                  });
              },
            },
            {
              key: "render",
              value: function () {
                var n = this.state.show;
                return r.a.createElement(
                  "div",
                  {
                    onMouseDown: this.handleMouseDown(),
                    draggable: "true",
                    onTouchStart: this.handleMouseDown("touch"),
                    onTouchEnd: this.handleMouseUp,
                    onMouseUp: this.handleMouseUp,
                    className: m()(n ? "box show" : "box hide", x),
                  },
                  r.a.createElement("div", null)
                );
              },
            },
          ]),
          i
        );
      })(o.PureComponent),
      k = t(21);
    t(30);
    var M;
    (M = g),
      a.a.render(
        r.a.createElement(k.a, null, r.a.createElement(M, null)),
        document.getElementById("root")
      );
  },
});
