// Generează paginile statice (rute, servicii, legale, 404) din șablonul comun.
// Rulare: node scripts/build-pages.mjs  → scrie fișierele .html în rădăcina proiectului.
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { routes, services } from "./pages-content.mjs";
import { legal } from "./pages-legal.mjs";
import { mkdirSync } from "node:fs";
import { articles, MAIN } from "./blog/index.mjs";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const SITE = "https://www.brotransport.ro";
const TEL = "+40790752888";
const TEL_TXT = "0790 752 888";
const ORG_ID = SITE + "/#organizatie";
const WA = "https://wa.me/40790752888?text=" + encodeURIComponent("Bună ziua! Aș dori o ofertă de transport.");
const waBtn = (cls = "btn btn-wa") => `<a class="${cls}" href="${WA}" target="_blank" rel="noopener"><i class="bi bi-whatsapp"></i> WhatsApp</a>`;

export const allLinks = [...routes, ...services].map((p) => ({ slug: p.slug, label: p.short, sub: p.sub }));

const esc = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
const strip = (s) => s.replace(/<[^>]+>/g, "");

const gtag = `  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=AW-18498189434"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('consent', 'default', { ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied', analytics_storage: 'denied', wait_for_update: 500 });
    try { if (localStorage.getItem('bro-consent') === 'granted') gtag('consent', 'update', { ad_storage: 'granted', ad_user_data: 'granted', ad_personalization: 'granted', analytics_storage: 'granted' }); } catch (e) {}
    gtag('js', new Date());
    gtag('config', 'AW-18498189434');
    document.addEventListener('click', function (e) {
      var a = e.target.closest && e.target.closest('a[href]');
      if (!a) return;
      var h = a.getAttribute('href');
      if (h.indexOf('tel:') === 0) {
        gtag('event', 'click_telefon');
        gtag('event', 'conversion', { send_to: 'AW-18498189434/kXpWCIDCtZQdEPrwz_RE' });
      } else if (h.indexOf('wa.me/') > -1) gtag('event', 'click_whatsapp');
    }, true);
  </script>`;

function head({ title, desc, path, img = "/img/og.jpg", imgAlt = "Microbuz BRO Transport International", jsonld = [], noindex = false }) {
  const url = SITE + path;
  return `<!DOCTYPE html>
<html lang="ro">
<head>
${gtag}
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
  <title>${esc(title)}</title>
  <meta name="description" content="${esc(desc)}">
${noindex ? '  <meta name="robots" content="noindex">\n' : ""}  <meta name="theme-color" content="#F26B0F">
  <link rel="canonical" href="${url}">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="BRO Transport International">
  <meta property="og:locale" content="ro_RO">
  <meta property="og:url" content="${url}">
  <meta property="og:title" content="${esc(title)}">
  <meta property="og:description" content="${esc(desc)}">
  <meta property="og:image" content="${SITE}${img}">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:image:alt" content="${esc(imgAlt)}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${esc(title)}">
  <meta name="twitter:description" content="${esc(desc)}">
  <meta name="twitter:image" content="${SITE}${img}">
  <link rel="icon" href="/img/favicon.png" type="image/png">
  <link rel="apple-touch-icon" href="/img/apple-touch-icon.png">
  <link rel="manifest" href="/site.webmanifest">

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <link href="/assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">
  <link href="/assets/css/site.css?v=20261023" rel="stylesheet">
${jsonld.map((j) => `  <script type="application/ld+json">\n${JSON.stringify(j, null, 2)}\n  </script>`).join("\n")}
</head>
<body>
`;
}

const header = `
<header class="hd">
  <div class="wrap hd-in">
    <a href="/" class="hd-logo"><img src="/img/logo.webp" alt="BRO Transport International – pagina principală" width="630" height="222"></a>
    <nav class="hd-nav" aria-label="Meniu">
      <a href="/#servicii">Servicii</a>
      <a href="/#rute">Rute</a>
      <a href="/#masini">Mașini</a>
      <a href="/#siguranta">Siguranță</a>
      <a href="/#intrebari">Întrebări</a>
      <a href="/blog">Blog</a>
    </nav>
    <a class="hd-wa" href="${WA}" target="_blank" rel="noopener" aria-label="WhatsApp"><i class="bi bi-whatsapp"></i></a>
    <a class="hd-tel" href="tel:${TEL}"><i class="bi bi-telephone-fill"></i><span>${TEL_TXT}</span></a>
  </div>
</header>
`;

