// Valul 2 – Grup B (11–16): ghiduri de călătorie pe rute. Durate și distanțe aproximative, fără promisiuni de oră fixă.
import { IMG, D2 } from "./_img.mjs";
const G = "Ghiduri de călătorie";

export default [
  {
    n: 11, published: true, date: D2, group: G, main: "DE",
    slug: "cat-dureaza-drumul-romania-germania",
    title: "Cât durează drumul România – Germania cu microbuzul",
    desc: "Cât durează drumul cu microbuzul din România în Germania, de ce variază de la oraș la oraș, câte pauze se fac și cum îți faci drumul mai ușor.",
    h1: "Cât durează drumul România – Germania cu microbuzul",
    cardText: "De ce diferă durata de la un oraș la altul și ce o lungește sau o scurtează.",
    ...IMG.master,
    imgAlt: "Microbuz Renault Master pe autostradă spre Germania",
    related: ["ruta-romania-germania-prin-ungaria-austria", "calatorie-de-noapte-microbuz-confort"],
    intro: `
<p><strong>Drumul cu microbuzul din România în Germania durează, de regulă, între o zi și o zi și jumătate, cu tot cu pauze și preluări.</strong> Pentru sudul Germaniei (Bavaria, Baden-Württemberg) drumul e mai scurt. Pentru nordul țării sau zona Ruhr durează mai mult.</p>
<p>Durata exactă depinde de localitatea din care pleci, de adresa din Germania, de câți pasageri sunt preluați pe traseu și de trafic. La rezervare îți spunem cu aproximație când ajungi, iar șoferul te sună înainte de sosire.</p>`,
    body: `
<h2>Distanța: de ce „Germania” nu înseamnă un singur drum</h2>
<p>Germania se întinde pe aproape 900 de kilometri de la sud la nord. Din vestul României până la granița germană sunt aproximativ 900–1.000 km, iar din sudul sau estul țării se adaugă încă câteva sute. Un drum din Oltenia până la München e deci cu totul altceva decât unul din Moldova până la Hamburg.</p>
<div class="tbl"><table>
<thead><tr><th>Destinație în Germania</th><th>Distanță aproximativă de la granița de vest a României</th></tr></thead>
<tbody>
<tr><td>München, Nürnberg (sud-est)</td><td>în jur de 1.000–1.200 km</td></tr>
<tr><td>Stuttgart, Frankfurt (sud-vest și centru)</td><td>în jur de 1.200–1.400 km</td></tr>
<tr><td>Köln, Düsseldorf, zona Ruhr (vest)</td><td>în jur de 1.500–1.600 km</td></tr>
<tr><td>Berlin, Hamburg (nord)</td><td>în jur de 1.300–1.700 km</td></tr>
</tbody>
</table></div>
<p>Cifrele sunt orientative, pe rutele obișnuite de autostradă. La ele se adaugă drumul din localitatea ta până la granița de vest.</p>

<h2>Ce face drumul mai lung sau mai scurt</h2>
<h3>Preluările de pe traseu</h3>
<p>La un transport de la adresă la adresă, microbuzul trece pe la fiecare pasager. Asta e avantajul principal, pentru că nu cari bagajele până la o autogară. Dar înseamnă și câteva opriri în plus la început și la final de drum. Traseul se face înainte de plecare, ca preluările să fie în ordine logică.</p>
<h3>Traficul și lucrările</h3>
<p>Ieșirile din orașele mari, lucrările de pe autostrăzile din Ungaria, Austria și Germania și weekendurile de vacanță pot adăuga ore întregi. În Germania sunt frecvente blocajele numite „Stau”, mai ales vinerea după-amiaza și la începutul vacanțelor școlare.</p>
<h3>Vremea</h3>
<p>Iarna, ninsoarea și ceața încetinesc drumul. Microbuzele noastre au anvelope potrivite sezonului, dar siguranța e mai importantă decât o oră câștigată.</p>
<h3>Controalele la graniță</h3>
<p>România face parte din spațiul Schengen, așa că nu mai există controale sistematice la frontiere. Totuși, unele țări fac verificări temporare la graniță, iar acolo se poate sta mai mult.</p>

<h2>Câte pauze se fac pe drum</h2>
<p>Pe un drum atât de lung se fac pauze regulate: pentru toaletă, pentru o cafea, pentru masă și pentru alimentare. Șoferii respectă timpii de condus și de odihnă, iar pe distanțele lungi microbuzul are doi șoferi care se schimbă. Pauzele nu sunt timp pierdut. Fără ele drumul ar fi obositor și mai puțin sigur.</p>

<h2>Cum îți faci drumul mai ușor</h2>
<ul>
<li><strong>Ia-ți lângă tine o geantă mică</strong> cu apă, gustări, medicamente, încărcător și o haină subțire. Bagajele mari stau în portbagaj sau în remorcă.</li>
<li><strong>Îmbracă-te comod</strong>, în straturi. Cu aer condiționat vara și Webasto iarna, temperatura în mașină e plăcută, dar e bine să poți da jos sau pune ceva pe tine.</li>
<li><strong>Folosește pauzele</strong> ca să te miști puțin. Câțiva pași fac mare diferență pentru picioare și spate.</li>
<li><strong>Dormi cât poți</strong>. O pernă de gât, o mască pentru ochi și dopuri de urechi ajută. Mai multe sfaturi găsești în ghidul despre <a href="/blog/calatorie-de-noapte-microbuz-confort">cum dormi bine pe o cursă de noapte</a>.</li>
<li><strong>Ține telefonul încărcat</strong>. Avem încărcătoare la fiecare loc, iar șoferul te sună înainte să ajungă la tine și înainte să ajungă la adresa din Germania.</li>
</ul>

<h2>Microbuz, autocar sau avion: cum stai cu timpul</h2>
<p>Avionul e cel mai rapid pe zborul propriu-zis. Dar la timpul total se adaugă drumul până la aeroport, așteptarea, bagajele și drumul de la aeroport la adresă. Autocarul pleacă din autogări mari și ajunge tot în autogări, așa că și acolo ai drumuri în plus la capete. Microbuzul durează mai mult pe drum, dar te ia de acasă și te lasă la ușă, fără nicio schimbare. Comparația completă e în articolele despre <a href="/blog/microbuz-vs-avion-germania">microbuz sau avion</a> și <a href="/blog/microbuz-vs-autocar-germania">microbuz sau autocar</a>.</p>

<h2>Pe ce traseu se merge</h2>
<p>De obicei, drumul spre Germania trece prin Ungaria și Austria, pe autostradă, până la granița germană de lângă Passau sau Salzburg. De acolo, microbuzul continuă spre orașele de destinație. Traseul pe țări și opririle obișnuite le găsești în ghidul despre <a href="/blog/ruta-romania-germania-prin-ungaria-austria">traseul spre Germania prin Ungaria și Austria</a>.</p>

<h2>Află ora aproximativă de sosire înainte de plecare</h2>
<p>Când rezervi, spune-ne localitatea de plecare și adresa exactă din Germania. Cu ele îți spunem cu aproximație când pleci și când ajungi. În ziua drumului, șoferul te sună înainte de preluare, iar în Germania te anunță cu puțin timp înainte de sosire, ca să nu aștepți în stradă. Detalii despre curse găsești pe pagina de <a href="/transport-persoane-romania-germania">transport persoane România – Germania</a>.</p>`,
    faq: [
      ["Câte ore sunt cu microbuzul până în Germania?", "De regulă între o zi și o zi și jumătate, cu pauze și preluări. Sudul Germaniei e mai aproape, iar nordul și vestul mai departe. Îți spunem durata aproximativă la rezervare."],
      ["De ce durează mai mult decât cu mașina personală?", "Microbuzul preia și lasă mai mulți pasageri la adresă și face pauze regulate pentru odihna șoferilor. În schimb, tu nu schimbi niciun mijloc de transport."],
      ["Se merge și noaptea?", "Da, pe distanțele lungi se merge și noaptea, cu doi șoferi care se schimbă. Pe Renault Master există și pat pentru dormit."],
      ["Mă anunță cineva când ajungem?", "Da. Șoferul te sună înainte să ajungă la tine și înainte să ajungă la adresa din Germania."],
      ["Pot afla exact la ce oră ajung?", "Îți dăm o oră aproximativă, pentru că traficul și vremea pot schimba durata. Pentru detalii sună la 0790 752 888."],
    ],
  },

  {
    n: 12, published: true, date: D2, group: G, main: "AT",
    slug: "cat-dureaza-drumul-romania-austria",
    title: "Cât durează drumul până în Austria și pe unde se trece",
    desc: "Cât durează drumul cu microbuzul din România în Austria, pe unde se trece, cum diferă Viena de Salzburg sau Innsbruck și ce să știi despre vinieta.",
    h1: "Cât durează drumul până în Austria și pe unde se trece",
    cardText: "Durata până la Viena, Linz, Graz sau Salzburg și traseul prin Ungaria.",
    ...IMG.trafic,
    imgAlt: "Microbuz Renault Trafic pregătit de plecare spre Austria",
    related: ["cat-dureaza-drumul-romania-germania", "ce-sa-iei-in-bagaj-calatorie-lunga-microbuz"],
    intro: `
<p><strong>Austria e cea mai apropiată destinație dintre cele pe care le facem: până la Viena drumul durează, de regulă, mai puțin de o zi, iar până în vestul Austriei (Salzburg, Innsbruck) câteva ore în plus.</strong> Durata exactă depinde de localitatea din care pleci și de adresa din Austria.</p>
<p>Traseul obișnuit trece prin Ungaria, pe autostradă, și intră în Austria pe la Hegyeshalom – Nickelsdorf. De acolo, Viena e foarte aproape.</p>`,
    body: `
<h2>Distanțe orientative până în Austria</h2>
<p>Din vestul României, de la Nădlac sau Borș, până la granița Ungariei cu Austria sunt cam 450–550 km. De acolo, distanțele până la orașele austriece arată cam așa:</p>
<div class="tbl"><table>
<thead><tr><th>Oraș din Austria</th><th>Distanță aproximativă de la granița Ungaria – Austria</th></tr></thead>
<tbody>
<tr><td>Viena</td><td>în jur de 70 km</td></tr>
<tr><td>Graz</td><td>în jur de 250 km</td></tr>
<tr><td>Linz</td><td>în jur de 250 km</td></tr>
<tr><td>Salzburg</td><td>în jur de 370 km</td></tr>
<tr><td>Innsbruck</td><td>în jur de 550 km</td></tr>
</tbody>
</table></div>
<p>La aceste distanțe adaugi drumul din localitatea ta până la granița de vest a României. Un pasager din Arad sau Timișoara ajunge mult mai repede decât unul din Iași sau Constanța.</p>

<h2>Pe unde se trece</h2>
<ol>
<li><strong>România</strong>: pe autostradă și drumuri naționale până la Nădlac (A1) sau Borș, în funcție de zona de plecare.</li>
<li><strong>Ungaria</strong>: pe autostrăzile M43/M5 sau M4/M1, prin zona Budapestei, spre Győr.</li>
<li><strong>Austria</strong>: intrare pe la Nickelsdorf, apoi pe A4 spre Viena sau mai departe pe A1 spre Linz și Salzburg. Pentru Graz se merge de obicei pe A2.</li>
</ol>
<p>Rutele exacte se aleg în funcție de pasagerii din cursă și de trafic. Șoferii noștri merg pe drumurile astea de foarte multe ori și știu unde se blochează traficul la anumite ore.</p>

<h2>Ce poate lungi drumul</h2>
<ul>
<li><strong>Preluările</strong>: microbuzul trece pe la fiecare pasager, în România și în Austria.</li>
<li><strong>Traficul de la Budapesta și Viena</strong>, mai ales dimineața și seara.</li>
<li><strong>Lucrările pe autostradă</strong>, frecvente vara.</li>
<li><strong>Iarna</strong>, ninsoarea pe drumurile de munte spre vestul Austriei.</li>
<li><strong>Controalele temporare</strong> pe care unele țări le fac la granițe, chiar dacă România e în Schengen.</li>
</ul>

<h2>Vinieta și taxele de drum: de ele se ocupă transportatorul</h2>
<p>În Ungaria și Austria autostrăzile se plătesc. Ca pasager, nu trebuie să cumperi nimic. Taxele de drum pentru microbuz sunt treaba noastră și sunt incluse în preț. Doar dacă mergi cu mașina personală trebuie să ai tu vinieta. Informațiile oficiale despre vinieta austriacă sunt pe site-ul operatorului de autostrăzi ASFINAG.</p>

<h2>Drum de zi sau drum de noapte</h2>
<p>Pentru că Austria e mai aproape, multe curse se fac în aceeași zi. Dacă pleci noaptea, ajungi de dimineață și ai toată ziua înainte. Dacă pleci dimineața, ajungi seara. Când rezervi, spune-ne dacă ai o oră până la care trebuie să ajungi, de exemplu pentru începerea serviciului. Încercăm să organizăm cursa ca să te încadrezi.</p>

<h2>Cum te pregătești pentru drum</h2>
<p>Chiar dacă drumul e mai scurt decât spre Germania sau Olanda, tot sunt multe ore pe scaun. Câteva lucruri ajută:</p>
<ul>
<li>apă și ceva de mâncare în geanta mică;</li>
<li>actul de identitate la îndemână;</li>
<li>adresa completă din Austria, cu cod poștal, și numele de pe sonerie;</li>
<li>un număr de telefon la care răspunzi, ca șoferul să te poată anunța.</li>
</ul>
<p>Lista completă găsești în ghidul despre <a href="/blog/ce-sa-iei-in-bagaj-calatorie-lunga-microbuz">ce să iei cu tine la un drum lung</a>.</p>

<h2>Dacă rămâi mai mult timp în Austria</h2>
<p>Dacă te muți sau mergi la muncă pentru o perioadă mai lungă, trebuie să îți înregistrezi adresa la autoritățile locale în primele zile după sosire. Ce înseamnă și cum se face, afli din ghidul despre <a href="/blog/inregistrare-domiciliu-austria-meldezettel">Meldezettel în Austria</a>.</p>

<h2>Rezervă cursa spre Austria</h2>
<p>Facem curse România – Austria de la adresă la adresă, în ambele sensuri. Te luăm de acasă și te lăsăm la ușă, în Viena sau în orice alt oraș de pe traseu. Detalii pe pagina de <a href="/transport-persoane-romania-austria">transport persoane România – Austria</a>.</p>`,
    faq: [
      ["Cât durează drumul până la Viena?", "De regulă mai puțin de o zi, cu pauze și preluări. Durata exactă depinde de localitatea de plecare și de trafic."],
      ["Pe unde intră microbuzul în Austria?", "De obicei pe la Hegyeshalom – Nickelsdorf, după ce traversează Ungaria pe autostradă."],
      ["Trebuie să cumpăr eu vinieta?", "Nu. Taxele de drum pentru microbuz sunt incluse în preț. Vinieta o cumperi doar dacă mergi cu mașina personală."],
      ["Mergeți și până la Salzburg sau Innsbruck?", "Preluăm și lăsăm pasagerii la adresă. Spune-ne orașul exact la rezervare și îți confirmăm cursa."],
      ["Pot ajunge până la o anumită oră?", "Spune-ne de la început. Încercăm să organizăm cursa ca să ajungi la timp, dar traficul nu poate fi controlat complet."],
    ],
  },

  {
    n: 13, published: true, date: D2, group: G, main: "NL",
    slug: "cat-dureaza-drumul-romania-olanda",
    title: "Câte ore sunt până în Olanda cu microbuzul",
    desc: "Câte ore durează drumul cu microbuzul din România până în Olanda, pe ce traseu se merge prin Germania și cum faci drumul lung mai suportabil.",
    h1: "Câte ore sunt până în Olanda cu microbuzul",
    cardText: "Cel mai lung drum din rutele noastre: durată, traseu și cum îl suporți ușor.",
    ...IMG.masterRemorca,
    imgAlt: "Renault Master cu remorcă pentru bagaje, pe cursa spre Olanda",
    related: ["calatorie-de-noapte-microbuz-confort", "rau-de-masina-drum-lung"],
    intro: `
<p><strong>Drumul cu microbuzul din România până în Olanda durează, de regulă, în jur de o zi și jumătate, cu pauze și preluări.</strong> Distanța de la granița de vest a României până în centrul Olandei e de aproximativ 1.600–1.800 km, la care se adaugă drumul din localitatea ta.</p>
<p>E cel mai lung drum dintre rutele noastre. De aceea contează mult confortul: loc pentru picioare, aer condiționat, Webasto iarna și, pe Renault Master, pat pentru dormit.</p>`,
    body: `
<h2>Pe unde se merge spre Olanda</h2>
<p>Traseul obișnuit trece prin patru țări înainte de Olanda:</p>
<ol>
<li><strong>Ungaria</strong>, pe autostradă, de la Nădlac sau Borș spre Győr;</li>
<li><strong>Austria</strong>, de la Nickelsdorf spre Linz și Passau;</li>
<li><strong>Germania</strong>, cea mai lungă porțiune: de la Passau spre Nürnberg sau Regensburg, apoi spre Frankfurt și Köln;</li>
<li><strong>Olanda</strong>, cu intrare de obicei pe la Venlo sau Arnhem, apoi spre orașul de destinație.</li>
</ol>
<p>Pe porțiunea din Germania, cele mai frecvente întârzieri apar în jurul orașelor Nürnberg, Frankfurt și Köln, unde traficul e foarte aglomerat.</p>

<h2>Distanțe orientative în Olanda</h2>
<div class="tbl"><table>
<thead><tr><th>Destinație</th><th>Cât mai e de la granița germano-olandeză (aprox.)</th></tr></thead>
<tbody>
<tr><td>Eindhoven, Venlo</td><td>sub 100 km</td></tr>
<tr><td>Utrecht, Arnhem, Nijmegen</td><td>în jur de 50–120 km</td></tr>
<tr><td>Rotterdam, Haga</td><td>în jur de 150–200 km</td></tr>
<tr><td>Amsterdam</td><td>în jur de 150–200 km</td></tr>
<tr><td>Groningen (nord)</td><td>în jur de 200–250 km</td></tr>
</tbody>
</table></div>
<p>Cifrele depind de punctul pe unde intră microbuzul în Olanda, iar acesta se alege după adresele pasagerilor.</p>

<h2>De ce durează cât durează</h2>
<h3>Distanța mare</h3>
<p>Peste 2.000 km de la plecare până la sosire, pentru majoritatea pasagerilor. Oricât de bine ar fi organizat drumul, distanța nu poate fi scurtată.</p>
<h3>Timpii de odihnă</h3>
<p>Pe drumurile lungi, microbuzul are doi șoferi care se schimbă. Așa, mașina poate merge mai mult fără ca vreun șofer să conducă obosit. Pauzele pentru masă, toaletă și alimentare rămân însă necesare.</p>
<h3>Preluările de la adresă</h3>
<p>Tu nu mergi la nicio autogară, dar microbuzul trece pe la fiecare pasager. Câteva opriri în plus la început și la final sunt prețul confortului de a fi luat de acasă.</p>

<h2>Cum faci un drum de o zi și jumătate mai suportabil</h2>
<ul>
<li><strong>Somnul e cel mai important.</strong> Dacă dormi bine în prima noapte, ajungi mult mai odihnit. Vezi sfaturile din ghidul despre <a href="/blog/calatorie-de-noapte-microbuz-confort">cum dormi bine pe o cursă de noapte</a>.</li>
<li><strong>Mișcă-te în fiecare pauză.</strong> Coboară, plimbă-te câteva minute, întinde-te.</li>
<li><strong>Bea apă</strong>, dar evită mesele foarte grele și multă cafea.</li>
<li><strong>Dacă ți se face rău pe drum</strong>, stai pe un loc din față, privește în depărtare și ia-ți din timp ce te ajută. Mai multe în articolul despre <a href="/blog/rau-de-masina-drum-lung">răul de mașină pe drum lung</a>.</li>
<li><strong>Ia-ți ceva de făcut</strong>: o carte, filme descărcate pe telefon, căști. Semnalul de date poate fi slab pe unele porțiuni.</li>
</ul>

<h2>Ce aduci pentru sosire</h2>
<p>Ajungi după un drum lung, deci e bine să ai deja totul pregătit:</p>
<ul>
<li>adresa completă din Olanda, cu cod poștal (de forma 1234 AB) și numărul casei;</li>
<li>numele de pe sonerie, mai ales dacă stai la cineva;</li>
<li>telefonul persoanei care te așteaptă;</li>
<li>actul de identitate valabil.</li>
</ul>
<p>Dacă rămâi să lucrezi în Olanda, trebuie să te înregistrezi la primărie și să obții numărul BSN. Pașii sunt explicați în ghidul despre <a href="/blog/inschrijving-olanda-bsn">BSN și înscrierea în Olanda</a>.</p>

<h2>Bagajele pe un drum atât de lung</h2>
<p>Mulți dintre cei care merg în Olanda pleacă pentru o perioadă lungă și au bagaje multe. Remorcile acoperite ne lasă să luăm mai multe bagaje decât încap în portbagaj. Spune-ne la rezervare câte valize ai și dacă ai ceva voluminos, ca să planificăm locul.</p>

<h2>Rezervă drumul spre Olanda</h2>
<p>Facem curse România – Olanda de la adresă la adresă, în ambele sensuri. Detalii despre mașini și rezervare găsești pe pagina de <a href="/transport-persoane-romania-olanda">transport persoane România – Olanda</a>.</p>`,
    faq: [
      ["Câte ore sunt până în Olanda cu microbuzul?", "De regulă în jur de o zi și jumătate, cu pauze și preluări. Durata exactă depinde de localitatea de plecare și de adresa din Olanda."],
      ["Prin ce țări se trece?", "De obicei prin Ungaria, Austria și Germania, apoi se intră în Olanda pe la Venlo sau Arnhem."],
      ["Se poate dormi în microbuz?", "Da. Scaunele sunt comode, iar pe Renault Master există și pat pentru dormit. Pe drum se fac și pauze regulate."],
      ["Câte bagaje pot lua spre Olanda?", "Spune-ne la rezervare câte bagaje ai. Avem remorci acoperite pentru bagaje în plus."],
      ["Mă lăsați chiar la adresă în Amsterdam sau Rotterdam?", "Da, transportul e de la adresă la adresă. Spune-ne adresa exactă la rezervare."],
    ],
  },

  {
    n: 14, published: true, date: D2, group: G, main: "BE",
    slug: "cat-dureaza-drumul-romania-belgia",
    title: "Drumul România – Belgia: durată, opriri, traseu",
    desc: "Cât durează drumul cu microbuzul din România în Belgia, pe ce traseu se merge prin Germania, ce opriri se fac și ce trebuie să știi la sosire.",
    h1: "Drumul România – Belgia: durată, opriri, traseu",
    cardText: "Traseul prin Ungaria, Austria și Germania, opririle și sosirea în Belgia.",
    ...IMG.lux,
    imgAlt: "Interior microbuz BRO Transport cu scaune confortabile pentru drumul spre Belgia",
    related: ["cat-dureaza-drumul-romania-olanda", "calatorie-de-noapte-microbuz-confort"],
    intro: `
<p><strong>Drumul cu microbuzul din România în Belgia durează, de regulă, în jur de o zi și jumătate, cu pauze și preluări.</strong> De la granița de vest a României până la Bruxelles sunt aproximativ 1.700 km, iar până la Antwerpen sau Liège diferența e mică.</p>
<p>Traseul trece prin Ungaria, Austria și Germania, iar intrarea în Belgia se face de obicei pe la Aachen. Mai jos găsești ce înseamnă fiecare etapă și ce să pregătești.</p>`,
    body: `
<h2>Traseul pe etape</h2>
<div class="tbl"><table>
<thead><tr><th>Etapă</th><th>Pe unde</th><th>Ce să știi</th></tr></thead>
<tbody>
<tr><td>România</td><td>până la Nădlac sau Borș</td><td>Preluările de la adresă se fac la începutul drumului.</td></tr>
<tr><td>Ungaria</td><td>autostrăzile spre Budapesta și Győr</td><td>Trafic aglomerat în jurul Budapestei la orele de vârf.</td></tr>
<tr><td>Austria</td><td>Nickelsdorf, Linz, Passau</td><td>Porțiune scurtă, de câteva ore.</td></tr>
<tr><td>Germania</td><td>Nürnberg, Frankfurt, Köln, Aachen</td><td>Cea mai lungă porțiune, cu trafic intens lângă orașele mari.</td></tr>
<tr><td>Belgia</td><td>de la Aachen spre Liège, Bruxelles, Antwerpen</td><td>Lăsarea pasagerilor la adresă.</td></tr>
</tbody>
</table></div>

<h2>Ce opriri se fac pe drum</h2>
<p>Pe un drum de o zi și jumătate se fac mai multe tipuri de opriri:</p>
<ul>
<li><strong>pauze scurte</strong> pentru toaletă și pentru a te mișca puțin;</li>
<li><strong>pauze de masă</strong>, de obicei în benzinării mari sau în zone de servicii de pe autostradă;</li>
<li><strong>alimentări</strong> cu combustibil;</li>
<li><strong>schimbul de șoferi</strong>, pe drumurile lungi, ca niciunul să nu conducă obosit.</li>
</ul>
<p>În zonele de servicii din Germania și Austria găsești toalete, cafea și mâncare caldă. Plata se face aproape peste tot cu cardul, dar e bine să ai și câțiva euro la tine pentru toaletele cu plată.</p>

<h2>De la ce depinde durata exactă</h2>
<h3>Unde pleci din România</h3>
<p>Din vestul țării ajungi la graniță în câteva ore. Din Moldova sau din sud-est, drumul până la graniță e de o zi aproape întreagă, deci contează mult.</p>
<h3>Unde mergi în Belgia</h3>
<p>Liège e aproape de granița cu Germania. Bruxelles și Antwerpen sunt cu încă una-două ore mai departe. Gent și Brugge, în vest, sunt și mai departe.</p>
<h3>Traficul din Germania</h3>
<p>Zona Köln și granița de la Aachen au trafic greu, mai ales vinerea și duminica seara. Șoferii aleg ora și drumul ca să evite pe cât se poate blocajele.</p>

<h2>Cum ajungi odihnit în Belgia</h2>
<p>Un drum atât de lung e obositor oricum, dar se poate face mult mai ușor:</p>
<ul>
<li>dormi în prima noapte, chiar dacă nu ți-e somn. Vezi <a href="/blog/calatorie-de-noapte-microbuz-confort">sfaturile pentru o cursă de noapte</a>;</li>
<li>bea apă și mănâncă ușor;</li>
<li>coboară la fiecare pauză și mișcă-te puțin;</li>
<li>îmbracă-te în straturi, ca să poți regla ce ai pe tine.</li>
</ul>

<h2>Ce pregătești pentru sosirea în Belgia</h2>
<ul>
<li>adresa completă, cu codul poștal din patru cifre și numărul casei sau al apartamentului;</li>
<li>numele de pe sonerie. În clădirile cu apartamente din Bruxelles sunt multe sonerii, iar numele exact contează;</li>
<li>telefonul persoanei care te așteaptă;</li>
<li>actul de identitate valabil.</li>
</ul>
<p>Dacă rămâi în Belgia pentru muncă sau pentru o perioadă lungă, trebuie să te înregistrezi la comuna unde locuiești. Detalii în ghidul despre <a href="/blog/inregistrare-belgia-comuna">înregistrarea la comună în Belgia</a>.</p>

<h2>Belgia sau Olanda: drumuri asemănătoare</h2>
<p>Pentru o bună parte din traseu, drumul spre Belgia e același cu cel spre Olanda. Diferența apare abia în vestul Germaniei. De aceea, durata e asemănătoare, iar sfaturile din ghidul despre <a href="/blog/cat-dureaza-drumul-romania-olanda">drumul până în Olanda</a> se potrivesc și aici.</p>

<h2>Rezervă cursa spre Belgia</h2>
<p>Facem transport persoane România – Belgia de la adresă la adresă, în ambele sensuri, cu microbuze 8+1 locuri, remorci pentru bagaje și doi șoferi pe drumurile lungi. Detalii pe pagina de <a href="/transport-persoane-romania-belgia">transport persoane România – Belgia</a>.</p>`,
    faq: [
      ["Cât durează drumul până la Bruxelles?", "De regulă în jur de o zi și jumătate, cu pauze și preluări. Depinde de localitatea de plecare și de trafic."],
      ["Pe unde se intră în Belgia?", "De obicei din Germania, pe la Aachen, spre Liège și apoi spre Bruxelles sau Antwerpen."],
      ["Ce opriri se fac pe drum?", "Pauze scurte pentru toaletă, pauze de masă în zone de servicii, alimentări și schimburi de șoferi."],
      ["Am nevoie de euro pe drum?", "E bine să ai câțiva euro pentru toalete sau mici cumpărături. În rest, cardul merge aproape peste tot."],
      ["Mă lăsați la adresă în Belgia?", "Da. Transportul e de la adresă la adresă. Spune-ne adresa exactă la rezervare."],
    ],
  },

  {
    n: 15, published: true, date: D2, group: G, main: "DE",
    slug: "ruta-romania-germania-prin-ungaria-austria",
    title: "Traseul spre Germania: Ungaria, Austria și opririle",
    desc: "Pe unde trece microbuzul spre Germania: vama din România, autostrăzile din Ungaria și Austria, intrarea în Germania și ce să știi despre opriri.",
    h1: "Traseul spre Germania: Ungaria, Austria și opririle pe drum",
    cardText: "Țară cu țară, pe unde trece microbuzul și ce se întâmplă la fiecare etapă.",
    ...IMG.hero,
    imgAlt: "Microbuze BRO Transport pregătite pentru traseul România – Germania",
    related: ["cat-dureaza-drumul-romania-germania", "bagaje-permise-transport-persoane"],
    intro: `
<p><strong>Traseul obișnuit din România spre Germania trece prin Ungaria și Austria, aproape în întregime pe autostradă.</strong> Se iese din țară pe la Nădlac sau Borș, se traversează Ungaria spre Győr, se intră în Austria pe la Nickelsdorf și în Germania pe la Passau sau Salzburg.</p>
<p>Ruta exactă se alege în funcție de adresele pasagerilor, din România și din Germania, și de trafic. Mai jos găsești fiecare etapă pe rând.</p>`,
    body: `
<h2>Etapa 1: România, până la graniță</h2>
<p>La începutul drumului, microbuzul preia pasagerii de la adresă. Traseul se face înainte de plecare, ca preluările să fie în ordine logică și să nu se piardă timp. Apoi se merge pe autostrada A1 spre Nădlac sau, din nord-vest, spre Borș.</p>
<p>România e membră a spațiului Schengen, așa că nu mai există controale sistematice la granița cu Ungaria. Ține totuși actul de identitate la îndemână, pentru că pot exista verificări aleatorii.</p>

<h2>Etapa 2: Ungaria</h2>
<p>De la Nădlac se merge pe M43 și M5 spre Budapesta, apoi pe M1 spre Győr și granița cu Austria. De la Borș, drumul trece pe M4 sau M35 și se leagă tot de M1. În jurul Budapestei traficul e aglomerat dimineața și seara, de aceea ora de trecere contează.</p>

<h2>Etapa 3: Austria</h2>
<p>Intrarea în Austria se face de obicei pe la Nickelsdorf. De acolo, microbuzul merge pe A4 și A1, pe lângă Viena, spre Linz. Spre Germania se iese fie pe la Passau, pe A8 spre Suben, fie pe la Salzburg, în funcție de destinația din Germania.</p>
<ul>
<li><strong>pe la Passau</strong>, pentru Bavaria de est, Regensburg, Nürnberg și nordul Germaniei;</li>
<li><strong>pe la Salzburg</strong>, pentru München, sudul Bavariei și Baden-Württemberg.</li>
</ul>

<h2>Etapa 4: Germania</h2>
<p>Odată intrat în Germania, microbuzul merge spre orașele de destinație pe rețeaua de autostrăzi (Autobahn). Câteva lucruri pe care e bine să le știi:</p>
<ul>
<li><strong>Controale la graniță</strong>: Germania face periodic verificări temporare la granița cu Austria. Asta poate adăuga timp de așteptare.</li>
<li><strong>Blocajele („Stau”)</strong> sunt frecvente în jurul orașelor mari și la lucrări.</li>
<li><strong>Zonele de servicii</strong> („Raststätte”) au toalete, restaurante și magazine. Unele toalete sunt cu plată, așa că ține câteva monede la tine.</li>
</ul>

<h2>Unde se opresc microbuzele pe drum</h2>
<p>Opririle se fac în locuri sigure, cu toalete și posibilitate de a mânca: benzinării mari și zone de servicii de pe autostradă. Se oprește pentru:</p>
<ol>
<li>pauze scurte, la câteva ore;</li>
<li>pauze mai lungi de masă;</li>
<li>alimentări;</li>
<li>schimbul de șoferi pe drumurile lungi.</li>
</ol>
<p>Cât stai la o pauză îți spune șoferul. Respectă ora de plecare, pentru că o întârziere a unui pasager întârzie pe toată lumea.</p>

<h2>Ce taxe și vignete se plătesc pe traseu</h2>
<p>Pe autostrăzile din Ungaria și Austria se plătește vinieta sau taxa de drum. În Germania, autostrăzile sunt gratuite pentru autoturisme și microbuze mici. Ca pasager, nu plătești nimic din toate acestea: taxele sunt treaba transportatorului și sunt incluse în preț.</p>

<h2>Bani, telefon și roaming pe drum</h2>
<ul>
<li><strong>Bani</strong>: în Ungaria moneda e forintul, dar în benzinăriile de pe autostradă cardul merge peste tot. În Austria și Germania se plătește în euro.</li>
<li><strong>Roaming</strong>: în Uniunea Europeană, roamingul funcționează la tarifele de acasă, conform regulilor UE „Roam like at home”. Verifică totuși condițiile abonamentului tău.</li>
<li><strong>Încărcare</strong>: în microbuze avem încărcătoare la fiecare loc.</li>
</ul>

<h2>Bagajele pe traseu</h2>
<p>Bagajele mari se pun în portbagaj sau în remorca acoperită și se scot abia la destinație. Pe drum, ai nevoie doar de geanta mică de lângă tine. Ce poți lua și cât, afli din ghidul despre <a href="/blog/bagaje-permise-transport-persoane">bagajele la transportul de persoane</a>.</p>

<h2>Cât durează tot traseul</h2>
<p>Cu pauze și preluări, drumul spre Germania durează de regulă între o zi și o zi și jumătate. Detaliile, pe orașe, sunt în ghidul despre <a href="/blog/cat-dureaza-drumul-romania-germania">cât durează drumul până în Germania</a>. Pentru rezervare și detalii despre mașini, vezi pagina de <a href="/transport-persoane-romania-germania">transport persoane România – Germania</a>.</p>`,
    faq: [
      ["Prin ce țări trece microbuzul spre Germania?", "De obicei prin Ungaria și Austria, pe autostradă, apoi intră în Germania pe la Passau sau Salzburg."],
      ["Mai sunt controale la granițe?", "România e în Schengen, deci nu există controale sistematice. Unele țări, inclusiv Germania, fac însă verificări temporare la anumite granițe."],
      ["Trebuie să plătesc eu vinieta sau taxele de drum?", "Nu. Taxele de drum pentru microbuz sunt incluse în prețul transportului."],
      ["Unde se fac pauzele?", "În benzinării mari și zone de servicii de pe autostradă, cu toalete și mâncare."],
      ["Am nevoie de forinți în Ungaria?", "Nu neapărat. În benzinăriile de pe autostradă poți plăti cu cardul."],
    ],
  },

  {
    n: 16, published: true, date: D2, group: G, main: "DE",
    slug: "ce-sa-iei-in-bagaj-calatorie-lunga-microbuz",
    title: "Ce să iei cu tine pentru un drum lung cu microbuzul",
    desc: "Lista completă cu ce să iei pentru un drum lung cu microbuzul: ce ții în geanta mică, ce pui în valiză, ce mâncare iei și ce e bine să lași acasă.",
    h1: "Ce să iei cu tine pentru un drum lung cu microbuzul",
    cardText: "Lista pentru geanta de lângă tine și pentru valiza din portbagaj.",
    ...IMG.portbagaj,
    imgAlt: "Portbagaj de microbuz cu valize pentru un drum lung",
    related: ["bagaje-permise-transport-persoane", "calatorie-cu-copii-in-microbuz"],
    intro: `
<p><strong>Pentru un drum lung cu microbuzul, cel mai important e să împarți bagajul în două: o geantă mică pe care o ții lângă tine și valiza care stă în portbagaj până la destinație.</strong> În geanta mică pui tot ce îți trebuie pe drum: actul de identitate, telefonul, medicamentele, apa, mâncarea și o haină.</p>
<p>Mai jos ai lista completă, pe categorii, ca să nu uiți nimic.</p>`,
    body: `
<h2>Geanta mică: ce ții lângă tine</h2>
<p>La valiză nu ajungi pe drum, pentru că ea stă în portbagaj sau în remorcă. Tot ce îți poate trebui în timpul călătoriei pune în geanta mică.</p>
<h3>Acte și bani</h3>
<ul>
<li>cartea de identitate sau pașaportul, valabile;</li>
<li>actele copiilor, dacă mergi cu ei, inclusiv declarațiile necesare. Vezi ghidul despre <a href="/blog/acte-minor-calatorie-strainatate">actele pentru minori</a>;</li>
<li>cardul bancar și câțiva euro în numerar, pentru toalete sau cafea;</li>
<li>cardul european de sănătate, dacă îl ai;</li>
<li>adresa completă de la destinație, scrisă și pe hârtie.</li>
</ul>
<h3>Telefon și electronice</h3>
<ul>
<li>telefonul și cablul de încărcare (avem încărcătoare la fiecare loc);</li>
<li>căști, ca să poți asculta muzică sau să te uiți la un film fără să-i deranjezi pe ceilalți;</li>
<li>filme, seriale sau muzică descărcate dinainte, pentru porțiunile cu semnal slab.</li>
</ul>
<h3>Confort</h3>
<ul>
<li>o pernă de gât;</li>
<li>o mască pentru ochi și dopuri de urechi;</li>
<li>o haină subțire sau un hanorac, ușor de dat jos;</li>
<li>șosete groase sau papuci ușori, dacă vrei să stai mai lejer.</li>
</ul>
<h3>Igienă și sănătate</h3>
<ul>
<li>medicamentele pe care le iei zilnic, pentru tot drumul și câteva zile în plus;</li>
<li>ceva pentru durere de cap și, dacă ai nevoie, pentru rău de mașină;</li>
<li>șervețele umede și uscate, dezinfectant pentru mâini;</li>
<li>periuță și pastă de dinți, un deodorant mic;</li>
<li>balsam de buze și picături pentru ochi, dacă ai ochii sensibili la aerul condiționat.</li>
</ul>

<h2>Mâncare și apă pentru drum</h2>
<p>Pe drum se fac pauze de masă, dar e bine să ai și ceva al tău. Alege mâncare care nu miroase puternic, nu se strică repede și nu face mizerie:</p>
<ul>
<li>sandvișuri, covrigi, biscuiți, fructe ușor de mâncat (mere, banane);</li>
<li>nuci, batoane, ceva dulce;</li>
<li>apă plată. Avem apă în mașină, dar o sticlă în plus nu strică.</li>
</ul>
<p>Evită mâncărurile foarte grase, cele cu usturoi sau pește și băuturile acidulate în cantitate mare, mai ales dacă ți se face ușor rău pe drum.</p>

<h2>Valiza: ce pui în portbagaj</h2>
<ul>
<li>hainele pentru perioada în care stai, potrivite vremii de acolo;</li>
<li>încălțăminte în pungi separate;</li>
<li>produsele cosmetice închise bine, în pungi, ca să nu curgă;</li>
<li>actele importante (diplome, contracte, acte medicale) într-un dosar, într-un loc ferit;</li>
<li>alimentele de acasă, bine ambalate. Ce poți lua, afli din ghidul despre <a href="/blog/ce-poti-lua-in-bagaj-alimente-ue">alimentele în bagaj</a>.</li>
</ul>
<p>Pune pe fiecare bagaj o etichetă cu numele și numărul tău de telefon. Când se descarcă bagajele mai multor pasageri, eticheta te ajută să-l găsești imediat.</p>

<h2>Ce să lași acasă</h2>
<ul>
<li>obiectele interzise sau periculoase: arme, substanțe inflamabile, butelii;</li>
<li>bijuteriile scumpe și sumele mari de bani pe care nu le folosești. Dacă trebuie să le iei, ține-le la tine, nu în valiză;</li>
<li>lucrurile pe care le poți cumpăra ușor la destinație.</li>
</ul>

<h2>Câte bagaje poți lua</h2>
<p>Spune-ne la rezervare câte valize ai și dacă ai ceva voluminos. Așa planificăm locul în portbagaj și, la nevoie, în remorca acoperită. Detalii în ghidul despre <a href="/blog/bagaje-permise-transport-persoane">bagajele permise</a>.</p>

<h2>Checklist rapid înainte de plecare</h2>
<ol>
<li>actele tale și ale copiilor, valabile;</li>
<li>adresa de destinație și telefonul persoanei care te așteaptă;</li>
<li>medicamentele;</li>
<li>telefonul încărcat și cablul;</li>
<li>apă și mâncare pentru drum;</li>
<li>bagajele etichetate.</li>
</ol>
<p>Pregătit de drum? Vezi detaliile despre curse pe pagina de <a href="/transport-persoane-romania-germania">transport persoane România – Germania</a> sau sună-ne pentru rezervare.</p>`,
    faq: [
      ["Ce iau în geanta de lângă mine?", "Actele, telefonul și încărcătorul, medicamentele, apa, ceva de mâncare, o haină subțire și lucrurile pentru somn."],
      ["Pot ajunge la valiză pe drum?", "De regulă nu, pentru că valizele stau în portbagaj sau în remorcă până la destinație. De aceea e important ce pui în geanta mică."],
      ["Ce mâncare e bună pentru drum?", "Sandvișuri, biscuiți, fructe ușor de mâncat, nuci și apă. Evită mâncarea care miroase puternic sau se strică repede."],
      ["Trebuie să-mi etichetez bagajele?", "E foarte util. O etichetă cu numele și telefonul te ajută să-ți găsești repede bagajul la descărcare."],
      ["Câte bagaje pot lua?", "Spune-ne la rezervare câte bagaje ai, ca să planificăm locul. Avem și remorci acoperite pentru bagaje în plus."],
    ],
  },
];
