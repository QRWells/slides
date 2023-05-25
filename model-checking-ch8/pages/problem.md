---
layout: section
level: 1
---
# Problem

---
level: 2
---
# Problem 5.1
Disjointness of MSCCs

<p class="font-serif font-bold text-xl">

Let $C_1$ and $C_2$ be two MSCCs. Prove that they are disjoint. Conclude that the sum of states over all MSCCs of $M$ is bounded by the size of $S$.

</p>

<v-click>

<span class="font-serif font-italic font-bold">Proof.</span> Assume that $C_1 \cap C_2 \neq \emptyset$. Let $C_3 = C_1 \cup C_2$. Then any state that is reachable from $C_3$ is also reachable from either $C_1$ or $C_2$.

</v-click>
<v-click>

Therefore, $C_3$ is an MSCC that is strictly larger than both $C_1$ and $C_2$, which contradicts the assumption that $C_1$ and $C_2$ are maximal. Hence, $C_1\cap C_2=\emptyset$.

</v-click>
<v-click>

Since MSCCs are disjoint to each other, and the union of all MSCCs is $S$, the sum of states over all MSCCs of $M$ is bounded by the size of $S$. $\square$

</v-click>