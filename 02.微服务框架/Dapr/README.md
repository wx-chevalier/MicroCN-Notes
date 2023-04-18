# Dapr

Dapr（Distributed Application Runtime，分布式运行时），是微软内部团队的一个开源项目。Dapr 同样使用 Sidecar 架构，以独立进程的形式与应用程序同时运行，同时兼具 Service Mesh 中 Sidecar/Proxy 的优点和高度可扩展的特性。Dapr 主要有两大特性：一个是跨语言、多运行环境支持（Any language，anywhere），一个是组件的可插拔、可替换。应用开发者可以基于 Dapr 多语言的 SDK 面向 Dapr 的分布式能力进行编程，通过集成 Dapr 的 SDK，可以使用任何语言、任何框架构建自己的微服务应用，并将应用运行在任何有 Dapr 的环境中。

![Dapr 架构图](https://assets.ng-tech.icu/superbed/2021/07/14/60eebb385132923bf85cb34f.png)

同时 Dapr 也可以部署在任何环境里面，包括自己本地的环境、边缘计算的场景、拥有 K8s 的环境或者是任何的商业化云产品开发厂商的环境中。

![在非 K8s 环境中部署 Dapr](https://assets.ng-tech.icu/superbed/2021/07/14/60eebb5c5132923bf85d4a3e.jpg)

在 K8s 的环境中，Dapr 和应用程序运行在同一个 Pod 里，但是在不同的容器中。Dapr 的构建块则分布在其他的 Pod 中，通过 yaml 文件的方式进行激活并让 Dapr 感知到。

![在 K8s 环境中部署 Dapr](https://assets.ng-tech.icu/superbed/2021/07/14/60eebb9b5132923bf85e47be.jpg)

在构建微服务应用时，每个组件都是独立的。开发人员可以采用其中一个或多个或全部来构建应用，并且组件的更新对应用来说是无感知的，应用程序不会感知到底层组件的升级。这也就是 Dapr 的第二个特性：组件的可插拔、可替换特性。Dapr 通过把一些构建微服务应用所需的最佳实践内置到开放、独立的构建块（building block）中，让开发人员只需专注于业务逻辑代码的编写，即可开发出功能强大的微服务应用，截至现在，Dapr 社区中已经有 70 多个组件可供开发人员进行使用。

# 设计理念

## Multi-Runtime（运行时）软件架构

Multi-Runtime（运行时）架构是一种未来架构趋势，Dapr 便是基于此架构，从需求出发，分布式应用的主要需求包括以下四大类：

- 生命周期：主要是弹性伸缩和异常快速恢复的诉求
- 网络：可靠的网络、可靠的路由的需求
- 状态：对于服务编排、服务调度、状态管理等需求
- 绑定：与外部系统、中间件的通讯的需求

在此需求基础上，Service Mesh 架构将网络层抽出为独立的边车进程，而参考 Service Mesh 架构，Multi-Runtime 架构则是把各种边车提供的能力统一抽象成若干个 Runtime，这样应用从面向基础组件开发就演变成了面向各种分布式能力开发。

![Multi-Runtime 面向分布式能力开发](https://assets.ng-tech.icu/superbed/2021/07/14/60eeb87f5132923bf850f25c.jpg)

## Mesh

Service Mesh 的发展为我们指明了一个发展方向：将 SDK 中的分布式能力外移到独立的 Sidecar 中。但是我们可以想象一下，在未来是否可以将我们现在集成的中间件能力也外移到独立的 Sidecar 中呢？比如说将数据库 Mesh 化、将消息中间件 Mesh 化、将缓存 Mesh 化，将除了业务代码程序之外的全部 SDK 都 Mesh 化。

![更多的 Mesh 化模块](https://assets.ng-tech.icu/superbed/2021/07/14/60eeb8fd5132923bf85326f3.jpg)

我们可以将这些独立出来的 Mesh 化模块统称为提供不同功能的“运行时”组件。过多的“运行时”组件出现之后，应用程序在运行时就会依赖一个或多个这样的 Mesh 化模块。虽然做到了将 SDK 移出了应用程序，但是这种多依赖的结果显然不是我们所期望的形式。Dapr 的出现将这些提供不同分布式能力以及中间件能力的“运行时”模块进行了整合，开发人员可以按照自己的需求，通过 yaml 文件的方式，将提供不同功能的组件整合到 Dapr 的构建块（Building Block）中。应用程序可以通过 Dapr 提供的标准 API，访问构建块来获得并使用这些能力。

![K8s 中的 Dapr](https://assets.ng-tech.icu/superbed/2021/07/14/60eeb92d5132923bf853f5e6.jpg)

在 K8s 环境中，应用程序代码和 Dapr 的 Sidecar 分别运行在两个不同的容器中。应用程序代码可以通过标准的 HTTP/gRPC 协议使用 Dapr 提供的各种分布式能力，而 Dapr 中提供能力的构建块（Building Block）又是可以根据开发人员的需求进行可插拔和高度扩展的。

Dapr 的这种模式极大的提升了 Service Mesh 体系中 Sidecar 的灵活性，并对各种不同的 Mesh 进行了统一的整合。可以说 Dapr 的这种模式是未来 Service Mesh 未来发展的一种新方向。

# 功能和架构

Dapr 虽然也使用 Sidecar 架构，但是却提供了更多的能力和使用场景。除了提供和 Service Mesh 一样的服务间远程调用（Service-to-service invocation）能力外，还提供了状态管理（State management）的能力来帮助开发人员构建出弹性的、有/无状态的应用程序，并且提供了发布订阅（Publish and subscribe）、资源绑定（Resource bindings）等额外的能力。

Dapr 中所有功能都是通过使用 Dapr 中的构建块（Building Block）来进行提供。下图中蓝色方框中的内容，都是 Dapr 目前已经提供给应用开发人员使用的构建块。

![Dapr 官方构建块](https://assets.ng-tech.icu/superbed/2021/07/14/60eeb9e65132923bf856f8e9.jpg)

在 Dapr 的架构中，有三个主要的组成部分：Dapr API、构建块（Building Block）和组件（Component），他们之间的关系如下图所示。

![Dapr 主要的组成部分](https://assets.ng-tech.icu/superbed/2021/07/14/60eeba0b5132923bf8579843.jpg)

应用程序可以通过标准的 Dapr API 与构建块进行通信，构建块作为 Dapr 对外提供分布式能力的基本单元，将各种分布式能力进行了抽象，并将自己内部整合的分布式能力提供给应用程序。组件（Component）是构建块的具体实现，每个构建块都是由一个或多个组件组成，并且所有的组件都是可插拔和高度扩展的。Dapr 内部有自己的一套 SPI 扩展机制，任何开源的或者商业化的产品都可以很方便的集成到一个组件中。

例如想要将一个 Redis 集成到 Dapr 中，只需要将 Redis 集成到一个 State 的组件中就可以很方便的在应用程序中通过 HTTP/gRPC 协议使用 Redis 的功能，而不需要在应用程序中依赖操作 Redis 的 SDK。

Dapr 的主要架构可以总结为以下三点：

- Dapr API 通过标准的 HTTP/gRPC 协议对外暴露构建块的能力。
- 构建块则对分布式能力进行一个抽象，并提供各种分布式运行时能力
- 组件是构建块能力的具体实现者。

应用开发者只需要基于 Dapr 多语言的 SDK，并且面向能力的方式对 Dapr 进行编程，而底层的具体实现方式由 Dapr 以 yaml 文件的方式进行激活。应用无需感知到自己使用的分布式能力是由哪种方式实现的。Dapr 整体的功能图如下图所示。

## Dapr 与 Service Mesh

虽然 Dapr 和 Service Mesh 在架构上都是使用的 Sidecar 模式，并且在功能上也存在一些重叠部分，但是不能将 Dapr 简单的定义为 Service Mesh。

![Dapr 与 Service Mesh 的比较](https://assets.ng-tech.icu/superbed/2021/07/14/60eebc505132923bf8614019.jpg)

Service Mesh 主要专注于服务调用和网络问题，而 Dapr 是为了给应用服务提供更多的 分布式能力 而诞生的，两者的关注点在本质上就不一样。Service Mesh 主要以基础设施为中心：

- Service Mesh 更加聚焦于网络问题的处理，通过拦截网络流量，可以使应用程序无感知的部署在包含 Service Mesh 的环境中。
- Service Mesh 主要由系统操作员进行管理和部署，使 Service Mesh 更像是一种特殊的“基础设施”。开发人员无需考虑一些其他的细节，因为 Service Mesh 已经将网络概念扁平化。
- Service Mesh 通过按照原协议转发的方式来进行流量拦截，可以给业务系统带来零侵入的体验。

与 Service Mesh 不同，Dapr 是以开发人员为中心：

- 当开发人员在代码中需要使某种分布式能力时，开发人员需要明确调用 Dapr API。Dapr 为开发者提供了标准的分布式 API，这种 API 带来了多语言的、面向能力的、统一的编程体验。
- Dapr 提供了应用级别的构建块（Building Block）和 70 多种分布式能力的抽象集成，使得开发人员更容易将应用程序构建为弹性的微服务。
- Dapr 通过采用多语言 SDK+标准 API+各种分布式能力的方式为应用程序提供服务。

# Links

- https://thenewstack.io/how-microsofts-dapr-simplifies-developing-and-deploying-microservices/
