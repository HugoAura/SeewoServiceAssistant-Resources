!(function (l) {
  function e(e) {
    for (
      var n, t, o = e[0], i = e[1], r = e[2], a = 0, c = [];
      a < o.length;
      a++
    )
      (t = o[a]),
        Object.prototype.hasOwnProperty.call(s, t) && s[t] && c.push(s[t][0]),
        (s[t] = 0);
    for (n in i) Object.prototype.hasOwnProperty.call(i, n) && (l[n] = i[n]);
    for (f && f(e); c.length; ) c.shift()();
    return d.push.apply(d, r || []), u();
  }
  function u() {
    for (var e, n = 0; n < d.length; n++) {
      for (var t = d[n], o = !0, i = 1; i < t.length; i++) {
        var r = t[i];
        0 !== s[r] && (o = !1);
      }
      o && (d.splice(n--, 1), (e = a((a.s = t[0]))));
    }
    return e;
  }
  var t = {},
    s = { 11: 0 },
    d = [];
  function a(e) {
    if (t[e]) return t[e].exports;
    var n = (t[e] = { i: e, l: !1, exports: {} });
    return l[e].call(n.exports, n, n.exports, a), (n.l = !0), n.exports;
  }
  (a.m = l),
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
  for (var i = 0; i < n.length; i++) e(n[i]);
  var f = o;
  d.push([907, 0]), u();
})({
  720: function (e, n, t) {
    var o = t(721);
    'string' == typeof o && (o = [[e.i, o, '']]);
    var i = { hmr: !0, transform: void 0, insertInto: void 0 };
    t(12)(o, i);
    o.locals && (e.exports = o.locals);
  },
  721: function (e, n, t) {
    (n = e.exports = t(11)(!1)).push([
      e.i,
      '.index__box__F3gcVeo- {\n  width: 100%;\n  height: 100%;\n  border-radius: 4px;\n  background-color: rgba(0, 0, 0, 0.3);\n  overflow: hidden;\n  padding: 0 32px 0 32px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.index__box-not-DWM__119vO46C {\n  width: 100%;\n  height: 100%;\n  background-color: #2c3144;\n  overflow: hidden;\n  padding: 0 32px 0 32px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.index__main__3-gAntIo .index__countdown__zmYjmNL8 {\n  color: #fff;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 20px;\n  /* 142.857% */\n}\n.index__main__3-gAntIo .index__detail__1DxMDGyS {\n  color: #fff;\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 18px;\n  /* 150% */\n  opacity: 0.6;\n}\n.index__button__8gcXIxZS {\n  float: right;\n  width: 64px;\n  height: 32px;\n  background: #3da4ff;\n  border-radius: 4px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.index__button__8gcXIxZS span {\n  color: #fff;\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 18px;\n}\n',
      '',
    ]),
      (n.locals = {
        box: 'index__box__F3gcVeo-',
        'box-not-DWM': 'index__box-not-DWM__119vO46C',
        main: 'index__main__3-gAntIo',
        countdown: 'index__countdown__zmYjmNL8',
        detail: 'index__detail__1DxMDGyS',
        button: 'index__button__8gcXIxZS',
      });
  },
  907: function (e, n, t) {
    'use strict';
    t.r(n);
    var O = t(0),
      k = t.n(O),
      o = t(18),
      i = t.n(o),
      r = t(17),
      S = t.n(r),
      a = t(8),
      E = t.n(a),
      A = (t(720), t(19)),
      D = t(7),
      P = {
        './index.less': {
          box: 'index__box__F3gcVeo-',
          'box-not-DWM': 'index__box-not-DWM__119vO46C',
          main: 'index__main__3-gAntIo',
          countdown: 'index__countdown__zmYjmNL8',
          detail: 'index__detail__1DxMDGyS',
          button: 'index__button__8gcXIxZS',
        },
      };
    var c = t(21);
    t(30);
    var l;
    (l = function () {
      var e = Object(O.useState)(null),
        n = S()(e, 2),
        o = n[0],
        i = n[1],
        t = Object(O.useState)(!0),
        r = S()(t, 2),
        a = r[0],
        c = r[1],
        l = Object(O.useRef)(!0),
        u = Object(O.useState)(0),
        s = S()(u, 2),
        d = s[0],
        f = s[1],
        _ = Object(O.useRef)(null),
        x = o || {},
        p = x.id,
        b = x.usageTimeAvailableMs,
        m = void 0 === b ? 0 : b,
        g = x.usageTimeLimitMs,
        y = void 0 === g ? 0 : g,
        v = Object(O.useMemo)(
          function () {
            return (null == o ? void 0 : o.usageTimeAvailableMs)
              ? (null == o ? void 0 : o.usageTimeAvailableMs) - d
              : 0;
          },
          [d, m]
        ),
        h = Object(O.useMemo)(
          function () {
            return !v || v <= 0
              ? { minute: 0, second: 0 }
              : {
                  minute: Math.floor(v / 6e4),
                  second: Math.floor((v % 6e4) / 1e3),
                };
          },
          [v]
        ),
        w = h.minute,
        M = h.second;
      function j(t) {
        console.log('countdown', l.current),
          (_.current = setTimeout(function () {
            _.current && clearTimeout(_.current),
              f(function (e) {
                if ((console.log('usedTime', e / 1e3, t / 1e3), l.current)) {
                  var n = e + 1e3;
                  return (
                    t <= n
                      ? (D.a.send('postEyeProtectionModeActionByRender', {
                          action: 'openTimeOutPopups',
                          id: p,
                          data: o,
                        }),
                        console.log(
                          '倒计时已用时间大于等于可用时间，应该发送完成指令'
                        ),
                        c(!1),
                        (l.current = !1))
                      : (console.log('倒计时已用时间小于可用时间，继续倒计时'),
                        j(t)),
                    n
                  );
                }
                return console.log('runStatusRef为false'), e;
              });
          }, 1e3));
      }
      return (
        Object(O.useEffect)(function () {
          D.a.send('postEyeProtectionModeActionByRender', { action: 'start' }),
            D.a.on('postEyeProtectionModeActionByMain', function (e) {
              var n = e.action,
                t = e.data;
              'start' === n &&
                (console.log('start', t), i(t), c(!0), (l.current = !0)),
                'pause' === n &&
                  (console.log('pause', t), c(!1), (l.current = !1)),
                'resumed' === n &&
                  (console.log('resumed', t),
                  i(t),
                  c(!0),
                  f(0),
                  (l.current = !0));
            });
        }, []),
        Object(O.useEffect)(
          function () {
            0 < (null == o ? void 0 : o.usageTimeAvailableMs) &&
              (_.current && clearTimeout(_.current),
              j(o.usageTimeAvailableMs),
              D.a.send('postEyeProtectionModeActionByRender', {
                action: 'update',
                data: o,
              }));
          },
          [o]
        ),
        k.a.createElement(
          'div',
          { className: E()(window.DWMOpenState ? 'box' : 'box-not-DWM', P) },
          k.a.createElement(
            'div',
            { className: 'index__main__3-gAntIo' },
            k.a.createElement(
              'div',
              { className: 'index__countdown__zmYjmNL8' },
              '剩余时间：',
              w || 0,
              '分',
              M || 0,
              '秒'
            ),
            k.a.createElement(
              'div',
              { className: 'index__detail__1DxMDGyS' },
              '为保证用眼健康，每使用',
              y / 6e4,
              '分钟后自动进入护眼模式'
            )
          ),
          0 < v &&
            k.a.createElement(
              'div',
              { className: 'index__button__8gcXIxZS' },
              k.a.createElement(A.a, {
                onClick: function () {
                  l.current &&
                    D.a.send('postEyeProtectionModeActionByRender', {
                      action: 'pause',
                      id: p,
                    });
                },
                activeStyle: 'scale',
              }),
              k.a.createElement('span', null, a ? '暂停计时' : '开始计时')
            )
        )
      );
    }),
      i.a.render(
        k.a.createElement(c.a, null, k.a.createElement(l, null)),
        document.getElementById('root')
      );
  },
});
