  - [1 RPC](/RPC/README.md)
    - [1.1 RPC 定义](/RPC/RPC%20定义/README.md)
      - [1.1.1 RPC 安全性](/RPC/RPC%20定义/RPC%20安全性.md)
      - [1.1.2 RPC 应用](/RPC/RPC%20定义/RPC%20应用.md)
      - [1.1.3 RPC 衍化](/RPC/RPC%20定义/RPC%20衍化.md)
    - [1.2 分布式追踪](/RPC/分布式追踪/README.md)
      - [1.2.1 OpenTelemetry](/RPC/分布式追踪/OpenTelemetry/README.md)
        
      - [1.2.2 OpenTracing](/RPC/分布式追踪/OpenTracing/README.md)
        
      - 1.2.3 系统设计
        - [1.2.3.1 开源对比](/RPC/分布式追踪/系统设计/开源对比.md)
        - [1.2.3.2 系统设计](/RPC/分布式追踪/系统设计/系统设计.md)
    - [1.3 协议编码](/RPC/协议编码/README.md)
      - [1.3.1 Avro](/RPC/协议编码/Avro/README.md)
        - [1.3.1.1 Java](/RPC/协议编码/Avro/Java.md)
        - [1.3.1.2 模式演变](/RPC/协议编码/Avro/模式演变.md)
      - [1.3.2 JSON](/RPC/协议编码/JSON/README.md)
        - [1.3.2.1 JSONSchema](/RPC/协议编码/JSON/JSONSchema.md)
        - [1.3.2.2 二进制编码](/RPC/协议编码/JSON/二进制编码.md)
      - [1.3.3 Protobuf](/RPC/协议编码/Protobuf/README.md)
        - [1.3.3.1 类型定义](/RPC/协议编码/Protobuf/类型定义.md)
      - [1.3.4 Thrift](/RPC/协议编码/Thrift/README.md)
        
    - [1.4 性能对比](/RPC/性能对比.md)
    - [1.5 服务发现](/RPC/服务发现/README.md)
      
    - [1.6 服务调用](/RPC/服务调用/README.md)
      
    - [1.7 消息传递](/RPC/消息传递/README.md)
      - [1.7.1 数据流的类型](/RPC/消息传递/数据流的类型.md)
  - [2 接入网关](/接入网关/README.md)
    - 2.1 Kong
      - [2.1.1 Kong](/接入网关/Kong/Kong.md)
    - [2.2 代理服务器](/接入网关/代理服务器/README.md)
      - [2.2.1 Apache](/接入网关/代理服务器/Apache/README.md)
        
      - [2.2.2 Caddy](/接入网关/代理服务器/Caddy/README.md)
        
      - [2.2.3 Nginx](/接入网关/代理服务器/Nginx/README.md)
        - [2.2.3.1 HTTP 服务器配置](/接入网关/代理服务器/Nginx/HTTP%20服务器配置.md)
        - [2.2.3.2 基础配置](/接入网关/代理服务器/Nginx/基础配置.md)
        - [2.2.3.3 进程模型](/接入网关/代理服务器/Nginx/进程模型.md)
      - [2.2.4 OpenResty](/接入网关/代理服务器/OpenResty/README.md)
        
    - [2.3 服务状态处理](/接入网关/服务状态处理/README.md)
      - [2.3.1 幂等设计](/接入网关/服务状态处理/幂等设计.md)
      - [2.3.2 无状态设计](/接入网关/服务状态处理/无状态设计.md)
    - [2.4 系统设计](/接入网关/系统设计/README.md)
      - [2.4.1 网关特性](/接入网关/系统设计/网关特性.md)
    - [2.5 负载均衡](/接入网关/负载均衡/README.md)
      - [2.5.1 LVS](/接入网关/负载均衡/LVS/README.md)
        
      - [2.5.2 Scratch](/接入网关/负载均衡/Scratch/README.md)
        - [2.5.2.1 基于 Go 的简单负载均衡](/接入网关/负载均衡/Scratch/基于%20Go%20的简单负载均衡.md)
      - [2.5.3 分流算法](/接入网关/负载均衡/分流算法.md)
      - [2.5.4 负载分层](/接入网关/负载均衡/负载分层.md)
    - [2.6 连接服务](/接入网关/连接服务/README.md)
      - 2.6.1 DeepStream
        - [2.6.1.1 DeepStream](/接入网关/连接服务/DeepStream/DeepStream.md)
      - [2.6.2 多机房多网络](/接入网关/连接服务/多机房多网络.md)
  - [3 配置中心](/配置中心/README.md)
    - [3.1 Consul](/配置中心/Consul/README.md)
      
    - [3.2 Etcd](/配置中心/Etcd/README.md)
      
    - [3.3 Nacos](/配置中心/Nacos/README.md)
      - [3.3.1 服务注册与发现](/配置中心/Nacos/服务注册与发现.md)
    - [3.4 ZooKeeper](/配置中心/ZooKeeper/README.md)
      - [3.4.1 ZAB](/配置中心/ZooKeeper/ZAB.md)
      - [3.4.2 数据操作](/配置中心/ZooKeeper/数据操作.md)
      - [3.4.3 架构原理](/配置中心/ZooKeeper/架构原理.md)
      - [3.4.4 部署与配置](/配置中心/ZooKeeper/部署与配置.md)
    - [3.5 基础配置方式](/配置中心/基础配置方式.md)
  - [4 权限隔离](/权限隔离/README.md)
    - 4.1 OAuth
      - [4.1.1 Hydra](/权限隔离/OAuth/Hydra/README.md)
        
    - [4.2 RBAC](/权限隔离/RBAC/README.md)
      
    - [4.3 SSO](/权限隔离/SSO/README.md)
      - [4.3.1 CAS](/权限隔离/SSO/CAS/README.md)
        
      - [4.3.2 Keycloak](/权限隔离/SSO/Keycloak/README.md)
        
      - [4.3.3 Pac4j](/权限隔离/SSO/Pac4j/README.md)
        
      - [4.3.4 Shiro](/权限隔离/SSO/Shiro/README.md)
        
    - [4.4 多租户](/权限隔离/多租户/README.md)
      - [4.4.1 通用多租户框架](/权限隔离/多租户/通用多租户框架.md)
    - [4.5 开放平台](/权限隔离/开放平台/README.md)
      - [4.5.1 扫码登陆](/权限隔离/开放平台/扫码登陆.md)
    - 4.6 认证基础
      - [4.6.1 HTTP 认证](/权限隔离/认证基础/HTTP%20认证.md)
      - [4.6.2 JWT](/权限隔离/认证基础/JWT.md)
      - [4.6.3 OAuth](/权限隔离/认证基础/OAuth.md)
      - [4.6.4 Session](/权限隔离/认证基础/Session.md)
      - [4.6.5 认证方式对比](/权限隔离/认证基础/认证方式对比.md)
  - [5 服务网格](/服务网格/README.md)
    - [5.1 Dapr](/服务网格/Dapr/README.md)
      - [5.1.1 Hello World](/服务网格/Dapr/Hello%20World.md)
    - [5.2 Envoy](/服务网格/Envoy/README.md)
      - [5.2.1 Kuma](/服务网格/Envoy/Kuma/README.md)
        
    - [5.3 Istio](/服务网格/Istio/README.md)
      
    - [5.4 Linkerd](/服务网格/Linkerd/README.md)
      
    - [5.5 Serverless](/服务网格/Serverless/README.md)
      - [5.5.1 函数模式](/服务网格/Serverless/函数模式.md)
      - [5.5.2 设计模式](/服务网格/Serverless/设计模式.md)
      - [5.5.3 阿里云](/服务网格/Serverless/阿里云.md)
    - 5.6 网格可视化
      - [5.6.1 Kiali](/服务网格/网格可视化/Kiali/README.md)
        
    - 5.7 设计理念
      - [5.7.1 ServiceMesh 产品对比](/服务网格/设计理念/ServiceMesh%20产品对比.md)
      - [5.7.2 Sidecar](/服务网格/设计理念/Sidecar.md)
  - 6 微服务框架
    - [6.1 Dubbo](/微服务框架/Dubbo/README.md)
      - [6.1.1 Kubernetes](/微服务框架/Dubbo/Kubernetes/README.md)
        - [6.1.1.1 Kubernetes 与 Dubbo](/微服务框架/Dubbo/Kubernetes/Kubernetes%20与%20Dubbo.md)
      - [6.1.2 架构机制](/微服务框架/Dubbo/架构机制/README.md)
        
      - [6.1.3 踩坑汇总](/微服务框架/Dubbo/踩坑汇总.md)
    - 6.2 Rpcx
      - [6.2.1 REAMDE](/微服务框架/Rpcx/REAMDE.md)
    - [6.3 Scratch](/微服务框架/Scratch/README.md)
      - 6.3.1 Go
        - [6.3.1.1 Go RPC 框架](/微服务框架/Scratch/Go/Go%20RPC%20框架.md)
      - 6.3.2 Java
        - [6.3.2.1 Java RPC 框架](/微服务框架/Scratch/Java/Java%20RPC%20框架.md)
    - [6.4 ServiceComb](/微服务框架/ServiceComb/README.md)
      
    - [6.5 gRPC](/微服务框架/gRPC/README.md)
      - [6.5.1 开发环境](/微服务框架/gRPC/开发环境.md)
    - 6.6 大厂案例
      - [6.6.1 爱奇艺微服务标准技术架构实践](/微服务框架/大厂案例/爱奇艺微服务标准技术架构实践.md)