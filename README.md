# GIS Navigator

一个可直接部署到 GitHub Pages 的静态 GIS 资源导航网站。

## 文件结构

- `index.html`：页面结构
- `style.css`：深色科技风格、响应式布局与明暗主题
- `script.js`：资源列表、实时搜索、分类筛选、收藏功能

## 本地预览

直接用浏览器打开 `index.html` 即可。也可以在项目目录启动任意静态 HTTP 服务，例如：

```bash
python3 -m http.server 8000
```

然后访问 `http://localhost:8000`。

## 部署到 GitHub Pages

1. 在 GitHub 新建仓库，例如 `gis-navigation`。
2. 将这三个文件上传到仓库根目录。
3. 进入仓库 **Settings → Pages**。
4. 在 **Build and deployment** 中，将 **Source** 设为 `Deploy from a branch`。
5. 选择 `main` 分支和 `/ (root)` 目录，然后保存。
6. 等待部署完成，访问 GitHub Pages 提供的地址，通常形如：
   `https://<你的用户名>.github.io/gis-navigation/`

## 自定义资源

打开 `script.js`，修改顶部的 `resources` 数组。每个资源可设置：

- `name`：网站名称
- `short`：卡片图标文字
- `category`：所属分类
- `description`：简介
- `url`：目标网址
- `tags`：用于搜索的关键词数组
- `badge`：标签
- `color`、`glow`：卡片强调色

## 功能

- 即时关键词搜索
- 分类筛选与资源计数
- 收藏功能（保存在当前浏览器的 `localStorage`）
- 明暗主题切换
- `⌘ K`（Mac）或 `Ctrl K`（Windows/Linux）快速聚焦搜索框
- 桌面和移动端响应式布局

## Surge 关键词跳转

如果你的目标是通过 Google 搜索关键词 `gis` 跳转到导航页面，可在 Surge `[URL Rewrite]` 中添加：

```ini
(?i)^https?://www\.google\.[^/]+/search\?.*?q=gis(?:&.*)?$ https://<你的用户名>.github.io/gis-navigation/ 302
```

将占位地址替换为实际的 GitHub Pages 地址。此规则只匹配提交后的 Google 搜索请求；浏览器地址栏中的单个词是否直接作为网址处理，由浏览器自身决定。


## 本次扩展资源

新增了 USGS 官方门户、中国地质云、ASF Vertex、地理空间数据云、GISRS Data、GISREAL、ArcGIS Living Atlas Wayback、Google Earth Engine Code Editor 和 NASA Landsat Science。EarthExplorer 与 Copernicus Data Space 已在原有条目中保留，避免重复。
