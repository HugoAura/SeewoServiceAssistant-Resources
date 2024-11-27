!(function (l) {
  function e(e) {
    for (
      var t, n, r = e[0], o = e[1], i = e[2], a = 0, s = [];
      a < r.length;
      a++
    )
      (n = r[a]),
        Object.prototype.hasOwnProperty.call(c, n) && c[n] && s.push(c[n][0]),
        (c[n] = 0);
    for (t in o) Object.prototype.hasOwnProperty.call(o, t) && (l[t] = o[t]);
    for (p && p(e); s.length; ) s.shift()();
    return f.push.apply(f, i || []), u();
  }
  function u() {
    for (var e, t = 0; t < f.length; t++) {
      for (var n = f[t], r = !0, o = 1; o < n.length; o++) {
        var i = n[o];
        0 !== c[i] && (r = !1);
      }
      r && (f.splice(t--, 1), (e = a((a.s = n[0]))));
    }
    return e;
  }
  var n = {},
    c = { 29: 0 },
    f = [];
  function a(e) {
    if (n[e]) return n[e].exports;
    var t = (n[e] = { i: e, l: !1, exports: {} });
    return l[e].call(t.exports, t, t.exports, a), (t.l = !0), t.exports;
  }
  (a.m = l),
    (a.c = n),
    (a.d = function (e, t, n) {
      a.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (a.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (a.t = function (t, e) {
      if ((1 & e && (t = a(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var n = Object.create(null);
      if (
        (a.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var r in t)
          a.d(
            n,
            r,
            function (e) {
              return t[e];
            }.bind(null, r)
          );
      return n;
    }),
    (a.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return a.d(t, "a", t), t;
    }),
    (a.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (a.p = "");
  var t = (window.webpackJsonp = window.webpackJsonp || []),
    r = t.push.bind(t);
  (t.push = e), (t = t.slice());
  for (var o = 0; o < t.length; o++) e(t[o]);
  var p = r;
  f.push([920, 0]), u();
})({
  806: function (e, t) {
    e.exports = require("electron");
  },
  920: function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n(10),
      o = n.n(r),
      i = n(3),
      a = n.n(i),
      s = n(4),
      l = n.n(s);
    function u(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e &&
          (r = r.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    var c,
      f,
      p,
      d,
      b,
      h = n(806),
      w = h.ipcRenderer,
      y = h.remote;
    (c = new ((function () {
      function e() {
        var r = this;
        a()(this, e),
          (this.listen = function () {
            w.on("SHARE_DATA", function (e, t) {
              var n = {};
              (n[t.typeName] = t.value),
                (r.data[t.typeName] = t.value),
                r.loadGlobalValue(n),
                r.publishData(t.typeName, t.value);
            });
          }),
          (this.publishData = function (e, t) {
            if (r.listener[e] && 0 < r.listener[e].length)
              for (var n = 0; n < r.listener[e].length; n++)
                try {
                  r.listener[e][n](t);
                } catch (e) {}
          }),
          (this.register = function (e, t) {
            r.listener[e] || (r.listener[e] = []), r.listener[e].push(t);
          }),
          (this.getAndRegister = function (e, t) {
            t(r.getData(e)), r.register(e, t);
          }),
          (this.removeOne = function (e, t) {
            if (r.listener[e]) {
              var n = r.listener[e].indexOf(t);
              -1 < n && r.listener[e].splice(n, 1);
            }
          }),
          (this.removeAll = function (e) {
            r.listener[e] && (r.listener[e] = []);
          }),
          (this.getData = function (e) {
            return r.data.hasOwnProperty(e) ? r.data[e] : null;
          }),
          (this.loadGlobalValue = function (e) {
            for (var t in e)
              -1 < r.defaultGlobalList.indexOf(t) && (window[t] = e[t]);
          }),
          (this.start = function () {
            var e = y.getGlobal("SHAREDATA"),
              t = Object.assign({}, e[window.windowName], e._default);
            (r.data = (function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2
                  ? u(Object(n), !0).forEach(function (e) {
                      o()(t, e, n[e]);
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      t,
                      Object.getOwnPropertyDescriptors(n)
                    )
                  : u(Object(n)).forEach(function (e) {
                      Object.defineProperty(
                        t,
                        e,
                        Object.getOwnPropertyDescriptor(n, e)
                      );
                    });
              }
              return t;
            })({}, t)),
              r.loadGlobalValue(t),
              r.listen();
          }),
          (this.defaultGlobalList = [
            "ports",
            "deviceId",
            "schoolCode",
            "DWMOpenState",
            "sundayAppId",
            "webConfig",
            "appVersion",
            "iotLineStatus",
            "CUSTOM_CONFIG",
            "userInfo",
            "bindInfo",
          ]),
          (this.data = {}),
          (this.listener = {});
      }
      return (
        l()(e, [
          {
            key: "clearData",
            value: function (e) {
              this.data[e] && delete this.data[e];
            },
          },
        ]),
        e
      );
    })())()).start(),
      (window._ACCEPT_DATA = c),
      window._ACCEPT_DATA.getAndRegister("setZoomFactor", function (e) {
        if (null !== e) {
          window.zoomFactor = e;
          var t = Number(e);
          1 === t && (t = 1), window.webFrame.setZoomFactor(Number(e));
        }
      }),
      (window._faq = window._faq || []),
      (f =
        "https://friday.cvte.com/agent/sdk/js/v2/fa.js?_appId=" +
        window.webConfig.fridayAppId),
      (p = document),
      (d = p.createElement("script")),
      (b = p.getElementsByTagName("script")[0]),
      (d.type = "text/javascript"),
      (d.async = !0),
      (d.defer = !0),
      (d.src = f),
      b.parentNode.insertBefore(d, b);
  },
});
