title: "V2Ray.fun - V2Ray多功能管理脚本，与世界分享自由"
date: 2017-07-25 18:32:00 +0800
update: 2017-07-25 18:32:00 +0800
author: me
cover: "https://i.loli.net/2018/03/22/5ab377493d4be.jpg"
tags:
    - V2Ray
    - Shell
    - 脚本
preview: 新写的一个 V2ray 的管理面板，方便管理自己的 V2ray 服务器，让小白也能轻松享受 V2ray 带来的乐趣。特别鸣谢 V2ray 的开发组，为我们带了一款非常棒的代理软件。虽然现在客户端还不是很成熟，但是相信越来来越多的开发者会加入进来，让 V2ray 成为新的代理工具的标杆。

---

## 简介 ##
新写的一个 V2ray 的管理面板，方便管理自己的 V2ray 服务器，让小白也能轻松享受 V2ray 带来的乐趣。特别鸣谢 V2ray 的开发组，为我们带了一款非常棒的代理软件。虽然现在客户端还不是很成熟，但是相信越来来越多的开发者会加入进来，让 V2ray 成为新的代理工具的标杆。

## 功能 ##

 - 一键 启动 / 停止 / 重启 V2ray 服务端
 - 自动随机生成 UUID
 - 自助修改端口
 - 快速查看服务器连接信息
 - 一键下载客户端配置文件（仅限 Xshell）
 - 自由更改传输配置：
  - 常规TCP
  - HTTP头部伪装
  - WebSocket流量
  - 常规mKCP流量
  - mKCP 伪装 FaceTime通话流量
  - mKCP 伪装 BT下载流量
  - mKCP 伪装 微信视频通话流量

**WebSocket不包括Nginx分流，请自行安装Nginx来分流。**

## 截图

![1](https://github.com/Moexin/v2ray.fun/raw/master/1.png)

![2](https://github.com/Moexin/v2ray.fun/raw/master/2.png)

![3](https://github.com/Moexin/v2ray.fun/raw/master/3.png)

![4](https://github.com/Moexin/v2ray.fun/raw/master/4.png)

## 系统要求

- Debian 7 
- **Debian 8（推荐）**
- Ubuntu 14 
- Ubuntu 16 
- CentOS 7

**不支持Centos 6**

## 软件要求

请使用**Xshell**连接服务器，以获得完美的中文支持以及配置文件下载功能。

## 安装命令

    wget -N --no-check-certificate https://raw.githubusercontent.com/Moexin/v2ray.fun/master/install.sh && bash install.sh

## 升级命令

    wget -N --no-check-certificate https://raw.githubusercontent.com/Moexin/v2ray.fun/master/upgrade.sh && bash upgrade.sh && rm -rf upgrade.sh

## 卸载命令

    wget -N --no-check-certificate https://raw.githubusercontent.com/Moexin/v2ray.fun/master/uninstall.sh && bash uninstall.sh

## 特别说明

有任何问题或者新功能想法欢迎提交 Issue，我会抽空回答。

本程序遵循 GPL v3协议发布，请Fork保留源项目地址，谢谢！

## 感谢

V2ray : [https://v2ray.com][1]
v2ray.fun的原作者：https://github.com/FunctionClub/v2ray.fun

  [1]: https://v2ray.com