export function footer(prefix = "/") {
  return `
<footer class="ft">
  <div class="wrap ft-in">
    <div class="ft-brand">
      <p class="ft-name">BRO Transport International</p>
      <p>Transport persoane, colete și mașini pe platformă. România – Austria – Germania – Olanda – Belgia, de la adresă la adresă.</p>
    </div>
    <div class="ft-col">
      <p class="ft-h">Contact BRO Transport</p>
      <a href="tel:${TEL}"><i class="bi bi-telephone"></i> ${TEL_TXT}</a>
      <a href="${WA}" target="_blank" rel="noopener"><i class="bi bi-whatsapp"></i> WhatsApp</a>
      <a href="https://www.facebook.com/optimbro.88/" target="_blank" rel="noopener"><i class="bi bi-facebook"></i> Facebook</a>
      <a href="https://www.instagram.com/optimbrotransport/" target="_blank" rel="noopener"><i class="bi bi-instagram"></i> Instagram</a>
    </div>
    <div class="ft-col">
      <p class="ft-h">Rute și servicii</p>
${allLinks.map((l) => `      <a href="${prefix}${l.slug}">${l.label}</a>`).join("\n")}
    </div>
    <div class="ft-col">
      <p class="ft-h">Altă firmă: transport marfă în țară</p>
      <a href="https://optimbro.ro/" target="_blank" rel="noopener">OptimBro Transport</a>
      <a href="tel:+40725228888">0725 22 88 88</a>
      <span class="ft-note">Doar pentru marfă în România. Pentru persoane, colete și mașini în Europa sună la ${TEL_TXT}.</span>
    </div>
  </div>
  <div class="wrap ft-legal">
    <a href="${prefix}termeni-si-conditii">Termeni și condiții</a>
    <a href="${prefix}politica-confidentialitate">Politica de confidențialitate</a>
    <a href="${prefix}blog">Blog</a>
    <a href="${prefix}cookies">Politica de cookies</a>
    <button type="button" data-cookie-settings>Setări cookies</button>
    <a class="ft-anpc" href="https://anpc.ro/ce-este-sal/" target="_blank" rel="noopener nofollow">ANPC – Soluționarea alternativă a litigiilor</a>
  </div>
  <div class="wrap ft-copy">© <span id="y">2026</span> BRO Transport International</div>
</footer>
`;
}

const dock = `
<div class="dock" aria-label="Contact rapid">
  <a class="dock-call" href="tel:${TEL}"><i class="bi bi-telephone-fill"></i> Sună</a>
  ${waBtn("dock-wa")}
</div>
<script>document.getElementById("y").textContent = new Date().getFullYear();</script>
<script src="/assets/js/consent.js?v=20261014" defer></script>
</body>
</html>
`;

function crumbs(items) {
  return `
<nav class="crumbs" aria-label="Breadcrumb">
  <div class="wrap">
    <ol>
${items.map((it, i) => (i < items.length - 1 ? `      <li><a href="${it.path}">${it.name}</a></li>` : `      <li aria-current="page">${it.name}</li>`)).join("\n")}
    </ol>
  </div>
</nav>
`;
}

const crumbLd = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, item: SITE + it.path })),
});

const faqLd = (faq) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: strip(a) } })),
});

const end = `
  <section class="end">
    <div class="wrap end-in">
      <div>
        <h2>Vrei prețul pentru cursa ta?</h2>
        <p>Sună sau scrie-ne pe WhatsApp. Afli locul liber, prețul și ora la care trecem pe la tine.</p>
      </div>
      <div class="end-btns">
        <a class="btn btn-dark" href="tel:${TEL}"><i class="bi bi-telephone-fill"></i> ${TEL_TXT}</a>
        ${waBtn()}
      </div>
    </div>
  </section>
`;

