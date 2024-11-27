!(function (N) {
  function I(I) {
    for (
      var i, n, e = I[0], t = I[1], g = I[2], c = 0, M = [];
      c < e.length;
      c++
    )
      (n = e[c]),
        Object.prototype.hasOwnProperty.call(o, n) && o[n] && M.push(o[n][0]),
        (o[n] = 0);
    for (i in t) Object.prototype.hasOwnProperty.call(t, i) && (N[i] = t[i]);
    for (u && u(I); M.length; ) M.shift()();
    return x.push.apply(x, g || []), A();
  }
  function A() {
    for (var I, i = 0; i < x.length; i++) {
      for (var n = x[i], e = !0, t = 1; t < n.length; t++) {
        var g = n[t];
        0 !== o[g] && (e = !1);
      }
      e && (x.splice(i--, 1), (I = c((c.s = n[0]))));
    }
    return I;
  }
  var n = {},
    o = { 27: 0 },
    x = [];
  function c(I) {
    if (n[I]) return n[I].exports;
    var i = (n[I] = { i: I, l: !1, exports: {} });
    return N[I].call(i.exports, i, i.exports, c), (i.l = !0), i.exports;
  }
  (c.m = N),
    (c.c = n),
    (c.d = function (I, i, n) {
      c.o(I, i) || Object.defineProperty(I, i, { enumerable: !0, get: n });
    }),
    (c.r = function (I) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(I, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(I, "__esModule", { value: !0 });
    }),
    (c.t = function (i, I) {
      if ((1 & I && (i = c(i)), 8 & I)) return i;
      if (4 & I && "object" == typeof i && i && i.__esModule) return i;
      var n = Object.create(null);
      if (
        (c.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: i }),
        2 & I && "string" != typeof i)
      )
        for (var e in i)
          c.d(
            n,
            e,
            function (I) {
              return i[I];
            }.bind(null, e)
          );
      return n;
    }),
    (c.n = function (I) {
      var i =
        I && I.__esModule
          ? function () {
              return I.default;
            }
          : function () {
              return I;
            };
      return c.d(i, "a", i), i;
    }),
    (c.o = function (I, i) {
      return Object.prototype.hasOwnProperty.call(I, i);
    }),
    (c.p = "");
  var i = (window.webpackJsonp = window.webpackJsonp || []),
    e = i.push.bind(i);
  (i.push = I), (i = i.slice());
  for (var t = 0; t < i.length; t++) I(i[t]);
  var u = e;
  x.push([918, 0]), A();
})({
  795: function (I, i, n) {
    var e = n(796);
    "string" == typeof e && (e = [[I.i, e, ""]]);
    var t = { hmr: !0, transform: void 0, insertInto: void 0 };
    n(12)(e, t);
    e.locals && (I.exports = e.locals);
  },
  796: function (I, i, n) {
    var e = n(27);
    (i = I.exports = n(11)(!1)).push([
      I.i,
      ".index__content__3vEIeTSE {\n  position: absolute;\n  width: 100%;\n  height: 80px;\n  left: 0;\n  background: #ffffff;\n  border-radius: 4px;\n  -webkit-transition: all 0.5s;\n  -o-transition: all 0.5s;\n  transition: all 0.5s;\n  padding: 0 20px 0 24px;\n}\n.index__content__3vEIeTSE.index__usb-box__116trdvm {\n  padding: 0 8px !important;\n}\n.index__content__3vEIeTSE.index__usb-box__116trdvm .index__fail__zG3zPekG > span {\n  margin: 16px 8px 16px 0 !important;\n}\n.index__content__3vEIeTSE.index__show__2KNux1JW {\n  top: 0;\n  opacity: 1;\n}\n.index__content__3vEIeTSE.index__hide__3gq-mfg3 {\n  top: 100%;\n  opacity: 0.5;\n}\n.index__content__3vEIeTSE .index__success__24mHuHhH,\n.index__content__3vEIeTSE .index__fail__zG3zPekG {\n  width: 100%;\n  height: 100%;\n}\n.index__content__3vEIeTSE .index__success__24mHuHhH > span,\n.index__content__3vEIeTSE .index__fail__zG3zPekG > span {\n  display: block;\n  width: 48px;\n  height: 48px;\n  float: left;\n  margin: 16px 16px 16px 0;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n.index__content__3vEIeTSE .index__success__24mHuHhH .index__s-icon__3cLfgMZo,\n.index__content__3vEIeTSE .index__fail__zG3zPekG .index__s-icon__3cLfgMZo {\n  background-image: url(" +
        e(n(797)) +
        ");\n}\n.index__content__3vEIeTSE .index__success__24mHuHhH .index__f-icon__1lKwpCbX,\n.index__content__3vEIeTSE .index__fail__zG3zPekG .index__f-icon__1lKwpCbX {\n  background-image: url(" +
        e(n(798)) +
        ");\n}\n.index__content__3vEIeTSE .index__success__24mHuHhH .index__podium__1MDHmjRX,\n.index__content__3vEIeTSE .index__fail__zG3zPekG .index__podium__1MDHmjRX {\n  background-image: url(" +
        e(n(799)) +
        ");\n}\n.index__content__3vEIeTSE .index__success__24mHuHhH .index__exception__2hkT0rco,\n.index__content__3vEIeTSE .index__fail__zG3zPekG .index__exception__2hkT0rco {\n  background-image: url(" +
        e(n(800)) +
        ");\n}\n.index__content__3vEIeTSE .index__success__24mHuHhH .index__usb-insert__3Lf4E6a5,\n.index__content__3vEIeTSE .index__fail__zG3zPekG .index__usb-insert__3Lf4E6a5 {\n  background-image: url(" +
        e(n(801)) +
        ");\n}\n.index__content__3vEIeTSE .index__success__24mHuHhH .index__text-place__2oPNa2Uy,\n.index__content__3vEIeTSE .index__fail__zG3zPekG .index__text-place__2oPNa2Uy {\n  margin-left: 48px;\n  height: 80px;\n  color: #333333;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.index__content__3vEIeTSE .index__success__24mHuHhH .index__text-place__2oPNa2Uy p,\n.index__content__3vEIeTSE .index__fail__zG3zPekG .index__text-place__2oPNa2Uy p {\n  word-wrap: break-word;\n  word-break: break-all;\n}\n.index__content__3vEIeTSE .index__success__24mHuHhH .index__text-place__2oPNa2Uy.index__min-text__37vBLDo0,\n.index__content__3vEIeTSE .index__fail__zG3zPekG .index__text-place__2oPNa2Uy.index__min-text__37vBLDo0 {\n  font-size: 14px;\n}\n.index__content__3vEIeTSE .index__success__24mHuHhH .index__text-place__2oPNa2Uy.index__normal-text__2zNGgbdq,\n.index__content__3vEIeTSE .index__fail__zG3zPekG .index__text-place__2oPNa2Uy.index__normal-text__2zNGgbdq {\n  font-size: 16px;\n}\n",
      "",
    ]),
      (i.locals = {
        content: "index__content__3vEIeTSE",
        "usb-box": "index__usb-box__116trdvm",
        fail: "index__fail__zG3zPekG",
        show: "index__show__2KNux1JW",
        hide: "index__hide__3gq-mfg3",
        success: "index__success__24mHuHhH",
        "s-icon": "index__s-icon__3cLfgMZo",
        "f-icon": "index__f-icon__1lKwpCbX",
        podium: "index__podium__1MDHmjRX",
        exception: "index__exception__2hkT0rco",
        "usb-insert": "index__usb-insert__3Lf4E6a5",
        "text-place": "index__text-place__2oPNa2Uy",
        "min-text": "index__min-text__37vBLDo0",
        "normal-text": "index__normal-text__2zNGgbdq",
      });
  },
  797: function (I, i) {
    I.exports =
      "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCI+DQogIDxkZWZzPg0KICAgIDxyYWRpYWxHcmFkaWVudCBpZD0icGVuLWNvbm5lY3Rpb24tYSIgY3g9IjU4Ljk4NyUiIGN5PSI4Mi42NjMlIiByPSI2MC40NzclIiBmeD0iNTguOTg3JSIgZnk9IjgyLjY2MyUiPg0KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzk3OTc5NyIvPg0KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjNEE0QTRBIi8+DQogICAgPC9yYWRpYWxHcmFkaWVudD4NCiAgICA8bGluZWFyR3JhZGllbnQgaWQ9InBlbi1jb25uZWN0aW9uLWMiIHgxPSIxMDAlIiB4Mj0iMCUiIHkxPSI0NC44MSUiIHkyPSI0NC44MSUiPg0KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzA5ODFFQiIvPg0KICAgICAgPHN0b3Agb2Zmc2V0PSIyNS44NzklIiBzdG9wLWNvbG9yPSIjMzhBMkZGIi8+DQogICAgICA8c3RvcCBvZmZzZXQ9IjUxLjY2OSUiIHN0b3AtY29sb3I9IiM3M0JFRkYiLz4NCiAgICAgIDxzdG9wIG9mZnNldD0iNzMuNDU4JSIgc3RvcC1jb2xvcj0iIzNGQTVGRiIvPg0KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjNjZCOEZGIi8+DQogICAgPC9saW5lYXJHcmFkaWVudD4NCiAgICA8cGF0aCBpZD0icGVuLWNvbm5lY3Rpb24tYiIgZD0iTTEsMCBMOSwwIEM5LjU1MjI4NDc1LC0xLjAxNDUzMDYzZS0xNiAxMCwwLjQ0NzcxNTI1IDEwLDEgTDEwLDM1IEw2LjY2NjY2NjY3LDQzLjAwNDE1MDQgTDMuMzMzMzMzMzMsNDMuMDA0MTUwNCBMMCwzNSBMMCwxIEMtNi43NjM1Mzc1MWUtMTcsMC40NDc3MTUyNSAwLjQ0NzcxNTI1LDEuMDE0NTMwNjNlLTE2IDEsMCBaIi8+DQogICAgPGxpbmVhckdyYWRpZW50IGlkPSJwZW4tY29ubmVjdGlvbi1kIiB4MT0iMTAwJSIgeDI9IjAlIiB5MT0iNDQuODElIiB5Mj0iNDQuODElIj4NCiAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMxNDdBRDIiLz4NCiAgICAgIDxzdG9wIG9mZnNldD0iMzEuMTc4JSIgc3RvcC1jb2xvcj0iIzMwODlENiIvPg0KICAgICAgPHN0b3Agb2Zmc2V0PSI0OS41NDklIiBzdG9wLWNvbG9yPSIjNUFCMkZGIi8+DQogICAgICA8c3RvcCBvZmZzZXQ9IjY5LjA4NCUiIHN0b3AtY29sb3I9IiMyOTk5RkEiLz4NCiAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzkzQ0NGRiIvPg0KICAgIDwvbGluZWFyR3JhZGllbnQ+DQogICAgPGxpbmVhckdyYWRpZW50IGlkPSJwZW4tY29ubmVjdGlvbi1mIiB4MT0iLTEwLjY5OSUiIHkxPSI0MS42NzIlIiB5Mj0iNTAlIj4NCiAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNENkVDRkYiLz4NCiAgICAgIDxzdG9wIG9mZnNldD0iMzAuMDAxJSIgc3RvcC1jb2xvcj0iI0NDRTdGRiIvPg0KICAgICAgPHN0b3Agb2Zmc2V0PSI1Mi4zNjIlIiBzdG9wLWNvbG9yPSIjRjBGOEZGIi8+DQogICAgICA8c3RvcCBvZmZzZXQ9Ijc1Ljg5NCUiIHN0b3AtY29sb3I9IiNDN0U1RkYiLz4NCiAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzg1QzRGRiIvPg0KICAgIDwvbGluZWFyR3JhZGllbnQ+DQogIDwvZGVmcz4NCiAgPHJlY3Qgd2lkdGg9IjQ4IiBoZWlnaHQ9IjQ4IiBmaWxsPSJub25lIi8+DQogIDxwYXRoIGZpbGw9InVybCgjcGVuLWNvbm5lY3Rpb24tYSkiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTAuNSwwIEwzLjUsMCBMMy41LDEuNSBDMy41LDIuMzI4NDI3MTIgMi44Mjg0MjcxMiwzIDIsMyBMMiwzIEMxLjE3MTU3Mjg4LDMgMC41LDIuMzI4NDI3MTIgMC41LDEuNSBMMC41LDAgWiIgdHJhbnNmb3JtPSJyb3RhdGUoMzAgLTY5LjEwNSA0My41NTMpIi8+DQogIDxtYXNrIGlkPSJwZW4tY29ubmVjdGlvbi1lIiBmaWxsPSIjZmZmIj4NCiAgICA8dXNlIHhsaW5rOmhyZWY9IiNwZW4tY29ubmVjdGlvbi1iIi8+DQogIDwvbWFzaz4NCiAgPHVzZSBmaWxsPSJ1cmwoI3Blbi1jb25uZWN0aW9uLWMpIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHRyYW5zZm9ybT0icm90YXRlKDMwIDEwLjc2OCA1OC45NTQpIiB4bGluazpocmVmPSIjcGVuLWNvbm5lY3Rpb24tYiIvPg0KICA8cmVjdCB3aWR0aD0iMTIiIGhlaWdodD0iMSIgeD0iLTEiIHk9IjM0IiBmaWxsPSJ1cmwoI3Blbi1jb25uZWN0aW9uLWQpIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIG1hc2s9InVybCgjcGVuLWNvbm5lY3Rpb24tZSkiIHRyYW5zZm9ybT0icm90YXRlKDMwIDEwLjc2OCA1OC45NTQpIi8+DQogIDxyZWN0IHdpZHRoPSIxMiIgaGVpZ2h0PSIxIiB4PSItMSIgeT0iOCIgZmlsbD0idXJsKCNwZW4tY29ubmVjdGlvbi1kKSIgZmlsbC1ydWxlPSJldmVub2RkIiBtYXNrPSJ1cmwoI3Blbi1jb25uZWN0aW9uLWUpIiB0cmFuc2Zvcm09InJvdGF0ZSgzMCAxMC43NjggNTguOTU0KSIvPg0KICA8cmVjdCB3aWR0aD0iMTAiIGhlaWdodD0iOCIgZmlsbD0idXJsKCNwZW4tY29ubmVjdGlvbi1mKSIgZmlsbC1ydWxlPSJldmVub2RkIiBtYXNrPSJ1cmwoI3Blbi1jb25uZWN0aW9uLWUpIiB0cmFuc2Zvcm09InJvdGF0ZSgzMCAxMC43NjggNTguOTU0KSIvPg0KICA8cmVjdCB3aWR0aD0iMTAiIGhlaWdodD0iOCIgeT0iMzUiIGZpbGw9InVybCgjcGVuLWNvbm5lY3Rpb24tZikiIGZpbGwtcnVsZT0iZXZlbm9kZCIgbWFzaz0idXJsKCNwZW4tY29ubmVjdGlvbi1lKSIgdHJhbnNmb3JtPSJyb3RhdGUoMzAgMTAuNzY4IDU4Ljk1NCkiLz4NCjwvc3ZnPg0K";
  },
  798: function (I, i) {
    I.exports =
      "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCI+DQogIDxkZWZzPg0KICAgIDxyYWRpYWxHcmFkaWVudCBpZD0icGVuLWRpc2Nvbm5lY3RlZC1hIiBjeD0iNTguOTg3JSIgY3k9IjgyLjY2MyUiIHI9IjYwLjQ3NyUiIGZ4PSI1OC45ODclIiBmeT0iODIuNjYzJSI+DQogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjOTc5Nzk3Ii8+DQogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiM0QTRBNEEiLz4NCiAgICA8L3JhZGlhbEdyYWRpZW50Pg0KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0icGVuLWRpc2Nvbm5lY3RlZC1jIiB4MT0iMTAwJSIgeDI9IjAlIiB5MT0iNDQuODElIiB5Mj0iNDQuODElIj4NCiAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiM4RjkwOTYiLz4NCiAgICAgIDxzdG9wIG9mZnNldD0iMjUuODc5JSIgc3RvcC1jb2xvcj0iI0IxQjNCQSIvPg0KICAgICAgPHN0b3Agb2Zmc2V0PSI0OS45NzUlIiBzdG9wLWNvbG9yPSIjREZFM0U5Ii8+DQogICAgICA8c3RvcCBvZmZzZXQ9IjczLjQ1OCUiIHN0b3AtY29sb3I9IiNEMEQyRDgiLz4NCiAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iI0RCRERFMiIvPg0KICAgIDwvbGluZWFyR3JhZGllbnQ+DQogICAgPHBhdGggaWQ9InBlbi1kaXNjb25uZWN0ZWQtYiIgZD0iTTEsMCBMOSwwIEM5LjU1MjI4NDc1LC0xLjAxNDUzMDYzZS0xNiAxMCwwLjQ0NzcxNTI1IDEwLDEgTDEwLDM1IEw2LjY2NjY2NjY3LDQzLjAwNDE1MDQgTDMuMzMzMzMzMzMsNDMuMDA0MTUwNCBMMCwzNSBMMCwxIEMtNi43NjM1Mzc1MWUtMTcsMC40NDc3MTUyNSAwLjQ0NzcxNTI1LDEuMDE0NTMwNjNlLTE2IDEsMCBaIi8+DQogICAgPGxpbmVhckdyYWRpZW50IGlkPSJwZW4tZGlzY29ubmVjdGVkLWQiIHgxPSIxMDAlIiB4Mj0iMy45NjUlIiB5MT0iNDQuODElIiB5Mj0iNDQuODElIj4NCiAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiM2RDZFNzIiLz4NCiAgICAgIDxzdG9wIG9mZnNldD0iMjMuNzMxJSIgc3RvcC1jb2xvcj0iI0EzQTVBQSIvPg0KICAgICAgPHN0b3Agb2Zmc2V0PSI1MS42NjklIiBzdG9wLWNvbG9yPSIjRTZFOUVGIi8+DQogICAgICA8c3RvcCBvZmZzZXQ9Ijc0LjU3OCUiIHN0b3AtY29sb3I9IiNCN0I5QzAiLz4NCiAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iI0QyRDVERCIvPg0KICAgIDwvbGluZWFyR3JhZGllbnQ+DQogICAgPGxpbmVhckdyYWRpZW50IGlkPSJwZW4tZGlzY29ubmVjdGVkLWYiIHgxPSItMTAuNjk5JSIgeTE9IjQxLjY3MiUiIHkyPSI1MCUiPg0KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI0Y0RjRGNSIvPg0KICAgICAgPHN0b3Agb2Zmc2V0PSIzMC4wMDElIiBzdG9wLWNvbG9yPSIjRTlFQUVDIi8+DQogICAgICA8c3RvcCBvZmZzZXQ9IjU3LjA4OCUiIHN0b3AtY29sb3I9IiNGRkYiLz4NCiAgICAgIDxzdG9wIG9mZnNldD0iNzUuODk0JSIgc3RvcC1jb2xvcj0iI0U5RUFFQyIvPg0KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjQkZDMUM2Ii8+DQogICAgPC9saW5lYXJHcmFkaWVudD4NCiAgICA8bGluZWFyR3JhZGllbnQgaWQ9InBlbi1kaXNjb25uZWN0ZWQtZyIgeDE9Ii0xMC42OTklIiB5MT0iNDEuNjcyJSIgeTI9IjUwJSI+DQogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjRjRGNEY1Ii8+DQogICAgICA8c3RvcCBvZmZzZXQ9IjMwLjAwMSUiIHN0b3AtY29sb3I9IiNFOUVBRUMiLz4NCiAgICAgIDxzdG9wIG9mZnNldD0iNTEuMjQ5JSIgc3RvcC1jb2xvcj0iI0ZGRiIvPg0KICAgICAgPHN0b3Agb2Zmc2V0PSI3NS44OTQlIiBzdG9wLWNvbG9yPSIjRTlFQUVDIi8+DQogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNCRkMxQzYiLz4NCiAgICA8L2xpbmVhckdyYWRpZW50Pg0KICA8L2RlZnM+DQogIDxyZWN0IHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgZmlsbD0ibm9uZSIvPg0KICA8cGF0aCBmaWxsPSJ1cmwoI3Blbi1kaXNjb25uZWN0ZWQtYSkiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTAuNSwwIEwzLjUsMCBMMy41LDEuNSBDMy41LDIuMzI4NDI3MTIgMi44Mjg0MjcxMiwzIDIsMyBMMiwzIEMxLjE3MTU3Mjg4LDMgMC41LDIuMzI4NDI3MTIgMC41LDEuNSBMMC41LDAgWiIgdHJhbnNmb3JtPSJyb3RhdGUoMzAgLTY5LjEwNSA0My41NTMpIi8+DQogIDxtYXNrIGlkPSJwZW4tZGlzY29ubmVjdGVkLWUiIGZpbGw9IiNmZmYiPg0KICAgIDx1c2UgeGxpbms6aHJlZj0iI3Blbi1kaXNjb25uZWN0ZWQtYiIvPg0KICA8L21hc2s+DQogIDx1c2UgZmlsbD0idXJsKCNwZW4tZGlzY29ubmVjdGVkLWMpIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHRyYW5zZm9ybT0icm90YXRlKDMwIDEwLjc2OCA1OC45NTQpIiB4bGluazpocmVmPSIjcGVuLWRpc2Nvbm5lY3RlZC1iIi8+DQogIDxyZWN0IHdpZHRoPSIxMiIgaGVpZ2h0PSIxIiB4PSItMSIgeT0iMzQiIGZpbGw9InVybCgjcGVuLWRpc2Nvbm5lY3RlZC1kKSIgZmlsbC1ydWxlPSJldmVub2RkIiBtYXNrPSJ1cmwoI3Blbi1kaXNjb25uZWN0ZWQtZSkiIHRyYW5zZm9ybT0icm90YXRlKDMwIDEwLjc2OCA1OC45NTQpIi8+DQogIDxyZWN0IHdpZHRoPSIxMiIgaGVpZ2h0PSIxIiB4PSItMSIgeT0iOCIgZmlsbD0idXJsKCNwZW4tZGlzY29ubmVjdGVkLWQpIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIG1hc2s9InVybCgjcGVuLWRpc2Nvbm5lY3RlZC1lKSIgdHJhbnNmb3JtPSJyb3RhdGUoMzAgMTAuNzY4IDU4Ljk1NCkiLz4NCiAgPHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjgiIGZpbGw9InVybCgjcGVuLWRpc2Nvbm5lY3RlZC1mKSIgZmlsbC1ydWxlPSJldmVub2RkIiBtYXNrPSJ1cmwoI3Blbi1kaXNjb25uZWN0ZWQtZSkiIHRyYW5zZm9ybT0icm90YXRlKDMwIDEwLjc2OCA1OC45NTQpIi8+DQogIDxyZWN0IHdpZHRoPSIxMCIgaGVpZ2h0PSI4IiB5PSIzNSIgZmlsbD0idXJsKCNwZW4tZGlzY29ubmVjdGVkLWcpIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIG1hc2s9InVybCgjcGVuLWRpc2Nvbm5lY3RlZC1lKSIgdHJhbnNmb3JtPSJyb3RhdGUoMzAgMTAuNzY4IDU4Ljk1NCkiLz4NCjwvc3ZnPg0K";
  },
  799: function (I, i) {
    I.exports =
      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0yOCAzQzI3LjQ0NzcgMyAyNyAzLjQ0NzcyIDI3IDRDMjcgNC41NTIyOCAyNy40NDc3IDUgMjggNUMyOC41NTIzIDUgMjkgNC41NTIyOCAyOSA0QzI5IDMuNDQ3NzIgMjguNTUyMyAzIDI4IDNaTTI1IDRDMjUgMi4zNDMxNSAyNi4zNDMxIDEgMjggMUMyOS42NTY5IDEgMzEgMi4zNDMxNSAzMSA0QzMxIDQuMDU2NzMgMzAuOTk4NCA0LjExMzEgMzAuOTk1MyA0LjE2OTA2QzMyLjE2MyA0LjU3OTU3IDMzIDUuNjkyMDMgMzMgN1Y5SDQyQzQzLjEwNDYgOSA0NCA5Ljg5NTQzIDQ0IDExVjE3LjU4NThDNDQgMTguMTE2MiA0My43ODkzIDE4LjYyNDkgNDMuNDE0MiAxOUwzNy40ODk4IDI0LjkyNDRMMzYuMDY1OSA0NC4xNDc3QzM1Ljk4ODUgNDUuMTkyMSAzNS4xMTg2IDQ2IDM0LjA3MTMgNDZIMjkuMjAyN0gyOC4yMzA4SDE5Ljc2OTJIMTguNzk3M0gxMy45Mjg3QzEyLjg4MTQgNDYgMTIuMDExNSA0NS4xOTIxIDExLjkzNDEgNDQuMTQ3N0wxMC41MTAyIDI0LjkyNDRMNC41ODU3OSAxOUM0LjIxMDcxIDE4LjYyNDkgNCAxOC4xMTYyIDQgMTcuNTg1OFYxMUM0IDkuODk1NDMgNC44OTU0MyA5IDYgOUgzMVY3QzMxIDYuNTIxNTcgMzAuNjY0IDYuMTIxNjEgMzAuMjE1MSA2LjAyMzJDMjkuNjY2NiA2LjYyMzQ3IDI4Ljg3NzMgNyAyOCA3QzI2LjM0MzEgNyAyNSA1LjY1Njg1IDI1IDRaTTI5LjI1OTcgNDRIMzQuMDcxM0wzNS45MjMyIDE5SDI5Ljk3MTlMMjkuMjU5NyA0NFpNMjcuOTcxMSAxOUgyMC4wMjg5TDIwLjc0MTEgNDRIMjcuMjU4OUwyNy45NzExIDE5Wk0xOC43NDAzIDQ0TDE4LjAyODEgMTlIMTIuMDc2OEwxMy45Mjg3IDQ0SDE4Ljc0MDNaTTEwLjA3MTMgMTlINy40MTQyMUwxMC4yODM5IDIxLjg2OTdMMTAuMDcxMyAxOVpNMzcuNzE2MSAyMS44Njk3TDQwLjU4NTggMTlIMzcuOTI4N0wzNy43MTYxIDIxLjg2OTdaTTQyIDE3VjExSDZWMTdINDJaIiBmaWxsPSIjN0Y4NDhBIi8+DQo8L3N2Zz4NCg==";
  },
  800: function (I, i) {
    I.exports =
      "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTg1MzY0MTY3MzIyIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIzNTciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTE2MC4zIDEyNy45aDcwNGMxNy43IDAgMzIgMTQuMyAzMiAzMnY3MDRjMCAxNy43LTE0LjMgMzItMzIgMzJoLTcwNGMtMTcuNyAwLTMyLTE0LjMtMzItMzJ2LTcwNGMwLTE3LjYgMTQuMy0zMiAzMi0zMnoiIGZpbGw9IiNGRUExMDAiIHAtaWQ9IjIzNTgiPjwvcGF0aD48cGF0aCBkPSJNNzU1LjggNjU4LjZMNTQ4IDMxNi43Yy0xMC4xLTE1LjktMTguNi0yOC44LTM3LjMtMjguOC0xOC43IDAtMjkuMyAxNS4yLTM3LjMgMjguOEwyNjUuNSA2NTguNmMtOC43IDEzLjUtMTQuOSAyOS43LTExIDQzLjcgMy40IDEyLjMgMTYuNiAyMC43IDM2LjggMjAuN0g3MzBjMjUuNCAwIDMzLjktMTIgMzYuMy0xOC4zIDUuNi0xNC43LTEuMy0zMS4zLTEwLjUtNDYuMXpNNDg1LjMgNDMyLjFjMC0xNC4xIDExLjQtMjUuNSAyNS41LTI1LjVzMjUuNSAxMS40IDI1LjUgMjUuNXYxMTEuOGMwIDE0LjEtMTEuNCAyNS41LTI1LjUgMjUuNXMtMjUuNS0xMS40LTI1LjUtMjUuNVY0MzIuMXogbTI1LjUgMjIyLjVjLTE1LjIgMC0yNy41LTEyLjMtMjcuNS0yNy41czEyLjMtMjcuNSAyNy41LTI3LjUgMjcuNSAxMi4zIDI3LjUgMjcuNS0xMi4zIDI3LjUtMjcuNSAyNy41eiIgZmlsbD0iI0ZGRkZGRiIgcC1pZD0iMjM1OSI+PC9wYXRoPjwvc3ZnPg==";
  },
  801: function (I, i) {
    I.exports =
      "data:image/png;base64,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";
  },
  802: function (I, i, n) {
    var e = n(803);
    "string" == typeof e && (e = [[I.i, e, ""]]);
    var t = { hmr: !0, transform: void 0, insertInto: void 0 };
    n(12)(e, t);
    e.locals && (I.exports = e.locals);
  },
  803: function (I, i, n) {
    (I.exports = n(11)(!1)).push([
      I.i,
      "body,\nhtml {\n  width: 240px !important;\n  height: 104px !important;\n  background: transparent;\n}\n#root {\n  background: transparent;\n  position: relative;\n}\n",
      "",
    ]);
  },
  918: function (I, i, n) {
    "use strict";
    n.r(i);
    var e = n(0),
      c = n.n(e),
      t = n(18),
      g = n.n(t),
      M = n(3),
      N = n.n(M),
      A = n(4),
      o = n.n(A),
      x = n(5),
      u = n.n(x),
      D = n(6),
      d = n.n(D),
      l = n(2),
      a = n.n(l),
      _ = n(8),
      C = n.n(_),
      j = (n(795), n(25)),
      b = {
        "./index.less": {
          content: "index__content__3vEIeTSE",
          "usb-box": "index__usb-box__116trdvm",
          fail: "index__fail__zG3zPekG",
          show: "index__show__2KNux1JW",
          hide: "index__hide__3gq-mfg3",
          success: "index__success__24mHuHhH",
          "s-icon": "index__s-icon__3cLfgMZo",
          "f-icon": "index__f-icon__1lKwpCbX",
          podium: "index__podium__1MDHmjRX",
          exception: "index__exception__2hkT0rco",
          "usb-insert": "index__usb-insert__3Lf4E6a5",
          "text-place": "index__text-place__2oPNa2Uy",
          "min-text": "index__min-text__37vBLDo0",
          "normal-text": "index__normal-text__2zNGgbdq",
        },
      };
    function m(e) {
      var t = (function () {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            ),
            !0
          );
        } catch (I) {
          return !1;
        }
      })();
      return function () {
        var I,
          i = a()(e);
        if (t) {
          var n = a()(this).constructor;
          I = Reflect.construct(i, arguments, n);
        } else I = i.apply(this, arguments);
        return d()(this, I);
      };
    }
    var z = 3,
      s = 4,
      S = window._ACCEPT_DATA,
      Z = (function (I) {
        u()(g, I);
        var t = m(g);
        function g() {
          var I;
          N()(this, g);
          for (var i = arguments.length, n = new Array(i), e = 0; e < i; e++)
            n[e] = arguments[e];
          return (
            ((I = t.call.apply(t, [this].concat(n))).state = {
              show: !window.DWMOpenState,
            }),
            (I.show = function () {
              I.setState({ show: !0 });
            }),
            (I.componentDidMount = function () {
              setTimeout(function () {
                I.show();
              }, 0);
            }),
            I
          );
        }
        return (
          o()(g, [
            {
              key: "render",
              value: function () {
                return (function (I) {
                  var i = window.urlParams;
                  switch (i.type) {
                    case "SMATCH_PEN":
                      if (i.state === z)
                        return c.a.createElement(y, {
                          show: I,
                          iconStyle: "s-icon",
                          text: "智能笔匹配成功！",
                        });
                      if (i.state === s)
                        return c.a.createElement(y, {
                          show: I,
                          iconStyle: "f-icon",
                          text: "智能笔连接断开！",
                        });
                      break;
                    case "PODIUM":
                      if (1 === i.show)
                        return c.a.createElement(y, {
                          show: I,
                          iconStyle: "podium",
                          text: "智慧讲台连接成功！",
                        });
                      if (0 === i.show)
                        return c.a.createElement(y, {
                          show: I,
                          iconStyle: "podium",
                          text: "智慧讲台连接断开！",
                        });
                      if (i.longNotify)
                        return c.a.createElement(y, {
                          show: I,
                          iconStyle: "podium",
                          text: decodeURIComponent(i.text),
                        });
                      break;
                    case "EXCEPTION":
                      return (
                        Object(j.a)(
                          "assistant_exception",
                          S.getData("uncaughtException")
                        ),
                        c.a.createElement(y, {
                          iconStyle: "exception",
                          text: "".concat(
                            CUSTOM_CONFIG.appName,
                            "异常，正在重启!"
                          ),
                        })
                      );
                    case "USB_INSERT":
                      return c.a.createElement(y, {
                        show: I,
                        customStyle: "usb-box",
                        iconStyle: "usb-insert",
                        text: "推拉黑板前请先拔出USB设备，以防撞坏接口",
                      });
                    default:
                      return "ddd";
                  }
                })(this.state.show);
              },
            },
          ]),
          g
        );
      })(e.PureComponent),
      y = function (I) {
        return c.a.createElement(
          "div",
          {
            style: { borderRadius: window.DWMOpenState ? "4px" : "0px" },
            className: C()(
              ""
                .concat(I.show ? "content show" : "content hide", " ")
                .concat(I.customStyle ? I.customStyle : ""),
              b
            ),
          },
          c.a.createElement(
            "div",
            { className: "index__fail__zG3zPekG" },
            c.a.createElement("span", { className: C()(I.iconStyle, b) }),
            c.a.createElement(
              "div",
              {
                className: C()(
                  "text-place ".concat(
                    16 < I.text.length ? "min-text" : "normal-text"
                  ),
                  b
                ),
              },
              c.a.createElement("p", null, I.text)
            )
          )
        );
      },
      r = (n(30), n(802), n(21));
    var w;
    (w = Z),
      g.a.render(
        c.a.createElement(r.a, null, c.a.createElement(w, null)),
        document.getElementById("root")
      );
  },
});
