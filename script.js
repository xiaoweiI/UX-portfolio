/* ==========================================================================
   Xiaowei · UX Portfolio
   Turntable interaction
   ========================================================================== */

const works = [
  {
    title: "Carbcycle",
    subtitle: "Mobile App · iOS · 2026",
    description:
      "A carb-cycling tracker for athletes and lifestyle dieters. One tap switches the day between High / Med / Low Carb modes and every macro target recalculates instantly. A 7-day auto meal plan and an AI-generated option remove the daily-decision tax that kills most diet apps in week three.",
    tags: ["iOS", "Health", "Nutrition", "AI", "Mobile"],
    duration: "04:24",
    glyph: "C",
    coverTag: "Track 01",
    cover: "Carbcycle/carb1.jpg",
    accent1: "#ff8a3d",
    accent2: "#ffb347",
    accent3: "#ffd166",
  },
  {
    title: "Ecodemand",
    subtitle: "Web Dashboard · 2026",
    description:
      "An e-commerce operations dashboard built around a calm visual language. Sales, orders, customers, and inventory across one scannable surface — designed so a daily operator opens it and immediately sees what changed, instead of drowning in numbers.",
    tags: ["Web", "Dashboard", "Data Viz", "E-commerce"],
    duration: "03:48",
    glyph: "E",
    coverTag: "Track 02",
    cover: "Ecodemand/dashboard-1.png",
    accent1: "#5b8def",
    accent2: "#7ba9f5",
    accent3: "#a3c4f8",
  },
  // ↓ Placeholders — replace when you add a new project
  {
    title: "Pulse",
    subtitle: "Coming soon",
    description:
      "Placeholder. Drop a new project folder into the repo and update this entry: title, subtitle, description, tags, glyph, cover, and the three accent colors.",
    tags: ["Placeholder"],
    duration: "02:56",
    glyph: "P",
    coverTag: "Track 03",
    accent1: "#11998e",
    accent2: "#38ef7d",
    accent3: "#a8e063",
  },
  {
    title: "Rhapsody",
    subtitle: "Coming soon",
    description:
      "Placeholder. Drop a new project folder into the repo and update this entry: title, subtitle, description, tags, glyph, cover, and the three accent colors.",
    tags: ["Placeholder"],
    duration: "05:21",
    glyph: "R",
    coverTag: "Track 04",
    accent1: "#c471f5",
    accent2: "#fa71cd",
    accent3: "#fbc2eb",
  },
];

// --------------------------------------------------------------------------
// State
// --------------------------------------------------------------------------
let currentIndex = 0;
let isPlaying = false;
let progressTimer = null;
let progressSeconds = 0;

// --------------------------------------------------------------------------
// DOM
// --------------------------------------------------------------------------
const $ = (id) => document.getElementById(id);
const discStack = $("discStack");
const turntable = $("turntable");
const npTitle = $("npTitle");
const npSubtitle = $("npSubtitle");
const npDescription = $("npDescription");
const npTags = $("npTags");
const trackCount = $("trackCount");
const queueList = $("queueList");
const queueCount = $("queueCount");
const progressFill = $("progressFill");
const progressTime = $("progressTime");
const progressDuration = $("progressDuration");
const playBtn = $("playBtn");
const prevBtn = $("prevBtn");
const nextBtn = $("nextBtn");
const shuffleBtn = $("shuffleBtn");
const caseBtn = $("caseBtn");

