!(function (i) {
  function M(M) {
    for (
      var I, t, n = M[0], N = M[1], e = M[2], D = 0, g = [];
      D < n.length;
      D++
    )
      (t = n[D]),
        Object.prototype.hasOwnProperty.call(j, t) && j[t] && g.push(j[t][0]),
        (j[t] = 0);
    for (I in N) Object.prototype.hasOwnProperty.call(N, I) && (i[I] = N[I]);
    for (s && s(M); g.length; ) g.shift()();
    return o.push.apply(o, e || []), z();
  }
  function z() {
    for (var M, I = 0; I < o.length; I++) {
      for (var t = o[I], n = !0, N = 1; N < t.length; N++) {
        var e = t[N];
        0 !== j[e] && (n = !1);
      }
      n && (o.splice(I--, 1), (M = D((D.s = t[0]))));
    }
    return M;
  }
  var t = {},
    j = { 44: 0 },
    o = [];
  function D(M) {
    if (t[M]) return t[M].exports;
    var I = (t[M] = { i: M, l: !1, exports: {} });
    return i[M].call(I.exports, I, I.exports, D), (I.l = !0), I.exports;
  }
  (D.m = i),
    (D.c = t),
    (D.d = function (M, I, t) {
      D.o(M, I) || Object.defineProperty(M, I, { enumerable: !0, get: t });
    }),
    (D.r = function (M) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(M, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(M, '__esModule', { value: !0 });
    }),
    (D.t = function (I, M) {
      if ((1 & M && (I = D(I)), 8 & M)) return I;
      if (4 & M && 'object' == typeof I && I && I.__esModule) return I;
      var t = Object.create(null);
      if (
        (D.r(t),
        Object.defineProperty(t, 'default', { enumerable: !0, value: I }),
        2 & M && 'string' != typeof I)
      )
        for (var n in I)
          D.d(
            t,
            n,
            function (M) {
              return I[M];
            }.bind(null, n)
          );
      return t;
    }),
    (D.n = function (M) {
      var I =
        M && M.__esModule
          ? function () {
              return M.default;
            }
          : function () {
              return M;
            };
      return D.d(I, 'a', I), I;
    }),
    (D.o = function (M, I) {
      return Object.prototype.hasOwnProperty.call(M, I);
    }),
    (D.p = '');
  var I = (window.webpackJsonp = window.webpackJsonp || []),
    n = I.push.bind(I);
  (I.push = M), (I = I.slice());
  for (var N = 0; N < I.length; N++) M(I[N]);
  var s = n;
  o.push([929, 0]), z();
})({
  873: function (M, I, t) {
    var n = t(874);
    'string' == typeof n && (n = [[M.i, n, '']]);
    var N = { hmr: !0, transform: void 0, insertInto: void 0 };
    t(12)(n, N);
    n.locals && (M.exports = n.locals);
  },
  874: function (M, I, t) {
    var n = t(27);
    (I = M.exports = t(11)(!1)).push([
      M.i,
      ".usbInsertPrompt__box__2n-q5hH1 {\n  position: relative;\n  width: 336px;\n  height: 156px;\n  padding: 24px;\n  background-color: #fff;\n}\n.usbInsertPrompt__box__2n-q5hH1.usbInsertPrompt__dwm__2vslM3TK {\n  margin: 0 auto;\n  -webkit-box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);\n          box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);\n  border-radius: 4px;\n}\n.usbInsertPrompt__box__2n-q5hH1 .usbInsertPrompt__close__2uUDR1nH {\n  position: absolute;\n  right: 12px;\n  top: 12px;\n  width: 16px;\n  height: 16px;\n  font-size: 20px;\n  line-height: 16px;\n  text-align: center;\n  color: #9598a1;\n}\n.usbInsertPrompt__box__2n-q5hH1 .usbInsertPrompt__content__1RG0oo-W {\n  width: 100%;\n}\n.usbInsertPrompt__box__2n-q5hH1 .usbInsertPrompt__content__1RG0oo-W::before {\n  content: '';\n  display: block;\n  float: left;\n  margin: 2px 0;\n  width: 48px;\n  height: 48px;\n  background-image: url(" +
        n(t(875)) +
        ');\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n.usbInsertPrompt__box__2n-q5hH1 .usbInsertPrompt__content__1RG0oo-W .usbInsertPrompt__detail__2WXPox0p {\n  margin-left: 64px;\n}\n.usbInsertPrompt__box__2n-q5hH1 .usbInsertPrompt__content__1RG0oo-W .usbInsertPrompt__detail__2WXPox0p > p:first-child {\n  width: 100%;\n  font-size: 20px;\n  color: #2c3144;\n  line-height: 26px;\n}\n.usbInsertPrompt__box__2n-q5hH1 .usbInsertPrompt__content__1RG0oo-W .usbInsertPrompt__detail__2WXPox0p > p:last-child {\n  margin-top: 8px;\n  width: 100%;\n  font-size: 14px;\n  color: #6b6e7c;\n  line-height: 18px;\n}\n.usbInsertPrompt__box__2n-q5hH1 .usbInsertPrompt__content__1RG0oo-W .usbInsertPrompt__detail__2WXPox0p span {\n  display: inline-block;\n  max-width: 175px;\n  overflow: hidden;\n  white-space: nowrap;\n  -o-text-overflow: ellipsis;\n     text-overflow: ellipsis;\n  vertical-align: middle;\n}\n.usbInsertPrompt__box__2n-q5hH1 .usbInsertPrompt__button__3ghHkDSt {\n  margin-top: 24px;\n  width: 100%;\n}\n.usbInsertPrompt__box__2n-q5hH1 .usbInsertPrompt__button__3ghHkDSt > div {\n  float: right;\n}\n.usbInsertPrompt__box__2n-q5hH1 .usbInsertPrompt__button__3ghHkDSt .usbInsertPrompt__start__TZ5TUxL6 {\n  width: 128px;\n  height: 32px;\n  background: #3da4ff;\n  border-radius: 2px;\n  font-size: 14px;\n  color: #ffffff;\n  text-align: center;\n  line-height: 32px;\n}\n.usbInsertPrompt__box__2n-q5hH1 .usbInsertPrompt__button__3ghHkDSt .usbInsertPrompt__open__34FgrHbt {\n  margin-right: 16px;\n  line-height: 32px;\n  font-size: 14px;\n  color: #3da4ff;\n}\n',
      '',
    ]),
      (I.locals = {
        box: 'usbInsertPrompt__box__2n-q5hH1',
        dwm: 'usbInsertPrompt__dwm__2vslM3TK',
        close: 'usbInsertPrompt__close__2uUDR1nH',
        content: 'usbInsertPrompt__content__1RG0oo-W',
        detail: 'usbInsertPrompt__detail__2WXPox0p',
        button: 'usbInsertPrompt__button__3ghHkDSt',
        start: 'usbInsertPrompt__start__TZ5TUxL6',
        open: 'usbInsertPrompt__open__34FgrHbt',
      });
  },
  875: function (M, I) {
    M.exports =
      'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCI+DQogIDxkZWZzPg0KICAgIDxjaXJjbGUgaWQ9InXnm5gtYSIgY3g9IjI0IiBjeT0iMjQiIHI9IjI0Ii8+DQogICAgPGxpbmVhckdyYWRpZW50IGlkPSJ155uYLWMiIHgxPSI1MCUiIHgyPSI1MCUiIHkxPSIyLjAzMiUiIHkyPSIxNzIuNDYlIj4NCiAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNERkYwRkYiLz4NCiAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzgwQzNGRiIvPg0KICAgIDwvbGluZWFyR3JhZGllbnQ+DQogICAgPGxpbmVhckdyYWRpZW50IGlkPSJ155uYLWQiIHgxPSI0Ny43NjMlIiB4Mj0iMjguNzA5JSIgeTE9IjYuNDczJSIgeTI9IjE2MC45MzUlIj4NCiAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNBM0Q0RkYiLz4NCiAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzVFQjNGRiIvPg0KICAgIDwvbGluZWFyR3JhZGllbnQ+DQogICAgPGxpbmVhckdyYWRpZW50IGlkPSJ155uYLWUiIHgxPSI1MCUiIHgyPSI1MCUiIHkxPSIwJSIgeTI9Ijk3LjIzNCUiPg0KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI0EzRDRGRiIvPg0KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjNUVCM0ZGIi8+DQogICAgPC9saW5lYXJHcmFkaWVudD4NCiAgICA8bGluZWFyR3JhZGllbnQgaWQ9InXnm5gtZiIgeDE9IjYzLjk3MSUiIHgyPSIyNi4wMjklIiB5MT0iNC45MzIlIiB5Mj0iOTAuNDA1JSI+DQogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjQTNENEZGIi8+DQogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiM1RUIzRkYiLz4NCiAgICA8L2xpbmVhckdyYWRpZW50Pg0KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0ideebmC1nIiB4MT0iNTAlIiB4Mj0iMjg0LjE3OCUiIHkxPSI5Ny41NDElIiB5Mj0iLTE5NC45MzglIj4NCiAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMyQjkwRTkiLz4NCiAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzdFQzNGRiIvPg0KICAgIDwvbGluZWFyR3JhZGllbnQ+DQogICAgPGxpbmVhckdyYWRpZW50IGlkPSJ155uYLWgiIHgxPSI1MCUiIHgyPSI1MCUiIHkxPSItNDAuMjYzJSIgeTI9IjEwMCUiPg0KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI0IzREJGRiIvPg0KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjODBDM0ZGIi8+DQogICAgPC9saW5lYXJHcmFkaWVudD4NCiAgICA8bGluZWFyR3JhZGllbnQgaWQ9InXnm5gtaSIgeDE9IjUwLjY5MyUiIHgyPSI1MCUiIHkxPSItMjIuMTkxJSIgeTI9Ijk3LjIzNCUiPg0KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI0EzRDRGRiIvPg0KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjNUVCM0ZGIi8+DQogICAgPC9saW5lYXJHcmFkaWVudD4NCiAgPC9kZWZzPg0KICA8bWFzayBpZD0ideebmC1iIiBmaWxsPSIjZmZmIj4NCiAgICA8dXNlIHhsaW5rOmhyZWY9IiN155uYLWEiLz4NCiAgPC9tYXNrPg0KICA8dXNlIGZpbGw9IiMzREE0RkYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgeGxpbms6aHJlZj0iI3Xnm5gtYSIvPg0KICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIG1hc2s9InVybCgjdeebmC1iKSI+DQogICAgPHBhdGggZmlsbD0idXJsKCN155uYLWMpIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik0zMy45Mzk2OTIzLDI1LjEzNTU4NDggTDMzLjkzOTY5MjMsMy44MDA2ODE3NCBDMzMuOTM5NjkyMywyLjg3NDYxMjAyIDMzLjM2MTgwMzQsMi4wNDY5NDA5NCAzMi40OTI0MzUyLDEuNzI3ODczNDYgTDI4LjgyOTE3MjIsMC4zODM0MTY1MDcgQzI4LjE0MzQyNDMsMC4xMzE3Mzk2NjkgMjcuNDA1OTUzNywwLjA1NDEwMzkzMDggMjYuNjgyODMsMC4xNTc0NjQ2NDUgTDcuODk1NTcxODMsMi44NDI4NDgwMiBDNi44MDc4Nzk5OCwyLjk5ODMxODggNiwzLjkyOTg4NTM1IDYsNS4wMjg2MzIyNCBMNiwyNS4xMzU1ODQ4IEw2LDI1LjEzNTU4NDggTDIyLjM5MTg4MjMsMzAuOTEyIEwzMy45Mzk2OTIzLDI1LjEzNTU4NDggWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNCAxMikiLz4NCiAgICA8cGF0aCBmaWxsPSJ1cmwoI3Xnm5gtZCkiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTI3LjA5NzE5NjQsMC4xMTgwNTEzMjQgQzI3LjY4NTA1MDMsMC4wODk5OTg3MzMzIDI4LjI3NDA1OCwwLjE3OTY4MzY0MiAyOC44MjkxNzIyLDAuMzgzNDE2NTA3IEwyOC44MjkxNzIyLDAuMzgzNDE2NTA3IEwzMi40OTI0MzUyLDEuNzI3ODczNDYgQzMzLjM2MTgwMzQsMi4wNDY5NDA5NCAzMy45Mzk2OTIzLDIuODc0NjEyMDIgMzMuOTM5NjkyMywzLjgwMDY4MTc0IEwzMy45Mzk2OTIzLDMuODAwNjgxNzQgTDMzLjkzOTE5NjQsMjAuOTU3MDMyMSBMMjcuMDk3MzE4NywyMC45NTcyODgxIFoiIG9wYWNpdHk9Ii44NjYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQgMTIpIi8+DQogICAgPHBhdGggZmlsbD0idXJsKCN155uYLWUpIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik0yOC44MDcsMC4zNzU1NDIzNzMgTDI4LjgyOTE3MjIsMC4zODM0MTY1MDcgTDMyLjQ5MjQzNTIsMS43Mjc4NzM0NiBDMzMuMzYxODAzNCwyLjA0Njk0MDk0IDMzLjkzOTY5MjMsMi44NzQ2MTIwMiAzMy45Mzk2OTIzLDMuODAwNjgxNzQgTDMzLjkzOTY5MjMsMy44MDA2ODE3NCBMMzMuOTM5LDIwLjk1NjU0MjQgTDI4LjgwNzkxMjEsMjAuOTU3Mjg4MSBMMjguODA3LDAuMzc1NTQyMzczIFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQgMTIpIi8+DQogICAgPHBhdGggZmlsbD0idXJsKCN155uYLWYpIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik0yNy4wOTc2NzI5LDAuMTE4MDI4NjA3IEwyNy4wOTczMTg3LDE4Ljk1NjkwNTUgTDE1LjY5MzM2MjYsMjEuNjkzMzY5NSBMMTUuNjkzMzYyNiwxNi42ODE0NzI2IEMxNS42OTMzNjI2LDE2LjQyNDIyMzggMTUuODcxMDYsMTYuMjAxMDc4NSAxNi4xMjE3Nzg3LDE2LjE0MzQ4NDcgTDE2LjEyMTc3ODcsMTYuMTQzNDg0NyBMMTcuNzU5OTQ1OCwxNS43NjcxNzI5IEMxNy44ODUzMDUyLDE1LjczODM3NiAxNy45NzQxNTM4LDE1LjYyNjgwMzMgMTcuOTc0MTUzOCwxNS40OTgxNzkgTDE3Ljk3NDE1MzgsMTUuNDk4MTc5IEwxNy45NzQxNTM4LDEyLjkwNzc3NjggQzE3Ljk3NDE1MzgsMTIuODkwNDgyOSAxNy45NzI1Mjg0LDEyLjg3MzIyNzIgMTcuOTY5Mjk5LDEyLjg1NjIzNzUgQzE3Ljk0MDgzNDYsMTIuNzA2NDg4MSAxNy43OTYzNjM4LDEyLjYwODE2NzIgMTcuNjQ2NjE0NSwxMi42MzY2MzE2IEwxNy42NDY2MTQ1LDEyLjYzNjYzMTYgTDE2LjM0ODQ0MTMsMTIuODgzMzg4NyBDMTYuMzE0NDYxOCwxMi44ODk4NDc1IDE2LjI3OTk1MDUsMTIuODkzMDk4NCAxNi4yNDUzNjI2LDEyLjg5MzA5ODQgQzE1Ljk0MDUwMTUsMTIuODkzMDk4NCAxNS42OTMzNjI2LDEyLjY0NTk1OTYgMTUuNjkzMzYyNiwxMi4zNDEwOTg0IEwxNS42OTMzNjI2LDEyLjM0MTA5ODQgTDE1LjY5MzM2MjYsOS4zNDY0MjE3NCBDMTUuNjkzMzYyNiw5LjA4OTE3Mjk2IDE1Ljg3MTA2LDguODY2MDI3NyAxNi4xMjE3Nzg3LDguODA4NDMzODIgTDE2LjEyMTc3ODcsOC44MDg0MzM4MiBMMTcuNzU5OTQ1OCw4LjQzMjEyMjA3IEMxNy44ODUzMDUyLDguNDAzMzI1MTMgMTcuOTc0MTUzOCw4LjI5MTc1MjUgMTcuOTc0MTUzOCw4LjE2MzEyODExIEwxNy45NzQxNTM4LDguMTYzMTI4MTEgTDE3Ljk3NDE1MzgsNS41NzE2NTI5NSBDMTcuOTc0MTUzOCw1LjU1NDY1MTA4IDE3Ljk3MjU4MjksNS41Mzc2ODU1NyAxNy45Njk0NjA5LDUuNTIwOTcyNzkgQzE3Ljk0MTQ3MSw1LjM3MTEzNDA0IDE3Ljc5NzMxMjQsNS4yNzIzNTYwMSAxNy42NDc0NzM3LDUuMzAwMzQ1ODkgTDE3LjY0NzQ3MzcsNS4zMDAzNDU4OSBMMTYuMzQ2NzIzLDUuNTQzMzI2MTIgQzE2LjMxMzI5NzQsNS41NDk1NzAwMSAxNi4yNzkzNjY0LDUuNTUyNzExOTkgMTYuMjQ1MzYyNiw1LjU1MjcxMTk5IEMxNS45NDA1MDE1LDUuNTUyNzExOTkgMTUuNjkzMzYyNiw1LjMwNTU3MzE4IDE1LjY5MzM2MjYsNS4wMDA3MTE5OSBMMTUuNjkzMzYyNiw1LjAwMDcxMTk5IEwxNS42OTMsMS43MjgwMjg2MSBMMjYuNjgyODMsMC4xNTc0NjQ2NDUgQzI2LjgyMDc0MTksMC4xMzc3NTIwMDkgMjYuOTU5MTc1NywwLjEyNDYyMjc0NiAyNy4wOTc2NzI5LDAuMTE4MDI4NjA3IFoiIG9wYWNpdHk9Ii4zNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNCAxMikiLz4NCiAgICA8cGF0aCBmaWxsPSJ1cmwoI3Xnm5gtZykiIGQ9Ik05LjY2Mjg3MjU2IDEwLjkwNjgwMTdMMTIuNzY5NjQxOCAxMC41MTc1MjYyQzEyLjkyMDg4OTcgMTAuNDk4NTc0OSAxMy4wNTg4NjM0IDEwLjYwNTgyMjYgMTMuMDc3ODE0NiAxMC43NTcwNzA1IDEzLjA3OTI0MDkgMTAuNzY4NDUzIDEzLjA3OTk1NiAxMC43Nzk5MTMzIDEzLjA3OTk1NiAxMC43OTEzODQ4TDEzLjA3OTk1NiAxMy40NDQxNTMyQzEzLjA3OTk1NiAxMy41ODMzMTU1IDEyLjk3NjM1MjggMTMuNzAwNzEwMiAxMi44MzgyNzAzIDEzLjcxODAxMThMOS43MzE1MDEwNiAxNC4xMDcyODc0QzkuNTgwMjUzMTQgMTQuMTI2MjM4NiA5LjQ0MjI3OTQ1IDE0LjAxODk5MSA5LjQyMzMyODIxIDEzLjg2Nzc0MyA5LjQyMTkwMiAxMy44NTYzNjA2IDkuNDIxMTg2ODEgMTMuODQ0OTAwMyA5LjQyMTE4NjgxIDEzLjgzMzQyODhMOS40MjExODY4MSAxMS4xODA2NjAzQzkuNDIxMTg2ODEgMTEuMDQxNDk4MSA5LjUyNDc5MDAzIDEwLjkyNDEwMzQgOS42NjI4NzI1NiAxMC45MDY4MDE3ek0yMS4wNjY4Mjg2IDguODExMDcyOTFMMjQuMTczNTk3OCA4LjQyMTc5NzM3QzI0LjMyNDg0NTggOC40MDI4NDYxMyAyNC40NjI4MTk0IDguNTEwMDkzNzkgMjQuNDgxNzcwNyA4LjY2MTM0MTcyIDI0LjQ4MzE5NjkgOC42NzI3MjQxOCAyNC40ODM5MTIxIDguNjg0MTg0NDkgMjQuNDgzOTEyMSA4LjY5NTY1NTk3TDI0LjQ4MzkxMjEgMTEuMzQ4NDI0NEMyNC40ODM5MTIxIDExLjQ4NzU4NjcgMjQuMzgwMzA4OSAxMS42MDQ5ODE0IDI0LjI0MjIyNjMgMTEuNjIyMjgzTDIxLjEzNTQ1NzEgMTIuMDExNTU4NkMyMC45ODQyMDkyIDEyLjAzMDUwOTggMjAuODQ2MjM1NSAxMS45MjMyNjIxIDIwLjgyNzI4NDMgMTEuNzcyMDE0MiAyMC44MjU4NTggMTEuNzYwNjMxOCAyMC44MjUxNDI5IDExLjc0OTE3MTQgMjAuODI1MTQyOSAxMS43Mzc3TDIwLjgyNTE0MjkgOS4wODQ5MzE1MUMyMC44MjUxNDI5IDguOTQ1NzY5MjYgMjAuOTI4NzQ2MSA4LjgyODM3NDU0IDIxLjA2NjgyODYgOC44MTEwNzI5MXoiIG9wYWNpdHk9Ii40IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0IDEyKSIvPg0KICAgIDxwYXRoIGZpbGw9InVybCgjdeebmC1oKSIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNMzkuOTQ0MzQ5Niw1NC4zNjgzNTk1IEwzOS45NDQzNDk2LDIwLjk1NDU2MDcgQzM5Ljk0NDM0OTYsMjAuMDQ2MDI5IDM5LjM4NzgzNTcsMTkuMjMwMjM4NCAzOC41NDE5MzEzLDE4Ljg5ODc2MzUgTDMyLjgwMTM0OTYsMTYuNjQ5MjY3NyBDMzEuNzE1OTk2OCwxNi4yMjM5NjI5IDMwLjUzNzYyNzgsMTYuMDkyNjEwMyAyOS4zODUyNjI2LDE2LjI2ODQ3NyBMMS44NzQ4ODU5OSwyMC40NjY5MzYyIEMwLjc5NjU1ODUwOSwyMC42MzE1MDM3IC0xLjMzNTg2MDQzZS0xNiwyMS41NTg4NTA4IDAsMjIuNjQ5NjYzNiBMMCw1NC4zNjgzNTk1IEwwLDU0LjM2ODM1OTUgTDIzLjQzNDg3MDgsNjMuMTg1ODAyMSBMMzkuOTQ0MzQ5Niw1NC4zNjgzNTk1IFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQgMTIpIi8+DQogICAgPHBhdGggZmlsbD0idXJsKCN155uYLWkpIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik0zMC4xNjYwNzg3LDE2LjE5NjI2MjQgQzMxLjA2MzQzNTUsMTYuMTY2NjQzMSAzMS45NjAzMTg3LDE2LjMxOTcwMjUgMzIuODAxMzQ5NiwxNi42NDkyNjc3IEwzMi44MDEzNDk2LDE2LjY0OTI2NzcgTDM4LjU0MTkzMTMsMTguODk4NzYzNSBDMzkuMzg3ODM1NywxOS4yMzAyMzg0IDM5Ljk0NDM0OTYsMjAuMDQ2MDI5IDM5Ljk0NDM0OTYsMjAuOTU0NTYwNyBMMzkuOTQ0MzQ5NiwyMC45NTQ1NjA3IEwzOS45NDQzNDk2LDU0LjM2ODM1OTUgTDMwLjE2Niw1OS41OTA2NTczIFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQgMTIpIi8+DQogIDwvZz4NCjwvc3ZnPg0K';
  },
  929: function (M, I, t) {
    'use strict';
    t.r(I);
    var n = t(0),
      D = t.n(n),
      N = t(18),
      e = t.n(N),
      g = t(3),
      i = t.n(g),
      z = t(4),
      j = t.n(z),
      o = t(5),
      s = t.n(o),
      r = t(6),
      T = t.n(r),
      u = t(2),
      c = t.n(u),
      a = t(8),
      l = t.n(a),
      y = (t(873), t(19)),
      x = t(7),
      A = {
        './usbInsertPrompt.less': {
          box: 'usbInsertPrompt__box__2n-q5hH1',
          dwm: 'usbInsertPrompt__dwm__2vslM3TK',
          close: 'usbInsertPrompt__close__2uUDR1nH',
          content: 'usbInsertPrompt__content__1RG0oo-W',
          detail: 'usbInsertPrompt__detail__2WXPox0p',
          button: 'usbInsertPrompt__button__3ghHkDSt',
          start: 'usbInsertPrompt__start__TZ5TUxL6',
          open: 'usbInsertPrompt__open__34FgrHbt',
        },
      };
    function _(n) {
      var N = (function () {
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
        } catch (M) {
          return !1;
        }
      })();
      return function () {
        var M,
          I = c()(n);
        if (N) {
          var t = c()(this).constructor;
          M = Reflect.construct(I, arguments, t);
        } else M = I.apply(this, arguments);
        return T()(this, M);
      };
    }
    var p = (function (M) {
        s()(e, M);
        var N = _(e);
        function e() {
          var I;
          i()(this, e);
          for (var M = arguments.length, t = new Array(M), n = 0; n < M; n++)
            t[n] = arguments[n];
          return (
            ((I = N.call.apply(N, [this].concat(t))).state = {
              name: '',
              path: '',
            }),
            (I.handleClose = function () {
              x.a.send('windowControl', {
                typeName: 'close',
                windowName: window.windowName,
              });
            }),
            (I.handleOpen = function () {
              x.a.send('openExternal', I.state.path), I.handleClose();
            }),
            (I.handleStartVirusKilling = function () {
              x.a.send('startVirusKilling', I.state.path), I.handleClose();
            }),
            (I.getDiskMessage = function () {
              var M = window._ACCEPT_DATA.getData('diskMessage');
              I.setState({
                name: M.name || M.path.split(':/').shift(),
                path: M.path,
              });
            }),
            I
          );
        }
        return (
          j()(e, [
            {
              key: 'componentDidMount',
              value: function () {
                var M = this;
                this.getDiskMessage(),
                  setTimeout(function () {
                    M.handleClose();
                  }, 15e3);
              },
            },
            {
              key: 'render',
              value: function () {
                var M = this.state,
                  I = M.name,
                  t = M.path;
                return D.a.createElement(
                  'div',
                  {
                    className: l()(
                      'box '.concat(window.DWMOpenState ? 'dwm' : ''),
                      A
                    ),
                  },
                  D.a.createElement(
                    'div',
                    { className: 'usbInsertPrompt__close__2uUDR1nH' },
                    D.a.createElement(y.a, {
                      activeStyle: 'scale',
                      onClick: this.handleClose,
                    }),
                    D.a.createElement('i', { className: 'iconfont' }, '')
                  ),
                  D.a.createElement(
                    'div',
                    { className: 'clear usbInsertPrompt__content__1RG0oo-W' },
                    D.a.createElement(
                      'div',
                      { className: 'usbInsertPrompt__detail__2WXPox0p' },
                      D.a.createElement(
                        'p',
                        null,
                        D.a.createElement('span', null, I),
                        '(',
                        t.split('/').shift(),
                        ')'
                      ),
                      D.a.createElement(
                        'p',
                        null,
                        '查杀可预防设备感染，守护设备安全'
                      )
                    )
                  ),
                  D.a.createElement(
                    'div',
                    { className: 'clear usbInsertPrompt__button__3ghHkDSt' },
                    D.a.createElement(
                      'div',
                      { className: 'usbInsertPrompt__start__TZ5TUxL6' },
                      D.a.createElement(y.a, {
                        onClick: this.handleStartVirusKilling,
                      }),
                      D.a.createElement('p', null, '开始查杀（推荐）')
                    ),
                    D.a.createElement(
                      'div',
                      { className: 'usbInsertPrompt__open__34FgrHbt' },
                      D.a.createElement(y.a, { onClick: this.handleOpen }),
                      D.a.createElement('p', null, '打开U盘')
                    )
                  )
                );
              },
            },
          ]),
          e
        );
      })(n.PureComponent),
      O = t(21);
    t(30);
    var b;
    (b = p),
      e.a.render(
        D.a.createElement(O.a, null, D.a.createElement(b, null)),
        document.getElementById('root')
      );
  },
});
