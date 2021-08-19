  - [1 INTRODUCTION](/INTRODUCTION.md)
  - [2 服务化架构](/服务化架构/README.md)
    - [2.1 SOA](/服务化架构/SOA/README.md)
      - [2.1.1 ESB](/服务化架构/SOA/ESB.md)
      - [2.1.2 服务视图](/服务化架构/SOA/服务视图.md)
    - [2.2 中间件](/服务化架构/中间件/README.md)
      
    - [2.3 云原生](/服务化架构/云原生/README.md)
      - [2.3.1 Distributionless](/服务化架构/云原生/Distributionless.md)
      - [2.3.2 Serverless](/服务化架构/云原生/Serverless.md)
      - 2.3.3 云原生剖析
        - [2.3.3.1 容器、K8s、微服务、云原生](/服务化架构/云原生/云原生剖析/容器、K8s、微服务、云原生.md)
    - [2.4 单体架构](/服务化架构/单体架构/README.md)
      - [2.4.1 单体分层架构](/服务化架构/单体架构/单体分层架构.md)
    - [2.5 微服务](/服务化架构/微服务/README.md)
      - [2.5.1 单体架构到分布式应用](/服务化架构/微服务/单体架构到分布式应用.md)
      - 2.5.2 微服务框架
        - [2.5.2.1 微服务框架比较](/服务化架构/微服务/微服务框架/微服务框架比较.md)
      - 2.5.3 微服务治理
        - [2.5.3.1 分布式应用治理](/服务化架构/微服务/微服务治理/分布式应用治理.md)
        - [2.5.3.2 微服务设计模式](/服务化架构/微服务/微服务治理/微服务设计模式.md)
      - 2.5.4 微服务拆分
        - [2.5.4.1 服务拆分与边界](/服务化架构/微服务/微服务拆分/服务拆分与边界.md)
        - [2.5.4.2 组件化与服务化](/服务化架构/微服务/微服务拆分/组件化与服务化.md)
  - [3 微服务通信](/微服务通信/README.md)
    - [3.1 RPC](/微服务通信/RPC/README.md)
      - [3.1.1 RPC 安全性](/微服务通信/RPC/RPC%20安全性.md)
      - [3.1.2 RPC 应用](/微服务通信/RPC/RPC%20应用.md)
      - [3.1.3 RPC 简史](/微服务通信/RPC/RPC%20简史.md)
      - [3.1.4 性能对比](/微服务通信/RPC/性能对比.md)
      - [3.1.5 服务发现](/微服务通信/RPC/服务发现/README.md)
        
      - [3.1.6 服务调用](/微服务通信/RPC/服务调用/README.md)
        
    - [3.2 分布式追踪](/微服务通信/分布式追踪/README.md)
      - [3.2.1 OpenTelemetry](/微服务通信/分布式追踪/OpenTelemetry/README.md)
        
      - [3.2.2 OpenTracing](/微服务通信/分布式追踪/OpenTracing/README.md)
        
      - 3.2.3 系统设计
        - [3.2.3.1 框架对比](/微服务通信/分布式追踪/系统设计/框架对比.md)
        - [3.2.3.2 系统设计](/微服务通信/分布式追踪/系统设计/系统设计.md)
    - [3.3 协议编码](/微服务通信/协议编码/README.md)
      - [3.3.1 Avro](/微服务通信/协议编码/Avro/README.md)
        - [3.3.1.1 Java](/微服务通信/协议编码/Avro/Java.md)
        - [3.3.1.2 模式演变](/微服务通信/协议编码/Avro/模式演变.md)
      - [3.3.2 Json](/微服务通信/协议编码/Json/README.md)
        - [3.3.2.1 JSONSchema](/微服务通信/协议编码/Json/JSONSchema.md)
        - [3.3.2.2 二进制编码](/微服务通信/协议编码/Json/二进制编码.md)
      - [3.3.3 Protobuf](/微服务通信/协议编码/Protobuf/README.md)
        - [3.3.3.1 快速开始](/微服务通信/协议编码/Protobuf/快速开始.md)
        - [3.3.3.2 类型定义](/微服务通信/协议编码/Protobuf/类型定义.md)
      - [3.3.4 Thrift](/微服务通信/协议编码/Thrift/README.md)
        
    - [3.4 发布订阅](/微服务通信/发布订阅/README.md)
      
    - [3.5 消息传递](/微服务通信/消息传递/README.md)
      - [3.5.1 数据流的类型](/微服务通信/消息传递/数据流的类型.md)
    - [3.6 消息队列](/微服务通信/消息队列/README.md)
      
  - 4 微服务框架
    - [4.1 Dapr](/微服务框架/Dapr/README.md)
      - [4.1.1 Components](/微服务框架/Dapr/Components/README.md)
        
      - 4.1.2 应用开发
        - [4.1.2.1 Actor](/微服务框架/Dapr/应用开发/Actor/README.md)
          - [4.1.2.1.1 注册与调用](/微服务框架/Dapr/应用开发/Actor/注册与调用.md)
        - [4.1.2.2 PubSub](/微服务框架/Dapr/应用开发/PubSub/README.md)
          - [4.1.2.2.1 消息发布与订阅](/微服务框架/Dapr/应用开发/PubSub/消息发布与订阅.md)
        - [4.1.2.3 服务调用](/微服务框架/Dapr/应用开发/服务调用.md)
        - [4.1.2.4 状态管理](/微服务框架/Dapr/应用开发/状态管理.md)
      - [4.1.3 生产配置](/微服务框架/Dapr/生产配置/README.md)
        
      - 4.1.4 部署案例
        - [4.1.4.1 Hello World](/微服务框架/Dapr/部署案例/Hello%20World.md)
        - [4.1.4.2 K8s](/微服务框架/Dapr/部署案例/K8s.md)
    - [4.2 Dubbo](/微服务框架/Dubbo/README.md)
      - [4.2.1 K8s](/微服务框架/Dubbo/K8s/README.md)
        - [4.2.1.1 K8s 与 Dubbo](/微服务框架/Dubbo/K8s/K8s%20与%20Dubbo.md)
      - [4.2.2 架构机制](/微服务框架/Dubbo/架构机制/README.md)
        
      - [4.2.3 踩坑汇总](/微服务框架/Dubbo/踩坑汇总.md)
    - 4.3 Rpcx
      - [4.3.1 REAMDE](/微服务框架/Rpcx/REAMDE.md)
    - [4.4 Scratch](/微服务框架/Scratch/README.md)
      - 4.4.1 Go
        - [4.4.1.1 Go RPC 框架](/微服务框架/Scratch/Go/Go%20RPC%20框架.md)
      - 4.4.2 Java
        - [4.4.2.1 Java RPC 框架](/微服务框架/Scratch/Java/Java%20RPC%20框架.md)
    - [4.5 ServiceComb](/微服务框架/ServiceComb/README.md)
      
    - [4.6 gRPC](/微服务框架/gRPC/README.md)
      - [4.6.1 开发环境](/微服务框架/gRPC/开发环境.md)
    - 4.7 实践案例
      - [4.7.1 爱奇艺微服务标准技术架构实践](/微服务框架/实践案例/爱奇艺微服务标准技术架构实践.md)
  - [5 接入网关](/接入网关/README.md)
    - [5.1 代理服务器](/接入网关/代理服务器/README.md)
      - [5.1.1 Apache](/接入网关/代理服务器/Apache/README.md)
        
      - [5.1.2 Caddy](/接入网关/代理服务器/Caddy/README.md)
        
      - [5.1.3 Nginx](/接入网关/代理服务器/Nginx/README.md)
        - [5.1.3.1 HTTP 服务器配置](/接入网关/代理服务器/Nginx/HTTP%20服务器配置.md)
        - [5.1.3.2 基础配置](/接入网关/代理服务器/Nginx/基础配置.md)
        - [5.1.3.3 进程模型](/接入网关/代理服务器/Nginx/进程模型.md)
      - [5.1.4 OpenResty](/接入网关/代理服务器/OpenResty/README.md)
        
    - [5.2 负载均衡](/接入网关/负载均衡/README.md)
      - [5.2.1 LVS](/接入网关/负载均衡/LVS/README.md)
        
      - [5.2.2 Scratch](/接入网关/负载均衡/Scratch/README.md)
        - [5.2.2.1 基于 Go 的简单负载均衡](/接入网关/负载均衡/Scratch/基于%20Go%20的简单负载均衡.md)
      - [5.2.3 分流算法](/接入网关/负载均衡/分流算法.md)
      - [5.2.4 负载分层](/接入网关/负载均衡/负载分层.md)
    - [5.3 权限隔离](/接入网关/权限隔离/README.md)
      - [5.3.1 RBAC](/接入网关/权限隔离/RBAC/README.md)
        
      - [5.3.2 SSO](/接入网关/权限隔离/SSO/README.md)
        - [5.3.2.1 CAS](/接入网关/权限隔离/SSO/CAS/README.md)
          
        - [5.3.2.2 Hydra](/接入网关/权限隔离/SSO/Hydra/README.md)
          
        - [5.3.2.3 Keycloak](/接入网关/权限隔离/SSO/Keycloak/README.md)
          
        - [5.3.2.4 Pac4j](/接入网关/权限隔离/SSO/Pac4j/README.md)
          
      - [5.3.3 多租户](/接入网关/权限隔离/多租户/README.md)
        - [5.3.3.1 通用多租户框架](/接入网关/权限隔离/多租户/通用多租户框架.md)
      - [5.3.4 开放平台](/接入网关/权限隔离/开放平台/README.md)
        - [5.3.4.1 扫码登陆](/接入网关/权限隔离/开放平台/扫码登陆.md)
      - [5.3.5 认证基础](/接入网关/权限隔离/认证基础/README.md)
        - 5.3.5.1 HTTP
          - [5.3.5.1.1 HTTP 认证](/接入网关/权限隔离/认证基础/HTTP/HTTP%20认证.md)
          - [5.3.5.1.2 Session](/接入网关/权限隔离/认证基础/HTTP/Session.md)
        - 5.3.5.2 JWT
          - [5.3.5.2.1 JWT](/接入网关/权限隔离/认证基础/JWT/JWT.md)
        - [5.3.5.3 OAuth](/接入网关/权限隔离/认证基础/OAuth/README.md)
          
    - 5.4 网关框架
      - 5.4.1 Kong
        - [5.4.1.1 Kong](/接入网关/网关框架/Kong/Kong.md)
    - [5.5 长连接服务](/接入网关/长连接服务/README.md)
      - 5.5.1 DeepStream
        - [5.5.1.1 DeepStream](/接入网关/长连接服务/DeepStream/DeepStream.md)
      - [5.5.2 WebSocket 网关](/接入网关/长连接服务/WebSocket%20网关/README.md)
        
      - [5.5.3 多机房多网络](/接入网关/长连接服务/多机房多网络.md)
    - 5.6 实践案例
      - [5.6.1 喜马拉雅 自研网关架构演进过程](/接入网关/实践案例/2021-喜马拉雅-自研网关架构演进过程.md)
      - [5.6.2 爱奇艺 基于 Netty 的长连接网关](/接入网关/实践案例/2021-爱奇艺-基于%20Netty%20的长连接网关.md)
      - [5.6.3 Scratch](/接入网关/实践案例/Scratch/README.md)
        - [5.6.3.1 基于 Netty 与 Webflux 的网关](/接入网关/实践案例/Scratch/基于%20Netty%20与%20Webflux%20的网关/README.md)
          
        - [5.6.3.2 网关特性](/接入网关/实践案例/Scratch/网关特性.md)
  - [6 服务网格](/服务网格/README.md)
    - [6.1 Envoy](/服务网格/Envoy/README.md)
      - [6.1.1 Kuma](/服务网格/Envoy/Kuma/README.md)
        
    - [6.2 Istio](/服务网格/Istio/README.md)
      
    - [6.3 Linkerd](/服务网格/Linkerd/README.md)
      
    - [6.4 Serverless](/服务网格/Serverless/README.md)
      - [6.4.1 函数模式](/服务网格/Serverless/函数模式.md)
      - [6.4.2 设计模式](/服务网格/Serverless/设计模式.md)
      - [6.4.3 阿里云](/服务网格/Serverless/阿里云.md)
    - 6.5 可视化
      - [6.5.1 Kiali](/服务网格/可视化/Kiali/README.md)
        
    - 6.6 设计与对比
      - [6.6.1 Sidecar](/服务网格/设计与对比/Sidecar.md)
      - [6.6.2 应用场景](/服务网格/设计与对比/应用场景.md)
      - [6.6.3 框架对比](/服务网格/设计与对比/框架对比.md)
      - [6.6.4 背景分析](/服务网格/设计与对比/背景分析.md)