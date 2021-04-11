  - [1 INTRODUCTION](/INTRODUCTION.md)
  - [2 微服务通信](/微服务通信/README.md)
    - [2.1 RPC](/微服务通信/RPC/README.md)
      - [2.1.1 RPC 安全性](/微服务通信/RPC/RPC%20安全性.md)
      - [2.1.2 RPC 应用](/微服务通信/RPC/RPC%20应用.md)
      - [2.1.3 RPC 简史](/微服务通信/RPC/RPC%20简史.md)
      - [2.1.4 性能对比](/微服务通信/RPC/性能对比.md)
      - [2.1.5 服务发现](/微服务通信/RPC/服务发现/README.md)
        
      - [2.1.6 服务调用](/微服务通信/RPC/服务调用/README.md)
        
    - [2.2 分布式追踪](/微服务通信/分布式追踪/README.md)
      - [2.2.1 OpenTelemetry](/微服务通信/分布式追踪/OpenTelemetry/README.md)
        
      - [2.2.2 OpenTracing](/微服务通信/分布式追踪/OpenTracing/README.md)
        
      - 2.2.3 系统设计
        - [2.2.3.1 框架对比](/微服务通信/分布式追踪/系统设计/框架对比.md)
        - [2.2.3.2 系统设计](/微服务通信/分布式追踪/系统设计/系统设计.md)
    - [2.3 协议编码](/微服务通信/协议编码/README.md)
      - [2.3.1 Avro](/微服务通信/协议编码/Avro/README.md)
        - [2.3.1.1 Java](/微服务通信/协议编码/Avro/Java.md)
        - [2.3.1.2 模式演变](/微服务通信/协议编码/Avro/模式演变.md)
      - [2.3.2 Json](/微服务通信/协议编码/Json/README.md)
        - [2.3.2.1 JSONSchema](/微服务通信/协议编码/Json/JSONSchema.md)
        - [2.3.2.2 二进制编码](/微服务通信/协议编码/Json/二进制编码.md)
      - [2.3.3 Protobuf](/微服务通信/协议编码/Protobuf/README.md)
        - [2.3.3.1 快速开始](/微服务通信/协议编码/Protobuf/快速开始.md)
        - [2.3.3.2 类型定义](/微服务通信/协议编码/Protobuf/类型定义.md)
      - [2.3.4 Thrift](/微服务通信/协议编码/Thrift/README.md)
        
    - [2.4 发布订阅](/微服务通信/发布订阅/README.md)
      
    - [2.5 消息传递](/微服务通信/消息传递/README.md)
      - [2.5.1 数据流的类型](/微服务通信/消息传递/数据流的类型.md)
    - [2.6 消息队列](/微服务通信/消息队列/README.md)
      
  - [3 服务化架构](/服务化架构/README.md)
    - [3.1 SOA](/服务化架构/SOA/README.md)
      - [3.1.1 ESB](/服务化架构/SOA/ESB.md)
      - [3.1.2 服务视图](/服务化架构/SOA/服务视图.md)
    - [3.2 中间件](/服务化架构/中间件/README.md)
      
    - [3.3 云原生](/服务化架构/云原生/README.md)
      - [3.3.1 Distributionless](/服务化架构/云原生/Distributionless.md)
      - [3.3.2 Serverless](/服务化架构/云原生/Serverless.md)
      - [3.3.3 分布式应用治理](/服务化架构/云原生/分布式应用治理.md)
    - [3.4 单体架构](/服务化架构/单体架构/README.md)
      - [3.4.1 单体分层架构](/服务化架构/单体架构/单体分层架构.md)
    - [3.5 微服务](/服务化架构/微服务/README.md)
      - [3.5.1 单体架构到分布式应用](/服务化架构/微服务/单体架构到分布式应用.md)
      - [3.5.2 微服务框架比较](/服务化架构/微服务/微服务框架比较.md)
      - [3.5.3 服务拆分与边界](/服务化架构/微服务/服务拆分与边界.md)
      - [3.5.4 组件化与服务化](/服务化架构/微服务/组件化与服务化.md)
  - [4 接入网关](/接入网关/README.md)
    - 4.1 Kong
      - [4.1.1 Kong](/接入网关/Kong/Kong.md)
    - [4.2 Scratch](/接入网关/Scratch/README.md)
      - [4.2.1 基于 Netty 与 Webflux 的网关](/接入网关/Scratch/基于%20Netty%20与%20Webflux%20的网关/README.md)
        
      - [4.2.2 网关特性](/接入网关/Scratch/网关特性.md)
    - [4.3 代理服务器](/接入网关/代理服务器/README.md)
      - [4.3.1 Apache](/接入网关/代理服务器/Apache/README.md)
        
      - [4.3.2 Caddy](/接入网关/代理服务器/Caddy/README.md)
        
      - [4.3.3 Nginx](/接入网关/代理服务器/Nginx/README.md)
        - [4.3.3.1 HTTP 服务器配置](/接入网关/代理服务器/Nginx/HTTP%20服务器配置.md)
        - [4.3.3.2 基础配置](/接入网关/代理服务器/Nginx/基础配置.md)
        - [4.3.3.3 进程模型](/接入网关/代理服务器/Nginx/进程模型.md)
      - [4.3.4 OpenResty](/接入网关/代理服务器/OpenResty/README.md)
        
    - 4.4 实践案例
      - [4.4.1 喜马拉雅 自研网关架构演进过程](/接入网关/实践案例/2021-喜马拉雅-自研网关架构演进过程.md)
      - [4.4.2 爱奇艺 基于 Netty 的长连接网关](/接入网关/实践案例/2021-爱奇艺-基于%20Netty%20的长连接网关.md)
    - [4.5 服务状态处理](/接入网关/服务状态处理/README.md)
      - [4.5.1 幂等设计](/接入网关/服务状态处理/幂等设计.md)
      - [4.5.2 无状态设计](/接入网关/服务状态处理/无状态设计.md)
    - [4.6 负载均衡](/接入网关/负载均衡/README.md)
      - [4.6.1 LVS](/接入网关/负载均衡/LVS/README.md)
        
      - [4.6.2 Scratch](/接入网关/负载均衡/Scratch/README.md)
        - [4.6.2.1 基于 Go 的简单负载均衡](/接入网关/负载均衡/Scratch/基于%20Go%20的简单负载均衡.md)
      - [4.6.3 分流算法](/接入网关/负载均衡/分流算法.md)
      - [4.6.4 负载分层](/接入网关/负载均衡/负载分层.md)
    - [4.7 长连接服务](/接入网关/长连接服务/README.md)
      - 4.7.1 DeepStream
        - [4.7.1.1 DeepStream](/接入网关/长连接服务/DeepStream/DeepStream.md)
      - [4.7.2 WebSocket 网关](/接入网关/长连接服务/WebSocket%20网关/README.md)
        
      - [4.7.3 多机房多网络](/接入网关/长连接服务/多机房多网络.md)
  - [5 配置中心](/配置中心/README.md)
    - [5.1 Consul](/配置中心/Consul/README.md)
      
    - [5.2 Etcd](/配置中心/Etcd/README.md)
      
    - [5.3 Nacos](/配置中心/Nacos/README.md)
      - [5.3.1 服务注册与发现](/配置中心/Nacos/服务注册与发现.md)
    - [5.4 ZooKeeper](/配置中心/ZooKeeper/README.md)
      - [5.4.1 ZAB](/配置中心/ZooKeeper/ZAB.md)
      - [5.4.2 数据操作](/配置中心/ZooKeeper/数据操作.md)
      - [5.4.3 架构原理](/配置中心/ZooKeeper/架构原理.md)
      - [5.4.4 部署与配置](/配置中心/ZooKeeper/部署与配置.md)
    - [5.5 基础配置方式](/配置中心/基础配置方式.md)
  - [6 权限隔离](/权限隔离/README.md)
    - [6.1 RBAC](/权限隔离/RBAC/README.md)
      
    - [6.2 SSO](/权限隔离/SSO/README.md)
      - [6.2.1 CAS](/权限隔离/SSO/CAS/README.md)
        
      - [6.2.2 Hydra](/权限隔离/SSO/Hydra/README.md)
        
      - [6.2.3 Keycloak](/权限隔离/SSO/Keycloak/README.md)
        
      - [6.2.4 Pac4j](/权限隔离/SSO/Pac4j/README.md)
        
    - [6.3 多租户](/权限隔离/多租户/README.md)
      - [6.3.1 通用多租户框架](/权限隔离/多租户/通用多租户框架.md)
    - [6.4 开放平台](/权限隔离/开放平台/README.md)
      - [6.4.1 扫码登陆](/权限隔离/开放平台/扫码登陆.md)
    - [6.5 认证基础](/权限隔离/认证基础/README.md)
      - 6.5.1 HTTP
        - [6.5.1.1 HTTP 认证](/权限隔离/认证基础/HTTP/HTTP%20认证.md)
        - [6.5.1.2 Session](/权限隔离/认证基础/HTTP/Session.md)
      - 6.5.2 JWT
        - [6.5.2.1 JWT](/权限隔离/认证基础/JWT/JWT.md)
      - [6.5.3 OAuth](/权限隔离/认证基础/OAuth/README.md)
        
  - 7 微服务框架
    - [7.1 Dapr](/微服务框架/Dapr/README.md)
      - [7.1.1 Components](/微服务框架/Dapr/Components/README.md)
        
      - 7.1.2 应用开发
        - [7.1.2.1 Actor](/微服务框架/Dapr/应用开发/Actor/README.md)
          - [7.1.2.1.1 注册与调用](/微服务框架/Dapr/应用开发/Actor/注册与调用.md)
        - [7.1.2.2 PubSub](/微服务框架/Dapr/应用开发/PubSub/README.md)
          - [7.1.2.2.1 消息发布与订阅](/微服务框架/Dapr/应用开发/PubSub/消息发布与订阅.md)
        - [7.1.2.3 服务调用](/微服务框架/Dapr/应用开发/服务调用.md)
        - [7.1.2.4 状态管理](/微服务框架/Dapr/应用开发/状态管理.md)
      - [7.1.3 生产配置](/微服务框架/Dapr/生产配置/README.md)
        
      - 7.1.4 部署案例
        - [7.1.4.1 Hello World](/微服务框架/Dapr/部署案例/Hello%20World.md)
        - [7.1.4.2 K8s](/微服务框架/Dapr/部署案例/K8s.md)
    - [7.2 Dubbo](/微服务框架/Dubbo/README.md)
      - [7.2.1 Kubernetes](/微服务框架/Dubbo/Kubernetes/README.md)
        - [7.2.1.1 Kubernetes 与 Dubbo](/微服务框架/Dubbo/Kubernetes/Kubernetes%20与%20Dubbo.md)
      - [7.2.2 架构机制](/微服务框架/Dubbo/架构机制/README.md)
        
      - [7.2.3 踩坑汇总](/微服务框架/Dubbo/踩坑汇总.md)
    - 7.3 Rpcx
      - [7.3.1 REAMDE](/微服务框架/Rpcx/REAMDE.md)
    - [7.4 Scratch](/微服务框架/Scratch/README.md)
      - 7.4.1 Go
        - [7.4.1.1 Go RPC 框架](/微服务框架/Scratch/Go/Go%20RPC%20框架.md)
      - 7.4.2 Java
        - [7.4.2.1 Java RPC 框架](/微服务框架/Scratch/Java/Java%20RPC%20框架.md)
    - [7.5 ServiceComb](/微服务框架/ServiceComb/README.md)
      
    - [7.6 gRPC](/微服务框架/gRPC/README.md)
      - [7.6.1 开发环境](/微服务框架/gRPC/开发环境.md)
    - 7.7 实践案例
      - [7.7.1 爱奇艺微服务标准技术架构实践](/微服务框架/实践案例/爱奇艺微服务标准技术架构实践.md)