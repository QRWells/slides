---
layout: section
title: グラフ描画の高速化
---

# 研究内容
## グラフ描画の高速化

---
level: 2
---

# 研究テーマ
研究の方向性

### 並列実行でグラフ描画・レイアウトの高速化

- グラフのレイアウトには時間がかかる
  - 例えば、力学モデルの実装では
    - グラフのノード数$V$に対して$O(V^3)$の時間がかかる
    - ただ隣の頂点のみが考慮されるようにグラフを分割することで$O(V\log V)$まで高速化できる

- ノードの位置は親ノードの位置だけに依存する(DAGと仮定)
  - 並列化が可能

---
level: 2
---

# 先行研究
文献調査

- DRGraph: An Efficient Graph Layout Algorithm for Large-scale Graphs by Dimensionality Reduction [1]
  - 疎距離行列、Negative sampling、Multi-level layout schemeで加速
  - 線形な計算量とメモリ使用量を実現
- PLANET: A radial layout algorithm for network visualization [2]
  - 放射状のレイアウトアルゴリズム
  - 同種類のアルゴリズムと比較してエッジの交差数が少なく、ノードの分布が均一
- Methods for Visual Understanding of Hierarchical System Structures [3]
  - 杉山フレームワークというアルゴリズムの提案
  - 理論手法とヒューリスティック手法で構成される
  - エッジの交差数と可読性が優れている
- A Deep Generative Model for Graph Layout [4]
  - 深層学習を用いたレイアウト手法

---
level: 3
hideInToc: true
---

# 先行研究
実装関連

- dagre
  - JavaScriptで実装されたグラフレイアウトライブラリ
  - 数多くの技術を組み合わせている [5](https://github.com/dagrejs/dagre/wiki#recommended-reading)
- cytoscape
- igraph
- GPUGraphLayout
- automatic-graph-layout

---
level: 2
---

# 現状の問題点
並列化が必要

- 現存ソフトウェアは並列化がなされていないのが多い
  - cytoscape.js
    - JavaScript Runtimeは限界がある
    - NativeのアプリはOpenCLを使える
  - LaViTのStateViewer
    - 並列化がなされていない
- GPU上で実装されているものは少ない

---
level: 2
---

# 研究の目的

- グラフ描画を高速化
  - CPUのみでマルチスレッド化
  - GPUを用いた並列化

---
level: 2
---

# これまでの研究・調査結果

- レイアウトアルゴリズムの実装の比較
- **まだやっていない**

---
level: 2
---

# 今後の計画

- 関連研究の調査
- 並列プログラミングの勉強
  - CUDAプログラミング
  - C++などの言語でのマルチスレッドプログラミング