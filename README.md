# EA-XAU 可视化预览（修复“打不开”）

你现在只需要这一条命令：

```bash
./start-preview.sh
```

看到 `请在浏览器打开` 后，复制打开这个地址：

- `http://127.0.0.1:4173/preview.html`

---

## 如果还是打不开（按顺序排查）

1. **确认在项目目录执行**（有 `preview.html` 这个文件）
2. 换这个地址：`http://localhost:4173/preview.html`
3. 端口占用时改端口：`./start-preview.sh 8080`
4. 不要在代码托管网页里看 diff，必须在浏览器地址栏打开上面的 URL

---

## 文件说明

- `preview.html`：给你直接看视觉效果（一体化文件）
- `start-preview.sh`：一键启动本地预览
- `index.html` / `styles.css` / `app.js`：开发拆分版
