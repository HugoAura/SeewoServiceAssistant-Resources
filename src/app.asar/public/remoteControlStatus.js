!(function (u) {
  function e(e) {
    for (
      var n, t, r = e[0], o = e[1], c = e[2], i = 0, a = [];
      i < r.length;
      i++
    )
      (t = r[i]),
        Object.prototype.hasOwnProperty.call(f, t) && f[t] && a.push(f[t][0]),
        (f[t] = 0);
    for (n in o) Object.prototype.hasOwnProperty.call(o, n) && (u[n] = o[n]);
    for (p && p(e); a.length; ) a.shift()();
    return s.push.apply(s, c || []), l();
  }
  function l() {
    for (var e, n = 0; n < s.length; n++) {
      for (var t = s[n], r = !0, o = 1; o < t.length; o++) {
        var c = t[o];
        0 !== f[c] && (r = !1);
      }
      r && (s.splice(n--, 1), (e = i((i.s = t[0]))));
    }
    return e;
  }
  var t = {},
    f = { 32: 0 },
    s = [];
  function i(e) {
    if (t[e]) return t[e].exports;
    var n = (t[e] = { i: e, l: !1, exports: {} });
    return u[e].call(n.exports, n, n.exports, i), (n.l = !0), n.exports;
  }
  (i.m = u),
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
        for (var r in n)
          i.d(
            t,
            r,
            function (e) {
              return n[e];
            }.bind(null, r)
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
    r = n.push.bind(n);
  (n.push = e), (n = n.slice());
  for (var o = 0; o < n.length; o++) e(n[o]);
  var p = r;
  s.push([922, 0]), l();
})({
  824: function (e, n, t) {
    var r = t(825);
    "string" == typeof r && (r = [[e.i, r, ""]]);
    var o = { hmr: !0, transform: void 0, insertInto: void 0 };
    t(12)(r, o);
    r.locals && (e.exports = r.locals);
  },
  825: function (e, n, t) {
    (n = e.exports = t(11)(!1)).push([
      e.i,
      ".index__container__Avg70JwL {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  position: relative;\n  border-radius: 20px;\n  width: 100%;\n  height: 100%;\n  color: #FFFFFF;\n  font-size: 14px;\n  background-color: rgba(0, 0, 0, 0.3);\n}\n.index__container__Avg70JwL .index__circle__2ZpxJuF9 {\n  margin-right: 8px;\n  border-radius: 50%;\n  width: 8px;\n  height: 8px;\n  background-color: #EB4240;\n}\n",
      "",
    ]),
      (n.locals = {
        container: "index__container__Avg70JwL",
        circle: "index__circle__2ZpxJuF9",
      });
  },
  922: function (e, n, t) {
    "use strict";
    t.r(n);
    var r = t(0),
      i = t.n(r),
      o = t(18),
      c = t.n(o),
      a = t(3),
      u = t.n(a),
      l = t(4),
      f = t.n(l),
      s = t(5),
      p = t.n(s),
      d = t(6),
      v = t.n(d),
      b = t(2),
      h = t.n(b),
      _ = t(7);
    t(824);
    function y(r) {
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
        } catch (e) {
          return !1;
        }
      })();
      return function () {
        var e,
          n = h()(r);
        if (o) {
          var t = h()(this).constructor;
          e = Reflect.construct(n, arguments, t);
        } else e = n.apply(this, arguments);
        return v()(this, e);
      };
    }
    var x = (function (e) {
        p()(c, e);
        var o = y(c);
        function c() {
          var e;
          u()(this, c);
          for (var n = arguments.length, t = new Array(n), r = 0; r < n; r++)
            t[r] = arguments[r];
          return (
            ((e = o.call.apply(
              o,
              [this].concat(t)
            )).handleSubscribeWebsocketEvent = function () {
              _.a.on("remoteControlStatus", function () {});
            }),
            e
          );
        }
        return (
          f()(c, [
            {
              key: "componentDidMount",
              value: function () {
                this.handleSubscribeWebsocketEvent();
              },
            },
            {
              key: "render",
              value: function () {
                return i.a.createElement(
                  "div",
                  { className: "index__container__Avg70JwL" },
                  i.a.createElement("span", {
                    className: "index__circle__2ZpxJuF9",
                  }),
                  "远程中"
                );
              },
            },
          ]),
          c
        );
      })(r.PureComponent),
      g = t(21);
    t(30);
    var m;
    (m = x),
      c.a.render(
        i.a.createElement(
          g.a,
          { needReloadForPortRenew: !0 },
          i.a.createElement(m, null)
        ),
        document.getElementById("root")
      );
  },
});
