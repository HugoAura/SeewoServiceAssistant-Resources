!(function (c) {
  function n(n) {
    for (
      var e, t, o = n[0], r = n[1], i = n[2], a = 0, s = [];
      a < o.length;
      a++
    )
      (t = o[a]),
        Object.prototype.hasOwnProperty.call(u, t) && u[t] && s.push(u[t][0]),
        (u[t] = 0);
    for (e in r) Object.prototype.hasOwnProperty.call(r, e) && (c[e] = r[e]);
    for (d && d(n); s.length; ) s.shift()();
    return f.push.apply(f, i || []), l();
  }
  function l() {
    for (var n, e = 0; e < f.length; e++) {
      for (var t = f[e], o = !0, r = 1; r < t.length; r++) {
        var i = t[r];
        0 !== u[i] && (o = !1);
      }
      o && (f.splice(e--, 1), (n = a((a.s = t[0]))));
    }
    return n;
  }
  var t = {},
    u = { 42: 0 },
    f = [];
  function a(n) {
    if (t[n]) return t[n].exports;
    var e = (t[n] = { i: n, l: !1, exports: {} });
    return c[n].call(e.exports, e, e.exports, a), (e.l = !0), e.exports;
  }
  (a.m = c),
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
  var d = o;
  f.push([921, 0]), l();
})({
  863: function (n, e, t) {
    var o = t(864);
    "string" == typeof o && (o = [[n.i, o, ""]]);
    var r = { hmr: !0, transform: void 0, insertInto: void 0 };
    t(12)(o, r);
    o.locals && (n.exports = o.locals);
  },
  864: function (n, e, t) {
    (e = n.exports = t(11)(!1)).push([
      n.i,
      ".index__box__3F-_3Lgz {\n  position: relative;\n  margin: 0 auto;\n  top: 50%;\n  width: 64px;\n  height: 64px;\n  cursor: pointer;\n  -webkit-transition: all 0.5s ease-in-out;\n  -o-transition: all 0.5s ease-in-out;\n  transition: all 0.5s ease-in-out;\n  overflow: hidden;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  padding: 0 16px;\n}\n.index__box__3F-_3Lgz.index__show__3BZfm3oU {\n  -webkit-box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.25);\n          box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.25);\n  background: #3da4ff;\n  -webkit-transform: translateY(-50%) scale(1);\n      -ms-transform: translateY(-50%) scale(1);\n          transform: translateY(-50%) scale(1);\n  border-radius: 32px;\n  opacity: 1;\n}\n.index__box__3F-_3Lgz.index__hide__25qCiv9J {\n  -webkit-transform: translateY(-50%) scale(0.5);\n      -ms-transform: translateY(-50%) scale(0.5);\n          transform: translateY(-50%) scale(0.5);\n  border-radius: 0px;\n  background: transparent;\n  opacity: 0;\n}\n.index__box__3F-_3Lgz span {\n  font-weight: 500;\n  font-size: 16px;\n  color: white;\n}\n",
      "",
    ]),
      (e.locals = {
        box: "index__box__3F-_3Lgz",
        show: "index__show__3BZfm3oU",
        hide: "index__hide__25qCiv9J",
      });
  },
  921: function (n, e, t) {
    "use strict";
    t.r(e);
    var o = t(0),
      r = t.n(o),
      i = t(18),
      a = t.n(i),
      s = t(3),
      c = t.n(s),
      l = t(4),
      u = t.n(l),
      f = t(5),
      d = t.n(f),
      p = t(6),
      h = t.n(p),
      _ = t(2),
      v = t.n(_),
      x = t(8),
      m = t.n(x),
      b = (t(863), t(7)),
      w = {
        "./index.less": {
          box: "index__box__3F-_3Lgz",
          show: "index__show__3BZfm3oU",
          hide: "index__hide__25qCiv9J",
        },
      };
    function g(o) {
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
          e = v()(o);
        if (r) {
          var t = v()(this).constructor;
          n = Reflect.construct(e, arguments, t);
        } else n = e.apply(this, arguments);
        return h()(this, n);
      };
    }
    var y = (function (n) {
        d()(i, n);
        var o = g(i);
        function i() {
          var r;
          c()(this, i);
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
                  ? ((r.move = !1), b.a.send("autoSetPosition", "uipsMinier"))
                  : setTimeout(function () {
                      b.a.send("continueUips");
                    }, 500);
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
                      windowName: "uipsMinier",
                    }),
                    (r.move = !0));
              };
            }),
            r
          );
        }
        return (
          u()(i, [
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
                    className: m()(n ? "box show" : "box hide", w),
                  },
                  r.a.createElement("span", null, "返回校宣")
                );
              },
            },
          ]),
          i
        );
      })(o.PureComponent),
      k = t(22);
    t(30);
    var M;
    (M = y),
      a.a.render(
        r.a.createElement(k.a, null, r.a.createElement(M, null)),
        document.getElementById("root")
      );
  },
});
