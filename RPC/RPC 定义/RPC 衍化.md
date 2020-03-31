# RPC 衍化

RPC 范式最初于 1980 年代提出，并一直作为执行分布式计算的相关模型而发展，该模型最初是为 LAN 开发的，现在可以在开放网络中实现，作为跨 Internet 的 Web 服务。它已经经历了漫长而艰巨的旅程。这是 RPC 经历的三个主要（重叠）阶段。

# The Rise: All Hail RPC (Early 1970’s - Mid 1980’s)

RPC 开始强大。随着 RFC 674（Postel＆White，1974）和 RFC 707（Postel＆White，1974; White，1975）的问世，指定了远程过程调用的设计，随后是 Nelson 等。他（Birrell＆Nelson，1984）提出了第一种针对 Cedar 编程语言的 RPC 实现，RPC 彻底改变了系统，并产生了最早的分布式系统之一。

有了这些早期的成就，人们开始将 RPC 用作事实上的设计选择。第一次实施后，它成为系统社区中的圣杯。

# The Fall: RPC is Dead (Late 1970’s - Late 1990’s)

RPC 尽管取得了初步的成功，但并非没有缺陷。在其诞生的一年之内，RPC 的局限性开始赶上它。RFC 684 批评 RPC 的延迟，故障和开销成本。它还专注于消息传递系统，以替代 RPC 设计。1988 年，Tenenbaum 等。Al 等人对 RPC 提出了类似的关注（Tanenbaum 和 van Renesse，1987）。谈到了异构设备的问题，替代消息传递，数据包丢失，网络故障，RPC 的同步特性，并强调了 RPC 并非千篇一律的模型。

1994 年，发布了《分布式计算说明》。该论文声称 RPC 存在“根本缺陷”（Waldo，Wyant，Wollrath 和 Kendall，1997 年）。它讨论了统一的对象视图，并列举了将这些对象划分为 RPC 中的分布式计算的四个主要问题：通信延迟，地址空间分离，部分故障和并发问题（由两个并发客户端请求访问同一远程对象导致）。这些问题中的大多数（部分故障除外）与分布式计算本身具有内在联系，但是 RPC 系统的部分故障意味着在 RPC 系统中不一定总能取得进展。

但是，这个时代并不是 RPC 的死胡同。在这个时代引入了一些现代 RPC 系统的初步设计。也许，这个时代最早的系统是用于 Sun 网络文件系统（NFS）的 SunRPC（Sandberg，Goldberg，Kleiman，Walsh 和 Lyon，1985）。紧随 SunRPC 之后的是 CORBA（Group，1991），其次是 Java RMI（Wollrath，Riggs 和 Waldo，1996）。但是，这些系统的最初实现充满了各种问题和设计缺陷。例如，Java RMI 不能处理网络故障，而是假定一个具有零延迟的可靠网络（Wollrath，Riggs 和 Waldo，1996 年）。

# The Rise, Again: Long Live RPC (Late 1990’s - Today)

尽管 RPC 在成立初期就面临问题，但它经受住了时间的考验。研究人员意识到 RPC 的局限性，并专注于纠正而不是强制执行 RPC，他们开始在需要使用 RPC 的应用程序中使用 RPC。RPC 系统的实现者开始向 RPC 添加异常处理，异步处理，网络故障处理以及对不同语言/设备之间的异构性的支持。

在这个时代，SunRPC 经过了各种扩展，并被称为开放网络计算 RPC（ONC RPC）。随着互联网标准的制定，CORBA 和 RMI 也进行了各种修改。在这个时代也出现了一种新的 RPC，即异步 RPC（异步 RPC），从而产生了使用 Futures 与 Promises 的系统，例如 Finagle（Eriksen，2013 年）和 Cap’n Proto（2010 年后）。

