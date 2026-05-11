/* ==========================================================================
   Xiaowei · UX Portfolio
   Turntable interaction
   ========================================================================== */

const ARTIST = "Xiaowei";

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
    cover: "Carbcycle/appimage.png",
    coverSize: "132%", // enlarge the pumpkin icon — its built-in padding leaves the disc looking small at default "cover"
    // Dark theme — warm-orange-on-near-black, like the Waveplay reference.
    theme: "dark",
    accent1: "#ff6e1f",
    accent2: "#ff9747",
    accent3: "#4dd4d4",
    lyrics: [
      {
        line: "Carb cycling without the spreadsheet.",
        question: "Why we made mode-switching the spine of the app.",
        note: "Existing carb-cycle apps treated the day-mode as a setting buried three screens deep. We made it the first decision of the day — visible from the home screen, one tap to commit. That hierarchy reflects how cyclers actually think about their day, not how database schemas want to be organized.",
        posts: [
          {
            type: "text",
            title: "The hook",
            body: "Carb cyclers were patching their plans together with paper journals and generic macro apps that knew nothing about the daily H/M/L switch. The whole product was built around that switch as the primary interaction — not a setting buried three screens deep.",
          },
          {
            type: "image",
            src: ["Carbcycle/carb1.jpg", "Carbcycle/carb4.jpg"],
            caption: "Today (macro rings as the daily anchor) + Meals (H/M/L mode pills at the top — the first decision of the day, surfaced from every page).",
          },
        ],
        voices: [
          {
            quote: "I had three different spreadsheet tabs before this — one per mode. Now it's just a tap.",
            author: "P03 — Beta tester",
            tag: "Onboarding",
          },
        ],
      },
      {
        line: "One tap, three numbers, instant recalc.",
        question: "How fast is too fast for a recalculation?",
        note: "320ms felt like a physical 'flip' — readable, satisfying, not laggy. At 200ms users couldn't follow what changed; at 500ms+ it felt sluggish. The animation isn't decorative — it's load-bearing trust signaling. Tested across 6 durations with 4 users.",
        posts: [
          {
            type: "text",
            body: "Switching the day's mode reshuffles five values in concert (kcal, P, C, F, fiber). The macro rings animate through the recalculation in 320ms — long enough to read, short enough to never annoy. I tested six durations with four users to land here.",
          },
          {
            type: "image",
            src: ["Carbcycle/carb2.jpg", "Carbcycle/carb5.jpg"],
            caption: "Auto Meal Plan modal + the Cycling Config behind the math — High Carb ×1.1 / Low Carb ×0.9 are the multipliers that recalculate in 320ms.",
          },
        ],
        voices: [
          {
            quote: "It actually animates. I can see what the app's doing. Other apps just blink.",
            author: "P02 — Athlete",
            tag: "Animation",
          },
        ],
      },
      {
        line: "Seven days, generated, previewed, then committed.",
        question: "Why preview before commit, instead of auto-applying.",
        note: "Auto-applying a generated week would have saved one tap, but five-of-seven users in early testing hesitated to use the feature again after one bad auto-result. The Preview screen earned trust back. Slower flow, higher long-term engagement — not the same thing as friction.",
        posts: [
          {
            type: "text",
            title: "Trust before commitment",
            body: "Auto-plan generates a 7-day pattern, then shows a full Preview before applying. Reduced the 'did I just lose my plan?' anxiety I saw repeatedly in early testing — users want to see the math before signing the contract.",
          },
          {
            type: "image",
            src: ["Carbcycle/carb3.jpg", "Carbcycle/carb6.jpg"],
            caption: "Preview Plan (totals before commit) + the Foods library it draws from. Users see both the macro math and the food breadth before signing.",
          },
        ],
        voices: [
          {
            quote: "I want to see what it's giving me before it overwrites my plan.",
            author: "P05 — Coach",
            tag: "Trust",
          },
        ],
      },
      {
        line: "Meals as building blocks, not prescriptions.",
        question: "What do users do when the plan doesn't fit?",
        note: "Strict plans break under any deviation — a missed meal, a craving, a dinner out. Users either abandon the plan entirely or feel guilty for breaking it. Treating meals as swappable units (drag to reorder, tap to substitute within macro bands) gave users permission to deviate without breaking the system. The plan is a scaffold, not a contract.",
        posts: [
          {
            type: "text",
            body: "Each meal is a swappable unit — drag to reorder, tap to substitute from the same macro band. The plan is a scaffold, not a contract. Users who fall off a strict plan rarely come back; users who improvise around a scaffold do.",
          },
        ],
        voices: [
          {
            quote: "I switched two meals on Wednesday and didn't feel like I'd 'cheated'. The app didn't make me feel bad.",
            author: "P04 — Long-term dieter",
            tag: "Adherence",
          },
        ],
      },
    ],
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
    // Light theme — bright, airy, blue/purple primary with warm peach as the
    // sparing "data accent" (matches the Waveflow-style light reference).
    theme: "light",
    accent1: "#4880ff",
    accent2: "#7b61ff",
    accent3: "#ff8c42",
    lyrics: [
      {
        line: "Numbers should whisper, not shout.",
        question: "What changes when an operator opens the dashboard?",
        note: "The previous dashboard led with absolute numbers — Total Sales: $89,000. Operators care about the delta, not the absolute. We re-anchored every metric card around 'change since yesterday' as the primary value, with the absolute as supporting context.",
        posts: [
          {
            type: "text",
            title: "The brief",
            body: "Operators were opening the previous dashboard daily and bouncing — too many numbers, no clear hierarchy of 'what changed since yesterday'. The redesign brief: rebuild the surface around delta and trend, not absolute values.",
          },
          {
            type: "image",
            src: ["Ecodemand/dashboard-1.png", "Ecodemand/dashboard-2.png"],
            caption: "Two metric-overview surfaces — both lead with delta and shape, not absolute totals. The dashboard rebuild's spine.",
          },
        ],
        voices: [
          {
            quote: "I don't need the actual sales total — I need to know if today is going up or down compared to yesterday.",
            author: "Ops Lead — Customer interview",
            tag: "Information hierarchy",
          },
        ],
      },
      {
        line: "Scan the sales line first, drill down second.",
        question: "Why hide the axis on charts by default?",
        note: "In testing, exact axis ticks rarely got read. Hiding them by default and revealing on hover let the eye land on shape (trend) instead of values. Time-to-insight on the sales question dropped from ~12s to ~5s. People don't scan numbers — they scan silhouettes.",
        posts: [
          {
            type: "image",
            src: ["Ecodemand/dashboard-3.png", "Ecodemand/dashboard-6.png"],
            caption: "Revenue silhouette + Inbox thread detail — same UX rule expressed twice: default to shape, reveal specifics only on demand.",
          },
          {
            type: "text",
            body: "Charts default to silhouette mode (color, soft fill) and reveal axis ticks only on hover. In testing, time-to-insight on the sales question dropped from ~12s to ~5s.",
          },
        ],
        voices: [
          {
            quote: "I look at the shape, then if I want a number I'll hover. Most of the time I just want the shape.",
            author: "Sales analyst — Usability test",
            tag: "Reading patterns",
          },
        ],
      },
      {
        line: "Inventory and orders share one navigation grammar.",
        question: "What did the design system learn from the redesign?",
        note: "Each section had its own grid layout, filter pattern, and density before. We unified everything around a single row pattern with the same controls (search, sort, filter, export). New-operator onboarding dropped from 'a half day' to 'a few minutes' — pattern reuse compounds.",
        posts: [
          {
            type: "image",
            src: ["Ecodemand/dashboard-4.png", "Ecodemand/dashboard-5.png"],
            caption: "Products + Inbox — different content, identical row grammar. The reason new operators onboard in minutes: every page reuses what they already learned.",
          },
        ],
        voices: [
          {
            quote: "Once I learned how the products page worked, I already knew the orders page.",
            author: "New hire — Onboarding interview",
            tag: "Pattern reuse",
          },
        ],
      },
    ],
  },
  // ↓ PhaseMind — cycle-phase + ADHD-state tracker for women with ADHD.
  // The premise: hormonal phases shift dopamine, which shifts ADHD symptoms.
  // Both spaces have apps; almost none connect the two on one surface.
  // Visual identity from a Wavelet-style light reference: soft purple primary
  // + warm pink as the data-punctuation accent.
  {
    title: "PhaseMind",
    subtitle: "Mobile App · iOS · 2026",
    description:
      "A cycle and ADHD-state tracker built for women with ADHD. Estrogen rises and falls across the menstrual cycle and drags dopamine — and ADHD symptoms — with it. Most period apps ignore that link; most ADHD apps ignore the cycle. PhaseMind puts both on one surface so users can see the pattern instead of guessing at it.",
    tags: ["iOS", "Health", "ADHD", "Women", "Mobile"],
    duration: "03:30",
    glyph: "P",
    coverTag: "Track 03",
    cover: "PhaseMind/AppImage.png",
    theme: "light",
    accent1: "#7c6dff", // deep lavender — play button, primary CTA
    accent2: "#a78bfa", // lighter purple — gradient mid + halo
    accent3: "#ff5e8a", // warm pink — heart, active lyric, "data" punctuation
    lyrics: [
      {
        line: "Two charts, same body.",
        question: "Why fold cycle tracking and ADHD tracking into one app.",
        note: "Period apps know cycle phases. ADHD apps know focus and mood scores. Neither knows about the other — but estrogen rising and falling across the cycle drags dopamine with it, and ADHD symptoms move with that. Users with both diagnoses were already taping two apps together with notes. PhaseMind makes the connection the surface, not the user's homework.",
        posts: [
          {
            type: "text",
            title: "The hook",
            body: "Period and ADHD live in two separate app stores. Users with both were maintaining a period app, an ADHD app, and a notes file to cross-reference them. PhaseMind merges the surfaces — a phase ring + cycle day on top, a 4-axis ADHD readout (Focus / Impulse / Hyperactivity / Mood) right below, both above the fold on Home.",
          },
          {
            type: "image",
            src: ["PhaseMind/phase-1.jpg", "PhaseMind/phase-3.jpg"],
            caption: "Today (readout) + Records (editor) — same 4-axis ADHD model, two surfaces. Home shows the live state; Records is where the day's scores get logged.",
          },
        ],
        voices: [
          {
            quote: "I had Flo on one screen and a focus rating app on another. I'd screenshot both and look at them side by side. PhaseMind already does that for me.",
            author: "P02 — ADHD + endometriosis",
            tag: "Cross-app workflow",
          },
        ],
      },
      {
        line: "Color the background, not the line.",
        question: "How to make cycle/ADHD correlation visible without forcing a chart toggle.",
        note: "An ADHD trend line by itself reads as random noise. Overlaying a second chart for cycle phases doubles the cognitive load. Painting the cycle phases as soft colored background bands behind the line lets the eye read both at once — no toggle, no math. In testing, users named the pattern in <5s with bands vs ~30s with stacked charts. The dimension switch (Focus / Hyperactivity / Impulsivity / Mood) reuses the same band colors so the cycle never has to be re-decoded between tabs.",
        posts: [
          {
            type: "image",
            src: ["PhaseMind/phase-2.jpg", "PhaseMind/phase-4.jpg"],
            caption: "Trends chart + Profile insights — both use the cycle as the temporal frame: focus line over phase-banded background, insights as delta vs prior cycle.",
          },
          {
            type: "text",
            body: "Same dataset, two readings. Phase as background, score as foreground. The Correlation tab makes the implicit thesis explicit, but the colored bands are doing most of the work — by the time a user reaches Correlation, they've already named the pattern themselves.",
          },
        ],
        voices: [
          {
            quote: "I see now why my focus drops the same week every month. I thought I was just inconsistent.",
            author: "P05 — Late-diagnosed ADHD",
            tag: "Pattern recognition",
          },
        ],
      },
      {
        line: "Estrogen rising, in plain language.",
        question: "Why bake hormone literacy into the logging flow itself.",
        note: "Most users don't know what 'follicular phase' means biologically. A separate education tab is the wrong answer — those tabs always die. The Records page leads with the day's meaning ('Follicular phase · Estrogen rising — energy and focus rise, a good window for new things') and reduces the raw data fields to a secondary action below. Logging becomes a teaching moment without a syllabus.",
        posts: [
          {
            type: "text",
            title: "The frame",
            body: "Records leads with what the day means for the body, not what to fill in. The data fields — flow, color, symptoms, the 4-axis ADHD sliders — sit underneath the explanation, not above it. Users learn the cycle by logging it.",
          },
          {
            type: "image",
            src: ["PhaseMind/phase-3.jpg", "PhaseMind/phase-1.jpg"],
            caption: "Records leads with the phase explanation, then logging fields below; Today's screen carries the same phase label so the vocabulary is consistent everywhere it appears.",
          },
        ],
        voices: [
          {
            quote: "I'm 32 and this is the first time someone explained estrogen and dopamine to me in a sentence I could understand.",
            author: "P07 — Diagnosed at 30",
            tag: "Health literacy",
          },
        ],
      },
      {
        line: "Streaks without the shame.",
        question: "How to encourage daily logging in a population that's been pathologized for inconsistency.",
        note: "ADHD users have a lifetime of broken-streak guilt. The 'don't break your streak!' UX pattern retraumatizes the exact thing they're trying to manage. PhaseMind keeps the streak quiet — a small badge in Profile, never pushed on Home — with no penalty for missed days. Goals are reframed from '% complete' to 'what you've learned about yourself this month'. The supportive opening line ('Knowing yourself is where change starts 💜') is load-bearing — it sets the contract that this app is here to help, not to grade.",
        posts: [
          {
            type: "image",
            src: ["PhaseMind/phase-4.jpg", "PhaseMind/phase-2.jpg"],
            caption: "Profile (streak as quiet badge, never pushed) + Trends (the long-term pattern view) — long-term presence without nagging.",
          },
          {
            type: "text",
            body: "Default copy avoids punitive logic. Insights show delta vs prior cycle (not absolutes), so 'Mood stability ↑28%' replaces a bare score. The tools tile (Tags, Notes, Reminders, Privacy, Backup, Export, Appearance, Help) puts control in arm's reach — ADHD users abandon apps when they can't quickly find the off-switch.",
          },
        ],
        voices: [
          {
            quote: "Most apps make me feel guilty when I miss a day. This one just… waits. It feels like an app that has actually met an ADHD person.",
            author: "P03 — Beta tester",
            tag: "Tone",
          },
        ],
      },
    ],
  },
  // Track 04 — the deliberately empty slot. A 4-track album with one
  // unrecorded song. Content is intentionally playful: better to admit the
  // placeholder than to dress it up with lorem ipsum.
  {
    title: "Coming soon",
    subtitle: "TBA · Studio · 2026",
    description:
      "An empty slot waiting for the next thing. The portfolio is a 4-track album and this is the unrecorded song — the gradient is the placeholder, the case study is in the calendar. Re-check in a few weeks; there will be a project here, and I'll claim it was the plan all along.",
    tags: ["TBA", "In progress", "Probably weird"],
    duration: "05:00",
    glyph: "?",
    coverTag: "Track 04",
    theme: "light",
    accent1: "#c471f5",
    accent2: "#fa71cd",
    accent3: "#fbc2eb",
    lyrics: [
      {
        line: "Still mixing in the studio.",
        question: "What's the next track about?",
        note: "Honest answer: undecided. The brief is somewhere between 'thing I'm curious about' and 'thing someone is paying me to think about'. Whatever lands here will get the same treatment as the other three tracks — four lyrics, a designer's note, user voices, and a real story for why the product is the way it is. Until then, this slot is the part of the portfolio that's allowed to keep moving.",
        posts: [
          {
            type: "text",
            title: "In the meantime",
            body: "If you skipped to Track 04 hoping for something specific — sorry, not yet. If you skipped here hoping to find the part of the portfolio where the designer admits not everything is figured out, congratulations: you found it.",
          },
        ],
        voices: [
          {
            quote: "Came for the case study, stayed for the suspense.",
            author: "A patient visitor",
            tag: "First impression",
          },
        ],
      },
      {
        line: "The art is real. The story isn't (yet).",
        question: "Why is there a gradient if there's no project?",
        note: "The pink-purple-cream palette is decorative. Four discs spinning in a row needed four distinct color identities, and this one rounded out the set. Whatever fills Track 04 will bring its own color story; this gradient retires gracefully — or gets revived as a B-side, depending on how the next case study goes.",
        posts: [
          {
            type: "text",
            body: "The disc needs to look like a disc even when the work doesn't exist yet. The gradient is doing visual duty, not narrative duty.",
          },
        ],
        voices: [
          {
            quote: "I'd rate this 5 stars but I'd be judging the gradient, not the work.",
            author: "Honest reviewer",
            tag: "Decorative",
          },
        ],
      },
      {
        line: "Portfolio sites are 90% finished forever.",
        question: "Why ship the portfolio with a placeholder at all?",
        note: "Two reasons. One: the four-track layout is the design — a portfolio that pretends to be complete is more brittle than one that admits it isn't. Two: the alternative is keeping the site offline until a fourth project lands, which is the well-trodden path to never shipping a portfolio at all.",
        posts: [
          {
            type: "text",
            title: "The honest count",
            body: "Three real projects, one placeholder. That's a real ratio for a real designer, not the curated greatest-hits version most portfolios pretend to be.",
          },
        ],
        voices: [
          {
            quote: "Refreshing to see an empty slot instead of one stuffed with lorem ipsum.",
            author: "A hiring manager, maybe",
            tag: "Honesty",
          },
        ],
      },
      {
        line: "Probably weird. Definitely on its way.",
        question: "What will end up here?",
        note: "Statistically, designers fill placeholder slots with whatever they were obsessed with three months earlier — so check back then. Until then, this disc keeps spinning, the page keeps loading, the next thing keeps cooking.",
        posts: [
          {
            type: "text",
            title: "The most likely outcome",
            body: "Some small weird thing that solves a specific problem nobody else thought was worth solving. That's been the pattern. No reason to break it for Track 04.",
          },
        ],
        voices: [
          {
            quote: "This is the part of the portfolio where you make eye contact and smile awkwardly.",
            author: "Anonymous beta tester",
            tag: "Mood",
          },
          {
            quote: "I rated this 5 stars without reading. The vibes were enough.",
            author: "Easily impressed",
            tag: "Pure vibes",
          },
        ],
      },
    ],
  },
];

