title: "30分钟搭建 Typecho 个人博客教程"
date: 2018-03-25 19:34:00 +0800
update: 2018-03-25 19:34:00 +0800
author: me
cover: "https://i.loli.net/2018/03/22/5ab3796db6706.png"
tags:
    - Typecho
preview: 如何在自己的 VPS 上搭建 Typecho 博客。从域名和 VPS 的购买，到最后完成博客搭建发布文章全部包括，零基础教程。

---

## 前言
最近捯饬了个 Typecho 的博客，用惯了 WordPress，顿时被 Typecho 的简洁所吸引。

两者都是动态博客，却是一繁一简，风格截然不同。WordPress 功能丰富，相对的体系也比较庞大；而 Typecho 却是极为精简，同时必要的功能一个不缺，倒也令人眼前一亮。

本文就介绍下如何在自己的 VPS 上搭建 Typecho 博客。从域名和 VPS 的购买，到最后完成博客搭建发布文章全部包括，零基础教程。
## 简介
Typecho 是国内开发者开发的一款开源免费的动态博客程序，可以运行在基于 PHP 环境的各种平台上。

 - 官网：[Typecho Official Site][1]
 - GitHub：[typecho: A PHP Blogging Platform.][2]

相比于同为动态博客并且广为人知的 WordPress 来说，Typecho 的一大特点就是 “精简”。全部文件不足 500KB，但却也实现了完整的主题和插件支持。博客程序很轻量，资源占用也很低，原生支持 Markdown 语法。属于省心并且简洁的博客类型。
# 注册域名
域名推荐在 Namesilo 购买，价格便宜，同时赠送永久免费的隐私保护。

**官网：**[Namesilo][3]

**首先：** 注册账户。注册信息建议如实填写，国家选择中国，并勾选 “Keep my information private” 默认使用隐私保护。

**然后：** 搜索想要注册的域名，进行购买。

设置域名续费规则、注册时长等。在 “Have a Coupon……” 处输入优惠码 okoff 或者 go2think ，点击 “Submit” 应用，优惠一美元。

完成后点击 “CONTINUE” 付款，支持支付宝和 Paypal。
![Namesilo][4]
**详细教程：**[Namesilo 域名购买及使用教程][5]
# 购买 VPS
VPS 我使用的 Vultr，全 SSD 硬盘，按时间计费，后台管理也很方便。打开网站使用邮箱注册账户，并进入 “Billing” 页面充值，支持支付宝和 Paypal。

**官网：**[Vultr][6]

然后点击右上脚的蓝色 “+” 创建 VPS。节点选择东京、洛杉矶、纽约等都可以；系统 CentOS 7x64；套餐按需要选择，最低 $5/mo；其它默认即可。“Deploy Now” 开始创建。
![创建VPS][7]
## 域名解析
进入 Namesilo，“Manage My Domains”，编辑 DNS。
![编辑DNS][8]
一般设置两条记录就够了，即将 hello.com 和 www.hello.com 指向 VPS 的 IP 地址。
![添加记录][9]
## 连接 VPS
点击 “Manage” 查看连接信息：IP 地址，用户名，密码。
![查看链接信息][10]
使用 SSH 工具连接我们的 VPS，Windows 推荐 xshell，Mac 可使用自带的终端。

