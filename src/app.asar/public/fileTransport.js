!(function (_) {
  function n(n) {
    for (
      var e, t, r = n[0], i = n[1], a = n[2], o = 0, l = [];
      o < r.length;
      o++
    )
      (t = r[o]),
        Object.prototype.hasOwnProperty.call(c, t) && c[t] && l.push(c[t][0]),
        (c[t] = 0);
    for (e in i) Object.prototype.hasOwnProperty.call(i, e) && (_[e] = i[e]);
    for (M && M(n); l.length; ) l.shift()();
    return p.push.apply(p, a || []), s();
  }
  function s() {
    for (var n, e = 0; e < p.length; e++) {
      for (var t = p[e], r = !0, i = 1; i < t.length; i++) {
        var a = t[i];
        0 !== c[a] && (r = !1);
      }
      r && (p.splice(e--, 1), (n = o((o.s = t[0]))));
    }
    return n;
  }
  var t = {},
    c = { 14: 0 },
    p = [];
  function o(n) {
    if (t[n]) return t[n].exports;
    var e = (t[n] = { i: n, l: !1, exports: {} });
    return _[n].call(e.exports, e, e.exports, o), (e.l = !0), e.exports;
  }
  (o.m = _),
    (o.c = t),
    (o.d = function (n, e, t) {
      o.o(n, e) || Object.defineProperty(n, e, { enumerable: !0, get: t });
    }),
    (o.r = function (n) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(n, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(n, '__esModule', { value: !0 });
    }),
    (o.t = function (e, n) {
      if ((1 & n && (e = o(e)), 8 & n)) return e;
      if (4 & n && 'object' == typeof e && e && e.__esModule) return e;
      var t = Object.create(null);
      if (
        (o.r(t),
        Object.defineProperty(t, 'default', { enumerable: !0, value: e }),
        2 & n && 'string' != typeof e)
      )
        for (var r in e)
          o.d(
            t,
            r,
            function (n) {
              return e[n];
            }.bind(null, r)
          );
      return t;
    }),
    (o.n = function (n) {
      var e =
        n && n.__esModule
          ? function () {
              return n.default;
            }
          : function () {
              return n;
            };
      return o.d(e, 'a', e), e;
    }),
    (o.o = function (n, e) {
      return Object.prototype.hasOwnProperty.call(n, e);
    }),
    (o.p = '');
  var e = (window.webpackJsonp = window.webpackJsonp || []),
    r = e.push.bind(e);
  (e.push = n), (e = e.slice());
  for (var i = 0; i < e.length; i++) n(e[i]);
  var M = r;
  p.push([909, 0]), s();
})({
  734: function (n, e, t) {
    var r = t(735);
    'string' == typeof r && (r = [[n.i, r, '']]);
    var i = { hmr: !0, transform: void 0, insertInto: void 0 };
    t(12)(r, i);
    r.locals && (n.exports = r.locals);
  },
  735: function (n, e, t) {
    (e = n.exports = t(11)(!1)).push([
      n.i,
      '.fileTransport__content__MZjqO9FQ {\n  position: absolute;\n  width: 308px;\n  height: 88px;\n  left: 0;\n  background: #ffffff;\n  border-radius: 4px;\n  -webkit-transition: all 0.5s;\n  -o-transition: all 0.5s;\n  transition: all 0.5s;\n  -webkit-box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);\n          box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);\n}\n.fileTransport__content__MZjqO9FQ.fileTransport__show__3jTEgvAG {\n  left: 0;\n  opacity: 1;\n}\n.fileTransport__content__MZjqO9FQ.fileTransport__hide__1Rk3y4ik {\n  left: 100%;\n  opacity: 0.5;\n}\n.fileTransport__content__MZjqO9FQ .fileTransport__icon__1bJNQiJx {\n  float: left;\n  margin: 20px 16px 20px 24px;\n  width: 48px;\n  height: 48px;\n}\n.fileTransport__content__MZjqO9FQ .fileTransport__icon__1bJNQiJx img {\n  width: 100%;\n  height: 100%;\n}\n.fileTransport__content__MZjqO9FQ .fileTransport__main__24SFH66p {\n  margin-left: 72px;\n  margin-top: 18px;\n}\n.fileTransport__content__MZjqO9FQ .fileTransport__main__24SFH66p .fileTransport__title__2r4C_bRE {\n  width: 100%;\n  line-height: 26px;\n  font-size: 20px;\n  color: #2c3144;\n}\n.fileTransport__content__MZjqO9FQ .fileTransport__main__24SFH66p .fileTransport__detail__2bVKn7qx {\n  width: 100%;\n  margin-top: 8px;\n  font-size: 14px;\n  color: #6b6e7c;\n  line-height: 22px;\n}\n.fileTransport__content__MZjqO9FQ .fileTransport__main__24SFH66p .fileTransport__detail__2bVKn7qx span {\n  float: left;\n  display: block;\n}\n.fileTransport__content__MZjqO9FQ .fileTransport__main__24SFH66p .fileTransport__detail__2bVKn7qx span.fileTransport__count__gUlH2qmj {\n  color: #3da4ff;\n  margin: 0 4px;\n}\n.fileTransport__content__MZjqO9FQ .fileTransport__main__24SFH66p .fileTransport__detail__2bVKn7qx span.fileTransport__username__3jiH7gZY {\n  max-width: 56px;\n  -o-text-overflow: ellipsis;\n     text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  color: #6b6e7c;\n  line-height: 22px;\n}\n',
      '',
    ]),
      (e.locals = {
        content: 'fileTransport__content__MZjqO9FQ',
        show: 'fileTransport__show__3jTEgvAG',
        hide: 'fileTransport__hide__1Rk3y4ik',
        icon: 'fileTransport__icon__1bJNQiJx',
        main: 'fileTransport__main__24SFH66p',
        title: 'fileTransport__title__2r4C_bRE',
        detail: 'fileTransport__detail__2bVKn7qx',
        count: 'fileTransport__count__gUlH2qmj',
        username: 'fileTransport__username__3jiH7gZY',
      });
  },
  736: function (n, e) {
    n.exports =
      'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCI+DQogIDxkZWZzPg0KICAgIDxjaXJjbGUgaWQ9IjQ4cHgtYSIgY3g9IjI0IiBjeT0iMjQiIHI9IjI0Ii8+DQogIDwvZGVmcz4NCiAgPG1hc2sgaWQ9IjQ4cHgtYiIgZmlsbD0iI2ZmZiI+DQogICAgPHVzZSB4bGluazpocmVmPSIjNDhweC1hIi8+DQogIDwvbWFzaz4NCiAgPHVzZSBmaWxsPSIjQkZDMUM2IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHhsaW5rOmhyZWY9IiM0OHB4LWEiLz4NCiAgPHBhdGggZmlsbD0iI0Y0RjRGNSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMjguNjI5NDg5NiwzMi4wODUxNDU0IEMyOC42Mjk0ODk2LDI5Ljg3Mzc3OSAzMC4zMTc4ODUzLDMwLjU5NTkzNzggMzEuMDU5MDcyNSwyNi41NDYxMjQ1IEMzMS4zNjY0NTk5LDI0Ljg2NjExMyAzMi44NTc2ODkyLDI2LjUxOTAzNzEgMzMuMTQzMTUwNCwyMi42ODM3MDc5IEMzMy4xNDMxNTA0LDIxLjE1NTE0NyAzMi4zMjkyNjk3LDIwLjc3NTMyNzkgMzIuMzI5MjY5NywyMC43NzUzMjc5IEMzMi4zMjkyNjk3LDIwLjc3NTMyNzkgMzIuNzQyOTE0NCwxOC41MTMzNjQ0IDMyLjkwNTA4MzQsMTYuNzcyNTM0MiBDMzMuMTA1NTM4NywxNC42MDM3NTc5IDMxLjY2NzEwMDgsOSAyMy45OTMyOTU0LDkgQzE2LjMxOTE1MjgsOSAxNC44Nzk4NzE1LDE0LjYwMzc1NzkgMTUuMDgxNTA3NSwxNi43NzI1MzQyIEMxNS4yNDMzMzkyLDE4LjUxMzM2NDQgMTUuNjU2OTgzOSwyMC43NzUzMjc5IDE1LjY1Njk4MzksMjAuNzc1MzI3OSBDMTUuNjU2OTgzOSwyMC43NzUzMjc5IDE0Ljg0MzEwMzEsMjEuMTU1MTQ3IDE0Ljg0MzEwMzEsMjIuNjgzNzA3OSBDMTUuMTI3ODg5NywyNi41MTkwMzcxIDE2LjYxODk1MDMsMjQuODY2MTEyOSAxNi45MjY1MDY0LDI2LjU0NjEyNDUgQzE3LjY2ODYyMTIsMzAuNTk1ODUyNiAxOS4zNTU3NTIsMjkuODczNzc5IDE5LjM1NTc1MiwzMi4wODUxNDU0IEMxOS4zNTU3NTIsMzUuNzY4OTM4OSAxNy41ODk2ODcyLDM3LjQ4OTQxMSAxMi4wNjA1MDk2LDM5LjUyOTEzOSBDNi41MTM4NzUzNCw0MS41NzUwMDAxIDIsNDQuMDk5MDU3MyAyLDQ1LjUyMTczOTEgTDIsNDkgTDQ1Ljk5OTk5OTMsNDkgQzQ1Ljk5OTk5OTMsNDkgNDYsNDYuOTQzNDgzOSA0Niw0NS41MjE3MzkxIEM0Niw0NC4wOTkwNTczIDQxLjQ3MjU0NjgsNDEuNTc1MDAwMSAzNS45MjU5MTI2LDM5LjUyOTEzOSBDMzAuMzk2NTY2MywzNy40ODk0MTEgMjguNjI5NDg5NiwzNS43Njg5Mzg4IDI4LjYyOTQ4OTYsMzIuMDg1MTQ1NCBaIiBtYXNrPSJ1cmwoIzQ4cHgtYikiLz4NCjwvc3ZnPg0K';
  },
  909: function (n, e, o) {
    'use strict';
    o.r(e);
    var t = o(0),
      r = o.n(t),
      i = o(18),
      a = o.n(i),
      l = o(3),
      _ = o.n(l),
      s = o(4),
      c = o.n(s),
      p = o(5),
      M = o.n(p),
      f = o(6),
      u = o.n(f),
      N = o(2),
      T = o.n(N),
      g = o(8),
      j = o.n(g),
      z = (o(734), o(7)),
      D = {
        './fileTransport.less': {
          content: 'fileTransport__content__MZjqO9FQ',
          show: 'fileTransport__show__3jTEgvAG',
          hide: 'fileTransport__hide__1Rk3y4ik',
          icon: 'fileTransport__icon__1bJNQiJx',
          main: 'fileTransport__main__24SFH66p',
          title: 'fileTransport__title__2r4C_bRE',
          detail: 'fileTransport__detail__2bVKn7qx',
          count: 'fileTransport__count__gUlH2qmj',
          username: 'fileTransport__username__3jiH7gZY',
        },
      };
    function d(r) {
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
          e = T()(r);
        if (i) {
          var t = T()(this).constructor;
          n = Reflect.construct(e, arguments, t);
        } else n = e.apply(this, arguments);
        return u()(this, n);
      };
    }
    var m = (function (n) {
        M()(a, n);
        var i = d(a);
        function a() {
          var e;
          _()(this, a);
          for (var n = arguments.length, t = new Array(n), r = 0; r < n; r++)
            t[r] = arguments[r];
          return (
            ((e = i.call.apply(i, [this].concat(t))).state = {
              data: {
                userName: '',
                avatar: '',
                fileCount: '',
                directoryPath: '',
              },
              show: !window.DWMOpenState,
            }),
            (e.timeout = null),
            (e.getFileTransportMessage = function () {
              z.a.on('fileTransportMessage', function (n) {
                clearTimeout(e.timeout),
                  setTimeout(function () {
                    e.setState({ data: n, show: !0 }, function () {
                      e.timeout = setTimeout(function () {
                        z.a.send('windowControl', {
                          typeName: 'destroy',
                          windowName: window.windowName,
                        });
                      }, 3e3);
                    });
                  }, 0);
              });
            }),
            (e.handleImageError = function (n) {
              n.target.src = o(736);
            }),
            (e.handleOpenFilePath = function () {
              z.a.send('openExternal', e.state.data.directoryPath);
            }),
            (e.componentDidMount = function () {
              e.getFileTransportMessage();
            }),
            e
          );
        }
        return (
          c()(a, [
            {
              key: 'render',
              value: function () {
                var n = this.state,
                  e = n.data,
                  t = n.show;
                return r.a.createElement(
                  'div',
                  {
                    style: {
                      borderRadius: window.DWMOpenState ? '4px' : '0px',
                    },
                    onClick: this.handleOpenFilePath,
                    className: j()(t ? 'content show' : 'content hide', D),
                  },
                  r.a.createElement(
                    'div',
                    { className: 'fileTransport__icon__1bJNQiJx' },
                    r.a.createElement('img', {
                      src: e.avatar,
                      onError: this.handleImageError,
                    })
                  ),
                  r.a.createElement(
                    'div',
                    { className: 'fileTransport__main__24SFH66p' },
                    r.a.createElement(
                      'div',
                      { className: 'fileTransport__title__2r4C_bRE' },
                      r.a.createElement('p', null, '文件传输')
                    ),
                    r.a.createElement(
                      'div',
                      { className: 'fileTransport__detail__2bVKn7qx' },
                      r.a.createElement(
                        'p',
                        null,
                        r.a.createElement('span', null, '来自"'),
                        r.a.createElement(
                          'span',
                          { className: 'fileTransport__username__3jiH7gZY' },
                          e.userName
                        ),
                        r.a.createElement('span', null, '"发送的'),
                        r.a.createElement(
                          'span',
                          { className: 'fileTransport__count__gUlH2qmj' },
                          ' ',
                          99 < e.fileCount ? '99+' : e.fileCount,
                          ' '
                        ),
                        r.a.createElement('span', null, '文件')
                      )
                    )
                  )
                );
              },
            },
          ]),
          a
        );
      })(t.PureComponent),
      x = o(21);
    o(30);
    var y;
    (y = m),
      a.a.render(
        r.a.createElement(x.a, null, r.a.createElement(y, null)),
        document.getElementById('root')
      );
  },
});