// --------------------------------------------------------------------------
// State
// --------------------------------------------------------------------------
let currentIndex = 0;
let isPlaying = false;
let progressTimer = null;
let progressSeconds = 0;
let introDismissed = false;
let activeLyricIndex = 0;

// --------------------------------------------------------------------------
// DOM
// --------------------------------------------------------------------------
const $ = (id) => document.getElementById(id);
const discStack = $("discStack");
const turntable = $("turntable");
const intro = $("intro");
const introCta = $("introCta");
const stage = $("stage");
const profileNowThumb = $("profileNowThumb");
const profileNowTitle = $("profileNowTitle");
const profileNowSub = $("profileNowSub");
const npLyrics = $("npLyrics");
const npPosts = $("npPosts");
const lyricsList = $("lyricsList");
const postsContainer = $("postsContainer");
const postsMeta = $("postsMeta");
const quoteLine = $("quoteLine");
const quoteQuestion = $("quoteQuestion");
const designerNote = $("designerNote");
const designerNoteBody = $("designerNoteBody");
const userVoices = $("userVoices");
const voicesList = $("voicesList");
const postModal = $("postModal");
const postModalBackdrop = $("postModalBackdrop");
const postModalClose = $("postModalClose");
const postModalBody = $("postModalBody");
const postModalLike = $("postModalLike");
const postModalLikeCount = $("postModalLikeCount");
const postModalViewCount = $("postModalViewCount");
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
    // Cover present → image only, with the page-deep color as a neutral fill so
    // transparent areas of icon-style PNGs don't bleed colored gradient. Each
    // work can override the size via `coverSize` (e.g. "120%" to enlarge an
    // icon with built-in padding); defaults to "cover" for full-bleed images.
    const size = work.coverSize || "cover";
    const bg = work.cover
      ? `url('${work.cover}') center/${size} no-repeat var(--bg-deep)`
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

