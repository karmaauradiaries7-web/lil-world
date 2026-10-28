/* =====================================================================
   CONFIG — edit names, messages and paths here. Use a blank line (\n\n)
   inside a message to start a new paragraph.
   ===================================================================== */
const CFG = {
  name: "Fami", nick: "Ammu", pet: "Bubu",      // "Ammu"/"Bubu" in any text below are swapped for these
  year: 2026,                                      // "2026" in any text is swapped for this
  music: "audio/love%20song.mp3.mp3",
  whispers: ["Love you 3000 times","Ammu","Chello","Buju","Bubu","Honey","Barbie","Doll"],
  opening: {
    title: "For My Ammu… ❤️", cine: "If I Could Replay Tonight…",
    sub: "A little world made from things I should have said, feelings I should have shown, and apologies I owe you.",
    hand: "Some things deserve more than just a message.", btn: "Enter our little world →"
  },
  ch1a: { title: "I'm sorry for the way I treated you, Bubu. 🥺", text:
`My love,

There were some problems in my room that day, and I was feeling stressed and frustrated. You messaged me at that exact moment, but instead of managing my feelings properly, I let that tension affect the way I spoke to you.

You were just coming to talk to me, Ammu. You didn't deserve to receive my frustration.

I should have told you that I was having a difficult moment. I should have taken a breath and spoken to you gently. My problems were mine to handle, and it wasn't fair to let them affect you.

I'm sorry for that behaviour, thangoo. ❤️‍🩹` },
  ch1b: { caption: "some presences ignite a spark within u", text:
`Ammu, you had posted that story to express something beautiful about my presence in your life.

But because of an Instagram bug, the caption wasn't visible to me. Instead of asking you what you meant, I assumed things and said that maybe it wasn't specifically for me.

I understand why that hurt you. You were celebrating a happy moment and expressing your feelings, but I made you feel like your moment wasn't special to me.

I'm sorry, dear Ammu.

I should have asked instead of assuming. I should have understood your heart instead of questioning your feelings.

I wanted to make you happy, but I ended up hurting you. I don't want to repeat that pattern.`,
    choices: [
      ["What I did: assumed instead of asking.", "I filled the silence with my own guesses, and my guess was unkind. Your words deserved a question, not a theory."],
      ["What I want to learn: ask gently and understand.", "When I don't understand something, I'll ask softly and listen to the answer, before I decide what it means."]],
    close: "Sorry for this behaviour, thangoo. I'm starting to work on making these behaviours healthier, one little change at a time. Sorry, Bubu maa. ❤️" },
  ch2: { title: "I'm sorry for letting my fear speak louder than my trust.", text:
`Sorry for this behaviour, Ammu. ❤️‍🩹

I got overexcited and possessive, and I reacted before properly thinking about your side of the situation.

I should have understood that you're building your network and your future. You can meet people, learn from them, and build professional connections without me assuming the worst.

If something makes me uncomfortable, I should talk to you honestly and respectfully. I shouldn't take control of a situation, speak on your behalf, or make decisions for you.

I'm sorry for not thinking about your perspective, dear.

I don't want my love to become something that makes you feel restricted. I want to build a healthier way of handling my feelings, communicating my concerns, and respecting your independence.

I'm starting to transform these behaviours into healthier ones, thangoo. Not just saying sorry today, but learning to act differently tomorrow.

Sorry, Bubu maa. ❤️`,
    ask: "What does healthy love look like?",
    choices: [
      ["React from fear.", "Fear can make me react before I understand. That is something I need to work on."],
      ["Talk, listen, and respect each other.", "This is the kind of relationship I want to build: honest communication, trust, healthy boundaries, and respect for both our feelings."]] },
  conch: { title: "A little piece of your trip, a huge piece of my heart.", sub: "The gift I should have celebrated out loud.",
    card: "Something small you carried home. Something huge you gave my heart.", btn: "Discover this memory 🐚",
    kicker: "Memory — after the apologies, the gifts I should have celebrated out loud",
    ack: "I'm sorry I didn't express my happiness properly when you gave me this.",
    ask: "What my heart felt when you gave it to me…", go: "Let me tell you what I felt… ✨", next: "Carry this memory to the next chapter →",
    msg:
`Ammu, enakku romba pudicha vishayam enna theriyuma?

Nee enakkaaga something romba unique-ah pannuva. Adhaan idhu.

Even though you were on a trip, nee enna nenachu, enakkaaga indha conch shell-a eduthu vechuttu vandhirukka.

Adhu dhaan enakku romba azhagu, alagey. Nee enakkaaga kudukkura importance, nee kaattura care — adhu dhaan romba precious.

Such a cutiee daa, Ammu. ❤️

I was genuinely so happy. It was the kind of moment that could bring tears to my eyes because of how loved and remembered I felt.

I'm sorry I didn't express that happiness properly. I wanted to do something unique, but I should have let you feel my happiness instead of keeping it inside for so long.

Love you 3000 times, hone maa. ❤️‍🩹` },
  star: { title: "The little star I see every morning.", sub: "You made something with your hands, and it became part of my everyday life.",
    card: "A little piece of your effort that became part of my everyday life.", btn: "Open the little star box ⭐",
    kicker: "Memory — a gift that became part of my every morning",
    ack: "I should have told you much sooner how much this meant to me.",
    ask: "Do you know what this little star means to me?", go: "Show Ammu my little morning ritual ☀️",
    msg:
`Ammu, you know something?

Daily morning andha lucky star-ah paathuthaan wake up aaguven. ❤️

So many stars irundhaalum, nee enakkaaga senja indha little star enakku oru maathiri wow, Ammu.

Nee evlo effort pottu, evlo patience-ah idha senjirukka nu nenacha romba special-ah irukku.

Nee senja ovvoru effort-um ninnu pesudhu, mailu. Nee romba alagu, mu. Un heart-la irukkura care-um effort-um innum alagu.

Ammu, nee enakkaaga senja indha little star en daily morning-oda oru special part aayiduchu.

Andha stars-la irukkura imperfections kooda enakku special. Because it was made by you, with your hands and your effort.

Ammu, nee great paapa. ❤️

Idha paakkumbodhellam, nee enakkaaga evlo effort edukka ready-ah irukka nu nenappen. I know I didn't always express my happiness properly, and I'm genuinely sorry for letting that feeling stay unspoken for so long.

I'm sorry, Ammu. You deserved to know how much this meant to me.

Love you 3000 times, honey maa. ❤️`,
    line: "Some gifts don't just sit in a box. They become part of our everyday life.", next: "Continue to my promises →" },
  final: { text:
`Ammu, there's one more thing I want you to know…

I didn't make this just to say sorry.

I wanted my efforts to reach you, the same way your little efforts have reached my heart.

I've been trying to create this webpage for 10 days, because I know how much you love it when I put effort into something for you.

Ithelaam naa yen sollalana, something… the efforts need to reach you, Ammu.

Indha webpage create panna 10 days-ah try panni irukken, because ennoda efforts unakku romba pudikkum nu enakku theriyum.

Nee enakkaaga senja chinna chinna things ellam enakku evlo special nu unakku theriyanum. Adha naan correct-ah express pannala naalum, adhu en heart-ku reach aagala nu artham illa.

I wanted to make something that could hold all the things I couldn't express properly — my apologies, my happiness, and the love I have for you.

This is my little way of showing you that I'm learning, I'm trying, and I want my actions to speak more clearly than my words.

Love you 3000 times, Ammu. ❤️`, next: "Meet the little teddy →" },
  teddy: { text:
`My Ammu, my Chello, my Bubu… ❤️

I'm sorry for the moments when I didn't handle things well.

Thank you for the little things you do, the effort you put into making me happy, and the love you express in your own beautiful ways.

I want to keep learning how to understand you, respect you, and show you how much those things mean to me.

You don't have to be okay immediately. Take your time, my love. I'm here to listen.`,
    btn: "Sending you the softest teddy-bear hug 🧸", after: "Biggest hug, tiniest teddy, all my love.\n\nLove you 3000 times, honey maa. ❤️" }
};

