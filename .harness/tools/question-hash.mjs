// 计算试题内容 SHA-256 哈希，用于题库去重。
//
// 用法：
//   node .harness/tools/question-hash.mjs <试题文件.md>
//   cat 正文.txt | node .harness/tools/question-hash.mjs
//
// 说明：
//   - 哈希对象为「题干、选项、答案」的规范化文本（去除所有空白字符），不含解析与 YAML 元数据
//   - 与 .claude/rules/question-file-format.md 中的去重规则保持一致
import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';

// 去掉 YAML 前置元数据（文件开头的 --- 块）
function stripFrontmatter(text) {
  return text.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/, '');
}

// 按 --- 分割正文各部分，排除「解析」「评分标准」部分
function extractContent(body) {
  const sections = body.split(/^\s*---\s*$/m);
  return sections
    .map((s) => s.trim())
    .filter((s) => s.length > 0)
    .filter((s) => !/^解析/.test(s))
    .filter((s) => !/^评分标准/.test(s))
    .join('\n');
}

const input = process.argv[2];
const raw = input ? readFileSync(input, 'utf8') : readFileSync(0, 'utf8');
const content = extractContent(stripFrontmatter(raw));
const hash = createHash('sha256').update(content.replace(/\s+/g, '')).digest('hex');
console.log(hash);
