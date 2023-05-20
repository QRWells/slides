import{ay as lt,bE as ut}from"./index-1f833b49.js";var it=/\r\n?/g,ot=/\t/g,ct=/\f/g,J=function(t){return t.replace(it,`
`).replace(ct,"").replace(ot,"    ")},Q=function(t,n){var r=t||{};if(n!=null)for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(r[a]=n[a]);return r},V=function(t,n){var r=Object.keys(t).filter(function(i){var u=t[i];if(u==null||u.match==null)return!1;var c=u.order;return(typeof c!="number"||!isFinite(c))&&typeof console<"u"&&console.warn("simple-markdown: Invalid order for rule `"+i+"`: "+String(c)),!0});r.sort(function(i,u){var c=t[i],f=t[u],s=c.order,p=f.order;if(s!==p)return s-p;var h=c.quality?0:1,v=f.quality?0:1;return h!==v?h-v:i<u?-1:i>u?1:0});var a,l=function i(u,c){var f=[];for(c=c||a,a=c;u;){var s=null,p=null,h=null,v=NaN,S=0,x=r[0],y=t[x];do{var b=y.order,T=c.prevCapture==null?"":c.prevCapture[0],k=y.match(u,c,T);if(k){var A=y.quality?y.quality(k,c,T):0;A<=v||(s=x,p=y,h=k,v=A)}S++,x=r[S],y=t[x]}while(y&&(!h||y.order===b&&y.quality));if(p==null||h==null)throw new Error("Could not find a matching rule for the below content. The rule with highest `order` should always match content provided to it. Check the definition of `match` for '"+r[r.length-1]+`'. It seems to not match the following source:
`+u);if(h.index)throw new Error("`match` must return a capture starting at index 0 (the current parse index). Did you forget a ^ at the start of the RegExp?");var w=p.parse(h,i,c);if(Array.isArray(w))Array.prototype.push.apply(f,w);else{if(w==null||typeof w!="object")throw new Error("parse() function returned invalid parse result: '".concat(w,"'"));w.type==null&&(w.type=s),f.push(w)}c.prevCapture=h,u=u.substring(c.prevCapture[0].length)}return f},o=function(u,c){return a=Q(c,n),!a.inline&&!a.disableAutoBlockNewlines&&(u=u+`

`),a.prevCapture=null,l(J(u),a)};return o},_=function(t){var n=function(a,l,o){return l.inline?t.exec(a):null};return n.regex=t,n},E=function(t){var n=function(a,l){return l.inline?null:t.exec(a)};return n.regex=t,n},F=function(t){var n=function(a,l){return t.exec(a)};return n.regex=t,n},ft=typeof Symbol=="function"&&Symbol.for&&Symbol.for("react.element")||60103,g=function(t,n,r){var a={$$typeof:ft,type:t,key:n??void 0,ref:null,props:r,_owner:null};return a},d=function(t,n,r,a){r=r||{},a=typeof a<"u"?a:!0;var l="";for(var o in r){var i=r[o];Object.prototype.hasOwnProperty.call(r,o)&&i&&(l+=" "+I(o)+'="'+I(i)+'"')}var u="<"+t+l+">";return a?u+n+"</"+t+">":u},K={},L=function(t){if(t==null)return null;try{var n=new URL(t,"https://localhost").protocol;if(n.indexOf("javascript:")===0||n.indexOf("vbscript:")===0||n.indexOf("data:")===0)return null}catch{return null}return t},st=/[<>&"']/g,pt={"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;","'":"&#x27;","/":"&#x2F;","`":"&#96;"},I=function(t){return String(t).replace(st,function(n){return pt[n]})},ht=/\\([^0-9A-Za-z\s])/g,M=function(t){return t.replace(ht,"$1")},B=function(t,n,r){var a=r.inline||!1;r.inline=!0;var l=t(n,r);return r.inline=a,l},mt=function(t,n,r){var a=r.inline||!1;r.inline=!1;var l=t(n+`

`,r);return r.inline=a,l},O=function(t,n,r){return{content:B(n,t[1],r)}},j=function(){return{}},N="(?:[*+-]|\\d+\\.)",tt="( *)("+N+") +",G=new RegExp("^"+tt),vt=new RegExp(tt+"[^\\n]*(?:\\n(?!\\1"+N+` )[^\\n]*)*(
|$)`,"gm"),nt=/\n{2,}$/,gt=/^ (?= *`)|(` *) $/g,dt=nt,U=/ *\n+$/,yt=new RegExp("^( *)("+N+`) [\\s\\S]+?(?:
{2,}(?! )(?!\\1`+N+` )\\n*|\\s*
*$)`),xt=/(?:^|\n)( *)$/,C=function(){var e=/^ *\| *| *\| *$/g,t=/ *$/,n=/^ *-+: *$/,r=/^ *:-+: *$/,a=/^ *:-+ *$/,l=function(s){return n.test(s)?"right":r.test(s)?"center":a.test(s)?"left":null},o=function(s,p,h,v){v&&(s=s.replace(e,""));var S=s.trim().split("|");return S.map(l)},i=function(s,p,h,v){var S=h.inTable;h.inTable=!0;var x=p(s.trim(),h);h.inTable=S;var y=[[]];return x.forEach(function(b,T){b.type==="tableSeparator"?(!v||T!==0&&T!==x.length-1)&&y.push([]):(b.type==="text"&&(x[T+1]==null||x[T+1].type==="tableSeparator")&&(b.content=b.content.replace(t,"")),y[y.length-1].push(b))}),y},u=function(s,p,h,v){var S=s.trim().split(`
`);return S.map(function(x){return i(x,p,h,v)})},c=function(s){return function(p,h,v){v.inline=!0;var S=i(p[1],h,v,s),x=o(p[2],h,v,s),y=u(p[3],h,v,s);return v.inline=!1,{type:"table",header:S,align:x,cells:y}}};return{parseTable:c(!0),parseNpTable:c(!1),TABLE_REGEX:/^ *(\|.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/,NPTABLE_REGEX:/^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/}}(),P="(?:\\[[^\\]]*\\]|[^\\[\\]]|\\](?=[^\\[]*\\]))*",X=`\\s*<?((?:\\([^)]*\\)|[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['"]([\\s\\S]*?)['"])?\\s*`,_t=/mailto:/i,z=function(t,n,r){var a=(t[2]||t[1]).replace(/\s+/g," ").toLowerCase();if(n._defs&&n._defs[a]){var l=n._defs[a];r.target=l.target,r.title=l.title}return n._refs=n._refs||{},n._refs[a]=n._refs[a]||[],n._refs[a].push(r),r},m=0,R={Array:{react:function(t,n,r){for(var a=r.key,l=[],o=0,i=0;o<t.length;o++,i++){r.key=""+o;var u=t[o];if(u.type==="text")for(u={type:"text",content:u.content};o+1<t.length&&t[o+1].type==="text";o++)u.content+=t[o+1].content;l.push(n(u,r))}return r.key=a,l},html:function(t,n,r){for(var a="",l=0;l<t.length;l++){var o=t[l];if(o.type==="text")for(o={type:"text",content:o.content};l+1<t.length&&t[l+1].type==="text";l++)o.content+=t[l+1].content;a+=n(o,r)}return a}},heading:{order:m++,match:E(/^ *(#{1,6})([^\n]+?)#* *(?:\n *)+\n/),parse:function(e){function t(n,r,a){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(e,t,n){return{level:e[1].length,content:B(t,e[2].trim(),n)}}),react:function(t,n,r){return g("h"+t.level,r.key,{children:n(t.content,r)})},html:function(t,n,r){return d("h"+t.level,n(t.content,r))}},nptable:{order:m++,match:E(C.NPTABLE_REGEX),parse:C.parseNpTable,react:null,html:null},lheading:{order:m++,match:E(/^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/),parse:function(e){function t(n,r,a){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(e,t,n){return{type:"heading",level:e[2]==="="?1:2,content:B(t,e[1],n)}}),react:null,html:null},hr:{order:m++,match:E(/^( *[-*_]){3,} *(?:\n *)+\n/),parse:j,react:function(t,n,r){return g("hr",r.key,K)},html:function(t,n,r){return"<hr>"}},codeBlock:{order:m++,match:E(/^(?:    [^\n]+\n*)+(?:\n *)+\n/),parse:function(e){function t(n,r,a){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(e,t,n){var r=e[0].replace(/^    /gm,"").replace(/\n+$/,"");return{lang:void 0,content:r}}),react:function(t,n,r){var a=t.lang?"markdown-code-"+t.lang:void 0;return g("pre",r.key,{children:g("code",null,{className:a,children:t.content})})},html:function(t,n,r){var a=t.lang?"markdown-code-"+t.lang:void 0,l=d("code",I(t.content),{class:a});return d("pre",l)}},fence:{order:m++,match:E(/^ *(`{3,}|~{3,}) *(?:(\S+) *)?\n([\s\S]+?)\n?\1 *(?:\n *)+\n/),parse:function(e){function t(n,r,a){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(e,t,n){return{type:"codeBlock",lang:e[2]||void 0,content:e[3]}}),react:null,html:null},blockQuote:{order:m++,match:E(/^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/),parse:function(e){function t(n,r,a){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(e,t,n){var r=e[0].replace(/^ *> ?/gm,"");return{content:t(r,n)}}),react:function(t,n,r){return g("blockquote",r.key,{children:n(t.content,r)})},html:function(t,n,r){return d("blockquote",n(t.content,r))}},list:{order:m++,match:function(t,n){var r=n.prevCapture==null?"":n.prevCapture[0],a=xt.exec(r),l=n._list||!n.inline;return a&&l?(t=a[1]+t,yt.exec(t)):null},parse:function(e){function t(n,r,a){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(e,t,n){var r=e[2],a=r.length>1,l=a?+r:void 0,o=e[0].replace(dt,`
`).match(vt),i=!1,u=o.map(function(c,f){var s=G.exec(c),p=s?s[0].length:0,h=new RegExp("^ {1,"+p+"}","gm"),v=c.replace(h,"").replace(G,""),S=f===o.length-1,x=v.indexOf(`

`)!==-1,y=x||S&&i;i=y;var b=n.inline,T=n._list;n._list=!0;var k;y?(n.inline=!1,k=v.replace(U,`

`)):(n.inline=!0,k=v.replace(U,""));var A=t(k,n);return n.inline=b,n._list=T,A});return{ordered:a,start:l,items:u}}),react:function(t,n,r){var a=t.ordered?"ol":"ul";return g(a,r.key,{start:t.start,children:t.items.map(function(l,o){return g("li",""+o,{children:n(l,r)})})})},html:function(t,n,r){var a=t.items.map(function(i){return d("li",n(i,r))}).join(""),l=t.ordered?"ol":"ul",o={start:t.start};return d(l,a,o)}},def:{order:m++,match:E(/^ *\[([^\]]+)\]: *<?([^\s>]*)>?(?: +["(]([^\n]+)[")])? *\n(?: *\n)*/),parse:function(e){function t(n,r,a){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(e,t,n){var r=e[1].replace(/\s+/g," ").toLowerCase(),a=e[2],l=e[3];return n._refs&&n._refs[r]&&n._refs[r].forEach(function(o){o.target=a,o.title=l}),n._defs=n._defs||{},n._defs[r]={target:a,title:l},{def:r,target:a,title:l}}),react:function(){return null},html:function(){return""}},table:{order:m++,match:E(C.TABLE_REGEX),parse:C.parseTable,react:function(t,n,r){var a=function(u){return t.align[u]==null?{}:{textAlign:t.align[u]}},l=t.header.map(function(i,u){return g("th",""+u,{style:a(u),scope:"col",children:n(i,r)})}),o=t.cells.map(function(i,u){return g("tr",""+u,{children:i.map(function(c,f){return g("td",""+f,{style:a(f),children:n(c,r)})})})});return g("table",r.key,{children:[g("thead","thead",{children:g("tr",null,{children:l})}),g("tbody","tbody",{children:o})]})},html:function(t,n,r){var a=function(f){return t.align[f]==null?"":"text-align:"+t.align[f]+";"},l=t.header.map(function(c,f){return d("th",n(c,r),{style:a(f),scope:"col"})}).join(""),o=t.cells.map(function(c){var f=c.map(function(s,p){return d("td",n(s,r),{style:a(p)})}).join("");return d("tr",f)}).join(""),i=d("thead",d("tr",l)),u=d("tbody",o);return d("table",i+u)}},newline:{order:m++,match:E(/^(?:\n *)*\n/),parse:j,react:function(t,n,r){return`
`},html:function(t,n,r){return`
`}},paragraph:{order:m++,match:E(/^((?:[^\n]|\n(?! *\n))+)(?:\n *)+\n/),parse:O,react:function(t,n,r){return g("div",r.key,{className:"paragraph",children:n(t.content,r)})},html:function(t,n,r){var a={class:"paragraph"};return d("div",n(t.content,r),a)}},escape:{order:m++,match:_(/^\\([^0-9A-Za-z\s])/),parse:function(e){function t(n,r,a){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(e,t,n){return{type:"text",content:e[1]}}),react:null,html:null},tableSeparator:{order:m++,match:function(t,n){return n.inTable?/^ *\| */.exec(t):null},parse:function(){return{type:"tableSeparator"}},react:function(){return" | "},html:function(){return" &vert; "}},autolink:{order:m++,match:_(/^<([^: >]+:\/[^ >]+)>/),parse:function(e){function t(n,r,a){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(e,t,n){return{type:"link",content:[{type:"text",content:e[1]}],target:e[1]}}),react:null,html:null},mailto:{order:m++,match:_(/^<([^ >]+@[^ >]+)>/),parse:function(e){function t(n,r,a){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(e,t,n){var r=e[1],a=e[1];return _t.test(a)||(a="mailto:"+a),{type:"link",content:[{type:"text",content:r}],target:a}}),react:null,html:null},url:{order:m++,match:_(/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/),parse:function(e){function t(n,r,a){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(e,t,n){return{type:"link",content:[{type:"text",content:e[1]}],target:e[1],title:void 0}}),react:null,html:null},link:{order:m++,match:_(new RegExp("^\\[("+P+")\\]\\("+X+"\\)")),parse:function(e){function t(n,r,a){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(e,t,n){var r={content:t(e[1],n),target:M(e[2]),title:e[3]};return r}),react:function(t,n,r){return g("a",r.key,{href:L(t.target),title:t.title,children:n(t.content,r)})},html:function(t,n,r){var a={href:L(t.target),title:t.title};return d("a",n(t.content,r),a)}},image:{order:m++,match:_(new RegExp("^!\\[("+P+")\\]\\("+X+"\\)")),parse:function(e){function t(n,r,a){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(e,t,n){var r={alt:e[1],target:M(e[2]),title:e[3]};return r}),react:function(t,n,r){return g("img",r.key,{src:L(t.target),alt:t.alt,title:t.title})},html:function(t,n,r){var a={src:L(t.target),alt:t.alt,title:t.title};return d("img","",a,!1)}},reflink:{order:m++,match:_(new RegExp("^\\[("+P+")\\]\\s*\\[([^\\]]*)\\]")),parse:function(e){function t(n,r,a){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(e,t,n){return z(e,n,{type:"link",content:t(e[1],n)})}),react:null,html:null},refimage:{order:m++,match:_(new RegExp("^!\\[("+P+")\\]\\s*\\[([^\\]]*)\\]")),parse:function(e){function t(n,r,a){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(e,t,n){return z(e,n,{type:"image",alt:e[1]})}),react:null,html:null},em:{order:m,match:_(new RegExp("^\\b_((?:__|\\\\[\\s\\S]|[^\\\\_])+?)_\\b|^\\*(?=\\S)((?:\\*\\*|\\\\[\\s\\S]|\\s+(?:\\\\[\\s\\S]|[^\\s\\*\\\\]|\\*\\*)|[^\\s\\*\\\\])+?)\\*(?!\\*)")),quality:function(t){return t[0].length+.2},parse:function(e){function t(n,r,a){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(e,t,n){return{content:t(e[2]||e[1],n)}}),react:function(t,n,r){return g("em",r.key,{children:n(t.content,r)})},html:function(t,n,r){return d("em",n(t.content,r))}},strong:{order:m,match:_(/^\*\*((?:\\[\s\S]|[^\\])+?)\*\*(?!\*)/),quality:function(t){return t[0].length+.1},parse:O,react:function(t,n,r){return g("strong",r.key,{children:n(t.content,r)})},html:function(t,n,r){return d("strong",n(t.content,r))}},u:{order:m++,match:_(/^__((?:\\[\s\S]|[^\\])+?)__(?!_)/),quality:function(t){return t[0].length},parse:O,react:function(t,n,r){return g("u",r.key,{children:n(t.content,r)})},html:function(t,n,r){return d("u",n(t.content,r))}},del:{order:m++,match:_(/^~~(?=\S)((?:\\[\s\S]|~(?!~)|[^\s~\\]|\s(?!~~))+?)~~/),parse:O,react:function(t,n,r){return g("del",r.key,{children:n(t.content,r)})},html:function(t,n,r){return d("del",n(t.content,r))}},inlineCode:{order:m++,match:_(/^(`+)([\s\S]*?[^`])\1(?!`)/),parse:function(e){function t(n,r,a){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(e,t,n){return{content:e[2].replace(gt,"$1")}}),react:function(t,n,r){return g("code",r.key,{children:t.content})},html:function(t,n,r){return d("code",I(t.content))}},br:{order:m++,match:F(/^ {2,}\n/),parse:j,react:function(t,n,r){return g("br",r.key,K)},html:function(t,n,r){return"<br>"}},text:{order:m++,match:F(/^[\s\S]+?(?=[^0-9A-Za-z\s\u00c0-\uffff]|\n\n| {2,}\n|\w+:\S|$)/),parse:function(e){function t(n,r,a){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(e,t,n){return{content:e[0]}}),react:function(t,n,r){return t.content},html:function(t,n,r){return I(t.content)}}},St=function(t,n){!n&&typeof console<"u"&&console.warn("simple-markdown ruleOutput should take 'react' or 'html' as the second argument.");var r=function(l,o,i){return t[l.type][n](l,o,i)};return r},Et=function(t){var n=function r(a,l){if(l=l||{},Array.isArray(a)){for(var o=l.key,i=[],u=null,c=0;c<a.length;c++){l.key=""+c;var f=r(a[c],l);typeof f=="string"&&typeof u=="string"?(u=u+f,i[i.length-1]=u):(i.push(f),u=f)}return l.key=o,i}else return t(a,r,l)};return n},bt=function(t){var n=function r(a,l){return l=l||{},Array.isArray(a)?a.map(function(o){return r(o,l)}).join(""):t(a,r,l)};return n},D=function(t,n){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!n)throw new Error("simple-markdown: outputFor: `property` must be defined. if you just upgraded, you probably need to replace `outputFor` with `reactFor`");var a,l=t.Array||R.Array,o=l[n];if(!o)throw new Error("simple-markdown: outputFor: to join nodes of type `"+n+"` you must provide an `Array:` joiner rule with that type, Please see the docs for details on specifying an Array rule.");var i=o,u=function f(s,p){return p=p||a,a=p,Array.isArray(s)?i(s,f,p):t[s.type][n](s,f,p)},c=function(s,p){return a=Q(p,r),u(s,a)};return c},$=V(R),H=function(t,n){return n=n||{},n.inline=!1,$(t,n)},Tt=function(t,n){return n=n||{},n.inline=!0,$(t,n)},W=function(t,n){var r=nt.test(t);return n=n||{},n.inline=!r,$(t,n)},q=D(R,"react"),et=D(R,"html"),rt=function(t,n){return q(H(t,n),n)},wt=function(t,n){return et(H(t,n),n)},kt=function(t){var n={};for(var r in t)r!=="source"&&Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n.children=rt(t.source),g("div",null,n)},at={defaultRules:R,parserFor:V,outputFor:D,inlineRegex:_,blockRegex:E,anyScopeRegex:F,parseInline:B,parseBlock:mt,markdownToReact:rt,markdownToHtml:wt,ReactMarkdown:kt,defaultBlockParse:H,defaultInlineParse:Tt,defaultImplicitParse:W,defaultReactOutput:q,defaultHtmlOutput:et,preprocess:J,sanitizeText:I,sanitizeUrl:L,unescapeUrl:M,htmlTag:d,reactElement:g,defaultRawParse:$,ruleOutput:St,reactFor:Et,htmlFor:bt,defaultParse:function(){return typeof console<"u"&&console.warn("defaultParse is deprecated, please use `defaultImplicitParse`"),W.apply(null,arguments)},defaultOutput:function(){return typeof console<"u"&&console.warn("defaultOutput is deprecated, please use `defaultReactOutput`"),q.apply(null,arguments)}};function It(e){return e.replace(/\n{2,}/g,`
`).replace(/^\s+/gm,"")}function Lt(e){const t=It(e),n=at.defaultBlockParse,r=n(t);let a=[[]],l=0;function o(i,u){i.type==="text"?i.content.split(`
`).forEach((f,s)=>{s!==0&&(l++,a.push([])),f.split(" ").forEach(p=>{p&&a[l].push({content:p,type:u||"normal"})})}):(i.type==="strong"||i.type==="em")&&i.content.forEach(c=>{o(c,i.type)})}return r.forEach(i=>{i.type==="paragraph"&&i.content.forEach(u=>{o(u)})}),a}function Rt(e){const t=at.defaultBlockParse,n=t(e);function r(a){return a.type==="text"?a.content.replace(/\n/g,"<br/>"):a.type==="strong"?`<strong>${a.content.map(r).join("")}</strong>`:a.type==="em"?`<em>${a.content.map(r).join("")}</em>`:a.type==="paragraph"?`<p>${a.content.map(r).join("")}</p>`:""}return n.map(r).join("")}function At(e,t){t&&e.attr("style",t)}function Ot(e,t,n,r){const a=e.append("foreignObject"),l=a.append("xhtml:div"),o=t.label,i=t.isNode?"nodeLabel":"edgeLabel";l.html(`<span class="${i} ${r}" `+(t.labelStyle?'style="'+t.labelStyle+'"':"")+">"+o+"</span>"),At(l,t.labelStyle),l.style("display","table-cell"),l.style("white-space","nowrap"),l.style("max-width",n+"px"),l.attr("xmlns","http://www.w3.org/1999/xhtml");let u=l.node().getBoundingClientRect();return u.width===n&&(l.style("display","table"),l.style("white-space","break-spaces"),l.style("width",n+"px"),u=l.node().getBoundingClientRect()),a.style("width",u.width),a.style("height",u.height),a.node()}function Z(e,t,n){return e.append("tspan").attr("class","text-outer-tspan").attr("x",0).attr("y",t*n-.1+"em").attr("dy",n+"em")}function Ct(e,t,n,r=!1){const l=t.append("g");let o=l.insert("rect").attr("class","background");const i=l.append("text").attr("y","-10.1");let u=-1;if(n.forEach(c=>{u++;let f=Z(i,u,1.1),s=[...c].reverse(),p,h=[];for(;s.length;)p=s.pop(),h.push(p),Y(f,h),f.node().getComputedTextLength()>e&&(h.pop(),s.push(p),Y(f,h),h=[],u++,f=Z(i,u,1.1))}),r){const c=i.node().getBBox(),f=2;return o.attr("x",-f).attr("y",-f).attr("width",c.width+2*f).attr("height",c.height+2*f),l.node()}else return i.node()}function Y(e,t){e.text(""),t.forEach((n,r)=>{const a=e.append("tspan").attr("font-style",n.type==="em"?"italic":"normal").attr("class","text-inner-tspan").attr("font-weight",n.type==="strong"?"bold":"normal");r===0?a.text(n.content):a.text(" "+n.content)})}const Bt=(e,t="",{style:n="",isTitle:r=!1,classes:a="",useHtmlLabels:l=!0,isNode:o=!0,width:i,addSvgBackground:u=!1}={})=>{if(lt.info("createText",t,n,r,a,l,o,u),l){const c=Rt(t),f={isNode:o,label:ut(c).replace(/fa[blrs]?:fa-[\w-]+/g,p=>`<i class='${p.replace(":"," ")}'></i>`),labelStyle:n.replace("fill:","color:")};return Ot(e,f,i,a)}else{const c=Lt(t),f=['"',"'",".",",",":",";","!","?","(",")","[","]","{","}"];let s;return c.forEach(h=>{h.forEach(v=>{f.includes(v.content)&&s&&(s.content+=v.content,v.content=""),s=v})}),Ct(i,e,c,u)}};export{Bt as c};
