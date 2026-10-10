var REPO = "ahyakonbong5-create/Fps-meter";

var T = {
  en: {
    nFeat: "Features", nStart: "Get started", src: "View Source ↗",
    badge: "⚡ BUILT FOR MOBILE GAMERS", h1a: "Know Your", h1b: "Gaming FPS.",
    lead: "FPS Meter shows your game's real frame rate on top of the game, then helps you understand stutter, heat and smoothness after you play.",
    dl: "↓ Download FPS Meter", req: "Android 8.0+ · Needs Shizuku · No ads",
    feat: "Built for Your Gaming Sessions", featSub: "Real tools to understand your phone's gaming performance.",
    f1t: "Live FPS overlay", f1d: "A draggable overlay with min / avg / max, colour by FPS level and a small graph.",
    f2t: "1% low and frame time", f2d: "See stutter, not just the average FPS.",
    f3t: "Session history", f3d: "Every game session is saved with a graph you can open later.",
    f4t: "Heat analysis", f4d: "Compare FPS with temperature to see if heat is slowing your game.",
    f5t: "60-second benchmark", f5d: "Get a graded report (S / A / B / C) with smoothness and temperature.",
    f6t: "Share cards", f6d: "Turn a session into a result image to send to friends.",
    more: "Also: PC-style monitor view, low-FPS and hot-phone alerts, per-game profiles, a Quick Settings tile, English and Khmer.",
    shots: "Screenshots", start: "Get started in 3 steps",
    s1t: "Install and start Shizuku", s1d: "Shizuku lets FPS Meter read frame data safely. Start it with Wireless debugging (Developer options).", getshz: "Get Shizuku",
    s2t: "Install FPS Meter", s2d: "Download the APK above and allow installs from your browser when Android asks.",
    s3t: "Press Start and play", s3d: "Open FPS Meter, allow Shizuku and the overlay, press Start, then open a game you picked.",
    restart: "After a phone restart, start Shizuku again.",
    know: "Good to know",
    k1: "FPS comes from the system's frame data and can differ slightly from other tools.",
    k2: "CPU and GPU temperature depend on your phone. Sensors that are not available are hidden.",
    k3: "Some games may not report frames. FPS Meter measures only the apps you choose.",
    k4: "The app uses the internet only to check for updates. Only install APK files from sources you trust.",
    ctaT: "Ready to see your real FPS?", ctaD: "Download the latest APK, or visit the repository for source code and release notes.", ctaB: "Explore Releases →",
    priv: "Privacy", foot: "Independent project. Not affiliated with Google, Android or Shizuku.", latest: "Latest: "
  },
  km: {
    nFeat: "មុខងារ", nStart: "ចាប់ផ្តើម", src: "មើលកូដ ↗",
    badge: "⚡ បង្កើតសម្រាប់អ្នកលេងហ្គេមលើទូរស័ព្ទ", h1a: "ស្គាល់", h1b: "FPS ហ្គេមរបស់អ្នក។",
    lead: "FPS Meter បង្ហាញអត្រាស៊ុមពិតនៃហ្គេមលើអេក្រង់ ហើយជួយអ្នកយល់ពីការគាំង កម្តៅ និងភាពរលូន បន្ទាប់ពីលេង។",
    dl: "↓ ទាញយក FPS Meter", req: "Android 8.0+ · ត្រូវការ Shizuku · គ្មានផ្សាយពាណិជ្ជកម្ម",
    feat: "បង្កើតសម្រាប់ការលេងរបស់អ្នក", featSub: "ឧបករណ៍ពិតដើម្បីយល់ពីសមត្ថភាពលេងហ្គេមរបស់ទូរស័ព្ទអ្នក។",
    f1t: "FPS ផ្ទាល់លើអេក្រង់", f1d: "ផ្ទាំងអូសបានដែលបង្ហាញ min / avg / max ពណ៌តាមកម្រិត FPS និងក្រាហ្វតូច។",
    f2t: "1% low និងរយៈពេលស៊ុម", f2d: "មើលការគាំង មិនមែនតែ FPS មធ្យមទេ។",
    f3t: "ប្រវត្តិការលេង", f3d: "រាល់ការលេងត្រូវបានរក្សាទុកជាមួយក្រាហ្វដែលអាចបើកមើលក្រោយ។",
    f4t: "ការវិភាគកម្តៅ", f4d: "ប្រៀបធៀប FPS ជាមួយសីតុណ្ហភាព ដើម្បីដឹងថាកម្តៅធ្វើឱ្យហ្គេមយឺតឬអត់។",
    f5t: "Benchmark 60 វិនាទី", f5d: "ទទួលរបាយការណ៍មានពិន្ទុ (S / A / B / C) ភាពរលូន និងសីតុណ្ហភាព។",
    f6t: "បណ្ណចែករំលែក", f6d: "បម្លែងការលេងមួយទៅជារូបលទ្ធផលដើម្បីផ្ញើទៅមិត្តភក្តិ។",
    more: "ក្រៅពីនេះ៖ ទិដ្ឋភាព Monitor ដូចកុំព្យូទ័រ ការជូនដំណឹងពេល FPS ទាប ឬទូរស័ព្ទក្តៅ profile តាមហ្គេម ប៊ូតុង Quick Settings និងភាសាអង់គ្លេស/ខ្មែរ។",
    shots: "រូបថតអេក្រង់", start: "ចាប់ផ្តើមក្នុង ៣ ជំហាន",
    s1t: "ដំឡើង និងបើក Shizuku", s1d: "Shizuku អនុញ្ញាតឱ្យ FPS Meter អានទិន្នន័យស៊ុមដោយសុវត្ថិភាព។ បើកវាតាម Wireless debugging (Developer options)។", getshz: "ទាញយក Shizuku",
    s2t: "ដំឡើង FPS Meter", s2d: "ទាញយក APK ខាងលើ ហើយអនុញ្ញាតការដំឡើងពីកម្មវិធីរុករក ពេល Android សួរ។",
    s3t: "ចុច Start ហើយលេង", s3d: "បើក FPS Meter អនុញ្ញាត Shizuku និង overlay ចុច Start រួចបើកហ្គេមដែលអ្នកបានជ្រើស។",
    restart: "បន្ទាប់ពីបើកទូរស័ព្ទឡើងវិញ ត្រូវបើក Shizuku ម្តងទៀត។",
    know: "ចំណុចគួរដឹង",
    k1: "FPS មកពីទិន្នន័យស៊ុមរបស់ប្រព័ន្ធ ហើយអាចខុសបន្តិចពីឧបករណ៍ផ្សេង។",
    k2: "សីតុណ្ហភាព CPU និង GPU អាស្រ័យលើទូរស័ព្ទអ្នក។ sensor ណាដែលអានមិនបាន នឹងត្រូវលាក់។",
    k3: "ហ្គេមមួយចំនួនអាចមិនរាយការណ៍ស៊ុម។ FPS Meter វាស់តែ app ដែលអ្នកជ្រើស។",
    k4: "app ប្រើអ៊ីនធឺណិតតែដើម្បីពិនិត្យការអាប់ដេត។ ដំឡើងតែ APK ពីប្រភពដែលអ្នកទុកចិត្ត។",
    ctaT: "ត្រៀមមើល FPS ពិតរបស់អ្នកឬនៅ?", ctaD: "ទាញយក APK ចុងក្រោយ ឬចូលមើល repository សម្រាប់កូដ និងកំណត់ចំណាំកំណែ។", ctaB: "មើលកំណែទាំងអស់ →",
    priv: "ឯកជនភាព", foot: "គម្រោងឯករាជ្យ។ មិនពាក់ព័ន្ធនឹង Google, Android ឬ Shizuku។", latest: "កំណែចុងក្រោយ៖ "
  }
};

