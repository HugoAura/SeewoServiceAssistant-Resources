!(function (d) {
  function n(n) {
    for (
      var e, t, o = n[0], i = n[1], _ = n[2], r = 0, a = [];
      r < o.length;
      r++
    )
      (t = o[r]),
        Object.prototype.hasOwnProperty.call(c, t) && c[t] && a.push(c[t][0]),
        (c[t] = 0);
    for (e in i) Object.prototype.hasOwnProperty.call(i, e) && (d[e] = i[e]);
    for (f && f(n); a.length; ) a.shift()();
    return s.push.apply(s, _ || []), l();
  }
  function l() {
    for (var n, e = 0; e < s.length; e++) {
      for (var t = s[e], o = !0, i = 1; i < t.length; i++) {
        var _ = t[i];
        0 !== c[_] && (o = !1);
      }
      o && (s.splice(e--, 1), (n = r((r.s = t[0]))));
    }
    return n;
  }
  var t = {},
    c = { 16: 0 },
    s = [];
  function r(n) {
    if (t[n]) return t[n].exports;
    var e = (t[n] = { i: n, l: !1, exports: {} });
    return d[n].call(e.exports, e, e.exports, r), (e.l = !0), e.exports;
  }
  (r.m = d),
    (r.c = t),
    (r.d = function (n, e, t) {
      r.o(n, e) || Object.defineProperty(n, e, { enumerable: !0, get: t });
    }),
    (r.r = function (n) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(n, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(n, '__esModule', { value: !0 });
    }),
    (r.t = function (e, n) {
      if ((1 & n && (e = r(e)), 8 & n)) return e;
      if (4 & n && 'object' == typeof e && e && e.__esModule) return e;
      var t = Object.create(null);
      if (
        (r.r(t),
        Object.defineProperty(t, 'default', { enumerable: !0, value: e }),
        2 & n && 'string' != typeof e)
      )
        for (var o in e)
          r.d(
            t,
            o,
            function (n) {
              return e[n];
            }.bind(null, o)
          );
      return t;
    }),
    (r.n = function (n) {
      var e =
        n && n.__esModule
          ? function () {
              return n.default;
            }
          : function () {
              return n;
            };
      return r.d(e, 'a', e), e;
    }),
    (r.o = function (n, e) {
      return Object.prototype.hasOwnProperty.call(n, e);
    }),
    (r.p = '');
  var e = (window.webpackJsonp = window.webpackJsonp || []),
    o = e.push.bind(e);
  (e.push = n), (e = e.slice());
  for (var i = 0; i < e.length; i++) n(e[i]);
  var f = o;
  s.push([895, 0]), l();
})({
  740: function (n, e, t) {
    var o = t(741);
    'string' == typeof o && (o = [[n.i, o, '']]);
    var i = { hmr: !0, transform: void 0, insertInto: void 0 };
    t(12)(o, i);
    o.locals && (n.exports = o.locals);
  },
  741: function (n, e, t) {
    var o = t(27);
    (e = n.exports = t(11)(!1)).push([
      n.i,
      '.index__float-window__gS0rEtXF {\n  background: -webkit-gradient(linear, left top, right top, from(#1890ff), to(#69c0ff));\n  background: -o-linear-gradient(left, #1890ff 0%, #69c0ff 100%);\n  background: linear-gradient(90deg, #1890ff 0%, #69c0ff 100%);\n  overflow: hidden;\n}\n.index__float-window__gS0rEtXF.index__dwm__NyuOPSck {\n  border-radius: 2px;\n  width: 328px;\n  height: 146px;\n}\n.index__float-window__gS0rEtXF.index__notDwm__32NZFCc9 {\n  width: 100%;\n  height: 100%;\n}\n.index__float-window__gS0rEtXF .index__header__1y736Dhi {\n  width: 100%;\n  height: 32px;\n  line-height: 32px;\n  padding: 0 8px;\n  overflow: hidden;\n  z-index: 11;\n}\n.index__float-window__gS0rEtXF .index__header__1y736Dhi .index__title__3gjpe9vb {\n  float: left;\n  color: white;\n  font-size: 12px;\n  height: 32px;\n  vertical-align: middle;\n}\n.index__float-window__gS0rEtXF .index__header__1y736Dhi .index__title__3gjpe9vb span {\n  display: inline-block;\n  vertical-align: top;\n  margin: 8px 0;\n  width: 16px;\n  height: 16px;\n  background: url(' +
        o(t(358)) +
        ');\n  background-size: cover;\n  background-repeat: no-repeat;\n  margin-right: 4px;\n}\n.index__float-window__gS0rEtXF .index__header__1y736Dhi .index__close__2u99zy0g {\n  float: right;\n  color: white;\n  cursor: pointer;\n}\n.index__float-window__gS0rEtXF .index__header__1y736Dhi .index__close__2u99zy0g:active {\n  -webkit-transform: scale(0.8);\n      -ms-transform: scale(0.8);\n          transform: scale(0.8);\n}\n.index__float-window__gS0rEtXF .index__content__3HCFjDJL {\n  width: 100%;\n  height: 100%;\n  padding-top: 32px;\n  margin-top: -32px;\n  overflow: hidden;\n}\n.index__float-window__gS0rEtXF .index__content__3HCFjDJL .index__content-box__2LQeeZvO {\n  background: white;\n  width: 100%;\n  height: 100%;\n  padding-top: 24px;\n}\n.index__float-window__gS0rEtXF .index__content__3HCFjDJL .index__word__2uDKT2R9 {\n  font-size: 14px;\n  text-align: center;\n  color: #2c3144;\n}\n.index__float-window__gS0rEtXF .index__content__3HCFjDJL .index__button__3aYBReTQ {\n  width: 100%;\n  text-align: center;\n  margin-top: 16px;\n}\n.index__float-window__gS0rEtXF .index__content__3HCFjDJL .index__button__3aYBReTQ > div {\n  display: inline-block;\n  width: 96px;\n  height: 32px;\n  line-height: 32px;\n  border-radius: 2px;\n  text-align: center;\n  font-size: 14px;\n  -webkit-transition: all 0.3s;\n  -o-transition: all 0.3s;\n  transition: all 0.3s;\n  cursor: pointer;\n  vertical-align: middle;\n}\n.index__float-window__gS0rEtXF .index__content__3HCFjDJL .index__button__3aYBReTQ > div:hover {\n  -webkit-box-shadow: 0 0 8px rgba(0, 0, 0, 0.25);\n          box-shadow: 0 0 8px rgba(0, 0, 0, 0.25);\n}\n.index__float-window__gS0rEtXF .index__content__3HCFjDJL .index__button__3aYBReTQ > div:active {\n  -webkit-transform: scale(0.8);\n      -ms-transform: scale(0.8);\n          transform: scale(0.8);\n}\n.index__float-window__gS0rEtXF .index__content__3HCFjDJL .index__button__3aYBReTQ .index__closeWindow__3gCfpYCy {\n  border: 1px solid #e0e2e7;\n  color: #6b6e7c;\n  margin-right: 24px;\n}\n.index__float-window__gS0rEtXF .index__content__3HCFjDJL .index__button__3aYBReTQ .index__blockWindow__1dk_M93c {\n  background: #3da4ff;\n  color: white;\n}\n',
      '',
    ]),
      (e.locals = {
        'float-window': 'index__float-window__gS0rEtXF',
        dwm: 'index__dwm__NyuOPSck',
        notDwm: 'index__notDwm__32NZFCc9',
        header: 'index__header__1y736Dhi',
        title: 'index__title__3gjpe9vb',
        close: 'index__close__2u99zy0g',
        content: 'index__content__3HCFjDJL',
        'content-box': 'index__content-box__2LQeeZvO',
        word: 'index__word__2uDKT2R9',
        button: 'index__button__3aYBReTQ',
        closeWindow: 'index__closeWindow__3gCfpYCy',
        blockWindow: 'index__blockWindow__1dk_M93c',
      });
  },
  895: function (n, e, t) {
    'use strict';
    t.r(e);
    var o = t(0),
      r = t.n(o),
      i = t(18),
      _ = t.n(i),
      a = t(3),
      d = t.n(a),
      l = t(4),
      c = t.n(l),
      s = t(5),
      f = t.n(s),
      p = t(6),
      u = t.n(p),
      w = t(2),
      x = t.n(w),
      h = t(8),
      g = t.n(h),
      b = t(9),
      v = t(48),
      m = t(20);
    var y,
      k = t(16),
      C = (t(740), t(7)),
      F = {
        './index.less': {
          'float-window': 'index__float-window__gS0rEtXF',
          dwm: 'index__dwm__NyuOPSck',
          notDwm: 'index__notDwm__32NZFCc9',
          header: 'index__header__1y736Dhi',
          title: 'index__title__3gjpe9vb',
          close: 'index__close__2u99zy0g',
          content: 'index__content__3HCFjDJL',
          'content-box': 'index__content-box__2LQeeZvO',
          word: 'index__word__2uDKT2R9',
          button: 'index__button__3aYBReTQ',
          closeWindow: 'index__closeWindow__3gCfpYCy',
          blockWindow: 'index__blockWindow__1dk_M93c',
        },
      };
    function j(o) {
      var i = (function () {
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
        } catch (n) {
          return !1;
        }
      })();
      return function () {
        var n,
          e = x()(o);
        if (i) {
          var t = x()(this).constructor;
          n = Reflect.construct(e, arguments, t);
        } else n = e.apply(this, arguments);
        return u()(this, n);
      };
    }
    var E =
        Object(b.a)(
          {},
          {
            postAdblockOpenWindows: function () {
              var i =
                  0 < arguments.length && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                t =
                  1 < arguments.length && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
              return function (o) {
                var n, e;
                return (
                  o(((n = i), { type: v.g, params: n, data: e || '' })),
                  Object(m.a)(
                    'adblockHttpHost',
                    '/api/v1/windowBlock/block/enable',
                    'post',
                    i,
                    t,
                    '{}'
                  ).then(
                    function (n) {
                      var e, t;
                      return (
                        o(
                          ((e = i),
                          (t = n),
                          { type: v.h, params: e, data: t || '' })
                        ),
                        n
                      );
                    },
                    function (n) {
                      var e, t;
                      return (
                        o(
                          ((e = i),
                          (t = n),
                          { type: v.f, params: e, data: t || '' })
                        ),
                        Promise.reject(n)
                      );
                    }
                  )
                );
              };
            },
            postAdblockCloseFloatWindow: function () {
              var i =
                  0 < arguments.length && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                t =
                  1 < arguments.length && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
              return function (o) {
                var n, e;
                return (
                  o(((n = i), { type: v.c, params: n, data: e || '' })),
                  Object(m.a)(
                    'adblockHttpHost',
                    '/api/v1/windowBlock/tip/confirm',
                    'post',
                    i,
                    t,
                    '{}'
                  ).then(
                    function (n) {
                      var e, t;
                      return (
                        o(
                          ((e = i),
                          (t = n),
                          { type: v.d, params: e, data: t || '' })
                        ),
                        n
                      );
                    },
                    function (n) {
                      var e, t;
                      return (
                        o(
                          ((e = i),
                          (t = n),
                          { type: v.b, params: e, data: t || '' })
                        ),
                        Promise.reject(n)
                      );
                    }
                  )
                );
              };
            },
          }
        )(
          (y = (function (n) {
            f()(_, n);
            var i = j(_);
            function _() {
              var e;
              d()(this, _);
              for (
                var n = arguments.length, t = new Array(n), o = 0;
                o < n;
                o++
              )
                t[o] = arguments[o];
              return (
                ((e = i.call.apply(i, [this].concat(t))).id = null),
                (e.handleCloseWindow = function () {
                  Object(k.a)(e.props.actions, 'postAdblockCloseFloatWindow', {
                    id: e.id,
                    block: !1,
                  })(function () {
                    C.a.send('floatWindowClose', e.id);
                  });
                }),
                (e.handleClosePopUps = function () {
                  Object(k.a)(e.props.actions, 'postAdblockCloseFloatWindow', {
                    id: e.id,
                    block: !1,
                  })(function () {
                    C.a.send('floatWindowClose', e.id);
                  });
                }),
                (e.handleBlockPopUps = function () {
                  Object(k.a)(e.props.actions, 'postAdblockCloseFloatWindow', {
                    id: e.id,
                    block: !0,
                  })(function () {
                    C.a.send('floatWindowClose', e.id);
                  });
                }),
                (e.componentDidMount = function () {
                  C.a.on('floatWindowId', function (n) {
                    e.id = n;
                  }),
                    setTimeout(function () {
                      C.a.send('floatWindowClose', e.id);
                    }, 3e4);
                }),
                e
              );
            }
            return (
              c()(_, [
                {
                  key: 'render',
                  value: function () {
                    var n = window.DWMOpenState,
                      e = this.handleClosePopUps,
                      t = this.handleBlockPopUps;
                    return r.a.createElement(
                      'div',
                      {
                        className: g()(
                          n ? 'float-window dwm' : 'float-window notDwm',
                          F
                        ),
                      },
                      r.a.createElement(
                        'div',
                        { className: 'clear index__header__1y736Dhi' },
                        r.a.createElement(
                          'div',
                          { className: 'index__title__3gjpe9vb' },
                          r.a.createElement('span', null),
                          CUSTOM_CONFIG.appName
                        )
                      ),
                      r.a.createElement(
                        'div',
                        { className: 'index__content__3HCFjDJL' },
                        r.a.createElement(
                          'div',
                          { className: 'index__content-box__2LQeeZvO' },
                          r.a.createElement(
                            'div',
                            { className: 'index__word__2uDKT2R9' },
                            '开启拦截时，该弹窗将不再出现'
                          ),
                          r.a.createElement(
                            'div',
                            { className: 'index__button__3aYBReTQ' },
                            r.a.createElement(
                              'div',
                              {
                                className: 'index__closeWindow__3gCfpYCy',
                                onClick: e,
                              },
                              r.a.createElement('p', null, '忽略')
                            ),
                            r.a.createElement(
                              'div',
                              {
                                className: 'index__blockWindow__1dk_M93c',
                                onClick: t,
                              },
                              r.a.createElement('p', null, '拦截')
                            )
                          )
                        )
                      )
                    );
                  },
                },
              ]),
              _
            );
          })(o.PureComponent))
        ) || y,
      D = t(24),
      O = t(29),
      S = t(21);
    t(30);
    var W,
      X = Object(O.a)('floatWindow');
    (W = E),
      _.a.render(
        r.a.createElement(
          D.a,
          { store: X },
          r.a.createElement(S.a, null, r.a.createElement(W, null))
        ),
        document.getElementById('root')
      );
  },
});
