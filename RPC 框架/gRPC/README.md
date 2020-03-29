# gRPC

gRPC 是由 Google 开源的 RPC 框架，其内置了高性能的二进制编码，相较于 JSON 与 HTTP 其有更好的压缩率。gRPC 是 Google 与 Square 之间的合作构建的，是 Stubby，ARCWire 和 Sake（缺少参考）的公共替代品。gRPC 框架是基于 IDL（接口描述语言）的 Actor 模型的一种形式，它是通过协议缓冲区消息格式定义的。随着 HTTP/2 的引入，内部的 Google Stubby 和 Square Sake 框架现已向公众开放。通过在 HTTP/2 协议之上工作，gRPC 使消息可以作为提示流双向复用和压缩，以最大化任何微服务生态系统的容量。

![gRPC allows for asynchronous language-agnostic message passing via Protocol Buffers.](https://s1.ax1x.com/2020/03/29/GZsOpD.png)

# HTTP/2

HTTP 1.1 协议已经取得了一定的成功，但是随着分布式计算的增加，特别是在微服务领域，社区开始要求一些关键功能。创建基于无共享模型，具有双向，高吞吐量请求和响应方法的有机构建的更多模块化功能单元的现象，需要一种新的通信和集成协议。因此，HTTP/2 诞生了一个新的标准，它是一种二进制线路协议，提供了可以并发复用的压缩流。由于许多微服务实现当前在实际处理任何有效负载之前会扫描标头消息，以便扩大消息的处理和路由，因此 HTTP/2 为此提供了头压缩。最后一个重要好处是服务器端点可以根据预期的未来通信实际将缓存的资源推送到客户端，从而大大节省了客户端的通信时间和处理量。

## HTTP/2 Frames

HTTP / 2 协议现在是一种框架协议，它扩展了双向异步通信的功能。因此，每个消息都是帧的一部分，除了要处理的标准帧长以外，还将具有头，帧类型和流标识符。每个流可以具有优先级，这允许形成优先级树的流之间实现依赖性。数据可以是允许双向通信的请求或响应，具有标记通信以终止流，具有优先级设置的流控制，来自服务器的继续和推送响应以进行客户端确认的功能。以下是 HTTP / 2 帧的格式：

![The encoding a HTTP/2 frame.](https://s1.ax1x.com/2020/03/29/GZrsPO.png)

## Header Compression

HTTP 头是传递有关其他端点状态，请求或响应以及有效负载的信息的主要方法之一。这使端点能够在处理大量流时节省时间，并且能够转发信息，而不会浪费时间检查有效负载。由于头信息可能非常大，因此现在可以对其进行压缩，以实现更好的吞吐量和所存储状态信息的容量。

## Multiplexed Streams

由于流是 HTTP / 2 实现的核心，因此重要的是讨论协议中其实现的细节。由于可以从许多端点同时打开许多流，因此每个流将处于以下状态之一。每个流被多路复用在一起，形成一串通过有线传输的流，从而允许接收端点执行异步双向并发。以下是流的生命周期：

![The lifecycle of a HTTP/2 stream.](https://s1.ax1x.com/2020/03/29/GZroi8.png)

为了更好地理解该图，在其中定义一些术语很重要：

- PUSH_PROMISE - This is being performed by one endpoint to alert another that it will be sending some data over the wire.

- RST_STREAM - This makes termination of a stream possible.

- PRIORITY - This is sent by an endpoint on the priority of a stream.

- END_STREAM - This flag denotes the end of a DATA frame.

- HEADERS - This frame will open a stream.

- Idle - This is a state that a stream can be in when it is opened by receiving a HEADERS frame.

- Reserved (Local) - To be in this state is means that one has sent a PUSH_PROMISE frame.

- Reserved (Remote) - To be in this state is means that it has been reserved by a remote endpoint.

- Open - To be in this state means that both endpoints can send frames.

- Closed - This is a terminal state.

- Half-Closed (Local) - This means that no frames can be sent except for WINDOW_UPDATE, PRIORITY, and RST_STREAM.

- Half-Closed (Remote) - This means that a frame is not used by the remote endpoint to send frames of data.

## Flow Control of Streams

由于许多流将争夺连接带宽，因此可以防止传输中的瓶颈和冲突。这是通过 WINDOW_UPDATE 有效负载为每个流以及整个连接完成的，以使发送方知道接收端点有多少空间来处理新数据。

# Protocol Buffers

尽管 gRPC 是在 HTTP / 2 之上构建的，但必须使用 IDL 来执行端点之间的通信。使用协议缓冲区的自然方向是为服务器和客户端之间的序列化构造基于键值的数据的方法。在开始 gRPC 开发时，仅提供 2.0 版（proto2），该版本仅实现了数据结构，而没有任何请求/响应机制。协议缓冲区数据结构的示例如下所示：

```go
// A message containing the user's name.
message Hello {
  string name = 1;
}
```

通过有线发送时，此消息也将被编码以获得最高压缩率。例如，假设消息是字符串“ Hi”。每个协议缓冲区类型都有一个值，在这种情况下，字符串的值为 2，如下表所示。

![Tag values for Protocol Buffer types.](https://s1.ax1x.com/2020/03/29/GZsgYT.md.png)

将会注意到，协议缓冲区定义中的每个字段元素都有一个数字，代表它的标签。在图 3 中，字段名称的标签为 1。当对消息进行编码时，每个字段（键）都将以一个字节值（8 位）开头，其中最低有效的 3 位值将对类型进行编码，其余的将进行编码。标签。在这种情况下，标记为 1，类型为 2。因此，编码将为 00001 010，其十六进制值为 A。下一个字节是字符串的长度，即 2，其后是字符串 48 和 69 代表 H 和 i。因此，整个传输将如下所示：

```s
A 2 48 69
```

因此，必须更新语言以支持 gRPC，并为协议缓冲区的 3.0.0 版添加带有请求和响应定义的服务消息。更新后的实现如下所示：

```go
// The request message containing the user's name.
message HelloRequest {
  string name = 1;
}

// The response message containing the greetings
message HelloReply {
  string message = 1;
}

// The greeting service definition.
service Greeter {
  // Sends a greeting
  rpc SayHello (HelloRequest) returns (HelloReply) {}
}
```

请注意，增加了一项服务，其中 RPC 调用将使用一条消息作为请求的结构，而另一条消息为响应消息格式。一旦生成了这些 Proto 文件，便可以使用它们与 gRPC 进行编译，以生成表示 RPC 实现的经典两个端点的 Client 和 Server 文件。
