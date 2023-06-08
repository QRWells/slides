---
# try also 'default' to start simple
theme: seriph
# random image from a curated Unsplash collection by Anthony
coverBackgroundUrl: https://source.unsplash.com/collection/iP4PayCz_VA/1920x1080
# apply any windi css classes to the current slide
class: 'text-left'
# https://sli.dev/custom/highlighters.html
highlighter: shiki
# show line numbers in code blocks
lineNumbers: false
# some information about the slides, markdown enabled
info: |
  ## Model Checking 2nd Edition
  ### Chapter 8: Binary Decision Diagrams and Symbolic Model Checking
# persist drawings in exports and build
drawings:
  persist: false
# use UnoCSS
css: unocss
hideInToc: true
layout: cover
fonts:
  # basically the text
  sans: 'Poppins'
  # use with `font-serif` css class from windicss
  serif: 'Lora'
  # for code blocks, inline code, etc.
  mono: 'JetBrains Mono'

download: true
---

# Model Checking 2nd Edition
## Chapter 8: Binary Decision Diagrams and Symbolic Model Checking

---
hideInToc: true
layout: intro
---

# Binary Decision Diagrams and Symbolic Model Checking
The model-checking problem and algorithms for CTL

Wang Qirui 1W202047
<br/>
<span>{{new Date().toLocaleDateString()}}</span>

---
hideInToc: true
---
# Table of Contents

<Toc maxDepth = "1" mode = "all"/>

---
src: ./pages/8-4.md
---

---
src: ./pages/8-5.md
---

---
src: ./pages/8-6.md
---

---
src: ./pages/problem.md
---