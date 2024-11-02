!(function (c) {
  function e(e) {
    for (
      var n, t, o = e[0], r = e[1], a = e[2], i = 0, l = [];
      i < o.length;
      i++
    )
      (t = o[i]),
        Object.prototype.hasOwnProperty.call(d, t) && d[t] && l.push(d[t][0]),
        (d[t] = 0);
    for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (c[n] = r[n]);
    for (u && u(e); l.length; ) l.shift()();
    return s.push.apply(s, a || []), _();
  }
  function _() {
    for (var e, n = 0; n < s.length; n++) {
      for (var t = s[n], o = !0, r = 1; r < t.length; r++) {
        var a = t[r];
        0 !== d[a] && (o = !1);
      }
      o && (s.splice(n--, 1), (e = i((i.s = t[0]))));
    }
    return e;
  }
  var t = {},
    d = { 30: 0 },
    s = [];
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
      return i.d(n, 'a', n), n;
    }),
    (i.o = function (e, n) {
      return Object.prototype.hasOwnProperty.call(e, n);
    }),
    (i.p = '');
  var n = (window.webpackJsonp = window.webpackJsonp || []),
    o = n.push.bind(n);
  (n.push = e), (n = n.slice());
  for (var r = 0; r < n.length; r++) e(n[r]);
  var u = o;
  s.push([899, 0]), _();
})({
  822: function (e, n, t) {
    var o = t(823);
    'string' == typeof o && (o = [[e.i, o, '']]);
    var r = { hmr: !0, transform: void 0, insertInto: void 0 };
    t(12)(o, r);
    o.locals && (e.exports = o.locals);
  },
  823: function (e, n, t) {
    (n = e.exports = t(11)(!1)).push([
      e.i,
      '.index__container__2pamOGzN {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  color: #2C3144;\n  background-color: rgba(0, 0, 0, 0.6);\n}\n.index__container__2pamOGzN .index__modal__26sYw1OL {\n  -webkit-app-region: no-drag;\n  position: absolute;\n  top: calc(50% - 108px);\n  left: calc(50% - 210px);\n  border: 2px;\n  width: 424px;\n  height: 244px;\n  background-color: #FFFFFF;\n}\n.index__container__2pamOGzN .index__modal__26sYw1OL .index__body__3VgYVQXJ {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: calc(100% - 48px);\n  font-size: 16px;\n}\n.index__container__2pamOGzN .index__modal__26sYw1OL .index__body__3VgYVQXJ .index__seewo-logo__ckurmax4 {\n  margin-bottom: 24px;\n  width: 108px;\n  height: 24px;\n}\n.index__container__2pamOGzN .index__modal__26sYw1OL .index__footer__wUG-61VJ {\n  overflow: hidden;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 48px;\n  border-top: 1px solid #E9EAEC;\n}\n.index__container__2pamOGzN .index__modal__26sYw1OL .index__footer__wUG-61VJ .index__deny__19Iit2d6 {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  color: #6B6E7C;\n  font-size: 14px;\n  text-align: center;\n  line-height: 48px;\n  cursor: pointer;\n  border-right: 1px solid #E9EAEC;\n}\n.index__container__2pamOGzN .index__modal__26sYw1OL .index__footer__wUG-61VJ .index__agree__kOVJudUN {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  color: #3DA4FF;\n  font-size: 14px;\n  text-align: center;\n  line-height: 48px;\n  cursor: pointer;\n}\n',
      '',
    ]),
      (n.locals = {
        container: 'index__container__2pamOGzN',
        modal: 'index__modal__26sYw1OL',
        body: 'index__body__3VgYVQXJ',
        'seewo-logo': 'index__seewo-logo__ckurmax4',
        footer: 'index__footer__wUG-61VJ',
        deny: 'index__deny__19Iit2d6',
        agree: 'index__agree__kOVJudUN',
      });
  },
  899: function (e, n, t) {
    'use strict';
    t.r(n);
    var o = t(0),
      i = t.n(o),
      r = t(18),
      a = t.n(r),
      l = t(24),
      c = t(3),
      _ = t.n(c),
      d = t(4),
      s = t.n(d),
      u = t(5),
      p = t.n(u),
      f = t(6),
      x = t.n(f),
      m = t(2),
      h = t.n(m),
      g = t(66),
      y = t(7),
      b = t(77),
      w = t.n(b),
      v = t(76),
      O = t.n(v),
      k = t(38);
    t(822);
    function N(o) {
      var r = (function () {
        if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ('function' == typeof Proxy) return !0;
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
          n = h()(o);
        if (r) {
          var t = h()(this).constructor;
          e = Reflect.construct(n, arguments, t);
        } else e = n.apply(this, arguments);
        return x()(this, e);
      };
    }
    var E = (function (e) {
        p()(a, e);
        var r = N(a);
        function a() {
          var e;
          _()(this, a);
          for (var n = arguments.length, t = new Array(n), o = 0; o < n; o++)
            t[o] = arguments[o];
          return (
            ((e = r.call.apply(r, [this].concat(t))).state = { count: 60 }),
            (e.timer = null),
            (e.handleCountDown = function () {
              e.state.count <= 0
                ? e.handleDeny()
                : (e.timer && clearTimeout(e.timer),
                  (e.timer = setTimeout(function () {
                    e.setState(function (e) {
                      return { count: e.count - 1 };
                    }),
                      e.handleCountDown();
                  }, 1e3)));
            }),
            (e.handleRespondRequest = function (e) {
              var n = 'https://127.0.0.1:'.concat(
                  window.ports.SeewoProxyHTTP,
                  '/forward/SeewoHugoHttp/api/v1/remoteControl/agree'
                ),
                t = w()(new Date().getTime());
              k.a.info({
                url: n,
                data: { agree: e },
                traceid: t,
                method: 'post',
              }),
                O.a
                  .post(n, { agree: e }, { headers: { 'x-auth-traceid': t } })
                  .then(function () {
                    y.a.send('requestRemoteControl', {
                      messageType: 'destroy',
                    });
                  })
                  .catch(function () {
                    y.a.send('requestRemoteControl', {
                      messageType: 'destroy',
                    });
                  });
            }),
            (e.handleDeny = function () {
              e.timer && clearTimeout(e.timer), e.handleRespondRequest(!1);
            }),
            (e.handleAgree = function () {
              return e.handleRespondRequest(!0);
            }),
            e
          );
        }
        return (
          s()(a, [
            {
              key: 'componentDidMount',
              value: function () {
                this.handleCountDown();
              },
            },
            {
              key: 'render',
              value: function () {
                var e = this.state.count;
                return i.a.createElement(
                  'div',
                  { className: 'index__container__2pamOGzN' },
                  i.a.createElement(
                    'div',
                    { className: 'index__modal__26sYw1OL' },
                    i.a.createElement(
                      'div',
                      { className: 'index__body__3VgYVQXJ' },
                      i.a.createElement(
                        'p',
                        { className: 'index__seewo-logo__ckurmax4' },
                        i.a.createElement(g.a, {
                          type: 'icon-logo1',
                          colorful: !0,
                          size: 24,
                        })
                      ),
                      CUSTOM_CONFIG.companyName,
                      '官方发起远程控制，是否同意远程控制？'
                    ),
                    i.a.createElement(
                      'div',
                      { className: 'index__footer__wUG-61VJ' },
                      i.a.createElement(
                        'span',
                        {
                          className: 'index__deny__19Iit2d6',
                          onClick: this.handleDeny,
                        },
                        '拒绝（',
                        e,
                        's）'
                      ),
                      i.a.createElement(
                        'span',
                        {
                          className: 'index__agree__kOVJudUN',
                          onClick: this.handleAgree,
                        },
                        '同意'
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
      C = t(29),
      V = Object(C.a)('remoteControl'),
      G = t(21);
    t(30);
    var R;
    (R = E),
      a.a.render(
        i.a.createElement(
          l.a,
          { store: V },
          i.a.createElement(
            G.a,
            { needReloadForPortRenew: !0 },
            i.a.createElement(R, null)
          )
        ),
        document.getElementById('root')
      );
  },
});
