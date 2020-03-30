# Thrift

Thrift 和 Protocol Buffers 每一个都带有一个代码生成工具，它采用了类似于这里所示的模式定义，并且生成了以各种编程语言实现模式的类。您的应用程序代码可以调用此生成的代码来对模式的记录进行编码或解码用这个模式编码的数据是什么样的？令人困惑的是，Thrift 有两种不同的二进制编码格式，分别称为 BinaryProtocol 和 CompactProtocol（实际上，Thrift 有三种二进制协议：CompactProtocol 和 DenseProtocol，尽管 DenseProtocol 只支持 C++ 实现，所以不算作跨语言）。

# BinaryProtocol

先来看看 BinaryProtocol，使用这种格式的编码来编码如下的消息只需要 59 个字节，

```js
struct Person {
    1: required string       userName,
    2: optional i64          favoriteNumber,
    3: optional list<string> interests
}
```

使用 Thrift 二进制协议编码的记录如下图所示：

![使用Thrift二进制协议编码的记录](https://s2.ax1x.com/2020/02/07/1g2BtA.md.png)

类似于 MessagePack，每个字段都有一个类型注释（用于指示它是一个字符串，整数，列表等），还可以根据需要指定长度（字符串的长度，列表中的项目数）。出现在数据中的字符串(“Martin”, “daydreaming”, “hacking”)也被编码为 ASCII（或者说，UTF-8），与之前类似。不同的地方在于，最大的区别是没有字段名(userName, favoriteNumber, interest)。相反，编码数据包含字段标签，它们是数字(1, 2 和 3)。这些是模式定义中出现的数字。字段标记就像字段的别名 - 它们是说我们正在谈论的字段的一种紧凑的方式，而不必拼出字段名称。

# CompactProtocol

Thrift CompactProtocol 编码在语义上等同于 BinaryProtocol，但是如下图所示，它只将相同的信息打包成只有 34 个字节。它通过将字段类型和标签号打包到单个字节中，并使用可变长度整数来实现。数字 1337 不是使用全部八个字节，而是用两个字节编码，每个字节的最高位用来指示是否还有更多的字节来。这意味着-64 到 63 之间的数字被编码为一个字节，-8192 和 8191 之间的数字以两个字节编码，等等。较大的数字使用更多的字节。

![使用Thrift压缩协议编码的记录](https://s2.ax1x.com/2020/02/07/1gzffI.md.png)
