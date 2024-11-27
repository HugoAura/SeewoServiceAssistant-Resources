!(function (s) {
  function n(n) {
    for (
      var e, t, o = n[0], i = n[1], r = n[2], a = 0, u = [];
      a < o.length;
      a++
    )
      (t = o[a]),
        Object.prototype.hasOwnProperty.call(c, t) && c[t] && u.push(c[t][0]),
        (c[t] = 0);
    for (e in i) Object.prototype.hasOwnProperty.call(i, e) && (s[e] = i[e]);
    for (_ && _(n); u.length; ) u.shift()();
    return d.push.apply(d, r || []), l();
  }
  function l() {
    for (var n, e = 0; e < d.length; e++) {
      for (var t = d[e], o = !0, i = 1; i < t.length; i++) {
        var r = t[i];
        0 !== c[r] && (o = !1);
      }
      o && (d.splice(e--, 1), (n = a((a.s = t[0]))));
    }
    return n;
  }
  var t = {},
    c = { 39: 0 },
    d = [];
  function a(n) {
    if (t[n]) return t[n].exports;
    var e = (t[n] = { i: n, l: !1, exports: {} });
    return s[n].call(e.exports, e, e.exports, a), (e.l = !0), e.exports;
  }
  (a.m = s),
    (a.c = t),
    (a.d = function (n, e, t) {
      a.o(n, e) || Object.defineProperty(n, e, { enumerable: !0, get: t });
    }),
    (a.r = function (n) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(n, "__esModule", { value: !0 });
    }),
    (a.t = function (e, n) {
      if ((1 & n && (e = a(e)), 8 & n)) return e;
      if (4 & n && "object" == typeof e && e && e.__esModule) return e;
      var t = Object.create(null);
      if (
        (a.r(t),
        Object.defineProperty(t, "default", { enumerable: !0, value: e }),
        2 & n && "string" != typeof e)
      )
        for (var o in e)
          a.d(
            t,
            o,
            function (n) {
              return e[n];
            }.bind(null, o)
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
      return a.d(e, "a", e), e;
    }),
    (a.o = function (n, e) {
      return Object.prototype.hasOwnProperty.call(n, e);
    }),
    (a.p = "");
  var e = (window.webpackJsonp = window.webpackJsonp || []),
    o = e.push.bind(e);
  (e.push = n), (e = e.slice());
  for (var i = 0; i < e.length; i++) n(e[i]);
  var _ = o;
  d.push([901, 0]), l();
})({
  860: function (n, e, t) {
    var o = t(861);
    "string" == typeof o && (o = [[n.i, o, ""]]);
    var i = { hmr: !0, transform: void 0, insertInto: void 0 };
    t(12)(o, i);
    o.locals && (n.exports = o.locals);
  },
  861: function (n, e, t) {
    (e = n.exports = t(11)(!1)).push([
      n.i,
      ".index__input-box__1QqO9SVO {\n  width: 704px;\n  height: 72px;\n  margin: 0 auto;\n  border-radius: 40px;\n  overflow: hidden;\n  -webkit-transition: all 0.3s;\n  -o-transition: all 0.3s;\n  transition: all 0.3s;\n  position: relative;\n  background-color: rgba(255, 255, 255, 0.3);\n}\n.index__input-box__1QqO9SVO.index__closed__1CnNFQsm {\n  opacity: 0;\n  visibility: hidden;\n}\n.index__input-box__1QqO9SVO.index__show__1_4HF3DG {\n  visibility: show;\n  opacity: 1;\n  -webkit-box-shadow: 0 12px 16px -4px rgba(0, 0, 0, 0.15);\n          box-shadow: 0 12px 16px -4px rgba(0, 0, 0, 0.15);\n}\n.index__input-box__1QqO9SVO.index__show__1_4HF3DG .index__input__2jSK269m input {\n  background: #ebf0f5;\n}\n.index__input-box__1QqO9SVO.index__show__1_4HF3DG i {\n  color: #2c3144 !important;\n}\n.index__input-box__1QqO9SVO .index__input__2jSK269m {\n  width: 100%;\n  height: 100%;\n}\n.index__input-box__1QqO9SVO .index__input__2jSK269m input {\n  width: 100%;\n  height: 100%;\n  border: none;\n  outline: none;\n  padding: 0 80px 0 32px;\n  -webkit-transition: all 0.3s linear;\n  -o-transition: all 0.3s linear;\n  transition: all 0.3s linear;\n  font-size: 20px;\n  color: #2c3144;\n}\n.index__input-box__1QqO9SVO .index__search-logo__1KDHIgxz {\n  position: absolute;\n  right: 0px;\n  top: 0px;\n  width: 80px;\n  height: 72px;\n  z-index: 30;\n  cursor: pointer;\n  padding: 20px 24px;\n  text-align: center;\n}\n.index__input-box__1QqO9SVO .index__search-logo__1KDHIgxz i {\n  font-size: 32px;\n  color: white;\n  -webkit-transition: all 0.3s;\n  -o-transition: all 0.3s;\n  transition: all 0.3s;\n}\n",
      "",
    ]),
      (e.locals = {
        "input-box": "index__input-box__1QqO9SVO",
        closed: "index__closed__1CnNFQsm",
        show: "index__show__1_4HF3DG",
        input: "index__input__2jSK269m",
        "search-logo": "index__search-logo__1KDHIgxz",
      });
  },
  901: function (n, e, t) {
    "use strict";
    t.r(e);
    var o = t(0),
      a = t.n(o),
      i = t(18),
      r = t.n(i),
      u = t(3),
      s = t.n(u),
      l = t(4),
      c = t.n(l),
      d = t(5),
      _ = t.n(d),
      p = t(6),
      h = t.n(p),
      f = t(2),
      w = t.n(f),
      x = t(8),
      b = t.n(x),
      m = (t(860), t(7)),
      v = {
        "./index.less": {
          "input-box": "index__input-box__1QqO9SVO",
          closed: "index__closed__1CnNFQsm",
          show: "index__show__1_4HF3DG",
          input: "index__input__2jSK269m",
          "search-logo": "index__search-logo__1KDHIgxz",
        },
      };
    function g(o) {
      var i = (function () {
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
          e = w()(o);
        if (i) {
          var t = w()(this).constructor;
          n = Reflect.construct(e, arguments, t);
        } else n = e.apply(this, arguments);
        return h()(this, n);
      };
    }
    var y = (function (n) {
        _()(r, n);
        var i = g(r);
        function r() {
          var e;
          s()(this, r);
          for (var n = arguments.length, t = new Array(n), o = 0; o < n; o++)
            t[o] = arguments[o];
          return (
            ((e = i.call.apply(i, [this].concat(t))).state = {
              inputValue: "",
              hide: !1,
            }),
            (e.searchLock = !1),
            (e.show = !1),
            (e.windowHide = function () {
              var n =
                0 < arguments.length && void 0 !== arguments[0]
                  ? arguments[0]
                  : e.state.inputValue;
              (e.show = !1),
                e.setState({ inputValue: n, hide: !0 }),
                m.a.send(
                  "searchWindowHide",
                  { inputValue: n },
                  window.windowName.split("seewoDesktopSearch_").pop()
                ),
                setTimeout(function () {
                  e.show ||
                    (m.a.send("handleSeewoDesktopSearchMinimize", {
                      windowName: window.windowName,
                    }),
                    m.a.send("windowControl", {
                      typeName: "blur",
                      windowName: window.windowName,
                    }));
                }, 300);
            }),
            (e.showWindow = function () {
              (e.show = !0),
                m.a.send("windowControl", {
                  typeName: "focus",
                  windowName: window.windowName,
                }),
                e.setState({ hide: !1 }),
                setTimeout(function () {
                  e.refs.input.focus();
                }, 300);
            }),
            (e.handleSearch = function (n) {
              n && n.preventDefault(),
                e.searchLock ||
                  (e.state.inputValue
                    ? ((e.searchLock = !0),
                      m.a.send("searchByEngine", e.state.inputValue),
                      (e.searchLock = !1),
                      e.windowHide(""))
                    : e.refs.input.focus());
            }),
            (e.handleChange = function (n) {
              e.setState({ inputValue: n.target.value });
            }),
            (e.handleFocus = function () {
              document.body.addEventListener("keyup", e.onKeyUp);
            }),
            (e.handleBlur = function () {
              document.body.removeEventListener("keyup", e.onKeyUp),
                e.windowHide(e.state.inputValue);
            }),
            (e.onKeyUp = function (n) {
              13 === n.keyCode && e.handleSearch();
            }),
            (e.listenEvent = function () {
              m.a.on("searchWindowHide", function () {
                e.windowHide();
              }),
                m.a.on("searchWindowShow", function () {
                  e.showWindow();
                }),
                m.a.on("searchWindowGoSearch", function () {
                  e.handleSearch();
                });
            }),
            e
          );
        }
        return (
          c()(r, [
            {
              key: "componentDidMount",
              value: function () {
                this.listenEvent();
              },
            },
            {
              key: "render",
              value: function () {
                var n = this.state,
                  e = n.inputValue,
                  t = n.hide;
                return a.a.createElement(
                  "div",
                  {
                    className: b()(
                      t ? "input-box closed" : "input-box show",
                      v
                    ),
                  },
                  a.a.createElement(
                    "div",
                    { className: "index__input__2jSK269m" },
                    a.a.createElement("input", {
                      type: "text",
                      value: e,
                      ref: "input",
                      onChange: this.handleChange,
                      onFocus: this.handleFocus,
                      onBlur: this.handleBlur,
                    })
                  ),
                  a.a.createElement(
                    "div",
                    {
                      className: "index__search-logo__1KDHIgxz",
                      onMouseDown: this.handleSearch,
                    },
                    a.a.createElement("i", { className: "iconfont" }, "")
                  )
                );
              },
            },
          ]),
          r
        );
      })(o.PureComponent),
      O = { position: "relative", width: "100%", height: "100%" };
    var S = t(24),
      k = t(29),
      V = t(21);
    t(30);
    var E,
      j = Object(k.a)("seewoDesktop");
    (E = function () {
      return a.a.createElement(
        "div",
        { style: O },
        a.a.createElement("div", null, a.a.createElement(y, null))
      );
    }),
      r.a.render(
        a.a.createElement(
          S.a,
          { store: j },
          a.a.createElement(V.a, null, a.a.createElement(E, null))
        ),
        document.getElementById("root")
      );
  },
});
