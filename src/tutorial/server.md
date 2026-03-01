---
title: 云服务器
icon: server
date: 2024-06-25
category: 教程
tag: 
    - 云服务器
    - Java
    - MySQL
---

## 1 安装 JAVA

### 1.1 下载 JDK11

- 选择 Linux 版本。

- [Java SE 11 官网](https://www.oracle.com/cn/java/technologies/javase/jdk11-archive-downloads.html)

### 1.2 传输 JDK11

- 在云服务器中选择一个文件夹 /home/java。

- 将下载好的压缩包 `jdk-11.0.21_linux-x64_bin.tar.gz` 上传。

- 解压：执行命令：

```shell
tar -zxvf jdk-11.0.21_linux-x64_bin.tar.gz
```

### 1.3 配置环境变量

- 编辑 profile 文件：

```shell
vim /etc/profile 
```

- 按 `i` 进入编辑模式，文件末尾输入以下内容：

```shell
export JAVA_HOME=/usr/local/java/jdk-11.0.21
export PATH=$JAVA_HOME/bin:$PATH
export CLASSPATH=.:$JAVA_HOME/lib
```

- 保存并退出：按 Esc 退出编辑模式，再按 **Shift + :** 输入 **wq** 保存并退出。

- 重新编译 profile 文件：

```shell
source /etc/profile
```

### 1.4 验证安装

- 输入命令：

```shell
java -version
```

- 出现 Java 版本号即为安装成功。

## 2 安装 MySQL

[在 Linux 实例中安装 MySQL 数据库](https://help.aliyun.com/zh/ecs/use-cases/manually-deploy-mysql-on-an-ecs-instance-that-runs-centos?spm=a2c4g.11186623.0.i9)

## 3 运行 JAR 包

### 3.1 普通打包方式

```shell
java -jar 15-spt-bulid-jar-1.0-SNAPSHOT.jar
```

特点：当前 ssh 窗口被锁定，可按 CTRL + C 打断程序运行，或直接关闭窗口，程序退出。

### 3.2 后台运行方式

```shell
java -jar 15-spt-bulid-jar-1.0-SNAPSHOT.jar &
```

& 代表在后台运行。

特定：当前 ssh 窗口不被锁定，但是当窗口关闭时，程序中止运行。

继续改进，如何让窗口关闭时，程序仍然运行？

### 3.3 后台不挂断运行方式

```shell
nohup java -jar hsservice-0.0.1-SNAPSHOT.jar &
```

nohup 意思是不挂断运行命令，当账户退出或终端关闭时，程序仍然运行。

当用 nohup 命令执行作业时，缺省情况下该作业的所有输出被重定向到 nohup.out 的文件中，除非另外指定了输出文件。

### 3.4 后台不挂断且日志输入指定文件运行方式

```shell
nohup java -jar hsservice-0.0.1-SNAPSHOT.jar >temp.txt &
nohup java -jar hsserver.jar >temp.txt &
```

command >out.file 是将 command 的输出重定向到 out.file 文件，即输出内容不打印到屏幕上，而是输出到 out.file 文件中。

可通过 jobs 命令查看后台运行任务。

## 4 停止 JAR 包

使用 nohup 命令运行 JAR 包后，它会在后台持续运行，即使你关闭了终端或注销了用户。要停止运行 JAR 包，你需要先找到该进程的进程 ID（PID），然后使用 kill 命令来停止它。

以下是如何找到并停止使用 nohup 运行的 JAR 包的步骤：

### 4.1 查找进程 ID (PID)

使用 ps 命令结合 grep 来查找你的 JAR 包的进程 ID。例如，如果你的 JAR 包名为 myapp.jar，你可以执行以下命令：

```shell
ps aux | grep java
```

这会列出与 myapp.jar 相关的所有进程。在输出中，你应该会看到一个或多个与你的 JAR 包相关的行。每行中的第二个字段就是该进程的 PID。

### 4.2 停止进程

一旦你有了 PID，你可以使用 kill 命令来停止进程。例如，如果 PID 是 12345，你可以执行：

```shell
kill 12345
```

如果你的 JAR 包没有正常停止，你可能需要使用更强烈的信号来停止它。例如，你可以尝试：

```shell
kill -9 12345
```

请注意，kill -9 是一个强制停止进程的命令，应该谨慎使用，因为它不会给进程任何机会来正常清理和关闭。

另外，如果你的 JAR 包正在监听某个端口，你也可以使用 lsoft 命令来查找该端口上的进程，并据此找到 PID。例如，如果你的 JAR 包正在监听 8080 端口，你可以执行：

```shell
lsoft -i :8080
```

然后，你可以使用上面提到的方法来停止该进程。
