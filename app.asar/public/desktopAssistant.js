!(function (c) {
  function e(e) {
    for (
      var n, t, i = e[0], o = e[1], a = e[2], r = 0, _ = [];
      r < i.length;
      r++
    )
      (t = i[r]),
        Object.prototype.hasOwnProperty.call(l, t) && l[t] && _.push(l[t][0]),
        (l[t] = 0);
    for (n in o) Object.prototype.hasOwnProperty.call(o, n) && (c[n] = o[n]);
    for (u && u(e); _.length; ) _.shift()();
    return d.push.apply(d, a || []), s();
  }
  function s() {
    for (var e, n = 0; n < d.length; n++) {
      for (var t = d[n], i = !0, o = 1; o < t.length; o++) {
        var a = t[o];
        0 !== l[a] && (i = !1);
      }
      i && (d.splice(n--, 1), (e = r((r.s = t[0]))));
    }
    return e;
  }
  var t = {},
    l = { 5: 0 },
    d = [];
  function r(e) {
    if (t[e]) return t[e].exports;
    var n = (t[e] = { i: e, l: !1, exports: {} });
    return c[e].call(n.exports, n, n.exports, r), (n.l = !0), n.exports;
  }
  (r.m = c),
    (r.c = t),
    (r.d = function (e, n, t) {
      r.o(e, n) || Object.defineProperty(e, n, { enumerable: !0, get: t });
    }),
    (r.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (r.t = function (n, e) {
      if ((1 & e && (n = r(n)), 8 & e)) return n;
      if (4 & e && "object" == typeof n && n && n.__esModule) return n;
      var t = Object.create(null);
      if (
        (r.r(t),
        Object.defineProperty(t, "default", { enumerable: !0, value: n }),
        2 & e && "string" != typeof n)
      )
        for (var i in n)
          r.d(
            t,
            i,
            function (e) {
              return n[e];
            }.bind(null, i)
          );
      return t;
    }),
    (r.n = function (e) {
      var n =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return r.d(n, "a", n), n;
    }),
    (r.o = function (e, n) {
      return Object.prototype.hasOwnProperty.call(e, n);
    }),
    (r.p = "");
  var n = (window.webpackJsonp = window.webpackJsonp || []),
    i = n.push.bind(n);
  (n.push = e), (n = n.slice());
  for (var o = 0; o < n.length; o++) e(n[o]);
  var u = i;
  d.push([881, 0]), s();
})({
  356: function (e, n, t) {
    var i = t(675);
    "string" == typeof i && (i = [[e.i, i, ""]]);
    var o = { hmr: !0, transform: void 0, insertInto: void 0 };
    t(12)(i, o);
    i.locals && (e.exports = i.locals);
  },
  357: function (e, n, t) {
    var i = t(678);
    "string" == typeof i && (i = [[e.i, i, ""]]);
    var o = { hmr: !0, transform: void 0, insertInto: void 0 };
    t(12)(i, o);
    i.locals && (e.exports = i.locals);
  },
  671: function (e, n, t) {
    var i = t(672);
    "string" == typeof i && (i = [[e.i, i, ""]]);
    var o = { hmr: !0, transform: void 0, insertInto: void 0 };
    t(12)(i, o);
    i.locals && (e.exports = i.locals);
  },
  672: function (e, n, t) {
    (n = e.exports = t(11)(!1)).push([
      e.i,
      ".index__header__3MZ6naLK {\n  width: 100%;\n  height: 48px;\n  line-height: 48px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.3);\n}\n.index__header__3MZ6naLK .index__title__2EuhDTPs {\n  float: left;\n  margin-left: 32px;\n  font-size: 16px;\n  color: #ffffff;\n  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);\n  font-weight: 600;\n}\n.index__header__3MZ6naLK .index__button__24WankPt,\n.index__header__3MZ6naLK .index__button2__2mhwC3oY,\n.index__header__3MZ6naLK .index__button3__1o6rmeo5 {\n  float: right;\n  height: 48px;\n  margin-right: 16px;\n  -webkit-transition: all 0.5s;\n  -o-transition: all 0.5s;\n  transition: all 0.5s;\n  line-height: 48px;\n}\n.index__header__3MZ6naLK .index__button__24WankPt img,\n.index__header__3MZ6naLK .index__button2__2mhwC3oY img,\n.index__header__3MZ6naLK .index__button3__1o6rmeo5 img {\n  width: 24px;\n  height: 24px;\n  vertical-align: middle;\n}\n.index__header__3MZ6naLK .index__button4__1wJTxG1P {\n  float: right;\n  margin-right: 16px;\n}\n.index__chooseBox__1SMVnMmC {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 999;\n}\n.index__chooseBox__1SMVnMmC.index__show__1t36wnxh {\n  visibility: visible;\n}\n.index__chooseBox__1SMVnMmC.index__hide__3T7W3QOx {\n  visibility: hidden;\n}\n.index__chooseBox__1SMVnMmC .index__choose__1P_35VrF {\n  position: absolute;\n  right: 16px;\n  top: 40px;\n  width: 132px;\n  height: 40px;\n  background: rgba(0, 0, 0, 0.3);\n  border-radius: 4px;\n  text-align: center;\n  line-height: 40px;\n  font-size: 14px;\n  color: #ffffff;\n  overflow: hidden;\n}\n",
      "",
    ]),
      (n.locals = {
        header: "index__header__3MZ6naLK",
        title: "index__title__2EuhDTPs",
        button: "index__button__24WankPt",
        button2: "index__button2__2mhwC3oY",
        button3: "index__button3__1o6rmeo5",
        button4: "index__button4__1wJTxG1P",
        chooseBox: "index__chooseBox__1SMVnMmC",
        show: "index__show__1t36wnxh",
        hide: "index__hide__3T7W3QOx",
        choose: "index__choose__1P_35VrF",
      });
  },
  673: function (e, n) {
    e.exports =
      "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAwNjc2NDE4MzYwIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjEyNjcwIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjQ4IiBoZWlnaHQ9IjQ4Ij48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwvc3R5bGU+PC9kZWZzPjxwYXRoIGQ9Ik04MjEuOTczMzMzIDcyNS4zMzMzMzNhMzIgMzIgMCAwIDEgNC4zNTIgNjMuNzAxMzM0bC00LjM1MiAwLjI5ODY2NkgyMDIuNjY2NjY3YTMyIDMyIDAgMCAxLTQuMzUyLTYzLjcwMTMzM0wyMDIuNjY2NjY3IDcyNS4zMzMzMzNoNjE5LjMwNjY2NnogbTAtMjU2YTMyIDMyIDAgMCAxIDQuMzUyIDYzLjcwMTMzNGwtNC4zNTIgMC4yOTg2NjZIMjAyLjY2NjY2N2EzMiAzMiAwIDAgMS00LjM1Mi02My43MDEzMzNMMjAyLjY2NjY2NyA0NjkuMzMzMzMzaDYxOS4zMDY2NjZ6IG0wLTI1NmEzMiAzMiAwIDAgMSA0LjM1MiA2My43MDEzMzRsLTQuMzUyIDAuMjk4NjY2SDIwMi42NjY2NjdhMzIgMzIgMCAwIDEtNC4zNTItNjMuNzAxMzMzTDIwMi42NjY2NjcgMjEzLjMzMzMzM2g2MTkuMzA2NjY2eiIgcC1pZD0iMTI2NzEiIGZpbGw9IiNmZmZmZmYiPjwvcGF0aD48L3N2Zz4=";
  },
  674: function (e, n) {
    e.exports =
      "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAwNjc2MjIyOTIyIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjEyMjU0IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjQ4IiBoZWlnaHQ9IjQ4Ij48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwvc3R5bGU+PC9kZWZzPjxwYXRoIGQ9Ik0zODQgNTc2SDE5MmMtMzguNCAwLTY0IDI1LjYtNjQgNjR2MTkyYzAgMzguNCAyNS42IDY0IDY0IDY0SDM4NGMzOC40IDAgNjQtMjUuNiA2NC02NFY2NDBjMC0zOC40LTI1LjYtNjQtNjQtNjR6IG0wIDI1NkgxOTJWNjQwSDM4NHYxOTJ6TTg2NCAxMjhIMTYwQzE0MC44IDEyOCAxMjggMTQwLjggMTI4IDE2MHYzMjBjMCAxOS4yIDEyLjggMzIgMzIgMzJzMzItMTIuOCAzMi0zMlYxOTJoNjQwdjY0MGgtMjg4Yy0xOS4yIDAtMzIgMTIuOC0zMiAzMnMxMi44IDMyIDMyIDMyaDMyMGMxOS4yIDAgMzItMTIuOCAzMi0zMlYxNjBjMC0xOS4yLTEyLjgtMzItMzItMzJ6TTY0MCA1NDRjMC0xOS4yLTEyLjgtMzItMzItMzJoLTUxLjJsMTM0LjQtMTM0LjRjMTIuOC0xMi44IDEyLjgtMzIgMC00NC44LTEyLjgtMTIuOC0zMi0xMi44LTQ0LjggMEw1MTIgNDY3LjJ2LTUxLjJjMC0xOS4yLTEyLjgtMzItMzItMzJzLTMyIDEyLjgtMzIgMzJ2MTI4YzAgMTkuMiAxMi44IDMyIDMyIDMyaDEyOGMxOS4yIDAgMzItMTIuOCAzMi0zMnoiIHAtaWQ9IjEyMjU1IiBmaWxsPSIjZmZmZmZmIj48L3BhdGg+PC9zdmc+";
  },
  675: function (e, n, t) {
    (n = e.exports = t(11)(!1)).push([
      e.i,
      ".index__teaching-res__2qpNQxX8 {\n  width: 100%;\n  height: auto;\n  padding-bottom: 24px;\n}\n.index__teaching-res__2qpNQxX8 .index__title__2aImk_6n {\n  font-size: 16px;\n  color: #ffffff;\n  line-height: 26px;\n  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);\n  padding: 0 0 0 32px;\n  margin-bottom: 10px;\n}\n.index__teaching-res__2qpNQxX8 .index__list__3ahZIexA {\n  width: 100%;\n  padding: 0 15px;\n}\n.index__item__2jpK_Dxw {\n  width: 90px;\n  height: 104px;\n  float: left;\n}\n.index__item__2jpK_Dxw img {\n  width: 100%;\n  height: 100%;\n}\n.index__item__2jpK_Dxw:active {\n  background: rgba(0, 0, 0, 0.6);\n}\n",
      "",
    ]),
      (n.locals = {
        "teaching-res": "index__teaching-res__2qpNQxX8",
        title: "index__title__2aImk_6n",
        list: "index__list__3ahZIexA",
        item: "index__item__2jpK_Dxw",
      });
  },
  676: function (e, n, t) {
    var i = t(677);
    "string" == typeof i && (i = [[e.i, i, ""]]);
    var o = { hmr: !0, transform: void 0, insertInto: void 0 };
    t(12)(i, o);
    i.locals && (e.exports = i.locals);
  },
  677: function (e, n, t) {
    (n = e.exports = t(11)(!1)).push([
      e.i,
      ".index__slide-page__2EZWhpJ- {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n.index__slide-page__2EZWhpJ- .index__page__2b5u4kRc {\n  position: absolute;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  -webkit-transition: all 0.3s;\n  -o-transition: all 0.3s;\n  transition: all 0.3s;\n  padding: 0 15px;\n}\n.index__slide-page__2EZWhpJ- .index__page__2b5u4kRc.index__show__2oHAfnk2 {\n  left: 0;\n}\n.index__slide-page__2EZWhpJ- .index__page__2b5u4kRc.index__left__2cP1GoQg {\n  left: -100%;\n  opacity: 0;\n}\n.index__slide-page__2EZWhpJ- .index__page__2b5u4kRc.index__right__2inRm5Jz {\n  left: 100%;\n  opacity: 0;\n}\n.index__page-icon__1KTug9gn {\n  width: 100%;\n  list-style: none;\n  margin-top: 16px;\n  text-align: center;\n  height: 8px;\n}\n.index__page-icon__1KTug9gn .index__icon__YFrzpxS9 {\n  display: inline-block;\n  width: 8px;\n  height: 8px;\n  vertical-align: top;\n  border-radius: 4px;\n  margin: 0 4px;\n}\n.index__page-icon__1KTug9gn .index__icon__YFrzpxS9.index__off__2FW-enI9 {\n  opacity: 0.5;\n  background: #ffffff;\n}\n.index__page-icon__1KTug9gn .index__icon__YFrzpxS9.index__on__2WEiQPd9 {\n  background: #ffffff;\n}\n",
      "",
    ]),
      (n.locals = {
        "slide-page": "index__slide-page__2EZWhpJ-",
        page: "index__page__2b5u4kRc",
        show: "index__show__2oHAfnk2",
        left: "index__left__2cP1GoQg",
        right: "index__right__2inRm5Jz",
        "page-icon": "index__page-icon__1KTug9gn",
        icon: "index__icon__YFrzpxS9",
        off: "index__off__2FW-enI9",
        on: "index__on__2WEiQPd9",
      });
  },
  678: function (e, n, t) {
    (n = e.exports = t(11)(!1)).push([
      e.i,
      ".index__app-list__2L_zddPt {\n  width: 100%;\n  height: auto;\n  padding-bottom: 24px;\n}\n.index__app-list__2L_zddPt .index__title__22UzCH5p {\n  font-size: 16px;\n  color: #ffffff;\n  line-height: 26px;\n  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);\n  padding: 0 0 0 32px;\n  margin-bottom: 10px;\n}\n.index__item__liB_nMTe {\n  width: 90px;\n  height: 104px;\n  float: left;\n}\n.index__item__liB_nMTe img {\n  width: 100%;\n  height: 100%;\n}\n.index__item__liB_nMTe:active,\n.index__inside-item__1nmBcR13:active {\n  background: rgba(0, 0, 0, 0.6);\n}\n",
      "",
    ]),
      (n.locals = {
        "app-list": "index__app-list__2L_zddPt",
        title: "index__title__22UzCH5p",
        item: "index__item__liB_nMTe",
        "inside-item": "index__inside-item__1nmBcR13",
      });
  },
  679: function (e, n, t) {
    var i = t(680);
    "string" == typeof i && (i = [[e.i, i, ""]]);
    var o = { hmr: !0, transform: void 0, insertInto: void 0 };
    t(12)(i, o);
    i.locals && (e.exports = i.locals);
  },
  680: function (e, n, t) {
    (n = e.exports = t(11)(!1)).push([
      e.i,
      ".index__content__2Mxg6Nbb {\n  width: 100%;\n  height: 100%;\n  background: transparent;\n}\n.index__content__2Mxg6Nbb .index__box__1Rn4EYGu {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.3);\n  border-radius: 4px;\n}\n.index__content__2Mxg6Nbb .index__box-not-DWM__3BbiNnvq {\n  position: absolute;\n  height: 100%;\n  top: 0;\n  left: 0;\n  width: 100%;\n  background: #2c3144;\n}\n.index__content__2Mxg6Nbb .index__list-box__1MrgVdSB {\n  width: 100%;\n  height: 100%;\n  padding-top: 24px;\n}\n",
      "",
    ]),
      (n.locals = {
        content: "index__content__2Mxg6Nbb",
        box: "index__box__1Rn4EYGu",
        "box-not-DWM": "index__box-not-DWM__3BbiNnvq",
        "list-box": "index__list-box__1MrgVdSB",
      });
  },
  881: function (e, n, _) {
    "use strict";
    _.r(n);
    var t = _(0),
      u = _.n(t),
      i = _(18),
      o = _.n(i),
      a = _(24),
      r = _(29),
      c = _(15),
      s = _.n(c),
      l = _(3),
      d = _.n(l),
      h = _(4),
      p = _.n(h),
      g = _(5),
      x = _.n(g),
      f = _(6),
      M = _.n(f),
      m = _(2),
      w = _.n(m),
      b = _(8),
      v = _.n(b),
      y = _(7),
      I = (_(671), _(110)),
      N = _(20),
      j = {
        "./index.less": {
          header: "index__header__3MZ6naLK",
          title: "index__title__2EuhDTPs",
          button: "index__button__24WankPt",
          button2: "index__button2__2mhwC3oY",
          button3: "index__button3__1o6rmeo5",
          button4: "index__button4__1wJTxG1P",
          chooseBox: "index__chooseBox__1SMVnMmC",
          show: "index__show__1t36wnxh",
          hide: "index__hide__3T7W3QOx",
          choose: "index__choose__1P_35VrF",
        },
      };
    function z(i) {
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
          n = w()(i);
        if (o) {
          var t = w()(this).constructor;
          e = Reflect.construct(n, arguments, t);
        } else e = n.apply(this, arguments);
        return M()(this, e);
      };
    }
    var S = window.CUSTOM_CONFIG,
      E = (function (e) {
        x()(a, e);
        var o = z(a);
        function a() {
          var n;
          d()(this, a);
          for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
            t[i] = arguments[i];
          return (
            ((n = o.call.apply(o, [this].concat(t))).state = {
              buttonShow: !1,
              chooseShow: !1,
            }),
            (n.interval = null),
            (n.handleShowButton = function () {
              n.setState({ chooseShow: !n.state.chooseShow });
            }),
            (n.handleShowList = function () {
              n.props.showOrHideTeachingRes(), n.setState({ chooseShow: !1 });
            }),
            (n.handleCloseChoose = function (e) {
              e.target === n.refs.chooseLabel && n.handleShowButton();
            }),
            (n.handleMinier = function () {
              y.a.send("desktopMinierShow", "");
            }),
            (n.handleShowFeedback = function () {
              y.a.send("windowControl", {
                typeName: "new",
                windowName: "feedback",
              });
            }),
            n
          );
        }
        return (
          p()(a, [
            {
              key: "render",
              value: function () {
                var e = this.state.chooseShow,
                  n = this.handleShowButton,
                  t = this.handleShowList,
                  i = this.handleMinier,
                  o = this.handleCloseChoose,
                  a = this.handleShowFeedback,
                  r = this.props.teachingResShow;
                return u.a.createElement(
                  u.a.Fragment,
                  null,
                  u.a.createElement(
                    "div",
                    { className: "index__header__3MZ6naLK" },
                    u.a.createElement(
                      "div",
                      { className: "index__title__2EuhDTPs" },
                      u.a.createElement("p", null, S.seewoDesktopName)
                    ),
                    !S.desktopTeachSourceHide &&
                      !S.desktopAppHide &&
                      u.a.createElement(
                        "div",
                        { className: "index__button__24WankPt" },
                        u.a.createElement(N.a, { onClick: n }),
                        u.a.createElement("img", { src: _(673) })
                      ),
                    u.a.createElement(
                      "div",
                      { className: "index__button2__2mhwC3oY" },
                      u.a.createElement(N.a, { onClick: i }),
                      u.a.createElement("img", { src: _(674) })
                    ),
                    u.a.createElement(
                      "div",
                      { className: "index__button3__1o6rmeo5" },
                      u.a.createElement(N.a, { onClick: a }),
                      u.a.createElement("img", { src: _(211) })
                    ),
                    u.a.createElement(
                      "div",
                      { className: "index__button4__1wJTxG1P" },
                      u.a.createElement(I.a, {
                        modalStyle: {
                          width: 180,
                          borderRadius: 4,
                          position: "fixed",
                          right: 0,
                          top: 48,
                        },
                      })
                    )
                  ),
                  u.a.createElement(
                    "div",
                    {
                      ref: "chooseLabel",
                      onClick: o,
                      className: v()(
                        e ? "chooseBox show" : "chooseBox hide",
                        j
                      ),
                    },
                    u.a.createElement(
                      "div",
                      { className: "index__choose__1P_35VrF", onMouseDown: t },
                      u.a.createElement(
                        "p",
                        null,
                        r ? "隐藏教学资源" : "显示教学资源"
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
      T = (_(356), _(25)),
      C = _(9),
      R = _(62),
      D = _(21);
    function L() {
      var o =
          0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
        t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
      return function (i) {
        var e, n;
        return (
          i(((e = o), { type: R.c, params: e, data: n || "" })),
          Object(D.a)(
            "hugoServiceHost",
            "/api/v1/assistant/clickapp",
            "post",
            o,
            t,
            "{}"
          ).then(
            function (e) {
              var n, t;
              return (
                i(((n = o), (t = e), { type: R.d, params: n, data: t || "" })),
                e
              );
            },
            function (e) {
              var n, t;
              return (
                i(((n = o), (t = e), { type: R.b, params: n, data: t || "" })),
                Promise.reject(e)
              );
            }
          )
        );
      };
    }
    var k,
      O = _(16);
    function A(i) {
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
          n = w()(i);
        if (o) {
          var t = w()(this).constructor;
          e = Reflect.construct(n, arguments, t);
        } else e = n.apply(this, arguments);
        return M()(this, e);
      };
    }
    var P =
        Object(C.a)({}, { postAssistantClickApp: L })(
          (k = (function (e) {
            x()(a, e);
            var o = A(a);
            function a() {
              var i;
              d()(this, a);
              for (
                var e = arguments.length, n = new Array(e), t = 0;
                t < e;
                t++
              )
                n[t] = arguments[t];
              return (
                ((i = o.call.apply(o, [this].concat(n))).canOpen = !0),
                (i.handleClick = function () {
                  var e = i.props,
                    n = e.value,
                    t = e.actions;
                  i.canOpen &&
                    ((i.canOpen = !1),
                    Object(T.a)("Integrated_start_app", {
                      resourceName: n.name,
                    }),
                    y.a.send("openExternal", n.target),
                    Object(O.a)(t, "postAssistantClickApp", { name: n.name })(
                      function () {},
                      function () {}
                    ),
                    setTimeout(function () {
                      i.canOpen = !0;
                    }, 2e3));
                }),
                i
              );
            }
            return (
              p()(a, [
                {
                  key: "render",
                  value: function () {
                    var e = this.props.value;
                    return u.a.createElement(
                      "div",
                      {
                        className: "index__item__2jpK_Dxw",
                        onClick: this.handleClick,
                      },
                      u.a.createElement("img", { src: e.image })
                    );
                  },
                },
              ]),
              a
            );
          })(t.PureComponent))
        ) || k,
      B = _(41),
      Y = _.n(B),
      W =
        (_(676),
        {
          "./index.less": {
            "slide-page": "index__slide-page__2EZWhpJ-",
            page: "index__page__2b5u4kRc",
            show: "index__show__2oHAfnk2",
            left: "index__left__2cP1GoQg",
            right: "index__right__2inRm5Jz",
            "page-icon": "index__page-icon__1KTug9gn",
            icon: "index__icon__YFrzpxS9",
            off: "index__off__2FW-enI9",
            on: "index__on__2WEiQPd9",
          },
        });
    function Z(i) {
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
          n = w()(i);
        if (o) {
          var t = w()(this).constructor;
          e = Reflect.construct(n, arguments, t);
        } else e = n.apply(this, arguments);
        return M()(this, e);
      };
    }
    var G = (function (e) {
      x()(o, e);
      var i = Z(o);
      function o() {
        var c;
        d()(this, o);
        for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++)
          n[t] = arguments[t];
        return (
          ((c = i.call.apply(i, [this].concat(n))).state = { page: 0 }),
          (c.setPageCutOne = function () {
            c.setState({ page: c.state.page - 1 });
          }),
          (c.getDirection = function (e, n) {
            var t = n - e,
              i = 0;
            return 30 < t ? (i = 1) : t <= -30 && (i = 2), i;
          }),
          (c.handleTouchStart = function (e) {
            c.startX = e.touches[0].pageX;
          }),
          (c.handleClickStart = function (e) {
            c.startX = e.pageX;
          }),
          (c.handleTouchEnd = function (e) {
            c.move(e.changedTouches[0].pageX);
          }),
          (c.handleClickEnd = function (e) {
            c.move(e.pageX);
          }),
          (c.move = function (e) {
            var n = Y()(c),
              t = n.startX,
              i = n.getDirection,
              o = c.state.page,
              a = c.props,
              r = a.list,
              _ = a.pageNum;
            switch (i(t, e)) {
              case 1:
                0 < o && c.setState({ page: o - 1 });
                break;
              case 2:
                o < r.length / _ - 1 && c.setState({ page: o + 1 });
            }
          }),
          c
        );
      }
      return (
        p()(o, [
          {
            key: "componentDidUpdate",
            value: function (e) {
              var n = this.props.pageNum;
              Math.ceil(this.props.list.length / n) <
                Math.ceil(e.list.length / n) &&
                this.state.page === Math.ceil(this.props.list.length / n) &&
                this.setPageCutOne();
            },
          },
          {
            key: "render",
            value: function () {
              for (
                var e = this.props,
                  t = e.list,
                  i = e.Item,
                  o = e.pageNum,
                  n = e.height,
                  a = this.state.page,
                  r = this.handleTouchStart,
                  _ = this.handleTouchEnd,
                  c = this.handleClickStart,
                  s = this.handleClickEnd,
                  l = [],
                  d = 0;
                d < Math.ceil(t.length / o);
                d++
              )
                l.push(d);
              return u.a.createElement(
                u.a.Fragment,
                null,
                u.a.createElement(
                  "div",
                  {
                    className: "index__slide-page__2EZWhpJ-",
                    onTouchStart: r,
                    onTouchEnd: _,
                    onMouseDown: c,
                    onMouseUp: s,
                    style: { height: n },
                  },
                  l.map(function (e) {
                    var n =
                      e === a
                        ? "page show"
                        : a < e
                        ? "page right"
                        : "page left";
                    return u.a.createElement(
                      "div",
                      { key: e, className: v()(n, W) },
                      t.map(function (e, n) {
                        if (a * o <= n && n < a * o + o)
                          return u.a.createElement(i, { key: n, value: e });
                      })
                    );
                  })
                ),
                1 < l.length &&
                  u.a.createElement(
                    "ul",
                    { className: "index__page-icon__1KTug9gn" },
                    l.map(function (e, n) {
                      return u.a.createElement("li", {
                        key: n,
                        className: v()(a === n ? "icon on" : "icon off", W),
                      });
                    })
                  )
              );
            },
          },
        ]),
        o
      );
    })(t.PureComponent);
    function H(e) {
      var n = e.list;
      return u.a.createElement(
        "div",
        { className: "index__teaching-res__2qpNQxX8" },
        u.a.createElement(
          "div",
          { className: "index__title__2aImk_6n" },
          u.a.createElement(
            "p",
            null,
            window.CUSTOM_CONFIG.desktopTeachSourceName || "教学资源"
          )
        ),
        u.a.createElement(G, {
          list: n,
          Item: P,
          pageNum: 10,
          height: 5 < n.length ? 208 : 104,
        })
      );
    }
    var Q;
    _(357);
    function F(i) {
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
          n = w()(i);
        if (o) {
          var t = w()(this).constructor;
          e = Reflect.construct(n, arguments, t);
        } else e = n.apply(this, arguments);
        return M()(this, e);
      };
    }
    var J =
      Object(C.a)({}, { postAssistantClickApp: L })(
        (Q = (function (e) {
          x()(a, e);
          var o = F(a);
          function a() {
            var i;
            d()(this, a);
            for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++)
              n[t] = arguments[t];
            return (
              ((i = o.call.apply(o, [this].concat(n))).canOpen = !0),
              (i.handleClick = function () {
                var e = i.props,
                  n = e.value,
                  t = e.actions;
                i.canOpen &&
                  ((i.canOpen = !1),
                  n.isInside
                    ? (Object(T.a)("Integrated_start_app", {
                        resourceName: n.wname,
                      }),
                      y.a.send("windowControl", {
                        typeName: "new",
                        windowName: n.wname,
                      }))
                    : ("feature" !== n.type &&
                        y.a.send("openExternal", n.exePath),
                      Object(T.a)("Integrated_start_app", {
                        resourceName: n.name,
                      }),
                      Object(O.a)(t, "postAssistantClickApp", { name: n.name })(
                        function () {},
                        function () {}
                      )),
                  setTimeout(function () {
                    i.canOpen = !0;
                  }, 2e3));
              }),
              i
            );
          }
          return (
            p()(a, [
              {
                key: "render",
                value: function () {
                  var e = this.props.value;
                  return u.a.createElement(
                    "div",
                    {
                      className: "index__item__liB_nMTe",
                      onClick: this.handleClick,
                    },
                    u.a.createElement("img", { src: e.image })
                  );
                },
              },
            ]),
            a
          );
        })(t.PureComponent))
      ) || Q;
    function V(e) {
      var n = e.list;
      return u.a.createElement(
        "div",
        { className: "index__app-list__2L_zddPt" },
        u.a.createElement(
          "div",
          { className: "index__title__22UzCH5p" },
          u.a.createElement("p", null, window.CUSTOM_CONFIG.desktopAppName)
        ),
        u.a.createElement(G, { list: n, Item: J, pageNum: 5, height: 104 })
      );
    }
    _(679);
    var U = {
      "./index.less": {
        content: "index__content__2Mxg6Nbb",
        box: "index__box__1Rn4EYGu",
        "box-not-DWM": "index__box-not-DWM__3BbiNnvq",
        "list-box": "index__list-box__1MrgVdSB",
      },
    };
    function K(i) {
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
          n = w()(i);
        if (o) {
          var t = w()(this).constructor;
          e = Reflect.construct(n, arguments, t);
        } else e = n.apply(this, arguments);
        return M()(this, e);
      };
    }
    var X = "fullHeight",
      q = "fullHalfTESHeight",
      $ = "fullHalfTESNoPageSlideHeight",
      ee = "fullNoPageSlideHeight",
      ne = "fullOnePageSlideHeight",
      te = "noTESHasPageSlideHeight",
      ie = "noTESNoPageSlideHeight",
      oe = window.CUSTOM_CONFIG,
      ae = [
        {
          image: oe.root + "/" + oe.assistantEntryIconPath,
          isInside: !0,
          wname: "assistant",
        },
      ],
      re = (function (e) {
        x()(a, e);
        var i = K(a);
        function a() {
          var o;
          d()(this, a);
          for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++)
            n[t] = arguments[t];
          return (
            ((o = i.call.apply(i, [this].concat(n))).state = {
              resource: null,
              teachingList: [],
              appList: [],
              teachingResShow: !oe.desktopTeachSourceHide,
              boxStyle: window.DWMOpenState ? "box" : "box-not-DWM",
            }),
            (o.startGetRes = function () {
              y.a.send("getDesktopAssistantResource", ""),
                y.a.on("DTAResource", function (e) {
                  var n = e.message,
                    t = e.setting;
                  o.setState(
                    {
                      resource: n,
                      teachingResShow:
                        o.state.teachingResShow &&
                        t.hasOwnProperty("teachingResShow")
                          ? t.teachingResShow
                          : o.state.teachingResShow,
                    },
                    function () {
                      o.setResource();
                    }
                  );
                }),
                y.a.on("DWMOpenState", function (e) {
                  "box" === o.state.boxStyle &&
                    o.setState({ boxStyle: e ? "box" : "box-not-DWM" });
                });
            }),
            (o.setResource = function () {
              o.setState(
                {
                  teachingList: s()(o.state.resource.urls),
                  appList: [].concat(ae, s()(o.state.resource.apps)),
                },
                function () {
                  o.setWindowHeight();
                }
              );
            }),
            (o.showOrHideTeachingRes = function () {
              y.a.send("storeSetting", {
                windowName: window.windowName,
                data: { teachingResShow: !o.state.teachingResShow },
              }),
                o.state.teachingResShow &&
                  Object(T.a)("Integrated_hide_teach_resource", {}),
                o.setState(
                  { teachingResShow: !o.state.teachingResShow },
                  function () {
                    o.setWindowHeight();
                  }
                );
            }),
            (o.setWindowHeight = function () {
              var e = o.state,
                n = e.teachingList,
                t = e.appList,
                i = "";
              e.teachingResShow && 0 < n.length
                ? n.length <= 5
                  ? (i = 5 < t.length ? q : $)
                  : (10 < n.length && 5 < t.length && (i = X),
                    ((10 < n.length && t.length <= 5) ||
                      (n.length <= 10 && 5 < t.length)) &&
                      (i = ne),
                    n.length <= 10 && t.length <= 5 && (i = ee))
                : (i = t.length < 5 ? ie : te),
                y.a.send("desktopAssistantHeightChange", i);
            }),
            o
          );
        }
        return (
          p()(a, [
            {
              key: "componentDidMount",
              value: function () {
                this.startGetRes();
              },
            },
            {
              key: "render",
              value: function () {
                var e = this.showOrHideTeachingRes,
                  n = this.state,
                  t = n.teachingList,
                  i = n.appList,
                  o = n.teachingResShow,
                  a = n.resource,
                  r = n.boxStyle;
                return (
                  a &&
                  u.a.createElement(
                    "div",
                    { className: "index__content__2Mxg6Nbb" },
                    u.a.createElement(
                      "div",
                      { className: v()(r, U) },
                      u.a.createElement(E, {
                        showOrHideTeachingRes: e,
                        teachingResShow: o,
                        isButtonShow: 0 < t.length,
                      }),
                      u.a.createElement(
                        "div",
                        { className: "index__list-box__1MrgVdSB" },
                        o && 0 < t.length && u.a.createElement(H, { list: t }),
                        !oe.desktopAppHide && u.a.createElement(V, { list: i })
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
      _e = _(22);
    _(30);
    var ce,
      se = Object(r.a)("desktopAssistant");
    (ce = re),
      o.a.render(
        u.a.createElement(
          a.a,
          { store: se },
          u.a.createElement(
            _e.a,
            { needReloadForPortRenew: !0 },
            u.a.createElement(ce, null)
          )
        ),
        document.getElementById("root")
      );
  },
});
