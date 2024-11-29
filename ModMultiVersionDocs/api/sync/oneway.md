# 单向同步

> [!IMPORTANT]  
> ONEWAY必须写在文件的第一行,不然将不起作用

在文件的顶部使用关键字`ONEWAY`

用法:

```
{注释符号} ONEWAY
```

单向情况下,将会删除多版本代码的注释

> [!IMPORTANT]  
> 如果启用单向之后又改回双向,立刻在源文件中进行手动同步,请注意不要触发反向修改,不然会损坏原文件

示例:

```java
public static void setScreen(MinecraftClient client, Screen screen) {
// IF fabric-1.16.5
//        client.openScreen(screen);
// ELSE
//        client.setScreen(screen);
// END IF
}
```

在`fabric-1.16.5`文件夹中

```java
public static void setScreen(MinecraftClient client, Screen screen) {
    client.openScreen(screen);
}
```

其他文件夹中

```java
public static void setScreen(MinecraftClient client, Screen screen) {
    client.setScreen(screen);
}
```