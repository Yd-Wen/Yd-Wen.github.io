---
date: 2024-12-17
title: 2 深度学习环境配置
icon: environment
category:
  - 深度学习
tag:
  - 配置
---

深度学习需要安装Anaconda、cuda、Pycharm。
在配置深度学习环境的时候，并不是从python官网下载python然后使用pip命令安装，更多的是使用Anaconda这个软件。

::: tip
**依赖关系：GPU->CUDA->PyTorch**
:::

## 2.1 CUDA

CUDA是一种协助“CPU任务分发+ GPU 并行处理”的编程模型/平台，用于加速 GPU 和 CPU 之间的计算。

也就是说 CUDA 通过 CPU 任务分发和 GPU 并行处理的方式，把计算任务通过 CPU 分发给 GPU 进行并行计算加速。而 GPU 并行计算的能力需要 CUDA 借助其自带的编程接口和工具，比如 C/C++ 语言来编写并行计算程序，并通过 CUDA 编译器将程序转化为可以在 NVIDIA GPU 上执行的机器码快速运行。

所以，通过使用 CUDA 平台，开发者可以充分利用 GPU 的并行计算能力加速各种应用程序的运行速度，同时还能与 CPU 进行协同计算。而人工智能运算往往需要进行大规模亿级的计算，这也就是CUDA在人工智能领域大行其道的原因之一。

CUDA安装步骤如下：

1. 安装准备。确认 NVIDIA 显卡已正确安装，在设备管理器可以看到 NVIDIA 显卡的存在。输入以下命令查看操作系统与 CUDA 版本的兼容性。其中 CUDA Version 表示操作系统支持的最高 CUDA 版本。

```shell
nvidia-smi
```