// --------------------------------------------------------------------------
// Lyrics + Liner Notes (case-study content per work)
// --------------------------------------------------------------------------
function renderLyrics() {
  const work = works[currentIndex];
  const lyrics = work.lyrics || [];

  // Hide both sections entirely when there are no lyrics
  if (!lyrics.length) {
    npLyrics.hidden = true;
    npPosts.hidden = true;
    return;
  }
  npLyrics.hidden = false;
  npPosts.hidden = false;

  lyricsList.innerHTML = lyrics
    .map(
      (l, i) => `
      <li class="lyric ${i === activeLyricIndex ? "is-active" : ""}"
          data-lyric-index="${i}">
        <span class="lyric-marker">
          <span class="lyric-num">${String(i + 1).padStart(2, "0")}</span>
          <span class="lyric-dot" aria-hidden="true"></span>
          <span class="lyric-eq" aria-hidden="true">
            <span></span><span></span><span></span>
          </span>
        </span>
        <span class="lyric-text">${escapeHtml(l.line)}</span>
      </li>`
    )
    .join("");

  renderLinerNotes();
}

// Quote echo + Designer's Note + User Voices for the active lyric.
// Posts grid is rendered by renderPosts() (called inside).
function renderLinerNotes() {
  const work = works[currentIndex];
  const lyric = (work.lyrics || [])[activeLyricIndex];
  if (!lyric) {
    quoteLine.textContent = "—";
    quoteQuestion.textContent = "—";
    designerNote.hidden = true;
    userVoices.hidden = true;
    postsContainer.innerHTML = "";
    return;
  }

  // Quote echo
  quoteLine.textContent = lyric.line;
  quoteQuestion.textContent =
    lyric.question || "Why this line shaped the design.";

  // Designer's Note
  if (lyric.note) {
    designerNote.hidden = false;
    designerNoteBody.textContent = lyric.note;
  } else {
    designerNote.hidden = true;
  }

  // User Voices
  if (lyric.voices && lyric.voices.length) {
    userVoices.hidden = false;
    voicesList.innerHTML = lyric.voices
      .map(
        (v) => `
        <li class="voice">
          <p class="voice-quote">${escapeHtml(v.quote || "")}</p>
          <div class="voice-meta">
            ${v.author ? `<span class="voice-author">${escapeHtml(v.author)}</span>` : ""}
            ${v.tag ? `<span class="voice-tag">${escapeHtml(v.tag)}</span>` : ""}
          </div>
        </li>`
      )
      .join("");
  } else {
    userVoices.hidden = true;
  }

  // Posts grid (existing)
  renderPosts();
}

