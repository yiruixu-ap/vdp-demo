# vdp-demo

Toyota Rush 车辆详情页 demo（Next.js 15 + App Router + Tailwind CSS v4）。

## 本地开发

```bash
npm install
npm run dev
```

打开 http://localhost:3000/mobil/toyota/rush 。

## 线上部署（推荐 GitHub Pages）

已配置好 GitHub Actions，每次 push 到 `main` 会自动构建并部署到 GitHub Pages。

### 第一次发布

1. 在 GitHub 新建一个空仓库（例如 `vdp-demo`）。
2. 把本地代码推上去：

```bash
git remote add origin https://github.com/<你的用户名>/vdp-demo.git
git branch -M main
git push -u origin main
```

3. 进入仓库 **Settings → Pages → Build and deployment**，选择 **GitHub Actions**。
4. 等 Actions 跑完后，访问：

```
https://<你的用户名>.github.io/vdp-demo/mobil/toyota/rush
```

### 后续修改

```bash
git add .
git commit -m "更新内容"
git push origin main
```

push 后 GitHub Actions 会自动重新部署，线上链接不变。

## 备选：部署到 Vercel

如果希望使用根域名（不需要 `/vdp-demo` 子路径），可以直接导入 GitHub 仓库到 [Vercel](https://vercel.com)。项目已配置 `output: 'export'`，Vercel 会自动识别为静态站点。
