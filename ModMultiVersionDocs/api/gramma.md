# 语法规范

语法解析依赖于[ModMultiVersionInterpreter(内置)](https://github.com/kitUIN/ModMultiVersionInterpreter)

主要语法:
- `(` `)`
- `!` `&&` `||`
- `!=` `>` `>=` `<` `<=` `==`
- `&`/`&&`
- `|`/`||`
- `=`/`==`
- 支持变量自动替换
- 左部省略自动补充`$$ ==`

## 关键字

- 关键字必须全大写

| 关键字                          | 说明                     |
|--------------------------------| ------------------------ |
| `PRINT`                        | [调试输出](#print)        |
| `IF`/`END IF`/`ELSE`/`ELSE IF` | [IF-ELSE表达式](#if-else) |
| `EXCLUDE`                      | [黑名单](#黑名单)          |
| `ONLY`                         | [白名单](#白名单)           |
| `ONEWAY`                       | [单向同步](#单向同步)       |
| `RENAME`                       | [重命名文件](#重命名文件)    |
| `(` `)`                        | 优先级括号           |
| `!`                            | 非                   |
| `&` `&&`                       | 并                   |
| `\|` `\|\|`                    | 或                   |
| `=` `==`                       | 相等                 |
| `!=`                           | 不相等                |
| `!=`                           | 不相等               |
| `>`                            | 大于                 |
| `>=`                           | 大于等于              |
| `<`                            | 小于                 |
| `<=`                           | 小于等于              |

## 注释符号

- `//`
- `#`


## 变量

以下变量会自动替换

| 变量名                         | 类型     | 值          | 示例            |
|-----------------------------|--------|------------|---------------|
| `$$`                        | String | 加载器版本文件夹名称 | `fabric-1.16.5` |
| `$folder`                   | String | 文件所在文件夹名称  |               |
| `$loader`                   | String | 加载器名称(小写)  | `forge`       |
| `$fileName`                 | String | 文件名称(带后缀)  | `test.java`   |
| `$fileNameWithoutExtension` | String | 文件名称(无后缀)  | `test`        |


## 布尔表达式

可以使用上述关键字进行组合

左部省略时自动补充`$$ ==`

最终计算时会替换掉变量

示例:

- `fabric-1.16.5`会自动识别为`$$ == fabric-1.16.5`
- `>=fabric-1.16.5`会自动识别为`$$ >= fabric-1.16.5`
- `fabric-1.16.5 || fabric-1.18.2`会自动识别为`$$ == fabric-1.16.5 || $$ == fabric-1.18.2`

## IF-ELSE

- 注释符号开头
- 必须以`{注释符号} IF {布尔表达式}`开头
- 必须以`{注释符号} END IF`结尾
- 允许使用`{注释符号} ELSE`,`{注释符号} ELSE IF {布尔表达式}`

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
// IF fabric-1.16.5
    client.openScreen(screen);
// ELSE
//        client.setScreen(screen);
// END IF
}
```

其他文件夹中

```java
    public static void setScreen(MinecraftClient client, Screen screen) {
// IF fabric-1.16.5
//        client.openScreen(screen);
// ELSE
    client.setScreen(screen);
// END IF
}
```

## PRINT

输出调试,主要用于[变量](#变量)的调试

示例

```
// PRINT folder: $folder 
// PRINT loader: $loader
```
