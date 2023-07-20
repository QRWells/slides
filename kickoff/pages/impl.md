---
layout: section
---

# その他の取り込んだもの

---
level: 2
---

# SLIMコードの更新
可読性と保守性の向上

- マクロばかりで読みづらい
  - 型情報がない
- 動けないコードがある
  - 川端さんのコードはもうコンパイルできない
- C with Class
  - C++独自の機能を活かせていない

- keywordの更新

```cpp
thread_local  std::vector<node*> stack; // better
__thread      std::vector<node*> stack; // older
pthread_key_t stack_key; // platform dependent
```

to be continued...

---
level: 2
---

# グラフ書き換え言語の処理系

- LMNtalをベースにした
- Rustでコンパイラ実装
- ルール可読性向上（Syntax変えただけ）
  ```
  a = X, b = Y
  with int(X) && int(Y);
  when X > Y;
  then
    a = X - 1, b = Y + 1;
  ```
- slim用中間命令列を生成
  - Backendを追加することで他の言語にも生成できる


## 突出した面白い機能はまだない

---
level: 2
---

# Graphew - 汎用的な状態空間可視化ツール

- Rustで実装
- `egui`と`fdg`ライブラリを利用
- force-directed
- 研究の試験場になる

**ここに図**

---
level: 2
---

# 簡易モデル検査器

- Rustで実装
- 輪読の本の内容に基づく
- 研究の試験場になる
- まだLTLとCTL式のパージングしか実装していない

**ここに図**

---
level: 2
---

# LMNtalのvscodeの拡張機能

- 山本さんのWebLaViTのコードを利用
- TypeScriptで実装
- cytoscpe.jsを利用

**ここに図**