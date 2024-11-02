!(function (c) {
  function n(n) {
    for (
      var e, t, i = n[0], o = n[1], s = n[2], a = 0, r = [];
      a < i.length;
      a++
    )
      (t = i[a]),
        Object.prototype.hasOwnProperty.call(f, t) && f[t] && r.push(f[t][0]),
        (f[t] = 0);
    for (e in o) Object.prototype.hasOwnProperty.call(o, e) && (c[e] = o[e]);
    for (h && h(n); r.length; ) r.shift()();
    return d.push.apply(d, s || []), l();
  }
  function l() {
    for (var n, e = 0; e < d.length; e++) {
      for (var t = d[e], i = !0, o = 1; o < t.length; o++) {
        var s = t[o];
        0 !== f[s] && (i = !1);
      }
      i && (d.splice(e--, 1), (n = a((a.s = t[0]))));
    }
    return n;
  }
  var t = {},
    f = { 25: 0 },
    d = [];
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
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(n, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(n, '__esModule', { value: !0 });
    }),
    (a.t = function (e, n) {
      if ((1 & n && (e = a(e)), 8 & n)) return e;
      if (4 & n && 'object' == typeof e && e && e.__esModule) return e;
      var t = Object.create(null);
      if (
        (a.r(t),
        Object.defineProperty(t, 'default', { enumerable: !0, value: e }),
        2 & n && 'string' != typeof e)
      )
        for (var i in e)
          a.d(
            t,
            i,
            function (n) {
              return e[n];
            }.bind(null, i)
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
      return a.d(e, 'a', e), e;
    }),
    (a.o = function (n, e) {
      return Object.prototype.hasOwnProperty.call(n, e);
    }),
    (a.p = '');
  var e = (window.webpackJsonp = window.webpackJsonp || []),
    i = e.push.bind(e);
  (e.push = n), (e = e.slice());
  for (var o = 0; o < e.length; o++) n(e[o]);
  var h = i;
  d.push([916, 0]), l();
})({
  792: function (n, e, t) {
    var i = t(793);
    'string' == typeof i && (i = [[n.i, i, '']]);
    var o = { hmr: !0, transform: void 0, insertInto: void 0 };
    t(12)(i, o);
    i.locals && (n.exports = i.locals);
  },
  793: function (n, e, t) {
    var i = t(27);
    (n.exports = t(11)(!1)).push([
      n.i,
      'body,\nhtml {\n  background: rgba(0, 0, 0, 0.6);\n  border-radius: 0;\n  font-size: 48px;\n}\n#root {\n  background: transparent;\n  position: relative;\n}\n.main-content {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 0 93px;\n  height: 128px;\n  line-height: 128px;\n}\n.label {\n  width: 305px;\n  padding-left: 65px;\n  background: url(' +
        i(t(794)) +
        ') left center no-repeat;\n  color: #3b9fdc;\n}\n.message {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  overflow: hidden;\n  white-space: nowrap;\n  color: #fff;\n  position: relative;\n  height: 100%;\n}\n',
      '',
    ]);
  },
  794: function (n, e) {
    n.exports =
      'data:image/png;base64,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';
  },
  916: function (n, e, t) {
    'use strict';
    t.r(e);
    t(30), t(792);
    var o = t(7),
      i = t(28),
      l = t.n(i),
      s = t(4),
      a = t.n(s),
      r = t(3),
      f = t.n(r);
    var c = a()(function n(e) {
      var c = this,
        t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
      f()(this, n),
        (this.getInitPositionLeft = function () {
          return c.wrapper.offsetWidth + 100;
        }),
        (this.init = function () {
          (c.container.style.cssText =
            '\n            position:absolute;\n            height: 100%;\n            line-height: '
              .concat(c.wrapper.offsetHeight, 'px;\n            left:')
              .concat(c.getInitPositionLeft(), 'px;\n            color: ')
              .concat(c.color, ';\n            font-size: ')
              .concat(c.fontSize, ';\n            font-weght: ')
              .concat(
                c.fontWeight,
                ';\n            will-change: auto;\n            transform-style: preserve-3d; \n            backface-visibility: hidden; \n            perspective: 1000; \n        '
              )),
            c.wrapper.appendChild(c.container);
        }),
        (this.reset = function () {
          (c.status = 0),
            (c.container.innerHTML = ''),
            (c.postionLeft = c.getInitPositionLeft());
        }),
        (this.onFinish = function (n) {
          c.handleFinish = n;
        }),
        (this.onFinishAll = function (n) {
          c.handleFinishAll = n;
        }),
        (this.addMessage = function (n) {
          c.alwaysShowLastest
            ? ((c.messages = [n]), c.getNextMessage())
            : c.messages.push(n);
        }),
        (this.getNextMessage = function () {
          var n = c.messages.shift();
          if (void 0 === n)
            (c.status = 0),
              'function' == typeof c.handleFinishAll && c.handleFinishAll();
          else {
            var e = [c.color, c.fontWeight, 1, ''],
              t = e[0],
              i = e[1],
              o = e[2],
              s = e[3],
              a = e[4];
            'object' === l()(n)
              ? ((o = n.loopTimes || 1),
                (a = void 0 === n.content ? '' : n.content),
                (t = n.color || c.color),
                (i = n.fontWeight || c.fontWeight))
              : (a = n),
              (a = a.toString().replace(/[<>&"]/g, function (n) {
                return {
                  '<': '&lt;',
                  '>': '&gt;',
                  '&': '&amp;',
                  '"': '&quot;',
                }[n];
              }));
            for (var r = 0; r < o; r++)
              s += '<span style="margin-right: '
                .concat(c.space, '; font-weight: ')
                .concat(i, '; color: ')
                .concat(t, '">')
                .concat(a, '</span>');
            (c.currentMessage = {
              content: a,
              color: t,
              loopTimes: o,
              fontWeight: i,
              originObj: n,
            }),
              (c.container.innerHTML = s),
              (c.postionLeft = 0),
              (c.container.style.transform = 'translateX('.concat(
                c.postionLeft,
                'px)'
              )),
              (c.containerWidth = c.container.offsetWidth),
              c.animation();
          }
        }),
        (this.animation = function () {
          var n = c.currentMessage;
          1 === c.status &&
            void 0 !== n &&
            ((c.container.style.transform = 'translateX('.concat(
              c.postionLeft,
              'px)'
            )),
            (c.postionLeft -= c.speed / 60),
            0 <
            c.containerWidth +
              c.container.parentElement.offsetWidth +
              c.postionLeft
              ? ((c.getNextMessageLock = !1),
                window.requestAnimationFrame(c.animation))
              : c.getNextMessageLock ||
                ('function' == typeof c.handleFinish &&
                  c.handleFinish(n.originObj),
                (c.getNextMessageLock = !0),
                c.getNextMessage()));
        }),
        (this.start = function () {
          2 === c.status
            ? ((c.status = 1), c.animation())
            : ((c.status = 1), c.getNextMessage());
        }),
        (this.pause = function () {
          c.status = 2;
        }),
        (this.wrapper = e),
        (this.postionLeft = 0),
        (this.containerWidth = 0),
        (this.getNextMessageLock = !1),
        (this.alwaysShowLastest = !!t.alwaysShowLastest),
        (this.isCurrentMessageFinish = !0),
        (this.status = 0),
        (this.color = t.color || '#FFF'),
        (this.speed = t.speed || 200),
        (this.fontSize = t.fontSize || '48px'),
        (this.fontWeight = t.fontWeight || 'normal'),
        (this.space = t.space || '150px'),
        (this.messages = t.messages || []),
        (this.container = document.createElement('div')),
        (this.handleFinish = t.onFinish),
        (this.handleFinishAll = t.onFinishAll),
        this.init();
    });
    function d() {
      o.a.send('windowControl', {
        typeName: 'close',
        windowName: window.windowName,
      });
    }
    function h(n) {
      o.a.send('finishOneMessageRoll', n);
    }
    (document.getElementById('root').innerHTML =
      '\n        <div class="main-content">\n            <div class="label">消息提醒：</div>\n            <div class="message" id="message-slider-box"></div>\n        </div>\n    '),
      window.ipcRenderer.send('init-message-roller-finished'),
      o.a.on('init-messages', function (n) {
        var e, t, i;
        (e = n),
          (t = document.getElementById('message-slider-box')),
          (i = new c(t, {
            onFinishAll: d,
            onFinish: h,
            alwaysShowLastest: !0,
            messages: e,
          })),
          o.a.on('new-message', function (n) {
            i.addMessage(n);
          }),
          i.start();
      });
  },
});