/* ---- CONFIG (continued): the journey timeline. Edit text, dates and memory cards here. ---- */
CFG.journey = {
  title: "Two Hearts. One Journey. A Thousand Little Memories.",
  sub: "From two separate dreams to shared struggles, little memories, and a future we're still working towards.",
  intro: "Every journey has its beautiful moments, difficult chapters, and things we wish we had done differently.\n\nThis is a little story about ours.",
  btn: "Travel through our memories →",
  j1: { date: [1, 5], title: "She came to Dubai carrying a dream.",
    a: `January 5, 2026.\n\nAmmu came from India to Dubai with hopes, dreams, and the courage to start something new.\n\nShe began searching for jobs, attending interviews, and trying to build a future for herself.\n\nShe was stepping into a new place, facing uncertainty, and doing her best to find her opportunity.`,
    b: `Then the situation changed. The war-related disruption and uncertainty you described affected recruitment, and many opportunities seemed to slow down or disappear.\n\nThe waiting, uncertainty, and repeated effort made the journey difficult.\n\nBut her story wasn't over. She kept trying.`,
    close: "Ammu, I hope you know how much courage it takes to keep going when things don't happen as planned. I'm proud of the effort you put into building your future." },
  j2: { date: [4, 6], title: "Two people, one city, and a dream we shared.",
    text: `April 6, 2026.\n\nI travelled from India to Dubai to meet you.\n\nWe were both searching for a better future. This time, we were facing the journey together.\n\nWe searched for jobs, discussed opportunities, encouraged each other, and tried to figure things out in a new place.\n\nThere were ordinary days that became special because we shared them. There were little adventures, laughter, affectionate moments, and private memories that belonged only to us.\n\nWe were learning about life, about responsibility, about each other, and about what it means to keep moving forward when the future isn't clear.`,
    cards: [["The days we searched together", "Scrolling through openings side by side, cheering each other on after every try. Those ordinary days are some of my favourite memories."],
            ["The little moments that became memories", "Small adventures, laughter that came out of nowhere, and affection that belonged only to us."],
            ["The comfort of having you beside me", "In a new city with an uncertain future, having you near made everything feel calmer. You feel like home, Ammu."]],
    close: "Dubai wasn't just a place where we were looking for jobs. It became a place where our story gained more chapters." },
  j3: { title: "The job that taught us more than we expected.",
    steps: ["Looking for work", "Finding a sales job", "Learning unfamiliar responsibilities", "Managing a low salary", "Experiencing workplace stress", "Growing through it"],
    text: `Eventually, we found a job in sales.\n\nIt wasn't the salary we dreamed of, and the work brought its own pressures. We had to learn, adapt, manage stress, and understand the realities of working life.\n\nSome days were mentally exhausting. Some experiences challenged us physically and emotionally.\n\nBut we also learned things that a classroom could never fully teach us: patience, responsibility, communication, resilience, and how much we still wanted to achieve.\n\nThat job wasn't the destination. It was one part of our journey.`,
    miles: [["Low salary", "A reminder of what we want to improve."], ["Work stress", "A lesson in managing pressure."], ["New responsibilities", "A chance to grow."], ["Lessons learned", "Experience we can carry into the future."]],
    note: "Low pay and constant stress aren't things we have to accept forever. We're working towards better." },
  j4: { title: "Different places, but you were still in my thoughts.",
    a: `September arrived, and we travelled back to India for graduation.\n\nYou also went on your trips, including Varkala and other places in Kerala.\n\nWe had different experiences, different moments, and our own things to do.\n\nAnd during that time, I found myself thinking about you a lot.\n\nI missed you, thought about our memories, and kept remembering the little things that made you special to me.\n\nSometimes, when I care deeply about someone, I struggle to express my feelings in the healthiest way. I can become overly focused on them, or allow my own worries to affect how I react.\n\nI'm learning that loving you means giving you space, trusting you, respecting your independence, and communicating my feelings without turning them into pressure.`,
    notes: ["A little memory.", "A moment I missed.", "Something I wanted to tell you.", "A feeling I should have expressed better."],
    b: "And then we came back to Dubai, back to the job search and the everyday life we were building, carrying everything we'd learned.\n\nAnd then came the little things you brought back, the story you posted, and the feelings I didn't express properly.", btn: "Continue →" },
  future: { title: "Our Next Chapter — Two Careers, One Hopeful Future 🌅", sub: "We are still building the life we dream about.",
    present: "Right now, we are searching for jobs separately. We each have our own goals, and we are working towards opportunities that can give us better stability, confidence, and growth.",
    legend: ["Learning and improving skills", "Searching and applying for jobs", "Preparing for interviews", "Attending interviews", "Building experience and confidence", "Working towards a better salary and more stability"],
    states: ["Learning", "Applying", "Interviewing", "New Opportunities", "Career Growth"],
    msg: `Ammu, I hope we both find the jobs we truly deserve.\n\nI hope we grow into roles that value our skills, give us better salaries, and help us build more secure futures.\n\nI hope we celebrate each other's achievements, make our families happy, and create so many more beautiful memories.\n\nWe don't know exactly how everything will happen, but we can keep learning, applying, improving, and moving forward.\n\nDifferent paths for now, but a future full of possibilities. ❤️`,
    shared: ["Career achievements", "Financial stability", "Family happiness", "Peaceful everyday moments", "Future trips and shared memories"],
    btn: "See my final little surprise →" }
};
CFG.promises = { title: "Little promises from my heart", intro: "I know promises matter only when my actions follow them. These are little things I want to practise, not just pretty words.",
  items: ["I'll ask instead of assuming.", "I'll listen to understand your feelings, not to defend myself.", "I'll tell you when I'm having a hard moment, instead of letting my stress spill onto you.", "I'll talk to you privately and respectfully when something bothers me, instead of taking control or speaking for you.", "I'll respect your independence, your career, and the connections you build.", "I'll celebrate your little efforts out loud, instead of waiting for the perfect moment."],
  btn: "Continue to our next chapter →" };

