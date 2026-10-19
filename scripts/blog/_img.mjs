// Pozele reale de pe site, cu dimensiuni, pentru articolele din valurile 2–4.
const i = (img, imgW, imgH) => ({ img, imgW, imgH });
export const IMG = {
  master: i("/img/hero-master.webp", 1024, 688),
  hero: i("/img/hero.webp", 1600, 895),
  van: i("/img/hero-van.webp", 1024, 688),
  banchete: i("/img/interior-banchete.webp", 900, 678),
  lux: i("/img/interior-lux.webp", 1000, 672),
  masterRemorca: i("/img/master-remorca.webp", 1024, 688),
  platforma: i("/img/platforma.webp", 900, 605),
  portbagaj: i("/img/portbagaj.webp", 900, 678),
  sharan: i("/img/sharan-remorca.webp", 900, 605),
  traficFata: i("/img/trafic-fata.webp", 1000, 753),
  traficRemorca: i("/img/trafic-remorca.webp", 900, 605),
  trafic: i("/img/trafic.webp", 900, 605),
};
export const D2 = "2026-10-19";
export const SRC = (href, text) => `<a href="${href}" target="_blank" rel="noopener nofollow">${text}</a>`;
