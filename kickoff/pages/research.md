---
layout: section
hideInToc: true
---

# 研究内容

---

# 研究テーマ
研究方向の候補

### 並列実行でグラフ描画・レイアウトの高速化

- グラフのレイアウトには時間がかかる
  - 例えば、力学モデルの実装では
    - グラフのノード数$V$に対して$O(V^3)$の時間がかかる
    - ただ隣の頂点のみが考慮されるようにグラフを分割することで$O(V\log V)$まで高速化できる
- ノードの位置は「親ノード」の位置だけに依存する
  - 並列化が可能

<br/>

### GPUによる高速状態空間探索

- モデル検査は大規模な状態空間を探索する必要がある
  - グラフ構造をGPUメモリに格納する方法を考える
  - GPUを用いることで高速化を図る

---

# 先行研究
文献調査 - グラフ描画

- DRGraph: An Efficient Graph Layout Algorithm for Large-scale Graphs by Dimensionality Reduction [1]
  - 疎距離行列、Negative sampling、Multi-level layout schemeで加速
  - 線形な計算量とメモリ使用量を実現
- PLANET: A radial layout algorithm for network visualization [2]
  - 放射状のレイアウトアルゴリズム
  - 同種類のアルゴリズム [3] と比較してエッジの交差数が少なく、ノードの分布が均一
- Multi-Level Graph Layout on the GPU [4]
  - 汎用的な多階層レイアウト手法を提案
  - GPU上で実装されている
- A Deep Generative Model for Graph Layout [5]
  - 深層学習を用いたレイアウト手法

---
level: 2
hideInToc: true
---

# 先行研究
文献調査 - GPUモデル検査

- Data-Parallel Hashing Techniques for GPU Architectures [6]
  - GPU並列ハッシュテーブル技術のまとめ
  - これからの研究の方向性を示している
- Efficient Parallel Graph Exploration on Multi-Core CPU and GPU [7]
  - マルチコアで実行するBFSの実装手法
  - 動的に実行策略を変更することで直径の大きいグラフでの性能低下を抑える
- A GPU Tree Database for Many-Core Explicit State Space Exploration [8]
  - Cleary-Cuckooというハッシュ関数を考案
  - 状態をGPUメモリに二分木として格納する木データベースの実装方法を提案
- GPUexplore: Many-core on-the-fly model checking of safety properties using GPUs [9]
  - 状態空間の探索をGPUで並列化
  - GPUに適したハッシュテーブルの実装

---
level: 2
hideInToc: true
---

# 先行研究
関連実装 - グラフ描画