/* ===================== helpers ===================== */
const $ = (s, r = document) => r.querySelector(s), app = $("#app"), fx = $("#fx");
const calm = matchMedia("(prefers-reduced-motion: reduce)").matches;
const t = s => s.replaceAll("Ammu", CFG.nick).replaceAll("Bubu", CFG.pet).replaceAll("2026", CFG.year);
const el = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; };
const btn = (label, fn, cls = "") => { const b = el("button", "btn " + cls); b.textContent = t(label); b.onclick = fn; return b; };
const wait = ms => new Promise(r => setTimeout(r, calm ? 0 : ms));
const SC = {}, seen = new Set(); let cur, from = null;
const MARKS = [["Journey", ["j1","j2","j3","j4"]], ["Apology 1", ["ch1a","ch1b"]], ["Apology 2", ["ch2"]], ["Shell", ["conch"]], ["Star", ["star"]], ["Promises", ["promises"]], ["Future", ["future"]]];
function marks() { $("#marks").innerHTML = MARKS.map(([n, ids]) => { const on = ids.some(i => seen.has(i)); return `<li class="${on ? "on" : ""}" aria-label="${n}${on ? ", explored" : ", not yet explored"}">${n}</li>`; }).join(""); }
const backBtn = () => btn("Back to the story map", go("map"), "ghost");
let arriving = false;

/* Reveals paragraphs one by one; "Read the whole message" skips the wait. */
function story(parent, text, after) {
  const box = el("div", "story"), ps = t(text).split("\n\n").map(x => { const p = el("p", "ln"); p.textContent = x; box.appendChild(p); return p; });
  const skip = btn("Read the whole message", () => finish(), "ghost"); let i = 0, tm, done = false;
  parent.append(box, skip);
  const finish = () => { if (done) return; done = true; clearTimeout(tm); ps.forEach(p => p.classList.add("on")); skip.remove(); after && after(); };
  const step = () => { if (done) return; if (i >= ps.length) return finish(); const p = ps[i++]; p.classList.add("on"); tm = setTimeout(step, Math.min(2800, 1000 + p.textContent.length * 22)); };
  calm ? finish() : setTimeout(step, 300);
}
/* Two reflective choices; `first` fires after the first one is picked. */
function choices(parent, ask, defs, first) {
  if (ask) parent.appendChild(el("p", "hand", t(ask)));
  const row = el("div", "row"), out = el("p", "reflect"); out.setAttribute("aria-live", "polite"); let n = 0;
  defs.forEach(([label, reflect]) => row.appendChild(btn(label, () => { out.textContent = t(reflect); if (!n++) first && first(); }, "ghost")));
  parent.append(row, out);
}
function show(id) {
  cur = id; const s = el("section", "scene"); s.id = "s-" + id; SC[id](s);
  app.replaceChildren(s); document.body.dataset.t = s.dataset.t || "night";
  $("#home").hidden = id === "intro"; $("#marks").hidden = id === "intro"; seen.add(id); marks(); scrollTo(0, 0);
  const h = $("h1,h2", s); if (h) { h.tabIndex = -1; h.focus({preventScroll: true}); }
  if (location.hash !== "#" + id) location.hash = id;
}
const go = id => () => show(id);
function sparkTrail(a, b, ms, cb, glyph) {
  const s = el("span", glyph ? "spark glyph" : "spark"); if (glyph) s.textContent = glyph; fx.appendChild(s); const t0 = performance.now(); let n = 0;
  (function f(now) {
    const k = Math.min(1, (now - t0) / ms), e = k * k * (3 - 2 * k);
    const x = a.x + (b.x - a.x) * e, y = a.y + (b.y - a.y) * e - Math.sin(k * Math.PI) * 120;
    s.style.transform = `translate(${x}px,${y}px)`;
    if (n++ % 2 === 0) { const d = el("span", "dot"); d.style.transform = `translate(${x}px,${y}px)`; fx.appendChild(d); setTimeout(() => d.remove(), 900); }
    k < 1 ? requestAnimationFrame(f) : (s.remove(), cb && cb());
  })(t0);
}
const center = e => { const r = e.getBoundingClientRect(); return {x: r.left + r.width / 2, y: r.top + r.height / 2}; };
function heartDots(box, n = 38, k = 5.2) {
  for (let i = 0; i < n; i++) {
    const a = i / n * Math.PI * 2, x = 16 * Math.sin(a) ** 3, y = -(13 * Math.cos(a) - 5 * Math.cos(2 * a) - 2 * Math.cos(3 * a) - Math.cos(4 * a));
    const d = el("i"); d.style.transform = `translate(${x * k}px,${y * k - 8}px)`; d.style.animationDelay = (calm ? 0 : i * 45) + "ms"; box.appendChild(d);
  }
}
function floatHearts(n = 8) {
  for (let i = 0; i < n; i++) { const h = el("span", "fh", ["❤️","💗","🌸","✨"][i % 4]); h.style.left = 20 + Math.random() * 60 + "%"; h.style.animationDelay = i * 150 + "ms"; fx.appendChild(h); setTimeout(() => h.remove(), 5200); }
}

