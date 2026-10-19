// Toate articolele de blog. Un articol apare pe site doar dacă are published: true.
// Valul 1 e în a1–a3; valurile 2–4 (toate cele 72 din plan) sunt în b1–g2.
import a1 from "./a1.mjs";
import a2 from "./a2.mjs";
import a3 from "./a3.mjs";
import extra1 from "./extra-val1.mjs";
import extra1b from "./extra-val1b.mjs";
// Valurile 2–4: fiecare fișier de articole are lângă el un fișier „x” cu secțiuni suplimentare.
import b1 from "./b1.mjs"; import b1x from "./b1x.mjs";
import b2 from "./b2.mjs"; import b2x from "./b2x.mjs";
import c1 from "./c1.mjs"; import c1x from "./c1x.mjs";
import c2 from "./c2.mjs"; import c2x from "./c2x.mjs";
import d1 from "./d1.mjs"; import d1x from "./d1x.mjs";
import d2 from "./d2.mjs"; import d2x from "./d2x.mjs";
import e1 from "./e1.mjs"; import e1x from "./e1x.mjs";
import e2 from "./e2.mjs"; import e2x from "./e2x.mjs";
import f1 from "./f1.mjs"; import f1x from "./f1x.mjs";
import f2 from "./f2.mjs"; import f2x from "./f2x.mjs";
import g1 from "./g1.mjs"; import g1x from "./g1x.mjs";
import g2 from "./g2.mjs"; import g2x from "./g2x.mjs";

const extras = { ...extra1 };
for (const x of [extra1b, b1x, b2x, c1x, c2x, d1x, d2x, e1x, e2x, f1x, f2x, g1x, g2x])
  for (const [k, v] of Object.entries(x)) extras[k] = (extras[k] || "") + v;
// Secțiunile suplimentare se pun înaintea ultimei secțiuni H2 din articol.
const withExtra = (a) => {
  const x = extras[a.slug];
  if (!x) return a;
  const i = a.body.lastIndexOf("<h2>");
  return { ...a, body: a.body.slice(0, i) + x.trim() + "\n\n" + a.body.slice(i) };
};

export const articles = [...a1, ...a2, ...a3, ...b1, ...b2, ...c1, ...c2, ...d1, ...d2, ...e1, ...e2, ...f1, ...f2, ...g1, ...g2].map(withExtra).sort((x, y) => x.n - y.n);

export const MAIN = {
  DE: { path: "/transport-persoane-romania-germania", link: "Transport persoane România – Germania", label: "Spre Germania", text: "Plecări zilnice, de la adresă la adresă, în ambele sensuri." },
  AT: { path: "/transport-persoane-romania-austria", link: "Transport persoane România – Austria", label: "Spre Austria", text: "Plecări zilnice, te luăm de acasă și te lăsăm la adresă." },
  NL: { path: "/transport-persoane-romania-olanda", link: "Transport persoane România – Olanda", label: "Spre Olanda", text: "Microbuze confortabile pentru drumul lung, de la adresă la adresă." },
  BE: { path: "/transport-persoane-romania-belgia", link: "Transport persoane România – Belgia", label: "Spre Belgia", text: "Un singur drum, fără schimbări, până la adresa din Belgia." },
  COL: { path: "/transport-colete-romania-europa", link: "Transport colete România – Europa", label: "Trimite un colet", text: "Ridicăm coletul de la tine și îl predăm în mână, fără depozite." },
  AUTO: { path: "/transport-auto-platforma", link: "Transport auto pe platformă", label: "Adu mașina acasă", text: "Preluăm mașina de la vânzător și o aducem pe platformă, cu CMR." },
};
