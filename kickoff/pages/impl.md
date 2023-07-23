---
layout: section
---

# その他の取り込んだもの

---
level: 2
---

# SLIMコードの更新 [24]
可読性と保守性の向上

### マクロばかりで読みづらい
- 型情報がない
- デバッグが困難
- 使わなければいけないケース
  - 条件コンパイル
  - Preprocessor meta-programming
### 動けないコードがある
- 川端さんのコードはもうコンパイルできない
### C with Class
- C++独自の機能を活かせていない
  - RAII
  - `constexpr/consteval`

---
level: 3
---

# SLIMコードの更新
例

###### keywordの更新
```cpp
thread_local  std::vector<node*> stack; // better
__thread      std::vector<node*> stack; // older
pthread_key_t stack_key; // platform dependent
```

###### マクロの削除
```cpp
#define MC_GET_PROPERTY(S, A) ((A) ? A->get_state(state_property_state(S)) : DEFAULT_PROP_AUTOMATA)

auto mc_get_property(State* s, Automata* a) {
  return a ? a->get_state(state_property_state(s)) : DEFAULT_PROP_AUTOMATA;
}
```

###### modern C++

```cpp
auto foo(char* s) {　return strlen(s);　}

// accept std::string/char* literal/char*
auto bar(std::string_view s) {　return s.size();　}
```

---
level: 2
---

# グラフ書き換え言語処理系
まだ突出した面白い機能が 思いつかなかったので、候補に加えていない

- LMNtalをベースにした
- Rustでコンパイラ実装 [25]
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

---
level: 2
---

# LMNtalのvscodeの拡張機能 [26]

- 山本さんのWebLaViTのコードを利用
- TypeScriptで実装
- cytoscpe.jsを利用

<img class="-mt-12 ml-60 h-3/4" src="/img/lmntal.png">