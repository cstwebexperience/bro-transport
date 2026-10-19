// Valul 4 – Grup G (63–67): ghiduri pe orașe din Germania. Conținut local diferit pentru fiecare oraș; distanțe aproximative de la Nădlac.
import { IMG, D2, SRC } from "./_img.mjs";
const G = "Ghiduri pe orașe";

export default [
  {
    n: 63, published: true, date: D2, group: G, main: "DE",
    slug: "transport-romania-munchen",
    title: "Din România la München: ghid de drum și sosire",
    desc: "Ghid pentru drumul din România la München cu microbuzul: traseul prin Salzburg, durata, transportul local MVV, înregistrarea la KVR și sfaturi de sosire.",
    h1: "Din România la München: ghid de drum și sosire",
    cardText: "Traseul prin Salzburg, sosirea, transportul MVV și primele formalități.",
    ...IMG.master,
    imgAlt: "Microbuz BRO Transport pe drumul din România spre München",
    related: ["transport-romania-nurnberg", "transport-romania-stuttgart"],
    intro: `
<p><strong>München e unul dintre cele mai apropiate orașe mari din Germania pentru cine pleacă din România: de la granița de vest a țării sunt aproximativ 900 km, pe autostradă prin Ungaria și Austria, cu intrare în Germania pe la Salzburg.</strong> Cu tot cu preluări și pauze, drumul cu microbuzul durează de regulă în jur de o zi.</p>
<p>Capitala Bavariei e și unul dintre cele mai scumpe orașe din Germania, cu multe locuri de muncă în construcții, industrie, servicii și îngrijire. Mai jos găsești ce să știi despre drum și despre primele zile acolo.</p>`,
    body: `
<h2>Traseul spre München</h2>
<ol>
<li>de la Nădlac sau Borș, prin Ungaria, spre Budapesta și Győr;</li>
<li>intrare în Austria pe la Nickelsdorf, apoi pe lângă Viena, spre Linz;</li>
<li>de la Linz, spre Salzburg, pe autostrada A1;</li>
<li>intrare în Germania la granița Salzburg – Bad Reichenhall / Piding, apoi pe A8 până la München.</li>
</ol>
<p>Pe A8, între granița cu Austria și München, traficul e aglomerat în weekend și în perioadele de vacanță, mai ales pe lângă lacul Chiemsee. La granița dintre Austria și Germania pot exista controale temporare.</p>

<h2>Cât durează</h2>
<div class="tbl"><table>
<thead><tr><th>Porțiune</th><th>Distanță aproximativă</th></tr></thead>
<tbody>
<tr><td>Nădlac – granița Ungaria/Austria</td><td>în jur de 450 km</td></tr>
<tr><td>Nickelsdorf – Salzburg</td><td>în jur de 370 km</td></tr>
<tr><td>Salzburg – München</td><td>în jur de 145 km</td></tr>
</tbody>
</table></div>
<p>La aceste distanțe se adaugă drumul din localitatea ta până la graniță și preluările de pe traseu. Detalii generale despre durată găsești în ghidul despre <a href="/blog/cat-dureaza-drumul-romania-germania">cât durează drumul până în Germania</a>.</p>

<h2>Sosirea la adresă</h2>
<p>Te lăsăm la adresa ta din München sau din împrejurimi. Orașul are multe cartiere, iar zona metropolitană se întinde mult, cu localități ca Dachau, Freising, Erding sau Garching. Spune-ne adresa exactă, cu codul poștal. În clădirile mari de apartamente, numele de pe sonerie e foarte important.</p>

<h2>Transportul în München</h2>
<p>Transportul public din München și din zona din jur e organizat de rețeaua MVV: metrou (U-Bahn), tren suburban (S-Bahn), tramvaie și autobuze. Biletele se cumpără din automate, din aplicație sau de la ghișee. Există și abonamentul lunar valabil în tot transportul local din Germania („Deutschlandticket”). Prețurile și condițiile se schimbă, deci verifică-le pe site-ul ${SRC("https://www.mvv-muenchen.de", "MVV")}.</p>
<p>Aeroportul din München e legat de oraș prin S-Bahn.</p>

<h2>Prima formalitate: înregistrarea adresei</h2>
<p>În München, înregistrarea adresei (Anmeldung) se face la birourile orașului, în cadrul departamentului administrativ al orașului (KVR) sau la birourile de cetățeni din cartiere, de obicei cu programare. Programările se ocupă repede, așa că încearcă să-ți faci una înainte de sosire. Pașii generali sunt în ghidul despre <a href="/blog/anmeldung-germania-ghid">Anmeldung</a>.</p>

<h2>Locuința: cea mai mare provocare</h2>
<p>München are unele dintre cele mai mari chirii din Germania, iar locuințele libere se găsesc greu. Câteva sfaturi:</p>
<ul>
<li>caută și în localitățile din jur, legate de oraș prin S-Bahn. Sunt de obicei mai ieftine;</li>
<li>la început, o cameră într-un apartament comun („WG”) e mai ușor de găsit;</li>
<li>pregătește un dosar cu contractul de muncă și fluturașii de salariu, pentru proprietari;</li>
<li>nu plăti garanția înainte să vezi locuința și să semnezi contractul.</li>
</ul>

<h2>Oktoberfest și perioadele aglomerate</h2>
<p>Oktoberfest, cea mai cunoscută sărbătoare a berii din lume, are loc la München la sfârșitul lui septembrie și începutul lui octombrie. În acea perioadă, orașul e foarte aglomerat, iar cazările sunt scumpe. Dacă te muți sau vii în vizită atunci, planifică totul din timp. La fel și în perioada târgurilor mari și înainte de Crăciun.</p>

<h2>Comunitatea românească</h2>
<p>În München și în Bavaria locuiesc foarte mulți români. Există biserici ortodoxe românești, magazine cu produse românești și asociații ale comunității. Pentru acte, românii din Bavaria se pot adresa ${SRC("https://munchen.mae.ro", "Consulatului General al României la München")}. Verifică pe site programul și serviciile.</p>

<h2>Ce să ai pregătit pentru München</h2>
<ul>
<li>actul de identitate valabil;</li>
<li>adresa completă, cu cod poștal și numele de pe sonerie;</li>
<li>confirmarea de locuire de la proprietar, pentru Anmeldung;</li>
<li>bani pentru primele zile: München e scump;</li>
<li>haine potrivite: iarna e frig, iar vara pot fi ploi și furtuni.</li>
</ul>

<h2>Drumul spre München cu noi</h2>
<p>Te luăm de acasă din România și te lăsăm la adresa din München sau din împrejurimi, fără schimbări pe drum. Dacă mergi mai departe, în nordul Bavariei, vezi și ghidul despre <a href="/blog/transport-romania-nurnberg">Nürnberg</a>, iar pentru Baden-Württemberg, pe cel despre <a href="/blog/transport-romania-stuttgart">Stuttgart</a>. Detalii pe pagina de <a href="/transport-persoane-romania-germania">transport persoane România – Germania</a>.</p>`,
    faq: [
      ["Cât durează drumul din România la München?", "De regulă în jur de o zi, cu preluări și pauze. De la granița de vest a României sunt aproximativ 900 km."],
      ["Pe unde se intră în Germania spre München?", "De obicei pe la Salzburg, apoi pe autostrada A8 până la München."],
      ["Mă lăsați și în localitățile din jurul Münchenului?", "Da, transportul e de la adresă la adresă. Spune-ne adresa exactă la rezervare."],
      ["Unde fac Anmeldung în München?", "La birourile orașului (KVR) sau la birourile de cetățeni din cartiere, de obicei cu programare."],
      ["Există consulat românesc la München?", "Da, Consulatul General al României la München. Verifică pe site programul și serviciile."],
    ],
  },

  {
    n: 64, published: true, date: D2, group: G, main: "DE",
    slug: "transport-romania-stuttgart",
    title: "Drumul spre Stuttgart: ce trebuie să știi",
    desc: "Ce trebuie să știi despre drumul din România la Stuttgart: traseul prin München și Ulm, durata, zona cu emisii reduse, transportul VVS și sosirea.",
    h1: "Drumul spre Stuttgart: ce trebuie să știi",
    cardText: "Traseul pe A8 prin Ulm, orașul dintre dealuri, transportul VVS și sosirea.",
    ...IMG.trafic,
    imgAlt: "Microbuz Renault Trafic pe drumul spre Stuttgart",
    related: ["transport-romania-munchen", "transport-romania-frankfurt"],
    intro: `
<p><strong>Stuttgart se află la aproximativ 1.100–1.150 km de granița de vest a României, pe un traseu care trece prin Ungaria, Austria, apoi prin München și Ulm, pe autostrada A8.</strong> Cu preluări și pauze, drumul cu microbuzul durează de regulă puțin peste o zi.</p>
<p>Capitala landului Baden-Württemberg e cunoscută pentru industria auto și pentru firmele mari din zonă, iar mulți români lucrează aici în industrie, construcții, logistică și îngrijire.</p>`,
    body: `
<h2>Traseul spre Stuttgart</h2>
<ol>
<li>prin Ungaria, de la Nădlac sau Borș spre Győr;</li>
<li>prin Austria, de la Nickelsdorf spre Linz și Salzburg;</li>
<li>intrare în Germania la Salzburg, apoi pe A8 spre München;</li>
<li>de la München, tot pe A8, spre Augsburg și Ulm;</li>
<li>de la Ulm, peste dealurile Alb-ului Șvab, până la Stuttgart.</li>
</ol>
<p>Porțiunea de autostradă dintre Ulm și Stuttgart, care urcă și coboară podișul Alb-ului Șvab („Albaufstieg” și „Albabstieg”), e cunoscută pentru lucrări și blocaje, iar iarna poate fi ninsoare. Șoferii aleg ora de trecere ca să evite pe cât se poate blocajele.</p>

<h2>Distanțe orientative</h2>
<div class="tbl"><table>
<thead><tr><th>Porțiune</th><th>Distanță aproximativă</th></tr></thead>
<tbody>
<tr><td>Nădlac – München</td><td>în jur de 900 km</td></tr>
<tr><td>München – Ulm</td><td>în jur de 150 km</td></tr>
<tr><td>Ulm – Stuttgart</td><td>în jur de 95 km</td></tr>
</tbody>
</table></div>

<h2>Un oraș între dealuri</h2>
<p>Centrul orașului Stuttgart se află într-o vale înconjurată de dealuri, numită de localnici „Kessel” (ceaunul). Multe cartiere sunt pe pante, cu străzi abrupte și scări publice. Pentru sosire, asta înseamnă că unele adrese sunt pe străzi înguste și în pantă. Spune-ne adresa exactă și orice detaliu util, de exemplu dacă e o curte interioară sau un acces greu.</p>

<h2>Zona cu emisii reduse: important dacă ai mașină</h2>
<p>Stuttgart are o zonă cu emisii reduse („Umweltzone”), unde mașinile au nevoie de o vinietă ecologică de o anumită culoare. În trecut, orașul a avut și restricții pentru unele mașini diesel mai vechi. Dacă vii sau aduci acolo mașina personală, verifică regulile actuale pe site-ul orașului. Pentru cine vine cu noi, nu e nevoie de nimic: e treaba transportatorului.</p>
<!-- TODO: de verificat regulile actuale ale Umweltzone și restricțiile diesel din Stuttgart. -->

<h2>Transportul în Stuttgart</h2>
<p>Transportul public e organizat de rețeaua VVS: tren suburban (S-Bahn), tramvai-metrou (Stadtbahn, marcat cu „U”), autobuze și chiar o cale ferată cu cremalieră pe un deal, numită „Zacke”. Biletele se cumpără din automate sau din aplicație. Informații pe ${SRC("https://www.vvs.de", "vvs.de")}.</p>
<p>În zona gării centrale au loc de ani buni lucrări mari, la proiectul „Stuttgart 21”. Dacă ai de luat trenul de acolo, lasă-ți timp în plus.</p>

<h2>Unde se lucrează</h2>
<p>Zona Stuttgart e unul dintre cele mai importante centre industriale din Germania, cu producători auto și mulți furnizori de piese, firme de inginerie și de logistică. Mulți români lucrează aici, de asemenea, în construcții, în curățenie și în îngrijire. Dacă vii la muncă, vezi ghidul despre <a href="/blog/munca-in-germania-ghid-romani">munca în Germania</a>.</p>

<h2>Prima săptămână</h2>
<ul>
<li>programare pentru înregistrarea adresei la biroul de cetățeni („Bürgerbüro”);</li>
<li>cartelă de telefon și cont bancar;</li>
<li>alegerea unei case de asigurări de sănătate;</li>
<li>abonamentul de transport pentru drumul la muncă.</li>
</ul>
<p>Ordinea completă e în <a href="/blog/prima-zi-in-germania-checklist">checklist-ul pentru primele 7 zile</a>.</p>

<h2>Comunitatea românească</h2>
<p>În Baden-Württemberg trăiesc mulți români, iar în Stuttgart și în orașele din jur există parohii ortodoxe românești, magazine românești și asociații. Pentru acte, românii din zonă se pot adresa ${SRC("https://stuttgart.mae.ro", "Consulatului General al României la Stuttgart")}. Verifică pe site programul și serviciile.</p>

<h2>Împrejurimile</h2>
<p>Mulți români locuiesc nu chiar în Stuttgart, ci în orașele din jur: Esslingen, Ludwigsburg, Böblingen, Sindelfingen, Waiblingen, Göppingen. Transportul e de la adresă la adresă, deci te lăsăm direct acolo. Spune-ne localitatea exactă la rezervare.</p>

<h2>Ce să ai pregătit</h2>
<ul>
<li>actul de identitate valabil;</li>
<li>adresa completă, cu cod poștal, și numele de pe sonerie;</li>
<li>un număr de telefon la care răspunzi la sosire;</li>
<li>confirmarea proprietarului pentru Anmeldung.</li>
</ul>

<h2>Drumul spre Stuttgart cu noi</h2>
<p>Te luăm de acasă și te lăsăm la adresa din Stuttgart sau din împrejurimi. Dacă mergi mai spre nord, vezi și ghidul despre <a href="/blog/transport-romania-frankfurt">Frankfurt</a>; dacă oprești înainte, pe cel despre <a href="/blog/transport-romania-munchen">München</a>. Detalii pe pagina de <a href="/transport-persoane-romania-germania">transport persoane România – Germania</a>.</p>`,
    faq: [
      ["Câți kilometri sunt până la Stuttgart?", "De la granița de vest a României, aproximativ 1.100–1.150 km, prin Ungaria, Austria, München și Ulm."],
      ["Cât durează drumul cu microbuzul?", "De regulă puțin peste o zi, cu preluări și pauze."],
      ["Mă lăsați și în Esslingen sau Ludwigsburg?", "Da, transportul e de la adresă la adresă. Spune-ne localitatea exactă la rezervare."],
      ["Ce este Umweltzone?", "Zona cu emisii reduse, unde mașinile au nevoie de o vinietă ecologică. Contează doar dacă vii cu mașina personală."],
      ["Există consulat românesc la Stuttgart?", "Da, Consulatul General al României la Stuttgart. Verifică pe site programul și serviciile."],
    ],
  },

  {
    n: 65, published: true, date: D2, group: G, main: "DE",
    slug: "transport-romania-frankfurt",
    title: "Spre Frankfurt cu microbuzul: ghid practic",
    desc: "Ghid practic pentru drumul cu microbuzul din România la Frankfurt: traseul prin Passau și Nürnberg, durata, transportul RMV, aeroportul și sosirea.",
    h1: "Spre Frankfurt cu microbuzul: ghid practic",
    cardText: "Traseul pe A3, orașul de pe Main, transportul RMV și sosirea la adresă.",
    ...IMG.masterRemorca,
    imgAlt: "Microbuz cu remorcă pe autostrada spre Frankfurt",
    related: ["transport-romania-nurnberg", "transport-romania-koln-dusseldorf"],
    intro: `
<p><strong>Frankfurt pe Main se află la aproximativ 1.200–1.250 km de granița de vest a României, pe un traseu care intră în Germania pe la Passau și continuă pe autostrada A3, prin Regensburg, Nürnberg și Würzburg.</strong> Cu preluări și pauze, drumul cu microbuzul durează de regulă puțin peste o zi.</p>
<p>Frankfurt e centrul financiar al Germaniei, cu cel mai mare aeroport din țară și un nod important de autostrăzi și căi ferate. Mai jos găsești ce să știi despre drum și despre sosire.</p>`,
    body: `
<h2>Traseul spre Frankfurt</h2>
<ol>
<li>prin Ungaria, spre Győr;</li>
<li>prin Austria, de la Nickelsdorf spre Linz;</li>
<li>intrare în Germania pe la Passau (Suben), pe A3;</li>
<li>pe A3, prin Regensburg, Nürnberg și Würzburg;</li>
<li>până la Frankfurt.</li>
</ol>
<p>A3 e una dintre cele mai circulate autostrăzi din Germania, cu multe camioane și lucrări. Porțiunea dintre Nürnberg și Würzburg și zona de lângă Frankfurt au adesea blocaje. Șoferii aleg ora de trecere ca să evite traficul cel mai greu.</p>

<h2>Distanțe orientative</h2>
<div class="tbl"><table>
<thead><tr><th>Porțiune</th><th>Distanță aproximativă</th></tr></thead>
<tbody>
<tr><td>Nădlac – Passau</td><td>în jur de 790 km</td></tr>
<tr><td>Passau – Nürnberg</td><td>în jur de 220 km</td></tr>
<tr><td>Nürnberg – Frankfurt</td><td>în jur de 225 km</td></tr>
</tbody>
</table></div>
<p>La acestea se adaugă drumul din localitatea ta până la graniță și preluările.</p>

<h2>Frankfurt și zona Rin-Main</h2>
<p>Frankfurt nu e un oraș foarte mare ca număr de locuitori, dar face parte din zona metropolitană Rin-Main, cu multe orașe apropiate: Offenbach, Wiesbaden, Mainz, Darmstadt, Hanau, Bad Homburg. Mulți români locuiesc în aceste orașe și lucrează în Frankfurt sau invers. Transportul e de la adresă la adresă, deci te lăsăm direct în localitatea ta.</p>

<h2>Transportul local</h2>
<p>Transportul public din Frankfurt și din toată zona e organizat de rețeaua RMV: S-Bahn, U-Bahn, tramvaie, autobuze și trenuri regionale. Biletele se cumpără din automate sau din aplicație. Informații pe ${SRC("https://www.rmv.de", "rmv.de")}.</p>

<h2>Aeroportul Frankfurt</h2>
<p>Aeroportul din Frankfurt e cel mai mare din Germania și are multe zboruri spre România. Unii pasageri compară drumul cu microbuzul cu un zbor până la Frankfurt. Când compari, adaugă drumul până la aeroportul din România, bagajele, așteptarea și drumul de la aeroport la adresa ta. Comparația completă e în articolul despre <a href="/blog/microbuz-vs-avion-germania">microbuz sau avion spre Germania</a>.</p>

<h2>Ce înseamnă Frankfurt pentru cine vine la muncă</h2>
<p>Pe lângă bănci și firme mari, zona Frankfurt are multe locuri de muncă în logistică (aeroportul și depozitele din jur), construcții, curățenie, hoteluri și restaurante. Târgurile internaționale („Messe”) aduc periodic mulți vizitatori și cerere de personal temporar. Dacă vii la muncă, vezi ghidul despre <a href="/blog/munca-in-germania-ghid-romani">munca în Germania</a>.</p>

<h2>Locuința</h2>
<p>Chiriile în Frankfurt sunt printre cele mai mari din Germania. Multe persoane aleg să locuiască în orașele din jur, legate de Frankfurt prin S-Bahn. Pregătește un dosar cu contractul de muncă și fluturașii de salariu și nu plăti garanția înainte să vezi locuința și să semnezi contractul.</p>

<h2>Perioadele aglomerate</h2>
<p>În perioada târgurilor mari, de exemplu târgul de carte din toamnă sau alte târguri internaționale, hotelurile sunt pline și scumpe, iar traficul în jurul zonei de târg e greu. Dacă vii pentru câteva zile, verifică dinainte calendarul târgurilor.</p>

<h2>Prima săptămână</h2>
<ul>
<li>înregistrarea adresei la biroul de cetățeni al orașului, cu programare;</li>
<li>cartelă de telefon și cont bancar;</li>
<li>casa de asigurări de sănătate;</li>
<li>abonamentul de transport.</li>
</ul>
<p>Detalii în <a href="/blog/prima-zi-in-germania-checklist">checklist-ul pentru primele 7 zile</a> și în ghidul despre <a href="/blog/anmeldung-germania-ghid">Anmeldung</a>.</p>

<h2>Ce să ai pregătit</h2>
<ul>
<li>actul de identitate valabil;</li>
<li>adresa completă, cu cod poștal din cinci cifre, și numele de pe sonerie;</li>
<li>un telefon la care răspunzi;</li>
<li>confirmarea proprietarului pentru Anmeldung.</li>
</ul>

<h2>Drumul spre Frankfurt cu noi</h2>
<p>Te luăm de acasă și te lăsăm la adresa din Frankfurt sau din zona Rin-Main. Dacă mergi mai departe, spre Köln și Düsseldorf, vezi <a href="/blog/transport-romania-koln-dusseldorf">ghidul pentru Köln și Düsseldorf</a>; dacă oprești mai devreme, pe cel despre <a href="/blog/transport-romania-nurnberg">Nürnberg</a>. Detalii pe pagina de <a href="/transport-persoane-romania-germania">transport persoane România – Germania</a>.</p>`,
    faq: [
      ["Câți kilometri sunt până la Frankfurt?", "De la granița de vest a României, aproximativ 1.200–1.250 km, prin Ungaria, Austria și apoi pe A3."],
      ["Pe ce autostradă se merge în Germania?", "De obicei pe A3, de la Passau prin Regensburg, Nürnberg și Würzburg."],
      ["Mă lăsați în Offenbach sau Wiesbaden?", "Da, transportul e de la adresă la adresă. Spune-ne adresa exactă la rezervare."],
      ["E mai rapid cu avionul până la Frankfurt?", "Zborul e mai scurt, dar adună drumul până la aeroport, așteptarea, bagajele și drumul până la adresă."],
      ["Cine se ocupă de transportul public în Frankfurt?", "Rețeaua RMV, cu S-Bahn, U-Bahn, tramvaie și autobuze."],
    ],
  },

  {
    n: 66, published: true, date: D2, group: G, main: "DE",
    slug: "transport-romania-nurnberg",
    title: "România – Nürnberg: drum, opriri, sosire",
    desc: "Drumul din România la Nürnberg cu microbuzul: traseul prin Passau și Regensburg pe A3, durata, opririle, transportul VGN și sfaturi pentru sosire.",
    h1: "România – Nürnberg: drum, opriri, sosire",
    cardText: "Pe A3 prin Passau și Regensburg, opririle, sosirea și orașul vechi.",
    ...IMG.van,
    imgAlt: "Microbuz BRO Transport pe drumul spre Nürnberg",
    related: ["transport-romania-munchen", "transport-romania-frankfurt"],
    intro: `
<p><strong>Nürnberg e unul dintre cele mai apropiate orașe mari din Germania pentru cine vine din România: de la granița de vest a țării sunt aproximativ 1.000 km, cu intrare în Germania pe la Passau și apoi pe autostrada A3, prin Regensburg.</strong> Cu preluări și pauze, drumul cu microbuzul durează de regulă în jur de o zi.</p>
<p>Al doilea oraș ca mărime din Bavaria e un nod important de autostrăzi, așa că multe curse spre nordul și vestul Germaniei trec pe aici.</p>`,
    body: `
<h2>Traseul spre Nürnberg</h2>
<ol>
<li>prin Ungaria, de la Nădlac sau Borș spre Győr;</li>
<li>prin Austria, de la Nickelsdorf spre Linz, apoi spre granița cu Germania;</li>
<li>intrare în Germania la Passau (Suben);</li>
<li>pe A3, de-a lungul Dunării, până la Regensburg;</li>
<li>de la Regensburg, tot pe A3, până la Nürnberg.</li>
</ol>
<p>Porțiunea de A3 dintre Passau și Regensburg e circulată intens de camioane. În apropiere de Nürnberg, autostrăzile A3, A6, A9 și A73 se întâlnesc, iar în nodurile din jurul orașului se formează des blocaje la orele de vârf.</p>

<h2>Opririle obișnuite pe drum</h2>
<p>Pe un drum de aproximativ o zi se fac mai multe opriri: pentru toaletă, pentru o cafea, pentru masă și pentru alimentare. De obicei, primele pauze mai lungi se fac în Ungaria sau în Austria. În Germania, zonele de servicii de pe A3 au restaurante, magazine și toalete, unele cu plată. Ține câteva monede de euro la tine.</p>

<h2>Distanțe orientative</h2>
<div class="tbl"><table>
<thead><tr><th>Porțiune</th><th>Distanță aproximativă</th></tr></thead>
<tbody>
<tr><td>Nădlac – Linz</td><td>în jur de 640 km</td></tr>
<tr><td>Linz – Passau</td><td>în jur de 85 km</td></tr>
<tr><td>Passau – Regensburg</td><td>în jur de 120 km</td></tr>
<tr><td>Regensburg – Nürnberg</td><td>în jur de 100 km</td></tr>
</tbody>
</table></div>

<h2>Nürnberg și orașele din jur</h2>
<p>Nürnberg face parte dintr-o zonă metropolitană cu orașe apropiate unele de altele: Fürth, Erlangen, Schwabach. Multe firme și locuri de muncă sunt răspândite în toată zona. Transportul e de la adresă la adresă, deci te lăsăm direct în localitatea ta, nu doar în Nürnberg.</p>

<h2>Transportul local</h2>
<p>Transportul public din zonă e organizat de rețeaua VGN: metrou (U-Bahn), S-Bahn, tramvaie și autobuze. Nürnberg are și un metrou automat, fără conducător, pe unele linii. Biletele se cumpără din automate sau din aplicație. Informații pe ${SRC("https://www.vgn.de", "vgn.de")}.</p>

<h2>Orașul vechi și târgul de Crăciun</h2>
<p>Nürnberg are un oraș vechi înconjurat de ziduri medievale, cu un castel pe deal. Târgul de Crăciun din Nürnberg („Christkindlesmarkt”) e unul dintre cele mai cunoscute din Germania și atrage foarte mulți vizitatori în decembrie. Dacă ajungi în acea perioadă, centrul e foarte aglomerat.</p>

<h2>Locuri de muncă</h2>
<p>Zona Nürnberg are industrie, firme de logistică, comerț și servicii. Pentru că e un nod de autostrăzi, logistica și depozitele oferă multe locuri de muncă. Mulți români lucrează aici și în construcții, curățenie, îngrijire și în restaurante. Ghidul general e în articolul despre <a href="/blog/munca-in-germania-ghid-romani">munca în Germania</a>.</p>

<h2>Locuința</h2>
<p>Chiriile în Nürnberg sunt de obicei mai mici decât în München sau Frankfurt, dar și aici locuințele bune se ocupă repede. Fürth și Erlangen au propriile piețe de închiriere. Nu plăti garanția înainte să vezi locuința și să semnezi contractul.</p>

<h2>Prima săptămână</h2>
<ul>
<li>înregistrarea adresei la biroul orașului, cu programare;</li>
<li>cartelă de telefon și cont bancar;</li>
<li>casa de asigurări de sănătate;</li>
<li>abonamentul de transport.</li>
</ul>
<p>Detalii în <a href="/blog/prima-zi-in-germania-checklist">checklist-ul pentru primele 7 zile</a>.</p>

<h2>Comunitatea românească</h2>
<p>În Nürnberg și în împrejurimi trăiesc mulți români. Există parohii ortodoxe românești și magazine cu produse românești. Pentru acte, românii din Bavaria se pot adresa Consulatului General al României la München. Verifică pe site-ul ${SRC("https://www.mae.ro", "MAE")} misiunea competentă și programul.</p>

<h2>Ce să ai pregătit</h2>
<ul>
<li>actul de identitate valabil;</li>
<li>adresa completă, cu cod poștal și numele de pe sonerie;</li>
<li>telefonul pornit în ziua sosirii;</li>
<li>confirmarea proprietarului pentru Anmeldung.</li>
</ul>

<h2>Drumul spre Nürnberg cu noi</h2>
<p>Te luăm de acasă și te lăsăm la adresa din Nürnberg, Fürth, Erlangen sau împrejurimi. Dacă mergi mai spre vest, vezi ghidul despre <a href="/blog/transport-romania-frankfurt">Frankfurt</a>; spre sud, pe cel despre <a href="/blog/transport-romania-munchen">München</a>. Detalii pe pagina de <a href="/transport-persoane-romania-germania">transport persoane România – Germania</a>.</p>`,
    faq: [
      ["Câți kilometri sunt până la Nürnberg?", "De la granița de vest a României, aproximativ 1.000 km, prin Ungaria, Austria și apoi pe A3."],
      ["Pe unde se intră în Germania?", "De obicei pe la Passau, apoi pe A3 prin Regensburg."],
      ["Mă lăsați și în Fürth sau Erlangen?", "Da, transportul e de la adresă la adresă. Spune-ne adresa exactă la rezervare."],
      ["Cine organizează transportul public în Nürnberg?", "Rețeaua VGN, cu metrou, S-Bahn, tramvaie și autobuze."],
      ["Unde mă adresez pentru acte românești în Bavaria?", "Consulatului General al României la München. Verifică pe site-ul MAE programul."],
    ],
  },

  {
    n: 67, published: true, date: D2, group: G, main: "DE",
    slug: "transport-romania-berlin",
    title: "Din România la Berlin pe drum: ce te așteaptă",
    desc: "Ce te așteaptă pe drumul din România la Berlin cu microbuzul: traseele posibile, durata, programările la Bürgeramt, transportul BVG și sfaturi de sosire.",
    h1: "Din România la Berlin pe drum: ce te așteaptă",
    cardText: "Traseele posibile, durata, Bürgeramt-ul aglomerat și transportul BVG.",
    ...IMG.hero,
    imgAlt: "Microbuze BRO Transport pentru drumul lung spre Berlin",
    related: ["transport-romania-nurnberg", "cat-dureaza-drumul-romania-germania"],
    intro: `
<p><strong>Berlinul se află la aproximativ 1.250–1.450 km de granița de vest a României, în funcție de traseu: fie prin Ungaria, Slovacia și Cehia, prin Praga și Dresda, fie prin Austria și sudul Germaniei, pe A9 prin Nürnberg și Leipzig.</strong> Cu preluări și pauze, drumul cu microbuzul durează de regulă în jur de o zi și jumătate.</p>
<p>Capitala Germaniei e cel mai mare oraș al țării și are o comunitate românească numeroasă. Mai jos găsești ce să știi despre drum și despre primele zile.</p>`,
    body: `
<h2>Două trasee posibile</h2>
<div class="tbl"><table>
<thead><tr><th></th><th>Prin Cehia</th><th>Prin Austria și Bavaria</th></tr></thead>
<tbody>
<tr><td>Țări</td><td>Ungaria, Slovacia, Cehia, Germania</td><td>Ungaria, Austria, Germania</td></tr>
<tr><td>Orașe pe drum</td><td>Budapesta, Bratislava, Brno, Praga, Dresda</td><td>Budapesta, Viena, Linz, Passau, Nürnberg, Leipzig</td></tr>
<tr><td>Distanță de la Nădlac</td><td>în jur de 1.250 km</td><td>în jur de 1.450 km</td></tr>
</tbody>
</table></div>
<p>Traseul exact se alege în funcție de adresele celorlalți pasageri și de trafic. Dacă în microbuz sunt și pasageri pentru Bavaria, se merge de obicei prin sudul Germaniei. Taxele de drum din toate țările sunt incluse în preț.</p>

<h2>Ce poate lungi drumul</h2>
<ul>
<li>lucrările frecvente pe autostrăzile din Cehia, între Brno și Praga;</li>
<li>traficul din jurul Budapestei, Pragăi sau Nürnbergului, la orele de vârf;</li>
<li>controalele temporare la unele granițe;</li>
<li>iarna, ninsoarea pe porțiunile din Cehia și din estul Germaniei;</li>
<li>inelul de autostradă din jurul Berlinului („Berliner Ring”), adesea aglomerat.</li>
</ul>
<p>Pentru un drum atât de lung, sfaturile despre somn și confort din ghidul despre <a href="/blog/calatorie-de-noapte-microbuz-confort">cursele de noapte</a> te ajută mult.</p>

<h2>Sosirea în Berlin</h2>
<p>Berlinul e mare și împărțit în 12 districte, fiecare cu mai multe cartiere. Spune-ne adresa exactă, cu codul poștal. În blocurile vechi, cu curți interioare („Hinterhof”), adresa poate fi în clădirea din spate. Spune-ne și asta, plus numele de pe sonerie.</p>

<h2>Bürgeramt: programarea, partea grea</h2>
<p>În Berlin, înregistrarea adresei (Anmeldung) se face la orice Bürgeramt din oraș, cu programare. Programările sunt cunoscute ca fiind greu de găsit. Câteva sfaturi:</p>
<ul>
<li>caută programări la toate birourile din oraș, nu doar la cel din districtul tău;</li>
<li>verifică dimineața devreme, când se eliberează locuri noi;</li>
<li>păstrează dovada că ai încercat, dacă nu găsești programare în termenul legal.</li>
</ul>
<p>Pașii generali sunt în ghidul despre <a href="/blog/anmeldung-germania-ghid">Anmeldung</a>. Informații oficiale pe portalul orașului, ${SRC("https://service.berlin.de", "service.berlin.de")}.</p>

<h2>Transportul în Berlin</h2>
<p>Transportul public e organizat de BVG (metrou U-Bahn, tramvaie, autobuze) și de S-Bahn Berlin, în cadrul rețelei VBB. Orașul e împărțit în zone tarifare: A (centrul), B (până la limita orașului) și C (împrejurimile). Biletele se cumpără din automate sau din aplicație. Informații pe ${SRC("https://www.bvg.de", "bvg.de")}.</p>

<h2>Locuința în Berlin</h2>
<p>Berlinul a fost mult timp cunoscut pentru chirii mici, dar în ultimii ani ele au crescut mult, iar găsirea unei locuințe e grea. La vizionări vin adesea zeci de oameni. Pregătește un dosar cu contractul de muncă, fluturașii de salariu și, dacă se poate, un document care arată că nu ai datorii la chirie. Nu plăti garanția înainte să vezi locuința și să semnezi contractul. Multe anunțuri false cer bani „pentru rezervare”.</p>

<h2>Locuri de muncă</h2>
<p>Berlinul are multe locuri de muncă în servicii, construcții, curățenie, restaurante, hoteluri, logistică, îngrijire și în firmele de tehnologie. În firmele internaționale se lucrează adesea în engleză. Ghidul general e în articolul despre <a href="/blog/munca-in-germania-ghid-romani">munca în Germania</a>.</p>

<h2>Comunitatea românească și ambasada</h2>
<p>În Berlin trăiesc foarte mulți români. Există parohii ortodoxe românești, asociații și magazine cu produse românești. ${SRC("https://berlin.mae.ro", "Ambasada României la Berlin")} are și secție consulară, pentru acte. Verifică pe site programul și serviciile.</p>

<h2>Ce să ai pregătit</h2>
<ul>
<li>actul de identitate valabil;</li>
<li>adresa completă, cu cod poștal, și detalii despre clădire (față sau curte interioară);</li>
<li>confirmarea proprietarului pentru Anmeldung;</li>
<li>răbdare cu programările și cu căutarea locuinței.</li>
</ul>

<h2>Drumul spre Berlin cu noi</h2>
<p>Te luăm de acasă și te lăsăm la adresa din Berlin sau din împrejurimi, fără schimbări pe drum. Pentru un drum atât de lung, contează confortul: loc pentru picioare, aer condiționat, Webasto iarna și, pe Renault Master, pat pentru dormit. Cât durează drumul spre alte orașe afli din ghidul despre <a href="/blog/cat-dureaza-drumul-romania-germania">durata drumului până în Germania</a>. Detalii pe pagina de <a href="/transport-persoane-romania-germania">transport persoane România – Germania</a>.</p>`,
    faq: [
      ["Câți kilometri sunt până la Berlin?", "Între aproximativ 1.250 și 1.450 km de la granița de vest a României, în funcție de traseu."],
      ["Pe unde se merge spre Berlin?", "Fie prin Ungaria, Slovacia și Cehia, prin Praga și Dresda, fie prin Austria și Bavaria, pe A9."],
      ["De ce e greu cu Anmeldung în Berlin?", "Programările la Bürgeramt se ocupă repede. Caută la toate birourile din oraș și verifică dimineața devreme."],
      ["Ce sunt zonele A, B și C?", "Zonele tarifare ale transportului public din Berlin: centrul, restul orașului și împrejurimile."],
      ["Unde mă adresez pentru acte românești în Berlin?", "Secției consulare a Ambasadei României la Berlin."],
    ],
  },
];
