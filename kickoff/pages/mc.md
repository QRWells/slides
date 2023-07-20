---
layout: section
title: GPUモデル検査
---

# 研究内容
## GPUモデル検査

---
level: 2
---

# 研究テーマ

- GPUモデル検査
  - モデル検査は大規模な状態空間を探索する
  - GPUを用いることで高速化を図る

もっと具体的なテーマを考える

---
level: 2
---

# 先行研究
文献調査

- Data-Parallel Hashing Techniques for GPU Architectures [5]
  - GPU並列ハッシュテーブル技術のまとめ
  - これからの研究の方向性を示している
- GPUモデル検査
  - GPUexplore [6,7,8]
    - GPUモデル検査器
    - On-the-fly状態空間探索 [6]
    - Explicit-state model checking [7]
    - 並行システムの検査 [8]
  - Many-core on-the-fly model checking of safety properties using GPUs [9]
    - 状態空間の探索をGPUで並列化
    - GPUに適したハッシュテーブルの実装

---
level: 3
hideInToc: true
---

# 先行研究
実装関連

- GPUexplore [10]
  - CUDA　C++で実装、GitHubで公開
  - Deadlockを検査できる
  - PORをサポートしている
- esbmc-gpu [11]
  - CUDA　C++で実装、GitHubで公開
  - SMTに基づいたsContext-bounded model checker
  - Deadlock, pointer safety, assertionなど検査できる
- ParaFROST [12]
  - GPU-accelerated parallel SAT solver


---
level: 2
---

# 現状の問題点

- まだ分からない

---
level: 2
---

# 研究の目的

- まだ明確には決まっていない

---
level: 2
---

# これまでの研究・調査結果

- GPUモデル検査器の比較

---
level: 2
---

# 今後の計画

- モデル検査の勉強
- 並列プログラミングの勉強
  - GPUexploreの実装を読む