# Dubbo

![](https://tva1.sinaimg.cn/large/007rAy9hgy1g2uxeyyhdfj30t20hc3za.jpg)

图中的 6 个步骤的含义解释如下：

0、服务容器负责启动，加载，运行服务提供者。

1、服务提供者在启动时，向注册中心注册自己提供的服务。

2、服务消费者在启动时，向注册中心订阅自己所需的服务。

3、注册中心返回服务提供者地址列表给消费者，如果有变更，注册中心将基于长连接推送变更数据给消费者。

4、服务消费者，从提供者地址列表中，基于软负载均衡算法，选一台提供者进行调用，如果调用失败，再选另一台调用。

5、服务消费者和提供者，在内存中累计调用次数和调用时间，定时每分钟发送一次统计数据到监控中心。

# 链接

- [Dubbo 原理解析](http://blog.csdn.net/column/details/learningdubbo.html)

- https://www.funtl.com/zh/apache-dubbo-rpc/Dubbo-%E7%9A%84%E6%9C%8D%E5%8A%A1%E6%B2%BB%E7%90%86.html#%E6%9C%AC%E8%8A%82%E8%A7%86%E9%A2%91
