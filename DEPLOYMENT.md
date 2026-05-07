# 部署指南

## 项目概述

这是一个高端男士西服定制网站，使用 Next.js 和 Tailwind CSS 构建。

## 部署步骤

### 1. 推送到 GitHub

首先，在 GitHub 上创建一个新仓库，然后将代码推送到该仓库：

```bash
# 添加远程仓库（替换为您的仓库URL）
git remote add origin https://github.com/your-username/luxury-suit-tailor.git

# 推送到主分支
git push -u origin main
```

### 2. 部署到 Vercel

Vercel 是部署 Next.js 项目的最佳选择，它提供了零配置部署。

#### 方法一：通过 Vercel Dashboard

1. 访问 [Vercel Dashboard](https://vercel.com/dashboard)
2. 点击 "Add New Project"
3. 选择 "Import Git Repository"
4. 选择您刚刚创建的 GitHub 仓库
5. 点击 "Deploy"

#### 方法二：使用 Vercel CLI

```bash
# 安装 Vercel CLI
npm install -g vercel

# 登录您的 Vercel 账户
vercel login

# 部署项目
vercel

# 对于生产环境部署
vercel --prod
```

### 3. 环境变量（可选）

如果您需要配置环境变量，可以在 Vercel Dashboard 的项目设置中添加：

- 前往您的项目
- 点击 "Settings" > "Environment Variables"
- 添加需要的环境变量

## 项目结构

```
luxury-suit-tailor/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx      # 导航栏组件
│   │   └── Footer.tsx      # 页脚组件
│   ├── pages/
│   │   ├── _app.tsx        # 应用入口
│   │   ├── _document.tsx   # 文档模板
│   │   ├── index.tsx       # 首页
│   │   ├── services.tsx    # 定制服务页面
│   │   ├── fabrics.tsx     # 精选面料页面
│   │   ├── process.tsx     # 定制流程页面
│   │   ├── about.tsx       # 关于我们页面
│   │   └── contact.tsx     # 联系我们页面
│   └── styles/
│       └── globals.css     # 全局样式
├── package.json
├── tsconfig.json
├── next.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 可用脚本

```bash
# 开发模式
npm run dev

# 构建生产版本
npm run build

# 启动生产服务器
npm run start

# 代码检查
npm run lint
```

## 技术栈

- **框架**: Next.js 14
- **样式**: Tailwind CSS 3
- **图标**: Lucide React
- **部署**: Vercel

## 注意事项

1. 确保您的 GitHub 仓库是公开的或已正确配置 Vercel 访问权限
2. 部署前确保项目能正常构建 (`npm run build`)
3. Vercel 会自动检测 Next.js 项目并使用正确的构建配置