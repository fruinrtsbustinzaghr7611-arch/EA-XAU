# EA-XAU 可视化预览

你不用看代码，按下面做就能直接看到页面：

## 方式 1（最简单）

1. 双击打开 `preview.html`
2. 浏览器会直接显示官网视觉页面

## 方式 2（推荐，动画更稳定）

在项目目录执行：

```bash
python3 -m http.server 4173
```

然后打开：<http://localhost:4173/preview.html>

---

## 文件说明（非技术版）

- `preview.html`：一体化页面（样式+动画都在一个文件里）
- `index.html` / `styles.css` / `app.js`：开发拆分版（给开发者维护）
