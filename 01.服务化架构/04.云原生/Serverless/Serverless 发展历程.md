# Serverless 发展历程

通常意义上来讲，Serverless 可以看作是一种云计算服务模型，它允许开发者在不需要管理服务器的情况下通过事件驱动的方式运行代码。与传统应用服务开发模式不同，开发者只需编写并上传他们的应用代码到云服务商提供的平台上，云平台会自动为应用分配资源，并处理应用的部署、扩缩容。这使得开发者可以更加专注于自己的业务需求和应用逻辑，而不需要考虑服务资源的申请、创建、管理和维护等。

从这个意义上讲，我们也可以认为 Serverless 是一个计算范式，它解决资源托管、调度、运维管理等一系列平台型问题，可以看作是 DevOps 的进一步延伸。从应用开发视角来看，Serverless 包括 FaaS（Function as a Service）和 BaaS（Backend as a Service）两部分。在 FaaS 中，开发者编写的代码会被封装成一个或多个函数，运行在云平台上。当请求到达时，云平台自动为函数分配计算资源，拉起函数并执行。执行完成后，平台根据一定的保活策略决定资源的复用或者释放。FaaS 模型不仅可以提高应用的可伸缩性和弹性，还可以大幅降低应用运维的成本。BaaS 则致力于更广泛意义下的 Serverless 化，包括对象存储、缓存、数据库、消息等全栈后端服务的按需弹性、按用付费等。

谈到 Serverless 发展历程，从 2008 年 Google 推出 App Engine 算起，至今已有 15 年的时间，期间经历了多次迭代，主要经历了以下几个阶段。

- Innovators（2008 年~2014 年）：Google App Engine 的发布，使得开发者无须再关心资源分配，也无需关心底层操作系统、硬件和网络等基础设施，对传统应用开发方式具有变革性意义，但 App Engine 并没有使 Serverless 理念流行起来，Serverless 概念本身是在 2012 年由 Iron.io 公司率先提。2014 年 AWS 发布 Lambda 之后，真正使 Serverless 流行起来。

- Early Adoptors（2016 年~2018 年）：这期间，主流云计算平台陆续推出了 Serverless 系列产品，如 Microsoft Azure 发布 Azure Functions、Google Cloud Platform 发布 Cloud Functions 和 Firebase、华为云发布 FunctionGraph 等。2018 年 Gartner 将 Serverless 列为“十大未来将影响基础设施和运维的技术趋势之一”。

- Early Majority（2019 年~今）：2019 年 UC Berkeley 发表论文《Cloud Programming Simplified：A Berkeley View on Serverless Computing》，预言 Serverless 将成为云计算下一代的编程范式，提出 Serverless = FaaS + BaaS 的定义框架，并提出存储等后端的 BaaS 化、异构硬件支持、资源细粒度隔离等 Serverless 的核心问题。同期，华为云提出通用 Serverless（General-purpose Serverless）的理念，支持有状态应用、程序自动并行、大规模异构资源管理等，帮助企业解决更广泛的计算、运行与交付问题。
