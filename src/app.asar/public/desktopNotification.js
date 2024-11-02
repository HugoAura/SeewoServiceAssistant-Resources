!(function (c) {
  function e(e) {
    for (
      var n, t, o = e[0], r = e[1], i = e[2], a = 0, d = [];
      a < o.length;
      a++
    )
      (t = o[a]),
        Object.prototype.hasOwnProperty.call(p, t) && p[t] && d.push(p[t][0]),
        (p[t] = 0);
    for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (c[n] = r[n]);
    for (u && u(e); d.length; ) d.shift()();
    return x.push.apply(x, i || []), l();
  }
  function l() {
    for (var e, n = 0; n < x.length; n++) {
      for (var t = x[n], o = !0, r = 1; r < t.length; r++) {
        var i = t[r];
        0 !== p[i] && (o = !1);
      }
      o && (x.splice(n--, 1), (e = a((a.s = t[0]))));
    }
    return e;
  }
  var t = {},
    p = { 7: 0 },
    x = [];
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
  var u = o;
  x.push([905, 0]), l();
})({
  689: function (e, n, t) {
    var o = t(690);
    'string' == typeof o && (o = [[e.i, o, '']]);
    var r = { hmr: !0, transform: void 0, insertInto: void 0 };
    t(12)(o, r);
    o.locals && (e.exports = o.locals);
  },
  690: function (e, n, t) {
    (n = e.exports = t(11)(!1)).push([
      e.i,
      '.index__box__3Fm2cbMS {\n  width: 100%;\n  height: 100%;\n  border-radius: 4px;\n  background-color: rgba(0, 0, 0, 0.3);\n  overflow: hidden;\n}\n.index__box-not-dwn__UWXd0-Uu {\n  width: 100%;\n  height: 100%;\n  background-color: #2c3144;\n  overflow: hidden;\n}\n.index__header__DLBomZkm {\n  height: 48px;\n  padding-left: 32px;\n  line-height: 48px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n  font-size: 16px;\n  color: #ffffff;\n  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);\n}\n.index__content-box__eWmgmarC {\n  height: calc(100% - 48px);\n  color: white;\n}\n.index__content-box__eWmgmarC div p {\n  word-wrap: break-word;\n  word-break: break-all;\n}\n',
      '',
    ]),
      (n.locals = {
        box: 'index__box__3Fm2cbMS',
        'box-not-dwn': 'index__box-not-dwn__UWXd0-Uu',
        header: 'index__header__DLBomZkm',
        'content-box': 'index__content-box__eWmgmarC',
      });
  },
  905: function (e, n, t) {
    'use strict';
    t.r(n);
    var g = t(0),
      h = t.n(g),
      o = t(18),
      r = t.n(o),
      i = t(24),
      a = t(29),
      d = t(17),
      m = t.n(d),
      c = t(8),
      v = t.n(c),
      w =
        (t(689),
        {
          './index.less': {
            box: 'index__box__3Fm2cbMS',
            'box-not-dwn': 'index__box-not-dwn__UWXd0-Uu',
            header: 'index__header__DLBomZkm',
            'content-box': 'index__content-box__eWmgmarC',
          },
        });
    function l() {
      function e(e) {
        var n;
        e &&
          (c(e.title),
          r(e.content),
          u(
            Object.assign(
              { fontWeight: e.fontWeight, color: e.color },
              (n = e.content.length) < 25
                ? { fontSize: '32px', lineHeight: '48px', padding: '24px 32px' }
                : 25 <= n && n < 50
                ? { fontSize: '24px', lineHeight: '36px', padding: '24px 32px' }
                : 50 <= n && n < 100
                ? { fontSize: '16px', lineHeight: '26px', padding: '12px 32px' }
                : 100 <= n
                ? { fontSize: '12px', lineHeight: '22px', padding: '12px 32px' }
                : { fontSize: '16px', lineHeight: '28px', padding: '12px 32px' }
            )
          ),
          b({ color: e.color, fontWeight: e.fontWeight }));
      }
      var n = Object(g.useState)(''),
        t = m()(n, 2),
        o = t[0],
        r = t[1],
        i = Object(g.useState)(''),
        a = m()(i, 2),
        d = a[0],
        c = a[1],
        l = Object(g.useState)({}),
        p = m()(l, 2),
        x = p[0],
        u = p[1],
        _ = Object(g.useState)({}),
        f = m()(_, 2),
        s = f[0],
        b = f[1];
      return (
        Object(g.useEffect)(function () {
          return (
            y.getAndRegister('desktopNotificationMessage', e),
            function () {
              y.removeOne('desktopNotificationMessage', e);
            }
          );
        }, []),
        h.a.createElement(
          'div',
          { className: v()(window.DWMOpenState ? 'box' : 'box-not-dwn ', w) },
          h.a.createElement(
            'div',
            { className: 'index__header__DLBomZkm', style: s },
            d || '消息通知'
          ),
          h.a.createElement(
            'div',
            { className: 'index__content-box__eWmgmarC' },
            h.a.createElement(
              'div',
              { style: x },
              h.a.createElement('p', null, o)
            )
          )
        )
      );
    }
    var y = window._ACCEPT_DATA,
      p = t(21);
    t(30);
    var x,
      u = Object(a.a)('countdown');
    (x = l),
      r.a.render(
        h.a.createElement(
          i.a,
          { store: u },
          h.a.createElement(p.a, null, h.a.createElement(x, null))
        ),
        document.getElementById('root')
      );
  },
});
