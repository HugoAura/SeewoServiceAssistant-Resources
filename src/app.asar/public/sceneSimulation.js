!(function (a) {
  function e(e) {
    for (
      var n, t, r = e[0], o = e[1], u = e[2], c = 0, i = [];
      c < r.length;
      c++
    )
      (t = r[c]),
        Object.prototype.hasOwnProperty.call(f, t) && f[t] && i.push(f[t][0]),
        (f[t] = 0);
    for (n in o) Object.prototype.hasOwnProperty.call(o, n) && (a[n] = o[n]);
    for (s && s(e); i.length; ) i.shift()();
    return d.push.apply(d, u || []), l();
  }
  function l() {
    for (var e, n = 0; n < d.length; n++) {
      for (var t = d[n], r = !0, o = 1; o < t.length; o++) {
        var u = t[o];
        0 !== f[u] && (r = !1);
      }
      r && (d.splice(n--, 1), (e = c((c.s = t[0]))));
    }
    return e;
  }
  var t = {},
    f = { 33: 0 },
    d = [];
  function c(e) {
    if (t[e]) return t[e].exports;
    var n = (t[e] = { i: e, l: !1, exports: {} });
    return a[e].call(n.exports, n, n.exports, c), (n.l = !0), n.exports;
  }
  (c.m = a),
    (c.c = t),
    (c.d = function (e, n, t) {
      c.o(e, n) || Object.defineProperty(e, n, { enumerable: !0, get: t });
    }),
    (c.r = function (e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (c.t = function (n, e) {
      if ((1 & e && (n = c(n)), 8 & e)) return n;
      if (4 & e && 'object' == typeof n && n && n.__esModule) return n;
      var t = Object.create(null);
      if (
        (c.r(t),
        Object.defineProperty(t, 'default', { enumerable: !0, value: n }),
        2 & e && 'string' != typeof n)
      )
        for (var r in n)
          c.d(
            t,
            r,
            function (e) {
              return n[e];
            }.bind(null, r)
          );
      return t;
    }),
    (c.n = function (e) {
      var n =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return c.d(n, 'a', n), n;
    }),
    (c.o = function (e, n) {
      return Object.prototype.hasOwnProperty.call(e, n);
    }),
    (c.p = '');
  var n = (window.webpackJsonp = window.webpackJsonp || []),
    r = n.push.bind(n);
  (n.push = e), (n = n.slice());
  for (var o = 0; o < n.length; o++) e(n[o]);
  var s = r;
  d.push([923, 0]), l();
})({
  923: function (e, n, t) {
    'use strict';
    t.r(n);
    var r = t(0),
      c = t.n(r),
      o = t(18),
      u = t.n(o),
      i = t(3),
      a = t.n(i),
      l = t(4),
      f = t.n(l),
      d = t(5),
      s = t.n(d),
      p = t(6),
      v = t.n(p),
      y = t(2),
      h = t.n(y),
      b = t(7);
    function g(r) {
      var o = (function () {
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
          n = h()(r);
        if (o) {
          var t = h()(this).constructor;
          e = Reflect.construct(n, arguments, t);
        } else e = n.apply(this, arguments);
        return v()(this, e);
      };
    }
    var m,
      w = window._ACCEPT_DATA,
      x = (function (e) {
        s()(u, e);
        var o = g(u);
        function u() {
          var n;
          a()(this, u);
          for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
            t[r] = arguments[r];
          return (
            ((n = o.call.apply(o, [this].concat(t))).state = {
              url: '',
              voiceIndex: 0,
            }),
            (n.handlePlayEnded = function () {
              b.a.send('finishSceneVoice', n.state.voiceIndex);
            }),
            (n.handleGetCurrentIndex = function (e) {
              e &&
                n.setState(
                  {
                    voiceIndex: e.voiceId,
                    url:
                      window.webConfig.sceneAudioRoot +
                      '/' +
                      e.voiceId +
                      '.mp3',
                  },
                  function () {
                    (n.refs.audio.volume = 1), n.refs.audio.play();
                  }
                );
            }),
            n
          );
        }
        return (
          f()(u, [
            {
              key: 'componentDidMount',
              value: function () {
                w.getAndRegister('sceneVoiceIndex', this.handleGetCurrentIndex);
              },
            },
            {
              key: 'render',
              value: function () {
                return c.a.createElement('audio', {
                  ref: 'audio',
                  src: this.state.url,
                  onEnded: this.handlePlayEnded,
                });
              },
            },
          ]),
          u
        );
      })(r.PureComponent);
    (m = x),
      u.a.render(c.a.createElement(m, null), document.getElementById('root'));
  },
});
