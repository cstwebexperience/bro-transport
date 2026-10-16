// Toate articolele de blog. Un articol apare pe site doar dacă are published: true.
// Valurile următoare se adaugă în fișiere noi (a4.mjs, ...) și se importă aici.
import a1 from "./a1.mjs";
import a2 from "./a2.mjs";
import a3 from "./a3.mjs";
import extra1 from "./extra-val1.mjs";
import extra1b from "./extra-val1b.mjs";

const extras = { ...extra1 };
for (const [k, v] of Object.entries(extra1b)) extras[k] = (extras[k] || "") + v;
// Secțiunile suplimentare se pun înaintea ultimei secțiuni H2 din articol.
const withExtra = (a) => {
  const x = extras[a.slug];
  if (!x) return a;
  const i = a.body.lastIndexOf("<h2>");
  return { ...a, body: a.body.slice(0, i) + x.trim() + "\n\n" + a.body.slice(i) };
};

export const articles = [...a1, ...a2, ...a3].map(withExtra).sort((x, y) => x.n - y.n);

export const MAIN = {
  DE: { path: "/transport-persoane-romania-germania", link: "Transport persoane România – Germania", label: "Spre Germania", text: "Plecări zilnice, de la adresă la adresă, în ambele sensuri." },
  AT: { path: "/transport-persoane-romania-austria", link: "Transport persoane România – Austria", label: "Spre Austria", text: "Plecări zilnice, te luăm de acasă și te lăsăm la adresă." },
  NL: { path: "/transport-persoane-romania-olanda", link: "Transport persoane România – Olanda", label: "Spre Olanda", text: "Microbuze confortabile pentru drumul lung, de la adresă la adresă." },
  BE: { path: "/transport-persoane-romania-belgia", link: "Transport persoane România – Belgia", label: "Spre Belgia", text: "Un singur drum, fără schimbări, până la adresa din Belgia." },
  COL: { path: "/transport-colete-romania-europa", link: "Transport colete România – Europa", label: "Trimite un colet", text: "Ridicăm coletul de la tine și îl predăm în mână, fără depozite." },
  AUTO: { path: "/transport-auto-platforma", link: "Transport auto pe platformă", label: "Adu mașina acasă", text: "Preluăm mașina de la vânzător și o aducem pe platformă, cu CMR." },
};
