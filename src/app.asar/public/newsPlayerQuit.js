!(function (c) {
  function e(e) {
    for (
      var n, t, o = e[0], r = e[1], i = e[2], a = 0, l = [];
      a < o.length;
      a++
    )
      (t = o[a]),
        Object.prototype.hasOwnProperty.call(f, t) && f[t] && l.push(f[t][0]),
        (f[t] = 0);
    for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (c[n] = r[n]);
    for (_ && _(e); l.length; ) l.shift()();
    return u.push.apply(u, i || []), d();
  }
  function d() {
    for (var e, n = 0; n < u.length; n++) {
      for (var t = u[n], o = !0, r = 1; r < t.length; r++) {
        var i = t[r];
        0 !== f[i] && (o = !1);
      }
      o && (u.splice(n--, 1), (e = a((a.s = t[0]))));
    }
    return e;
  }
  var t = {},
    f = { 23: 0 },
    u = [];
  function a(e) {
    if (t[e]) return t[e].exports;
    var n = (t[e] = { i: e, l: !1, exports: {} });
    return c[e].call(n.exports, n, n.exports, a), (n.l = !0), n.exports;
  }
  (a.m = c),
    (a.c = t),
    (a.d = function (e, n, t) {
      a.o(e, n) || Object.defineProperty(e, n, { enumerable: !0, get: t });
    }),
    (a.r = function (e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (a.t = function (n, e) {
      if ((1 & e && (n = a(n)), 8 & e)) return n;
      if (4 & e && 'object' == typeof n && n && n.__esModule) return n;
      var t = Object.create(null);
      if (
        (a.r(t),
        Object.defineProperty(t, 'default', { enumerable: !0, value: n }),
        2 & e && 'string' != typeof n)
      )
        for (var o in n)
          a.d(
            t,
            o,
            function (e) {
              return n[e];
            }.bind(null, o)
          );
      return t;
    }),
    (a.n = function (e) {
      var n =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return a.d(n, 'a', n), n;
    }),
    (a.o = function (e, n) {
      return Object.prototype.hasOwnProperty.call(e, n);
    }),
    (a.p = '');
  var n = (window.webpackJsonp = window.webpackJsonp || []),
    o = n.push.bind(n);
  (n.push = e), (n = n.slice());
  for (var r = 0; r < n.length; r++) e(n[r]);
  var _ = o;
  u.push([915, 0]), d();
})({
  784: function (e, n, t) {
    var o = t(785);
    'string' == typeof o && (o = [[e.i, o, '']]);
    var r = { hmr: !0, transform: void 0, insertInto: void 0 };
    t(12)(o, r);
    o.locals && (e.exports = o.locals);
  },
  785: function (e, n, t) {
    var o = t(27);
    (n = e.exports = t(11)(!1)).push([
      e.i,
      '.index__button__3b3Zgfqo {\n  width: 116px;\n  height: 48px;\n  border: 2px solid rgba(255, 255, 255, 0.5);\n  border-radius: 24px;\n  font-size: 18px;\n  color: #ffffff;\n  margin-right: 16px;\n}\n.index__button__3b3Zgfqo .index__icon__1UyHKEdj {\n  float: left;\n  width: 22.5px;\n  height: 21px;\n  margin: 11.5px 8px 0 22.5px;\n  background-image: url(' +
        o(t(135)) +
        ');\n  background-position: center;\n  background-size: contain;\n  background-repeat: no-repeat;\n}\n.index__button__3b3Zgfqo p {\n  float: left;\n  line-height: 44px;\n}\n.index__bottom-fence__2lF50wJY {\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: right;\n          flex-direction: right;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n}\n.index__bottom-fence__2lF50wJY.index__color__2sGLFM7n {\n  background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0)), to(rgba(0, 0, 0, 0.7)));\n  background-image: -o-linear-gradient(top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 100%);\n  background-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 100%);\n}\n',
      '',
    ]),
      (n.locals = {
        button: 'index__button__3b3Zgfqo',
        icon: 'index__icon__1UyHKEdj',
        'bottom-fence': 'index__bottom-fence__2lF50wJY',
        color: 'index__color__2sGLFM7n',
      });
  },
  915: function (e, n, t) {
    'use strict';
    t.r(n);
    var o = t(0),
      r = t.n(o),
      i = t(18),
      a = t.n(i),
      l = t(8),
      c = t.n(l),
      d = t(19),
      f = t(7),
      u =
        (t(784),
        {
          './index.less': {
            button: 'index__button__3b3Zgfqo',
            icon: 'index__icon__1UyHKEdj',
            'bottom-fence': 'index__bottom-fence__2lF50wJY',
            color: 'index__color__2sGLFM7n',
          },
        });
    function _() {
      return r.a.createElement(
        'div',
        { className: c()('bottom-fence color', u) },
        r.a.createElement(
          'div',
          { className: 'index__button__3b3Zgfqo' },
          r.a.createElement(d.a, {
            activeStyle: 'scale',
            onClick: function () {
              f.a.send('quitNewsPlayer');
            },
          }),
          r.a.createElement('div', { className: 'index__icon__1UyHKEdj' }),
          r.a.createElement('p', null, '退出')
        )
      );
    }
    var b = t(24),
      p = t(29),
      s = t(21);
    t(30);
    var g,
      x = Object(p.a)('screenLock');
    (g = _),
      a.a.render(
        r.a.createElement(
          b.a,
          { store: x },
          r.a.createElement(s.a, null, r.a.createElement(g, null))
        ),
        document.getElementById('root')
      );
  },
});
