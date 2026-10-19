// Valul 4 – Grup G (68–72): ghiduri pe orașe din Austria, Olanda, Belgia și vestul Germaniei.
import { IMG, D2, SRC } from "./_img.mjs";
const G = "Ghiduri pe orașe";

export default [
  {
    n: 68, published: true, date: D2, group: G, main: "AT",
    slug: "transport-romania-viena",
    title: "Spre Viena cu microbuzul: ghid complet",
    desc: "Ghid complet pentru drumul cu microbuzul din România la Viena: traseul prin Ungaria, durata, Meldeservice, transportul Wiener Linien și districtele.",
    h1: "Spre Viena cu microbuzul: ghid complet",
    cardText: "Cel mai scurt drum: traseul, cele 23 de districte, Meldeservice și transportul.",
    ...IMG.trafic,
    imgAlt: "Microbuz Renault Trafic pe ruta România – Viena",
    related: ["transport-romania-graz-linz", "inregistrare-domiciliu-austria-meldezettel"],
    intro: `
<p><strong>Viena e cea mai apropiată capitală din vestul Europei pentru cine pleacă din România: de la Nădlac sunt aproximativ 500 km, aproape în întregime pe autostradă prin Ungaria.</strong> Cu preluări și pauze, drumul cu microbuzul durează de regulă mai puțin de o zi, mai ales pentru cei din vestul țării.</p>
<p>În Viena trăiește una dintre cele mai mari comunități românești din străinătate. Mai jos găsești ce să știi despre drum, despre oraș și despre primele zile.</p>`,
    body: `
<h2>Traseul spre Viena</h2>
<ol>
<li>de la Nădlac, pe M43 și M5 spre Budapesta, sau de la Borș, pe M4/M35 și M3;</li>
<li>pe M1, de la Budapesta spre Győr și granița cu Austria;</li>
<li>intrare în Austria pe la Hegyeshalom – Nickelsdorf;</li>
<li>pe A4 („Ost Autobahn”) până la Viena.</li>
</ol>
<p>De la granița cu Austria până în Viena sunt doar în jur de 70 km. Cele mai frecvente întârzieri apar în jurul Budapestei și la intrarea în Viena, la orele de vârf.</p>

<h2>Cât durează, de unde pleci</h2>
<div class="tbl"><table>
<thead><tr><th>Zona de plecare</th><th>Ce înseamnă pentru drum</th></tr></thead>
<tbody>
<tr><td>Vestul țării (Arad, Timișoara, Oradea)</td><td>cel mai scurt drum; Viena e la câteva ore după graniță</td></tr>
<tr><td>Centrul țării (Cluj, Sibiu, Brașov)</td><td>câteva ore în plus până la graniță</td></tr>
<tr><td>Sudul și estul țării (Oltenia, Muntenia, Moldova)</td><td>drumul până la graniță e o parte importantă din călătorie</td></tr>
</tbody>
</table></div>
<p>Detalii generale despre durată găsești în ghidul despre <a href="/blog/cat-dureaza-drumul-romania-austria">drumul până în Austria</a>.</p>

<h2>Cele 23 de districte</h2>
<p>Viena e împărțită în 23 de districte („Bezirke”), numerotate. Codul poștal arată districtul: de exemplu, 1100 e districtul 10 (Favoriten), 1210 e districtul 21 (Floridsdorf). Multe familii de români locuiesc în districtele mari de la periferie, ca Favoriten, Simmering, Floridsdorf sau Donaustadt. Spune-ne adresa exactă cu codul poștal și numele de pe sonerie.</p>

<h2>Meldeservice: înregistrarea în trei zile</h2>
<p>În Austria, adresa se înregistrează în trei zile de la mutare. În Viena, înregistrarea se face la unul dintre birourile Meldeservice din districte. Îți trebuie formularul Meldezettel semnat de proprietar și actul de identitate. Dacă rămâi peste trei luni, ca cetățean UE ceri și certificatul de înregistrare, în Viena la departamentul municipal MA 35. Pașii sunt în ghidul despre <a href="/blog/inregistrare-domiciliu-austria-meldezettel">Meldezettel</a>. Informații oficiale pe ${SRC("https://www.wien.gv.at", "wien.gv.at")}.</p>

<h2>Transportul în Viena</h2>
<p>Transportul public e organizat de Wiener Linien: metrou (U-Bahn), tramvaie, autobuze, plus trenurile S-Bahn. Viena are un abonament anual cunoscut pentru prețul lui avantajos, dar există și bilete simple, pe săptămână sau pe lună. Biletele se cumpără din automate sau din aplicație. Informații pe ${SRC("https://www.wienerlinien.at", "wienerlinien.at")}.</p>

<h2>Locuința</h2>
<p>Viena are un sistem mare de locuințe sociale și cooperative („Gemeindebau” și „Genossenschaftswohnungen”), dar accesul la ele cere de obicei o perioadă de locuire în oraș și alte condiții. La început, majoritatea nou-veniților închiriază pe piața privată. Câteva sfaturi:</p>
<ul>
<li>verifică dacă în chirie sunt incluse costurile de întreținere („Betriebskosten”);</li>
<li>la agenții, întreabă de comisionul de intermediere;</li>
<li>nu plăti garanția („Kaution”) înainte să vezi locuința și să semnezi contractul.</li>
</ul>

<h2>Locuri de muncă</h2>
<p>Mulți români din Viena lucrează în construcții, îngrijire, curățenie, hoteluri și restaurante, comerț și transport. Salariile se stabilesc în multe domenii prin contracte colective. Ghidul general e în articolul despre <a href="/blog/munca-in-austria-ghid-romani">munca în Austria</a>.</p>

<h2>Comunitatea românească și ambasada</h2>
<p>În Viena sunt parohii ortodoxe românești, asociații, magazine și restaurante românești. Pentru acte, românii se pot adresa secției consulare a ${SRC("https://viena.mae.ro", "Ambasadei României la Viena")}. Verifică pe site programul și serviciile.</p>

<h2>Ce să ai pregătit</h2>
<ul>
<li>actul de identitate valabil;</li>
<li>adresa completă, cu codul poștal al districtului și numele de pe sonerie;</li>
<li>formularul Meldezettel, semnat de proprietar, pentru înregistrare;</li>
<li>un telefon la care răspunzi la sosire.</li>
</ul>

<h2>Drumul spre Viena cu noi</h2>
<p>Te luăm de acasă și te lăsăm la adresa din Viena sau din împrejurimi. Dacă mergi mai departe în Austria, vezi ghidul despre <a href="/blog/transport-romania-graz-linz">Graz și Linz</a>. Detalii pe pagina de <a href="/transport-persoane-romania-austria">transport persoane România – Austria</a>.</p>`,
    faq: [
      ["Câți kilometri sunt până la Viena?", "De la Nădlac, aproximativ 500 km, aproape în întregime pe autostradă prin Ungaria."],
      ["Cât durează drumul cu microbuzul?", "De regulă mai puțin de o zi, cu preluări și pauze. Depinde mult de localitatea de plecare."],
      ["Unde mă înregistrez în Viena?", "La unul dintre birourile Meldeservice din districte, în trei zile de la mutare."],
      ["Cum aflu districtul după adresă?", "Din codul poștal: cifrele din mijloc arată districtul, de exemplu 1100 e districtul 10."],
      ["Unde mă adresez pentru acte românești?", "Secției consulare a Ambasadei României la Viena."],
    ],
  },

  {
    n: 69, published: true, date: D2, group: G, main: "AT",
    slug: "transport-romania-graz-linz",
    title: "Graz și Linz: cum ajungi din România",
    desc: "Cum ajungi din România la Graz sau Linz cu microbuzul: traseele prin Ungaria și Austria, durata, ce să știi despre fiecare oraș și primele formalități.",
    h1: "Graz și Linz: cum ajungi din România",
    cardText: "Două orașe, două trasee: drumul, viața de acolo și primele formalități.",
    ...IMG.traficFata,
    imgAlt: "Microbuz Renault Trafic pentru drumul spre Graz și Linz",
    related: ["transport-romania-viena", "munca-in-austria-ghid-romani"],
    intro: `
<p><strong>Graz și Linz se află fiecare la aproximativ 650–700 km de granița de vest a României.</strong> Spre Linz se merge pe autostradă prin Ungaria și Viena, pe A1. Spre Graz se poate merge prin Viena și pe A2, sau, în funcție de traseu, prin vestul Ungariei. Cu preluări și pauze, drumul durează de regulă în jur de o zi.</p>
<p>Graz e al doilea oraș ca mărime din Austria, iar Linz al treilea. Amândouă au industrie puternică și multe locuri de muncă. Mai jos găsești ce le deosebește.</p>`,
    body: `
<h2>Două orașe, două direcții</h2>
<div class="tbl"><table>
<thead><tr><th></th><th>Graz</th><th>Linz</th></tr></thead>
<tbody>
<tr><td>Land</td><td>Stiria (Steiermark), în sud-est</td><td>Austria Superioară (Oberösterreich), în nord</td></tr>
<tr><td>Traseul obișnuit</td><td>prin Viena și pe A2, sau prin vestul Ungariei</td><td>prin Viena, pe A1 spre vest</td></tr>
<tr><td>Distanță de la Nădlac</td><td>în jur de 650–700 km</td><td>în jur de 650 km</td></tr>
<tr><td>Cunoscut pentru</td><td>universități, industria auto și orașul vechi</td><td>industria siderurgică și chimică, Dunărea</td></tr>
</tbody>
</table></div>

<h2>Drumul spre Linz</h2>
<p>De la Nickelsdorf, microbuzul trece pe lângă Viena și continuă pe A1 spre vest, prin St. Pölten, până la Linz. E același drum pe care merg cursele spre Germania, care trec pe aici spre Passau sau Salzburg. Porțiunea de A1 e circulată, cu lucrări frecvente vara.</p>

<h2>Drumul spre Graz</h2>
<p>Spre Graz există mai multe variante. Una trece pe lângă Viena și coboară spre sud pe A2 („Süd Autobahn”), peste munții de la Wechsel. Alta traversează vestul Ungariei și intră în Austria mai la sud, în Burgenland sau în Stiria. Traseul se alege în funcție de pasageri și de trafic. Iarna, porțiunile de munte pot avea zăpadă.</p>

<h2>Graz: ce să știi</h2>
<ul>
<li><strong>Un oraș universitar</strong>, cu mulți studenți și o viață culturală bogată.</li>
<li><strong>Orașul vechi</strong> și dealul cu turnul cu ceas („Schlossberg”) sunt simbolurile orașului.</li>
<li><strong>Industria</strong>: zona Graz are fabrici auto și mulți furnizori, plus firme de tehnologie.</li>
<li><strong>Transportul</strong>: tramvaie și autobuze, organizate de operatorul local și de rețeaua de transport a Stiriei.</li>
</ul>

<h2>Linz: ce să știi</h2>
<ul>
<li><strong>Un oraș industrial</strong>, cu una dintre cele mai mari uzine siderurgice din Europa și o industrie chimică importantă.</li>
<li><strong>Pe malul Dunării</strong>, cu porturi și firme de logistică.</li>
<li><strong>Un oraș mai mic și mai liniștit</strong> decât Viena, cu chirii de obicei mai mici.</li>
<li><strong>Transportul</strong>: tramvaie și autobuze, inclusiv tramvaiul care urcă pe dealul Pöstlingberg.</li>
</ul>

<h2>Prima formalitate: Meldezettel</h2>
<p>Indiferent dacă mergi la Graz sau la Linz, înregistrarea adresei se face în trei zile de la mutare, la biroul de evidență al orașului. Îți trebuie formularul Meldezettel semnat de proprietar și actul de identitate. Dacă stai peste trei luni, ceri și certificatul de înregistrare UE. Pașii sunt în ghidul despre <a href="/blog/inregistrare-domiciliu-austria-meldezettel">Meldezettel în Austria</a>.</p>

<h2>Locuri de muncă</h2>
<p>Ambele orașe au multe locuri de muncă în industrie, construcții, logistică și servicii. Graz are și multe posturi legate de universități și de sănătate, iar Linz de industria grea și de transportul pe Dunăre. În ambele, salariile se stabilesc în multe domenii prin contracte colective. Ghidul general e în articolul despre <a href="/blog/munca-in-austria-ghid-romani">munca în Austria</a>.</p>

<h2>Împrejurimile</h2>
<p>Mulți români nu locuiesc chiar în oraș, ci în localitățile din jur: lângă Linz, de exemplu, în Traun, Leonding sau Wels; lângă Graz, în localitățile din valea râului Mur. Transportul e de la adresă la adresă, deci te lăsăm direct acolo. Spune-ne localitatea exactă la rezervare.</p>

<h2>Comunitatea românească</h2>
<p>Atât în Graz, cât și în Linz există parohii ortodoxe românești și comunități de români. Pentru acte, românii din Austria se adresează secției consulare a Ambasadei României la Viena. Verifică pe site-ul ${SRC("https://www.mae.ro", "MAE")} misiunea competentă și programul.</p>

<h2>Ce să ai pregătit</h2>
<ul>
<li>actul de identitate valabil;</li>
<li>adresa completă, cu codul poștal și numele de pe sonerie;</li>
<li>formularul Meldezettel semnat de proprietar;</li>
<li>haine potrivite: iarna e frig, mai ales în zonele de munte.</li>
</ul>

<h2>Drumul cu noi</h2>
<p>Te luăm de acasă și te lăsăm la adresa din Graz, Linz sau împrejurimi. Dacă te oprești mai devreme, vezi ghidul despre <a href="/blog/transport-romania-viena">Viena</a>. Detalii pe pagina de <a href="/transport-persoane-romania-austria">transport persoane România – Austria</a>.</p>`,
    faq: [
      ["Câți kilometri sunt până la Graz sau Linz?", "Aproximativ 650–700 km de la granița de vest a României, în funcție de traseu."],
      ["Pe unde se merge spre Linz?", "Prin Ungaria, pe lângă Viena și apoi pe autostrada A1 spre vest."],
      ["Pe unde se merge spre Graz?", "Prin Viena și pe A2, sau prin vestul Ungariei, în funcție de traseu și trafic."],
      ["Mă lăsați în Wels sau Leonding?", "Da, transportul e de la adresă la adresă. Spune-ne localitatea exactă la rezervare."],
      ["În câte zile mă înregistrez la adresă?", "În trei zile de la mutare, la biroul de evidență al orașului."],
    ],
  },

  {
    n: 70, published: true, date: D2, group: G, main: "NL",
    slug: "transport-romania-amsterdam-rotterdam",
    title: "Spre Amsterdam și Rotterdam: ghid de drum",
    desc: "Ghid pentru drumul cu microbuzul din România la Amsterdam sau Rotterdam: traseul prin Germania, durata, adresele olandeze, transportul local și sosirea.",
    h1: "Spre Amsterdam și Rotterdam: ghid de drum",
    cardText: "Capitala canalelor și orașul portului: drumul, adresele și primele zile.",
    ...IMG.masterRemorca,
    imgAlt: "Renault Master cu remorcă pe drumul spre Amsterdam și Rotterdam",
    related: ["inschrijving-olanda-bsn", "munca-in-olanda-ghid-romani"],
    intro: `
<p><strong>Amsterdam și Rotterdam se află la aproximativ 1.650–1.750 km de granița de vest a României, pe un traseu prin Ungaria, Austria și Germania, cu intrare în Olanda pe la Venlo sau Arnhem.</strong> Cu preluări și pauze, drumul cu microbuzul durează de regulă în jur de o zi și jumătate.</p>
<p>Amsterdam e capitala Olandei, iar Rotterdam are cel mai mare port din Europa. În ambele, dar mai ales în zona dintre ele, lucrează mulți români.</p>`,
    body: `
<h2>Traseul spre Olanda</h2>
<ol>
<li>prin Ungaria și Austria, până la Passau;</li>
<li>prin Germania, pe A3, prin Nürnberg, Frankfurt și Köln;</li>
<li>intrare în Olanda pe la Venlo (spre Eindhoven și Rotterdam) sau pe la Arnhem (spre Utrecht și Amsterdam);</li>
<li>pe autostrăzile olandeze până la adresă.</li>
</ol>
<p>Pe ultima parte, în Olanda, autostrăzile din jurul Amsterdamului, Utrechtului și Rotterdamului sunt foarte aglomerate dimineața și seara. Pe multe porțiuni, viteza maximă ziua e mai mică decât pe autostrăzile germane.</p>

<h2>Două orașe foarte diferite</h2>
<div class="tbl"><table>
<thead><tr><th></th><th>Amsterdam</th><th>Rotterdam</th></tr></thead>
<tbody>
<tr><td>Cunoscut pentru</td><td>canale, centrul istoric, turism</td><td>portul, arhitectura modernă, industria</td></tr>
<tr><td>Transport public</td><td>GVB (metrou, tramvai, autobuz, feriboturi gratuite peste IJ)</td><td>RET (metrou, tramvai, autobuz)</td></tr>
<tr><td>Locuri de muncă</td><td>servicii, hoteluri, curățenie, construcții</td><td>port, logistică, industrie, construcții</td></tr>
<tr><td>Chirii</td><td>printre cele mai mari din țară</td><td>de obicei mai mici decât în Amsterdam</td></tr>
</tbody>
</table></div>

<h2>Zona dintre ele: unde lucrează mulți români</h2>
<p>Între Rotterdam și Haga se află Westland, una dintre cele mai mari zone de sere din lume, unde se cultivă legume și flori. Mulți români lucrează aici, în sere și în depozite, de multe ori prin agenții de muncă. În jurul Rotterdamului și în zona Venlo – Eindhoven sunt și multe centre logistice. Dacă vii la muncă, vezi ghidul despre <a href="/blog/munca-in-olanda-ghid-romani">munca în Olanda</a>.</p>

<h2>Adresele olandeze</h2>
<p>O adresă olandeză are strada, numărul (uneori cu literă sau sufix, de exemplu 12A sau 12-2), codul poștal din patru cifre și două litere (de exemplu 3011 AB) și orașul. Codul poștal e foarte precis, ajunge până la nivel de stradă. Dă-ne adresa completă și numele de pe sonerie. Dacă stai într-o cazare de agenție, spune-ne și camera sau numărul apartamentului.</p>

<h2>Transportul local</h2>
<p>În Olanda, în multe autobuze, tramvaie și trenuri poți plăti direct cu cardul bancar contactless, fără bilet separat. Există și cardul de transport național („OV-chipkaart”). Bicicleta e mijlocul de transport preferat al olandezilor: multe drumuri au piste separate, iar o bicicletă second-hand e de obicei ieftină. Informații pe site-urile operatorilor locali, ${SRC("https://www.gvb.nl", "GVB")} în Amsterdam și ${SRC("https://www.ret.nl", "RET")} în Rotterdam.</p>

<h2>Prima formalitate: înscrierea și BSN</h2>
<p>Dacă stai mai mult de patru luni, te înscrii la primăria orașului unde locuiești și primești BSN-ul. Dacă stai mai puțin, te înscrii la un birou RNI. Amsterdam și Rotterdam au amândouă birouri RNI. Pașii sunt în ghidul despre <a href="/blog/inschrijving-olanda-bsn">BSN și înscrierea în Olanda</a>.</p>

<h2>Locuința</h2>
<p>Găsirea unei locuințe în Amsterdam e foarte grea, iar chiriile sunt mari. Rotterdam și orașele din jur, de exemplu Schiedam, Vlaardingen sau Dordrecht, sunt de obicei mai accesibile. Mulți lucrători stau la început în cazările agențiilor. Nu plăti garanția înainte să vezi locuința și să semnezi contractul.</p>

<h2>Comunitatea românească și ambasada</h2>
<p>În Olanda trăiesc mulți români, iar în orașele mari există parohii ortodoxe românești și magazine cu produse românești. Ambasada României în Olanda se află la Haga, între Amsterdam și Rotterdam. Verifică pe ${SRC("https://haga.mae.ro", "site-ul ambasadei")} programul secției consulare.</p>

<h2>Ce să ai pregătit</h2>
<ul>
<li>actul de identitate valabil;</li>
<li>certificatul de naștere, în formatul cerut pentru înscrierea la primărie;</li>
<li>adresa completă, cu cod poștal și număr exact;</li>
<li>o haină de ploaie: în Olanda plouă des și bate vântul.</li>
</ul>

<h2>Drumul spre Olanda cu noi</h2>
<p>Te luăm de acasă și te lăsăm la adresa din Amsterdam, Rotterdam sau oriunde între ele, inclusiv la cazarea de la agenție. Cât durează și cum faci drumul mai ușor afli din ghidul despre <a href="/blog/cat-dureaza-drumul-romania-olanda">drumul până în Olanda</a>. Detalii pe pagina de <a href="/transport-persoane-romania-olanda">transport persoane România – Olanda</a>.</p>`,
    faq: [
      ["Câți kilometri sunt până la Amsterdam?", "Aproximativ 1.650–1.750 km de la granița de vest a României, prin Ungaria, Austria și Germania."],
      ["Pe unde se intră în Olanda?", "De obicei pe la Venlo, spre Eindhoven și Rotterdam, sau pe la Arnhem, spre Utrecht și Amsterdam."],
      ["Mă lăsați în Westland, la cazarea agenției?", "Da, transportul e de la adresă la adresă. Spune-ne adresa exactă și camera."],
      ["Pot plăti transportul local cu cardul?", "În multe mijloace de transport din Olanda poți plăti direct cu cardul bancar contactless."],
      ["Unde e ambasada României în Olanda?", "La Haga, între Amsterdam și Rotterdam."],
    ],
  },

  {
    n: 71, published: true, date: D2, group: G, main: "BE",
    slug: "transport-romania-bruxelles-antwerpen",
    title: "Bruxelles și Antwerpen: cum ajungi din România",
    desc: "Cum ajungi din România la Bruxelles sau Antwerpen cu microbuzul: traseul prin Germania și Aachen, durata, limbile, comunele, transportul și sosirea.",
    h1: "Bruxelles și Antwerpen: cum ajungi din România",
    cardText: "Capitala UE și orașul portului: drumul, limbile, comunele și primele zile.",
    ...IMG.lux,
    imgAlt: "Interior microbuz pentru drumul spre Bruxelles și Antwerpen",
    related: ["inregistrare-belgia-comuna", "munca-in-belgia-ghid-romani"],
    intro: `
<p><strong>Bruxelles se află la aproximativ 1.650 km de granița de vest a României, iar Antwerpen la puțin peste, pe un traseu prin Ungaria, Austria și Germania, cu intrare în Belgia pe la Aachen.</strong> Cu preluări și pauze, drumul cu microbuzul durează de regulă în jur de o zi și jumătate.</p>
<p>Bruxelles e capitala Belgiei și sediul principalelor instituții ale Uniunii Europene, iar Antwerpen are unul dintre cele mai mari porturi din Europa. În ambele orașe trăiesc mulți români.</p>`,
    body: `
<h2>Traseul spre Belgia</h2>
<ol>
<li>prin Ungaria și Austria, până la Passau;</li>
<li>prin Germania, pe A3, prin Nürnberg, Frankfurt și Köln;</li>
<li>de la Köln spre Aachen și granița cu Belgia;</li>
<li>prin Liège spre Bruxelles, sau prin Hasselt spre Antwerpen.</li>
</ol>
<p>Ultima parte a drumului, în jurul Bruxellesului și al Antwerpenului, e foarte aglomerată la orele de vârf. Inelul de autostradă din jurul Antwerpenului și tunelurile de acolo au des blocaje.</p>

<h2>Două orașe, două limbi</h2>
<div class="tbl"><table>
<thead><tr><th></th><th>Bruxelles</th><th>Antwerpen</th></tr></thead>
<tbody>
<tr><td>Regiune</td><td>Regiunea Bruxelles-Capitală</td><td>Flandra</td></tr>
<tr><td>Limbi</td><td>franceză și olandeză (oficial bilingv)</td><td>olandeză</td></tr>
<tr><td>Transport public</td><td>STIB/MIVB (metrou, tramvai, autobuz)</td><td>De Lijn (tramvai, autobuz)</td></tr>
<tr><td>Cunoscut pentru</td><td>instituțiile UE, centrul istoric</td><td>portul, diamantele, moda</td></tr>
</tbody>
</table></div>
<p>În practică, în Bruxelles se vorbește mai mult franceza, iar în Antwerpen olandeza. Mulți oameni vorbesc și engleza.</p>

<h2>Bruxelles: 19 comune</h2>
<p>Regiunea Bruxelles e formată din 19 comune, fiecare cu propria administrație. Asta contează pentru acte: te înregistrezi la comuna în care locuiești, de exemplu Anderlecht, Schaerbeek, Molenbeek, Ixelles sau orașul Bruxelles propriu-zis. Fiecare comună are propriile programări și uneori propriile cerințe. Pașii generali sunt în ghidul despre <a href="/blog/inregistrare-belgia-comuna">înregistrarea la comună în Belgia</a>.</p>

<h2>Antwerpen: portul și districtele</h2>
<p>Portul din Antwerpen e unul dintre cele mai mari din Europa și oferă multe locuri de muncă în logistică, transport și industrie chimică. Orașul e împărțit în districte. Spune-ne adresa exactă, cu codul poștal din patru cifre, ca să știm unde mergem.</p>

<h2>Adresele belgiene</h2>
<p>O adresă din Belgia are strada, numărul, uneori un număr de cutie poștală sau de apartament („bus” în olandeză, „boîte” în franceză), codul poștal și orașul. În Bruxelles, străzile au de obicei nume în ambele limbi, de exemplu „Rue” și „Straat”. Dă-ne adresa exact cum o ai în contract și numele de pe sonerie.</p>

<h2>Transportul local</h2>
<p>În Bruxelles, metroul, tramvaiele și autobuzele sunt operate de STIB/MIVB. În Antwerpen și în restul Flandrei, tramvaiele și autobuzele sunt operate de De Lijn. Trenurile naționale sunt operate de SNCB/NMBS. Biletele se cumpără din aplicații, de la automate sau, în multe cazuri, cu cardul bancar contactless. Informații pe ${SRC("https://www.stib-mivb.be", "stib-mivb.be")} și ${SRC("https://www.delijn.be", "delijn.be")}.</p>

<h2>Locuri de muncă</h2>
<p>Mulți români din Belgia lucrează în construcții, curățenie, logistică, transport, hoteluri și restaurante. În Bruxelles există și locuri de muncă legate de instituțiile europene, de obicei cu alte cerințe. Ghidul general e în articolul despre <a href="/blog/munca-in-belgia-ghid-romani">munca în Belgia</a>.</p>

<h2>Locuința</h2>
<p>Chiriile în Bruxelles variază mult de la o comună la alta. Antwerpen are și el o piață de închiriere activă. Contractele prevăd de obicei o garanție, depusă adesea într-un cont blocat. Nu plăti garanția în numerar unei persoane pe care nu o cunoști și nu plăti înainte să vezi locuința.</p>

<h2>Comunitatea românească și ambasada</h2>
<p>În Bruxelles și Antwerpen există parohii ortodoxe românești, asociații și magazine românești. ${SRC("https://bruxelles.mae.ro", "Ambasada României în Belgia")}, cu secție consulară, se află la Bruxelles. Verifică pe site programul și serviciile.</p>

<h2>Ce să ai pregătit</h2>
<ul>
<li>actul de identitate valabil;</li>
<li>adresa completă, cu numărul de cutie sau apartament și numele de pe sonerie;</li>
<li>contractul de închiriere, pentru înregistrarea la comună;</li>
<li>o haină de ploaie: vremea în Belgia e adesea umedă și cu vânt.</li>
</ul>

<h2>Drumul spre Belgia cu noi</h2>
<p>Te luăm de acasă și te lăsăm la adresa din Bruxelles, Antwerpen sau din alte orașe belgiene. Cât durează drumul și ce opriri se fac afli din ghidul despre <a href="/blog/cat-dureaza-drumul-romania-belgia">drumul România – Belgia</a>. Detalii pe pagina de <a href="/transport-persoane-romania-belgia">transport persoane România – Belgia</a>.</p>`,
    faq: [
      ["Câți kilometri sunt până la Bruxelles?", "Aproximativ 1.650 km de la granița de vest a României, prin Ungaria, Austria și Germania."],
      ["Pe unde se intră în Belgia?", "De obicei pe la Aachen, apoi prin Liège spre Bruxelles sau prin Hasselt spre Antwerpen."],
      ["Ce limbă se vorbește în Antwerpen?", "Olandeza. În Bruxelles se vorbesc franceza și olandeza."],
      ["La ce comună mă înregistrez în Bruxelles?", "La comuna în care locuiești. Regiunea Bruxelles are 19 comune."],
      ["Unde e ambasada României în Belgia?", "La Bruxelles, cu secție consulară."],
    ],
  },

  {
    n: 72, published: true, date: D2, group: G, main: "DE",
    slug: "transport-romania-koln-dusseldorf",
    title: "Köln și Düsseldorf: drumul din România",
    desc: "Drumul cu microbuzul din România la Köln sau Düsseldorf: traseul pe A3 prin Frankfurt, durata, zona Rin-Ruhr, transportul VRR și VRS și sosirea.",
    h1: "Köln și Düsseldorf: drumul din România",
    cardText: "Pe A3 până pe Rin: traseul, zona Rin-Ruhr, transportul și sosirea.",
    ...IMG.masterRemorca,
    imgAlt: "Microbuz cu remorcă pe drumul spre Köln și Düsseldorf",
    related: ["transport-romania-frankfurt", "cat-dureaza-drumul-romania-germania"],
    intro: `
<p><strong>Köln și Düsseldorf se află la aproximativ 1.400–1.500 km de granița de vest a României, pe un traseu prin Ungaria și Austria, apoi pe autostrada A3, prin Nürnberg și Frankfurt.</strong> Cu preluări și pauze, drumul cu microbuzul durează de regulă în jur de o zi și jumătate.</p>
<p>Cele două orașe de pe Rin fac parte din cea mai populată regiune a Germaniei, Renania de Nord-Westfalia, cu multe locuri de muncă și o comunitate românească mare.</p>`,
    body: `
<h2>Traseul spre Köln și Düsseldorf</h2>
<ol>
<li>prin Ungaria și Austria, până la Passau;</li>
<li>pe A3, prin Regensburg, Nürnberg și Würzburg;</li>
<li>pe lângă Frankfurt și mai departe pe A3, prin munții Westerwald;</li>
<li>până la Köln și, mai departe, spre Düsseldorf.</li>
</ol>
<p>Porțiunea de A3 dintre Frankfurt și Köln trece prin zone de deal, cu urcări și coborâri, și e foarte circulată. În jurul orașului Köln, inelul de autostrăzi are des blocaje. Între Köln și Düsseldorf traficul e intens aproape toată ziua.</p>

<h2>Distanțe orientative</h2>
<div class="tbl"><table>
<thead><tr><th>Porțiune</th><th>Distanță aproximativă</th></tr></thead>
<tbody>
<tr><td>Nădlac – Frankfurt</td><td>în jur de 1.230 km</td></tr>
<tr><td>Frankfurt – Köln</td><td>în jur de 190 km</td></tr>
<tr><td>Köln – Düsseldorf</td><td>în jur de 40 km</td></tr>
</tbody>
</table></div>

<h2>Două orașe vecine, două personalități</h2>
<div class="tbl"><table>
<thead><tr><th></th><th>Köln</th><th>Düsseldorf</th></tr></thead>
<tbody>
<tr><td>Cunoscut pentru</td><td>catedrala gotică, carnavalul, media</td><td>capitala landului, moda, afacerile</td></tr>
<tr><td>Transport</td><td>KVB, în rețeaua VRS</td><td>Rheinbahn, în rețeaua VRR</td></tr>
<tr><td>Mărime</td><td>cel mai mare oraș din land</td><td>al doilea ca mărime din zonă</td></tr>
</tbody>
</table></div>
<p>Între cele două orașe există o rivalitate prietenoasă veche, de la bere până la carnaval.</p>

<h2>Zona Rin-Ruhr</h2>
<p>Köln și Düsseldorf fac parte dintr-o zonă urbană uriașă, împreună cu orașele din Ruhr: Duisburg, Essen, Bochum, Dortmund, Gelsenkirchen, plus Bonn, Leverkusen, Neuss, Wuppertal. Mulți români locuiesc și lucrează în aceste orașe. Transportul e de la adresă la adresă, deci te lăsăm direct în localitatea ta.</p>

<h2>Transportul local</h2>
<p>În zona Köln – Bonn, transportul e organizat de rețeaua VRS, cu operatorul KVB în Köln. În Düsseldorf și în Ruhr, de rețeaua VRR, cu operatorul Rheinbahn în Düsseldorf. Biletele se cumpără din automate sau din aplicații. Abonamentul național „Deutschlandticket” e valabil în ambele rețele, dar condițiile și prețul se pot schimba. Informații pe ${SRC("https://www.kvb.koeln", "kvb.koeln")} și ${SRC("https://www.vrr.de", "vrr.de")}.</p>

<h2>Carnavalul</h2>
<p>Carnavalul din Köln și Düsseldorf e una dintre cele mai mari sărbători din Germania. Sezonul începe oficial pe 11 noiembrie, iar zilele cele mai mari sunt în februarie sau martie, înainte de Postul catolic. În acele zile, orașele sunt pline de oameni costumați, iar traficul și transportul public sunt foarte aglomerate. Dacă ajungi atunci, lasă-ți timp în plus.</p>

<h2>Locuri de muncă</h2>
<p>Zona are multe locuri de muncă în industrie, logistică (inclusiv portul fluvial din Duisburg, unul dintre cele mai mari din Europa), construcții, comerț, curățenie, îngrijire și servicii. Ghidul general e în articolul despre <a href="/blog/munca-in-germania-ghid-romani">munca în Germania</a>.</p>

<h2>Prima săptămână</h2>
<ul>
<li>programare pentru înregistrarea adresei la biroul de cetățeni al orașului în care locuiești;</li>
<li>cartelă de telefon și cont bancar;</li>
<li>casa de asigurări de sănătate;</li>
<li>abonamentul de transport.</li>
</ul>
<p>Ordinea completă e în <a href="/blog/prima-zi-in-germania-checklist">checklist-ul pentru primele 7 zile</a>.</p>

<h2>Comunitatea românească și consulatul</h2>
<p>În Renania de Nord-Westfalia trăiesc foarte mulți români, cu parohii ortodoxe românești, asociații și magazine. Pentru acte, românii din zonă se pot adresa ${SRC("https://bonn.mae.ro", "Consulatului General al României la Bonn")}, aproape de Köln. Verifică pe site programul și serviciile.</p>

<h2>Ce să ai pregătit</h2>
<ul>
<li>actul de identitate valabil;</li>
<li>adresa completă, cu cod poștal și numele de pe sonerie;</li>
<li>confirmarea proprietarului pentru Anmeldung;</li>
<li>o umbrelă: în zona Rinului plouă des.</li>
</ul>

<h2>Drumul spre Köln și Düsseldorf cu noi</h2>
<p>Te luăm de acasă și te lăsăm la adresa din Köln, Düsseldorf sau din orașele din jur, fără schimbări pe drum. Dacă te oprești mai devreme, vezi ghidul despre <a href="/blog/transport-romania-frankfurt">Frankfurt</a>. Cât durează drumul spre alte orașe afli din ghidul despre <a href="/blog/cat-dureaza-drumul-romania-germania">durata drumului până în Germania</a>. Detalii pe pagina de <a href="/transport-persoane-romania-germania">transport persoane România – Germania</a>.</p>`,
    faq: [
      ["Câți kilometri sunt până la Köln?", "Aproximativ 1.400–1.450 km de la granița de vest a României, prin Ungaria, Austria și pe A3."],
      ["Cât durează drumul cu microbuzul?", "De regulă în jur de o zi și jumătate, cu preluări și pauze."],
      ["Mă lăsați în Essen sau Duisburg?", "Da, transportul e de la adresă la adresă. Spune-ne localitatea exactă la rezervare."],
      ["Când e carnavalul din Köln?", "Sezonul începe pe 11 noiembrie, iar zilele cele mai mari sunt în februarie sau martie."],
      ["Unde mă adresez pentru acte românești în zonă?", "Consulatului General al României la Bonn."],
    ],
  },
];
