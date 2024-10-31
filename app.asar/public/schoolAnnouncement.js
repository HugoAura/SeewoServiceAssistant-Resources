!(function (c) {
  function n(n) {
    for (
      var e, t, o = n[0], a = n[1], i = n[2], r = 0, u = [];
      r < o.length;
      r++
    )
      (t = o[r]),
        Object.prototype.hasOwnProperty.call(s, t) && s[t] && u.push(s[t][0]),
        (s[t] = 0);
    for (e in a) Object.prototype.hasOwnProperty.call(a, e) && (c[e] = a[e]);
    for (d && d(n); u.length; ) u.shift()();
    return l.push.apply(l, i || []), _();
  }
  function _() {
    for (var n, e = 0; e < l.length; e++) {
      for (var t = l[e], o = !0, a = 1; a < t.length; a++) {
        var i = t[a];
        0 !== s[i] && (o = !1);
      }
      o && (l.splice(e--, 1), (n = r((r.s = t[0]))));
    }
    return n;
  }
  var t = {},
    s = { 34: 0 },
    l = [];
  function r(n) {
    if (t[n]) return t[n].exports;
    var e = (t[n] = { i: n, l: !1, exports: {} });
    return c[n].call(e.exports, e, e.exports, r), (e.l = !0), e.exports;
  }
  (r.m = c),
    (r.c = t),
    (r.d = function (n, e, t) {
      r.o(n, e) || Object.defineProperty(n, e, { enumerable: !0, get: t });
    }),
    (r.r = function (n) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(n, "__esModule", { value: !0 });
    }),
    (r.t = function (e, n) {
      if ((1 & n && (e = r(e)), 8 & n)) return e;
      if (4 & n && "object" == typeof e && e && e.__esModule) return e;
      var t = Object.create(null);
      if (
        (r.r(t),
        Object.defineProperty(t, "default", { enumerable: !0, value: e }),
        2 & n && "string" != typeof e)
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
      return r.d(e, "a", e), e;
    }),
    (r.o = function (n, e) {
      return Object.prototype.hasOwnProperty.call(n, e);
    }),
    (r.p = "");
  var e = (window.webpackJsonp = window.webpackJsonp || []),
    o = e.push.bind(e);
  (e.push = n), (e = e.slice());
  for (var a = 0; a < e.length; a++) n(e[a]);
  var d = o;
  l.push([885, 0]), _();
})({
  824: function (n, e, t) {
    var o = t(825);
    "string" == typeof o && (o = [[n.i, o, ""]]);
    var a = { hmr: !0, transform: void 0, insertInto: void 0 };
    t(12)(o, a);
    o.locals && (n.exports = o.locals);
  },
  825: function (n, e, t) {
    (e = n.exports = t(11)(!1)).push([
      n.i,
      ".audioAnnouncement__box__2OQLcdss {\n  width: 100%;\n  height: 100%;\n  background-image: -o-linear-gradient(316deg, #172b69 0%, #1b3174 8%, #1e3880 15%, #223e8b 21%, #254497 26%, #284aa2 32%, #2b50ad 36%, #2e55b7 41%, #315ac1 45%, #345fca 49%, #3663d3 53%, #3867db 58%, #3a6be3 62%, #3c6fe9 67%, #3e72ef 72%, #3f74f4 78%, #4076f8 85%, #4178fc 92%, #4279fe 100%);\n  background-image: linear-gradient(134deg, #172b69 0%, #1b3174 8%, #1e3880 15%, #223e8b 21%, #254497 26%, #284aa2 32%, #2b50ad 36%, #2e55b7 41%, #315ac1 45%, #345fca 49%, #3663d3 53%, #3867db 58%, #3a6be3 62%, #3c6fe9 67%, #3e72ef 72%, #3f74f4 78%, #4076f8 85%, #4178fc 92%, #4279fe 100%);\n}\n.audioAnnouncement__box__2OQLcdss .audioAnnouncement__player-box__PGXtsgDu {\n  position: relative;\n  width: 940px;\n  height: 120px;\n  border-radius: 60px;\n  background-color: rgba(61, 164, 255, 0.4);\n  overflow: hidden;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n      -ms-transform: translateY(-50%);\n          transform: translateY(-50%);\n  margin: 0 auto;\n}\n.audioAnnouncement__box__2OQLcdss .audioAnnouncement__player-box__PGXtsgDu.audioAnnouncement__start__31q8GiIE {\n  background-color: rgba(61, 164, 255, 0.3);\n}\n.audioAnnouncement__box__2OQLcdss .audioAnnouncement__player-box__PGXtsgDu .audioAnnouncement__back-progress__3fRAjNfT {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 120px;\n  -webkit-transition: all 0.1s;\n  -o-transition: all 0.1s;\n  transition: all 0.1s;\n  background-image: -webkit-gradient(linear, right top, left top, from(rgba(112, 209, 255, 0.4)), color-stop(66%, rgba(61, 164, 255, 0.4)));\n  background-image: -o-linear-gradient(right, rgba(112, 209, 255, 0.4) 0%, rgba(61, 164, 255, 0.4) 66%);\n  background-image: linear-gradient(270deg, rgba(112, 209, 255, 0.4) 0%, rgba(61, 164, 255, 0.4) 66%);\n}\n.audioAnnouncement__box__2OQLcdss .audioAnnouncement__player-box__PGXtsgDu .audioAnnouncement__top-block__b7Pb8aQX {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  padding: 0 28px 0 44px;\n}\n.audioAnnouncement__box__2OQLcdss .audioAnnouncement__player-box__PGXtsgDu .audioAnnouncement__top-block__b7Pb8aQX .audioAnnouncement__audio-wave__2Z4g1aCp {\n  position: relative;\n  float: left;\n  width: 35px;\n  height: 46px;\n  margin-top: 39px;\n}\n.audioAnnouncement__box__2OQLcdss .audioAnnouncement__player-box__PGXtsgDu .audioAnnouncement__top-block__b7Pb8aQX .audioAnnouncement__audio-wave__2Z4g1aCp::before {\n  content: '';\n  position: absolute;\n  display: block;\n  width: 32px;\n  height: 32px;\n  top: 7px;\n  left: 2px;\n  background-color: rgba(161, 211, 255, 0.55);\n  -webkit-filter: blur(10px);\n          filter: blur(10px);\n  z-index: -1;\n  border-radius: 32px;\n  overflow: hidden;\n}\n.audioAnnouncement__box__2OQLcdss .audioAnnouncement__player-box__PGXtsgDu .audioAnnouncement__top-block__b7Pb8aQX .audioAnnouncement__audio-wave__2Z4g1aCp.audioAnnouncement__start__31q8GiIE {\n  opacity: 1;\n}\n.audioAnnouncement__box__2OQLcdss .audioAnnouncement__player-box__PGXtsgDu .audioAnnouncement__top-block__b7Pb8aQX .audioAnnouncement__audio-wave__2Z4g1aCp span {\n  position: relative;\n  display: block;\n  float: left;\n  width: 3px;\n  background-color: #43e2ff;\n  margin: 0 2px;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n      -ms-transform: translateY(-50%);\n          transform: translateY(-50%);\n}\n.audioAnnouncement__box__2OQLcdss .audioAnnouncement__player-box__PGXtsgDu .audioAnnouncement__top-block__b7Pb8aQX .audioAnnouncement__audio-wave__2Z4g1aCp span:nth-child(5) {\n  height: 26px;\n}\n.audioAnnouncement__box__2OQLcdss .audioAnnouncement__player-box__PGXtsgDu .audioAnnouncement__top-block__b7Pb8aQX .audioAnnouncement__audio-wave__2Z4g1aCp span:nth-child(5).audioAnnouncement__start__31q8GiIE {\n  -webkit-animation: audioAnnouncement__running3__2Xi80F1B 1s linear infinite;\n          animation: audioAnnouncement__running3__2Xi80F1B 1s linear infinite;\n}\n.audioAnnouncement__box__2OQLcdss .audioAnnouncement__player-box__PGXtsgDu .audioAnnouncement__top-block__b7Pb8aQX .audioAnnouncement__audio-wave__2Z4g1aCp span:nth-child(1) {\n  height: 26px;\n}\n.audioAnnouncement__box__2OQLcdss .audioAnnouncement__player-box__PGXtsgDu .audioAnnouncement__top-block__b7Pb8aQX .audioAnnouncement__audio-wave__2Z4g1aCp span:nth-child(1).audioAnnouncement__start__31q8GiIE {\n  -webkit-animation: audioAnnouncement__running3__2Xi80F1B 1s linear infinite;\n          animation: audioAnnouncement__running3__2Xi80F1B 1s linear infinite;\n}\n.audioAnnouncement__box__2OQLcdss .audioAnnouncement__player-box__PGXtsgDu .audioAnnouncement__top-block__b7Pb8aQX .audioAnnouncement__audio-wave__2Z4g1aCp span:nth-child(2) {\n  height: 36px;\n}\n.audioAnnouncement__box__2OQLcdss .audioAnnouncement__player-box__PGXtsgDu .audioAnnouncement__top-block__b7Pb8aQX .audioAnnouncement__audio-wave__2Z4g1aCp span:nth-child(2).audioAnnouncement__start__31q8GiIE {\n  -webkit-animation: audioAnnouncement__running2__Nxyc4d6n 1s linear infinite;\n          animation: audioAnnouncement__running2__Nxyc4d6n 1s linear infinite;\n}\n.audioAnnouncement__box__2OQLcdss .audioAnnouncement__player-box__PGXtsgDu .audioAnnouncement__top-block__b7Pb8aQX .audioAnnouncement__audio-wave__2Z4g1aCp span:nth-child(3) {\n  height: 46px;\n}\n.audioAnnouncement__box__2OQLcdss .audioAnnouncement__player-box__PGXtsgDu .audioAnnouncement__top-block__b7Pb8aQX .audioAnnouncement__audio-wave__2Z4g1aCp span:nth-child(3).audioAnnouncement__start__31q8GiIE {\n  -webkit-animation: audioAnnouncement__running1__1_bd52wH 1s linear infinite;\n          animation: audioAnnouncement__running1__1_bd52wH 1s linear infinite;\n}\n.audioAnnouncement__box__2OQLcdss .audioAnnouncement__player-box__PGXtsgDu .audioAnnouncement__top-block__b7Pb8aQX .audioAnnouncement__audio-wave__2Z4g1aCp span:nth-child(4) {\n  height: 36px;\n}\n.audioAnnouncement__box__2OQLcdss .audioAnnouncement__player-box__PGXtsgDu .audioAnnouncement__top-block__b7Pb8aQX .audioAnnouncement__audio-wave__2Z4g1aCp span:nth-child(4).audioAnnouncement__start__31q8GiIE {\n  -webkit-animation: audioAnnouncement__running2__Nxyc4d6n 1s linear infinite;\n          animation: audioAnnouncement__running2__Nxyc4d6n 1s linear infinite;\n}\n.audioAnnouncement__box__2OQLcdss .audioAnnouncement__player-box__PGXtsgDu .audioAnnouncement__top-block__b7Pb8aQX .audioAnnouncement__title__3hfg8UIA {\n  float: left;\n  line-height: 120px;\n  margin-left: 19px;\n  font-size: 28px;\n  color: rgba(255, 255, 255, 0.4);\n  width: 712px;\n}\n.audioAnnouncement__box__2OQLcdss .audioAnnouncement__player-box__PGXtsgDu .audioAnnouncement__top-block__b7Pb8aQX .audioAnnouncement__title__3hfg8UIA p {\n  overflow: hidden;\n  -o-text-overflow: ellipsis;\n     text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.audioAnnouncement__box__2OQLcdss .audioAnnouncement__player-box__PGXtsgDu .audioAnnouncement__top-block__b7Pb8aQX .audioAnnouncement__title__3hfg8UIA.audioAnnouncement__start__31q8GiIE {\n  color: #ffffff;\n}\n.audioAnnouncement__box__2OQLcdss .audioAnnouncement__player-box__PGXtsgDu .audioAnnouncement__top-block__b7Pb8aQX .audioAnnouncement__circle-progress__vewRNHAa {\n  position: relative;\n  float: right;\n  margin: 18px 0 18px 18px;\n  width: 84px;\n  height: 84px;\n  line-height: 84px;\n  text-align: center;\n  color: rgba(62, 113, 238, 0.4);\n}\n.audioAnnouncement__box__2OQLcdss .audioAnnouncement__player-box__PGXtsgDu .audioAnnouncement__top-block__b7Pb8aQX .audioAnnouncement__circle-progress__vewRNHAa.audioAnnouncement__start__31q8GiIE {\n  color: white;\n}\n.audioAnnouncement__box__2OQLcdss .audioAnnouncement__player-box__PGXtsgDu .audioAnnouncement__top-block__b7Pb8aQX .audioAnnouncement__circle-progress__vewRNHAa .audioAnnouncement__track__2F6pREwX {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 84px;\n  height: 84px;\n  border: 3px solid rgba(62, 113, 238, 0.4);\n  border-radius: 42px;\n  z-index: 88;\n}\n.audioAnnouncement__box__2OQLcdss .audioAnnouncement__player-box__PGXtsgDu .audioAnnouncement__top-block__b7Pb8aQX .audioAnnouncement__circle-progress__vewRNHAa .audioAnnouncement__top__2qGeDCDJ,\n.audioAnnouncement__box__2OQLcdss .audioAnnouncement__player-box__PGXtsgDu .audioAnnouncement__top-block__b7Pb8aQX .audioAnnouncement__circle-progress__vewRNHAa .audioAnnouncement__bottom__2V4f8rU_ {\n  position: absolute;\n  left: 0px;\n  overflow: hidden;\n  width: 84px;\n  height: 42px;\n  background: transparent;\n  z-index: 99;\n}\n.audioAnnouncement__box__2OQLcdss .audioAnnouncement__player-box__PGXtsgDu .audioAnnouncement__top-block__b7Pb8aQX .audioAnnouncement__circle-progress__vewRNHAa .audioAnnouncement__top__2qGeDCDJ {\n  top: 0px;\n}\n.audioAnnouncement__box__2OQLcdss .audioAnnouncement__player-box__PGXtsgDu .audioAnnouncement__top-block__b7Pb8aQX .audioAnnouncement__circle-progress__vewRNHAa .audioAnnouncement__top__2qGeDCDJ .audioAnnouncement__circle__3jPWLVDf {\n  top: 0;\n  border-top: 3px solid #8ed3f5;\n  border-left: 3px solid #8ed3f5;\n}\n.audioAnnouncement__box__2OQLcdss .audioAnnouncement__player-box__PGXtsgDu .audioAnnouncement__top-block__b7Pb8aQX .audioAnnouncement__circle-progress__vewRNHAa .audioAnnouncement__bottom__2V4f8rU_ {\n  bottom: 0px;\n}\n.audioAnnouncement__box__2OQLcdss .audioAnnouncement__player-box__PGXtsgDu .audioAnnouncement__top-block__b7Pb8aQX .audioAnnouncement__circle-progress__vewRNHAa .audioAnnouncement__bottom__2V4f8rU_ .audioAnnouncement__circle__3jPWLVDf {\n  bottom: 0;\n  border-top: 3px solid #8ed3f5;\n  border-left: 3px solid #8ed3f5;\n}\n.audioAnnouncement__box__2OQLcdss .audioAnnouncement__player-box__PGXtsgDu .audioAnnouncement__top-block__b7Pb8aQX .audioAnnouncement__circle-progress__vewRNHAa .audioAnnouncement__circle__3jPWLVDf {\n  position: absolute;\n  width: 84px;\n  height: 84px;\n  border-radius: 42px;\n  border: 3px solid transparent;\n  -webkit-transition: all 0.1s;\n  -o-transition: all 0.1s;\n  transition: all 0.1s;\n}\n.audioAnnouncement__box__2OQLcdss .audioAnnouncement__button__Y37kAKTd {\n  position: absolute;\n  width: 116px;\n  height: 48px;\n  right: 24px;\n  bottom: 16px;\n}\n@-webkit-keyframes audioAnnouncement__running1__1_bd52wH {\n  0% {\n    height: 46px;\n  }\n  50% {\n    height: 26px;\n  }\n  100% {\n    height: 46px;\n  }\n}\n@keyframes audioAnnouncement__running1__1_bd52wH {\n  0% {\n    height: 46px;\n  }\n  50% {\n    height: 26px;\n  }\n  100% {\n    height: 46px;\n  }\n}\n@-webkit-keyframes audioAnnouncement__running2__Nxyc4d6n {\n  0% {\n    height: 36px;\n  }\n  25% {\n    height: 46px;\n  }\n  75% {\n    height: 26px;\n  }\n  100% {\n    height: 36px;\n  }\n}\n@keyframes audioAnnouncement__running2__Nxyc4d6n {\n  0% {\n    height: 36px;\n  }\n  25% {\n    height: 46px;\n  }\n  75% {\n    height: 26px;\n  }\n  100% {\n    height: 36px;\n  }\n}\n@-webkit-keyframes audioAnnouncement__running3__2Xi80F1B {\n  0% {\n    height: 26px;\n  }\n  50% {\n    height: 46px;\n  }\n  100% {\n    height: 26px;\n  }\n}\n@keyframes audioAnnouncement__running3__2Xi80F1B {\n  0% {\n    height: 26px;\n  }\n  50% {\n    height: 46px;\n  }\n  100% {\n    height: 26px;\n  }\n}\n",
      "",
    ]),
      (e.locals = {
        box: "audioAnnouncement__box__2OQLcdss",
        "player-box": "audioAnnouncement__player-box__PGXtsgDu",
        start: "audioAnnouncement__start__31q8GiIE",
        "back-progress": "audioAnnouncement__back-progress__3fRAjNfT",
        "top-block": "audioAnnouncement__top-block__b7Pb8aQX",
        "audio-wave": "audioAnnouncement__audio-wave__2Z4g1aCp",
        running3: "audioAnnouncement__running3__2Xi80F1B",
        running2: "audioAnnouncement__running2__Nxyc4d6n",
        running1: "audioAnnouncement__running1__1_bd52wH",
        title: "audioAnnouncement__title__3hfg8UIA",
        "circle-progress": "audioAnnouncement__circle-progress__vewRNHAa",
        track: "audioAnnouncement__track__2F6pREwX",
        top: "audioAnnouncement__top__2qGeDCDJ",
        bottom: "audioAnnouncement__bottom__2V4f8rU_",
        circle: "audioAnnouncement__circle__3jPWLVDf",
        button: "audioAnnouncement__button__Y37kAKTd",
      });
  },
  826: function (n, e, t) {
    var o = t(827);
    "string" == typeof o && (o = [[n.i, o, ""]]);
    var a = { hmr: !0, transform: void 0, insertInto: void 0 };
    t(12)(o, a);
    o.locals && (n.exports = o.locals);
  },
  827: function (n, e, t) {
    (e = n.exports = t(11)(!1)).push([
      n.i,
      ".pictureAnnouncement__box__EoPufcq2 {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n.pictureAnnouncement__box__EoPufcq2 .pictureAnnouncement__image-list-box__wyOG5Lyo {\n  width: 100%;\n  height: 100%;\n}\n.pictureAnnouncement__box__EoPufcq2 .pictureAnnouncement__index-show__2ALK3v2Q {\n  position: absolute;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  bottom: 16px;\n  width: 98px;\n  height: 48px;\n  line-height: 48px;\n  background: rgba(0, 0, 0, 0.3);\n  border-radius: 27px;\n  text-align: center;\n  font-size: 24px;\n  color: #ffffff;\n  letter-spacing: 3px;\n  z-index: 222;\n}\n",
      "",
    ]),
      (e.locals = {
        box: "pictureAnnouncement__box__EoPufcq2",
        "image-list-box": "pictureAnnouncement__image-list-box__wyOG5Lyo",
        "index-show": "pictureAnnouncement__index-show__2ALK3v2Q",
      });
  },
  828: function (n, e, t) {
    var o = t(829);
    "string" == typeof o && (o = [[n.i, o, ""]]);
    var a = { hmr: !0, transform: void 0, insertInto: void 0 };
    t(12)(o, a);
    o.locals && (n.exports = o.locals);
  },
  829: function (n, e, t) {
    var o = t(27);
    (e = n.exports = t(11)(!1)).push([
      n.i,
      ".schoolAnnouncement__button__2anUB35T {\n  position: absolute;\n  right: 24px;\n  bottom: 16px;\n  width: 116px;\n  height: 48px;\n  border: 2px solid rgba(255, 255, 255, 0.5);\n  border-radius: 24px;\n  font-size: 18px;\n  color: #ffffff;\n}\n.schoolAnnouncement__button__2anUB35T .schoolAnnouncement__icon__1ftFGFHk {\n  float: left;\n  width: 22.5px;\n  height: 21px;\n  margin: 11.5px 8px 0 22.5px;\n  background-image: url(" +
        o(t(136)) +
        ");\n  background-position: center;\n  background-size: contain;\n  background-repeat: no-repeat;\n}\n.schoolAnnouncement__button__2anUB35T p {\n  float: left;\n  line-height: 44px;\n}\n.schoolAnnouncement__bottom-fence__3z8lrZKP {\n  position: absolute;\n  height: 80px;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  z-index: 111;\n}\n.schoolAnnouncement__bottom-fence__3z8lrZKP.schoolAnnouncement__color__38rMsceL {\n  background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0)), to(rgba(0, 0, 0, 0.7)));\n  background-image: -o-linear-gradient(top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 100%);\n  background-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 100%);\n}\n",
      "",
    ]),
      (e.locals = {
        button: "schoolAnnouncement__button__2anUB35T",
        icon: "schoolAnnouncement__icon__1ftFGFHk",
        "bottom-fence": "schoolAnnouncement__bottom-fence__3z8lrZKP",
        color: "schoolAnnouncement__color__38rMsceL",
      });
  },
  885: function (n, e, t) {
    "use strict";
    t.r(e);
    var o = t(0),
      l = t.n(o),
      a = t(18),
      i = t.n(a),
      r = t(3),
      u = t.n(r),
      c = t(4),
      _ = t.n(c),
      s = t(5),
      d = t.n(s),
      p = t(6),
      m = t.n(p),
      f = t(2),
      h = t.n(f),
      b = t(8),
      g = t.n(b),
      y = t(7),
      A = t(15),
      x = t.n(A),
      v = t(41),
      w = t.n(v),
      k = t(28),
      L = t.n(k),
      P = (t(824), t(114)),
      E = t(9),
      Q = t(38),
      C = {
        "./audioAnnouncement.less": {
          box: "audioAnnouncement__box__2OQLcdss",
          running3: "audioAnnouncement__running3__2Xi80F1B",
          running2: "audioAnnouncement__running2__Nxyc4d6n",
          running1: "audioAnnouncement__running1__1_bd52wH",
          "player-box": "audioAnnouncement__player-box__PGXtsgDu",
          start: "audioAnnouncement__start__31q8GiIE",
          "back-progress": "audioAnnouncement__back-progress__3fRAjNfT",
          "top-block": "audioAnnouncement__top-block__b7Pb8aQX",
          "audio-wave": "audioAnnouncement__audio-wave__2Z4g1aCp",
          title: "audioAnnouncement__title__3hfg8UIA",
          "circle-progress": "audioAnnouncement__circle-progress__vewRNHAa",
          track: "audioAnnouncement__track__2F6pREwX",
          top: "audioAnnouncement__top__2qGeDCDJ",
          bottom: "audioAnnouncement__bottom__2V4f8rU_",
          circle: "audioAnnouncement__circle__3jPWLVDf",
          button: "audioAnnouncement__button__Y37kAKTd",
        },
      };
    function O() {
      /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ O =
        function () {
          return r;
        };
      var r = {},
        n = Object.prototype,
        s = n.hasOwnProperty,
        e = "function" == typeof Symbol ? Symbol : {},
        a = e.iterator || "@@iterator",
        t = e.asyncIterator || "@@asyncIterator",
        o = e.toStringTag || "@@toStringTag";
      function i(n, e, t) {
        return (
          Object.defineProperty(n, e, {
            value: t,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          }),
          n[e]
        );
      }
      try {
        i({}, "");
      } catch (n) {
        i = function (n, e, t) {
          return (n[e] = t);
        };
      }
      function u(n, e, t, o) {
        var i,
          r,
          u,
          c,
          a = e && e.prototype instanceof p ? e : p,
          _ = Object.create(a.prototype),
          s = new w(o || []);
        return (
          (_._invoke =
            ((i = n),
            (r = t),
            (u = s),
            (c = "suspendedStart"),
            function (n, e) {
              if ("executing" === c)
                throw new Error("Generator is already running");
              if ("completed" === c) {
                if ("throw" === n) throw e;
                return P();
              }
              for (u.method = n, u.arg = e; ; ) {
                var t = u.delegate;
                if (t) {
                  var o = A(t, u);
                  if (o) {
                    if (o === d) continue;
                    return o;
                  }
                }
                if ("next" === u.method) u.sent = u._sent = u.arg;
                else if ("throw" === u.method) {
                  if ("suspendedStart" === c) throw ((c = "completed"), u.arg);
                  u.dispatchException(u.arg);
                } else "return" === u.method && u.abrupt("return", u.arg);
                c = "executing";
                var a = l(i, r, u);
                if ("normal" === a.type) {
                  if (
                    ((c = u.done ? "completed" : "suspendedYield"), a.arg === d)
                  )
                    continue;
                  return { value: a.arg, done: u.done };
                }
                "throw" === a.type &&
                  ((c = "completed"), (u.method = "throw"), (u.arg = a.arg));
              }
            })),
          _
        );
      }
      function l(n, e, t) {
        try {
          return { type: "normal", arg: n.call(e, t) };
        } catch (n) {
          return { type: "throw", arg: n };
        }
      }
      r.wrap = u;
      var d = {};
      function p() {}
      function c() {}
      function _() {}
      var m = {};
      i(m, a, function () {
        return this;
      });
      var f = Object.getPrototypeOf,
        h = f && f(f(k([])));
      h && h !== n && s.call(h, a) && (m = h);
      var b = (_.prototype = p.prototype = Object.create(m));
      function g(n) {
        ["next", "throw", "return"].forEach(function (e) {
          i(n, e, function (n) {
            return this._invoke(e, n);
          });
        });
      }
      function y(c, _) {
        var e;
        this._invoke = function (t, o) {
          function n() {
            return new _(function (n, e) {
              !(function e(n, t, o, a) {
                var i = l(c[n], c, t);
                if ("throw" !== i.type) {
                  var r = i.arg,
                    u = r.value;
                  return u && "object" == L()(u) && s.call(u, "__await")
                    ? _.resolve(u.__await).then(
                        function (n) {
                          e("next", n, o, a);
                        },
                        function (n) {
                          e("throw", n, o, a);
                        }
                      )
                    : _.resolve(u).then(
                        function (n) {
                          (r.value = n), o(r);
                        },
                        function (n) {
                          return e("throw", n, o, a);
                        }
                      );
                }
                a(i.arg);
              })(t, o, n, e);
            });
          }
          return (e = e ? e.then(n, n) : n());
        };
      }
      function A(n, e) {
        var t = n.iterator[e.method];
        if (void 0 === t) {
          if (((e.delegate = null), "throw" === e.method)) {
            if (
              n.iterator.return &&
              ((e.method = "return"),
              (e.arg = void 0),
              A(n, e),
              "throw" === e.method)
            )
              return d;
            (e.method = "throw"),
              (e.arg = new TypeError(
                "The iterator does not provide a 'throw' method"
              ));
          }
          return d;
        }
        var o = l(t, n.iterator, e.arg);
        if ("throw" === o.type)
          return (e.method = "throw"), (e.arg = o.arg), (e.delegate = null), d;
        var a = o.arg;
        return a
          ? a.done
            ? ((e[n.resultName] = a.value),
              (e.next = n.nextLoc),
              "return" !== e.method && ((e.method = "next"), (e.arg = void 0)),
              (e.delegate = null),
              d)
            : a
          : ((e.method = "throw"),
            (e.arg = new TypeError("iterator result is not an object")),
            (e.delegate = null),
            d);
      }
      function x(n) {
        var e = { tryLoc: n[0] };
        1 in n && (e.catchLoc = n[1]),
          2 in n && ((e.finallyLoc = n[2]), (e.afterLoc = n[3])),
          this.tryEntries.push(e);
      }
      function v(n) {
        var e = n.completion || {};
        (e.type = "normal"), delete e.arg, (n.completion = e);
      }
      function w(n) {
        (this.tryEntries = [{ tryLoc: "root" }]),
          n.forEach(x, this),
          this.reset(!0);
      }
      function k(e) {
        if (e) {
          var n = e[a];
          if (n) return n.call(e);
          if ("function" == typeof e.next) return e;
          if (!isNaN(e.length)) {
            var t = -1,
              o = function n() {
                for (; ++t < e.length; )
                  if (s.call(e, t)) return (n.value = e[t]), (n.done = !1), n;
                return (n.value = void 0), (n.done = !0), n;
              };
            return (o.next = o);
          }
        }
        return { next: P };
      }
      function P() {
        return { value: void 0, done: !0 };
      }
      return (
        i(b, "constructor", (c.prototype = _)),
        i(_, "constructor", c),
        (c.displayName = i(_, o, "GeneratorFunction")),
        (r.isGeneratorFunction = function (n) {
          var e = "function" == typeof n && n.constructor;
          return (
            !!e &&
            (e === c || "GeneratorFunction" === (e.displayName || e.name))
          );
        }),
        (r.mark = function (n) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(n, _)
              : ((n.__proto__ = _), i(n, o, "GeneratorFunction")),
            (n.prototype = Object.create(b)),
            n
          );
        }),
        (r.awrap = function (n) {
          return { __await: n };
        }),
        g(y.prototype),
        i(y.prototype, t, function () {
          return this;
        }),
        (r.AsyncIterator = y),
        (r.async = function (n, e, t, o, a) {
          void 0 === a && (a = Promise);
          var i = new y(u(n, e, t, o), a);
          return r.isGeneratorFunction(e)
            ? i
            : i.next().then(function (n) {
                return n.done ? n.value : i.next();
              });
        }),
        g(b),
        i(b, o, "Generator"),
        i(b, a, function () {
          return this;
        }),
        i(b, "toString", function () {
          return "[object Generator]";
        }),
        (r.keys = function (t) {
          var o = [];
          for (var n in t) o.push(n);
          return (
            o.reverse(),
            function n() {
              for (; o.length; ) {
                var e = o.pop();
                if (e in t) return (n.value = e), (n.done = !1), n;
              }
              return (n.done = !0), n;
            }
          );
        }),
        (r.values = k),
        (w.prototype = {
          constructor: w,
          reset: function (n) {
            if (
              ((this.prev = 0),
              (this.next = 0),
              (this.sent = this._sent = void 0),
              (this.done = !1),
              (this.delegate = null),
              (this.method = "next"),
              (this.arg = void 0),
              this.tryEntries.forEach(v),
              !n)
            )
              for (var e in this)
                "t" === e.charAt(0) &&
                  s.call(this, e) &&
                  !isNaN(+e.slice(1)) &&
                  (this[e] = void 0);
          },
          stop: function () {
            this.done = !0;
            var n = this.tryEntries[0].completion;
            if ("throw" === n.type) throw n.arg;
            return this.rval;
          },
          dispatchException: function (t) {
            if (this.done) throw t;
            var o = this;
            function n(n, e) {
              return (
                (i.type = "throw"),
                (i.arg = t),
                (o.next = n),
                e && ((o.method = "next"), (o.arg = void 0)),
                !!e
              );
            }
            for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
              var a = this.tryEntries[e],
                i = a.completion;
              if ("root" === a.tryLoc) return n("end");
              if (a.tryLoc <= this.prev) {
                var r = s.call(a, "catchLoc"),
                  u = s.call(a, "finallyLoc");
                if (r && u) {
                  if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                  if (this.prev < a.finallyLoc) return n(a.finallyLoc);
                } else if (r) {
                  if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                } else {
                  if (!u)
                    throw new Error("try statement without catch or finally");
                  if (this.prev < a.finallyLoc) return n(a.finallyLoc);
                }
              }
            }
          },
          abrupt: function (n, e) {
            for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
              var o = this.tryEntries[t];
              if (
                o.tryLoc <= this.prev &&
                s.call(o, "finallyLoc") &&
                this.prev < o.finallyLoc
              ) {
                var a = o;
                break;
              }
            }
            a &&
              ("break" === n || "continue" === n) &&
              a.tryLoc <= e &&
              e <= a.finallyLoc &&
              (a = null);
            var i = a ? a.completion : {};
            return (
              (i.type = n),
              (i.arg = e),
              a
                ? ((this.method = "next"), (this.next = a.finallyLoc), d)
                : this.complete(i)
            );
          },
          complete: function (n, e) {
            if ("throw" === n.type) throw n.arg;
            return (
              "break" === n.type || "continue" === n.type
                ? (this.next = n.arg)
                : "return" === n.type
                ? ((this.rval = this.arg = n.arg),
                  (this.method = "return"),
                  (this.next = "end"))
                : "normal" === n.type && e && (this.next = e),
              d
            );
          },
          finish: function (n) {
            for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
              var t = this.tryEntries[e];
              if (t.finallyLoc === n)
                return this.complete(t.completion, t.afterLoc), v(t), d;
            }
          },
          catch: function (n) {
            for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
              var t = this.tryEntries[e];
              if (t.tryLoc === n) {
                var o = t.completion;
                if ("throw" === o.type) {
                  var a = o.arg;
                  v(t);
                }
                return a;
              }
            }
            throw new Error("illegal catch attempt");
          },
          delegateYield: function (n, e, t) {
            return (
              (this.delegate = { iterator: k(n), resultName: e, nextLoc: t }),
              "next" === this.method && (this.arg = void 0),
              d
            );
          },
        }),
        r
      );
    }
    function X(o) {
      var a = (function () {
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
        } catch (n) {
          return !1;
        }
      })();
      return function () {
        var n,
          e = h()(o);
        if (a) {
          var t = h()(this).constructor;
          n = Reflect.construct(e, arguments, t);
        } else n = e.apply(this, arguments);
        return m()(this, n);
      };
    }
    var D = function (n, e, t, o) {
        var a,
          i = arguments.length,
          r =
            i < 3
              ? e
              : null === o
              ? (o = Object.getOwnPropertyDescriptor(e, t))
              : o;
        if (
          "object" ===
            ("undefined" == typeof Reflect ? "undefined" : L()(Reflect)) &&
          "function" == typeof Reflect.decorate
        )
          r = Reflect.decorate(n, e, t, o);
        else
          for (var u = n.length - 1; 0 <= u; u--)
            (a = n[u]) &&
              (r = (i < 3 ? a(r) : 3 < i ? a(e, t, r) : a(e, t)) || r);
        return 3 < i && r && Object.defineProperty(e, t, r), r;
      },
      G = function (n, r, u, c) {
        return new (u = u || Promise)(function (t, e) {
          function o(n) {
            try {
              i(c.next(n));
            } catch (n) {
              e(n);
            }
          }
          function a(n) {
            try {
              i(c.throw(n));
            } catch (n) {
              e(n);
            }
          }
          function i(n) {
            var e;
            n.done
              ? t(n.value)
              : ((e = n.value) instanceof u
                  ? e
                  : new u(function (n) {
                      n(e);
                    })
                ).then(o, a);
          }
          i((c = c.apply(n, r || [])).next());
        });
      },
      N = (function (n) {
        d()(t, n);
        var e = X(t);
        function t() {
          var o;
          return (
            u()(this, t),
            ((o = e.apply(this, arguments)).state = {
              audioPath: "",
              title: "",
              start: !1,
              progress: 0,
              totalTime: 0,
              playTime: 0,
              playList: [],
              playCount: 0,
            }),
            (o.audioRef = l.a.createRef()),
            (o.start = !1),
            (o.playIndex = -1),
            (o.interval = null),
            (o.blobUrlList = []),
            (o.currentPlayCount = 0),
            (o.loadMusic = function (t) {
              return G(
                w()(o),
                void 0,
                void 0,
                O().mark(function n() {
                  var e;
                  return O().wrap(
                    function (n) {
                      for (;;)
                        switch ((n.prev = n.next)) {
                          case 0:
                            if (
                              (Q.a.info("当前播放音频", t),
                              !this.blobUrlList[this.playIndex])
                            ) {
                              n.next = 5;
                              break;
                            }
                            this.setState({
                              audioPath: this.blobUrlList[this.playIndex],
                              title:
                                this.state.playList[this.playIndex].filename,
                              start: !0,
                            }),
                              (n.next = 20);
                            break;
                          case 5:
                            return (
                              (n.prev = 5),
                              (this.start = !0),
                              (n.next = 9),
                              Object(P.a)(t, !0)
                            );
                          case 9:
                            (e = n.sent),
                              this.blobUrlList.push(e),
                              this.setState({
                                audioPath: e,
                                start: !0,
                                title:
                                  this.state.playList[this.playIndex].filename,
                              }),
                              this.changeTime(),
                              (n.next = 20);
                            break;
                          case 15:
                            (n.prev = 15),
                              (n.t0 = n.catch(5)),
                              console.log(n.t0),
                              Q.a.info("音频加载失败", t),
                              this.nextMusicPlay();
                          case 20:
                            (this.audioRef.current.currentTime = 0),
                              this.audioRef.current.play();
                          case 22:
                          case "end":
                            return n.stop();
                        }
                    },
                    n,
                    this,
                    [[5, 15]]
                  );
                })
              );
            }),
            (o.nextMusicPlay = function () {
              o.start
                ? o.playIndex + 1 === o.state.playList.length
                  ? ((o.playIndex = 0),
                    o.state.playCount &&
                      !isNaN(o.state.playCount) &&
                      0 < o.state.playCount &&
                      (o.currentPlayCount++,
                      o.setState({ playTime: 0 }),
                      Q.a.info(
                        "按此播放音频结束",
                        "应播放".concat(o.state.playCount),
                        "实际播放".concat(o.currentPlayCount)
                      ),
                      o.currentPlayCount === o.state.playCount &&
                        o.props.closePlayTask()))
                  : o.playIndex++
                : (o.playIndex = 0),
                o.loadMusic(o.state.playList[o.playIndex].url);
            }),
            (o.handleEnded = function () {
              o.nextMusicPlay();
            }),
            (o.changeTime = function () {
              o.interval ||
                (o.interval = setInterval(function () {
                  var n = o.state,
                    e = n.playTime,
                    t = n.totalTime;
                  t < e + 1
                    ? clearInterval(o.interval)
                    : o.setState({ playTime: e + 1, progress: (e + 1) / t });
                }, 1e3));
            }),
            (o.loadData = function () {
              var n = window._ACCEPT_DATA.getData("schoolAnnouncementTaskData");
              n.files && 0 < n.files.length
                ? o.setState(
                    {
                      playList: x()(n.files),
                      totalTime:
                        n.playCount && !isNaN(n.playCount) && 0 < n.playCount
                          ? n.duration / n.playCount
                          : n.duration,
                      playCount: n.playCount || null,
                    },
                    function () {
                      o.nextMusicPlay();
                    }
                  )
                : (o.props.actions.sendMessage({
                    type: "error",
                    text: "服务参数异常，播放结束",
                  }),
                  setTimeout(function () {
                    o.props.closePlayTask();
                  }, 1e3));
            }),
            o
          );
        }
        return (
          _()(t, [
            {
              key: "componentDidMount",
              value: function () {
                this.loadData();
              },
            },
            {
              key: "render",
              value: function () {
                var n,
                  e,
                  t,
                  o,
                  a = this.state,
                  i = a.audioPath,
                  r = a.title,
                  u = a.playTime,
                  c = a.progress,
                  _ = a.start,
                  s = a.totalTime;
                return (
                  console.log(i),
                  l.a.createElement(
                    "div",
                    { className: "audioAnnouncement__box__2OQLcdss" },
                    l.a.createElement("audio", {
                      hidden: !0,
                      ref: this.audioRef,
                      autoPlay: !0,
                      src: i,
                      onEnded: this.handleEnded,
                    }),
                    l.a.createElement(
                      "div",
                      {
                        className: g()(
                          _ ? "player-box start" : "player-box",
                          C
                        ),
                      },
                      l.a.createElement("div", {
                        className: "audioAnnouncement__back-progress__3fRAjNfT",
                        style: { width: 100 * c + "%" },
                      }),
                      l.a.createElement(
                        "div",
                        { className: "audioAnnouncement__top-block__b7Pb8aQX" },
                        l.a.createElement(
                          "div",
                          {
                            className: g()(
                              _ ? "audio-wave start" : "audio-wave",
                              C
                            ),
                          },
                          l.a.createElement("span", {
                            className: g()(_ ? "start" : "", C),
                          }),
                          l.a.createElement("span", {
                            className: g()(_ ? "start" : "", C),
                          }),
                          l.a.createElement("span", {
                            className: g()(_ ? "start" : "", C),
                          }),
                          l.a.createElement("span", {
                            className: g()(_ ? "start" : "", C),
                          }),
                          l.a.createElement("span", {
                            className: g()(_ ? "start" : "", C),
                          })
                        ),
                        l.a.createElement(
                          "div",
                          { className: g()(_ ? "title start" : "title", C) },
                          l.a.createElement(
                            "p",
                            null,
                            ((o = r.split(".")).pop(), o.join("."))
                          )
                        ),
                        l.a.createElement(
                          "div",
                          {
                            className: g()(
                              _ ? "circle-progress start" : "circle-progress",
                              C
                            ),
                          },
                          l.a.createElement(
                            "p",
                            null,
                            ""
                              .concat(
                                (t = ((n = s - u) - (e = n % 60)) / 60) < 10
                                  ? "0" + t
                                  : t,
                                ":"
                              )
                              .concat(e < 10 ? "0" + e : e)
                          ),
                          l.a.createElement("div", {
                            className: "audioAnnouncement__track__2F6pREwX",
                          }),
                          l.a.createElement(
                            "div",
                            { className: "audioAnnouncement__top__2qGeDCDJ" },
                            l.a.createElement("div", {
                              className: "audioAnnouncement__circle__3jPWLVDf",
                              style: {
                                transform: "rotate(".concat(
                                  0.5 < c ? 360 * (c - 0.5) - 135 : -135,
                                  "deg)"
                                ),
                              },
                            })
                          ),
                          l.a.createElement(
                            "div",
                            {
                              className: "audioAnnouncement__bottom__2V4f8rU_",
                            },
                            l.a.createElement("div", {
                              className: "audioAnnouncement__circle__3jPWLVDf",
                              style: {
                                transform: "rotate(".concat(
                                  0.5 < c ? -135 : 45 + 360 * c,
                                  "deg)"
                                ),
                              },
                            })
                          )
                        )
                      )
                    )
                  )
                );
              },
            },
          ]),
          t
        );
      })(o.PureComponent),
      T = (N = D([Object(E.a)({}, {})], N)),
      R = t(113),
      I = (t(826), t(115)),
      j = t.n(I);
    function S(o) {
      var a = (function () {
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
        } catch (n) {
          return !1;
        }
      })();
      return function () {
        var n,
          e = h()(o);
        if (a) {
          var t = h()(this).constructor;
          n = Reflect.construct(e, arguments, t);
        } else n = e.apply(this, arguments);
        return m()(this, n);
      };
    }
    var F = function (n, e, t, o) {
        var a,
          i = arguments.length,
          r =
            i < 3
              ? e
              : null === o
              ? (o = Object.getOwnPropertyDescriptor(e, t))
              : o;
        if (
          "object" ===
            ("undefined" == typeof Reflect ? "undefined" : L()(Reflect)) &&
          "function" == typeof Reflect.decorate
        )
          r = Reflect.decorate(n, e, t, o);
        else
          for (var u = n.length - 1; 0 <= u; u--)
            (a = n[u]) &&
              (r = (i < 3 ? a(r) : 3 < i ? a(e, t, r) : a(e, t)) || r);
        return 3 < i && r && Object.defineProperty(e, t, r), r;
      },
      q = (function (n) {
        d()(t, n);
        var e = S(t);
        function t() {
          var i;
          return (
            u()(this, t),
            ((i = e.apply(this, arguments)).state = {
              imagesList: [],
              playerIndex: 1,
              interval: 5e3,
              needPlayCount: 0,
            }),
            (i.currentPlayCount = 0),
            (i.handleShowIndex = function (n) {
              var e = i.state,
                t = e.playerIndex,
                o = e.imagesList,
                a = e.needPlayCount;
              0 === n &&
                t === o.length &&
                0 !== o.length &&
                i.state.needPlayCount &&
                !isNaN(i.state.needPlayCount) &&
                0 < i.state.needPlayCount &&
                (i.currentPlayCount++,
                Q.a.info(
                  "按此播放音频结束",
                  "应播放".concat(a),
                  "实际播放".concat(i.currentPlayCount)
                ),
                i.currentPlayCount === a &&
                  setTimeout(
                    function () {
                      i.props.closePlayTask();
                    },
                    1 === o.length ? i.state.interval : 0
                  )),
                i.setState({ playerIndex: n + 1 });
            }),
            (i.loadType = function () {
              var n = window._ACCEPT_DATA.getData("schoolAnnouncementTaskData");
              n.files && n.files.length
                ? i.setState({
                    imagesList: x()(
                      n.files.map(function (n) {
                        return n.url;
                      })
                    ),
                    interval: 1e3 * n.policy.interval,
                    needPlayCount: n.playCount || null,
                  })
                : (i.props.actions.sendMessage({
                    type: "error",
                    text: "服务参数异常，播放结束",
                  }),
                  setTimeout(function () {
                    i.props.closePlayTask();
                  }, 1e3));
            }),
            i
          );
        }
        return (
          _()(t, [
            {
              key: "componentDidMount",
              value: function () {
                this.loadType();
              },
            },
            {
              key: "render",
              value: function () {
                var n = this.state,
                  e = n.imagesList,
                  t = n.playerIndex,
                  o = n.interval;
                return l.a.createElement(
                  "div",
                  { className: "pictureAnnouncement__box__EoPufcq2" },
                  l.a.createElement(
                    "div",
                    {
                      className:
                        "pictureAnnouncement__image-list-box__wyOG5Lyo",
                    },
                    0 < e.length &&
                      l.a.createElement(j.a, {
                        imagesList: e,
                        feedbackIndex: this.handleShowIndex,
                        timeInterval: o,
                        transitionsStyle: [
                          "fadeIn",
                          "cutInFromBottom",
                          "cutInFromRight",
                        ],
                      })
                  ),
                  l.a.createElement(
                    "div",
                    { className: "pictureAnnouncement__index-show__2ALK3v2Q" },
                    l.a.createElement("p", null, t, "/", e.length)
                  )
                );
              },
            },
          ]),
          t
        );
      })(o.PureComponent),
      B = (q = F([Object(E.a)({}, {})], q)),
      H = t(67),
      U = t(20),
      Z = (t(828), t(81)),
      M = t(25),
      z = {
        "./schoolAnnouncement.less": {
          button: "schoolAnnouncement__button__2anUB35T",
          icon: "schoolAnnouncement__icon__1ftFGFHk",
          "bottom-fence": "schoolAnnouncement__bottom-fence__3z8lrZKP",
          color: "schoolAnnouncement__color__38rMsceL",
        },
      };
    function V(o) {
      var a = (function () {
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
        } catch (n) {
          return !1;
        }
      })();
      return function () {
        var n,
          e = h()(o);
        if (a) {
          var t = h()(this).constructor;
          n = Reflect.construct(e, arguments, t);
        } else n = e.apply(this, arguments);
        return m()(this, n);
      };
    }
    var Y,
      K,
      W = 1,
      J = 0;
    ((K = Y = Y || {}).videoPropaganda = "videoPropaganda"),
      (K.picturePropaganda = "picturePropaganda"),
      (K.audioPropaganda = "audioPropaganda");
    var $ = window._ACCEPT_DATA,
      nn = (function (n) {
        d()(o, n);
        var t = V(o);
        function o() {
          var e;
          return (
            u()(this, o),
            ((e = t.apply(this, arguments)).state = {
              type: "",
              quitCheckShow: !1,
              needCheck: !1,
            }),
            (e.closePlayTask = function () {
              var n =
                !(0 < arguments.length && void 0 !== arguments[0]) ||
                arguments[0];
              y.a.send("stopSchoolAnnouncement", { exitCode: n ? W : J });
            }),
            (e.loadType = function () {
              var n = $.getData("schoolAnnouncementTaskData");
              e.setState({ type: n.type });
            }),
            (e.handleShowQuitCheck = function () {
              Object(M.a)("Intergrated_Assistant_SchoolAnnounce_Button_Quit", {
                isNeedAuth: e.state.needCheck,
              }),
                e.state.needCheck
                  ? e.setState({ quitCheckShow: !0 })
                  : e.closePlayTask();
            }),
            (e.handleHideQuitCheck = function () {
              e.setState({ quitCheckShow: !1 });
            }),
            (e.loadCheckState = function (n) {
              e.setState({ needCheck: !!n });
            }),
            (e.handleQuitTaskWithUserAuth = function (n) {
              y.a.send("quitLockTaskIfExist", n), e.closePlayTask();
            }),
            e
          );
        }
        return (
          _()(o, [
            {
              key: "componentDidMount",
              value: function () {
                this.loadType(),
                  $.getAndRegister(
                    "schoolAnnouncementQuitNeedChecking",
                    this.loadCheckState
                  );
              },
            },
            {
              key: "componentWillMount",
              value: function () {
                $.removeOne(
                  "schoolAnnouncementQuitNeedChecking",
                  this.loadCheckState
                );
              },
            },
            {
              key: "render",
              value: function () {
                var n = this.state,
                  e = n.type,
                  t = n.quitCheckShow;
                return l.a.createElement(
                  l.a.Fragment,
                  null,
                  l.a.createElement(H.a, null),
                  e === Y.videoPropaganda &&
                    l.a.createElement(R.a, {
                      closePlayTask: this.closePlayTask,
                    }),
                  e === Y.picturePropaganda &&
                    l.a.createElement(B, { closePlayTask: this.closePlayTask }),
                  e === Y.audioPropaganda &&
                    l.a.createElement(T, { closePlayTask: this.closePlayTask }),
                  l.a.createElement(
                    "div",
                    {
                      className: g()(
                        "bottom-fence ".concat(
                          e !== Y.audioPropaganda ? "color" : ""
                        ),
                        z
                      ),
                    },
                    l.a.createElement(
                      "div",
                      { className: "schoolAnnouncement__button__2anUB35T" },
                      l.a.createElement(U.a, {
                        activeStyle: "scale",
                        onClick: this.handleShowQuitCheck,
                      }),
                      l.a.createElement("div", {
                        className: "schoolAnnouncement__icon__1ftFGFHk",
                      }),
                      l.a.createElement("p", null, "退出")
                    )
                  ),
                  l.a.createElement(Z.a, {
                    show: t,
                    onBack: this.handleHideQuitCheck,
                    onCloseAnnouncement: this.handleQuitTaskWithUserAuth,
                  })
                );
              },
            },
          ]),
          o
        );
      })(o.PureComponent),
      en = t(24),
      tn = t(29),
      on = t(22);
    t(30);
    var an,
      rn = Object(tn.a)("screenLock");
    (an = nn),
      i.a.render(
        l.a.createElement(
          en.a,
          { store: rn },
          l.a.createElement(on.a, null, l.a.createElement(an, null))
        ),
        document.getElementById("root")
      );
  },
});
