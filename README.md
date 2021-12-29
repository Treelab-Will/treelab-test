# Treelab Next.js app template

## System Requirements

- Node.js 12.22.0 or later
- MacOS, Windows (including WSL), and Linux are supported

## Usage

### General App

```
yarn create next-app [project-name] -e "https://github.com/treelab/treelab-app-next-template"
```

### Block App

```
yarn create next-app [project-name] -e "https://github.com/treelab/treelab-app-next-template/tree/app"
```

## Enviroment variables

### Local development

https://nextjs.org/docs/basic-features/environment-variables

### Ops environment

运维环境使用的是运行时环境变量，不会生成 .env 文件，所以我们需要遵循 next.js 项目的相关规则使用环境变量：https://nextjs.org/docs/api-reference/next.config.js/runtime-configuration
