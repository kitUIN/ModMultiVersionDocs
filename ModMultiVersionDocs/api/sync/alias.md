# 别名替换

## 说明
- 要求:
    - 本插件0.16.6+
    - [ModMultiVersionTool](https://github.com/kitUIN/ModMultiVersionTool)1.2.7+
    - 如果使用`git`,需要上传`.idea/ModAliasState.xml`

- 说明:
    - 双向替换
    - 建议只针对完整类名使用
 


- 如何使用
    - 打开`视图`-`工具窗口`-`Alias Tool`
    - 右键`root`新建,命名你的变量,例如`Style`,会自动填充为`#Style#`
    - 右键`Style`新建,设置条件表达式,例如`> forge-1.16.5`,再输入满足条件的内容,可以添加多个

## 示例

```txt
root                
├── #Style#               
│   ├──  > forge-1.16.5 
│   │  └── net.minecraft.network.chat.Style           
│   └──  forge-1.16.5    
       └── net.minecraft.util.text.Style     
```

```txt
// origin文件夹内
public static #Style# getStyleFromCode(ChatImageCode code) {
    return #Style#.EMPTY;
}
```

```java
// > forge-1.16.5 
// #Style#自动替换为net.minecraft.network.chat.Style
public static #Style# getStyleFromCode(ChatImageCode code) { // [!code --]
public static net.minecraft.network.chat.Style getStyleFromCode(ChatImageCode code) { // [!code ++]
    return #Style#.EMPTY; // [!code --]
    return net.minecraft.network.chat.Style.EMPTY; // [!code ++]
}
```

```java
// forge-1.16.5
// #Style#自动替换为net.minecraft.util.text.Style
public static #Style# getStyleFromCode(ChatImageCode code) { // [!code --]
public static net.minecraft.util.text.Style getStyleFromCode(ChatImageCode code) { // [!code ++]
    return #Style#.EMPTY; // [!code --]
    return net.minecraft.util.text.Style.EMPTY; // [!code ++]
}
```