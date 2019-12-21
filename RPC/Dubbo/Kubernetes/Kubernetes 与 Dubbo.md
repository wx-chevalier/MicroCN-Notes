# Dubbo 和 Kubernetes

在 Kubernetes 已经阐述过，下面的内容也是假设一个应用部署在一个容器里，一个容器部署在一个 Pod 里。接下来方案的讨论，互相之间其实是有关联的，如服务治理可能会影响到服务注册发现，服务查询也不能依赖于服务注册的内容。整个设计的过程是不断优化的过程。下面所说的内容，以 Dubbo 来举例说明。

# 服务治理

Dubbo 原有体系里的服务治理是强依赖于 IP，当配置了一套服务治理规则的时候，最后都是基于一个或多个 IP 地址。到 Kubernetes 体系下之后，要考虑的是 Pod 的 IP 不是固定的。所以当前的路由规则不能满足条件，而且会产生很多规则垃圾数据。Kubernetes 体系下，通过 Service 查找 Pod ，是基于 label selector ；通过 deployment 管理 Pod ，其实也是基于 Pod label selector 。所以 Pod label selector 是在 Kubernetes 习题中比较通用的解决方案。

以路由规则为例，需要支持一种新的路由规则：label 路由。通过一定条件匹配之后，将结果定位到以 label selector 查询到的 Pod 列表里，而非原来的 IP 列表。应用获取当前 Pod 的信息方式：

- Pod 定义环境变量，应用获取，Dubbo 提供对环境变量读取的支持，Pod 中需要按照 Dubbo 定义的环境变量设置具体的 Pod 信息。

- 通过 Downward Api 传递 Pod 信息，Dubbo 需要提供对 Downward 的目录读取，Pod 中需要定制 downward 的对应配置。

- 通过 API Server 获取数据，最强大的方式，但是应用需要强依赖于 API Server。

应用获取其他 Pod 的信息方式：

- 通过调用其他 Pod 的服务获取，依赖于应用能获取自身的 Pod 信息，同时将自身的 Pod 信息暴露成服务（Rest 或 Dubbo 协议），client 端通过调用对用的 Pod 获取到对应 Pod 的完整信息。

- 通过 API server 获取数据，很强大，但增加了对 API Server 的依赖。

# 服务注册和发现

Kubernetes 体系下，RPC 服务发现有几种方式：

- 注册机制：将 IP 写入注册中心，用心跳保持连接；当心跳停止，从注册中心删除。

- 利用 Service + DNS ：新建一个 Service，可以通过标签选择到一组 pod 列表，这个 Service 对应一个不变的集群 IP；Client 端通过 DNS 方式或者直接访问集群 IP。这个集群 IP，约等于实现了负载均衡（iptable 方式）。

- 利用 Headless Service（DNS）：Headless Service 和上面的 Service 的区别是，它不提供集群 IP，通过主机名的形式获取一组 IP 列表，Client 端自己决定访问哪个 Pod。

- API Server ：Client 端直接请求 API Server，获取到 Pod 的列表， Client 自己决定访问 Pod 的逻辑。同时获取的时候增加 watch，API Server 会将 Pod 的变化信息同步 Client。

通过拿到 Server 端的 IP 或者 host ，Client 端就可以发起 http 或者其他协议的请求。

## Dubbo + ZooKeeper Pod Cluster（HSF+CS cluster）

这是最简单的方式，Dubbo 本身不需要做任何改造。带来的问题是增加了 ZooKeeper 的维护，同时这个方案很不云原生，和 Kubernetes 的体系没有任何关系。

上面方案是将 ZooKeeper 作为注册中心，那么是否可以将 Kubernetes 里 Service 作为注册中心呢？Dubbo 里每个接口去建立一个 Service，每个应用实例启动过程中去更新 Endpoint 信息，建立 Service-> Endpoint-> IP 列表的关系。这种方案中 Kubernetes Service 的定义被改造了，而且定义了过多的 Service，Service 的维护管理是个难题。

在传统的 RPC 领域，服务分成服务注册和服务发现。在 Kubernetes 领域 Pod 和应用是一对一的关系，Kubernetes 本身就提供了 Pod 查找的能力，所以一定程度上服务注册其实可以不存在，而只需要服务发现。但是这个其实需要一个前提：

- Dubbo 需要将服务注册发现的粒度改造成应用维度。

- 在运维层面，将 app=xxx（应用名）写入到 Pod 的 label 中。

## Dubbo + Kubernetes DNS

如果 Kubernetes Service 提供了 Cluster IP，那么 Dubbo 只负责调用该集群 IP，路由和负载均衡的逻辑则交给了 Kubernetes 的 Proxy 来完成。此方案削减了 Dubbo 的核心能力。

通过请求 `<service>.<ns>.svc.<zone>`. IN A 的方式发起请求获取 IP 列表，但是需要轮询方式不断获取更新的 IP 列表。

## Dubbo + API Server

Pod 的容器中部署的 Dubbo 应用，服务注册流程可以直接删除，服务发现功能通过和 API Server 进行交互，获取 Pod 和 Service 信息，同时 watch pod 和 Service 的变更。通过这种方式之后，服务治理相关的信息也可以通过 API Server 直接获取。

![Dubbo & API Server](https://s2.ax1x.com/2019/12/08/Qa1sit.png)

## Dubbo + Istio + Envoy

Dubbo 可以直接使用指定 IP + 端口的方式调用同一个 Pod 下 Envoy（也可能是同一个 Node 的 Envoy）。Dubbo 将路由规则，负载均衡，熔断等功能交给 Istio 和 Envoy。Envoy 需要支持 Dubbo 协议的转发。

所以 Dubbo 需要完成两个事情：本地 IP 直连（现有功能），多余功能裁剪（暂未实现）。

## Dubbo + Istio

Dubbo 应用不再依赖 Envoy 作为 sidecar ，而是直接和 Istio 进行交互，把 Istio 作为注册中心，作为服务治理的配置中心。Dubbo 需要提供类似的 xDS 协议，在 Pilot 将 Service 的 instance 转换成 Dubbo 的协议格式。Dubbo 还需要去适配 Istio 的一些功能，如健康检查，安全相关的逻辑。具体实现可以参考 Envoy 的实现。

![Dubbo + Istio](https://s2.ax1x.com/2019/12/08/Qa1qQU.png)

# 服务查询

## Dubbo 原有方式

Dubbo 原有的服务查询是针对接口的查询，每个接口会有版本号和组别。接口名 + 版本号 + 组别确定唯一的服务集合，这个服务集下有对应的服务提供者和服务消费者（接口级依赖），服务提供者是一组 IP + port 列表，服务消费者也是一组 IP + port 列表。

## 只支持应用查询

和 Spring Cloud 类似，支持应用维度的查询。查询到具体应用之后，应用详情下包含了 IP + port 列表，每个 IP + port 其实就是一个应用的实例。点击开每个应用实例，可以查看每个应用的详细信息，详细信息包含了该实例提供了哪些服务。

## 接口 + 应用查询均衡

在原来只支持应用查询的基础上，增加一步：支持查询某个接口对应的应用列表，而大部分接口只属于一个应用。再点击应用列表下具体的应用之后，会跳到应用详情。
