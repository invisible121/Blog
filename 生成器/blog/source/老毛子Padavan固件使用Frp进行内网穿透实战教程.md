title: "老毛子Padavan固件使用Frp进行内网穿透实战教程"
date: 2018-04-11 22:49:00 +0800
update: 2018-04-11 22:49:00 +0800
author: me
cover: "https://i.loli.net/2018/04/11/5ace14230a5dd.png"
tags:
    - 内网穿透
preview: Frp 是一个可用于内网穿透的高性能的反向代理应用，支持 TCP, UDP, HTTP, HTTPS 协议。

---

## 缘起
一直在用老毛子Padavan固件，然而近期有一个需要在外网访问内网某资源的需求，然后看到老毛子固件集成了Ngrok，然后使用小宝的一键安装搞半天还是没成，一怒之下去各种找替代Ngrok的方案。一不小心在GitHub上找到一个小清新，那就是Frp(https://github.com/fatedier/frp)作者也是因为受不了Ngrok，然后自己整了这个方案。
## Frp方案优势

 1. 作者已经编译了各平台的二进制包，无需自己编译。
 2. 配置简单，只有一个主配置文件，并且服务端配好后其实可以不用再上去配了。
 3. 不占用服务端80端口，服务器还是可以起Nginx对外服务的。
 4. 支持转发TCP，HTTP，支持SSH。

不夸了，各位自己看作者的帮助就好，中文帮助在此：https://github.com/fatedier/frp/blob/master/README_zh.md
### 服务端：
最新版本下载地址：https://github.com/fatedier/frp/releases
我们以v0.16.1版本在一台装有Debian8 x64系统的VPS为例。
 
首先拉取Frp v0.16.1版本的压缩包
``` lsl
wget https://github.com/fatedier/frp/releases/download/v0.16.1/frp_0.16.1_linux_amd64.tar.gz
```
然后解压
``` lsl
tar zxvf frp_0.16.1_linux_amd64.tar.gz
```
修改服务端配置文件
``` lsl
vi /root/frp_0.16.1_linux_amd64/frps.ini
```
按下i进入编辑模式，清空所有内容，键入以下内容（这是我自用的配置文件，可参考注释进行自定义。）
``` ini
[common]
bind_port = 7000
#Web服务监听端口
vhost_http_port = 80
vhost_https_port = 443
#与客户端通讯的密匙
privilege_token = Moexin
#连接池上限
max_pool_count = 50
max_ports_per_client = 0
#超时时间
authentication_timeout = 900
#TCP多路复用
tcp_mux = true
#仪表盘
dashboard_port = 10086
dashboard_user = admin
dashboard_pwd = admin
#底层通信可选KCP协议
#kcp_bind_port = 7000
#bind_udp_port = 7001
#端口白名单
#privilege_allow_ports = 22,80,443,50000-60000
#错误日志(可选)
#log_file = ./frps.log
#log_level = info
#log_max_days = 3
```
进入Frp工作目录
``` lsl
cd /root/frp_0.16.1_linux_amd64
```
启动Frp
``` jboss-cli
./frps -c ./frps.ini&
```
建议将Frp服务端程序加入开机自启动，这样就不用每次重启后都需要手动打开Frp服务端
``` maxima
vi /etc/rc.local
```
在exit 0之前插入即可
``` jboss-cli
cd /root/frp_0.16.1_linux_amd64 && ./frps -c ./frps.ini&
```
### 客户端：
首先点一下更新按钮更新客户端文件
然后把图中蓝色部分替换成以下代码
![把图中蓝色部分替换成以下代码](https://i.loli.net/2018/04/11/5ace117d78878.png)
``` ini
[common]
server_addr = Frp服务端IP（服务器IP，例：144.172.85.185）
server_port = 7000
privilege_token = Moexin
tcp_mux = true
[ssh]
type = tcp
local_port = 22
remote_port = 6000
use_encryption = true
use_compression = true
[web]
privilege_mode = true
remote_port = 6000
type = http
local_ip = 内网IP（例：192.168.123.1）
local_port = 888
use_gzip = true
#subdomain = test
custom_domains = 公网访问的域名(例：98k.li)
#host_header_rewrite = 
#log_file = /dev/null
#log_level = info
#log_max_days = 3
```
最后开启`启用 frp 内网穿透` `启用 frpc 客户端`并应用本页面设置即可完成内网穿透，尽情享用吧~