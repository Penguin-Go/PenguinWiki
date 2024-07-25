# 自定义PDF解析器

## 功能

正确设置后，可以通过右键有DOI属性的条目，选择“查找有用的PDF”来自动检索并下载论文PDF。

![](_assets/Pasted%20image%2020240724163258.png)

## 配置方法

配置路径：`编辑` - `设置` - `高级` - `编辑器` - `extensions.zotero.findPDFs.resolvers`

支持单/多解析器，配置内容示例如下：

```json
[
  {
    "name": "Sci-Hub",
    "method": "GET",
    "url": "<https://sci-hub.se/{doi}>",
    "mode": "html",
    "selector": "#pdf",
    "attribute": "src",
    "automatic": false
  },
  {
    "name": "Sci-Hub",
    "method": "GET",
    "url": "<https://sci-hub.ru/{doi}>",
    "mode": "html",
    "selector": "#pdf",
    "attribute": "src",
    "automatic": false
  },
  {
    "name": "Sci-Hub",
    "method": "GET",
    "url": "<https://sci-hub.st/{doi}>",
    "mode": "html",
    "selector": "#pdf",
    "attribute": "src",
    "automatic": false
  },
  {
    "name": "Sci-Hub",
    "method": "GET",
    "url": "<https://sci-hub.ren/{doi}>",
    "mode": "html",
    "selector": "#pdf",
    "attribute": "src",
    "automatic": false
  },
  {
    "name": "Sci-Hub",
    "method": "GET",
    "url": "<https://sci-hub.tw/{doi}>",
    "mode": "html",
    "selector": "#pdf",
    "attribute": "src",
    "automatic": false
  },
  {
    "name": "Sci-Hub",
    "method": "GET",
    "url": "<https://sci-hub.si/{doi}>",
    "mode": "html",
    "selector": "#pdf",
    "attribute": "src",
    "automatic": false
  },
  {
    "name": "Sci-Hub",
    "method": "GET",
    "url": "<https://sci-hub.shop/{doi}>",
    "mode": "html",
    "selector": "#pdf",
    "attribute": "src",
    "automatic": false
  }
]
```

Reference：[Custom PDF resolvers](https://www.zotero.org/support/kb/custom_pdf_resolvers)