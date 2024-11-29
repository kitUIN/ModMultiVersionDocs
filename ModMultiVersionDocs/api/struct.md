# 项目结构规范

```
📦 ChatImage                         # 项目名称
├── 📂 origin                        # 全局级 用于同步
├── 📂 forge                         # 加载器文件夹
│   ├── 📂 forge-1.20.1              # 1.20.1forge (加载器版本文件夹)
│   ├── 📂 ...                       # 别的版本
│   └── 📂 origin                    # 加载器级 用于同步
├── 📂 fabric                        # 加载器文件夹
├── 📂 ...                           # 别的加载器
├── 📂 tool                          # 工具文件夹(可选)
│   └── 🔧 ModMultiVersionTool.jar   # 构建工具(命令行版)
└── 📜 ...                           # 其他文件
```

本插件使用特定名称的文件夹来进行文件同步

## 全局级文件夹

项目根目录下的`origin`文件夹

全局级origin文件夹下的所有文件将会以`相同相对路径`的方式,复制到`所有`的`加载器版本文件夹`下

## 加载器级文件夹

项目根目录下的`{loader}/origin`文件夹，其中`{loader}`为设定的加载器名称（比如forge，fabric等）

加载器级origin文件夹下的所有文件将会以`相同相对路径`的方式,复制到`当前加载器`下的`版本文件夹`下

::: warning 注意
**加载器origin的优先级高于全局级origin**

也就是一个文件同时在加载器origin与全局级origin中时

会复制加载器origin中的文件，而全局级origin中的不复制
:::
## 示例

全局origin文件夹下有文件
```
src/main/java/io/github/kituin/chatimage/client/ChatImageClient.java
```

他将会被复制到
```
{loader}/{loader-version}/src/main/java/io/github/kituin/chatimage/client/ChatImageClient.java
```

如果`{loader}`为`fabric`，`{loader-version}`为`fabric-1.20`

则将复制到
```
fabric/fabric-1.20/...../ChatImageClient.java
```

如果origin是在加载器目录下,则只会复制到当前加载器内的版本文件夹下