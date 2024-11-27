!(function (u) {
  function t(t) {
    for (
      var e, r, n = t[0], o = t[1], i = t[2], a = 0, c = [];
      a < n.length;
      a++
    )
      (r = n[a]),
        Object.prototype.hasOwnProperty.call(s, r) && s[r] && c.push(s[r][0]),
        (s[r] = 0);
    for (e in o) Object.prototype.hasOwnProperty.call(o, e) && (u[e] = o[e]);
    for (h && h(t); c.length; ) c.shift()();
    return f.push.apply(f, i || []), l();
  }
  function l() {
    for (var t, e = 0; e < f.length; e++) {
      for (var r = f[e], n = !0, o = 1; o < r.length; o++) {
        var i = r[o];
        0 !== s[i] && (n = !1);
      }
      n && (f.splice(e--, 1), (t = a((a.s = r[0]))));
    }
    return t;
  }
  var r = {},
    s = { 22: 0 },
    f = [];
  function a(t) {
    if (r[t]) return r[t].exports;
    var e = (r[t] = { i: t, l: !1, exports: {} });
    return u[t].call(e.exports, e, e.exports, a), (e.l = !0), e.exports;
  }
  (a.m = u),
    (a.c = r),
    (a.d = function (t, e, r) {
      a.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r });
    }),
    (a.r = function (t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (a.t = function (e, t) {
      if ((1 & t && (e = a(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (a.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var n in e)
          a.d(
            r,
            n,
            function (t) {
              return e[t];
            }.bind(null, n)
          );
      return r;
    }),
    (a.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return a.d(e, "a", e), e;
    }),
    (a.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (a.p = "");
  var e = (window.webpackJsonp = window.webpackJsonp || []),
    n = e.push.bind(e);
  (e.push = t), (e = e.slice());
  for (var o = 0; o < e.length; o++) t(e[o]);
  var h = n;
  f.push([914, 0]), l();
})({
  782: function (t, e, r) {
    var n = r(783);
    "string" == typeof n && (n = [[t.i, n, ""]]);
    var o = { hmr: !0, transform: void 0, insertInto: void 0 };
    r(12)(n, o);
    n.locals && (t.exports = n.locals);
  },
  783: function (t, e, r) {
    (t.exports = r(11)(!1)).push([t.i, "", ""]);
  },
  914: function (t, e, r) {
    "use strict";
    r.r(e);
    var n = r(0),
      a = r.n(n),
      o = r(18),
      i = r.n(o),
      c = r(28),
      j = r.n(c),
      u = r(34),
      l = r.n(u),
      s = r(3),
      f = r.n(s),
      h = r(4),
      p = r.n(h),
      d = r(5),
      y = r.n(d),
      v = r(6),
      m = r.n(v),
      g = r(2),
      w = r.n(g),
      b = r(113),
      x = r(7);
    r(782);
    function P() {
      /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ P =
        function () {
          return a;
        };
      var a = {},
        t = Object.prototype,
        s = t.hasOwnProperty,
        e = "function" == typeof Symbol ? Symbol : {},
        o = e.iterator || "@@iterator",
        r = e.asyncIterator || "@@asyncIterator",
        n = e.toStringTag || "@@toStringTag";
      function i(t, e, r) {
        return (
          Object.defineProperty(t, e, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          }),
          t[e]
        );
      }
      try {
        i({}, "");
      } catch (t) {
        i = function (t, e, r) {
          return (t[e] = r);
        };
      }
      function c(t, e, r, n) {
        var i,
          a,
          c,
          u,
          o = e && e.prototype instanceof p ? e : p,
          l = Object.create(o.prototype),
          s = new E(n || []);
        return (
          (l._invoke =
            ((i = t),
            (a = r),
            (c = s),
            (u = "suspendedStart"),
            function (t, e) {
              if ("executing" === u)
                throw new Error("Generator is already running");
              if ("completed" === u) {
                if ("throw" === t) throw e;
                return _();
              }
              for (c.method = t, c.arg = e; ; ) {
                var r = c.delegate;
                if (r) {
                  var n = b(r, c);
                  if (n) {
                    if (n === h) continue;
                    return n;
                  }
                }
                if ("next" === c.method) c.sent = c._sent = c.arg;
                else if ("throw" === c.method) {
                  if ("suspendedStart" === u) throw ((u = "completed"), c.arg);
                  c.dispatchException(c.arg);
                } else "return" === c.method && c.abrupt("return", c.arg);
                u = "executing";
                var o = f(i, a, c);
                if ("normal" === o.type) {
                  if (
                    ((u = c.done ? "completed" : "suspendedYield"), o.arg === h)
                  )
                    continue;
                  return { value: o.arg, done: c.done };
                }
                "throw" === o.type &&
                  ((u = "completed"), (c.method = "throw"), (c.arg = o.arg));
              }
            })),
          l
        );
      }
      function f(t, e, r) {
        try {
          return { type: "normal", arg: t.call(e, r) };
        } catch (t) {
          return { type: "throw", arg: t };
        }
      }
      a.wrap = c;
      var h = {};
      function p() {}
      function u() {}
      function l() {}
      var d = {};
      i(d, o, function () {
        return this;
      });
      var y = Object.getPrototypeOf,
        v = y && y(y(O([])));
      v && v !== t && s.call(v, o) && (d = v);
      var m = (l.prototype = p.prototype = Object.create(d));
      function g(t) {
        ["next", "throw", "return"].forEach(function (e) {
          i(t, e, function (t) {
            return this._invoke(e, t);
          });
        });
      }
      function w(u, l) {
        var e;
        this._invoke = function (r, n) {
          function t() {
            return new l(function (t, e) {
              !(function e(t, r, n, o) {
                var i = f(u[t], u, r);
                if ("throw" !== i.type) {
                  var a = i.arg,
                    c = a.value;
                  return c && "object" == j()(c) && s.call(c, "__await")
                    ? l.resolve(c.__await).then(
                        function (t) {
                          e("next", t, n, o);
                        },
                        function (t) {
                          e("throw", t, n, o);
                        }
                      )
                    : l.resolve(c).then(
                        function (t) {
                          (a.value = t), n(a);
                        },
                        function (t) {
                          return e("throw", t, n, o);
                        }
                      );
                }
                o(i.arg);
              })(r, n, t, e);
            });
          }
          return (e = e ? e.then(t, t) : t());
        };
      }
      function b(t, e) {
        var r = t.iterator[e.method];
        if (void 0 === r) {
          if (((e.delegate = null), "throw" === e.method)) {
            if (
              t.iterator.return &&
              ((e.method = "return"),
              (e.arg = void 0),
              b(t, e),
              "throw" === e.method)
            )
              return h;
            (e.method = "throw"),
              (e.arg = new TypeError(
                "The iterator does not provide a 'throw' method"
              ));
          }
          return h;
        }
        var n = f(r, t.iterator, e.arg);
        if ("throw" === n.type)
          return (e.method = "throw"), (e.arg = n.arg), (e.delegate = null), h;
        var o = n.arg;
        return o
          ? o.done
            ? ((e[t.resultName] = o.value),
              (e.next = t.nextLoc),
              "return" !== e.method && ((e.method = "next"), (e.arg = void 0)),
              (e.delegate = null),
              h)
            : o
          : ((e.method = "throw"),
            (e.arg = new TypeError("iterator result is not an object")),
            (e.delegate = null),
            h);
      }
      function x(t) {
        var e = { tryLoc: t[0] };
        1 in t && (e.catchLoc = t[1]),
          2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
          this.tryEntries.push(e);
      }
      function L(t) {
        var e = t.completion || {};
        (e.type = "normal"), delete e.arg, (t.completion = e);
      }
      function E(t) {
        (this.tryEntries = [{ tryLoc: "root" }]),
          t.forEach(x, this),
          this.reset(!0);
      }
      function O(e) {
        if (e) {
          var t = e[o];
          if (t) return t.call(e);
          if ("function" == typeof e.next) return e;
          if (!isNaN(e.length)) {
            var r = -1,
              n = function t() {
                for (; ++r < e.length; )
                  if (s.call(e, r)) return (t.value = e[r]), (t.done = !1), t;
                return (t.value = void 0), (t.done = !0), t;
              };
            return (n.next = n);
          }
        }
        return { next: _ };
      }
      function _() {
        return { value: void 0, done: !0 };
      }
      return (
        i(m, "constructor", (u.prototype = l)),
        i(l, "constructor", u),
        (u.displayName = i(l, n, "GeneratorFunction")),
        (a.isGeneratorFunction = function (t) {
          var e = "function" == typeof t && t.constructor;
          return (
            !!e &&
            (e === u || "GeneratorFunction" === (e.displayName || e.name))
          );
        }),
        (a.mark = function (t) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(t, l)
              : ((t.__proto__ = l), i(t, n, "GeneratorFunction")),
            (t.prototype = Object.create(m)),
            t
          );
        }),
        (a.awrap = function (t) {
          return { __await: t };
        }),
        g(w.prototype),
        i(w.prototype, r, function () {
          return this;
        }),
        (a.AsyncIterator = w),
        (a.async = function (t, e, r, n, o) {
          void 0 === o && (o = Promise);
          var i = new w(c(t, e, r, n), o);
          return a.isGeneratorFunction(e)
            ? i
            : i.next().then(function (t) {
                return t.done ? t.value : i.next();
              });
        }),
        g(m),
        i(m, n, "Generator"),
        i(m, o, function () {
          return this;
        }),
        i(m, "toString", function () {
          return "[object Generator]";
        }),
        (a.keys = function (r) {
          var n = [];
          for (var t in r) n.push(t);
          return (
            n.reverse(),
            function t() {
              for (; n.length; ) {
                var e = n.pop();
                if (e in r) return (t.value = e), (t.done = !1), t;
              }
              return (t.done = !0), t;
            }
          );
        }),
        (a.values = O),
        (E.prototype = {
          constructor: E,
          reset: function (t) {
            if (
              ((this.prev = 0),
              (this.next = 0),
              (this.sent = this._sent = void 0),
              (this.done = !1),
              (this.delegate = null),
              (this.method = "next"),
              (this.arg = void 0),
              this.tryEntries.forEach(L),
              !t)
            )
              for (var e in this)
                "t" === e.charAt(0) &&
                  s.call(this, e) &&
                  !isNaN(+e.slice(1)) &&
                  (this[e] = void 0);
          },
          stop: function () {
            this.done = !0;
            var t = this.tryEntries[0].completion;
            if ("throw" === t.type) throw t.arg;
            return this.rval;
          },
          dispatchException: function (r) {
            if (this.done) throw r;
            var n = this;
            function t(t, e) {
              return (
                (i.type = "throw"),
                (i.arg = r),
                (n.next = t),
                e && ((n.method = "next"), (n.arg = void 0)),
                !!e
              );
            }
            for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
              var o = this.tryEntries[e],
                i = o.completion;
              if ("root" === o.tryLoc) return t("end");
              if (o.tryLoc <= this.prev) {
                var a = s.call(o, "catchLoc"),
                  c = s.call(o, "finallyLoc");
                if (a && c) {
                  if (this.prev < o.catchLoc) return t(o.catchLoc, !0);
                  if (this.prev < o.finallyLoc) return t(o.finallyLoc);
                } else if (a) {
                  if (this.prev < o.catchLoc) return t(o.catchLoc, !0);
                } else {
                  if (!c)
                    throw new Error("try statement without catch or finally");
                  if (this.prev < o.finallyLoc) return t(o.finallyLoc);
                }
              }
            }
          },
          abrupt: function (t, e) {
            for (var r = this.tryEntries.length - 1; 0 <= r; --r) {
              var n = this.tryEntries[r];
              if (
                n.tryLoc <= this.prev &&
                s.call(n, "finallyLoc") &&
                this.prev < n.finallyLoc
              ) {
                var o = n;
                break;
              }
            }
            o &&
              ("break" === t || "continue" === t) &&
              o.tryLoc <= e &&
              e <= o.finallyLoc &&
              (o = null);
            var i = o ? o.completion : {};
            return (
              (i.type = t),
              (i.arg = e),
              o
                ? ((this.method = "next"), (this.next = o.finallyLoc), h)
                : this.complete(i)
            );
          },
          complete: function (t, e) {
            if ("throw" === t.type) throw t.arg;
            return (
              "break" === t.type || "continue" === t.type
                ? (this.next = t.arg)
                : "return" === t.type
                ? ((this.rval = this.arg = t.arg),
                  (this.method = "return"),
                  (this.next = "end"))
                : "normal" === t.type && e && (this.next = e),
              h
            );
          },
          finish: function (t) {
            for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
              var r = this.tryEntries[e];
              if (r.finallyLoc === t)
                return this.complete(r.completion, r.afterLoc), L(r), h;
            }
          },
          catch: function (t) {
            for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
              var r = this.tryEntries[e];
              if (r.tryLoc === t) {
                var n = r.completion;
                if ("throw" === n.type) {
                  var o = n.arg;
                  L(r);
                }
                return o;
              }
            }
            throw new Error("illegal catch attempt");
          },
          delegateYield: function (t, e, r) {
            return (
              (this.delegate = { iterator: O(t), resultName: e, nextLoc: r }),
              "next" === this.method && (this.arg = void 0),
              h
            );
          },
        }),
        a
      );
    }
    function L(n) {
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
        } catch (t) {
          return !1;
        }
      })();
      return function () {
        var t,
          e = w()(n);
        if (o) {
          var r = w()(this).constructor;
          t = Reflect.construct(e, arguments, r);
        } else t = e.apply(this, arguments);
        return m()(this, t);
      };
    }
    var E = 1,
      O = 0,
      _ = window._ACCEPT_DATA,
      k = "file",
      S = "capture",
      F = (function (t) {
        y()(i, t);
        var o = L(i);
        function i() {
          var e;
          f()(this, i);
          for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
            r[n] = arguments[n];
          return (
            ((e = o.call.apply(o, [this].concat(r))).state = {
              file: null,
              playCount: 0,
              type: null,
            }),
            (e.handleAsyncCaptureFromMainWindow = (function () {
              var e = l()(
                P().mark(function t(e) {
                  var r, n;
                  return P().wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.prev = 0),
                              (t.next = 3),
                              navigator.mediaDevices.getUserMedia({
                                audio: !1,
                                video: {
                                  mandatory: {
                                    chromeMediaSource: "desktop",
                                    chromeMediaSourceId: e,
                                  },
                                },
                              })
                            );
                          case 3:
                            (r = t.sent),
                              ((n = document.querySelector("video")).srcObject =
                                r),
                              n.play(),
                              (t.next = 12);
                            break;
                          case 9:
                            (t.prev = 9),
                              (t.t0 = t.catch(0)),
                              console.error(t.t0);
                          case 12:
                          case "end":
                            return t.stop();
                        }
                    },
                    t,
                    null,
                    [[0, 9]]
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })()),
            (e.handleListenFile = function (t) {
              t &&
                (console.log("newsPlayFile", t),
                t.isMainWindow
                  ? e.setState({
                      file: t.file,
                      type: k,
                      playCount: t.playCount,
                    })
                  : (e.setState({ type: S }),
                    e.handleAsyncCaptureFromMainWindow(t.mainWindowId)));
            }),
            (e.closePlayTask = function (t) {
              x.a.send("stopNewsPlayer", { exitCode: t ? E : O });
            }),
            e
          );
        }
        return (
          p()(i, [
            {
              key: "componentDidMount",
              value: function () {
                _.getAndRegister("newsPlayFile", this.handleListenFile);
              },
            },
            {
              key: "render",
              value: function () {
                var t = this.state,
                  e = t.file,
                  r = t.type,
                  n = t.playCount;
                return a.a.createElement(
                  a.a.Fragment,
                  null,
                  r === S &&
                    a.a.createElement("video", {
                      style: { width: "100%", height: "100%" },
                    }),
                  r === k &&
                    a.a.createElement(b.a, {
                      closePlayTask: this.closePlayTask,
                      data: {
                        files: [
                          {
                            filename: (null == e ? void 0 : e.filename) || "",
                            url: null == e ? void 0 : e.fileUrl,
                          },
                        ],
                        playCount: n,
                      },
                    })
                );
              },
            },
          ]),
          i
        );
      })(n.PureComponent),
      T = r(24),
      C = r(29),
      M = r(21);
    r(30);
    var A,
      N = Object(C.a)("screenLock");
    (A = F),
      i.a.render(
        a.a.createElement(
          T.a,
          { store: N },
          a.a.createElement(M.a, null, a.a.createElement(A, null))
        ),
        document.getElementById("root")
      );
  },
});