var lang = "en", latest = "";
try {
  lang = localStorage.getItem("lang") ||
    (((navigator.language || "").toLowerCase().indexOf("km") === 0) ? "km" : "en");
} catch (e) {}

function el(id) { return document.getElementById(id); }

function apply() {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-k]").forEach(function (e) {
    var v = T[lang][e.getAttribute("data-k")];
    if (v) e.textContent = v;
  });
  document.querySelectorAll(".lang button").forEach(function (b) {
    b.className = (b.getAttribute("data-l") === lang) ? "on" : "";
  });
  el("ver").textContent = latest ? "· " + T[lang].latest + latest : "";
}

document.querySelectorAll(".lang button").forEach(function (b) {
  b.onclick = function () {
    lang = b.getAttribute("data-l");
    try { localStorage.setItem("lang", lang); } catch (e) {}
    apply();
  };
});

apply();

fetch("https://api.github.com/repos/" + REPO + "/releases/latest")
  .then(function (r) { return r.ok ? r.json() : null; })
  .then(function (j) {
    if (!j) return;
    var a = (j.assets || []).filter(function (x) { return /\.apk$/i.test(x.name); })[0];
    if (a) el("dl").href = a.browser_download_url;
    latest = j.tag_name || "";
    apply();
  })
  .catch(function () {});

el("year").textContent = new Date().getFullYear();

var revealObserver = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(function (e) {
  revealObserver.observe(e);
});