function page(p) {
  const path = "/" + p.slug;
  const items = [{ name: "Acasă", path: "/" }, { name: p.crumb, path }];
  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: p.serviceName,
    serviceType: p.serviceType,
    url: SITE + path,
    description: p.desc,
    provider: { "@type": "Organization", "@id": ORG_ID, name: "BRO Transport International", url: SITE + "/", telephone: TEL },
    areaServed: p.area.map((n) => ({ "@type": "Country", name: n })),
  };
  const others = allLinks.filter((l) => l.slug !== p.slug);
  return (
    head({ title: p.title, desc: p.desc, path, imgAlt: p.imgAlt, jsonld: [service, faqLd(p.faq), crumbLd(items)] }) +
    header +
    crumbs(items) +
    `
<main>
  <section class="pg-hero">
    <div class="wrap pg-hero-in">
      <div>
        <h1>${p.h1}</h1>
        <p class="lead">${p.lead}</p>
        <div class="pg-cta">
          <a class="btn btn-or" href="tel:${TEL}"><i class="bi bi-telephone-fill"></i> Sună: ${TEL_TXT}</a>
          ${waBtn()}
        </div>
        <p class="hint">Afli prețul și prima plecare disponibilă la telefon sau pe WhatsApp.</p>
      </div>
      <img src="${p.img}" alt="${esc(p.imgAlt)}" width="${p.imgW}" height="${p.imgH}" fetchpriority="high">
    </div>
  </section>

  <section class="sec">
    <div class="wrap pg-body">
      <article class="prose">
${p.body.trim()}

        <h2>Întrebări frecvente</h2>
        <div class="faq">
${p.faq.map(([q, a], i) => `          <details${i === 0 ? " open" : ""}><summary>${q}</summary><p>${a}</p></details>`).join("\n")}
        </div>
      </article>
      <aside class="side" aria-label="Rezervare">
        <p class="side-h">Rezervă acum</p>
        <p>Ne spui de unde pleci, unde mergi și în ce zi. Îți confirmăm locul și prețul pe loc.</p>
        <a class="btn btn-or" href="tel:${TEL}"><i class="bi bi-telephone-fill"></i> ${TEL_TXT}</a>
        ${waBtn("btn btn-wa side-wa")}
        <ul>
          <li><a href="/">← Pagina principală</a></li>
${others.map((l) => `          <li><a href="/${l.slug}">${l.label}</a></li>`).join("\n")}
        </ul>
      </aside>
    </div>
  </section>

  <section class="sec sec-grey">
    <div class="wrap">
      <div class="sec-hd">
        <h2>Alte rute și servicii BRO</h2>
        <p>Aceeași echipă, aceleași mașini, de la adresă la adresă.</p>
      </div>
      <div class="rt-grid">
${others.map((l) => `        <a class="rt" href="/${l.slug}"><b>${l.label}</b><span>${l.sub}</span></a>`).join("\n")}
      </div>
    </div>
  </section>
${end}
</main>
` +
    footer() +
    dock
  );
}

function legalPage(p) {
  const path = "/" + p.slug;
  const items = [{ name: "Acasă", path: "/" }, { name: p.crumb, path }];
  return (
    head({ title: p.title, desc: p.desc, path, jsonld: [crumbLd(items)] }) +
    header +
    crumbs(items) +
    `
<main class="legal">
  <section class="sec">
    <div class="wrap">
      <article class="prose">
        <h1>${p.h1}</h1>
        <p><em>Ultima actualizare: ${p.updated}</em></p>
${p.body.trim()}
      </article>
    </div>
  </section>
</main>
` +
    footer() +
    dock
  );
}