2. 下载安装包。进入官方[CUDA下载地址](https://developer.nvidia.com/cuda-toolkit-archive)，选择需要的版本（不高于 CUDA Version）。
3. 安装。参考[CUDA下载安装教程](https://blog.csdn.net/changyana/article/details/135876568)。

## 2.2 Anaconda

Anaconda是一个基于Conda的数据科学发行版，它包含了Conda、Python以及大量的数据科学相关的软件包。Anaconda适合需要完整数据科学栈的用户。

### 2.2.1 Conda、Anaconda和Miniconda的区别

- Conda：是一个包管理器和环境管理器，可以用于安装和管理软件包和虚拟环境。
- Anaconda：是一个基于 Conda 的数据科学发行版，它包含了 Conda、Python 以及大量的数据科学相关的软件包。Anaconda 适合需要完整数据科学栈的用户。
- Miniconda：是一个轻量级的 Anaconda 替代品，它只包含 Conda、Python 和少量必要的软件包。Miniconda 适合只需要基础 Python 环境和 Conda 管理功能的用户，用户可以根据自己的需要安装其他软件包。

### 2.2.2 Anaconda安装

Anaconda 是一个环境管理软件，可以帮助我们创建虚拟环境，管理虚拟环境。

同时，可以把 conda 理解为手机上的应用商店，各种的包类似于各种的 APP，当我们需要用到其他的开源库、包的时候，可以通过 Anaconda 进行下载，不同应用商店的下载安装速度会有所差异，并且会维护软件，同样的，conda 也会维护包和库。

安装 Anaconda 会默认安装很多东西，包括 python 的环境、conda 命令，conda 命令可以安装其他的库(conda install 包名)和 pip 差不多，因此不需要再单独下载 python，直接安装 Anaconda 即可。

虚拟环境：由于不同的项目可能会使用不同的环境，（例如A项目要用Pytorch1.10版本而B项目要使用1.4版本），Anaconda可以创建多个虚拟环境来独立维护不同项目需要用到的包，使两个项目环境互不干扰。

安装Anaconda前彻底卸载Python，安装步骤如下：

1. 下载安装包。登录[Anaconda官网](https://www.anaconda.com/)，下载安装包。
2. 安装。双击安装包，选择为所有用户安装，选择安装路径，不勾选添加环境变量（手动添加）。
3. 配置环境变量。选择系统变量，选择Path，新建环境变量，输入以下环境变量。

```plaintext
D:\WorkSoftware\Install\Anaconda3
D:\WorkSoftware\Install\Anaconda3\Scripts
D:\WorkSoftware\Install\Anaconda3\Library\bin
D:\WorkSoftware\Install\Anaconda3\Library\mingw-w64\bin
D:\WorkSoftware\Install\Anaconda3\Library\usr\bin
```

::: note
五个环境变量中：
1. Python需要的
2. conda自带脚本
3. jupyter notebook动态库
4. 使用C with Python需要的
:::

4. 验证安装。按下 WIN+R，输入 cmd，打开命令行窗口，输入命令查看 conda 和 Python 的版本号。

```shell
conda --version
```

5. 配置镜像源。命令行输入下面的命令。

```shell
conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/free/
conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/conda-forge
conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/msys2/
 
# 设置搜索时显示通道地址
conda config --set show_channel_urls yes
 
# 查看是否修改好通道
conda config --show channels
```

6. 恢复默认源。输入以下命令。

```shell
# 恢复默认源
conda config --remove-key channels

# 删除镜像源
conda config --remove channels https://mirrors.tuna.tsinghua.edu.cn/tensorflow/linux/cpu/
```

### 2.2.3 Miniconda安装

Miniconda 是一个**轻量级、免费且开源**的**跨平台**软件包管理系统。它提供了conda这个全能的包管理器，具有跨平台兼容性。

Linux 下安装步骤如下：

1. 打开[清华大学开源软件镜像站-miniconda](https://mirrors.tuna.tsinghua.edu.cn/anaconda/miniconda/)，选择合适的版本，右键复制链接地址

2. 打开终端，利用 wget 命令下载安装程序文件

```shell
wget https://mirrors.tuna.tsinghua.edu.cn/anaconda/miniconda/Miniconda3-py37_23.1.0-1-Linux-x86_64.sh
```

3. 使用 `bash` 命令运行 `.sh` 文件

```shell
bash Miniconda3-py37_23.1.0-1-Linux-x86_64.sh -b -p $HOME/Dependency/Miniconda
```

::: note
- `b`: 指定安装模式为无交互安装
- `p`: 指定安装路径
:::

4. 添加环境变量并生效配置

```shell
echo 'export PATH="$HOME/Dependency/Miniconda/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc
```

::: tip
交互安装模式下，有些版本安装时系统会提示是否添加到环境变量；无交互安装模式下，需要手动添加环境变量。命令作用：
- `echo`：用于输出文本的命令
- `>>`：重定向操作符，用于将前一个命令输出追加到指定文件末尾，文件不存在则创建
- `~`：用户主目录的简写符号，用户名是 `alice`，则表示 `/home/alice`
:::

5. 验证安装

```shell
conda --version
```

参考资料
- [Linux上Miniconda的安装-CSDN博客](https://blog.csdn.net/qq_41813454/article/details/136111083)
- [安装conda并添加到环境变量中-CSDN博客](https://blog.csdn.net/lemonzjk/article/details/141529859)


## 2.3 Conda 指令

### 2.3.1 基础操作

- 查询 conda 版本

```shell
conda --version
```

- 更新 conda

```shell
conda update conda
```

- 查看 conda 环境详细信息

```shell
conda info
```

### 2.3.2 虚拟环境管理

- 查看所有虚拟环境

```shell
conda env list
```

- 创建虚拟环境

```shell
# 通过 -n 或 --name 自定义的环境名称，指定Python的版本
conda create -n env_name python=x.x
conda create --name env_name python=x.x
```

- 激活虚拟环境

```shell
conda activate env_name
```

- 退出当前虚拟环境

```shell
conda deactivate
```

- 删除虚拟环境

```shell
# -n 与 --name 等价
conda remove -n env_name --all
conda remove -name env_name --all
```

- 复制虚拟环境

```shell
conda create --name new_env_name --clone old_env_name
```

- 分享/备份虚拟环境

```shell
# 先导出为 yml 文件，再通过该文件创建环境

# 在当前工作目录生成yml文件
conda env export > environment.yml

# 将yml文件放到工作目录后创建环境
conda env create -f environment.yml
```

### 2.3.3 包管理

- 安装包

```shell
# conda install package_name
conda install xlrd

# 指定包的版本，注意单等于号
conda install xlrd=1.2.0

# 也可以通过pip指定包版本，注意双等于号
pip install xlrd==1.2.0

# 批量安装requirements.txt文件中包含的依赖
conda install --yes --file requirements.txt
```

::: tip
指定版本号时，conda 用 `=` 指定，pip 用 `==` 指定。
:::

- 导出包

```shell
# 批量导出包含环境中所有依赖包到requirements.txt文件
conda list -e > requirements.txt
```

- 删除包

```shell
# 删除当前环境中的某个包
conda remove package_name
```

::: tip
删除指令：`conda remove` 和 `pip uninstall`
:::

- 更新包

```shell
# 更新某个包
conda update package_name

# 更新所有包
conda update -all
```

- 搜索包

```shell
conda search package_name
```

- 清理包

```shell
# 清理包，两个等价
conda clean -p
conda clean --packages

# 清理tar包，两个等价
conda clean -t
conda clean --tarballs

# 删除所有安装包及cache
conda clean -y -all
```

::: tip
Conda 安装的包都在目录 `Anaconda/pkgs` 下。随着使用，conda 安装的包也越来越多；有时候会出现以下不好的情况：
- 有些包安装之后，从来没有使用过；
- 一些安装包的tar包也保留在了计算机中；
- 由于依赖或者环境等原因，某些包的不同版本重复安装。
  上面的这些情况使得 anaconda 显得更加冗余，并且浪费储存；对于这些情况可以使用 conda clean 净化 Anaconda。
:::

### 2.3.4 镜像源管理

- 查看镜像源

```shell
conda config --show channels
conda config --show-sources # 查看所有
```

- 添加镜像源

```shell
# 清华
conda config --add channels  https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main
conda config --add channels  https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/free
conda config --add channels  https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/r
conda config --add channels  https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/pro
conda config --add channels  https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/msys2
# 中科大
conda config --add channels https://mirrors.ustc.edu.cn/anaconda/pkgs/main/
conda config --add channels https://mirrors.ustc.edu.cn/anaconda/pkgs/free/
conda config --add channels https://mirrors.ustc.edu.cn/anaconda/cloud/conda-forge/
conda config --add channels https://mirrors.ustc.edu.cn/anaconda/cloud/msys2/
conda config --add channels https://mirrors.ustc.edu.cn/anaconda/cloud/bioconda/
conda config --add channels https://mirrors.ustc.edu.cn/anaconda/cloud/menpo/
conda config --add channels https://mirrors.ustc.edu.cn/anaconda/cloud/
# 阿里
conda config --add channels https://mirrors.aliyun.com/pypi/simple/
# 豆瓣
conda config --add channels http://pypi.douban.com/simple/ 
```

- 跳过SSL验证

```shell
conda config --set ssl_verify false
```

- 配置安装包时显示安装来源

```shell
conda config --set show_channel_urls yes
```

- 清楚索引缓存，保证用的是镜像站提供的索引

```shell
conda clean -i
```

- 切换回默认镜像源

```shell
conda config --remove-key channels
```

- 设置镜像优先级

```shell
conda config --set channel_priority flexible
```

- 删除镜像源

```
conda config --remove channels https://mirrors.tuna.tsinghua.edu.cn/tensorflow/linux/cpu/
```

- 临时指定包的镜像源

```shell
# 两个等价
pip install package_name -i https://pypi.tuna.tsinghua.edu.cn/simple/

pip install package_name -i http://pypi.douban.com/simple/ --trusted-host pypi.douban.com
```

---