function renderPosts() {
  const work = works[currentIndex];
  const lyric = (work.lyrics || [])[activeLyricIndex];
  if (!lyric) {
    postsContainer.innerHTML = "";
    postsMeta.textContent = "";
    return;
  }

  postsMeta.textContent =
    `${String(activeLyricIndex + 1).padStart(2, "0")} / ${String(work.lyrics.length).padStart(2, "0")}`;

  postsContainer.innerHTML = (lyric.posts || [])
    .map((p, postIdx) => {
      const id = postId(currentIndex, activeLyricIndex, postIdx);
      const liked = isLiked(id);
      const footer = `
        <div class="post-footer">
          <button class="post-like ${liked ? "is-liked" : ""}"
                  type="button"
                  data-action="like"
                  data-post-id="${id}"
                  aria-pressed="${liked}">
            ${HEART_SVG(liked)}
            <span class="post-like-count">${formatCount(getLikes(id))}</span>
          </button>
          <span class="post-views">
            ${EYE_SVG}
            <span class="post-view-count">${formatCount(getViews(id))}</span>
          </span>
        </div>`;

      if (p.type === "image") {
        const cap = p.caption
          ? `<p class="post-caption">${escapeHtml(p.caption)}</p>`
          : "";
        // src can be a string (single image, current behaviour) or an array
        // of strings (multiple images rendered side-by-side in a grid).
        const srcs = Array.isArray(p.src) ? p.src : [p.src];
        const imgs = srcs
          .map(
            (s) =>
              `<img src="${escapeAttr(s)}" alt="${escapeAttr(p.caption || "")}" loading="lazy">`
          )
          .join("");
        const inner = srcs.length > 1
          ? `<div class="post-image-row" data-count="${srcs.length}">${imgs}</div>`
          : imgs;
        return `
          <article class="post post-image" data-action="open" data-post-id="${id}">
            <div class="post-image-frame">
              ${inner}
              ${cap}
            </div>
            ${footer}
          </article>`;
      }
      const title = p.title
        ? `<h4 class="post-title">${escapeHtml(p.title)}</h4>`
        : "";
      return `
        <article class="post post-text" data-action="open" data-post-id="${id}">
          <div class="post-text-content">
            ${title}
            <p class="post-body">${escapeHtml(p.body || "")}</p>
          </div>
          ${footer}
        </article>`;
    })
    .join("");

  // Restart entry animation on the container so the swap feels intentional
  postsContainer.style.animation = "none";
  void postsContainer.offsetWidth; // force reflow
  postsContainer.style.animation = "";
}

