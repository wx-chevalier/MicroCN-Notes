# Kubernetes

Dubbo 的 provider 不在关心服务注册的事宜，只需要把其 Dubbo 服务端口打开，由 kubernetes 来进行服务的声明和发布；Dubbo 的 consumer 在服务发现时直接发现 kubernetes 的对应服务 endpoints，从而复用 Dubbo 已有的微服务通道能力。好处是无需依赖三方的软负载注册中心；同时无缝融入 kubernetes 的多租户安全体系。

# 链接

- https://github.com/apache/dubbo-kubernetes
- http://bucket.k8smeetup.com/%E6%9C%B1%E6%98%BE%E6%9D%B0-Kubernetes%E4%B8%8EDubbo%E7%BB%93%E5%90%88%E7%9A%84%E5%AE%9E%E8%B7%B5%E4%B9%8B%E8%B7%AF.pdf
