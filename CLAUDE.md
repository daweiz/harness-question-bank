# CLAUDE.md

本文件为 Claude Code（claude.ai/code）在此仓库中工作时提供指导。

## 项目概述

- **项目语言**：中文（标识符、注释、提交信息、Issue、PR 均使用中文）
- **开发语言**：TypeScript
- **项目路径**：`D:\techspace\course\he\workspace\qb`，即 harness 工程下的题库建设项目
- **作者**：张大为，辽宁师范大学·计算机与人工智能学院，daweiz@lnnu.edu.cn，中国大连 116081

这是一个**多课程题库建设系统**：根据指定的课程名称与课程描述，创建二级知识体系（一级知识领域、二级知识点）；再依据课程名称、课程描述和知识体系，建设中文题库。

## 数据规范

- 试题以带 YAML 前置元数据的 Markdown 文件存储。
- 通过 SHA-256 内容哈希建立索引，实现试题去重。
- 课程名称保存在 `.harness/data/courses.json` 文件内。
- 课程知识体系保存在 `.harness/data/<课程名>-KA.json` 文件内。
- 试题文件保存在 `questions/<课程名>/` 目录下（`<领域>/<知识点>/<题型>-<时间>.md`，图片在同级 `images/`）。

## 目录结构

| 目录 | 用途 |
|------|------|
| `.claude/skills/<名字>/SKILL.md` | Skill 与命令定义（命令不放在 `.claude/commands/` 下） |
| `.claude/hooks/` | Hook 脚本 |
| `.claude/tools/` | 工具定义 |
| `.claude/rules/` | 自动生成的规则文件 |
| `.claude/memory/` | 从 skill/命令中分离出的记忆 |
| `.harness/tools/` | 工具脚本（Python、JavaScript、JSONL 等可执行脚本） |
| `.harness/data/` | 课程名称与知识体系数据（`courses.json`、`<课程名>-KA.json`） |
| `questions/` | 题库试题文件（`<课程名>/<领域>/<知识点>/<题型>-<时间>.md`，图片在同级 `images/`） |
| `.harness/temp/` | 临时文件（运行时产生的中间数据、缓存等） |
| `.harness/logs/` | 日志文件 |
| `.harness/prompt/` | 初始化与流程提示文件 |
| `.harness/report/` | 状态报告 |

## 约定

- 凡是创建命令或 skill 时，可独立成规则的，自动生成规则保存到 `.claude/rules`。
- 凡是创建命令或 skill 时，可通过 memory 分离完成的，独立成 memory 保存到 `.claude/memory`。

## 开发命令

项目尚未初始化（无 `package.json`）。首次开发前需：

1. 初始化 Node.js 项目并安装 TypeScript 与 `tsx`（`tsx` 用于运行 Hook 脚本）：
   ```bash
   pnpm init
   pnpm add -D typescript @types/node tsx
   ```
2. 根据需求实现题库建设的核心功能模块。
