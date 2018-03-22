title: "V2Ray 基于 Nginx 的 VMESS+WS+TLS 一键安装脚本 （Use Path）"
date: 2018-02-24 11:56:00 +0800
update: 2018-02-24 11:56:00 +0800
author: me
cover: "https://i.loli.net/2018/03/22/5ab377493d4be.jpg"
tags:
    - V2Ray
    - Shell
    - 脚本
preview: V2Ray是一个优秀的开源网络代理工具，可以帮助你畅爽体验互联网，目前已经全平台支持Windows、Mac、Android、IOS、Linux等操作系统的使用。

---

* V2Ray是一个优秀的开源网络代理工具，可以帮助你畅爽体验互联网，目前已经全平台支持Windows、Mac、Android、IOS、Linux等操作系统的使用。
* 本脚本的另一个分支版本（Use Host）地址： https://github.com/dylanbai8/V2Ray_ws-tls_Website_onekey 请根据需求进行选择， 感谢作者 dylanbai8 的改进与维护
* 本脚本为一键完全配置脚本，在所有流程正常运行完毕后，直接按照输出结果设置客户端即可使用
* 已安装的用户，当出现无法连接的情况时，请用户根据该文档更新 V2ray core 
* 请注意：我们依然强烈建议你全方面的了解整个程序的工作流程及原理

## 目前支持 Centos7 + / Debian 8+ / Ubuntu 16.04+ 
## 如果你选择使用 V2ray，强烈建议你关闭并删除所有的 shadowsocksR 服务端，仅使用标准的 V2ray 三件套（原因请查看 Wiki ）
* 本脚本默认安装最新版本的V2ray core
* 本脚本的第一批用户安装的内核为 V2ray core 3.6 版本，请该内核版本的用户，根据下文及时更新内核版本。
* V2ray core 目前最新版本为 3.13
* 由于新版本增加了 web 伪装，因此强烈建议使用默认的443端口作为连接端口
* **感谢作者 dunizb 的自用 开源 html 计算器源码 项目地址 https://github.com/dunizb/sCalc**
## V2ray core 更新方式
执行：
`bash <(curl -L -s https://install.direct/go.sh)`

（ 来源参考 ：[V2ray官方说明](https://www.v2ray.com/chapter_00/install.html)）
* 如果为最新版本，会输出提示并停止安装。否则会自动更新
* 未来会将相关内容集成到本脚本中并进行交互式操作更新

## 注意事项
* 推荐在纯净环境下使用本脚本，如果你是新手，请不要使用Centos系统。
* 在尝试本脚本确实可用之前，请不要将本程序应用于生产环境中。
* 该程序依赖 Nginx 实现相关功能，请使用 [LNMP](https://lnmp.org) 或其他类似携带 Nginx 脚本安装过 Nginx 的用户特别留意，使用本脚本可能会导致无法预知的错误（未测试，若存在，后续版本可能会处理本问题）。
* V2Ray 的部分功能依赖于系统时间，请确保您使用V2RAY程序的系统 UTC 时间误差在三分钟之内，时区无关。
* 本 bash 依赖于 [V2ray 官方安装脚本](https://install.direct/go.sh) 及 [acme.sh](https://github.com/Neilpang/acme.sh) 工作。
* Centos 系统用户请预先在防火墙中放行程序相关端口（默认：80，443）
## 准备工作
* 准备一个域名，并将A记录添加好。
* [V2ray官方说明](https://www.v2ray.com/)，了解 TLS WebSocket 及 V2ray 相关信息
* 安装好 git
## 安装方式
```
git clone https://github.com/wulabing/V2Ray_ws-tls_bash_onekey.git temp && cd temp && bash install.sh | tee v2ray_ins.log
```
## 启动方式

启动 V2ray：`systemctl start v2ray`

启动 Nginx：`systemctl start nginx`

（其他的应该不用我多说了吧 嘿嘿嘿）


### 测试说明
* V3.0 版本仅在 Debian 8 上进行过测试，目前需要收集更多的测试数据
### 问题反馈
* 请携带 v2ray_ins.log 文件内容进行反馈
