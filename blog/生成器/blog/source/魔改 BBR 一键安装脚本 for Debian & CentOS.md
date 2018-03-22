title: "魔改 BBR 一键安装脚本 for Debian & CentOS"
date: 2017-11-18 15:46:00 +0800
update: 2017-11-18 15:46:00 +0800
author: me
cover: "https://i.loli.net/2017/10/14/59e1ed69aa17a.jpg"
tags:
    - Google BBR
    - 单边加速
preview: BBR 当然是家喻户晓了，是出自谷歌员工之手的应用于 Linux 内核中的拥塞控制技术。为了加速国内与目标服务器间的网络，让 BBR 发挥出更大（暴力）的实力，魔改就此诞生。

---

魔改 BBR 一键安装脚本。
tcp_nanqinlang.sh
适用于 Debian 7+ (32/64 bit) 或 CentOS 6/7 (64 bit)
仅适用于 `KVM` 

BBR 当然是家喻户晓了，是出自谷歌员工之手的应用于 Linux 内核中的拥塞控制技术。
为了加速国内与目标服务器间的网络，让 BBR 发挥出更大（暴力）的实力，魔改就此诞生。
## 一键脚本 ##
这个是 `新手简装` 版本，只需 `运行脚本第一项+重启+运行脚本第二项`。一般用户只需使用此版本，并建议使用该版本。此版本不需要编译的过程，直接安装 v4.10.2 内核。
```
# Debian 7+
# fool
wget https://github.com/nanqinlang-tcp/tcp_nanqinlang/releases/download/3.4.2/tcp_nanqinlang-fool-1.2.2.sh
bash tcp_nanqinlang-fool-1.2.2.sh
```
这个是 `进阶` 版本。提供自定义内核版本功能，只建议有`用户自己指定安装的内核的版本`需求的用户使用，例如你想安装 v4.12.10 版本的内核，就需要使用这个版本。
```
# Debian 7+
# pro
wget https://github.com/nanqinlang-tcp/tcp_nanqinlang/releases/download/3.4.2/tcp_nanqinlang-pro-3.4.2.sh
bash tcp_nanqinlang-pro-3.4.2.sh
```
这个是 `CentOS` 平台的版本，尚处于测试版，请勿在重要环境使用。
```
# CentOS 6/7
# only 64 bit
# devel
wget https://raw.githubusercontent.com/nanqinlang-tcp/tcp_nanqinlang/master/General/CentOS/bash/tcp_nanqinlang-1.3.2.sh
bash tcp_nanqinlang-1.3.2.sh
```
项目地址：https://github.com/nanqinlang-tcp/tcp_nanqinlang
## 使用简介 ##
出现四个选项供以选择
![][1]
## 安装内核 ##
用于安装内核

    必须使用此命令安装内核并重启！
    必须使用此命令安装内核并重启！
    必须使用此命令安装内核并重启！

别踏马再不换内核就跑来问我怎么报错行不行啊老哥们。。。

安装内核时，请注意区别：
### Debian

 - 下载内核安装包至 /home/tcp_nanqinlang
 - 系统中只会留下新安装的内核，原有的所有内核都会被移除
 - 安装的内核版本由你指定，若不确定应输入哪个版本号，直接回车即可
 - 指定安装内核版本为 v4.13.x 时，会使用新版本内核适配的源码
 - 此命令完成后，系统中会装有 linux-image-版本号-lowlatency linux-headers-版本号-all linux-headers-版本号-lowlatency 三个内核
 - 此命令执行完毕后，请确认上述三个内核是否已安装完毕

### CentOS
CentOS 的脚本，套路和上面 Debian 的大致相当，主要在于以下区别：

 - 不会询问安装版本号，直接安装内核版本 v4.12.10
 - 内核安装完成后，系统中会装有 linux-4.12.10 linux-devel-4.12.10 linux-headers-4.12.10 三个内核
 - 内核安装完成后，系统中依旧会留有旧版本的 linux-x.xx.xx-ml 内核，这些残留的内核，会在执行第二个选项 “安装并启用算法” 后被移除

### 内核安装示例
![](https://i.loli.net/2017/11/18/5a0fdf8c021f0.png)
输入你想安装的内核版本
![](https://i.loli.net/2017/11/18/5a0fdfa07bd55.png)
内核安装完成
确认内核更换完成后，重启你的 `vps`

重启开机后，`再次运行脚本，选择第二项: 安装并开启算法`

### 安装并开启算法
用于编译并启用魔改 BBR 算法

运行这个命令后，会提示选择魔改方案：温和模式（gentle mode） 或 暴力模式（violent mode）
温和模式采用较小的数值，更注重 TCP 的公平友好；暴力模式则采用较大数值，增强竞争性
![](https://i.loli.net/2017/11/18/5a0fe024a6ded.png)
选择魔改方案
![](https://i.loli.net/2017/11/18/5a0fe024c0273.png)
启用魔改算法成功

### 检查运行状态
用于检查 tcp_nanqinlang 是否已被 加载 (installed) 和 启用 (running)
### 卸载
不会删除已安装的内核，仅移除 sysctl.conf 的 tcp_nanqinlang 设置项
然后重启机器后，算法才会停止运行
## 魔改简要 ##
# 以 暴力模式 为例

    pacing = 6 / 3
    BBR_UNIT = * 6 / 3
    rtt_sec = 5
    rtt_max = 40
    rtt_ms = 100
    cycle_len + 7

## 注意事项 ##

 1. 运行脚本时，请使用 bash 命令
 2. 一定要在执行完成 安装内核 并重启 vps 后，才能执行 安装并启用算法
 3. 卸载命令不会改动您的内核
 4. 本文可能过时失效，若需更新，请留言


  [1]: https://i.loli.net/2017/11/18/5a0fde37cc914.png