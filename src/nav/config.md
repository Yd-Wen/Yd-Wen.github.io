# 导航页配置说明

导航卡片的内容通过在 `nav/README.md` 文件的 **frontmatter** 中配置来实现。

## 配置文件位置

打开 `src/nav/README.md`，修改 frontmatter 中的 `categories` 字段。

## 配置结构

```yaml
---
categories:
  - id: dev-tools           # 分类唯一标识（用于匹配按钮和卡片）
    name: 开发工具          # 底部按钮显示名称
    icon: /assets/icon/...  # 按钮图标路径（相对于 public 目录）
    items:                  # 该分类下的导航卡片列表
      - name: GitHub
        url: https://github.com
        icon: https://github.com/favicon.ico   # 支持 URL、本地路径、iconfont 类名
        external: true      # 是否在新窗口打开
---
```

## 图标格式说明

`icon` 字段支持三种格式：

1. **完整 URL**: `https://example.com/favicon.ico`
2. **本地路径**: `/assets/icon/icon.png`（相对于 public 目录）
3. **iconfont 类名**: `icon-github`（需要在项目中引入对应字体图标）

## 操作示例

### 添加新导航项

在对应分类的 `items` 数组中添加：

```yaml
items:
  - name: 百度
    url: https://baidu.com
    icon: https://www.baidu.com/favicon.ico
    external: true
```

### 添加新分类

在 `categories` 数组中添加新对象：

```yaml
categories:
  - id: tools
    name: 工具集
    icon: /assets/icon/tools.png
    items:
      - name: 示例工具
        url: https://example.com
        icon: icon-tool
        external: true
```

### 删除导航项

直接从 `items` 数组中删除对应条目即可。

## 注意事项

1. 配置位于 `nav/README.md` 的 frontmatter 中（`---` 包裹的区域）
2. 修改保存后，开发服务器会自动刷新
3. `id` 字段在同一页面内必须唯一
4. 最后一个按钮（壁纸切换）是固定的，不需要在配置中定义