function bindLyrics() {
  // Click a lyric → seek to that line's time slice + activate
  lyricsList.addEventListener("click", (e) => {
    const li = e.target.closest("[data-lyric-index]");
    if (!li) return;
    const i = Number(li.dataset.lyricIndex);
    setActiveLyric(i, { seek: true });
  });
}

// --------------------------------------------------------------------------
// Post card clicks (like + open modal)
// --------------------------------------------------------------------------
function bindPosts() {
  postsContainer.addEventListener("click", (e) => {
    const likeBtn = e.target.closest('[data-action="like"]');
    if (likeBtn) {
      e.stopPropagation();
      toggleLike(likeBtn.dataset.postId);
      return;
    }
    const card = e.target.closest('[data-action="open"]');
    if (card) openPostModal(card.dataset.postId);
  });
}

function toggleLike(id) {
  const next = !isLiked(id);
  setLiked(id, next);
  syncLikeUI(id);
}

// Updates every DOM node that displays this post's like state (cards + modal)
function syncLikeUI(id) {
  const liked = isLiked(id);
  const count = formatCount(getLikes(id));
  document
    .querySelectorAll(`[data-action="like"][data-post-id="${id}"]`)
    .forEach((btn) => {
      btn.classList.toggle("is-liked", liked);
      btn.setAttribute("aria-pressed", String(liked));
      const path = btn.querySelector("svg path");
      if (path) path.setAttribute("fill", liked ? "currentColor" : "none");
      const c = btn.querySelector(".post-like-count");
      if (c) c.textContent = count;
    });
  if (currentModalPostId === id) {
    postModalLike.classList.toggle("is-liked", liked);
    postModalLike.setAttribute("aria-pressed", String(liked));
    const path = postModalLike.querySelector("svg path");
    if (path) path.setAttribute("fill", liked ? "currentColor" : "none");
    postModalLikeCount.textContent = count;
  }
}

