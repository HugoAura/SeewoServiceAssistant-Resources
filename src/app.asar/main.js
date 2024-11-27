!(function (e) {
  var t = {};
  function n(s) {
    if (t[s]) return t[s].exports;
    var o = (t[s] = { i: s, l: !1, exports: {} });
    return e[s].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function (e, t, s) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: s });
    }),
    (n.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var s = Object.create(null);
      if (
        (n.r(s),
        Object.defineProperty(s, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var o in e)
          n.d(
            s,
            o,
            function (t) {
              return e[t];
            }.bind(null, o)
          );
      return s;
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ""),
    n((n.s = 140));
})([
  function (e, t) {
    e.exports = require("electron");
  },
  function (e, t, n) {
    const s = n(170),
      { app: o } = n(0),
      i = n(12),
      r = n(5);
    let a,
      c = {},
      l = {};
    try {
      if (o.isPackaged)
        try {
          l = JSON.parse(
            i.readFileSync(
              r.resolve(o.getAppPath(), "..", "autoConfiguration.json"),
              "utf8"
            )
          );
        } catch (e) {
          l = {};
        }
    } catch (e) {
      l = {};
    }
    ("object" == typeof l &&
      "[object Object]" === Object.prototype.toString.call(l)) ||
      (l = {});
    try {
      a = n(
        !(function () {
          var e = new Error("Cannot find module './development'");
          throw ((e.code = "MODULE_NOT_FOUND"), e);
        })()
      );
    } catch (e) {
      a = n(92);
    }
    if (o.isPackaged) {
      let e;
      (e =
        process.env.runmode && "dev" === process.env.runmode
          ? n(92)
          : process.env.runmode && "test" === process.env.runmode
          ? n(171)
          : n(172)),
        (c = Object.assign({}, s, e, l));
    } else c = Object.assign({}, s, a, l);
    e.exports = c;
  },
  function (e, t, n) {
    const s = new (class {
      constructor() {
        (this.shareData = {}), (this.storeData = {});
      }
      setData(e) {
        let t = this.storeData;
        for (let n in e) t[n] = e[n];
        this.storeData = t;
      }
      getData(e) {
        return this.storeData.hasOwnProperty(e) ? this.storeData[e] : null;
      }
      share(e, t, n) {
        n
          ? (this.shareData[n] || (this.shareData[n] = {}),
            (this.shareData[n][e] = t))
          : (this.shareData._default || (this.shareData._default = {}),
            (this.shareData._default[e] = t)),
          (global.SHAREDATA = this.shareData),
          this.publishData(e, t, n);
      }
      publishData(e, t, s) {
        const o = n(3);
        if (s) {
          if (o.checkWindowExist(s)) {
            o.getInstance(s).webContents.send("SHARE_DATA", {
              typeName: e,
              value: t,
            });
          }
        } else {
          let n = o.getAllWindows();
          for (let s in n)
            n[s].webContents.send("SHARE_DATA", { typeName: e, value: t });
        }
      }
    })();
    e.exports = s;
  },
  function (e, t, n) {
    const s = n(7),
      o = n(182),
      i = n(2);
    const r = new (class {
      constructor() {
        (this.windows = {}),
          (this.checkWindowExist = this.checkWindowExist.bind(this)),
          (this.produceWindow = this.produceWindow.bind(this)),
          (this.creatingList = []);
      }
      checkWindowExist(e) {
        return !!this.windows[e];
      }
      produceWindow(e, t, r, a = null, c = {}) {
        const l = i.getData("CUSTOM_CONFIG");
        let u;
        if (l.windowRedirect && l.windowRedirect[e])
          try {
            (u = n(99)("./" + l.windowRedirect[e] + ".js")),
              (u.htmlName = l.windowRedirect[e]);
          } catch (t) {
            s.error(l.windowRedirect[e] + "配置不存在或出现问题");
          }
        else (u = n(99)("./" + e + ".js")), (u.htmlName = e);
        return (
          l.htmlRedirect &&
            l.htmlRedirect[e] &&
            (u.htmlName = l.htmlRedirect[e]),
          (u.onCrashed = (e, t, n) => {
            this.close(n);
          }),
          (u._onClosed = (e, t, n) => {
            u.onClosed && u.onClosed(e, t, n), delete this.windows[n];
          }),
          (u.windowTypeName = e),
          (u.url = c.url || null),
          delete c.url,
          (u.configure = { ...u.configure, ...c }),
          new o(u, t || e, r, a)
        );
      }
      newOne(e, t, n, s) {
        if (!this.windows[e] && !this.creatingList.includes(e)) {
          this.creatingList.push(e);
          let o = this.getInstance(n),
            i = this.produceWindow(e, null, t, o, s),
            r = i.create();
          return (
            (this.windows[e] = r),
            this.creatingList.splice(this.creatingList.indexOf(e), 1),
            i.createFinish(),
            r
          );
        }
        if (this.windows[e]) return this.windows[e].show(), this.windows[e];
        setTimeout(() => {
          this.newOne(e, t);
        }, 100);
      }
      addOne(e, t, n, o, i) {
        if (this.windows[t] || this.creatingList.includes(t))
          return (
            s.warn(
              "添加窗口功能不希望添加已存在的窗口名，请重新选择不存在的" +
                t +
                "再调用"
            ),
            this.windows[t]
          );
        {
          this.creatingList.push(t);
          let s = this.getInstance(o),
            r = this.produceWindow(e, t, n, s, i),
            a = r.create();
          return (
            (this.windows[t] = a),
            this.creatingList.splice(this.creatingList.indexOf(t), 1),
            r.createFinish(),
            a
          );
        }
      }
      minimize(e) {
        this.checkWindowExist(e) && this.windows[e].minimize();
      }
      show(e) {
        this.checkWindowExist(e) && this.windows[e].show();
      }
      showInactive(e) {
        this.checkWindowExist(e) && this.windows[e].showInactive();
      }
      maximize(e) {
        this.checkWindowExist(e) && this.windows[e].maximize();
      }
      hide(e) {
        this.checkWindowExist(e) && this.windows[e].hide();
      }
      close(e) {
        this.checkWindowExist(e) &&
          (this.windows[e].hide(),
          this.windows[e].close(),
          delete this.windows[e]);
      }
      restore(e) {
        this.checkWindowExist(e) && this.windows[e].restore();
      }
      focus(e) {
        this.checkWindowExist(e) && this.windows[e].focus();
      }
      setFocusable(e, t) {
        this.checkWindowExist(e) && this.windows[e].setFocusable(t);
      }
      destroy(e) {
        this.checkWindowExist(e) &&
          (this.windows[e].destroy(), delete this.windows[e]);
      }
      getInstance(e) {
        return this.checkWindowExist(e) ? this.windows[e] : null;
      }
      clearInstance(e) {
        delete this.windows[e];
      }
      getAllWindows() {
        return this.windows;
      }
      blur(e) {
        const t = this.getInstance(e);
        t && !t.isDestroyed() && t.blur();
      }
    })();
    e.exports = r;
  },
  function (e, t, n) {
    const s = n(3);
    e.exports = (e, t, n, o) => {
      if (n)
        if ("string" == typeof n)
          s.checkWindowExist(n) &&
            s
              .getInstance(n)
              .webContents.send("mainMessage", {
                eventName: e,
                originWindowName: o || null,
                data: t,
              });
        else if (
          "object" == typeof n &&
          "[object Array]" === Object.prototype.toString.call(n)
        )
          for (let i of n)
            s.checkWindowExist(n) &&
              s
                .getInstance(i)
                .webContents.send("mainMessage", {
                  eventName: e,
                  originWindowName: o || null,
                  data: t,
                });
        else console.warn("发送消息窗口类型错误");
      else {
        let n = s.getAllWindows();
        for (let i in n)
          s.getInstance(i).webContents.send("mainMessage", {
            eventName: e,
            originWindowName: o || null,
            data: t,
          });
      }
    };
  },
  function (e, t) {
    e.exports = require("path");
  },
  function (e, t, n) {
    const s = n(1).ports,
      { openPortSearching: o } = n(1),
      i = n(7),
      { rpcDiscover: r } = n(29),
      a = n(2);
    let c = new (class {
      constructor() {
        (this.ports = s),
          (this.listenList = []),
          (this.searching = !o),
          (this.startGetFromRegedit = this.startGetFromRegedit.bind(this)),
          (this.register = this.register.bind(this)),
          (this.matchToReturn = this.matchToReturn.bind(this)),
          (this.deliver = this.deliver.bind(this)),
          a.share("ports", this.ports);
      }
      startGetFromRegedit() {
        this.searching
          ? a.share("ports", this.ports)
          : (i.info("开始获取SeewoProxyHTTP端口"),
            r.listener("SeewoProxyHTTP", (e) => {
              i.info("SeewoProxyHTTP:", e),
                (this.ports.SeewoProxyHTTP = e),
                a.share("ports", this.ports),
                this.ports.SeewoProxyHTTP &&
                  ((this.searching = !0), this.deliver());
            }));
      }
      matchToReturn(e) {
        let t = {};
        for (let n = 0; n < e.length; n++) t[e[n]] = this.ports[e[n]] || "";
        return t;
      }
      register(e, t, n) {
        let s = !0,
          o = 0 === e.length ? SERVICE_LIST : e,
          i = this.matchToReturn(o);
        this.searching && (t || (s = !1), n(i)),
          s &&
            this.listenList.push({
              needList: o,
              valueList: i,
              isInfinite: t,
              callback: n,
            });
      }
      deliver() {
        this.listenList.map((e, t) => {
          let n = !1,
            s = this.matchToReturn(e.needList);
          JSON.stringify(s) !== JSON.stringify(e.valueList) &&
            (e.callback(s), e.isInfinite || (n = !0)),
            n && this.listenList.splice(t, 1);
        });
      }
    })();
    e.exports = c;
  },
  function (e, t, n) {
    const s = n(141),
      o = n(168),
      i = n(169),
      r = n(13),
      { getDateString: a } = n(173);
    let c = "SeewoServiceAssistant_" + a();
    const l = (e) => {
      s.configure({ appenders: i(e), categories: o });
    };
    l(c);
    e.exports = (() => {
      let e = new Object();
      return (
        Object.keys(o).forEach((t) => {
          e[t] = function () {
            let e = "SeewoServiceAssistant_" + a();
            e !== c && ((c = e), l(e));
            const n = s.getLogger(t);
            let o = [];
            for (const e in arguments)
              "string" == typeof arguments[e]
                ? o.push(arguments[e])
                : o.push(
                    r.inspect(arguments[e], { showHidden: !0, depth: null })
                  );
            (o = o.join(" | ")), n[t](o);
          };
        }),
        e
      );
    })();
  },
  function (e, t, n) {
    const s = n(7),
      o = {
        SCHOOL_ANNOUNCEMENT: "SCHOOL_ANNOUNCEMENT",
        POPUP_NOTIFICATION: "POPUP_NOTIFICATION",
        SCREEN_LOCK: "SCREEN_LOCK",
        SCREEN_SAVER: "SCREEN_SAVER",
        SMART_PEN_CURSOR: "SMART_PEN_CURSOR",
        SYSTEM_DIALOG: "SYSTEM_DIALOG",
        POPOP_CUSTOMIZE: "POPOP_CUSTOMIZE",
        BELL_RINGING: "BELL_RINGING",
        FILE_TRANSPORT: "FILE_TRANSPORT",
        FIRMWARE_UPGRADE: "FIRMWARE_UPGRADE",
        NOTICE_SLIDER: "NOTICE_SLIDER",
        DEVICE_NOTIFICATION: "DEVICE_NOTIFICATION",
        REMOTE_CONTROL: "REMOTE_CONTROL",
        REMOTE_CONTROL_STATUS: "REMOTE_CONTROL_STATUS",
        USB_INSERT: "USB_INSERT",
        VOICE_INTERACTION: "VOICE_INTERACTION",
        DEVICE_LINK: "DEVICE_LINK",
        NFC_AUTH_RESULT: "NFC_AUTH_RESULT",
        REMOTE_DISK_CLEAR_WARN: "REMOTE_DISK_CLEAR_WARN",
        GLOBAL_CONFIRM: "GLOBAL_CONFIRM",
        GLOBAL_MESSAGE: "GLOBAL_MESSAGE",
        NEWS_PLAYER: "NEWS_PLAYER",
        QUIT_FULLSCREEN_AUTH: "QUIT_FULLSCREEN_AUTH",
        EYE_PROTECTION_MODE_TIME_OUT: "EYE_PROTECTION_MODE_TIME_OUT",
        EYE_PROTECTION_MODE_BALL: "EYE_PROTECTION_MODE_BALL",
        BLACK_WINDOW: "BLACK_WINDOW",
      },
      i = [
        o.GLOBAL_CONFIRM,
        o.GLOBAL_MESSAGE,
        o.REMOTE_DISK_CLEAR_WARN,
        o.SMART_PEN_CURSOR,
        o.FIRMWARE_UPGRADE,
        o.REMOTE_CONTROL_STATUS,
        o.REMOTE_CONTROL,
        o.SYSTEM_DIALOG,
        o.NOTICE_SLIDER,
        o.POPUP_NOTIFICATION,
        o.BELL_RINGING,
        o.FILE_TRANSPORT,
        o.DEVICE_LINK,
        o.NFC_AUTH_RESULT,
        o.DEVICE_NOTIFICATION,
        o.VOICE_INTERACTION,
        o.USB_INSERT,
        o.EYE_PROTECTION_MODE_TIME_OUT,
        o.QUIT_FULLSCREEN_AUTH,
        o.NEWS_PLAYER,
        o.SCHOOL_ANNOUNCEMENT,
        o.SCREEN_SAVER,
        o.SCREEN_LOCK,
        o.EYE_PROTECTION_MODE_BALL,
        o.BLACK_WINDOW,
        o.POPOP_CUSTOMIZE,
      ],
      r = [
        o.SCREEN_SAVER,
        o.SCREEN_LOCK,
        o.SCHOOL_ANNOUNCEMENT,
        o.NEWS_PLAYER,
        o.QUIT_FULLSCREEN_AUTH,
        o.REMOTE_CONTROL,
        o.REMOTE_CONTROL_STATUS,
        o.DEVICE_LINK,
        o.NFC_AUTH_RESULT,
        o.REMOTE_DISK_CLEAR_WARN,
        o.BLACK_WINDOW,
      ];
    const a = new (class {
      constructor() {
        (this.cureenIndex = 1e5),
          (this.waitingList = []),
          (this.interval = null),
          (this.windowInstanceList = new Map());
      }
      onWindowBuilded(e, t) {
        let n = i.indexOf(e);
        -1 !== n &&
          (this.windowInstanceList.get(n) || this.windowInstanceList.set(n, []),
          this.windowInstanceList.get(n).push(t),
          n < this.cureenIndex
            ? (this.waitingList.push(this.cureenIndex),
              this.waitingList.sort(function (e, t) {
                return e - t;
              }),
              (this.cureenIndex = n),
              this.startToMostInterval(),
              s.info("当前置顶：" + i[this.cureenIndex]))
            : n !== this.cureenIndex &&
              -1 === this.waitingList.indexOf(n) &&
              (this.waitingList.push(n),
              this.waitingList.sort(function (e, t) {
                return e - t;
              })));
      }
      startToMostInterval() {
        clearInterval(this.interval),
          (this.interval = setInterval(() => {
            1e5 === this.cureenIndex && clearInterval(this.interval);
            let e = this.windowInstanceList.get(this.cureenIndex);
            if (e && e.length > 0) {
              let t = i[this.cureenIndex];
              if (r.indexOf(t))
                e.forEach((e) => {
                  e.isDestroyed() || e.setAlwaysOnTop(!0, "screen-saver");
                });
              else {
                let t = e[e.length - 1];
                t.isDestroyed() || t.setAlwaysOnTop(!0, "screen-saver");
              }
            }
          }, 1e3));
      }
      newTopMostIndex() {
        0 === this.waitingList.length
          ? (this.cureenIndex = 1e5)
          : ((this.cureenIndex = this.waitingList.shift()),
            s.info("当前置顶：" + i[this.cureenIndex]));
      }
      isCureenTopMost(e) {
        return i.indexOf(e) === this.cureenIndex;
      }
      onWindowClosed(e, t) {
        let n = i.indexOf(e);
        if (-1 === n) return;
        let s = this.windowInstanceList.get(n),
          o = s.length;
        if (
          (1 === s.length
            ? this.windowInstanceList.set(n, null)
            : (s.indexOf(t) > -1 && s.splice(s.indexOf(t), 1),
              this.windowInstanceList.set(n, s)),
          this.cureenIndex === n)
        )
          1 === o && (this.newTopMostIndex(), this.startToMostInterval());
        else {
          let e = this.waitingList.indexOf(n);
          e > -1 && this.waitingList.splice(e, 1);
        }
      }
    })();
    e.exports = { toTopMostQueue: a, QUEUE_LIST: o };
  },
  function (e, t, n) {
    const { toTopMostQueue: s } = n(8),
      o = n(1);
    e.exports = {
      topMost: function (e, t) {
        o.topMostForbidden ||
          (t.setAlwaysOnTop(!0, "screen-saver"), s.onWindowBuilded(e, t));
      },
      topMostExist: function (e, t) {
        o.topMostForbidden || s.onWindowClosed(e, t);
      },
    };
  },
  function (e, t, n) {
    "undefined" == typeof process || "renderer" === process.type
      ? (e.exports = n(142))
      : (e.exports = n(144));
  },
  function (e, t, n) {
    const s = n(7),
      o = n(274).https,
      i = n(112);
    e.exports = function (
      e,
      t,
      n,
      r,
      a,
      c,
      l = { "x-auth-traceid": i(Date.now) }
    ) {
      let u = JSON.stringify(a);
      const d = {
        hostname: e,
        port: t,
        path: n,
        method: r,
        rejectUnauthorized: !1,
        headers: { "Content-Type": "application/json", ...l },
        secureProtocol: "TLSv1_2_method",
      };
      ("POST" !== r && "post" !== r) ||
        (d.headers["Content-Length"] = Buffer.byteLength(u)),
        s.info("主线程发送 " + r, e + ":" + t + n, "等待返回");
      const h = o.request(d, (o) => {
        o.on("data", (o) => {
          s.info("主线程 " + r, e + ":" + t + n, JSON.parse(o.toString())),
            c(JSON.parse(o.toString()));
        });
      });
      h.on("error", (o) => {
        s.error("主线程 " + r, e + ":" + t + n, o), c("", o);
      }),
        ("POST" !== r && "post" !== r) || h.write(u),
        h.end();
    };
  },
  function (e, t) {
    e.exports = require("fs");
  },
  function (e, t) {
    e.exports = require("util");
  },
  function (e, t, n) {
    "use strict";
    (function (s) {
      const o = n(15),
        i = n(13).inspect,
        r = n(10)("ref"),
        a = n(25),
        c = n(5);
      ((t = e.exports = n(93)(c.join(s, ".."))).endianness = a.endianness()),
        (t.refType = function (e) {
          const n = t.coerceType(e),
            s = Object.create(n);
          return (
            s.indirection++,
            n.name &&
              Object.defineProperty(s, "name", {
                value: n.name + "*",
                configurable: !0,
                enumerable: !0,
                writable: !0,
              }),
            s
          );
        }),
        (t.derefType = function (e) {
          const n = t.coerceType(e);
          if (1 === n.indirection)
            throw new Error(
              "Cannot create deref'd type for type with indirection 1"
            );
          let s = Object.getPrototypeOf(n);
          return (
            s.indirection !== n.indirection - 1 &&
              ((s = Object.create(n)), s.indirection--),
            s
          );
        }),
        (t.coerceType = function (e) {
          let n = e;
          if ("string" == typeof n) {
            if (((n = t.types[e]), n)) return n;
            if (((n = e.replace(/\s+/g, "").toLowerCase()), "pointer" === n))
              n = t.refType(t.types.void);
            else if ("string" === n) n = t.types.CString;
            else {
              var s = 0;
              if (
                ((n = n.replace(/\*/g, function () {
                  return s++, "";
                })),
                (n = t.types[n]),
                s > 0)
              ) {
                if (!(n && "size" in n && "indirection" in n))
                  throw new TypeError(
                    'could not determine a proper "type" from: ' + i(e)
                  );
                for (let e = 0; e < s; e++) n = t.refType(n);
              }
            }
          }
          if (!(n && "size" in n && "indirection" in n))
            throw new TypeError(
              'could not determine a proper "type" from: ' + i(e)
            );
          return n;
        }),
        (t.getType = function (e) {
          return (
            e.type ||
              (r('WARN: no "type" found on buffer, setting default "type"', e),
              (e.type = {}),
              (e.type.size = e.length),
              (e.type.indirection = 1),
              (e.type.get = function () {
                throw new Error('unknown "type"; cannot get()');
              }),
              (e.type.set = function () {
                throw new Error('unknown "type"; cannot set()');
              })),
            t.coerceType(e.type)
          );
        }),
        (t.get = function (e, n, s) {
          if (
            (n || (n = 0),
            (s = s ? t.coerceType(s) : t.getType(e)),
            r("get(): (offset: %d)", n, e),
            o(
              s.indirection > 0,
              '"indirection" level must be at least 1, saw ' + s.indirection
            ),
            1 === s.indirection)
          )
            return s.get(e, n);
          {
            const o = 2 === s.indirection ? s.size : t.sizeof.pointer,
              i = t.readPointer(e, n, o);
            return (i.type = t.derefType(s)), i;
          }
        }),
        (t.set = function (e, n, s, i) {
          n || (n = 0),
            (i = i ? t.coerceType(i) : t.getType(e)),
            r("set(): (offset: %d)", n, e, s),
            o(i.indirection >= 1, '"indirection" level must be at least 1'),
            1 === i.indirection ? i.set(e, n, s) : t.writePointer(e, n, s);
        }),
        (t.alloc = function (e, n) {
          var s = t.coerceType(e);
          let o;
          r('allocating Buffer for type with "size"', s.size),
            (o = 1 === s.indirection ? s.size : t.sizeof.pointer);
          const i = new Buffer(o);
          return (
            (i.type = s),
            arguments.length >= 2 &&
              (r("setting value on allocated buffer", n), t.set(i, 0, n, s)),
            i
          );
        }),
        (t.allocCString = function (e, n) {
          if (null == e || (Buffer.isBuffer(e) && t.isNull(e))) return t.NULL;
          const s = Buffer.byteLength(e, n) + 1,
            o = new Buffer(s);
          return t.writeCString(o, 0, e, n), (o.type = m), o;
        }),
        (t.writeCString = function (e, t, n, s) {
          o(Buffer.isBuffer(e), "expected a Buffer as the first argument"),
            o.strictEqual(
              "string",
              typeof n,
              'expected a "string" as the third argument'
            ),
            t || (t = 0),
            s || (s = "utf8");
          const i = e.length - t,
            r = e.write(n, t, i, s);
          e.writeUInt8(0, t + r);
        }),
        (t["readInt64" + t.endianness] = t.readInt64),
        (t["readUInt64" + t.endianness] = t.readUInt64),
        (t["writeInt64" + t.endianness] = t.writeInt64),
        (t["writeUInt64" + t.endianness] = t.writeUInt64);
      var l = "LE" == t.endianness ? "BE" : "LE",
        u = Buffer.alloc(t.sizeof.int64),
        d = Buffer.alloc(t.sizeof.uint64);
      (t["readInt64" + l] = function (e, n) {
        for (let s = 0; s < t.sizeof.int64; s++)
          u[s] = e[n + t.sizeof.int64 - s - 1];
        return t.readInt64(u, 0);
      }),
        (t["readUInt64" + l] = function (e, n) {
          for (let s = 0; s < t.sizeof.uint64; s++)
            d[s] = e[n + t.sizeof.uint64 - s - 1];
          return t.readUInt64(d, 0);
        }),
        (t["writeInt64" + l] = function (e, n, s) {
          t.writeInt64(u, 0, s);
          for (let s = 0; s < t.sizeof.int64; s++)
            e[n + s] = u[t.sizeof.int64 - s - 1];
        }),
        (t["writeUInt64" + l] = function (e, n, s) {
          t.writeUInt64(d, 0, s);
          for (let s = 0; s < t.sizeof.uint64; s++)
            e[n + s] = d[t.sizeof.uint64 - s - 1];
        }),
        (t.ref = function (e) {
          r("creating a reference to buffer", e);
          var n = t.refType(t.getType(e));
          return t.alloc(n, e);
        }),
        (t.deref = function (e) {
          return r("dereferencing buffer", e), t.get(e);
        });
      const h = Symbol("attached");
      (t._attach = function (e, t) {
        e[h] || (e[h] = []), e[h].push(t);
      }),
        (t._writeObject = t.writeObject),
        (t.writeObject = function (e, n, s) {
          r("writing Object to buffer", e, n, s),
            t._writeObject(e, n, s),
            t._attach(e, s);
        }),
        (t._writePointer = t.writePointer),
        (t.writePointer = function (e, n, s) {
          r("writing pointer to buffer", e, n, s),
            t._writePointer(e, n, s),
            t._attach(e, s);
        }),
        (t._reinterpret = t.reinterpret),
        (t.reinterpret = function (e, n, s) {
          r('reinterpreting buffer to "%d" bytes', n);
          const o = t._reinterpret(e, n, s || 0);
          return t._attach(o, e), o;
        }),
        (t._reinterpretUntilZeros = t.reinterpretUntilZeros),
        (t.reinterpretUntilZeros = function (e, n, s) {
          r('reinterpreting buffer to until "%d" NULL (0) bytes are found', n);
          var o = t._reinterpretUntilZeros(e, n, s || 0);
          return t._attach(o, e), o;
        });
      const f = (t.types = {});
      (f.void = {
        size: 0,
        indirection: 1,
        get: function (e, t) {
          return r("getting `void` type (returns `null`)"), null;
        },
        set: function (e, t, n) {
          r("setting `void` type (no-op)");
        },
      }),
        (f.int8 = {
          size: t.sizeof.int8,
          indirection: 1,
          get: function (e, t) {
            return e.readInt8(t || 0);
          },
          set: function (e, t, n) {
            return (
              "string" == typeof n && (n = n.charCodeAt(0)),
              e.writeInt8(n, t || 0)
            );
          },
        }),
        (f.uint8 = {
          size: t.sizeof.uint8,
          indirection: 1,
          get: function (e, t) {
            return e.readUInt8(t || 0);
          },
          set: function (e, t, n) {
            return (
              "string" == typeof n && (n = n.charCodeAt(0)),
              e.writeUInt8(n, t || 0)
            );
          },
        }),
        (f.int16 = {
          size: t.sizeof.int16,
          indirection: 1,
          get: function (e, n) {
            return e["readInt16" + t.endianness](n || 0);
          },
          set: function (e, n, s) {
            return e["writeInt16" + t.endianness](s, n || 0);
          },
        }),
        (f.uint16 = {
          size: t.sizeof.uint16,
          indirection: 1,
          get: function (e, n) {
            return e["readUInt16" + t.endianness](n || 0);
          },
          set: function (e, n, s) {
            return e["writeUInt16" + t.endianness](s, n || 0);
          },
        }),
        (f.int32 = {
          size: t.sizeof.int32,
          indirection: 1,
          get: function (e, n) {
            return e["readInt32" + t.endianness](n || 0);
          },
          set: function (e, n, s) {
            return e["writeInt32" + t.endianness](s, n || 0);
          },
        }),
        (f.uint32 = {
          size: t.sizeof.uint32,
          indirection: 1,
          get: function (e, n) {
            return e["readUInt32" + t.endianness](n || 0);
          },
          set: function (e, n, s) {
            return e["writeUInt32" + t.endianness](s, n || 0);
          },
        }),
        (f.int64 = {
          size: t.sizeof.int64,
          indirection: 1,
          get: function (e, n) {
            return e["readInt64" + t.endianness](n || 0);
          },
          set: function (e, n, s) {
            return e["writeInt64" + t.endianness](s, n || 0);
          },
        }),
        (f.uint64 = {
          size: t.sizeof.uint64,
          indirection: 1,
          get: function (e, n) {
            return e["readUInt64" + t.endianness](n || 0);
          },
          set: function (e, n, s) {
            return e["writeUInt64" + t.endianness](s, n || 0);
          },
        }),
        (f.float = {
          size: t.sizeof.float,
          indirection: 1,
          get: function (e, n) {
            return e["readFloat" + t.endianness](n || 0);
          },
          set: function (e, n, s) {
            return e["writeFloat" + t.endianness](s, n || 0);
          },
        }),
        (f.double = {
          size: t.sizeof.double,
          indirection: 1,
          get: function (e, n) {
            return e["readDouble" + t.endianness](n || 0);
          },
          set: function (e, n, s) {
            return e["writeDouble" + t.endianness](s, n || 0);
          },
        }),
        (f.Object = {
          size: t.sizeof.Object,
          indirection: 1,
          get: function (e, t) {
            return e.readObject(t || 0);
          },
          set: function (e, t, n) {
            return e.writeObject(n, t || 0);
          },
        }),
        (f.CString = {
          size: t.sizeof.pointer,
          alignment: t.alignof.pointer,
          indirection: 1,
          get: function (e, n) {
            const s = t.readPointer(e, n);
            return t.isNull(s) ? null : t.readCString(s, 0);
          },
          set: function (e, n, s) {
            let o;
            return (
              (o = Buffer.isBuffer(s) ? s : t.allocCString(s)),
              t.writePointer(e, n, o)
            );
          },
        });
      var p,
        g,
        w = !1;
      Object.defineProperty(f, "Utf8String", {
        enumerable: !1,
        configurable: !0,
        get: function () {
          return (
            w ||
              ((w = !0),
              console.error(
                '"Utf8String" type is deprecated, use "CString" instead'
              )),
            f.CString
          );
        },
      }),
        [
          "bool",
          "byte",
          "char",
          "uchar",
          "short",
          "ushort",
          "int",
          "uint",
          "long",
          "ulong",
          "longlong",
          "ulonglong",
          "size_t",
        ].forEach((e) => {
          const n =
              "bool" === e || "byte" === e || "size_t" === e || "u" === e[0],
            s = t.sizeof[e];
          o(s >= 1 && s <= 8);
          let i = "int" + 8 * s;
          n && (i = "u" + i);
          const r = t.types[i];
          o(r), (t.types[e] = Object.create(r));
        }),
        Object.keys(t.alignof).forEach((e) => {
          "pointer" !== e &&
            ((t.types[e].alignment = t.alignof[e]),
            o(t.types[e].alignment > 0));
        }),
        (t.types.bool.get =
          ((p = t.types.bool.get),
          function (e, t) {
            return !!p(e, t);
          })),
        (t.types.bool.set =
          ((g = t.types.bool.set),
          function (e, t, n) {
            return "number" != typeof n && (n = n ? 1 : 0), g(e, t, n);
          })),
        /*!
         * Set the `name` property of the types. Used for debugging...
         */
        Object.keys(t.types).forEach((e) => {
          t.types[e].name = e;
        });
      /*!
       * This `char *` type is used by "allocCString()" above.
       */
      const m = t.refType(t.types.char);
      /*!
       * Set the `type` property of the `NULL` pointer Buffer object.
       */ (t.NULL.type = t.types.void),
        (t.NULL_POINTER = t.ref(t.NULL)),
        (Buffer.prototype.address = function () {
          return t.address(this, 0);
        }),
        (Buffer.prototype.hexAddress = function () {
          return t.hexAddress(this, 0);
        }),
        (Buffer.prototype.isNull = function () {
          return t.isNull(this, 0);
        }),
        (Buffer.prototype.ref = function () {
          return t.ref(this);
        }),
        (Buffer.prototype.deref = function () {
          return t.deref(this);
        }),
        (Buffer.prototype.readObject = function (e) {
          return t.readObject(this, e);
        }),
        (Buffer.prototype.writeObject = function (e, n) {
          return t.writeObject(this, n, e);
        }),
        (Buffer.prototype.readPointer = function (e, n) {
          return t.readPointer(this, e, n);
        }),
        (Buffer.prototype.writePointer = function (e, n) {
          return t.writePointer(this, n, e);
        }),
        (Buffer.prototype.readCString = function (e) {
          return t.readCString(this, e);
        }),
        (Buffer.prototype.writeCString = function (e, n, s) {
          return t.writeCString(this, n, e, s);
        }),
        (Buffer.prototype.readInt64BE = function (e) {
          return t.readInt64BE(this, e);
        }),
        (Buffer.prototype.writeInt64BE = function (e, n) {
          return t.writeInt64BE(this, n, e);
        }),
        (Buffer.prototype.readUInt64BE = function (e) {
          return t.readUInt64BE(this, e);
        }),
        (Buffer.prototype.writeUInt64BE = function (e, n) {
          return t.writeUInt64BE(this, n, e);
        }),
        (Buffer.prototype.readInt64LE = function (e) {
          return t.readInt64LE(this, e);
        }),
        (Buffer.prototype.writeInt64LE = function (e, n) {
          return t.writeInt64LE(this, n, e);
        }),
        (Buffer.prototype.readUInt64LE = function (e) {
          return t.readUInt64LE(this, e);
        }),
        (Buffer.prototype.writeUInt64LE = function (e, n) {
          return t.writeUInt64LE(this, n, e);
        }),
        (Buffer.prototype.reinterpret = function (e, n) {
          return t.reinterpret(this, e, n);
        }),
        (Buffer.prototype.reinterpretUntilZeros = function (e, n) {
          return t.reinterpretUntilZeros(this, e, n);
        });
      var y = i.custom || "inspect";
      if (
        (Buffer.prototype[y] && (Buffer.prototype[y] = S(Buffer.prototype[y])),
        !(t.NULL instanceof Buffer))
      ) {
        r(
          "extending SlowBuffer's prototype since it doesn't inherit from Buffer.prototype"
        );
        /*!
         * SlowBuffer convenience methods.
         */
        var b = n(61).SlowBuffer;
        (b.prototype.address = Buffer.prototype.address),
          (b.prototype.hexAddress = Buffer.prototype.hexAddress),
          (b.prototype.isNull = Buffer.prototype.isNull),
          (b.prototype.ref = Buffer.prototype.ref),
          (b.prototype.deref = Buffer.prototype.deref),
          (b.prototype.readObject = Buffer.prototype.readObject),
          (b.prototype.writeObject = Buffer.prototype.writeObject),
          (b.prototype.readPointer = Buffer.prototype.readPointer),
          (b.prototype.writePointer = Buffer.prototype.writePointer),
          (b.prototype.readCString = Buffer.prototype.readCString),
          (b.prototype.writeCString = Buffer.prototype.writeCString),
          (b.prototype.reinterpret = Buffer.prototype.reinterpret),
          (b.prototype.reinterpretUntilZeros =
            Buffer.prototype.reinterpretUntilZeros),
          (b.prototype.readInt64BE = Buffer.prototype.readInt64BE),
          (b.prototype.writeInt64BE = Buffer.prototype.writeInt64BE),
          (b.prototype.readUInt64BE = Buffer.prototype.readUInt64BE),
          (b.prototype.writeUInt64BE = Buffer.prototype.writeUInt64BE),
          (b.prototype.readInt64LE = Buffer.prototype.readInt64LE),
          (b.prototype.writeInt64LE = Buffer.prototype.writeInt64LE),
          (b.prototype.readUInt64LE = Buffer.prototype.readUInt64LE),
          (b.prototype.writeUInt64LE = Buffer.prototype.writeUInt64LE),
          b.prototype[y] && (b.prototype[y] = S(b.prototype[y]));
      }
      function S(e) {
        return "refinspect" === e.name
          ? e
          : function () {
              var t = e.apply(this, arguments);
              return t.replace("Buffer", "Buffer@0x" + this.hexAddress());
            };
      }
    }).call(this, "..\\..\\ref-napi\\lib");
  },
  function (e, t) {
    e.exports = require("assert");
  },
  function (e, t, n) {
    var s,
      o,
      i = n(12),
      r = n(245),
      a = n(247),
      c = n(248),
      l = n(13);
    function u(e, t) {
      Object.defineProperty(e, s, {
        get: function () {
          return t;
        },
      });
    }
    "function" == typeof Symbol && "function" == typeof Symbol.for
      ? ((s = Symbol.for("graceful-fs.queue")),
        (o = Symbol.for("graceful-fs.previous")))
      : ((s = "___graceful-fs.queue"), (o = "___graceful-fs.previous"));
    var d,
      h = function () {};
    if (
      (l.debuglog
        ? (h = l.debuglog("gfs4"))
        : /\bgfs4\b/i.test(process.env.NODE_DEBUG || "") &&
          (h = function () {
            var e = l.format.apply(l, arguments);
            (e = "GFS4: " + e.split(/\n/).join("\nGFS4: ")), console.error(e);
          }),
      !i[s])
    ) {
      var f = global[s] || [];
      u(i, f),
        (i.close = (function (e) {
          function t(t, n) {
            return e.call(i, t, function (e) {
              e || w(), "function" == typeof n && n.apply(this, arguments);
            });
          }
          return Object.defineProperty(t, o, { value: e }), t;
        })(i.close)),
        (i.closeSync = (function (e) {
          function t(t) {
            e.apply(i, arguments), w();
          }
          return Object.defineProperty(t, o, { value: e }), t;
        })(i.closeSync)),
        /\bgfs4\b/i.test(process.env.NODE_DEBUG || "") &&
          process.on("exit", function () {
            h(i[s]), n(15).equal(i[s].length, 0);
          });
    }
    function p(e) {
      r(e),
        (e.gracefulify = p),
        (e.createReadStream = function (t, n) {
          return new e.ReadStream(t, n);
        }),
        (e.createWriteStream = function (t, n) {
          return new e.WriteStream(t, n);
        });
      var t = e.readFile;
      e.readFile = function (e, n, s) {
        "function" == typeof n && ((s = n), (n = null));
        return (function e(n, s, o, i) {
          return t(n, s, function (t) {
            !t || ("EMFILE" !== t.code && "ENFILE" !== t.code)
              ? "function" == typeof o && o.apply(this, arguments)
              : g([e, [n, s, o], t, i || Date.now(), Date.now()]);
          });
        })(e, n, s);
      };
      var n = e.writeFile;
      e.writeFile = function (e, t, s, o) {
        "function" == typeof s && ((o = s), (s = null));
        return (function e(t, s, o, i, r) {
          return n(t, s, o, function (n) {
            !n || ("EMFILE" !== n.code && "ENFILE" !== n.code)
              ? "function" == typeof i && i.apply(this, arguments)
              : g([e, [t, s, o, i], n, r || Date.now(), Date.now()]);
          });
        })(e, t, s, o);
      };
      var s = e.appendFile;
      s &&
        (e.appendFile = function (e, t, n, o) {
          "function" == typeof n && ((o = n), (n = null));
          return (function e(t, n, o, i, r) {
            return s(t, n, o, function (s) {
              !s || ("EMFILE" !== s.code && "ENFILE" !== s.code)
                ? "function" == typeof i && i.apply(this, arguments)
                : g([e, [t, n, o, i], s, r || Date.now(), Date.now()]);
            });
          })(e, t, n, o);
        });
      var o = e.copyFile;
      o &&
        (e.copyFile = function (e, t, n, s) {
          "function" == typeof n && ((s = n), (n = 0));
          return (function e(t, n, s, i, r) {
            return o(t, n, s, function (o) {
              !o || ("EMFILE" !== o.code && "ENFILE" !== o.code)
                ? "function" == typeof i && i.apply(this, arguments)
                : g([e, [t, n, s, i], o, r || Date.now(), Date.now()]);
            });
          })(e, t, n, s);
        });
      var i = e.readdir;
      e.readdir = function (e, t, n) {
        "function" == typeof t && ((n = t), (t = null));
        var s = c.test(process.version)
          ? function (e, t, n, s) {
              return i(e, o(e, t, n, s));
            }
          : function (e, t, n, s) {
              return i(e, t, o(e, t, n, s));
            };
        return s(e, t, n);
        function o(e, t, n, o) {
          return function (i, r) {
            !i || ("EMFILE" !== i.code && "ENFILE" !== i.code)
              ? (r && r.sort && r.sort(),
                "function" == typeof n && n.call(this, i, r))
              : g([s, [e, t, n], i, o || Date.now(), Date.now()]);
          };
        }
      };
      var c = /^v[0-5]\./;
      if ("v0.8" === process.version.substr(0, 4)) {
        var l = a(e);
        (w = l.ReadStream), (m = l.WriteStream);
      }
      var u = e.ReadStream;
      u &&
        ((w.prototype = Object.create(u.prototype)),
        (w.prototype.open = function () {
          var e = this;
          b(e.path, e.flags, e.mode, function (t, n) {
            t
              ? (e.autoClose && e.destroy(), e.emit("error", t))
              : ((e.fd = n), e.emit("open", n), e.read());
          });
        }));
      var d = e.WriteStream;
      d &&
        ((m.prototype = Object.create(d.prototype)),
        (m.prototype.open = function () {
          var e = this;
          b(e.path, e.flags, e.mode, function (t, n) {
            t
              ? (e.destroy(), e.emit("error", t))
              : ((e.fd = n), e.emit("open", n));
          });
        })),
        Object.defineProperty(e, "ReadStream", {
          get: function () {
            return w;
          },
          set: function (e) {
            w = e;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e, "WriteStream", {
          get: function () {
            return m;
          },
          set: function (e) {
            m = e;
          },
          enumerable: !0,
          configurable: !0,
        });
      var h = w;
      Object.defineProperty(e, "FileReadStream", {
        get: function () {
          return h;
        },
        set: function (e) {
          h = e;
        },
        enumerable: !0,
        configurable: !0,
      });
      var f = m;
      function w(e, t) {
        return this instanceof w
          ? (u.apply(this, arguments), this)
          : w.apply(Object.create(w.prototype), arguments);
      }
      function m(e, t) {
        return this instanceof m
          ? (d.apply(this, arguments), this)
          : m.apply(Object.create(m.prototype), arguments);
      }
      Object.defineProperty(e, "FileWriteStream", {
        get: function () {
          return f;
        },
        set: function (e) {
          f = e;
        },
        enumerable: !0,
        configurable: !0,
      });
      var y = e.open;
      function b(e, t, n, s) {
        return (
          "function" == typeof n && ((s = n), (n = null)),
          (function e(t, n, s, o, i) {
            return y(t, n, s, function (r, a) {
              !r || ("EMFILE" !== r.code && "ENFILE" !== r.code)
                ? "function" == typeof o && o.apply(this, arguments)
                : g([e, [t, n, s, o], r, i || Date.now(), Date.now()]);
            });
          })(e, t, n, s)
        );
      }
      return (e.open = b), e;
    }
    function g(e) {
      h("ENQUEUE", e[0].name, e[1]), i[s].push(e), m();
    }
    function w() {
      for (var e = Date.now(), t = 0; t < i[s].length; ++t)
        i[s][t].length > 2 && ((i[s][t][3] = e), (i[s][t][4] = e));
      m();
    }
    function m() {
      if ((clearTimeout(d), (d = void 0), 0 !== i[s].length)) {
        var e = i[s].shift(),
          t = e[0],
          n = e[1],
          o = e[2],
          r = e[3],
          a = e[4];
        if (void 0 === r) h("RETRY", t.name, n), t.apply(null, n);
        else if (Date.now() - r >= 6e4) {
          h("TIMEOUT", t.name, n);
          var c = n.pop();
          "function" == typeof c && c.call(null, o);
        } else {
          var l = Date.now() - a,
            u = Math.max(a - r, 1);
          l >= Math.min(1.2 * u, 100)
            ? (h("RETRY", t.name, n), t.apply(null, n.concat([r])))
            : i[s].push(e);
        }
        void 0 === d && (d = setTimeout(m, 0));
      }
    }
    global[s] || u(global, i[s]),
      (e.exports = p(c(i))),
      process.env.TEST_GRACEFUL_FS_GLOBAL_PATCH &&
        !i.__patched &&
        ((e.exports = p(i)), (i.__patched = !0));
  },
  function (e, t, n) {
    "use strict";
    (t.fromCallback = function (e) {
      return Object.defineProperty(
        function (...t) {
          if ("function" != typeof t[t.length - 1])
            return new Promise((n, s) => {
              t.push((e, t) => (null != e ? s(e) : n(t))), e.apply(this, t);
            });
          e.apply(this, t);
        },
        "name",
        { value: e.name }
      );
    }),
      (t.fromPromise = function (e) {
        return Object.defineProperty(
          function (...t) {
            const n = t[t.length - 1];
            if ("function" != typeof n) return e.apply(this, t);
            t.pop(), e.apply(this, t).then((e) => n(null, e), n);
          },
          "name",
          { value: e.name }
        );
      });
  },
  function (e, t, n) {
    const s = n(236),
      o = n(7);
    e.exports = class {
      constructor(e, t) {
        (this.host = e),
          (this.isNotWss = t),
          (this.intervals = 0),
          (this.onMessage = this.onMessage.bind(this)),
          (this.onClose = this.onClose.bind(this)),
          (this.onLinkOk = this.onLinkOk.bind(this)),
          (this.sendMessage = this.sendMessage.bind(this)),
          (this.setHost = this.setHost.bind(this)),
          (this.onDisconnectMessage = this.onDisconnectMessage.bind(this)),
          (this.ws = ""),
          (this.start = !1),
          (this.ready = !1),
          (this.relink = !1),
          (this.shouldRelink = !0);
      }
      create() {
        const { host: e, onLinkOk: t, onClose: n, onMessage: i } = this;
        if (e) {
          this.start = !0;
          let r = this.isNotWss
            ? { secureProtocol: "TLSv1_2_method" }
            : { rejectUnauthorized: !1, secureProtocol: "TLSv1_2_method" };
          const a = new s(e, r);
          !this.relink && o.info(this.host + "创建连接！"),
            a.on("open", () => {
              (this.intervals = 0),
                (this.ready = !0),
                (this.relink = !1),
                o.info(e + "连接成功！"),
                t();
            }),
            a.on("error", (t) => {
              !this.relink && o.error(e + "," + t);
            }),
            a.on("close", () => {
              (this.ready = !1),
                !this.relink && this.onDisconnectMessage(),
                !this.relink && o.info(e + "断开连接！"),
                n();
            }),
            a.on("message", (t) => {
              o.info("主进程接受数据", e, t), i(t);
            }),
            (this.ws = a);
        }
      }
      setHost(e) {
        if (((this.host = e), this.ready))
          try {
            this.ws.close();
          } catch (e) {
            (this.ws = ""), this.create();
          }
        this.start || this.create();
      }
      sendMessage(e) {
        const { ws: t } = this;
        this.ready ? t.send(JSON.stringify(e)) : this.onDisconnectMessage(e);
      }
      onDisconnectMessage(e) {}
      onMessage(e) {}
      onLinkOk() {}
      onClose() {
        this.shouldRelink && this.relinkFun();
      }
      relinkFun() {
        !this.relink &&
          o.error(this.host + ", 开始重连") &&
          this.onDisconnectMessage(),
          (this.relink = !0),
          1e4 !== this.intervals && (this.intervals += 2e3),
          setTimeout(() => {
            this.create();
          }, this.intervals);
      }
    };
  },
  function (e, t, n) {
    const s = n(7),
      { screen: o } = n(0),
      i = n(3),
      r = n(2),
      a = n(23);
    const c = new (class {
      constructor() {
        (this.slotList = []), (this.windowsConfigList = {});
      }
      enterSlot(e) {
        let t = e.windowName,
          n = e.yIndex;
        this.slotList[n]
          ? s.error(t + "已入槽，无需重新入槽")
          : ((this.slotList[n] = t), (this.windowsConfigList[t] = e)),
          this.updateSlots(n, !0);
      }
      updateConfig(e, t) {
        let n = this.windowsConfigList[e],
          s = t.yIndex || n.yIndex,
          o = this.slotList.indexOf(e);
        (this.windowsConfigList[e] = Object.assign({}, n, t)),
          s !== o
            ? ((this.slotList[s] = e),
              (this.slotList[o] = ""),
              this.windowsConfigList[e].hide || this.updateSlots(o > s ? s : o))
            : this.windowsConfigList[e].hide || this.updateSlots(s);
      }
      updateSlots(e, t = !1) {
        let n = 0;
        if (!(0 === this.slotList.length || e >= this.slotList.length)) {
          for (let t = 0; t <= e - 1; t++)
            this.slotList[t] &&
              (n += this.windowsConfigList[this.slotList[t]].height + 8);
          for (let s = e; s < this.slotList.length; s++)
            if (this.slotList[s]) {
              let e = this.slotList[s];
              (n += this.windowsConfigList[e].height + 8),
                this.windowChange(e, this.windowsConfigList[e], n, t);
            }
        }
      }
      updateWindow(e) {
        this.updateConfig(e, {});
      }
      windowChange(e, t, n) {
        const { workArea: s, bounds: a } = o.getPrimaryDisplay(),
          c = i.getInstance(e);
        let l = 1;
        l = 1080 / a.height;
        let u = Math.ceil(s.y + s.height - n / l),
          d = Math.ceil(s.x + s.width - (t.width + 12) / l),
          h = Math.ceil(t.width / l),
          f = Math.ceil(t.height / l);
        c &&
          !c.isDestroyed() &&
          (c.setBounds({ width: h, height: f, x: d, y: u }),
          r.share("setZoomFactor", 1 / l, e));
      }
      outSlot(e) {
        let t = this.slotList.indexOf(e);
        t > -1 &&
          ((this.slotList[t] = ""),
          delete this.windowsConfigList[e],
          this.updateSlots(t));
      }
      hideSlot(e) {
        let t = this.slotList.indexOf(e);
        t > -1 && (this.slotList[t] = ""), this.updateSlots(t);
      }
      showSlot(e) {
        this.windowsConfigList[e] && this.enterSlot(this.windowsConfigList[e]);
      }
      init() {
        a.addListener(() => {
          setTimeout(() => {
            this.updateSlots(0);
          }, 1e3);
        });
      }
    })();
    c.init(), (e.exports = c);
  },
  function (e, t, n) {
    const s = n(3),
      { dllForHookBoard: o } = n(29),
      i = n(23),
      r = n(2),
      a = n(1),
      c = (e) => e / 1920;
    const l = new (class {
      constructor() {
        (this.windowsList = {}), (this.onWindowClose = () => {});
      }
      newWindow(e, t = !a.topMostForbidden, l = {}, u = () => {}) {
        const { screen: d } = n(0);
        let h = d.getAllDisplays();
        t && o.SetKeyboardHook();
        for (let n = 0; n < h.length; n++) {
          if (this.windowsList[e] && this.windowsList[e].includes(e + "_" + n))
            continue;
          let o = c(h[n].bounds.width);
          r.share("setZoomFactor", o, e + "_" + n);
          let i = s.addOne(e, e + "_" + n, l);
          this.windowsList[e] || (this.windowsList[e] = []),
            this.windowsList[e].push(e + "_" + n),
            i.setBounds({
              width: h[n].bounds.width,
              height: h[n].bounds.height,
              x: h[n].bounds.x,
              y: h[n].bounds.y,
            }),
            i.show(),
            i.on("close", () => {
              u(),
                setTimeout(() => {
                  this.closeWindow(e, t);
                }, 0);
            });
        }
        (this.onWindowClose = u),
          i.addListener(() => {
            setTimeout(() => {
              this.resetWindow(e, t);
            }, 1e3);
          }, e);
      }
      getWindowList(e) {
        return this.windowsList[e] || [];
      }
      resetWindow(e, t = !a.topMostForbidden) {
        const { screen: o } = n(0);
        let i = o.getAllDisplays();
        for (let n = 0; n < i.length; n++) {
          const o = e + "_" + n;
          let a = s.getInstance(o),
            l = c(i[n].bounds.width);
          r.share("setZoomFactor", l, o),
            a && a.isDestroyed() && (s.clearInstance(o), (a = null)),
            a ||
              ((a = s.addOne(e, o)),
              this.windowsList[e] || (this.windowsList[e] = []),
              this.windowsList[e].includes(o) || this.windowsList[e].push(o),
              a.on("close", () => {
                setTimeout(() => {
                  this.closeWindow(e, t);
                }, 0);
              })),
            a.setBounds({
              width: i[n].bounds.width,
              height: i[n].bounds.height,
              x: i[n].bounds.x,
              y: i[n].bounds.y,
            }),
            a.show();
        }
      }
      closeWindow(e, t = !0) {
        if (this.windowsList[e]) {
          for (let t = 0; t < this.windowsList[e].length; t++)
            s.destroy(this.windowsList[e][t]);
          t && o.UnHookKeyBoard(),
            i.removeEvent(e),
            this.onWindowClose(),
            (this.windowsList[e] = "");
        }
      }
    })();
    e.exports = l;
  },
  function (e, t, n) {
    "use strict";
    (function (t) {
      var s = n(5);
      e.exports = n(93)(s.join(t, ".."));
    }).call(this, "..\\..\\ffi-napi\\lib");
  },
  function (e, t, n) {
    "use strict";
    const s = n(17).fromPromise,
      { makeDir: o, makeDirSync: i } = n(250),
      r = s(o);
    e.exports = {
      mkdirs: r,
      mkdirsSync: i,
      mkdirp: r,
      mkdirpSync: i,
      ensureDir: r,
      ensureDirSync: i,
    };
  },
  function (e, t, n) {
    const s = n(7);
    const o = new (class {
      constructor() {
        (this.listener = []), (this.eventTypeListeners = {});
      }
      addListener(e, t) {
        t ? (this.eventTypeListeners[t] = e) : this.listener.push(e);
      }
      listen() {
        const { screen: e } = n(0);
        e.on("display-metrics-changed", () => {
          s.info("工作区域变化"), this.publishListener();
        }),
          e.on("display-added", () => {
            s.info("桌面被新建"), this.publishListener();
          });
      }
      publishListener() {
        let e = this.listener;
        for (let t = 0; t < e.length; t++)
          try {
            e[t]();
          } catch (e) {
            this.listener.splice(t, 1);
          }
        for (let e in this.eventTypeListeners)
          try {
            this.eventTypeListeners[e]();
          } catch (t) {
            delete this.eventTypeListeners[e];
          }
      }
      removeEvent(e) {
        this.eventTypeListeners[e] && delete this.eventTypeListeners[e];
      }
    })();
    o.listen(), (e.exports = o);
  },
  function (e, t, n) {
    const { dllRoot: s } = n(1),
      o = n(46),
      i = n(14),
      r = n(7);
    let a = [],
      c = o.Library(s + "/windowsApiFfi.dll", {
        setMlogCallback: [i.types.bool, ["pointer"]],
        StartHideTaskbar: [i.types.void, ["int"]],
        topMost: [i.types.bool, ["int"]],
        minimizeForegroundWindow: [i.types.bool, []],
        OpenItem: [i.types.bool, ["string", "string"]],
        GetScreenLockState: [i.types.bool, []],
        StarListener: [i.types.void, []],
        RegisterScreenLockListener: [i.types.void, ["pointer"]],
        StopListener: [i.types.void, []],
        GetRegistryString: ["string", ["string", "string", "string"]],
        GetRegistryInt: ["int", ["string", "string", "int"]],
        StartEmbedDesktop: [i.types.void, ["int"]],
        GetSystemDiskSpaceTotalCapacity: [i.types.double, []],
        GetSystemDiskSpaceUsedCapacity: [i.types.double, []],
        GetSystemDiskName: ["string", []],
        SetRegistryString: [i.types.void, ["string", "string", "string"]],
        GetOsMachineId: ["string", []],
        Md5DigestWithSalt: ["string", ["string", "string"]],
      });
    ((e) => {
      let t = ((e) =>
        o.Callback(i.types.void, ["string"], (t) => {
          e(t);
        }))(e);
      a.push(t), c.setMlogCallback(t);
    })((e) => {
      r.info("windowApiFfi_dll", e);
    });
    const l = new (class {
      constructor() {
        (this.listener = []),
          (this.onListen = !1),
          (this.startListen = this.startListen.bind(this)),
          (this.callBackStand = this.callBackStand.bind(this));
      }
      callBackStand(e) {
        return o.Callback("void", [i.types.bool], function (t) {
          e(t);
        });
      }
      startListen() {
        let e = this.callBackStand((e) => {
          for (let t in this.listener) this.listener[t](e);
        });
        a.push(e), c.RegisterScreenLockListener(e);
      }
      addListener(e) {
        -1 === this.listener.indexOf(e) && this.listener.push(e),
          this.onListen || ((this.onListen = !0), this.startListen());
      }
      removeListener(e) {
        let t = this.listener.indexOf(e);
        t > -1 && this.listener.splice(t, 1);
      }
    })();
    process.on("exit", () => {
      delete a;
    }),
      (e.exports = {
        setWindowBottom: function (e) {
          let t = Buffer.from(e);
          (t.type = i.types.int), c.StartEmbedDesktop(t.deref());
        },
        topMost: function (e) {
          let t = Buffer.from(e);
          return (t.type = i.types.int), c.topMost(t.deref());
        },
        minimizeForegroundWindow: c.minimizeForegroundWindow,
        openItem: c.OpenItem,
        GetScreenLockState: c.GetScreenLockState,
        StartListener: c.StarListener,
        StopListener: c.StopListener,
        systemScreenLock: l,
        GetRegistryString: c.GetRegistryString,
        GetRegistryInt: c.GetRegistryInt,
        startHideTaskbar: function (e) {
          let t = Buffer.from(e);
          (t.type = i.types.int), c.StartHideTaskbar(t.deref());
        },
        GetSystemDiskSpaceTotalCapacity: c.GetSystemDiskSpaceTotalCapacity,
        GetSystemDiskSpaceUsedCapacity: c.GetSystemDiskSpaceUsedCapacity,
        GetSystemDiskName: c.GetSystemDiskName,
        SetRegistryString: c.SetRegistryString,
        GetOsMachineId: c.GetOsMachineId,
        Md5DigestWithSalt: c.Md5DigestWithSalt,
      });
  },
  function (e, t) {
    e.exports = require("os");
  },
  function (e, t, n) {
    const s = n(46),
      o = n(7);
    let i = {
      SetWindowPos: (e, t, n, s, i, r, a) => {
        o.error("win32Api.SetWindowPos is not implemented"),
          console.log("win32Api.SetWindowPos is not implemented");
      },
    };
    n(12).existsSync("C:\\Windows\\System32\\user32.dll") &&
      (i = s.Library("user32.dll", {
        SetWindowPos: [
          "bool",
          ["int", "int", "int", "int", "int", "int", "uint"],
        ],
      })),
      (e.exports = i);
  },
  function (e, t, n) {
    const s = n(14);
    e.exports = function (e) {
      let t = Buffer.from(e);
      return (t.type = s.types.int), t.deref();
    };
  },
  function (e, t, n) {
    const s = n(286);
    const o = new (class {
      constructor() {
        this.timingList = [];
      }
      add(e, t, n = -1, o) {
        let i,
          r = this;
        if (r.timingList.find((t) => t.name === e)) return;
        r.timingList.push({ name: e, count: n }), (i = t);
        let a = s.schedule(i, function () {
            let t = r.timingList.findIndex((t) => t.name === e);
            if (t >= 0)
              if (r.timingList[t].count > 0) {
                let e = r.timingList[t].count - 1;
                (r.timingList[t].count = e),
                  0 === r.timingList[t].count &&
                    (r.timingList[t].jobInstance.destroy(),
                    r.timingList.splice(t, 1)),
                  o(e);
              } else o();
          }),
          c = r.timingList.findIndex((t) => t.name === e);
        r.timingList[c].jobInstance = a;
      }
      delete(e) {
        let t = this.timingList.findIndex((t) => t.name === e);
        t > -1 &&
          (this.timingList[t].jobInstance.destroy(),
          this.timingList.splice(t, 1));
      }
    })();
    e.exports = o;
  },
  function (e, t, n) {
    const s = n(175),
      { app: o } = n(0),
      i = n(181);
    o.on("before-quit", () => {
      s.StopMonitor();
    }),
      (e.exports = { rpcDiscover: s, dllForHookBoard: i });
  },
  function (e, t, n) {
    "use strict";
    const s = n(17).fromPromise,
      o = n(52);
    e.exports = {
      pathExists: s(function (e) {
        return o
          .access(e)
          .then(() => !0)
          .catch(() => !1);
      }),
      pathExistsSync: o.existsSync,
    };
  },
  function (e, t) {
    e.exports = {
      SCREENLOCK: "SCREENLOCK",
      SCHOOLANNOUNCEMENT: "SCHOOLANNOUNCEMENT",
      LIVE: "LIVE",
      SCREENSAVER: "SCREENSAVER",
      POPUP_NOTIFICATION: "POPUP_NOTIFICATION",
      NEWS_PLAYER: "NEWS_PLAYER",
    };
  },
  function (e, t, n) {
    const s = n(7),
      o = "waiting",
      i = "running",
      r = "pause";
    const a = new (class {
      constructor() {
        (this.runningQueue = []),
          (this.waitingQueue = []),
          (this.tasksMaps = new Map()),
          (this.tasksDependedMaps = new Map());
      }
      enQueue(e) {
        s.info(e.taskName + "指令入队"),
          this.tasksMaps.set(e.taskName, Object.assign({}, e, { state: o })),
          this.setDependedMaps(e.taskName, e.taskDependencies, !0),
          this.checkTaskCanRun(e.taskName)
            ? (this.sortQueue(e.taskName), this.runTask(e.taskName))
            : this.addToWaiting(e.taskName);
      }
      setDependedMaps(e, t, n) {
        if (t && 0 !== t.length)
          for (let s = 0; s < t.length; s++) {
            let o = this.tasksDependedMaps.get(t[s]),
              i = o ? [...o] : [];
            n
              ? i.includes(e) || i.push(e)
              : i.includes(e) && i.splice(i.indexOf(e), 1),
              0 === i.length
                ? this.tasksDependedMaps.delete(t[s])
                : this.tasksDependedMaps.set(t[s], i);
          }
      }
      checkTaskCanRun(e) {
        let t = this.tasksMaps.get(e),
          n = t.taskDependencies,
          s = !t.dependenedNotRequired;
        for (let e = 0; e < n.length; e++) {
          if (this.tasksMaps.has(n[e]) && s) return !1;
          if (!s && !this.tasksMaps.has(n[e])) return !0;
        }
        return !!s;
      }
      runTask(e) {
        let t = this.tasksMaps.get(e);
        this.runningQueue.push(e),
          this.waitingQueue.includes(e) &&
            this.waitingQueue.splice(this.waitingQueue.indexOf(e), 1);
        try {
          t.state === o
            ? (s.info(e + "指令开始执行"), t.startTask())
            : t.state === r && (s.info(e + "指令继续执行"), t.coutinueTask());
        } catch (e) {
          t.error(e);
        }
        this.tasksMaps.set(t.taskName, Object.assign({}, t, { state: i }));
      }
      addToWaiting(e) {
        let t = this.tasksMaps.get(e);
        if (this.runningQueue.includes(e)) {
          this.runningQueue.splice(this.runningQueue.indexOf(e), 1);
          try {
            s.info(e + "指令暂停执行"), t.pauseTask();
          } catch (e) {
            t.error(e);
          }
        } else s.info(e + "指令等待执行");
        this.waitingQueue.push(e),
          this.tasksMaps.set(t.taskName, Object.assign({}, t, { state: o }));
      }
      outQueue(e) {
        let t = this.tasksMaps.get(e);
        t &&
          (this.setDependedMaps(t.taskName, t.taskDependencies, !1),
          this.tasksMaps.delete(e),
          s.info(t.taskName + "指令出队"),
          t.state === i
            ? (this.runningQueue.splice(this.runningQueue.indexOf(e), 1),
              this.sortQueue(e))
            : this.waitingQueue.splice(this.waitingQueue.indexOf(e), 1),
          t.forceCloseTaskList &&
            t.forceCloseTaskList.map((e) => {
              this.forceCloseTask(e);
            }));
      }
      forceCloseTask(e) {
        let t = this.tasksMaps.get(e);
        t && (console.log(t), t.closedTask());
      }
      sortQueue(e) {
        if (!this.tasksDependedMaps.has(e)) return;
        let t = this.tasksDependedMaps.get(e);
        for (let e = 0; e < t.length; e++)
          this.checkTaskCanRun(t[e])
            ? this.runTask(t[e])
            : this.addToWaiting(t[e]);
      }
      checkTaskIsPending(e) {
        return !!this.tasksMaps.get(e);
      }
    })();
    e.exports = a;
  },
  function (e, t, n) {
    const s = n(3),
      o = n(301),
      i = n(302),
      { dllForHookBoard: r } = n(29),
      a = n(7),
      c = n(23),
      l = n(2),
      u = n(32),
      d = n(31),
      h = n(55),
      f = n(56),
      p = n(28),
      g = 1211,
      w = 1215,
      m = 1,
      y = 0,
      b = 1,
      S = 2,
      v = 1,
      E = "admin",
      _ = (e) => e / 1920;
    const T = new (class {
      constructor() {
        (this.message = null),
          (this.password = ""),
          (this.windows = []),
          (this.feedBackLock = !1),
          (this.startLock = this.startLock.bind(this)),
          (this.closeWindow = this.closeWindow.bind(this));
      }
      onMessage(e) {
        e.messageType === g &&
          (e.data.screenLockStatus === m
            ? this.startLockTask(!1, e.data)
            : e.data.screenLockStatus === y &&
              (this.message || a.error(e, "解锁指令异常，不存在锁屏"),
              this.stopLockTask({
                actionOperator: v,
                operationLogId: e.data.operationLogId,
              }))),
          e.messageType === w && l.share("screenLockSource", e.data);
      }
      startLockTask(e, t) {
        this.message ||
          ((this.message = e
            ? { operationLogId: "0", screenLockStatus: 1 }
            : t),
          u.enQueue({
            taskName: d.SCREENLOCK,
            taskDependencies: [d.LIVE, d.SCHOOLANNOUNCEMENT, d.SCREENSAVER],
            startTask: this.startLock,
            pauseTask: this.closeWindow,
            coutinueTask: this.startLock,
            forceCloseTaskList: [d.SCREENSAVER],
            error: () => {
              u.outQueue(d.SCREENLOCK);
            },
          })),
          (this.message = e ? { operationLogId: "0", screenLockStatus: 1 } : t),
          o({
            status: b,
            operationLogId: this.message.operationLogId,
            tslKey: "lockStreamControl",
          });
      }
      stopLockTask(e) {
        p.delete("SCREEN_LOCK"),
          l.share("SCREEN_LOCK_FEEDBACK", 0),
          l.setData({ SCREEN_LOCK_ERROR_COUNT: 0 }),
          i({
            status: S,
            actionOperator: e.actionOperator,
            tslKey: "unlockStreamControl",
            operationLogId: e.operationLogId,
          }),
          (this.message = null),
          this.closeWindow(),
          u.outQueue(d.SCREENLOCK);
      }
      userLock() {
        this.startLockTask(!0);
      }
      unlockAction(e = 1) {
        this.stopLockTask({ actionOperator: e, operationLogId: "0" });
      }
      startLock() {
        const { screen: e } = n(0);
        let t = e.getAllDisplays();
        a.info("锁屏任务开始", t), "win7" === l.getData("systemType") && h();
        try {
          for (let e = 0; e < t.length; e++) {
            let n = _(t[e].bounds.width);
            l.share("setZoomFactor", n, "screenLock_" + e);
            let o = s.addOne("screenLock", "screenLock_" + e, {
              mode: this.message.mode === E ? "admin" : "normal",
            });
            this.windows.push("screenLock_" + e),
              o.setBounds({
                width: t[e].bounds.width,
                height: t[e].bounds.height,
                x: t[e].bounds.x,
                y: t[e].bounds.y,
              }),
              o.on("close", () => {
                a.error("screenLock_" + e + "窗口崩溃了"),
                  setTimeout(() => {
                    this.closeWindow(), this.startLock();
                  }, 0);
              }),
              o.show();
          }
          c.addListener(() => {
            setTimeout(() => {
              this.reSetLockWindow();
            }, 1e3);
          });
        } catch (e) {
          console.log("error", e);
        }
      }
      reSetLockWindow() {
        const { screen: e } = n(0);
        let t = e.getAllDisplays();
        if (this.message)
          for (let e = 0; e < t.length; e++) {
            let n = s.getInstance("screenLock_" + e),
              o = _(t[e].bounds.width);
            l.share("setZoomFactor", o, "screenLock_" + e),
              n &&
                n.isDestroyed() &&
                (s.clearInstance("screenLock_" + e), (n = null)),
              n ||
                ((n = s.addOne("screenLock", "screenLock_" + e, {
                  mode: this.message.mode === E ? "admin" : "normal",
                })),
                this.windows.includes("screenLock_" + e) ||
                  this.windows.push("screenLock_" + e),
                n.on("close", () => {
                  a.error("screenLock_" + e + "窗口崩溃了"),
                    setTimeout(() => {
                      this.closeWindow(), this.startLock();
                    }, 0);
                })),
              n.setBounds({
                width: t[e].bounds.width,
                height: t[e].bounds.height,
                x: t[e].bounds.x,
                y: t[e].bounds.y,
              }),
              n.show();
          }
      }
      closeWindow() {
        for (let e = 0; e < this.windows.length; e++)
          s.destroy(this.windows[e]);
        "win7" === l.getData("systemType") && f(),
          r.UnHookKeyBoard(),
          (this.windows = []);
      }
      serverDisconnect() {
        u.outQueue(d.SCREENLOCK);
      }
    })();
    e.exports = T;
  },
  function (e, t, n) {
    "use strict";
    const s = n(13),
      o = n(10)("log4js:configuration"),
      i = [],
      r = (e) => !e,
      a = (e) => e && "object" == typeof e && !Array.isArray(e),
      c = (e, t, n) => {
        (Array.isArray(t) ? t : [t]).forEach((t) => {
          if (t)
            throw new Error(
              `Problem with log4js configuration: (${s.inspect(e, {
                depth: 5,
              })}) - ` + n
            );
        });
      };
    e.exports = {
      configure: (e) => {
        o("New configuration to be validated: ", e),
          c(e, r(a(e)), "must be an object."),
          o(`Calling configuration listeners (${i.length})`),
          i.forEach((t) => t(e)),
          o("Configuration finished.");
      },
      addListener: (e) => {
        i.push(e), o("Added listener, listeners now " + i.length);
      },
      throwExceptionIf: c,
      anObject: a,
      anInteger: (e) => e && "number" == typeof e && Number.isInteger(e),
      validIdentifier: (e) => /^[A-Za-z][A-Za-z0-9_]*$/g.test(e),
      not: r,
    };
  },
  function (e, t, n) {
    "use strict";
    const s = n(34),
      o = [
        "white",
        "grey",
        "black",
        "blue",
        "cyan",
        "green",
        "magenta",
        "red",
        "yellow",
      ];
    class i {
      constructor(e, t, n) {
        (this.level = e), (this.levelStr = t), (this.colour = n);
      }
      toString() {
        return this.levelStr;
      }
      static getLevel(e, t) {
        return e
          ? e instanceof i
            ? e
            : (e instanceof Object && e.levelStr && (e = e.levelStr),
              "string" == typeof e
                ? i[e.toUpperCase()] || t
                : i.getLevel(e.toString()))
          : t;
      }
      static addLevels(e) {
        if (e) {
          Object.keys(e).forEach((t) => {
            (i[t.toUpperCase()] = new i(
              e[t].value,
              t.toUpperCase(),
              e[t].colour
            )),
              i.levels.push(i[t.toUpperCase()]);
          }),
            i.levels.sort((e, t) => e.level - t.level);
        }
      }
      isLessThanOrEqualTo(e) {
        return (
          "string" == typeof e && (e = i.getLevel(e)), this.level <= e.level
        );
      }
      isGreaterThanOrEqualTo(e) {
        return (
          "string" == typeof e && (e = i.getLevel(e)), this.level >= e.level
        );
      }
      isEqualTo(e) {
        return (
          "string" == typeof e && (e = i.getLevel(e)), this.level === e.level
        );
      }
    }
    (i.levels = []),
      i.addLevels({
        ALL: { value: Number.MIN_VALUE, colour: "grey" },
        TRACE: { value: 5e3, colour: "blue" },
        DEBUG: { value: 1e4, colour: "cyan" },
        INFO: { value: 2e4, colour: "green" },
        WARN: { value: 3e4, colour: "yellow" },
        ERROR: { value: 4e4, colour: "red" },
        FATAL: { value: 5e4, colour: "magenta" },
        MARK: { value: 9007199254740992, colour: "grey" },
        OFF: { value: Number.MAX_VALUE, colour: "grey" },
      }),
      s.addListener((e) => {
        const t = e.levels;
        if (t) {
          s.throwExceptionIf(
            e,
            s.not(s.anObject(t)),
            "levels must be an object"
          );
          Object.keys(t).forEach((n) => {
            s.throwExceptionIf(
              e,
              s.not(s.validIdentifier(n)),
              `level name "${n}" is not a valid identifier (must start with a letter, only contain A-Z,a-z,0-9,_)`
            ),
              s.throwExceptionIf(
                e,
                s.not(s.anObject(t[n])),
                `level "${n}" must be an object`
              ),
              s.throwExceptionIf(
                e,
                s.not(t[n].value),
                `level "${n}" must have a 'value' property`
              ),
              s.throwExceptionIf(
                e,
                s.not(s.anInteger(t[n].value)),
                `level "${n}".value must have an integer value`
              ),
              s.throwExceptionIf(
                e,
                s.not(t[n].colour),
                `level "${n}" must have a 'colour' property`
              ),
              s.throwExceptionIf(
                e,
                s.not(o.indexOf(t[n].colour) > -1),
                `level "${n}".colour must be one of ${o.join(", ")}`
              );
          });
        }
      }),
      s.addListener((e) => {
        i.addLevels(e.levels);
      }),
      (e.exports = i);
  },
  function (e, t, n) {
    "use strict";
    var s = n(42),
      o =
        Object.keys ||
        function (e) {
          var t = [];
          for (var n in e) t.push(n);
          return t;
        };
    e.exports = d;
    var i = Object.create(n(39));
    i.inherits = n(40);
    var r = n(85),
      a = n(88);
    i.inherits(d, r);
    for (var c = o(a.prototype), l = 0; l < c.length; l++) {
      var u = c[l];
      d.prototype[u] || (d.prototype[u] = a.prototype[u]);
    }
    function d(e) {
      if (!(this instanceof d)) return new d(e);
      r.call(this, e),
        a.call(this, e),
        e && !1 === e.readable && (this.readable = !1),
        e && !1 === e.writable && (this.writable = !1),
        (this.allowHalfOpen = !0),
        e && !1 === e.allowHalfOpen && (this.allowHalfOpen = !1),
        this.once("end", h);
    }
    function h() {
      this.allowHalfOpen || this._writableState.ended || s.nextTick(f, this);
    }
    function f(e) {
      e.end();
    }
    Object.defineProperty(d.prototype, "writableHighWaterMark", {
      enumerable: !1,
      get: function () {
        return this._writableState.highWaterMark;
      },
    }),
      Object.defineProperty(d.prototype, "destroyed", {
        get: function () {
          return (
            void 0 !== this._readableState &&
            void 0 !== this._writableState &&
            this._readableState.destroyed &&
            this._writableState.destroyed
          );
        },
        set: function (e) {
          void 0 !== this._readableState &&
            void 0 !== this._writableState &&
            ((this._readableState.destroyed = e),
            (this._writableState.destroyed = e));
        },
      }),
      (d.prototype._destroy = function (e, t) {
        this.push(null), this.end(), s.nextTick(t, e);
      });
  },
  function (e, t, n) {
    "use strict";
    e.exports = {
      BINARY_TYPES: ["nodebuffer", "arraybuffer", "fragments"],
      GUID: "258EAFA5-E914-47DA-95CA-C5AB0DC85B11",
      kStatusCode: Symbol("status-code"),
      kWebSocket: Symbol("websocket"),
      EMPTY_BUFFER: Buffer.alloc(0),
      NOOP: () => {},
    };
  },
  function (e, t) {
    e.exports = require("stream");
  },
  function (e, t, n) {
    function s(e) {
      return Object.prototype.toString.call(e);
    }
    (t.isArray = function (e) {
      return Array.isArray ? Array.isArray(e) : "[object Array]" === s(e);
    }),
      (t.isBoolean = function (e) {
        return "boolean" == typeof e;
      }),
      (t.isNull = function (e) {
        return null === e;
      }),
      (t.isNullOrUndefined = function (e) {
        return null == e;
      }),
      (t.isNumber = function (e) {
        return "number" == typeof e;
      }),
      (t.isString = function (e) {
        return "string" == typeof e;
      }),
      (t.isSymbol = function (e) {
        return "symbol" == typeof e;
      }),
      (t.isUndefined = function (e) {
        return void 0 === e;
      }),
      (t.isRegExp = function (e) {
        return "[object RegExp]" === s(e);
      }),
      (t.isObject = function (e) {
        return "object" == typeof e && null !== e;
      }),
      (t.isDate = function (e) {
        return "[object Date]" === s(e);
      }),
      (t.isError = function (e) {
        return "[object Error]" === s(e) || e instanceof Error;
      }),
      (t.isFunction = function (e) {
        return "function" == typeof e;
      }),
      (t.isPrimitive = function (e) {
        return (
          null === e ||
          "boolean" == typeof e ||
          "number" == typeof e ||
          "string" == typeof e ||
          "symbol" == typeof e ||
          void 0 === e
        );
      }),
      (t.isBuffer = n(61).Buffer.isBuffer);
  },
  function (e, t, n) {
    try {
      var s = n(13);
      if ("function" != typeof s.inherits) throw "";
      e.exports = s.inherits;
    } catch (t) {
      e.exports = n(159);
    }
  },
  function (e, t, n) {
    "use strict";
    const s = n(62),
      o = n(97),
      i = n(10)("ffi:ForeignFunction"),
      r = n(15),
      a = n(14);
    e.exports = function (e, t, n, c) {
      i("creating new ForeignFunction", e),
        r(Buffer.isBuffer(e), "expected Buffer as first argument"),
        r(!!t, 'expected a return "type" object as the second argument'),
        r(
          Array.isArray(n),
          'expected Array of arg "type" objects as the third argument'
        ),
        (t = a.coerceType(t)),
        (n = n.map(a.coerceType));
      const l = s(t, n, c);
      return o(l, e, t, n);
    };
  },
  function (e, t, n) {
    "use strict";
    "undefined" == typeof process ||
    !process.version ||
    0 === process.version.indexOf("v0.") ||
    (0 === process.version.indexOf("v1.") &&
      0 !== process.version.indexOf("v1.8."))
      ? (e.exports = {
          nextTick: function (e, t, n, s) {
            if ("function" != typeof e)
              throw new TypeError('"callback" argument must be a function');
            var o,
              i,
              r = arguments.length;
            switch (r) {
              case 0:
              case 1:
                return process.nextTick(e);
              case 2:
                return process.nextTick(function () {
                  e.call(null, t);
                });
              case 3:
                return process.nextTick(function () {
                  e.call(null, t, n);
                });
              case 4:
                return process.nextTick(function () {
                  e.call(null, t, n, s);
                });
              default:
                for (o = new Array(r - 1), i = 0; i < o.length; )
                  o[i++] = arguments[i];
                return process.nextTick(function () {
                  e.apply(null, o);
                });
            }
          },
        })
      : (e.exports = process);
  },
  function (e, t) {
    e.exports = require("events");
  },
  function (e, t, n) {
    var s = n(61),
      o = s.Buffer;
    function i(e, t) {
      for (var n in e) t[n] = e[n];
    }
    function r(e, t, n) {
      return o(e, t, n);
    }
    o.from && o.alloc && o.allocUnsafe && o.allocUnsafeSlow
      ? (e.exports = s)
      : (i(s, t), (t.Buffer = r)),
      i(o, r),
      (r.from = function (e, t, n) {
        if ("number" == typeof e)
          throw new TypeError("Argument must not be a number");
        return o(e, t, n);
      }),
      (r.alloc = function (e, t, n) {
        if ("number" != typeof e)
          throw new TypeError("Argument must be a number");
        var s = o(e);
        return (
          void 0 !== t
            ? "string" == typeof n
              ? s.fill(t, n)
              : s.fill(t)
            : s.fill(0),
          s
        );
      }),
      (r.allocUnsafe = function (e) {
        if ("number" != typeof e)
          throw new TypeError("Argument must be a number");
        return o(e);
      }),
      (r.allocUnsafeSlow = function (e) {
        if ("number" != typeof e)
          throw new TypeError("Argument must be a number");
        return s.SlowBuffer(e);
      });
  },
  function (e, t) {
    e.exports = require("child_process");
  },
  function (e, t, n) {
    "use strict";
    const s = n(14),
      o = (n(15), n(10)("ffi:ffi")),
      i = (n(94)(s), n(21));
    [
      "FFI_TYPES",
      "FFI_OK",
      "FFI_BAD_TYPEDEF",
      "FFI_BAD_ABI",
      "FFI_DEFAULT_ABI",
      "FFI_FIRST_ABI",
      "FFI_LAST_ABI",
      "FFI_SYSV",
      "FFI_UNIX64",
      "FFI_WIN64",
      "FFI_VFP",
      "FFI_STDCALL",
      "FFI_THISCALL",
      "FFI_FASTCALL",
      "RTLD_LAZY",
      "RTLD_NOW",
      "RTLD_LOCAL",
      "RTLD_GLOBAL",
      "RTLD_NOLOAD",
      "RTLD_NODELETE",
      "RTLD_FIRST",
      "RTLD_NEXT",
      "RTLD_DEFAULT",
      "RTLD_SELF",
      "RTLD_MAIN_ONLY",
      "FFI_MS_CDECL",
    ].forEach((e) => {
      if (!i.hasOwnProperty(e))
        return o("skipping exporting of non-existant property", e);
      const n = Object.getOwnPropertyDescriptor(i, e);
      Object.defineProperty(t, e, n);
    }),
      Object.keys(i.FFI_TYPES).forEach((e) => {
        const t = i.FFI_TYPES[e];
        (t.name = e), "pointer" !== e && (s.types[e].ffi_type = t);
      }),
      (s.types.size_t.ffi_type = i.FFI_TYPES.pointer);
    switch (
      (((s.types.CString || s.types.Utf8String).ffi_type = i.FFI_TYPES.pointer),
      (s.types.Object.ffi_type = i.FFI_TYPES.pointer),
      s.sizeof.long)
    ) {
      case 4:
        (s.types.ulong.ffi_type = i.FFI_TYPES.uint32),
          (s.types.long.ffi_type = i.FFI_TYPES.int32);
        break;
      case 8:
        (s.types.ulong.ffi_type = i.FFI_TYPES.uint64),
          (s.types.long.ffi_type = i.FFI_TYPES.int64);
        break;
      default:
        throw new Error('unsupported "long" size: ' + s.sizeof.long);
    }
    (t.types = s.types),
      (t.version = i.version),
      (t.CIF = n(62)),
      (t.CIF_var = n(95)),
      (t.Function = n(178)),
      (t.ForeignFunction = n(41)),
      (t.VariadicForeignFunction = n(98)),
      (t.DynamicLibrary = n(63)),
      (t.Library = n(179)),
      (t.Callback = n(96)),
      (t.errno = n(180)),
      (t.ffiType = n(47)),
      (t.LIB_EXT = t.Library.EXT),
      (t.FFI_TYPE = t.ffiType.FFI_TYPE);
  },
  function (e, t, n) {
    "use strict";
    const s = n(14),
      o = n(15),
      i = n(10)("ffi:types"),
      r = n(94)(s),
      a = n(21),
      c = (u.FFI_TYPE = r());
    c.defineProperty("size", s.types.size_t),
      c.defineProperty("alignment", s.types.ushort),
      c.defineProperty("type", s.types.ushort);
    const l = s.refType(s.refType(c));
    function u(e) {
      let t;
      if (
        ((e = s.coerceType(e)),
        i("Type()", e.name || e),
        o(e.indirection >= 1, 'invalid "type" given: ' + (e.name || e)),
        (t = 1 === e.indirection ? e.ffi_type : a.FFI_TYPES.pointer),
        !t && e.type && (t = a.FFI_TYPES.pointer),
        !t && e.fields)
      ) {
        i('creating an `ffi_type` for given "ref-struct" type');
        const o = e.fields,
          r = Object.keys(o),
          a = r.length;
        let l = 0;
        const d = new c();
        let h, f;
        (d.size = 0), (d.alignment = 0), (d.type = 13);
        for (let e = 0; e < a; e++)
          (h = o[r[e]]),
            h.type.fixedLength > 0 ? (l += h.type.fixedLength) : (l += 1);
        const p = s.sizeof.pointer * (l + 1),
          g = (d.elements = Buffer.alloc(p));
        let w = 0;
        for (let e = 0; e < a; e++)
          if (((h = o[r[e]]), h.type.fixedLength > 0)) {
            f = u(h.type.type);
            for (var n = 0; n < h.type.fixedLength; n++)
              g.writePointer(f, w++ * s.sizeof.pointer);
          } else (f = u(h.type)), g.writePointer(f, w++ * s.sizeof.pointer);
        g.writePointer(s.NULL, w * s.sizeof.pointer),
          (t = e.ffi_type = d.ref());
      }
      if (!t && e.name)
        if ("CString" == e.name) t = e.ffi_type = a.FFI_TYPES.pointer;
        else {
          let n = e;
          for (; !t && n; )
            (t = n.ffi_type = a.FFI_TYPES[n.name]),
              (n = Object.getPrototypeOf(n));
        }
      return (
        o(
          t,
          "Could not determine the `ffi_type` instance for type: " +
            (e.name || e)
        ),
        i("returning `ffi_type`", t.name),
        t
      );
    }
    c.defineProperty("elements", l),
      o.strictEqual(a.FFI_TYPE_SIZE, c.size),
      (e.exports = u);
  },
  function (e, t, n) {
    const { app: s } = n(0),
      o = n(5),
      i = (n(7), n(12));
    const r = new (class {
      constructor() {
        this.getFilePath = this.getFilePath.bind(this);
      }
      getFilePath(e) {
        let t = process.env.ProgramData,
          n = s.getAppPath();
        return (!e && t.split(":").shift() === n.split(":").shift()) ||
          "system" === e
          ? o.resolve(t, "Seewo", "SeewoServiceAssistant")
          : e && "local" !== e
          ? void 0
          : o.resolve(n, "..", "localData");
      }
      mdkir(e) {
        return i.existsSync(o.dirname(e)) || this.mdkir(o.dirname(e))
          ? (i.mkdirSync(e), !0)
          : void 0;
      }
      writeFile(e, t, n, s) {
        let r = o.resolve(this.getFilePath(s), e),
          a = o.resolve(r, t + ".txt"),
          c = {};
        i.existsSync(a)
          ? (c = this.readFile(t))
          : i.existsSync(r) || this.mdkir(r);
        let l = JSON.stringify(Object.assign(c, n));
        i.writeFileSync(a, l);
      }
      readFile(e, t, n) {
        let s = o.resolve(this.getFilePath(n), e, t + ".txt");
        if (!i.existsSync(s)) return {};
        try {
          return JSON.parse(i.readFileSync(s, "utf8"));
        } catch (e) {
          return {};
        }
      }
      readFileOfFullPath(e) {
        return i.readFileSync(e, "utf8");
      }
    })();
    e.exports = r;
  },
  function (e, t) {
    e.exports = require("http");
  },
  function (e, t, n) {
    const { screen: s } = n(0),
      o = n(3),
      i = n(235),
      r = n(24),
      a = n(2),
      c = n(23),
      l = n(19),
      u = n(244),
      d = n(5),
      h = d.resolve(
        process.env.ProgramData,
        "Seewo",
        "SeewoServiceAssistant",
        "seewoDesktop.json"
      );
    const f = new (class {
      constructor() {
        this.windows = [];
      }
      windowControl(e) {
        const t = s.getAllDisplays();
        for (let n = 0; n < t.length; n++) {
          let s,
            i = "seewoDesktop_" + n,
            c = t[n].bounds.width / 1920;
          a.share("setZoomFactor", c, i),
            a.share("setZoomFactor", c, "seewoDesktopSearch_" + i),
            this.windows.includes(i)
              ? (s = o.getInstance(i))
              : ((s = o.addOne("seewoDesktop", i)),
                this.windows.push(i),
                s.on("close", () => {
                  this.closeDesktop(), this.windowControl(!0);
                })),
            0 === n && e && r.startHideTaskbar(s.getNativeWindowHandle()),
            s.setBounds({
              width: t[n].bounds.width,
              height: t[n].bounds.height,
              x: t[n].bounds.x,
              y: t[n].bounds.y,
            }),
            setTimeout(() => {
              s.setBounds({
                width: t[n].bounds.width,
                height: t[n].bounds.height,
                x: t[n].bounds.x,
                y: t[n].bounds.y,
              });
            }, 1e3);
        }
      }
      startDesktop(e) {
        let t = this.getSeewoDesktopSetting();
        (e && t.poweronDesktopCloseState) ||
          (a.share("poweronDesktopCloseState", {
            poweronDesktopCloseState: !!t.poweronDesktopCloseState,
          }),
          i.startLinkServer(),
          o.checkWindowExist("desktopMinier")
            ? o.hide("desktopMinier")
            : o.checkWindowExist("desktopAssistant") &&
              (o.hide("desktopAssistant"), l.hideSlot("desktopAssistant")),
          a.setData({ desktopExist: !0 }),
          this.windowControl(!0),
          c.removeEvent("seewoDesktop"),
          c.addListener(() => {
            this.windowControl();
          }, "seewoDesktop"));
      }
      stopDesktop() {
        this.closeDesktop(),
          a.setData({ desktopExist: !1 }),
          c.removeEvent("seewoDesktop");
      }
      closeDesktop() {
        for (let e = 0; e < this.windows.length; e++)
          o.destroy(this.windows[e]),
            o.destroy("seewoDesktopSearch_" + this.windows[e]);
        this.windows = [];
      }
      getSeewoDesktopSetting() {
        let e = {};
        if (u.existsSync(h))
          try {
            e = JSON.parse(u.readFileSync(h));
          } catch (t) {
            e = {};
          }
        return e;
      }
      setSeewoDesktopSetting(e) {
        let t = this.getSeewoDesktopSetting(),
          n = Object.assign({}, t, e);
        u.writeFileSync(h, JSON.stringify(n));
      }
    })();
    e.exports = f;
  },
  function (e, t, n) {
    "use strict";
    const s = n(239),
      o = n(84),
      i = n(67),
      { kStatusCode: r, NOOP: a } = n(37),
      c = Buffer.from([0, 0, 255, 255]),
      l = Buffer.from([0]),
      u = Symbol("permessage-deflate"),
      d = Symbol("total-length"),
      h = Symbol("callback"),
      f = Symbol("buffers"),
      p = Symbol("error");
    let g;
    function w(e) {
      this[f].push(e), (this[d] += e.length);
    }
    function m(e) {
      (this[d] += e.length),
        this[u]._maxPayload < 1 || this[d] <= this[u]._maxPayload
          ? this[f].push(e)
          : ((this[p] = new RangeError("Max payload size exceeded")),
            (this[p][r] = 1009),
            this.removeListener("data", m),
            this.reset());
    }
    function y(e) {
      (this[u]._inflate = null), (e[r] = 1007), this[h](e);
    }
    e.exports = class {
      constructor(e, t, n) {
        if (
          ((this._maxPayload = 0 | n),
          (this._options = e || {}),
          (this._threshold =
            void 0 !== this._options.threshold
              ? this._options.threshold
              : 1024),
          (this._isServer = !!t),
          (this._deflate = null),
          (this._inflate = null),
          (this.params = null),
          !g)
        ) {
          const e =
            void 0 !== this._options.concurrencyLimit
              ? this._options.concurrencyLimit
              : 10;
          g = new s({ concurrency: e });
        }
      }
      static get extensionName() {
        return "permessage-deflate";
      }
      offer() {
        const e = {};
        return (
          this._options.serverNoContextTakeover &&
            (e.server_no_context_takeover = !0),
          this._options.clientNoContextTakeover &&
            (e.client_no_context_takeover = !0),
          this._options.serverMaxWindowBits &&
            (e.server_max_window_bits = this._options.serverMaxWindowBits),
          this._options.clientMaxWindowBits
            ? (e.client_max_window_bits = this._options.clientMaxWindowBits)
            : null == this._options.clientMaxWindowBits &&
              (e.client_max_window_bits = !0),
          e
        );
      }
      accept(e) {
        return (
          (e = this.normalizeParams(e)),
          (this.params = this._isServer
            ? this.acceptAsServer(e)
            : this.acceptAsClient(e)),
          this.params
        );
      }
      cleanup() {
        this._inflate && (this._inflate.close(), (this._inflate = null)),
          this._deflate && (this._deflate.close(), (this._deflate = null));
      }
      acceptAsServer(e) {
        const t = this._options,
          n = e.find(
            (e) =>
              !(
                (!1 === t.serverNoContextTakeover &&
                  e.server_no_context_takeover) ||
                (e.server_max_window_bits &&
                  (!1 === t.serverMaxWindowBits ||
                    ("number" == typeof t.serverMaxWindowBits &&
                      t.serverMaxWindowBits > e.server_max_window_bits))) ||
                ("number" == typeof t.clientMaxWindowBits &&
                  !e.client_max_window_bits)
              )
          );
        if (!n) throw new Error("None of the extension offers can be accepted");
        return (
          t.serverNoContextTakeover && (n.server_no_context_takeover = !0),
          t.clientNoContextTakeover && (n.client_no_context_takeover = !0),
          "number" == typeof t.serverMaxWindowBits &&
            (n.server_max_window_bits = t.serverMaxWindowBits),
          "number" == typeof t.clientMaxWindowBits
            ? (n.client_max_window_bits = t.clientMaxWindowBits)
            : (!0 !== n.client_max_window_bits &&
                !1 !== t.clientMaxWindowBits) ||
              delete n.client_max_window_bits,
          n
        );
      }
      acceptAsClient(e) {
        const t = e[0];
        if (
          !1 === this._options.clientNoContextTakeover &&
          t.client_no_context_takeover
        )
          throw new Error('Unexpected parameter "client_no_context_takeover"');
        if (t.client_max_window_bits) {
          if (
            !1 === this._options.clientMaxWindowBits ||
            ("number" == typeof this._options.clientMaxWindowBits &&
              t.client_max_window_bits > this._options.clientMaxWindowBits)
          )
            throw new Error(
              'Unexpected or invalid parameter "client_max_window_bits"'
            );
        } else
          "number" == typeof this._options.clientMaxWindowBits &&
            (t.client_max_window_bits = this._options.clientMaxWindowBits);
        return t;
      }
      normalizeParams(e) {
        return (
          e.forEach((e) => {
            Object.keys(e).forEach((t) => {
              var n = e[t];
              if (n.length > 1)
                throw new Error(
                  `Parameter "${t}" must have only a single value`
                );
              if (((n = n[0]), "client_max_window_bits" === t)) {
                if (!0 !== n) {
                  const e = +n;
                  if (!Number.isInteger(e) || e < 8 || e > 15)
                    throw new TypeError(
                      `Invalid value for parameter "${t}": ${n}`
                    );
                  n = e;
                } else if (!this._isServer)
                  throw new TypeError(
                    `Invalid value for parameter "${t}": ${n}`
                  );
              } else if ("server_max_window_bits" === t) {
                const e = +n;
                if (!Number.isInteger(e) || e < 8 || e > 15)
                  throw new TypeError(
                    `Invalid value for parameter "${t}": ${n}`
                  );
                n = e;
              } else {
                if (
                  "client_no_context_takeover" !== t &&
                  "server_no_context_takeover" !== t
                )
                  throw new Error(`Unknown parameter "${t}"`);
                if (!0 !== n)
                  throw new TypeError(
                    `Invalid value for parameter "${t}": ${n}`
                  );
              }
              e[t] = n;
            });
          }),
          e
        );
      }
      decompress(e, t, n) {
        g.push((s) => {
          this._decompress(e, t, (e, t) => {
            s(), n(e, t);
          });
        });
      }
      compress(e, t, n) {
        g.push((s) => {
          this._compress(e, t, (e, t) => {
            s(), n(e, t);
          });
        });
      }
      _decompress(e, t, n) {
        const s = this._isServer ? "client" : "server";
        if (!this._inflate) {
          const e = s + "_max_window_bits",
            t =
              "number" != typeof this.params[e]
                ? o.Z_DEFAULT_WINDOWBITS
                : this.params[e];
          (this._inflate = o.createInflateRaw(
            Object.assign({}, this._options.zlibInflateOptions, {
              windowBits: t,
            })
          )),
            (this._inflate[u] = this),
            (this._inflate[d] = 0),
            (this._inflate[f] = []),
            this._inflate.on("error", y),
            this._inflate.on("data", m);
        }
        (this._inflate[h] = n),
          this._inflate.write(e),
          t && this._inflate.write(c),
          this._inflate.flush(() => {
            const e = this._inflate[p];
            if (e)
              return this._inflate.close(), (this._inflate = null), void n(e);
            const o = i.concat(this._inflate[f], this._inflate[d]);
            t && this.params[s + "_no_context_takeover"]
              ? (this._inflate.close(), (this._inflate = null))
              : ((this._inflate[d] = 0), (this._inflate[f] = [])),
              n(null, o);
          });
      }
      _compress(e, t, n) {
        if (!e || 0 === e.length) return void process.nextTick(n, null, l);
        const s = this._isServer ? "server" : "client";
        if (!this._deflate) {
          const e = s + "_max_window_bits",
            t =
              "number" != typeof this.params[e]
                ? o.Z_DEFAULT_WINDOWBITS
                : this.params[e];
          (this._deflate = o.createDeflateRaw(
            Object.assign({}, this._options.zlibDeflateOptions, {
              windowBits: t,
            })
          )),
            (this._deflate[d] = 0),
            (this._deflate[f] = []),
            this._deflate.on("error", a),
            this._deflate.on("data", w);
        }
        this._deflate.write(e),
          this._deflate.flush(o.Z_SYNC_FLUSH, () => {
            if (this._deflate) {
              var e = i.concat(this._deflate[f], this._deflate[d]);
              t && (e = e.slice(0, e.length - 4)),
                t && this.params[s + "_no_context_takeover"]
                  ? (this._deflate.close(), (this._deflate = null))
                  : ((this._deflate[d] = 0), (this._deflate[f] = [])),
                n(null, e);
            }
          });
      }
    };
  },
  function (e, t, n) {
    "use strict";
    const s = n(17).fromCallback,
      o = n(16),
      i = [
        "access",
        "appendFile",
        "chmod",
        "chown",
        "close",
        "copyFile",
        "fchmod",
        "fchown",
        "fdatasync",
        "fstat",
        "fsync",
        "ftruncate",
        "futimes",
        "lchmod",
        "lchown",
        "link",
        "lstat",
        "mkdir",
        "mkdtemp",
        "open",
        "opendir",
        "readdir",
        "readFile",
        "readlink",
        "realpath",
        "rename",
        "rm",
        "rmdir",
        "stat",
        "symlink",
        "truncate",
        "unlink",
        "utimes",
        "writeFile",
      ].filter((e) => "function" == typeof o[e]);
    Object.keys(o).forEach((e) => {
      "promises" !== e && (t[e] = o[e]);
    }),
      i.forEach((e) => {
        t[e] = s(o[e]);
      }),
      (t.exists = function (e, t) {
        return "function" == typeof t
          ? o.exists(e, t)
          : new Promise((t) => o.exists(e, t));
      }),
      (t.read = function (e, t, n, s, i, r) {
        return "function" == typeof r
          ? o.read(e, t, n, s, i, r)
          : new Promise((r, a) => {
              o.read(e, t, n, s, i, (e, t, n) => {
                if (e) return a(e);
                r({ bytesRead: t, buffer: n });
              });
            });
      }),
      (t.write = function (e, t, ...n) {
        return "function" == typeof n[n.length - 1]
          ? o.write(e, t, ...n)
          : new Promise((s, i) => {
              o.write(e, t, ...n, (e, t, n) => {
                if (e) return i(e);
                s({ bytesWritten: t, buffer: n });
              });
            });
      }),
      "function" == typeof o.writev &&
        (t.writev = function (e, t, ...n) {
          return "function" == typeof n[n.length - 1]
            ? o.writev(e, t, ...n)
            : new Promise((s, i) => {
                o.writev(e, t, ...n, (e, t, n) => {
                  if (e) return i(e);
                  s({ bytesWritten: t, buffers: n });
                });
              });
        }),
      "function" == typeof o.realpath.native &&
        (t.realpath.native = s(o.realpath.native));
  },
  function (e, t, n) {
    "use strict";
    const s = n(52),
      o = n(5),
      i = n(13),
      r = n(108)("10.5.0"),
      a = (e) => (r ? s.stat(e, { bigint: !0 }) : s.stat(e)),
      c = (e) => (r ? s.statSync(e, { bigint: !0 }) : s.statSync(e));
    function l(e, t) {
      return Promise.all([
        a(e),
        a(t).catch((e) => {
          if ("ENOENT" === e.code) return null;
          throw e;
        }),
      ]).then(([e, t]) => ({ srcStat: e, destStat: t }));
    }
    function u(e, t) {
      if (t.ino && t.dev && t.ino === e.ino && t.dev === e.dev) {
        if (r || t.ino < Number.MAX_SAFE_INTEGER) return !0;
        if (
          t.size === e.size &&
          t.mode === e.mode &&
          t.nlink === e.nlink &&
          t.atimeMs === e.atimeMs &&
          t.mtimeMs === e.mtimeMs &&
          t.ctimeMs === e.ctimeMs &&
          t.birthtimeMs === e.birthtimeMs
        )
          return !0;
      }
      return !1;
    }
    function d(e, t) {
      const n = o
          .resolve(e)
          .split(o.sep)
          .filter((e) => e),
        s = o
          .resolve(t)
          .split(o.sep)
          .filter((e) => e);
      return n.reduce((e, t, n) => e && s[n] === t, !0);
    }
    function h(e, t, n) {
      return `Cannot ${n} '${e}' to a subdirectory of itself, '${t}'.`;
    }
    e.exports = {
      checkPaths: function (e, t, n, s) {
        i.callbackify(l)(e, t, (o, i) => {
          if (o) return s(o);
          const { srcStat: r, destStat: a } = i;
          return a && u(r, a)
            ? s(new Error("Source and destination must not be the same."))
            : r.isDirectory() && d(e, t)
            ? s(new Error(h(e, t, n)))
            : s(null, { srcStat: r, destStat: a });
        });
      },
      checkPathsSync: function (e, t, n) {
        const { srcStat: s, destStat: o } = (function (e, t) {
          let n;
          const s = c(e);
          try {
            n = c(t);
          } catch (e) {
            if ("ENOENT" === e.code) return { srcStat: s, destStat: null };
            throw e;
          }
          return { srcStat: s, destStat: n };
        })(e, t);
        if (o && u(s, o))
          throw new Error("Source and destination must not be the same.");
        if (s.isDirectory() && d(e, t)) throw new Error(h(e, t, n));
        return { srcStat: s, destStat: o };
      },
      checkParentPaths: function e(t, n, i, a, c) {
        const l = o.resolve(o.dirname(t)),
          d = o.resolve(o.dirname(i));
        if (d === l || d === o.parse(d).root) return c();
        const f = (s, o) =>
          s
            ? "ENOENT" === s.code
              ? c()
              : c(s)
            : u(n, o)
            ? c(new Error(h(t, i, a)))
            : e(t, n, d, a, c);
        r ? s.stat(d, { bigint: !0 }, f) : s.stat(d, f);
      },
      checkParentPathsSync: function e(t, n, s, i) {
        const r = o.resolve(o.dirname(t)),
          a = o.resolve(o.dirname(s));
        if (a === r || a === o.parse(a).root) return;
        let l;
        try {
          l = c(a);
        } catch (e) {
          if ("ENOENT" === e.code) return;
          throw e;
        }
        if (u(n, l)) throw new Error(h(t, s, i));
        return e(t, n, a, i);
      },
      isSrcSubdir: d,
    };
  },
  function (e, t, n) {
    "use strict";
    const s = n(17).fromCallback,
      o = n(253);
    e.exports = { remove: s(o), removeSync: o.sync };
  },
  function (e, t, n) {
    const s = n(11),
      o = n(1),
      i = n(6),
      { ip: r } = o.proxyHttp;
    e.exports = function () {
      i.register(["SeewoProxyHTTP"], !1, (e) => {
        var t, n;
        (t = e.SeewoProxyHTTP),
          (n = {}),
          console.log(n),
          s(
            r,
            t,
            "/forward/SeewoHugoHttp/api/v1/screenlock/startMiniSizeWindows",
            "post",
            { ...n },
            (e) => {}
          );
      });
    };
  },
  function (e, t, n) {
    const s = n(11),
      o = n(1),
      i = n(6),
      { ip: r } = o.proxyHttp;
    e.exports = function () {
      i.register(["SeewoProxyHTTP"], !1, (e) => {
        var t, n;
        (t = e.SeewoProxyHTTP),
          (n = {}),
          console.log(n),
          s(
            r,
            t,
            "/forward/SeewoHugoHttp/api/v1/screenlock/stopMiniSizeWindows",
            "post",
            { ...n },
            (e) => {}
          );
      });
    };
  },
  function (e, t, n) {
    const s = n(3),
      { screen: o } = n(0),
      i = n(2),
      r = n(4);
    const a = new (class {
      constructor() {
        (this.windowList = {}), (this.waitList = {});
      }
      createWindow(e, t) {
        if (i.getData("CUSTOM_CONFIG").hideLightIotNotify) return;
        const { bounds: n } = o.getPrimaryDisplay();
        let r = s.addOne("deviceLink", t, { ...e, windowId: t }),
          a = 1080 / n.height,
          c = Math.ceil(n.height - 456 / a),
          l = Math.ceil(454 / a);
        i.share("setZoomFactor", 1 / a, t),
          r &&
            !r.isDestroyed() &&
            ((this.windowList[t] = r),
            r.setBounds({
              width: Math.ceil(364 / a),
              height: l,
              x: Math.ceil(n.width - 366 / a),
              y: c,
            }),
            r.show());
      }
      checkWindowExist(e) {
        return !!this.windowList[e];
      }
      addWaitWindow(e, t) {
        (this.waitList[e] = t), r("deviceLinkWindowClose", !0, e);
      }
      closeWindow(e) {
        let t = this.windowList[e];
        t && !t.isDestroyed() && (s.close(e), (this.windowList[e] = null)),
          setTimeout(() => {
            this.waitList[e] &&
              (this.createWindow(this.waitList[e], e),
              (this.waitList[e] = null));
          }, 100);
      }
    })();
    e.exports = a;
  },
  function (e, t, n) {
    const s = n(18),
      o = n(1),
      i = n(6),
      r = n(4),
      a = (n(132), n(3)),
      c = n(12),
      l = n(5),
      u = n(2),
      d = n(57),
      h = {
        PEN_INSERT: 1,
        MATCH_TIMEOUT: 2,
        MATCH_SUCCESS: 3,
        PEN_BROKEN: 4,
        MATCH_NEVER: 5,
      },
      f = 1001,
      p = 1002,
      g = 1005,
      w = 1006,
      m = "/sp20e/pairingError",
      y = l.resolve(
        process.env.ProgramData,
        "Seewo",
        "SeewoServiceAssistant",
        "smartpen.json"
      );
    const { ip: b, url: S } = o.smartPenWebsocketHost;
    let v = new (class extends s {
      constructor(e) {
        super(e),
          (this.linkState = -1),
          (this.buttons = {}),
          (this.type =
            (() => {
              if (c.existsSync(y)) {
                let e;
                try {
                  e = JSON.parse(c.readFileSync(y)).oldPenType;
                } catch (t) {
                  e = null;
                }
                return e;
              }
              return null;
            })() || "SP01"),
          (this.sendDataToWindow = this.sendDataToWindow.bind(this)),
          (this.cursorData = null),
          (this.cursorShow = !1);
      }
      createConnect() {
        super.create();
      }
      onMessage(e) {
        let t = JSON.parse(e);
        if (t.messageType === f) {
          if (t.data.state === h.MATCH_NEVER) {
            if (a.checkWindowExist("assistant"))
              r("openRouter", "SMARTPEN_ROUTER", "assistant");
            else {
              a.newOne("assistant").webContents.once("dom-ready", () => {
                r("openRouter", "SMARTPEN_ROUTER", "assistant");
              });
            }
            return;
          }
          (this.linkState = t.data.state),
            (this.type = t.data.type || this.type),
            this.sendDataToWindow("smartPenLinkState", {
              linkState: this.linkState,
              type: this.type,
            }),
            [h.PEN_BROKEN, h.MATCH_SUCCESS].indexOf(this.linkState),
            t.data.state === h.MATCH_SUCCESS &&
              (n = t.data.type) &&
              c.writeFileSync(y, JSON.stringify({ oldPenType: n }), "utf8");
        }
        var n;
        if (
          (t.messageType === p &&
            ((this.buttons = t.data),
            this.sendDataToWindow("smartPenKeyState", this.buttons)),
          t.messageType === g &&
            ((this.cursorData = t.data),
            u.share("CURSOR_DATA", t.data, "assistant")),
          t.messageType === w)
        )
          if (t.data.show) {
            this.cursorShow = !0;
            let e = a.newOne("smartPenCursor");
            u.setData({ cursorSize: this.cursorData.cursorSize + 16 }),
              setTimeout(() => {
                e.show();
              }, 20);
          } else (this.cursorShow = !1), a.close("smartPenCursor");
        if (t.url === m) {
          let e = "SP20E_MATCH_FAIL";
          d.checkWindowExist(e)
            ? d.addWaitWindow(e, {
                type: "smartpen",
                state: 2,
                model: "SP20E",
                title: "匹配失败",
                subTitle: "请重置智能笔",
              })
            : d.createWindow(
                {
                  type: "smartpen",
                  state: 2,
                  model: "SP20E",
                  title: "匹配失败",
                  subTitle: "请重置智能笔",
                },
                e
              );
        }
      }
      setCursorSize(e) {
        this.cursorData &&
          ((this.cursorData = Object.assign({}, this.cursorData, {
            cursorSize: e,
          })),
          u.share("CURSOR_DATA", this.cursorData, "assistant")),
          u.setData({ cursorSize: e + 16 });
      }
      onDisconnectMessage() {
        this.cursorShow && ((this.cursorShow = !1), a.close("smartPenCursor"));
      }
      sendDataToWindow(e, t) {
        r(e, t, "assistant");
      }
      getPenKeyState() {
        return this.buttons;
      }
      getStatus() {
        return { linkState: this.linkState, type: this.type };
      }
    })();
    i.register(["SeewoProxyHTTP"], !0, (e) => {
      let t = `${b}:${e.SeewoProxyHTTP}${S}`;
      v.setHost(t);
    }),
      (e.exports = v);
  },
  function (e, t, n) {
    const s = n(2),
      o = n(7),
      i = n(342),
      r = n(3),
      a = n(28),
      c = "/message/user/login/info",
      l = "login",
      u = "logout";
    const d = new (class {
      constructor() {
        (this.message = {}),
          (this.handleLogin = this.handleLogin.bind(this)),
          (this.handleLogout = this.handleLogout.bind(this));
      }
      onMessage(e) {
        e.url === c &&
          (e.data.operation === l &&
            ((this.message = e.data),
            r.checkWindowExist("login") && r.close("login")),
          e.data.operation === u &&
            ((this.message = null), a.delete("user-login")),
          s.share("userInfo", this.message));
      }
      handlePostLoginMessage(e) {
        this.message
          ? i({
              operation: e,
              userId: this.message.userId,
              token: this.message.token,
              nickName: this.message.nickName,
              userName: this.message.userName,
              photoUrl: this.message.photoUrl || "",
              extend: "",
            })
          : o.error("发送数据失败，不存在用户信息");
      }
      handleLogin(e) {
        (this.message = e),
          a.delete("user-login"),
          a.add("user-login", "* * * * * *", 3e3, (e) => {
            0 === e && this.handleLogout();
          }),
          this.handlePostLoginMessage(l),
          s.share("userInfo", this.message);
      }
      handleLogout() {
        a.delete("user-login"),
          this.handlePostLoginMessage(u),
          (this.message = null),
          s.share("userInfo", this.message);
      }
    })();
    e.exports = d;
  },
  function (e, t, n) {
    const s = n(10)("log4js:clustering"),
      o = n(81),
      i = n(34),
      r = n(149),
      a = [];
    let c = !1,
      l = !1,
      u = "NODE_APP_INSTANCE";
    const d = () => l && "0" === process.env[u],
      h = () => c || r.isMaster || d(),
      f = (e) => {
        a.forEach((t) => t(e));
      },
      p = (e, t) => {
        if (
          (s("cluster message received from worker ", e, ": ", t),
          e.topic && e.data && ((t = e), (e = void 0)),
          t && t.topic && "log4js:message" === t.topic)
        ) {
          s("received message: ", t.data);
          const e = o.deserialise(t.data);
          f(e);
        }
      };
    i.addListener((e) => {
      (a.length = 0),
        (c = e.disableClustering),
        (l = e.pm2),
        (u = e.pm2InstanceVar || "NODE_APP_INSTANCE"),
        s("clustering disabled ? " + c),
        s("cluster.isMaster ? " + r.isMaster),
        s("pm2 enabled ? " + l),
        s("pm2InstanceVar = " + u),
        s(`process.env[${u}] = ${process.env[u]}`),
        l && process.removeListener("message", p),
        r.removeListener && r.removeListener("message", p),
        e.disableClustering
          ? s(
              "Not listening for cluster messages, because clustering disabled."
            )
          : d()
          ? (s("listening for PM2 broadcast messages"),
            process.on("message", p))
          : r.isMaster
          ? (s("listening for cluster messages"), r.on("message", p))
          : s(
              "not listening for messages, because we are not a master process"
            );
    }),
      (e.exports = {
        onlyOnMaster: (e, t) => (h() ? e() : t),
        isMaster: h,
        send: (e) => {
          h()
            ? f(e)
            : (l ||
                (e.cluster = { workerId: r.worker.id, worker: process.pid }),
              process.send({ topic: "log4js:message", data: e.serialise() }));
        },
        onMessage: (e) => {
          a.push(e);
        },
      });
  },
  function (e, t) {
    e.exports = require("buffer");
  },
  function (e, t, n) {
    "use strict";
    var s = n(47);
    const o = n(15),
      i = n(10)("ffi:cif"),
      r = n(14),
      a = n(21),
      c = r.sizeof.pointer,
      l = a.ffi_prep_cif,
      u = a.FFI_CIF_SIZE,
      d = a.FFI_DEFAULT_ABI,
      h = a.FFI_OK,
      f = a.FFI_BAD_TYPEDEF,
      p = a.FFI_BAD_ABI,
      g = [];
    e.exports = function (e, t, n) {
      i("creating `ffi_cif *` instance"),
        o(!!e, 'expected a return "type" object as the first argument'),
        o(
          Array.isArray(t),
          'expected an Array of arg "type" objects as the second argument'
        );
      const r = Buffer.alloc(u),
        a = t.length,
        w = Buffer.alloc(a * c),
        m = s(e);
      for (var y = 0; y < a; y++) {
        const e = t[y],
          n = s(e);
        w.writePointer(n, y * c);
      }
      (r.rtnTypePtr = m),
        (r.argTypesPtr = w),
        void 0 === n &&
          (i("no ABI specified (this is OK), using FFI_DEFAULT_ABI"), (n = d));
      const b = l(r, a, m, w, n);
      if (b !== h)
        switch (b) {
          case f: {
            const e = new Error(
              "ffi_prep_cif() returned an FFI_BAD_TYPEDEF error"
            );
            throw ((e.code = "FFI_BAD_TYPEDEF"), (e.errno = b), e);
          }
          case p: {
            const e = new Error("ffi_prep_cif() returned an FFI_BAD_ABI error");
            throw ((e.code = "FFI_BAD_ABI"), (e.errno = b), e);
          }
          default:
            throw new Error("ffi_prep_cif() returned an error: " + b);
        }
      return (
        (i.enabled || ("" + process.env.DEBUG).match(/\bffi\b/)) && g.push(r), r
      );
    };
  },
  function (e, t, n) {
    "use strict";
    const s = n(41),
      o = n(15),
      i = n(10)("ffi:DynamicLibrary"),
      r = n(21),
      a = r.StaticFunctions,
      c = n(14),
      l = n(12).readFileSync,
      u = c.types.int,
      d = c.refType(c.types.void),
      h = s(a.dlopen, d, ["string", u]),
      f = s(a.dlclose, u, [d]),
      p = s(a.dlsym, d, [d, "string"]),
      g = s(a.dlerror, "string", []);
    function w(e, t) {
      if (!(this instanceof w)) return new w(e, t);
      if (
        (i("new DynamicLibrary()", e, t),
        null == t && (t = w.FLAGS.RTLD_LAZY),
        (this._handle = h(e, t)),
        o(
          Buffer.isBuffer(this._handle),
          "expected a Buffer instance to be returned from `dlopen()`"
        ),
        this._handle.isNull())
      ) {
        var n = this.error();
        let e;
        if ((e = n.match(/^(([^ \t()])+\.so([^ \t:()])*):([ \t])*/))) {
          if ((e = l(e[1], "ascii").match(/GROUP *\( *(([^ )])+)/)))
            return w.call(this, e[1], t);
        }
        throw new Error("Dynamic Linking Error: " + n);
      }
    }
    (e.exports = w),
      (w.FLAGS = {}),
      Object.keys(r).forEach(function (e) {
        if (!/^RTLD_/.test(e)) return;
        const t = Object.getOwnPropertyDescriptor(r, e);
        Object.defineProperty(w.FLAGS, e, t);
      }),
      (w.prototype.close = function () {
        return i("dlclose()"), f(this._handle);
      }),
      (w.prototype.get = function (e) {
        i("dlsym()", e), o.strictEqual("string", typeof e);
        const t = p(this._handle, e);
        if ((o(Buffer.isBuffer(t)), t.isNull()))
          throw new Error("Dynamic Symbol Retrieval Error: " + this.error());
        return (t.name = e), t;
      }),
      (w.prototype.error = function () {
        return i("dlerror()"), g();
      });
  },
  function (e, t) {
    e.exports = require("url");
  },
  function (e) {
    e.exports = JSON.parse(
      '{"name":"SeewoServiceAssistant","version":"1.5.1","private":true,"dependencies":{"ffi-napi":"^2.5.0","follow-redirects":"^1.7.0","fs-extra":"^9.0.1","log4js":"^3.0.5","md5":"^2.2.1","node-cron":"^2.0.3","ref-napi":"^1.5.2","unzip2":"^0.2.5","util":"^0.11.0","ws":"^6.1.0"},"main":"main.js","author":"广州视睿电子科技有限公司 (Guangzhou Shirui Electronics Co.,Ltd)","config":{"arch":"ia32"},"scripts":{"start":"electron .","test:pro":"electron ../dist/main.js","rebuild":"electron-rebuild --arch=ia32","pack":"empack"},"devDependencies":{"@cvte/electron-main-pack":"^2.0.1","electron":"^9.3.3","electron-rebuild":"^2.2.0"}}'
    );
  },
  function (e, t) {
    e.exports = require("crypto");
  },
  function (e, t, n) {
    "use strict";
    const { EMPTY_BUFFER: s } = n(37);
    function o(e, t) {
      if (0 === e.length) return s;
      if (1 === e.length) return e[0];
      const n = Buffer.allocUnsafe(t);
      for (var o = 0, i = 0; i < e.length; i++) {
        const t = e[i];
        t.copy(n, o), (o += t.length);
      }
      return n;
    }
    function i(e, t, n, s, o) {
      for (var i = 0; i < o; i++) n[s + i] = e[i] ^ t[3 & i];
    }
    function r(e, t) {
      const n = e.length;
      for (var s = 0; s < n; s++) e[s] ^= t[3 & s];
    }
    function a(e) {
      return e.byteLength === e.buffer.byteLength
        ? e.buffer
        : e.buffer.slice(e.byteOffset, e.byteOffset + e.byteLength);
    }
    function c(e) {
      return (
        (c.readOnly = !0),
        Buffer.isBuffer(e)
          ? e
          : (e instanceof ArrayBuffer
              ? (t = Buffer.from(e))
              : ArrayBuffer.isView(e)
              ? (t = (function (e) {
                  const t = Buffer.from(e.buffer);
                  if (e.byteLength !== e.buffer.byteLength)
                    return t.slice(e.byteOffset, e.byteOffset + e.byteLength);
                  return t;
                })(e))
              : ((t = Buffer.from(e)), (c.readOnly = !1)),
            t)
      );
      var t;
    }
    try {
      const t = n(240),
        s = t.BufferUtil || t;
      e.exports = {
        concat: o,
        mask(e, t, n, o, r) {
          r < 48 ? i(e, t, n, o, r) : s.mask(e, t, n, o, r);
        },
        toArrayBuffer: a,
        toBuffer: c,
        unmask(e, t) {
          e.length < 32 ? r(e, t) : s.unmask(e, t);
        },
      };
    } catch (t) {
      e.exports = {
        concat: o,
        mask: i,
        toArrayBuffer: a,
        toBuffer: c,
        unmask: r,
      };
    }
  },
  function (e, t) {
    e.exports = {
      stringify: function (
        e,
        { EOL: t = "\n", finalEOL: n = !0, replacer: s = null, spaces: o } = {}
      ) {
        const i = n ? t : "";
        return JSON.stringify(e, s, o).replace(/\n/g, t) + i;
      },
      stripBom: function (e) {
        return (
          Buffer.isBuffer(e) && (e = e.toString("utf8")),
          e.replace(/^\uFEFF/, "")
        );
      },
    };
  },
  function (e, t, n) {
    "use strict";
    const s = n(17).fromCallback,
      o = n(16),
      i = n(5),
      r = n(22),
      a = n(30).pathExists;
    e.exports = {
      outputFile: s(function (e, t, n, s) {
        "function" == typeof n && ((s = n), (n = "utf8"));
        const c = i.dirname(e);
        a(c, (i, a) =>
          i
            ? s(i)
            : a
            ? o.writeFile(e, t, n, s)
            : void r.mkdirs(c, (i) => {
                if (i) return s(i);
                o.writeFile(e, t, n, s);
              })
        );
      }),
      outputFileSync: function (e, ...t) {
        const n = i.dirname(e);
        if (o.existsSync(n)) return o.writeFileSync(e, ...t);
        r.mkdirsSync(n), o.writeFileSync(e, ...t);
      },
    };
  },
  function (e, t, n) {
    const s = n(2),
      o = n(20),
      i = n(3),
      r = n(32),
      a = n(31),
      c = n(33),
      l = n(55),
      u = n(56),
      d = n(71),
      h = n(72),
      f = {
        STOP_PROPAGANDA: "/propaganda/uips/stopPrograms",
        PLAY_PROPAGANDA: "/propaganda/uips/playProgram",
        CANCEL_PROPAGANDA: "/propaganda/uips/cancelProgram",
        PROPAGANDA_PROPERTY: "/propaganda/uips/property",
        PROPAGANDA_SERVICE: "/propaganda/uips/service",
      },
      p = "/propaganda/cancel",
      g = "/propaganda/auth",
      w = 1;
    const m = new (class {
      constructor() {
        (this.propagandaList = []),
          (this.start = !1),
          (this.startTask = this.startTask.bind(this)),
          (this.pauseTask = this.pauseTask.bind(this)),
          (this.closeTask = this.closeTask.bind(this)),
          (this.pauseUips = this.pauseUips.bind(this)),
          (this.continueUips = this.continueUips.bind(this));
      }
      onMessage(e) {
        if (
          (e.messageType &&
            e.messageType === p &&
            (e.data.type === w
              ? (c.unlockAction(), this.closeTask())
              : this.closeTask()),
          e.messageType &&
            e.messageType === g &&
            s.share("schoolAnnouncementQuitNeedChecking", e.data.auth),
          !Object.values(f).includes(e.url))
        )
          return;
        const t = this.propagandaList.findIndex(
          (t) =>
            e.data &&
            e.data.hasOwnProperty("publishId") &&
            t.publishId === e.data.publishId
        );
        e.url === f.PLAY_PROPAGANDA &&
          (-1 !== t
            ? (this.propagandaList[t] = e.data)
            : this.propagandaList.unshift(e.data),
          this.start
            ? s.share("uipsTaskData", this.propagandaList)
            : ((this.start = !0),
              r.enQueue({
                taskName: a.SCHOOLANNOUNCEMENT,
                taskDependencies: [a.LIVE],
                startTask: this.startTask,
                pauseTask: this.pauseTask,
                coutinueTask: this.startTask,
                forceCloseTaskList: [a.SCREENSAVER],
                error: () => {
                  r.outQueue(a.SCHOOLANNOUNCEMENT);
                },
              }))),
          e.url === f.CANCEL_PROPAGANDA &&
            (-1 !== t &&
              (this.propagandaList.splice(t, 1),
              s.share("uipsTaskData", this.propagandaList)),
            0 === this.propagandaList.length && this.closeTask()),
          e.url === f.STOP_PROPAGANDA && this.closeTask(),
          e.url === f.PROPAGANDA_PROPERTY &&
            s.share("uipsPropertyData", e.data),
          e.url === f.PROPAGANDA_SERVICE && s.share("uipsServiceData", e.data);
      }
      startTask() {
        if (!1 === s.getData("iotLineStatus")) {
          const e = d.createWindow({
            message: "网络异常，校宣播放失败，请检查网络连接后重试",
          });
          return (
            setTimeout(() => {
              d.closeWindow(e);
            }, 3e3),
            !1
          );
        }
        return (
          !!this.propagandaList.length &&
          (o.newWindow("uipsShowWindow"),
          "win7" === s.getData("systemType") && l(),
          setTimeout(() => {
            s.share("uipsTaskData", this.propagandaList);
          }, 0),
          !0)
        );
      }
      pauseUips() {
        this.pauseTask(), r.outQueue(a.SCHOOLANNOUNCEMENT), h({ code: 1 });
      }
      continueUips() {
        r.enQueue({
          taskName: a.SCHOOLANNOUNCEMENT,
          taskDependencies: [a.LIVE],
          startTask: this.startTask,
          pauseTask: this.pauseTask,
          coutinueTask: this.startTask,
          forceCloseTaskList: [a.SCREENSAVER],
          error: () => {
            r.outQueue(a.SCHOOLANNOUNCEMENT);
          },
        }),
          h({ code: 2 });
      }
      pauseTask() {
        o.closeWindow("uipsShowWindow"),
          "win7" === s.getData("systemType") && u();
      }
      closeTask() {
        (this.start = !1),
          (this.propagandaList = []),
          r.outQueue(a.SCHOOLANNOUNCEMENT),
          o.closeWindow("uipsShowWindow"),
          i.checkWindowExist("uipsMinier") && i.close("uipsMinier"),
          "win7" === s.getData("systemType") && u(),
          s.share("uipsTaskData", this.propagandaList);
      }
    })();
    e.exports = m;
  },
  function (e, t, n) {
    const s = n(3);
    n(4);
    const o = new (class {
      constructor() {
        (this.windowList = {}), (this.waitList = {});
      }
      createWindow(e, t = "globalMessage_" + Date.now()) {
        return (
          (this.windowList[t] = s.addOne(
            "globalMessage",
            t,
            { ...e, windowId: t },
            null,
            { width: 42 * e.message.length }
          )),
          t
        );
      }
      closeWindow(e) {
        let t = this.windowList[e];
        t && !t.isDestroyed() && (s.close(e), (this.windowList[e] = null));
      }
    })();
    e.exports = o;
  },
  function (e, t, n) {
    const s = n(11),
      o = n(1),
      i = n(6),
      { ip: r } = o.proxyHttp;
    e.exports = function (e) {
      i.register(["SeewoProxyHTTP"], !1, (t) => {
        !(function (e, t) {
          s(
            r,
            e,
            "/forward/SeewoHugoHttp/api/v1/uips/feedback",
            "post",
            { ...t },
            (e) => {}
          );
        })(t.SeewoProxyHTTP, e);
      });
    };
  },
  function (e, t, n) {
    const s = n(2),
      o = n(4),
      i = n(20),
      r = n(71),
      a = {
        SCAN_PROCESS: "/scanProcess",
        SCAN_RESULT: "/scanResult",
        CLEAN_PROCESS: "/cleanProcess",
        CLEAN_RESULT: "/cleanResult",
      },
      c = {
        DISK_FORMAT: "/diskFormatStatus",
        DISK_CLEAN_NOTICE: "/disk/clean/status",
        SYSTEM_CLEAN_NOTICE: "/systemDisk/clean/status",
        SYSTEM_MOVING_NOTICE: "/userProfile/moving/status",
      };
    const l = new (class {
      constructor() {
        (this.messageList = {}),
          (this.windows = {
            systemCleanNotice: null,
            systemMovingNotice: null,
            diskMovingNotice: null,
          });
      }
      onMessage(e) {
        if (Object.values(a).indexOf(e.url) > -1)
          for (let t in a)
            a[t] === e.url &&
              (o(t, e.data, "assistant"), (this.messageList[t] = e.data));
        e.url === c.DISK_FORMAT &&
          (i.getWindowList("remoteDiskClearWarn") ||
            i.newWindow("remoteDiskClearWarn"),
          i.getWindowList("remoteDiskClearWarn").forEach((t) => {
            s.share("diskFormatProgress", e.data, t);
          })),
          e.url === c.SYSTEM_CLEAN_NOTICE &&
            (e.data && !this.windows.systemCleanNotice
              ? (this.windows.systemCleanNotice = r.createWindow({
                  message: "系统垃圾清理中",
                }))
              : e.data ||
                (r.closeWindow(this.windows.systemCleanNotice),
                (this.windows.systemCleanNotice = null))),
          e.url === c.SYSTEM_MOVING_NOTICE &&
            (e.data && !this.windows.systemMovingNotice
              ? (this.windows.systemMovingNotice = r.createWindow({
                  message: "系统盘大文件迁移中",
                }))
              : e.data ||
                (r.closeWindow(this.windows.systemMovingNotice),
                (this.windows.systemMovingNotice = null))),
          Object.values(c).includes(e.url) &&
            (!e.data || (!0 !== e.data && "start" !== e.data.status)
              ? s.share("disableLocalClean", !1, "assistant")
              : s.share("disableLocalClean", !0, "assistant"));
      }
      getMessage(e) {
        return this.messageList[e] ? this.messageList[e] : "";
      }
      onLinkChange(e) {
        e || o("systemCleanerCrash", "", "assistant"),
          o("adminWebsocketState", e, "assistant");
      }
    })();
    e.exports = l;
  },
  function (e, t, n) {
    const s = n(345),
      o = n(346),
      i = n(4),
      r = { width: 448, height: 158, position: { right: 0, bottom: 36 } },
      a = { width: 400, height: 110, position: { right: 24, bottom: 60 } };
    const c = new (class {
      constructor() {
        (this.messages = []),
          (this.popupMessages = []),
          (this.startPopups = this.startPopups.bind(this)),
          (this.data = null);
      }
      updateData(e) {
        o.getWindowList("eyeProtectionModeTimeOut").forEach((t) => {
          i(
            "postEyeProtectionModeActionTimeOutByMain",
            { action: "update", data: e },
            t
          );
        });
      }
      initEyeProtectionModeTimeOutData() {
        let e = this.getData();
        o.getWindowList("eyeProtectionModeTimeOut").forEach((t) => {
          i(
            "postEyeProtectionModeActionTimeOutByMain",
            { action: "start", data: e },
            t
          );
        });
      }
      onMessage(e) {
        "/eye_protection/timer/created" === e.url && this.closeModal(),
          "/eye_protection/timer/resumed" === e.url && this.closeModal(),
          "/eye_protection/timer/paused" === e.url && this.closeModal(),
          "/eye_protection/timer/aborted" === e.url && this.closeModal();
      }
      getData() {
        return this.data;
      }
      postTimerFinishing(e) {
        s(e), this.closeModal();
      }
      startPopups(e) {
        const { systemPreferences: t } = n(0);
        let s = t.isAeroGlassEnabled();
        o.newWindow("eyeProtectionModeTimeOut", s ? r : a, !1), (this.data = e);
      }
      closeModal() {
        o.closeWindow("eyeProtectionModeTimeOut");
      }
    })();
    e.exports = c;
  },
  function (e, t, n) {
    const s = n(353),
      o = n(2),
      i = n(33),
      r = n(20),
      a = n(32),
      c = n(31),
      l = n(7),
      u = n(0).systemPreferences,
      d = n(55),
      h = n(56),
      f = n(28),
      p = n(136),
      g = n(3),
      w = n(1),
      m = n(12),
      y = n(5),
      b = "/newsBroadcast/play",
      S = "/newsBroadcast/cancel",
      v = "/newsBroadcast/auth",
      E = 0,
      _ = 2,
      T = 6,
      k = 14,
      x = 1,
      C = 0;
    const O = new (class {
      constructor() {
        (this.message = null),
          (this.needCheck = !0),
          (this.playerScript = m.readFileSync(
            y.join(w.jsRoot, "/newsPlayerScript.js"),
            "utf-8"
          )),
          (this.childrenWindows = []),
          (this.timeout = null),
          (this.startTask = this.startTask.bind(this)),
          (this.pauseAnnouncement = this.pauseAnnouncement.bind(this));
      }
      onMessage(e) {
        e.url === b &&
          (this.message && this.closeTask(E),
          (this.message = e),
          a.enQueue({
            taskName: c.NEWS_PLAYER,
            taskDependencies: [c.LIVE, c.SCHOOLANNOUNCEMENT],
            startTask: this.startTask,
            pauseTask: this.pauseAnnouncement,
            coutinueTask: this.startTask,
            forceCloseTaskList: [c.SCREENSAVER],
            error: () => {
              a.outQueue(c.NEWS_PLAYER);
            },
          })),
          e.url === S &&
            (e.data.type === x
              ? (i.unlockAction(), this.closeTask())
              : this.closeTask(E)),
          e.url === v && (this.needCheck = e.data.auth);
      }
      startTask() {
        const e = this.message.data;
        r.newWindow("newsPlayer");
        const t = r.getWindowList("newsPlayer");
        let n = null;
        t.forEach((t, s) => {
          const {
            width: i,
            height: r,
            x: a,
            y: c,
          } = g.getInstance(t).getBounds();
          if (e.content[0].type === C) {
            const d = g.addOne(
              "newsPlayerLive",
              "newsPlayerLive" + s,
              { mainWindowId: n },
              t,
              0 === s ? { url: e.content[0].link } : {}
            );
            d.setBounds({ width: i, height: r, x: a, y: c });
            let h = u.isAeroGlassEnabled();
            ("win7" !== o.getData("systemType") || h) &&
              d.setIgnoreMouseEvents(!0),
              0 === s &&
                (d.webContents.on("did-navigate", () => {
                  d.webContents.once("dom-ready", () => {
                    d.webContents
                      .executeJavaScript(e.playScript || this.playerScript, !0)
                      .then((e) => {})
                      .catch((e) => {
                        l.info("执行播放脚本失败", e);
                      });
                    const t = setInterval(() => {
                      d.isDestroyed()
                        ? t && clearInterval(t)
                        : d.webContents
                            .executeJavaScript("", !0)
                            .then((e) => {})
                            .catch((e) => {
                              l.info("执行播放脚本失败", e);
                            });
                    }, 1e3);
                    "win7" !== o.getData("systemType") ||
                      h ||
                      d.webContents.executeJavaScript(
                        "\n                                document.addEventListener('keydown', function(e) {\n                                    e.preventDefault();\n                                    e.stopPropagation();\n                                  });\n\n                                  document.addEventListener('keyup', function(e) {\n                                    e.preventDefault();\n                                    e.stopPropagation();\n                                  });\n\n                                  document.addEventListener('mousedown', function(e) {\n                                    e.preventDefault();\n                                    e.stopPropagation();\n                                  });\n\n                                  document.addEventListener('mouseup', function(e) {\n                                    e.preventDefault();\n                                    e.stopPropagation();\n                                  });\n\n                                  document.addEventListener('mousemove', function(e) {\n                                    e.preventDefault();\n                                    e.stopPropagation();\n                                  });\n\n                                  document.addEventListener('click', function(e) {\n                                    e.preventDefault();\n                                    e.stopPropagation();\n                                  });\n\n                                  document.addEventListener('contextmenu', function(e) {\n                                    e.preventDefault();\n                                    e.stopPropagation();\n                                  });\n\n                                    document.addEventListener('dblclick', function(e) {\n                                        e.preventDefault();\n                                        e.stopPropagation();\n                                      });\n                                ",
                        !0
                      );
                  });
                }),
                d.webContents.on("did-fail-load", (t, n, s) => {
                  l.info("网页加载失败:", n, s, e.content[0].link),
                    this.closeTask(k);
                }),
                (n = d.getMediaSourceId())),
              this.childrenWindows.push("newsPlayerLive" + s);
          } else
            0 === s && (n = g.getInstance(t).getMediaSourceId()),
              o.share(
                "newsPlayFile",
                {
                  file: e.content[0],
                  mainWindowId: n,
                  isMainWindow: 0 === s,
                  playCount: e.playCount,
                },
                t
              );
          g.addOne(
            "newsPlayerQuit",
            "newsPlayerQuit" + s,
            { mainWindowId: n },
            t,
            { width: i, height: 64, x: a, y: c + r - 64 }
          ),
            this.childrenWindows.push("newsPlayerQuit" + s);
        }),
          "win7" === o.getData("systemType") && d(),
          (!e.playCount || isNaN(e.playCount) || e.playCount <= 0) &&
            (this.timeout = setTimeout(() => {
              l.info("时事转播到时"), this.closeTask();
            }, 1e3 * (e.duration + 2)));
      }
      pauseAnnouncement() {
        r.closeWindow("schoolAnnouncement"),
          "win7" === o.getData("systemType") && h();
      }
      closeTask(e = _) {
        f.delete("ANNOUNCEMENT"),
          o.share("ANNOUNCEMENT_FEEDBACK", 0),
          r.getWindowList("newsPlayer").forEach((e) => {
            o.share("newsPlayFile", null, e);
          }),
          o.setData({ ANNOUNCEMENT_ERROR_COUNT: 0 });
        let t = this.message;
        t &&
          (clearTimeout(this.timeout),
          a.outQueue(c.NEWS_PLAYER),
          s({ traceId: t.traceId, status: e, type: t.data.type }),
          this.childrenWindows.forEach((e) => {
            g.close(e);
          }),
          r.closeWindow("newsPlayer"),
          p.exitAuth(),
          "win7" === o.getData("systemType") && h(),
          (this.message = null));
      }
      exit(e) {
        this.closeTask(1 === e ? _ : T);
      }
      serverDisconnect() {
        a.outQueue(c.NEWS_PLAYER);
      }
      quitNewsPlayer() {
        this.needCheck
          ? p.enterAuth(
              "返回时事转播",
              2,
              () => {
                this.closeTask(E);
              },
              () => {}
            )
          : this.closeTask(E);
      }
    })();
    e.exports = O;
  },
  function (e, t, n) {
    function s(e) {
      var n;
      function s() {
        if (s.enabled) {
          var e = s,
            o = +new Date(),
            i = o - (n || o);
          (e.diff = i), (e.prev = n), (e.curr = o), (n = o);
          for (var r = new Array(arguments.length), a = 0; a < r.length; a++)
            r[a] = arguments[a];
          (r[0] = t.coerce(r[0])), "string" != typeof r[0] && r.unshift("%O");
          var c = 0;
          (r[0] = r[0].replace(/%([a-zA-Z%])/g, function (n, s) {
            if ("%%" === n) return n;
            c++;
            var o = t.formatters[s];
            if ("function" == typeof o) {
              var i = r[c];
              (n = o.call(e, i)), r.splice(c, 1), c--;
            }
            return n;
          })),
            t.formatArgs.call(e, r);
          var l = s.log || t.log || console.log.bind(console);
          l.apply(e, r);
        }
      }
      return (
        (s.namespace = e),
        (s.enabled = t.enabled(e)),
        (s.useColors = t.useColors()),
        (s.color = (function (e) {
          var n,
            s = 0;
          for (n in e) (s = (s << 5) - s + e.charCodeAt(n)), (s |= 0);
          return t.colors[Math.abs(s) % t.colors.length];
        })(e)),
        (s.destroy = o),
        "function" == typeof t.init && t.init(s),
        t.instances.push(s),
        s
      );
    }
    function o() {
      var e = t.instances.indexOf(this);
      return -1 !== e && (t.instances.splice(e, 1), !0);
    }
    ((t = e.exports = s.debug = s.default = s).coerce = function (e) {
      return e instanceof Error ? e.stack || e.message : e;
    }),
      (t.disable = function () {
        t.enable("");
      }),
      (t.enable = function (e) {
        var n;
        t.save(e), (t.names = []), (t.skips = []);
        var s = ("string" == typeof e ? e : "").split(/[\s,]+/),
          o = s.length;
        for (n = 0; n < o; n++)
          s[n] &&
            ("-" === (e = s[n].replace(/\*/g, ".*?"))[0]
              ? t.skips.push(new RegExp("^" + e.substr(1) + "$"))
              : t.names.push(new RegExp("^" + e + "$")));
        for (n = 0; n < t.instances.length; n++) {
          var i = t.instances[n];
          i.enabled = t.enabled(i.namespace);
        }
      }),
      (t.enabled = function (e) {
        if ("*" === e[e.length - 1]) return !0;
        var n, s;
        for (n = 0, s = t.skips.length; n < s; n++)
          if (t.skips[n].test(e)) return !1;
        for (n = 0, s = t.names.length; n < s; n++)
          if (t.names[n].test(e)) return !0;
        return !1;
      }),
      (t.humanize = n(143)),
      (t.instances = []),
      (t.names = []),
      (t.skips = []),
      (t.formatters = {});
  },
  function (e, t) {
    e.exports = require("tty");
  },
  function (e, t, n) {
    "use strict";
    const s = n(79),
      o = n(25),
      i = n(13),
      r = o.EOL || "\n",
      a = {
        bold: [1, 22],
        italic: [3, 23],
        underline: [4, 24],
        inverse: [7, 27],
        white: [37, 39],
        grey: [90, 39],
        black: [90, 39],
        blue: [34, 39],
        cyan: [36, 39],
        green: [32, 39],
        magenta: [35, 39],
        red: [91, 39],
        yellow: [33, 39],
      };
    function c(e) {
      return e ? `[${a[e][0]}m` : "";
    }
    function l(e) {
      return e ? `[${a[e][1]}m` : "";
    }
    function u(e, t, n) {
      return (
        (o = i.format(
          "[%s] [%s] %s - ",
          s.asString(e.startTime, n),
          e.level,
          e.categoryName
        )),
        c((r = t)) + o + l(r)
      );
      var o, r;
    }
    function d(e, t) {
      return u(e, void 0, t) + i.format(...e.data);
    }
    function h(e, t) {
      return u(e, e.level.colour, t) + i.format(...e.data);
    }
    function f(e) {
      return i.format(...e.data);
    }
    function p(e) {
      return e.data[0];
    }
    function g(e, t, n) {
      const a =
        /%(-?[0-9]+)?(\.?[0-9]+)?([[\]cdhmnprzxXy%])(\{([^}]+)\})?|([^%]+)/;
      function u(e) {
        return e && e.pid ? e.pid.toString() : process.pid.toString();
      }
      e = e || "%r %p %c - %m%n";
      const d = {
        c: function (e, t) {
          let n = e.categoryName;
          if (t) {
            const e = parseInt(t, 10),
              s = n.split(".");
            e < s.length && (n = s.slice(s.length - e).join("."));
          }
          return n;
        },
        d: function (e, t) {
          let o = s.ISO8601_FORMAT;
          return (
            t &&
              ((o = t),
              "ISO8601" === o
                ? (o = s.ISO8601_FORMAT)
                : "ISO8601_WITH_TZ_OFFSET" === o
                ? (o = s.ISO8601_WITH_TZ_OFFSET_FORMAT)
                : "ABSOLUTE" === o
                ? (o = s.ABSOLUTETIME_FORMAT)
                : "DATE" === o && (o = s.DATETIME_FORMAT)),
            s.asString(o, e.startTime, n)
          );
        },
        h: function () {
          return o.hostname().toString();
        },
        m: function (e) {
          return i.format(...e.data);
        },
        n: function () {
          return r;
        },
        p: function (e) {
          return e.level.toString();
        },
        r: function (e) {
          return s.asString("hh:mm:ss", e.startTime, n);
        },
        "[": function (e) {
          return c(e.level.colour);
        },
        "]": function (e) {
          return l(e.level.colour);
        },
        y: function () {
          return u();
        },
        z: u,
        "%": function () {
          return "%";
        },
        x: function (e, n) {
          return void 0 !== t[n]
            ? "function" == typeof t[n]
              ? t[n](e)
              : t[n]
            : null;
        },
        X: function (e, t) {
          const n = e.context[t];
          return void 0 !== n ? ("function" == typeof n ? n(e) : n) : null;
        },
      };
      function h(e, t, n) {
        return d[e](t, n);
      }
      function f(e, t, n) {
        let s = e;
        return (
          (s = (function (e, t) {
            let n;
            return e ? ((n = parseInt(e.substr(1), 10)), t.substring(0, n)) : t;
          })(t, s)),
          (s = (function (e, t) {
            let n;
            if (e)
              if ("-" === e.charAt(0))
                for (n = parseInt(e.substr(1), 10); t.length < n; ) t += " ";
              else for (n = parseInt(e, 10); t.length < n; ) t = " " + t;
            return t;
          })(n, s)),
          s
        );
      }
      return function (t) {
        let n,
          s = "",
          o = e;
        for (; null !== (n = a.exec(o)); ) {
          const e = n[1],
            i = n[2],
            r = n[3],
            a = n[5],
            c = n[6];
          if (c) s += c.toString();
          else {
            s += f(h(r, t, a), i, e);
          }
          o = o.substr(n.index + n[0].length);
        }
        return s;
      };
    }
    const w = {
      messagePassThrough: function () {
        return f;
      },
      basic: function () {
        return d;
      },
      colored: function () {
        return h;
      },
      coloured: function () {
        return h;
      },
      pattern: function (e) {
        return g(e && e.pattern, e && e.tokens);
      },
      dummy: function () {
        return p;
      },
    };
    e.exports = {
      basicLayout: d,
      messagePassThroughLayout: f,
      patternLayout: g,
      colouredLayout: h,
      coloredLayout: h,
      dummyLayout: p,
      addLayout: function (e, t) {
        w[e] = t;
      },
      layout: function (e, t) {
        return w[e] && w[e](t);
      },
    };
  },
  function (e, t, n) {
    "use strict";
    function s(e, t) {
      for (var n = e.toString(); n.length < t; ) n = "0" + n;
      return n;
    }
    function o(e) {
      return s(e, 2);
    }
    function i(t, n, i) {
      "string" != typeof t &&
        ((i = n), (n = t), (t = e.exports.ISO8601_FORMAT)),
        n || (n = new Date()),
        void 0 === i && (i = n.getTimezoneOffset()),
        n.setUTCMinutes(n.getUTCMinutes() - i);
      var r = o(n.getUTCDate()),
        a = o(n.getUTCMonth() + 1),
        c = o(n.getUTCFullYear()),
        l = o(n.getUTCFullYear().toString().substring(2, 4)),
        u = t.indexOf("yyyy") > -1 ? c : l,
        d = o(n.getUTCHours()),
        h = o(n.getUTCMinutes()),
        f = o(n.getUTCSeconds()),
        p = s(n.getUTCMilliseconds(), 3),
        g = (function (e) {
          var t = Math.abs(e),
            n = String(Math.floor(t / 60)),
            s = String(t % 60);
          return (
            1 === n.length && (n = "0" + n),
            1 === s.length && (s = "0" + s),
            e < 0 ? "+" + n + s : "-" + n + s
          );
        })(i);
      return (
        n.setUTCMinutes(n.getUTCMinutes() + i),
        t
          .replace(/dd/g, r)
          .replace(/MM/g, a)
          .replace(/y{1,4}/g, u)
          .replace(/hh/g, d)
          .replace(/mm/g, h)
          .replace(/ss/g, f)
          .replace(/SSS/g, p)
          .replace(/O/g, g)
      );
    }
    (e.exports = i),
      (e.exports.asString = i),
      (e.exports.ISO8601_FORMAT = "yyyy-MM-ddThh:mm:ss.SSS"),
      (e.exports.ISO8601_WITH_TZ_OFFSET_FORMAT = "yyyy-MM-ddThh:mm:ss.SSSO"),
      (e.exports.DATETIME_FORMAT = "dd MM yyyy hh:mm:ss.SSS"),
      (e.exports.ABSOLUTETIME_FORMAT = "hh:mm:ss.SSS");
  },
  function (e, t, n) {
    const s = n(5),
      o = n(10)("log4js:appenders"),
      i = n(34),
      r = n(60),
      a = n(35),
      c = n(78),
      l = n(150),
      u = new Map();
    u.set("console", n(151)),
      u.set("stdout", n(152)),
      u.set("stderr", n(153)),
      u.set("file", n(154)),
      u.set("dateFile", n(164));
    const d = new Map(),
      h = (e, t) => {
        o("Loading module from ", e);
        try {
          return n(165)(e);
        } catch (n) {
          return void i.throwExceptionIf(
            t,
            "MODULE_NOT_FOUND" !== n.code,
            `appender "${e}" could not be loaded (error was: ${n})`
          );
        }
      },
      f = (e, t) => {
        const f = t.appenders[e],
          p = ((e, t) =>
            u.get(e) ||
            h("./" + e, t) ||
            h(e, t) ||
            (n.c[n.s] && h(s.join(s.dirname(n.c[n.s].filename), e), t)) ||
            h(s.join(process.cwd(), e), t))(f.type, t);
        return (
          i.throwExceptionIf(
            t,
            i.not(p),
            `appender "${e}" is not valid (type "${f.type}" could not be found)`
          ),
          p.appender &&
            o(`DEPRECATION: Appender ${f.type} exports an appender function.`),
          p.shutdown &&
            o(`DEPRECATION: Appender ${f.type} exports a shutdown function.`),
          o(`${e}: clustering.isMaster ? ${r.isMaster()}`),
          o(`${e}: appenderModule is ${n(13).inspect(p)}`),
          r.onlyOnMaster(
            () => (
              o(`calling appenderModule.configure for ${e} / ${f.type}`),
              p.configure(l.modifyConfig(f), c, (e) => d.get(e), a)
            ),
            () => {}
          )
        );
      },
      p = (e) => {
        d.clear(),
          Object.keys(e.appenders).forEach((t) => {
            o("Creating appender " + t), d.set(t, f(t, e));
          });
      };
    p({ appenders: { out: { type: "stdout" } } }),
      i.addListener((e) => {
        i.throwExceptionIf(
          e,
          i.not(i.anObject(e.appenders)),
          'must have a property "appenders" of type object.'
        );
        const t = Object.keys(e.appenders);
        i.throwExceptionIf(
          e,
          i.not(t.length),
          "must define at least one appender."
        ),
          t.forEach((t) => {
            i.throwExceptionIf(
              e,
              i.not(e.appenders[t].type),
              `appender "${t}" is not valid (must be an object with property "type")`
            );
          });
      }),
      i.addListener(p),
      (e.exports = d);
  },
  function (e, t, n) {
    const s = n(148),
      o = n(35);
    class i {
      constructor(e, t, n, s) {
        (this.startTime = new Date()),
          (this.categoryName = e),
          (this.data = n),
          (this.level = t),
          (this.context = Object.assign({}, s)),
          (this.pid = process.pid);
      }
      serialise() {
        const e = this.data.map(
          (e) => (
            e &&
              e.message &&
              e.stack &&
              (e = Object.assign({ message: e.message, stack: e.stack }, e)),
            e
          )
        );
        return (this.data = e), s.stringify(this);
      }
      static deserialise(e) {
        let t;
        try {
          const n = s.parse(e);
          (n.data = n.data.map((e) => {
            if (e && e.message && e.stack) {
              const t = new Error(e);
              Object.keys(e).forEach((n) => {
                t[n] = e[n];
              }),
                (e = t);
            }
            return e;
          })),
            (t = new i(
              n.categoryName,
              o.getLevel(n.level.levelStr),
              n.data,
              n.context
            )),
            (t.startTime = new Date(n.startTime)),
            (t.pid = n.pid),
            (t.cluster = n.cluster);
        } catch (n) {
          t = new i("log4js", o.ERROR, [
            "Unable to parse log:",
            e,
            "because: ",
            n,
          ]);
        }
        return t;
      }
    }
    e.exports = i;
  },
  function (e, t, n) {
    "use strict";
    (t.RollingFileStream = n(155)), (t.DateRollingFileStream = n(163));
  },
  function (e, t, n) {
    "use strict";
    var s = n(12),
      o = n(84),
      i = n(10)("streamroller:BaseRollingFileStream"),
      r = n(156),
      a = n(5),
      c = n(13),
      l = n(157);
    function u(e, t) {
      i("In BaseRollingFileStream"),
        (this.filename = e),
        (this.options = t || {}),
        (this.options.encoding = this.options.encoding || "utf8"),
        (this.options.mode = this.options.mode || parseInt("0644", 8)),
        (this.options.flags = this.options.flags || "a"),
        (this.currentSize = 0),
        (function () {
          if (!e) throw new Error("You must specify a filename");
        })(),
        i("Calling BaseRollingFileStream.super"),
        u.super_.call(this),
        this.openTheStream(),
        (this.currentSize = (function (e) {
          var t = 0;
          try {
            t = s.statSync(e).size;
          } catch (e) {}
          return t;
        })(this.filename));
    }
    (e.exports = u),
      c.inherits(u, l.Writable),
      (u.prototype._writeTheChunk = function (e, t, n) {
        i("writing the chunk to the underlying stream"),
          (this.currentSize += e.length);
        try {
          this.theStream.write(e, t)
            ? process.nextTick(n)
            : (i("waiting for drain event"), this.theStream.once("drain", n)),
            i("chunk written");
        } catch (e) {
          i(e), n && n(e);
        }
      }),
      (u.prototype._write = function (e, t, n) {
        i("in _write"),
          this.shouldRoll()
            ? ((this.currentSize = 0),
              this.roll(this.filename, this._writeTheChunk.bind(this, e, t, n)))
            : this._writeTheChunk(e, t, n);
      }),
      (u.prototype.openTheStream = function (e) {
        i("opening the underlying stream");
        var t = this;
        r.sync(a.dirname(this.filename)),
          (this.theStream = s.createWriteStream(this.filename, this.options)),
          this.theStream.on("error", function (e) {
            t.emit("error", e);
          }),
          e && this.theStream.on("open", e);
      }),
      (u.prototype.closeTheStream = function (e) {
        i("closing the underlying stream"), this.theStream.end(e);
      }),
      (u.prototype.compress = function (e, t) {
        i("Compressing ", e, " -> ", e, ".gz");
        var n = o.createGzip(),
          r = s.createReadStream(e),
          a = s.createWriteStream(e + ".gz");
        r.pipe(n).pipe(a),
          a.on("finish", function (n) {
            i("Removing original ", e), s.unlink(e, t);
          });
      }),
      (u.prototype.shouldRoll = function () {
        return !1;
      }),
      (u.prototype.roll = function (e, t) {
        t();
      }),
      (u.prototype.end = function (e, t, n) {
        var s = this;
        i("end called - first close myself"),
          l.Writable.prototype.end.call(s, function () {
            i("writable end callback, now close underlying stream"),
              s.theStream.end(e, t, function (e) {
                i("underlying stream closed"), n && n(e);
              });
          });
      });
  },
  function (e, t) {
    e.exports = require("zlib");
  },
  function (e, t, n) {
    "use strict";
    var s = n(42);
    e.exports = y;
    var o,
      i = n(158);
    y.ReadableState = m;
    n(43).EventEmitter;
    var r = function (e, t) {
        return e.listeners(t).length;
      },
      a = n(86),
      c = n(44).Buffer,
      l =
        ("undefined" != typeof global
          ? global
          : "undefined" != typeof window
          ? window
          : "undefined" != typeof self
          ? self
          : {}
        ).Uint8Array || function () {};
    var u = Object.create(n(39));
    u.inherits = n(40);
    var d = n(13),
      h = void 0;
    h = d && d.debuglog ? d.debuglog("stream") : function () {};
    var f,
      p = n(160),
      g = n(87);
    u.inherits(y, a);
    var w = ["error", "close", "destroy", "pause", "resume"];
    function m(e, t) {
      e = e || {};
      var s = t instanceof (o = o || n(36));
      (this.objectMode = !!e.objectMode),
        s && (this.objectMode = this.objectMode || !!e.readableObjectMode);
      var i = e.highWaterMark,
        r = e.readableHighWaterMark,
        a = this.objectMode ? 16 : 16384;
      (this.highWaterMark = i || 0 === i ? i : s && (r || 0 === r) ? r : a),
        (this.highWaterMark = Math.floor(this.highWaterMark)),
        (this.buffer = new p()),
        (this.length = 0),
        (this.pipes = null),
        (this.pipesCount = 0),
        (this.flowing = null),
        (this.ended = !1),
        (this.endEmitted = !1),
        (this.reading = !1),
        (this.sync = !0),
        (this.needReadable = !1),
        (this.emittedReadable = !1),
        (this.readableListening = !1),
        (this.resumeScheduled = !1),
        (this.destroyed = !1),
        (this.defaultEncoding = e.defaultEncoding || "utf8"),
        (this.awaitDrain = 0),
        (this.readingMore = !1),
        (this.decoder = null),
        (this.encoding = null),
        e.encoding &&
          (f || (f = n(89).StringDecoder),
          (this.decoder = new f(e.encoding)),
          (this.encoding = e.encoding));
    }
    function y(e) {
      if (((o = o || n(36)), !(this instanceof y))) return new y(e);
      (this._readableState = new m(e, this)),
        (this.readable = !0),
        e &&
          ("function" == typeof e.read && (this._read = e.read),
          "function" == typeof e.destroy && (this._destroy = e.destroy)),
        a.call(this);
    }
    function b(e, t, n, s, o) {
      var i,
        r = e._readableState;
      null === t
        ? ((r.reading = !1),
          (function (e, t) {
            if (t.ended) return;
            if (t.decoder) {
              var n = t.decoder.end();
              n &&
                n.length &&
                (t.buffer.push(n), (t.length += t.objectMode ? 1 : n.length));
            }
            (t.ended = !0), E(e);
          })(e, r))
        : (o ||
            (i = (function (e, t) {
              var n;
              (s = t),
                c.isBuffer(s) ||
                  s instanceof l ||
                  "string" == typeof t ||
                  void 0 === t ||
                  e.objectMode ||
                  (n = new TypeError("Invalid non-string/buffer chunk"));
              var s;
              return n;
            })(r, t)),
          i
            ? e.emit("error", i)
            : r.objectMode || (t && t.length > 0)
            ? ("string" == typeof t ||
                r.objectMode ||
                Object.getPrototypeOf(t) === c.prototype ||
                (t = (function (e) {
                  return c.from(e);
                })(t)),
              s
                ? r.endEmitted
                  ? e.emit(
                      "error",
                      new Error("stream.unshift() after end event")
                    )
                  : S(e, r, t, !0)
                : r.ended
                ? e.emit("error", new Error("stream.push() after EOF"))
                : ((r.reading = !1),
                  r.decoder && !n
                    ? ((t = r.decoder.write(t)),
                      r.objectMode || 0 !== t.length ? S(e, r, t, !1) : T(e, r))
                    : S(e, r, t, !1)))
            : s || (r.reading = !1));
      return (function (e) {
        return (
          !e.ended &&
          (e.needReadable || e.length < e.highWaterMark || 0 === e.length)
        );
      })(r);
    }
    function S(e, t, n, s) {
      t.flowing && 0 === t.length && !t.sync
        ? (e.emit("data", n), e.read(0))
        : ((t.length += t.objectMode ? 1 : n.length),
          s ? t.buffer.unshift(n) : t.buffer.push(n),
          t.needReadable && E(e)),
        T(e, t);
    }
    Object.defineProperty(y.prototype, "destroyed", {
      get: function () {
        return void 0 !== this._readableState && this._readableState.destroyed;
      },
      set: function (e) {
        this._readableState && (this._readableState.destroyed = e);
      },
    }),
      (y.prototype.destroy = g.destroy),
      (y.prototype._undestroy = g.undestroy),
      (y.prototype._destroy = function (e, t) {
        this.push(null), t(e);
      }),
      (y.prototype.push = function (e, t) {
        var n,
          s = this._readableState;
        return (
          s.objectMode
            ? (n = !0)
            : "string" == typeof e &&
              ((t = t || s.defaultEncoding) !== s.encoding &&
                ((e = c.from(e, t)), (t = "")),
              (n = !0)),
          b(this, e, t, !1, n)
        );
      }),
      (y.prototype.unshift = function (e) {
        return b(this, e, null, !0, !1);
      }),
      (y.prototype.isPaused = function () {
        return !1 === this._readableState.flowing;
      }),
      (y.prototype.setEncoding = function (e) {
        return (
          f || (f = n(89).StringDecoder),
          (this._readableState.decoder = new f(e)),
          (this._readableState.encoding = e),
          this
        );
      });
    function v(e, t) {
      return e <= 0 || (0 === t.length && t.ended)
        ? 0
        : t.objectMode
        ? 1
        : e != e
        ? t.flowing && t.length
          ? t.buffer.head.data.length
          : t.length
        : (e > t.highWaterMark &&
            (t.highWaterMark = (function (e) {
              return (
                e >= 8388608
                  ? (e = 8388608)
                  : (e--,
                    (e |= e >>> 1),
                    (e |= e >>> 2),
                    (e |= e >>> 4),
                    (e |= e >>> 8),
                    (e |= e >>> 16),
                    e++),
                e
              );
            })(e)),
          e <= t.length ? e : t.ended ? t.length : ((t.needReadable = !0), 0));
    }
    function E(e) {
      var t = e._readableState;
      (t.needReadable = !1),
        t.emittedReadable ||
          (h("emitReadable", t.flowing),
          (t.emittedReadable = !0),
          t.sync ? s.nextTick(_, e) : _(e));
    }
    function _(e) {
      h("emit readable"), e.emit("readable"), O(e);
    }
    function T(e, t) {
      t.readingMore || ((t.readingMore = !0), s.nextTick(k, e, t));
    }
    function k(e, t) {
      for (
        var n = t.length;
        !t.reading &&
        !t.flowing &&
        !t.ended &&
        t.length < t.highWaterMark &&
        (h("maybeReadMore read 0"), e.read(0), n !== t.length);

      )
        n = t.length;
      t.readingMore = !1;
    }
    function x(e) {
      h("readable nexttick read 0"), e.read(0);
    }
    function C(e, t) {
      t.reading || (h("resume read 0"), e.read(0)),
        (t.resumeScheduled = !1),
        (t.awaitDrain = 0),
        e.emit("resume"),
        O(e),
        t.flowing && !t.reading && e.read(0);
    }
    function O(e) {
      var t = e._readableState;
      for (h("flow", t.flowing); t.flowing && null !== e.read(); );
    }
    function L(e, t) {
      return 0 === t.length
        ? null
        : (t.objectMode
            ? (n = t.buffer.shift())
            : !e || e >= t.length
            ? ((n = t.decoder
                ? t.buffer.join("")
                : 1 === t.buffer.length
                ? t.buffer.head.data
                : t.buffer.concat(t.length)),
              t.buffer.clear())
            : (n = (function (e, t, n) {
                var s;
                e < t.head.data.length
                  ? ((s = t.head.data.slice(0, e)),
                    (t.head.data = t.head.data.slice(e)))
                  : (s =
                      e === t.head.data.length
                        ? t.shift()
                        : n
                        ? (function (e, t) {
                            var n = t.head,
                              s = 1,
                              o = n.data;
                            e -= o.length;
                            for (; (n = n.next); ) {
                              var i = n.data,
                                r = e > i.length ? i.length : e;
                              if (
                                (r === i.length
                                  ? (o += i)
                                  : (o += i.slice(0, e)),
                                0 === (e -= r))
                              ) {
                                r === i.length
                                  ? (++s,
                                    n.next
                                      ? (t.head = n.next)
                                      : (t.head = t.tail = null))
                                  : ((t.head = n), (n.data = i.slice(r)));
                                break;
                              }
                              ++s;
                            }
                            return (t.length -= s), o;
                          })(e, t)
                        : (function (e, t) {
                            var n = c.allocUnsafe(e),
                              s = t.head,
                              o = 1;
                            s.data.copy(n), (e -= s.data.length);
                            for (; (s = s.next); ) {
                              var i = s.data,
                                r = e > i.length ? i.length : e;
                              if (
                                (i.copy(n, n.length - e, 0, r), 0 === (e -= r))
                              ) {
                                r === i.length
                                  ? (++o,
                                    s.next
                                      ? (t.head = s.next)
                                      : (t.head = t.tail = null))
                                  : ((t.head = s), (s.data = i.slice(r)));
                                break;
                              }
                              ++o;
                            }
                            return (t.length -= o), n;
                          })(e, t));
                return s;
              })(e, t.buffer, t.decoder)),
          n);
      var n;
    }
    function I(e) {
      var t = e._readableState;
      if (t.length > 0)
        throw new Error('"endReadable()" called on non-empty stream');
      t.endEmitted || ((t.ended = !0), s.nextTick(N, t, e));
    }
    function N(e, t) {
      e.endEmitted ||
        0 !== e.length ||
        ((e.endEmitted = !0), (t.readable = !1), t.emit("end"));
    }
    function M(e, t) {
      for (var n = 0, s = e.length; n < s; n++) if (e[n] === t) return n;
      return -1;
    }
    (y.prototype.read = function (e) {
      h("read", e), (e = parseInt(e, 10));
      var t = this._readableState,
        n = e;
      if (
        (0 !== e && (t.emittedReadable = !1),
        0 === e && t.needReadable && (t.length >= t.highWaterMark || t.ended))
      )
        return (
          h("read: emitReadable", t.length, t.ended),
          0 === t.length && t.ended ? I(this) : E(this),
          null
        );
      if (0 === (e = v(e, t)) && t.ended)
        return 0 === t.length && I(this), null;
      var s,
        o = t.needReadable;
      return (
        h("need readable", o),
        (0 === t.length || t.length - e < t.highWaterMark) &&
          h("length less than watermark", (o = !0)),
        t.ended || t.reading
          ? h("reading or ended", (o = !1))
          : o &&
            (h("do read"),
            (t.reading = !0),
            (t.sync = !0),
            0 === t.length && (t.needReadable = !0),
            this._read(t.highWaterMark),
            (t.sync = !1),
            t.reading || (e = v(n, t))),
        null === (s = e > 0 ? L(e, t) : null)
          ? ((t.needReadable = !0), (e = 0))
          : (t.length -= e),
        0 === t.length &&
          (t.ended || (t.needReadable = !0), n !== e && t.ended && I(this)),
        null !== s && this.emit("data", s),
        s
      );
    }),
      (y.prototype._read = function (e) {
        this.emit("error", new Error("_read() is not implemented"));
      }),
      (y.prototype.pipe = function (e, t) {
        var n = this,
          o = this._readableState;
        switch (o.pipesCount) {
          case 0:
            o.pipes = e;
            break;
          case 1:
            o.pipes = [o.pipes, e];
            break;
          default:
            o.pipes.push(e);
        }
        (o.pipesCount += 1), h("pipe count=%d opts=%j", o.pipesCount, t);
        var a =
          (!t || !1 !== t.end) && e !== process.stdout && e !== process.stderr
            ? l
            : y;
        function c(t, s) {
          h("onunpipe"),
            t === n &&
              s &&
              !1 === s.hasUnpiped &&
              ((s.hasUnpiped = !0),
              h("cleanup"),
              e.removeListener("close", w),
              e.removeListener("finish", m),
              e.removeListener("drain", u),
              e.removeListener("error", g),
              e.removeListener("unpipe", c),
              n.removeListener("end", l),
              n.removeListener("end", y),
              n.removeListener("data", p),
              (d = !0),
              !o.awaitDrain ||
                (e._writableState && !e._writableState.needDrain) ||
                u());
        }
        function l() {
          h("onend"), e.end();
        }
        o.endEmitted ? s.nextTick(a) : n.once("end", a), e.on("unpipe", c);
        var u = (function (e) {
          return function () {
            var t = e._readableState;
            h("pipeOnDrain", t.awaitDrain),
              t.awaitDrain && t.awaitDrain--,
              0 === t.awaitDrain && r(e, "data") && ((t.flowing = !0), O(e));
          };
        })(n);
        e.on("drain", u);
        var d = !1;
        var f = !1;
        function p(t) {
          h("ondata"),
            (f = !1),
            !1 !== e.write(t) ||
              f ||
              (((1 === o.pipesCount && o.pipes === e) ||
                (o.pipesCount > 1 && -1 !== M(o.pipes, e))) &&
                !d &&
                (h("false write response, pause", o.awaitDrain),
                o.awaitDrain++,
                (f = !0)),
              n.pause());
        }
        function g(t) {
          h("onerror", t),
            y(),
            e.removeListener("error", g),
            0 === r(e, "error") && e.emit("error", t);
        }
        function w() {
          e.removeListener("finish", m), y();
        }
        function m() {
          h("onfinish"), e.removeListener("close", w), y();
        }
        function y() {
          h("unpipe"), n.unpipe(e);
        }
        return (
          n.on("data", p),
          (function (e, t, n) {
            if ("function" == typeof e.prependListener)
              return e.prependListener(t, n);
            e._events && e._events[t]
              ? i(e._events[t])
                ? e._events[t].unshift(n)
                : (e._events[t] = [n, e._events[t]])
              : e.on(t, n);
          })(e, "error", g),
          e.once("close", w),
          e.once("finish", m),
          e.emit("pipe", n),
          o.flowing || (h("pipe resume"), n.resume()),
          e
        );
      }),
      (y.prototype.unpipe = function (e) {
        var t = this._readableState,
          n = { hasUnpiped: !1 };
        if (0 === t.pipesCount) return this;
        if (1 === t.pipesCount)
          return (
            (e && e !== t.pipes) ||
              (e || (e = t.pipes),
              (t.pipes = null),
              (t.pipesCount = 0),
              (t.flowing = !1),
              e && e.emit("unpipe", this, n)),
            this
          );
        if (!e) {
          var s = t.pipes,
            o = t.pipesCount;
          (t.pipes = null), (t.pipesCount = 0), (t.flowing = !1);
          for (var i = 0; i < o; i++)
            s[i].emit("unpipe", this, { hasUnpiped: !1 });
          return this;
        }
        var r = M(t.pipes, e);
        return (
          -1 === r ||
            (t.pipes.splice(r, 1),
            (t.pipesCount -= 1),
            1 === t.pipesCount && (t.pipes = t.pipes[0]),
            e.emit("unpipe", this, n)),
          this
        );
      }),
      (y.prototype.on = function (e, t) {
        var n = a.prototype.on.call(this, e, t);
        if ("data" === e) !1 !== this._readableState.flowing && this.resume();
        else if ("readable" === e) {
          var o = this._readableState;
          o.endEmitted ||
            o.readableListening ||
            ((o.readableListening = o.needReadable = !0),
            (o.emittedReadable = !1),
            o.reading ? o.length && E(this) : s.nextTick(x, this));
        }
        return n;
      }),
      (y.prototype.addListener = y.prototype.on),
      (y.prototype.resume = function () {
        var e = this._readableState;
        return (
          e.flowing ||
            (h("resume"),
            (e.flowing = !0),
            (function (e, t) {
              t.resumeScheduled ||
                ((t.resumeScheduled = !0), s.nextTick(C, e, t));
            })(this, e)),
          this
        );
      }),
      (y.prototype.pause = function () {
        return (
          h("call pause flowing=%j", this._readableState.flowing),
          !1 !== this._readableState.flowing &&
            (h("pause"),
            (this._readableState.flowing = !1),
            this.emit("pause")),
          this
        );
      }),
      (y.prototype.wrap = function (e) {
        var t = this,
          n = this._readableState,
          s = !1;
        for (var o in (e.on("end", function () {
          if ((h("wrapped end"), n.decoder && !n.ended)) {
            var e = n.decoder.end();
            e && e.length && t.push(e);
          }
          t.push(null);
        }),
        e.on("data", function (o) {
          (h("wrapped data"),
          n.decoder && (o = n.decoder.write(o)),
          n.objectMode && null == o) ||
            ((n.objectMode || (o && o.length)) &&
              (t.push(o) || ((s = !0), e.pause())));
        }),
        e))
          void 0 === this[o] &&
            "function" == typeof e[o] &&
            (this[o] = (function (t) {
              return function () {
                return e[t].apply(e, arguments);
              };
            })(o));
        for (var i = 0; i < w.length; i++)
          e.on(w[i], this.emit.bind(this, w[i]));
        return (
          (this._read = function (t) {
            h("wrapped _read", t), s && ((s = !1), e.resume());
          }),
          this
        );
      }),
      Object.defineProperty(y.prototype, "readableHighWaterMark", {
        enumerable: !1,
        get: function () {
          return this._readableState.highWaterMark;
        },
      }),
      (y._fromList = L);
  },
  function (e, t, n) {
    e.exports = n(38);
  },
  function (e, t, n) {
    "use strict";
    var s = n(42);
    function o(e, t) {
      e.emit("error", t);
    }
    e.exports = {
      destroy: function (e, t) {
        var n = this,
          i = this._readableState && this._readableState.destroyed,
          r = this._writableState && this._writableState.destroyed;
        return i || r
          ? (t
              ? t(e)
              : e &&
                (this._writableState
                  ? this._writableState.errorEmitted ||
                    ((this._writableState.errorEmitted = !0),
                    s.nextTick(o, this, e))
                  : s.nextTick(o, this, e)),
            this)
          : (this._readableState && (this._readableState.destroyed = !0),
            this._writableState && (this._writableState.destroyed = !0),
            this._destroy(e || null, function (e) {
              !t && e
                ? n._writableState
                  ? n._writableState.errorEmitted ||
                    ((n._writableState.errorEmitted = !0), s.nextTick(o, n, e))
                  : s.nextTick(o, n, e)
                : t && t(e);
            }),
            this);
      },
      undestroy: function () {
        this._readableState &&
          ((this._readableState.destroyed = !1),
          (this._readableState.reading = !1),
          (this._readableState.ended = !1),
          (this._readableState.endEmitted = !1)),
          this._writableState &&
            ((this._writableState.destroyed = !1),
            (this._writableState.ended = !1),
            (this._writableState.ending = !1),
            (this._writableState.finalCalled = !1),
            (this._writableState.prefinished = !1),
            (this._writableState.finished = !1),
            (this._writableState.errorEmitted = !1));
      },
    };
  },
  function (e, t, n) {
    "use strict";
    var s = n(42);
    function o(e) {
      var t = this;
      (this.next = null),
        (this.entry = null),
        (this.finish = function () {
          !(function (e, t, n) {
            var s = e.entry;
            e.entry = null;
            for (; s; ) {
              var o = s.callback;
              t.pendingcb--, o(n), (s = s.next);
            }
            t.corkedRequestsFree.next = e;
          })(t, e);
        });
    }
    e.exports = w;
    var i,
      r =
        !process.browser &&
        ["v0.10", "v0.9."].indexOf(process.version.slice(0, 5)) > -1
          ? setImmediate
          : s.nextTick;
    w.WritableState = g;
    var a = Object.create(n(39));
    a.inherits = n(40);
    var c = { deprecate: n(161) },
      l = n(86),
      u = n(44).Buffer,
      d =
        ("undefined" != typeof global
          ? global
          : "undefined" != typeof window
          ? window
          : "undefined" != typeof self
          ? self
          : {}
        ).Uint8Array || function () {};
    var h,
      f = n(87);
    function p() {}
    function g(e, t) {
      (i = i || n(36)), (e = e || {});
      var a = t instanceof i;
      (this.objectMode = !!e.objectMode),
        a && (this.objectMode = this.objectMode || !!e.writableObjectMode);
      var c = e.highWaterMark,
        l = e.writableHighWaterMark,
        u = this.objectMode ? 16 : 16384;
      (this.highWaterMark = c || 0 === c ? c : a && (l || 0 === l) ? l : u),
        (this.highWaterMark = Math.floor(this.highWaterMark)),
        (this.finalCalled = !1),
        (this.needDrain = !1),
        (this.ending = !1),
        (this.ended = !1),
        (this.finished = !1),
        (this.destroyed = !1);
      var d = !1 === e.decodeStrings;
      (this.decodeStrings = !d),
        (this.defaultEncoding = e.defaultEncoding || "utf8"),
        (this.length = 0),
        (this.writing = !1),
        (this.corked = 0),
        (this.sync = !0),
        (this.bufferProcessing = !1),
        (this.onwrite = function (e) {
          !(function (e, t) {
            var n = e._writableState,
              o = n.sync,
              i = n.writecb;
            if (
              ((function (e) {
                (e.writing = !1),
                  (e.writecb = null),
                  (e.length -= e.writelen),
                  (e.writelen = 0);
              })(n),
              t)
            )
              !(function (e, t, n, o, i) {
                --t.pendingcb,
                  n
                    ? (s.nextTick(i, o),
                      s.nextTick(E, e, t),
                      (e._writableState.errorEmitted = !0),
                      e.emit("error", o))
                    : (i(o),
                      (e._writableState.errorEmitted = !0),
                      e.emit("error", o),
                      E(e, t));
              })(e, n, o, t, i);
            else {
              var a = S(n);
              a ||
                n.corked ||
                n.bufferProcessing ||
                !n.bufferedRequest ||
                b(e, n),
                o ? r(y, e, n, a, i) : y(e, n, a, i);
            }
          })(t, e);
        }),
        (this.writecb = null),
        (this.writelen = 0),
        (this.bufferedRequest = null),
        (this.lastBufferedRequest = null),
        (this.pendingcb = 0),
        (this.prefinished = !1),
        (this.errorEmitted = !1),
        (this.bufferedRequestCount = 0),
        (this.corkedRequestsFree = new o(this));
    }
    function w(e) {
      if (((i = i || n(36)), !(h.call(w, this) || this instanceof i)))
        return new w(e);
      (this._writableState = new g(e, this)),
        (this.writable = !0),
        e &&
          ("function" == typeof e.write && (this._write = e.write),
          "function" == typeof e.writev && (this._writev = e.writev),
          "function" == typeof e.destroy && (this._destroy = e.destroy),
          "function" == typeof e.final && (this._final = e.final)),
        l.call(this);
    }
    function m(e, t, n, s, o, i, r) {
      (t.writelen = s),
        (t.writecb = r),
        (t.writing = !0),
        (t.sync = !0),
        n ? e._writev(o, t.onwrite) : e._write(o, i, t.onwrite),
        (t.sync = !1);
    }
    function y(e, t, n, s) {
      n ||
        (function (e, t) {
          0 === t.length &&
            t.needDrain &&
            ((t.needDrain = !1), e.emit("drain"));
        })(e, t),
        t.pendingcb--,
        s(),
        E(e, t);
    }
    function b(e, t) {
      t.bufferProcessing = !0;
      var n = t.bufferedRequest;
      if (e._writev && n && n.next) {
        var s = t.bufferedRequestCount,
          i = new Array(s),
          r = t.corkedRequestsFree;
        r.entry = n;
        for (var a = 0, c = !0; n; )
          (i[a] = n), n.isBuf || (c = !1), (n = n.next), (a += 1);
        (i.allBuffers = c),
          m(e, t, !0, t.length, i, "", r.finish),
          t.pendingcb++,
          (t.lastBufferedRequest = null),
          r.next
            ? ((t.corkedRequestsFree = r.next), (r.next = null))
            : (t.corkedRequestsFree = new o(t)),
          (t.bufferedRequestCount = 0);
      } else {
        for (; n; ) {
          var l = n.chunk,
            u = n.encoding,
            d = n.callback;
          if (
            (m(e, t, !1, t.objectMode ? 1 : l.length, l, u, d),
            (n = n.next),
            t.bufferedRequestCount--,
            t.writing)
          )
            break;
        }
        null === n && (t.lastBufferedRequest = null);
      }
      (t.bufferedRequest = n), (t.bufferProcessing = !1);
    }
    function S(e) {
      return (
        e.ending &&
        0 === e.length &&
        null === e.bufferedRequest &&
        !e.finished &&
        !e.writing
      );
    }
    function v(e, t) {
      e._final(function (n) {
        t.pendingcb--,
          n && e.emit("error", n),
          (t.prefinished = !0),
          e.emit("prefinish"),
          E(e, t);
      });
    }
    function E(e, t) {
      var n = S(t);
      return (
        n &&
          (!(function (e, t) {
            t.prefinished ||
              t.finalCalled ||
              ("function" == typeof e._final
                ? (t.pendingcb++, (t.finalCalled = !0), s.nextTick(v, e, t))
                : ((t.prefinished = !0), e.emit("prefinish")));
          })(e, t),
          0 === t.pendingcb && ((t.finished = !0), e.emit("finish"))),
        n
      );
    }
    a.inherits(w, l),
      (g.prototype.getBuffer = function () {
        for (var e = this.bufferedRequest, t = []; e; ) t.push(e), (e = e.next);
        return t;
      }),
      (function () {
        try {
          Object.defineProperty(g.prototype, "buffer", {
            get: c.deprecate(
              function () {
                return this.getBuffer();
              },
              "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.",
              "DEP0003"
            ),
          });
        } catch (e) {}
      })(),
      "function" == typeof Symbol &&
      Symbol.hasInstance &&
      "function" == typeof Function.prototype[Symbol.hasInstance]
        ? ((h = Function.prototype[Symbol.hasInstance]),
          Object.defineProperty(w, Symbol.hasInstance, {
            value: function (e) {
              return (
                !!h.call(this, e) ||
                (this === w && e && e._writableState instanceof g)
              );
            },
          }))
        : (h = function (e) {
            return e instanceof this;
          }),
      (w.prototype.pipe = function () {
        this.emit("error", new Error("Cannot pipe, not readable"));
      }),
      (w.prototype.write = function (e, t, n) {
        var o,
          i = this._writableState,
          r = !1,
          a = !i.objectMode && ((o = e), u.isBuffer(o) || o instanceof d);
        return (
          a &&
            !u.isBuffer(e) &&
            (e = (function (e) {
              return u.from(e);
            })(e)),
          "function" == typeof t && ((n = t), (t = null)),
          a ? (t = "buffer") : t || (t = i.defaultEncoding),
          "function" != typeof n && (n = p),
          i.ended
            ? (function (e, t) {
                var n = new Error("write after end");
                e.emit("error", n), s.nextTick(t, n);
              })(this, n)
            : (a ||
                (function (e, t, n, o) {
                  var i = !0,
                    r = !1;
                  return (
                    null === n
                      ? (r = new TypeError(
                          "May not write null values to stream"
                        ))
                      : "string" == typeof n ||
                        void 0 === n ||
                        t.objectMode ||
                        (r = new TypeError("Invalid non-string/buffer chunk")),
                    r && (e.emit("error", r), s.nextTick(o, r), (i = !1)),
                    i
                  );
                })(this, i, e, n)) &&
              (i.pendingcb++,
              (r = (function (e, t, n, s, o, i) {
                if (!n) {
                  var r = (function (e, t, n) {
                    e.objectMode ||
                      !1 === e.decodeStrings ||
                      "string" != typeof t ||
                      (t = u.from(t, n));
                    return t;
                  })(t, s, o);
                  s !== r && ((n = !0), (o = "buffer"), (s = r));
                }
                var a = t.objectMode ? 1 : s.length;
                t.length += a;
                var c = t.length < t.highWaterMark;
                c || (t.needDrain = !0);
                if (t.writing || t.corked) {
                  var l = t.lastBufferedRequest;
                  (t.lastBufferedRequest = {
                    chunk: s,
                    encoding: o,
                    isBuf: n,
                    callback: i,
                    next: null,
                  }),
                    l
                      ? (l.next = t.lastBufferedRequest)
                      : (t.bufferedRequest = t.lastBufferedRequest),
                    (t.bufferedRequestCount += 1);
                } else m(e, t, !1, a, s, o, i);
                return c;
              })(this, i, a, e, t, n))),
          r
        );
      }),
      (w.prototype.cork = function () {
        this._writableState.corked++;
      }),
      (w.prototype.uncork = function () {
        var e = this._writableState;
        e.corked &&
          (e.corked--,
          e.writing ||
            e.corked ||
            e.bufferProcessing ||
            !e.bufferedRequest ||
            b(this, e));
      }),
      (w.prototype.setDefaultEncoding = function (e) {
        if (
          ("string" == typeof e && (e = e.toLowerCase()),
          !(
            [
              "hex",
              "utf8",
              "utf-8",
              "ascii",
              "binary",
              "base64",
              "ucs2",
              "ucs-2",
              "utf16le",
              "utf-16le",
              "raw",
            ].indexOf((e + "").toLowerCase()) > -1
          ))
        )
          throw new TypeError("Unknown encoding: " + e);
        return (this._writableState.defaultEncoding = e), this;
      }),
      Object.defineProperty(w.prototype, "writableHighWaterMark", {
        enumerable: !1,
        get: function () {
          return this._writableState.highWaterMark;
        },
      }),
      (w.prototype._write = function (e, t, n) {
        n(new Error("_write() is not implemented"));
      }),
      (w.prototype._writev = null),
      (w.prototype.end = function (e, t, n) {
        var o = this._writableState;
        "function" == typeof e
          ? ((n = e), (e = null), (t = null))
          : "function" == typeof t && ((n = t), (t = null)),
          null != e && this.write(e, t),
          o.corked && ((o.corked = 1), this.uncork()),
          o.ending ||
            (function (e, t, n) {
              (t.ending = !0),
                E(e, t),
                n && (t.finished ? s.nextTick(n) : e.once("finish", n));
              (t.ended = !0), (e.writable = !1);
            })(this, o, n);
      }),
      Object.defineProperty(w.prototype, "destroyed", {
        get: function () {
          return (
            void 0 !== this._writableState && this._writableState.destroyed
          );
        },
        set: function (e) {
          this._writableState && (this._writableState.destroyed = e);
        },
      }),
      (w.prototype.destroy = f.destroy),
      (w.prototype._undestroy = f.undestroy),
      (w.prototype._destroy = function (e, t) {
        this.end(), t(e);
      });
  },
  function (e, t, n) {
    "use strict";
    var s = n(44).Buffer,
      o =
        s.isEncoding ||
        function (e) {
          switch ((e = "" + e) && e.toLowerCase()) {
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "binary":
            case "base64":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
            case "raw":
              return !0;
            default:
              return !1;
          }
        };
    function i(e) {
      var t;
      switch (
        ((this.encoding = (function (e) {
          var t = (function (e) {
            if (!e) return "utf8";
            for (var t; ; )
              switch (e) {
                case "utf8":
                case "utf-8":
                  return "utf8";
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                  return "utf16le";
                case "latin1":
                case "binary":
                  return "latin1";
                case "base64":
                case "ascii":
                case "hex":
                  return e;
                default:
                  if (t) return;
                  (e = ("" + e).toLowerCase()), (t = !0);
              }
          })(e);
          if ("string" != typeof t && (s.isEncoding === o || !o(e)))
            throw new Error("Unknown encoding: " + e);
          return t || e;
        })(e)),
        this.encoding)
      ) {
        case "utf16le":
          (this.text = c), (this.end = l), (t = 4);
          break;
        case "utf8":
          (this.fillLast = a), (t = 4);
          break;
        case "base64":
          (this.text = u), (this.end = d), (t = 3);
          break;
        default:
          return (this.write = h), void (this.end = f);
      }
      (this.lastNeed = 0),
        (this.lastTotal = 0),
        (this.lastChar = s.allocUnsafe(t));
    }
    function r(e) {
      return e <= 127
        ? 0
        : e >> 5 == 6
        ? 2
        : e >> 4 == 14
        ? 3
        : e >> 3 == 30
        ? 4
        : e >> 6 == 2
        ? -1
        : -2;
    }
    function a(e) {
      var t = this.lastTotal - this.lastNeed,
        n = (function (e, t, n) {
          if (128 != (192 & t[0])) return (e.lastNeed = 0), "�";
          if (e.lastNeed > 1 && t.length > 1) {
            if (128 != (192 & t[1])) return (e.lastNeed = 1), "�";
            if (e.lastNeed > 2 && t.length > 2 && 128 != (192 & t[2]))
              return (e.lastNeed = 2), "�";
          }
        })(this, e);
      return void 0 !== n
        ? n
        : this.lastNeed <= e.length
        ? (e.copy(this.lastChar, t, 0, this.lastNeed),
          this.lastChar.toString(this.encoding, 0, this.lastTotal))
        : (e.copy(this.lastChar, t, 0, e.length),
          void (this.lastNeed -= e.length));
    }
    function c(e, t) {
      if ((e.length - t) % 2 == 0) {
        var n = e.toString("utf16le", t);
        if (n) {
          var s = n.charCodeAt(n.length - 1);
          if (s >= 55296 && s <= 56319)
            return (
              (this.lastNeed = 2),
              (this.lastTotal = 4),
              (this.lastChar[0] = e[e.length - 2]),
              (this.lastChar[1] = e[e.length - 1]),
              n.slice(0, -1)
            );
        }
        return n;
      }
      return (
        (this.lastNeed = 1),
        (this.lastTotal = 2),
        (this.lastChar[0] = e[e.length - 1]),
        e.toString("utf16le", t, e.length - 1)
      );
    }
    function l(e) {
      var t = e && e.length ? this.write(e) : "";
      if (this.lastNeed) {
        var n = this.lastTotal - this.lastNeed;
        return t + this.lastChar.toString("utf16le", 0, n);
      }
      return t;
    }
    function u(e, t) {
      var n = (e.length - t) % 3;
      return 0 === n
        ? e.toString("base64", t)
        : ((this.lastNeed = 3 - n),
          (this.lastTotal = 3),
          1 === n
            ? (this.lastChar[0] = e[e.length - 1])
            : ((this.lastChar[0] = e[e.length - 2]),
              (this.lastChar[1] = e[e.length - 1])),
          e.toString("base64", t, e.length - n));
    }
    function d(e) {
      var t = e && e.length ? this.write(e) : "";
      return this.lastNeed
        ? t + this.lastChar.toString("base64", 0, 3 - this.lastNeed)
        : t;
    }
    function h(e) {
      return e.toString(this.encoding);
    }
    function f(e) {
      return e && e.length ? this.write(e) : "";
    }
    (t.StringDecoder = i),
      (i.prototype.write = function (e) {
        if (0 === e.length) return "";
        var t, n;
        if (this.lastNeed) {
          if (void 0 === (t = this.fillLast(e))) return "";
          (n = this.lastNeed), (this.lastNeed = 0);
        } else n = 0;
        return n < e.length
          ? t
            ? t + this.text(e, n)
            : this.text(e, n)
          : t || "";
      }),
      (i.prototype.end = function (e) {
        var t = e && e.length ? this.write(e) : "";
        return this.lastNeed ? t + "�" : t;
      }),
      (i.prototype.text = function (e, t) {
        var n = (function (e, t, n) {
          var s = t.length - 1;
          if (s < n) return 0;
          var o = r(t[s]);
          if (o >= 0) return o > 0 && (e.lastNeed = o - 1), o;
          if (--s < n || -2 === o) return 0;
          if ((o = r(t[s])) >= 0) return o > 0 && (e.lastNeed = o - 2), o;
          if (--s < n || -2 === o) return 0;
          if ((o = r(t[s])) >= 0)
            return o > 0 && (2 === o ? (o = 0) : (e.lastNeed = o - 3)), o;
          return 0;
        })(this, e, t);
        if (!this.lastNeed) return e.toString("utf8", t);
        this.lastTotal = n;
        var s = e.length - (n - this.lastNeed);
        return e.copy(this.lastChar, 0, s), e.toString("utf8", t, s);
      }),
      (i.prototype.fillLast = function (e) {
        if (this.lastNeed <= e.length)
          return (
            e.copy(
              this.lastChar,
              this.lastTotal - this.lastNeed,
              0,
              this.lastNeed
            ),
            this.lastChar.toString(this.encoding, 0, this.lastTotal)
          );
        e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, e.length),
          (this.lastNeed -= e.length);
      });
  },
  function (e, t, n) {
    "use strict";
    e.exports = r;
    var s = n(36),
      o = Object.create(n(39));
    function i(e, t) {
      var n = this._transformState;
      n.transforming = !1;
      var s = n.writecb;
      if (!s)
        return this.emit(
          "error",
          new Error("write callback called multiple times")
        );
      (n.writechunk = null),
        (n.writecb = null),
        null != t && this.push(t),
        s(e);
      var o = this._readableState;
      (o.reading = !1),
        (o.needReadable || o.length < o.highWaterMark) &&
          this._read(o.highWaterMark);
    }
    function r(e) {
      if (!(this instanceof r)) return new r(e);
      s.call(this, e),
        (this._transformState = {
          afterTransform: i.bind(this),
          needTransform: !1,
          transforming: !1,
          writecb: null,
          writechunk: null,
          writeencoding: null,
        }),
        (this._readableState.needReadable = !0),
        (this._readableState.sync = !1),
        e &&
          ("function" == typeof e.transform && (this._transform = e.transform),
          "function" == typeof e.flush && (this._flush = e.flush)),
        this.on("prefinish", a);
    }
    function a() {
      var e = this;
      "function" == typeof this._flush
        ? this._flush(function (t, n) {
            c(e, t, n);
          })
        : c(this, null, null);
    }
    function c(e, t, n) {
      if (t) return e.emit("error", t);
      if ((null != n && e.push(n), e._writableState.length))
        throw new Error("Calling transform done when ws.length != 0");
      if (e._transformState.transforming)
        throw new Error("Calling transform done when still transforming");
      return e.push(null);
    }
    (o.inherits = n(40)),
      o.inherits(r, s),
      (r.prototype.push = function (e, t) {
        return (
          (this._transformState.needTransform = !1),
          s.prototype.push.call(this, e, t)
        );
      }),
      (r.prototype._transform = function (e, t, n) {
        throw new Error("_transform() is not implemented");
      }),
      (r.prototype._write = function (e, t, n) {
        var s = this._transformState;
        if (
          ((s.writecb = n),
          (s.writechunk = e),
          (s.writeencoding = t),
          !s.transforming)
        ) {
          var o = this._readableState;
          (s.needTransform || o.needReadable || o.length < o.highWaterMark) &&
            this._read(o.highWaterMark);
        }
      }),
      (r.prototype._read = function (e) {
        var t = this._transformState;
        null !== t.writechunk && t.writecb && !t.transforming
          ? ((t.transforming = !0),
            this._transform(t.writechunk, t.writeencoding, t.afterTransform))
          : (t.needTransform = !0);
      }),
      (r.prototype._destroy = function (e, t) {
        var n = this;
        s.prototype._destroy.call(this, e, function (e) {
          t(e), n.emit("close");
        });
      });
  },
  function (e, t, n) {
    const s = n(34),
      o = n(35),
      i = n(80),
      r = n(10)("log4js:categories"),
      a = new Map();
    s.addListener((e) => {
      s.throwExceptionIf(
        e,
        s.not(s.anObject(e.categories)),
        'must have a property "categories" of type object.'
      );
      const t = Object.keys(e.categories);
      s.throwExceptionIf(
        e,
        s.not(t.length),
        "must define at least one category."
      ),
        t.forEach((t) => {
          const n = e.categories[t];
          s.throwExceptionIf(
            e,
            [s.not(n.appenders), s.not(n.level)],
            `category "${t}" is not valid (must be an object with properties "appenders" and "level")`
          ),
            s.throwExceptionIf(
              e,
              s.not(Array.isArray(n.appenders)),
              `category "${t}" is not valid (appenders must be an array of appender names)`
            ),
            s.throwExceptionIf(
              e,
              s.not(n.appenders.length),
              `category "${t}" is not valid (appenders must contain at least one appender name)`
            ),
            n.appenders.forEach((n) => {
              s.throwExceptionIf(
                e,
                s.not(i.get(n)),
                `category "${t}" is not valid (appender "${n}" is not defined)`
              );
            }),
            s.throwExceptionIf(
              e,
              s.not(o.getLevel(n.level)),
              `category "${t}" is not valid (level "${
                n.level
              }" not recognised; valid levels are ${o.levels.join(", ")})`
            );
        }),
        s.throwExceptionIf(
          e,
          s.not(e.categories.default),
          'must define a "default" category.'
        );
    });
    const c = (e) => {
      a.clear();
      Object.keys(e.categories).forEach((t) => {
        const n = e.categories[t],
          s = [];
        n.appenders.forEach((e) => {
          s.push(i.get(e)),
            r("Creating category " + t),
            a.set(t, { appenders: s, level: o.getLevel(n.level) });
        });
      });
    };
    c({ categories: { default: { appenders: ["out"], level: "OFF" } } }),
      s.addListener(c);
    const l = (e) => (
      r("configForCategory: searching for config for " + e),
      a.has(e)
        ? (r(`configForCategory: ${e} exists in config, returning it`),
          a.get(e))
        : e.indexOf(".") > 0
        ? (r(`configForCategory: ${e} has hierarchy, searching for parents`),
          l(e.substring(0, e.lastIndexOf("."))))
        : (r("configForCategory: returning config for default category"),
          l("default"))
    );
    e.exports = {
      appendersForCategory: (e) => l(e).appenders,
      getLevelForCategory: (e) => l(e).level,
      setLevelForCategory: (e, t) => {
        let n = a.get(e);
        if ((r(`setLevelForCategory: found ${n} for ${e}`), !n)) {
          const t = l(e);
          r(
            `setLevelForCategory: no config found for category, found ${t} for parents of ${e}`
          ),
            (n = { appenders: t.appenders });
        }
        (n.level = t), a.set(e, n);
      },
    };
  },
  function (e, t, n) {
    (function (t) {
      const s = n(5);
      e.exports = {
        topMostForbidden: !0,
        canOpenDevTool: !0,
        webConfig: {
          fridayAppId: "a4a68f88205089bf228c62ca787d2bc6",
          ccloudAppId: "8aea57e2287dd1523ee0b6bc9a80cf5c07dc9708",
          seewoIotAppAdmin:
            "https://campus-dev.test.seewo.com/seewo-iot-app-admin",
          activationCodeUnlockTargetUrl:
            "https://campus.test.seewo.com/hugo-mobile/#/offlinelock",
          ucUrl: "https://id.test.seewo.com",
          hugoUrl: "https://campus.test.seewo.com/hugo",
          sceneAudioRoot: s.resolve(t, "..", "assets/SceneVoice"),
          iframePreLoadJs: s.resolve(t, "..", "assets/js/iframe.js"),
          updateLogUrl:
            "https://campus-dev.test.seewo.com/iot-public/file/?key=iot_doc_seewoServiceUpdateLog",
          uipsControllerIframeUrl:
            "https://campus-dev.test.seewo.com/uips/uipsControllerIframe",
          MFSiteUrl: "https://campus.test.seewo.com/iot-public/redirectToMF",
          appId: "internal-01",
          secrete: "v2jn0r9y2t2nrawgv0j5z6jdcfwjbhgn",
        },
        webSourcePath: "http://127.0.0.1:8066/",
        appPath: s.resolve(t, ".."),
        logsPath: s.resolve(t, "..", "logs"),
        customMadeRoot: s.resolve(t, "..", "assets/customMade"),
        dllRoot: s.resolve(t, "..", "assets/dlls"),
        jsRoot: s.resolve(t, "..", "assets/js"),
        activationCodePublicKey:
          "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA1ez6JFoQW3hYDKDBI57huWtTYMreAXizF4S28eGcsi4WBYxkTqM72O93YHIwXITJeaLi2amRqV7lBOZgmZvuXIkseG6C1oXNVEq1rllkWpgqq5fyZbNQiivCjbRQysyXJI4lpjtTsGssQ7Iy+BWegu74Q5NTg5MvV544xRCNgrJ4G88ZxUiVdyCLcL9kmgc/ongxFL/jO33pknM+c8i+ZA4JpgzUSw2EFKOcDVEqO/16r2LdzMoePqMQxKny5FmVvaKRH3/HsEglW1R+x0j4Rc9cNrH1BwDIgankIwJIXdVXOy6LBueIqKSPJ8l4G2aPx7e/FxGBWHpdeIf31AKEYQIDAQAB",
      };
    }).call(this, "..\\..\\..\\config");
  },
  function (e, t, n) {
    e.exports = function (e) {
      return (
        console.log(e),
        e.indexOf("ffi-napi") > -1
          ? n(176)
          : e.indexOf("ref-napi") > -1
          ? n(177)
          : void 0
      );
    };
  },
  function (e, t, n) {
    "use strict";
    var s = n(13),
      o = n(15),
      i = n(10)("ref:struct");
    e.exports = function (e) {
      function t(e, t) {
        return (
          i('Struct "type" getter for buffer at offset', e, t),
          t > 0 && (e = e.slice(t)),
          new this(e)
        );
      }
      function n(e, t, n) {
        i('Struct "type" setter for buffer at offset', e, t, n),
          n instanceof this
            ? n["ref.buffer"].copy(e, t, 0, this.size)
            : (t > 0 && (e = e.slice(t)), new this(e, n));
      }
      function r() {
        return "[StructType]";
      }
      function a(t, n) {
        i("defining new struct type field", t),
          (n = e.coerceType(n)),
          o(
            !this._instanceCreated,
            'an instance of this Struct type has already been created, cannot add new "fields" anymore'
          ),
          o.equal("string", typeof t, 'expected a "string" field name'),
          o(
            n &&
              /object|function/i.test(typeof n) &&
              "size" in n &&
              "indirection" in n,
            'expected a "type" object describing the field type: "' + n + '"'
          ),
          o(
            n.indirection > 1 || n.size > 0,
            '"type" object must have a size greater than 0'
          ),
          o(
            !(t in this.prototype),
            'the field "' + t + '" already exists in this Struct type'
          );
        var s = { type: n };
        this.fields[t] = s;
        var r = {
          enumerable: !0,
          configurable: !0,
          get: function () {
            return (
              i('getting "%s" struct field (offset: %d)', t, s.offset),
              e.get(this["ref.buffer"], s.offset, n)
            );
          },
          set: function (o) {
            return (
              i('setting "%s" struct field (offset: %d)', t, s.offset, o),
              e.set(this["ref.buffer"], s.offset, o, n)
            );
          },
        };
        (function (t) {
          (t.size = 0), (t.alignment = 0);
          var n = Object.keys(t.fields);
          function s(n) {
            var s = t.size,
              i = 1 === n.indirection ? n.alignment : e.alignof.pointer,
              r = t.isPacked ? 0 : (i - (s % i)) % i,
              a = 1 === n.indirection ? n.size : e.sizeof.pointer;
            return (
              (s += r),
              t.isPacked || o.equal(s % i, 0, "offset should align"),
              (t.size = s + a),
              s
            );
          }
          n.forEach(function (n) {
            var s = t.fields[n].type,
              o = s.alignment || e.alignof.pointer;
            s.indirection > 1 && (o = e.alignof.pointer),
              t.isPacked
                ? (t.alignment = Math.min(t.alignment || o, o))
                : (t.alignment = Math.max(t.alignment, o));
          }),
            n.forEach(function (e) {
              var n = t.fields[e],
                o = n.type;
              if (null != o.fixedLength) {
                n.offset = s(o.type);
                for (var i = 1; i < o.fixedLength; i++) s(o.type);
              } else n.offset = s(o);
            });
          var r = t.size % t.alignment;
          r > 0 &&
            (i("additional padding to the end of struct:", t.alignment - r),
            (t.size += t.alignment - r));
        })(this),
          Object.defineProperty(this.prototype, t, r);
      }
      var c = {};
      return (
        (c["ref.buffer"] = e.NULL),
        (c.toObject = function () {
          var e = {};
          return (
            Object.keys(this.constructor.fields).forEach(function (t) {
              e[t] = this[t];
            }, this),
            e
          );
        }),
        (c.toJSON = function () {
          return this.toObject();
        }),
        (c.inspect = function () {
          var e = this.toObject();
          return (
            Object.keys(this).forEach(function (t) {
              e[t] = this[t];
            }, this),
            s.inspect(e)
          );
        }),
        (c.ref = function () {
          return this["ref.buffer"];
        }),
        function () {
          function e(t, n) {
            if (!(this instanceof e)) return new e(t, n);
            var s;
            if (
              (i("creating new struct instance"),
              Buffer.isBuffer(t)
                ? (i("using passed-in Buffer instance to back the struct", t),
                  o(
                    t.length >= e.size,
                    "Buffer instance must be at least " +
                      e.size +
                      " bytes to back this struct type"
                  ),
                  (s = t),
                  (t = n))
                : (i(
                    "creating new Buffer instance to back the struct (size: %d)",
                    e.size
                  ),
                  (s = Buffer.alloc(e.size))),
              (s.type = e),
              (this["ref.buffer"] = s),
              t)
            )
              for (var r in t) this[r] = t[r];
            e._instanceCreated = !0;
          }
          i('defining new struct "type"'),
            (e.prototype = Object.create(c, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
            (e.defineProperty = a),
            (e.toString = r),
            (e.fields = {});
          var s = arguments.length > 0 && arguments[1] ? arguments[1] : {};
          (e.size = 0),
            (e.alignment = 0),
            (e.indirection = 1),
            (e.isPacked = !!s.packed && Boolean(s.packed)),
            (e.get = t),
            (e.set = n);
          var l = arguments[0];
          return (
            Array.isArray(l)
              ? l.forEach(function (t) {
                  var n = t[0],
                    s = t[1];
                  e.defineProperty(s, n);
                })
              : "object" == typeof l &&
                Object.keys(l).forEach(function (t) {
                  var n = l[t];
                  e.defineProperty(t, n);
                }),
            e
          );
        }
      );
    };
  },
  function (e, t, n) {
    "use strict";
    const s = n(47),
      o = n(15),
      i = n(10)("ffi:cif_var"),
      r = n(14),
      a = n(21),
      c = r.sizeof.pointer,
      l = a.ffi_prep_cif_var,
      u = a.FFI_CIF_SIZE,
      d = a.FFI_DEFAULT_ABI,
      h = a.FFI_OK,
      f = a.FFI_BAD_TYPEDEF,
      p = a.FFI_BAD_ABI;
    e.exports = function (e, t, n, r) {
      i("creating `ffi_cif *` instance with `ffi_prep_cif_var()`"),
        o(!!e, 'expected a return "type" object as the first argument'),
        o(
          Array.isArray(t),
          'expected an Array of arg "type" objects as the second argument'
        ),
        o(n >= 1, "expected the number of fixed arguments to be at least 1");
      const a = Buffer.alloc(u),
        g = t.length,
        w = Buffer.alloc(g * c),
        m = s(e);
      for (let e = 0; e < g; e++) {
        const n = s(t[e]);
        w.writePointer(n, e * c);
      }
      (a.rtnTypePtr = m),
        (a.argTypesPtr = w),
        void 0 === r &&
          (i("no ABI specified (this is OK), using FFI_DEFAULT_ABI"), (r = d));
      const y = l(a, n, g, m, w, r);
      if (y !== h)
        switch (y) {
          case f: {
            const e = new Error(
              "ffi_prep_cif_var() returned an FFI_BAD_TYPEDEF error"
            );
            throw ((e.code = "FFI_BAD_TYPEDEF"), (e.errno = y), e);
          }
          case p: {
            const e = new Error(
              "ffi_prep_cif_var() returned an FFI_BAD_ABI error"
            );
            throw ((e.code = "FFI_BAD_ABI"), (e.errno = y), e);
          }
          default: {
            const e = new Error("ffi_prep_cif_var() returned an error: " + y);
            throw ((e.errno = y), e);
          }
        }
      return a;
    };
  },
  function (e, t, n) {
    "use strict";
    const s = n(14),
      o = n(62),
      i = n(15),
      r = n(10)("ffi:Callback"),
      a = n(21).Callback;
    function c(e) {
      e &&
        process.nextTick(function () {
          throw "string" == typeof e ? new Error(e) : e;
        });
    }
    e.exports = function (e, t, n, l) {
      r("creating new Callback"),
        "function" == typeof n && ((l = n), (n = void 0)),
        i(!!e, 'expected a return "type" object as the first argument'),
        i(
          Array.isArray(t),
          'expected Array of arg "type" objects as the second argument'
        ),
        i.equal(
          typeof l,
          "function",
          "expected a function as the third argument"
        ),
        (e = s.coerceType(e)),
        (t = t.map(s.coerceType));
      const u = o(e, t, n),
        d = t.length,
        h = a(u, e.size, d, c, (n, o) => {
          r("Callback function being invoked");
          try {
            const r = [];
            for (var i = 0; i < d; i++) {
              const e = t[i],
                n = o.readPointer(i * s.sizeof.pointer, e.size);
              (n.type = e), r.push(n.deref());
            }
            const a = l.apply(null, r);
            try {
              s.set(n, 0, a, e);
            } catch (e) {
              throw (
                ((e.message = "error setting return value - " + e.message), e)
              );
            }
          } catch (e) {
            return e;
          }
        });
      return (h._cif = u), h;
    };
  },
  function (e, t, n) {
    "use strict";
    const s = n(15),
      o = n(10)("ffi:_ForeignFunction"),
      i = n(14),
      r = n(21),
      a = i.sizeof.pointer,
      c = r.FFI_ARG_SIZE;
    e.exports = function (e, t, n, l) {
      o("creating new ForeignFunction", t);
      const u = l.length,
        d = u * a,
        h = n.size >= i.sizeof.long ? n.size : c;
      s(h > 0);
      const f = function () {
        if ((o("invoking proxy function"), arguments.length !== u))
          throw new TypeError(
            "Expected " + u + " arguments, got " + arguments.length
          );
        const s = Buffer.alloc(h),
          c = Buffer.alloc(d);
        let f;
        try {
          for (f = 0; f < u; f++) {
            const e = l[f],
              t = arguments[f],
              n = i.alloc(e, t);
            c.writePointer(n, f * a);
          }
        } catch (e) {
          throw (
            (f++,
            (e.message = "error setting argument " + f + " - " + e.message),
            e)
          );
        }
        return r.ffi_call(e, t, s, c), (s.type = n), s.deref();
      };
      return (
        (f.async = function () {
          o("invoking async proxy function");
          const s = arguments.length;
          if (s !== u + 1)
            throw new TypeError("Expected " + (u + 1) + " arguments, got " + s);
          const c = arguments[s - 1];
          if ("function" != typeof c)
            throw new TypeError(
              "Expected a callback function as argument number: " + (s - 1)
            );
          const f = Buffer.alloc(h),
            p = Buffer.alloc(d);
          let g;
          try {
            for (g = 0; g < u; g++) {
              const e = l[g],
                t = arguments[g],
                n = i.alloc(e, t);
              p.writePointer(n, g * a);
            }
          } catch (e) {
            return (
              (e.message = "error setting argument " + g + " - " + e.message),
              process.nextTick(c.bind(null, e))
            );
          }
          r.ffi_call_async(e, t, f, p, function (s) {
            [e, t, p].map(() => {}),
              s ? c(s) : ((f.type = n), c(null, f.deref()));
          });
        }),
        f
      );
    };
  },
  function (e, t, n) {
    "use strict";
    const s = n(95),
      o = n(47),
      i = n(97),
      r = n(15),
      a = n(10)("ffi:VariadicForeignFunction"),
      c = n(14),
      l = n(21);
    c.sizeof.pointer, l.FFI_ARG_SIZE;
    e.exports = function (e, t, n, l) {
      a("creating new VariadicForeignFunction", e);
      const u = {};
      r(Buffer.isBuffer(e), "expected Buffer as first argument"),
        r(!!t, 'expected a return "type" object as the second argument'),
        r(
          Array.isArray(n),
          'expected Array of arg "type" objects as the third argument'
        );
      const h = n.length,
        f = (n = n.map(c.coerceType)).map(function (e) {
          return d(e);
        });
      function p() {
        a("variadic_function_generator invoked");
        const g = n.slice();
        let w = f.slice();
        for (let e = 0; e < arguments.length; e++) {
          const t = c.coerceType(arguments[e]);
          g.push(t);
          const n = o(t);
          r(n.name), w.push(d(t));
        }
        const m = c.coerceType(p.returnType),
          y = d(m);
        r(y), (w = y + w.join(""));
        let b = u[w];
        if (b) a("cache hit for key:", w);
        else {
          a("creating the variadic ffi_cif instance for key:", w);
          const n = s(t, g, h, l);
          b = u[w] = i(n, e, m, g);
        }
        return b;
      }
      return (p.returnType = t), p;
    };
    let u = 0;
    function d(e) {
      return (
        e.hasOwnProperty("_ffiId") ||
          (e._ffiId = ((65536 * u++) | 0).toString(16)),
        e._ffiId
      );
    }
  },
  function (e, t, n) {
    var s = {
      "./assistant.js": 184,
      "./bellRinging.js": 185,
      "./blackWindow.js": 186,
      "./countdown.js": 187,
      "./customizeIntercept.js": 188,
      "./desktopAssistant.js": 189,
      "./desktopMinier.js": 190,
      "./desktopNotification.js": 191,
      "./deviceLink.js": 192,
      "./environmentData.js": 193,
      "./eyeProtectionModeBall.js": 194,
      "./eyeProtectionModeTimeOut.js": 195,
      "./fastToolbar.js": 196,
      "./feedback.js": 197,
      "./fileTransport.js": 198,
      "./firmwareUpgrade.js": 199,
      "./floatWindow.js": 200,
      "./globalAdminModal.js": 201,
      "./globalConfirm.js": 202,
      "./globalMessage.js": 203,
      "./login.js": 204,
      "./newsPlayer.js": 205,
      "./newsPlayerLive.js": 206,
      "./newsPlayerQuit.js": 207,
      "./nfcAuthResult.js": 208,
      "./noticeSlider.js": 209,
      "./notification.js": 210,
      "./popupNotification.js": 211,
      "./quitFullscreenAuth.js": 212,
      "./remoteControl.js": 213,
      "./remoteControlStatus.js": 214,
      "./remoteDiskClearWarn.js": 215,
      "./sceneSimulation.js": 216,
      "./schoolAnnouncement.js": 217,
      "./screenLock.js": 218,
      "./screensaver.js": 219,
      "./seewoDesktop.js": 220,
      "./seewoDesktopSearch.js": 221,
      "./shoutInteraction.js": 222,
      "./smartPenCursor.js": 223,
      "./systemDialog.js": 225,
      "./uipsMinier.js": 226,
      "./uipsShowWindow.js": 227,
      "./usbInsertPrompt.js": 228,
      "./usbInsertWarning.js": 229,
      "./voiceInteraction.js": 230,
    };
    function o(e) {
      var t = i(e);
      return n(t);
    }
    function i(e) {
      if (!n.o(s, e)) {
        var t = new Error("Cannot find module '" + e + "'");
        throw ((t.code = "MODULE_NOT_FOUND"), t);
      }
      return s[e];
    }
    (o.keys = function () {
      return Object.keys(s);
    }),
      (o.resolve = i),
      (e.exports = o),
      (o.id = 99);
  },
  function (e, t, n) {
    const s = n(49),
      o = n(1),
      i = n(65).version,
      r = n(2);
    let a = {
      headers: {
        "X-Friday-Appid": o.webConfig.fridayAppId,
        "X-Friday-Time": new Date().getTime(),
        "X-Friday-Ver": i,
        "Content-Type": "application/json",
      },
      method: "POST",
    };
    e.exports = (e, t) => {
      let n = Object.assign({}, t, { $code: e }),
        o = {
          $cp: {
            platformType: "SeewoServiceAssistant",
            deviceId: r.getData("deviceId"),
            schoolCode: r.getData("schoolCode"),
          },
          $sp: [n],
        };
      a.headers["Content-Length"] = Buffer.byteLength(JSON.stringify(o));
      let i = s.request(
        "http://myou.cvte.com/friday/agent/api/app/v2/report",
        a,
        (e) => {
          e.on("data", (e) => {
            console.log("BODY: " + e);
          }),
            e.on("end", () => {
              console.log("No more data in response.");
            });
        }
      );
      i.on("error", (e) => {}), i.write(JSON.stringify(o));
    };
  },
  function (e, t, n) {
    "use strict";
    const s = n(43),
      o = n(66),
      i = n(102),
      r = n(49),
      a = n(237),
      c = n(238),
      l = n(64),
      u = n(51),
      d = n(241),
      h = n(103),
      f = n(104),
      p = n(106),
      {
        BINARY_TYPES: g,
        EMPTY_BUFFER: w,
        GUID: m,
        kStatusCode: y,
        kWebSocket: b,
        NOOP: S,
      } = n(37),
      v = ["CONNECTING", "OPEN", "CLOSING", "CLOSED"],
      E = [8, 13];
    class _ extends s {
      constructor(e, t, n) {
        super(),
          (this.readyState = _.CONNECTING),
          (this.protocol = ""),
          (this._binaryType = g[0]),
          (this._closeFrameReceived = !1),
          (this._closeFrameSent = !1),
          (this._closeMessage = ""),
          (this._closeTimer = null),
          (this._closeCode = 1006),
          (this._extensions = {}),
          (this._receiver = null),
          (this._sender = null),
          (this._socket = null),
          null !== e
            ? ((this._isServer = !1),
              (this._redirects = 0),
              Array.isArray(t)
                ? (t = t.join(", "))
                : "object" == typeof t && null !== t && ((n = t), (t = void 0)),
              (function e(t, n, s, a) {
                const c = Object.assign(
                  {
                    protocolVersion: E[1],
                    maxPayload: 104857600,
                    perMessageDeflate: !0,
                    followRedirects: !1,
                    maxRedirects: 10,
                  },
                  a,
                  {
                    createConnection: void 0,
                    socketPath: void 0,
                    hostname: void 0,
                    protocol: void 0,
                    timeout: void 0,
                    method: void 0,
                    auth: void 0,
                    host: void 0,
                    path: void 0,
                    port: void 0,
                  }
                );
                if (!E.includes(c.protocolVersion))
                  throw new RangeError(
                    `Unsupported protocol version: ${
                      c.protocolVersion
                    } (supported versions: ${E.join(", ")})`
                  );
                var d;
                "object" == typeof n && void 0 !== n.href
                  ? ((d = n), (t.url = n.href))
                  : ((d = l.URL ? new l.URL(n) : l.parse(n)), (t.url = n));
                const f = "ws+unix:" === d.protocol;
                if (!(d.host || (f && d.pathname)))
                  throw new Error("Invalid URL: " + t.url);
                const p = "wss:" === d.protocol || "https:" === d.protocol,
                  g = p ? 443 : 80,
                  w = o.randomBytes(16).toString("base64"),
                  y = p ? i.get : r.get,
                  b = d.search
                    ? `${d.pathname || "/"}${d.search}`
                    : d.pathname || "/";
                var S;
                (c.createConnection = p ? k : T),
                  (c.defaultPort = c.defaultPort || g),
                  (c.port = d.port || g),
                  (c.host = d.hostname.startsWith("[")
                    ? d.hostname.slice(1, -1)
                    : d.hostname),
                  (c.headers = Object.assign(
                    {
                      "Sec-WebSocket-Version": c.protocolVersion,
                      "Sec-WebSocket-Key": w,
                      Connection: "Upgrade",
                      Upgrade: "websocket",
                    },
                    c.headers
                  )),
                  (c.path = b),
                  (c.timeout = c.handshakeTimeout),
                  c.perMessageDeflate &&
                    ((S = new u(
                      !0 !== c.perMessageDeflate ? c.perMessageDeflate : {},
                      !1,
                      c.maxPayload
                    )),
                    (c.headers["Sec-WebSocket-Extensions"] = h.format({
                      [u.extensionName]: S.offer(),
                    })));
                s && (c.headers["Sec-WebSocket-Protocol"] = s);
                c.origin &&
                  (c.protocolVersion < 13
                    ? (c.headers["Sec-WebSocket-Origin"] = c.origin)
                    : (c.headers.Origin = c.origin));
                d.auth
                  ? (c.auth = d.auth)
                  : (d.username || d.password) &&
                    (c.auth = `${d.username}:${d.password}`);
                if (f) {
                  const e = b.split(":");
                  (c.socketPath = e[0]), (c.path = e[1]);
                }
                var v = (t._req = y(c));
                c.timeout &&
                  v.on("timeout", () => {
                    x(t, v, "Opening handshake has timed out");
                  });
                v.on("error", (e) => {
                  t._req.aborted ||
                    ((v = t._req = null),
                    (t.readyState = _.CLOSING),
                    t.emit("error", e),
                    t.emitClose());
                }),
                  v.on("response", (o) => {
                    const i = o.headers.location,
                      r = o.statusCode;
                    if (i && c.followRedirects && r >= 300 && r < 400) {
                      if (++t._redirects > c.maxRedirects)
                        return void x(t, v, "Maximum redirects exceeded");
                      v.abort();
                      const o = l.URL ? new l.URL(i, n) : l.resolve(n, i);
                      e(t, o, s, a);
                    } else
                      t.emit("unexpected-response", v, o) ||
                        x(t, v, "Unexpected server response: " + o.statusCode);
                  }),
                  v.on("upgrade", (e, n, i) => {
                    if ((t.emit("upgrade", e), t.readyState !== _.CONNECTING))
                      return;
                    v = t._req = null;
                    const r = o
                      .createHash("sha1")
                      .update(w + m)
                      .digest("base64");
                    if (e.headers["sec-websocket-accept"] !== r)
                      return void x(
                        t,
                        n,
                        "Invalid Sec-WebSocket-Accept header"
                      );
                    const a = e.headers["sec-websocket-protocol"],
                      l = (s || "").split(/, */);
                    var d;
                    if (
                      (!s && a
                        ? (d =
                            "Server sent a subprotocol but none was requested")
                        : s && !a
                        ? (d = "Server sent no subprotocol")
                        : a &&
                          !l.includes(a) &&
                          (d = "Server sent an invalid subprotocol"),
                      d)
                    )
                      x(t, n, d);
                    else {
                      if ((a && (t.protocol = a), S))
                        try {
                          const n = h.parse(
                            e.headers["sec-websocket-extensions"]
                          );
                          n[u.extensionName] &&
                            (S.accept(n[u.extensionName]),
                            (t._extensions[u.extensionName] = S));
                        } catch (e) {
                          return void x(
                            t,
                            n,
                            "Invalid Sec-WebSocket-Extensions header"
                          );
                        }
                      t.setSocket(n, i, c.maxPayload);
                    }
                  });
              })(this, e, t, n))
            : (this._isServer = !0);
      }
      get CONNECTING() {
        return _.CONNECTING;
      }
      get CLOSING() {
        return _.CLOSING;
      }
      get CLOSED() {
        return _.CLOSED;
      }
      get OPEN() {
        return _.OPEN;
      }
      get binaryType() {
        return this._binaryType;
      }
      set binaryType(e) {
        g.includes(e) &&
          ((this._binaryType = e),
          this._receiver && (this._receiver._binaryType = e));
      }
      get bufferedAmount() {
        return this._socket
          ? (this._socket.bufferSize || 0) + this._sender._bufferedBytes
          : 0;
      }
      get extensions() {
        return Object.keys(this._extensions).join();
      }
      setSocket(e, t, n) {
        const s = new f(this._binaryType, this._extensions, n);
        (this._sender = new p(e, this._extensions)),
          (this._receiver = s),
          (this._socket = e),
          (s[b] = this),
          (e[b] = this),
          s.on("conclude", C),
          s.on("drain", O),
          s.on("error", L),
          s.on("message", N),
          s.on("ping", M),
          s.on("pong", A),
          e.setTimeout(0),
          e.setNoDelay(),
          t.length > 0 && e.unshift(t),
          e.on("close", P),
          e.on("data", D),
          e.on("end", R),
          e.on("error", F),
          (this.readyState = _.OPEN),
          this.emit("open");
      }
      emitClose() {
        (this.readyState = _.CLOSED),
          this._socket
            ? (this._extensions[u.extensionName] &&
                this._extensions[u.extensionName].cleanup(),
              this._receiver.removeAllListeners(),
              this.emit("close", this._closeCode, this._closeMessage))
            : this.emit("close", this._closeCode, this._closeMessage);
      }
      close(e, t) {
        if (this.readyState !== _.CLOSED) {
          if (this.readyState === _.CONNECTING) {
            const e =
              "WebSocket was closed before the connection was established";
            return x(this, this._req, e);
          }
          this.readyState !== _.CLOSING
            ? ((this.readyState = _.CLOSING),
              this._sender.close(e, t, !this._isServer, (e) => {
                e ||
                  ((this._closeFrameSent = !0),
                  this._closeFrameReceived && this._socket.end());
              }),
              (this._closeTimer = setTimeout(
                this._socket.destroy.bind(this._socket),
                3e4
              )))
            : this._closeFrameSent &&
              this._closeFrameReceived &&
              this._socket.end();
        }
      }
      ping(e, t, n) {
        if (
          ("function" == typeof e
            ? ((n = e), (e = t = void 0))
            : "function" == typeof t && ((n = t), (t = void 0)),
          this.readyState !== _.OPEN)
        ) {
          const e = new Error(
            `WebSocket is not open: readyState ${this.readyState} (${
              v[this.readyState]
            })`
          );
          if (n) return n(e);
          throw e;
        }
        "number" == typeof e && (e = e.toString()),
          void 0 === t && (t = !this._isServer),
          this._sender.ping(e || w, t, n);
      }
      pong(e, t, n) {
        if (
          ("function" == typeof e
            ? ((n = e), (e = t = void 0))
            : "function" == typeof t && ((n = t), (t = void 0)),
          this.readyState !== _.OPEN)
        ) {
          const e = new Error(
            `WebSocket is not open: readyState ${this.readyState} (${
              v[this.readyState]
            })`
          );
          if (n) return n(e);
          throw e;
        }
        "number" == typeof e && (e = e.toString()),
          void 0 === t && (t = !this._isServer),
          this._sender.pong(e || w, t, n);
      }
      send(e, t, n) {
        if (
          ("function" == typeof t && ((n = t), (t = {})),
          this.readyState !== _.OPEN)
        ) {
          const e = new Error(
            `WebSocket is not open: readyState ${this.readyState} (${
              v[this.readyState]
            })`
          );
          if (n) return n(e);
          throw e;
        }
        "number" == typeof e && (e = e.toString());
        const s = Object.assign(
          {
            binary: "string" != typeof e,
            mask: !this._isServer,
            compress: !0,
            fin: !0,
          },
          t
        );
        this._extensions[u.extensionName] || (s.compress = !1),
          this._sender.send(e || w, s, n);
      }
      terminate() {
        if (this.readyState !== _.CLOSED) {
          if (this.readyState === _.CONNECTING) {
            const e =
              "WebSocket was closed before the connection was established";
            return x(this, this._req, e);
          }
          this._socket &&
            ((this.readyState = _.CLOSING), this._socket.destroy());
        }
      }
    }
    function T(e) {
      return e.protocolVersion && (e.path = e.socketPath), a.connect(e);
    }
    function k(e) {
      return (
        (e.path = void 0), (e.servername = e.servername || e.host), c.connect(e)
      );
    }
    function x(e, t, n) {
      e.readyState = _.CLOSING;
      const s = new Error(n);
      Error.captureStackTrace(s, x),
        t.setHeader
          ? (t.abort(),
            t.once("abort", e.emitClose.bind(e)),
            e.emit("error", s))
          : (t.destroy(s),
            t.once("error", e.emit.bind(e, "error")),
            t.once("close", e.emitClose.bind(e)));
    }
    function C(e, t) {
      const n = this[b];
      n._socket.removeListener("data", D),
        n._socket.resume(),
        (n._closeFrameReceived = !0),
        (n._closeMessage = t),
        (n._closeCode = e),
        1005 === e ? n.close() : n.close(e, t);
    }
    function O() {
      this[b]._socket.resume();
    }
    function L(e) {
      const t = this[b];
      t._socket.removeListener("data", D),
        (t.readyState = _.CLOSING),
        (t._closeCode = e[y]),
        t.emit("error", e),
        t._socket.destroy();
    }
    function I() {
      this[b].emitClose();
    }
    function N(e) {
      this[b].emit("message", e);
    }
    function M(e) {
      const t = this[b];
      t.pong(e, !t._isServer, S), t.emit("ping", e);
    }
    function A(e) {
      this[b].emit("pong", e);
    }
    function P() {
      const e = this[b];
      this.removeListener("close", P),
        this.removeListener("end", R),
        (e.readyState = _.CLOSING),
        e._socket.read(),
        e._receiver.end(),
        this.removeListener("data", D),
        (this[b] = void 0),
        clearTimeout(e._closeTimer),
        e._receiver._writableState.finished ||
        e._receiver._writableState.errorEmitted
          ? e.emitClose()
          : (e._receiver.on("error", I), e._receiver.on("finish", I));
    }
    function D(e) {
      this[b]._receiver.write(e) || this.pause();
    }
    function R() {
      const e = this[b];
      (e.readyState = _.CLOSING), e._receiver.end(), this.end();
    }
    function F() {
      const e = this[b];
      this.removeListener("error", F),
        this.on("error", S),
        (e.readyState = _.CLOSING),
        this.destroy();
    }
    v.forEach((e, t) => {
      _[e] = t;
    }),
      ["open", "error", "close", "message"].forEach((e) => {
        Object.defineProperty(_.prototype, "on" + e, {
          get() {
            const t = this.listeners(e);
            for (var n = 0; n < t.length; n++)
              if (t[n]._listener) return t[n]._listener;
          },
          set(t) {
            const n = this.listeners(e);
            for (var s = 0; s < n.length; s++)
              n[s]._listener && this.removeListener(e, n[s]);
            this.addEventListener(e, t);
          },
        });
      }),
      (_.prototype.addEventListener = d.addEventListener),
      (_.prototype.removeEventListener = d.removeEventListener),
      (e.exports = _);
  },
  function (e, t) {
    e.exports = require("https");
  },
  function (e, t, n) {
    "use strict";
    const s = [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
      0, 1, 0,
    ];
    function o(e, t, n) {
      Object.prototype.hasOwnProperty.call(e, t) ? e[t].push(n) : (e[t] = [n]);
    }
    e.exports = {
      format: function (e) {
        return Object.keys(e)
          .map((t) => {
            var n = e[t];
            return (
              Array.isArray(n) || (n = [n]),
              n
                .map((e) =>
                  [t]
                    .concat(
                      Object.keys(e).map((t) => {
                        var n = e[t];
                        return (
                          Array.isArray(n) || (n = [n]),
                          n.map((e) => (!0 === e ? t : `${t}=${e}`)).join("; ")
                        );
                      })
                    )
                    .join("; ")
                )
                .join(", ")
            );
          })
          .join(", ");
      },
      parse: function (e) {
        const t = {};
        if (void 0 === e || "" === e) return t;
        for (
          var n, i, r = {}, a = !1, c = !1, l = !1, u = -1, d = -1, h = 0;
          h < e.length;
          h++
        ) {
          const p = e.charCodeAt(h);
          if (void 0 === n)
            if (-1 === d && 1 === s[p]) -1 === u && (u = h);
            else if (32 === p || 9 === p) -1 === d && -1 !== u && (d = h);
            else {
              if (59 !== p && 44 !== p)
                throw new SyntaxError("Unexpected character at index " + h);
              {
                if (-1 === u)
                  throw new SyntaxError("Unexpected character at index " + h);
                -1 === d && (d = h);
                const s = e.slice(u, d);
                44 === p ? (o(t, s, r), (r = {})) : (n = s), (u = d = -1);
              }
            }
          else if (void 0 === i)
            if (-1 === d && 1 === s[p]) -1 === u && (u = h);
            else if (32 === p || 9 === p) -1 === d && -1 !== u && (d = h);
            else if (59 === p || 44 === p) {
              if (-1 === u)
                throw new SyntaxError("Unexpected character at index " + h);
              -1 === d && (d = h),
                o(r, e.slice(u, d), !0),
                44 === p && (o(t, n, r), (r = {}), (n = void 0)),
                (u = d = -1);
            } else {
              if (61 !== p || -1 === u || -1 !== d)
                throw new SyntaxError("Unexpected character at index " + h);
              (i = e.slice(u, h)), (u = d = -1);
            }
          else if (c) {
            if (1 !== s[p])
              throw new SyntaxError("Unexpected character at index " + h);
            -1 === u ? (u = h) : a || (a = !0), (c = !1);
          } else if (l)
            if (1 === s[p]) -1 === u && (u = h);
            else if (34 === p && -1 !== u) (l = !1), (d = h);
            else {
              if (92 !== p)
                throw new SyntaxError("Unexpected character at index " + h);
              c = !0;
            }
          else if (34 === p && 61 === e.charCodeAt(h - 1)) l = !0;
          else if (-1 === d && 1 === s[p]) -1 === u && (u = h);
          else if (-1 === u || (32 !== p && 9 !== p)) {
            if (59 !== p && 44 !== p)
              throw new SyntaxError("Unexpected character at index " + h);
            if (-1 === u)
              throw new SyntaxError("Unexpected character at index " + h);
            -1 === d && (d = h);
            var f = e.slice(u, d);
            a && ((f = f.replace(/\\/g, "")), (a = !1)),
              o(r, i, f),
              44 === p && (o(t, n, r), (r = {}), (n = void 0)),
              (i = void 0),
              (u = d = -1);
          } else -1 === d && (d = h);
        }
        if (-1 === u || l) throw new SyntaxError("Unexpected end of input");
        -1 === d && (d = h);
        const p = e.slice(u, d);
        return (
          void 0 === n
            ? o(t, p, {})
            : (void 0 === i
                ? o(r, p, !0)
                : o(r, i, a ? p.replace(/\\/g, "") : p),
              o(t, n, r)),
          t
        );
      },
    };
  },
  function (e, t, n) {
    "use strict";
    const { Writable: s } = n(38),
      o = n(51),
      {
        BINARY_TYPES: i,
        EMPTY_BUFFER: r,
        kStatusCode: a,
        kWebSocket: c,
      } = n(37),
      { concat: l, toArrayBuffer: u, unmask: d } = n(67),
      { isValidStatusCode: h, isValidUTF8: f } = n(105);
    function p(e, t, n, s) {
      const o = new e(n ? "Invalid WebSocket frame: " + t : t);
      return Error.captureStackTrace(o, p), (o[a] = s), o;
    }
    e.exports = class extends s {
      constructor(e, t, n) {
        super(),
          (this._binaryType = e || i[0]),
          (this[c] = void 0),
          (this._extensions = t || {}),
          (this._maxPayload = 0 | n),
          (this._bufferedBytes = 0),
          (this._buffers = []),
          (this._compressed = !1),
          (this._payloadLength = 0),
          (this._mask = void 0),
          (this._fragmented = 0),
          (this._masked = !1),
          (this._fin = !1),
          (this._opcode = 0),
          (this._totalPayloadLength = 0),
          (this._messageLength = 0),
          (this._fragments = []),
          (this._state = 0),
          (this._loop = !1);
      }
      _write(e, t, n) {
        if (8 === this._opcode && 0 == this._state) return n();
        (this._bufferedBytes += e.length),
          this._buffers.push(e),
          this.startLoop(n);
      }
      consume(e) {
        if (((this._bufferedBytes -= e), e === this._buffers[0].length))
          return this._buffers.shift();
        if (e < this._buffers[0].length) {
          const t = this._buffers[0];
          return (this._buffers[0] = t.slice(e)), t.slice(0, e);
        }
        const t = Buffer.allocUnsafe(e);
        do {
          const n = this._buffers[0];
          e >= n.length
            ? this._buffers.shift().copy(t, t.length - e)
            : (n.copy(t, t.length - e, 0, e), (this._buffers[0] = n.slice(e))),
            (e -= n.length);
        } while (e > 0);
        return t;
      }
      startLoop(e) {
        var t;
        this._loop = !0;
        do {
          switch (this._state) {
            case 0:
              t = this.getInfo();
              break;
            case 1:
              t = this.getPayloadLength16();
              break;
            case 2:
              t = this.getPayloadLength64();
              break;
            case 3:
              this.getMask();
              break;
            case 4:
              t = this.getData(e);
              break;
            default:
              return void (this._loop = !1);
          }
        } while (this._loop);
        e(t);
      }
      getInfo() {
        if (this._bufferedBytes < 2) return void (this._loop = !1);
        const e = this.consume(2);
        if (0 != (48 & e[0]))
          return (
            (this._loop = !1),
            p(RangeError, "RSV2 and RSV3 must be clear", !0, 1002)
          );
        const t = 64 == (64 & e[0]);
        if (t && !this._extensions[o.extensionName])
          return (
            (this._loop = !1), p(RangeError, "RSV1 must be clear", !0, 1002)
          );
        if (
          ((this._fin = 128 == (128 & e[0])),
          (this._opcode = 15 & e[0]),
          (this._payloadLength = 127 & e[1]),
          0 === this._opcode)
        ) {
          if (t)
            return (
              (this._loop = !1), p(RangeError, "RSV1 must be clear", !0, 1002)
            );
          if (!this._fragmented)
            return (
              (this._loop = !1), p(RangeError, "invalid opcode 0", !0, 1002)
            );
          this._opcode = this._fragmented;
        } else if (1 === this._opcode || 2 === this._opcode) {
          if (this._fragmented)
            return (
              (this._loop = !1),
              p(RangeError, "invalid opcode " + this._opcode, !0, 1002)
            );
          this._compressed = t;
        } else {
          if (!(this._opcode > 7 && this._opcode < 11))
            return (
              (this._loop = !1),
              p(RangeError, "invalid opcode " + this._opcode, !0, 1002)
            );
          if (!this._fin)
            return (
              (this._loop = !1), p(RangeError, "FIN must be set", !0, 1002)
            );
          if (t)
            return (
              (this._loop = !1), p(RangeError, "RSV1 must be clear", !0, 1002)
            );
          if (this._payloadLength > 125)
            return (
              (this._loop = !1),
              p(
                RangeError,
                "invalid payload length " + this._payloadLength,
                !0,
                1002
              )
            );
        }
        if (
          (this._fin || this._fragmented || (this._fragmented = this._opcode),
          (this._masked = 128 == (128 & e[1])),
          126 === this._payloadLength)
        )
          this._state = 1;
        else {
          if (127 !== this._payloadLength) return this.haveLength();
          this._state = 2;
        }
      }
      getPayloadLength16() {
        if (!(this._bufferedBytes < 2))
          return (
            (this._payloadLength = this.consume(2).readUInt16BE(0)),
            this.haveLength()
          );
        this._loop = !1;
      }
      getPayloadLength64() {
        if (this._bufferedBytes < 8) return void (this._loop = !1);
        const e = this.consume(8),
          t = e.readUInt32BE(0);
        return t > Math.pow(2, 21) - 1
          ? ((this._loop = !1),
            p(
              RangeError,
              "Unsupported WebSocket frame: payload length > 2^53 - 1",
              !1,
              1009
            ))
          : ((this._payloadLength = t * Math.pow(2, 32) + e.readUInt32BE(4)),
            this.haveLength());
      }
      haveLength() {
        if (
          this._payloadLength &&
          this._opcode < 8 &&
          ((this._totalPayloadLength += this._payloadLength),
          this._totalPayloadLength > this._maxPayload && this._maxPayload > 0)
        )
          return (
            (this._loop = !1),
            p(RangeError, "Max payload size exceeded", !1, 1009)
          );
        this._masked ? (this._state = 3) : (this._state = 4);
      }
      getMask() {
        this._bufferedBytes < 4
          ? (this._loop = !1)
          : ((this._mask = this.consume(4)), (this._state = 4));
      }
      getData(e) {
        var t = r;
        if (this._payloadLength) {
          if (this._bufferedBytes < this._payloadLength)
            return void (this._loop = !1);
          (t = this.consume(this._payloadLength)),
            this._masked && d(t, this._mask);
        }
        return this._opcode > 7
          ? this.controlMessage(t)
          : this._compressed
          ? ((this._state = 5), void this.decompress(t, e))
          : (t.length &&
              ((this._messageLength = this._totalPayloadLength),
              this._fragments.push(t)),
            this.dataMessage());
      }
      decompress(e, t) {
        this._extensions[o.extensionName].decompress(e, this._fin, (e, n) => {
          if (e) return t(e);
          if (n.length) {
            if (
              ((this._messageLength += n.length),
              this._messageLength > this._maxPayload && this._maxPayload > 0)
            )
              return t(p(RangeError, "Max payload size exceeded", !1, 1009));
            this._fragments.push(n);
          }
          const s = this.dataMessage();
          if (s) return t(s);
          this.startLoop(t);
        });
      }
      dataMessage() {
        if (this._fin) {
          const t = this._messageLength,
            n = this._fragments;
          if (
            ((this._totalPayloadLength = 0),
            (this._messageLength = 0),
            (this._fragmented = 0),
            (this._fragments = []),
            2 === this._opcode)
          ) {
            var e;
            (e =
              "nodebuffer" === this._binaryType
                ? l(n, t)
                : "arraybuffer" === this._binaryType
                ? u(l(n, t))
                : n),
              this.emit("message", e);
          } else {
            const e = l(n, t);
            if (!f(e))
              return (
                (this._loop = !1), p(Error, "invalid UTF-8 sequence", !0, 1007)
              );
            this.emit("message", e.toString());
          }
        }
        this._state = 0;
      }
      controlMessage(e) {
        if (8 === this._opcode)
          if (((this._loop = !1), 0 === e.length))
            this.emit("conclude", 1005, ""), this.end();
          else {
            if (1 === e.length)
              return p(RangeError, "invalid payload length 1", !0, 1002);
            {
              const t = e.readUInt16BE(0);
              if (!h(t))
                return p(RangeError, "invalid status code " + t, !0, 1002);
              const n = e.slice(2);
              if (!f(n)) return p(Error, "invalid UTF-8 sequence", !0, 1007);
              this.emit("conclude", t, n.toString()), this.end();
            }
          }
        else 9 === this._opcode ? this.emit("ping", e) : this.emit("pong", e);
        this._state = 0;
      }
    };
  },
  function (e, t, n) {
    "use strict";
    try {
      const e = n(242);
      t.isValidUTF8 = "object" == typeof e ? e.Validation.isValidUTF8 : e;
    } catch (e) {
      t.isValidUTF8 = () => !0;
    }
    t.isValidStatusCode = (e) =>
      (e >= 1e3 && e <= 1013 && 1004 !== e && 1005 !== e && 1006 !== e) ||
      (e >= 3e3 && e <= 4999);
  },
  function (e, t, n) {
    "use strict";
    const { randomBytes: s } = n(66),
      o = n(51),
      { EMPTY_BUFFER: i } = n(37),
      { isValidStatusCode: r } = n(105),
      { mask: a, toBuffer: c } = n(67);
    class l {
      constructor(e, t) {
        (this._extensions = t || {}),
          (this._socket = e),
          (this._firstFragment = !0),
          (this._compress = !1),
          (this._bufferedBytes = 0),
          (this._deflating = !1),
          (this._queue = []);
      }
      static frame(e, t) {
        const n = t.mask && t.readOnly;
        var o = t.mask ? 6 : 2,
          i = e.length;
        e.length >= 65536
          ? ((o += 8), (i = 127))
          : e.length > 125 && ((o += 2), (i = 126));
        const r = Buffer.allocUnsafe(n ? e.length + o : o);
        if (
          ((r[0] = t.fin ? 128 | t.opcode : t.opcode),
          t.rsv1 && (r[0] |= 64),
          (r[1] = i),
          126 === i
            ? r.writeUInt16BE(e.length, 2)
            : 127 === i &&
              (r.writeUInt32BE(0, 2), r.writeUInt32BE(e.length, 6)),
          !t.mask)
        )
          return [r, e];
        const c = s(4);
        return (
          (r[1] |= 128),
          (r[o - 4] = c[0]),
          (r[o - 3] = c[1]),
          (r[o - 2] = c[2]),
          (r[o - 1] = c[3]),
          n ? (a(e, c, r, o, e.length), [r]) : (a(e, c, e, 0, e.length), [r, e])
        );
      }
      close(e, t, n, s) {
        var o;
        if (void 0 === e) o = i;
        else {
          if ("number" != typeof e || !r(e))
            throw new TypeError(
              "First argument must be a valid error code number"
            );
          void 0 === t || "" === t
            ? (o = Buffer.allocUnsafe(2)).writeUInt16BE(e, 0)
            : ((o = Buffer.allocUnsafe(2 + Buffer.byteLength(t))).writeUInt16BE(
                e,
                0
              ),
              o.write(t, 2));
        }
        this._deflating
          ? this.enqueue([this.doClose, o, n, s])
          : this.doClose(o, n, s);
      }
      doClose(e, t, n) {
        this.sendFrame(
          l.frame(e, { fin: !0, rsv1: !1, opcode: 8, mask: t, readOnly: !1 }),
          n
        );
      }
      ping(e, t, n) {
        const s = c(e);
        this._deflating
          ? this.enqueue([this.doPing, s, t, c.readOnly, n])
          : this.doPing(s, t, c.readOnly, n);
      }
      doPing(e, t, n, s) {
        this.sendFrame(
          l.frame(e, { fin: !0, rsv1: !1, opcode: 9, mask: t, readOnly: n }),
          s
        );
      }
      pong(e, t, n) {
        const s = c(e);
        this._deflating
          ? this.enqueue([this.doPong, s, t, c.readOnly, n])
          : this.doPong(s, t, c.readOnly, n);
      }
      doPong(e, t, n, s) {
        this.sendFrame(
          l.frame(e, { fin: !0, rsv1: !1, opcode: 10, mask: t, readOnly: n }),
          s
        );
      }
      send(e, t, n) {
        const s = c(e),
          i = this._extensions[o.extensionName];
        var r = t.binary ? 2 : 1,
          a = t.compress;
        if (
          (this._firstFragment
            ? ((this._firstFragment = !1),
              a && i && (a = s.length >= i._threshold),
              (this._compress = a))
            : ((a = !1), (r = 0)),
          t.fin && (this._firstFragment = !0),
          i)
        ) {
          const e = {
            fin: t.fin,
            rsv1: a,
            opcode: r,
            mask: t.mask,
            readOnly: c.readOnly,
          };
          this._deflating
            ? this.enqueue([this.dispatch, s, this._compress, e, n])
            : this.dispatch(s, this._compress, e, n);
        } else
          this.sendFrame(
            l.frame(s, {
              fin: t.fin,
              rsv1: !1,
              opcode: r,
              mask: t.mask,
              readOnly: c.readOnly,
            }),
            n
          );
      }
      dispatch(e, t, n, s) {
        if (!t) return void this.sendFrame(l.frame(e, n), s);
        const i = this._extensions[o.extensionName];
        (this._deflating = !0),
          i.compress(e, n.fin, (e, t) => {
            (this._deflating = !1),
              (n.readOnly = !1),
              this.sendFrame(l.frame(t, n), s),
              this.dequeue();
          });
      }
      dequeue() {
        for (; !this._deflating && this._queue.length; ) {
          const e = this._queue.shift();
          (this._bufferedBytes -= e[1].length), e[0].apply(this, e.slice(1));
        }
      }
      enqueue(e) {
        (this._bufferedBytes += e[1].length), this._queue.push(e);
      }
      sendFrame(e, t) {
        2 === e.length
          ? (this._socket.cork(),
            this._socket.write(e[0]),
            this._socket.write(e[1], t),
            this._socket.uncork())
          : this._socket.write(e[0], t);
      }
    }
    e.exports = l;
  },
  function (e, t, n) {
    "use strict";
    e.exports = { copySync: n(249) };
  },
  function (e, t) {
    e.exports = (e) => {
      const t = process.versions.node.split(".").map((e) => parseInt(e, 10));
      return (
        (e = e.split(".").map((e) => parseInt(e, 10))),
        t[0] > e[0] ||
          (t[0] === e[0] && (t[1] > e[1] || (t[1] === e[1] && t[2] >= e[2])))
      );
    };
  },
  function (e, t, n) {
    "use strict";
    const s = n(16);
    e.exports = {
      utimesMillis: function (e, t, n, o) {
        s.open(e, "r+", (e, i) => {
          if (e) return o(e);
          s.futimes(i, t, n, (e) => {
            s.close(i, (t) => {
              o && o(e || t);
            });
          });
        });
      },
      utimesMillisSync: function (e, t, n) {
        const o = s.openSync(e, "r+");
        return s.futimesSync(o, t, n), s.closeSync(o);
      },
    };
  },
  function (e, t, n) {
    "use strict";
    const s = n(17).fromCallback;
    e.exports = { copy: s(n(251)) };
  },
  function (e, t, n) {
    const s = n(3),
      o = n(4),
      i = n(0),
      r = n(7),
      a = n(2),
      c = n(273),
      l = n(278),
      u = n(279),
      d = n(20),
      h = n(31),
      f = n(32),
      p = 1002,
      g = "/residentNotice",
      w = "/cancelResidentNotice",
      m = "/popupNotice";
    const y = new (class {
      constructor() {
        (this.messages = []),
          (this.popupMessages = []),
          (this.startPopups = this.startPopups.bind(this));
      }
      onMessage(e) {
        try {
          if (e.messageType === p) {
            const t =
              e.data && e.data.commandParams ? e.data.commandParams : {};
            t.operationLogId = e.data && e.data.operationLogId;
            let n = s.getInstance("noticeSlider");
            n
              ? o("new-message", t, "noticeSlider")
              : (this.messages.push(t),
                (n = s.newOne("noticeSlider")),
                n.setSize(i.screen.getPrimaryDisplay().size.width, 128));
          }
          e.url === g &&
            (a.share(
              "desktopNotificationMessage",
              e.data,
              "desktopNotification"
            ),
            s.checkWindowExist("desktopNotification") ||
              s.newOne("desktopNotification"),
            c(
              { method: "residentNotice", status: 2, message: "" },
              { "x-auth-traceid": e.traceId }
            )),
            e.url === w &&
              (s.getInstance("desktopNotification") &&
                s.close("desktopNotification"),
              l(
                { method: "cancleResidentNotice", status: 2, message: "" },
                { "x-auth-traceid": e.traceId }
              )),
            e.url === m &&
              (this.popupMessages.push(e.data),
              u(
                { method: "popupNotice", status: 2, message: "" },
                { "x-auth-traceid": e.traceId }
              ),
              1 === this.popupMessages.length
                ? this.startPopups()
                : a.share(
                    "popupsNotificationMessage",
                    this.popupMessages[this.popupMessages.length - 1]
                  ));
        } catch (e) {
          r.error(e);
        }
      }
      startPopups() {
        a.share(
          "popupsNotificationMessage",
          this.popupMessages[this.popupMessages.length - 1]
        ),
          d.newWindow("popupNotification");
      }
      closePopupNotification() {
        f.outQueue(h.POPUP_NOTIFICATION),
          d.closeWindow("popupNotification"),
          this.popupMessages.pop(),
          this.popupMessages.length >= 1 &&
            setTimeout(() => {
              this.startPopups();
            }, 500);
      }
    })();
    i.ipcMain.on("init-message-roller-finished", function (e) {
      o("init-messages", y.messages, "noticeSlider"), (y.messages = []);
    }),
      (e.exports = y);
  },
  function (e, t, n) {
    var s, o, i, r, a;
    (s = n(276)),
      (o = n(113).utf8),
      (i = n(277)),
      (r = n(113).bin),
      ((a = function (e, t) {
        e.constructor == String
          ? (e =
              t && "binary" === t.encoding
                ? r.stringToBytes(e)
                : o.stringToBytes(e))
          : i(e)
          ? (e = Array.prototype.slice.call(e, 0))
          : Array.isArray(e) ||
            e.constructor === Uint8Array ||
            (e = e.toString());
        for (
          var n = s.bytesToWords(e),
            c = 8 * e.length,
            l = 1732584193,
            u = -271733879,
            d = -1732584194,
            h = 271733878,
            f = 0;
          f < n.length;
          f++
        )
          n[f] =
            (16711935 & ((n[f] << 8) | (n[f] >>> 24))) |
            (4278255360 & ((n[f] << 24) | (n[f] >>> 8)));
        (n[c >>> 5] |= 128 << c % 32), (n[14 + (((c + 64) >>> 9) << 4)] = c);
        var p = a._ff,
          g = a._gg,
          w = a._hh,
          m = a._ii;
        for (f = 0; f < n.length; f += 16) {
          var y = l,
            b = u,
            S = d,
            v = h;
          (l = p(l, u, d, h, n[f + 0], 7, -680876936)),
            (h = p(h, l, u, d, n[f + 1], 12, -389564586)),
            (d = p(d, h, l, u, n[f + 2], 17, 606105819)),
            (u = p(u, d, h, l, n[f + 3], 22, -1044525330)),
            (l = p(l, u, d, h, n[f + 4], 7, -176418897)),
            (h = p(h, l, u, d, n[f + 5], 12, 1200080426)),
            (d = p(d, h, l, u, n[f + 6], 17, -1473231341)),
            (u = p(u, d, h, l, n[f + 7], 22, -45705983)),
            (l = p(l, u, d, h, n[f + 8], 7, 1770035416)),
            (h = p(h, l, u, d, n[f + 9], 12, -1958414417)),
            (d = p(d, h, l, u, n[f + 10], 17, -42063)),
            (u = p(u, d, h, l, n[f + 11], 22, -1990404162)),
            (l = p(l, u, d, h, n[f + 12], 7, 1804603682)),
            (h = p(h, l, u, d, n[f + 13], 12, -40341101)),
            (d = p(d, h, l, u, n[f + 14], 17, -1502002290)),
            (l = g(
              l,
              (u = p(u, d, h, l, n[f + 15], 22, 1236535329)),
              d,
              h,
              n[f + 1],
              5,
              -165796510
            )),
            (h = g(h, l, u, d, n[f + 6], 9, -1069501632)),
            (d = g(d, h, l, u, n[f + 11], 14, 643717713)),
            (u = g(u, d, h, l, n[f + 0], 20, -373897302)),
            (l = g(l, u, d, h, n[f + 5], 5, -701558691)),
            (h = g(h, l, u, d, n[f + 10], 9, 38016083)),
            (d = g(d, h, l, u, n[f + 15], 14, -660478335)),
            (u = g(u, d, h, l, n[f + 4], 20, -405537848)),
            (l = g(l, u, d, h, n[f + 9], 5, 568446438)),
            (h = g(h, l, u, d, n[f + 14], 9, -1019803690)),
            (d = g(d, h, l, u, n[f + 3], 14, -187363961)),
            (u = g(u, d, h, l, n[f + 8], 20, 1163531501)),
            (l = g(l, u, d, h, n[f + 13], 5, -1444681467)),
            (h = g(h, l, u, d, n[f + 2], 9, -51403784)),
            (d = g(d, h, l, u, n[f + 7], 14, 1735328473)),
            (l = w(
              l,
              (u = g(u, d, h, l, n[f + 12], 20, -1926607734)),
              d,
              h,
              n[f + 5],
              4,
              -378558
            )),
            (h = w(h, l, u, d, n[f + 8], 11, -2022574463)),
            (d = w(d, h, l, u, n[f + 11], 16, 1839030562)),
            (u = w(u, d, h, l, n[f + 14], 23, -35309556)),
            (l = w(l, u, d, h, n[f + 1], 4, -1530992060)),
            (h = w(h, l, u, d, n[f + 4], 11, 1272893353)),
            (d = w(d, h, l, u, n[f + 7], 16, -155497632)),
            (u = w(u, d, h, l, n[f + 10], 23, -1094730640)),
            (l = w(l, u, d, h, n[f + 13], 4, 681279174)),
            (h = w(h, l, u, d, n[f + 0], 11, -358537222)),
            (d = w(d, h, l, u, n[f + 3], 16, -722521979)),
            (u = w(u, d, h, l, n[f + 6], 23, 76029189)),
            (l = w(l, u, d, h, n[f + 9], 4, -640364487)),
            (h = w(h, l, u, d, n[f + 12], 11, -421815835)),
            (d = w(d, h, l, u, n[f + 15], 16, 530742520)),
            (l = m(
              l,
              (u = w(u, d, h, l, n[f + 2], 23, -995338651)),
              d,
              h,
              n[f + 0],
              6,
              -198630844
            )),
            (h = m(h, l, u, d, n[f + 7], 10, 1126891415)),
            (d = m(d, h, l, u, n[f + 14], 15, -1416354905)),
            (u = m(u, d, h, l, n[f + 5], 21, -57434055)),
            (l = m(l, u, d, h, n[f + 12], 6, 1700485571)),
            (h = m(h, l, u, d, n[f + 3], 10, -1894986606)),
            (d = m(d, h, l, u, n[f + 10], 15, -1051523)),
            (u = m(u, d, h, l, n[f + 1], 21, -2054922799)),
            (l = m(l, u, d, h, n[f + 8], 6, 1873313359)),
            (h = m(h, l, u, d, n[f + 15], 10, -30611744)),
            (d = m(d, h, l, u, n[f + 6], 15, -1560198380)),
            (u = m(u, d, h, l, n[f + 13], 21, 1309151649)),
            (l = m(l, u, d, h, n[f + 4], 6, -145523070)),
            (h = m(h, l, u, d, n[f + 11], 10, -1120210379)),
            (d = m(d, h, l, u, n[f + 2], 15, 718787259)),
            (u = m(u, d, h, l, n[f + 9], 21, -343485551)),
            (l = (l + y) >>> 0),
            (u = (u + b) >>> 0),
            (d = (d + S) >>> 0),
            (h = (h + v) >>> 0);
        }
        return s.endian([l, u, d, h]);
      })._ff = function (e, t, n, s, o, i, r) {
        var a = e + ((t & n) | (~t & s)) + (o >>> 0) + r;
        return ((a << i) | (a >>> (32 - i))) + t;
      }),
      (a._gg = function (e, t, n, s, o, i, r) {
        var a = e + ((t & s) | (n & ~s)) + (o >>> 0) + r;
        return ((a << i) | (a >>> (32 - i))) + t;
      }),
      (a._hh = function (e, t, n, s, o, i, r) {
        var a = e + (t ^ n ^ s) + (o >>> 0) + r;
        return ((a << i) | (a >>> (32 - i))) + t;
      }),
      (a._ii = function (e, t, n, s, o, i, r) {
        var a = e + (n ^ (t | ~s)) + (o >>> 0) + r;
        return ((a << i) | (a >>> (32 - i))) + t;
      }),
      (a._blocksize = 16),
      (a._digestsize = 16),
      (e.exports = function (e, t) {
        if (null == e) throw new Error("Illegal argument " + e);
        var n = s.wordsToBytes(a(e, t));
        return t && t.asBytes
          ? n
          : t && t.asString
          ? r.bytesToString(n)
          : s.bytesToHex(n);
      });
  },
  function (e, t) {
    var n = {
      utf8: {
        stringToBytes: function (e) {
          return n.bin.stringToBytes(unescape(encodeURIComponent(e)));
        },
        bytesToString: function (e) {
          return decodeURIComponent(escape(n.bin.bytesToString(e)));
        },
      },
      bin: {
        stringToBytes: function (e) {
          for (var t = [], n = 0; n < e.length; n++)
            t.push(255 & e.charCodeAt(n));
          return t;
        },
        bytesToString: function (e) {
          for (var t = [], n = 0; n < e.length; n++)
            t.push(String.fromCharCode(e[n]));
          return t.join("");
        },
      },
    };
    e.exports = n;
  },
  function (e, t, n) {
    const s = n(1),
      o = n(115),
      i = n(4);
    e.exports = (e) => {
      let t = o(s.seewoDesktopTeacherDirsPath + "/" + e);
      i("teacherDirDetail", t);
    };
  },
  function (e, t, n) {
    const s = n(12),
      o = n(5);
    n(1);
    e.exports = (e) => {
      let t = [];
      if (s.existsSync(e))
        try {
          s.readdirSync(e).forEach((n) => {
            let i = o.join(e, n);
            try {
              let e = s.statSync(i);
              t.push({
                name: n,
                path: i,
                type: e.isDirectory() ? "folder" : o.extname(i),
                isDir: e.isDirectory(),
              });
            } catch (e) {}
          });
        } catch (e) {
          console.log(e);
        }
      return t;
    };
  },
  function (e, t, n) {
    "use strict";
    var s = n(288),
      o = n(289),
      i = n(290),
      r = n(291),
      a = n(292);
    e.exports = function (e) {
      var t,
        n = ((t = e), t.replace(/\s{2,}/g, " ").trim()).split(" ");
      return (
        ((n = (function (e) {
          return 5 === e.length ? ["0"].concat(e) : e;
        })(n))[4] = s(n[4])),
        (n[5] = o(n[5])),
        (n = i(n)),
        (n = r(n)),
        (n = (function (e) {
          for (var t = 0; t < e.length; t++) {
            for (var n = e[t].split(","), s = 0; s < n.length; s++)
              n[s] = parseInt(n[s]);
            e[t] = n;
          }
          return e;
        })((n = a(n)))).join(" ")
      );
    };
  },
  function (e, t, n) {
    "use strict";
    var s = n(116);
    e.exports = (() => {
      function e(e, t, n) {
        for (
          var s = e.split(","), o = /^\d+$|^\*$|^\*\/\d+$/, i = 0;
          i < s.length;
          i++
        ) {
          var r = s[i],
            a = parseInt(s[i], 10);
          if (a < t || a > n || !o.test(r)) return !1;
        }
        return !0;
      }
      function t(t, n) {
        if (!e(n[0], 0, 59)) throw t[0] + " is a invalid expression for second";
        if (
          (function (t) {
            return !e(t, 0, 59);
          })(n[1])
        )
          throw t[1] + " is a invalid expression for minute";
        if (
          (function (t) {
            return !e(t, 0, 23);
          })(n[2])
        )
          throw t[2] + " is a invalid expression for hour";
        if (
          (function (t) {
            return !e(t, 1, 31);
          })(n[3])
        )
          throw t[3] + " is a invalid expression for day of month";
        if (
          (function (t) {
            return !e(t, 1, 12);
          })(n[4])
        )
          throw t[4] + " is a invalid expression for month";
        if (
          (function (t) {
            return !e(t, 0, 7);
          })(n[5])
        )
          throw t[5] + " is a invalid expression for week day";
      }
      return function (e) {
        if ("string" != typeof e) throw "pattern must be a string!";
        var n = e.split(" "),
          o = s(e).split(" ");
        5 === n.length && (n = ["0"].concat(n)), t(n, o);
      };
    })();
  },
  function (e, t, n) {
    const s = n(31),
      o = n(2),
      i = n(32),
      r = n(20),
      a = n(119),
      c = "/displayScreenSaver";
    const l = new (class {
      constructor() {
        (this.startScreensaver = this.startScreensaver.bind(this)),
          (this.stopScreensaver = this.stopScreensaver.bind(this)),
          (this.closeWindow = this.closeWindow.bind(this));
      }
      onMessage(e) {
        if (e.url === c) {
          if ("pause" === o.getData("eyeProtectionMode")) return;
          o.share(
            "screensaverTransitionList",
            ((e, t = 7) => {
              let n = [];
              for (let s = 0; s < e; s++) n.push(Math.floor(Math.random() * t));
              return n;
            })(e.data.imageList.length)
          ),
            o.share("screensaverMessage", e.data),
            i.enQueue({
              taskName: s.SCREENSAVER,
              taskDependencies: [s.LIVE, s.SCHOOLANNOUNCEMENT],
              startTask: this.startScreensaver,
              pauseTask: this.closeWindow,
              coutinueTask: this.startScreensaver,
              closedTask: this.stopScreensaver,
              error: () => {
                i.outQueue(s.SCREENSAVER);
              },
            });
        }
      }
      startScreensaver() {
        r.newWindow("screensaver", !1);
      }
      stopScreensaver() {
        this.closeWindow(),
          o.share("screensaverTransitionList", null),
          a(),
          i.outQueue(s.SCREENSAVER);
      }
      closeWindow() {
        r.closeWindow("screensaver", !1);
      }
      onLink() {
        a();
      }
    })();
    e.exports = l;
  },
  function (e, t, n) {
    const s = n(11),
      o = n(1),
      i = n(6),
      { ip: r } = o.proxyHttp;
    e.exports = function (e) {
      i.register(["SeewoProxyHTTP"], !1, (t) => {
        !(function (e, t) {
          s(
            r,
            e,
            "/forward/SeewoHugoHttp/api/v1/screenSaver/reset",
            "post",
            { ...t },
            (e) => {}
          );
        })(t.SeewoProxyHTTP, e);
      });
    };
  },
  function (e, t, n) {
    const s = n(3),
      o = n(2),
      i = n(308),
      r = {
        modalWidth: 480,
        title: "提示",
        content: "",
        hideCancelBtn: !1,
        okButtonText: "确认",
        onOk: () => {},
        onCancel: () => {},
      };
    const a = new (class {
      constructor() {
        this.windowConfig = {};
      }
      start(e, t = r, n = !1) {
        let a = n
          ? "systemDialog" + e
          : "systemDialogsystemDialog" + Date.now();
        if (n && this.windowConfig.hasOwnProperty(a)) return !1;
        o.share(
          "dialogConfig",
          {
            modalWidth: 480 | t.modalWidth,
            title: t.title || "提示",
            content: t.content || "",
            hideCancelBtn: t.hideCancelBtn || !1,
            okButtonText: t.okButtonText || "确认",
          },
          a
        ),
          s.addOne("systemDialog", a),
          i(a),
          (this.windowConfig[a] = {
            onOk: t.onOk || function () {},
            onCancel: t.onCancel || function () {},
          });
        const c = this;
        return {
          updateConfig: function (e) {
            o.share(
              "dialogConfig",
              {
                modalWidth: 480 | e.modalWidth,
                title: e.title || "提示",
                content: e.content || "",
                hideCancelBtn: e.hideCancelBtn || !1,
                okButtonText: e.okButtonText || "确认",
              },
              a
            );
          },
          endDialog: function (e) {
            c.end(a, e);
          },
        };
      }
      end(e, t) {
        let n = this.windowConfig[e];
        n &&
          (delete this.windowConfig[e],
          s.close(e),
          t ? n.onOk() : n.onCancel());
      }
    })();
    e.exports = a;
  },
  function (e, t, n) {
    const s = n(3),
      o = n(2),
      i = n(312);
    const r = new (class {
      constructor() {
        this.messages = [];
      }
      onMessage(e) {
        "/sceneVoice" === e.url &&
          (o.share("sceneVoiceIndex", e.data, "sceneSimulation"),
          s.newOne("sceneSimulation"));
      }
      finishIndex(e) {
        s.close("sceneSimulation"),
          i({ voiceId: e, code: 0, message: "一定要开心哦！" });
      }
    })();
    e.exports = r;
  },
  function (e, t, n) {
    const s = n(3),
      o = n(7),
      { screen: i } = n(0),
      r = n(2),
      a = n(4),
      c = "/tipConfirm",
      l = 328,
      u = 146;
    const d = new (class {
      constructor() {
        (this.windows = {}),
          (this.setWindowPosition = this.setWindowPosition.bind(this)),
          (this.windowsControll = this.windowsControll.bind(this)),
          (this.deleteWindow = this.deleteWindow.bind(this));
      }
      onMessage(e) {
        e.url === c && this.windowsControll(e.data);
      }
      windowsControll(e) {
        if (this.windows[e.id])
          e.promptWindowShouldClose
            ? (s.close(this.windows[e.id].wname), delete this.windows[e.id])
            : this.setWindowPosition(
                this.windows[e.id].wobj,
                e.pos_x,
                e.pos_y,
                e.width
              );
        else if (!e.promptWindowShouldClose) {
          let t = "floatWindow_" + new Date().getTime(),
            n = s.addOne("floatWindow", t);
          n.isDestroyed() ||
            (o.info(t + "窗口位置重置"),
            this.setWindowPosition(n, e.pos_x, e.pos_y, e.width),
            n.hookWindowMessage(126, () => {
              o.info("分辨率/DPI变化，浮窗"), this.deleteWindow(e.id);
            }),
            n.webContents.on("did-finish-load", () => {
              a("floatWindowId", e.id, t),
                r.share(
                  "setZoomFactor",
                  1 / i.getPrimaryDisplay().scaleFactor,
                  t
                ),
                n.show();
            }),
            (this.windows[e.id] = { wname: t, wobj: n }));
        }
      }
      setWindowPosition(e, t, n, s) {
        let o,
          r,
          { scaleFactor: a, workAreaSize: c } = i.getPrimaryDisplay();
        if (
          ((o = t + s >= c.width * a ? c.width * a - l - 4 : t + s - l),
          (r = n - 8 - u),
          !e.isDestroyed())
        ) {
          let t = 1 / a;
          e.setBounds({
            x: Math.ceil(o / a),
            y: Math.ceil(r / a),
            width: Math.ceil(l * t),
            height: Math.ceil(u * t),
          });
        }
      }
      deleteWindow(e) {
        this.windows[e] &&
          (s.close(this.windows[e].wname), delete this.windows[e]);
      }
    })();
    e.exports = d;
  },
  function (e, t, n) {
    const s = n(2),
      o = {
        ADBLOCK_RECORD: "/record",
        ADBLOCK_STATE: "/switch",
        SUPRE_STATE: "/superState",
        BLOCK_COUNT: "/blockCount",
      };
    const i = new (class {
      constructor() {
        this.messageList = {};
      }
      onMessage(e) {
        for (let t in o) e.url === o[t] && s.share(t, e.data, "assistant");
      }
      getMessage(e) {
        return this.messageList[e] ? this.messageList[e] : "";
      }
    })();
    e.exports = i;
  },
  function (e, t, n) {
    const s = n(18),
      o = n(73),
      i = n(6),
      { ip: r, url: a } = n(1).adminWebsocket;
    const c = new (class extends s {
      constructor(e) {
        super(e), (this.adminConnectState = !1);
      }
      createConnect() {
        super.create();
      }
      onMessage(e) {
        const t = JSON.parse(e);
        o.onMessage(t);
      }
      onLinkOk() {
        (this.adminConnectState = !0), o.onLinkChange(!0);
      }
      onDisconnectMessage() {
        (this.adminConnectState = !1), o.onLinkChange(!1);
      }
    })();
    i.register(["SeewoProxyHTTP"], !0, (e) => {
      let t = `${r}:${e.SeewoProxyHTTP}${a}`;
      c.setHost(t);
    }),
      (e.exports = c);
  },
  function (e, t, n) {
    const s = n(2),
      { createGetDeviceId: o } = n(126),
      i = n(6),
      r = n(4),
      a = n(3),
      c = n(120),
      l = n(318),
      u = { GET_RELATE_MES: 1001, GET_IOT_LINE: 1317, BIND_INFO_FAIL: 1005 },
      d = "/batchBind/success",
      h = "/batchbind/receivedResult",
      f = "/powerOff/confirm",
      p = "/qrCode/remoteAuth",
      g = "/password/authMode";
    const w = new (class {
      constructor() {
        (this.message = {}), (this.countTime = 10), (this.interval = null);
      }
      onMessage(e) {
        if (
          (e.messageType &&
            Object.values(u).indexOf(e.messageType) > -1 &&
            (-1 === [u.BIND_INFO_FAIL].indexOf(e.messageType) &&
              ((this.message[e.messageType] = e),
              this.pushMessageToWindow(e.messageType)),
            e.messageType === u.GET_RELATE_MES &&
              (s.share("schoolCode", null === e.data ? "" : e.data.schoolCode),
              s.share("bindInfo", null === e.data ? null : e.data)),
            e.messageType === u.GET_IOT_LINE &&
              (i.register(["SeewoProxyHTTP"], !1, (e) => {
                o(e.SeewoProxyHTTP);
              }),
              s.share("iotLineStatus", e.data.state),
              s.setData({ iotLineStatus: e.data.state })),
            e.messageType === u.BIND_INFO_FAIL &&
              r("bindInfoFailResponse", e.data, "assistant")),
          e.url)
        ) {
          if (e.url === d)
            if (a.checkWindowExist("assistant"))
              r("openRouter", "AUTO_BIND_SUCCESS_ROUTER", "assistant");
            else {
              a.newOne("assistant").webContents.once("dom-ready", () => {
                r("openRouter", "AUTO_BIND_SUCCESS_ROUTER", "assistant");
              });
            }
          if ((e.url === h && r("batchFeedback", e.data), e.url === f)) {
            let e = c.start(
              "shutdown",
              {
                content: "设备将于10秒后自动关机。",
                onCancel: () => {},
                onOk: () => {
                  l();
                },
              },
              !0
            );
            e &&
              ((this.countTime = 10),
              setTimeout(() => {
                clearInterval(this.interval),
                  (this.interval = setInterval(() => {
                    this.countTime--,
                      e.updateConfig({
                        content: "设备将于" + this.countTime + "秒后自动关机。",
                      }),
                      0 === this.countTime &&
                        (e.endDialog(!0),
                        (this.countTime = 10),
                        clearInterval(this.interval));
                  }, 1e3));
              }, 300));
          }
          e.url === p && s.share("remoteAuth", !!e.data.remoteAuth),
            e.url === g && s.share("adminAuthMode", e.data.mode);
        }
      }
      pushMessageToWindow(e) {
        let t = {};
        (t[e] = this.message[e]), r("assistantProxyMes", t, "assistant");
      }
      getMessage(e) {
        return e ? this.message[u[e]] : this.message;
      }
    })();
    w.onMessage({ url: "/password/authMode", data: { mode: 0 } }),
      (e.exports = w);
  },
  function (e, t, n) {
    const s = n(11),
      o = n(1),
      i = n(6),
      { ip: r } = o.proxyHttp,
      a = n(2);
    function c(e) {
      s(r, e, "/api/v1/device/id", "get", {}, (e) => {
        "000000" === e.code &&
          (a.share("deviceId", e.data.deviceId),
          a.setData({ deviceId: e.data.deviceId }));
      });
    }
    e.exports = {
      getDeviceId: function () {
        i.register(["SeewoProxyHTTP"], !0, (e) => {
          c(e.SeewoProxyHTTP);
        });
      },
      createGetDeviceId: c,
    };
  },
  function (e, t, n) {
    const s = n(4),
      o = n(2),
      i = { GET_FREEZE_RELOAD_STATE: 1314, GET_NETWORK_STATE: 1318 };
    const r = new (class {
      constructor() {
        this.message = {};
      }
      onMessage(e) {
        [i.GET_FREEZE_RELOAD_STATE, i.GET_NETWORK_STATE].indexOf(
          e.messageType
        ) > -1 &&
          ((this.message[e.messageType] = e),
          this.pushMessageToWindow(e.messageType)),
          e.messageType === i.GET_NETWORK_STATE &&
            o.share("networkState", e.data);
      }
      pushMessageToWindow(e) {
        let t = {};
        (t[e] = this.message[e]), s("assistantProxyMes", t, "assistant");
      }
      getMessage(e) {
        return e ? this.message[i[e]] : this.message;
      }
    })();
    e.exports = r;
  },
  function (e, t, n) {
    const s = n(3),
      o = 1201;
    const i = new (class {
      constructor() {
        this.message = null;
      }
      onMessage(e) {
        e.messageType === o &&
          e.data &&
          (s.checkWindowExist("bellRinging")
            ? (s.close("bellRinging"),
              setTimeout(() => {
                s.newOne("bellRinging");
              }, 0))
            : s.newOne("bellRinging"),
          (this.message = e.data));
      }
      getMessage() {
        return this.message;
      }
    })();
    e.exports = i;
  },
  function (e, t, n) {
    const s = n(3),
      o = n(4),
      i = n(1),
      r = { GET_COUNTDOWN_MES: 1004 };
    const a = new (class {
      constructor() {
        this.message = {};
      }
      onMessage(e) {
        e.messageType !== r.GET_COUNTDOWN_MES ||
          i.seewoDesktopVisible ||
          (1 === e.data.vaildType
            ? ((this.message[r.GET_COUNTDOWN_MES] = e.data),
              s.checkWindowExist("countdown")
                ? this.pushMessageToWindow()
                : s.newOne("countdown"))
            : s.close("countdown"));
      }
      pushMessageToWindow() {
        o("countdownMessage", this.message[r.GET_COUNTDOWN_MES], "countdown");
      }
      getMessage(e) {
        return this.message[r[e]];
      }
    })();
    e.exports = a;
  },
  function (e, t, n) {
    const s = n(3),
      o = n(4),
      i = (n(7), n(1)),
      r = n(2),
      a = { GET_RESOURCE: 1315, FAST_TOOLBAR_CONTROL: 1213 },
      c = !0;
    const l = new (class {
      constructor() {
        this.message = {};
      }
      onMessage(e) {
        if (e.messageType === a.GET_RESOURCE && !i.seewoDesktopVisible) {
          if (r.getData("CUSTOM_CONFIG").desktopAssistantHide) return;
          e.data.visible
            ? ((this.message[a.GET_RESOURCE] = e.data),
              s.checkWindowExist("desktopAssistant")
                ? this.pushMessageToWindow()
                : r.getData("desktopExist") || s.newOne("desktopAssistant"))
            : (s.checkWindowExist("desktopAssistant") &&
                s.close("desktopAssistant"),
              s.checkWindowExist("desktopMinier") && s.close("desktopMinier"));
        }
        e.messageType === a.FAST_TOOLBAR_CONTROL &&
          (e.data.visible && c === e.data.finishClassLockStatus
            ? (s.newOne("fastToolbar"), r.setData({ fastToolbarExist: !0 }))
            : (s.close("fastToolbar"),
              r.setData({ fastToolbarHeight: 0 }),
              r.setData({ fastToolbarExist: !1 })));
      }
      pushMessageToWindow() {
        o(
          "DTAResource",
          { setting: {}, message: this.message[a.GET_RESOURCE] },
          "desktopAssistant"
        );
      }
      getMessage(e) {
        return this.message[a[e]];
      }
    })();
    e.exports = l;
  },
  function (e, t, n) {
    const s = n(12),
      o = n(1),
      i = n(4),
      r = n(5);
    e.exports = () => {
      s.existsSync(o.seewoDesktopTeacherDirsPath) &&
        s.readdir(o.seewoDesktopTeacherDirsPath, (e, t) => {
          let n = [];
          t.forEach((e) => {
            let t = r.join(o.seewoDesktopTeacherDirsPath, e);
            s.statSync(t).isDirectory() &&
              n.push({ name: e, type: "folder", path: t, isDir: !0 });
          }),
            i("teacherDirs", n);
        });
    };
  },
  function (e, t, n) {
    const s = n(3);
    const o = new (class {
      constructor() {
        this.timeout = null;
      }
      showWindow(e, t = !1) {
        clearTimeout(this.timeout),
          s.checkWindowExist("notification") && s.destroy("notification");
        let n = s.newOne("notification", e);
        return (
          t ||
            (this.timeout = setTimeout(() => {
              s.destroy("notification");
            }, 4e3)),
          n
        );
      }
      closeWindow() {
        clearTimeout(this.timeout), s.destroy("notification");
      }
    })();
    e.exports = o;
  },
  function (e, t, n) {
    const s = n(3),
      { screen: o } = n(0),
      i = n(2),
      r = n(4);
    const a = new (class {
      constructor() {
        (this.windowList = {}), (this.waitList = {});
      }
      createWindow(e, t) {
        const { bounds: n } = o.getPrimaryDisplay();
        let r = s.addOne("nfcAuthResult", t, { ...e, windowId: t }),
          a = 1080 / n.height,
          c = Math.ceil(n.height - 456 / a),
          l = Math.ceil(454 / a);
        i.share("setZoomFactor", 1 / a, t),
          r &&
            !r.isDestroyed() &&
            ((this.windowList[t] = r),
            r.setBounds({
              width: Math.ceil(364 / a),
              height: l,
              x: Math.ceil(n.width - 366 / a),
              y: c,
            }),
            r.show());
      }
      checkWindowExist(e) {
        return !!this.windowList[e];
      }
      addWaitWindow(e, t) {
        (this.waitList[e] = t), r("nfcAuthResultWindowClose", !0, e);
      }
      closeWindow(e) {
        let t = this.windowList[e];
        t && !t.isDestroyed() && (s.close(e), (this.windowList[e] = null)),
          setTimeout(() => {
            this.waitList[e] &&
              (this.createWindow(this.waitList[e], e),
              (this.waitList[e] = null));
          }, 100);
      }
    })();
    e.exports = a;
  },
  function (e, t, n) {
    const s = n(2),
      o = 1214,
      i = 1212,
      r = 1;
    const a = new (class {
      constructor() {
        this.message = null;
      }
      onMessage(e) {
        switch (e.messageType) {
          case o:
            e.data.unlockMode === r
              ? s.share("hasNetworkHidePasswordBlock", !0)
              : s.share("hasNetworkHidePasswordBlock", !1);
            break;
          case i:
            s.share("qrcodeFeeedback", e.data);
        }
      }
      getMessage() {
        return this.message;
      }
    })();
    e.exports = a;
  },
  function (e, t, n) {
    const s = n(3),
      o = n(4),
      i = (n(7), n(1), n(2), n(347)),
      r = n(20);
    const a = new (class {
      constructor() {
        this.message = {};
      }
      initEyeProtectionModeData() {
        let e = this.getMessage();
        o(
          "postEyeProtectionModeActionByMain",
          { action: "start", data: e },
          "eyeProtectionModeBall"
        );
      }
      onMessage(e) {
        "/eye_protection/timer/created" === e.url &&
          this.createEyeProtectionModeBall(e.data),
          "/eye_protection/timer/paused" === e.url &&
            o(
              "postEyeProtectionModeActionByMain",
              { action: "pause", data: e.data },
              "eyeProtectionModeBall"
            ),
          "/eye_protection/timer/resumed" === e.url &&
            this.createEyeProtectionModeBall(e.data),
          "/eye_protection/timer/aborted" === e.url &&
            (this.closeWindow(),
            o("screenLockModeReset", {}),
            r.getWindowList("blackWindow") && r.closeWindow("blackWindow", !0));
      }
      createEyeProtectionModeBall(e) {
        s.getInstance("eyeProtectionModeBall")
          ? o(
              "postEyeProtectionModeActionByMain",
              { action: "resumed", data: e },
              "eyeProtectionModeBall"
            )
          : ((this.message = e), s.newOne("eyeProtectionModeBall"));
      }
      closeWindow() {
        s.close("eyeProtectionModeBall");
      }
      getMessage() {
        return this.message;
      }
      postPauseHttpReq(e) {
        i({ id: e });
      }
    })();
    e.exports = a;
  },
  function (e, t, n) {
    const s = n(20);
    e.exports = new (class {
      constructor() {
        (this.successFn = null), (this.failFn = null);
      }
      enterAuth(e, t, n = () => {}, o = () => {}) {
        (this.successFn = n),
          (this.failFn = o),
          s.newWindow("quitFullscreenAuth", !1, { title: e, actionType: t });
      }
      exitAuth(e) {
        s.closeWindow("quitFullscreenAuth", !1),
          1 === e
            ? this.successFn && this.successFn()
            : this.failFn && this.failFn();
      }
    })();
  },
  function (e, t) {
    const n = { request: "request", status: "status" },
      s = {
        [n.request]: {
          windowName: "remoteControl",
          getXOffset: (e = 0) => e,
          getYOffset: (e = 0) => e,
        },
        [n.status]: {
          windowName: "remoteControlStatus",
          width: 106,
          height: 40,
          getXOffset: (e, t = 0) => e + t / 2 - 53,
          getYOffset: () => 39,
        },
      };
    e.exports = { WINDOW_TYPES: n, WINDOW_TYPE_CONFIGS: s };
  },
  function (e, t, n) {
    const s = n(18),
      o = n(1),
      i = n(6),
      r = n(4),
      a = n(2),
      c = n(361),
      l = n(5),
      u = {
        VIRUS_LIB_NOTICE: 1001,
        VIRUS_SCANNING_NOTICE: 1002,
        USB_LIST: 1003,
      };
    const { ip: d, url: h } = o.virusService;
    let f = new (class extends s {
      constructor(e) {
        super(e),
          (this.connectStatus = !1),
          (this.scanId = ""),
          (this.usbList = []),
          (this.virusFilesList = []);
      }
      onMessage(e) {
        const t = JSON.parse(e);
        for (let e in u)
          u[e] === t.messageType && a.share(e, t.data, "assistant");
        if (t.messageType === u.USB_LIST) {
          let e = ((e, t) => {
            let n = [],
              s = [];
            for (let s = 0; s < t.length; s++)
              -1 === e.map((e) => e.path).indexOf(t[s].path) && n.push(t[s]);
            for (let n = 0; n < e.length; n++)
              -1 === t.map((e) => e.path).indexOf(e[n].path) && s.push(e[n]);
            return { new: n, delete: s };
          })(this.usbList || [], t.data.diskList || []);
          (this.usbList = t.data.diskList),
            e.new.length > 0 && c.newWindow(e.new),
            e.delete.length > 0 &&
              (r("usbOut", e.delete, "assistant"), c.deleteWindow(e.delete));
        }
        t.messageType === u.VIRUS_LIB_NOTICE &&
          ((this.virusFilesList = []),
          a.share("virusFilesList", this.virusFilesList, "assistant")),
          t.messageType === u.VIRUS_SCANNING_NOTICE &&
            (this.scanId !== parseInt(t.data.id) &&
              ((this.virusFilesList = []),
              a.share("virusFilesList", this.virusFilesList, "assistant")),
            2 === t.data.status &&
              this.scanId === parseInt(t.data.id) &&
              (this.virusFilesList.push({
                path: t.data.path,
                type: t.data.name,
                fileName: l.basename(t.data.path, l.extname(t.data.path)),
              }),
              a.share("virusFilesList", this.virusFilesList, "assistant")));
      }
      onLinkOk() {
        (this.connectStatus = !0),
          r("virusServiceLinkStatus", this.connectStatus, "assistant");
      }
      onDisconnectMessage() {
        (this.connectStatus = !1),
          r("virusServiceLinkStatus", this.connectStatus, "assistant");
      }
      setScanId(e) {
        this.scanId = e;
      }
    })();
    i.register(["SeewoProxyHTTP"], !0, (e) => {
      let t = `${d}:${e.SeewoProxyHTTP}${h}`;
      f.setHost(t);
    }),
      (e.exports = f);
  },
  function (e, t, n) {
    const s = n(369),
      o = n(2),
      i = n(33),
      r = n(20),
      a = n(32),
      c = n(31),
      l = n(7),
      u = n(55),
      d = n(56),
      h = n(28),
      f = "/propaganda/task",
      p = "/propaganda/cancel",
      g = "/propaganda/auth",
      w = 0,
      m = 2,
      y = 6,
      b = 1;
    const S = new (class {
      constructor() {
        (this.message = ""),
          (this.timeout = null),
          (this.startTask = this.startTask.bind(this)),
          (this.pauseAnnouncement = this.pauseAnnouncement.bind(this));
      }
      onMessage(e) {
        e.messageType === f &&
          (this.message && this.closeTask(w),
          (this.message = e),
          a.enQueue({
            taskName: c.SCHOOLANNOUNCEMENT,
            taskDependencies: [c.LIVE, c.NEWS_PLAYER],
            startTask: this.startTask,
            pauseTask: this.pauseAnnouncement,
            coutinueTask: this.startTask,
            forceCloseTaskList: [c.SCREENSAVER],
            error: () => {
              a.outQueue(c.SCHOOLANNOUNCEMENT);
            },
          }),
          (e.data.playCount &&
            !isNaN(e.data.playCount) &&
            0 !== e.data.playCount) ||
            (this.timeout = setTimeout(() => {
              l.info("校宣到时"), this.closeTask();
            }, 1e3 * (e.data.duration + 2)))),
          e.messageType === p &&
            (e.data.type === b
              ? (i.unlockAction(), this.closeTask())
              : this.closeTask(w)),
          e.messageType === g &&
            o.share("schoolAnnouncementQuitNeedChecking", e.data.auth);
      }
      startTask() {
        const e = this.message;
        r.newWindow("schoolAnnouncement"),
          "win7" === o.getData("systemType") && u(),
          setTimeout(() => {
            o.share("schoolAnnouncementTaskData", e.data);
          }, 0);
      }
      pauseAnnouncement() {
        r.closeWindow("schoolAnnouncement"),
          "win7" === o.getData("systemType") && d();
      }
      closeTask(e = m) {
        h.delete("ANNOUNCEMENT"),
          o.share("ANNOUNCEMENT_FEEDBACK", 0),
          o.setData({ ANNOUNCEMENT_ERROR_COUNT: 0 });
        let t = this.message;
        t &&
          (clearTimeout(this.timeout),
          a.outQueue(c.SCHOOLANNOUNCEMENT),
          s({ traceId: t.traceId, status: e, type: t.data.type }),
          r.closeWindow("schoolAnnouncement"),
          "win7" === o.getData("systemType") && d(),
          (this.message = null));
      }
      exit(e) {
        this.closeTask(1 === e ? m : y);
      }
      serverDisconnect() {
        a.outQueue(c.SCHOOLANNOUNCEMENT);
      }
    })();
    e.exports = S;
  },
  function (e, t, n) {
    const { app: s, protocol: o } = n(0),
      i = n(7),
      r = n(174),
      a = n(6),
      c = n(3),
      l = n(231),
      u = n(232),
      d = n(233);
    s.requestSingleInstanceLock()
      ? (s.disableHardwareAcceleration(),
        s.commandLine.appendSwitch("--disable-gpu", !0),
        s.commandLine.appendSwitch("high-dpi-support", !0),
        s.commandLine.appendSwitch("disable-touch-adjustment", !0),
        s.commandLine.appendSwitch(
          "main-frame-resizes-are-orientation-changes",
          !0
        ),
        s.commandLine.appendSwitch(
          "autoplay-policy",
          "no-user-gesture-required"
        ),
        s.commandLine.appendSwitch("disable-pinch", !0),
        s.commandLine.appendSwitch("enable-transparent-visuals", !0),
        s.commandLine.appendSwitch("debug-enable-frame-toggle", !0),
        s.commandLine.appendSwitch("no-proxy-server", !0),
        s.commandLine.appendSwitch("ignore-certificate-errors", !0),
        s.commandLine.appendSwitch("disable-site-isolation-trials"),
        "easiassistant_debugport" in process.env &&
          s.commandLine.appendSwitch(
            "remote-debugging-port",
            process.env.easiassistant_debugport
          ),
        i.info("程序启动"),
        l.init(),
        u(),
        a.startGetFromRegedit(),
        s.isPackaged &&
          (process.on("uncaughtException", (e) => {
            i.error("系统异常", e), console.log("系统异常", e), d(e.toString());
          }),
          "pro" === l.version && r()),
        s.on("second-instance", (e, t, s) => {
          if (
            (i.info("监听到第二实例", JSON.stringify(t)),
            t.includes("--seewoDesktop") || t.includes("--seewodesktop"))
          ) {
            n(50).startDesktop();
          } else
            t.includes("--uninstall")
              ? c.newOne("globalAdminModal")
              : c.newOne("assistant");
        }),
        s.on("gpu-process-crashed", () => {
          i.info("gpu进程崩溃"), s.quit();
        }),
        s.on("window-all-closed", () => {}),
        s.on("ready", function () {
          n(269)(),
            i.info("监听到第一实例", JSON.stringify(process.argv)),
            a.register(["SeewoProxyHTTP"], !0, () => {
              process.argv.includes("--uninstall")
                ? c.newOne("globalAdminModal")
                : (process.argv && process.argv.includes("--desktop")) ||
                  c.newOne("assistant");
            }),
            o.registerFileProtocol("file", (e, t) => {
              t(decodeURI(e.url.replace("file:///", "")));
            });
        }))
      : (i.info("单例拦截！"), s.quit());
  },
  function (e, t, n) {
    "use strict";
    const s = n(10)("log4js:main"),
      o = n(12),
      i = n(147)({ proto: !0 }),
      r = n(34),
      a = n(78),
      c = n(35),
      l = n(80),
      u = n(91),
      d = n(166),
      h = n(60),
      f = n(167);
    let p = !1;
    function g(e) {
      if (!p) return;
      s("Received log event ", e);
      u.appendersForCategory(e.categoryName).forEach((t) => {
        t(e);
      });
    }
    function w(e) {
      let t = e;
      var n;
      return (
        "string" == typeof t &&
          (t = (n = e)
            ? (s("Loading configuration from " + n),
              JSON.parse(o.readFileSync(n, "utf8")))
            : n),
        s("Configuration is " + t),
        r.configure(i(t)),
        h.onMessage(g),
        (p = !0),
        m
      );
    }
    const m = {
      getLogger: function (e) {
        return (
          p ||
            w(
              process.env.LOG4JS_CONFIG || {
                appenders: { out: { type: "stdout" } },
                categories: { default: { appenders: ["out"], level: "OFF" } },
              }
            ),
          new d(e || "default")
        );
      },
      configure: w,
      shutdown: function (e) {
        s("Shutdown called. Disabling all log writing."), (p = !1);
        const t = Array.from(l.values()),
          n = t.reduceRight((e, t) => (t.shutdown ? e + 1 : e), 0);
        let o,
          i = 0;
        function r(t) {
          (o = o || t),
            (i += 1),
            s(`Appender shutdowns complete: ${i} / ${n}`),
            i >= n && (s("All shutdown functions completed."), e(o));
        }
        return (
          s(`Found ${n} appenders with shutdown functions.`),
          0 === n
            ? (s("No appenders with shutdown functions found."), e())
            : (t.filter((e) => e.shutdown).forEach((e) => e.shutdown(r)), null)
        );
      },
      connectLogger: f,
      levels: c,
      addLayout: a.addLayout,
    };
    e.exports = m;
  },
  function (e, t, n) {
    function s() {
      var e;
      try {
        e = t.storage.debug;
      } catch (e) {}
      return (
        !e &&
          "undefined" != typeof process &&
          "env" in process &&
          (e = process.env.DEBUG),
        e
      );
    }
    ((t = e.exports = n(76)).log = function () {
      return (
        "object" == typeof console &&
        console.log &&
        Function.prototype.apply.call(console.log, console, arguments)
      );
    }),
      (t.formatArgs = function (e) {
        var n = this.useColors;
        if (
          ((e[0] =
            (n ? "%c" : "") +
            this.namespace +
            (n ? " %c" : " ") +
            e[0] +
            (n ? "%c " : " ") +
            "+" +
            t.humanize(this.diff)),
          !n)
        )
          return;
        var s = "color: " + this.color;
        e.splice(1, 0, s, "color: inherit");
        var o = 0,
          i = 0;
        e[0].replace(/%[a-zA-Z%]/g, function (e) {
          "%%" !== e && (o++, "%c" === e && (i = o));
        }),
          e.splice(i, 0, s);
      }),
      (t.save = function (e) {
        try {
          null == e ? t.storage.removeItem("debug") : (t.storage.debug = e);
        } catch (e) {}
      }),
      (t.load = s),
      (t.useColors = function () {
        if (
          "undefined" != typeof window &&
          window.process &&
          "renderer" === window.process.type
        )
          return !0;
        if (
          "undefined" != typeof navigator &&
          navigator.userAgent &&
          navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)
        )
          return !1;
        return (
          ("undefined" != typeof document &&
            document.documentElement &&
            document.documentElement.style &&
            document.documentElement.style.WebkitAppearance) ||
          ("undefined" != typeof window &&
            window.console &&
            (window.console.firebug ||
              (window.console.exception && window.console.table))) ||
          ("undefined" != typeof navigator &&
            navigator.userAgent &&
            navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) &&
            parseInt(RegExp.$1, 10) >= 31) ||
          ("undefined" != typeof navigator &&
            navigator.userAgent &&
            navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))
        );
      }),
      (t.storage =
        "undefined" != typeof chrome && void 0 !== chrome.storage
          ? chrome.storage.local
          : (function () {
              try {
                return window.localStorage;
              } catch (e) {}
            })()),
      (t.colors = [
        "#0000CC",
        "#0000FF",
        "#0033CC",
        "#0033FF",
        "#0066CC",
        "#0066FF",
        "#0099CC",
        "#0099FF",
        "#00CC00",
        "#00CC33",
        "#00CC66",
        "#00CC99",
        "#00CCCC",
        "#00CCFF",
        "#3300CC",
        "#3300FF",
        "#3333CC",
        "#3333FF",
        "#3366CC",
        "#3366FF",
        "#3399CC",
        "#3399FF",
        "#33CC00",
        "#33CC33",
        "#33CC66",
        "#33CC99",
        "#33CCCC",
        "#33CCFF",
        "#6600CC",
        "#6600FF",
        "#6633CC",
        "#6633FF",
        "#66CC00",
        "#66CC33",
        "#9900CC",
        "#9900FF",
        "#9933CC",
        "#9933FF",
        "#99CC00",
        "#99CC33",
        "#CC0000",
        "#CC0033",
        "#CC0066",
        "#CC0099",
        "#CC00CC",
        "#CC00FF",
        "#CC3300",
        "#CC3333",
        "#CC3366",
        "#CC3399",
        "#CC33CC",
        "#CC33FF",
        "#CC6600",
        "#CC6633",
        "#CC9900",
        "#CC9933",
        "#CCCC00",
        "#CCCC33",
        "#FF0000",
        "#FF0033",
        "#FF0066",
        "#FF0099",
        "#FF00CC",
        "#FF00FF",
        "#FF3300",
        "#FF3333",
        "#FF3366",
        "#FF3399",
        "#FF33CC",
        "#FF33FF",
        "#FF6600",
        "#FF6633",
        "#FF9900",
        "#FF9933",
        "#FFCC00",
        "#FFCC33",
      ]),
      (t.formatters.j = function (e) {
        try {
          return JSON.stringify(e);
        } catch (e) {
          return "[UnexpectedJSONParseError]: " + e.message;
        }
      }),
      t.enable(s());
  },
  function (e, t) {
    var n = 1e3,
      s = 6e4,
      o = 60 * s,
      i = 24 * o;
    function r(e, t, n) {
      if (!(e < t))
        return e < 1.5 * t
          ? Math.floor(e / t) + " " + n
          : Math.ceil(e / t) + " " + n + "s";
    }
    e.exports = function (e, t) {
      t = t || {};
      var a,
        c = typeof e;
      if ("string" === c && e.length > 0)
        return (function (e) {
          if ((e = String(e)).length > 100) return;
          var t =
            /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
              e
            );
          if (!t) return;
          var r = parseFloat(t[1]);
          switch ((t[2] || "ms").toLowerCase()) {
            case "years":
            case "year":
            case "yrs":
            case "yr":
            case "y":
              return 315576e5 * r;
            case "days":
            case "day":
            case "d":
              return r * i;
            case "hours":
            case "hour":
            case "hrs":
            case "hr":
            case "h":
              return r * o;
            case "minutes":
            case "minute":
            case "mins":
            case "min":
            case "m":
              return r * s;
            case "seconds":
            case "second":
            case "secs":
            case "sec":
            case "s":
              return r * n;
            case "milliseconds":
            case "millisecond":
            case "msecs":
            case "msec":
            case "ms":
              return r;
            default:
              return;
          }
        })(e);
      if ("number" === c && !1 === isNaN(e))
        return t.long
          ? r((a = e), i, "day") ||
              r(a, o, "hour") ||
              r(a, s, "minute") ||
              r(a, n, "second") ||
              a + " ms"
          : (function (e) {
              if (e >= i) return Math.round(e / i) + "d";
              if (e >= o) return Math.round(e / o) + "h";
              if (e >= s) return Math.round(e / s) + "m";
              if (e >= n) return Math.round(e / n) + "s";
              return e + "ms";
            })(e);
      throw new Error(
        "val is not a non-empty string or a valid number. val=" +
          JSON.stringify(e)
      );
    };
  },
  function (e, t, n) {
    var s = n(77),
      o = n(13);
    ((t = e.exports = n(76)).init = function (e) {
      e.inspectOpts = {};
      for (var n = Object.keys(t.inspectOpts), s = 0; s < n.length; s++)
        e.inspectOpts[n[s]] = t.inspectOpts[n[s]];
    }),
      (t.log = function () {
        return process.stderr.write(o.format.apply(o, arguments) + "\n");
      }),
      (t.formatArgs = function (e) {
        var n = this.namespace;
        if (this.useColors) {
          var s = this.color,
            o = "[3" + (s < 8 ? s : "8;5;" + s),
            i = "  " + o + ";1m" + n + " [0m";
          (e[0] = i + e[0].split("\n").join("\n" + i)),
            e.push(o + "m+" + t.humanize(this.diff) + "[0m");
        } else
          e[0] =
            (t.inspectOpts.hideDate ? "" : new Date().toISOString() + " ") +
            n +
            " " +
            e[0];
      }),
      (t.save = function (e) {
        null == e ? delete process.env.DEBUG : (process.env.DEBUG = e);
      }),
      (t.load = r),
      (t.useColors = function () {
        return "colors" in t.inspectOpts
          ? Boolean(t.inspectOpts.colors)
          : s.isatty(process.stderr.fd);
      }),
      (t.colors = [6, 2, 3, 4, 5, 1]);
    try {
      var i = n(145);
      i &&
        i.level >= 2 &&
        (t.colors = [
          20, 21, 26, 27, 32, 33, 38, 39, 40, 41, 42, 43, 44, 45, 56, 57, 62,
          63, 68, 69, 74, 75, 76, 77, 78, 79, 80, 81, 92, 93, 98, 99, 112, 113,
          128, 129, 134, 135, 148, 149, 160, 161, 162, 163, 164, 165, 166, 167,
          168, 169, 170, 171, 172, 173, 178, 179, 184, 185, 196, 197, 198, 199,
          200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 214, 215, 220, 221,
        ]);
    } catch (e) {}
    function r() {
      return process.env.DEBUG;
    }
    (t.inspectOpts = Object.keys(process.env)
      .filter(function (e) {
        return /^debug_/i.test(e);
      })
      .reduce(function (e, t) {
        var n = t
            .substring(6)
            .toLowerCase()
            .replace(/_([a-z])/g, function (e, t) {
              return t.toUpperCase();
            }),
          s = process.env[t];
        return (
          (s =
            !!/^(yes|on|true|enabled)$/i.test(s) ||
            (!/^(no|off|false|disabled)$/i.test(s) &&
              ("null" === s ? null : Number(s)))),
          (e[n] = s),
          e
        );
      }, {})),
      (t.formatters.o = function (e) {
        return (
          (this.inspectOpts.colors = this.useColors),
          o
            .inspect(e, this.inspectOpts)
            .split("\n")
            .map(function (e) {
              return e.trim();
            })
            .join(" ")
        );
      }),
      (t.formatters.O = function (e) {
        return (
          (this.inspectOpts.colors = this.useColors),
          o.inspect(e, this.inspectOpts)
        );
      }),
      t.enable(r());
  },
  function (e, t, n) {
    "use strict";
    const s = n(25),
      o = n(77),
      i = n(146),
      { env: r } = process;
    let a;
    function c(e) {
      return (
        0 !== e && { level: e, hasBasic: !0, has256: e >= 2, has16m: e >= 3 }
      );
    }
    function l(e, t) {
      if (0 === a) return 0;
      if (i("color=16m") || i("color=full") || i("color=truecolor")) return 3;
      if (i("color=256")) return 2;
      if (e && !t && void 0 === a) return 0;
      const n = a || 0;
      if ("dumb" === r.TERM) return n;
      if ("win32" === process.platform) {
        const e = s.release().split(".");
        return Number(e[0]) >= 10 && Number(e[2]) >= 10586
          ? Number(e[2]) >= 14931
            ? 3
            : 2
          : 1;
      }
      if ("CI" in r)
        return [
          "TRAVIS",
          "CIRCLECI",
          "APPVEYOR",
          "GITLAB_CI",
          "GITHUB_ACTIONS",
          "BUILDKITE",
        ].some((e) => e in r) || "codeship" === r.CI_NAME
          ? 1
          : n;
      if ("TEAMCITY_VERSION" in r)
        return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(r.TEAMCITY_VERSION) ? 1 : 0;
      if ("truecolor" === r.COLORTERM) return 3;
      if ("TERM_PROGRAM" in r) {
        const e = parseInt((r.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
        switch (r.TERM_PROGRAM) {
          case "iTerm.app":
            return e >= 3 ? 3 : 2;
          case "Apple_Terminal":
            return 2;
        }
      }
      return /-256(color)?$/i.test(r.TERM)
        ? 2
        : /^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(
            r.TERM
          ) || "COLORTERM" in r
        ? 1
        : n;
    }
    i("no-color") || i("no-colors") || i("color=false") || i("color=never")
      ? (a = 0)
      : (i("color") || i("colors") || i("color=true") || i("color=always")) &&
        (a = 1),
      "FORCE_COLOR" in r &&
        (a =
          "true" === r.FORCE_COLOR
            ? 1
            : "false" === r.FORCE_COLOR
            ? 0
            : 0 === r.FORCE_COLOR.length
            ? 1
            : Math.min(parseInt(r.FORCE_COLOR, 10), 3)),
      (e.exports = {
        supportsColor: function (e) {
          return c(l(e, e && e.isTTY));
        },
        stdout: c(l(!0, o.isatty(1))),
        stderr: c(l(!0, o.isatty(2))),
      });
  },
  function (e, t, n) {
    "use strict";
    e.exports = (e, t = process.argv) => {
      const n = e.startsWith("-") ? "" : 1 === e.length ? "-" : "--",
        s = t.indexOf(n + e),
        o = t.indexOf("--");
      return -1 !== s && (-1 === o || s < o);
    };
  },
  function (e, t, n) {
    "use strict";
    function s(e) {
      return e instanceof Buffer
        ? Buffer.from(e)
        : new e.constructor(e.buffer.slice(), e.byteOffset, e.length);
    }
    e.exports = function (e) {
      return (e = e || {}).circles
        ? (function (e) {
            var t = [],
              n = [];
            return e.proto
              ? function e(i) {
                  if ("object" != typeof i || null === i) return i;
                  if (i instanceof Date) return new Date(i);
                  if (Array.isArray(i)) return o(i, e);
                  if (i instanceof Map) return new Map(o(Array.from(i), e));
                  if (i instanceof Set) return new Set(o(Array.from(i), e));
                  var r = {};
                  for (var a in (t.push(i), n.push(r), i)) {
                    var c = i[a];
                    if ("object" != typeof c || null === c) r[a] = c;
                    else if (c instanceof Date) r[a] = new Date(c);
                    else if (c instanceof Map)
                      r[a] = new Map(o(Array.from(c), e));
                    else if (c instanceof Set)
                      r[a] = new Set(o(Array.from(c), e));
                    else if (ArrayBuffer.isView(c)) r[a] = s(c);
                    else {
                      var l = t.indexOf(c);
                      r[a] = -1 !== l ? n[l] : e(c);
                    }
                  }
                  return t.pop(), n.pop(), r;
                }
              : function e(i) {
                  if ("object" != typeof i || null === i) return i;
                  if (i instanceof Date) return new Date(i);
                  if (Array.isArray(i)) return o(i, e);
                  if (i instanceof Map) return new Map(o(Array.from(i), e));
                  if (i instanceof Set) return new Set(o(Array.from(i), e));
                  var r = {};
                  for (var a in (t.push(i), n.push(r), i))
                    if (!1 !== Object.hasOwnProperty.call(i, a)) {
                      var c = i[a];
                      if ("object" != typeof c || null === c) r[a] = c;
                      else if (c instanceof Date) r[a] = new Date(c);
                      else if (c instanceof Map)
                        r[a] = new Map(o(Array.from(c), e));
                      else if (c instanceof Set)
                        r[a] = new Set(o(Array.from(c), e));
                      else if (ArrayBuffer.isView(c)) r[a] = s(c);
                      else {
                        var l = t.indexOf(c);
                        r[a] = -1 !== l ? n[l] : e(c);
                      }
                    }
                  return t.pop(), n.pop(), r;
                };
            function o(e, o) {
              for (
                var i = Object.keys(e), r = new Array(i.length), a = 0;
                a < i.length;
                a++
              ) {
                var c = i[a],
                  l = e[c];
                if ("object" != typeof l || null === l) r[c] = l;
                else if (l instanceof Date) r[c] = new Date(l);
                else if (ArrayBuffer.isView(l)) r[c] = s(l);
                else {
                  var u = t.indexOf(l);
                  r[c] = -1 !== u ? n[u] : o(l);
                }
              }
              return r;
            }
          })(e)
        : e.proto
        ? function e(n) {
            if ("object" != typeof n || null === n) return n;
            if (n instanceof Date) return new Date(n);
            if (Array.isArray(n)) return t(n, e);
            if (n instanceof Map) return new Map(t(Array.from(n), e));
            if (n instanceof Set) return new Set(t(Array.from(n), e));
            var o = {};
            for (var i in n) {
              var r = n[i];
              "object" != typeof r || null === r
                ? (o[i] = r)
                : r instanceof Date
                ? (o[i] = new Date(r))
                : r instanceof Map
                ? (o[i] = new Map(t(Array.from(r), e)))
                : r instanceof Set
                ? (o[i] = new Set(t(Array.from(r), e)))
                : ArrayBuffer.isView(r)
                ? (o[i] = s(r))
                : (o[i] = e(r));
            }
            return o;
          }
        : function e(n) {
            if ("object" != typeof n || null === n) return n;
            if (n instanceof Date) return new Date(n);
            if (Array.isArray(n)) return t(n, e);
            if (n instanceof Map) return new Map(t(Array.from(n), e));
            if (n instanceof Set) return new Set(t(Array.from(n), e));
            var o = {};
            for (var i in n)
              if (!1 !== Object.hasOwnProperty.call(n, i)) {
                var r = n[i];
                "object" != typeof r || null === r
                  ? (o[i] = r)
                  : r instanceof Date
                  ? (o[i] = new Date(r))
                  : r instanceof Map
                  ? (o[i] = new Map(t(Array.from(r), e)))
                  : r instanceof Set
                  ? (o[i] = new Set(t(Array.from(r), e)))
                  : ArrayBuffer.isView(r)
                  ? (o[i] = s(r))
                  : (o[i] = e(r));
              }
            return o;
          };
      function t(e, t) {
        for (
          var n = Object.keys(e), o = new Array(n.length), i = 0;
          i < n.length;
          i++
        ) {
          var r = n[i],
            a = e[r];
          "object" != typeof a || null === a
            ? (o[r] = a)
            : a instanceof Date
            ? (o[r] = new Date(a))
            : ArrayBuffer.isView(a)
            ? (o[r] = s(a))
            : (o[r] = t(a));
        }
        return o;
      }
    };
  },
  function (e, t) {
    /*!
Copyright (C) 2013-2017 by Andrea Giammarchi - @WebReflection

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/
    var n = "\\x" + ("0" + "~".charCodeAt(0).toString(16)).slice(-2),
      s = "\\" + n,
      o = new RegExp(n, "g"),
      i = new RegExp(s, "g"),
      r = new RegExp("(?:^|([^\\\\]))" + s),
      a =
        [].indexOf ||
        function (e) {
          for (var t = this.length; t-- && this[t] !== e; );
          return t;
        },
      c = String;
    function l(e, t, n) {
      return t instanceof Array
        ? (function (e, t, n) {
            for (var s = 0, o = t.length; s < o; s++) t[s] = l(e, t[s], n);
            return t;
          })(e, t, n)
        : t instanceof c
        ? t.length
          ? n.hasOwnProperty(t)
            ? n[t]
            : (n[t] = (function (e, t) {
                for (
                  var n = 0, s = t.length;
                  n < s;
                  e = e[t[n++].replace(i, "~")]
                );
                return e;
              })(e, t.split("~")))
          : e
        : t instanceof Object
        ? (function (e, t, n) {
            for (var s in t) t.hasOwnProperty(s) && (t[s] = l(e, t[s], n));
            return t;
          })(e, t, n)
        : t;
    }
    var u = {
      stringify: function (e, t, i, r) {
        return u.parser.stringify(
          e,
          (function (e, t, i) {
            var r,
              c,
              l = !1,
              u = !!t,
              d = [],
              h = [e],
              f = [e],
              p = [i ? "~" : "[Circular]"],
              g = e,
              w = 1;
            return (
              u &&
                (c =
                  "object" == typeof t
                    ? function (e, n) {
                        return "" !== e && t.indexOf(e) < 0 ? void 0 : n;
                      }
                    : t),
              function (e, t) {
                return (
                  u && (t = c.call(this, e, t)),
                  l
                    ? (g !== this &&
                        ((r = w - a.call(h, this) - 1),
                        (w -= r),
                        h.splice(w, h.length),
                        d.splice(w - 1, d.length),
                        (g = this)),
                      "object" == typeof t && t
                        ? (a.call(h, t) < 0 && h.push((g = t)),
                          (w = h.length),
                          (r = a.call(f, t)) < 0
                            ? ((r = f.push(t) - 1),
                              i
                                ? (d.push(("" + e).replace(o, n)),
                                  (p[r] = "~" + d.join("~")))
                                : (p[r] = p[0]))
                            : (t = p[r]))
                        : "string" == typeof t &&
                          i &&
                          (t = t.replace(n, s).replace("~", n)))
                    : (l = !0),
                  t
                );
              }
            );
          })(e, t, !r),
          i
        );
      },
      parse: function (e, t) {
        return u.parser.parse(
          e,
          (function (e) {
            return function (t, o) {
              var i = "string" == typeof o;
              return i && "~" === o.charAt(0)
                ? new c(o.slice(1))
                : ("" === t && (o = l(o, o, {})),
                  i && (o = o.replace(r, "$1~").replace(s, n)),
                  e ? e.call(this, t, o) : o);
            };
          })(t)
        );
      },
      parser: JSON,
    };
    e.exports = u;
  },
  function (e, t) {
    e.exports = require("cluster");
  },
  function (e, t, n) {
    "use strict";
    function s(e) {
      if ("number" == typeof e && Number.isInteger(e)) return e;
      const t = { K: 1024, M: 1048576, G: 1073741824 },
        n = Object.keys(t),
        s = e.substr(e.length - 1).toLocaleUpperCase(),
        o = e.substring(0, e.length - 1).trim();
      if (n.indexOf(s) < 0 || !Number.isInteger(Number(o)))
        throw Error(`maxLogSize: "${e}" is invalid`);
      return o * t[s];
    }
    function o(e) {
      return (function (e, t) {
        const n = Object.assign({}, t);
        return (
          Object.keys(e).forEach((s) => {
            n[s] && (n[s] = e[s](t[s]));
          }),
          n
        );
      })({ maxLogSize: s }, e);
    }
    const i = { file: o, fileSync: o };
    e.exports.modifyConfig = (e) => (i[e.type] ? i[e.type](e) : e);
  },
  function (e, t, n) {
    "use strict";
    const s = console.log.bind(console);
    e.exports.configure = function (e, t) {
      let n = t.colouredLayout;
      return (
        e.layout && (n = t.layout(e.layout.type, e.layout)),
        (function (e, t) {
          return (n) => {
            s(e(n, t));
          };
        })(n, e.timezoneOffset)
      );
    };
  },
  function (e, t, n) {
    "use strict";
    t.configure = function (e, t) {
      let n = t.colouredLayout;
      return (
        e.layout && (n = t.layout(e.layout.type, e.layout)),
        (function (e, t) {
          return (n) => {
            process.stdout.write(e(n, t) + "\n");
          };
        })(n, e.timezoneOffset)
      );
    };
  },
  function (e, t, n) {
    "use strict";
    e.exports.configure = function (e, t) {
      let n = t.colouredLayout;
      return (
        e.layout && (n = t.layout(e.layout.type, e.layout)),
        (function (e, t) {
          return (n) => {
            process.stderr.write(e(n, t) + "\n");
          };
        })(n, e.timezoneOffset)
      );
    };
  },
  function (e, t, n) {
    "use strict";
    const s = n(10)("log4js:file"),
      o = n(5),
      i = n(82),
      r = n(25).EOL || "\n";
    function a(e, t, n, a, c, l) {
      (e = o.normalize(e)),
        s(
          "Creating file appender (",
          e,
          ", ",
          n,
          ", ",
          (a = 0 === (a = void 0 === a ? 5 : a) ? 1 : a),
          ", ",
          c,
          ", ",
          l,
          ")"
        );
      const u = (function (e, t, n, s) {
          const o = new i.RollingFileStream(e, t, n, s);
          return (
            o.on("error", (t) => {
              console.error(
                "log4js.fileAppender - Writing to file %s, error happened ",
                e,
                t
              );
            }),
            o
          );
        })(e, n, a, c),
        d = function (e) {
          u.write(t(e, l) + r, "utf8");
        };
      return (
        (d.reopen = function () {
          u.closeTheStream(u.openTheStream.bind(u));
        }),
        (d.sighupHandler = function () {
          s("SIGHUP handler called."), d.reopen();
        }),
        (d.shutdown = function (e) {
          process.removeListener("SIGHUP", d.sighupHandler),
            u.write("", "utf-8", () => {
              u.end(e);
            });
        }),
        process.on("SIGHUP", d.sighupHandler),
        d
      );
    }
    e.exports.configure = function (e, t) {
      let n = t.basicLayout;
      return (
        e.layout && (n = t.layout(e.layout.type, e.layout)),
        a(e.filename, n, e.maxLogSize, e.backups, e, e.timezoneOffset)
      );
    };
  },
  function (e, t, n) {
    "use strict";
    var s = n(83),
      o = n(10)("streamroller:RollingFileStream"),
      i = n(13),
      r = n(5),
      a = (n(45), n(12));
    function c(e, t, n, s) {
      (this.size = t || Number.MAX_SAFE_INTEGER),
        (this.backups = n || 1),
        (function () {
          if (!e || t <= 0)
            throw new Error("You must specify a filename and file size");
        })(),
        c.super_.call(this, e, s);
    }
    (e.exports = c),
      i.inherits(c, s),
      (c.prototype.shouldRoll = function () {
        return (
          o(
            "should roll with current size ",
            this.currentSize,
            " and max size ",
            this.size
          ),
          this.currentSize >= this.size
        );
      }),
      (c.prototype.roll = function (e, t) {
        var n = this,
          s = r.parse(e),
          i = s.dir,
          c = s.name,
          l = "" === s.ext ? "" : s.ext.substring(1),
          u = new RegExp("^" + c);
        function d(e) {
          return u.test(e);
        }
        function h(e) {
          o("Calculating index of " + e);
          var t = (function (e) {
            return e.substring((c + ".").length).split(".");
          })(e);
          return (
            "gz" === t[t.length - 1] && t.pop(),
            n.options.keepFileExt
              ? parseInt(t[0], 10) || 0
              : parseInt(t[t.length - 1]) || 0
          );
        }
        function f(e, t) {
          return h(e) > h(t) ? 1 : h(e) < h(t) ? -1 : 0;
        }
        o("Rolling, rolling, rolling"),
          this.closeTheStream(
            function (t) {
              o("Renaming the old files"),
                a.readdir(r.dirname(e), function (e, s) {
                  if (e) return t(e);
                  var u = s.filter(d).sort(f);
                  !(function e(s) {
                    var d = u.pop();
                    if (!d || s) return t(s);
                    !(function (e, t) {
                      var s = h(e);
                      if ((o("Index of " + e + " is " + s), s < n.backups)) {
                        var u = (s + 1).toString(),
                          d = [c];
                        l
                          ? n.options.keepFileExt
                            ? d.push(u, l)
                            : d.push(l, u)
                          : d.push(u);
                        var f = r.join(i, d.join("."));
                        n.options.compress &&
                          ".gz" === r.extname(e) &&
                          (f += ".gz"),
                          a.unlink(f, function (s) {
                            o("Renaming " + e + " -> " + f),
                              a.rename(r.join(i, e), f, function (s) {
                                s
                                  ? t(s)
                                  : n.options.compress && ".gz" !== r.extname(e)
                                  ? n.compress(f, t)
                                  : t();
                              });
                          });
                      } else t();
                    })(d, e);
                  })();
                });
            }.bind(null, this.openTheStream.bind(this, t))
          );
      });
  },
  function (e, t, n) {
    var s = n(5),
      o = n(12),
      i = parseInt("0777", 8);
    function r(e, t, n, a) {
      "function" == typeof t
        ? ((n = t), (t = {}))
        : (t && "object" == typeof t) || (t = { mode: t });
      var c = t.mode,
        l = t.fs || o;
      void 0 === c && (c = i), a || (a = null);
      var u = n || function () {};
      (e = s.resolve(e)),
        l.mkdir(e, c, function (n) {
          if (!n) return u(null, (a = a || e));
          switch (n.code) {
            case "ENOENT":
              if (s.dirname(e) === e) return u(n);
              r(s.dirname(e), t, function (n, s) {
                n ? u(n, s) : r(e, t, u, s);
              });
              break;
            default:
              l.stat(e, function (e, t) {
                e || !t.isDirectory() ? u(n, a) : u(null, a);
              });
          }
        });
    }
    (e.exports = r.mkdirp = r.mkdirP = r),
      (r.sync = function e(t, n, r) {
        (n && "object" == typeof n) || (n = { mode: n });
        var a = n.mode,
          c = n.fs || o;
        void 0 === a && (a = i), r || (r = null), (t = s.resolve(t));
        try {
          c.mkdirSync(t, a), (r = r || t);
        } catch (o) {
          switch (o.code) {
            case "ENOENT":
              (r = e(s.dirname(t), n, r)), e(t, n, r);
              break;
            default:
              var l;
              try {
                l = c.statSync(t);
              } catch (e) {
                throw o;
              }
              if (!l.isDirectory()) throw o;
          }
        }
        return r;
      });
  },
  function (e, t, n) {
    var s = n(38);
    "disable" === process.env.READABLE_STREAM && s
      ? ((e.exports = s),
        ((t = e.exports = s.Readable).Readable = s.Readable),
        (t.Writable = s.Writable),
        (t.Duplex = s.Duplex),
        (t.Transform = s.Transform),
        (t.PassThrough = s.PassThrough),
        (t.Stream = s))
      : (((t = e.exports = n(85)).Stream = s || t),
        (t.Readable = t),
        (t.Writable = n(88)),
        (t.Duplex = n(36)),
        (t.Transform = n(90)),
        (t.PassThrough = n(162)));
  },
  function (e, t) {
    var n = {}.toString;
    e.exports =
      Array.isArray ||
      function (e) {
        return "[object Array]" == n.call(e);
      };
  },
  function (e, t) {
    "function" == typeof Object.create
      ? (e.exports = function (e, t) {
          t &&
            ((e.super_ = t),
            (e.prototype = Object.create(t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })));
        })
      : (e.exports = function (e, t) {
          if (t) {
            e.super_ = t;
            var n = function () {};
            (n.prototype = t.prototype),
              (e.prototype = new n()),
              (e.prototype.constructor = e);
          }
        });
  },
  function (e, t, n) {
    "use strict";
    var s = n(44).Buffer,
      o = n(13);
    (e.exports = (function () {
      function e() {
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
          (this.head = null),
          (this.tail = null),
          (this.length = 0);
      }
      return (
        (e.prototype.push = function (e) {
          var t = { data: e, next: null };
          this.length > 0 ? (this.tail.next = t) : (this.head = t),
            (this.tail = t),
            ++this.length;
        }),
        (e.prototype.unshift = function (e) {
          var t = { data: e, next: this.head };
          0 === this.length && (this.tail = t), (this.head = t), ++this.length;
        }),
        (e.prototype.shift = function () {
          if (0 !== this.length) {
            var e = this.head.data;
            return (
              1 === this.length
                ? (this.head = this.tail = null)
                : (this.head = this.head.next),
              --this.length,
              e
            );
          }
        }),
        (e.prototype.clear = function () {
          (this.head = this.tail = null), (this.length = 0);
        }),
        (e.prototype.join = function (e) {
          if (0 === this.length) return "";
          for (var t = this.head, n = "" + t.data; (t = t.next); )
            n += e + t.data;
          return n;
        }),
        (e.prototype.concat = function (e) {
          if (0 === this.length) return s.alloc(0);
          for (
            var t, n, o, i = s.allocUnsafe(e >>> 0), r = this.head, a = 0;
            r;

          )
            (t = r.data),
              (n = i),
              (o = a),
              t.copy(n, o),
              (a += r.data.length),
              (r = r.next);
          return i;
        }),
        e
      );
    })()),
      o &&
        o.inspect &&
        o.inspect.custom &&
        (e.exports.prototype[o.inspect.custom] = function () {
          var e = o.inspect({ length: this.length });
          return this.constructor.name + " " + e;
        });
  },
  function (e, t, n) {
    e.exports = n(13).deprecate;
  },
  function (e, t, n) {
    "use strict";
    e.exports = i;
    var s = n(90),
      o = Object.create(n(39));
    function i(e) {
      if (!(this instanceof i)) return new i(e);
      s.call(this, e);
    }
    (o.inherits = n(40)),
      o.inherits(i, s),
      (i.prototype._transform = function (e, t, n) {
        n(null, e);
      });
  },
  function (e, t, n) {
    "use strict";
    var s = n(83),
      o = n(10)("streamroller:DateRollingFileStream"),
      i = n(79),
      r = n(12),
      a = n(5),
      c = n(13);
    function l(e, t, n, s) {
      o("Now is ", s),
        t && "object" == typeof t && ((s = n), (n = t), (t = null)),
        (this.pattern = t || ".yyyy-MM-dd"),
        (this.now = s || Date.now),
        (this.lastTimeWeWroteSomething = i.asString(
          this.pattern,
          (function (e, t) {
            return r.existsSync(e) ? r.statSync(e).mtime : new Date(t());
          })(e, this.now)
        )),
        (this.baseFilename = e),
        (this.alwaysIncludePattern = !1),
        o("options is ", n),
        n &&
          n.alwaysIncludePattern &&
          (o("always include pattern is true"),
          (this.alwaysIncludePattern = !0),
          (e = this.baseFilename + this.lastTimeWeWroteSomething),
          o("filename is now ", e)),
        o("this.now is ", this.now, ", now is ", s),
        l.super_.call(this, e, n);
    }
    (e.exports = l),
      c.inherits(l, s),
      (l.prototype.shouldRoll = function () {
        var e = this.lastTimeWeWroteSomething,
          t = i.asString(this.pattern, new Date(this.now()));
        return (
          o(
            "DateRollingFileStream.shouldRoll with now = ",
            this.now(),
            ", thisTime = ",
            t,
            ", lastTime = ",
            e
          ),
          (this.lastTimeWeWroteSomething = t),
          (this.previousTime = e),
          t !== e
        );
      }),
      (l.prototype.roll = function (e, t) {
        o("Starting roll");
        var n = a.parse(this.baseFilename);
        if (this.alwaysIncludePattern)
          (this.filename = this.options.keepFileExt
            ? a.join(n.dir, n.name + this.lastTimeWeWroteSomething + n.ext)
            : this.baseFilename + this.lastTimeWeWroteSomething),
            this.closeTheStream(
              this.compressIfNeeded.bind(
                this,
                e,
                this.removeOldFilesIfNeeded.bind(
                  this,
                  this.openTheStream.bind(this, t)
                )
              )
            );
        else {
          var s = this.options.keepFileExt
            ? a.join(n.dir, n.name + this.previousTime + n.ext)
            : this.baseFilename + this.previousTime;
          this.closeTheStream(
            function (e) {
              r.unlink(s, function (t) {
                e();
              });
            }.bind(
              null,
              function (t) {
                o("Renaming the ", e, " -> ", s), r.rename(e, s, t);
              }.bind(
                null,
                this.compressIfNeeded.bind(
                  this,
                  s,
                  this.removeOldFilesIfNeeded.bind(
                    this,
                    this.openTheStream.bind(this, t)
                  )
                )
              )
            )
          );
        }
      }),
      (l.prototype.compressIfNeeded = function (e, t) {
        o("Checking if we need to compress the old file"),
          this.options.compress ? this.compress(e, t) : t();
      }),
      (l.prototype.removeOldFilesIfNeeded = function (e) {
        if (
          (o("Checking if we need to delete old files"),
          this.options.daysToKeep && this.options.daysToKeep > 0)
        ) {
          var t = new Date(this.now() - 864e5 * this.options.daysToKeep);
          o("Will delete any log files modified before ", t.toString()),
            this.removeFilesOlderThan(t);
        }
        e();
      }),
      (l.prototype.removeFilesOlderThan = function (e) {
        for (
          var t = a.dirname(this.baseFilename),
            n = a.basename(this.baseFilename),
            s = r.readdirSync(t).filter(function (e) {
              return e.indexOf(n) > -1;
            }),
            i = 0;
          i < s.length;
          i++
        ) {
          var c = a.join(t, s[i]);
          r.statSync(c).mtime < e &&
            (o("Deleting old log ", s), r.unlinkSync(c));
        }
      });
  },
  function (e, t, n) {
    "use strict";
    const s = n(82),
      o = n(25).EOL || "\n";
    e.exports.configure = function (e, t) {
      let n = t.basicLayout;
      return (
        e.layout && (n = t.layout(e.layout.type, e.layout)),
        e.alwaysIncludePattern || (e.alwaysIncludePattern = !1),
        (function (e, t, n, i, r) {
          const a = new s.DateRollingFileStream(e, t, i),
            c = function (e) {
              a.write(n(e, r) + o, "utf8");
            };
          return (
            (c.shutdown = function (e) {
              a.write("", "utf-8", () => {
                a.end(e);
              });
            }),
            c
          );
        })(e.filename, e.pattern, n, e, e.timezoneOffset)
      );
    };
  },
  function (e, t) {
    function n(e) {
      var t = new Error("Cannot find module '" + e + "'");
      throw ((t.code = "MODULE_NOT_FOUND"), t);
    }
    (n.keys = function () {
      return [];
    }),
      (n.resolve = n),
      (e.exports = n),
      (n.id = 165);
  },
  function (e, t, n) {
    "use strict";
    const s = n(10)("log4js:logger"),
      o = n(81),
      i = n(35),
      r = n(60),
      a = n(91),
      c = n(34);
    class l {
      constructor(e) {
        if (!e) throw new Error("No category provided.");
        (this.category = e),
          (this.context = {}),
          s(`Logger created (${this.category}, ${this.level})`);
      }
      get level() {
        return i.getLevel(a.getLevelForCategory(this.category), i.TRACE);
      }
      set level(e) {
        a.setLevelForCategory(this.category, i.getLevel(e, this.level));
      }
      log(e, ...t) {
        const n = i.getLevel(e, i.INFO);
        this.isLevelEnabled(n) && this._log(n, t);
      }
      isLevelEnabled(e) {
        return this.level.isLessThanOrEqualTo(e);
      }
      _log(e, t) {
        s(`sending log data (${e}) to appenders`);
        const n = new o(this.category, e, t, this.context);
        r.send(n);
      }
      addContext(e, t) {
        this.context[e] = t;
      }
      removeContext(e) {
        delete this.context[e];
      }
      clearContext() {
        this.context = {};
      }
    }
    function u(e) {
      const t = i.getLevel(e),
        n = t
          .toString()
          .toLowerCase()
          .replace(/_([a-z])/g, (e) => e[1].toUpperCase()),
        s = n[0].toUpperCase() + n.slice(1);
      (l.prototype[`is${s}Enabled`] = function () {
        return this.isLevelEnabled(t);
      }),
        (l.prototype[n] = function (...e) {
          this.log(t, ...e);
        });
    }
    i.levels.forEach(u),
      c.addListener(() => {
        i.levels.forEach(u);
      }),
      (e.exports = l);
  },
  function (e, t, n) {
    "use strict";
    const s = n(35);
    function o(e) {
      return e.originalUrl || e.url;
    }
    function i(e, t) {
      for (let n = 0; n < t.length; n++)
        e = e.replace(t[n].token, t[n].replacement);
      return e;
    }
    e.exports = function (e, t) {
      t = "object" == typeof t ? t || {} : t ? { format: t } : {};
      const n = e;
      let r = s.getLevel(t.level, s.INFO);
      const a =
          t.format ||
          ':remote-addr - - ":method :url HTTP/:http-version" :status :content-length ":referrer" ":user-agent"',
        c = t.nolog
          ? (function (e) {
              let t = null;
              if (
                e &&
                (e instanceof RegExp && (t = e),
                "string" == typeof e && (t = new RegExp(e)),
                Array.isArray(e))
              ) {
                const n = e.map((e) => (e.source ? e.source : e));
                t = new RegExp(n.join("|"));
              }
              return t;
            })(t.nolog)
          : null;
      return (e, l, u) => {
        if (e._logging) return u();
        if (c && c.test(e.originalUrl)) return u();
        if (n.isLevelEnabled(r) || "auto" === t.level) {
          const c = new Date(),
            u = l.writeHead;
          (e._logging = !0),
            (l.writeHead = (e, n) => {
              (l.writeHead = u),
                l.writeHead(e, n),
                (l.__statusCode = e),
                (l.__headers = n || {}),
                "auto" === t.level
                  ? ((r = s.INFO),
                    e >= 300 && (r = s.WARN),
                    e >= 400 && (r = s.ERROR))
                  : (r = s.getLevel(t.level, s.INFO));
            }),
            l.on("finish", () => {
              if (
                ((l.responseTime = new Date() - c),
                l.statusCode &&
                  "auto" === t.level &&
                  ((r = s.INFO),
                  l.statusCode >= 300 && (r = s.WARN),
                  l.statusCode >= 400 && (r = s.ERROR)),
                n.isLevelEnabled(r))
              ) {
                const s = (function (e, t, n) {
                  const s = [];
                  return (
                    s.push({ token: ":url", replacement: o(e) }),
                    s.push({ token: ":protocol", replacement: e.protocol }),
                    s.push({ token: ":hostname", replacement: e.hostname }),
                    s.push({ token: ":method", replacement: e.method }),
                    s.push({
                      token: ":status",
                      replacement: t.__statusCode || t.statusCode,
                    }),
                    s.push({
                      token: ":response-time",
                      replacement: t.responseTime,
                    }),
                    s.push({
                      token: ":date",
                      replacement: new Date().toUTCString(),
                    }),
                    s.push({
                      token: ":referrer",
                      replacement:
                        e.headers.referer || e.headers.referrer || "",
                    }),
                    s.push({
                      token: ":http-version",
                      replacement: `${e.httpVersionMajor}.${e.httpVersionMinor}`,
                    }),
                    s.push({
                      token: ":remote-addr",
                      replacement:
                        e.headers["x-forwarded-for"] ||
                        e.ip ||
                        e._remoteAddress ||
                        (e.socket &&
                          (e.socket.remoteAddress ||
                            (e.socket.socket &&
                              e.socket.socket.remoteAddress))),
                    }),
                    s.push({
                      token: ":user-agent",
                      replacement: e.headers["user-agent"],
                    }),
                    s.push({
                      token: ":content-length",
                      replacement:
                        (t._headers && t._headers["content-length"]) ||
                        (t.__headers && t.__headers["Content-Length"]) ||
                        "-",
                    }),
                    s.push({
                      token: /:req\[([^\]]+)]/g,
                      replacement: function (t, n) {
                        return e.headers[n.toLowerCase()];
                      },
                    }),
                    s.push({
                      token: /:res\[([^\]]+)]/g,
                      replacement: function (e, n) {
                        return t._headers
                          ? t._headers[n.toLowerCase()] || t.__headers[n]
                          : t.__headers && t.__headers[n];
                      },
                    }),
                    ((e) => {
                      const t = e.concat();
                      for (let e = 0; e < t.length; ++e)
                        for (let n = e + 1; n < t.length; ++n)
                          t[e].token == t[n].token && t.splice(n--, 1);
                      return t;
                    })(n.concat(s))
                  );
                })(e, l, t.tokens || []);
                if ("function" == typeof a) {
                  const t = a(e, l, (e) => i(e, s));
                  t && n.log(r, t);
                } else n.log(r, i(a, s));
              }
            });
        }
        return u();
      };
    };
  },
  function (e, t) {
    e.exports = {
      default: { appenders: ["debug"], level: "debug" },
      debug: { appenders: ["debug"], level: "debug" },
      info: { appenders: ["info"], level: "info" },
      warn: { appenders: ["warn"], level: "warn" },
      error: { appenders: ["error"], level: "error" },
      fatal: { appenders: ["fatal"], level: "fatal" },
    };
  },
  function (e, t, n) {
    const s = n(5),
      o = n(1).logsPath;
    e.exports = function (e) {
      return {
        error: {
          type: "file",
          filename: s.join(o, e + ".log"),
          layout: { type: "basic" },
        },
        debug: {
          type: "file",
          filename: s.join(o, e + ".log"),
          layout: { type: "basic" },
        },
        warn: {
          type: "file",
          filename: s.join(o, e + ".log"),
          layout: { type: "basic" },
        },
        info: {
          type: "file",
          filename: s.join(o, e + ".log"),
          layout: { type: "basic" },
        },
        fatal: {
          type: "file",
          filename: s.join(o, e + ".log"),
          layout: { type: "basic" },
        },
      };
    };
  },
  function (e, t, n) {
    const s = n(5),
      { app: o } = n(0);
    e.exports = {
      topMostForbidden: !1,
      sundayAppId: "21a945e25b6e47c9ad812354edb46cf4",
      logsPath: s.resolve(
        process.env.ProgramData,
        "Seewo",
        "SeewoServiceAssistant",
        "logs"
      ),
      webSourcePath: s.resolve(o.getAppPath(), "./public/"),
      smartPenWebsocketHost: {
        ip: "wss://127.0.0.1",
        url: "/forward/SeewoHugoHttp/SeewoSmartPen",
      },
      proxyWebsocketHost: { ip: "wss://127.0.0.1", url: "/SeewoProxy" },
      hugoServiceWebsocket: {
        ip: "wss://127.0.0.1",
        url: "/forward/SeewoHugoHttp/SeewoHugoService",
      },
      proxyHttp: { ip: "127.0.0.1" },
      ADBlockWebSocket: {
        ip: "wss://127.0.0.1",
        url: "/forward/SeewoHugoHttp/SeewoWindowBlock",
      },
      adminWebsocket: {
        ip: "wss://127.0.0.1",
        url: "/forward/SeewoHugoHttp/systemcleaner",
      },
      SeewoVoiceService: {
        ip: "wss://127.0.0.1",
        url: "/forward/SeewoHugoHttp/SeewoVoiceService",
      },
      processAcceleration: {
        ip: "wss://127.0.0.1",
        url: "/forward/SeewoHugoHttp/processAcceleration",
      },
      virusService: {
        ip: "wss://127.0.0.1",
        url: "/forward/SeewoHugoHttp/virus",
      },
      remoteControlWebsocket: {
        ip: "wss://127.0.0.1",
        url: "/forward/SeewoHugoHttp/RemoteControl",
      },
      remoteControlStatusWebsocket: {
        ip: "wss://127.0.0.1",
        url: "/forward/ZegoHttp/ZegoRemoteDesktop",
      },
      edgeServerWebsocket: {
        ip: "wss://127.0.0.1",
        url: "/forward/EdgeServerHttp/edgeServer",
      },
      wisdomPlatformWebsocket: {
        ip: "wss://127.0.0.1",
        url: "/forward/SeewoHugoHttp/wisdomPlatform",
      },
      audioWebsocket: {
        ip: "wss://127.0.0.1",
        url: "/forward/SeewoHugoHttp/SeewoLightAudio",
      },
      webrtcWebsocket: { ip: "wss://127.0.0.1", url: "/RemoteControl" },
      lightIot: { ip: "wss://127.0.0.1", url: "/light_iot" },
      ports: {},
      appPath: s.resolve(o.getAppPath(), ".."),
      dllRoot: s.resolve(o.getAppPath(), "..", "assets/dlls"),
      jsRoot: s.resolve(o.getAppPath(), "..", "assets/js"),
      customMadeRoot: s.resolve(o.getAppPath(), "..", "assets/customMade"),
      openPortSearching: !0,
      SeewoDesktop: {
        ip: "wss://127.0.0.1",
        url: "/forward/SeewoHugoHttp/seewoDesktop",
      },
      passwordSalt: "hugo",
      activationCodePublicKey:
        "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAjWNODQbtJcF9WT6BTkBmyMO0+0DlUUoC2isKC6reHIZgcGszbsa2ibI1Ybf/yX0GTQxfiYwe7PjErZIBezmXyw+fE1mQimJT86Ck/CpPqpRhQs9Q3G5hLpnrP5JIoBNO7MovvVBL6z9otgbpgONZhFi8SVUiS3JWx2TzwWSQ7dzsc1yk8LB9EDu6mR4lbwGKjvaOfa6Py7JIsI3Qis5lqb8wADTooYEV21H6Pg8aPbB6ljCCxNEFWmIMAMFFMOiAFgm9N2Z7ezwBVsEHjCAuvoQ1QENVWn7Zlw3aDSOI9UZ+SikDnM2EyY4gqp5QCGAkZy7ZdI7Mp+pNA+wIfdHnZwIDAQAB",
    };
  },
  function (e, t, n) {
    const s = n(5),
      { app: o } = n(0);
    e.exports = {
      canOpenDevTool: !0,
      webConfig: {
        fridayAppId: "d935f1107e9ed4282c0d23342821418b",
        ccloudAppId: "d4df5bcf778c5ff51e1e6de91e0c8b7316253816",
        seewoIotAppAdmin: "https://campus.test.seewo.com/seewo-iot-app-admin",
        activationCodeUnlockTargetUrl:
          "https://campus.test.seewo.com/hugo-mobile/#/offlinelock",
        ucUrl: "https://id.test.seewo.com",
        hugoUrl: "https://campus.test.seewo.com/hugo",
        sceneAudioRoot: s.resolve(o.getAppPath(), "..", "assets/SceneVoice"),
        updateLogUrl:
          "https://campus.test.seewo.com/iot-public/file/?key=iot_doc_seewoServiceUpdateLog",
        uipsControllerIframeUrl:
          "https://campus.test.seewo.com/uips/uipsControllerIframe",
        MFSiteUrl: "https://campus.test.seewo.com/iot-public/redirectToMF",
      },
      activationCodePublicKey:
        "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA1ez6JFoQW3hYDKDBI57huWtTYMreAXizF4S28eGcsi4WBYxkTqM72O93YHIwXITJeaLi2amRqV7lBOZgmZvuXIkseG6C1oXNVEq1rllkWpgqq5fyZbNQiivCjbRQysyXJI4lpjtTsGssQ7Iy+BWegu74Q5NTg5MvV544xRCNgrJ4G88ZxUiVdyCLcL9kmgc/ongxFL/jO33pknM+c8i+ZA4JpgzUSw2EFKOcDVEqO/16r2LdzMoePqMQxKny5FmVvaKRH3/HsEglW1R+x0j4Rc9cNrH1BwDIgankIwJIXdVXOy6LBueIqKSPJ8l4G2aPx7e/FxGBWHpdeIf31AKEYQIDAQAB",
    };
  },
  function (e, t, n) {
    const s = n(5),
      { app: o } = n(0);
    e.exports = {
      canOpenDevTool: !1,
      webConfig: {
        fridayAppId: "ce0783fe7e1fd4856a00a956864ac075",
        ccloudAppId: "52118156094de0659aafdf26d843e83ffbc8692e",
        seewoIotAppAdmin: "https://campus.seewo.com/seewo-iot-app-admin",
        activationCodeUnlockTargetUrl:
          "https://campus.seewo.com/hugo-mobile/#/offlinelock",
        ucUrl: "https://id.seewo.com",
        hugoUrl: "https://campus.seewo.com/hugo",
        sceneAudioRoot: s.resolve(o.getAppPath(), "..", "assets/SceneVoice"),
        updateLogUrl:
          "https://campus.seewo.com/iot-public/file/?key=iot_doc_seewoServiceUpdateLog",
        uipsControllerIframeUrl:
          "https://campus.seewo.com/uips/uipsControllerIframe",
        MFSiteUrl: "https://campus.seewo.com/iot-public/redirectToMF",
      },
      activationCodePublicKey:
        "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAjWNODQbtJcF9WT6BTkBmyMO0+0DlUUoC2isKC6reHIZgcGszbsa2ibI1Ybf/yX0GTQxfiYwe7PjErZIBezmXyw+fE1mQimJT86Ck/CpPqpRhQs9Q3G5hLpnrP5JIoBNO7MovvVBL6z9otgbpgONZhFi8SVUiS3JWx2TzwWSQ7dzsc1yk8LB9EDu6mR4lbwGKjvaOfa6Py7JIsI3Qis5lqb8wADTooYEV21H6Pg8aPbB6ljCCxNEFWmIMAMFFMOiAFgm9N2Z7ezwBVsEHjCAuvoQ1QENVWn7Zlw3aDSOI9UZ+SikDnM2EyY4gqp5QCGAkZy7ZdI7Mp+pNA+wIfdHnZwIDAQAB",
    };
  },
  function (e, t) {
    e.exports = {
      getDateString: () => {
        let e = new Date();
        return (
          "" +
          e.getFullYear() +
          (e.getMonth() < 9 ? "0" + (e.getMonth() + 1) : e.getMonth() + 1) +
          (e.getDate() < 10 ? "0" + e.getDate() : e.getDate())
        );
      },
    };
  },
  function (e, t, n) {
    const s = n(1),
      { crashReporter: o } = n(0);
    e.exports = function () {
      let e = "https://sunday.cvte.com/bugly/api/v1/electron/" + s.sundayAppId;
      o.start({
        productName: "SeewoServiceAssistant",
        companyName: "Seewo",
        submitURL: e,
        uploadToServer: !0,
      });
    };
  },
  function (e, t, n) {
    const { dllRoot: s } = n(1),
      o = n(46),
      i = n(14);
    let r = [],
      a = o.Library(s + "/RpcDiscoverFfi.dll", {
        RegisterPortListener: ["void", ["string", "pointer"]],
        StopMonitor: ["void", []],
      });
    (a.listener = (e, t) => {
      let n = ((e) =>
        o.Callback(i.types.void, [i.types.int], (t) => {
          e(t);
        }))(t);
      r.push(n), a.RegisterPortListener(e, n);
    }),
      process.on("exit", () => {
        delete r;
      }),
      (e.exports = a);
  },
  function (e, t) {
    e.exports = require("../addons/ffi_bindings.node");
  },
  function (e, t) {
    e.exports = require("../addons/binding.node");
  },
  function (e, t, n) {
    "use strict";
    const s = n(14),
      o = n(15),
      i = n(21),
      r = n(96),
      a = n(41),
      c = n(10)("ffi:FunctionType");
    function l(e, t, n) {
      if (!(this instanceof l)) return new l(e, t, n);
      c("creating new FunctionType"),
        o(!!e, 'expected a return "type" object as the first argument'),
        o(
          Array.isArray(t),
          'expected Array of arg "type" objects as the second argument'
        ),
        (this.retType = s.coerceType(e)),
        (this.argTypes = t.map(s.coerceType)),
        (this.abi = null == n ? i.FFI_DEFAULT_ABI : n);
    }
    (e.exports = l),
      (l.prototype.ffi_type = i.FFI_TYPES.pointer),
      (l.prototype.size = s.sizeof.pointer),
      (l.prototype.alignment = s.alignof.pointer),
      (l.prototype.indirection = 1),
      (l.prototype.toPointer = function (e) {
        return r(this.retType, this.argTypes, this.abi, e);
      }),
      (l.prototype.toFunction = function (e) {
        return a(e, this.retType, this.argTypes, this.abi);
      }),
      (l.prototype.get = function (e, t) {
        c('ffi FunctionType "get" function');
        const n = e.readPointer(t);
        return this.toFunction(n);
      }),
      (l.prototype.set = function (e, t, n) {
        let s;
        if ((c('ffi FunctionType "set" function'), "function" == typeof n))
          s = this.toPointer(n);
        else {
          if (!Buffer.isBuffer(n))
            throw new Error(
              "don't know how to set callback function for: " + n
            );
          s = n;
        }
        e.writePointer(s, t);
      });
  },
  function (e, t, n) {
    "use strict";
    const s = n(63),
      o = n(41),
      i = n(98),
      r = n(10)("ffi:Library"),
      a = s.FLAGS.RTLD_NOW,
      c = (l.EXT = {
        linux: ".so",
        linux2: ".so",
        sunos: ".so",
        solaris: ".so",
        freebsd: ".so",
        openbsd: ".so",
        darwin: ".dylib",
        mac: ".dylib",
        win32: ".dll",
      }[process.platform]);
    function l(e, t, n) {
      r("creating Library object for", e),
        e &&
          -1 === e.indexOf(c) &&
          (r("appending library extension to library name", c), (e += c)),
        n || (n = {});
      const l = new s(e || null, a);
      return (
        Object.keys(t || {}).forEach(function (s) {
          r("defining function", s);
          const a = l.get(s),
            c = t[s];
          if (a.isNull())
            throw new Error(
              'Library: "' +
                e +
                '" returned NULL function pointer for "' +
                s +
                '"'
            );
          const u = c[0],
            d = c[1],
            h = c[2],
            f = h && h.abi,
            p = h && h.async;
          if (h && h.varargs) n[s] = i(a, u, d, f);
          else {
            const e = o(a, u, d, f);
            n[s] = p ? e.async : e;
          }
        }),
        n
      );
    }
    e.exports = l;
  },
  function (e, t, n) {
    "use strict";
    const s = n(63),
      o = n(41),
      i = n(21).StaticFunctions,
      r = n(14),
      a = r.types.int,
      c = r.refType(a);
    let l = null;
    if ("win32" == process.platform) {
      const e = o(s("msvcrt.dll").get("_errno"), c, []);
      l = function () {
        return e().deref();
      };
    } else l = o(i._errno, "int", []);
    e.exports = l;
  },
  function (e, t, n) {
    const { dllRoot: s } = n(1),
      o = n(46),
      i = n(14);
    let r = o.Library(s + "/KeyBoardHookFfi.dll", {
      SetKeyboardHook: [i.types.bool, []],
      UnHookKeyBoard: [i.types.bool, []],
    });
    process.on("exit", () => {
      r.UnHookKeyBoard();
    }),
      (e.exports = r);
  },
  function (e, t, n) {
    const { BrowserWindow: s, app: o, systemPreferences: i, shell: r } = n(0),
      a = n(7),
      c = n(1),
      l = n(64),
      u = n(183),
      d = (e) => {
        const { screen: t } = n(0),
          { bounds: s } = t.getPrimaryDisplay(),
          o = (e.autoResizeBaseWidth || 1920) / s.width;
        let i = e.right
          ? Math.ceil(s.width - (e.configure.width + e.right) / o)
          : e.left
          ? Math.ceil(e.left / o)
          : 0;
        i =
          e.center && e.center.x
            ? Math.ceil((s.width - e.configure.width / o) / 2)
            : i;
        let r = e.bottom
          ? Math.ceil(s.height - (e.configure.height + e.bottom) / o)
          : e.top
          ? Math.ceil(e.top / o)
          : 0;
        return (
          (r =
            e.center && e.center.y
              ? Math.ceil((s.height - e.configure.height / o) / 2)
              : r),
          {
            width: e.configure.width ? Math.ceil(e.configure.width / o) : 0,
            height: e.configure.height ? Math.ceil(e.configure.height / o) : 0,
            x: i,
            y: r,
            windowScale: o,
          }
        );
      };
    e.exports = class {
      constructor(e, t, n, s) {
        (this.options = e),
          (this.wname = t),
          (this.windowObj = null),
          (this.parentWindow = s),
          (this.listenEvent = this.listenEvent.bind(this)),
          (this.urlParamsStr = ((e) => {
            if (e) {
              let t = [];
              for (let n in e) t.push(u(n) + "=" + u(e[n]));
              return t.join("&");
            }
            return "";
          })(n));
      }
      create() {
        const { options: e } = this,
          t = e.hasOwnProperty("beforeCreate")
            ? e.beforeCreate(e.configure)
            : null,
          u = n(2);
        u.share("DWMOpenState", i.isAeroGlassEnabled());
        const h = {};
        if (e.autoResize && e.configure && e.configure.width) {
          let t = d(e);
          (h.width = t.width),
            (h.height = t.height),
            (h.x = t.x),
            (h.y = t.y),
            u.share("setZoomFactor", 1 / t.windowScale, this.wname);
        }
        let f = new s(
          Object.assign(
            {},
            {
              transparent: !0,
              backgroundColor: "#00FFFFFF",
              frame: !1,
              fullscreenable: !1,
              selectedTextBackgroundColor: "#00FFFFFF",
              webPreferences: {
                webSecurity: !1,
                allowRunningInsecureContent: !0,
                nodeIntegration: !0,
                nodeIntegrationInWorker: !0,
                enableRemoteModule: !0,
                devTools: !!c.canOpenDevTool,
              },
              parent: this.parentWindow || null,
              title: u.getData("CUSTOM_CONFIG").appName,
            },
            e.configure,
            h
          )
        );
        if (
          ((this.windowObj = f),
          a.info(this.wname + "窗口创建"),
          f.on("responsive", () => {
            f.reload();
          }),
          this.listenEvent(t),
          f.webContents.on("new-window", function (t, n) {
            t.preventDefault(), e.allowNewWindow && r.openExternal(n);
          }),
          a.info(c.webSourcePath + "/" + e.htmlName + ".html"),
          f.webContents.session.webRequest.onHeadersReceived(
            { urls: ["*://*/*"] },
            (e, t) => {
              e.responseHeaders["X-Frame-Options"]
                ? delete e.responseHeaders["X-Frame-Options"]
                : e.responseHeaders["x-frame-options"] &&
                  delete e.responseHeaders["x-frame-options"],
                e.responseHeaders["Content-Security-Policy"] &&
                  delete e.responseHeaders["Content-Security-Policy"],
                t({ cancel: !1, responseHeaders: e.responseHeaders });
            }
          ),
          e.needsFocusFix)
        ) {
          const e = "win32" === process.platform;
          let t = !1;
          f.on("blur", () => {
            !f.isDestroyed() && f.isFocused() && (t = !0);
          }),
            f.on("focus", () => {
              e &&
                t &&
                ((t = !1),
                setTimeout(() => {
                  f.isDestroyed() || f.blur(),
                    setTimeout(() => {
                      f.isDestroyed() || f.focus();
                    }, 100);
                }, 100));
            });
        }
        if (
          (e.url
            ? f.loadURL(e.url)
            : o.isPackaged
            ? f.loadURL(
                l.format({
                  protocol: "file",
                  slashes: !0,
                  search: "?windowName=" + this.wname + "&" + this.urlParamsStr,
                  pathname: c.webSourcePath + "/" + e.htmlName + ".html",
                })
              )
            : f.loadURL(
                c.webSourcePath +
                  e.htmlName +
                  ".html?windowName=" +
                  this.wname +
                  "&" +
                  this.urlParamsStr
              ),
          e.autoResize)
        ) {
          const t = n(23),
            s = this.wname;
          function p() {
            const t = d(e);
            f.isDestroyed() ||
              f.setBounds(
                e.configure.movable
                  ? { width: t.width, height: t.height }
                  : { width: t.width, height: t.height, x: t.x, y: t.y }
              ),
              u.share("setZoomFactor", 1 / t.windowScale, s);
          }
          t.addListener(p), f.hookWindowMessage(126, p);
        }
        return e.hasOwnProperty("afterCreate") && e.afterCreate(f, t), f;
      }
      listenEvent(e) {
        let { windowObj: t, options: n } = this;
        t.on("close", () => {
          a.info(this.wname + "窗口close"),
            n.hasOwnProperty("onClose") && n.onClose(t, e, this.wname);
        }),
          t.on("closed", () => {
            a.info(this.wname + "窗口closed"),
              n.hasOwnProperty("_onClosed") && n._onClosed(t, e, this.wname);
          }),
          t.on("ready-to-show", () => {
            a.info(this.wname + "窗口ready-to-show"),
              n.hasOwnProperty("onReadyToShow") &&
                n.readyToShow(t, e, this.wname);
          }),
          t.on("restore", () => {
            a.info(this.wname + "窗口restore"),
              n.hasOwnProperty("onRestore") && n.onRestore(t, e, this.wname);
          }),
          t.on("always-on-top-changed", () => {
            a.info(this.wname + "窗口always-on-top-changed"),
              n.hasOwnProperty("onAlwaysOnTopChanged") &&
                n.onAlwaysOnTopChanged(t, e, this.wname);
          }),
          t.webContents.on("crashed", () => {
            a.info(this.wname + "窗口crashed"),
              n.hasOwnProperty("onCrashed") && n.onCrashed(t, e, this.wname);
          }),
          t.webContents.once("dom-ready", () => {
            n.hasOwnProperty("onceDomReady") &&
              n.onceDomReady(t, e, this.wname);
          }),
          t.on("show", () => {
            n.hasOwnProperty("onShow") && n.onShow(t, e, this.wname);
          }),
          t.on("minimize", (s) => {
            a.info(this.wname + "窗口被最小化"),
              n.hasOwnProperty("onMinimize") &&
                n.onMinimize(t, e, this.wname, s);
          }),
          t.webContents.on("before-input-event", (s, o) => {
            n.hasOwnProperty("onBeforeInputEvent") &&
              n.onBeforeInputEvent(t, e, this.wname, s, o);
          });
      }
      createFinish() {
        this.options.hasOwnProperty("onFinished") &&
          this.options.onFinished(this.windowObj);
      }
      getWindowInstance() {
        return this.windowObj;
      }
    };
  },
  function (e, t) {
    e.exports = function (e) {
      if ("string" != typeof e) return e;
      const t = [
        { code: "%", encode: "%25" },
        { code: "?", encode: "%3F" },
        { code: "#", encode: "%23" },
        { code: "&", encode: "%26" },
        { code: "=", encode: "%3D" },
      ];
      return e.replace(/[%?#&=]/g, (e, n, s) => {
        for (const n of t) if (n.code === e) return n.encode;
      });
    };
  },
  function (e, t, n) {
    const { screen: s, systemPreferences: o, app: i } = n(0),
      r = n(2),
      a = n(7),
      c = n(23);
    let l = !1;
    const u = (e) => {
        const { width: t, height: n } = s.getPrimaryDisplay().workArea;
        let o = e ? 912 : 880,
          i = e ? 632 : 600;
        if (1320 > t || 900 > n) {
          let e = 0;
          880 / t < 600 / n && (e = 1);
          let s = 0 === e ? t / (1.5 * o) : n / (1.5 * i);
          return {
            width: Math.ceil(o * s),
            height: Math.ceil(i * s),
            scale: Math.ceil(i * s) / i,
          };
        }
        return { width: o, height: i, scale: 1 };
      },
      d = (e, t) => {
        setTimeout(() => {
          if (!e.isDestroyed())
            if (e.isMinimized()) l = !0;
            else {
              let n = u(t);
              e.setBounds({ width: n.width, height: n.height }),
                r.share("setZoomFactor", n.scale, "assistant"),
                e.center();
            }
        }, 1e3);
      };
    e.exports = {
      configure: {
        center: !0,
        movable: !0,
        resizable: !1,
        maximizable: !1,
        zoomFactor: 1,
      },
      beforeCreate: (e) => {
        let t = o.isAeroGlassEnabled(),
          n = u(t);
        return (e.width = n.width), (e.height = n.height), (n.DWMState = t), n;
      },
      afterCreate: (e, t) => {
        e.webContents.once("dom-ready", () => {
          r.share("setZoomFactor", t.scale, "assistant");
        });
        try {
          const n = r.getData("CUSTOM_CONFIG");
          let s = i.getPath("exe"),
            o = n.root + "/" + n.defaultIconPath;
          e.setIcon(o),
            e.setAppDetails({
              appId: "Seewo.SeewoServiceAssistant.v20190118001",
              appIconPath: o,
              appIconIndex: 0,
              relaunchDisplayName: n.appName,
              relaunchCommand: '"' + s + '"',
            }),
            c.addListener(() => {
              d(e, t.DWMState);
            }),
            e.hookWindowMessage(126, () => {
              d(e, t.DWMState);
            });
        } catch (e) {
          a.error(e);
        }
      },
      onRestore: (e, t) => {
        l && ((l = !1), d(e, t.DWMState));
      },
    };
  },
  function (e, t, n) {
    const { screen: s, systemPreferences: o } = n(0),
      { QUEUE_LIST: i } = n(8),
      { topMost: r, topMostExist: a } = n(9);
    e.exports = {
      configure: {
        center: !1,
        movable: !1,
        skipTaskbar: !0,
        resizable: !1,
        maximizable: !1,
        autoHideMenuBar: !0,
        focusable: !1,
        type: "toolbar",
      },
      beforeCreate: (e) => {
        const { workArea: t } = s.getPrimaryDisplay();
        let n = o.isAeroGlassEnabled();
        const { x: i, y: r, width: a, height: c } = t;
        (e.width = 253),
          (e.height = n ? 68 : 64),
          (e.x = Math.ceil(i + a - 288)),
          (e.y = Math.ceil(r + c - 40 - e.height));
      },
      afterCreate: (e, t) => {
        e.setSkipTaskbar(!0), r(i.BELL_RINGING, e);
      },
      onClosed: (e) => {
        a(i.BELL_RINGING, e);
      },
    };
  },
  function (e, t, n) {
    const { QUEUE_LIST: s } = n(8),
      { topMost: o, topMostExist: i } = n(9);
    e.exports = {
      configure: {
        movable: !1,
        skipTaskbar: !0,
        resizable: !1,
        maximizable: !0,
        autoHideMenuBar: !0,
        focusable: !0,
        fullscreen: !0,
        fullscreenable: !0,
        type: "toolbar",
        backgroundColor: "#000000",
      },
      needsFocusFix: !0,
      afterCreate: (e) => {
        o(s.BLACK_WINDOW, e);
      },
      onClosed: (e) => {
        i(s.BLACK_WINDOW, e);
      },
    };
  },
  function (e, t, n) {
    const s = n(26),
      o = n(19),
      i = n(27),
      r = { windowName: "countdown", width: 480, height: 260, yIndex: 3 };
    e.exports = {
      configure: {
        center: !1,
        movable: !1,
        skipTaskbar: !0,
        resizable: !1,
        maximizable: !1,
        autoHideMenuBar: !0,
        focusable: !1,
        type: "toolbar",
        show: !1,
      },
      beforeCreate: () => {
        o.enterSlot(r);
      },
      afterCreate: (e) => {
        e.setSkipTaskbar(!0);
        try {
          e.hookWindowMessage(126, () => {
            o.updateWindow(r.windowName);
          });
          let t = setInterval(() => {
            e.isDestroyed() ? clearInterval(t) : e.setSkipTaskbar(!0);
          }, 2e3);
        } catch (e) {
          logger.error(e);
        }
      },
      onFinished: (e) => {
        o.updateWindow(r.windowName);
        const t = i(e.getNativeWindowHandle());
        e.show(),
          s.SetWindowPos(t, 1, 0, 0, 0, 0, 3),
          s.SetWindowPos(t, 1, 0, 0, 0, 0, 3);
      },
      onClose: () => {
        o.outSlot(r.windowName);
      },
    };
  },
  function (e, t, n) {
    const { QUEUE_LIST: s } = n(8),
      { topMost: o, topMostExist: i } = n(9);
    e.exports = {
      configure: {
        movable: !1,
        skipTaskbar: !0,
        resizable: !1,
        maximizable: !0,
        autoHideMenuBar: !0,
        focusable: !0,
        fullscreen: !0,
        fullscreenable: !0,
        type: "toolbar",
      },
      afterCreate: (e, t) => {
        o(s.POPOP_CUSTOMIZE, e);
      },
      onClosed: (e) => {
        i(s.POPOP_CUSTOMIZE, e);
      },
    };
  },
  function (e, t, n) {
    const s = n(19),
      o = n(26),
      i = n(27),
      r = {
        windowName: "desktopAssistant",
        width: 480,
        height: 400,
        yIndex: 2,
      };
    e.exports = {
      configure: {
        center: !1,
        movable: !1,
        skipTaskbar: !0,
        resizable: !1,
        maximizable: !1,
        autoHideMenuBar: !0,
        focusable: !1,
        type: "toolbar",
        show: !1,
      },
      beforeCreate: () => {
        s.enterSlot(r);
      },
      afterCreate: (e) => {
        e.setSkipTaskbar(!0);
        try {
          e.hookWindowMessage(126, () => {
            s.updateWindow(r.windowName);
          });
          let t = setInterval(() => {
            e.isDestroyed() ? clearInterval(t) : e.setSkipTaskbar(!0);
          }, 2e3);
        } catch (e) {
          logger.error(e);
        }
      },
      onFinished: (e) => {
        s.enterSlot(r);
        const t = i(e.getNativeWindowHandle());
        e.show(),
          o.SetWindowPos(t, 1, 0, 0, 0, 0, 3),
          o.SetWindowPos(t, 1, 0, 0, 0, 0, 3);
      },
      onClose: () => {
        s.outSlot(r.windowName);
      },
    };
  },
  function (e, t, n) {
    const { screen: s } = n(0),
      o = n(2);
    e.exports = {
      configure: {
        width: 72,
        height: 72,
        center: !1,
        movable: !1,
        resizable: !1,
        maximizable: !1,
        zoomFactor: 1,
        type: "toolbar",
      },
      beforeCreate: (e) => {
        const { workArea: t } = s.getPrimaryDisplay();
        (e.x = t.x + t.width - 72 - 20),
          (e.y =
            t.y + t.height - 72 - 20 - (o.getData("fastToolbarHeight") || 0));
      },
      afterCreate: (e) => {
        e.setSkipTaskbar(!0),
          setInterval(() => {
            !e.isDestroyed() && e.setSkipTaskbar(!0);
          }, 2e3);
      },
    };
  },
  function (e, t, n) {
    const s = n(26),
      o = n(19),
      i = n(27),
      r = {
        windowName: "desktopNotification",
        width: 480,
        height: 200,
        yIndex: 4,
      };
    e.exports = {
      configure: {
        center: !1,
        movable: !1,
        skipTaskbar: !0,
        resizable: !1,
        maximizable: !1,
        autoHideMenuBar: !0,
        focusable: !1,
        type: "toolbar",
        show: !1,
      },
      beforeCreate: () => {
        o.enterSlot(r);
      },
      afterCreate: (e) => {
        e.setSkipTaskbar(!0);
        try {
          e.hookWindowMessage(126, () => {
            o.updateWindow(r.windowName);
          });
          let t = setInterval(() => {
            e.isDestroyed() ? clearInterval(t) : e.setSkipTaskbar(!0);
          }, 2e3);
        } catch (e) {
          logger.error(e);
        }
      },
      onFinished: (e) => {
        o.enterSlot(r);
        const t = i(e.getNativeWindowHandle());
        e.show(),
          s.SetWindowPos(t, 1, 0, 0, 0, 0, 3),
          s.SetWindowPos(t, 1, 0, 0, 0, 0, 3);
      },
      onClose: () => {
        o.outSlot(r.windowName);
      },
    };
  },
  function (e, t, n) {
    const { QUEUE_LIST: s } = n(8),
      { topMost: o, topMostExist: i } = n(9);
    e.exports = {
      configure: {
        center: !1,
        movable: !1,
        resizable: !1,
        maximizable: !1,
        focusable: !1,
        skipTaskbar: !0,
        show: !1,
        type: "toolbar",
      },
      beforeCreate: (e) => {},
      afterCreate: (e) => {
        e.setSkipTaskbar(!0), o(s.DEVICE_LINK, e);
      },
      onClosed: (e) => {
        i(s.DEVICE_LINK, e);
      },
    };
  },
  function (e, t, n) {
    const s = n(26),
      o = n(19),
      i = n(27),
      r = { windowName: "environmentData", width: 480, height: 357, yIndex: 4 };
    e.exports = {
      configure: {
        center: !1,
        movable: !1,
        skipTaskbar: !0,
        resizable: !1,
        maximizable: !1,
        autoHideMenuBar: !0,
        focusable: !1,
        type: "toolbar",
        show: !1,
      },
      beforeCreate: () => {
        o.enterSlot(r);
      },
      afterCreate: (e) => {
        e.setSkipTaskbar(!0);
        try {
          e.hookWindowMessage(126, () => {
            o.updateWindow(r.windowName);
          });
          let t = setInterval(() => {
            e.isDestroyed() ? clearInterval(t) : e.setSkipTaskbar(!0);
          }, 2e3);
        } catch (e) {
          logger.error(e);
        }
      },
      onFinished: (e) => {
        o.enterSlot(r);
        const t = i(e.getNativeWindowHandle());
        e.show(),
          s.SetWindowPos(t, 1, 0, 0, 0, 0, 3),
          s.SetWindowPos(t, 1, 0, 0, 0, 0, 3);
      },
      onClose: () => {
        o.outSlot(r.windowName);
      },
    };
  },
  function (e, t, n) {
    const { screen: s } = n(0),
      { QUEUE_LIST: o } = n(8),
      { topMost: i, topMostExist: r } = n(9);
    e.exports = {
      configure: {
        width: 100,
        height: 100,
        center: !1,
        movable: !1,
        resizable: !1,
        maximizable: !1,
        zoomFactor: 1,
        type: "toolbar",
      },
      beforeCreate: (e) => {
        const { workArea: t } = s.getPrimaryDisplay();
        (e.x = t.x + t.width - 100 - 20), (e.y = t.y + t.height - 100 - 40);
      },
      afterCreate: (e) => {
        e.setSkipTaskbar(!0),
          setInterval(() => {
            !e.isDestroyed() && e.setSkipTaskbar(!0);
          }, 2e3),
          i(o.EYE_PROTECTION_MODE_BALL, e);
      },
      onClosed: (e) => {
        r(o.EYE_PROTECTION_MODE_BALL, e);
      },
    };
  },
  function (e, t, n) {
    const { QUEUE_LIST: s } = n(8),
      { topMost: o, topMostExist: i } = n(9);
    e.exports = {
      configure: {
        movable: !1,
        skipTaskbar: !0,
        resizable: !1,
        maximizable: !0,
        autoHideMenuBar: !0,
        focusable: !1,
        fullscreen: !1,
        fullscreenable: !1,
        type: "toolbar",
      },
      afterCreate: (e) => {
        o(s.EYE_PROTECTION_MODE_TIME_OUT, e);
      },
      onClosed: (e) => {
        i(s.EYE_PROTECTION_MODE_TIME_OUT, e);
      },
    };
  },
  function (e, t, n) {
    const s = n(26),
      o = n(19),
      i = n(27),
      r = { windowName: "fastToolbar", width: 480, height: 56, yIndex: 0 };
    e.exports = {
      configure: {
        center: !1,
        movable: !1,
        skipTaskbar: !0,
        resizable: !1,
        maximizable: !1,
        autoHideMenuBar: !0,
        focusable: !1,
        type: "toolbar",
        show: !1,
      },
      beforeCreate: () => {
        o.enterSlot(r);
      },
      afterCreate: (e) => {
        e.setSkipTaskbar(!0);
        try {
          e.hookWindowMessage(126, () => {
            o.updateWindow(r.windowName);
          });
          let t = setInterval(() => {
            e.isDestroyed() ? clearInterval(t) : e.setSkipTaskbar(!0);
          }, 2e3);
        } catch (e) {
          logger.error(e);
        }
      },
      onFinished: (e) => {
        o.enterSlot(r);
        const t = i(e.getNativeWindowHandle());
        e.show(),
          s.SetWindowPos(t, 1, 0, 0, 0, 0, 3),
          s.SetWindowPos(t, 1, 0, 0, 0, 0, 3);
      },
      onClose: () => {
        o.outSlot(r.windowName);
      },
    };
  },
  function (e, t, n) {
    const { screen: s } = n(0),
      { systemPreferences: o } = n(0),
      i = n(2),
      r = n(23);
    let a = !1;
    const c = (e) => {
        const { width: t, height: n } = s.getPrimaryDisplay().workArea;
        let o = e ? 632 : 600,
          i = e ? 674 : 642;
        if (900 > t || 963 > n) {
          let e = 0;
          600 / t < 642 / n && (e = 1);
          let s = 0 === e ? t / (1.5 * o) : n / (1.5 * i);
          return {
            width: Math.ceil(o * s),
            height: Math.ceil(i * s),
            scale: Math.ceil(i * s) / i,
          };
        }
        return { width: o, height: i, scale: 1 };
      },
      l = (e, t) => {
        setTimeout(() => {
          if (!e.isDestroyed())
            if (e.isMinimized()) a = !0;
            else {
              let n = c(t);
              e.setBounds({ width: n.width, height: n.height }),
                i.share("setZoomFactor", n.scale, "feedback");
            }
        }, 1e3);
      };
    e.exports = {
      configure: {
        skipTaskbar: !0,
        center: !0,
        movable: !0,
        resizable: !1,
        maximizable: !1,
        zoomFactor: 1,
        type: "toolbar",
      },
      beforeCreate: (e) => {
        let t = o.isAeroGlassEnabled(),
          n = c(t);
        return (e.width = n.width), (e.height = n.height), (n.DWMState = t), n;
      },
      afterCreate: (e, t) => {
        e.webContents.once("dom-ready", () => {
          i.share("setZoomFactor", t.scale, "feedback");
        });
        try {
          let n = setInterval(() => {
            e.isDestroyed() ? clearInterval(n) : e.setSkipTaskbar(!0);
          }, 2e3);
          r.addListener(() => {
            l(e, t.DWMState);
          }),
            e.hookWindowMessage(126, () => {
              l(e, t.DWMState);
            });
        } catch (e) {
          logger.error(e);
        }
      },
      onRestore: (e) => {
        a && ((a = !1), l(e, passData.DWMState));
      },
    };
  },
  function (e, t, n) {
    const { screen: s, systemPreferences: o } = n(0),
      { QUEUE_LIST: i } = n(8),
      { topMost: r, topMostExist: a } = n(9);
    e.exports = {
      configure: {
        center: !1,
        movable: !1,
        resizable: !1,
        maximizable: !1,
        skipTaskbar: !0,
        type: "toolbar",
      },
      beforeCreate: (e) => {
        let t = s.getPrimaryDisplay().workAreaSize.width,
          n = s.getPrimaryDisplay().workAreaSize.height,
          i = o.isAeroGlassEnabled();
        (e.width = i ? 332 : 308),
          (e.height = i ? 96 : 88),
          (e.x = t - 332),
          (e.y = n - 114);
      },
      afterCreate: (e) => {
        e.setSkipTaskbar(!0), r(i.FILE_TRANSPORT, e);
      },
      onClosed: (e) => {
        a(i.FILE_TRANSPORT, e);
      },
    };
  },
  function (e, t, n) {
    const { QUEUE_LIST: s } = n(8),
      { topMost: o, topMostExist: i } = n(9);
    e.exports = {
      configure: {
        movable: !0,
        skipTaskbar: !0,
        resizable: !1,
        maximizable: !0,
        autoHideMenuBar: !0,
        focusable: !0,
        fullscreen: !0,
        fullscreenable: !0,
        type: "toolbar",
      },
      afterCreate: (e) => {
        o(s.FIRMWARE_UPGRADE, e);
      },
      onClosed: (e) => {
        i(s.FIRMWARE_UPGRADE, e);
      },
    };
  },
  function (e, t) {
    const n = 328,
      s = 146;
    e.exports = {
      configure: {
        width: n,
        height: s,
        center: !1,
        movable: !1,
        resizable: !1,
        maximizable: !1,
        alwaysOnTop: !0,
        show: !1,
        type: "toolbar",
      },
      afterCreate: (e) => {
        e.setSkipTaskbar(!0),
          setInterval(() => {
            !e.isDestroyed() && e.setSkipTaskbar(!0);
          }, 2e3);
      },
    };
  },
  function (e, t, n) {
    const { toTopMostQueue: s, QUEUE_LIST: o } = n(8),
      { systemPreferences: i } = n(0);
    e.exports = {
      configure: {
        center: !1,
        movable: !0,
        resizable: !1,
        maximizable: !1,
        focusable: !0,
        skipTaskbar: !0,
        show: !0,
        type: "toolbar",
        width: 456,
        height: 322,
      },
      autoResize: !0,
      center: { x: !0, y: !0 },
      beforeCreate: (e) => {
        let t = i.isAeroGlassEnabled();
        return (e.width = t ? 456 : 424), (e.height = t ? 322 : 290), e;
      },
      afterCreate: (e) => {},
      onClosed: (e) => {},
    };
  },
  function (e, t, n) {
    const { QUEUE_LIST: s } = n(8),
      { systemPreferences: o } = n(0),
      { topMost: i, topMostExist: r } = n(9);
    e.exports = {
      configure: {
        center: !1,
        movable: !0,
        resizable: !1,
        maximizable: !1,
        focusable: !1,
        skipTaskbar: !0,
        show: !0,
        type: "toolbar",
        width: 404,
        height: 272,
      },
      needsFocusFix: !0,
      autoResize: !0,
      center: { x: !0, y: !0 },
      beforeCreate: (e) => {
        let t = o.isAeroGlassEnabled();
        return (e.width = t ? 404 : 372), (e.height = t ? 272 : 240), e;
      },
      afterCreate: (e) => {
        e.setSkipTaskbar(!0), i(s.GLOBAL_CONFIRM, e);
      },
      onClosed: (e) => {
        r(s.GLOBAL_CONFIRM, e);
      },
    };
  },
  function (e, t, n) {
    const { QUEUE_LIST: s } = n(8),
      o = n(25),
      { topMost: i, topMostExist: r } = n(9);
    e.exports = {
      configure: {
        center: !1,
        movable: !1,
        resizable: !1,
        maximizable: !1,
        focusable: !1,
        skipTaskbar: !0,
        show: !0,
        type: "toolbar",
        width: 288,
        height: 86,
      },
      autoResize: !0,
      center: { x: !0, y: !1 },
      top: 50,
      beforeCreate: (e) => {},
      afterCreate: (e) => {
        e.setSkipTaskbar(!0);
        const t =
          o.release() &&
          o
            .release()
            .split(".")
            .map((e) => parseInt(e));
        ("Windows_NT" === o.type() && (t[0] < 6 || (6 === t[0] && t[1] < 2))) ||
          e.setIgnoreMouseEvents(!0),
          i(s.GLOBAL_MESSAGE, e);
      },
      onClosed: (e) => {
        r(s.GLOBAL_MESSAGE, e);
      },
    };
  },
  function (e, t, n) {
    const { screen: s } = n(0),
      { systemPreferences: o } = n(0),
      i = n(2),
      r = n(23);
    let a = !1;
    const c = (e) => {
        const { width: t, height: n } = s.getPrimaryDisplay().workArea;
        let o = e ? 832 : 800,
          i = e ? 632 : 600;
        if (1200 > t || 900 > n) {
          let e = 0;
          800 / t < 600 / n && (e = 1);
          let s = 0 === e ? t / (1.5 * o) : n / (1.5 * i);
          return {
            width: Math.ceil(o * s),
            height: Math.ceil(i * s),
            scale: Math.ceil(i * s) / i,
          };
        }
        return { width: o, height: i, scale: 1 };
      },
      l = (e, t) => {
        setTimeout(() => {
          if (!e.isDestroyed())
            if (e.isMinimized()) a = !0;
            else {
              let n = c(t);
              e.setBounds({ width: n.width, height: n.height }),
                i.share("setZoomFactor", n.scale, "login");
            }
        }, 1e3);
      };
    e.exports = {
      configure: {
        skipTaskbar: !0,
        center: !0,
        movable: !0,
        resizable: !1,
        maximizable: !1,
        zoomFactor: 1,
        type: "toolbar",
      },
      allowNewWindow: !0,
      beforeCreate: (e) => {
        let t = o.isAeroGlassEnabled(),
          n = c(t);
        return (
          (e.width = n.width),
          (e.height = n.height),
          (n.DWMState = t),
          (e.transparent = !!t),
          n
        );
      },
      afterCreate: (e, t) => {
        e.webContents.once("dom-ready", () => {
          i.share("setZoomFactor", t.scale, "login");
        });
        try {
          r.addListener(() => {
            l(e, t.DWMState);
          }),
            e.hookWindowMessage(126, () => {
              l(e, t.DWMState);
            }),
            setInterval(() => {
              !e.isDestroyed() && e.setSkipTaskbar(!0);
            }, 2e3);
        } catch (e) {
          logger.error(e);
        }
      },
      onRestore: (e) => {
        a && ((a = !1), l(e, passData.DWMState));
      },
    };
  },
  function (e, t, n) {
    const { QUEUE_LIST: s } = n(8),
      { topMost: o, topMostExist: i } = n(9);
    e.exports = {
      configure: {
        transparent: !1,
        movable: !0,
        skipTaskbar: !0,
        resizable: !1,
        autoHideMenuBar: !0,
        focusable: !1,
        show: !1,
        backgroundColor: "#000000",
        fullscreen: !0,
        type: "toolbar",
        maximizable: !0,
        fullscreenable: !0,
      },
      needsFocusFix: !0,
      afterCreate: (e) => {
        o(s.NEWS_PLAYER, e);
      },
      onClosed: (e) => {
        i(s.NEWS_PLAYER, e);
      },
    };
  },
  function (e, t) {
    e.exports = {
      autoResize: !0,
      configure: {
        transparent: !1,
        movable: !0,
        skipTaskbar: !0,
        resizable: !1,
        autoHideMenuBar: !0,
        focusable: !1,
        backgroundColor: "#000000",
        fullscreen: !0,
        type: "toolbar",
        maximizable: !0,
        fullscreenable: !0,
      },
      afterCreate: (e) => {},
      onClosed: (e) => {},
    };
  },
  function (e, t) {
    e.exports = {
      configure: {
        center: !1,
        movable: !1,
        skipTaskbar: !0,
        resizable: !1,
        maximizable: !1,
        autoHideMenuBar: !0,
        focusable: !1,
        transparent: !0,
      },
      afterCreate: (e, t) => {
        e.setSkipTaskbar(!0);
      },
      onClosed: (e) => {},
    };
  },
  function (e, t, n) {
    const { QUEUE_LIST: s } = n(8),
      { topMost: o, topMostExist: i } = n(9);
    e.exports = {
      configure: {
        center: !1,
        movable: !1,
        resizable: !1,
        maximizable: !1,
        focusable: !1,
        skipTaskbar: !0,
        show: !1,
        type: "toolbar",
      },
      beforeCreate: (e) => {},
      afterCreate: (e) => {
        e.setSkipTaskbar(!0), o(s.NFC_AUTH_RESULT, e);
      },
      onClosed: (e) => {
        i(s.NFC_AUTH_RESULT, e);
      },
    };
  },
  function (e, t, n) {
    const s = n(25),
      { systemPreferences: o, screen: i } = n(0),
      { QUEUE_LIST: r } = n(8),
      { topMost: a, topMostExist: c } = n(9);
    e.exports = {
      configure: {
        height: 128,
        x: 0,
        y: 28,
        frame: !1,
        resizable: !1,
        maximizable: !1,
        focusable: !1,
        skipTaskbar: !0,
        type: "toolbar",
      },
      beforeCreate: (e) => {
        (e.width = i.getPrimaryDisplay().size.width),
          (e.transparent =
            "win32" !== process.platform || o.isAeroGlassEnabled());
      },
      afterCreate: (e) => {
        a(r.NOTICE_SLIDER, e);
        const t =
          s.release() &&
          s
            .release()
            .split(".")
            .map((e) => parseInt(e));
        ("Windows_NT" === s.type() && (t[0] < 6 || (6 === t[0] && t[1] < 2))) ||
          e.setIgnoreMouseEvents(!0);
      },
      onClosed: (e) => {
        c(r.NOTICE_SLIDER, e);
      },
    };
  },
  function (e, t, n) {
    const { screen: s, systemPreferences: o } = n(0),
      { QUEUE_LIST: i } = n(8),
      { topMost: r, topMostExist: a } = n(9);
    e.exports = {
      configure: {
        center: !1,
        movable: !1,
        resizable: !1,
        maximizable: !1,
        focusable: !1,
        skipTaskbar: !0,
        type: "toolbar",
      },
      beforeCreate: (e) => {
        let t = s.getPrimaryDisplay().workAreaSize.width,
          n = s.getPrimaryDisplay().workAreaSize.height,
          i = o.isAeroGlassEnabled();
        (e.width = 240),
          (e.height = i ? 104 : 80),
          (e.x = t - 272),
          (e.y = n - 104);
      },
      afterCreate: (e) => {
        e.setSkipTaskbar(!0), r(i.DEVICE_NOTIFICATION, e);
      },
      onClosed: (e) => {
        a(i.DEVICE_NOTIFICATION, e);
      },
    };
  },
  function (e, t, n) {
    const { QUEUE_LIST: s } = n(8),
      { topMost: o, topMostExist: i } = n(9);
    e.exports = {
      configure: {
        movable: !1,
        skipTaskbar: !0,
        resizable: !1,
        maximizable: !0,
        autoHideMenuBar: !0,
        focusable: !0,
        fullscreen: !0,
        fullscreenable: !0,
        type: "toolbar",
      },
      afterCreate: (e) => {
        o(s.POPUP_NOTIFICATION, e);
      },
      onClosed: (e) => {
        i(s.POPUP_NOTIFICATION, e);
      },
    };
  },
  function (e, t, n) {
    const { QUEUE_LIST: s } = n(8),
      { topMost: o, topMostExist: i } = n(9);
    e.exports = {
      configure: {
        transparent: !1,
        movable: !0,
        skipTaskbar: !0,
        resizable: !1,
        autoHideMenuBar: !0,
        focusable: !0,
        show: !1,
        backgroundColor: "#000000",
        fullscreen: !0,
        type: "toolbar",
        maximizable: !0,
        fullscreenable: !0,
      },
      needsFocusFix: !0,
      afterCreate: (e) => {
        o(s.QUIT_FULLSCREEN_AUTH, e);
      },
      onClosed: (e) => {
        i(s.QUIT_FULLSCREEN_AUTH, e);
      },
    };
  },
  function (e, t, n) {
    const { QUEUE_LIST: s } = n(8),
      { topMost: o, topMostExist: i } = n(9);
    e.exports = {
      configure: {
        movable: !1,
        skipTaskbar: !0,
        resizable: !1,
        maximizable: !0,
        autoHideMenuBar: !0,
        focusable: !0,
        fullscreen: !0,
        fullscreenable: !0,
        type: "toolbar",
      },
      afterCreate: (e) => {
        o(s.REMOTE_CONTROL, e);
      },
      onClosed: (e) => {
        i(s.REMOTE_CONTROL, e);
      },
    };
  },
  function (e, t, n) {
    const { QUEUE_LIST: s } = n(8),
      { topMost: o, topMostExist: i } = n(9);
    e.exports = {
      configure: {
        movable: !1,
        skipTaskbar: !0,
        resizable: !1,
        maximizable: !0,
        autoHideMenuBar: !0,
        focusable: !0,
        fullscreen: !0,
        fullscreenable: !0,
        type: "toolbar",
      },
      afterCreate: (e) => {
        o(s.REMOTE_CONTROL_STATUS, e);
      },
      onClosed: (e) => {
        i(s.REMOTE_CONTROL_STATUS, e);
      },
    };
  },
  function (e, t, n) {
    const { QUEUE_LIST: s } = n(8),
      { topMost: o, topMostExist: i } = n(9);
    e.exports = {
      configure: {
        movable: !1,
        skipTaskbar: !0,
        resizable: !1,
        maximizable: !0,
        autoHideMenuBar: !0,
        focusable: !0,
        fullscreen: !0,
        fullscreenable: !0,
        type: "toolbar",
      },
      afterCreate: (e) => {
        o(s.REMOTE_DISK_CLEAR_WARN, e);
      },
      onClosed: (e) => {
        i(s.REMOTE_DISK_CLEAR_WARN, e);
      },
    };
  },
  function (e, t, n) {
    const { screen: s, systemPreferences: o } = n(0);
    e.exports = {
      configure: {
        center: !1,
        movable: !1,
        resizable: !1,
        maximizable: !1,
        focusable: !1,
        show: !1,
        type: "toolbar",
      },
      beforeCreate: (e) => {
        let t = s.getPrimaryDisplay().workAreaSize.width,
          n = s.getPrimaryDisplay().workAreaSize.height,
          i = o.isAeroGlassEnabled();
        (e.width = 240),
          (e.height = i ? 104 : 80),
          (e.x = t - 272),
          (e.y = n - 104);
      },
      afterCreate: (e) => {
        e.setSkipTaskbar(!0),
          e.setAlwaysOnTop(!0, "screen-saver"),
          setInterval(() => {
            !e.isDestroyed() && e.setSkipTaskbar(!0);
          }, 2e3);
      },
    };
  },
  function (e, t, n) {
    const { QUEUE_LIST: s } = n(8),
      { topMost: o, topMostExist: i } = n(9);
    e.exports = {
      configure: {
        transparent: !1,
        movable: !0,
        skipTaskbar: !0,
        resizable: !1,
        autoHideMenuBar: !0,
        focusable: !0,
        show: !1,
        backgroundColor: "#000000",
        fullscreen: !0,
        type: "toolbar",
        maximizable: !0,
        fullscreenable: !0,
      },
      needsFocusFix: !0,
      afterCreate: (e) => {
        o(s.SCHOOL_ANNOUNCEMENT, e);
      },
      onClosed: (e) => {
        i(s.SCHOOL_ANNOUNCEMENT, e);
      },
    };
  },
  function (e, t, n) {
    const { QUEUE_LIST: s } = n(8),
      { topMost: o, topMostExist: i } = n(9);
    e.exports = {
      configure: {
        movable: !1,
        skipTaskbar: !0,
        resizable: !1,
        maximizable: !0,
        autoHideMenuBar: !0,
        focusable: !0,
        fullscreen: !0,
        fullscreenable: !0,
        type: "toolbar",
      },
      needsFocusFix: !0,
      afterCreate: (e) => {
        o(s.SCREEN_LOCK, e);
      },
      onClosed: (e) => {
        i(s.SCREEN_LOCK, e);
      },
      onBeforeInputEvent: (e, t, n, s, o) => {
        o.control && "m" === o.key.toLowerCase() && s.preventDefault(),
          o.control && "w" === o.key.toLowerCase() && s.preventDefault(),
          o.control && "r" === o.key.toLowerCase() && s.preventDefault();
      },
    };
  },
  function (e, t, n) {
    const { QUEUE_LIST: s } = n(8),
      { topMost: o, topMostExist: i } = n(9);
    e.exports = {
      configure: {
        movable: !1,
        skipTaskbar: !0,
        resizable: !1,
        maximizable: !0,
        autoHideMenuBar: !0,
        focusable: !0,
        fullscreen: !0,
        fullscreenable: !0,
        type: "toolbar",
        backgroundColor: "#000000",
      },
      needsFocusFix: !0,
      afterCreate: (e) => {
        o(s.SCREEN_SAVER, e);
      },
      onClosed: (e) => {
        i(s.SCREEN_SAVER, e);
      },
    };
  },
  function (e, t, n) {
    const s = n(24);
    e.exports = {
      configure: {
        transparent: !1,
        movable: !1,
        skipTaskbar: !0,
        resizable: !1,
        maximizable: !1,
        autoHideMenuBar: !0,
        focusable: !1,
        backgroundColor: "#000000",
        type: "toolbar",
      },
      afterCreate: (e) => {
        s.setWindowBottom(e.getNativeWindowHandle());
      },
    };
  },
  function (e, t) {
    e.exports = {
      configure: {
        movable: !1,
        skipTaskbar: !0,
        resizable: !1,
        maximizable: !1,
        autoHideMenuBar: !0,
        focusable: !0,
        type: "toolbar",
      },
    };
  },
  function (e, t, n) {
    const { screen: s } = n(0),
      { x: o, y: i, width: r } = s.getPrimaryDisplay().workArea,
      { QUEUE_LIST: a } = n(8),
      { topMost: c, topMostExist: l } = n(9);
    e.exports = {
      configure: {
        width: 360,
        height: 112,
        x: o + r - 360 - 24,
        y: i + 40,
        show: !1,
        movable: !1,
        resizable: !1,
        skipTaskbar: !0,
        autoHideMenuBar: !0,
        focusable: !1,
        type: "toolbar",
      },
      beforeCreate: (e) => {},
      onceDomReady: (e) => {
        e.showInactive();
      },
      afterCreate: (e, t) => {
        c(a.VOICE_INTERACTION, e);
      },
      onClosed: (e) => {
        l(a.VOICE_INTERACTION, e);
      },
    };
  },
  function (e, t, n) {
    const s = n(224),
      o = n(2),
      { QUEUE_LIST: i } = n(8),
      { topMost: r, topMostExist: a } = n(9);
    let c = { x: 0, y: 0 };
    e.exports = {
      configure: {
        movable: !1,
        resizable: !1,
        skipTaskbar: !0,
        autoHideMenuBar: !0,
        focusable: !1,
        show: !1,
        type: "toolbar",
      },
      afterCreate: (e) => {
        s.on(
          "snartpen",
          ((e) => (t) => {
            if (!e.isDestroyed()) {
              let n = o.getData("cursorSize");
              (c.x === t.x - n[0] / 2 && c.y === t.y - n[0] / 2) ||
                ((c.x = t.x - n / 2),
                (c.y = t.y - n / 2),
                e.setBounds({
                  x: Math.ceil(c.x),
                  y: Math.ceil(c.y),
                  width: n,
                  height: n,
                }));
            }
          })(e)
        ),
          r(i.SMART_PEN_CURSOR, e);
      },
      onClosed: (e) => {
        s.remove("snartpen"), a(i.SMART_PEN_CURSOR, e);
      },
    };
  },
  function (e, t, n) {
    const { screen: s } = n(0);
    let o,
      i = [],
      r = !1,
      a = {};
    (a.start = () => {
      (r = !0),
        (o = setInterval(() => {
          if (r) {
            let e = s.getCursorScreenPoint();
            a.publish(e);
          } else clearInterval(o);
        }, 10));
    }),
      (a.publish = (e) => {
        for (let t in i)
          try {
            i[t](e);
          } catch (e) {}
      }),
      (a.on = (e, t) => {
        i[e] || (0 === Object.values(i).length && a.start(), (i[e] = t));
      }),
      (a.remove = (e) => {
        i[e] &&
          (delete i[e],
          0 === Object.values(i).length && (clearInterval(o), (r = !1)));
      }),
      (e.exports = a);
  },
  function (e, t, n) {
    const { QUEUE_LIST: s } = n(8),
      { topMost: o, topMostExist: i } = n(9);
    e.exports = {
      configure: {
        movable: !1,
        skipTaskbar: !0,
        resizable: !1,
        maximizable: !0,
        autoHideMenuBar: !0,
        focusable: !0,
        fullscreen: !0,
        fullscreenable: !0,
        type: "toolbar",
      },
      afterCreate: (e) => {
        o(s.SYSTEM_DIALOG, e);
      },
      onClosed: (e) => {
        i(s.SYSTEM_DIALOG, e);
      },
    };
  },
  function (e, t, n) {
    const { screen: s } = n(0),
      o = n(2);
    e.exports = {
      configure: {
        width: 78,
        height: 78,
        center: !1,
        movable: !1,
        resizable: !1,
        maximizable: !1,
        zoomFactor: 1,
        type: "toolbar",
      },
      beforeCreate: (e) => {
        const { workArea: t } = s.getPrimaryDisplay();
        (e.x = t.x + t.width - 78 - 32),
          (e.y =
            t.y + t.height - 78 - 20 - (o.getData("fastToolbarHeight") || 0));
      },
      afterCreate: (e) => {
        e.setSkipTaskbar(!0),
          setInterval(() => {
            !e.isDestroyed() && e.setSkipTaskbar(!0);
          }, 2e3);
      },
    };
  },
  function (e, t, n) {
    const { QUEUE_LIST: s } = n(8),
      { topMost: o, topMostExist: i } = n(9);
    e.exports = {
      configure: {
        transparent: !1,
        movable: !0,
        skipTaskbar: !0,
        resizable: !1,
        autoHideMenuBar: !0,
        focusable: !0,
        show: !1,
        backgroundColor: "#000000",
        fullscreen: !0,
        type: "toolbar",
        maximizable: !0,
        fullscreenable: !0,
      },
      afterCreate: (e) => {
        o(s.SCHOOL_ANNOUNCEMENT, e);
      },
      onClosed: (e) => {
        i(s.SCHOOL_ANNOUNCEMENT, e);
      },
    };
  },
  function (e, t, n) {
    const { screen: s, systemPreferences: o } = n(0),
      { QUEUE_LIST: i } = n(8),
      { topMost: r, topMostExist: a } = n(9);
    e.exports = {
      configure: {
        center: !1,
        movable: !1,
        resizable: !1,
        maximizable: !1,
        skipTaskbar: !0,
        type: "toolbar",
      },
      beforeCreate: (e) => {
        const t = s.getPrimaryDisplay();
        let n = t.workAreaSize.width,
          i = t.workAreaSize.height,
          r = o.isAeroGlassEnabled();
        (e.width = r ? 360 : 336),
          (e.height = r ? 164 : 156),
          (e.x = r ? n - 380 : n - 368),
          (e.y = i);
      },
      afterCreate: (e) => {
        const t = s.getPrimaryDisplay();
        let n = t.workAreaSize.height;
        ((e, t, n) => {
          let s = e.getBounds(),
            o = 1,
            i = t,
            r = setInterval(() => {
              s.y - o <= i || e.isDestroyed()
                ? clearInterval(r)
                : (e.setBounds({
                    x: s.x,
                    y: Math.floor(s.y - o),
                    width: s.width,
                    height: s.height,
                  }),
                  (o += 3.5 * n));
            }, 10);
        })(e, o.isAeroGlassEnabled() ? n - 188 : n - 180, t.scaleFactor),
          e.setSkipTaskbar(!0),
          r(i.USB_INSERT, e);
      },
      onClosed: (e) => {
        a(i.USB_INSERT, e);
      },
    };
  },
  function (e, t, n) {
    const s = n(26),
      o = n(19),
      i = n(27),
      r = {
        windowName: "usbInsertWarning",
        width: 480,
        height: 120,
        yIndex: 1,
      };
    e.exports = {
      configure: {
        center: !1,
        movable: !1,
        skipTaskbar: !0,
        resizable: !1,
        maximizable: !1,
        autoHideMenuBar: !0,
        focusable: !1,
        type: "toolbar",
        show: !1,
      },
      beforeCreate: () => {
        o.enterSlot(r);
      },
      afterCreate: (e) => {
        e.setSkipTaskbar(!0);
        try {
          e.hookWindowMessage(126, () => {
            o.updateWindow(r.windowName);
          });
          let t = setInterval(() => {
            e.isDestroyed() ? clearInterval(t) : e.setSkipTaskbar(!0);
          }, 2e3);
        } catch (e) {
          logger.error(e);
        }
      },
      onFinished: (e) => {
        o.enterSlot(r);
        const t = i(e.getNativeWindowHandle());
        e.show(),
          s.SetWindowPos(t, 1, 0, 0, 0, 0, 3),
          s.SetWindowPos(t, 1, 0, 0, 0, 0, 3);
      },
      onClose: () => {
        o.outSlot(r.windowName);
      },
    };
  },
  function (e, t, n) {
    const { screen: s } = n(0),
      { x: o, y: i, width: r } = s.getPrimaryDisplay().workArea,
      { QUEUE_LIST: a } = n(8),
      { topMost: c, topMostExist: l } = n(9);
    e.exports = {
      configure: {
        width: 360,
        height: 112,
        x: o + r - 360 - 24,
        y: i + 40,
        show: !1,
        movable: !1,
        resizable: !1,
        skipTaskbar: !0,
        autoHideMenuBar: !0,
        focusable: !1,
        type: "toolbar",
      },
      beforeCreate: (e) => {},
      onceDomReady: (e) => {
        e.showInactive();
      },
      afterCreate: (e, t) => {
        c(a.VOICE_INTERACTION, e);
      },
      onClosed: (e) => {
        l(a.VOICE_INTERACTION, e);
      },
    };
  },
  function (e, t, n) {
    const s = n(2),
      o = n(48),
      i = n(1),
      r = n(7),
      a = n(5),
      { app: c } = n(0),
      l = n(25),
      u = {
        "10.0": "10",
        6.3: "8.1",
        6.2: "8",
        6.1: "7",
        "6.0": "Vista",
        5.2: "Server 2003",
        5.1: "XP",
        "5.0": "2000",
        4.9: "ME",
        4.1: "98",
        "4.0": "95",
      };
    const d = new (class {
      constructor() {
        (this.env = ""), (this.version = ""), (this.systemType = "");
      }
      init() {
        this.getSystemType(), this.writeEnv(), this.getAppVersion();
      }
      writeEnv() {
        c.isPackaged
          ? process.env.runmode && "dev" === process.env.runmode
            ? (this.env = "dev")
            : process.env.runmode && "test" === process.env.runmode
            ? (this.env = "test")
            : (this.env = "pro")
          : (this.env = "code"),
          r.info("env " + this.env),
          s.share("env", this.env);
      }
      getAppVersion() {
        c.isPackaged
          ? (this.version = o.readFileOfFullPath(
              a.resolve(i.appPath, "..", "version")
            ))
          : (this.version = n(65).version),
          s.share("appVersion", this.version);
      }
      getSystemType() {
        const e = /\d+\.\d/.exec(l.release());
        (this.systemType = "win" + u[e]),
          s.share("systemType", this.systemType),
          s.setData({ systemType: this.systemType }),
          r.info("系统 " + this.systemType);
      }
    })();
    e.exports = d;
  },
  function (e, t, n) {
    const { customMadeRoot: s } = n(1),
      o = n(2),
      { GetRegistryString: i, GetRegistryInt: r } = n(24),
      a = n(7),
      c = n(12);
    e.exports = () => {
      let e = "default";
      (e = i(
        "HKEY_LOCAL_MACHINE\\SOFTWARE\\SeewoServiceCustom",
        "custom",
        "default"
      )),
        e || (e = "default"),
        a.info("当前定制型号：" + e);
      let t,
        n = s + "/" + e;
      c.existsSync(n) || (n = s + "/default");
      let l = JSON.parse(c.readFileSync(s + "/default/config.json", "utf8"));
      try {
        t = JSON.parse(c.readFileSync(n + "/config.json", "utf8"));
      } catch (e) {
        console.log(e), a.info("custom配置文件损坏");
      }
      (t.root = n), (t.customName = e);
      let u = Object.assign({}, l, t);
      (u.desktopAssistantHide = !!Number(
        r(
          "HKEY_LOCAL_MACHINE\\SOFTWARE\\SeewoServiceCustom",
          "hideAssistant",
          u.desktopAssistantHide ? 1 : 0
        )
      )),
        a.info(
          "获取到注册表hideAssistant",
          Number(
            r(
              "HKEY_LOCAL_MACHINE\\SOFTWARE\\SeewoServiceCustom",
              "hideAssistant",
              0
            )
          )
        ),
        (u.hideLightIotNotify = !!Number(
          r(
            "HKEY_LOCAL_MACHINE\\SOFTWARE\\SeewoServiceCustom",
            "hideLightIotNotify",
            u.hideLightIotNotify ? 1 : 0
          )
        )),
        a.info(
          "获取到注册表hideLightIotNotify",
          Number(
            r(
              "HKEY_LOCAL_MACHINE\\SOFTWARE\\SeewoServiceCustom",
              "hideLightIotNotify",
              0
            )
          )
        ),
        (u.showHighTechSeewoDesktop = !!Number(
          r(
            "HKEY_LOCAL_MACHINE\\SOFTWARE\\SeewoServiceCustom",
            "showHighTechSeewoDesktop",
            u.showHighTechSeewoDesktop ? 1 : 0
          )
        )),
        a.info(
          "获取到注册表showHighTechSeewoDesktop",
          Number(
            r(
              "HKEY_LOCAL_MACHINE\\SOFTWARE\\SeewoServiceCustom",
              "showHighTechSeewoDesktop",
              0
            )
          )
        ),
        o.share("CUSTOM_CONFIG", u),
        o.setData({ CUSTOM_CONFIG: u });
    };
  },
  function (e, t, n) {
    const { app: s } = n(0),
      o = n(234),
      i = n(100);
    e.exports = function (e) {
      s.isReady &&
        i("assistant_exception", { version: o(), error: e.toString() });
    };
  },
  function (e, t, n) {
    const s = n(1),
      o = n(48),
      { app: i } = n(0),
      r = n(5);
    e.exports = () => {
      let e;
      return (
        (e = i.isPackaged
          ? o.readFileOfFullPath(r.resolve(s.appPath, "..", "version"))
          : n(65).version),
        e
      );
    };
  },
  function (e, t, n) {
    const s = n(18),
      o = n(6),
      i = n(1),
      r = n(2),
      a = {
        DESKTOP_APP_LIST: "/api/v1/desktop/desktop_data",
        DESKTOP_SETTING_INFO: "/api/v1/desktop/setting",
      },
      c = 0,
      l = 1,
      u = 2;
    const d = new (class extends s {
      constructor(e) {
        super(e), (this.linkStatus = c);
      }
      createConnect() {
        super.create();
      }
      startLinkServer() {
        if (!this.ready) {
          const { ip: e, url: t } = i.SeewoDesktop;
          r.share("seewoDesktopLinkStatus", this.linkStatus),
            o.register(["SeewoProxyHTTP"], !0, (n) => {
              let s = `${e}:${n.SeewoProxyHTTP}${t}`;
              this.setHost(s);
            });
        }
      }
      onDisconnectMessage() {
        (this.linkStatus = u),
          r.share("seewoDesktopLinkStatus", this.linkStatus);
      }
      onLinkOk() {
        (this.linkStatus = l),
          r.share("seewoDesktopLinkStatus", this.linkStatus);
      }
      onMessage(e) {
        const t = JSON.parse(e);
        for (let e in a) a[e] === t.url && r.share(e, t.data);
      }
    })();
    e.exports = d;
  },
  function (e, t, n) {
    "use strict";
    const s = n(101);
    (s.Server = n(243)),
      (s.Receiver = n(104)),
      (s.Sender = n(106)),
      (e.exports = s);
  },
  function (e, t) {
    e.exports = require("net");
  },
  function (e, t) {
    e.exports = require("tls");
  },
  function (e, t, n) {
    "use strict";
    function s(e) {
      if (!(this instanceof s)) return new s(e);
      (e = e || {}),
        (this.concurrency = e.concurrency || 1 / 0),
        (this.pending = 0),
        (this.jobs = []),
        (this.cbs = []),
        (this._done = o.bind(this));
    }
    function o() {
      this.pending--, this._run();
    }
    ["push", "unshift", "splice"].forEach(function (e) {
      s.prototype[e] = function () {
        var t = Array.prototype[e].apply(this.jobs, arguments);
        return this._run(), t;
      };
    }),
      Object.defineProperty(s.prototype, "length", {
        get: function () {
          return this.pending + this.jobs.length;
        },
      }),
      (s.prototype._run = function () {
        if (this.pending !== this.concurrency) {
          if (this.jobs.length) {
            var e = this.jobs.shift();
            this.pending++, e(this._done), this._run();
          }
          if (0 === this.pending)
            for (; 0 !== this.cbs.length; ) {
              var t = this.cbs.pop();
              process.nextTick(t);
            }
        }
      }),
      (s.prototype.onDone = function (e) {
        "function" == typeof e && (this.cbs.push(e), this._run());
      }),
      (e.exports = s);
  },
  function (e, t) {
    if ("undefined" == typeof bufferutil) {
      var n = new Error("Cannot find module 'bufferutil'");
      throw ((n.code = "MODULE_NOT_FOUND"), n);
    }
    e.exports = bufferutil;
  },
  function (e, t, n) {
    "use strict";
    class s {
      constructor(e, t) {
        (this.target = t), (this.type = e);
      }
    }
    class o extends s {
      constructor(e, t) {
        super("message", t), (this.data = e);
      }
    }
    class i extends s {
      constructor(e, t, n) {
        super("close", n),
          (this.wasClean = n._closeFrameReceived && n._closeFrameSent),
          (this.reason = t),
          (this.code = e);
      }
    }
    class r extends s {
      constructor(e) {
        super("open", e);
      }
    }
    class a extends s {
      constructor(e, t) {
        super("error", t), (this.message = e.message), (this.error = e);
      }
    }
    const c = {
      addEventListener(e, t) {
        function n(e) {
          t.call(this, new o(e, this));
        }
        function s(e, n) {
          t.call(this, new i(e, n, this));
        }
        function c(e) {
          t.call(this, new a(e, this));
        }
        function l() {
          t.call(this, new r(this));
        }
        "function" == typeof t &&
          ("message" === e
            ? ((n._listener = t), this.on(e, n))
            : "close" === e
            ? ((s._listener = t), this.on(e, s))
            : "error" === e
            ? ((c._listener = t), this.on(e, c))
            : "open" === e
            ? ((l._listener = t), this.on(e, l))
            : this.on(e, t));
      },
      removeEventListener(e, t) {
        const n = this.listeners(e);
        for (var s = 0; s < n.length; s++)
          (n[s] !== t && n[s]._listener !== t) || this.removeListener(e, n[s]);
      },
    };
    e.exports = c;
  },
  function (e, t) {
    if (typeof utf - 8 - validate === "undefined") {
      var n = new Error("Cannot find module 'utf-8-validate'");
      throw ((n.code = "MODULE_NOT_FOUND"), n);
    }
    e.exports = utf - 8 - validate;
  },
  function (e, t, n) {
    "use strict";
    const s = n(43),
      o = n(66),
      i = n(49),
      r = n(51),
      a = n(103),
      c = n(101),
      { GUID: l } = n(37),
      u = /^[+/0-9A-Za-z]{22}==$/;
    function d(e) {
      e.emit("close");
    }
    function h() {
      this.destroy();
    }
    function f(e, t, n, s) {
      e.writable &&
        ((n = n || i.STATUS_CODES[t]),
        (s = Object.assign(
          {
            Connection: "close",
            "Content-type": "text/html",
            "Content-Length": Buffer.byteLength(n),
          },
          s
        )),
        e.write(
          `HTTP/1.1 ${t} ${i.STATUS_CODES[t]}\r\n` +
            Object.keys(s)
              .map((e) => `${e}: ${s[e]}`)
              .join("\r\n") +
            "\r\n\r\n" +
            n
        )),
        e.removeListener("error", h),
        e.destroy();
    }
    function p(e) {
      return e.trim();
    }
    e.exports = class extends s {
      constructor(e, t) {
        if (
          (super(),
          null ==
            (e = Object.assign(
              {
                maxPayload: 104857600,
                perMessageDeflate: !1,
                handleProtocols: null,
                clientTracking: !0,
                verifyClient: null,
                noServer: !1,
                backlog: null,
                server: null,
                host: null,
                path: null,
                port: null,
              },
              e
            )).port &&
            !e.server &&
            !e.noServer)
        )
          throw new TypeError(
            'One of the "port", "server", or "noServer" options must be specified'
          );
        null != e.port
          ? ((this._server = i.createServer((e, t) => {
              const n = i.STATUS_CODES[426];
              t.writeHead(426, {
                "Content-Length": n.length,
                "Content-Type": "text/plain",
              }),
                t.end(n);
            })),
            this._server.listen(e.port, e.host, e.backlog, t))
          : e.server && (this._server = e.server),
          this._server &&
            (this._removeListeners = (function (e, t) {
              for (const n of Object.keys(t)) e.on(n, t[n]);
              return function () {
                for (const n of Object.keys(t)) e.removeListener(n, t[n]);
              };
            })(this._server, {
              listening: this.emit.bind(this, "listening"),
              error: this.emit.bind(this, "error"),
              upgrade: (e, t, n) => {
                this.handleUpgrade(e, t, n, (t) => {
                  this.emit("connection", t, e);
                });
              },
            })),
          !0 === e.perMessageDeflate && (e.perMessageDeflate = {}),
          e.clientTracking && (this.clients = new Set()),
          (this.options = e);
      }
      address() {
        if (this.options.noServer)
          throw new Error('The server is operating in "noServer" mode');
        return this._server ? this._server.address() : null;
      }
      close(e) {
        if ((e && this.once("close", e), this.clients))
          for (const e of this.clients) e.terminate();
        const t = this._server;
        t &&
        (this._removeListeners(),
        (this._removeListeners = this._server = null),
        null != this.options.port)
          ? t.close(() => this.emit("close"))
          : process.nextTick(d, this);
      }
      shouldHandle(e) {
        if (this.options.path) {
          const t = e.url.indexOf("?");
          if ((-1 !== t ? e.url.slice(0, t) : e.url) !== this.options.path)
            return !1;
        }
        return !0;
      }
      handleUpgrade(e, t, n, s) {
        t.on("error", h);
        const o =
            void 0 !== e.headers["sec-websocket-key"] &&
            e.headers["sec-websocket-key"].trim(),
          i = +e.headers["sec-websocket-version"],
          c = {};
        if (
          "GET" !== e.method ||
          "websocket" !== e.headers.upgrade.toLowerCase() ||
          !o ||
          !u.test(o) ||
          (8 !== i && 13 !== i) ||
          !this.shouldHandle(e)
        )
          return f(t, 400);
        if (this.options.perMessageDeflate) {
          const n = new r(
            this.options.perMessageDeflate,
            !0,
            this.options.maxPayload
          );
          try {
            const t = a.parse(e.headers["sec-websocket-extensions"]);
            t[r.extensionName] &&
              (n.accept(t[r.extensionName]), (c[r.extensionName] = n));
          } catch (e) {
            return f(t, 400);
          }
        }
        if (this.options.verifyClient) {
          const r = {
            origin:
              e.headers["" + (8 === i ? "sec-websocket-origin" : "origin")],
            secure: !(!e.connection.authorized && !e.connection.encrypted),
            req: e,
          };
          if (2 === this.options.verifyClient.length)
            return void this.options.verifyClient(r, (i, r, a, l) => {
              if (!i) return f(t, r || 401, a, l);
              this.completeUpgrade(o, c, e, t, n, s);
            });
          if (!this.options.verifyClient(r)) return f(t, 401);
        }
        this.completeUpgrade(o, c, e, t, n, s);
      }
      completeUpgrade(e, t, n, s, i, u) {
        if (!s.readable || !s.writable) return s.destroy();
        const d = [
            "HTTP/1.1 101 Switching Protocols",
            "Upgrade: websocket",
            "Connection: Upgrade",
            "Sec-WebSocket-Accept: " +
              o
                .createHash("sha1")
                .update(e + l)
                .digest("base64"),
          ],
          f = new c(null);
        var g = n.headers["sec-websocket-protocol"];
        if (
          (g &&
            ((g = g.split(",").map(p)),
            (g = this.options.handleProtocols
              ? this.options.handleProtocols(g, n)
              : g[0]) &&
              (d.push("Sec-WebSocket-Protocol: " + g), (f.protocol = g))),
          t[r.extensionName])
        ) {
          const e = t[r.extensionName].params,
            n = a.format({ [r.extensionName]: [e] });
          d.push("Sec-WebSocket-Extensions: " + n), (f._extensions = t);
        }
        this.emit("headers", d, n),
          s.write(d.concat("\r\n").join("\r\n")),
          s.removeListener("error", h),
          f.setSocket(s, i, this.options.maxPayload),
          this.clients &&
            (this.clients.add(f), f.on("close", () => this.clients.delete(f))),
          u(f);
      }
    };
  },
  function (e, t, n) {
    "use strict";
    e.exports = {
      ...n(52),
      ...n(107),
      ...n(110),
      ...n(252),
      ...n(254),
      ...n(260),
      ...n(22),
      ...n(265),
      ...n(267),
      ...n(69),
      ...n(30),
      ...n(54),
    };
    const s = n(12);
    Object.getOwnPropertyDescriptor(s, "promises") &&
      Object.defineProperty(e.exports, "promises", { get: () => s.promises });
  },
  function (e, t, n) {
    var s = n(246),
      o = process.cwd,
      i = null,
      r = process.env.GRACEFUL_FS_PLATFORM || process.platform;
    process.cwd = function () {
      return i || (i = o.call(process)), i;
    };
    try {
      process.cwd();
    } catch (e) {}
    if ("function" == typeof process.chdir) {
      var a = process.chdir;
      (process.chdir = function (e) {
        (i = null), a.call(process, e);
      }),
        Object.setPrototypeOf && Object.setPrototypeOf(process.chdir, a);
    }
    e.exports = function (e) {
      s.hasOwnProperty("O_SYMLINK") &&
        process.version.match(/^v0\.6\.[0-2]|^v0\.5\./) &&
        (function (e) {
          (e.lchmod = function (t, n, o) {
            e.open(t, s.O_WRONLY | s.O_SYMLINK, n, function (t, s) {
              t
                ? o && o(t)
                : e.fchmod(s, n, function (t) {
                    e.close(s, function (e) {
                      o && o(t || e);
                    });
                  });
            });
          }),
            (e.lchmodSync = function (t, n) {
              var o,
                i = e.openSync(t, s.O_WRONLY | s.O_SYMLINK, n),
                r = !0;
              try {
                (o = e.fchmodSync(i, n)), (r = !1);
              } finally {
                if (r)
                  try {
                    e.closeSync(i);
                  } catch (e) {}
                else e.closeSync(i);
              }
              return o;
            });
        })(e);
      e.lutimes ||
        (function (e) {
          s.hasOwnProperty("O_SYMLINK") && e.futimes
            ? ((e.lutimes = function (t, n, o, i) {
                e.open(t, s.O_SYMLINK, function (t, s) {
                  t
                    ? i && i(t)
                    : e.futimes(s, n, o, function (t) {
                        e.close(s, function (e) {
                          i && i(t || e);
                        });
                      });
                });
              }),
              (e.lutimesSync = function (t, n, o) {
                var i,
                  r = e.openSync(t, s.O_SYMLINK),
                  a = !0;
                try {
                  (i = e.futimesSync(r, n, o)), (a = !1);
                } finally {
                  if (a)
                    try {
                      e.closeSync(r);
                    } catch (e) {}
                  else e.closeSync(r);
                }
                return i;
              }))
            : e.futimes &&
              ((e.lutimes = function (e, t, n, s) {
                s && process.nextTick(s);
              }),
              (e.lutimesSync = function () {}));
        })(e);
      (e.chown = o(e.chown)),
        (e.fchown = o(e.fchown)),
        (e.lchown = o(e.lchown)),
        (e.chmod = t(e.chmod)),
        (e.fchmod = t(e.fchmod)),
        (e.lchmod = t(e.lchmod)),
        (e.chownSync = i(e.chownSync)),
        (e.fchownSync = i(e.fchownSync)),
        (e.lchownSync = i(e.lchownSync)),
        (e.chmodSync = n(e.chmodSync)),
        (e.fchmodSync = n(e.fchmodSync)),
        (e.lchmodSync = n(e.lchmodSync)),
        (e.stat = a(e.stat)),
        (e.fstat = a(e.fstat)),
        (e.lstat = a(e.lstat)),
        (e.statSync = c(e.statSync)),
        (e.fstatSync = c(e.fstatSync)),
        (e.lstatSync = c(e.lstatSync)),
        e.chmod &&
          !e.lchmod &&
          ((e.lchmod = function (e, t, n) {
            n && process.nextTick(n);
          }),
          (e.lchmodSync = function () {}));
      e.chown &&
        !e.lchown &&
        ((e.lchown = function (e, t, n, s) {
          s && process.nextTick(s);
        }),
        (e.lchownSync = function () {}));
      "win32" === r &&
        (e.rename =
          "function" != typeof e.rename
            ? e.rename
            : (function (t) {
                function n(n, s, o) {
                  var i = Date.now(),
                    r = 0;
                  t(n, s, function a(c) {
                    if (
                      c &&
                      ("EACCES" === c.code ||
                        "EPERM" === c.code ||
                        "EBUSY" === c.code) &&
                      Date.now() - i < 6e4
                    )
                      return (
                        setTimeout(function () {
                          e.stat(s, function (e, i) {
                            e && "ENOENT" === e.code ? t(n, s, a) : o(c);
                          });
                        }, r),
                        void (r < 100 && (r += 10))
                      );
                    o && o(c);
                  });
                }
                return Object.setPrototypeOf && Object.setPrototypeOf(n, t), n;
              })(e.rename));
      function t(t) {
        return t
          ? function (n, s, o) {
              return t.call(e, n, s, function (e) {
                l(e) && (e = null), o && o.apply(this, arguments);
              });
            }
          : t;
      }
      function n(t) {
        return t
          ? function (n, s) {
              try {
                return t.call(e, n, s);
              } catch (e) {
                if (!l(e)) throw e;
              }
            }
          : t;
      }
      function o(t) {
        return t
          ? function (n, s, o, i) {
              return t.call(e, n, s, o, function (e) {
                l(e) && (e = null), i && i.apply(this, arguments);
              });
            }
          : t;
      }
      function i(t) {
        return t
          ? function (n, s, o) {
              try {
                return t.call(e, n, s, o);
              } catch (e) {
                if (!l(e)) throw e;
              }
            }
          : t;
      }
      function a(t) {
        return t
          ? function (n, s, o) {
              function i(e, t) {
                t &&
                  (t.uid < 0 && (t.uid += 4294967296),
                  t.gid < 0 && (t.gid += 4294967296)),
                  o && o.apply(this, arguments);
              }
              return (
                "function" == typeof s && ((o = s), (s = null)),
                s ? t.call(e, n, s, i) : t.call(e, n, i)
              );
            }
          : t;
      }
      function c(t) {
        return t
          ? function (n, s) {
              var o = s ? t.call(e, n, s) : t.call(e, n);
              return (
                o &&
                  (o.uid < 0 && (o.uid += 4294967296),
                  o.gid < 0 && (o.gid += 4294967296)),
                o
              );
            }
          : t;
      }
      function l(e) {
        return (
          !e ||
          "ENOSYS" === e.code ||
          !(
            (process.getuid && 0 === process.getuid()) ||
            ("EINVAL" !== e.code && "EPERM" !== e.code)
          )
        );
      }
      (e.read =
        "function" != typeof e.read
          ? e.read
          : (function (t) {
              function n(n, s, o, i, r, a) {
                var c;
                if (a && "function" == typeof a) {
                  var l = 0;
                  c = function (u, d, h) {
                    if (u && "EAGAIN" === u.code && l < 10)
                      return l++, t.call(e, n, s, o, i, r, c);
                    a.apply(this, arguments);
                  };
                }
                return t.call(e, n, s, o, i, r, c);
              }
              return Object.setPrototypeOf && Object.setPrototypeOf(n, t), n;
            })(e.read)),
        (e.readSync =
          "function" != typeof e.readSync
            ? e.readSync
            : ((u = e.readSync),
              function (t, n, s, o, i) {
                for (var r = 0; ; )
                  try {
                    return u.call(e, t, n, s, o, i);
                  } catch (e) {
                    if ("EAGAIN" === e.code && r < 10) {
                      r++;
                      continue;
                    }
                    throw e;
                  }
              }));
      var u;
    };
  },
  function (e, t) {
    e.exports = require("constants");
  },
  function (e, t, n) {
    var s = n(38).Stream;
    e.exports = function (e) {
      return {
        ReadStream: function t(n, o) {
          if (!(this instanceof t)) return new t(n, o);
          s.call(this);
          var i = this;
          (this.path = n),
            (this.fd = null),
            (this.readable = !0),
            (this.paused = !1),
            (this.flags = "r"),
            (this.mode = 438),
            (this.bufferSize = 65536),
            (o = o || {});
          for (var r = Object.keys(o), a = 0, c = r.length; a < c; a++) {
            var l = r[a];
            this[l] = o[l];
          }
          this.encoding && this.setEncoding(this.encoding);
          if (void 0 !== this.start) {
            if ("number" != typeof this.start)
              throw TypeError("start must be a Number");
            if (void 0 === this.end) this.end = 1 / 0;
            else if ("number" != typeof this.end)
              throw TypeError("end must be a Number");
            if (this.start > this.end) throw new Error("start must be <= end");
            this.pos = this.start;
          }
          if (null !== this.fd)
            return void process.nextTick(function () {
              i._read();
            });
          e.open(this.path, this.flags, this.mode, function (e, t) {
            if (e) return i.emit("error", e), void (i.readable = !1);
            (i.fd = t), i.emit("open", t), i._read();
          });
        },
        WriteStream: function t(n, o) {
          if (!(this instanceof t)) return new t(n, o);
          s.call(this),
            (this.path = n),
            (this.fd = null),
            (this.writable = !0),
            (this.flags = "w"),
            (this.encoding = "binary"),
            (this.mode = 438),
            (this.bytesWritten = 0),
            (o = o || {});
          for (var i = Object.keys(o), r = 0, a = i.length; r < a; r++) {
            var c = i[r];
            this[c] = o[c];
          }
          if (void 0 !== this.start) {
            if ("number" != typeof this.start)
              throw TypeError("start must be a Number");
            if (this.start < 0) throw new Error("start must be >= zero");
            this.pos = this.start;
          }
          (this.busy = !1),
            (this._queue = []),
            null === this.fd &&
              ((this._open = e.open),
              this._queue.push([
                this._open,
                this.path,
                this.flags,
                this.mode,
                void 0,
              ]),
              this.flush());
        },
      };
    };
  },
  function (e, t, n) {
    "use strict";
    e.exports = function (e) {
      if (null === e || "object" != typeof e) return e;
      if (e instanceof Object) var t = { __proto__: s(e) };
      else t = Object.create(null);
      return (
        Object.getOwnPropertyNames(e).forEach(function (n) {
          Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n));
        }),
        t
      );
    };
    var s =
      Object.getPrototypeOf ||
      function (e) {
        return e.__proto__;
      };
  },
  function (e, t, n) {
    "use strict";
    const s = n(16),
      o = n(5),
      i = n(22).mkdirsSync,
      r = n(109).utimesMillisSync,
      a = n(53);
    function c(e, t, n, i) {
      if (!i.filter || i.filter(t, n))
        return (function (e, t, n, i) {
          const r = (i.dereference ? s.statSync : s.lstatSync)(t);
          if (r.isDirectory())
            return (function (e, t, n, o, i) {
              if (!t)
                return (function (e, t, n, o) {
                  return s.mkdirSync(n), d(t, n, o), u(n, e);
                })(e.mode, n, o, i);
              if (t && !t.isDirectory())
                throw new Error(
                  `Cannot overwrite non-directory '${o}' with directory '${n}'.`
                );
              return d(n, o, i);
            })(r, e, t, n, i);
          if (r.isFile() || r.isCharacterDevice() || r.isBlockDevice())
            return (function (e, t, n, o, i) {
              return t
                ? (function (e, t, n, o) {
                    if (o.overwrite) return s.unlinkSync(n), l(e, t, n, o);
                    if (o.errorOnExist)
                      throw new Error(`'${n}' already exists`);
                  })(e, n, o, i)
                : l(e, n, o, i);
            })(r, e, t, n, i);
          if (r.isSymbolicLink())
            return (function (e, t, n, i) {
              let r = s.readlinkSync(t);
              i.dereference && (r = o.resolve(process.cwd(), r));
              if (e) {
                let e;
                try {
                  e = s.readlinkSync(n);
                } catch (e) {
                  if ("EINVAL" === e.code || "UNKNOWN" === e.code)
                    return s.symlinkSync(r, n);
                  throw e;
                }
                if (
                  (i.dereference && (e = o.resolve(process.cwd(), e)),
                  a.isSrcSubdir(r, e))
                )
                  throw new Error(
                    `Cannot copy '${r}' to a subdirectory of itself, '${e}'.`
                  );
                if (s.statSync(n).isDirectory() && a.isSrcSubdir(e, r))
                  throw new Error(`Cannot overwrite '${e}' with '${r}'.`);
                return (function (e, t) {
                  return s.unlinkSync(t), s.symlinkSync(e, t);
                })(r, n);
              }
              return s.symlinkSync(r, n);
            })(e, t, n, i);
        })(e, t, n, i);
    }
    function l(e, t, n, o) {
      return (
        s.copyFileSync(t, n),
        o.preserveTimestamps &&
          (function (e, t, n) {
            (function (e) {
              return 0 == (128 & e);
            })(e) &&
              (function (e, t) {
                u(e, 128 | t);
              })(n, e);
            (function (e, t) {
              const n = s.statSync(e);
              r(t, n.atime, n.mtime);
            })(t, n);
          })(e.mode, t, n),
        u(n, e.mode)
      );
    }
    function u(e, t) {
      return s.chmodSync(e, t);
    }
    function d(e, t, n) {
      s.readdirSync(e).forEach((s) =>
        (function (e, t, n, s) {
          const i = o.join(t, e),
            r = o.join(n, e),
            { destStat: l } = a.checkPathsSync(i, r, "copy");
          return c(l, i, r, s);
        })(s, e, t, n)
      );
    }
    e.exports = function (e, t, n) {
      "function" == typeof n && (n = { filter: n }),
        ((n = n || {}).clobber = !("clobber" in n) || !!n.clobber),
        (n.overwrite = "overwrite" in n ? !!n.overwrite : n.clobber),
        n.preserveTimestamps &&
          "ia32" === process.arch &&
          console.warn(
            "fs-extra: Using the preserveTimestamps option in 32-bit node is not recommended;\n\n    see https://github.com/jprichardson/node-fs-extra/issues/269"
          );
      const { srcStat: r, destStat: l } = a.checkPathsSync(e, t, "copy");
      return (
        a.checkParentPathsSync(e, r, t, "copy"),
        (function (e, t, n, r) {
          if (r.filter && !r.filter(t, n)) return;
          const a = o.dirname(n);
          s.existsSync(a) || i(a);
          return c(e, t, n, r);
        })(l, e, t, n)
      );
    };
  },
  function (e, t, n) {
    "use strict";
    const s = n(52),
      o = n(5),
      i = n(108)("10.12.0"),
      r = (e) => {
        if ("win32" === process.platform) {
          if (/[<>:"|?*]/.test(e.replace(o.parse(e).root, ""))) {
            const t = new Error("Path contains invalid characters: " + e);
            throw ((t.code = "EINVAL"), t);
          }
        }
      },
      a = (e) => (
        "number" == typeof e && (e = { mode: e }), { mode: 511, ...e }
      ),
      c = (e) => {
        const t = new Error(`operation not permitted, mkdir '${e}'`);
        return (
          (t.code = "EPERM"),
          (t.errno = -4048),
          (t.path = e),
          (t.syscall = "mkdir"),
          t
        );
      };
    (e.exports.makeDir = async (e, t) => {
      if ((r(e), (t = a(t)), i)) {
        const n = o.resolve(e);
        return s.mkdir(n, { mode: t.mode, recursive: !0 });
      }
      const n = async (e) => {
        try {
          await s.mkdir(e, t.mode);
        } catch (t) {
          if ("EPERM" === t.code) throw t;
          if ("ENOENT" === t.code) {
            if (o.dirname(e) === e) throw c(e);
            if (t.message.includes("null bytes")) throw t;
            return await n(o.dirname(e)), n(e);
          }
          try {
            if (!(await s.stat(e)).isDirectory())
              throw new Error("The path is not a directory");
          } catch {
            throw t;
          }
        }
      };
      return n(o.resolve(e));
    }),
      (e.exports.makeDirSync = (e, t) => {
        if ((r(e), (t = a(t)), i)) {
          const n = o.resolve(e);
          return s.mkdirSync(n, { mode: t.mode, recursive: !0 });
        }
        const n = (e) => {
          try {
            s.mkdirSync(e, t.mode);
          } catch (t) {
            if ("EPERM" === t.code) throw t;
            if ("ENOENT" === t.code) {
              if (o.dirname(e) === e) throw c(e);
              if (t.message.includes("null bytes")) throw t;
              return n(o.dirname(e)), n(e);
            }
            try {
              if (!s.statSync(e).isDirectory())
                throw new Error("The path is not a directory");
            } catch {
              throw t;
            }
          }
        };
        return n(o.resolve(e));
      });
  },
  function (e, t, n) {
    "use strict";
    const s = n(16),
      o = n(5),
      i = n(22).mkdirs,
      r = n(30).pathExists,
      a = n(109).utimesMillis,
      c = n(53);
    function l(e, t, n, s, a) {
      const c = o.dirname(n);
      r(c, (o, r) =>
        o
          ? a(o)
          : r
          ? d(e, t, n, s, a)
          : void i(c, (o) => (o ? a(o) : d(e, t, n, s, a)))
      );
    }
    function u(e, t, n, s, o, i) {
      Promise.resolve(o.filter(n, s)).then(
        (r) => (r ? e(t, n, s, o, i) : i()),
        (e) => i(e)
      );
    }
    function d(e, t, n, s, o) {
      return s.filter ? u(h, e, t, n, s, o) : h(e, t, n, s, o);
    }
    function h(e, t, n, o, i) {
      (o.dereference ? s.stat : s.lstat)(t, (r, a) =>
        r
          ? i(r)
          : a.isDirectory()
          ? (function (e, t, n, o, i, r) {
              if (!t)
                return (function (e, t, n, o, i) {
                  s.mkdir(n, (s) => {
                    if (s) return i(s);
                    w(t, n, o, (t) => (t ? i(t) : g(n, e, i)));
                  });
                })(e.mode, n, o, i, r);
              if (t && !t.isDirectory())
                return r(
                  new Error(
                    `Cannot overwrite non-directory '${o}' with directory '${n}'.`
                  )
                );
              return w(n, o, i, r);
            })(a, e, t, n, o, i)
          : a.isFile() || a.isCharacterDevice() || a.isBlockDevice()
          ? (function (e, t, n, o, i, r) {
              return t
                ? (function (e, t, n, o, i) {
                    if (!o.overwrite)
                      return o.errorOnExist
                        ? i(new Error(`'${n}' already exists`))
                        : i();
                    s.unlink(n, (s) => (s ? i(s) : f(e, t, n, o, i)));
                  })(e, n, o, i, r)
                : f(e, n, o, i, r);
            })(a, e, t, n, o, i)
          : a.isSymbolicLink()
          ? y(e, t, n, o, i)
          : void 0
      );
    }
    function f(e, t, n, o, i) {
      s.copyFile(t, n, (s) =>
        s
          ? i(s)
          : o.preserveTimestamps
          ? (function (e, t, n, s) {
              if (
                (function (e) {
                  return 0 == (128 & e);
                })(e)
              )
                return (function (e, t, n) {
                  return g(e, 128 | t, n);
                })(n, e, (o) => (o ? s(o) : p(e, t, n, s)));
              return p(e, t, n, s);
            })(e.mode, t, n, i)
          : g(n, e.mode, i)
      );
    }
    function p(e, t, n, o) {
      !(function (e, t, n) {
        s.stat(e, (e, s) => (e ? n(e) : a(t, s.atime, s.mtime, n)));
      })(t, n, (t) => (t ? o(t) : g(n, e, o)));
    }
    function g(e, t, n) {
      return s.chmod(e, t, n);
    }
    function w(e, t, n, o) {
      s.readdir(e, (s, i) => (s ? o(s) : m(i, e, t, n, o)));
    }
    function m(e, t, n, s, i) {
      const r = e.pop();
      return r
        ? (function (e, t, n, s, i, r) {
            const a = o.join(n, t),
              l = o.join(s, t);
            c.checkPaths(a, l, "copy", (t, o) => {
              if (t) return r(t);
              const { destStat: c } = o;
              d(c, a, l, i, (t) => (t ? r(t) : m(e, n, s, i, r)));
            });
          })(e, r, t, n, s, i)
        : i();
    }
    function y(e, t, n, i, r) {
      s.readlink(t, (t, a) =>
        t
          ? r(t)
          : (i.dereference && (a = o.resolve(process.cwd(), a)),
            e
              ? void s.readlink(n, (t, l) =>
                  t
                    ? "EINVAL" === t.code || "UNKNOWN" === t.code
                      ? s.symlink(a, n, r)
                      : r(t)
                    : (i.dereference && (l = o.resolve(process.cwd(), l)),
                      c.isSrcSubdir(a, l)
                        ? r(
                            new Error(
                              `Cannot copy '${a}' to a subdirectory of itself, '${l}'.`
                            )
                          )
                        : e.isDirectory() && c.isSrcSubdir(l, a)
                        ? r(new Error(`Cannot overwrite '${l}' with '${a}'.`))
                        : (function (e, t, n) {
                            s.unlink(t, (o) => (o ? n(o) : s.symlink(e, t, n)));
                          })(a, n, r))
                )
              : s.symlink(a, n, r))
      );
    }
    e.exports = function (e, t, n, s) {
      "function" != typeof n || s
        ? "function" == typeof n && (n = { filter: n })
        : ((s = n), (n = {})),
        (s = s || function () {}),
        ((n = n || {}).clobber = !("clobber" in n) || !!n.clobber),
        (n.overwrite = "overwrite" in n ? !!n.overwrite : n.clobber),
        n.preserveTimestamps &&
          "ia32" === process.arch &&
          console.warn(
            "fs-extra: Using the preserveTimestamps option in 32-bit node is not recommended;\n\n    see https://github.com/jprichardson/node-fs-extra/issues/269"
          ),
        c.checkPaths(e, t, "copy", (o, i) => {
          if (o) return s(o);
          const { srcStat: r, destStat: a } = i;
          c.checkParentPaths(e, r, t, "copy", (o) =>
            o ? s(o) : n.filter ? u(l, a, e, t, n, s) : l(a, e, t, n, s)
          );
        });
    };
  },
  function (e, t, n) {
    "use strict";
    const s = n(17).fromCallback,
      o = n(16),
      i = n(5),
      r = n(22),
      a = n(54),
      c = s(function (e, t) {
        (t = t || function () {}),
          o.readdir(e, (n, s) => {
            if (n) return r.mkdirs(e, t);
            (s = s.map((t) => i.join(e, t))),
              (function e() {
                const n = s.pop();
                if (!n) return t();
                a.remove(n, (n) => {
                  if (n) return t(n);
                  e();
                });
              })();
          });
      });
    function l(e) {
      let t;
      try {
        t = o.readdirSync(e);
      } catch {
        return r.mkdirsSync(e);
      }
      t.forEach((t) => {
        (t = i.join(e, t)), a.removeSync(t);
      });
    }
    e.exports = { emptyDirSync: l, emptydirSync: l, emptyDir: c, emptydir: c };
  },
  function (e, t, n) {
    "use strict";
    const s = n(16),
      o = n(5),
      i = n(15),
      r = "win32" === process.platform;
    function a(e) {
      ["unlink", "chmod", "stat", "lstat", "rmdir", "readdir"].forEach((t) => {
        (e[t] = e[t] || s[t]), (e[(t += "Sync")] = e[t] || s[t]);
      }),
        (e.maxBusyTries = e.maxBusyTries || 3);
    }
    function c(e, t, n) {
      let s = 0;
      "function" == typeof t && ((n = t), (t = {})),
        i(e, "rimraf: missing path"),
        i.strictEqual(typeof e, "string", "rimraf: path should be a string"),
        i.strictEqual(
          typeof n,
          "function",
          "rimraf: callback function required"
        ),
        i(t, "rimraf: invalid options argument provided"),
        i.strictEqual(typeof t, "object", "rimraf: options should be object"),
        a(t),
        l(e, t, function o(i) {
          if (i) {
            if (
              ("EBUSY" === i.code ||
                "ENOTEMPTY" === i.code ||
                "EPERM" === i.code) &&
              s < t.maxBusyTries
            ) {
              s++;
              return setTimeout(() => l(e, t, o), 100 * s);
            }
            "ENOENT" === i.code && (i = null);
          }
          n(i);
        });
    }
    function l(e, t, n) {
      i(e),
        i(t),
        i("function" == typeof n),
        t.lstat(e, (s, o) =>
          s && "ENOENT" === s.code
            ? n(null)
            : s && "EPERM" === s.code && r
            ? u(e, t, s, n)
            : o && o.isDirectory()
            ? h(e, t, s, n)
            : void t.unlink(e, (s) => {
                if (s) {
                  if ("ENOENT" === s.code) return n(null);
                  if ("EPERM" === s.code)
                    return r ? u(e, t, s, n) : h(e, t, s, n);
                  if ("EISDIR" === s.code) return h(e, t, s, n);
                }
                return n(s);
              })
        );
    }
    function u(e, t, n, s) {
      i(e),
        i(t),
        i("function" == typeof s),
        t.chmod(e, 438, (o) => {
          o
            ? s("ENOENT" === o.code ? null : n)
            : t.stat(e, (o, i) => {
                o
                  ? s("ENOENT" === o.code ? null : n)
                  : i.isDirectory()
                  ? h(e, t, n, s)
                  : t.unlink(e, s);
              });
        });
    }
    function d(e, t, n) {
      let s;
      i(e), i(t);
      try {
        t.chmodSync(e, 438);
      } catch (e) {
        if ("ENOENT" === e.code) return;
        throw n;
      }
      try {
        s = t.statSync(e);
      } catch (e) {
        if ("ENOENT" === e.code) return;
        throw n;
      }
      s.isDirectory() ? p(e, t, n) : t.unlinkSync(e);
    }
    function h(e, t, n, s) {
      i(e),
        i(t),
        i("function" == typeof s),
        t.rmdir(e, (r) => {
          !r ||
          ("ENOTEMPTY" !== r.code && "EEXIST" !== r.code && "EPERM" !== r.code)
            ? r && "ENOTDIR" === r.code
              ? s(n)
              : s(r)
            : (function (e, t, n) {
                i(e),
                  i(t),
                  i("function" == typeof n),
                  t.readdir(e, (s, i) => {
                    if (s) return n(s);
                    let r,
                      a = i.length;
                    if (0 === a) return t.rmdir(e, n);
                    i.forEach((s) => {
                      c(o.join(e, s), t, (s) => {
                        if (!r)
                          return s
                            ? n((r = s))
                            : void (0 == --a && t.rmdir(e, n));
                      });
                    });
                  });
              })(e, t, s);
        });
    }
    function f(e, t) {
      let n;
      a((t = t || {})),
        i(e, "rimraf: missing path"),
        i.strictEqual(typeof e, "string", "rimraf: path should be a string"),
        i(t, "rimraf: missing options"),
        i.strictEqual(typeof t, "object", "rimraf: options should be object");
      try {
        n = t.lstatSync(e);
      } catch (n) {
        if ("ENOENT" === n.code) return;
        "EPERM" === n.code && r && d(e, t, n);
      }
      try {
        n && n.isDirectory() ? p(e, t, null) : t.unlinkSync(e);
      } catch (n) {
        if ("ENOENT" === n.code) return;
        if ("EPERM" === n.code) return r ? d(e, t, n) : p(e, t, n);
        if ("EISDIR" !== n.code) throw n;
        p(e, t, n);
      }
    }
    function p(e, t, n) {
      i(e), i(t);
      try {
        t.rmdirSync(e);
      } catch (s) {
        if ("ENOTDIR" === s.code) throw n;
        if ("ENOTEMPTY" === s.code || "EEXIST" === s.code || "EPERM" === s.code)
          !(function (e, t) {
            if (
              (i(e),
              i(t),
              t.readdirSync(e).forEach((n) => f(o.join(e, n), t)),
              !r)
            ) {
              return t.rmdirSync(e, t);
            }
            {
              const n = Date.now();
              do {
                try {
                  return t.rmdirSync(e, t);
                } catch {}
              } while (Date.now() - n < 500);
            }
          })(e, t);
        else if ("ENOENT" !== s.code) throw s;
      }
    }
    (e.exports = c), (c.sync = f);
  },
  function (e, t, n) {
    "use strict";
    const s = n(255),
      o = n(256),
      i = n(257);
    e.exports = {
      createFile: s.createFile,
      createFileSync: s.createFileSync,
      ensureFile: s.createFile,
      ensureFileSync: s.createFileSync,
      createLink: o.createLink,
      createLinkSync: o.createLinkSync,
      ensureLink: o.createLink,
      ensureLinkSync: o.createLinkSync,
      createSymlink: i.createSymlink,
      createSymlinkSync: i.createSymlinkSync,
      ensureSymlink: i.createSymlink,
      ensureSymlinkSync: i.createSymlinkSync,
    };
  },
  function (e, t, n) {
    "use strict";
    const s = n(17).fromCallback,
      o = n(5),
      i = n(16),
      r = n(22);
    e.exports = {
      createFile: s(function (e, t) {
        function n() {
          i.writeFile(e, "", (e) => {
            if (e) return t(e);
            t();
          });
        }
        i.stat(e, (s, a) => {
          if (!s && a.isFile()) return t();
          const c = o.dirname(e);
          i.stat(c, (e, s) => {
            if (e)
              return "ENOENT" === e.code
                ? r.mkdirs(c, (e) => {
                    if (e) return t(e);
                    n();
                  })
                : t(e);
            s.isDirectory()
              ? n()
              : i.readdir(c, (e) => {
                  if (e) return t(e);
                });
          });
        });
      }),
      createFileSync: function (e) {
        let t;
        try {
          t = i.statSync(e);
        } catch {}
        if (t && t.isFile()) return;
        const n = o.dirname(e);
        try {
          i.statSync(n).isDirectory() || i.readdirSync(n);
        } catch (e) {
          if (!e || "ENOENT" !== e.code) throw e;
          r.mkdirsSync(n);
        }
        i.writeFileSync(e, "");
      },
    };
  },
  function (e, t, n) {
    "use strict";
    const s = n(17).fromCallback,
      o = n(5),
      i = n(16),
      r = n(22),
      a = n(30).pathExists;
    e.exports = {
      createLink: s(function (e, t, n) {
        function s(e, t) {
          i.link(e, t, (e) => {
            if (e) return n(e);
            n(null);
          });
        }
        a(t, (c, l) =>
          c
            ? n(c)
            : l
            ? n(null)
            : void i.lstat(e, (i) => {
                if (i)
                  return (
                    (i.message = i.message.replace("lstat", "ensureLink")), n(i)
                  );
                const c = o.dirname(t);
                a(c, (o, i) =>
                  o
                    ? n(o)
                    : i
                    ? s(e, t)
                    : void r.mkdirs(c, (o) => {
                        if (o) return n(o);
                        s(e, t);
                      })
                );
              })
        );
      }),
      createLinkSync: function (e, t) {
        if (i.existsSync(t)) return;
        try {
          i.lstatSync(e);
        } catch (e) {
          throw ((e.message = e.message.replace("lstat", "ensureLink")), e);
        }
        const n = o.dirname(t);
        return i.existsSync(n) || r.mkdirsSync(n), i.linkSync(e, t);
      },
    };
  },
  function (e, t, n) {
    "use strict";
    const s = n(17).fromCallback,
      o = n(5),
      i = n(16),
      r = n(22),
      a = r.mkdirs,
      c = r.mkdirsSync,
      l = n(258),
      u = l.symlinkPaths,
      d = l.symlinkPathsSync,
      h = n(259),
      f = h.symlinkType,
      p = h.symlinkTypeSync,
      g = n(30).pathExists;
    e.exports = {
      createSymlink: s(function (e, t, n, s) {
        (s = "function" == typeof n ? n : s),
          (n = "function" != typeof n && n),
          g(t, (r, c) =>
            r
              ? s(r)
              : c
              ? s(null)
              : void u(e, t, (r, c) => {
                  if (r) return s(r);
                  (e = c.toDst),
                    f(c.toCwd, n, (n, r) => {
                      if (n) return s(n);
                      const c = o.dirname(t);
                      g(c, (n, o) =>
                        n
                          ? s(n)
                          : o
                          ? i.symlink(e, t, r, s)
                          : void a(c, (n) => {
                              if (n) return s(n);
                              i.symlink(e, t, r, s);
                            })
                      );
                    });
                })
          );
      }),
      createSymlinkSync: function (e, t, n) {
        if (i.existsSync(t)) return;
        const s = d(e, t);
        (e = s.toDst), (n = p(s.toCwd, n));
        const r = o.dirname(t);
        return i.existsSync(r) || c(r), i.symlinkSync(e, t, n);
      },
    };
  },
  function (e, t, n) {
    "use strict";
    const s = n(5),
      o = n(16),
      i = n(30).pathExists;
    e.exports = {
      symlinkPaths: function (e, t, n) {
        if (s.isAbsolute(e))
          return o.lstat(e, (t) =>
            t
              ? ((t.message = t.message.replace("lstat", "ensureSymlink")),
                n(t))
              : n(null, { toCwd: e, toDst: e })
          );
        {
          const r = s.dirname(t),
            a = s.join(r, e);
          return i(a, (t, i) =>
            t
              ? n(t)
              : i
              ? n(null, { toCwd: a, toDst: e })
              : o.lstat(e, (t) =>
                  t
                    ? ((t.message = t.message.replace(
                        "lstat",
                        "ensureSymlink"
                      )),
                      n(t))
                    : n(null, { toCwd: e, toDst: s.relative(r, e) })
                )
          );
        }
      },
      symlinkPathsSync: function (e, t) {
        let n;
        if (s.isAbsolute(e)) {
          if (((n = o.existsSync(e)), !n))
            throw new Error("absolute srcpath does not exist");
          return { toCwd: e, toDst: e };
        }
        {
          const i = s.dirname(t),
            r = s.join(i, e);
          if (((n = o.existsSync(r)), n)) return { toCwd: r, toDst: e };
          if (((n = o.existsSync(e)), !n))
            throw new Error("relative srcpath does not exist");
          return { toCwd: e, toDst: s.relative(i, e) };
        }
      },
    };
  },
  function (e, t, n) {
    "use strict";
    const s = n(16);
    e.exports = {
      symlinkType: function (e, t, n) {
        if (
          ((n = "function" == typeof t ? t : n),
          (t = "function" != typeof t && t))
        )
          return n(null, t);
        s.lstat(e, (e, s) => {
          if (e) return n(null, "file");
          (t = s && s.isDirectory() ? "dir" : "file"), n(null, t);
        });
      },
      symlinkTypeSync: function (e, t) {
        let n;
        if (t) return t;
        try {
          n = s.lstatSync(e);
        } catch {
          return "file";
        }
        return n && n.isDirectory() ? "dir" : "file";
      },
    };
  },
  function (e, t, n) {
    "use strict";
    const s = n(17).fromPromise,
      o = n(261);
    (o.outputJson = s(n(263))),
      (o.outputJsonSync = n(264)),
      (o.outputJSON = o.outputJson),
      (o.outputJSONSync = o.outputJsonSync),
      (o.writeJSON = o.writeJson),
      (o.writeJSONSync = o.writeJsonSync),
      (o.readJSON = o.readJson),
      (o.readJSONSync = o.readJsonSync),
      (e.exports = o);
  },
  function (e, t, n) {
    "use strict";
    const s = n(262);
    e.exports = {
      readJson: s.readFile,
      readJsonSync: s.readFileSync,
      writeJson: s.writeFile,
      writeJsonSync: s.writeFileSync,
    };
  },
  function (e, t, n) {
    let s;
    try {
      s = n(16);
    } catch (e) {
      s = n(12);
    }
    const o = n(17),
      { stringify: i, stripBom: r } = n(68);
    const a = {
      readFile: o.fromPromise(async function (e, t = {}) {
        "string" == typeof t && (t = { encoding: t });
        const n = t.fs || s,
          i = !("throws" in t) || t.throws;
        let a,
          c = await o.fromCallback(n.readFile)(e, t);
        c = r(c);
        try {
          a = JSON.parse(c, t ? t.reviver : null);
        } catch (t) {
          if (i) throw ((t.message = `${e}: ${t.message}`), t);
          return null;
        }
        return a;
      }),
      readFileSync: function (e, t = {}) {
        "string" == typeof t && (t = { encoding: t });
        const n = t.fs || s,
          o = !("throws" in t) || t.throws;
        try {
          let s = n.readFileSync(e, t);
          return (s = r(s)), JSON.parse(s, t.reviver);
        } catch (t) {
          if (o) throw ((t.message = `${e}: ${t.message}`), t);
          return null;
        }
      },
      writeFile: o.fromPromise(async function (e, t, n = {}) {
        const r = n.fs || s,
          a = i(t, n);
        await o.fromCallback(r.writeFile)(e, a, n);
      }),
      writeFileSync: function (e, t, n = {}) {
        const o = n.fs || s,
          r = i(t, n);
        return o.writeFileSync(e, r, n);
      },
    };
    e.exports = a;
  },
  function (e, t, n) {
    "use strict";
    const { stringify: s } = n(68),
      { outputFile: o } = n(69);
    e.exports = async function (e, t, n = {}) {
      const i = s(t, n);
      await o(e, i, n);
    };
  },
  function (e, t, n) {
    "use strict";
    const { stringify: s } = n(68),
      { outputFileSync: o } = n(69);
    e.exports = function (e, t, n) {
      const i = s(t, n);
      o(e, i, n);
    };
  },
  function (e, t, n) {
    "use strict";
    e.exports = { moveSync: n(266) };
  },
  function (e, t, n) {
    "use strict";
    const s = n(16),
      o = n(5),
      i = n(107).copySync,
      r = n(54).removeSync,
      a = n(22).mkdirpSync,
      c = n(53);
    function l(e, t, n) {
      try {
        s.renameSync(e, t);
      } catch (s) {
        if ("EXDEV" !== s.code) throw s;
        return (function (e, t, n) {
          return i(e, t, { overwrite: n, errorOnExist: true }), r(e);
        })(e, t, n);
      }
    }
    e.exports = function (e, t, n) {
      const i = (n = n || {}).overwrite || n.clobber || !1,
        { srcStat: u } = c.checkPathsSync(e, t, "move");
      return (
        c.checkParentPathsSync(e, u, t, "move"),
        a(o.dirname(t)),
        (function (e, t, n) {
          if (n) return r(t), l(e, t, n);
          if (s.existsSync(t)) throw new Error("dest already exists.");
          return l(e, t, n);
        })(e, t, i)
      );
    };
  },
  function (e, t, n) {
    "use strict";
    const s = n(17).fromCallback;
    e.exports = { move: s(n(268)) };
  },
  function (e, t, n) {
    "use strict";
    const s = n(16),
      o = n(5),
      i = n(110).copy,
      r = n(54).remove,
      a = n(22).mkdirp,
      c = n(30).pathExists,
      l = n(53);
    function u(e, t, n, o) {
      s.rename(e, t, (s) =>
        s
          ? "EXDEV" !== s.code
            ? o(s)
            : (function (e, t, n, s) {
                i(e, t, { overwrite: n, errorOnExist: !0 }, (t) =>
                  t ? s(t) : r(e, s)
                );
              })(e, t, n, o)
          : o()
      );
    }
    e.exports = function (e, t, n, s) {
      "function" == typeof n && ((s = n), (n = {}));
      const i = n.overwrite || n.clobber || !1;
      l.checkPaths(e, t, "move", (n, d) => {
        if (n) return s(n);
        const { srcStat: h } = d;
        l.checkParentPaths(e, h, t, "move", (n) => {
          if (n) return s(n);
          a(o.dirname(t), (n) =>
            n
              ? s(n)
              : (function (e, t, n, s) {
                  if (n) return r(t, (o) => (o ? s(o) : u(e, t, n, s)));
                  c(t, (o, i) =>
                    o
                      ? s(o)
                      : i
                      ? s(new Error("dest already exists."))
                      : u(e, t, n, s)
                  );
                })(e, t, i, s)
          );
        });
      });
    };
  },
  function (e, t, n) {
    const s = n(270),
      o = n(378),
      { getDeviceId: i } = n(126),
      r = n(1),
      a = n(2),
      c = n(379);
    e.exports = function () {
      if (
        (a.share("webConfig", r.webConfig),
        s(),
        i(),
        a.getData("CUSTOM_CONFIG").showHighTechSeewoDesktop)
      ) {
        n(50).startDesktop(!0);
      }
      n(380),
        n(58),
        n(387),
        n(389),
        n(124),
        n(395),
        n(396),
        n(138),
        n(397),
        o(),
        n(398),
        c(),
        n(399);
    };
  },
  function (e, t, n) {
    const { ipcMain: s } = n(0),
      o = n(4),
      i = n(7);
    e.exports = function () {
      s.on("windowMessage", (e, t) => {
        if (t.crossWindowName)
          o(t.eventName, t.data, t.crossWindowName, t.windowName);
        else {
          n(271)("./" + t.eventName + ".js")(t.data, t.windowName);
        }
      }),
        s.on("startRendering", (e, t) => {
          i.info("页面开始渲染", t.windowName, t.time);
        });
    };
  },
  function (e, t, n) {
    var s = {
      "./PostClosePopupNotificationWindow.js": 272,
      "./adminPasswordValidation.js": 280,
      "./autoSetPosition.js": 283,
      "./chooseFilesForTeacherDir.js": 284,
      "./clearPasswordLockTiming.js": 285,
      "./clearTimeLock.js": 296,
      "./closeDiskFormatProgressWindow.js": 297,
      "./closeScreenSaver.js": 298,
      "./closeSeewoDesktop.js": 299,
      "./continueUips.js": 300,
      "./desktopAssistantHeightChange.js": 303,
      "./desktopAssistantShow.js": 304,
      "./desktopMinierShow.js": 305,
      "./deviceLinkWindowClose.js": 306,
      "./dialogResult.js": 307,
      "./finishOneMessageRoll.js": 309,
      "./finishSceneVoice.js": 311,
      "./floatWindowClose.js": 313,
      "./getADBlockMessage.js": 314,
      "./getActivationCodePublicKey.js": 315,
      "./getAdminWebsocketState.js": 316,
      "./getAssistantProxyMes.js": 317,
      "./getBellRingingMessage.js": 319,
      "./getCountdownMessage.js": 320,
      "./getDesktopAssistantResource.js": 321,
      "./getFilesListOfPath.js": 322,
      "./getPorts.js": 323,
      "./getScaleFactor.js": 324,
      "./getSeewoDesktopTeacherDirs.js": 131,
      "./getSmartPenKeyState.js": 325,
      "./getSmartPenLinkState.js": 326,
      "./getSystemCleanerMessage.js": 327,
      "./getSystemDiskMessage.js": 328,
      "./getTeacherDirDetail.js": 114,
      "./handleSeewoDesktopSearchMinimize.js": 329,
      "./log.js": 330,
      "./minierMove.js": 331,
      "./newSearchInputWindow.js": 332,
      "./newTeacherDir.js": 333,
      "./nfcAuthResultWindowClose.js": 335,
      "./openExternal.js": 336,
      "./passwordAuthen.js": 337,
      "./passwordInputLockError.js": 339,
      "./passwordInputLockRequestLimit.js": 340,
      "./pcLoginSuccess.js": 341,
      "./pcUserLogout.js": 343,
      "./postEyeProtectionModeActionByRender.js": 344,
      "./postEyeProtectionModeActionTimeOutByRender.js": 348,
      "./postUipsFeedback.js": 349,
      "./quitFullscreenAuth.js": 350,
      "./quitLockTaskIfExist.js": 351,
      "./quitNewsPlayer.js": 352,
      "./reboot.js": 354,
      "./requestRemoteControl.js": 355,
      "./searchByEngine.js": 357,
      "./setCursorSize.js": 358,
      "./setPoweronDesktopCloseState.js": 359,
      "./setVirusScanId.js": 360,
      "./setVoiceWindowHeight.js": 362,
      "./shutDown.js": 363,
      "./startListenSCServerLive.js": 364,
      "./startLockScreen.js": 365,
      "./startVirusKilling.js": 366,
      "./stopNewsPlayer.js": 367,
      "./stopSchoolAnnouncement.js": 368,
      "./stopScreenLock.js": 370,
      "./stopUips.js": 371,
      "./storeSetting.js": 372,
      "./uipsFeedback.js": 373,
      "./uninstallApp.js": 374,
      "./windowControl.js": 375,
      "./windowMove.js": 376,
      "./writeToClipboard.js": 377,
    };
    function o(e) {
      var t = i(e);
      return n(t);
    }
    function i(e) {
      if (!n.o(s, e)) {
        var t = new Error("Cannot find module '" + e + "'");
        throw ((t.code = "MODULE_NOT_FOUND"), t);
      }
      return s[e];
    }
    (o.keys = function () {
      return Object.keys(s);
    }),
      (o.resolve = i),
      (e.exports = o),
      (o.id = 271);
  },
  function (e, t, n) {
    const s = n(111);
    e.exports = () => {
      s.closePopupNotification();
    };
  },
  function (e, t, n) {
    const s = n(11),
      o = n(1),
      i = n(6),
      { ip: r } = o.proxyHttp;
    e.exports = function (e, t) {
      i.register(["SeewoProxyHTTP"], !1, (n) => {
        !(function (e, t, n) {
          s(
            r,
            e,
            "/forward/SeewoHugoHttp/api/v1/residentNotice/feedback",
            "post",
            { ...t },
            (e) => {},
            n
          );
        })(n.SeewoProxyHTTP, e, t);
      });
    };
  },
  function (e, t, n) {
    var s = n(64),
      o = s.URL,
      i = n(49),
      r = n(102),
      a = n(38).Writable,
      c = n(15),
      l = n(275),
      u = !1;
    try {
      c(new o());
    } catch (e) {
      u = "ERR_INVALID_URL" === e.code;
    }
    var d = [
        "auth",
        "host",
        "hostname",
        "href",
        "path",
        "pathname",
        "port",
        "protocol",
        "query",
        "search",
        "hash",
      ],
      h = ["abort", "aborted", "connect", "error", "socket", "timeout"],
      f = Object.create(null);
    h.forEach(function (e) {
      f[e] = function (t, n, s) {
        this._redirectable.emit(e, t, n, s);
      };
    });
    var p = C("ERR_INVALID_URL", "Invalid URL", TypeError),
      g = C("ERR_FR_REDIRECTION_FAILURE", "Redirected request failed"),
      w = C(
        "ERR_FR_TOO_MANY_REDIRECTS",
        "Maximum number of redirects exceeded",
        g
      ),
      m = C(
        "ERR_FR_MAX_BODY_LENGTH_EXCEEDED",
        "Request body larger than maxBodyLength limit"
      ),
      y = C("ERR_STREAM_WRITE_AFTER_END", "write after end"),
      b = a.prototype.destroy || E;
    function S(e, t) {
      a.call(this),
        this._sanitizeOptions(e),
        (this._options = e),
        (this._ended = !1),
        (this._ending = !1),
        (this._redirectCount = 0),
        (this._redirects = []),
        (this._requestBodyLength = 0),
        (this._requestBodyBuffers = []),
        t && this.on("response", t);
      var n = this;
      (this._onNativeResponse = function (e) {
        try {
          n._processResponse(e);
        } catch (e) {
          n.emit("error", e instanceof g ? e : new g({ cause: e }));
        }
      }),
        this._performRequest();
    }
    function v(e) {
      var t = { maxRedirects: 21, maxBodyLength: 10485760 },
        n = {};
      return (
        Object.keys(e).forEach(function (s) {
          var i = s + ":",
            r = (n[i] = e[s]),
            a = (t[s] = Object.create(r));
          Object.defineProperties(a, {
            request: {
              value: function (e, s, r) {
                var a;
                return (
                  (a = e),
                  o && a instanceof o
                    ? (e = k(e))
                    : L(e)
                    ? (e = k(_(e)))
                    : ((r = s), (s = T(e)), (e = { protocol: i })),
                  I(s) && ((r = s), (s = null)),
                  ((s = Object.assign(
                    {
                      maxRedirects: t.maxRedirects,
                      maxBodyLength: t.maxBodyLength,
                    },
                    e,
                    s
                  )).nativeProtocols = n),
                  L(s.host) || L(s.hostname) || (s.hostname = "::1"),
                  c.equal(s.protocol, i, "protocol mismatch"),
                  l("options", s),
                  new S(s, r)
                );
              },
              configurable: !0,
              enumerable: !0,
              writable: !0,
            },
            get: {
              value: function (e, t, n) {
                var s = a.request(e, t, n);
                return s.end(), s;
              },
              configurable: !0,
              enumerable: !0,
              writable: !0,
            },
          });
        }),
        t
      );
    }
    function E() {}
    function _(e) {
      var t;
      if (u) t = new o(e);
      else if (!L((t = T(s.parse(e))).protocol)) throw new p({ input: e });
      return t;
    }
    function T(e) {
      if (/^\[/.test(e.hostname) && !/^\[[:0-9a-f]+\]$/i.test(e.hostname))
        throw new p({ input: e.href || e });
      if (/^\[/.test(e.host) && !/^\[[:0-9a-f]+\](:\d+)?$/i.test(e.host))
        throw new p({ input: e.href || e });
      return e;
    }
    function k(e, t) {
      var n = t || {};
      for (var s of d) n[s] = e[s];
      return (
        n.hostname.startsWith("[") && (n.hostname = n.hostname.slice(1, -1)),
        "" !== n.port && (n.port = Number(n.port)),
        (n.path = n.search ? n.pathname + n.search : n.pathname),
        n
      );
    }
    function x(e, t) {
      var n;
      for (var s in t) e.test(s) && ((n = t[s]), delete t[s]);
      return null == n ? void 0 : String(n).trim();
    }
    function C(e, t, n) {
      function s(n) {
        Error.captureStackTrace(this, this.constructor),
          Object.assign(this, n || {}),
          (this.code = e),
          (this.message = this.cause ? t + ": " + this.cause.message : t);
      }
      return (
        (s.prototype = new (n || Error)()),
        Object.defineProperties(s.prototype, {
          constructor: { value: s, enumerable: !1 },
          name: { value: "Error [" + e + "]", enumerable: !1 },
        }),
        s
      );
    }
    function O(e, t) {
      for (var n of h) e.removeListener(n, f[n]);
      e.on("error", E), e.destroy(t);
    }
    function L(e) {
      return "string" == typeof e || e instanceof String;
    }
    function I(e) {
      return "function" == typeof e;
    }
    (S.prototype = Object.create(a.prototype)),
      (S.prototype.abort = function () {
        O(this._currentRequest),
          this._currentRequest.abort(),
          this.emit("abort");
      }),
      (S.prototype.destroy = function (e) {
        return O(this._currentRequest, e), b.call(this, e), this;
      }),
      (S.prototype.write = function (e, t, n) {
        if (this._ending) throw new y();
        if (!L(e) && ("object" != typeof (s = e) || !("length" in s)))
          throw new TypeError("data should be a string, Buffer or Uint8Array");
        var s;
        I(t) && ((n = t), (t = null)),
          0 !== e.length
            ? this._requestBodyLength + e.length <= this._options.maxBodyLength
              ? ((this._requestBodyLength += e.length),
                this._requestBodyBuffers.push({ data: e, encoding: t }),
                this._currentRequest.write(e, t, n))
              : (this.emit("error", new m()), this.abort())
            : n && n();
      }),
      (S.prototype.end = function (e, t, n) {
        if (
          (I(e) ? ((n = e), (e = t = null)) : I(t) && ((n = t), (t = null)), e)
        ) {
          var s = this,
            o = this._currentRequest;
          this.write(e, t, function () {
            (s._ended = !0), o.end(null, null, n);
          }),
            (this._ending = !0);
        } else
          (this._ended = this._ending = !0),
            this._currentRequest.end(null, null, n);
      }),
      (S.prototype.setHeader = function (e, t) {
        (this._options.headers[e] = t), this._currentRequest.setHeader(e, t);
      }),
      (S.prototype.removeHeader = function (e) {
        delete this._options.headers[e], this._currentRequest.removeHeader(e);
      }),
      (S.prototype.setTimeout = function (e, t) {
        var n = this;
        function s(t) {
          t.setTimeout(e),
            t.removeListener("timeout", t.destroy),
            t.addListener("timeout", t.destroy);
        }
        function o(t) {
          n._timeout && clearTimeout(n._timeout),
            (n._timeout = setTimeout(function () {
              n.emit("timeout"), i();
            }, e)),
            s(t);
        }
        function i() {
          n._timeout && (clearTimeout(n._timeout), (n._timeout = null)),
            n.removeListener("abort", i),
            n.removeListener("error", i),
            n.removeListener("response", i),
            n.removeListener("close", i),
            t && n.removeListener("timeout", t),
            n.socket || n._currentRequest.removeListener("socket", o);
        }
        return (
          t && this.on("timeout", t),
          this.socket ? o(this.socket) : this._currentRequest.once("socket", o),
          this.on("socket", s),
          this.on("abort", i),
          this.on("error", i),
          this.on("response", i),
          this.on("close", i),
          this
        );
      }),
      ["flushHeaders", "getHeader", "setNoDelay", "setSocketKeepAlive"].forEach(
        function (e) {
          S.prototype[e] = function (t, n) {
            return this._currentRequest[e](t, n);
          };
        }
      ),
      ["aborted", "connection", "socket"].forEach(function (e) {
        Object.defineProperty(S.prototype, e, {
          get: function () {
            return this._currentRequest[e];
          },
        });
      }),
      (S.prototype._sanitizeOptions = function (e) {
        if (
          (e.headers || (e.headers = {}),
          e.host && (e.hostname || (e.hostname = e.host), delete e.host),
          !e.pathname && e.path)
        ) {
          var t = e.path.indexOf("?");
          t < 0
            ? (e.pathname = e.path)
            : ((e.pathname = e.path.substring(0, t)),
              (e.search = e.path.substring(t)));
        }
      }),
      (S.prototype._performRequest = function () {
        var e = this._options.protocol,
          t = this._options.nativeProtocols[e];
        if (!t) throw new TypeError("Unsupported protocol " + e);
        if (this._options.agents) {
          var n = e.slice(0, -1);
          this._options.agent = this._options.agents[n];
        }
        var o = (this._currentRequest = t.request(
          this._options,
          this._onNativeResponse
        ));
        for (var i of ((o._redirectable = this), h)) o.on(i, f[i]);
        if (
          ((this._currentUrl = /^\//.test(this._options.path)
            ? s.format(this._options)
            : this._options.path),
          this._isRedirect)
        ) {
          var r = 0,
            a = this,
            c = this._requestBodyBuffers;
          !(function e(t) {
            if (o === a._currentRequest)
              if (t) a.emit("error", t);
              else if (r < c.length) {
                var n = c[r++];
                o.finished || o.write(n.data, n.encoding, e);
              } else a._ended && o.end();
          })();
        }
      }),
      (S.prototype._processResponse = function (e) {
        var t = e.statusCode;
        this._options.trackRedirects &&
          this._redirects.push({
            url: this._currentUrl,
            headers: e.headers,
            statusCode: t,
          });
        var n,
          i = e.headers.location;
        if (!i || !1 === this._options.followRedirects || t < 300 || t >= 400)
          return (
            (e.responseUrl = this._currentUrl),
            (e.redirects = this._redirects),
            this.emit("response", e),
            void (this._requestBodyBuffers = [])
          );
        if (
          (O(this._currentRequest),
          e.destroy(),
          ++this._redirectCount > this._options.maxRedirects)
        )
          throw new w();
        var r = this._options.beforeRedirect;
        r &&
          (n = Object.assign(
            { Host: e.req.getHeader("host") },
            this._options.headers
          ));
        var a = this._options.method;
        (((301 === t || 302 === t) && "POST" === this._options.method) ||
          (303 === t && !/^(?:GET|HEAD)$/.test(this._options.method))) &&
          ((this._options.method = "GET"),
          (this._requestBodyBuffers = []),
          x(/^content-/i, this._options.headers));
        var d,
          h,
          f = x(/^host$/i, this._options.headers),
          p = _(this._currentUrl),
          g = f || p.host,
          m = /^\w+:/.test(i)
            ? this._currentUrl
            : s.format(Object.assign(p, { host: g })),
          y = ((d = i), (h = m), u ? new o(d, h) : _(s.resolve(h, d)));
        if (
          (l("redirecting to", y.href),
          (this._isRedirect = !0),
          k(y, this._options),
          ((y.protocol !== p.protocol && "https:" !== y.protocol) ||
            (y.host !== g &&
              !(function (e, t) {
                c(L(e) && L(t));
                var n = e.length - t.length - 1;
                return n > 0 && "." === e[n] && e.endsWith(t);
              })(y.host, g))) &&
            x(/^(?:authorization|cookie)$/i, this._options.headers),
          I(r))
        ) {
          var b = { headers: e.headers, statusCode: t },
            S = { url: m, method: a, headers: n };
          r(this._options, b, S), this._sanitizeOptions(this._options);
        }
        this._performRequest();
      }),
      (e.exports = v({ http: i, https: r })),
      (e.exports.wrap = v);
  },
  function (e, t, n) {
    var s;
    e.exports = function () {
      if (!s) {
        try {
          s = n(10)("follow-redirects");
        } catch (e) {}
        "function" != typeof s && (s = function () {});
      }
      s.apply(null, arguments);
    };
  },
  function (e, t) {
    var n, s;
    (n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"),
      (s = {
        rotl: function (e, t) {
          return (e << t) | (e >>> (32 - t));
        },
        rotr: function (e, t) {
          return (e << (32 - t)) | (e >>> t);
        },
        endian: function (e) {
          if (e.constructor == Number)
            return (16711935 & s.rotl(e, 8)) | (4278255360 & s.rotl(e, 24));
          for (var t = 0; t < e.length; t++) e[t] = s.endian(e[t]);
          return e;
        },
        randomBytes: function (e) {
          for (var t = []; e > 0; e--) t.push(Math.floor(256 * Math.random()));
          return t;
        },
        bytesToWords: function (e) {
          for (var t = [], n = 0, s = 0; n < e.length; n++, s += 8)
            t[s >>> 5] |= e[n] << (24 - (s % 32));
          return t;
        },
        wordsToBytes: function (e) {
          for (var t = [], n = 0; n < 32 * e.length; n += 8)
            t.push((e[n >>> 5] >>> (24 - (n % 32))) & 255);
          return t;
        },
        bytesToHex: function (e) {
          for (var t = [], n = 0; n < e.length; n++)
            t.push((e[n] >>> 4).toString(16)), t.push((15 & e[n]).toString(16));
          return t.join("");
        },
        hexToBytes: function (e) {
          for (var t = [], n = 0; n < e.length; n += 2)
            t.push(parseInt(e.substr(n, 2), 16));
          return t;
        },
        bytesToBase64: function (e) {
          for (var t = [], s = 0; s < e.length; s += 3)
            for (
              var o = (e[s] << 16) | (e[s + 1] << 8) | e[s + 2], i = 0;
              i < 4;
              i++
            )
              8 * s + 6 * i <= 8 * e.length
                ? t.push(n.charAt((o >>> (6 * (3 - i))) & 63))
                : t.push("=");
          return t.join("");
        },
        base64ToBytes: function (e) {
          e = e.replace(/[^A-Z0-9+\/]/gi, "");
          for (var t = [], s = 0, o = 0; s < e.length; o = ++s % 4)
            0 != o &&
              t.push(
                ((n.indexOf(e.charAt(s - 1)) & (Math.pow(2, -2 * o + 8) - 1)) <<
                  (2 * o)) |
                  (n.indexOf(e.charAt(s)) >>> (6 - 2 * o))
              );
          return t;
        },
      }),
      (e.exports = s);
  },
  function (e, t) {
    function n(e) {
      return (
        !!e.constructor &&
        "function" == typeof e.constructor.isBuffer &&
        e.constructor.isBuffer(e)
      );
    }
    /*!
     * Determine if an object is a Buffer
     *
     * @author   Feross Aboukhadijeh <https://feross.org>
     * @license  MIT
     */
    e.exports = function (e) {
      return (
        null != e &&
        (n(e) ||
          (function (e) {
            return (
              "function" == typeof e.readFloatLE &&
              "function" == typeof e.slice &&
              n(e.slice(0, 0))
            );
          })(e) ||
          !!e._isBuffer)
      );
    };
  },
  function (e, t, n) {
    const s = n(11),
      o = n(1),
      i = n(6),
      { ip: r } = o.proxyHttp;
    e.exports = function (e, t) {
      i.register(["SeewoProxyHTTP"], !1, (n) => {
        !(function (e, t, n) {
          s(
            r,
            e,
            "/forward/SeewoHugoHttp/api/v1/cancelResidentNotice/feedback",
            "post",
            { ...t },
            (e) => {},
            n
          );
        })(n.SeewoProxyHTTP, e, t);
      });
    };
  },
  function (e, t, n) {
    const s = n(11),
      o = n(1),
      i = n(6),
      { ip: r } = o.proxyHttp;
    e.exports = function (e, t) {
      i.register(["SeewoProxyHTTP"], !1, (n) => {
        !(function (e, t, n) {
          console.log(n),
            s(
              r,
              e,
              "/forward/SeewoHugoHttp/api/v1/popupNotice/feedback",
              "post",
              { ...t },
              (e) => {},
              n
            );
        })(n.SeewoProxyHTTP, e, t);
      });
    };
  },
  function (e, t, n) {
    n(2), n(7);
    const s = n(4),
      o = n(281),
      i = n(282);
    e.exports = (e, t) => {
      ("BIND_SCHOOL" === e.checkType ? o : i)(
        {
          schoolCode: "BIND_SCHOOL" === e.checkType ? e.schoolCode : void 0,
          password: e.password,
        },
        (e) => {
          e.success
            ? s(
                "adminPasswordValidationResult",
                { action: "passwordSuccess", message: "" },
                t
              )
            : s(
                "adminPasswordValidationResult",
                {
                  action: e.choked ? "requestLimit" : "passwordFail",
                  message: e.message,
                  data: e,
                },
                t
              );
        },
        (e) => {
          console.log(e),
            s(
              "adminPasswordValidationResult",
              { action: "requestError", message: "服务异常，请重试" },
              t
            );
        }
      );
    };
  },
  function (e, t, n) {
    const s = n(11),
      o = n(1),
      i = n(6),
      { ip: r } = o.proxyHttp;
    e.exports = function (e, t, n) {
      i.register(["SeewoProxyHTTP"], !1, (o) => {
        s(
          r,
          o.SeewoProxyHTTP,
          "/api/v1/pre_bind/school/auth",
          "post",
          { ...e },
          (e, s) => {
            s ? n(s) : t(e.data);
          }
        );
      });
    };
  },
  function (e, t, n) {
    const s = n(11),
      o = n(1),
      i = n(6),
      { ip: r } = o.proxyHttp;
    e.exports = function (e, t, n) {
      i.register(["SeewoProxyHTTP"], !1, (o) => {
        !(function (e, t, n, o) {
          s(r, e, "/api/v1/admin/password/auth", "post", { ...t }, (e, t) => {
            t ? o(t) : n(e.data);
          });
        })(o.SeewoProxyHTTP, e, t, n);
      });
    };
  },
  function (e, t, n) {
    const s = n(3);
    e.exports = (e) => {
      let t = s.getInstance(e),
        { screen: o } = n(0);
      const { workArea: i } = o.getPrimaryDisplay();
      if (t) {
        let [e, n] = t.getPosition(),
          [s, o] = t.getSize();
        e + s > i.x + i.width && (e = i.x + i.width - s),
          e < i.x && (e = i.x + 1),
          n + o > i.y + i.height && (n = i.y + i.height - o),
          n < i.y && (n = i.y + 1),
          e < 0 && (e = 1),
          n < 0 && (n = 1),
          t.setPosition(e, n);
      }
    };
  },
  function (e, t, n) {
    const { dialog: s } = n(0),
      o = n(3),
      i = n(1),
      r = n(5),
      a = n(12),
      c = n(4),
      l = n(114);
    e.exports = async (e, t) => {
      let n = await s.showOpenDialog(o.getInstance(t), {
        title: "请选择添加到" + e + "文件夹的文件",
        properties: ["multiSelections"],
      });
      if (n && n.length > 0) {
        c("fileMoveProgress", {
          nowSize: 0,
          totalSize: n.length,
          fileName: n[0],
        });
        for (let t = 0; t < n.length; t++)
          a.copyFileSync(
            n[t],
            r.resolve(i.seewoDesktopTeacherDirsPath, e, r.basename(n[t]))
          ),
            c("fileMoveProgress", {
              nowSize: t + 1,
              totalSize: n.length,
              fileName: t + 1 <= n.length ? n[t + 1] : n.pop(),
            });
        l(e);
      }
    };
  },
  function (e, t, n) {
    const s = n(28),
      o = n(2);
    e.exports = (e) => {
      let t = e.name + "_ERROR_COUNT";
      s.delete(e.nmae), o.setData({ [t]: 0 });
    };
  },
  function (e, t, n) {
    "use strict";
    var s = n(287),
      o = n(293),
      i = n(117);
    e.exports = {
      schedule: function (e, t, n) {
        "boolean" == typeof n &&
          (console.warn(
            "DEPRECIATION: imediateStart is deprecated and will be removed soon in favor of the options param."
          ),
          (n = { scheduled: n })),
          n || (n = { scheduled: !0 });
        var i = new s(e, t);
        return new o(i, n);
      },
      validate: function (e) {
        try {
          i(e);
        } catch (e) {
          return !1;
        }
        return !0;
      },
    };
  },
  function (e, t, n) {
    "use strict";
    var s = n(116),
      o = n(117),
      i = n(43);
    function r(e, t) {
      return -1 !== e.indexOf(",")
        ? -1 !== e.split(",").indexOf(t.toString())
        : e === t.toString();
    }
    function a(e, t) {
      o(e),
        (this.initialPattern = e.split(" ")),
        (this.pattern = s(e)),
        (this.execution = t),
        (this.expressions = this.pattern.split(" ")),
        i.EventEmitter.call(this),
        (this.update = (e) => {
          (function (e, t) {
            var n = r(e.expressions[0], t.getSeconds()),
              s = r(e.expressions[1], t.getMinutes()),
              o = r(e.expressions[2], t.getHours()),
              i = r(e.expressions[3], t.getDate()),
              a = r(e.expressions[4], t.getMonth() + 1),
              c = r(e.expressions[5], t.getDay()),
              l = !1,
              u = 6 === e.initialPattern.length ? 0 : -1;
            return (
              (l =
                "*" === e.initialPattern[3 + u]
                  ? c
                  : "*" === e.initialPattern[5 + u]
                  ? i
                  : i || c),
              n && s && o && l && a
            );
          })(this, e) &&
            new Promise((e, t) => {
              this.emit("started", this);
              var n = this.execution();
              n instanceof Promise ? n.then(e).catch(t) : e();
            })
              .then(() => {
                this.emit("done", this);
              })
              .catch((e) => {
                console.error(e), this.emit("failed", e);
              });
        });
    }
    (a.prototype = i.EventEmitter.prototype), (e.exports = a);
  },
  function (e, t, n) {
    "use strict";
    e.exports = (() => {
      var e = [
          "january",
          "february",
          "march",
          "april",
          "may",
          "june",
          "july",
          "august",
          "september",
          "october",
          "november",
          "december",
        ],
        t = [
          "jan",
          "feb",
          "mar",
          "apr",
          "may",
          "jun",
          "jul",
          "aug",
          "sep",
          "oct",
          "nov",
          "dec",
        ];
      function n(e, t) {
        for (var n = 0; n < t.length; n++)
          e = e.replace(new RegExp(t[n], "gi"), parseInt(n, 10) + 1);
        return e;
      }
      return function (s) {
        return (s = n(s, e)), (s = n(s, t));
      };
    })();
  },
  function (e, t, n) {
    "use strict";
    e.exports = (() => {
      var e = [
          "sunday",
          "monday",
          "tuesday",
          "wednesday",
          "thursday",
          "friday",
          "saturday",
        ],
        t = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
      function n(e, t) {
        for (var n = 0; n < t.length; n++)
          e = e.replace(new RegExp(t[n], "gi"), parseInt(n, 10));
        return e;
      }
      return function (s) {
        return (s = n((s = s.replace("7", "0")), e)), n(s, t);
      };
    })();
  },
  function (e, t, n) {
    "use strict";
    e.exports = (() => {
      function e(e, t) {
        return -1 !== e.indexOf("*") ? e.replace("*", t) : e;
      }
      return function (t) {
        return (
          (t[0] = e(t[0], "0-59")),
          (t[1] = e(t[1], "0-59")),
          (t[2] = e(t[2], "0-23")),
          (t[3] = e(t[3], "1-31")),
          (t[4] = e(t[4], "1-12")),
          (t[5] = e(t[5], "0-6")),
          t
        );
      };
    })();
  },
  function (e, t, n) {
    "use strict";
    e.exports = (() => {
      function e(e, t, n, s) {
        var o = [],
          i = parseInt(s),
          r = parseInt(n);
        r > i && ((i = parseInt(n)), (r = parseInt(s)));
        for (var a = r; a <= i; a++) o.push(a);
        return e.replace(new RegExp(t, "gi"), o.join());
      }
      function t(t) {
        for (
          var n = /(\d+)\-(\d+)/, s = n.exec(t);
          null !== s && s.length > 0;

        )
          (t = e(t, s[0], s[1], s[2])), (s = n.exec(t));
        return t;
      }
      return function (e) {
        for (var n = 0; n < e.length; n++) e[n] = t(e[n]);
        return e;
      };
    })();
  },
  function (e, t, n) {
    "use strict";
    e.exports = function (e) {
      for (var t = /^(.+)\/(\d+)$/, n = 0; n < e.length; n++) {
        var s = t.exec(e[n]);
        if (null !== s && s.length > 0) {
          for (
            var o = s[1].split(","), i = [], r = parseInt(s[2], 10), a = 0;
            a <= o.length;
            a++
          ) {
            var c = parseInt(o[a], 10);
            c % r == 0 && i.push(c);
          }
          e[n] = i.join(",");
        }
      }
      return e;
    };
  },
  function (e, t, n) {
    "use strict";
    var s = n(294);
    e.exports = function (e, t) {
      var n = t.timezone;
      (this.start = () => (
        (this.status = "scheduled"),
        this.task &&
          !this.tick &&
          (this.tick = setTimeout(
            this.task,
            1e3 - new Date().getMilliseconds() + 1
          )),
        this
      )),
        (this.stop = () => (
          (this.status = "stoped"),
          this.tick && (clearTimeout(this.tick), (this.tick = null)),
          this
        )),
        (this.getStatus = () => this.status),
        (this.destroy = () => {
          this.stop(), (this.status = "destroyed"), (this.task = null);
        }),
        e.on("started", () => {
          this.status = "running";
        }),
        e.on("done", () => {
          this.status = "scheduled";
        }),
        e.on("failed", () => {
          this.status = "failed";
        }),
        (this.task = () => {
          var t = new Date();
          n && (t = s.timeAt(t, n)),
            (this.tick = setTimeout(this.task, 1e3 - t.getMilliseconds() + 1)),
            e.update(t);
        }),
        (this.tick = null),
        !1 !== t.scheduled && this.start();
    };
  },
  function (e, t, n) {
    var s = n(295);
    e.exports = (function () {
      function e(e) {
        var t = s[e];
        if (null != t && null != t) return t;
        throw Error("Invalid timezone " + e);
      }
      function t(e) {
        var t = -6e4 * e.getTimezoneOffset();
        return e.getTime() - t;
      }
      return {
        offsetOf: e,
        removeOffset: t,
        timeAt: function (n, s) {
          let o = t(n);
          var i = -6e4 * e(s);
          return new Date(o + i);
        },
      };
    })();
  },
  function (e) {
    e.exports = JSON.parse(
      '{"Etc/GMT+12":720,"Pacific/Pago_Pago":660,"Pacific/Midway":660,"Pacific/Honolulu":600,"America/Juneau":540,"America/Los_Angeles":480,"America/Tijuana":480,"America/Phoenix":420,"America/Chihuahua":420,"America/Mazatlan":420,"America/Denver":420,"America/Guatemala":360,"America/Chicago":360,"America/Mexico_City":360,"America/Monterrey":360,"America/Regina":360,"America/Bogota":300,"America/New_York":300,"America/Indiana/Indianapolis":300,"America/Lima":300,"America/Halifax":240,"America/Caracas":240,"America/Guyana":240,"America/La_Paz":240,"America/Puerto_Rico":240,"America/Santiago":240,"America/St_Johns":210,"America/Sao_Paulo":180,"America/Argentina/Buenos_Aires":180,"America/Godthab":180,"America/Montevideo":180,"Atlantic/South_Georgia":120,"Atlantic/Azores":60,"Atlantic/Cape_Verde":60,"Africa/Casablanca":0,"Europe/London":0,"Europe/Lisbon":0,"Africa/Monrovia":0,"Etc/UTC":0,"Europe/Amsterdam":-60,"Europe/Belgrade":-60,"Europe/Berlin":-60,"Europe/Zurich":-60,"Europe/Bratislava":-60,"Europe/Brussels":-60,"Europe/Budapest":-60,"Europe/Copenhagen":-60,"Europe/Dublin":-60,"Europe/Ljubljana":-60,"Europe/Madrid":-60,"Europe/Paris":-60,"Europe/Prague":-60,"Europe/Rome":-60,"Europe/Sarajevo":-60,"Europe/Skopje":-60,"Europe/Stockholm":-60,"Europe/Vienna":-60,"Europe/Warsaw":-60,"Africa/Algiers":-60,"Europe/Zagreb":-60,"Europe/Athens":-120,"Europe/Bucharest":-120,"Africa/Cairo":-120,"Africa/Harare":-120,"Europe/Helsinki":-120,"Asia/Jerusalem":-120,"Europe/Kaliningrad":-120,"Europe/Kiev":-120,"Africa/Johannesburg":-120,"Europe/Riga":-120,"Europe/Sofia":-120,"Europe/Tallinn":-120,"Europe/Vilnius":-120,"Asia/Baghdad":-180,"Europe/Istanbul":-180,"Asia/Kuwait":-180,"Europe/Minsk":-180,"Europe/Moscow":-180,"Africa/Nairobi":-180,"Asia/Riyadh":-180,"Europe/Volgograd":-180,"Asia/Tehran":-210,"Asia/Muscat":-240,"Asia/Baku":-240,"Europe/Samara":-240,"Asia/Tbilisi":-240,"Asia/Yerevan":-240,"Asia/Kabul":-270,"Asia/Yekaterinburg":-300,"Asia/Karachi":-300,"Asia/Tashkent":-300,"Asia/Kolkata":-330,"Asia/Colombo":-330,"Asia/Kathmandu":-345,"Asia/Almaty":-360,"Asia/Dhaka":-360,"Asia/Urumqi":-360,"Asia/Rangoon":-390,"Asia/Bangkok":-420,"Asia/Jakarta":-420,"Asia/Krasnoyarsk":-420,"Asia/Novosibirsk":-420,"Asia/Shanghai":-480,"Asia/Chongqing":-480,"Asia/Hong_Kong":-480,"Asia/Irkutsk":-480,"Asia/Kuala_Lumpur":-480,"Australia/Perth":-480,"Asia/Singapore":-480,"Asia/Taipei":-480,"Asia/Ulaanbaatar":-480,"Asia/Tokyo":-540,"Asia/Seoul":-540,"Asia/Yakutsk":-540,"Australia/Adelaide":-570,"Australia/Darwin":-570,"Australia/Brisbane":-600,"Australia/Melbourne":-600,"Pacific/Guam":-600,"Australia/Hobart":-600,"Pacific/Port_Moresby":-600,"Australia/Sydney":-600,"Asia/Vladivostok":-600,"Asia/Magadan":-660,"Pacific/Noumea":-660,"Pacific/Guadalcanal":-660,"Asia/Srednekolymsk":-660,"Pacific/Auckland":-720,"Pacific/Fiji":-720,"Asia/Kamchatka":-720,"Pacific/Majuro":-720,"Pacific/Chatham":-765,"Pacific/Tongatapu":-780,"Pacific/Apia":-780,"Pacific/Fakaofo":-780}'
    );
  },
  function (e, t, n) {
    const s = n(28),
      o = n(2);
    e.exports = (e) => {
      s.delete(e),
        o.share(e + "_FEEDBACK", 0),
        o.setData({ [e + "_ERROR_COUNT"]: 0 });
    };
  },
  function (e, t, n) {
    const s = n(20);
    e.exports = () => {
      s.closeWindow("remoteDiskClearWarn");
    };
  },
  function (e, t, n) {
    const s = n(118);
    e.exports = () => {
      s.stopScreensaver();
    };
  },
  function (e, t, n) {
    const s = n(50),
      o = n(3),
      i = n(19);
    e.exports = () => {
      o.checkWindowExist("desktopMinier")
        ? o.show("desktopMinier")
        : o.checkWindowExist("desktopAssistant") &&
          (i.showSlot("desktopAssistant"), o.showInactive("desktopAssistant")),
        setTimeout(() => {
          s.stopDesktop();
        }, 1e3);
    };
  },
  function (e, t, n) {
    const s = n(70),
      o = n(3);
    e.exports = () => {
      s.continueUips() && o.close("uipsMinier");
    };
  },
  function (e, t, n) {
    const s = n(11),
      o = n(1),
      i = n(6),
      { ip: r } = o.proxyHttp;
    e.exports = function (e) {
      i.register(["SeewoProxyHTTP"], !1, (t) => {
        !(function (e, t) {
          s(
            r,
            e,
            "/forward/SeewoHugoHttp/api/v1/screenlock/lockfeedback",
            "post",
            { ...t },
            (e) => {}
          );
        })(t.SeewoProxyHTTP, e);
      });
    };
  },
  function (e, t, n) {
    const s = n(11),
      o = n(1),
      i = n(6),
      { ip: r } = o.proxyHttp;
    e.exports = function (e) {
      i.register(["SeewoProxyHTTP"], !1, (t) => {
        !(function (e, t) {
          s(
            r,
            e,
            "/forward/SeewoHugoHttp/api/v1/screenlock/unlockfeedback",
            "post",
            { ...t },
            (e) => {}
          );
        })(t.SeewoProxyHTTP, e);
      });
    };
  },
  function (e, t, n) {
    const s = n(19),
      o = {
        fullHeight: 552,
        fullHalfTESHeight: 424,
        fullHalfTESNoPageSlideHeight: 400,
        fullNoPageSlideHeight: 504,
        fullOnePageSlideHeight: 528,
        noTESHasPageSlideHeight: 260,
        noTESNoPageSlideHeight: 236,
      };
    e.exports = (e = "fullHalfTESNoPageSlideHeight") => {
      s.updateConfig("desktopAssistant", { height: o[e] });
    };
  },
  function (e, t, n) {
    const s = n(26),
      o = n(19),
      i = n(27),
      r = n(3);
    e.exports = () => {
      r.restore("desktopAssistant"), o.showSlot("desktopAssistant");
      const e = r.getInstance("desktopAssistant");
      if (e && !e.isDestroyed()) {
        const t = i(e.getNativeWindowHandle());
        s.SetWindowPos(t, 1, 0, 0, 0, 0, 3),
          s.SetWindowPos(t, 1, 0, 0, 0, 0, 3);
      }
    };
  },
  function (e, t, n) {
    const s = n(3),
      o = n(7),
      i = n(19),
      r = n(27),
      a = n(26);
    e.exports = () => {
      s.getInstance("desktopAssistant").minimize(),
        i.hideSlot("desktopAssistant"),
        s.newOne("desktopMinier").on("close", () => {
          o.info("desktopMinier 进程被杀害");
          const e = s.getInstance("desktopAssistant");
          if (e && !e.isDestroyed()) {
            i.showSlot("desktopAssistant");
            const t = r(e.getNativeWindowHandle());
            e.show(),
              a.SetWindowPos(t, 1, 0, 0, 0, 0, 3),
              a.SetWindowPos(t, 1, 0, 0, 0, 0, 3);
          }
        });
    };
  },
  function (e, t, n) {
    const s = n(57);
    e.exports = (e, t) => {
      s.closeWindow(e);
    };
  },
  function (e, t, n) {
    const s = n(120);
    e.exports = (e, t) => {
      s.end(t, e);
    };
  },
  function (e, t, n) {
    const { screen: s } = n(0),
      o = n(2),
      i = (e) => e / 1920;
    e.exports = function (e, t) {
      let n = 0;
      if (t) n = i(t);
      else {
        let e = s.getAllDisplays();
        n = i(e[0].bounds.width);
      }
      o.share("setZoomFactor", n, e);
    };
  },
  function (e, t, n) {
    const s = n(310),
      o = 2;
    e.exports = (e) => {
      s({ operationLogId: e.operationLogId, status: o });
    };
  },
  function (e, t, n) {
    const s = n(11),
      o = n(1),
      i = n(6),
      { ip: r } = o.proxyHttp;
    e.exports = function (e) {
      i.register(["SeewoProxyHTTP"], !1, (t) => {
        !(function (e, t) {
          s(
            r,
            e,
            "/forward/SeewoHugoHttp/api/v1/marquee/feedback",
            "post",
            { ...t },
            (e) => {}
          );
        })(t.SeewoProxyHTTP, e);
      });
    };
  },
  function (e, t, n) {
    const s = n(121);
    e.exports = (e) => {
      s.finishIndex(e);
    };
  },
  function (e, t, n) {
    const s = n(11),
      o = n(1),
      i = n(6),
      { ip: r } = o.proxyHttp;
    e.exports = function (e) {
      i.register(["SeewoProxyHTTP"], !1, (t) => {
        !(function (e, t) {
          s(
            r,
            e,
            "/forward/SeewoHugoHttp/api/v1/sceneVoice/feedback",
            "post",
            { ...t },
            (e) => {}
          );
        })(t.SeewoProxyHTTP, e);
      });
    };
  },
  function (e, t, n) {
    const s = n(122);
    e.exports = (e) => {
      s.deleteWindow(e);
    };
  },
  function (e, t, n) {
    const s = n(123),
      o = n(4);
    e.exports = (e, t) => {
      let n = s.getMessage(e);
      n && o(e, n, t);
    };
  },
  function (e, t, n) {
    const s = n(4),
      { activationCodePublicKey: o } = n(1);
    e.exports = (e, t) => {
      s("activationCodePublicKey", { publicKey: o, version: "1", pki: "1" }, t);
    };
  },
  function (e, t, n) {
    const s = n(124),
      o = n(4);
    e.exports = () => {
      o("adminWebsocketState", s.adminConnectState, "assistant");
    };
  },
  function (e, t, n) {
    const s = n(125),
      o = n(127),
      i = n(4);
    e.exports = (e, t) => {
      i("assistantProxyMes", s.getMessage(), t),
        i("assistantProxyMes", o.getMessage(), t);
    };
  },
  function (e, t, n) {
    const s = n(11),
      o = n(1),
      i = n(6),
      { ip: r } = o.proxyHttp;
    e.exports = function (e) {
      i.register(["SeewoProxyHTTP"], !1, (t) => {
        !(function (e, t) {
          s(r, e, "/api/v1/power/confirmShutdown", "post", { ...t }, (e) => {});
        })(t.SeewoProxyHTTP, e);
      });
    };
  },
  function (e, t, n) {
    const s = n(128),
      o = n(4);
    e.exports = (e, t) => {
      let n = s.getMessage();
      o("bellRingingMessage", n, t);
    };
  },
  function (e, t, n) {
    const s = n(129),
      o = n(4);
    e.exports = (e, t) => {
      let n = s.getMessage("GET_COUNTDOWN_MES");
      o("countdownMessage", n, t);
    };
  },
  function (e, t, n) {
    const s = n(130),
      o = n(48),
      i = n(4);
    e.exports = (e, t) => {
      let n = s.getMessage("GET_RESOURCE");
      const r = o.readFile("setting", "desktopAssistantSetting", "system");
      i("DTAResource", { setting: r, message: n }, t);
    };
  },
  function (e, t, n) {
    const s = n(115),
      o = n(4);
    e.exports = (e) => {
      let t = s(e.path);
      o(e.returnEventName, t);
    };
  },
  function (e, t, n) {
    const s = n(6),
      o = n(4);
    e.exports = (e, t) => {
      s.register([], !0, (e) => {
        try {
          o("portsList", e, t);
        } catch (e) {
          console.log(e);
        }
      });
    };
  },
  function (e, t, n) {
    const { screen: s } = n(0),
      o = n(4);
    e.exports = (e, t) => {
      let { scaleFactor: n } = s.getPrimaryDisplay();
      o("scaleFactor", n, t);
    };
  },
  function (e, t, n) {
    const s = n(58),
      o = n(4);
    e.exports = (e, t) => {
      let n = s.getPenKeyState();
      o("smartPenKeyState", n, t);
    };
  },
  function (e, t, n) {
    const s = n(58),
      o = n(4);
    e.exports = (e, t) => {
      const n = s.getStatus();
      o("smartPenLinkState", n, t);
    };
  },
  function (e, t, n) {
    const s = n(73),
      o = n(4);
    e.exports = (e, t) => {
      let n = s.getMessage(e);
      n && o(e, n, t);
    };
  },
  function (e, t, n) {
    const s = n(24),
      o = n(4);
    e.exports = (e, t) => {
      let n = s.GetSystemDiskSpaceTotalCapacity(),
        i = s.GetSystemDiskSpaceUsedCapacity(),
        r = s.GetSystemDiskName().toUpperCase();
      o("systemDiskMessage", { totalSize: n, useSize: i, diskName: r }, t);
    };
  },
  function (e, t, n) {
    const s = n(3),
      o = n(4);
    e.exports = (e) => {
      let t = s.getInstance(e.windowName);
      if (t) {
        let n = t.getBounds();
        t.setBounds({ width: n.width, height: n.height, x: n.x, y: -1e4 }),
          o("minimize", null, e.windowName);
      }
    };
  },
  function (e, t, n) {
    const s = n(7);
    e.exports = (e) => {
      s[e.type](...e.data);
    };
  },
  function (e, t, n) {
    const s = n(3);
    e.exports = (e) => {
      let t = s.getInstance(e.windowName);
      if (!t.isDestroyed()) {
        let { screen: s } = n(0);
        const { scaleFactor: o } = s.getPrimaryDisplay();
        let i = Math.ceil(e.x / o + t.getPosition()[0]),
          r = Math.ceil(e.y / o + t.getPosition()[1]);
        i > 0 &&
          r > 0 &&
          t.setBounds({
            x: i,
            y: r,
            width: "uipsMinier" === e.windowName ? 78 : 72,
            height: "uipsMinier" === e.windowName ? 78 : 72,
          });
      }
    };
  },
  function (e, t, n) {
    const s = n(3),
      o = n(2);
    e.exports = (e) => {
      let t,
        n = "seewoDesktopSearch_" + e.windowName;
      s.checkWindowExist(n)
        ? (t = s.getInstance(n))
        : ((t = s.addOne("seewoDesktopSearch", n, null)), t.blur());
      let i = s.getInstance(e.windowName).getBounds();
      setTimeout(() => {
        t.setBounds({
          width: parseInt(e.width * e.zoomFactor),
          height: parseInt(e.height * e.zoomFactor),
          x: parseInt(e.x * e.zoomFactor + i.x),
          y: parseInt(e.firstTime ? -1e4 : e.y * e.zoomFactor + i.y),
        });
      }, 100),
        o.share(
          "setZoomFactor",
          e.zoomFactor,
          "seewoDesktopSearch_" + e.windowName
        );
    };
  },
  function (e, t, n) {
    const s = n(12),
      o = n(1),
      i = n(334),
      r = n(131);
    e.exports = (e) => {
      let t = o.seewoDesktopTeacherDirsPath + "/" + e;
      s.existsSync(t) || (i(t), r());
    };
  },
  function (e, t, n) {
    const s = n(12),
      o = n(5),
      i = (e) =>
        s.existsSync(o.dirname(e)) || i(o.dirname(e))
          ? (s.mkdirSync(e), !0)
          : void 0;
    e.exports = i;
  },
  function (e, t, n) {
    const s = n(133);
    e.exports = (e, t) => {
      s.closeWindow(e);
    };
  },
  function (e, t, n) {
    const { openItem: s } = n(24),
      o = n(5),
      i = n(7);
    e.exports = (e) => {
      let t = e;
      "[object Object]" === Object.prototype.toString.call(e) &&
        (t = e.type ? o[e.type](e.path) : e.path),
        console.log(e),
        i.info("打开应用", e),
        s(t, e.arguments ? e.arguments : "");
    };
  },
  function (e, t, n) {
    n(134);
    const s = n(4),
      o = n(338);
    e.exports = (e, t) => {
      console.log("postScreenLockUnlockAuth - ", e, t),
        o({ password: e }, (e, n) => {
          if (n)
            console.log("postScreenLockUnlockAuth - error - ", n),
              s("passwordAuthenResult", { action: "requestError", data: n }, t);
          else {
            const { data: n, message: o } = e || {},
              { success: i } = n || {};
            console.log("postScreenLockUnlockAuth - res - ", e),
              s(
                "passwordAuthenResult",
                i
                  ? { action: "passwordSuccess" }
                  : {
                      action: n.choked ? "requestLimit" : "passwordFail",
                      data: n,
                      message: o,
                    },
                t
              );
          }
        });
    };
  },
  function (e, t, n) {
    const s = n(11),
      o = n(1),
      i = n(6),
      { ip: r } = o.proxyHttp;
    e.exports = function (e, t = (e, t) => {}) {
      i.register(["SeewoProxyHTTP"], !1, (n) => {
        !(function (e, t, n) {
          s(
            r,
            e,
            "/forward/SeewoHugoHttp/api/v1/screenLock/unlock/auth",
            "post",
            { ...t },
            n
          );
        })(n.SeewoProxyHTTP, e, t);
      });
    };
  },
  function (e, t, n) {
    const s = n(28),
      o = n(2);
    e.exports = (e) => {
      let t = e.name + "_ERROR_COUNT",
        n = o.getData(t);
      n && 4 === n
        ? (o.share(e.name + "_FEEDBACK", 60 * e.time),
          s.add(e.name, "* * * * * *", 60 * e.time, (t) => {
            o.share(e.name + "_FEEDBACK", t),
              0 === t &&
                setTimeout(() => {
                  o.share(e.name + "_FEEDBACK", t - 1), s.delete(e.name);
                }, 1);
          }),
          o.setData({ [t]: 0 }))
        : o.setData({ [t]: n ? n + 1 : 1 });
    };
  },
  function (e, t, n) {
    const s = n(28),
      o = n(2);
    e.exports = (e) => {
      o.share(e.name + "_FEEDBACK", 60 * e.time),
        s.add(e.name, "* * * * * *", 60 * e.time, (t) => {
          o.share(e.name + "_FEEDBACK", t),
            0 === t &&
              setTimeout(() => {
                o.share(e.name + "_FEEDBACK", t - 1), s.delete(e.name);
              }, 1);
        });
    };
  },
  function (e, t, n) {
    const s = n(59),
      o = n(3),
      i = n(2);
    e.exports = (e) => {
      const t = {
        userId: e.resourceid,
        token: e.token,
        nickName: e.cnName || e.realName || e.userName,
        userName: e.userName || e.cnName || e.realName,
        photoUrl: e.photoUrl || "",
      };
      s.handleLogin(t), i.share("userInfo", t), o.close("login");
    };
  },
  function (e, t, n) {
    const s = n(11),
      o = n(1),
      i = n(6),
      { ip: r } = o.proxyHttp;
    e.exports = function (e) {
      i.register(["SeewoProxyHTTP"], !1, (t) => {
        !(function (e, t) {
          s(
            r,
            e,
            "/forward/SeewoHugoHttp/api/v1/login/info",
            "post",
            { ...t },
            (e) => {}
          );
        })(t.SeewoProxyHTTP, e);
      });
    };
  },
  function (e, t, n) {
    const s = n(59);
    e.exports = () => {
      s.handleLogout();
    };
  },
  function (e, t, n) {
    n(3);
    const s = n(74),
      o = (n(4), n(20)),
      i = n(135),
      r = n(119),
      a = n(2);
    e.exports = ({ id: e, action: t, data: n }, c) => {
      if ((a.setData({ eyeProtectionMode: t }), "start" !== t)) {
        if ("pause" === t)
          return (
            i.postPauseHttpReq(e),
            void o.newWindow("blackWindow", !0, {}, () => {
              r();
            })
          );
        "resumed" === t &&
          (r(),
          o.getWindowList("blackWindow") && o.closeWindow("blackWindow", !0)),
          "openTimeOutPopups" === t &&
            (s.startPopups(n),
            o.getWindowList("blackWindow") && o.closeWindow("blackWindow", !0)),
          "update" === t && s.updateData(n);
      } else i.initEyeProtectionModeData();
    };
  },
  function (e, t, n) {
    const s = n(11),
      o = n(1),
      i = n(6),
      { ip: r } = o.proxyHttp;
    e.exports = function (e) {
      i.register(["SeewoProxyHTTP"], !1, (t) => {
        !(function (e, t) {
          s(
            r,
            e,
            "/forward/SeewoHugoHttp/api/v1/eye_protection/timer/finishing",
            "post",
            { ...t },
            (e) => {}
          );
        })(t.SeewoProxyHTTP, e);
      });
    };
  },
  function (e, t, n) {
    const s = n(3),
      { dllForHookBoard: o } = n(29),
      i = n(23),
      r = n(2),
      a = n(1),
      c = (e) => e / 1920;
    function l({ position: e, displaySize: t, windowSize: n, scale: s }) {
      const o = (t.x - n.x * s) / 2,
        i = (t.y - n.y * s) / 2;
      let r = { x: o, y: i };
      return (
        e.hasOwnProperty("left") &&
          ("center" === e.left && (r.x = o), (r.x = e.left)),
        e.hasOwnProperty("right") &&
          ("center" === e.right && (r.x = o),
          (r.x = t.x - n.x * s - e.right * s)),
        e.hasOwnProperty("top") &&
          ("center" === e.top && (r.y = i), (r.y = e.top)),
        e.hasOwnProperty("bottom") &&
          ("center" === e.bottom && (r.y = i),
          (r.y = t.y - n.y * s - e.bottom * s)),
        r
      );
    }
    const u = new (class {
      constructor() {
        (this.windowsList = {}), (this.size = {}), (this.scaleMap = {});
      }
      newWindow(e, t = {}, u = !a.topMostForbidden, d = {}) {
        this.size = t;
        const { screen: h } = n(0);
        let f = h.getAllDisplays();
        u && o.SetKeyboardHook();
        for (let n = 0; n < f.length; n++) {
          if (this.windowsList[e] && this.windowsList[e].includes(e + "_" + n))
            continue;
          let o = c(f[n].bounds.width);
          r.share("setZoomFactor", o, e + "_" + n);
          let i = s.addOne(e, e + "_" + n, d);
          (this.scaleMap = { ...this.scaleMap, [n]: o }),
            this.windowsList[e] || (this.windowsList[e] = []),
            this.windowsList[e].push(e + "_" + n);
          const a = t.width || f[n].bounds.width,
            u = t.height || f[n].bounds.height,
            { width: h, height: p } = f[n].bounds,
            { x: g, y: w } = l({
              position: this.size.position,
              displaySize: { x: h, y: p },
              windowSize: { x: a, y: u },
              scale: this.scaleMap[n],
            }),
            m = {
              width: Math.round(a * this.scaleMap[n]),
              height: Math.round(u * this.scaleMap[n]),
              x: Math.round(f[n].bounds.x + g),
              y: Math.round(f[n].bounds.y + w),
            };
          i.setBounds(m),
            i.setBounds(m),
            i.show(),
            i.on("close", () => {
              setTimeout(() => {
                this.closeWindow();
              }, 0);
            });
        }
        i.addListener(() => {
          setTimeout(() => {
            this.resetWindow(e);
          }, 1e3);
        }, e);
      }
      getWindowList(e) {
        return this.windowsList[e] || [];
      }
      resetWindow(e) {
        const { screen: t } = n(0);
        let o = t.getAllDisplays();
        for (let t = 0; t < o.length; t++) {
          const n = e + "_" + t;
          let i = s.getInstance(n),
            a = c(o[t].bounds.width);
          r.share("setZoomFactor", a, n),
            (this.scaleMap = { ...this.scaleMap, [t]: a }),
            i && i.isDestroyed() && (s.clearInstance(n), (i = null)),
            i ||
              ((i = s.addOne(e, n)),
              this.windowsList[e] || (this.windowsList[e] = []),
              this.windowsList[e].includes(n) || this.windowsList[e].push(n),
              i.on("close", () => {
                setTimeout(() => {
                  this.closeWindow();
                }, 0);
              }));
          const u = this.size.width || o[t].bounds.width,
            d = this.size.height || o[t].bounds.height,
            { width: h, height: f } = o[t].bounds,
            { x: p, y: g } = l({
              position: this.size.position,
              displaySize: { x: h, y: f },
              windowSize: { x: u, y: d },
              scale: this.scaleMap[t],
            }),
            w = {
              width: Math.round(u * this.scaleMap[t]),
              height: Math.round(d * this.scaleMap[t]),
              x: Math.round(o[t].bounds.x + p),
              y: Math.round(o[t].bounds.y + g),
            };
          i.setBounds(w), i.show();
        }
      }
      closeWindow(e, t = !0) {
        if (this.windowsList[e]) {
          for (let t = 0; t < this.windowsList[e].length; t++)
            s.destroy(this.windowsList[e][t]);
          t && o.UnHookKeyBoard(), i.removeEvent(e), (this.windowsList[e] = "");
        }
      }
    })();
    e.exports = u;
  },
  function (e, t, n) {
    const s = n(11),
      o = n(1),
      i = n(6),
      { ip: r } = o.proxyHttp;
    e.exports = function (e) {
      i.register(["SeewoProxyHTTP"], !1, (t) => {
        !(function (e, t) {
          s(
            r,
            e,
            "/forward/SeewoHugoHttp/api/v1/eye_protection/timer/pausing",
            "post",
            { ...t },
            (e) => {}
          );
        })(t.SeewoProxyHTTP, e);
      });
    };
  },
  function (e, t, n) {
    const s = n(74);
    e.exports = ({ id: e, action: t }, n) => {
      "start" === t &&
        (console.log(
          "postEyeProtectionModeActionTimeOutByRender - action - start - ",
          n
        ),
        s.initEyeProtectionModeTimeOutData()),
        "finish" === t && s.postTimerFinishing({ id: e });
    };
  },
  function (e, t, n) {
    const s = n(72);
    e.exports = (e) => {
      s(e);
    };
  },
  function (e, t, n) {
    const s = n(136);
    e.exports = (e) => {
      s.exitAuth(e);
    };
  },
  function (e, t, n) {
    const s = n(33);
    e.exports = (e) => {
      s.unlockAction(e ? 2 : 3);
    };
  },
  function (e, t, n) {
    const s = n(75);
    e.exports = () => {
      s.quitNewsPlayer();
    };
  },
  function (e, t, n) {
    const s = n(11),
      o = n(1),
      i = n(6),
      { ip: r } = o.proxyHttp;
    e.exports = function (e) {
      i.register(["SeewoProxyHTTP"], !1, (t) => {
        !(function (e, t) {
          s(
            r,
            e,
            "/forward/SeewoHugoHttp/api/v1/newsBroadcast/feedback",
            "post",
            { ...t },
            (e) => {}
          );
        })(t.SeewoProxyHTTP, e);
      });
    };
  },
  function (e, t, n) {
    const { exec: s } = n(45),
      o = n(4);
    e.exports = (e, t) => {
      s("shutdown -r -f -t 0", (e, n, s) => {
        e && o("reboot-faile", "", t);
      });
    };
  },
  function (e, t, n) {
    const { WINDOW_TYPES: s } = n(137),
      o = n(356);
    e.exports = (e) => {
      e && "destroy" === e.messageType && o.closeWindow(s.request);
    };
  },
  function (e, t, n) {
    const s = n(3),
      { WINDOW_TYPE_CONFIGS: o, WINDOW_TYPES: i } = n(137),
      { screen: r } = n(0),
      { dllForHookBoard: a } = n(29),
      { minimizeForegroundWindow: c } = n(24);
    e.exports = new (class {
      constructor() {
        (this.windowsMap = {}),
          (this.createWindow = this.createWindow.bind(this)),
          (this.closeWindow = this.closeWindow.bind(this));
      }
      createWindow(e) {
        const t = o[e];
        if (
          !t ||
          (this.windowsMap[t.windowName] &&
            0 !== this.windowsMap[t.windowName].length)
        )
          return;
        e === i.request && c(),
          r.getAllDisplays().forEach((n, o) => {
            const i = `${t.windowName}_${o}`,
              r = s.addOne(t.windowName, i);
            (this.windowsMap[t.windowName] =
              this.windowsMap[t.windowName] || []),
              this.windowsMap[t.windowName].push(i),
              r.setBounds({
                width: t.width || n.bounds.width,
                height: t.height || n.bounds.height,
                x: t.getXOffset(n.bounds.x, n.bounds.width),
                y: t.getYOffset(n.bounds.y, n.bounds.height),
              }),
              r.on(
                "close",
                ((e) => () => {
                  this.closeWindow(e), this.createWindow(e);
                })(e)
              ),
              r.show();
          }),
          e === i.request && a.SetKeyboardHook();
      }
      closeWindow(e) {
        const t = o[e];
        if (
          t &&
          this.windowsMap[t.windowName] &&
          0 !== this.windowsMap[t.windowName].length
        ) {
          for (; 0 !== this.windowsMap[t.windowName].length; )
            s.destroy(this.windowsMap[t.windowName].pop());
          e === i.request && a.UnHookKeyBoard();
        }
      }
    })();
  },
  function (e, t, n) {
    const { shell: s } = n(0);
    e.exports = (e, t) => {
      let n = "https://www.baidu.com/s?wd=" + encodeURIComponent(e);
      s.openExternal(n);
    };
  },
  function (e, t, n) {
    const s = n(58);
    e.exports = (e) => {
      s.setCursorSize(e);
    };
  },
  function (e, t, n) {
    const s = n(2),
      o = n(50);
    e.exports = (e) => {
      s.share("poweronDesktopCloseState", { poweronDesktopCloseState: e }),
        o.setSeewoDesktopSetting({ poweronDesktopCloseState: e });
    };
  },
  function (e, t, n) {
    const s = n(138);
    e.exports = (e) => {
      s.setScanId(e);
    };
  },
  function (e, t, n) {
    const s = n(3),
      o = n(2),
      { topMost: i } = n(24),
      r = n(112);
    let a = null;
    const c = new (class {
      constructor() {
        (this.windows = {}), (this.deleteWindow = this.deleteWindow.bind(this));
      }
      newWindow(e) {
        e.forEach((e) => {
          let t = "usbInsertPrompt_" + r(e.path);
          o.share("diskMessage", e, t), o.setData({ usbDiskWindowShow: !0 });
          let n = s.addOne("usbInsertPrompt", t);
          (this.windows[t] = n), i(n.getNativeWindowHandle());
        }),
          clearTimeout(a),
          (a = setTimeout(() => {
            o.setData({ usbDiskWindowShow: !1 });
          }, 15e3));
      }
      closeWindow(e) {
        s.close(e), delete this.windows[e];
      }
      deleteWindow(e) {
        o.setData({ usbDiskWindowShow: !1 }),
          e.forEach((e) => {
            let t = "usbInsertPrompt_" + r(e.path);
            this.windows[t] && this.closeWindow(t);
          });
      }
    })();
    e.exports = c;
  },
  function (e, t, n) {
    const s = n(3);
    e.exports = (e) => {
      let t = s.getInstance("voiceInteraction");
      if (!t || t.isDestroyed()) return;
      let n = t.getBounds();
      n.height !== e &&
        t.setBounds({ width: n.width, height: e, x: n.x, y: n.y });
    };
  },
  function (e, t, n) {
    const { exec: s } = n(45),
      o = n(4);
    e.exports = (e, t) => {
      s("shutdown -s -f -t 0", (e, n, s) => {
        e && o("shutDown-fail", "", t);
      });
    };
  },
  function (e, t, n) {
    const s = n(73);
    e.exports = (e) => {
      s.startListenServerLive(e);
    };
  },
  function (e, t, n) {
    const s = n(33),
      o = n(59);
    e.exports = () => {
      s.userLock(), o.handleLogout();
    };
  },
  function (e, t, n) {
    const s = n(4),
      o = n(3);
    e.exports = (e) => {
      if (o.checkWindowExist("assistant"))
        s("startVirusKillingWithDisk", e, "assistant");
      else {
        o.newOne("assistant").webContents.once("dom-ready", () => {
          s("startVirusKillingWithDisk", e, "assistant");
        });
      }
    };
  },
  function (e, t, n) {
    const s = n(75);
    e.exports = (e) => {
      s.exit(e.exitCode);
    };
  },
  function (e, t, n) {
    const s = n(139);
    e.exports = (e) => {
      s.exit(e.exitCode);
    };
  },
  function (e, t, n) {
    const s = n(11),
      o = n(1),
      i = n(6),
      { ip: r } = o.proxyHttp;
    e.exports = function (e) {
      i.register(["SeewoProxyHTTP"], !1, (t) => {
        !(function (e, t) {
          s(
            r,
            e,
            "/forward/SeewoHugoHttp/api/v1/propaganda/Feedback",
            "post",
            { ...t },
            (e) => {}
          );
        })(t.SeewoProxyHTTP, e);
      });
    };
  },
  function (e, t, n) {
    const s = n(33);
    e.exports = (e) => {
      s.unlockAction(e ? 2 : 3);
    };
  },
  function (e, t, n) {
    const s = n(70),
      o = n(3),
      i = n(71);
    e.exports = (e) => {
      if (e) {
        const e = i.createWindow({
          message: "网络异常，校宣播放失败，请检查网络连接后重试",
        });
        setTimeout(() => {
          i.closeWindow(e);
        }, 3e3);
      }
      s.pauseUips(), o.newOne("uipsMinier");
    };
  },
  function (e, t, n) {
    const s = n(48);
    e.exports = (e) => {
      s.writeFile("setting", e.windowName + "Setting", e.data, "system");
    };
  },
  function (e, t, n) {
    const s = n(72);
    e.exports = (e) => {
      s(e);
    };
  },
  function (e, t, n) {
    const s = n(45),
      o = n(5),
      { app: i } = n(0),
      { SetRegistryString: r, GetOsMachineId: a, Md5DigestWithSalt: c } = n(24),
      l = n(7);
    e.exports = () => {
      l.info("卸载开始");
      const e = a(),
        t = Date.now() + "",
        n = c(t, e);
      r("HKEY_LOCAL_MACHINE\\SOFTWARE\\Seewo\\SeewoService", "seed", t),
        r("HKEY_LOCAL_MACHINE\\SOFTWARE\\Seewo\\SeewoService", "secret", n),
        l.info("调用卸载程序");
      const u = o.resolve(
        i.getAppPath(),
        "..",
        "..",
        "..",
        "..",
        "Uninstall.exe"
      );
      s.exec(`"${u}" -UninstallConfirm=false`, () => {});
    };
  },
  function (e, t, n) {
    const s = n(3),
      o = n(4),
      i = n(20);
    e.exports = (e) => {
      const { typeName: t, windowName: n, moreValue: r } = e;
      switch (t) {
        case "close":
          s.close(n);
          break;
        case "new":
          s.newOne(n);
          break;
        case "show":
          s.show(n), o("show", null, n);
          break;
        case "minimize":
          s.minimize(n), o("minimize", null, n);
          break;
        case "maximize":
          s.maximize(n), o("maximize", null, n);
          break;
        case "hide":
          s.hide(n), o("hide", null, n);
          break;
        case "showInactive":
          s.showInactive(n), o("showInactive", null, n);
          break;
        case "destroy":
          s.destroy(n);
          break;
        case "focus":
          s.focus(n), o("focus", null, n);
          break;
        case "restore":
          s.restore(n), o("restore", null, n);
          break;
        case "setFocusable":
          s.setFocusable(n, r);
          break;
        case "multipleFullscreenWindowClose":
          i.closeWindow(n);
      }
    };
  },
  function (e, t, n) {
    const s = n(3);
    e.exports = (e) => {
      let t = s.getInstance(e.windowName);
      if (!t.isDestroyed()) {
        let { screen: s } = n(0);
        const { scaleFactor: o } = s.getPrimaryDisplay();
        let i = Math.ceil(e.x / o + t.getPosition()[0]),
          r = Math.ceil(e.y / o + t.getPosition()[1]);
        i > 0 &&
          r > 0 &&
          t.setBounds({ x: i, y: r, width: e.width, height: e.height });
      }
    };
  },
  function (e, t, n) {
    const { clipboard: s } = n(0);
    e.exports = (e) => {
      switch (e.type) {
        case "html":
          e.data && s.writeHTML(e.data);
          break;
        case "text":
        default:
          e.data && s.writeText(e.data);
      }
    };
  },
  function (e, t, n) {
    const { globalShortcut: s } = n(0),
      o = n(3),
      i = n(7),
      { canOpenDevTool: r } = n(1);
    e.exports = () => {
      r &&
        s.register("CommandOrControl+Shift+C", () => {
          let e = o.getAllWindows();
          i.info("主进程打开控制台!");
          for (let t in e) e[t].webContents.openDevTools({ mode: "detach" });
        });
    };
  },
  function (e, t, n) {
    const { rpcDiscover: s } = n(29),
      o = n(2),
      i = n(7);
    e.exports = () => {
      s.listener("SeewoGuestOpenPlatform", (e) => {
        i.info("SeewoGuestOpenPlatform:", e),
          e && o.share("isCloudDesktopSystem", !0);
      });
    };
  },
  function (e, t, n) {
    const s = n(18),
      o = n(1),
      i = n(6),
      r = n(125),
      a = n(381),
      c = n(382),
      l = n(383),
      u = n(384),
      d = n(386);
    const { ip: h, url: f } = o.proxyWebsocketHost;
    let p = new (class extends s {
      constructor(e) {
        super(e);
      }
      createConnect() {
        super.create();
      }
      onMessage(e) {
        const t = JSON.parse(e);
        r.onMessage(t),
          a.onMessage(t),
          c.onMessage(t),
          l.onMessage(t),
          u.onMessage(t),
          d(t);
      }
      onLinkOk() {
        l.onLinkOk();
      }
      onDisconnectMessage() {
        l.onDisconnectMessage();
      }
    })();
    i.register(["SeewoProxyHTTP"], !0, (e) => {
      let t = `${h}:${e.SeewoProxyHTTP}${f}`;
      p.setHost(t);
    }),
      (e.exports = p);
  },
  function (e, t, n) {
    const s = n(2),
      o = n(57),
      i = "/iotDeviceChange";
    const r = new (class {
      constructor() {}
      onMessage(e) {
        e.url === i &&
          e.data &&
          e.data.deviceList &&
          e.data.deviceList.map((e) => {
            let t = e.product + e.model + e.id;
            o.checkWindowExist(t)
              ? o.addWaitWindow(t, {
                  type: e.product,
                  state: e.state ? 1 : 0,
                  model: e.model,
                  sid: e.id,
                })
              : o.createWindow(
                  {
                    type: e.product,
                    state: e.state ? 1 : 0,
                    model: e.model,
                    sid: e.id,
                  },
                  t
                ),
              "wisdom_platform" === e.product &&
                s.share(
                  "wisdomPlatformLinked",
                  { product: e.product, type: e.model },
                  "assistant"
                );
          });
      }
    })();
    e.exports = r;
  },
  function (e, t, n) {
    const s = n(2),
      o = "/qrCode/notify",
      i = "/qrCode/auth";
    const r = new (class {
      constructor() {}
      onMessage(e) {
        e.url === o && s.share("COMMON_QRCODE_MESSAGE", e.data),
          e.url === i && s.share("COMMON_QRCODE_RESULT", e.data);
      }
    })();
    e.exports = r;
  },
  function (e, t, n) {
    const s = n(2),
      o = {
        IP_PUSH: "/edgeServer/ip",
        IP_SETTING_FEEDBACK: "/edgeServer/search",
      };
    const i = new (class {
      constructor() {
        this.linkState = !1;
      }
      onMessage(e) {
        Object.values(o).indexOf(e.url) > -1 &&
          s.share(e.url, e.data, "assistant");
      }
      onLinkOk() {
        (this.linkState = !0),
          s.share("EDGE_SERVER_LINK_STATE", this.linkState, "assistant");
      }
      onDisconnectMessage() {
        (this.linkState = !1),
          s.share("EDGE_SERVER_LINK_STATE", this.linkState, "assistant");
      }
    })();
    e.exports = i;
  },
  function (e, t, n) {
    const s = n(2),
      o = n(3),
      i = n(385),
      r = "/disableCover",
      a = "/serviceUpgrade/status",
      c = "/serviceUpgrade/feedback";
    const l = new (class {
      constructor() {
        this.linkState = !1;
      }
      onMessage(e) {
        e.url === r &&
          o.addOne("globalConfirm", "globalConfirm_disableCover", {
            content: `<div>${e.data.info
              .replace(/\{contact\}/g, i.phone.format(e.data.contact))
              .replace(/\{user\}/g, e.data.user)
              .split("&&")
              .map((e) => `<p>${e}</p>`)
              .join("")}</div>`,
          }),
          e.url === a && s.share("UPGRADE_STATUS", e.data),
          e.url === c && s.share("UPGRADE_FEEDBACK", e.data);
      }
    })();
    e.exports = l;
  },
  function (e, t) {
    e.exports = {
      name: { key: "name", format: (e = "") => e.replace(/^(.).*/, "$1**") },
      phone: {
        key: "phone",
        format: (e = "") =>
          (function (e) {
            const [t = "", n = ""] = e.includes("-")
                ? e.split("-")
                : [void 0, e],
              s = !!t.length,
              o = t + n;
            return (function (e, t = !1) {
              return (
                t ? /^(852)([5|6|8|9]\d{7})$/ : /^([5|6|8|9]\d{7})$/
              ).test(e);
            })(o, s) ||
              (function (e, t = !1) {
                return (t ? /^(853)(6\d{7})$/ : /^(6\d{7})$/).test(e);
              })(o, s)
              ? s
                ? e.replace(/(\d{3})-\d{4}(\d{4})/, "$1-****$2")
                : e.replace(/(\d{1})\d{4}(\d{3})/, "$1****$2")
              : (function (e, t = !1) {
                  return (
                    t
                      ? /^(86)(1(3|4|5|6|7|8|9)[0-9]\d{8})$/
                      : /^(1(3|4|5|6|7|8|9)[0-9]\d{8})$/
                  ).test(e);
                })(o, s)
              ? s
                ? e.replace(/(\d{2})-\d{7}(\d{4})/, "$1-*****$2")
                : e.replace(/(\d{3})\d{4}(\d{4})/, "$1*****$2")
              : (function (e, t = !1) {
                  return (t ? /^(886)(09\d{8})$/ : /^(09\d{8})$/).test(e);
                })(o, s)
              ? s
                ? e.replace(/(\d{3})-\d{6}(\d{4})/, "$1-******$2")
                : e.replace(/(\d{2})\d{4}(\d{4})/, "$1****$2")
              : (console.error("加密失败，手机号格式不正确-----\x3e", e),
                new Array(e.length || 0).fill("*").join(""));
          })(e),
      },
      text: { key: "text", format: (e = "") => "".padEnd(e.length, "*") },
      password: {
        key: "password",
        format: (e = "") => "".padEnd(e.length, "*"),
      },
      email: {
        key: "email",
        format: (e = "") => e.replace(/^(.).*(@.+\..+)$/, "$1****$2"),
      },
      ip: {
        key: "ip",
        format(e = "") {
          const t = e.split(".");
          return (
            (t[t.length - 1] = "".padEnd(t[t.length - 1].length, "*")),
            t.join(".")
          );
        },
      },
    };
  },
  function (e, t, n) {
    const s = n(3),
      o = n(4),
      i = 1316;
    e.exports = (e) => {
      if (e.messageType === i) {
        const t = "fileTransport" + Date.now();
        (window = s.addOne("fileTransport", t)),
          window.webContents.once("dom-ready", () => {
            o("fileTransportMessage", e.data, t);
          });
      }
    };
  },
  function (e, t, n) {
    const s = n(18),
      o = n(122),
      i = n(123),
      r = n(6),
      a = n(388),
      c = n(3),
      l = n(4),
      { ip: u, url: d } = n(1).ADBlockWebSocket;
    const h = new (class extends s {
      constructor(e) {
        super(e);
      }
      createConnect() {
        super.create();
      }
      onMessage(e) {
        const t = JSON.parse(e);
        o.onMessage(t), i.onMessage(t), a.onMessage(t);
      }
      onDisconnectMessage() {
        c.checkWindowExist("assistant") &&
          l(
            "ActionsMessage",
            { type: "error", text: "服务未连接，请稍后重试！" },
            "assistant"
          );
      }
    })();
    r.register(["SeewoProxyHTTP"], !0, (e) => {
      let t = `${u}:${e.SeewoProxyHTTP}${d}`;
      h.setHost(t);
    }),
      (e.exports = h);
  },
  function (e, t, n) {
    const s = n(3),
      o = n(4),
      { screen: i } = n(0),
      r = "/windowInfo";
    const a = new (class {
      constructor() {
        this.messageList = {};
      }
      onMessage(e) {
        let t = s.getInstance("customizeIntercept"),
          { scaleFactor: n } = i.getPrimaryDisplay();
        e.url === r &&
          (t
            ? (t.show(),
              o(
                "customizeWindow",
                { data: e.data, scaleFactor: n },
                "customizeIntercept"
              ))
            : ((t = s.newOne("customizeIntercept")),
              t.webContents.once("dom-ready", () => {
                o(
                  "customizeWindow",
                  { data: e.data, scaleFactor: n },
                  "customizeIntercept"
                );
              })));
      }
    })();
    e.exports = a;
  },
  function (e, t, n) {
    const s = n(18),
      o = n(1),
      i = n(6),
      r = n(129),
      a = n(111),
      c = n(130),
      l = n(127),
      u = n(128),
      d = n(33),
      h = n(390),
      f = n(139),
      p = n(391),
      g = n(392),
      w = n(134),
      m = n(393),
      y = n(121),
      b = n(59),
      S = n(118),
      v = n(394),
      E = n(70),
      _ = n(75),
      T = n(74),
      k = n(135);
    const { ip: x, url: C } = o.hugoServiceWebsocket;
    let O = new (class extends s {
      constructor(e) {
        super(e);
      }
      createConnect() {
        super.create();
      }
      onMessage(e) {
        let t = JSON.parse(e);
        l.onMessage(t),
          c.onMessage(t),
          r.onMessage(t),
          a.onMessage(t),
          u.onMessage(t),
          d.onMessage(t),
          h.onMessage(t),
          f.onMessage(t),
          p.onMessage(t),
          w.onMessage(t),
          g.onMessage(t),
          m.onMessage(t),
          y.onMessage(t),
          b.onMessage(t),
          S.onMessage(t),
          v.onMessage(t),
          E.onMessage(t),
          _.onMessage(t),
          T.onMessage(t),
          k.onMessage(t);
      }
      onDisconnectMessage() {
        p.serverDisconnect(), f.serverDisconnect(), d.serverDisconnect();
      }
      onLinkOk() {
        S.onLink();
      }
    })();
    i.register(["SeewoProxyHTTP"], !0, (e) => {
      let t = `${x}:${e.SeewoProxyHTTP}${C}`;
      O.setHost(t);
    }),
      (e.exports = O);
  },
  function (e, t, n) {
    const s = n(3),
      { dllForHookBoard: o } = n(29),
      { screen: i } = n(0),
      { minimizeForegroundWindow: r } = n(24);
    const a = new (class {
      constructor() {
        (this.windows = []),
          (this.handleMessage = this.handleMessage.bind(this)),
          (this.handleUpgradeFail = this.handleUpgradeFail.bind(this)),
          (this.handleUpgradeStart = this.handleUpgradeStart.bind(this)),
          (this.handleUpgradeSuceess = this.handleUpgradeSuceess.bind(this)),
          (this.createWindow = this.createWindow.bind(this)),
          (this.closeWindow = this.closeWindow.bind(this));
      }
      onMessage(e) {
        1701 === e.messageType && this.handleMessage(e.data);
      }
      handleMessage(e) {
        switch (e.status) {
          case 17100:
            this.handleUpgradeStart(e);
            break;
          case 17101:
            break;
          case 17102:
            this.handleUpgradeSuceess();
            break;
          case 17103:
            this.handleUpgradeFail();
            break;
          default:
            return;
        }
      }
      handleUpgradeFail() {
        this.closeWindow();
      }
      handleUpgradeStart() {
        0 === this.windows.length && this.createWindow();
      }
      handleUpgradeSuceess() {
        this.closeWindow();
      }
      createWindow() {
        if (0 !== this.windows.length) return;
        let e = i.getAllDisplays();
        r(),
          e.forEach((e, t) => {
            const n = "firmwareUpgrade" + t,
              o = s.addOne("firmwareUpgrade", n);
            this.windows.push(n),
              o.setBounds({
                width: e.bounds.width,
                height: e.bounds.height,
                x: e.bounds.x,
                y: e.bounds.y,
              }),
              o.on("close", () => {
                this.closeWindow(), this.createWindow();
              }),
              o.show();
          }),
          o.SetKeyboardHook();
      }
      closeWindow() {
        for (; 0 !== this.windows.length; ) s.destroy(this.windows.pop());
        o.UnHookKeyBoard();
      }
    })();
    e.exports = a;
  },
  function (e, t, n) {
    const s = n(7),
      o = n(32),
      i = n(31);
    const r = new (class {
      constructor() {
        this.messages = [];
      }
      onMessage(e) {
        "/liveclient" === e.messageType &&
          (e.data.state
            ? o.enQueue({
                taskName: i.LIVE,
                taskDependencies: [],
                startTask: () => {
                  s.info("直播开始");
                },
                pauseTask: () => {},
                coutinueTask: () => {},
                forceCloseTaskList: [i.SCREENSAVER],
                error: () => {
                  o.outQueue(i.LIVE);
                },
              })
            : (s.info("直播结束"), o.outQueue(i.LIVE)));
      }
      serverDisconnect() {
        o.outQueue(i.LIVE);
      }
    })();
    e.exports = r;
  },
  function (e, t, n) {
    n(3);
    const s = new (class {
      constructor() {
        this.messages = [];
      }
      onMessage(e) {}
    })();
    e.exports = s;
  },
  function (e, t, n) {
    const s = n(3),
      o = n(2);
    const i = new (class {
      constructor() {
        this.messages = [];
      }
      onMessage(e) {
        "/environmentalUpdate" === e.url &&
          (o.share("environmentData", e.data, "environmentData"),
          s.checkWindowExist("environmentData") || s.newOne("environmentData"));
      }
    })();
    e.exports = i;
  },
  function (e, t, n) {
    const s = n(133),
      o = "/message/nfc/authResult",
      i = "171001",
      r = "171002",
      a = "171003",
      c = "171004",
      l = 1,
      u = 2,
      d = "unlock",
      h = "offline",
      f = "warning",
      p = "auth",
      g = {
        ["" + 0]: {
          ["" + i]: {
            title: "无效刷卡",
            subTitle: "一体机断网，请尝试其他解锁方式",
            background: h,
          },
          ["" + a]: {},
          ["" + r]: {
            title: "无效刷卡",
            subTitle: "识别卡号失败，请联系管理员",
            background: f,
          },
          ["" + c]: {
            title: "无效刷卡",
            subTitle: "设备未绑定学校，无法使用",
            background: f,
          },
        },
        ["" + l]: {
          ["" + i]: {
            title: "刷卡解锁失败",
            subTitle: "一体机断网，请尝试其他解锁方式",
            background: h,
          },
          ["" + a]: {
            title: "刷卡解锁失败",
            subTitle: "非本校老师不支持解锁设备",
            background: p,
          },
          ["" + r]: {
            title: "刷卡解锁失败",
            subTitle: "识别卡号失败，请联系管理员",
            background: f,
          },
          ["" + c]: {},
        },
        ["" + u]: {
          ["" + i]: {
            title: "无效刷卡",
            subTitle: "一体机断网，请尝试其他解锁方式",
            background: h,
          },
          ["" + a]: {
            title: "无效刷卡",
            subTitle: "非本校老师",
            background: p,
          },
          ["" + r]: {
            title: "无效刷卡",
            subTitle: "识别卡号失败，请联系管理员",
            background: f,
          },
          ["" + c]: {},
        },
      };
    const w = new (class {
      constructor() {}
      onMessage(e) {
        if (e.url === o && e.data) {
          const {
              authStatus: t,
              localStatus: n,
              code: o,
              cardId: i,
              userName: r,
              message: a,
            } = e.data,
            c = "NFC_AUTHRESULT" + o;
          let h = "",
            f = "",
            p = "";
          if (t) {
            switch (n) {
              case l:
                f = "刷卡解锁成功";
                break;
              case u:
                f = "设备已解锁";
            }
            (p = r + "：" + i), (h = d);
          } else {
            const e = g["" + n]["" + o];
            (f = e.title), (p = e.subTitle), (h = e.background);
          }
          s.checkWindowExist(c)
            ? s.addWaitWindow(c, { background: h, title: f, subTitle: p })
            : s.createWindow({ background: h, title: f, subTitle: p }, c);
        }
      }
    })();
    e.exports = w;
  },
  function (e, t, n) {
    const s = n(18),
      o = n(1),
      i = n(6),
      r = n(3),
      a = n(4),
      c = {
        NETWORK_ERROR: 7001,
        START: 7002,
        PENDING: 7003,
        USER_WORD: 7005,
        FEEDBACK: 7006,
        CLOSE: 7004,
        SERVICE_BROKEN: 1e3,
      };
    const { ip: l, url: u } = o.SeewoVoiceService;
    let d = new (class extends s {
      constructor(e) {
        super(e);
      }
      createConnect() {
        super.create();
      }
      onMessage(e) {
        const t = JSON.parse(e);
        if (Object.values(c).indexOf(t.code) > -1) {
          let e;
          if (
            ((t.code !== c.NETWORK_ERROR && t.code !== c.START) ||
              ((e = r.newOne("voiceInteraction")),
              e.webContents.once("dom-ready", () => {
                a("message", t, "voiceInteraction");
              })),
            t.code === c.CLOSE)
          )
            return void r.close("voiceInteraction");
          a("message", t, "voiceInteraction");
        }
      }
      onDisconnectMessage() {
        a("message", { code: c.SERVICE_BROKEN }, "voiceInteraction");
      }
    })();
    i.register(["SeewoProxyHTTP"], !0, (e) => {
      let t = `${l}:${e.SeewoProxyHTTP}${u}`;
      d.setHost(t);
    }),
      (e.exports = d);
  },
  function (e, t, n) {
    const s = n(18),
      o = n(1),
      i = n(6),
      r = n(4),
      a = 1854,
      c = 1853;
    const { ip: l, url: u } = o.processAcceleration;
    let d = new (class extends s {
      constructor(e) {
        super(e);
      }
      createConnect() {
        super.create();
      }
      onMessage(e) {
        let t = {};
        try {
          t = "STRING" === (typeof e).toUpperCase() ? JSON.parse(e) : e;
        } catch (e) {}
        switch (t.messageType) {
          case a:
            r("processData", t.data, "assistant");
            break;
          case c:
            r("killProcess", t.data, "assistant");
            break;
          default:
            return;
        }
      }
      onLinkOk() {
        r("connect", null, "assistant");
      }
      onDisconnectMessage() {
        r("disconnect", null, "assistant");
      }
    })();
    i.register(["SeewoProxyHTTP"], !0, (e) => {
      let t = `${l}:${e.SeewoProxyHTTP}${u}`;
      d.setHost(t);
    }),
      (e.exports = d);
  },
  function (e, t, n) {
    const s = n(18),
      o = n(1),
      i = n(6),
      r = n(2),
      a = n(132),
      c = n(100),
      l = "/wisdomPlatform/linkState",
      u = "/wisdomPlatform/actionNotify";
    const { ip: d, url: h } = o.wisdomPlatformWebsocket;
    let f = new (class extends s {
      constructor(e) {
        super(e);
      }
      createConnect() {
        super.create();
      }
      onMessage(e) {
        const t = JSON.parse(e);
        t.url === l &&
          (r.share(t.url, t.data, "assistant"),
          t.data.state && c("Intergrated_Podium_Link_Count", {})),
          t.url === u &&
            a.showWindow({
              type: "PODIUM",
              longNotify: !0,
              text: t.data.description,
            });
      }
    })();
    i.register(["SeewoProxyHTTP"], !0, (e) => {
      let t = `${d}:${e.SeewoProxyHTTP}${h}`;
      f.setHost(t);
    }),
      (e.exports = f);
  },
  function (e, t, n) {
    const s = n(18),
      o = n(1),
      i = n(6),
      r = n(2),
      a = n(57),
      c = "/lightAudio/device",
      l = "/lightAudio/newPairableDevices",
      u = "/mic/batteryLow";
    const { ip: d, url: h } = o.audioWebsocket;
    let f = new (class extends s {
      constructor(e) {
        super(e);
      }
      createConnect() {
        super.create();
      }
      onMessage(e) {
        const t = JSON.parse(e);
        if (
          (t.url === c && r.share("AUDIO_LINKED_DEVICE", t.data, "assistant"),
          t.url === l &&
            r.share("AUDIO_WAITING_DEVICE_LIST", t.data, "assistant"),
          t.url === u)
        ) {
          let e = "voice_microphone" + t.data.productType;
          a.createWindow(
            {
              type: "voice_microphone",
              state: 2,
              model: t.data.productType,
              title: "电量不足",
              subTitle: "电量不足20%，请及时充电",
            },
            e
          );
        }
      }
    })();
    i.register(["SeewoProxyHTTP"], !0, (e) => {
      let t = `${d}:${e.SeewoProxyHTTP}${h}`;
      f.setHost(t);
    }),
      (e.exports = f);
  },
  function (e, t, n) {
    const s = n(18),
      o = n(1),
      i = n(6),
      r = n(2),
      a = n(3),
      c = "/shouting/notice";
    const { ip: l, url: u } = o.webrtcWebsocket;
    let d = new (class extends s {
      constructor(e) {
        super(e), (this.shoutList = []);
      }
      onMessage(e) {
        const t = JSON.parse(e);
        t.url === c &&
          (t.data.shouting
            ? this.shoutList.find((e) => e.id === t.data.id) ||
              this.shoutList.push(t.data)
            : (this.shoutList = this.shoutList.filter(
                (e) => e.id !== t.data.id
              )),
          !a.checkWindowExist("shoutInteraction") && this.shoutList.length > 0
            ? a.newOne("shoutInteraction")
            : 0 === this.shoutList.length && a.close("shoutInteraction"),
          r.share(
            "shoutList",
            this.shoutList.map((e) => e.name)
          ));
      }
    })();
    i.register(["SeewoProxyHTTP"], !0, (e) => {
      let t = `${l}:${e.SeewoProxyHTTP}${u}`;
      d.setHost(t);
    }),
      (e.exports = d);
  },
]);