![Synchronous RPC.](https://s1.ax1x.com/2020/03/29/GZLMUf.png)

![Asynchronous RPC.](https://s1.ax1x.com/2020/03/29/GZL38g.png)

传统的同步 RPC 是阻塞性操作，而异步 RPC 是非阻塞性操作（Dewan，2006）。图 2 显示了一个同步 RPC 调用，而图 3 显示了一个异步 RPC 调用。在同步 RPC 中，客户端向服务器发送请求，然后阻塞等待服务器执行其计算并返回结果。客户端只能从服务器获取结果后才能继续。在异步 RPC 中，客户端向服务器执行请求，并且仅等待输入参数/参数传递的确认。此后，客户端继续前进，并在服务器完成处理后，将中断发送给客户端。客户端从服务器接收此消息，接收结果，然后继续。

异步 RPC 使得可以将远程调用与返回值分开，从而可以编写单线程客户端以在需要处理的特定间隔处处理多个 RPC 调用（“异步 RPC”，2006 年）。它还可以更轻松地处理速度较慢的客户端/服务器，以及轻松地传输大型数据（由于其增量性质）（“异步 RPC”，2006 年）。在 2000 年后时代，MAUI（Cuervo 等人，2010），Cap'n Proto（肯顿，nd），gRPC（Google，nd），Thrift（Prunicki，2009）和 Finagle（Eriksen，2013）已经发布。，这极大地促进了 RPC 的广泛使用。这些较新的系统中大多数都包含接口描述语言（IDL）。这些 IDL 指定了通用协议和接口语言，可用于在以不同编程语言编写的客户端和服务器之间传输信息，从而使这些 RPC 实现与语言无关。一些最常见的 IDL 是 JSON，XML 和 ProtoBuf。

## Java Remote Method Invocation

Java RMI（Java 远程方法调用）是一种 Java 实现，用于在客户端和服务器之间执行 RPC（远程过程调用）。使用存根的客户端通过套接字连接将信息通过网络传递到包含远程对象的服务器。服务器上的远程对象注册表（ROR）包含对对象的引用，这些对象可以远程访问，并且客户端将通过该对象进行连接。然后，客户端可以在服务器上请求方法的调用，并以答案作为响应。

RMI 通过编码而不是加密来提供一些安全性，尽管可以通过在安全连接或其他方法上建立隧道来增强安全性。而且，RMI 非常特定于 Java。它不能用来利用大多数 RPC 实现固有的语言独立功能。RMI 的主要问题可能在于它不提供访问透明性。这意味着程序员（不是客户端程序）无法区分本地对象还是远程对象，这使得处理网络中的部分故障相对困难。

## CORBA

CORBA (Common Object Request Broker Architecture)由对象管理小组（CORBA，n.d.）创建，以允许多台计算机之间进行语言无关的通信。它是通过接口定义语言（IDL）定义的面向对象模型，并且通过对象请求代理（ORB）管理通信。该 ORB 充当对象的代理。CORBA 可以看作是一种独立于语言的 RMI 系统，其中每个客户端和服务器都有一个 ORB，通过它们它们可以进行通信。CORBA 的好处是它允许可以相互通信的多语言实现，但是对 CORBA 的许多批评都与实现之间的一致性差有关，并且到现在为止已经过时了。而且，CORBA 遭受与 Java RMI 相同的访问透明性问题。

## XML-RPC and SOAP

XML-RPC 规范向服务器发送 HTTP Post 请求，该请求的格式为 XML，该 XML 由信息头和仅调用一种方法的有效负载组成。它最初于 1990 年代末发布，与 RMI 不同，它通过使用 HTTP 作为透明机制来提供透明性。信息头必须提供基本信息，例如用户代理和有效负载的大小。有效负载必须通过通过 methodName 和相关参数值指定名称来启动 methodCall 结构。该方法的参数可以是标量，结构或（递归）数组。标量的类型可以是 i4，int，boolean，string，double，dateTime.iso8601 或 base64 中的一种。标量用于创建更复杂的结构和数组。

下面是 XML-RPC 文档提供的示例：

```xml
POST /RPC2 HTTP/1.0
User-Agent: Frontier/5.1.2 (WinNT)
Host: betty.userland.com
Content-Type: text/xml
Content-length: 181

<?xml version="1.0"?>
<methodCall>
  <methodName>examples.getStateName</methodName>
  <params>
    <param>
      <value><i4>41</i4></value>
    </param>
  </params>
</methodCall>
```

对请求的响应将具有带参数和值的 methodResponse，或者在发生错误的情况下具有相关的 faultCode 的错误：

```xml
HTTP/1.1 200 OK
Connection: close
Content-Length: 158
Content-Type: text/xml
Date: Fri, 17 Jul 1998 19:55:08 GMT
Server: UserLand Frontier/5.1.2-WinNT

<?xml version="1.0"?>
<methodResponse>
  <params>
    <param>
      <value><string>South Dakota</string></value>
    </param>
  </params>
</methodResponse>
```

SOAP（简单对象访问协议）是 XML-RPC 的后继产品，它是用于在客户端和服务器之间进行通信的 Web 服务协议。它最初是由 Microsoft（Ferguson，n.d.）的一个小组设计的。SOAP 消息是由信封组成的 XML 格式的消息，在信封中提供了标头和有效负载（就像 XML-RPC 一样）。消息的有效负载包含消息的请求和响应，该消息通过 HTTP 或 SMTP 传输（与 XML-RPC 不同）。

SOAP 可以看作是 XML-RPC 的超集，它提供了对更复杂的身份验证方案的支持，以及对 WSDL（Web 服务描述语言）的支持，从而使发现和与远程 Web 服务的集成更加容易。SOAP 的好处在于，它为通过多种传输协议进行传输提供了灵活性。基于 XML 的消息使 SOAP 变得与语言无关，尽管解析此类消息可能会成为瓶颈。

## Thrift

Thrift 是 Facebook 创建的异步 RPC 系统，现已成为 Apache Foundation 的一部分（Prunicki，2009 年）。它是一种与语言无关的接口描述语言（IDL），通过它可以为客户端和服务器生成代码。通过在处理描述文件后自定义协议和传输，它提供了压缩序列化的机会。也许，Thrift 的最大优点是其二进制数据格式的开销非常低。它的传输成本相对较低（与 SOAP 等其他替代方法相比）（Maheshwar，2013 年），使其对于大量数据传输非常有效。

## Finagle

Finagle 是一个容错，与协议无关的运行时，用于执行 RPC 和高层 API 调用以构成 Futures，并在后台生成 RPC 调用。它是由 Twitter 创建的，是用 Scala 编写的，可以在 JVM 上运行。它基于三种对象类型：服务对象，过滤器对象和未来对象（Eriksen，2013 年）。Future 的对象通过异步请求计算来执行操作，这些计算将在将来的某个时间返回响应。这些 Future 对象是 Finagle 中的主要通信机制。所有输入和输出均表示为 Future 对象。服务对象在处理请求后返回 Future 的端点。这些服务对象可以视为用于实现客户端或服务器的接口。

下面显示了一个示例 Finagle 服务器，该服务器读取请求并返回请求的版本。此示例摘自 Finagle 文档：

```java
import com.twitter.finagle.{Http, Service}
import com.twitter.finagle.http
import com.twitter.util.{Await, Future}

object Server extends App {
  val service = new Service[http.Request, http.Response] {
    def apply(req: http.Request): Future[http.Response] =
      Future.value(
        http.Response(req.version, http.Status.Ok)
      )
  }
  val server = Http.serve(":8080", service)
  Await.ready(server)
}
```

如果需要从请求中进行其他定制，则 Filter 对象将转换请求以进行进一步处理。它们提供了与程序无关的操作，例如超时等。它们接受服务，并通过应用的过滤器提供新的服务对象。在 Finagle 中也可以聚合多个过滤器。接收服务并使用超时创建新服务的超时过滤器示例如下所示。此示例摘自 Finagle 文档：

```java
import com.twitter.finagle.{Service, SimpleFilter}
import com.twitter.util.{Duration, Future, Timer}

class TimeoutFilter[Req, Rep](timeout: Duration, timer: Timer)
  extends SimpleFilter[Req, Rep] {

  def apply(request: Req, service: Service[Req, Rep]): Future[Rep] = {
    val res = service(request)
    res.within(timer, timeout)
  }
}
```

## Open Network Computing RPC (ONC RPC)

ONC 最初是作为 Sun NFS 的 SunRPC 引入的（Sandberg，Goldberg，Kleiman，Walsh 和 Lyon，1985）。Sun NFS 系统具有无状态服务器，具有客户端缓存，唯一的文件处理程序以及受支持的 NFS 读取，写入，截断，取消链接等操作。但是，SunRPC 在 1995 年（Srinivasan，1995 年）和 2009 年（Thurlow，2009 年）被修订为 ONC。ONC（和 SunRPC）中使用的 IDL 是外部数据表示（XDR），这是一种专用于网络通信的序列化机制，因此，ONC 仅限于诸如网络文件系统之类的应用程序。

## Mobile Assistance Using Infrastructure (MAUI)

微软开发的 MAUI 项目是一种用于移动系统的计算卸载系统。这是一个自动化系统，可以将移动代码转移到专用的基础架构上，以延长移动设备的电池寿命，最大程度地减少程序员的负担，并在现场进行任何复杂的计算。MAUI 使用 RPC 作为移动台和基础结构之间的通信协议。

## gRPC

gRPC 是 Google 和 Square 开发的 Bi-directional Streaming RPC 协议。gRPC 的 IDL 是协议缓冲区（也称为 ProtoBuf），是 Stubby，ARCWire 和 Sake 的替代品。在一般的 RPC 机制中，客户端启动与服务器的连接，只有客户端可以请求，而服务器只能响应传入的请求。但是，在双向 gRPC 流中，尽管初始连接是由客户端（称为端点 1）发起的，但是一旦建立连接，服务器（称为端点 2）和端点 1 都可以发送请求和接收响应 。这极大地简化了两个端点之间相互通信（例如网格计算）的开发。由于两个流都是独立的，因此也省去了在端点之间创建两个独立连接的麻烦（一个从端点 1 到端点 2，另一个从端点 2 到端点 1）。gRPC 使用标头压缩在单个连接上多路复用请求。这使得 gRPC 可以用于电池寿命和数据使用很重要的移动客户端。核心库使用 C 语言（Java 和 Go 除外），并且通过该库连接的所有其他语言都实现了表面 API（Google，n.d。）。

由于 Protocol Buffers 已被许多个人和公司使用，因此 gRPC 使其自然可以通过 gRPC 扩展其 RPC 生态系统。像 Cisco，Juniper 和 Netflix 等公司发现采用它很实用。大部分 Google Public API（例如其地标和地图 API）也已移植到 gRPC ProtoBuf。

## Cap’n Proto

CapnProto 是一个数据交换 RPC 系统，它绕过了数据编码步骤，从而显着提高了呼叫性能。它是由 gRPC 的 ProtoBuf 的原始作者开发的，但是由于它使用字节（二进制数据）进行编码/解码，因此其性能优于 gRPC 的 ProtoBuf。它使用 Futures 与 Promises，并承诺将各种远程操作组合为一个操作，以降低通讯的消耗。这意味着如果客户端调用一个函数 foo 然后在 foo 的输出上调用另一个函数，Cap'n Proto 会将这两个操作聚合为一个 `bar(foo(x))`，其中 x 是函数 foo 的输入。这样可以节省多次往返，尤其是在面向对象的程序中。

# gRPC & Thrift，最流行的候选者

尽管有许多候选人被认为是 RPC 宝座的顶级竞争者，但其中大多数都是针对特定类型的应用的。ONC 通常特定于网络文件系统（尽管已按标准进行推送），Cap'n Proto 相对较新且未经测试，MAUI 特定于移动系统，开源 Finagle 主要在 Twitter 上使用（并不广泛），并且由于透明度问题，Java RMI 甚至还差得很远。可能是最强大，最实用的系统是 Apache Thrift 和 Google 的 gRPC，这主要是因为这两个系统可满足大量编程语言的需要，与其他技术相比具有显着的性能优势，并且正在积极开发中。

Thrift 实际上是在几年前发布的，而 gRPC 的第一个稳定版本是在 2016 年 8 月发布的。但是，尽管已经发布了一段时间，但 Thrift 目前不如 gRPC 流行。gRPC 核心是用 C 编写的（Java 和 Go 除外），包装器是用其他语言编写的以便与该核心通信，而 Thrift 核心是用 C++ 编写的。gRPC 还提供了呼叫者和被呼叫者之间更轻松的双向流通信。客户端通常会发起通信，一旦建立连接，客户端和服务器就可以彼此独立地执行读取和写入操作。但是，Thrift 中的双向流传输可能会有些困难，因为它明确地专注于客户端-服务器模型。要启用双向异步流传输，可能必须运行两个单独的系统。

从异常处理的角度，Thrift 将异常处理同样作为消息来看待，而开发者必须手动处理 gRPC 中的异常。在 Thrift 中，可以将异常返回到消息中，而在 gRPC 中，程序员可以显式定义此行为。Thrift 异常处理使编写客户端应用程序更加容易。尽管可以在这两种系统中实现自定义身份验证机制，但 gRPC 附带了使用 SSL/TLS 和 Google 令牌的身份验证。

此外，基于 gRPC 的网络通信是使用 HTTP/2 完成的。HTTP/2 使通信双方使用同一端口多路复用网络连接变得可行。与 HTTP/1.1 相比，这在内存使用方面更为有效。由于 gRPC 通信是通过 HTTP/2 完成的，因此这意味着 gRPC 可以轻松地多路复用不同的服务。至于 Thrift，可以进行多路复用服务，但是由于缺乏底层传输协议的支持，因此可以使用 TMultiplexingProcessor 类（以代码形式）执行。但是，gRPC 和 Thrift 都允许异步 RPC 调用。这意味着客户端可以将请求发送到服务器并继续执行，并处理服务器到达的响应。下表总结了 gRPC 和 Thrift 之间的主要比较。

| Comparison          | Thrift                                                                                                    | gRPC                                                         |
| :------------------ | :-------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------- |
| License             | Apache2                                                                                                   | BSD                                                          |
| Sync/Async RPC      | Both                                                                                                      | Both                                                         |
| Supported Languages | C++, Java, Python, PHP, Ruby, Erlang, Perl, Haskell, C#, Cocoa, JavaScript, Node.js, Smalltalk, and OCaml | C/C++, Python, Go, Java, Ruby, PHP, C#, Node.js, Objective-C |
| Core Language       | C++                                                                                                       | C                                                            |
| Exceptions          | Allows being built in the message                                                                         | Implemented by the programmer                                |
| Authentication      | Custom                                                                                                    | Custom + Google Tokens                                       |
| Bi-Directionality   | Not straightforward                                                                                       | Straightforward                                              |
| Multiplexing        | Possible via `TMultiplexingProcessor` class                                                               | Possible via HTTP/2                                          |

尽管，随着 gRPC 的日益普及以及它仍处于开发的早期阶段，很难特别选择一个，但在过去的一年中，总体趋势已经开始转向支持 gRPC，它为 Thrift 带来了收益。它可能不是有用的指标，但平均而言，搜索 gRPC 的频率是 Thrift 的三倍。
