!(function (c) {
  function e(e) {
    for (
      var n, t, r = e[0], o = e[1], a = e[2], i = 0, l = [];
      i < r.length;
      i++
    )
      (t = r[i]),
        Object.prototype.hasOwnProperty.call(f, t) && f[t] && l.push(f[t][0]),
        (f[t] = 0);
    for (n in o) Object.prototype.hasOwnProperty.call(o, n) && (c[n] = o[n]);
    for (s && s(e); l.length; ) l.shift()();
    return p.push.apply(p, a || []), u();
  }
  function u() {
    for (var e, n = 0; n < p.length; n++) {
      for (var t = p[n], r = !0, o = 1; o < t.length; o++) {
        var a = t[o];
        0 !== f[a] && (r = !1);
      }
      r && (p.splice(n--, 1), (e = i((i.s = t[0]))));
    }
    return e;
  }
  var t = {},
    f = { 19: 0 },
    p = [];
  function i(e) {
    if (t[e]) return t[e].exports;
    var n = (t[e] = { i: e, l: !1, exports: {} });
    return c[e].call(n.exports, n, n.exports, i), (n.l = !0), n.exports;
  }
  (i.m = c),
    (i.c = t),
    (i.d = function (e, n, t) {
      i.o(e, n) || Object.defineProperty(e, n, { enumerable: !0, get: t });
    }),
    (i.r = function (e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (i.t = function (n, e) {
      if ((1 & e && (n = i(n)), 8 & e)) return n;
      if (4 & e && 'object' == typeof n && n && n.__esModule) return n;
      var t = Object.create(null);
      if (
        (i.r(t),
        Object.defineProperty(t, 'default', { enumerable: !0, value: n }),
        2 & e && 'string' != typeof n)
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
      return i.d(n, 'a', n), n;
    }),
    (i.o = function (e, n) {
      return Object.prototype.hasOwnProperty.call(e, n);
    }),
    (i.p = '');
  var n = (window.webpackJsonp = window.webpackJsonp || []),
    r = n.push.bind(n);
  (n.push = e), (n = n.slice());
  for (var o = 0; o < n.length; o++) e(n[o]);
  var s = r;
  p.push([897, 0]), u();
})({
  748: function (e, n, t) {
    var r = t(749);
    'string' == typeof r && (r = [[e.i, r, '']]);
    var o = { hmr: !0, transform: void 0, insertInto: void 0 };
    t(12)(r, o);
    r.locals && (e.exports = r.locals);
  },
  749: function (e, n, t) {
    (n = e.exports = t(11)(!1)).push([
      e.i,
      '.index__container__3eVxKK5N {\n  background: rgba(0, 0, 0, 0.7);\n  border-radius: 12px;\n  padding: 10px 32px;\n  font-size: 32px;\n  color: #ffffff;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n',
      '',
    ]),
      (n.locals = { container: 'index__container__3eVxKK5N' });
  },
  897: function (e, n, t) {
    'use strict';
    t.r(n);
    var o = t(0),
      a = t.n(o),
      r = t(18),
      i = t.n(r),
      l = t(17),
      c = t.n(l);
    t(748);
    function u(e) {
      var n = e.text;
      return a.a.createElement(
        'div',
        {
          className: 'index__container__3eVxKK5N',
          style: { WebkitAppRegion: 'no-drag' },
        },
        n
      );
    }
    var f = function () {
        var e = Object(o.useState)(''),
          n = c()(e, 2),
          t = n[0],
          r = n[1];
        return (
          Object(o.useEffect)(function () {
            var e, n;
            r(
              decodeURIComponent(
                null !==
                  (n =
                    null === (e = window.urlParams) || void 0 === e
                      ? void 0
                      : e.message) && void 0 !== n
                  ? n
                  : ''
              )
            );
          }, []),
          a.a.createElement(u, { text: t })
        );
      },
      p = (f = Object(o.memo)(f)),
      s = t(21);
    t(30);
    var d;
    (d = p),
      i.a.render(
        a.a.createElement(
          s.a,
          { needReloadForPortRenew: !0 },
          a.a.createElement(d, null)
        ),
        document.getElementById('root')
      );
  },
});