/* ===================== illustrations (inline SVG) ===================== */
const STAR = (x, y, s, fill, r = 0) => `<polygon transform="translate(${x} ${y}) rotate(${r}) scale(${s})" fill="${fill}" points="0,-50 12,-16 48,-16 19,6 30,40 0,20 -30,40 -19,6 -48,-16 -12,-16"/>`;
const SHELL = (x, y, s) => `<g transform="translate(${x} ${y}) scale(${s})"><ellipse cx="0" cy="62" rx="70" ry="9" fill="#00000022"/><path d="M-60 40C-75-5-35-55 25-50 70-44 85 0 55 35 30 62-45 70-60 40Z" fill="url(#sg)"/><path d="M-40 30C-30-5 5-30 50 -12M-30 48C-5 20 25 5 62 18M-50 12C-35-20-5-38 25-36" fill="none" stroke="#c98a9b" stroke-width="3"/><path d="M-70 30Q-95 20-88 5Q-70 15-58 22Z" fill="#f3c1ca"/><ellipse cx="45" cy="30" rx="22" ry="14" fill="#f6a9b8"/></g>`;
const DEFS = `<defs><linearGradient id="sg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff6ea"/><stop offset="1" stop-color="#e9a8b5"/></linearGradient><radialGradient id="gl"><stop offset="0" stop-color="#ffe9a8" stop-opacity=".9"/><stop offset="1" stop-color="#ffe9a8" stop-opacity="0"/></radialGradient></defs>`;
const SVG = (vb, inner, label, cls = "") => `<svg class="${cls}" viewBox="${vb}" role="img" aria-label="${label}">${DEFS}${inner}</svg>`;
const ART = {
  shellClose: () => SVG("0 0 260 220", `<rect width="260" height="220" rx="14" fill="#f2c9a4"/><path d="M0 150Q65 130 130 150T260 150V220H0Z" fill="#8fb6c9" opacity=".7"/><path d="M0 170Q65 150 130 170T260 170V220H0Z" fill="#f7dcc0"/>${SHELL(130, 110, 1.05)}`, "A close-up of a pink conch shell on blush sand"),
  shellKeep: () => SVG("0 0 260 220", `<rect width="260" height="220" rx="14" fill="#3b1a45"/><circle cx="130" cy="110" r="110" fill="url(#gl)"/><rect x="40" y="150" width="180" height="44" rx="12" fill="#8a4a6b"/><ellipse cx="130" cy="152" rx="80" ry="12" fill="#e8c27a" opacity=".6"/>${SHELL(130, 100, .8)}${STAR(48, 40, .12, "#e8c27a")}${STAR(220, 60, .1, "#e8c27a")}${STAR(200, 20, .08, "#fff")}`, "The conch shell resting in a softly glowing keepsake box"),
  starsClose: () => SVG("0 0 260 220", `<rect width="260" height="220" rx="14" fill="#f3d9c2"/>${STAR(75, 70, .8, "#e8c27a", -10)}${STAR(180, 80, .65, "#e9a8b5", 14)}${STAR(120, 160, .75, "#fff6ea", 6)}${STAR(210, 168, .45, "#c98a9b", -20)}${STAR(40, 170, .45, "#9fb8ff", 20)}`, "Handmade paper stars up close"),
  starBox: () => SVG("0 0 260 220", `<rect width="260" height="220" rx="14" fill="#40204f"/><polygon points="95,150 165,150 230,0 30,0" fill="url(#gl)"/><rect x="70" y="150" width="120" height="55" rx="8" fill="#c98a9b"/><g transform="rotate(-62 190 150)"><rect x="70" y="140" width="120" height="14" rx="6" fill="#e8c27a"/></g>${STAR(110, 100, .22, "#e8c27a")}${STAR(150, 70, .18, "#fff6ea")}${STAR(130, 36, .14, "#e8c27a")}${STAR(60, 60, .1, "#fff")}`, "A keepsake box opening with golden light and tiny stars rising"),
  envelope: () => SVG("0 0 200 150", `<rect x="20" y="50" width="160" height="90" rx="8" fill="#c98a9b"/><rect class="sheet" x="35" y="55" width="130" height="70" rx="4" fill="#fff6ea"/><text class="sheet" x="100" y="100" text-anchor="middle" font-size="26">❤️</text><polygon points="20,140 100,90 180,140" fill="#d9a0ae"/><polygon class="flap" points="20,50 100,100 180,50 100,22" fill="#e8b4c0"/>`, "A romantic envelope opening", "env"),
  bedroom: () => SVG("0 0 320 190", `<rect width="320" height="190" rx="14" fill="#2a1233"/><rect x="190" y="20" width="100" height="90" rx="6" fill="#1b2a55" stroke="#c98a9b" stroke-width="3"/><g><line class="rain" x1="210" y1="26" x2="210" y2="104"/><line class="rain" x1="235" y1="26" x2="235" y2="104" style="animation-delay:.3s"/><line class="rain" x1="262" y1="26" x2="262" y2="104" style="animation-delay:.6s"/></g><rect x="10" y="120" width="170" height="50" rx="10" fill="#6b2f55"/><rect x="10" y="108" width="60" height="24" rx="10" fill="#fff6ea" opacity=".8"/><rect x="215" y="140" width="80" height="12" rx="3" fill="#8a4a6b"/><path d="M250 138h12l6-26h-24Z" fill="#e8c27a"/><rect x="254" y="138" width="4" height="4" fill="#e8c27a"/><circle class="lampglow" cx="256" cy="110" r="60" fill="url(#gl)"/><text class="hglow" x="256" y="116" text-anchor="middle" font-size="64" style="filter:drop-shadow(0 0 12px #ff8aa8)">❤️</text>`, "A cozy bedroom at night with rain at the window and a glowing lamp"),
  skyline: () => SVG("0 0 320 170", `<rect width="320" height="170" rx="14" fill="#2a1233"/>${[[20,70,26],[52,40,22],[80,90,24],[110,20,16],[130,60,26],[162,80,22],[190,50,28],[224,30,18],[246,74,26],[278,56,26]].map(([x,y,w])=>`<rect x="${x}" y="${y}" width="${w}" height="${170-y}" fill="#4a2150"/><rect x="${x+5}" y="${y+10}" width="4" height="6" fill="#e8c27a"/><rect x="${x+w-10}" y="${y+26}" width="4" height="6" fill="#e8c27a"/>`).join("")}<g class="net"><line x1="60" y1="60" x2="140" y2="30"/><line x1="140" y1="30" x2="200" y2="62"/><line x1="200" y1="62" x2="260" y2="40"/><line x1="140" y1="30" x2="170" y2="100"/><line x1="60" y1="60" x2="90" y2="110"/></g><circle cx="60" cy="60" r="4" fill="#ffd9e2"/><circle cx="140" cy="30" r="4" fill="#ffd9e2"/><circle cx="200" cy="62" r="4" fill="#ffd9e2"/><circle cx="260" cy="40" r="4" fill="#ffd9e2"/>`, "A Dubai-inspired night skyline with soft glowing connection lines"),
  bedside: () => SVG("0 0 320 210", `<rect class="sky" x="0" y="0" width="320" height="210" rx="14"/><rect x="30" y="20" width="110" height="90" rx="6" fill="#ffffff22" stroke="#fff6ea" stroke-width="3"/><rect x="0" y="160" width="320" height="50" fill="#8a4a6b"/><circle cx="240" cy="120" r="26" fill="#fff6ea" stroke="#c98a9b" stroke-width="3"/><text x="240" y="126" text-anchor="middle" font-size="16" fill="#2a1233">6:30</text><g class="sil">${STAR(200, 78, .28, "#e8c27a")}</g><rect x="110" y="140" width="80" height="30" rx="5" fill="#c98a9b"/><g class="risen">${STAR(150, 140, .3, "#e8c27a")}</g><g class="lid"><rect x="106" y="134" width="88" height="10" rx="4" fill="#e8c27a"/></g>`, "A bedside table with a keepsake box and a morning window", "bed"),
  teddy: () => SVG("0 0 260 270", `<circle class="tglow" cx="130" cy="140" r="130" fill="url(#gl)"/><ellipse cx="130" cy="256" rx="70" ry="9" fill="#00000030"/><circle cx="80" cy="50" r="24" fill="#f3e3c8"/><circle cx="180" cy="50" r="24" fill="#f3e3c8"/><circle cx="80" cy="52" r="12" fill="#f6b8c4"/><circle cx="180" cy="52" r="12" fill="#f6b8c4"/><ellipse cx="130" cy="185" rx="62" ry="68" fill="#f3e3c8"/><ellipse cx="85" cy="238" rx="24" ry="14" fill="#f3e3c8"/><ellipse cx="175" cy="238" rx="24" ry="14" fill="#f3e3c8"/><path d="M130 205c-26-22-14-40 0-26 14-14 26 4 0 26Z" fill="#f6a9b8"/><circle cx="130" cy="85" r="52" fill="#f3e3c8"/><ellipse cx="130" cy="104" rx="22" ry="16" fill="#fff6ea"/><circle cx="110" cy="80" r="5" fill="#2a1233"/><circle cx="150" cy="80" r="5" fill="#2a1233"/><ellipse cx="130" cy="97" rx="7" ry="5" fill="#2a1233"/><path d="M122 108q8 7 16 0" stroke="#2a1233" fill="none" stroke-width="2.5" stroke-linecap="round"/><ellipse class="arm al" cx="62" cy="170" rx="16" ry="44" fill="#f3e3c8"/><ellipse class="arm ar" cx="198" cy="170" rx="16" ry="44" fill="#f3e3c8"/>`, "A cream plush teddy bear with a blush-pink heart, holding out its paws", "teddy")
};

