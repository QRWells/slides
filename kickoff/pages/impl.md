---
layout: section
---

# その他の取り込んだもの

---
level: 2
---

# SLIMコードの更新

- マクロばかりで読みづらい
- 動けないコードがある
- C with Classes

keywordの更新

```cpp
thread_local  std::vector<node*> stack; // better
__thread      std::vector<node*> stack; // older
pthread_key_t stack_key; // platform dependent
```

などなど

---
level: 2
---

# もう一つのグラフ書き換え言語の処理系

- ルール可読性向上（Syntax変えただけ）
- Rustでコンパイラ実装
- 中間命令列を生成

```
a = X, b = Y
with int(X) && int(Y);
when X > Y;
then
  a = X - 1, b = Y + 1;
```

---
level: 2
---

# Graphew - 汎用的な状態空間可視化ツール

- Rustで実装
- force-directed
- 研究の試験場

**ここに図**

---
level: 2
---

# 簡易モデル検査機

- Rustで実装
- 輪読の本の内容に基づく
- 研究の試験場

**ここに図**

---
level: 2
---

# LMNtalのvscodeの拡張機能

- TypeScriptで実装
- cytoscpe.jsを利用

**ここに図**