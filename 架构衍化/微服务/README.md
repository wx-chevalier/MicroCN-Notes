# 微服务

微服务（Microservices Architecture Pattern）由 Martin Fowler 在 2014 年提出的，是希望将某个单一的单体应用，转化为多个可以独立运行、独立开发、独立部署、独立维护的服务或者应用的聚合，从而满足业务快速变化及分布式多团队并行开发的需求。如康威定律（Conway’s Law）所言，任何组织在设计一套系统（广义概念）时，所交付的设计方案在结构上都与该组织的通信结构保持一致，微服务与微前端不仅仅是技术架构的变化，还包含了组织方式、沟通方式的变化。

![Typical MicroService Architecture](https://i.postimg.cc/mkMy155d/image.png)

对于微服务，不同背景的人也有不同的见解，对于熟悉 SOA 的开发者，微服务也可以认为是去除了 ESB 的 SOA 的一种实现方案；ESB 是 SOA 架构中的中心总线，设计图形应该是星形的，而微服务是去中心化的分布式软件架构。SOA 更多强调重用，而微服务偏向于重写。SOA 偏向水平服务，微服务偏向垂直服务；SOA 偏向自上而下的设计，微服务偏向自下而上的设计。

![典型的微服务之间连接](https://i.postimg.cc/XNmDQrKL/image.png)

# 微服务治理

![Dubbo 微服务治理](https://s2.ax1x.com/2019/12/10/QDzIMt.png)

微服务与微前端原理和软件工程，面向对象设计中的原理同样相通，都是遵循单一职责(Single Responsibility)、关注分离(Separation of Concerns)、模块化(Modularity)与分而治之(Divide & Conquer)等基本的原则。从巨石型应用到微服务的衍化也并非一蹴而就，如下图也演示了简单的渐进式替代过程：

![](https://i.postimg.cc/fyh0pT8K/image.png)

![](https://i.postimg.cc/L4zPfLs0/image.png)
