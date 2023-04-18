# OpenTelemetry

OpenTelemetry 是一个开源可观测性项目，它合并了 OpenTracing 和 OpenCensus。OpenTelemetry 项目包含规范、库、代理和
其他组件，以便从服务中捕获遥测信息，更好地观察、管理和调试服务。它涵盖了可观测性的三大支柱⸺分布式跟踪、指标和日志记录（目前处于 beta 测试版），且其规范通过 correlations 连接这三大支柱。这样就可以使用指标来查明问题，找到相应的跟踪
信息，以定位问题，并最终研究相应的日志，以查找确切的根本原因。OpenTelemetry 组件可以连接到后端可观察性系统，例如 Prometheus 、Jaeger 及其他系统。OpenTracing 的形成，是朝着融合标准化与工具简化而迈出的积极一步。
