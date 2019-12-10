# 序列化

序列化(serialization、marshalling)的过程是指将数据结构或者对象的状态转换成可以存储(比如文件、内存)或者传输的格式(比如网络)。反向操作就是反序列化(deserialization、unmarshalling)的过程。

1987 年曾经的 Sun Microsystems 发布了 XDR。二十世纪九十年代后期，XML 开始流行，它是一种人类易读的基于文本的编码方式，易于阅读和理解，但是失去了紧凑的基于字节流的编码的优势。JSON 是一种更轻量级的基于文本的编码方式，经常用在 client/server 端的通讯中。YAML 类似 JSON，新的特性更强大，更适合人类阅读，也更紧凑。还有苹果系统的 property list。

除了上面这些和 Protobuf，还有许许多多的序列化格式，比如 Thrift、Avro、BSON、CBOR、MessagePack, 还有很多非跨语言的编码格式。项目 gosercomp 对比了各种 go 的序列化库，包括序列化和反序列的性能，以及序列化后的数据大小。总体来说 Protobuf 序列化和反序列的性能都是比较高的，编码后的数据大小也不错。Protobuf 支持很多语言，比如 C++、C#、Dart、Go、Java、Python、Rust 等，同时也是跨平台的，所以得到了广泛的应用。Protobuf 包含序列化格式的定义、各种语言的库以及一个 IDL 编译器。正常情况下你需要定义 proto 文件，然后使用 IDL 编译器编译成你需要的语言。
