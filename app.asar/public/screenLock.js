!(function (a) {
  function e(e) {
    for (
      var n, t, o = e[0], c = e[1], r = e[2], _ = 0, s = [];
      _ < o.length;
      _++
    )
      (t = o[_]),
        Object.prototype.hasOwnProperty.call(l, t) && l[t] && s.push(l[t][0]),
        (l[t] = 0);
    for (n in c) Object.prototype.hasOwnProperty.call(c, n) && (a[n] = c[n]);
    for (u && u(e); s.length; ) s.shift()();
    return d.push.apply(d, r || []), i();
  }
  function i() {
    for (var e, n = 0; n < d.length; n++) {
      for (var t = d[n], o = !0, c = 1; c < t.length; c++) {
        var r = t[c];
        0 !== l[r] && (o = !1);
      }
      o && (d.splice(n--, 1), (e = _((_.s = t[0]))));
    }
    return e;
  }
  var t = {},
    l = { 35: 0 },
    d = [];
  function _(e) {
    if (t[e]) return t[e].exports;
    var n = (t[e] = { i: e, l: !1, exports: {} });
    return a[e].call(n.exports, n, n.exports, _), (n.l = !0), n.exports;
  }
  (_.m = a),
    (_.c = t),
    (_.d = function (e, n, t) {
      _.o(e, n) || Object.defineProperty(e, n, { enumerable: !0, get: t });
    }),
    (_.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (_.t = function (n, e) {
      if ((1 & e && (n = _(n)), 8 & e)) return n;
      if (4 & e && "object" == typeof n && n && n.__esModule) return n;
      var t = Object.create(null);
      if (
        (_.r(t),
        Object.defineProperty(t, "default", { enumerable: !0, value: n }),
        2 & e && "string" != typeof n)
      )
        for (var o in n)
          _.d(
            t,
            o,
            function (e) {
              return n[e];
            }.bind(null, o)
          );
      return t;
    }),
    (_.n = function (e) {
      var n =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return _.d(n, "a", n), n;
    }),
    (_.o = function (e, n) {
      return Object.prototype.hasOwnProperty.call(e, n);
    }),
    (_.p = "");
  var n = (window.webpackJsonp = window.webpackJsonp || []),
    o = n.push.bind(n);
  (n.push = e), (n = n.slice());
  for (var c = 0; c < n.length; c++) e(n[c]);
  var u = o;
  d.push([918, 0]), i();
})({
  830: function (e, n, t) {
    var o = t(831);
    "string" == typeof o && (o = [[e.i, o, ""]]);
    var c = { hmr: !0, transform: void 0, insertInto: void 0 };
    t(12)(o, c);
    o.locals && (e.exports = o.locals);
  },
  831: function (e, n, t) {
    var o = t(27);
    (n = e.exports = t(11)(!1)).push([
      e.i,
      ".screenLock__content__125x_IXP {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n.screenLock__content__125x_IXP .screenLock__bg-filter__3m7ydh7F {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.4);\n  background-image: url(" +
        o(t(102)) +
        ");\n  -webkit-filter: blur(10px);\n          filter: blur(10px);\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n  z-index: 993;\n}\n.screenLock__content__125x_IXP .screenLock__bg__1i1bETa9 {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 100%;\n  height: 100%;\n  -webkit-transform: translate(-50%, -50%);\n      -ms-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  background-image: url(" +
        o(t(102)) +
        ");\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n  z-index: 994;\n}\n.screenLock__content__125x_IXP .screenLock__mask__2uft4cxd {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.4);\n  z-index: 995;\n}\n.screenLock__content__125x_IXP .screenLock__content-box__fkI6ZeJs {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  z-index: 997;\n}\n.screenLock__content__125x_IXP .screenLock__shutDowm__2XgVLYVi {\n  position: absolute;\n  bottom: 40px;\n  right: 40px;\n  width: 80px;\n  height: 80px;\n  border-radius: 999px;\n  background: rgba(255, 255, 255, 0.1);\n  line-height: 80px;\n  text-align: center;\n  font-size: 32px;\n  color: white;\n  cursor: pointer;\n  z-index: 998;\n  -webkit-transition: all 0.3s;\n  -o-transition: all 0.3s;\n  transition: all 0.3s;\n}\n.screenLock__content__125x_IXP .screenLock__shutDowm__2XgVLYVi:active {\n  -webkit-transform: scale(0.85);\n      -ms-transform: scale(0.85);\n          transform: scale(0.85);\n}\n.screenLock__content__125x_IXP .screenLock__modal__2ATjLwqw {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 999;\n  background: transparent;\n}\n.screenLock__content__125x_IXP .screenLock__modal__2ATjLwqw.screenLock__show__31ICumzO {\n  visibility: visible;\n}\n.screenLock__content__125x_IXP .screenLock__modal__2ATjLwqw.screenLock__show__31ICumzO .screenLock__modal-box__36dllSkS {\n  -webkit-transform: scale(1);\n      -ms-transform: scale(1);\n          transform: scale(1);\n  opacity: 1;\n}\n.screenLock__content__125x_IXP .screenLock__modal__2ATjLwqw.screenLock__close__1YLAXcLK {\n  visibility: hidden;\n}\n.screenLock__content__125x_IXP .screenLock__modal__2ATjLwqw.screenLock__close__1YLAXcLK .screenLock__modal-box__36dllSkS {\n  -webkit-transform: scale(0.75);\n      -ms-transform: scale(0.75);\n          transform: scale(0.75);\n  opacity: 0;\n}\n.screenLock__content__125x_IXP .screenLock__modal__2ATjLwqw .screenLock__modal-box__36dllSkS {\n  position: absolute;\n  bottom: 148px;\n  right: 40px;\n  width: 304px;\n  height: 150px;\n  background: #fff;\n  text-align: center;\n  border-radius: 8px;\n  -webkit-box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);\n          box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);\n  -webkit-transition: all 0.3s;\n  -o-transition: all 0.3s;\n  transition: all 0.3s;\n}\n.screenLock__content__125x_IXP .screenLock__modal__2ATjLwqw .screenLock__modal-box__36dllSkS > p {\n  margin: 24px 0;\n  font-size: 20px;\n  line-height: 30px;\n}\n.screenLock__content__125x_IXP .screenLock__modal__2ATjLwqw .screenLock__modal-box__36dllSkS .screenLock__button-list__28P3IGEn {\n  width: 100%;\n}\n.screenLock__content__125x_IXP .screenLock__modal__2ATjLwqw .screenLock__modal-box__36dllSkS .screenLock__button-list__28P3IGEn div {\n  width: 120px;\n  height: 48px;\n  display: inline-block;\n  margin: 0 8px;\n  border-radius: 8px;\n  font-size: 20px;\n  line-height: 48px;\n  cursor: pointer;\n  -webkit-transition: -webkit-transform 0.3s;\n  transition: -webkit-transform 0.3s;\n  -o-transition: transform 0.3s;\n  transition: transform 0.3s;\n  transition: transform 0.3s, -webkit-transform 0.3s;\n}\n.screenLock__content__125x_IXP .screenLock__modal__2ATjLwqw .screenLock__modal-box__36dllSkS .screenLock__button-list__28P3IGEn div:active {\n  -webkit-transform: scale(0.85);\n      -ms-transform: scale(0.85);\n          transform: scale(0.85);\n}\n.screenLock__content__125x_IXP .screenLock__modal__2ATjLwqw .screenLock__modal-box__36dllSkS .screenLock__button-list__28P3IGEn div.screenLock__cancel__yfbb9t6P {\n  border: 1px solid #e0e2e7;\n  color: #2c3144;\n}\n.screenLock__content__125x_IXP .screenLock__modal__2ATjLwqw .screenLock__modal-box__36dllSkS .screenLock__button-list__28P3IGEn div.screenLock__confirm__dFItsJ6x {\n  background: #eb4240;\n  color: white;\n}\n@media screen and (max-height: 620px) {\n  .screenLock__content-box__fkI6ZeJs {\n    -webkit-transform: scale(0.75);\n        -ms-transform: scale(0.75);\n            transform: scale(0.75);\n  }\n}\n",
      "",
    ]),
      (n.locals = {
        content: "screenLock__content__125x_IXP",
        "bg-filter": "screenLock__bg-filter__3m7ydh7F",
        bg: "screenLock__bg__1i1bETa9",
        mask: "screenLock__mask__2uft4cxd",
        "content-box": "screenLock__content-box__fkI6ZeJs",
        shutDowm: "screenLock__shutDowm__2XgVLYVi",
        modal: "screenLock__modal__2ATjLwqw",
        show: "screenLock__show__31ICumzO",
        "modal-box": "screenLock__modal-box__36dllSkS",
        close: "screenLock__close__1YLAXcLK",
        "button-list": "screenLock__button-list__28P3IGEn",
        cancel: "screenLock__cancel__yfbb9t6P",
        confirm: "screenLock__confirm__dFItsJ6x",
      });
  },
  918: function (e, n, t) {
    "use strict";
    t.r(n);
    var o,
      c = t(0),
      i = t.n(c),
      r = t(18),
      _ = t.n(r),
      s = t(3),
      a = t.n(s),
      l = t(4),
      d = t.n(l),
      u = t(5),
      k = t.n(u),
      m = t(6),
      b = t.n(m),
      h = t(2),
      f = t.n(h),
      L = t(8),
      p = t.n(L),
      w = t(9),
      g = (t(830), t(67)),
      x = t(7),
      v = t(116),
      S = t(58),
      y = {
        "./screenLock.less": {
          content: "screenLock__content__125x_IXP",
          "bg-filter": "screenLock__bg-filter__3m7ydh7F",
          bg: "screenLock__bg__1i1bETa9",
          mask: "screenLock__mask__2uft4cxd",
          "content-box": "screenLock__content-box__fkI6ZeJs",
          shutDowm: "screenLock__shutDowm__2XgVLYVi",
          modal: "screenLock__modal__2ATjLwqw",
          show: "screenLock__show__31ICumzO",
          "modal-box": "screenLock__modal-box__36dllSkS",
          close: "screenLock__close__1YLAXcLK",
          "button-list": "screenLock__button-list__28P3IGEn",
          cancel: "screenLock__cancel__yfbb9t6P",
          confirm: "screenLock__confirm__dFItsJ6x",
        },
      };
    function I(o) {
      var c = (function () {
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
          n = f()(o);
        if (c) {
          var t = f()(this).constructor;
          e = Reflect.construct(n, arguments, t);
        } else e = n.apply(this, arguments);
        return b()(this, e);
      };
    }
    function P(e) {
      var n = 1920 / 1080,
        t = window.innerWidth,
        o = window.innerHeight,
        c = {};
      return (
        (c =
          n <= t / o
            ? { width: o * n, height: o }
            : { width: t, height: t / n }),
        {
          backgroundImage: 'url("'.concat(e, '")'),
          bgContainerDomSize: { width: c.width, height: c.height },
        }
      );
    }
    var E = "passwordSuccess",
      A =
        Object(w.a)({}, {})(
          (o = (function (e) {
            k()(r, e);
            var c = I(r);
            function r() {
              var t;
              a()(this, r);
              for (
                var e = arguments.length, n = new Array(e), o = 0;
                o < e;
                o++
              )
                n[o] = arguments[o];
              return (
                ((t = c.call.apply(c, [this].concat(n))).state = {
                  modalShow: !1,
                  background: "",
                  bgStyle: {},
                }),
                (t.handleModalShow = function () {
                  t.setState({ modalShow: !0 });
                }),
                (t.handleModalClose = function () {
                  t.setState({ modalShow: !1 });
                }),
                (t.handleShutDowm = function () {
                  x.a.send("shutDown", "");
                }),
                (t.handleClickModal = function (e) {
                  e.target === t.refs.modal && t.handleModalClose();
                }),
                (t.handlePasswordInputOver = function (e) {
                  x.a.send("passwordAuthen", e);
                }),
                (t.handleActivationCorrect = function () {
                  x.a.send("stopScreenLock", !0);
                }),
                (t.listenPasswordAuthen = function (e) {
                  var n = e.action;
                  console.log("action", n),
                    n === E && x.a.send("stopScreenLock", !1);
                }),
                (t.handleListenScreenLockSource = function (e) {
                  var n =
                    e && e.picture
                      ? "file:///" + e.picture[0].replace(/\\/g, "\\\\")
                      : "";
                  Object(S.a)(
                    n,
                    function (e) {
                      var n = P(e || {});
                      t.setState({ background: e, bgStyle: n });
                    },
                    function () {
                      t.setState({ background: "", bgStyle: {} });
                    }
                  );
                }),
                (t.resize = function () {
                  var e = P(t.state.background || {});
                  t.setState({ bgStyle: e });
                }),
                t
              );
            }
            return (
              d()(r, [
                {
                  key: "componentDidMount",
                  value: function () {
                    var e = this;
                    x.a.on("shutDown-fail", function () {
                      e.props.actions.sendMessage({
                        type: "error",
                        text: "关机失败,请重试!",
                      });
                    }),
                      x.a.on("passwordAuthenResult", this.listenPasswordAuthen),
                      _ACCEPT_DATA.getAndRegister(
                        "screenLockSource",
                        this.handleListenScreenLockSource
                      ),
                      window.addEventListener("resize", this.resize);
                  },
                },
                {
                  key: "componentWillUnmount",
                  value: function () {
                    x.a.removeAllListeners("passwordAuthenResult"),
                      _ACCEPT_DATA.removeOne(
                        "screenLockSource",
                        this.handleListenScreenLockSource
                      ),
                      window.removeEventListener("resize", this.resize);
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e = this.state,
                      n = e.modalShow,
                      t = e.background,
                      o = e.bgStyle,
                      c = void 0 === o ? {} : o,
                      r = this.handleModalShow,
                      _ = this.handleModalClose,
                      s = this.handleShutDowm,
                      a = this.handleClickModal;
                    return i.a.createElement(
                      "div",
                      { className: "screenLock__content__125x_IXP" },
                      t &&
                        i.a.createElement("div", {
                          className: "screenLock__bg-filter__3m7ydh7F",
                          style: t
                            ? {
                                backgroundImage:
                                  null == c ? void 0 : c.backgroundImage,
                              }
                            : {},
                        }),
                      i.a.createElement("div", {
                        className: "screenLock__bg__1i1bETa9",
                        style: t
                          ? {
                              backgroundImage:
                                null == c ? void 0 : c.backgroundImage,
                              width:
                                null == c ? void 0 : c.bgContainerDomSize.width,
                              height:
                                null == c
                                  ? void 0
                                  : c.bgContainerDomSize.height,
                            }
                          : {},
                      }),
                      i.a.createElement("div", {
                        className: "screenLock__mask__2uft4cxd",
                      }),
                      i.a.createElement(g.a, null),
                      i.a.createElement(
                        "div",
                        { className: "screenLock__content-box__fkI6ZeJs" },
                        i.a.createElement(v.a, {
                          title: "解锁",
                          actionName: "解锁",
                          actionType: 1,
                          onPasswordInputOver: this.handlePasswordInputOver,
                          onActivationCorrect: this.handleActivationCorrect,
                          type: "SCREEN_LOCK",
                        }),
                        i.a.createElement(
                          "div",
                          {
                            className: "screenLock__shutDowm__2XgVLYVi",
                            onClick: r,
                          },
                          i.a.createElement(
                            "p",
                            null,
                            i.a.createElement(
                              "i",
                              { className: "iconfont" },
                              ""
                            )
                          )
                        ),
                        i.a.createElement(
                          "div",
                          {
                            ref: "modal",
                            onClick: a,
                            className: p()(n ? "modal show" : "modal close", y),
                          },
                          i.a.createElement(
                            "div",
                            { className: "screenLock__modal-box__36dllSkS" },
                            i.a.createElement("p", null, "确定要关机吗？"),
                            i.a.createElement(
                              "div",
                              {
                                className: "screenLock__button-list__28P3IGEn",
                              },
                              i.a.createElement(
                                "div",
                                {
                                  className: "screenLock__cancel__yfbb9t6P",
                                  onClick: _,
                                },
                                i.a.createElement("p", null, "取消")
                              ),
                              i.a.createElement(
                                "div",
                                {
                                  className: "screenLock__confirm__dFItsJ6x",
                                  onClick: s,
                                },
                                i.a.createElement("p", null, "关机")
                              )
                            )
                          )
                        )
                      )
                    );
                  },
                },
              ]),
              r
            );
          })(c.PureComponent))
        ) || o,
      X = t(24),
      j = t(29),
      C = t(22);
    t(30);
    var T,
      O = Object(j.a)("screenLock");
    (T = A),
      _.a.render(
        i.a.createElement(
          X.a,
          { store: O },
          i.a.createElement(C.a, null, i.a.createElement(T, null))
        ),
        document.getElementById("root")
      );
  },
});
