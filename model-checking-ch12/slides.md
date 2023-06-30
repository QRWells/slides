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
## Chapter 12: Partial Order Reduction

---
hideInToc: true
layout: intro
---

# Partial Order Reduction
Technique for reducing the number of states that need to be explored in a concurrent system.

Wang Qirui 1W202047
<br/>
<span>{{new Date().toLocaleDateString()}}</span>

---
hideInToc: true
---
# Table of Contents

<Toc maxDepth = "3" mode = "all"/>

---
src: ./pages/12-5.md
---

---
src: ./pages/12-6.md
---

---
src: ./pages/12-7.md
---