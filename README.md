[![返回目录](https://i.postimg.cc/WzXsh0MX/image.png)](https://parg.co/UdT)

# 微服务架构

本篇着眼于从单体分层架构、SOA 服务化架构、微服务架构到云原生架构衍化过程中的理论与实践。

![mindmap](https://i.postimg.cc/qRMxds4K/image.png)

# 单体分层架构

在 Web 应用程序发展的早期，大部分工程是将所有的服务端功能模块打包到单个巨石型（Monolith）应用中，譬如很多企业的 Java 应用程序打包为 war 包，最终会形成如下的架构：

![](https://i.postimg.cc/RhHL8Q4q/image.png)

巨石型应用易于搭建开发环境、易于测试、易于部署；其缺陷也非常明显，无法进行局部改动与部署，编译时间过长，回归测试周期过长，开发效率降低等。集中式架构分为标准的三层：数据访问层、服务层和 Web 层。

在 Web2.0 时代刚刚流行的时候，互联网应用与企业级应用并没有本质的区别，集中式架构分为标准的三层：数据访问层、服务层和 Web 层。

- 数据访问层用于定义数据访问接口，实现对真实数据库的访问；
- 服务层用于对应用业务逻辑进行处理；
- Web 层用于处理异常、逻辑跳转控制、页面渲染模板等。

# SOA 面向服务架构

SOA（Service-Oriented Architecture） 面向服务架构，是在互联网应用规模迅速增长，集中式架构已无法做到无限制地提升系统的吞吐量的背景下，产生的涉及模块化开发、分布式扩展部署等相对宽泛的概念。

![](https://i.postimg.cc/g2sRJB03/image.png)

SOA 是一个组件模型，它将应用程序的不同功能单元（称为服务）通过这些服务之间定义良好的接口和契约联系起来。SOA 中的接口独立于实现服务的硬件平台、操作系统和编程语言，采用中立的方式进行定义。这使得构建在各种各样的系统中的服务可以以一种统一和通用的方式进行交互。面向服务架构，它可以根据需求通过网络对松散耦合的粗粒度应用组件进行分布式部署、组合和使用。服务层是 SOA 的基础，可以直接被应用调用，从而有效控制系统中与软件代理交互的人为依赖性。

实施 SOA 的关键目标是实现企业 IT 资产的最大化作用。要实现这一目标，就要在实施 SOA 的过程中牢记以下特征：可从企业外部访问、随时可用、粗粒度的服务接口分级、松散耦合、可重用的服务、服务接口设计管理、标准化的服务接口、支持各种消息模式、精确定义的服务契约。

![](https://i.postimg.cc/pTqK6Gw2/image.png)

服务消费者（Service Consumer）可以通过发送消息来调用服务，这些消息由一个服务总线（Service Bus）转换后发送给适当的服务实现。这种服务架构可以提供一个业务规则引（Business Rules Engine），该引擎容许业务规则被合并在一个服务里或多个服务里。这种架构也提供了一个服务管理基础（Service Management Infrastructure），用来管理服务，类似审核，列表（billing），日志等功能。此外，该架构给企业提供了灵活的业务流程，更好地处理控制请求（Regulatory Requirement），例如 Sarbanes Oxley（SOX），并且可以在不影响其他服务的情况下更改某项服务。

由于分布式系统十分复杂，因此产生了大量的用于简化分布式系统开发的分布式中间件和分布式数据库，服务化的架构设计理念也被越来越多的公司所认同。如下是 Dubbo 官方文档公布了一张有关 SOA 系统演化过程的图片：

![](https://tva1.sinaimg.cn/large/007rAy9hgy1g35rmkfy3hj30jg05ut9c.jpg)

# MSA 微服务架构

微服务（Microservices Architecture Pattern）由 Martin Fowler 在 2014 年提出的，是希望将某个单一的单体应用，转化为多个可以独立运行、独立开发、独立部署、独立维护的服务或者应用的聚合，从而满足业务快速变化及分布式多团队并行开发的需求。如康威定律（Conway’s Law）所言，任何组织在设计一套系统（广义概念）时，所交付的设计方案在结构上都与该组织的通信结构保持一致，微服务与微前端不仅仅是技术架构的变化，还包含了组织方式、沟通方式的变化。

![](https://i.postimg.cc/mkMy155d/image.png)

对于微服务，不同背景的人也有不同的见解，对于熟悉 SOA 的开发者，微服务也可以认为是去除了 ESB 的 SOA 的一种实现方案；ESB 是 SOA 架构中的中心总线，设计图形应该是星形的，而微服务是去中心化的分布式软件架构。SOA 更多强调重用，而微服务偏向于重写。SOA 偏向水平服务，微服务偏向垂直服务；SOA 偏向自上而下的设计，微服务偏向自下而上的设计。

![](https://i.postimg.cc/XNmDQrKL/image.png)

微服务与微前端原理和软件工程，面向对象设计中的原理同样相通，都是遵循单一职责(Single Responsibility)、关注分离(Separation of Concerns)、模块化(Modularity)与分而治之(Divide & Conquer)等基本的原则。从巨石型应用到微服务的衍化也并非一蹴而就，如下图也演示了简单的渐进式替代过程：

![](https://i.postimg.cc/fyh0pT8K/image.png)

![](https://i.postimg.cc/L4zPfLs0/image.png)

# Cloud Native 云原生架构

> 云原生是通过构建团队、文化和技术，利用自动化和架构来管理系统的复杂性和解放生产力。
> — Joe Beda，Heotio CTO，联合创始人

![](https://i.postimg.cc/pL8vqYM2/image.png)

Pivotal 是云原生应用的提出者，并推出了 Pivotal Cloud Foundry 云原生应用平台和 Spring 开源 Java 开发框架，成为云原生应用架构中先驱者和探路者。早在 2015 年 Pivotal 公司的 Matt Stine 写了一本叫做迁移到云原生应用架构的小册子，其中探讨了云原生应用架构的几个主要特征：符合 12 Factors 应用、面向微服务架构、自服务敏捷架构、基于 API 的协作以及抗脆弱性。2015 年 Google 主导成立了云原生计算基金会（CNCF），起初 CNCF 对云原生（Cloud Native）的定义包含以下三个方面：应用容器化、面向微服务架构、应用支持容器的编排调度。

![](https://i.postimg.cc/jSjNf5pQ/image.png)

云原生应用程序简单地定义为从头开始为云计算架构而构建应用程序；这意味着，如果我们将应用程序设计为预期将部署在分布式、可扩展的基础架构上，我们的应用程序就是云原生的。随着公共云将承载越来越多的算力，未来云计算将是主流的 IT 能力交付方式，CNCF 也对云原生进行了重新定义：云原生技术有利于各组织在公有云、私有云和混合云等新型动态环境中，构建和运行可弹性扩展的应用；云原生的代表技术包括容器、服务网格、微服务、不可变基础设施和声明式 API。

- Codeless 对应的是服务开发，实现了源代码托管，你只需要关注你的代码实现，而不需要关心你的代码在哪，因为在整个开发过程中你都不会感受到代码库和代码分支的存在。

- Applicationless 对应的是服务发布，在服务化框架下，你的服务发布不再需要申请应用，也不需要关注你的应用在哪。

- Serverless 对应的则是服务运维，有了 Serverless 化能力，你不再需要关注你的机器资源，Servlerless 会帮你搞定机器资源的弹性扩缩容

这些技术组合搭配，能够构建容错性好、易于管理和便于观察的松耦合系统；再结合可靠的自动化手段，云原生技术能够使工程师轻松地对系统作出频繁和可预测的重大变更。由此可见，云原生是保障系统能力灵动性地有效抓手；云原生技术有利于各组织在公有云、私有云和混合云等新型动态环境中，构建和运行可弹性扩展的应用。微服务架构非常适合云原生应用程序；但是，云原生同样存在着一定的限制，如果你的云原生应用程序部署在 AWS 等公有云上，则云原生 API 不是跨云平台的。

![](https://i.postimg.cc/8P27sCRm/image.png)

云原生应用的关键属性包括了：使用轻量级的容器打包、使用最合适的语言和框架开发、以松耦合的微服务方式设计、以 API 为中心的交互和协作、无状态和有状态服务在架构上界限清晰、不依赖于底层操作系统和服务器、部署在自服务、弹性的云基础设施上、通过敏捷的 DevOps 流程管理、自动化能力、通过定义和策略驱动的资源分配。云原生是分布式应用当下重要的发展路径，其终态应当是 Distributionless，所有与分布式相关的问题由云平台解，分布式应用的开发会跟传统应用的开发一样方便，甚至更加便捷。

# About

## Copyright

<img src="https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg"/><img src="https://parg.co/bDm" />

笔者所有文章遵循 [知识共享 署名-非商业性使用-禁止演绎 4.0 国际许可协议](https://creativecommons.org/licenses/by-nc-nd/4.0/deed.zh)，欢迎转载，尊重版权。如果觉得本系列对你有所帮助，欢迎给我家布丁买点狗粮(支付宝扫码)~

![default](https://i.postimg.cc/y1QXgJ6f/image.png)

## Home & More | 延伸阅读

![技术视野](https://s2.ax1x.com/2019/09/30/uJWQTx.jpg)

您可以通过以下导航来在 Gitbook 中阅读笔者的系列文章，涵盖了技术资料归纳、编程语言与理论、Web 与大前端、服务端开发与基础架构、云计算与大数据、数据科学与人工智能、产品设计等多个领域：

- 知识体系：《[Awesome Lists | CS 资料集锦](https://ngte-al.gitbook.io/i/)》、《[Awesome CheatSheets | 速学速查手册](https://ngte-ac.gitbook.io/i/)》、《[Awesome Interviews | 求职面试必备](https://github.com/wx-chevalier/Awesome-Interviews)》、《[Awesome RoadMaps | 程序员进阶指南](https://github.com/wx-chevalier/Awesome-RoadMaps)》、《[Awesome MindMaps | 知识脉络思维脑图](https://github.com/wx-chevalier/Awesome-MindMaps)》、《[Awesome-CS-Books | 开源书籍（.pdf）汇总](https://github.com/wx-chevalier/Awesome-CS-Books)》

- 编程语言：《[编程语言理论](https://ngte-pl.gitbook.io/i/)》、《[Java 实战](https://github.com/wx-chevalier/Java-Series)》、《[JavaScript 实战](https://github.com/wx-chevalier/JavaScript-Series)》、《[Go 实战](https://ngte-pl.gitbook.io/i/go/go)》、《[Python 实战](https://ngte-pl.gitbook.io/i/python/python)》、《[Rust 实战](https://ngte-pl.gitbook.io/i/rust/rust)》

- 软件工程、模式与架构：《[编程范式与设计模式](https://ngte-se.gitbook.io/i/)》、《[数据结构与算法](https://ngte-se.gitbook.io/i/)》、《[软件架构设计](https://ngte-se.gitbook.io/i/)》、《[整洁与重构](https://ngte-se.gitbook.io/i/)》、《[研发方式与工具](https://ngte-se.gitbook.io/i/)》

* Web 与大前端：《[现代 Web 全栈开发与工程架构](https://ngte-web.gitbook.io/i/)》、《[数据可视化](https://ngte-fe.gitbook.io/i/)》、《[iOS](https://ngte-fe.gitbook.io/i/)》、《[Android](https://ngte-fe.gitbook.io/i/)》、《[混合开发与跨端应用](https://ngte-fe.gitbook.io/i/)》

* 服务端开发实践与工程架构：《[服务端基础](https://ngte-be.gitbook.io/i/)》、《[微服务与云原生](https://ngte-be.gitbook.io/i/)》、《[测试与高可用保障](https://ngte-be.gitbook.io/i/)》、《[DevOps](https://ngte-be.gitbook.io/i/)》、《[Spring](https://github.com/wx-chevalier/Spring-Series)》、《[信息安全与渗透测试](https://ngte-be.gitbook.io/i/)》

* 分布式基础架构：《[分布式系统](https://ngte-infras.gitbook.io/i/)》、《[分布式计算](https://ngte-infras.gitbook.io/i/)》、《[数据库](https://github.com/wx-chevalier/Database-Series)》、《[网络](https://ngte-infras.gitbook.io/i/)》、《[虚拟化与云计算](https://github.com/wx-chevalier/Cloud-Series)》、《[Linux 与操作系统](https://github.com/wx-chevalier/Linux-Series)》

* 数据科学，人工智能与深度学习：《[数理统计](https://ngte-aidl.gitbook.io/i/)》、《[数据分析](https://ngte-aidl.gitbook.io/i/)》、《[机器学习](https://ngte-aidl.gitbook.io/i/)》、《[深度学习](https://ngte-aidl.gitbook.io/i/)》、《[自然语言处理](https://ngte-aidl.gitbook.io/i/)》、《[工具与工程化](https://ngte-aidl.gitbook.io/i/)》、《[行业应用](https://ngte-aidl.gitbook.io/i/)》

* 产品设计与用户体验：《[产品设计](https://ngte-pd.gitbook.io/i/)》、《[交互体验](https://ngte-pd.gitbook.io/i/)》、《[项目管理](https://ngte-pd.gitbook.io/i/)》

* 行业应用：《[行业迷思](https://github.com/wx-chevalier/Business-Series)》、《[功能域](https://github.com/wx-chevalier/Business-Series)》、《[电子商务](https://github.com/wx-chevalier/Business-Series)》、《[智能制造](https://github.com/wx-chevalier/Business-Series)》

此外，你还可前往 [xCompass](https://wx-chevalier.github.io/home/#/search) 交互式地检索、查找需要的文章/链接/书籍/课程；或者在 [MATRIX 文章与代码索引矩阵](https://github.com/wx-chevalier/Developer-Zero-To-Mastery)中查看文章与项目源代码等更详细的目录导航信息。最后，你也可以关注微信公众号：『**某熊的技术之路**』以获取最新资讯。

## 链接

- https://mp.weixin.qq.com/s/T9m_li4O7uUwt0K4kpk6TQ
