# Changelog

格式参考 [Keep a Changelog](https://keepachangelog.com/)。日期 YYYY-MM-DD。

## [Unreleased]

### Added (Track 04 占位改成 Coming soon，自嘲式填满)
- Rhapsody 那条 placeholder 改名 `Coming soon`（subtitle `TBA · Studio · 2026`、glyph `?`、duration `05:00`），保留原 pink-purple-cream 配色 + light theme（4 张唱片的视觉身份需要保持彼此对比）。
- 写满了完整的 4 段 lyrics + posts + voices——但不是真案例，是**自嘲式 placeholder**：每首歌承认这是空槽位、解释为什么留个空 vs 假装完整、调侃 portfolio 永远 90% 完成不了。
  - Lyric 1 *Still mixing in the studio.* — "what's the next track about? honest answer: 未定。"
  - Lyric 2 *The art is real. The story isn't (yet).* — 解释为什么有渐变没项目（视觉责任 ≠ 叙事责任）。
  - Lyric 3 *Portfolio sites are 90% finished forever.* — 三个真项目 + 一个 placeholder = 真实比例，胜过假装完整。
  - Lyric 4 *Probably weird. Definitely on its way.* — 统计学上 designer 总是用三个月前的执念填占位槽。
- 4 段 voices 也是俏皮假评论："Came for the case study, stayed for the suspense." / "I'd rate this 5 stars but I'd be judging the gradient." / "I rated this 5 stars without reading. The vibes were enough." 等。
- 这样切到 Track 04 时面板不会是空的，而是一个有 tone 的 placeholder——比 "Drop a new project here" 那种纯技术提示符合作品集本身的 voice。

### Changed (Disc cover 不再透色 + Carbcycle icon 放大)
- 之前 disc 的 background 是 `url(cover), gradient` 双层 stack——cover PNG 透明的地方会漏出 accent 渐变。换 app icon 后这个漏色比 full-bleed 截图明显得多（icon PNG 的四角 + dark-circle 外圈都是透明的）。
- `buildDiscStack` 改成：有 cover 时只用 `url(cover) ${size} no-repeat var(--bg-deep)`——单层图 + 主题底色 fallback（`#0c0b0a` dark / `#f4f5fb` light），透明区跟页面底色平齐而不是冒色。
- 新增 per-work 的 `coverSize` 字段（可选）：默认 `"cover"`，但 icon 类 PNG 因为内置 padding 在 disc 上看起来偏小。Carbcycle 加 `coverSize: "120%"`，把南瓜 icon 放大 20%——它的暗棕圆把 disc 填满，剩余透明区直接被 disc 的 `border-radius: 50%` 裁掉。
- PhaseMind 仍是 `"cover"` 默认值（图标本身已经填得满 disc）；Ecodemand 也是 `"cover"`（dashboard-1.png 是 full-bleed 截图无透明）。

### Changed (Carbcycle disc 封面换成 app icon)
- `cover: "Carbcycle/carb1.jpg"`（产品截图，矩形纵向）→ `cover: "Carbcycle/appimage.png"`（万圣节火焰南瓜 app 图标，圆形构图）。
- 截图当圆形 disc 封面会被裁掉两侧，app icon 是为圆形而设计的，紫色 PhaseMind disc 用 `AppImage.png` 已经验证视觉好得多——Carbcycle 跟上同一规则。
- `carb1.jpg` 仍然在 lyric 1 的 `posts` 里以 image post 形式露出（"Today screen — three macro rings"），没浪费。

### Changed (所有 image post 升级为双图并排)
- 配合上一条能力（`src` 支持数组），所有 3 个真项目里的 image post 都从单图改成双图，每对图在 narrative 上有讲故事关系（不是堆图）。caption 也跟着重写说明两张图为什么放在一起。
- **Carbcycle**（3 个 image post，用 carb1-6 共 6 张图全填进去，carb7 Settings 暂不用）：
  - Lyric 1 *The hook*：`carb1`（Today macro rings）+ `carb4`（Meals 页 H/M/L 切换栏）—— 把"day mode 是第一决策"在两处呈现。
  - Lyric 2 *One tap, three numbers*：`carb2`（Auto Meal Plan 动效）+ `carb5`（Profile 里的 Cycling Config 显示 ×1.1 / ×0.9 系数）——动画的"前台" + 驱动它的"后台数学"。
  - Lyric 3 *Seven days, generated*：`carb3`（Preview Plan）+ `carb6`（Foods 库）——commit 前的预览 + 它从哪里抽食物。
- **Ecodemand**（3 个 image post，用 dashboard-1/2/3/4/5/6 全 6 张）：
  - Lyric 1 *Numbers should whisper*：`dashboard-1` + `dashboard-2`——两套 metric overview，都按 delta 而不是绝对值组织。
  - Lyric 2 *Scan the sales line first*：`dashboard-3`（revenue silhouette）+ `dashboard-6`（inbox thread detail）——同一条 UX 规则两处表达："默认看形状，需要才看细节"。
  - Lyric 3 *One navigation grammar*：`dashboard-4`（Products）+ `dashboard-5`（Inbox）——不同内容、同一套行模式。
- **PhaseMind**（4 个 image post，只有 4 张 phase-1..4，必须复用）：
  - Lyric 1 *Two charts, same body*：`phase-1`（Today readout）+ `phase-3`（Records editor）——同一个 4 维 ADHD 模型，两个 surface。
  - Lyric 2 *Color the background*：`phase-2` + `phase-4`——Trends 图把周期当背景；Profile insights 把周期当对比基线。同一个时间锚点的两种用法。
  - Lyric 3 *Estrogen rising*：`phase-3` + `phase-1`（复用）——Records 是 phase 教育的主战场，但 Today 屏复刻同一个 phase 标签，保证术语全 app 一致。
  - Lyric 4 *Streaks without shame*：`phase-4` + `phase-2`（复用）——Profile 把 streak 收成静态徽章，Trends 把长期模式可视化，两者一起完成"在场不催"。
- 每个 lyric 2 张图复用一张本来其实有点尴尬，但 narrative 站得住——同一张图在不同的对比组合里讲不同的故事。要彻底干净配对，PhaseMind 需要再补几张截图（例如 Calendar 视图、AdHD pattern 详情卡等）。
- 痛点：很多 case study 一句话需要配 2 张截图（before/after、list/detail 等）。原本一个 image post 只能放一张，要么挤进 caption 要么拆成两个相邻 post（拆完阅读节奏断了）。
- 数据模型扩展：`post.src` 现在可以是字符串（单图，现行行为不变）或字符串数组（多图并排）。
  ```js
  // 单图（现行）
  { type: "image", src: "Carbcycle/carb1.jpg", caption: "..." }
  // 双图并排（新）
  { type: "image", src: ["Carbcycle/carb1.jpg", "Carbcycle/carb4.jpg"], caption: "..." }
  // 三图并排
  { type: "image", src: [..., ..., ...], caption: "..." }
  ```
- 渲染逻辑：`renderPosts()` 和 `openPostModal()` 都用 `Array.isArray()` 判定，多图时套一个 `.post-image-row` grid 容器（`grid-template-columns: 1fr 1fr`，3 图时 `repeat(3, 1fr)`），单图保持原直接 `<img>` 标签。
- 视觉：内嵌卡片走 `.post-image img` 的 `max-height: 360px + object-fit: cover` 规则（继承下来），保持卡片高度齐整；modal 走 `.post-modal-body img` 的 `width: 100%; height: auto` 规则，**多图也是各自完整宽高比**，并排显示，超出由 modal 滚动接住。共用 caption 一条，挂在底部（仍由 `.post-image-frame` 的 `position: relative` 锚定）。

### Fixed (Post modal 里手机截图只显示一半)
- 点 Liner Notes 里 image post 打开 modal 后，1008×2114 的手机截图只能看到下半段——`.post-modal-body img` 当时是 `max-height: 55vh` + `object-fit: cover`，强行把竖屏图塞进矮一截的横向矩形，中间被裁掉。
- 改成 `width: 100%; height: auto`，去掉 `max-height` 和 `object-fit`。图按自然宽高比铺满 modal 宽度，超出的部分由 `.post-modal-body` 的 `overflow-y: auto` 接住——和 Instagram / Twitter 看手机截图的体验一致：点开 = 看全图，画面太高就滚动。

### Fixed (键盘关 intro 后胶片不转)
- `dismissIntro({ play = false })` 默认不播放——CTA 点击会传 `play: true` 自动起播，但**键盘关 intro** 的路径（`window.keydown` listener）调的是 `dismissIntro()` 不带参数，于是 intro 走了、`is-playing` 没开、胶片就一直静止。
- 修复：默认值翻成 `play = true`，键盘 listener 也显式传 `play: true`。任何关 intro 的方式（CTA / 键盘 / 后续可能加的更多触发器）都会让胶片直接转起来。要暂停的话用播放按钮——而不是用"intro 关闭方式"这种隐藏分支控制。

### Fixed (唱针被唱片盖住)
- `.tonearm` 是 `z-index: 3`、`.disc[data-state="active"]` 是 `z-index: 5`，且两者是 `.turntable` 的兄弟，所以 active disc 永远盖住针。tonearm 提到 `z-index: 6`，针现在压在唱片上方读起来才对。

### Fixed (唱针的 arm 和 head 之间有 ~58px 缝)
- `.tonearm-arm` 和 `.tonearm-head` 在 HTML 里是**兄弟节点**，分别定到 `.tonearm` 容器的不同 corner（arm: top/right + rotate 28°，head: bottom/left + rotate -32°），它们的"接缝"靠几何巧合而非父子关系。换 PhaseMind 后 disc 边缘留白多，缝就暴露了——之前 Carbcycle/Ecodemand 的满版深色封面把缝藏在 disc 上没人看到。
- HTML 把 head 嵌进 arm（`.tonearm-arm > .tonearm-head`），head 改成 `position: absolute; bottom: -8px; left: 50%` + `translateX(-58%) rotate(-32deg)` —— 不管 arm 怎么转，head 永远物理粘在 arm 的末端，像真实唱针的 cartridge 挂在 arm 头那样。

### Added (Track 03 完整接入：PhaseMind — ADHD 女性周期+状态追踪 app)
- 占位作品 Pulse 彻底换成 **PhaseMind**：title / glyph "P" / cover / 4 段 lyrics + 8 个 posts + 4 段 user voice 全部填真实内容。
- **产品命题（写进 description）**：雌激素随周期上下波动 → 拖动多巴胺 → ADHD 症状跟着动。经期 app 不管 ADHD，ADHD app 不管周期，PhaseMind 把两者放进一个 surface，让用户看到 pattern 而不是去猜。
- **4 段 lyrics 各对应一张产品截图，叙事按"4 个产品决策"组织**：
  1. *Two charts, same body.* — Today 屏：phase 环 + 4 维 ADHD 状态同屏。回答"为什么把两个领域合并"。
  2. *Color the background, not the line.* — Trends 屏：周期阶段当背景色带、ADHD 折线当前景。回答"如何让相关性一眼可见"，不需要切图表。
  3. *Estrogen rising, in plain language.* — Records 屏：每天的 phase 名 + "意味着什么" 解释 + Learn more，把激素科普嵌进 logging flow，而不是单独的"科普 tab"（那种 tab 永远 dead）。
  4. *Streaks without the shame.* — Profile 屏：streak 徽章降级到 Profile（不在 Home 推给用户），没有 missed-day 惩罚，goals 从 "% complete" 改成 "你这个月对自己的认识"。tone over count，明确避开 ADHD 群体已经经历过太多的 punitive UX。
- **配色取自用户提供的 Wavelet-style 浅色参考图**：紫色为主、暖粉为点缀。
  - `accent1: #7c6dff`（深薰衣草紫——播放按钮 / 主 CTA）
  - `accent2: #a78bfa`（浅紫——渐变中段 / halo）
  - `accent3: #ff5e8a`（暖粉——心形 / active lyric / "data 点缀"位）
- `theme: "light"`：复用上一轮加的 per-track 明暗主题机制，PhaseMind 切到时整站翻成浅紫白瓷玻璃。
- **文件命名整理**：4 张产品截图原本是微信下载的中文长名（`微信图片_2026...jpg`），renamed → `PhaseMind/phase-1.jpg`...`phase-4.jpg`。中文路径在 GitHub Pages / 部分静态服务器上要 URL-encode 才能拿到，ASCII 名最稳。
- `cover: "PhaseMind/AppImage.png"`：唱盘封面换成用户提供的 app icon（脑+人物剪影 + 紫粉轨道环），紫粉色调跟 disc-stack 边缘渐变完美咬合，比用产品截图当封面更"品牌化"——其他 track 的截图改去 lyric posts 里。

### Added (Per-track 明暗主题：每个项目独立色调)
- 用户决定让每个作品有完全不同的视觉身份——不只是 accent 色不同，而是连**底色明暗**都不同。Carbcycle 维持"近黑 + 暖橙"（参考 Waveplay），Ecodemand 走"亮白 + 蓝紫 + 暖橙点缀"（参考 Waveflow），未来作品可以自由选 dark / light。
- **`works[i].theme: "dark" | "light"`** 数据字段：每个 work 声明自己的明暗主题。Carbcycle/Pulse → dark；Ecodemand/Rhapsody → light（默认 dark 兜底）。
- **`<html data-theme="...">` 切换**：`updateNowPlaying()` 在切歌时同步把 `work.theme` 写到 `documentElement.dataset.theme`。CSS 用 `:root[data-theme="light"]` 选择器整组覆写 token。
- **新增 token 体系**（`:root` 内）让覆写有抓手，不必到处硬编码：
  - `--surface-1/2/3`：内嵌卡片三档透明度（quote-echo / designer-note / 进度条 track / scrollbar）
  - `--panel-bg / --panel-border / --panel-shadow / --panel-inset-top`：三大面板（now-playing / np-posts / profile / post-modal-card）
  - `--blob-blend`：bg blob 的 mix-blend-mode（dark=screen、light=multiply——浅底上 screen 几乎不可见）
  - `--noise-tone / --noise-blend / --noise-opacity / --noise-dot-color`：bg-noise 在浅底上要换 multiply 而不是 overlay
- **light 主题数值**：
  - `--bg-deep: #f4f5fb`（淡淡的薰衣草白），`--text-primary: rgba(20,25,40,0.96)` 起
  - 玻璃面板从 `rgba(255,255,255,0.07)` 翻到 `rgba(255,255,255,0.78)` —— 不是"半透明白"而是"近不透明白磨砂"，更接近 Apple Music 浅色那种"白瓷"质感
  - `--surface-*` 改成 `rgba(20, 25, 40, 0.03/0.05/0.08)`：浅底上要用淡黑加深而不是淡白叠加
  - `--panel-shadow` 改为偏蓝紫的 `rgba(40, 50, 80, 0.10)`，让浅底投影更"凉"
- **主题切换 1.4s 平滑过渡**：body 的 `background-color + color`、所有面板的 `background-color + border-color + box-shadow` 都加了 1.4s `var(--ease-out)` transition，与 accent 色的 `@property` 插值时长对齐——切歌时颜色和明暗整组一起变，不会 snap。
- **盖在白底上的硬编码白色全部改走变量**：`.np-progress-track` / `.lyric-dot` / `.lyrics-list::before` / `.quote-echo` / `.designer-note` / `.voice-tag` / `.post-footer` / `.post-like:hover` / `.post-modal-card` / 三处 scrollbar-thumb 等。否则浅色主题下白底叠白卡 = 看不见。

### Changed (橙色覆盖面积压缩，回归"深玻璃 + 局部暖光")
- 用户反馈：当前 Carbcycle 切到时整个 Now Playing 面板被橙色"洗"满，对比参考图（Waveplay 风格）那种"近黑面板 + 播放键周边小光晕"少了克制感。问题在面板和背景两处都把橙色摊得太大。
- **`.now-playing::before` 重做**：原来是 150% × 90%、opacity 0.5 的 radial gradient，从面板顶部往下铺——本质是一整张橙色洗。改成右上角 70% × 55%、opacity **0.22** 的小角光，面板主体回到深玻璃（`rgba(255,255,255,0.07)` + `backdrop-filter: blur(48px)`）质感。
- **新增 `.now-playing::after`**：底部偏左 56% × 38%、opacity 0.20 的 `accent-2` 小光晕，落在播放按钮一带，呼应参考图里"播放键周边的暖 halo"——把橙色从"面板色"降级回"控件色"。
- **背景 4 颗 blob 一起降亮缩小**：
  - 通用尺寸 55vmax → **38vmax**；模糊半径 120 → **140px**（边缘更软更稀）；基础 opacity 0.5 → **0.28**。
  - blob-2 缩到 32vmax / opacity 0.22；blob-4 缩到 32vmax / opacity 0.18；blob-3（青）进一步缩到 **22vmax / opacity 0.18**——青色现在像参考图里那枚孤独的 Protein 环一样，是单独一处冷点缀，不再扩成色块。
- **`.profile::before` 同步降亮**：Contact 视图的暖角光也从 150% × 90% / 0.45 改成 70% × 55% / 0.22，避免 Contact 切回来又被洗一次。
- 全局 CSS 改动 = 所有 track（Carbcycle / Ecodemand / 占位）都受益，每首的 accent 都更克制；不是单作品改色。

### Added
- **Synced Lyrics**（仿 Apple Music 同步歌词）：歌词放在**进度条上方**，随播放时间一行行高亮往下走。每行歌词占据 `duration / lyrics.length` 时长，到点自动切换下一行；当前行 opacity 1 + 左侧脉动小圆点（暂停时停脉动），其它行 opacity 0.32。
- **点击歌词 = seek**：点任一行歌词，进度条直接跳到该行的起始时间，对应 Liner Notes 同步切换。
- **Liner Notes**：当前选中歌词的深度内容，多个 `post` 卡片组成。`post.type === "image"` 渲染为满版"歌词海报"+ 底部渐变 caption；`post.type === "text"` 渲染为玻璃卡片，可选 eyebrow + 正文。
- 接入 Carbcycle 4 段 lyrics + 8 个 posts（混合 text/image），用上 carb1.jpg / carb2.jpg / carb3.jpg。
- 接入 Ecodemand 3 段 lyrics + 5 个 posts，用上 dashboard-1.png / 3.png / 4.png。
- 占位作品（Pulse / Rhapsody）无 lyrics 字段时区块自动 `[hidden]`。
- HTML 转义工具（`escapeHtml` / `escapeAttr`）用于安全渲染用户文案。

### Changed
- `.now-playing` 改为可滚动（`overflow-y: auto`），原本的 `display: flex; flex-direction: column;` + `.np-queue { margin-top: auto }` 移除，按文档流自然排列。
- 内容顺序：Header → Title → Subtitle → Description → Tags → **Lyrics** → Progress → Controls → **Liner Notes** → Up Next。
- Up Next 列表移除了内部 `max-height + overflow`，随面板一起滚动。

### Fixed
- 歌词第一版位置错放在控件下方且做成了"带序号 bullet"列表——不符合音乐播放器的同步歌词模式。重做成 Apple Music 风：在进度条上方、随时间高亮、点击 seek、无序号、只用 opacity + 左侧脉动点区分 active。
- Liner Notes 单列改成 **2 列网格**（`grid-template-columns: repeat(2, 1fr)`）。单条 post（`:only-child`）自动占满整行，避免错位。≤720px 退回单列。

### Added (后续追加)
- **Post 社交化**：每张 Liner Notes 卡片当成社交 post 处理。
  - 卡片底部新增 **like 按钮 + view 计数**（心形 + 眼睛图标）。
  - **点卡片**任意区域 → 打开**详情 modal**（满屏 backdrop 模糊 + 居中卡片 + close 按钮 + ESC 关闭 + 背景点击关闭）。模态里图片放大、文字字号变大更易读，底部也有 like + view 控件。
  - **点 like** → 立即切换状态（心形填色 + 跳动动画 + 计数 +1/-1），卡片和 modal 双向同步。
  - **打开 modal 时 view +1** 并持久化。
- **localStorage 持久化**：`px-liked:<id>` 和 `px-views:<id>` 两个 key 空间，每张 post 用 `${workIdx}.${lyricIdx}.${postIdx}` 当 id。
- **初始计数**：每张 post 的初始 likes/views 用 ID 字符串的 djb2 hash 算出，stable 但有变化（likes 28–247，views 640–4839），不用手填。
- `formatCount`：< 1k 直显，1k-1M 显示成 1.2k / 12k，>1M 显示成 1.2M。tabular-nums 等宽数字。

### Fixed (背景色"流动"修复)
- 第一版：以为有持续流动，其实只有"切歌时换色 + transition"——而且 CSS 不支持 gradient 之间的真正插值，那个 transition 实际是 **snap** 不是过渡。
- **第二版**（用 `background-position` + `background-size` 动画）：技术上能跑，但 gradient 改动需要 CPU 重光栅化每一帧，加上面板的 `backdrop-filter: blur(48px)` 模糊，下半屏的 blob 看上去几乎不动。
- **第三版（生效的）**：换成**每个 blob 是独立 `<div>`**（4 个，覆盖左上 / 右上 / 左下 / 右下），各用 `@keyframes` + `transform: translate() scale()` 漂移。`transform` 走 GPU compositing，整屏每个角落都流动起来，且不被 backdrop-filter 模糊"吞掉"。
- 配合 `mix-blend-mode: screen`：blob 重叠区会变亮，模拟极光式色彩流动。`filter: blur(110px)` 让每个 blob 边缘柔化成色斑而非硬圆。
- **切歌颜色平滑过渡**：用 `@property --accent-1/2/3 { syntax: "<color>" }` 注册 accent 为 color 类型——这样 CSS 才会真正插值 RGB 值。配合 `:root { transition: --accent-1 1.4s, ... }`，blob 的 `background: var(--accent-1)` 在切歌时是 1.4s 的真渐变，不是 snap。
- `prefers-reduced-motion: reduce` 兜底，对动效敏感的用户停止动画。

### Changed (主色单系 + 暗底主导)
- 参考用户提供的"warm-orange-on-near-black"音乐播放器配图，调整 Carbcycle 三个 accent + 整个色彩使用分布：
  - **Carbcycle accent 二次校准**：`#ff6e1f`（更深更红的主橙，比之前 `#ff8b3b` 更"火"）/ `#ff9747`（暖琥珀光晕）/ `#4dd4d4`（更亮更 cyan 的青）。
  - **Primary brand 渐变改成单系**：所有 CTA / 主品牌位（`.ctrl-play` / `.intro-cta` / `.brand-dot` / `.np-progress-fill` / `.designer-note-icon` / `.designer-note::before` / 三处 `.*-eq span` 均衡条）从 `accent-1+accent-3` 改为 `accent-1+accent-2`。这样 Carbcycle 的播放按钮等是纯橙系渐变（不混青），Ecodemand 是纯蓝系渐变（不混橙），跟参考里"主色统治大部分位置"的分布一致。
  - **accent-3 收紧到点缀位**：只保留在 `.lyrics-pill-dot`（"Synchronized" 小脉动点，相当于参考里的 Protein ring "数据点缀"）+ bg blob 的一颗（提供整体的冷暖对比张力）。
- **暗色重回主导**：
  - `--bg-deep` 从 `#1a1a26`（冷灰蓝）改成 `#0c0b0a`（暖近黑）。
  - blob 尺寸从 70vmax 缩到 55vmax 上下，blob-3/blob-4 进一步缩到 45-50vmax。
  - opacity 从 0.85 / 0.6 降到 0.5 / 0.4 / 0.35 / 0.3——blob 现在是 "spots of color glow"（暗色背景上的几团光晕）而不是"full-screen color washes"（彩色洗地）。模糊半径 110→120px 让边缘更柔。

### Changed (项目主题色重新校准)
- 根据每个项目的截图实际配色重新提取 accent 三元色，让背景涌动的色斑、面板光晕、播放按钮渐变等都更贴近项目本身的视觉身份：
  - **Carbcycle**：原先三个 accent 全是橙色变体（`#ff8a3d` / `#ffb347` / `#ffd166`），错过了 app 实际有的**冷色 protein ring 青绿**。改为 `#ff8b3b`（主橙）/ `#ffaa40`（暖琥珀）/ **`#3fd1c9`**（青绿对比），让背景色斑既有暖橙又有冷青，呼应 Macro Rings 的视觉。
  - **Ecodemand**：原先三个 accent 全是蓝色变体（`#5b8def` / `#7ba9f5` / `#a3c4f8`），错过了 dashboard 的**橙色点缀**（Total Pending icon / Get Started CTA）。改为 `#4880ff`（深蓝）/ `#7b61ff`（紫蓝）/ **`#ff8c42`**（暖珊瑚），蓝紫主调里点一抹暖。
- 切歌时背景色斑、面板顶部光晕、播放按钮渐变、品牌色点等会跟着切到全新的"温度"——Carbcycle 暖+冷、Ecodemand 冷+暖，对比更明显。

### Changed (Liner Notes 升级为独立窄列面板)
- Liner Notes 从 Now Playing 内部抽出，变成**屏幕最右侧的独立窄列面板**——和 Now Playing 并排，case study 内容跟着唱盘一直可见，不再埋在滚动底部容易被忽略。
- `.stage` 从 2 列（50/50）改为 **3 列**（38% / 35% / 27%）：左唱盘 / 中 Now Playing / 右 Liner Notes。
- Posts grid 从 2 列改为单列纵向 flex（窄列里塞不下两列）。`:only-child` 兜底失效——单 post 在窄列里本来就独占一行。
- Profile 视图改为 `grid-column: 2 / 4` 跨右两列：进 Contact 时 Now Playing 和 Liner Notes 同时淡出，Profile 占满右半部分。
- 响应式：≤1180px 三栏塌成 2 列（唱盘横跨上方，下面 Now Playing + Liner Notes 并排）；≤720px 进一步塌成单列纵向堆叠。
- 唱盘 disc 尺寸从 `min(72vh, 580px)` 缩到 `min(64vh, 500px)` 以适应窄一些的左列。

### Added (case study 结构借鉴 Lyrics+Discussion 参考图)
- **歌词 timeline 改造**（参考 Apple Music meets Genius lyrics）：
  - 左侧加垂直 timeline 连接每行的小圆点；每行带两位编号（01 / 02 / ...）。
  - Active 行：全宽彩色渐变 pill 背景（accent 主题色 16% 透明度）+ 圆点替换为 **3 条跳动均衡器**（暂停时定格）；inactive 行 opacity 0.45，hover 0.8。
  - 顶部加 "Synchronized" pill 配脉动小点，强调"同步歌词"模式。
- **Liner Notes 重组**为 4 个子区块，对应 case study 叙事弧：
  - **Quote echo**：当前歌词以引号 + 副标题（`question` 字段，如 "Why preview before commit?"）作为该区块的锚点。
  - **Designer's Note**：特殊视觉卡（左侧渐变 accent bar + ✦ 图标），承载"设计师为什么这么做"的 reasoning（`note` 字段）。
  - **Material**：现有 2 列 posts 网格，承载支持性的截图和文字证据。
  - **User Voices**：研究/测试中的真实用户引语（`voices` 字段），每条含 `quote` + `author`（如 "P03 — Beta tester"）+ 可选 `tag`（情境标签）。**没用假人头像**，避免 portfolio 装饰感。
- **数据模型扩展**：每条 lyric 新增可选字段 `question`、`note`、`voices: [{quote, author, tag}]`。Carbcycle 4 段、Ecodemand 3 段全部填了草稿（用户后续覆盖真实研究内容）。
- 上述子区块按字段存在性自动隐藏（`note` 缺失则不显示 Designer's Note；`voices` 空数组则不显示 User Voices）。

---

## 2026-05-04

### Added
- **Contact / Profile 视图**（仿 Apple Music 个人页）：圆形头像（渐变 + 黑胶纹理 + 当前主题色光晕）、姓名 + handle、绿色脉动状态条 "Available for full-time UX roles"、Bio 段落、On Rotation 技能标签云、Get in Touch 联系方式列表（Email / LinkedIn / GitHub / Resume）。
- **Now Listening To 行**：Profile 页内联当前正在播放的作品（缩略图 + 标题 + 副标题 + 跳动均衡器），随切歌实时更新。
- **艺人链接**：每个作品的副标题前加上 `Xiaowei`，hover 出下划线，点击跳转 Contact 视图。Now Playing 副标题、Up Next 队列两处都可点。
- **歌曲反向跳转**：Contact 页的 "Now Listening To" 整行可点，回到 Library 视图。
- **Welcome / Intro 开场页**：全屏覆盖层，含 "Hi, I'm Xiaowei" 大标题（名字用渐变跟随主题色）、求职定位介绍段、`▶ Press play` CTA、"or press any key" 提示。点击 CTA 进入并自动播放；任意键进入但不自动播放。淡出 + 缩放 + backdrop-filter 渐隐过渡（0.85s）。

### Changed
- 顶栏导航：移除 `About`，保留 `Library` 和 `Contact`。
- 视图切换重构为 `.stage[data-view]` 驱动，`bindNav` 改为文档级别 capture-phase 事件委托——这样队列行内的艺人链接点击不会冒泡触发 "切歌"。
- 主键盘快捷键 (空格/方向键) 在 Welcome 页未消除前被屏蔽，避免穿透。

---

## 2026-04-29

### Added
- **项目骨架**：纯 HTML/CSS/JS（无构建工具），可直接 GitHub Pages 部署。三个文件 `index.html` / `styles.css` / `script.js`。
- **左侧唱盘**：堆叠式构图——active 居中、prev/next 从画面左边缘探出半截、hidden 离屏淡出。`overflow: hidden` 在 `.turntable-section` 实现左边缘自然裁切。
- **唱片视觉**：唱片本身即作品封面（用项目截图 + 渐变兜底），中央磨砂白圆标签显示作品首字母（渐变文字），下方留浅色凹槽圆环作为黑胶质感提示，仅 active 唱片在播放时旋转（24s/圈）。
- **银色唱针**：右上角伸入唱片的 tonearm，is-playing 状态下落 angle 变化。
- **右侧 Now Playing 面板**：标题 / 副标题 / 描述 / 标签 / 进度条 / 播放控件 / Up Next 队列。毛玻璃面板 (backdrop-filter: blur(48px))。
- **主题色联动**：每个作品的 3 个 accent 色驱动背景色斑、面板顶部光晕、播放按钮渐变、品牌色点。切歌平滑过渡 1s。
- **交互**：滚轮 / 触屏上下滑动 / 键盘左右切换 / 空格播放 / 点封面跳转 / 点队列项跳转。
- **真实项目接入**：
  - Track 01 · **Carbcycle** — iOS 碳循环饮食追踪 app（橙色主题，封面 `Carbcycle/carb1.jpg`）
  - Track 02 · **Ecodemand** — 网页端电商 Dashboard（蓝色主题，封面 `Ecodemand/dashboard-1.png`）
  - Track 03/04 · placeholder（`Coming soon` 文案 + 替换提示）
- **响应式 fallback**：≤960px 改为竖排两段（顶下底）。

### Changed
- 唱盘配色：第一版的"黑胶 + 4 个小卫星轨道封面" → 重做成"唱片即封面 + 堆叠探出"。
- 整体美学："轻盈透亮"方向——降低暗底色饱和度、提高玻璃面板边框亮度、减薄阴影、唱针从深灰金属改成银白镀铬。
- 修了一个早期几何 bug：旧版轨道封面用 `translate(0, -50%)` (元素自身百分比) 导致圆心实际偏离唱盘中心，后改用基于 `--size` 的绝对距离。

---

## 2026-04-29 (initial)

### Added
- Empty repo + `.gitattributes`。
