---
layout: section
---

# 現在までに取り組んだこと

---
hideInToc: true
level: 2
---

# 現在までに取り組んだこと

- グラフ書き換え言語の処理系
- SLIMの現代化
- 状態空間描画ソフトウェアの開発
- 簡易 Model Checkerの開発
- GPU Model Checking

---
level: 2
---

# SLIMの現代化

- 保守が困難
- 動けないコードがある
- C with Classes

```cpp
thread_local  std::vector<node*> stack; // better
__thread      std::vector<node*> stack; // older
pthread_key_t stack_key; // platform dependent
```

---
level: 2
---

# グラフ書き換え言語の処理系

- Rustで実装
- パーサジェネレータ`pest`を使用

---
level: 2
---

# 状態空間描画ソフトウェアの開発

- Rustで実装
- GUIフレームワーク`egui`を使用

---
level: 2
---

# 簡易 Model Checkerの開発

- Rustで実装
- 輪読の本を参考

---
level: 2
---

# GPU Model Checking