/* ===================== scenes ===================== */
SC.intro = s => {
  s.dataset.t = "night"; s.classList.add("center");
  s.innerHTML = `<div class="stars" aria-hidden="true"></div><div class="glowheart" aria-hidden="true">❤️</div><p class="hand dim">${CFG.opening.cine}</p><h1>${t(CFG.opening.title)}</h1><p class="sub">${CFG.opening.sub}</p><p class="hand">${CFG.opening.hand}</p>`;
  for (let i = 0; i < 40; i++) { const d = el("span"); d.style.cssText = `left:${Math.random() * 100}%;top:${Math.random() * 100}%;animation-delay:${Math.random() * 3}s`; $(".stars", s).appendChild(d); }
  s.appendChild(btn(CFG.opening.btn, async () => {
    s.classList.add("zoom"); await wait(900);
    s.innerHTML = `<div class="glowheart" aria-hidden="true">❤️</div>${ART.envelope()}`; floatHearts(6);
    await wait(500); $(".env", s).classList.add("open"); await wait(2300); show("jstart");
  }));
};
SC.ch1a = s => {
  s.dataset.t = "night"; s.innerHTML = `<h2>${t(CFG.ch1a.title)}</h2>${ART.bedroom()}`;
  story(s, CFG.ch1a.text, () => { s.classList.add("warm"); s.appendChild(btn("Continue →", go("ch1b"))); });
};
SC.ch1b = s => {
  s.dataset.t = "night"; s.innerHTML = `<h2>The story I misunderstood</h2><div class="phone"><small>Instagram story</small><b>“${CFG.ch1b.caption}”</b></div>`;
  story(s, CFG.ch1b.text, () => choices(s, "", CFG.ch1b.choices, () => {
    s.appendChild(el("p", "hand", t(CFG.ch1b.close))); s.appendChild(btn("Continue →", go("ch2")));
  }));
};
SC.ch2 = s => {
  s.dataset.t = "night"; s.innerHTML = `<h2>${t(CFG.ch2.title)}</h2>${ART.skyline()}`;
  story(s, CFG.ch2.text, () => choices(s, CFG.ch2.ask, CFG.ch2.choices, () => s.appendChild(btn("Continue →", go("conch")))));
};
SC.map = s => {
  s.dataset.t = "dawn"; s.innerHTML = `<h2>Our story, in order</h2><p class="sub">Follow it from the start, or open any chapter.</p><ol class="toc"></ol>`;
  [["jstart", "Our journey", "From January 5 to September"], ["ch1a", "Apology one", "The stress, and the story I misunderstood"], ["ch2", "Apology two", "Fear, possessiveness, and your independence"],
   ["conch", "Memory: the conch shell", "A little piece of your trip"], ["star", "Memory: the lucky star", "The little star I see every morning"], ["promises", "My promises", "What I want to practise"],
   ["future", "Our next chapter", "Two careers, one hopeful future"], ["final", "The last letter", "Ten days of effort, and a teddy"]].forEach(([id, a, b], i) => {
    const li = el("li"), bt = el("button", "btn ghost"); bt.innerHTML = `<b>${i + 1}. ${a}</b><br><small>${b}</small>`; bt.onclick = go(id); li.appendChild(bt); $(".toc", s).appendChild(li);
  });
};
function chapter(s, theme, C, artA, artB, capA, capB, extra) {
  s.dataset.t = theme; s.innerHTML = `<p class="hand dim">${t(C.kicker)}</p><h1>${t(C.title)}</h1><p class="sub">${t(C.sub)}</p><div class="gallery"><figure>${artA}<figcaption>${capA}</figcaption></figure><figure>${artB}<figcaption>${capB}</figcaption></figure></div>`;
  s.appendChild(el("p", "hand ack", t(C.ack)));
  s.appendChild(el("h2", "", t(C.ask))); extra(s);
}
SC.conch = s => chapter(s, "ocean", CFG.conch, ART.shellClose(), ART.shellKeep(), "Up close", "Kept safe", s => {
  const stage = el("div", "stage", `<div class="hp" aria-hidden="true"></div>`); s.appendChild(stage);
  const svgBox = el("div", "art", ART.shellKeep()); svgBox.firstChild.classList.add("shellsvg"); stage.prepend(svgBox);
  for (let i = 0; i < 5; i++) { const d = el("span", "drift", "🐚"); d.style.cssText = `left:${8 + i * 20}%;bottom:-20px;animation-delay:${i * 2.4}s`; d.setAttribute("aria-hidden", "true"); if (!calm) stage.appendChild(d); }
  const go1 = btn(CFG.conch.go, async () => {
    go1.remove(); stage.classList.add("spin"); await wait(1900);
    const hp = $(".hp", stage);
    if (!calm) await new Promise(r => sparkTrail(center(svgBox), center(hp), 1800, r));
    heartDots(hp); await wait(2000);
    story(s, CFG.conch.msg, () => s.append(btn(CFG.conch.next, e => {
      const b = e.currentTarget, from = center(b);
      const finish = () => { const st = el("span", "bigstar", "⭐"); fx.appendChild(st); setTimeout(() => { st.remove(); arriving = true; show("star"); }, calm ? 0 : 1500); };
      calm ? finish() : sparkTrail(from, {x: innerWidth / 2, y: innerHeight / 2}, 1400, finish);
    }), backBtn()));
  });
  s.appendChild(go1);
});
SC.star = s => chapter(s, "morning", CFG.star, ART.starsClose(), ART.starBox(), "Made by hand", "The little star box", s => {
  const stage = el("div", "stage", `<div class="dawnlayer"></div>${ART.bedside()}`); s.appendChild(stage);
  if (arriving) { arriving = false; if (!calm) setTimeout(() => { const fig = $(".gallery figure:last-child svg", s); if (fig && live("star")) sparkTrail({x: innerWidth / 2, y: innerHeight / 2}, center(fig), 1600, () => {}, "⭐"); }, 600); }
  const go1 = btn(CFG.star.go, async () => {
    go1.remove(); const bed = $(".bed", stage); bed.classList.add("open"); await wait(1800);
    stage.classList.add("morning"); bed.classList.add("morning"); await wait(2500);
    story(s, CFG.star.msg, async () => {
      const heart = el("div", "glowheart", "⭐"); heart.setAttribute("aria-hidden", "true"); s.appendChild(heart);
      await wait(1500); heart.textContent = "❤️";
      s.append(el("p", "hand", t(CFG.star.line)), btn(CFG.star.next, go("promises")), backBtn());
    });
  });
  s.appendChild(go1);
});
SC.final = s => {
  s.dataset.t = "dawn"; s.innerHTML = `<div class="glowheart" aria-hidden="true">⭐</div><div class="hp" aria-hidden="true"></div>${ART.envelope()}`;
  setTimeout(() => $(".env", s)?.classList.add("open"), calm ? 0 : 800); heartDots($(".hp", s), 30, 4);
  story(s, CFG.final.text, () => s.appendChild(btn(CFG.final.next, go("teddy"))));
};
SC.teddy = s => {
  s.dataset.t = "night"; s.innerHTML = `<h2>${t("My Ammu ❤️")}</h2>${ART.teddy()}`;
  story(s, CFG.teddy.text, () => {
    const out = el("div", "story"); out.setAttribute("aria-live", "polite");
    s.append(btn(CFG.teddy.btn, e => {
      e.currentTarget.remove(); $(".teddy", s).classList.add("hug"); floatHearts(10);
      document.body.dataset.t = "night"; out.appendChild(Object.assign(el("p", "ln on"), {textContent: t(CFG.teddy.after)}));
      const row = el("div", "row"); row.append(btn("Replay our little story ↺", go("intro"), "ghost"), btn("Replay our journey", go("jstart"), "ghost"), btn("Return to our little world", go("map"), "ghost")); out.appendChild(row);
    }), out);
  });
};

