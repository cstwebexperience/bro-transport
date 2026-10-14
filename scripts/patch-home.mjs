// Aplică pe index.html: head SEO, JSON-LD, footer comun, secțiunea Rute. Idempotent.
import { readFileSync, writeFileSync } from "node:fs";
import { routes, services } from "./pages-content.mjs";

const f = new URL("../index.html", import.meta.url);
let s = readFileSync(f, "utf8");
const SITE = "https://www.brotransport.ro";
const all = [...routes, ...services];

const faq = [...s.matchAll(/<details[^>]*><summary>(.*?)<\/summary><p>(.*?)<\/p><\/details>/g)].map((m) => [m[1], m[2].replace(/<[^>]+>/g, "")]);
const org = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": SITE + "/#organizatie",
  name: "BRO Transport International",
  url: SITE + "/",
  logo: SITE + "/img/logo.webp",
  image: SITE + "/img/og.jpg",
  description: "Transport persoane, colete și autoturisme pe platformă între România, Austria, Germania, Olanda și Belgia, de la adresă la adresă.",
  telephone: "+40790752888",
  contactPoint: { "@type": "ContactPoint", telephone: "+40790752888", contactType: "customer service", availableLanguage: ["ro"] },
  areaServed: ["România", "Austria", "Germania", "Olanda", "Belgia"].map((n) => ({ "@type": "Country", name: n })),
  sameAs: ["https://www.facebook.com/optimbro.88/", "https://www.instagram.com/optimbrotransport/"],
};
const svc = (name, type, slug) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name, serviceType: type, url: SITE + "/" + slug,
  provider: { "@id": SITE + "/#organizatie" },
  areaServed: ["România", "Austria", "Germania", "Olanda", "Belgia"].map((n) => ({ "@type": "Country", name: n })),
});
const ld = [
  org,
  svc("Transport persoane România – Europa", "Transport persoane cu microbuzul", "transport-persoane-romania-germania"),
  svc("Transport colete România – Europa", "Transport colete internațional", "transport-colete-romania-europa"),
  svc("Transport auto pe platformă", "Transport autoturisme pe platformă", "transport-auto-platforma"),
  { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faq.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) },
];

const title = "Transport persoane și colete România–Europa | BRO Transport";
const desc = "Transport persoane, colete și mașini pe platformă între România, Austria, Germania, Olanda și Belgia. De la adresă la adresă. Sună: 0790 752 888.";
const headSeo = `  <title>${title}</title>
  <meta name="description" content="${desc}">
  <meta name="theme-color" content="#F26B0F">
  <link rel="canonical" href="${SITE}/">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="BRO Transport International">
  <meta property="og:locale" content="ro_RO">
  <meta property="og:url" content="${SITE}/">
  <meta property="og:title" content="BRO Transport International — România ↔ Europa, de la adresă la adresă">
  <meta property="og:description" content="Persoane, colete și mașini pe platformă. România – Austria – Germania – Olanda – Belgia. Plecări zilnice. Tel. 0790 752 888.">
  <meta property="og:image" content="${SITE}/img/og.jpg">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:image:alt" content="Microbuz portocaliu BRO Transport International">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${title}">
  <meta name="twitter:description" content="${desc}">
  <meta name="twitter:image" content="${SITE}/img/og.jpg">
  <link rel="icon" href="/img/favicon.png" type="image/png">
  <link rel="apple-touch-icon" href="/img/apple-touch-icon.png">
  <link rel="manifest" href="/site.webmanifest">
`;
s = s.replace(/  <title>[\s\S]*?<link rel="apple-touch-icon"[^>]*>\n/, headSeo);
s = s.replace(/  <script type="application\/ld\+json">[\s\S]*?<\/script>\n(?=<\/head>)/,
  ld.map((j) => `  <script type="application/ld+json">\n${JSON.stringify(j, null, 2)}\n  </script>\n`).join(""));

// logo → "/", meniu cu Rute
s = s.replace('<a href="#" class="hd-logo">', '<a href="/" class="hd-logo">');
s = s.replace('alt="BRO Transport International" width="630" height="222"', 'alt="BRO Transport International – pagina principală" width="630" height="222"');
if (!s.includes('href="#rute"')) s = s.replace('<a href="#servicii">Servicii</a>', '<a href="#servicii">Servicii</a>\n      <a href="#rute">Rute</a>');

// Secțiunea Rute (după Servicii)
const rute = `  <!-- Rute -->
  <section class="sec sec-grey" id="rute">
    <div class="wrap">
      <div class="sec-hd">
        <h2>Rute și servicii</h2>
        <p>Plecări zilnice în ambele sensuri. Alege ruta și vezi cum decurge cursa.</p>
      </div>
      <div class="rt-grid">
${all.map((p) => `        <a class="rt" href="/${p.slug}"><b>${p.short}</b><span>${p.sub}</span></a>`).join("\n")}
      </div>
    </div>
  </section>

`;
s = s.replace(/  <!-- Rute -->[\s\S]*?<\/section>\n\n/, "");
s = s.replace("  <!-- Confort -->", rute + "  <!-- Confort -->");
writeFileSync(f, s);
console.log("index.html actualizat; FAQ:", faq.length);

// Footer comun (copiat din 404.html generat de build-pages.mjs)
const gen = readFileSync(new URL("../404.html", import.meta.url), "utf8");
const ft = gen.match(/<footer class="ft">[\s\S]*?<\/footer>/)[0];
let h = readFileSync(f, "utf8");
h = h.replace(/<footer class="ft">[\s\S]*?<\/footer>/, ft);
writeFileSync(f, h);
console.log("footer sincronizat");
