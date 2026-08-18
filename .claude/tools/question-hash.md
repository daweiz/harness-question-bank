---
name: question-hash
description: 计算试题内容 SHA-256 哈希，用于题库去重。给定一个试题 Markdown 文件路径（或通过标准输入传入正文），返回其题目内容（题干、选项与答案，不含解析与 YAML 元数据）的 SHA-256 十六进制摘要。
---

# question-hash 工具

计算试题内容 SHA-256 哈希，供 `/question` 命令生成与校验时去重。

## 运行

```bash
# 计算单个试题文件的哈希
node .harness/tools/question-hash.mjs questions/<课程名>/<领域>/<知识点>/<题型>-<时间>.md

# 通过标准输入计算正文的哈希
cat 正文.txt | node .harness/tools/question-hash.mjs
```

## 输出

- 64 位 SHA-256 十六进制摘要（小写），写入试题 YAML 的 `hash` 字段

## 约定

- 哈希对象为「题干、选项、答案」三部分的规范化文本（去除所有空白字符后连接），不含解析与 YAML 元数据
- 同一课程内哈希相同视为重复试题
- 可执行脚本位于 `.harness/tools/question-hash.mjs`（node 内置 crypto，无需额外依赖）
