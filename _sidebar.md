  - [1 INTRODUCTION](/INTRODUCTION.md)
  - [2 RPC](/RPC/README.md)
    - [2.1 RPC 定义](/RPC/RPC%20定义/README.md)
      - [2.1.1 RPC 安全性](/RPC/RPC%20定义/RPC%20安全性.md)
      - [2.1.2 RPC 应用](/RPC/RPC%20定义/RPC%20应用.md)
      - [2.1.3 RPC 简史](/RPC/RPC%20定义/RPC%20简史.md)
    - [2.2 分布式追踪](/RPC/分布式追踪/README.md)
      - [2.2.1 OpenTelemetry](/RPC/分布式追踪/OpenTelemetry/README.md)
        
      - [2.2.2 OpenTracing](/RPC/分布式追踪/OpenTracing/README.md)
        
      - 2.2.3 系统设计
        - [2.2.3.1 框架对比](/RPC/分布式追踪/系统设计/框架对比.md)
        - [2.2.3.2 系统设计](/RPC/分布式追踪/系统设计/系统设计.md)
    - [2.3 协议编码](/RPC/协议编码/README.md)
      - [2.3.1 Avro](/RPC/协议编码/Avro/README.md)
        - [2.3.1.1 Java](/RPC/协议编码/Avro/Java.md)
        - [2.3.1.2 模式演变](/RPC/协议编码/Avro/模式演变.md)
      - [2.3.2 Json](/RPC/协议编码/Json/README.md)
        - [2.3.2.1 JSONSchema](/RPC/协议编码/Json/JSONSchema.md)
        - [2.3.2.2 二进制编码](/RPC/协议编码/Json/二进制编码.md)
      - [2.3.3 Protobuf](/RPC/协议编码/Protobuf/README.md)
        - [2.3.3.1 类型定义](/RPC/协议编码/Protobuf/类型定义.md)
      - [2.3.4 Thrift](/RPC/协议编码/Thrift/README.md)
        
    - [2.4 性能对比](/RPC/性能对比.md)
    - [2.5 服务发现](/RPC/服务发现/README.md)
      
    - [2.6 服务调用](/RPC/服务调用/README.md)
      
    - [2.7 消息传递](/RPC/消息传递/README.md)
      - [2.7.1 数据流的类型](/RPC/消息传递/数据流的类型.md)
  - [3 接入网关](/接入网关/README.md)
    - 3.1 Kong
      - [3.1.1 Kong](/接入网关/Kong/Kong.md)
    - [3.2 Scratch](/接入网关/Scratch/README.md)
      - [3.2.1 网关特性](/接入网关/Scratch/网关特性.md)
    - [3.3 代理服务器](/接入网关/代理服务器/README.md)
      - [3.3.1 Apache](/接入网关/代理服务器/Apache/README.md)
        
      - [3.3.2 Caddy](/接入网关/代理服务器/Caddy/README.md)
        
      - [3.3.3 Nginx](/接入网关/代理服务器/Nginx/README.md)
        - [3.3.3.1 HTTP 服务器配置](/接入网关/代理服务器/Nginx/HTTP%20服务器配置.md)
        - [3.3.3.2 基础配置](/接入网关/代理服务器/Nginx/基础配置.md)
        - [3.3.3.3 进程模型](/接入网关/代理服务器/Nginx/进程模型.md)
      - [3.3.4 OpenResty](/接入网关/代理服务器/OpenResty/README.md)
        
    - 3.4 实践案例
      - [3.4.1 喜马拉雅 自研网关架构演进过程](/接入网关/实践案例/2021-喜马拉雅-自研网关架构演进过程.md)
      - [3.4.2 爱奇艺 基于 Netty 的长连接网关](/接入网关/实践案例/2021-爱奇艺-基于%20Netty%20的长连接网关.md)
    - [3.5 服务状态处理](/接入网关/服务状态处理/README.md)
      - [3.5.1 幂等设计](/接入网关/服务状态处理/幂等设计.md)
      - [3.5.2 无状态设计](/接入网关/服务状态处理/无状态设计.md)
    - [3.6 负载均衡](/接入网关/负载均衡/README.md)
      - [3.6.1 LVS](/接入网关/负载均衡/LVS/README.md)
        
      - [3.6.2 Scratch](/接入网关/负载均衡/Scratch/README.md)
        - [3.6.2.1 基于 Go 的简单负载均衡](/接入网关/负载均衡/Scratch/基于%20Go%20的简单负载均衡.md)
      - [3.6.3 分流算法](/接入网关/负载均衡/分流算法.md)
      - [3.6.4 负载分层](/接入网关/负载均衡/负载分层.md)
    - [3.7 长连接服务](/接入网关/长连接服务/README.md)
      - 3.7.1 DeepStream
        - [3.7.1.1 DeepStream](/接入网关/长连接服务/DeepStream/DeepStream.md)
      - [3.7.2 WebSocket 网关](/接入网关/长连接服务/WebSocket%20网关/README.md)
        
      - [3.7.3 多机房多网络](/接入网关/长连接服务/多机房多网络.md)
  - [4 配置中心](/配置中心/README.md)
    - [4.1 Consul](/配置中心/Consul/README.md)
      
    - [4.2 Etcd](/配置中心/Etcd/README.md)
      
    - [4.3 Nacos](/配置中心/Nacos/README.md)
      - [4.3.1 服务注册与发现](/配置中心/Nacos/服务注册与发现.md)
    - [4.4 ZooKeeper](/配置中心/ZooKeeper/README.md)
      - [4.4.1 ZAB](/配置中心/ZooKeeper/ZAB.md)
      - [4.4.2 数据操作](/配置中心/ZooKeeper/数据操作.md)
      - [4.4.3 架构原理](/配置中心/ZooKeeper/架构原理.md)
      - [4.4.4 部署与配置](/配置中心/ZooKeeper/部署与配置.md)
    - [4.5 基础配置方式](/配置中心/基础配置方式.md)
  - [5 权限隔离](/权限隔离/README.md)
    - [5.1 RBAC](/权限隔离/RBAC/README.md)
      
    - [5.2 SSO](/权限隔离/SSO/README.md)
      - [5.2.1 CAS](/权限隔离/SSO/CAS/README.md)
        
      - [5.2.2 Hydra](/权限隔离/SSO/Hydra/README.md)
        
      - [5.2.3 Keycloak](/权限隔离/SSO/Keycloak/README.md)
        
      - [5.2.4 Pac4j](/权限隔离/SSO/Pac4j/README.md)
        
    - [5.3 多租户](/权限隔离/多租户/README.md)
      - [5.3.1 通用多租户框架](/权限隔离/多租户/通用多租户框架.md)
    - [5.4 开放平台](/权限隔离/开放平台/README.md)
      - [5.4.1 扫码登陆](/权限隔离/开放平台/扫码登陆.md)
    - [5.5 认证基础](/权限隔离/认证基础/README.md)
      - 5.5.1 HTTP
        - [5.5.1.1 HTTP 认证](/权限隔离/认证基础/HTTP/HTTP%20认证.md)
        - [5.5.1.2 Session](/权限隔离/认证基础/HTTP/Session.md)
      - 5.5.2 JWT
        - [5.5.2.1 JWT](/权限隔离/认证基础/JWT/JWT.md)
      - [5.5.3 OAuth](/权限隔离/认证基础/OAuth/README.md)
        
  - 6 微服务框架
    - [6.1 Dapr](/微服务框架/Dapr/README.md)
      - [6.1.1 Components](/微服务框架/Dapr/Components/README.md)
        
      - 6.1.2 应用开发
        - [6.1.2.1 Actor](/微服务框架/Dapr/应用开发/Actor/README.md)
          - [6.1.2.1.1 注册与调用](/微服务框架/Dapr/应用开发/Actor/注册与调用.md)
        - [6.1.2.2 PubSub](/微服务框架/Dapr/应用开发/PubSub/README.md)
          - [6.1.2.2.1 消息发布与订阅](/微服务框架/Dapr/应用开发/PubSub/消息发布与订阅.md)
        - [6.1.2.3 服务调用](/微服务框架/Dapr/应用开发/服务调用.md)
        - [6.1.2.4 状态管理](/微服务框架/Dapr/应用开发/状态管理.md)
      - [6.1.3 生产配置](/微服务框架/Dapr/生产配置/README.md)
        
      - 6.1.4 部署案例
        - [6.1.4.1 Hello World](/微服务框架/Dapr/部署案例/Hello%20World.md)
        - [6.1.4.2 K8s](/微服务框架/Dapr/部署案例/K8s.md)
    - [6.2 Dubbo](/微服务框架/Dubbo/README.md)
      - [6.2.1 Kubernetes](/微服务框架/Dubbo/Kubernetes/README.md)
        - [6.2.1.1 Kubernetes 与 Dubbo](/微服务框架/Dubbo/Kubernetes/Kubernetes%20与%20Dubbo.md)
      - [6.2.2 架构机制](/微服务框架/Dubbo/架构机制/README.md)
        
      - [6.2.3 踩坑汇总](/微服务框架/Dubbo/踩坑汇总.md)
    - 6.3 Rpcx
      - [6.3.1 REAMDE](/微服务框架/Rpcx/REAMDE.md)
    - [6.4 Scratch](/微服务框架/Scratch/README.md)
      - 6.4.1 Go
        - [6.4.1.1 Go RPC 框架](/微服务框架/Scratch/Go/Go%20RPC%20框架.md)
      - 6.4.2 Java
        - [6.4.2.1 Java RPC 框架](/微服务框架/Scratch/Java/Java%20RPC%20框架.md)
    - [6.5 ServiceComb](/微服务框架/ServiceComb/README.md)
      
    - [6.6 gRPC](/微服务框架/gRPC/README.md)
      - [6.6.1 开发环境](/微服务框架/gRPC/开发环境.md)
    - 6.7 实践案例
      - [6.7.1 爱奇艺微服务标准技术架构实践](/微服务框架/实践案例/爱奇艺微服务标准技术架构实践.md)