// --------------------------------------------------------------------------
// Post detail modal
// --------------------------------------------------------------------------
let currentModalPostId = null;

function openPostModal(id) {
  const [w, l, p] = parsePostId(id);
  const post = works[w]?.lyrics?.[l]?.posts?.[p];
  if (!post) return;

  // Bump views (per-visit increment), persist, sync card
  const newViews = bumpViews(id);
  document
    .querySelectorAll(`[data-post-id="${id}"] .post-view-count`)
    .forEach((el) => (el.textContent = formatCount(newViews)));

  currentModalPostId = id;

  // Render content
  if (post.type === "image") {
    const srcs = Array.isArray(post.src) ? post.src : [post.src];
    const imgs = srcs
      .map(
        (s) =>
          `<img src="${escapeAttr(s)}" alt="${escapeAttr(post.caption || "")}">`
      )
      .join("");
    const inner = srcs.length > 1
      ? `<div class="post-image-row" data-count="${srcs.length}">${imgs}</div>`
      : imgs;
    postModalBody.innerHTML = `
      ${inner}
      ${post.caption ? `<div class="modal-text-content"><p>${escapeHtml(post.caption)}</p></div>` : ""}
    `;
  } else {
    postModalBody.innerHTML = `
      <div class="modal-text-content">
        ${post.title ? `<h3>${escapeHtml(post.title)}</h3>` : ""}
        <p>${escapeHtml(post.body || "")}</p>
      </div>
    `;
  }

  postModalLikeCount.textContent = formatCount(getLikes(id));
  postModalViewCount.textContent = formatCount(newViews);
  postModalLike.classList.toggle("is-liked", isLiked(id));
  postModalLike.setAttribute("aria-pressed", String(isLiked(id)));
  const path = postModalLike.querySelector("svg path");
  if (path) path.setAttribute("fill", isLiked(id) ? "currentColor" : "none");

  postModal.hidden = false;
  postModalBody.scrollTop = 0;
}