Xshell 网盘链接：[https://share.weiyun.com/56Pu8If][11]
## Windows
打开XShell。

点击 “文件” —> “新建” —> “连接”，输入 “名称” 和 “主机” （即VPS IP）。
![新建会话][12]
点击 “用户身份验证”，输入用户名（默认root）和密码。确认。
![添加用户身份验证][13]
连接 VPS，接受并保存密匙。
![连接](https://i.loli.net/2018/03/25/5ab77c6f20d7f.jpg)
![接受并保存](https://i.loli.net/2018/03/25/5ab77c75bec84.jpg)
出现 `root@vultr:~#` 即连接成功，可以输入代码了进行操作了。
![连接成功](https://i.loli.net/2018/03/25/5ab77c7a506a5.jpg)
## Mac
打开终端，输入以下代码登录 VPS，其中 root 即用户名，将 ip 更改为 VPS 的 IP 地址，回车。
```bash
ssh root@ip
```
输入 `yes` 确认，粘贴密码，回车。需要提醒的是，密码输入时并不会显示出来，直接复制粘贴，回车即可。出现 `root@vultr:~#` 即连接成功。
![Mac连接成功](https://i.loli.net/2018/03/25/5ab77d75dfbfe.jpg)
# Typecho 搭建
## 环境安装
安装宝塔 Linux 面板，复制安装代码到 Xshell 回车运行。
```bash
yum install -y wget && wget -O install.sh http://download.bt.cn/install/install.sh && sh install.sh
```
中间需要进行 “确认”，输入 Y 回车即可。安装完成会显示登录信息，包括面板地址、用户名和密码。
![BT面板安装成功](https://i.loli.net/2018/03/25/5ab77e624c463.jpg)
打开浏览器进入面板，会提示安装 LNMP。PHP 版本改为 7.1，点击 “一键安装”，等待网站环境安装完成。
![安装套件](https://i.loli.net/2018/03/25/5ab77e9b99871.jpg)
## 创建网站
添加网站，并同时新建数据库。**记录下数据库的用户名** 和密码。
![创建网站](https://i.loli.net/2018/03/25/5ab77ee35d31b.jpg)
网站创建后，进入数据库，查看并记录 **root 密码** 备用。
## 安装 Typecho
进入 [Typecho][14] 官网，下载安装包。建议下载正式版。

打开网站管理页面，进入网站目录，把该目录中的现有文件全部删除。然后把 Typecho 文件压缩包上传到网站目录中并解压，解压后出现 build 文件夹。
![进入网站目录](https://i.loli.net/2018/03/25/5ab77f62beb07.jpg)
把 build 文件夹中的文件全部复制到 hello.com 文件夹中，然后删除 build 文件夹 和 Typecho 压缩包。
![正确使用Typecho 压缩包][15]
浏览器访问 hello.com/install.php，按提示完成 Typecho 配置。
![填写配置](https://i.loli.net/2018/03/25/5ab7803427ffa.jpg)
![安装成功](https://i.loli.net/2018/03/25/5ab78034145d9.jpg)
![博客界面](https://i.loli.net/2018/03/25/5ab7803426833.jpg)
**Typecho 博客搭建完成！**
# 使用
进入网站后台，控制台、撰写、管理、设置，四个大选项简单明了。
![四大选项](https://i.loli.net/2018/03/25/5ab780aeee148.jpg)
## 发布文章
点击 “撰写文章”，即可使用 Markdown 语法撰写、发布博文。

预览选项，可以查看渲染后的文章效果。图片可以通过 “附件” 上传，并在文章中引用，或者使用图床。
![撰写文章](https://i.loli.net/2018/03/25/5ab780e4821f6.jpg)
## 站点管理
站点的管理选项集中在 “管理” 和 “设置”，可以自由的添加、删除标签、分类、文件等，修改站点名称、描述，设置评论规则等。大家一看就知道了，这里不再逐个说明。
## 主题 & 插件
Typecho 博客本身不带主题/插件商店，因此主题和插件需要自己到论坛、网上去找，下载后上传到网站目录的相应文件夹中，再到网站后台启用即可。

 - **插件位置：**网站目录/usr/plugins
 - **主题位置：**网站目录/usr/themes
 - **附件位置：**网站目录/usr/uploads

# 结语
Typecho 博客十分简洁清爽，相比于 WordPress 干练了不少，程序只有 500KB 不到，但是必要的功能也一个不缺；而比起 Hexo 等纯静态博客又方便了很多，只要有网络，随时随地都可以发文。

如果喜欢简洁的风格，或者用惯了其它博客程序想要换个口味，不妨试试 Typecho。
(๑•̀ㅂ•́) ✧
 
  [1]: http://typecho.org
  [2]: https://github.com/typecho/typecho
  [3]: https://www.namesilo.com
  [4]: https://i.loli.net/2018/03/25/5ab77939239aa.jpg
  [5]: https://zhuanlan.zhihu.com/p/33921436
  [6]: https://www.vultr.com/?ref=7155030
  [7]: https://i.loli.net/2018/03/25/5ab771fa86a2a.gif
  [8]: https://i.loli.net/2018/03/25/5ab779f90c527.jpg
  [9]: https://i.loli.net/2018/03/25/5ab77a3399c27.jpg
  [10]: https://i.loli.net/2018/03/25/5ab77abe55006.png
  [11]: https://share.weiyun.com/56Pu8If
  [12]: https://i.loli.net/2018/03/25/5ab77bf507b1a.jpg
  [13]: https://i.loli.net/2018/03/25/5ab77c285bd6d.jpg
  [14]: http://typecho.org
  [15]: https://i.loli.net/2018/03/25/5ab782963a5a9.gif