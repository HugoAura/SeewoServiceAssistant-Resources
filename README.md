## SeewoServiceAssistant-Resources

### ✨ 概览

这个仓库存储了 SeewoServiceAssistant 的资源文件。其中, `app.asar` 已解包。

所有 HTML 和 JavaScript 代码均已使用 Prettier 格式化。

> [!TIP]
> Branch 名称 = 资源文件对应版本号。

### 🪜 项目目录结构

```tree
|--- /
  |--- src/ # SeewoServiceAssistant 资源文件
    |--- addons/ # node-ffi 原生插件
    |--- app.asar/ # 解包后的 app.asar
    |--- assets/ # 不属于 ASAR 包中的资源文件
    |___ autoConfiguration.json
  |___ README.md
```

### 😰 我是谁? 我在哪?

[希沃集控](https://help.seewo.com/hugo/) 是由希沃开发的针对 [希沃交互智能白板](https://www.seewo.com/product/detail/qjk) 集中控制解决方案。方便学校信息管理员通过集控平台, 统一管控全校希沃设备, 而无需手动运维。

长期以来, 希沃集控一直因 [远程设备巡视](https://help.seewo.com/hugo/R5CnrAFhzI)、[冰点还原](https://help.seewo.com/hugo/LzN5hk5m47)、[AI 画面监测](https://help.seewo.com/hugo/1xKsmw36ER) 和 屏幕锁 等管理功能, 受到诸多电教委员诟病。

[希沃管家](https://e.seewo.com/download/file?code=SeewoServiceSetup&&version=) 是安装在电子白板上的希沃集控被控端。其主要由以下组件组成:

- `ProxyLayerService`: 希沃管家服务间通信代理层。

- `SeewoAbility`: 希沃业务服务, 主要提供免二次登录等服务。

- `SeewoCore`: 希沃基础服务, 用于集控命令接收与执行, 同时也作为希沃服务助手、希沃业务服务的保活 Daemon。安装时会注册为 Windows 服务。

- `SeewoDriverService`: 希沃驱动服务

- `SeewoFreeze`: 希沃冰点管理

- `SeewoHugoLauncher`: 希沃管家入口点

- `SeewoServiceAssistant` (本仓库): 希沃服务助手 (希沃管家 UI)。正常情况下打开 `SeewoHugoLauncher` 之后会被唤起的应用。提供可视化冰点管理、学校手动绑定、设备清理等服务 (执行逻辑由 `SeewoCore` 实现)。桌面右下角悬浮窗也由其提供。

希沃服务助手本质上是一个 [Electron](https://electronjs.org) 应用。本仓库存储了希沃服务助手的资源文件夹 (`resources/`) 下的文件。

### ⚖️ 许可证

> [!CAUTION]
> 未知。