function closePostModal() {
  postModal.hidden = true;
  currentModalPostId = null;
}

function bindPostModal() {
  postModalClose.addEventListener("click", closePostModal);
  postModalBackdrop.addEventListener("click", closePostModal);
  postModalLike.addEventListener("click", () => {
    if (currentModalPostId) toggleLike(currentModalPostId);
  });
  document.addEventListener("keydown", (e) => {
    if (!postModal.hidden && e.code === "Escape") closePostModal();
  });
}

// Each lyric occupies an equal slice of the track's duration.
// Could be replaced with explicit per-line timestamps later if desired.
function lyricIndexForTime(seconds) {
  const work = works[currentIndex];
  const lyrics = work.lyrics || [];
  if (!lyrics.length) return 0;
  const total = durationToSeconds(work.duration);
  const slice = total / lyrics.length;
  return Math.min(lyrics.length - 1, Math.floor(seconds / slice));
}

function lyricStartTime(index) {
  const work = works[currentIndex];
  const lyrics = work.lyrics || [];
  if (!lyrics.length) return 0;
  const total = durationToSeconds(work.duration);
  return Math.floor((total / lyrics.length) * index);
}

function setActiveLyric(i, { seek = false } = {}) {
  const work = works[currentIndex];
  const lyrics = work.lyrics || [];
  if (!lyrics.length) return;
  i = Math.max(0, Math.min(lyrics.length - 1, i));
  if (i === activeLyricIndex && !seek) return;

  activeLyricIndex = i;
  if (seek) {
    progressSeconds = lyricStartTime(i);
    renderProgress();
  }
  // Toggle active class without re-rendering the whole list (preserves animations)
  lyricsList.querySelectorAll(".lyric").forEach((el) =>
    el.classList.toggle(
      "is-active",
      Number(el.dataset.lyricIndex) === activeLyricIndex
    )
  );
  renderLinerNotes();
}

function syncActiveLyricToTime() {
  const i = lyricIndexForTime(progressSeconds);
  if (i !== activeLyricIndex) setActiveLyric(i);
}

