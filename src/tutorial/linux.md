---
title: Linux
icon: linux
date: 2025-04-28
category: 教程
tag: 
    - Linux
---

## 1 简介

### 1.1 内核

内核 (kernel) 是系统的心脏，是运行程序和管理像磁盘和打印机等硬件设备的核心程序，它提供了一个在裸设备与应用程序间的抽象层。Linux 内核版本又分为稳定版和开发版，两种版本是相互关联，相互循环：

- 稳定版：具有工业级强度，可以广泛地应用和部署。新的稳定版相对于较旧的只是修正一些 bug 或加入一些新的驱动程序。

- 开发版：由于要试验各种解决方案，所以变化很快。

所有来自全世界的对 Linux 源码的修改最终都会汇总到[内核源码网址](http://www.kernel.org) 这个网站，由 Linus 领导的开源社区对其进行甄别和修改最终决定是否进入到 Linux 主线内核源码中。

### 1.2 发行版

Linux 发行版 (也被叫做 GNU/Linux 发行版) 通常包含了包括桌面环境、办公套件、媒体播放器、数据库等应用软件。目前市面上较知名的发行版有：Ubuntu、RedHat、CentOS、Debian、Fedora、SuSE、OpenSUSE、Arch Linux、SolusOS 等。

## 2 命令行

### 2.1 Linux 命令格式

```shell
command [-options] [parameter1] …
```

::: tip
command: 命令名； `[-options]`：选项,可用来对命令进行控制，也可以省略， `[]` 代表可选 parameter1 …：传给命令的参数：可以是零个一个或多个
:::

### 2.2 查看帮助文档

一般是 linux 命令自带的帮助信息，如：

```shell
ls --help
```

### 2.3 tab 键自动补全

在敲出命令的前几个字母的同时，按下 tab 键，系统会自动帮我们补全命令。

## 3 Linux 命令

### 3.1 查看系统信息

```shell
# 查看所有系统信息
uname -a 
# 查看主机名及系统信息
hostnamectl
# 查看操作系统详细信息
cat /etc/os-release
# 查看系统
lsb_release -a
```

### 3.2 系统管理

#### 3.2.1 后台运行

```shell
nohup python your_script.py > output.log 2>&1 &
```

#### 3.2.2 时间

- 日历：`cal`

  ```shell
  # 查看当前日历
  cal
  # 显示全年日历
  cal -y
  cal -y 2023
  # 查看 2 月份日历
  cal -m 2
  # 使用儒略历
  cal -j
  # 禁用高亮显示
  cal -h
  ```

  ::: tip 参数说明   
  `-h`：不高亮显示今天的日期

  `-j`：使用儒略历格式显示日期（从当年 1 月 1 日开始计算天数）

  `-y`：显示整个年份的日历

  `-m`：指定显示的月份
  :::

- 日期：`date`

  ```shell
  # 查看日期
  date
  # 修改日期格式（需要管理员权限）
  date [MMDDhhmm[[CC]YY][.ss]] +format
  ```

#### 3.2.3 网络状态

```shell
# 格式
netstat [-acCeFghilMnNoprstuvVwx][-A<网络类型>][--ip]
# 常用
netstat -nltp
```

::: tip 参数说明 

`-a` 或 `--all` 显示所有连线中的 Socket。 

`-A<网络类型>` 或 `--<网络类型>` 列出该网络类型连线中的相关地址。 

`-c` 或 `--continuous` 持续列出网络状态。 

`-C` 或 `--cache` 显示路由器配置的快取信息。 

`-e` 或 `--extend` 显示网络其他相关信息。 

`-F` 或 `--fib` 显示 FIB。 

`-g` 或 `--groups` 显示多重广播功能群组组员名单。 

`-h` 或 `--help` 在线帮助。 

`-i` 或 `--interfaces` 显示网络界面信息表单。 

`-l` 或 `--listening` 显示监控中的服务器的 Socket。 

`-M` 或 `--masquerade` 显示伪装的网络连线。 

`-n` 或 `--numeric` 直接使用 IP 地址，而不通过域名服务器。 

`-N` 或 `--netlink` 或 `--symbolic` 显示网络硬件外围设备的符号连接名称。 

`-o` 或 `--timers` 显示计时器。 

`-p` 或 `--programs` 显示正在使用 Socket 的程序识别码和程序名称。 

`-r` 或 `--route` 显示 Routing Table。 

`-s` 或 `--statistice` 显示网络工作信息统计表。 

`-t` 或 `--tcp` 显示 TCP 传输协议的连线状况。 

`-u` 或 `--udp` 显示 UDP 传输协议的连线状况。 

`-v` 或 `--verbose` 显示指令执行过程。 

`-V` 或 `--version` 显示版本信息。 

`-w` 或 `--raw` 显示 RAW 传输协议的连线状况。 

`-x` 或 `--unix` 此参数的效果和指定 "-A unix" 参数相同。 

`--ip` 或 `--inet` 此参数的效果和指定 "-A inet" 参数相同。
:::

#### 3.2.4 进程

- 查看进程：`ps`

  ```shell
  # 查看所有进程信息（瞬时的） 
  ps -e 
  # 查看所有不是 root 运行的进程 
  ps -u root -N 
  # 显示所有进程状态状态 
  ps ax 
  # 显示含有 xxx 的进程
  ps -ef |grep xxx 
  # 查看某个进程对应用户
  ps -u -p <PID>
  ```

- 终止进程：`kill`

  命令指定进程号的进程，需要配合 `ps` 使用。

  ```shell
  kill [-signal] pid
  ```

  ::: tip 参数说明
  `signal`：信号值，从 0 到 15，其中 9 为绝对终止，可以处理一般信号无法终止的进程。
  :::

#### 3.2.5 关机重启

| 命令                | 含义                        |
| ----------------- | ------------------------- |
| reboot            | 重新启动操作系统                  |
| shutdown  –r now  | 重新启动操作系统，shutdown 会给别的用户提示 |
| shutdown -h now   | 立刻关机，其中 now 相当于时间为 0 的状态      |
| shutdown -h 20:25 | 系统在今天的 20:25 会关机           |
| shutdown -h +10   | 系统再过十分钟后自动关机              |
| init 0            | 关机                        |
| init 6            | 重启                        |

### 3.3 权限管理

#### 3.3.1 列出目录内容

- `ls`（list directory contents）

  该命令用于显示指定工作目录下之内容（列出目前工作目录所含的文件及子目）。

  Linux 文件或者目录名称最长可以有 265 个字符，“.” 代表当前目录，“..” 代表上一级目录，以 “.” 开头的文件为隐藏文件，需要用 -a 参数才能显示。

  - 格式

  ```shell
  ls [-alrtAFR] [name...]
  ```

  ::: tip 参数说明
  -a # 显示所有文件及目录 (. 开头的隐藏文件也会列出)。

  -d # 只列出目录（不递归列出目录内的文件）。

  -l # 以长格式显示文件和目录信息，包括权限、所有者、大小、创建时间等。

  -r # 倒序显示文件和目录。

  -t # 将按照修改时间排序，最新的文件在最前面。

  -A # 同 -a ，但不列出 "." (目前目录) 及 ".." (父目录)。

  -F # 在列出的文件名称后加一符号；例如可执行档则加 "*", 目录则加 "/"。

  -R # 递归显示目录中的所有文件和子目录。
  :::

- `stat`

  在 Linux 系统中，`stat` 是一个用于显示文件或文件系统状态的命令。它可以提供比 `ls -l` 更详细的文件信息，包括文件的访问时间（Access Time, atime）、修改时间（Modify Time, mtime）、状态改变时间（Change Time, ctime）等元数据。此外，它还能显示文件权限、链接数、所有者、所属组、文件大小等信息。

  - 格式

  ```shell
  stat [-options] filename
  ```

  ::: tip 参数说明
  -x # 显示文件或文件系统的详细状态信息。

  -f # 显示文件所在文件系统的状态信息，而不是文件本身的信息。

  -t # 以简洁格式输出信息。

  --format, --printf # 使用指定的格式字符串来控制输出的内容。
  :::

#### 3.3.2 文件访问权限

用户能够控制一个给定的文件或目录的访问程度，一个文件或目录可能有读、写及执行权限：

- 读权限（r） ：对于文件，具有读取文件内容的权限；对于目录，具有浏览目录的权限。 

- 写权限（w） ：对于文件，具有修改文件内容的权限；对于目录，具有删除、移动目录内文件的权限。 

- 可执行权限（x）： 对于文件，具有执行文件的权限；对于目录，该用户具有进入目录的权限。 

通常，Unix/Linux 系统只允许文件的属主(所有者)或超级用户改变文件的读写权限。

- 示例：`-rw-rw-r-- 1 wenyd wenyd 3190 3月  26 21:43 index.html`

- 第一个字母：文件类型
  - `d` 文件夹
  - `-` 代表普通文件
  - `c` 硬件字符设备
  - `b` 硬件块设备
  - `s` 管道文件
  - `l` 软链接文件

- 后 9 个字母分别代表三组权限：
  - 文件所有者的权限
  - 文件所属用户组的权限
  - 其他用户的权限

- 后面的列表示
  - 硬链接数
  - 所属主
  - 所属组
  - 大小
  - 修改时间
  - 文件名

- 修改文件权限

  Linux chmod（change mode）命令是控制用户对文件的权限的命令。

  Linux/Unix 的文件调用权限分为三级 : 文件所有者（Owner）、用户组（Group）、其它用户（Other Users）。

  只有文件所有者和超级用户可以修改文件或目录的权限。`chmod` 修改文件权限有两种使用格式：字母法与数字法。

  ```shell
  # 字母法
  chmod u/g/o/a +/-/= rwx filename
  # 数字法
  chmod nnn filename
  ```

  字母法符号含义：

  | 符号 | 含义 |
  | --- | --- |
  | u | 文件所有者 |
  | g | 用户组 |
  | o | 其他用户 |
  | a | 所有用户 |
  | + | 添加权限 |
  | - | 移除权限 |
  | = | 设置权限 |
  | r | 读权限 |
  | w | 写权限 |
  | x | 执行权限 |

  数字法数字含义：

  | 数字 | 权限 | 含义 |
  | --- | --- | --- |
  | 0 | --- | 无权限 |
  | 1 | --x | 执行权限 |
  | 2 | -w- | 写权限 |
  | 3 | -wx | 写和执行权限 |
  | 4 | r-- | 读权限 |
  | 5 | r-x | 读和执行权限 |
  | 6 | rw- | 读和写权限 |
  | 7 | rwx | 读、写和执行权限 |

  ::: important 示例
  - chmod 751 file： 
      - 文件所有者：读、写、执行权限 
      - 同组用户：读、执行的权限 
      - 其它用户：执行的权限 

  - chmod 777 file：
      - 所有用户拥有读、写、执行权限。
  :::

  ::: tip
  如果想递归所有目录加上相同权限，需要加上参数“ -R ”。 如：chmod 777 test/ -R 递归 test 目录下所有文件加 777 权限。
  :::

- 修改文件所有者

  Linux chown（**change owner**）命令用于设置文件所有者和文件关联组的命令。

  - 示例

  ```shell
  # 将文件 file1.txt 的拥有者设为 runoob，群体的使用者 runoobgroup
  chown runoob:runoobgroup file1.txt
  # 将当前前目录下的所有文件与子目录的拥有者皆设为 runoob，群体的使用者 runoobgroup
  chown -R runoob:runoobgroup *
  ```

- 修改文件所属组

  Linux chgrp（change group）命令用于变更文件或目录的所属群组。chgrp 允许普通用户改变文件所属的组，只要该用户是该组的一员。

  - 示例

  ```shell
  # 改变文件的群组属性，由 root 改为 bin
  [root@localhost test]# ll
  ---xrw-r-- 1 root root 302108 11-13 06:03 log2012.log
  [root@localhost test]# chgrp -v bin log2012.log
  [root@localhost test]# ll
  ---xrw-r-- 1 root bin  302108 11-13 06:03 log2012.log
  ```

#### 3.3.3 查看文件

文件内容查看 Linux 系统中使用以下命令来查看文件的内容： 

- `cat` 由第一行开始显示文件内容

- `tac` 从最后一行开始显示 

- `nl` 显示的时候，顺道输出行号 

- `more` 一页一页的显示文件内容 

- `less` 与 `more` 类似，但可以往前翻页 

- `head` 只看头几行 

- `tail` 只看尾巴几行

### 3.4 用户管理

#### 3.4.1 创建用户

```shell
# 创建用户
useradd username
# 设置密码
passwd username
# 创建用户并指定家目录
useradd -d /home/username -m username
# 创建用户并指定用户组
useradd -g groupname username
```

#### 3.4.2 修改用户

```shell
# 修改用户名
usermod -l newusername oldusername
# 修改用户家目录
usermod -d /home/newdir username
# 修改用户组
usermod -g groupname username
```

#### 3.4.3 删除用户

```shell
# 删除用户
userdel username
# 删除用户及家目录
userdel -r username
```

#### 3.4.4 用户组管理

```shell
# 创建用户组
groupadd groupname
# 修改用户组名
groupmod -n newgroupname oldgroupname
# 删除用户组
groupdel groupname
```

#### 3.4.5 查看用户信息

```shell
# 查看当前登录用户
whoami
# 查看所有登录用户
who
# 查看用户详细信息
id username
# 查看用户组信息
groups username
```

### 3.5 文件管理

#### 3.5.1 创建文件

```shell
# 创建空文件
touch filename
# 使用 echo 创建文件
echo "content" > filename
# 使用 cat 创建文件
cat > filename << EOF
content
EOF
```

#### 3.5.2 创建目录

```shell
# 创建单个目录
mkdir directory
# 创建多级目录
mkdir -p directory/subdirectory
```

#### 3.5.3 复制文件/目录

```shell
# 复制文件
cp source destination
# 复制目录
cp -r source_directory destination_directory
# 复制并保留文件属性
cp -p source destination
```

#### 3.5.4 移动文件/目录

```shell
# 移动文件/目录
mv source destination
# 重命名文件/目录
mv oldname newname
```

#### 3.5.5 删除文件/目录

```shell
# 删除文件
rm filename
# 删除目录
rm -r directory
# 强制删除
rm -f filename
# 强制删除目录
rm -rf directory
```

#### 3.5.6 查找文件

```shell
# 按名称查找
find /path -name "filename"
# 按类型查找
find /path -type f # 文件
find /path -type d # 目录
# 按大小查找
find /path -size +10M # 大于 10M
find /path -size -10M # 小于 10M
# 按修改时间查找
find /path -mtime -7 # 7 天内修改
find /path -mtime +7 # 7 天前修改
```

#### 3.5.7 文件压缩与解压缩

```shell
# 压缩为 tar.gz
tar -czvf archive.tar.gz files
# 解压缩 tar.gz
tar -xzvf archive.tar.gz
# 压缩为 zip
zip archive.zip files
# 解压缩 zip
unzip archive.zip
```

::: important 声明
待更新
:::