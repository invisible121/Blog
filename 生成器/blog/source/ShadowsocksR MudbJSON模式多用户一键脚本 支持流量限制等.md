title: "ShadowsocksR MudbJSON模式多用户一键脚本 支持流量限制等"
date: 2017-11-07 13:43:00 +0800
update: 2017-11-07 13:43:00 +0800
author: me
cover: "https://i.loli.net/2018/03/22/5ab3765fd17b5.png"
tags:
    - ShadowsoksR
    - Shell
    - 脚本
preview: 很多人购买VPS后搭建ShadowsocksR服务端，只是几个人分享使用（比如合租），想要限制使用流量，但是又不想搭建网站面板来管理(数据库版多用户)，那么在服务器少的情况，可以使用 ShadowsocksR多用户的 mudbjson模式来建立本地数据库（就是数据记录在JSON文件中），同样可以实现简单的用户管理（限速 限流量），当然这个功能仅对当前服务器有效，不能多个服务器互联！

---

## 系统要求 ##
**CentOS 6+ / Debian 6+ / Ubuntu 14.04 +**

推荐 **Debian 7 x64**，这个是我一直使用的系统，我的脚本在这个系统上面出错率最低。并且最容易安装锐速（锐速不支持OpenVZ）

CentOS 7 自带防火墙问题(firewalld)自行解决，其他版本没有做测试。


<!--more-->


## 脚本特点 ##
所有步骤都可以通过 Shell 脚本中文交互 操作。

 - 支持 限制 用户速度
 - 支持 限制 用户设备数
 - 支持 限制 用户总流量
 - 支持 定时 流量清零
 - 支持 显示 当前连接IP
 - 支持 显示 SS/SSR连接+二维码
 - 支持 一键安装 BBR
 - 支持 一键安装 锐速
 - 支持 一键安装 LotServer
 - 支持 一键封禁 垃圾邮件(SMAP)/BT/PT

## 安装步骤 ##
**简单的来说，如果你什么都不懂，那么你直接一路回车就可以了！**

本脚本需要Linux root账户权限才能正常安装运行，所以**如果不是 root账号，请先切换为root，如果是 root账号，那么请跳过！**

    sudo su

输入上面代码回车后会提示你输入当前用户的密码，输入并回车后，没有报错就继续下面的步骤安装ShadowsocksR。

    wget -N --no-check-certificate https://softs.fun/Bash/ssrmu.sh && chmod +x ssrmu.sh && bash ssrmu.sh

**备用下载地址（上面的链接无法下载，就用这个）：**

    wget -N --no-check-certificate https://raw.githubusercontent.com/ToyoDAdoubi/doubi/master/ssrmu.sh && chmod +x ssrmu.sh && bash ssrmu.sh

下载运行后会提示你输入数字来选择要做什么。

输入 **1** ，就会开始安装ShadowsocksR服务端，并且会提示你输入Shadowsocks的 **端口/密码/加密方式/ 协议/混淆（混淆和协议是通过输入数字选择的）** 等参数来添加第一个用户。

> 注意：用户名不支持中文，如果输入中文会一直保存下去！

## 使用说明 ##
运行脚本

    bash ssrmu.sh
     
    # 还有一个 运行参数，是用于所有用户流量清零的
    bash ssrmu.sh clearall
    # 不过不需要管这个，可以通过脚本自动化的设置 crontab 定时运行脚本

输入对应的数字来执行相应的命令。

     ShadowsocksR MuJSON一键管理脚本 [vX.X.X]
      ---- Toyo | doub.io/ss-jc60 ----
     
      1. 安装 ShadowsocksR
      2. 更新 ShadowsocksR
      3. 卸载 ShadowsocksR
      4. 安装 libsodium(chacha20)
    ————————————
      5. 查看 账号信息
      6. 显示 连接信息
      7. 设置 用户配置
      8. 手动 修改配置
      9. 清零 已用流量
    ————————————
     10. 启动 ShadowsocksR
     11. 停止 ShadowsocksR
     12. 重启 ShadowsocksR
     13. 查看 ShadowsocksR 日志
    ————————————
     14. 其他功能
     15. 升级脚本
     
     当前状态: 已安装 并 已启动
     
    请输入数字 [1-15]：

> 注意：添加/删除/修改 用户配置后，无需重启ShadowsocksR服务端，ShadowsocksR服务端会定时读取数据库文件内的信息，不过修改 用户配置后，可能要等个十几秒才能应用最新的配置（因为ShadowsocksR不是实时读取数据库的，所以有间隔时间）。

## 文件位置 ##
**安装目录：**`/usr/local/shadowsocksr`

