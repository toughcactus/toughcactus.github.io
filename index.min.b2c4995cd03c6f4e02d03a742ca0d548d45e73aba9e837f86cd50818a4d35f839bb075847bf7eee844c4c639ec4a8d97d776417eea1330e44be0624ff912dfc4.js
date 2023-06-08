var suggestions=document.getElementById("suggestions"),search=document.getElementById("search");search!==null&&document.addEventListener("keydown",inputFocus);function inputFocus(e){e.ctrlKey&&e.key==="/"&&(e.preventDefault(),search.focus()),e.key==="Escape"&&(search.blur(),suggestions.classList.add("d-none"))}document.addEventListener("click",function(e){var t=suggestions.contains(e.target);t||suggestions.classList.add("d-none")}),document.addEventListener("keydown",suggestionFocus);function suggestionFocus(e){const s=suggestions.classList.contains("d-none");if(s)return;const t=[...suggestions.querySelectorAll("a")];if(t.length===0)return;const n=t.indexOf(document.activeElement);if(e.key==="ArrowUp"){e.preventDefault();const s=n>0?n-1:0;t[s].focus()}else if(e.key==="ArrowDown"){e.preventDefault();const s=n+1<t.length?n+1:n;t[s].focus()}}(function(){var e=new FlexSearch.Document({tokenize:"forward",cache:100,document:{id:"id",store:["href","title","description"],index:["title","description","content"]}});e.add({id:0,href:"/docs/%E5%88%86%E4%BA%AB/hugo/doks%E4%B8%BB%E9%A2%98/",title:"Doks主题",description:`Overview # 基于Netlify, Hugo, and Doks
demo github
依赖 说明 Git 并不知道为什么会依赖Git Node.js 前端插件 环境 Github Node.js Doks Hugo 安装依赖 # Git
git --version Node.js
官网下载 18.16.0 LTS
node --version npm --version npm config list # 查看配置 # 设置代理 npm config set proxy http://localhost:15236 npm config set https-proxy http://localhost:15236 # 如果代理不支持https npm config set registry \u0026quot;http://registry.npmjs.org\u0026quot; 初始化项目 # 下载到本地
和之前的hugo theme不同，不放到theme/，而是直接作为项目
官网提供两个项目，Child theme适合新手
git clone https://github.com/h-enk/doks.git doks 安装node modules
npm install 本地部署服务器`,content:`Overview # 基于Netlify, Hugo, and Doks
demo github
依赖 说明 Git 并不知道为什么会依赖Git Node.js 前端插件 环境 Github Node.js Doks Hugo 安装依赖 # Git
git --version Node.js
官网下载 18.16.0 LTS
node --version npm --version npm config list # 查看配置 # 设置代理 npm config set proxy http://localhost:15236 npm config set https-proxy http://localhost:15236 # 如果代理不支持https npm config set registry \u0026quot;http://registry.npmjs.org\u0026quot; 初始化项目 # 下载到本地
和之前的hugo theme不同，不放到theme/，而是直接作为项目
官网提供两个项目，Child theme适合新手
git clone https://github.com/h-enk/doks.git doks 安装node modules
npm install 本地部署服务器
npm run start /访问 http://localhost:1313/
项目结构 # 基础结构 说明 package.json和package-lock.json node modules信息；npm install命令根据这些信息安装需要的modules node_modules/ 下载的node modules archetypes/ 模板 static/ 可以把图片放在这 content/ 子文件对应一种语言 config/ 配置文件的查找可以是config.toml，也可以是config/_default/config.toml；支持更多配置 assets/ js和css代码； node_modules/ 说明 bootstrap bootstrap插件大本营；getbootstrap 5.3.0 highlight.js 可配置的语法高亮 highLight.js/ 说明 scss highLight.js提供的高亮主题；下载的高亮主题保存到这里 lib/languages 支持高亮的语言 config/_default/ 说明 menus/ 不同语言的主页配置 config.toml 类似简单的config.toml languages.toml 配置语言选项 markup.toml 此处可设置高亮？？；toc显示的层级 params.toml 简单config.toml的部分功能；此处可设置主题选项 darkMode ，采用doks还是hugo提供的高亮 highLight ；横向路径导航 breadCrumb ；全尺寸布局 fullWidth ；试验高亮目录 scrollSpy 设置语言 # 1-3 ./config/_default
添加menu
menus/menus.zh.toml
设置语言
// config.toml # Multilingual ## defaultContentLanguage = \u0026quot;en\u0026quot; ## disableLanguages = [\u0026quot;de\u0026quot;, \u0026quot;nl\u0026quot;] # defaultContentLanguageInSubdir = true defaultContentLanguage = \u0026quot;zh\u0026quot; disableLanguages = [\u0026quot;de\u0026quot;, \u0026quot;nl\u0026quot;, \u0026quot;en\u0026quot;] 设置语言项
// languages.toml [zh] languageName = \u0026quot;Chinese\u0026quot; contentDir = \u0026quot;content/zh\u0026quot; weight = 5 [zh.params] languageISO = \u0026quot;ZH\u0026quot; languageTag = \u0026quot;zh-CN\u0026quot; 设置翻译
新增 ./i18n/zh.yaml，同en.yaml
设置中文对应content
创建文件夹 content/zh
content/zh/blog
content/zh/docs
设置主页 # title
# ./config/_default/params.toml # title = \u0026quot;Doks\u0026quot; title = \u0026quot;ToughCactus\u0026quot; get-started 链接
\u0026lt;!-- ./layout/index.html :9 --\u0026gt; \u0026lt;a class=\u0026quot;btn btn-primary btn-lg px-4 mb-2\u0026quot; href=\u0026quot;/docs/{{ if .Site.Params.options.docsVersioning }}{{ .Site.Params.docsVersion }}/{{ end }}prologue/introduction/\u0026quot; role=\u0026quot;button\u0026quot;\u0026gt;{{ i18n \u0026quot;get-started\u0026quot; }}\u0026lt;/a\u0026gt; 文本
定义 my-sidebar-prefooter
\u0026lt;!-- ./layout/index.html :60 --\u0026gt; {{ define \u0026quot;my-sidebar-prefooter\u0026quot; }} {{ if eq $.Site.Language.LanguageName \u0026quot;Chinese\u0026quot; }} \u0026lt;section class=\u0026quot;section section-sm\u0026quot;\u0026gt; \u0026lt;div class=\u0026quot;container\u0026quot;\u0026gt; \u0026lt;div class=\u0026quot;row justify-content-center text-center\u0026quot;\u0026gt; \u0026lt;div class=\u0026quot;col-lg-5\u0026quot;\u0026gt; \u0026lt;h2 class=\u0026quot;h4\u0026quot;\u0026gt;虚幻引擎\u0026lt;/h2\u0026gt; \u0026lt;p\u0026gt;C++, 蓝图.\u0026lt;/p\u0026gt; \u0026lt;/div\u0026gt; \u0026lt;div class=\u0026quot;col-lg-5\u0026quot;\u0026gt; \u0026lt;h2 class=\u0026quot;h4\u0026quot;\u0026gt;开发工具 ⚡️\u0026lt;/h2\u0026gt; \u0026lt;p\u0026gt;Git, VSCode.\u0026lt;/p\u0026gt; \u0026lt;/div\u0026gt; \u0026lt;div class=\u0026quot;col-lg-5\u0026quot;\u0026gt; \u0026lt;h2 class=\u0026quot;h4\u0026quot;\u0026gt;开发语言\u0026lt;/h2\u0026gt; \u0026lt;p\u0026gt;Bash.\u0026lt;/p\u0026gt; \u0026lt;/div\u0026gt; \u0026lt;/div\u0026gt; \u0026lt;div class=\u0026quot;row justify-content-center text-center\u0026quot;\u0026gt; \u0026lt;div class=\u0026quot;col-lg-5\u0026quot;\u0026gt; \u0026lt;h2 class=\u0026quot;h4\u0026quot;\u0026gt;C++\u0026lt;/h2\u0026gt; \u0026lt;p\u0026gt;.\u0026lt;/p\u0026gt; \u0026lt;/div\u0026gt; \u0026lt;div class=\u0026quot;col-lg-5\u0026quot;\u0026gt; \u0026lt;h2 class=\u0026quot;h4\u0026quot;\u0026gt;Emacs\u0026lt;/h2\u0026gt; \u0026lt;p\u0026gt;.\u0026lt;/p\u0026gt; \u0026lt;/div\u0026gt; \u0026lt;div class=\u0026quot;col-lg-5\u0026quot;\u0026gt; \u0026lt;h2 class=\u0026quot;h4\u0026quot;\u0026gt;图形学\u0026lt;/h2\u0026gt; \u0026lt;p\u0026gt;.\u0026lt;/p\u0026gt; \u0026lt;/div\u0026gt; \u0026lt;/div\u0026gt; \u0026lt;div class=\u0026quot;row justify-content-center text-center\u0026quot;\u0026gt; \u0026lt;div class=\u0026quot;col-lg-5\u0026quot;\u0026gt; \u0026lt;h2 class=\u0026quot;h4\u0026quot;\u0026gt;Hugo\u0026lt;/h2\u0026gt; \u0026lt;p\u0026gt; \u0026lt;a href=\u0026quot;/docs/分享/hugo/doks主题/\u0026quot;\u0026gt;Doks主题\u0026lt;/a\u0026gt;. \u0026lt;/p\u0026gt; \u0026lt;/div\u0026gt; \u0026lt;div class=\u0026quot;col-lg-5\u0026quot;\u0026gt; \u0026lt;h2 class=\u0026quot;h4\u0026quot;\u0026gt;MacOS应用\u0026lt;/h2\u0026gt; \u0026lt;p\u0026gt;.\u0026lt;/p\u0026gt; \u0026lt;/div\u0026gt; \u0026lt;div class=\u0026quot;col-lg-5\u0026quot;\u0026gt; \u0026lt;h2 class=\u0026quot;h4\u0026quot;\u0026gt;Linux\u0026lt;/h2\u0026gt; \u0026lt;p\u0026gt;.\u0026lt;/p\u0026gt; \u0026lt;/div\u0026gt; \u0026lt;/div\u0026gt; \u0026lt;/div\u0026gt; \u0026lt;/section\u0026gt; {{ end }} {{ end }} 激活
\u0026lt;!-- ./layout/_default/baseof.html :22 --\u0026gt; {{ block \u0026quot;my-sidebar-prefooter\u0026quot; . }}{{ end }} 文本2
\u0026lt;!-- ./content/zh/_index.html --\u0026gt; --- title : \u0026quot;好记性不如烂键盘。\u0026quot; description: \u0026quot;none.\u0026quot; lead: \u0026quot;\u0026quot; date: \u0026quot;\u0026quot; lastmod: \u0026quot;\u0026quot; draft: false images: [] --- 自定义配置 # 1. 横向路径导航 # Breadcrumb Navigation
# ./config/_default/params.toml breadCrumb = true 2. 全尺寸布局 # # config/_default/params.toml fullWidth = true 3. 试验高亮目录 # # config/_default/params.toml scrollSpy = false # scrollSpy是node.js module 4. 使用highlight.js # hightlight.js 官网
开关
# ./config/_default/params.toml # highLight = false # 使用hugo默认代码高亮 highLight = true # 自行配置 下载高亮主题
Dracula
git clone https://github.com/dracula/highlightjs.git cp Dracula/highlightjs/dracula.css doks/node_modules/highlight.js/scss/ 设置高亮主题
// ./assets/scss/app.scss // @import \u0026quot;highlight.js/scss/github-dark-dimmed\u0026quot;; // 自带 @import \u0026quot;highlight.js/scss/dracula\u0026quot;; // 新下载 设置要高亮的编程语言
到node_modules/highlight.js/lib/languages/去查找支持的语言，以及其名称
// ./assets/js/highlight.js // C++举例 import cpp from 'highlight.js/lib/languages/cpp'; import lisp from 'highlight.js/lib/languages/lisp'; hljs.registerLanguage('cpp', cpp); // 无法使用+ hljs.registerLanguage('elisp', lisp); hljs.registerLanguage('lisp', lisp); 不支持elisp，可以设置lisp
5. 目录导航 # // ./config/_default/markup.toml [tableOfContents] endLevel = 3 ordered = false # startLevel = 2 startLevel = 1 6. 代码框背景色 # 若代码框的语言可识别，使用hljs配置
light主题，代码框背景色为浅色，换成深色
// ./assets/scss/components/_syntax.scss .hljs { display: block; overflow-x: auto; padding: 1.25rem 1.5rem; // background: $beige; // color: $body-color; background: $body-overlay-dark; color: $body-color-dark; } 代码框语言无法识别
不建议修改；文本块也使用这个样式
// ./assets/scss/components/_code.scss code { background: $beige; color: $black; padding: 0.25rem 0.5rem; } 7. 设置表格样式 # 参照 book 主题
// ./assets/scss/components/_tables.scss // table { // @extend .table; // // margin: 3rem 0; // } $padding-1: 1px !default; $padding-4: 0.25rem !default; $padding-8: 0.5rem !default; $padding-16: 1rem !default; table { @extend .table; margin: 3rem 0; overflow: auto; display: block; border-spacing: 0; border-collapse: collapse; margin-top: $padding-16; margin-bottom: $padding-16; tr th, tr td { padding: $padding-8 $padding-16; border: $padding-1 solid $gray-200; } tr:nth-child(2n) { background: $gray-100; } } 8. 渐变条 # // ./assets/scss/layout/_header.scss // 橘 浅蓝 深蓝 .header-bar { border-top: 4px solid; // border-image-source: linear-gradient(90deg, $primary, #8ed6fb 50%, #d32e9d); border-image-source: linear-gradient(90deg, #cc3c11, #8edefb 50%, #2e31d3); border-image-slice: 1; } 9. 主题色 # // ./assets/scss/common/_variables.scss // $primary: $purple; $primary: rgb(18, 63, 160); 实现目录高亮 # Doks主题支持目录收起展开，博文目录，全尺寸布局，横向路径导航，以及分开的Docs和Blogs。
而对于内容较多的博文，目录高亮可以让读者有一个全局的把握。
目录高亮参考
实现目录高亮我知道的有两个相关的点，一个是scrollspy，另一个则是intersection observer
scrollspy
node.js module，也是bootstrap的一个插件
Doks主题自带的试验性的目录高亮使用的scrollspy
# 安装 npm i scrollspy on npm on getbootstrap
intersection observer
js逻辑，我找的这个
1. js逻辑 # 我不知道怎么导入js代码，所以放在了 ./assets/js/hightlight.js的最后
// 样式设置 let options = { root: document.querySelector('#article'), rootMargin: '0px 0px -75%', threshold: 1.0 } // postTOC：叫什么名字不重要；作用是执行操作 // .my-toc 的 . 说明是class；# 说明是element // .my-toc 即是nac class，保存TableOfContents文本 const MyToc = document.querySelector('.my-toc'), headingObserver = new IntersectionObserver(headings =\u0026gt; { headings.forEach(heading =\u0026gt; { // 对heading遍历 const id = heading.target.getAttribute('id'); //获取heading id if (heading.isIntersecting) { inactive(); // 取消之前添加的class subItem = document.querySelector(\`.my-toc a[href=\u0026quot;#\${id}\u0026quot;]\`).classList.add('active'); // 为当前heading添加class } }); }, options); // 对指定级别heading进行遍历；未指定，该级别标题不会被高亮 document.querySelectorAll('.my-content h0[id],h1[id],h2[id],h3[id]').forEach((heading) =\u0026gt; { headingObserver.observe(heading); }); function inactive() { document.querySelectorAll('.my-toc a').forEach((a) =\u0026gt; { a.classList.remove('active'); }); } 2. 为当前TableOfContents设置nav class # ./layout/partials/sidebar/docs-toc.html
根据有无配置scrollSpy，对TableOfContents的设置不同
当scrollSpy为false时，最下方的{{ .TableOfContents }}对应右侧的目录
用 nav class将其围起来
\u0026lt;div class=\u0026quot;page-links d-none d-xl-block\u0026quot;\u0026gt; \u0026lt;h3\u0026gt;{{ i18n \u0026quot;on-this-page\u0026quot; }}\u0026lt;/h3\u0026gt; {{ if eq .Site.Params.options.scrollSpy true -}} {{ .TableOfContents | replaceRE \u0026quot;\u0026lt;nav id=\\\u0026quot;TableOfContents\\\u0026quot;\u0026gt;\u0026quot; \u0026quot;\u0026lt;nav id=\\\u0026quot;toc\\\u0026quot;\u0026gt;\u0026quot; | safeHTML }} {{ else -}} \u0026lt;nav class=\u0026quot;my-toc\u0026quot;\u0026gt; {{ .TableOfContents }} \u0026lt;/nav\u0026gt; {{ end -}} \u0026lt;/div\u0026gt; 3. 设置class包含active的标题的样式 # light
// ./assets/scss/common/_global.scss .my-toc a.active { color: $primary; font-weight: 800; transition: all .25s ease-in-out } dark
// ./assets/scss/common/_dark.scss [data-dark-mode] .my-toc a.active { color: $link-color-dark; } 遗留问题 # org-mode博文的目录跳转有偏移 md博文的目录跳转：一级标题导航到标题之下；其他级别标题正常 使用ox-hugo生成的md文件的图片路径识别不对 `}),e.add({id:1,href:"/docs/%E5%88%86%E4%BA%AB/hugo/",title:"Hugo",description:"",content:""}),e.add({id:2,href:"/docs/%E5%88%86%E4%BA%AB/",title:"分享",description:"",content:""}),e.add({id:3,href:"/docs/",title:"Docs",description:"",content:""}),search.addEventListener("input",t,!0);function t(){const s=5;var n=this.value,o=e.search(n,{limit:s,enrich:!0});const t=new Map;for(const e of o.flatMap(e=>e.result)){if(t.has(e.doc.href))continue;t.set(e.doc.href,e.doc)}if(suggestions.innerHTML="",suggestions.classList.remove("d-none"),t.size===0&&n){const e=document.createElement("div");e.innerHTML=`No results for "<strong>${n}</strong>"`,e.classList.add("suggestion__no-results"),suggestions.appendChild(e);return}for(const[r,a]of t){const n=document.createElement("div");suggestions.appendChild(n);const e=document.createElement("a");e.href=r,n.appendChild(e);const o=document.createElement("span");o.textContent=a.title,o.classList.add("suggestion__title"),e.appendChild(o);const i=document.createElement("span");if(i.textContent=a.description,i.classList.add("suggestion__description"),e.appendChild(i),suggestions.appendChild(n),suggestions.childElementCount==s)break}}})()