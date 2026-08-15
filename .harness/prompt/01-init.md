
## init

- 请将 CLAUDE.md 翻译成中文，并将本项目使用语言指定为中文，项目开发所用的程序代码语言指定为 TypeScript，临时文件存放目录是`.harness/temp`，日志文件存放目录是`.harness/logs`
- 代码中的标识符，注释，提交信息，ISSUE 和 PR 等均使用中文书写。
- skill保存在 `.claude/skills/<名字>/SKILL.md`
- command（命令）保存在`.claude/skills/<名字>/SKILL.md`，不保存在`.claude/commands/<名字>`下
- hook保存在`.claude/hooks`目录下
- tool保存在`.claude/tools`目录下
- 课程名称保存在`.harness/data/<课程名>-KA.json`文件内
- 课程知识体系保存在`.harness/data/课程名-KA.json`文件内
- 本项目位于`D:\techspace\course\he\workspace\qb`,意为 harness 工程下的题库建设项目。

## 项目说明

这是一个多课程题库建设系统，根据指定的课程名称和课程描述（说明），创建二级知识系统（一级知识领域，二级知识点）。根据课程名称，课程描述和知识体系，建设中文题库。试题以带 YAML 前置元数据的 Markdown 文件存储，通过 SHA-256 内容哈希建立索引以实现去重。

## 规则说明

- 凡是创建命令或skill时，可以独立成规则的自动生成规则，保存到`.claude/rules`

## 记忆说明

- 凡是创建命令或skill时，可以通过memory分离完成的，独立成memory，保存到目录`.claude/memory`

## pnpm

- nodejs 的操作命令采用 pnpm （不用npm）

## 作者说明

- 张大为，辽宁师范大学·计算机与人工智能学院，daweiz@lnnu.edu.cn,中国，大连，116081
