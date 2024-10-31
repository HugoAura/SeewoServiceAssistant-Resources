!(function (o) {
  function e(e) {
    for (
      var n, t, r = e[0], a = e[1], s = e[2], _ = 0, c = [];
      _ < r.length;
      _++
    )
      (t = r[_]),
        Object.prototype.hasOwnProperty.call(l, t) && l[t] && c.push(l[t][0]),
        (l[t] = 0);
    for (n in a) Object.prototype.hasOwnProperty.call(a, n) && (o[n] = a[n]);
    for (v && v(e); c.length; ) c.shift()();
    return p.push.apply(p, s || []), i();
  }
  function i() {
    for (var e, n = 0; n < p.length; n++) {
      for (var t = p[n], r = !0, a = 1; a < t.length; a++) {
        var s = t[a];
        0 !== l[s] && (r = !1);
      }
      r && (p.splice(n--, 1), (e = _((_.s = t[0]))));
    }
    return e;
  }
  var t = {},
    l = { 36: 0 },
    p = [];
  function _(e) {
    if (t[e]) return t[e].exports;
    var n = (t[e] = { i: e, l: !1, exports: {} });
    return o[e].call(n.exports, n, n.exports, _), (n.l = !0), n.exports;
  }
  (_.m = o),
    (_.c = t),
    (_.d = function (e, n, t) {
      _.o(e, n) || Object.defineProperty(e, n, { enumerable: !0, get: t });
    }),
    (_.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (_.t = function (n, e) {
      if ((1 & e && (n = _(n)), 8 & e)) return n;
      if (4 & e && "object" == typeof n && n && n.__esModule) return n;
      var t = Object.create(null);
      if (
        (_.r(t),
        Object.defineProperty(t, "default", { enumerable: !0, value: n }),
        2 & e && "string" != typeof n)
      )
        for (var r in n)
          _.d(
            t,
            r,
            function (e) {
              return n[e];
            }.bind(null, r)
          );
      return t;
    }),
    (_.n = function (e) {
      var n =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return _.d(n, "a", n), n;
    }),
    (_.o = function (e, n) {
      return Object.prototype.hasOwnProperty.call(e, n);
    }),
    (_.p = "");
  var n = (window.webpackJsonp = window.webpackJsonp || []),
    r = n.push.bind(n);
  (n.push = e), (n = n.slice());
  for (var a = 0; a < n.length; a++) e(n[a]);
  var v = r;
  p.push([894, 0]), i();
})({
  832: function (e, n, t) {
    var r = t(833);
    "string" == typeof r && (r = [[e.i, r, ""]]);
    var a = { hmr: !0, transform: void 0, insertInto: void 0 };
    t(12)(r, a);
    r.locals && (e.exports = r.locals);
  },
  833: function (e, n, t) {
    (n = e.exports = t(11)(!1)).push([
      e.i,
      ".screensaver__box__1OePhc5d {\n  width: 100%;\n  height: 100%;\n}\n.screensaver__pic__8cT9rIA4 {\n  width: 100%;\n  height: 100%;\n}\n.screensaver__content__yS4t1Kbz {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  display: inline-block;\n  width: 100%;\n  z-index: 10000;\n  text-align: center;\n  padding-bottom: 56px;\n}\n.screensaver__content__yS4t1Kbz .screensaver__time__3oTP2CWb {\n  margin-bottom: 42px;\n}\n.screensaver__content__yS4t1Kbz .screensaver__time__3oTP2CWb p:first-child {\n  font-size: 78px;\n  color: #ffffff;\n  letter-spacing: 0;\n  text-align: center;\n  line-height: 78px;\n  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);\n}\n.screensaver__content__yS4t1Kbz .screensaver__time__3oTP2CWb p:last-child {\n  margin-top: 16px;\n  font-size: 24px;\n  color: #ffffff;\n  letter-spacing: 0;\n  text-align: center;\n  line-height: 24px;\n  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);\n}\n.screensaver__content__yS4t1Kbz .screensaver__time__3oTP2CWb span {\n  margin-right: 12px;\n}\n.screensaver__content__yS4t1Kbz .screensaver__artical__HvQxa5xp {\n  margin: 0 auto;\n  width: 1000px;\n}\n.screensaver__content__yS4t1Kbz .screensaver__artical__HvQxa5xp .screensaver__line__371_qiJT {\n  display: block;\n  width: 100%;\n  height: 1px;\n  background: rgba(255, 255, 255, 0.3);\n  -webkit-box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.3);\n          box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.3);\n}\n.screensaver__content__yS4t1Kbz .screensaver__artical__HvQxa5xp .screensaver__line__371_qiJT.screensaver__top__1zCv-FPq {\n  margin-bottom: 24px;\n}\n.screensaver__content__yS4t1Kbz .screensaver__artical__HvQxa5xp .screensaver__line__371_qiJT.screensaver__bottom__2TtkXp5A {\n  margin-top: 24px;\n}\n.screensaver__content__yS4t1Kbz .screensaver__artical__HvQxa5xp .screensaver__word__1JUEmrs6 {\n  font-size: 32px;\n  color: #ffffff;\n  letter-spacing: 0;\n  text-align: center;\n  line-height: 48px;\n  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);\n}\n.screensaver__content__yS4t1Kbz .screensaver__artical__HvQxa5xp .screensaver__origin__3EEEaZxo {\n  margin-top: 12px;\n  font-size: 24px;\n  color: #ffffff;\n  letter-spacing: 0;\n  text-align: center;\n  line-height: 24px;\n  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);\n}\n.screensaver__content__yS4t1Kbz .screensaver__from__ErHJAK6t {\n  position: absolute;\n  right: 24px;\n  bottom: 24px;\n  font-size: 12px;\n  color: rgba(255, 255, 255, 0.7);\n  letter-spacing: 0;\n  text-align: center;\n  line-height: 12px;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);\n  display: inline-block;\n}\n",
      "",
    ]),
      (n.locals = {
        box: "screensaver__box__1OePhc5d",
        pic: "screensaver__pic__8cT9rIA4",
        content: "screensaver__content__yS4t1Kbz",
        time: "screensaver__time__3oTP2CWb",
        artical: "screensaver__artical__HvQxa5xp",
        line: "screensaver__line__371_qiJT",
        top: "screensaver__top__1zCv-FPq",
        bottom: "screensaver__bottom__2TtkXp5A",
        word: "screensaver__word__1JUEmrs6",
        origin: "screensaver__origin__3EEEaZxo",
        from: "screensaver__from__ErHJAK6t",
      });
  },
  894: function (e, n, t) {
    "use strict";
    t.r(n);
    var N = t(0),
      q = t.n(N),
      r = t(18),
      a = t.n(r),
      s = t(17),
      Q = t.n(s),
      _ = t(115),
      L = t.n(_),
      W = (t(832), t(7)),
      c = t(13),
      m = t.n(c);
    m.a.locale("zh-cn");
    function Y(e) {
      function n() {
        var e = m()();
        l(e.format("HH:mm")), _(e.format(t)), u(e.format("dddd"));
      }
      var t = 0 < arguments.length && void 0 !== e ? e : "YYYY/MM/DD",
        r = Object(N.useState)(""),
        a = Q()(r, 2),
        s = a[0],
        _ = a[1],
        c = Object(N.useState)(""),
        o = Q()(c, 2),
        i = o[0],
        l = o[1],
        p = Object(N.useState)(""),
        v = Q()(p, 2),
        f = v[0],
        u = v[1];
      return (
        Object(N.useEffect)(function () {
          return (
            n(),
            (b = setInterval(function () {
              n();
            }, 6e4)),
            function () {
              clearInterval(b);
            }
          );
        }, []),
        { time: i, day: f, date: s }
      );
    }
    var b = null;
    var D = ["contain", "cover"],
      F = window._ACCEPT_DATA,
      o = function () {
        function e(e) {
          y(e.materialSource || ""),
            f(1e3 * (e.switchInterval || 15)),
            x(D[e.pictureSizeType || 0]),
            s(
              e.imageList.map(function (e) {
                return e.replace(/\\/g, "\\\\");
              }) || []
            ),
            C(e.textList || []);
        }
        function n(e) {
          M(e);
        }
        var t = Object(N.useState)([]),
          r = Q()(t, 2),
          a = r[0],
          s = r[1],
          _ = Object(N.useState)(0),
          c = Q()(_, 2),
          o = c[0],
          i = c[1],
          l = Object(N.useState)(),
          p = Q()(l, 2),
          v = p[0],
          f = p[1],
          u = Object(N.useState)(),
          m = Q()(u, 2),
          b = m[0],
          x = m[1],
          d = Object(N.useState)("希沃集控"),
          g = Q()(d, 2),
          h = g[0],
          y = g[1],
          E = Y(),
          S = E.time,
          O = E.date,
          w = E.day,
          z = Object(N.useState)(-1),
          T = Q()(z, 2),
          j = T[0],
          P = T[1],
          K = Object(N.useState)([]),
          A = Q()(K, 2),
          J = A[0],
          C = A[1],
          H = Object(N.useState)([]),
          k = Q()(H, 2),
          I = k[0],
          M = k[1];
        return (
          Object(N.useEffect)(function () {
            return (
              F.getAndRegister("screensaverTransitionList", n),
              F.getAndRegister("screensaverMessage", e),
              function () {
                F.removeOne("screensaverMessage", e),
                  F.removeOne("screensaverTransitionList", n);
              }
            );
          }, []),
          q.a.createElement(
            "div",
            {
              className: "screensaver__box__1OePhc5d",
              onClick: function () {
                W.a.send("closeScreenSaver");
              },
            },
            q.a.createElement(
              "div",
              { className: "screensaver__pic__8cT9rIA4" },
              q.a.createElement(L.a, {
                imagesList: a,
                imageSize: b,
                feedbackIndex: function (e) {
                  i(e), console.log(o);
                  for (var n = j, t = 0; t <= 5 && n === j; )
                    (n = Math.floor(Math.random() * J.length)), t++;
                  P(n);
                },
                timeInterval: v,
                transitionCustomList: I,
                transitionsStyle: "fadeIn",
                isLocal: !0,
              })
            ),
            q.a.createElement(
              "div",
              { className: "screensaver__content__yS4t1Kbz" },
              q.a.createElement(
                "div",
                { className: "screensaver__time__3oTP2CWb" },
                q.a.createElement("p", null, S),
                q.a.createElement(
                  "p",
                  null,
                  q.a.createElement("span", null, O),
                  w
                )
              ),
              0 < J.length &&
                0 <= j &&
                q.a.createElement(
                  "div",
                  { className: "screensaver__artical__HvQxa5xp" },
                  q.a.createElement("span", {
                    className:
                      "screensaver__line__371_qiJT screensaver__top__1zCv-FPq",
                  }),
                  q.a.createElement(
                    "p",
                    { className: "screensaver__word__1JUEmrs6" },
                    J[j].content
                  ),
                  J[j].provenance &&
                    q.a.createElement(
                      "p",
                      { className: "screensaver__origin__3EEEaZxo" },
                      "- ",
                      J[j].provenance,
                      " -"
                    ),
                  q.a.createElement("span", {
                    className:
                      "screensaver__line__371_qiJT screensaver__bottom__2TtkXp5A",
                  })
                ),
              q.a.createElement(
                "div",
                { className: "screensaver__from__ErHJAK6t" },
                h && q.a.createElement("p", null, h)
              )
            )
          )
        );
      },
      i = (o = Object(N.memo)(o)),
      l = t(24),
      p = t(29),
      v = t(22);
    t(30);
    var f,
      u = Object(p.a)("screensaver");
    (f = i),
      a.a.render(
        q.a.createElement(
          l.a,
          { store: u },
          q.a.createElement(v.a, null, q.a.createElement(f, null))
        ),
        document.getElementById("root")
      );
  },
});
