title: "Typecho程序伪静态规则大全(包括Linux/Windows)"
date: 2017-01-22 17:36:00 +0800
update: 2017-01-22 17:36:00 +0800
author: me
cover: "https://i.loli.net/2017/10/14/59e1dd2b055d7.jpg"
tags:
    - Typecho
    - 伪静态
preview: Typecho程序的伪静态规则不同于WordPress直接默认可用，需要我们手工加载到空间中才可以生效。下面整理了这款程序在不同的主机环境中的伪静态规则，希望对大家有所帮助。

---

![](https://i.loli.net/2017/10/14/59e1dd2b055d7.jpg)

Typecho程序的伪静态规则不同于WordPress直接默认可用，需要我们手工加载到空间中才可以生效。下面整理了这款程序在不同的主机环境中的伪静态规则，希望对大家有所帮助。

1、Linux Apache环境(.htaccess)：

    <IfModule mod_rewrite.c>
    RewriteEngine On
    # 下面是在根目录，文件夹要修改路径
    RewriteBase /
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteRule ^(.*)$ /index.php/$1 [L]
    </IfModule>


2、Linux Apache环境（Nginx）：

    location / {
    index index.html index.php;
    if (-f $request_filename/index.html) {
    rewrite (.*) $1/index.html break;
    }
    if (-f $request_filename/index.php) {
    rewrite (.*) $1/index.php;
    }
    if (!-f $request_filename) {
    rewrite (.*) /index.php;
    }
    }

3、Windows IIS伪静态(httpd.ini)：

    [ISAPI_Rewrite]
    # 3600 = 1 hour
    CacheClockRate 3600
    RepeatLimit 32
    # 中文tag解决
    RewriteRule /tag/(.*) /index\.php\?tag=$1
    # sitemapxml
    RewriteRule /sitemap.xml /sitemap.xml [L]
    RewriteRule /favicon.ico /favicon.ico [L]
    # 内容页
    RewriteRule /(.*).html /index.php/$1.html [L]
    # 评论
    RewriteRule /(.*)/comment /index.php/$1/comment [L]
    # 分类页
    RewriteRule /category/(.*) /index.php/category/$1 [L]
    # 分页
    RewriteRule /page/(.*) /index.php/page/$1 [L]
    # 搜索页
    RewriteRule /search/(.*) /index.php/search/$1 [L]
    # feed
    RewriteRule /feed/(.*) /index.php/feed/$1 [L]
    # 日期归档
    RewriteRule /2(.*) /index.php/2$1 [L]
    # 上传图片等
    RewriteRule /action(.*) /index.php/action$1 [L]