**配置文件：**`/usr/local/shadowsocksr/user-config.json`

**数据文件：**`/usr/local/shadowsocksr/mudb.json`

> **注意：**ShadowsocksR服务端**不会实时的把流量数据写入 数据库文件**，所以脚本**读取流量信息也不是实时**的！

## 其他说明 ##
ShadowsocksR 安装后，自动设置为 系统服务，所以支持使用服务来启动/停止等操作，同时支持开机启动。

 - **启动 ShadowsocksR：**`/etc/init.d/ssrmu start`
 - **停止 ShadowsocksR：**`/etc/init.d/ssrmu stop`
 - **重启 ShadowsocksR：**`/etc/init.d/ssrmu restart`
 - **查看 ShadowsocksR状态：**`/etc/init.d/ssrmu status`

**ShadowsocksR 默认支持UDP转发，服务端无需任何设置。**

本脚本已经集成了 安装/卸载 锐速(ServerSpeeder)/Lotserver，但是是否支持请查看 [Linux支持内核列表][1] 。（锐速、LotServer不支持OpenVZ）

**注意：本脚本中的 显示链接信息中的** 获取IP归属地功能使用的是 [IPIP.NET 的免费API][2]接口，因为限速所以每秒只能检测一次，同时 [IPIP.NET 的免费API][3]接口并不会保证稳定性，可能什么时候就突然暂时失效了，这是本人不可控的，有条件可以自建API接口。
## ShadowsocksR目前支持的协议和混淆： ##
**协议（Protocol）：**origin，auth_sha1_v4，**auth_aes128_md5**，**auth_aes128_sha1**，**auth_chain_a**，**auth_chain_b**

**混淆（Obfs）：**plain，http_simple，http_post，random_head，**tls1.2_ticket_auth**，**tls1.2_ticket_fastauth(这个是客户端用的，而服务端需要选择tls1.2_ticket_auth)**

origin 和 plain 是原版，加粗的是推荐使用的。

如果你想要使用 **tls1.2_ticket_fastauth** 混淆插件，那么服务端选择 **tls1.2_ticket_auth**，客户端选择 **tls1.2_ticket_fastauth** 即可。
如果服务端 设置混淆参数为：**tls1.2_ticket_auth_compatible (兼容原版)**
那么客户端 可使用的混淆为：**plain / tls1.2_ticket_auth / tls1.2_ticket_fastauth**
**tls1.2_ticket_auth** 与 **tls1.2_ticket_fastauth** 的区别为，后者不会等待服务器回应，所以不会增加延迟。适合于，因为混淆插件增加延迟的原因不得不选择原版混淆 **plain**，但是又因为QOS等因素而处于延迟与干扰/限速等之间抉择的时候，可以选择 **tls1.2_ticket_fastauth** 客户端混淆插件！

## 升级脚本 ##
升级脚本只需要重新下载脚本文件就可以了，会自动覆盖原文件。
## 定时重启 ##
一些人可能需要定时重启ShadowsocksR服务端来保证稳定性等，所以这里用 crontab 定时。

    crontab -e
    # 首先打开定时设置，然后会出现文本编辑，按 I键 进入编辑模式，根据需求添加下下面的代码到 这个文本编辑框内！！
    ------------
    # 如果提示命令不存在，那么安装crontab：
    # CentOS系统：
    yum update
    yum install -y crond
    # Debian/Ubuntu系统：
    apt-get update
    apt-get install -y cron

安装并打开 crontab 后，我们根据需求添加下面的代码，添加后我们按 `ESC键` 退出编辑模式，然后输入 `:wq` 保存并退出。

    # 添加定时重启任务
    # 是添加到 crontab -e 文本编辑框内，而不是让你执行！
    # 下面代码前面的 * * * * * 分别对应：分钟 小时 日 月 星期
     
    10 2 * * * /etc/init.d/ssr restart
    # 这个代表 每天2点10分重启一次 ShadowsocksR
     
    10 2 */2 * * /etc/init.d/ssr restart
    # 这个代表 每隔2天的2点10分重启一次 ShadowsocksR
     
    10 */4 * * * /etc/init.d/ssr restart
    # 这个代表 每隔4小时的第10分重启一次 ShadowsocksR

> 本文删减改自：[逗比根据地][4]


  [1]: https://www.91yun.co/wp-content/plugins/91yun-serverspeeder/systemlist.html
  [2]: http://freeapi.ipip.net/8.8.8.8
  [3]: http://freeapi.ipip.net/8.8.8.8
  [4]: https://doub.io/ss-jc60/