function notFound() {
  return (
    head({ title: "Pagina nu există | BRO Transport International", desc: "Pagina căutată nu există. Vezi rutele BRO Transport sau sună la 0790 752 888.", path: "/404", noindex: true }) +
    header +
    `
<main class="nf">
  <div class="wrap">
    <h1>Pagina asta nu mai există</h1>
    <p>Poate s-a mutat sau linkul e greșit. Uite unde poți merge mai departe:</p>
    <p><a class="btn btn-or" href="/"><i class="bi bi-house-door-fill"></i> Pagina principală</a> &nbsp; <a class="btn btn-dark" href="tel:${TEL}"><i class="bi bi-telephone-fill"></i> ${TEL_TXT}</a> &nbsp; ${waBtn()}</p>
    <div class="rt-grid">
${allLinks.map((l) => `      <a class="rt" href="/${l.slug}"><b>${l.label}</b><span>${l.sub}</span></a>`).join("\n")}
    </div>
  </div>
</main>
` +
    footer() +
    dock
  );
}

const out = [];
for (const p of [...routes, ...services]) {
  writeFileSync(join(ROOT, p.slug + ".html"), page(p));
  out.push(p.slug);
}
for (const p of legal) {
  writeFileSync(join(ROOT, p.slug + ".html"), legalPage(p));
  out.push(p.slug);
}
writeFileSync(join(ROOT, "404.html"), notFound());

// ===== Blog =====
const fmtDate = (d) => new Date(d + "T12:00:00").toLocaleDateString("ro-RO", { day: "numeric", month: "long", year: "numeric" });
const slugify = (t) => t.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

function article(a, pub) {
  const path = "/blog/" + a.slug;
  const items = [{ name: "Acasă", path: "/" }, { name: "Blog", path: "/blog" }, { name: a.h1, path }];
  const toc = [];
  const body = a.body.trim().replace(/<h2>(.*?)<\/h2>/g, (m, t) => {
    const id = slugify(strip(t));
    toc.push([id, strip(t)]);
    return `<h2 id="${id}">${t}</h2>`;
  });
  toc.push(["intrebari-frecvente", "Întrebări frecvente"]);
  const words = (strip(a.intro + " " + a.body) + " " + a.faq.flat().join(" ")).split(/\s+/).filter(Boolean).length;
  const mins = Math.max(4, Math.round(words / 200));
  const main = MAIN[a.main];
  const rel = (a.related || []).map((sl) => pub.find((x) => x.slug === sl)).filter(Boolean);
  const ld = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: a.h1,
    description: a.desc,
    image: SITE + a.img,
    datePublished: a.date,
    dateModified: a.modified || a.date,
    author: { "@type": "Organization", name: "Echipa BRO Transport", url: SITE + "/" },
    publisher: { "@type": "Organization", "@id": ORG_ID, name: "BRO Transport International", logo: { "@type": "ImageObject", url: SITE + "/img/logo.webp" } },
    mainEntityOfPage: SITE + path,
    inLanguage: "ro-RO",
  };
  return (
    head({ title: a.title, desc: a.desc, path, imgAlt: a.imgAlt, jsonld: [ld, faqLd(a.faq), crumbLd(items)] }).replace('<meta property="og:type" content="website">', '<meta property="og:type" content="article">') +
    header +
    crumbs(items) +
    `
<main>
  <section class="sec art">
    <div class="wrap pg-body">
      <article class="prose">
        <h1>${a.h1}</h1>
        <p class="art-meta">Echipa BRO Transport · <time datetime="${a.date}">${fmtDate(a.date)}</time> · ${mins} min de citit</p>
        <div class="art-answer">${a.intro.trim()}</div>
        <img class="art-img" src="${a.img}" alt="${esc(a.imgAlt)}" width="${a.imgW}" height="${a.imgH}" fetchpriority="high">
        <nav class="toc" aria-label="Cuprins">
          <p class="toc-h">Cuprins</p>
          <ol>
${toc.map(([id, t]) => `            <li><a href="#${id}">${t}</a></li>`).join("\n")}
          </ol>
        </nav>
${body}

        <h2 id="intrebari-frecvente">Întrebări frecvente</h2>
        <div class="faq">
${a.faq.map(([q, ans], i) => `          <details${i === 0 ? " open" : ""}><summary>${q}</summary><p>${ans}</p></details>`).join("\n")}
        </div>

        <div class="art-cta">
          <p class="art-cta-h">Vrei prețul exact pentru cursa ta?</p>
          <p>Sună sau scrie-ne pe WhatsApp. Îți spunem pe loc locul liber, prețul și ora la care trecem pe la tine.</p>
          <div class="pg-cta">
            <a class="btn btn-or" href="tel:${TEL}"><i class="bi bi-telephone-fill"></i> ${TEL_TXT}</a>
            ${waBtn()}
          </div>
        </div>
      </article>
      <aside class="side" aria-label="Rezervare">
        <p class="side-h">${main.label}</p>
        <p>${main.text}</p>
        <a class="btn btn-or" href="tel:${TEL}"><i class="bi bi-telephone-fill"></i> ${TEL_TXT}</a>
        ${waBtn("btn btn-wa side-wa")}
        <ul>
          <li><a href="${main.path}">${main.link} →</a></li>
${rel.map((r) => `          <li><a href="/blog/${r.slug}">${r.h1}</a></li>`).join("\n")}
          <li><a href="/blog">Toate articolele</a></li>
        </ul>
      </aside>
    </div>
  </section>
${rel.length ? `
  <section class="sec sec-grey">
    <div class="wrap">
      <div class="sec-hd"><h2>Citește și</h2></div>
      <div class="rt-grid">
${rel.map((r) => `        <a class="rt" href="/blog/${r.slug}"><b>${r.h1}</b><span>${r.cardText}</span></a>`).join("\n")}
        <a class="rt" href="${main.path}"><b>${main.link}</b><span>${main.text}</span></a>
      </div>
    </div>
  </section>` : ""}
${end}
</main>
` +
    footer() +
    dock
  );
}

