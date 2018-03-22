title: "Typecho密码保护的文章如何保护内容而不保护标题"
date: 2017-09-20 18:34:00 +0800
update: 2017-09-20 18:34:00 +0800
author: me
cover: "https://i.loli.net/2018/03/22/5ab3796db6706.png"
tags:
    - Typecho
preview: Typecho密码保护貌似有点不人性化，我觉得内容保护了就好了，标题就不用保护了，如果多个文章都保护了，标题都一样都不知道哪个是要找的文章了。

---

Typecho密码保护貌似有点不人性化，我觉得内容保护了就好了，标题就不用保护了，如果多个文章都保护了，标题都一样都不知道哪个是要找的文章了。

## 修改方法 ##
打开Typecho程序目录中的文件`/var/Widget/Abstract/Contents.php`
找到`$value['title'] = _t('此内容被密码保护');`用#注释掉这行，标题就正常显示啦，就这么简单~