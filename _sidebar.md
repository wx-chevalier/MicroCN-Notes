  - 1 API
    - [1.1 API 安全](/API/API%20安全/README.md)
      
    - [1.2 API 生成](/API/API%20生成/README.md)
      
    - [1.3 REST](/API/REST/README.md)
      - [1.3.1 Microsoft API 设计标准](/API/REST/Microsoft%20API%20设计标准.md)
      - [1.3.2 Paypal API 设计标准](/API/REST/Paypal%20API%20设计标准.md)
      - [1.3.3 RESTful 接口](/API/REST/RESTful%20接口.md)
    - [1.4 WebAPI](/API/WebAPI/README.md)
      - [1.4.1 OpenAPI](/API/WebAPI/OpenAPI/README.md)
        
      - 1.4.2 演化与变迁
        - [1.4.2.1 API 的过去，现在与未来](/API/WebAPI/演化与变迁/API%20的过去，现在与未来.md)
        - [1.4.2.2 WebAPI 风格变迁](/API/WebAPI/演化与变迁/WebAPI%20风格变迁.md)
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
      - [2.3.2 JSON](/RPC/协议编码/JSON/README.md)
        - [2.3.2.1 JSONSchema](/RPC/协议编码/JSON/JSONSchema.md)
        - [2.3.2.2 二进制编码](/RPC/协议编码/JSON/二进制编码.md)
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
    - [3.2 代理服务器](/接入网关/代理服务器/README.md)
      - [3.2.1 Apache](/接入网关/代理服务器/Apache/README.md)
        
      - [3.2.2 Caddy](/接入网关/代理服务器/Caddy/README.md)
        
      - [3.2.3 Nginx](/接入网关/代理服务器/Nginx/README.md)
        - [3.2.3.1 HTTP 服务器配置](/接入网关/代理服务器/Nginx/HTTP%20服务器配置.md)
        - [3.2.3.2 基础配置](/接入网关/代理服务器/Nginx/基础配置.md)
        - [3.2.3.3 进程模型](/接入网关/代理服务器/Nginx/进程模型.md)
      - [3.2.4 OpenResty](/接入网关/代理服务器/OpenResty/README.md)
        
    - [3.3 服务状态处理](/接入网关/服务状态处理/README.md)
      - [3.3.1 幂等设计](/接入网关/服务状态处理/幂等设计.md)
      - [3.3.2 无状态设计](/接入网关/服务状态处理/无状态设计.md)
    - [3.4 系统设计](/接入网关/系统设计/README.md)
      - [3.4.1 网关特性](/接入网关/系统设计/网关特性.md)
    - [3.5 负载均衡](/接入网关/负载均衡/README.md)
      - [3.5.1 LVS](/接入网关/负载均衡/LVS/README.md)
        
      - [3.5.2 Scratch](/接入网关/负载均衡/Scratch/README.md)
        - [3.5.2.1 基于 Go 的简单负载均衡](/接入网关/负载均衡/Scratch/基于%20Go%20的简单负载均衡.md)
      - [3.5.3 分流算法](/接入网关/负载均衡/分流算法.md)
      - [3.5.4 负载分层](/接入网关/负载均衡/负载分层.md)
    - [3.6 连接服务](/接入网关/连接服务/README.md)
      - 3.6.1 DeepStream
        - [3.6.1.1 DeepStream](/接入网关/连接服务/DeepStream/DeepStream.md)
      - [3.6.2 多机房多网络](/接入网关/连接服务/多机房多网络.md)
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
    - 5.1 OAuth
      - [5.1.1 Hydra](/权限隔离/OAuth/Hydra/README.md)
        
    - [5.2 RBAC](/权限隔离/RBAC/README.md)
      
    - [5.3 SSO](/权限隔离/SSO/README.md)
      - [5.3.1 CAS](/权限隔离/SSO/CAS/README.md)
        
      - [5.3.2 Keycloak](/权限隔离/SSO/Keycloak/README.md)
        
      - [5.3.3 Pac4j](/权限隔离/SSO/Pac4j/README.md)
        
      - [5.3.4 Shiro](/权限隔离/SSO/Shiro/README.md)
        
    - [5.4 多租户](/权限隔离/多租户/README.md)
      - [5.4.1 通用多租户框架](/权限隔离/多租户/通用多租户框架.md)
    - [5.5 开放平台](/权限隔离/开放平台/README.md)
      - [5.5.1 扫码登陆](/权限隔离/开放平台/扫码登陆.md)
    - 5.6 认证基础
      - [5.6.1 HTTP 认证](/权限隔离/认证基础/HTTP%20认证.md)
      - [5.6.2 JWT](/权限隔离/认证基础/JWT.md)
      - [5.6.3 OAuth](/权限隔离/认证基础/OAuth.md)
      - [5.6.4 Session](/权限隔离/认证基础/Session.md)
      - [5.6.5 认证方式对比](/权限隔离/认证基础/认证方式对比.md)
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