function blogIndex(pub) {
  const path = "/blog";
  const items = [{ name: "Acasă", path: "/" }, { name: "Blog", path }];
  const groups = [...new Set(pub.map((a) => a.group))];
  const ld = { "@context": "https://schema.org", "@type": "Blog", name: "Blog BRO Transport", url: SITE + path, inLanguage: "ro-RO", publisher: { "@id": ORG_ID } };
  return (
    head({ title: "Blog: ghiduri de drum, colete și mașini | BRO Transport", desc: "Ghiduri practice pentru drumul România – Germania, Austria, Olanda, Belgia: prețuri, bagaje, colete, mașini aduse pe platformă și sfaturi de drum.", path, jsonld: [ld, crumbLd(items)] }) +
    header +
    crumbs(items) +
    `
<main>
  <section class="pg-hero">
    <div class="wrap">
      <h1>Blog BRO Transport</h1>
      <p class="lead">Ghiduri practice pentru drumul dintre România și Austria, Germania, Olanda și Belgia: cum alegi transportul, cum trimiți un colet și cum aduci o mașină acasă.</p>
    </div>
  </section>
${groups.map((g) => `
  <section class="sec">
    <div class="wrap">
      <div class="sec-hd"><h2>${g}</h2></div>
      <div class="rt-grid">
${pub.filter((a) => a.group === g).map((a) => `        <a class="rt" href="/blog/${a.slug}"><b>${a.h1}</b><span>${a.cardText}</span></a>`).join("\n")}
      </div>
    </div>
  </section>`).join("")}
${end}
</main>
` +
    footer() +
    dock
  );
}

mkdirSync(join(ROOT, "blog"), { recursive: true });
const pub = articles.filter((a) => a.published);
for (const a of pub) writeFileSync(join(ROOT, "blog", a.slug + ".html"), article(a, pub));
writeFileSync(join(ROOT, "blog", "index.html"), blogIndex(pub));
out.push("blog", ...pub.map((a) => "blog/" + a.slug));

// sitemap.xml
const today = new Date().toISOString().slice(0, 10);
const urls = ["", ...out];
writeFileSync(
  join(ROOT, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url>\n    <loc>${SITE}/${u}</loc>\n    <lastmod>${today}</lastmod>\n  </url>`).join("\n")}
</urlset>
`
);
console.log("Generat:", out.length + 1, "pagini + sitemap.xml");
