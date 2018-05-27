title: "Sed:一些常用的命令详解"
date: 2018-05-27 19:35:00 +0800
update: 2018-05-27 19:35:00 +0800
author: me
cover: "https://i.loli.net/2018/05/27/5b0a95350a6ef.jpg"
tags:
    - Sed
preview: Sed是一个很好的文件处理工具，本身是一个管道命令，主要是以行为单位进行处理，可以将数据行进行替换、删除、新增、选取等特定工作，下面先了解一下Sed的用法。

---

Sed是一个很好的文件处理工具，本身是一个管道命令，主要是以行为单位进行处理，可以将数据行进行替换、删除、新增、选取等特定工作，下面先了解一下Sed的用法。
## 用法 ##
### Sed命令行格式

    sed -$Options '$Features' $File

### $Options
`-n` ：使用安静(silent)模式。在一般 sed 的用法中，所有来自 STDIN 的数据一般都会被列出到终端上。但如果加上 -n 参数后，则只有经过sed 特殊处理的那一行(或者动作)才会被列出来。  
`-e` ：直接在命令列模式上进行 sed 的动作编辑；  
`-f` ：直接将 sed 的动作写在一个文件内， -f filename 则可以运行 filename 内的 sed 动作；  
`-r` ：sed 的动作支持的是延伸型正规表示法的语法。(默认是基础正规表示法语法)  
`-i` ：直接修改读取的文件内容，而不是输出到终端。  
### 指定行数
不一定要存在指定的行数，一般代表选择进行动作的行数，举例来说，如果我的动作是需要在10到20行之间进行的，则完整代码是`sed -$Options '10,20$Features' $File`
### $Features
`a` ：新增， a 的后面可以接字串，而这些字串会在新的一行出现(目前的下一行)～  
`c` ：取代， c 的后面可以接字串，这些字串可以取代你指定行的所有内容！  
`d` ：删除， 因为是删除啊，所以 d 后面通常不接任何东西；  
`i` ：插入， i 的后面可以接字串，而这些字串会在新的一行出现(目前的上一行)；  
`p` ：列印， 亦即将某个选择的数据印出。通常 p 会与参数 sed -n 一起运行～  
`r` ：引入， sed中的 r 命令会把其后面的任何字符判读为文件名，直到回车符或是单引号；  
`s` ：取代， 可以直接进行取代的工作哩！通常这个 s 的动作可以搭配正规表示法！例如 `sed 's/要被取代的字串/新的字串/g'`就是啦！  
### $File
你要进行动作的文件名例如`98k.txt`
## 实例 ##
假设我们有一文件名为`98k.txt`，内容如下

    this is a newfile!
    hello world
    please
    asd12
    123asdasd

### 删除某行

对`98k.txt`的行进行操作，将操作结果输出到终端（只是做模拟操作，不改动源文件）

    sed '1d' 98k.txt         # 输出删除第一行后的文件内容
    sed '$d' 98k.txt         # 输出删除最后一行后的文件内容
    sed '1,2d' 98k.txt       # 输出删除第一行到第二行后的文件内容
    sed '2,$d' 98k.txt       # 输出删除第2行到最后1行后的文件内容

### 显示某行

    sed -n '1p' 98k.txt           # 只显示文件的第一行 
    sed -n '$p' 98k.txt           # 只显示文件的最后一行
    sed -n '1,2p' 98k.txt         # 只显示文件的第一行到第二行
    sed -n '2,$p' 98k.txt         # 显示文件的第二行到最后一行

### 使用安静模式进行查询

    sed -n '/ruby/p' 98k.txt
    输出关键字ruby所在行的内容；其中'/str/p'，str为搜索的文本内容
    sed -n '/\$/p' 98k.txt
    输出关键字$所在行的内容，使用反斜线\屏蔽特殊含义

### 增加一行或多行字符串

    sed '1a drink tea' 98k.txt            # 在第一行后增加字符串"drink tea"
    sed '1,3a drink tea' 98k.txt          # 在第一行到第三行后增加字符串"drink tea"
    sed '1a drink tea\nor coffee' 98k.txt # 在第一行后增加两行，换行使用\n，可多次使用\n添加多行

### 增加另外一个文件的内容

    sed '1r 1.txt' 98k.txt     # 把1.txt的内容增加到98k.txt的第一行后

### 替代一行或多行

    sed '1c Hi' 98k.txt    # 把98k.txt的第一行替换为Hi
    sed '1,2c Hi' 98k.txt  # 把98k.txt的第一行到第二行替换为Hi

### 替换一行中的某部分字符串
格式：`sed 's/要替换的字符串/新的字符串/g' 98k.txt` （要替换的字符串可以用正则表达式）

    sed 's/ruby/bird/g' 98k.txt   # 把全部的ruby替换为bird
    sed 's/ruby//g' 98k.txt       # 把全部的ruby替换为空，即删除ruby字符串

## sed -i 命令详解
`sed -i`是直接对文件进行操作

    # 对每行匹配到的第一个字符串进行替换
    sed -i 's/原字符串/新字符串/' 98k.txt
    # 对全局匹配上的所有字符串进行替换
    sed -i 's/原字符串/新字符串/g' 98k.txt
    # 删除所有匹配到字符串的行
    sed -i '/匹配字符串/d'  98k.txt
    # 特定字符串的行后插入新行
    sed -i '/特定字符串/a 新行字符串' 98k.txt
    # 特定字符串的行前插入新行
    sed -i '/特定字符串/i 新行字符串' 98k.txt
    # 把匹配行中的某个字符串替换为目标字符串
    sed -i '/匹配字符串/s/源字符串/目标字符串/g' 98k.txt
    # 在文件98k.txt中的末行之后，添加bye
    sed -i '$a bye' 98k.txt
    # 对于文件第3行，把匹配上的所有字符串进行替换
    sed -i '3s/原字符串/新字符串/g' 98k.txt

## 参考文章 ##
https://blog.csdn.net/yjk13703623757/article/details/79548450
https://www.cnblogs.com/ev-zhk/p/4277023.html
https://www.cnblogs.com/ggjucheng/archive/2013/01/13/2856901.html
http://blog.51cto.com/xficc/1621403
https://blog.csdn.net/m0_37886429/article/details/79043158
https://coolshell.cn/articles/9104.html
https://blog.csdn.net/m0_37886429/article/details/79034190
https://blog.csdn.net/u011046042/article/details/76211065
https://blog.csdn.net/imfinger/article/details/6540345