/* ===================== JOURNEY: art ===================== */
const MON = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const J = CFG.journey, live = id => cur === id, hop = (a, b) => new Promise(r => sparkTrail(center(a), center(b), 1300, r));
const IND = "M60 0L82 12L100 10L96 30L116 42L92 50L88 72L74 100L64 132L56 108L38 84L14 72L28 52L22 34L40 20Z";
const R_TO = "M266 158Q170 30 82 108", R_FROM = "M82 108Q170 30 266 158";
const DUBAI = (x, y) => `<g class="dubai" transform="translate(${x} ${y})">` + [[0,34,14],[16,22,12],[30,6,8],[40,28,14],[56,38,14]].map(([a, b, w]) => `<rect x="${a}" y="${b}" width="${w}" height="${62 - b}" fill="#4a2150"/><rect class="win sign" x="${a + 3}" y="${b + 6}" width="${Math.max(2, w - 6)}" height="4"/>`).join("") + `<polygon points="31,6 34,-16 37,6" fill="#4a2150"/></g>`;
const PLANE = (d, [x, y]) => calm ? `<path class="pl" transform="translate(${x} ${y})" d="M12 0L-8 -7L-4 0L-8 7Z"/>` : `<path class="pl" d="M12 0L-8 -7L-4 0L-8 7Z"><animateMotion dur="5s" fill="freeze" rotate="auto" path="${d}"/></path>`;
const FLY = (d, end, extra = "") => SVG("0 0 360 210", `<rect class="mapbg" width="360" height="210" rx="14"/><g transform="translate(190 8) scale(1.2)"><path class="india" d="${IND}"/></g><text class="lbl" x="270" y="200" text-anchor="middle">India</text>${DUBAI(40, 100)}<text class="lbl" x="75" y="200" text-anchor="middle">Dubai</text><path class="route" d="${d}"/>${extra}<g class="stormfx"><ellipse cx="90" cy="40" rx="70" ry="22" fill="#1a1024"/><ellipse cx="170" cy="30" rx="80" ry="20" fill="#241530"/><line class="rain" x1="60" y1="60" x2="55" y2="100"/><line class="rain" x1="110" y1="55" x2="105" y2="100" style="animation-delay:.4s"/><line class="rain" x1="160" y1="50" x2="155" y2="95" style="animation-delay:.7s"/></g>${PLANE(d, end)}`, "An illustrated map with a glowing flight route between India and Dubai", "fly");
Object.assign(ART, {
  twin: () => SVG("0 0 360 150", `<circle cx="40" cy="100" r="26" fill="url(#gl)"/><circle cx="320" cy="100" r="26" fill="url(#gl)"/>${STAR(40, 100, .2, "#ffd9e2")}${STAR(320, 100, .2, "#e8c27a")}<text class="lbl" x="40" y="140" text-anchor="middle">${CFG.name}</text><text class="lbl" x="320" y="140" text-anchor="middle">Me</text><line class="gl" x1="62" y1="100" x2="298" y2="100"/><path class="route late" d="M40 100Q180 10 320 100"/>${calm ? "" : `<path class="pl" d="M12 0L-8 -7L-4 0L-8 7Z"><animateMotion dur="5s" begin="3.5s" fill="freeze" rotate="auto" path="M40 100Q180 10 320 100"/></path>`}`, "Two glowing stars on opposite sides of a midnight sky, joined by a golden flight route", "twin"),
  office: () => SVG("0 0 360 150", `<rect x="40" y="20" width="90" height="120" rx="6" fill="#4a2150"/>${[0,1,2,3].map(r => [0,1,2].map(c => `<rect x="${52 + c * 26}" y="${34 + r * 26}" width="14" height="14" fill="#e8c27a" opacity=".8"/>`).join("")).join("")}<rect x="160" y="50" width="70" height="46" rx="4" fill="#fff6ea"/><text x="195" y="78" text-anchor="middle" font-size="10" fill="#2a1233">Interview</text><rect x="250" y="40" width="70" height="86" rx="4" fill="#fff6ea"/><text x="285" y="62" text-anchor="middle" font-size="9" fill="#2a1233">Payslip</text><line x1="262" y1="76" x2="308" y2="76" stroke="#c98a9b"/><line x1="262" y1="90" x2="300" y2="90" stroke="#c98a9b"/><path d="M0 140Q100 120 180 138T360 130" stroke="#e8c27a" fill="none" stroke-width="3" stroke-dasharray="6 6"/>`, "An office building, an interview card, a small payslip and a winding career path"),
  keep: () => SVG("0 0 260 160", `<circle cx="130" cy="80" r="80" fill="url(#gl)"/><rect x="60" y="90" width="140" height="56" rx="10" fill="#c98a9b"/><rect x="54" y="80" width="152" height="14" rx="6" fill="#e8c27a"/>${SHELL(100, 66, .3)}${STAR(168, 62, .3, "#e8c27a")}`, "A keepsake box holding a glowing conch shell and a paper star"),
  paths: () => SVG("0 0 360 250", `<path class="pth" d="M30 125C100 125 140 70 220 60S330 50 340 50" fill="none" stroke="#e8c27a" stroke-width="3"/><path class="pth" d="M30 125C100 125 140 180 220 190S330 200 340 200" fill="none" stroke="#ffd9e2" stroke-width="3"/><text class="lbl" x="30" y="150">Dubai</text><text class="lbl" x="6" y="36">Me</text><text class="lbl" x="6" y="236">${CFG.name}</text>`, "Two separate glowing career paths starting in Dubai", "paths"),
  sunrise: () => SVG("0 0 360 220", `<rect width="360" height="220" rx="14" fill="#40204f"/><rect class="skyg" width="360" height="220" rx="14" fill="#f6c98d"/><circle class="sun" cx="180" cy="150" r="32" fill="#ffe9a8"/><rect y="150" width="360" height="70" fill="#2a1233"/><g transform="translate(142 98) scale(1.1)">${DUBAI(0, 0).replace(/class="win sign"/g, 'class="win"')}</g><path d="M10 215C80 190 140 165 180 152M350 215C280 190 220 165 180 152" stroke="#e8c27a" stroke-width="3" fill="none"/>${[[40,205],[100,184],[250,184],[310,205]].map(([x, y], i) => `<circle class="tw2" cx="${x}" cy="${y}" r="3" fill="#fff" style="animation-delay:${i * .6}s"/>`).join("")}${STAR(162, 146, .14, "#ffd9e2")}${STAR(198, 146, .14, "#e8c27a")}`, "A golden sun rising behind the Dubai skyline as two glowing paths meet at the horizon", "sunr"),
});

