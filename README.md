# Nuxt 3 基础项目搭建

#### 配置：

[Tailwindcss](https://www.tailwindcss.cn/docs/guides/nuxtjs) + [Element Plus](https://element-plus.org/zh-CN/guide/quickstart.html#nuxt) + [Nitro](https://nitro.unjs.io/) + [db0 连接 SQLite](https://db0.unjs.io/connectors/sqlite)

## 基础指令

```bash

# 安装依赖
npm i

# 启动项目
npm run dev

# 启动后访问项目(默认3000端口)
http://localhost:3000

# 项目打包
npm run build

```

## 安装 Tailwindcss

```bash

# 添加依赖模块
npx nuxi module add @nuxtjs/tailwindcss

# 生成配置文件 tailwind.config.js
npx tailwindcss init

```

## Element Plus

```typescript
# 下载依赖
npm install -D @element-plus/nuxt

# 将下面的代码写入你的配置文件
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@element-plus/nuxt'],
})
```

## 连接 SQLite

```typescript

# 将下面的代码写入你的配置文件
// nuxt.config.ts
export default defineNuxtConfig({
  nitro: {
    experimental: {
      database: true,
    },
  },
});

# 下载依赖
npm i -D better-sqlite3

```
