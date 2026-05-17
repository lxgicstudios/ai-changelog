# ai-changelog

![npm](https://img.shields.io/npm/v/ai-changelog) ![Node.js](https://img.shields.io/badge/node-%3E%3D16.0.0-brightgreen) ![License](https://img.shields.io/badge/License-MIT-yellow.svg) ![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue)

AI-powered changelog generator from git history. Creates clean, categorized release notes.

Generates a clean, categorized changelog from your git history. You give it two refs (tags, branches, commits) and it reads the log between them, then uses OpenAI to turn that mess of commit messages into a proper CHANGELOG entry.

## Install

```bash
npm install -g ai-changelog
```

## Setup

You'll need an OpenAI API key:

```bash
export OPENAI_API_KEY=sk-your-key-here
```

## Usage

```bash
# Between two tags
npx ai-changelog --from v1.0.0 --to v2.0.0

# From a tag to HEAD
npx ai-changelog --from v1.0.0 --to HEAD

# Write directly to a file
npx ai-changelog --from v1.0.0 --to v2.0.0 -o CHANGELOG.md
```

It'll group your commits into Added, Changed, Fixed, Removed. No more hand-writing changelogs.

## What it does

1. Reads git log between the two refs you give it
2. Sends the commit list to OpenAI
3. Gets back a nicely formatted changelog entry
4. Prints it or writes it to a file

That's it. Nothing fancy, just saves you 20 minutes every release.

## Options

| Flag | Description |
|------|-------------|
| `--from <ref>` | Starting ref (tag, branch, or commit) |
| `--to <ref>` | Ending ref (default: HEAD) |
| `-o, --output <file>` | Write changelog to file |
| `--json` | Output as JSON |
| `--help` | Show help message |

## License

MIT

---

**Built by [LXGIC Studios](https://lxgicstudios.com)**

🔗 [GitHub](https://github.com/lxgicstudios) · [Twitter](https://x.com/lxgicstudios)

💡 Want more free tools like this? We have 100+ on our GitHub: [github.com/lxgicstudios](https://github.com/lxgicstudios)