- dagre [10]
  - JavaScriptで実装されたグラフレイアウトライブラリ
  - 数多くの技術を組み合わせている[*](https://github.com/dagrejs/dagre/wiki#recommended-reading)
- cytoscape [11]
  - 分子間相互作用ネットワークを可視化するためのライブラリ
- igraph [12]
  - ネットワーク分析とグラフ理論のためのライブラリ
- GPUGraphLayout [13]
  - ForceAtlas2 [14] をGPUで実装したもの
  - CPU版と比較して平均で40倍高速

---
level: 2
hideInToc: true
layout: two-cols
---

# 先行研究
関連実装 - GPUモデル検査

- GPUexplore [9,15,16]
  - On-the-fly状態空間探索 [9]
  - Explicit-state model checking [15]
  - 並行システムの検査 [16]
  - GPUモデル検査器, GitHubで公開 [17]
- esbmc-gpu [18]
  - CUDA　C++で実装、GitHubで公開
  - SMTに基づいたsContext-bounded model checker
  - Deadlock, pointer safety, assertionなどの検査
- ParaFROST [19]
  - GPU-accelerated parallel SAT solver

::right::

<div class="h-24"/>

### Thrust

- CUDA C++で実装された高性能なライブラリ
- `std::` と同じインターフェースを持つ

###### 例: ランダムな整数列のソート

```cpp
thrust::default_random_engine rng(1337);
thrust::uniform_int_distribution<int> dist;
thrust::host_vector<int> h_vec(32 << 20);
thrust::generate(h_vec.begin(), h_vec.end(), [&] { 
    return dist(rng); 
});
// Transfer data to the device.
thrust::device_vector<int> d_vec = h_vec;
// Sort data on the device.
thrust::sort(d_vec.begin(), d_vec.end());
// Transfer data back to host.
thrust::copy(d_vec.begin(), d_vec.end(), h_vec.begin());
```

---

# 現状の問題点

### グラフ描画・レイアウト

- 現存ソフトウェアには並列化がなされていないのが多い
  - cytoscape.js
    - JavaScript Runtimeは限界がある
    - NativeのアプリはOpenCLを使えるが
  - LaViTのStateViewer
    - 並列化がなされていない

### GPUモデル検査

- 高性能データ構造が必要
  - ハッシュテーブル
  - B+木のような木構造

---

# 研究の目的

### グラフ描画・レイアウト

- 高速グラフ描画・レイアウトアルゴリズムの実装
  - CPUでのマルチスレッド　または
  - GPUを用いた並列化

### GPUモデル検査

- GPUモデル検査に適した高性能データ構造の実装
  - 検索性能の高い
  - キャッシュ効率の高い

---
layout: section
---

# これまでの研究・調査結果

---
layout: two-cols
level: 2
hideInToc: true
---

# PLANETアルゴリズム[2]
実装と性能測定

1. 各層ごとにノードを配置
   - 角度の割り当ては均等に
2. 親ノード、祖父ノードの角度によってノードの位置を決定

<br/>

### 特徴

- $O(N)$ 時間でレイアウト可能
- 依存関係が簡単のため並列化が容易

::right::

<img class="ml-8 dark:invert-93 h-5/6" src="/img/planet_alg.png"/>

---
layout: two-cols
level: 2
hideInToc: true
---

# PLANETの実装 [20]
実行時の情報構造体

```cpp
using VertexId = size_t;
struct VertexInfo {
  VertexId id;
  size_t index;
  size_t siblings;
  size_t parent_product;
  double parent_x;
  double parent_y;
  double parent_theta;
  double grandparent_theta;
};
```

::right::

<div class="ml-8 mt-18">

- `id`: ノードのID
- `index`: 兄弟ノードの中でのインデックス
- `siblings`: 兄弟ノードの数
- `parent_product`: ルートまで親ノードの兄弟ノードの数の積
- `parent_x`, `parent_y`: 親ノードの位置
- `parent_theta`: 親ノードの角度
- `grandparent_theta`: 祖父ノードの角度

</div>

---
level: 2
hideInToc: true
layout: two-cols
---

# PLANETの実装
角度の割り当て

```cpp
constexpr auto Theta(VertexInfo const &info, int d) -> double {
  if (d == 1)
    return 2.0F * Pi * (double)info.index / 
            (double)info.siblings;
  auto const factor = 2.0 * (double)info.index * Pi / 
        (double)((info.siblings - 1) * info.parent_product);
  if (info.siblings == 1) 
    return info.parent_theta;
  if (d == 2) 
    return info.parent_theta - 
            (Pi / (double)info.parent_product) + factor;
  if (info.parent_theta < info.grandparent_theta) 
    return info.parent_theta + factor;

  if (info.parent_theta > info.grandparent_theta) 
    return info.parent_theta - factor;

  return info.parent_theta - 
        (Pi / (double)info.parent_product) + factor;
}
```

::right::

<div class="ml-2 mt-30">

$$
\begin{aligned}
&\theta_{1} = \frac{2(i-1)\pi}{n_1}, n_1 \neq 0,\\

&\theta_{2} = \begin{cases}
    \theta_{1}& \text{if } n_2 = 1,\\
    \theta_{1} - \frac{\pi}{f_0} + \frac{2(i-1)\pi}{(n_2-1)f_0}& \text{ohterwise },\\
\end{cases} \\

&\theta_{d} = \begin{cases}
    \theta_{d-1}& \text{if } n_d = 1,\\
    \theta_{d-1} + \frac{2(i-1)\pi}{(n_d-1)\prod_{k=0}^{d-2}f_k}& \text{if } \theta_{d-1} < \theta_{d-2},\\
    \theta_{d-1} - \frac{2(i-1)\pi}{(n_d-1)\prod_{k=0}^{d-2}f_k}& \text{if } \theta_{d-1} > \theta_{d-2},\\
    \theta_{d-1} - \frac{\pi}{\prod_{k=0}^{d-2}f_k} + \frac{2(i-1)\pi}{(n_d-1)\prod_{k=0}^{d-2}f_k}& \text{otherwise },\\
\end{cases}
\end{aligned}
$$

</div>

---
level: 2
hideInToc: true
---

# PLANETの性能測定

<div class="flex flex-row">

<img class="w-1/2" src="/img/planet.png"/>

<div>

<Graph3D class=""/>

<div class="text-sm">

PLANETアルゴリズムで完全N分木のレイアウト時間 (Single-thread)

</div>
</div>
</div>

---
level: 2
hideInToc: true
---

# CUDAプログラミング
プログラミング練習[21]

###### CNNでよく使われる畳み込み

<div class="mt-4 flex flex-row justify-center space-x-8 items-center">

<img class="w-1/3" src="/img/campus.png"/>

→

<div class="text-center flex flex-col items-center">

<div class="flex flex-row">
    <div style="width: 24px; height: 24px; border: 1px solid black;">-1</div>
    <div style="width: 24px; height: 24px; border: 1px solid black;">-1</div>
    <div style="width: 24px; height: 24px; border: 1px solid black;">-1</div>
</div>
<div class="flex flex-row">
    <div style="width: 24px; height: 24px; border: 1px solid black;">-1</div>
    <div style="width: 24px; height: 24px; border: 1px solid black;">8</div>
    <div style="width: 24px; height: 24px; border: 1px solid black;">-1</div>
</div>
<div class="flex flex-row">
    <div style="width: 24px; height: 24px; border: 1px solid black;">-1</div>
    <div style="width: 24px; height: 24px; border: 1px solid black;">-1</div>
    <div style="width: 24px; height: 24px; border: 1px solid black;">-1</div>
</div>

Outline kernel

</div>

→

<img class="w-1/3" src="/img/campus_outline.png"/>

</div>

---
level: 2
---

# 状態空間可視化ツール [22]

- `egui`と`fdg`ライブラリを利用
- force-directed graph drawing
- 研究の試験場になる

<img class="-mt-24 ml-80 h-4/5" src="/img/graphew.png"/>

---
level: 2
---

# 簡易モデル検査器 [23]

- 輪読の本の内容に基づく
- まだLTLとCTL式のパージングしか実装していない

---

# 今後の計画

- 並列プログラミングの勉強
  - C++などの言語でのマルチスレッドプログラミング
  - CUDAプログラミング
- レイアウトアルゴリズムを並列に実装
  - 並列化の効果を評価
- モデル検査器の実装
- 既存モデル検査器のソースコードの読む