/* ===================== JOURNEY: scenes ===================== */
const nav = (s, nextId, label) => s.append(btn(label, go(nextId)), btn("Journey map", go("jmap"), "ghost"));
SC.jstart = s => {
  s.dataset.t = "night"; s.classList.add("center"); s.innerHTML = `<h1>${J.title}</h1><p class="sub">${J.sub}</p>${ART.twin()}`;
  story(s, J.intro, () => s.append(btn(J.btn, go("jmap"))));
};
SC.jmap = s => {
  s.dataset.t = "dawn"; s.innerHTML = `<h2>Our journey, in four chapters</h2><p class="sub">Open any chapter, in any order.</p><div class="cards"></div>`;
  [["j1", `${MON[J.j1.date[0] - 1]} ${J.j1.date[1]}`, J.j1.title], ["j2", `${MON[J.j2.date[0] - 1]} ${J.j2.date[1]}`, J.j2.title], ["j3", "Working life", J.j3.title], ["j4", "September", J.j4.title]]
    .forEach(([id, d, ttl], i) => { const c = el("div", "card"); c.append(el("h3", "hand", `${i + 1}. ${d}`), el("p", "", t(ttl)), btn("Open", go(id), "ghost")); $(".cards", s).appendChild(c); });
  s.append(btn("Begin with chapter one →", go("j1")), btn("Skip to the apologies", go("ch1a"), "ghost"));
};
SC.j1 = async s => {
  s.dataset.t = "night"; const C = J.j1, [m, d] = C.date;
  s.innerHTML = `<h2>${t(C.title)}</h2>${FLY(R_TO, [82, 108], `<g class="arr"><text x="60" y="94" font-size="14">🧳</text>${STAR(112, 88, .14, "#e8c27a")}</g>`)}<div class="cal"><small>${MON[m - 1].slice(0, 3).toUpperCase()}</small><b>${d}</b></div>`;
  await wait(5300); if (!live("j1")) return; s.classList.add("land");
  story(s, C.a, async () => {
    s.classList.add("storm"); await wait(2500); if (!live("j1")) return;
    story(s, C.b, () => { s.append(el("p", "hand", t(C.close))); nav(s, "j2", "Continue our journey →"); });
  });
};
SC.j2 = async s => {
  s.dataset.t = "morning"; s.classList.add("sun", "dimcity"); const C = J.j2, [m, d] = C.date;
  s.innerHTML = `<h2>${t(C.title)}</h2>${FLY(R_TO, [82, 108], `<g class="meetg"><g class="sa">${STAR(60, 40, .12, "#ffd9e2")}</g><g class="sb">${STAR(300, 40, .12, "#e8c27a")}</g><text class="hr" x="180" y="48" text-anchor="middle" font-size="22">❤️</text></g>`)}<div class="cal"><small>${MON[m - 1].slice(0, 3).toUpperCase()}</small><b>${d}</b></div>`;
  await wait(5300); if (!live("j2")) return; s.classList.add("bright", "land"); await wait(1500); s.classList.add("met");
  story(s, C.text, () => {
    const out = el("p", "reflect"); out.setAttribute("aria-live", "polite"); const row = el("div", "row");
    C.cards.forEach(([l, msg]) => row.appendChild(btn(l, () => out.textContent = t(msg), "ghost"))); s.append(row, out, el("p", "hand", t(C.close))); nav(s, "j3", "Continue our journey →");
  });
};
SC.j3 = s => {
  s.dataset.t = "dawn"; const C = J.j3; s.innerHTML = `<h2>${t(C.title)}</h2>${ART.office()}<ol class="steps">${C.steps.map((x, i) => `<li style="animation-delay:${calm ? 0 : i * .7}s">${x}</li>`).join("")}</ol>`;
  story(s, C.text, () => {
    const out = el("p", "reflect"); out.setAttribute("aria-live", "polite"); const row = el("div", "row");
    C.miles.forEach(([l, r]) => row.appendChild(btn(l, () => out.textContent = `${l} → ${r}`, "ghost")));
    s.append(row, out, el("p", "hand", t(C.note)), el("p", "arrow", "→ September")); nav(s, "j4", "Continue our journey →");
  });
};
SC.j4 = async s => {
  s.dataset.t = "night"; const C = J.j4;
  s.innerHTML = `<h2>${t(C.title)}</h2>${FLY(R_FROM, [266, 158], `<text x="296" y="150" font-size="15">🎓</text><circle cx="262" cy="142" r="2.5" fill="#ffd9e2"/><circle cx="256" cy="160" r="2.5" fill="#ffd9e2"/><text class="lbl" x="318" y="166">Kerala · Varkala</text>`)}`;
  story(s, C.a, async () => {
    const box = el("div", "notes"); s.append(box);
    for (const n of C.notes) { box.appendChild(el("span", "hand note", t(n))); await wait(1300); if (!live("j4")) return; }
    s.append(el("div", "art", ART.keep())); story(s, C.b, () => {
      s.append(btn(C.btn, go("ch1a")), btn("Journey map", go("jmap"), "ghost"));
    });
  });
};
SC.promises = s => {
  s.dataset.t = "dawn"; const P = CFG.promises; s.innerHTML = `<h2>${t(P.title)}</h2><p class="intro">${t(P.intro)}</p><div class="plist"></div>`;
  P.items.forEach((x, i) => { const d = el("div", "promise"); d.style.animationDelay = (calm ? 0 : i * .6) + "s"; d.append(el("span", "", "🌷"), t(x)); $(".plist", s).appendChild(d); });
  s.appendChild(btn(P.btn, go("future")));
};
SC.future = s => {
  s.dataset.t = "night"; const F = J.future;
  s.innerHTML = `<h1>${t(F.title)}</h1><p class="sub">${F.sub}</p>${ART.paths()}<ul class="legend">${F.legend.map(x => `<li>${x}</li>`).join("")}</ul>`;
  const svg = $(".paths", s), P = [...svg.querySelectorAll(".pth")], ICON = ["📚", "📨", "🎤", "🌟", "📈"], at = (p, k) => p.getPointAtLength(p.getTotalLength() * k), K = j => .12 + j * .2;
  const put = (e, q) => e.style.transform = `translate(${q.x}px,${q.y}px)`, add = h => { svg.insertAdjacentHTML("beforeend", h); return svg.lastElementChild; };
  P.forEach(p => ICON.forEach((ic, j) => { const q = at(p, K(j)); add(`<text x="${q.x}" y="${q.y + 5}" text-anchor="middle" font-size="14">${ic}</text>`); }));
  const cards = P.map((p, i) => add(`<g class="pcard"><rect x="-38" y="-30" width="76" height="16" rx="8" fill="${i ? "#ffd9e2" : "#e8c27a"}"/><text y="-19" text-anchor="middle" font-size="8" fill="#2a1233">${F.states[0]}</text></g>`));
  const place = (j, label) => cards.forEach((c, i) => { put(c, at(P[i], K(j))); c.querySelector("text").textContent = label; }); place(0, F.states[0]);
  story(s, F.present, () => s.append(btn("Watch our paths move ✨", async e => {
    e.currentTarget.remove();
    for (let j = 0; j < 5; j++) { place(j, F.states[j]); await wait(1700); if (!live("future")) return; }
    s.append(el("p", "reflect", "Illustrative milestones, not results. Nothing here says either of us has a job yet.")); await wait(1500);
    /* Scene B: CVs become application cards, reach the interview markers, light the way */
    cards.forEach(c => c.style.opacity = 0);
    const mk = P.map(p => { const q = at(p, K(2)); return add(`<circle class="mk" cx="${q.x}" cy="${q.y}" r="12"/>`); });
    const cvs = P.flatMap((p, i) => [0, 1, 2].map(n => { const c = add(`<text class="cv" font-size="15" text-anchor="middle" style="opacity:0">📄</text>`); put(c, at(p, .05 + n * .03)); c.dataset.p = i; c.dataset.n = n; return c; }));
    await wait(600); cvs.forEach(c => c.style.opacity = 1); await wait(1300); cvs.forEach(c => c.textContent = "🎫"); await wait(900);
    cvs.forEach(c => put(c, at(P[c.dataset.p], K(2) - c.dataset.n * .025))); await wait(1900); mk.forEach(m => m.classList.add("lit")); await wait(1000);
    cvs.forEach(c => c.style.opacity = 0);
    P.forEach(p => { [.62, .72, .82, .92].forEach((k, n) => { const q = at(p, k); add(`<circle class="gstar" cx="${q.x}" cy="${q.y}" r="3" style="animation-delay:${n * .4}s"/>`); }); const q = at(p, .99); add(`<circle class="endg" cx="${q.x - 4}" cy="${q.y}" r="12"/>`); });
    await wait(2000); if (!live("future")) return;
    const sun = el("div", "art", ART.sunrise()); s.append(sun); await wait(400); $(".sunr", sun).classList.add("rise");
    story(s, F.msg, () => {
      s.append(el("h2", "", "A shared horizon")); const ul = el("ul", "vign"); F.shared.forEach(x => ul.appendChild(el("li", "", t(x)))); s.append(ul, btn(F.btn, go("final")), btn("Back to the story map", go("map"), "ghost"));
    });
  })));
};

