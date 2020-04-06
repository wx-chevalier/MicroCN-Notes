# 消息传递

自分布式计算风起以来，所谓的消息传递编程模型（Message Passing Programming Models）就被频繁讨论，所谓消息传递的概念也被引入到了越来越多的场景中。参考维基百科中的定义，消息传递的概念即包含了像 Remote Procedure Calls (RPC)，以及 Message Passing Interface (MPI)。此外，还有一些流行的过程计算，例如 pi-calculus 和 Communicating Sequential Processes (CSP)，它们启发了实用的消息传递系统；譬如 Go 中的 Channel 就是基于 pi-calculus 中的 first-class communication channels，Clojure 中的 `core.async` 库则是基于 CSP。

在消息传递编程模型领域，不仅重要的是要考虑最新的技术发展水平，而且重要的是有关消息传递和参与者模型的历史性初始论文，这些论文是最近论文中描述的编程模型的基础。 令人振奋的是，可以看到模型的哪些方面仍然存在，以及许多较新的论文都引用并解决了旧论文中存在的不足。 有很多围绕消息传递而设计的编程语言，尤其是那些侧重于编程的参与者模型和组织计算单元的编程语言。
