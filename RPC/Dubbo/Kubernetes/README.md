# Kubernetes

Dubbo 的 provider 不在关心服务注册的事宜，只需要把其 Dubbo 服务端口打开，由 kubernetes 来进行服务的声明和发布；Dubbo 的 consumer 在服务发现时直接发现 kubernetes 的对应服务 endpoints，从而复用 Dubbo 已有的微服务通道能力。好处是无需依赖三方的软负载注册中心；同时无缝融入 kubernetes 的多租户安全体系。

# 链接

- https://github.com/apache/dubbo-kubernetes