// Tiny HTML escaping for user-authored content
function escapeHtml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
function escapeAttr(s) {
  return escapeHtml(s).replace(/"/g, "&quot;");
}

// --------------------------------------------------------------------------
// Post engagement: each post is a "social-style" card with likes + views,
// persisted in localStorage (keyed by `${workIdx}.${lyricIdx}.${postIdx}`).
// Initial counts are deterministic from the ID hash so each post has
// stable, varied "starting" numbers without manual data entry.
// --------------------------------------------------------------------------
function postId(w, l, p) { return `${w}.${l}.${p}`; }
function parsePostId(id) { return id.split(".").map(Number); }

function hashId(s) {
  let h = 5381;
  for (let i = 0; i < s.length; i++) h = ((h * 33) + s.charCodeAt(i)) | 0;
  return Math.abs(h);
}
function initialLikes(id) { return 28 + (hashId(id) % 220); }      // 28–247
function initialViews(id) { return 640 + (hashId(id + ":v") % 4200); } // 640–4839

function getViews(id) {
  const v = localStorage.getItem(`px-views:${id}`);
  return v ? Number(v) : initialViews(id);
}
function bumpViews(id) {
  const next = getViews(id) + 1;
  localStorage.setItem(`px-views:${id}`, String(next));
  return next;
}
function isLiked(id) { return localStorage.getItem(`px-liked:${id}`) === "1"; }
function setLiked(id, liked) {
  if (liked) localStorage.setItem(`px-liked:${id}`, "1");
  else localStorage.removeItem(`px-liked:${id}`);
}
function getLikes(id) { return initialLikes(id) + (isLiked(id) ? 1 : 0); }

function formatCount(n) {
  if (n < 1000) return String(n);
  if (n < 1e6) {
    const k = n / 1000;
    return (k < 10 ? k.toFixed(1) : k.toFixed(0)).replace(/\.0$/, "") + "k";
  }
  return (n / 1e6).toFixed(1).replace(/\.0$/, "") + "M";
}

// SVG markup helpers (kept here so the renderer is self-contained)
const HEART_SVG = (filled) => `
  <svg class="post-like-icon" viewBox="0 0 24 24" width="15" height="15" aria-hidden="true">
    <path d="M12 21l-1.5-1.4C5 14.4 2 11.7 2 8.5 2 5.4 4.4 3 7.5 3c1.7 0 3.4.8 4.5 2 1.1-1.2 2.8-2 4.5-2C19.6 3 22 5.4 22 8.5c0 3.2-3 5.9-8.5 11.1L12 21z"
      stroke="currentColor" stroke-width="1.7" fill="${filled ? "currentColor" : "none"}"/>
  </svg>`;
const EYE_SVG = `
  <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
    <path fill="currentColor" d="M12 5C7 5 2.7 8.1 1 12c1.7 3.9 6 7 11 7s9.3-3.1 11-7c-1.7-3.9-6-7-11-7zm0 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-8a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"/>
  </svg>`;

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
        <span class="queue-sub">
          <a class="queue-artist" data-view="contact" href="#">${ARTIST}</a>
          <span class="queue-sub-sep">·</span> ${work.subtitle}
        </span>
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
  activeLyricIndex = 0;
  applyDiscStates();
  updateNowPlaying();
  renderLyrics();
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

  // Per-track light/dark theme — flips bg, text, glass surfaces, blob blend mode.
  // Fallback to dark when a work doesn't declare `theme` (placeholders, etc).
  document.documentElement.dataset.theme = work.theme || "dark";

  // Fade content
  [npTitle, npSubtitle, npDescription].forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(6px)";
  });

  setTimeout(() => {
    npTitle.textContent = work.title;
    npSubtitle.innerHTML =
      `<a class="np-artist" data-view="contact" href="#">${ARTIST}</a>` +
      ` <span class="np-sep">·</span> ${work.subtitle}`;
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

  // Profile pane mirrors the active track in its "Now Listening To" row
  const gradient = `linear-gradient(135deg, ${work.accent1}, ${work.accent2})`;
  profileNowThumb.style.background = work.cover
    ? `url('${work.cover}') center/cover no-repeat, ${gradient}`
    : gradient;
  profileNowTitle.textContent = work.title;
  profileNowSub.textContent = work.subtitle;
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
    syncActiveLyricToTime();
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
    if (!introDismissed) return;     // intro absorbs keys until dismissed
    if (!postModal.hidden) return;   // modal absorbs keys (ESC handled separately)
    if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;
    if (e.code === "Space") { e.preventDefault(); togglePlay(); }
    if (e.code === "ArrowLeft") selectIndex(currentIndex - 1);
    if (e.code === "ArrowRight") selectIndex(currentIndex + 1);
  });
}

// --------------------------------------------------------------------------
// Intro / welcome overlay
// --------------------------------------------------------------------------
// Default to play=true so the disc starts spinning no matter how the user
// dismisses the intro (CTA, keyboard, anything else added later). The "paused
// disc" state is reachable from the play button after dismiss — there's no
// product reason for a paused intro-exit.
function dismissIntro({ play = true } = {}) {
  if (introDismissed) return;
  introDismissed = true;
  intro.classList.add("intro--exit");
  setTimeout(() => intro.remove(), 900);
  if (play && !isPlaying) togglePlay();
}

function bindIntro() {
  introCta.addEventListener("click", () => dismissIntro({ play: true }));
  // Bubble-phase listener on window — fires AFTER document handlers,
  // so the main keydown's `if (!introDismissed) return` short-circuits cleanly.
  window.addEventListener("keydown", () => {
    if (!introDismissed) dismissIntro({ play: true });
  });
}

// --------------------------------------------------------------------------
// View switcher (Library ↔ Contact). Triggered by any <a>/<button> with
// [data-view], which lets nav links AND in-content artist links both work.
// --------------------------------------------------------------------------
function switchView(view) {
  if (!view) return;
  stage.dataset.view = view;
  document.querySelectorAll(".nav-link").forEach((l) =>
    l.classList.toggle("is-active", l.dataset.view === view)
  );
}

function bindNav() {
  // Capture phase so this fires before any bubbling listener (e.g. a queue
  // item's "play this track" handler) — clicking the artist link inside a
  // queue row should switch view, not switch tracks.
  document.addEventListener(
    "click",
    (e) => {
      const target = e.target.closest("a[data-view], button[data-view]");
      if (!target) return;
      e.preventDefault();
      e.stopPropagation();
      switchView(target.dataset.view);
    },
    true
  );
}

// --------------------------------------------------------------------------
// Init
// --------------------------------------------------------------------------
function init() {
  buildDiscStack();
  buildQueue();
  applyDiscStates();
  updateNowPlaying();
  renderLyrics();
  renderProgress();
  bindControls();
  bindIntro();
  bindNav();
  bindLyrics();
  bindPosts();
  bindPostModal();
  enableWheelAndSwipe();
}

init();
