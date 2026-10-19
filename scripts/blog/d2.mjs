// Valul 2 – Grup D (41–44): colete. Fără prețuri inventate: prețul se explică pe factori.
import { IMG, D2, SRC } from "./_img.mjs";
const G = "Colete";

export default [
  {
    n: 41, published: true, date: D2, group: G, main: "COL",
    slug: "curier-vs-microbuz-colete",
    title: "Curier clasic sau microbuz pentru colete? Comparație",
    desc: "Curier clasic sau microbuz pentru colete în Germania, Austria, Olanda sau Belgia? Diferențele la ridicare, depozite, predare, obiecte mari și mâncare.",
    h1: "Curier clasic sau microbuz pentru colete? Comparație",
    cardText: "Depozite sau predare în mână, colete mici sau mari: când merită fiecare.",
    ...IMG.traficRemorca,
    imgAlt: "Microbuz cu remorcă pentru transport colete în Europa",
    related: ["pret-colet-in-functie-de-greutate", "cum-trimiti-colet-in-austria"],
    intro: `
<p><strong>Curierul clasic e potrivit pentru plicuri și pachete mici, standard, pe care le trimiți des și care pot trece prin mai multe depozite.</strong> Microbuzul e mai potrivit pentru colete cu mâncare de casă, lucruri voluminoase, obiecte la care ții sau situații în care vrei ca pachetul să fie predat în mână, fără depozite.</p>
<p>Mai jos găsești diferențele punct cu punct, ca să alegi ce ți se potrivește.</p>`,
    body: `
<h2>Cum funcționează fiecare</h2>
<h3>Curierul clasic</h3>
<p>Coletul e ridicat de la tine sau îl duci tu la un punct de predare. Apoi merge la un depozit local, de acolo la un centru de sortare, apoi la un depozit din țara de destinație, apoi la un depozit local și abia de acolo la destinatar. Pe drum, coletul trece prin benzi de sortare, camioane și mâini diferite.</p>
<h3>Microbuzul</h3>
<p>Coletul e ridicat de la tine de șoferul care face cursa, pus în microbuz sau în remorcă și dus direct la destinatar. Aceeași echipă îl ia și îl predă. Nu există depozite intermediare.</p>

<h2>Comparația, punct cu punct</h2>
<div class="tbl"><table>
<thead><tr><th>Criteriu</th><th>Curier clasic</th><th>Microbuz BRO Transport</th></tr></thead>
<tbody>
<tr><td>Ridicare</td><td>De la adresă sau dintr-un punct de predare</td><td>De la adresa ta</td></tr>
<tr><td>Depozite pe drum</td><td>Mai multe</td><td>Niciunul</td></tr>
<tr><td>Predare</td><td>La adresă, în cutia poștală, la vecini sau la un punct de ridicare</td><td>În mână, după un telefon</td></tr>
<tr><td>Colete voluminoase</td><td>Limitate de dimensiuni standard</td><td>Se pot transporta, inclusiv în remorcă</td></tr>
<tr><td>Ambalare</td><td>Strictă, pentru benzile de sortare</td><td>Bună, dar coletul nu trece prin benzi</td></tr>
<tr><td>Mâncare de casă</td><td>Riscant pe drumuri lungi</td><td>Merge mai bine, pentru că ajunge direct</td></tr>
<tr><td>Comunicare</td><td>Cod de urmărire online</td><td>Vorbești direct cu noi și cu șoferul</td></tr>
</tbody>
</table></div>

<h2>Când e mai bun curierul clasic</h2>
<ul>
<li>pentru plicuri cu acte simple, când nu e urgent;</li>
<li>pentru pachete mici și ușoare, standard;</li>
<li>pentru destinații unde nu facem curse;</li>
<li>când vrei să urmărești online fiecare pas al coletului.</li>
</ul>

<h2>Când e mai bun microbuzul</h2>
<ul>
<li><strong>pentru mâncare de casă</strong>: borcane, cozonac, afumături. Ajung direct, fără zile pierdute prin depozite;</li>
<li><strong>pentru lucruri voluminoase</strong>: un televizor, o bicicletă, o cutie mare cu haine, mobilă mică;</li>
<li><strong>pentru lucruri la care ții</strong>, pe care nu vrei să le treci prin benzi de sortare;</li>
<li><strong>pentru destinatari care nu sunt mereu acasă</strong>: șoferul sună înainte și stabilește predarea;</li>
<li><strong>pentru persoanele în vârstă</strong>, care nu folosesc aplicații de urmărire și preferă să vorbească direct cu cineva.</li>
</ul>

<h2>Ambalarea: diferența ascunsă</h2>
<p>La curierul clasic, coletul cade de pe benzi, e stivuit sub alte colete și trece prin multe încărcări. Ambalarea trebuie să reziste la toate acestea. La microbuz, coletul e încărcat și descărcat de puține ori, de aceleași persoane. Ambalarea rămâne importantă, pentru că drumul e lung, dar riscurile sunt mai mici. Vezi ghidul despre <a href="/blog/cum-ambalezi-un-colet-corect">cum ambalezi un colet</a>.</p>

<h2>Prețul: cum compari corect</h2>
<p>Prețul unui colet depinde, la oricine, de greutate, de dimensiuni și de distanță. Când compari, verifică:</p>
<ol>
<li>dacă prețul include ridicarea de la tine;</li>
<li>dacă include predarea la adresă sau doar la un punct de ridicare;</li>
<li>dacă există taxe în plus pentru colete voluminoase;</li>
<li>dacă e nevoie de ambalaj special, pe care îl plătești separat.</li>
</ol>
<p>Cum se calculează prețul unui colet afli din ghidul despre <a href="/blog/pret-colet-in-functie-de-greutate">prețul coletelor în funcție de greutate</a>. Prețul nostru îl afli exact la telefon, înainte de ridicare.</p>

<h2>Exemple din practică</h2>
<p><strong>Un plic cu o copie după un act, fără grabă</strong>: curierul clasic sau poșta sunt de obicei suficiente.</p>
<p><strong>O cutie cu borcane și cozonac pentru Crăciun</strong>: microbuzul e mai potrivit, pentru că mâncarea ajunge direct și borcanele nu trec prin benzi.</p>
<p><strong>Un televizor cumpărat în Germania pentru părinți</strong>: microbuzul, pentru că un obiect atât de mare și de fragil e riscant prin depozite.</p>
<p><strong>Haine de iarnă pentru un frate plecat la muncă</strong>: oricare, dar microbuzul le predă în mână, iar pe drum se pot pune și alte lucruri de acasă.</p>

<h2>Ce nu se trimite, indiferent de variantă</h2>
<p>La orice transportator, nu se trimit substanțe periculoase, arme, bani sau alte lucruri interzise. Lista completă e în articolul despre <a href="/blog/ce-nu-ai-voie-sa-trimiti-in-colet">ce nu ai voie să trimiți într-un colet</a>.</p>

<h2>Unde facem curse</h2>
<p>Transportăm colete între România și Germania, Austria, Olanda și Belgia, în ambele sensuri. Pentru Austria găsești pașii în ghidul despre <a href="/blog/cum-trimiti-colet-in-austria">coletul în Austria</a>, iar pentru Germania în articolul despre <a href="/blog/cum-trimiti-colet-in-germania">cum trimiți un colet în Germania</a>.</p>

<h2>Trimite coletul cu noi</h2>
<p>Sună-ne la 0790 752 888 sau scrie-ne pe WhatsApp. Ridicăm coletul de la tine și îl predăm în mână. Detalii pe pagina de <a href="/transport-colete-romania-europa">transport colete România – Europa</a>.</p>`,
    faq: [
      ["E mai sigur microbuzul decât curierul?", "Coletul trece prin mai puține mâini și nu stă în depozite. Pentru lucrurile fragile sau voluminoase, asta reduce riscurile."],
      ["Pot urmări coletul online?", "Nu printr-un cod de urmărire, dar vorbești direct cu noi și cu șoferul, care îl sună pe destinatar înainte de predare."],
      ["Ce e mai potrivit pentru mâncare de casă?", "Microbuzul, pentru că mâncarea ajunge direct la destinatar, fără zile pierdute prin depozite."],
      ["Transportați și colete mari?", "Da, inclusiv în remorci acoperite. Spune-ne dimensiunile la rezervare."],
      ["Cum aflu prețul?", "La 0790 752 888 sau pe WhatsApp. Spune-ne ce trimiți, cât cântărește și unde."],
    ],
  },

  {
    n: 42, published: true, date: D2, group: G, main: "COL",
    slug: "trimitere-electrocasnice-mobila-strainatate",
    title: "Cum trimiți electrocasnice sau mobilă în străinătate",
    desc: "Cum trimiți electrocasnice sau mobilă din România în Germania, Austria, Olanda sau Belgia: pregătire, demontare, ambalare și ce să ne spui la rezervare.",
    h1: "Cum trimiți electrocasnice sau mobilă în străinătate",
    cardText: "Televizoare, mașini de spălat, mobilă mică: cum le pregătești pentru drum.",
    ...IMG.masterRemorca,
    imgAlt: "Microbuz cu remorcă acoperită pentru obiecte mari",
    related: ["mutare-in-germania-ce-iei-cu-tine", "cum-ambalezi-un-colet-corect"],
    intro: `
<p><strong>Electrocasnicele și mobila mică se pot trimite în străinătate cu microbuzul și remorca acoperită, dacă sunt pregătite și ambalate corect și dacă ne spui dinainte dimensiunile.</strong> Cel mai important e să ne anunți la rezervare ce trimiți, ca să știm dacă are loc și să-i facem spațiu.</p>
<p>Mai jos găsești cum pregătești fiecare tip de obiect, de la televizor la un dulap demontat.</p>`,
    body: `
<h2>Ce putem transporta</h2>
<p>În remorca acoperită și în microbuz încap multe obiecte mari, dar nu orice. Ca orientare:</p>
<div class="tbl"><table>
<thead><tr><th>Obiect</th><th>De obicei</th><th>Ce să știi</th></tr></thead>
<tbody>
<tr><td>Televizor</td><td>Da</td><td>Ideal în cutia originală.</td></tr>
<tr><td>Cuptor cu microunde, aspirator, mixer</td><td>Da</td><td>În cutie, cu material de umplere.</td></tr>
<tr><td>Mașină de spălat, frigider mic</td><td>Se discută</td><td>Depinde de dimensiuni și de locul din cursă.</td></tr>
<tr><td>Mobilă demontată (dulap, pat, birou)</td><td>Se discută</td><td>Demontată și ambalată, cu feroneria într-o pungă.</td></tr>
<tr><td>Scaune, măsuțe, rafturi</td><td>Da</td><td>Protejate la colțuri.</td></tr>
<tr><td>Bicicletă, trotinetă</td><td>Da</td><td>Cu bateria anunțată, dacă e electrică.</td></tr>
</tbody>
</table></div>
<!-- TODO: dimensiunile maxime acceptate în remorcă – de confirmat de firmă. -->
<p>Pentru obiectele foarte mari sau pentru o mutare întreagă, spune-ne exact ce ai. Îți spunem sincer dacă se poate sau dacă e mai potrivită altă soluție.</p>

<h2>Electrocasnicele mici</h2>
<ul>
<li>pune-le în cutia originală, dacă o mai ai;</li>
<li>dacă nu, înfășoară-le în folie cu bule și pune-le într-o cutie cu material de umplere;</li>
<li>scoate accesoriile detașabile (platanul de la microunde, sacul de la aspirator) și ambalează-le separat;</li>
<li>înfășoară cablul și prinde-l cu bandă, ca să nu se agațe.</li>
</ul>

<h2>Televizorul</h2>
<p>Televizorul e unul dintre cele mai fragile obiecte. Ecranul se poate crăpa la o lovitură sau la o presiune puternică.</p>
<ol>
<li>cel mai bine e cutia originală, cu bucățile de polistiren;</li>
<li>dacă nu o ai, acoperă ecranul cu o pătură sau cu carton, apoi înfășoară tot televizorul în folie cu bule;</li>
<li>transportă televizorul în picioare, nu culcat;</li>
<li>scoate picioarele sau suportul și pune-le separat, cu șuruburile într-o pungă lipită de cutie;</li>
<li>scrie mare „Fragil” și „Sus” pe ambalaj.</li>
</ol>

<h2>Electrocasnicele mari</h2>
<h3>Mașina de spălat</h3>
<p>Mașina de spălat are un tambur care se poate deteriora dacă nu e fixat. Montează șuruburile de transport din spate, dacă le mai ai. Golește apa din furtunuri și din filtru, cu o zi înainte. Prinde ușa cu bandă și furtunurile în interiorul tamburului.</p>
<h3>Frigiderul</h3>
<p>Dezgheață-l și usucă-l bine cu o zi înainte. Scoate rafturile și sertarele și ambalează-le separat. Prinde ușa cu bandă. După transport, lasă-l în picioare câteva ore înainte să-l pornești, cum recomandă de obicei producătorii.</p>

<h2>Mobila</h2>
<h3>Demontează ce se poate demonta</h3>
<p>Dulapurile, paturile și birourile se transportă mult mai sigur demontate. Ocupă mai puțin loc și nu se rup la încheieturi.</p>
<h3>Păstrează feroneria</h3>
<p>Pune toate șuruburile, diblurile și balamalele într-o pungă închisă, scrie pe ea de la ce mobilă sunt și lipește-o de una dintre plăci. Fă și poze înainte de demontare, ca să știi cum se montează la loc.</p>
<h3>Protejează plăcile și colțurile</h3>
<p>Înfășoară plăcile în pături vechi, carton sau folie cu bule. Colțurile sunt cele mai expuse: pune pe ele carton îndoit, prins cu bandă. Oglinzile și geamurile se ambalează separat, cu carton pe ambele fețe.</p>

<h2>Ce să ne spui la rezervare</h2>
<ul>
<li>ce obiect e și dimensiunile aproximative (lungime, lățime, înălțime);</li>
<li>greutatea aproximativă;</li>
<li>dacă e ambalat sau nu;</li>
<li>adresa de ridicare și dacă e la etaj, cu sau fără lift;</li>
<li>adresa de predare, etajul și dacă există lift;</li>
<li>cine ajută la încărcare și descărcare, dacă obiectul e foarte greu.</li>
</ul>
<!-- TODO: dacă BRO ajută la urcat/coborât obiecte mari pe scări – de confirmat de firmă. -->

<h2>Merită să trimiți sau să cumperi acolo?</h2>
<p>Uneori e mai simplu să cumperi un electrocasnic la destinație, mai ales dacă e ieftin sau foarte mare. Alteori merită să-l trimiți: dacă e aproape nou, dacă ține la el familia sau dacă la destinație e mult mai scump. Gândește-te și la tensiunea și la priza aparatului. În Germania, Austria, Olanda și Belgia se folosesc aceeași tensiune și prize compatibile cu cele din România, deci aparatele merg de obicei fără adaptor.</p>

<h2>Dacă te muți de tot</h2>
<p>Dacă te muți definitiv și ai multe lucruri, citește ghidul despre <a href="/blog/mutare-in-germania-ce-iei-cu-tine">ce iei cu tine când te muți</a>. Acolo găsești ce merită dus, ce merită lăsat și cum împarți lucrurile între bagaj și colete.</p>

<h2>Trimite obiectele mari cu noi</h2>
<p>Sună-ne la 0790 752 888 sau scrie-ne pe WhatsApp, cu poze și dimensiuni, dacă se poate. Îți spunem dacă are loc și cât costă. Pentru ambalarea restului de lucruri, vezi ghidul despre <a href="/blog/cum-ambalezi-un-colet-corect">cum ambalezi un colet</a>. Detalii pe pagina de <a href="/transport-colete-romania-europa">transport colete România – Europa</a>.</p>`,
    faq: [
      ["Pot trimite un televizor în Germania?", "Da, bine ambalat, ideal în cutia originală, transportat în picioare. Spune-ne dimensiunile la rezervare."],
      ["Transportați mașini de spălat sau frigidere?", "Se discută în funcție de dimensiuni și de locul din cursă. Spune-ne dinainte ce ai."],
      ["Trebuie demontată mobila?", "Da, cât se poate. Demontată ocupă mai puțin loc și se transportă mai sigur."],
      ["Merg aparatele românești în Germania?", "Da. Germania, Austria, Olanda și Belgia folosesc aceeași tensiune ca România și prize compatibile, deci aparatele merg de obicei fără adaptor."],
      ["Ce să vă trimit ca să aflu prețul?", "Ce obiect e, dimensiunile, greutatea și adresele, plus poze, dacă poți."],
    ],
  },

  {
    n: 43, published: true, date: D2, group: G, main: "COL",
    slug: "colet-din-germania-in-romania",
    title: "Colet din Germania în România: cum funcționează returul",
    desc: "Cum trimiți un colet din Germania în România: ridicare de la adresa din Germania, ce se trimite des acasă, ambalare și predarea în mână familiei.",
    h1: "Colet din Germania în România: cum funcționează returul",
    cardText: "Ridicare din Germania, ce trimit des românii acasă și predarea la familie.",
    ...IMG.trafic,
    imgAlt: "Microbuz BRO Transport pe drumul de întoarcere spre România",
    related: ["cum-trimiti-colet-in-germania", "trimitere-electrocasnice-mobila-strainatate"],
    intro: `
<p><strong>Ca să trimiți un colet din Germania în România, ne contactezi, ne spui ce trimiți și unde, iar noi îl ridicăm de la adresa ta din Germania și îl predăm în mână familiei din România.</strong> Procedura e aceeași ca la coletele trimise din țară, doar în sens invers.</p>
<p>Facem curse în ambele sensuri, așa că și coletele spre casă merg direct, fără depozite. Același lucru e valabil și pentru Austria, Olanda și Belgia.</p>`,
    body: `
<h2>Pașii, pe scurt</h2>
<ol>
<li>ne suni la 0790 752 888 sau ne scrii pe WhatsApp;</li>
<li>ne spui ce trimiți, greutatea și dimensiunile aproximative;</li>
<li>ne dai adresa din Germania de unde ridicăm coletul;</li>
<li>ne dai adresa din România unde îl predăm și telefonul destinatarului;</li>
<li>stabilim ziua de ridicare și prețul;</li>
<li>șoferul te sună înainte și ridică coletul de la tine;</li>
<li>în România, șoferul sună destinatarul și îi predă coletul în mână.</li>
</ol>

<h2>Ce trimit des românii din Germania acasă</h2>
<div class="tbl"><table>
<thead><tr><th>Ce</th><th>De ce</th></tr></thead>
<tbody>
<tr><td>Electrocasnice și electronice</td><td>Cumpărate la reduceri sau primite de la cunoscuți.</td></tr>
<tr><td>Haine și încălțăminte</td><td>Pentru copii, părinți, frați.</td></tr>
<tr><td>Dulciuri, cafea, ciocolată</td><td>Pentru familie, mai ales de sărbători.</td></tr>
<tr><td>Jucării și lucruri pentru copii</td><td>Cadouri pentru nepoți sau pentru copiii rămași acasă.</td></tr>
<tr><td>Produse de îngrijire și de curățenie</td><td>Mărci preferate sau la prețuri bune.</td></tr>
<tr><td>Piese auto, scule</td><td>Pentru mașina sau atelierul de acasă.</td></tr>
<tr><td>Lucrurile personale</td><td>La finalul unui contract de muncă, când nu încap toate în bagaj.</td></tr>
</tbody>
</table></div>

<h2>Ce date ne trebuie</h2>
<h3>Pentru ridicarea din Germania</h3>
<ul>
<li>adresa completă, cu cod poștal din cinci cifre;</li>
<li>numele de pe sonerie;</li>
<li>telefonul tău;</li>
<li>intervalul în care ești acasă, mai ales dacă lucrezi în schimburi.</li>
</ul>
<h3>Pentru predarea în România</h3>
<ul>
<li>numele destinatarului;</li>
<li>adresa completă: localitate, stradă, număr, bloc, scară, apartament;</li>
<li>telefonul destinatarului;</li>
<li>un reper, dacă adresa e într-un sat sau într-o zonă greu de găsit.</li>
</ul>

<h2>Colete la finalul contractului de muncă</h2>
<p>Mulți români care termină un contract în Germania se întorc acasă cu mult mai multe lucruri decât au plecat. Bagajul de pe drum nu ajunge pentru tot. Ai două variante:</p>
<ul>
<li><strong>vii acasă cu noi</strong> și spui la rezervare că ai bagaje multe. Atașăm remorca acoperită, dacă e nevoie;</li>
<li><strong>trimiți o parte ca și colet</strong>, separat, iar tu călătorești doar cu ce îți trebuie pe drum.</li>
</ul>
<p>Ambele variante merg în aceeași cursă sau în curse diferite, după cum îți convine.</p>

<h2>Electrocasnice cumpărate în Germania</h2>
<p>Un televizor, o mașină de cafea sau un aspirator cumpărate în Germania se pot trimite acasă. Păstrează cutia originală, pentru că e cel mai bun ambalaj. Pune în colet și factura sau o copie a ei, pentru garanție. Pentru obiectele mari, vezi ghidul despre <a href="/blog/trimitere-electrocasnice-mobila-strainatate">trimiterea de electrocasnice și mobilă</a>.</p>

<h2>Ambalarea pentru drumul spre casă</h2>
<p>Regulile sunt aceleași ca la orice colet: cutie rezistentă, golurile umplute, obiectele fragile protejate separat, bandă pe toate marginile și numele și telefonul destinatarului pe cutie. Cutiile de la magazinele din Germania sunt de obicei foarte bune pentru asta. Detalii în ghidul despre <a href="/blog/cum-ambalezi-un-colet-corect">cum ambalezi un colet</a>.</p>

<h2>Cine primește coletul în România</h2>
<p>Asigură-te că destinatarul știe că vine coletul și că răspunde la telefon. Pentru persoanele în vârstă, e util să le spui dinainte ziua aproximativă și numele firmei. Șoferul sună înainte de predare, ca destinatarul să fie acasă.</p>

<h2>Ce nu se trimite nici spre casă</h2>
<p>Regulile pentru obiectele interzise sunt aceleași în ambele sensuri: fără substanțe periculoase, arme, bani sau alte lucruri interzise. Lista completă e în articolul despre <a href="/blog/ce-nu-ai-voie-sa-trimiti-in-colet">ce nu ai voie să trimiți într-un colet</a>.</p>

<h2>Și din Austria, Olanda sau Belgia</h2>
<p>Nu doar din Germania. Facem curse în ambele sensuri și cu Austria, Olanda și Belgia. Procedura e aceeași: ridicăm coletul de la adresa ta din străinătate și îl predăm în mână în România. Cum funcționează trimiterea în sens invers, din România, afli din ghidul despre <a href="/blog/cum-trimiti-colet-in-germania">cum trimiți un colet în Germania</a>.</p>

<h2>Trimite coletul acasă</h2>
<p>Sună-ne la 0790 752 888 sau scrie-ne pe WhatsApp. Ridicăm coletul de la tine și îl predăm familiei în mână. Detalii pe pagina de <a href="/transport-colete-romania-europa">transport colete România – Europa</a>.</p>`,
    faq: [
      ["Ridicați colete și din Germania?", "Da. Facem curse în ambele sensuri și ridicăm coletul de la adresa ta din Germania."],
      ["Pot trimite un televizor cumpărat în Germania?", "Da, bine ambalat, ideal în cutia originală. Spune-ne dimensiunile la rezervare."],
      ["Mă întorc acasă cu multe lucruri. Ce fac?", "Spune-ne la rezervare că ai bagaje multe, ca să atașăm remorca, sau trimite o parte separat, ca și colet."],
      ["Destinatarul din România e în vârstă. Cum se face predarea?", "Șoferul îl sună înainte și îi predă coletul în mână. E bine să-l anunți și tu dinainte."],
      ["Ridicați colete și din Olanda sau Belgia?", "Da. Facem curse în ambele sensuri și cu Austria, Olanda și Belgia."],
    ],
  },

  {
    n: 44, published: true, date: D2, group: G, main: "COL",
    slug: "pret-colet-in-functie-de-greutate",
    title: "Cum se calculează prețul unui colet internațional",
    desc: "Cum se calculează prețul unui colet internațional: greutatea reală, greutatea volumetrică, distanța, adresele și ce să ne spui ca să afli prețul exact.",
    h1: "Cum se calculează prețul unui colet internațional",
    cardText: "Greutate, volum, distanță și adrese: ce face prețul să crească sau să scadă.",
    ...IMG.portbagaj,
    imgAlt: "Colete de diferite mărimi pregătite pentru transport internațional",
    related: ["curier-vs-microbuz-colete", "cum-ambalezi-un-colet-corect"],
    intro: `
<p><strong>Prețul unui colet internațional depinde în principal de greutate, de dimensiuni, de distanță și de adresele de ridicare și de predare.</strong> Un colet mic și greu și unul mare și ușor pot costa la fel, pentru că ocupă spațiu diferit în mașină.</p>
<p>Noi îți spunem prețul exact la telefon, înainte de ridicare. Mai jos afli ce îl influențează, ca să știi ce informații să ne dai.</p>`,
    body: `
<h2>Factorii care influențează prețul</h2>
<div class="tbl"><table>
<thead><tr><th>Factor</th><th>Cum contează</th></tr></thead>
<tbody>
<tr><td>Greutatea</td><td>Un colet mai greu costă, de regulă, mai mult.</td></tr>
<tr><td>Dimensiunile</td><td>Un colet mare ocupă loc, chiar dacă e ușor.</td></tr>
<tr><td>Distanța</td><td>Austria e mai aproape decât Olanda sau Belgia.</td></tr>
<tr><td>Adresa de ridicare și de predare</td><td>Adresele aflate departe de traseu înseamnă kilometri în plus.</td></tr>
<tr><td>Tipul de obiect</td><td>Obiectele fragile sau foarte mari cer mai multă atenție și spațiu.</td></tr>
<tr><td>Numărul de colete</td><td>Mai multe colete trimise odată pot avea alt preț decât unul singur.</td></tr>
</tbody>
</table></div>
<!-- TODO: modul exact de calcul al prețului la BRO (pe kg, pe colet, pe volum) – de confirmat de firmă. Nu publica prețuri până nu sunt confirmate. -->

<h2>Greutatea reală și greutatea volumetrică</h2>
<p>Mulți transportatori și curieri folosesc două greutăți: greutatea reală, adică ce arată cântarul, și greutatea volumetrică, calculată după dimensiunile coletului. Prețul se face de obicei după cea mai mare dintre ele.</p>
<p>De ce? Pentru că o cutie mare cu perne cântărește puțin, dar ocupă cât zece cutii mici cu borcane. Spațiul din mașină e limitat, așa că și volumul contează.</p>
<h3>Cum se calculează, la curierii clasici</h3>
<p>La mulți curieri, greutatea volumetrică se calculează înmulțind lungimea, lățimea și înălțimea coletului, în centimetri, și împărțind rezultatul la un număr stabilit de fiecare firmă. Fiecare transportator are formula lui, deci verifică la cel cu care trimiți.</p>

<h2>Exemple ca să înțelegi diferența</h2>
<ul>
<li><strong>O cutie de pantofi cu borcane</strong>: mică, dar grea. Contează greutatea reală.</li>
<li><strong>O cutie mare cu o plapumă</strong>: ușoară, dar mare. Contează volumul.</li>
<li><strong>Un televizor în cutia originală</strong>: mare, destul de greu și fragil. Contează și volumul, și grija la transport.</li>
<li><strong>Un plic cu acte</strong>: mic și ușor. De obicei cel mai ieftin.</li>
</ul>

<h2>Cum îți faci coletul mai ieftin</h2>
<h3>Alege cutia potrivită</h3>
<p>O cutie mult prea mare pentru ce ai în ea înseamnă volum plătit degeaba. Alege o cutie potrivită ca mărime și umple golurile cu material ușor.</p>
<h3>Comprimă ce se poate</h3>
<p>Hainele și pernele se pot pune în pungi de vidat. Ocupă mult mai puțin loc.</p>
<h3>Trimite odată</h3>
<p>Dacă ai mai multe lucruri de trimis aceleiași persoane, strânge-le și trimite-le odată, în loc de mai multe colete separate, în săptămâni diferite.</p>
<h3>Demontează obiectele mari</h3>
<p>Mobila și bicicletele demontate ocupă mult mai puțin spațiu.</p>

<h2>Ce să ne spui ca să afli prețul exact</h2>
<ol>
<li>ce trimiți;</li>
<li>greutatea aproximativă. Un cântar de baie e suficient: te cântărești cu coletul în brațe și fără el;</li>
<li>dimensiunile aproximative, măsurate cu un metru;</li>
<li>adresa de ridicare;</li>
<li>adresa de predare, cu țara și orașul;</li>
<li>dacă e ceva fragil sau foarte mare.</li>
</ol>
<p>Cu aceste informații, îți spunem prețul exact, la telefon sau pe WhatsApp, înainte de ridicare. Prețul stabilit nu se schimbă la predare.</p>

<h2>Ce include prețul la noi</h2>
<ul>
<li>ridicarea coletului de la adresa ta;</li>
<li>transportul direct, fără depozite;</li>
<li>predarea în mână, cu telefon înainte.</li>
</ul>
<p>Când compari cu alte oferte, verifică dacă și ele includ ridicarea și predarea la adresă. Comparația completă dintre curier și microbuz e în articolul despre <a href="/blog/curier-vs-microbuz-colete">curier clasic sau microbuz</a>.</p>

<h2>Ambalarea contează și la preț</h2>
<p>Un colet bine ambalat nu doar că ajunge întreg, dar e și mai ușor de așezat în mașină. Cutiile care se strivesc sau sacoșele care se rup sunt greu de transportat și pot ocupa mai mult loc decât ar trebui. Sfaturi în ghidul despre <a href="/blog/cum-ambalezi-un-colet-corect">cum ambalezi un colet</a>.</p>

<h2>Află prețul coletului tău</h2>
<p>Sună-ne la 0790 752 888 sau scrie-ne pe WhatsApp, cu greutatea, dimensiunile și adresele. Detalii pe pagina de <a href="/transport-colete-romania-europa">transport colete România – Europa</a>.</p>`,
    faq: [
      ["Cât costă un colet pe kilogram?", "Prețul depinde de greutate, dimensiuni, distanță și adrese. Îți spunem prețul exact la 0790 752 888, înainte de ridicare."],
      ["Ce este greutatea volumetrică?", "O greutate calculată după dimensiunile coletului. Mulți transportatori fac prețul după cea mai mare dintre greutatea reală și cea volumetrică."],
      ["De ce un colet mare și ușor poate costa mult?", "Pentru că ocupă spațiu în mașină, chiar dacă nu cântărește mult."],
      ["Cum îmi cântăresc coletul acasă?", "Te urci pe cântarul de baie cu coletul în brațe, apoi fără el, și faci diferența."],
      ["Se schimbă prețul la predare?", "Nu. Prețul stabilit înainte de ridicare e cel pe care îl plătești."],
    ],
  },
];