// --------------------------------------------------------------------------
// Build the disc stack — one disc per work. State (active/prev/next/hidden)
// is recomputed on every selection change.
// --------------------------------------------------------------------------
function buildDiscStack() {
  discStack.innerHTML = "";
  works.forEach((work, i) => {
    const disc = document.createElement("div");
    disc.className = "disc";
    disc.dataset.index = String(i);

    const gradient = `linear-gradient(135deg, ${work.accent1}, ${work.accent2} 55%, ${work.accent3})`;
    // Image (when present) sits on top of the gradient — gradient acts as fallback
    // and as a tint behind transparent areas.
    const bg = work.cover
      ? `url('${work.cover}') center/cover no-repeat, ${gradient}`
      : gradient;

    disc.innerHTML = `
      <div class="disc-spin" style="background: ${bg};">
        <div class="disc-grooves"></div>
        <div class="disc-shine"></div>
      </div>
      <div class="disc-label"><span class="disc-glyph">${work.glyph}</span></div>
      <div class="disc-hole"></div>
    `;
    disc.addEventListener("click", () => selectIndex(i));
    discStack.appendChild(disc);
  });
}

// Map each disc to its state based on offset from the active index.
// offset 0 → active, 1 → next, 2 → hidden, 3 → prev (for 4 works).
const STATE_BY_OFFSET = ["active", "next", "hidden", "prev"];
function applyDiscStates() {
  const n = works.length;
  discStack.querySelectorAll(".disc").forEach((el) => {
    const i = Number(el.dataset.index);
    const offset = ((i - currentIndex) % n + n) % n;
    el.dataset.state = STATE_BY_OFFSET[offset] || "hidden";
  });
}

function buildQueue() {
  queueList.innerHTML = "";
  works.forEach((work, i) => {
    const li = document.createElement("li");
    li.className = "queue-item";
    li.dataset.index = String(i);
    const gradient = `linear-gradient(135deg, ${work.accent1}, ${work.accent2})`;
    const thumbBg = work.cover
      ? `url('${work.cover}') center/cover no-repeat, ${gradient}`
      : gradient;
    li.innerHTML = `
      <div class="queue-eq" aria-hidden="true">
        <span></span><span></span><span></span>
      </div>
      <div class="queue-thumb" style="background: ${thumbBg};"></div>
      <div class="queue-meta">
        <span class="queue-title">${work.title}</span>
        <span class="queue-sub">${work.subtitle}</span>
      </div>
      <span class="queue-duration">${work.duration}</span>
    `;
    li.addEventListener("click", () => selectIndex(i));
    queueList.appendChild(li);
  });
}

// --------------------------------------------------------------------------
// Selection: rotate orbit so active slot lands at 3 o'clock (90deg).
// --------------------------------------------------------------------------
function selectIndex(index) {
  index = ((index % works.length) + works.length) % works.length;
  if (index === currentIndex) return;

  currentIndex = index;
  applyDiscStates();
  updateNowPlaying();
  resetProgress();
}

// --------------------------------------------------------------------------
// Update Now Playing panel + theme
// --------------------------------------------------------------------------
function updateNowPlaying() {
  const work = works[currentIndex];

  // Theme tokens (drives background, panel halo, accent UI elements)
  document.documentElement.style.setProperty("--accent-1", work.accent1);
  document.documentElement.style.setProperty("--accent-2", work.accent2);
  document.documentElement.style.setProperty("--accent-3", work.accent3);

  // Fade content
  [npTitle, npSubtitle, npDescription].forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(6px)";
  });

  setTimeout(() => {
    npTitle.textContent = work.title;
    npSubtitle.textContent = work.subtitle;
    npDescription.textContent = work.description;

    npTags.innerHTML = "";
    work.tags.forEach((t) => {
      const li = document.createElement("li");
      li.textContent = t;
      npTags.appendChild(li);
    });

    [npTitle, npSubtitle, npDescription].forEach((el) => {
      el.style.opacity = "";
      el.style.transform = "";
    });
  }, 200);

  trackCount.textContent =
    String(currentIndex + 1).padStart(2, "0") +
    " / " +
    String(works.length).padStart(2, "0");

  progressDuration.textContent = work.duration;
  queueCount.textContent = `${works.length - 1} more track${works.length - 1 === 1 ? "" : "s"}`;

  queueList.querySelectorAll(".queue-item").forEach((el) => {
    el.classList.toggle("is-active", Number(el.dataset.index) === currentIndex);
  });
}