/* ===================== background whispers (edges only, very faint) ===================== */
let lastW = -1;
if (!calm) setInterval(() => {
  const box = $("#whispers"); if (box.children.length > 2 || document.hidden) return;
  let i; do { i = Math.floor(Math.random() * CFG.whispers.length); } while (i === lastW); lastW = i;
  const w = el("span", "whisper"); w.textContent = t(CFG.whispers[i]);
  w.style[Math.random() < .5 ? "left" : "right"] = 1 + Math.random() * 4 + "%"; w.style.top = 12 + Math.random() * 76 + "%";
  box.appendChild(w); setTimeout(() => w.remove(), 8200);
}, 4200);

/* ===================== music (off until tapped) ===================== */
const song = new Audio(CFG.music); song.loop = true; let missing = false; song.onerror = () => missing = true;
$("#music").onclick = async e => {
  const b = e.currentTarget, on = b.getAttribute("aria-pressed") === "true";
  if (on) { song.pause(); b.setAttribute("aria-pressed", "false"); b.textContent = "🎵 Music off"; b.setAttribute("aria-label", "Turn music on"); return; }
  try { if (missing) throw 0; await song.play(); b.setAttribute("aria-pressed", "true"); b.textContent = "🔇 Pause music"; b.setAttribute("aria-label", "Pause music"); }
  catch { b.textContent = "🎵 No song yet"; setTimeout(() => b.textContent = "🎵 Music off", 2200); }
};
$("#home").onclick = go("map");

/* ===================== start / routing ===================== */
$("#home").hidden = true;
addEventListener("hashchange", () => { const h = location.hash.slice(1); if (SC[h] && h !== cur) show(h); });
{ const h = location.hash.slice(1); show(SC[h] ? h : "intro"); }
