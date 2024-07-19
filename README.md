# Nuxt 3 基础项目搭建

### 环境

Node.js - v18.x.x

### 配置：

[Pinia](https://pinia.vuejs.org/zh/ssr/nuxt.html) + [Tailwindcss](https://www.tailwindcss.cn/docs/guides/nuxtjs) + [Element Plus](https://element-plus.org/zh-CN/guide/quickstart.html#nuxt) + [Nitro](https://nitro.unjs.io/guide/database) + [db0 连接 SQLite 进行 增删改查](https://db0.unjs.io/connectors/sqlite)

### 部署：

Jenkins + Docker + Pm2

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

## 配置环境变量

1. 在项目根目录创建 **.env.dev** 以及 **.env.prod** 文件，分别代表开发和环境配置。

```bash

// .env.dev
NUXT_NODE_ENV = development
NUXT_BASE_URL = https://pcapi-xiaotuxian-front-devtest.itheima.net

// .env.prod
NUXT_NODE_ENV = production
NUXT_BASE_URL = https://pcapi-xiaotuxian-front.itheima.net

```

2. 修改 **package.json**

```javascript

  "scripts": {
    "build": "nuxt build --dotenv .env.prod",
    "dev": "nuxt dev --dotenv .env.dev",
  },

```

3. 在项目中使用：在代码中直接使用 **process.env.NUXT_BASE_URL** 来获取环境变量，在服务端控制台打印是正常的值，在客户端浏览器打印却是 **undefined** ，用来发请求也是失败的，说明这样直接使用只在服务端生效。通过查阅 [官方文档](https://nuxt.com/docs/api/nuxt-config#runtimeconfig-1)，我们可以在 **nuxt.config.ts** 修改 **runtimeConfig** 来让客户端和服务端都能到读取到对应的环境变量。

```typescript

// nuxt.config.js
# 运行时配置允许将动态配置和环境变量传递给 Nuxt 应用程序上下文
  runtimeConfig: {
    public: {
      baseURL: process.env.NUXT_BASE_URL,
    },
  },

# 项目中使用，以读取环境变量中的baseUrl来请求数据为例
export const api_getList = () => $fetch<IProduct>('/home/hot/mutli', { baseURL: useRuntimeConfig().public.baseURL });

```

## 安装 Pinia

```bash

# 添加依赖模块
npm install pinia @pinia/nuxt

// nuxt.config.js
export default defineNuxtConfig({
  // ... 其他配置
  modules: [
    // ...
    '@pinia/nuxt',
  ],
})

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

# 如果要使用Element Plus的字体图标，需要在组件中引入
import { Plus } from '@element-plus/icons-vue';

<el-button type="success" :icon="Plus">新增</el-button>
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

# 增删改查操作可看文档或者项目代码(/server/api)

```

## 部署