// --------------------------------------------------------------------------
// Play / pause + progress
// --------------------------------------------------------------------------
function togglePlay() {
  isPlaying = !isPlaying;
  document.body.classList.toggle("is-playing", isPlaying);

  if (isPlaying) {
    startProgressTimer();
  } else {
    stopProgressTimer();
  }
}

function durationToSeconds(d) {
  const [m, s] = d.split(":").map(Number);
  return m * 60 + s;
}
function secondsToTime(secs) {
  const m = Math.floor(secs / 60);
  const s = Math.floor(secs % 60);
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

function startProgressTimer() {
  stopProgressTimer();
  progressTimer = setInterval(() => {
    const total = durationToSeconds(works[currentIndex].duration);
    progressSeconds += 1;
    if (progressSeconds >= total) {
      progressSeconds = 0;
      selectIndex(currentIndex + 1);
      return;
    }
    renderProgress();
  }, 1000);
}

function stopProgressTimer() {
  if (progressTimer) clearInterval(progressTimer);
  progressTimer = null;
}

function resetProgress() {
  progressSeconds = 0;
  renderProgress();
}

function renderProgress() {
  const total = durationToSeconds(works[currentIndex].duration);
  const pct = (progressSeconds / total) * 100;
  progressFill.style.width = `${pct}%`;
  progressTime.textContent = secondsToTime(progressSeconds);
}

// --------------------------------------------------------------------------
// Wheel / vertical-swipe navigation
// Scrolling down or swiping up on the turntable advances; opposite goes back.
// --------------------------------------------------------------------------
function enableWheelAndSwipe() {
  // Wheel — debounced so a single scroll = one track change
  let wheelLock = false;
  turntable.addEventListener(
    "wheel",
    (e) => {
      e.preventDefault();
      if (wheelLock) return;
      const dir = Math.sign(e.deltaY);
      if (!dir) return;
      selectIndex(currentIndex + dir);
      wheelLock = true;
      setTimeout(() => (wheelLock = false), 600);
    },
    { passive: false }
  );

  // Touch — vertical swipe
  let startY = 0, startX = 0, swiping = false;
  turntable.addEventListener("touchstart", (e) => {
    const t = e.touches[0];
    startX = t.clientX; startY = t.clientY; swiping = true;
  }, { passive: true });
  turntable.addEventListener("touchend", (e) => {
    if (!swiping) return;
    swiping = false;
    const t = e.changedTouches[0];
    const dx = t.clientX - startX, dy = t.clientY - startY;
    if (Math.abs(dy) > 40 && Math.abs(dy) > Math.abs(dx)) {
      selectIndex(currentIndex + (dy < 0 ? 1 : -1));
    }
  }, { passive: true });
}

// --------------------------------------------------------------------------
// Wire up controls
// --------------------------------------------------------------------------
function bindControls() {
  prevBtn.addEventListener("click", () => selectIndex(currentIndex - 1));
  nextBtn.addEventListener("click", () => selectIndex(currentIndex + 1));
  playBtn.addEventListener("click", togglePlay);
  shuffleBtn.addEventListener("click", () => {
    let i = Math.floor(Math.random() * works.length);
    if (i === currentIndex) i = (i + 1) % works.length;
    selectIndex(i);
  });
  caseBtn.addEventListener("click", () => {
    // Placeholder — wire to case-study route later
    console.log("Open case study:", works[currentIndex].title);
  });

  document.addEventListener("keydown", (e) => {
    if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;
    if (e.code === "Space") { e.preventDefault(); togglePlay(); }
    if (e.code === "ArrowLeft") selectIndex(currentIndex - 1);
    if (e.code === "ArrowRight") selectIndex(currentIndex + 1);
  });
}

// --------------------------------------------------------------------------
// Init
// --------------------------------------------------------------------------
function init() {
  buildDiscStack();
  buildQueue();
  applyDiscStates();
  updateNowPlaying();
  renderProgress();
  bindControls();
  enableWheelAndSwipe();
}

init();
