# Protobuf

## 历史发展

2001 年初，Protobuf 首先在 Google 内部创建，我们把它称之为 proto1，一直以来在 Google 的内部使用，其中也不断的演化，根据使用者的需求也添加很多新的功能，一些内部库依赖它。几乎每个 Google 的开发者都会使用到它。Google 开始开源它的内部项目时，因为依赖的关系，所以他们决定首先把 Protobuf 开源出去。proto1 在演化的过程中有些混乱，所以 Protobuf 的开发者重写了 Protobuf 的实现，保留了 proto1 的大部分设计，以及 proto1 的很多的想法。但是开源的 proto2 不依赖任何的 Google 的库，代码也相当的清晰。2008 年 7 月 7 日，Protobuf 开始公布出来。

Protobuf 公布出来也得到了大家的广泛的关注，逐步地也得到了大家的认可，很多项目也采用 Protobuf 进行消息的通讯，还有基于 Protobuf 的微服务框架 GRPC。在使用的过程中，大家也提出了很多的意见和建议，Protobuf 也在演化，于 2016 年推出了 Proto3。Proto3 简化了 proto2 的开发，提高了开发的效能，但是也带来了版本不兼容的问题。

目前 Protobuf 的稳定版本是 3.9.2，于 2019 年 9 月 23 日发布。由于很多公司很早的就采用了 Protobuf，所以很多项目还在使用 proto2 协议，目前是 proto2 和 proto3 同时在使用的状态。Protocol Buffer 名称来自于初期一个主要的类的名称 ProtocolBuffer。Google 当前并没有 Protobuf 的相关专利，所以不必担心侵权的问题。

## 压缩对比

Protocol Buffers 只有一种二进制编码格式，它的打包方式与 Thrift 稍有不同，但与 Thrift 的 CompactProtocol 非常相似。 Protobuf 将同样的记录塞进了 33 个字节中。对于如下的定义：

```js
message Person {
    required string user_name       = 1;
    optional int64  favorite_number = 2;
    repeated string interests       = 3;
}
```

其对应的编码记录如下：

![使用Protobuf编码的记录](https://s2.ax1x.com/2020/02/07/12SYgP.png)

# 开发环境

## protoc 安装

1. Download the appropriate release here: https://github.com/google/protobuf/releases
2. Unzip the folder
3. Enter the folder and run `./autogen.sh && ./configure && make`
4. If you run into this error: _autoreconf: failed to run aclocal: No such file or directory,_ run `brew install autoconf && brew install automake.` And run the command from step 3 again.
5. Then run these other commands. They should run without issues

```sh
$ make check

$ sudo make install

$ which protoc

$ protoc --version
```

## 代码编译

# 链接

- https://colobu.com/2019/10/03/protobuf-ultimate-tutorial-in-go/#%E5%8E%86%E5%8F%B2
