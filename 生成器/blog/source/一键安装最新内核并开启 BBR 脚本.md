title: "一键安装最新内核并开启 BBR 脚本"
date: 2017-05-20 18:26:00 +0800
update: 2017-05-20 18:26:00 +0800
author: me
cover: "https://i.loli.net/2017/10/14/59e1ed69aa17a.jpg"
tags:
    - Google BBR
    - 单边加速
preview: 最近，Google 开源了其 TCP BBR 拥塞控制算法，并提交到了 Linux 内核，最新的 4.11 版内核已经用上了该算法。根据以往的传统，Google 总是先在自家的生产环境上线运用后，才会将代码开源，此次也不例外。根据实地测试，在部署了最新版内核并开启了 TCP BBR 的机器上，网速甚至可以提升好几个数量级。于是我根据目前三大发行版的最新内核，开发了一键安装最新内核并开启 TCP BBR 脚本。

---

最近，Google 开源了其 TCP BBR 拥塞控制算法，并提交到了 Linux 内核，最新的 4.11 版内核已经用上了该算法。根据以往的传统，Google 总是先在自家的生产环境上线运用后，才会将代码开源，此次也不例外。
根据实地测试，在部署了最新版内核并开启了 TCP BBR 的机器上，网速甚至可以提升好几个数量级。
于是我根据目前三大发行版的最新内核，开发了一键安装最新内核并开启 TCP BBR 脚本。

![](https://i.loli.net/2017/10/14/59e1ed69aa17a.jpg)

## 关于本脚本 ##

1、本脚本已在 Vultr 上的 VPS 全部测试通过。
2、脚本运行完重启发现开不了机的，打开 VPS 后台控制面板的 VNC, 开机卡在 grub 引导, 手动选择内核即可。
3、由于是使用最新版系统内核，最好请勿在生产环境安装，以免产生不可预测之后果。

## 使用方法 ##

**OpenVZ 以外的（ KVM 、 Xen 、 VMware 等）**

    wget --no-check-certificate https://github.com/teddysun/across/raw/master/bbr.sh
    chmod +x bbr.sh
    ./bbr.sh

**CentOS 6 的 KVM**

    wget --no-check-certificate https://github.com/52fancy/GooGle-BBR/raw/master/BBR.sh && sh BBR.sh

**OpenVZ 小鸡**

    wget --no-check-certificate https://raw.githubusercontent.com/mmmwhy/LKL_BBR/master/lkl/install.sh && bash install.sh

安装完成后，脚本会提示需要重启 VPS，重启完成后，进入 VPS，验证一下是否成功安装最新内核并开启 TCP BBR，输入以下命令：

    sysctl net.ipv4.tcp_available_congestion_control

返回值一般为：
net.ipv4.tcp_available_congestion_control = bbr cubic reno

    sysctl net.ipv4.tcp_congestion_control

返回值一般为：
net.ipv4.tcp_congestion_control = bbr

    sysctl net.core.default_qdisc

返回值一般为：
net.core.default_qdisc = fq

    lsmod | grep bbr

返回值有 tcp_bbr 模块即说明bbr已启动。


