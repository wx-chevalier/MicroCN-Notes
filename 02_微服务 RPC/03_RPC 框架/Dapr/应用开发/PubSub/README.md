# 消息发布与订阅

发布/订阅模式允许微服务使用消息相互通信。生产者或发布者向一个主题发送消息，而不知道什么应用程序会收到它们。这涉及将它们写入输入通道。同样，消费者或订阅者订阅主题并接收其消息，而不知道是哪个服务产生了这些消息。这涉及到从一个输出通道接收消息。中间的 Message Broker 负责将每条消息从输入通道复制到输出通道，供所有对该消息感兴趣的订阅者使用。当你需要将微服务相互解耦时，这种模式特别有用。

Dapr 中的发布/订阅 API 提供了至少一次的保证，并与各种消息中介和队列系统集成。您的服务所使用的具体实现是可插拔的，并在运行时配置为 Dapr pub/sub 组件。这种方法从您的服务中移除了依赖性，从而使您的服务更加可移植和灵活地适应变化。

![Dapr pub/sub 架构](https://pic.imgdb.cn/item/6052e2b1524f85ce29311227.jpg)

Dapr pub/sub 构件提供了一个平台无关的 API 来发送和接收消息。你的服务将消息发布到一个命名的主题上，也可以订阅一个主题来消费消息。服务对 Dapr pub/sub 构件进行网络调用，该构件以 sidecar 形式暴露。然后这个构件调用到一个封装了特定消息代理产品的 Dapr pub/sub 组件。为了接收主题，Dapr 代表您的服务订阅 Dapr pub/sub 组件，并在消息到达时将其传送到端点。

下图显示了一个运输服务和电子邮件服务的例子，它们都订阅了由购物车服务发布的主题。每个服务都会加载指向同一个 pub/sub 消息总线组件的 pub/sub 组件配置文件，例如 Redis Streams、NATS Streaming、Azure 服务总线或 GCP Pub/Sub。

![多服务勾连示意图](https://pic.imgdb.cn/item/6052e32e524f85ce293153fe.jpg)

下图有相同的服务，不过这次显示的是 Dapr 发布 API，在订阅服务上发送 "订单 "主题和订单端点，这些主题消息由 Dapr 交付发布。

![基于 Dapr 的 pub/sub 组件](https://pic.imgdb.cn/item/6052e428524f85ce2931de01.jpg)

## 基础特性

### 消息格式

为了实现消息路由并为每条消息提供额外的上下文，Dapr 使用 CloudEvents 1.0 规范作为其消息格式。应用程序向使用 Dapr 的主题发送的任何消息都会自动 "包装 "在 Cloud Events 信封中，使用 Content-Type 头部值作为数据内容类型属性。Dapr 实现了以下云事件字段：id、source、specversion、type、datacontenttype (Optional)。

```json
{
  "specversion": "1.0",
  "type": "xml.message",
  "source": "https://example.com/message",
  "subject": "Test XML Message",
  "id": "id-1234-5678-9101",
  "time": "2020-09-23T06:23:21Z",
  "datacontenttype": "text/xml",
  "data": "<note><to>User1</to><from>user2</from><message>hi</message></note>"
}
```

### Message subscription

Dapr 应用程序可以订阅发布的主题。Dapr 允许您的应用程序通过两种方法来订阅主题。

- Declarative, 在一个外部文件中定义订阅。
- Programmatic，在用户代码中定义订阅。

声明式和编程式方法都支持相同的功能。声明式方法从您的代码中删除了 Dapr 的依赖性，并允许现有的应用程序订阅主题，而无需更改代码。程序化方法在您的代码中实现订阅。

### Message delivery

原则上，当订阅者在处理消息后以无错误响应的方式回应时，Dapr 认为消息成功交付。为了更精细的控制，Dapr 的发布/订阅 API 还提供了明确的状态，定义在响应有效载荷中，订阅者可以使用这些状态来指示 Dapr 的具体处理指令（例如 RETRY 或 DROP）。

### 至少一次保证

Dapr 保证消息交付的至少一次语义。这意味着，当一个应用程序使用发布/订阅 API 向一个主题发布消息时，Dapr 确保该消息将至少向每个订阅者传递一次。

### 消费群体和竞争消费者模式

Dapr 会自动处理诸如消费者组和使用单个消费者组的多个应用程序实例等概念的负担。当同一应用程序的多个实例（运行相同的 app-ID）订阅一个主题时，Dapr 只向该应用程序的一个实例发送每个消息。这通常被称为竞争消费者模式，如下图所示。

![Message Queue 模式](https://pic.imgdb.cn/item/6052e676524f85ce29334326.jpg)

### Topic scoping

默认情况下，支持 Dapr pub/sub 组件（如 Kafka、Redis Stream、RabbitMQ）的所有主题都可供配置该组件的每个应用程序使用。为了限制哪些应用程序可以发布或订阅主题，Dapr 提供了主题范围。这使您能够说明允许应用程序发布哪些主题以及允许应用程序订阅哪些主题。

### Message Time-to-Live (TTL)

Dapr 可以在每条消息的基础上设置超时消息，即如果消息没有被 pub/sub 组件读取，那么该消息就会被丢弃。这是为了防止未被读取的消息的积累。如果消息在队列中的时间超过了配置的 TTL，则表示该消息已经死亡。
