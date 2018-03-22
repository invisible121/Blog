title: "BBR+BBR魔改+Lotsever(锐速)一键脚本 for Centos/Debian/Ubuntu"
date: 2018-02-24 11:52:00 +0800
update: 2018-02-24 11:52:00 +0800
author: me
cover: "https://i.loli.net/2018/03/22/5ab382b980afc.jpg"
tags:
    - Google BBR
    - 单边加速
    - LotServer
    - Shell
    - 脚本
preview: 对于出口带宽，我们常常采用BBR，锐速等TCP加速软件来争夺带宽提高自己的速度。但是原版的BBR并没有太多侵略性，在这个人人都用TCP加速的大环境下，BBR的加速功效就略显不足了。loc的大佬专门改进了下这个BBR，使BBR具有了侵略性。

---

## 介绍 ##
**对于出口带宽，我们常常采用BBR，锐速等TCP加速软件来争夺带宽提高自己的速度。**

但是原版的BBR并没有太多**侵略性**，在这个人人都用TCP加速的大环境下，BBR的加速功效就略显不足了。loc的大佬专门改进了下这个BBR，使BBR具有了侵略性。

最近我也连续购买了几个服务器，每次都手动搭建，感觉到十分麻烦，干脆写个脚本吧。由于是第一次接触shell脚本这一方面的内容，写起来感觉十分吃力，且与一般的高级语言语法~~差别有些大~~。所有有些不足的地方欢迎向原作者反映帮助改善。

同时也加入了**锐速一键换内核，锐速一键安装，自动根据vps情况优化锐速参数，一键优化内核参数。**

也可以在锐速，BBR，BBR魔改版中自由切换。
## 安装 ##
**支持系统：**Centos 6+/Debian 7+/Ubuntu 14+，BBR魔改版不支持Debian 7。
**注意：**该脚本在Vultr各个系统均测试通过，如果期间有出现任何问题，可向原作者反映帮助改善。
运行以下命令：
```
wget -N --no-check-certificate "https://raw.githubusercontent.com/chiakge/Linux-NetSpeed/master/tcp.sh" && chmod +x tcp.sh && ./tcp.sh
```
## 说明 ##
使用脚本后会出现如下选项：
![](https://i.loli.net/2018/02/24/5a90e088ea0d9.png)
根据自己需求操作，重启后再使用`./tcp.sh`命令接着操作。
脚本会自动检测安装的情况，请注意脚本菜单下的**状态检测**即可。
如果在删除内核环节出现这样一张图
![](https://i.loli.net/2018/02/24/5a90e10224ca4.png)
注意选择`NO`，然后根据提示重启系统。