# JSON

```json
{
  "numbers": 0,
  "strings": "Hellø, wørld. All unicode is allowed, along with \"escaping\".",
  "has bools?": true,
  "nothingness": null,

  "big number": 1.2e100,

  "objects": {
    "comment": "Most of your structure will come from objects.",

    "array": [0, 1, 2, 3, "Arrays can have anything in them.", 5],

    "another object": {
      "comment": "These things can be nested, very useful."
    }
  },

  "silliness": [
    {
      "sources of potassium": ["bananas"]
    },
    [
      [1, 0, 0, 0],
      [0, 1, 0, 0],
      [0, 0, 1, "neo"],
      [0, 0, 0, 1]
    ]
  ],

  "that was short": "And, you're done. You now know everything JSON has to offer."
}
```

# JSON Schema

当我们在描述 `文字链接` 的时候，需要约定数据的组织方式，比如，需要知道有哪些字段，这些字段的取值如何表示等，这就是 JSON Schema 的来源。

我们以 `文字链接` 为例，它对应的 JSON Schema 大概如此：

```json
{
  "type": "object",
  "properties": {
    "text": {
      "type": "string",
      "title": "文字"
    },
    "href": {
      "type": "string",
      "title": "链接地址(URL)"
    }
  }
}
```

JSON Schema 定义了如何基于 JSON 格式描述 JSON 数据结构的规范，进而提供数据校验、文档生成和接口数据交互控制等一系列能力。它的特性和用途，可以大致归纳为以下几点：

1. 用于描述数据结构

在描述 JSON 数据时，如果数据本身的复杂度很高，高到三维四维，普通的标签函数已经无法表示这种层级结构了，而 JSON Schema 利用 `object` 和 `array` 字段类型的反复嵌套，可以规避掉这个缺陷。

当然，除了键值等基本信息，规范层面还提供了丰富的关键词支持，如果想通过自定义扩展字段，解决特定场景的业务需求，也是非常方便的。

1. 用于构建人机可读的文档

计算机领域有个概念叫做自描述。所谓自描述，可以理解为：文档本身包含了自身与其他文档交互相关的描述信息，不需要其他的配置文件或者额外信息来描述。

而 JSON Schema 就是自描述的，它本身就是一份很完善的说明文档，字段的含义说明、该如何取值、格式的要求等都清晰明了。

1. 用于生成模拟数据

通过标签函数生成模拟数据，只能解决基本的格式要求。比如 `string` 类型的字段，模拟出来的数据，无非是一个随机字符串。

但在 JSON Schema 中，由于字段的描述不仅仅是类型，更多的约束条件，可以确保模拟数据更接近于真实数据。

1. 用于校验数据，实现自动化测试

接口数据的校验工作，往往依赖于测试代码逻辑和用例。如果用 JSON Schema 描述一个数据接口，就不需要再编写测试代码了，所有的逻辑都可以移植到 JSON Schema 中维护。配合 `jsv`、`tv4` 等二方校验工具，接口测试可以真正自动化。

# Links

- [JSON Schema 那些事儿：基本概念 ](http://taobaofed.org/blog/2016/01/25/jsonschema/)
