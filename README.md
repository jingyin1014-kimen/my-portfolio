# 浦婧崟个人作品集网站

这是一个可本地运行、可继续编辑的单页作品集网站，包含进入动效、ME、5 个 WORK 项目、SKILL 作品窗口和 CONTACT。

## 本地运行

在本文件所在目录打开终端：

```bash
pnpm install
pnpm dev
```

终端会显示本地预览地址，通常为 `http://localhost:5173`。

## 最常编辑的文件

- `app/page.tsx`：页面结构与大部分展示文案。
- `app/portfolio-data.ts`：简历、精选项目、图库、视频与 SKILL 素材清单。
- `app/globals.css`：颜色、字体、排版、动效与手机适配。
- `public/assets/`：网站实际使用的图片、视频和 PDF。

## 替换或新增素材

1. 把素材放入 `public/assets/` 下对应目录。
2. 在 `app/portfolio-data.ts` 中修改相应路径或作品清单。
3. 页面会在开发模式下自动刷新。

## PDF 作品集

CONTACT 末页提供“下载 PDF 版作品集”按钮，访客可直接下载 `public/assets/浦婧崟作品集.pdf`。
