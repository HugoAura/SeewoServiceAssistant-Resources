!(function (c) {
  function e(e) {
    for (
      var t, n, a = e[0], o = e[1], r = e[2], i = 0, s = [];
      i < a.length;
      i++
    )
      (n = a[i]),
        Object.prototype.hasOwnProperty.call(u, n) && u[n] && s.push(u[n][0]),
        (u[n] = 0);
    for (t in o) Object.prototype.hasOwnProperty.call(o, t) && (c[t] = o[t]);
    for (f && f(e); s.length; ) s.shift()();
    return d.push.apply(d, r || []), l();
  }
  function l() {
    for (var e, t = 0; t < d.length; t++) {
      for (var n = d[t], a = !0, o = 1; o < n.length; o++) {
        var r = n[o];
        0 !== u[r] && (a = !1);
      }
      a && (d.splice(t--, 1), (e = i((i.s = n[0]))));
    }
    return e;
  }
  var n = {},
    u = { 43: 0 },
    d = [];
  function i(e) {
    if (n[e]) return n[e].exports;
    var t = (n[e] = { i: e, l: !1, exports: {} });
    return c[e].call(t.exports, t, t.exports, i), (t.l = !0), t.exports;
  }
  (i.m = c),
    (i.c = n),
    (i.d = function (e, t, n) {
      i.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (i.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (i.t = function (t, e) {
      if ((1 & e && (t = i(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var n = Object.create(null);
      if (
        (i.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var a in t)
          i.d(
            n,
            a,
            function (e) {
              return t[e];
            }.bind(null, a)
          );
      return n;
    }),
    (i.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return i.d(t, "a", t), t;
    }),
    (i.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (i.p = "");
  var t = (window.webpackJsonp = window.webpackJsonp || []),
    a = t.push.bind(t);
  (t.push = e), (t = t.slice());
  for (var o = 0; o < t.length; o++) e(t[o]);
  var f = a;
  d.push([922, 0]), l();
})({
  865: function (e, t, n) {
    var a = n(866);
    "string" == typeof a && (a = [[e.i, a, ""]]);
    var o = { hmr: !0, transform: void 0, insertInto: void 0 };
    n(12)(a, o);
    a.locals && (e.exports = a.locals);
  },
  866: function (e, t, n) {
    var a = n(27);
    (t = e.exports = n(11)(!1)).push([
      e.i,
      ".index__container__2-PyvfZb {\n  width: 100%;\n  height: 100%;\n}\n.index__button__1QWj3suZ {\n  position: absolute;\n  right: 16px;\n  bottom: 16px;\n  padding: 0 32px;\n  height: 48px;\n  border-radius: 16px;\n  line-height: 48px;\n  color: white;\n  font-weight: 500;\n  font-size: 20px;\n  z-index: 1002;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background: rgba(41, 49, 69, 0.5);\n  border-radius: 40px;\n}\n.index__button__1QWj3suZ .index__icon__3E_wK20N {\n  float: left;\n  width: 22.5px;\n  height: 21px;\n  margin: 11.5px 8px 0 22.5px;\n  background-image: url(" +
        a(n(136)) +
        ");\n  background-position: center;\n  background-size: contain;\n  background-repeat: no-repeat;\n}\n.index__button__1QWj3suZ p {\n  float: left;\n  line-height: 44px;\n}\n.index__bottom-fence__D5cfS62- {\n  position: absolute;\n  height: 80px;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  z-index: 111;\n}\n.index__bottom-fence__D5cfS62-.index__color__cu-IDYGB {\n  background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0)), to(rgba(0, 0, 0, 0.7)));\n  background-image: -o-linear-gradient(top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 100%);\n  background-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 100%);\n}\n",
      "",
    ]),
      (t.locals = {
        container: "index__container__2-PyvfZb",
        button: "index__button__1QWj3suZ",
        icon: "index__icon__3E_wK20N",
        "bottom-fence": "index__bottom-fence__D5cfS62-",
        color: "index__color__cu-IDYGB",
      });
  },
  922: function (e, t, n) {
    "use strict";
    n.r(t);
    var a = n(0),
      o = n.n(a),
      r = n(18),
      i = n.n(r),
      s = n(15),
      c = n.n(s),
      l = n(3),
      u = n.n(l),
      d = n(4),
      f = n.n(d),
      p = n(5),
      h = n.n(p),
      _ = n(6),
      g = n.n(_),
      b = n(2),
      m = n.n(b),
      A = n(81),
      k = n(7),
      y = n(20),
      v = n(80);
    n(865);
    function x(a) {
      var o = (function () {
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
        } catch (e) {
          return !1;
        }
      })();
      return function () {
        var e,
          t = m()(a);
        if (o) {
          var n = m()(this).constructor;
          e = Reflect.construct(t, arguments, n);
        } else e = t.apply(this, arguments);
        return g()(this, e);
      };
    }
    var T,
      D,
      E,
      L,
      w = window._ACCEPT_DATA;
    ((D = T = T || {}).GET_INITIAL = "GET_INITIAL"),
      (D.GET_PROPAGANDA_DATA = "GET_PROPAGANDA_DATA"),
      (D.GET_GLOBAL_DATA = "GET_GLOBAL_DATA"),
      (D.GET_PROPERTY_DATA = "GET_PROPERTY_DATA"),
      (D.GET_SERVICE_DATA = "GET_SERVICE_DATA"),
      ((L = E = E || {}).CALL_EVENT = "CALL_EVENT"),
      (L.CALL_INITIAL = "CALL_INITIAL");
    var I = [
        "ports",
        "bindInfo",
        "deviceId",
        "appVersion",
        "iotLineStatus",
        "userInfo",
      ],
      S = (function (e) {
        h()(a, e);
        var n = x(a);
        function a() {
          var t;
          return (
            u()(this, a),
            ((t = n.apply(this, arguments)).state = {
              quitCheckShow: !1,
              needCheck: !1,
              linkSuccess: !1,
            }),
            (t.propagandaData = []),
            (t.globalData = {
              ports: null,
              bindInfo: null,
              deviceId: null,
              appVersion: null,
              iotLineStatus: null,
              userInfo: null,
            }),
            (t.propertyData = null),
            (t.serviceData = null),
            (t.frameBox = o.a.createRef()),
            (t.linkSuccess = !1),
            (t.interval = null),
            (t.timeout = null),
            (t.closePlayTask = function () {
              k.a.send("stopUips");
            }),
            (t.handleDataCollection = function (e) {
              !1 !== t.globalData.iotLineStatus
                ? e &&
                  ((t.propagandaData = c()(e)),
                  t.linkSuccess && t.frameBox
                    ? t.frameBox.current.contentWindow.postMessage(
                        { type: T.GET_PROPAGANDA_DATA, data: c()(e) },
                        "*"
                      )
                    : t.handleLinkIframe())
                : k.a.send("stopUips", !0);
            }),
            (t.handleHideQuitCheck = function () {
              t.setState({ quitCheckShow: !1 });
            }),
            (t.loadCheckState = function (e) {
              t.setState({ needCheck: !!e });
            }),
            (t.handleShowQuitCheck = function () {
              t.state.needCheck
                ? t.setState({ quitCheckShow: !0 })
                : t.closePlayTask();
            }),
            (t.handleQuitTaskWithUserAuth = function (e) {
              k.a.send("quitLockTaskIfExist", e), t.closePlayTask();
            }),
            (t.handleUipsMessageBack = function (e) {
              k.a.send("uipsFeedback", e);
            }),
            (t.handleListenPropertyData = function (e) {
              (t.propertyData = e),
                t.linkSuccess
                  ? t.frameBox.current.contentWindow.postMessage(
                      { type: T.GET_PROPERTY_DATA, data: c()(t.propertyData) },
                      "*"
                    )
                  : t.handleLinkIframe();
            }),
            (t.handleListenServiceData = function (e) {
              (t.serviceData = e),
                t.linkSuccess
                  ? t.frameBox.current.contentWindow.postMessage(
                      {
                        type: T.GET_SERVICE_DATA,
                        data: Object.assign({}, t.serviceData),
                      },
                      "*"
                    )
                  : t.handleLinkIframe();
            }),
            t
          );
        }
        return (
          f()(a, [
            {
              key: "handleLinkIframe",
              value: function () {
                var e = this;
                this.frameBox &&
                  this.frameBox.current.contentWindow.postMessage(
                    { type: T.GET_INITIAL },
                    "*"
                  ),
                  this.interval ||
                    ((this.interval = setInterval(function () {
                      e.handleLinkIframe();
                    }, 50)),
                    (this.timeout = setTimeout(function () {
                      k.a.send("stopUips", !0);
                    }, 1e4)));
              },
            },
            {
              key: "handleSynchronousData",
              value: function () {
                this.frameBox &&
                  (this.frameBox.current.contentWindow.postMessage(
                    { type: T.GET_GLOBAL_DATA, data: this.globalData },
                    "*"
                  ),
                  this.frameBox.current.contentWindow.postMessage(
                    { type: T.GET_PROPERTY_DATA, data: this.propertyData },
                    "*"
                  ),
                  this.frameBox.current.contentWindow.postMessage(
                    { type: T.GET_SERVICE_DATA, data: this.serviceData },
                    "*"
                  ),
                  this.frameBox.current.contentWindow.postMessage(
                    { type: T.GET_PROPAGANDA_DATA, data: this.propagandaData },
                    "*"
                  ));
              },
            },
            {
              key: "handleListenIframeMessage",
              value: function () {
                var n = this;
                window.addEventListener("message", function (e) {
                  var t = e.data;
                  switch (t.type) {
                    case E.CALL_EVENT:
                      k.a.send("postUipsFeedback", t.data);
                      break;
                    case E.CALL_INITIAL:
                      n.handleSynchronousData(),
                        (n.linkSuccess = !0),
                        n.setState({ linkSuccess: !0 }),
                        clearInterval(n.interval),
                        clearInterval(n.timeout);
                      break;
                    default:
                      return;
                  }
                });
              },
            },
            {
              key: "handleListenGlobalData",
              value: function () {
                var n = this;
                I.forEach(function (t) {
                  w.getAndRegister(t, function (e) {
                    (n.globalData[t] = e),
                      n.linkSuccess
                        ? n.frameBox.current.contentWindow.postMessage(
                            {
                              type: T.GET_GLOBAL_DATA,
                              data: Object.assign({}, n.globalData),
                            },
                            "*"
                          )
                        : n.handleLinkIframe();
                  });
                });
              },
            },
            {
              key: "componentDidMount",
              value: function () {
                this.handleListenIframeMessage(),
                  w.getAndRegister("uipsTaskData", this.handleDataCollection),
                  w.getAndRegister(
                    "uipsPropertyData",
                    this.handleListenPropertyData
                  ),
                  w.register("uipsServiceData", this.handleListenServiceData),
                  this.handleListenGlobalData(),
                  w.getAndRegister(
                    "schoolAnnouncementQuitNeedChecking",
                    this.loadCheckState
                  );
              },
            },
            {
              key: "render",
              value: function () {
                return o.a.createElement(
                  "div",
                  { className: "index__container__2-PyvfZb" },
                  o.a.createElement("iframe", {
                    style: {
                      width: "100%",
                      height: "100%",
                      border: "none",
                      display: this.state.linkSuccess ? "block" : "none",
                    },
                    ref: this.frameBox,
                    src: window.webConfig.uipsControllerIframeUrl,
                  }),
                  o.a.createElement(
                    "div",
                    {
                      style: {
                        display: this.state.linkSuccess ? "none" : "block",
                      },
                    },
                    o.a.createElement(v.a, { color: "#fff" })
                  ),
                  o.a.createElement(
                    "div",
                    { className: "index__bottom-fence__D5cfS62-" },
                    o.a.createElement(
                      "div",
                      { className: "index__button__1QWj3suZ" },
                      o.a.createElement(y.a, {
                        activeStyle: "scale",
                        onClick: this.handleShowQuitCheck,
                      }),
                      o.a.createElement("p", null, "返回桌面")
                    )
                  ),
                  o.a.createElement(A.a, {
                    show: this.state.quitCheckShow,
                    onBack: this.handleHideQuitCheck,
                    onCloseAnnouncement: this.handleQuitTaskWithUserAuth,
                    buttonText: "返回",
                  })
                );
              },
            },
          ]),
          a
        );
      })(a.PureComponent),
      P = n(24),
      C = n(29),
      G = n(22);
    n(30);
    var O,
      R = Object(C.a)("screenLock");
    (O = S),
      i.a.render(
        o.a.createElement(
          P.a,
          { store: R },
          o.a.createElement(G.a, null, o.a.createElement(O, null))
        ),
        document.getElementById("root")
      );
  },
});
