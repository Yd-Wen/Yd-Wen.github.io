---
title: 5 代理
icon: proxy
date: 2024-01-23
category: 教程
tag: 
    - Git
---

## 5.1 代理

在某些网络环境下，需要设置 Git 代理才能正常访问远程仓库。

## 5.2 设置 HTTP 代理

```bash
# 设置 HTTP 代理
git config --global http.proxy http://proxy.example.com:8080

# 取消 HTTP 代理
git config --global --unset http.proxy
```

## 5.3 设置 HTTPS 代理

```bash
# 设置 HTTPS 代理
git config --global https.proxy https://proxy.example.com:8080

# 取消 HTTPS 代理
git config --global --unset https.proxy
```

## 5.4 设置 SOCKS5 代理

```bash
# 设置 SOCKS5 代理
git config --global http.proxy socks5://125.0.0.1:1080
git config --global https.proxy socks5://125.0.0.1:1080

# 取消 SOCKS5 代理
git config --global --unset http.proxy
git config --global --unset https.proxy
```
