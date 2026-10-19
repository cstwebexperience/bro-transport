// Valul 2 – Grup D (36–40): colete. Fără prețuri sau termene inventate; ce ține de firmă și nu e confirmat e marcat TODO.
import { IMG, D2, SRC } from "./_img.mjs";
const G = "Colete";

export default [
  {
    n: 36, published: true, date: D2, group: G, main: "COL",
    slug: "cum-trimiti-colet-in-austria",
    title: "Colet în Austria: cum îl trimiți și cât durează",
    desc: "Cum trimiți un colet din România în Austria: ce pregătești, cum îl ambalezi, ce date dai despre destinatar, cât durează și cum se predă la adresă.",
    h1: "Colet în Austria: cum îl trimiți și cât durează",
    cardText: "Pașii de la rezervare la predare, ambalarea și datele de care avem nevoie.",
    ...IMG.traficRemorca,
    imgAlt: "Microbuz cu remorcă pentru colete pe ruta România – Austria",
    related: ["cum-ambalezi-un-colet-corect", "ce-nu-ai-voie-sa-trimiti-in-colet"],
    intro: `
<p><strong>Ca să trimiți un colet din România în Austria cu noi, ne suni sau ne scrii pe WhatsApp, ne spui ce trimiți, cât cântărește aproximativ și unde trebuie să ajungă, apoi îl ridicăm de la adresa ta și îl predăm în mână destinatarului din Austria.</strong> Coletul merge direct cu microbuzul, fără depozite și fără să treacă prin mai multe mâini.</p>
<p>Pentru că Austria e cea mai apropiată destinație dintre rutele noastre, coletul ajunge de obicei odată cu cursa de persoane. Ziua exactă de livrare ți-o spunem la rezervare.</p>`,
    body: `
<h2>De ce Austria e o destinație ușoară pentru colete</h2>
<p>Drumul până în Austria e mai scurt decât spre Germania, Olanda sau Belgia. Din vestul României, Viena e la mai puțin de o zi de mers. Asta înseamnă că un colet trimis cu microbuzul ajunge relativ repede și nu stă zile întregi pe drum. Pentru mâncare de casă, pentru acte urgente sau pentru cadouri, contează mult.</p>
<p>În plus, Austria e în Uniunea Europeană, la fel ca România. Pentru coletele cu lucruri personale nu există formalități vamale. Detalii despre regulile europene sunt pe portalul ${SRC("https://europa.eu/youreurope/citizens/travel/carry/index_ro.htm", "Your Europe")}.</p>

<h2>Pașii pentru trimiterea unui colet</h2>
<ol>
<li><strong>Ne contactezi</strong> la 0790 752 888 sau pe WhatsApp.</li>
<li><strong>Ne spui ce trimiți</strong>: tipul de lucruri, greutatea și dimensiunile aproximative.</li>
<li><strong>Ne dai adresele</strong>: de unde ridicăm coletul în România și unde îl predăm în Austria.</li>
<li><strong>Stabilim ziua și prețul</strong>. Prețul îl afli înainte, nu la livrare.</li>
<li><strong>Ridicăm coletul</strong> de la adresa ta, în ziua stabilită. Șoferul te sună înainte.</li>
<li><strong>Predăm coletul în mână</strong> destinatarului din Austria. Șoferul îl sună înainte să ajungă.</li>
</ol>
<!-- TODO: modalitatea de plată pentru colete (la ridicare / la predare) – de confirmat de firmă. -->

<h2>Ce date ne trebuie despre destinatar</h2>
<div class="tbl"><table>
<thead><tr><th>Informație</th><th>De ce contează</th></tr></thead>
<tbody>
<tr><td>Numele complet</td><td>Ca să știm cui predăm coletul.</td></tr>
<tr><td>Adresa completă, cu cod poștal</td><td>În Austria, codurile poștale au patru cifre. Fără ele, adresa e greu de găsit.</td></tr>
<tr><td>Numele de pe sonerie</td><td>În blocurile din Viena sunt multe sonerii, iar numele exact contează.</td></tr>
<tr><td>Telefonul destinatarului</td><td>Șoferul îl sună înainte să ajungă.</td></tr>
<tr><td>Etajul, scara, interfonul</td><td>Ne ajută să ajungem repede la ușă.</td></tr>
</tbody>
</table></div>

<h2>Cum pregătești coletul</h2>
<p>Un colet bine pregătit ajunge întreg. Câteva reguli de bază:</p>
<ul>
<li>folosește o cutie de carton rezistentă sau o geantă solidă, care se închide;</li>
<li>umple golurile din cutie cu hârtie, folie cu bule sau haine, ca obiectele să nu se miște;</li>
<li>lipește bine cutia cu bandă adezivă lată, pe toate marginile;</li>
<li>scrie pe cutie numele și telefonul destinatarului;</li>
<li>dacă e ceva fragil, spune-ne la rezervare.</li>
</ul>
<p>Mai multe sfaturi în ghidul despre <a href="/blog/cum-ambalezi-un-colet-corect">cum ambalezi un colet ca să ajungă întreg</a>.</p>

<h2>Ce se trimite des în Austria</h2>
<ul>
<li><strong>mâncare de casă</strong>: zacuscă, dulceață, cozonac, afumături, brânză. Vezi ce merge și ce nu în ghidul despre <a href="/blog/trimitere-mancare-de-acasa-in-colet">mâncarea de acasă în colet</a>;</li>
<li><strong>haine și încălțăminte</strong> pentru cei plecați la muncă;</li>
<li><strong>acte și documente</strong> de care e nevoie urgent;</li>
<li><strong>cadouri</strong> pentru zile de naștere sau sărbători;</li>
<li><strong>lucruri pentru casă</strong>, pentru cei care s-au mutat de curând.</li>
</ul>

<h2>Ce nu poți trimite</h2>
<p>Unele lucruri nu se trimit în colet, nici în Austria, nici în altă țară: substanțe periculoase sau inflamabile, arme, droguri, bani, animale vii. Lista completă e în articolul despre <a href="/blog/ce-nu-ai-voie-sa-trimiti-in-colet">ce nu ai voie să trimiți într-un colet</a>.</p>

<h2>Cât durează</h2>
<p>Coletul merge cu cursa noastră spre Austria. Durata depinde de ziua în care îl ridicăm, de locul de unde îl ridicăm și de adresa din Austria. De regulă, coletul ajunge în aceeași cursă cu care pleacă, fără să stea în vreun depozit. Ziua aproximativă de livrare ți-o spunem la rezervare, iar șoferul îl sună pe destinatar înainte să ajungă.</p>

<h2>Colet din Austria spre România</h2>
<p>Facem curse în ambele sensuri, deci poți trimite colete și din Austria acasă: haine de iarnă, cadouri pentru familie, lucruri cumpărate pentru casă. Procedura e aceeași: ne dai adresele și detaliile, iar noi ridicăm coletul și îl predăm în mână. Mai multe despre drumul invers găsești în articolul despre <a href="/blog/colet-din-germania-in-romania">coletele din străinătate spre România</a>.</p>

<h2>De ce microbuz și nu curier clasic</h2>
<p>La un curier clasic, coletul trece prin mai multe depozite și mai multe mâini. La noi, coletul e luat de la tine și predat în mână, direct, de aceeași echipă. Pentru lucrurile la care ții, pentru mâncarea care trebuie să ajungă repede sau pentru obiectele mai mari, diferența contează. Comparația completă e în articolul despre <a href="/blog/curier-vs-microbuz-colete">curier clasic sau microbuz</a>.</p>

<h2>Trimite coletul acum</h2>
<p>Sună-ne la 0790 752 888 sau scrie-ne pe WhatsApp cu ce trimiți și unde trebuie să ajungă. Detalii pe pagina de <a href="/transport-colete-romania-europa">transport colete România – Europa</a>.</p>`,
    faq: [
      ["Cum trimit un colet în Austria?", "Ne contactezi la 0790 752 888 sau pe WhatsApp, ne spui ce trimiți și unde, iar noi ridicăm coletul de la tine și îl predăm în mână în Austria."],
      ["Cât durează un colet până în Austria?", "Coletul merge cu cursa noastră, fără depozite. Ziua aproximativă de livrare ți-o spunem la rezervare."],
      ["Trebuie să duc coletul undeva?", "Nu. Îl ridicăm de la adresa ta din România."],
      ["Ce date îmi trebuie despre destinatar?", "Numele, adresa completă cu cod poștal, numele de pe sonerie și telefonul."],
      ["Pot trimite și din Austria în România?", "Da. Facem curse în ambele sensuri, deci poți trimite colete și spre casă."],
    ],
  },

  {
    n: 37, published: true, date: D2, group: G, main: "COL",
    slug: "colet-olanda-belgia-ghid",
    title: "Colete spre Olanda și Belgia: ce trebuie să știi",
    desc: "Cum trimiți un colet din România în Olanda sau Belgia: adrese și coduri poștale, ambalare pentru drum lung, ce se trimite des și cum se face predarea.",
    h1: "Colete spre Olanda și Belgia: ce trebuie să știi",
    cardText: "Adrese, coduri poștale, ambalare pentru drum lung și predarea în mână.",
    ...IMG.masterRemorca,
    imgAlt: "Renault Master cu remorcă pentru colete spre Olanda și Belgia",
    related: ["cum-ambalezi-un-colet-corect", "trimitere-mancare-de-acasa-in-colet"],
    intro: `
<p><strong>Ca să trimiți un colet în Olanda sau Belgia, ne dai adresa completă a destinatarului, cu cod poștal și număr de telefon, iar noi ridicăm coletul de la tine și îl predăm în mână la destinație.</strong> Pentru că drumul e lung, ambalarea contează mai mult decât spre Austria sau sudul Germaniei.</p>
<p>Coletele merg cu cursele noastre spre Olanda și Belgia, în microbuz sau în remorca acoperită, fără depozite pe drum.</p>`,
    body: `
<h2>Adresele din Olanda și Belgia: cum le scrii corect</h2>
<p>Multe colete întârzie din cauza unei adrese incomplete. În Olanda și Belgia, adresele au un format clar, iar dacă ni-l dai exact, predarea e rapidă.</p>
<div class="tbl"><table>
<thead><tr><th></th><th>Olanda</th><th>Belgia</th></tr></thead>
<tbody>
<tr><td>Cod poștal</td><td>patru cifre și două litere, de exemplu 1012 AB</td><td>patru cifre, de exemplu 1000</td></tr>
<tr><td>Ordinea</td><td>strada, numărul, apoi codul și orașul</td><td>strada, numărul, apoi codul și orașul</td></tr>
<tr><td>Atenție la</td><td>literele de după număr (12A, 12-2) și etaj</td><td>numărul de cutie sau de apartament („bus” / „boîte”)</td></tr>
</tbody>
</table></div>
<p>Pe lângă adresă, avem nevoie de numele de pe sonerie și de telefonul destinatarului. În clădirile cu multe apartamente, mai ales în Amsterdam, Rotterdam, Bruxelles sau Antwerpen, fără numele exact e greu să găsești persoana.</p>

<h2>Ambalarea pentru un drum lung</h2>
<p>Drumul până în Olanda sau Belgia durează în jur de o zi și jumătate. Coletul stă mult timp în mașină și e mișcat la încărcare și descărcare. De aceea:</p>
<ul>
<li>folosește cutii de carton dublu sau genți rezistente;</li>
<li>umple toate golurile, ca obiectele să nu se lovească între ele;</li>
<li>pune obiectele grele jos și pe cele ușoare deasupra;</li>
<li>lipește cutia cu bandă lată pe toate marginile, nu doar la mijloc;</li>
<li>pentru lichide, pune fiecare sticlă sau borcan într-o pungă închisă.</li>
</ul>
<p>Mai multe sfaturi în ghidul despre <a href="/blog/cum-ambalezi-un-colet-corect">cum ambalezi un colet ca să ajungă întreg</a>.</p>

<h2>Mâncarea pe drumul lung</h2>
<p>Mâncarea gătită nu rezistă ușor o zi și jumătate fără frigider. Spre Olanda și Belgia alege produse care nu se strică repede:</p>
<ul>
<li>afumături, cârnați uscați, slănină;</li>
<li>brânzeturi tari, cașcaval;</li>
<li>zacuscă, dulceață, murături, compot, în borcane;</li>
<li>cozonac, cornulețe, biscuiți de casă.</li>
</ul>
<p>Mâncarea gătită (sarmale, ciorbă) poate fi trimisă congelată, în caserole etanșe, dar riscul e mai mare. Detalii în ghidul despre <a href="/blog/trimitere-mancare-de-acasa-in-colet">mâncarea de acasă în colet</a>.</p>

<h2>Pașii pentru trimitere</h2>
<ol>
<li>ne suni la 0790 752 888 sau ne scrii pe WhatsApp;</li>
<li>ne spui ce trimiți, cât cântărește aproximativ și cât e de mare;</li>
<li>ne dai adresa ta și adresa completă a destinatarului, cu telefon;</li>
<li>stabilim ziua de ridicare și prețul;</li>
<li>ridicăm coletul de la tine, cu telefon înainte;</li>
<li>predăm coletul în mână, cu telefon înainte de sosire.</li>
</ol>

<h2>Ce se trimite des spre Olanda și Belgia</h2>
<p>Mulți români din Olanda și Belgia lucrează în agricultură, logistică, construcții sau în fabrici. Coletele pe care le primesc de acasă sunt de obicei:</p>
<ul>
<li>haine de lucru și încălțăminte;</li>
<li>mâncare de casă și produse românești;</li>
<li>medicamente cumpărate cu rețetă în România, în cantități pentru uz personal;</li>
<li>acte și documente;</li>
<li>cadouri pentru copiii care locuiesc acolo cu părinții.</li>
</ul>

<h2>Dacă destinatarul locuiește la o agenție sau într-o cazare comună</h2>
<p>Mulți lucrători stau în cazări oferite de agenții de muncă. Acolo, adresele pot fi complicate: aceeași clădire are multe camere și mulți locatari. Spune-ne exact camera sau numărul de apartament și asigură-te că destinatarul răspunde la telefon. Dacă se poate, stabiliți dinainte o oră la care e acasă.</p>

<h2>Colete mari sau grele</h2>
<p>Pentru lucrurile mari, de exemplu un televizor, o bicicletă sau mobilă mică, avem remorci acoperite. Spune-ne la rezervare dimensiunile, ca să le facem loc. Pentru electrocasnice și mobilă găsești sfaturi în ghidul despre <a href="/blog/trimitere-electrocasnice-mobila-strainatate">trimiterea de electrocasnice sau mobilă</a>.</p>

<h2>Ce nu poți trimite</h2>
<p>Nu se trimit substanțe periculoase, arme, droguri, bani, animale vii sau alte lucruri interzise. Lista completă e în articolul despre <a href="/blog/ce-nu-ai-voie-sa-trimiti-in-colet">obiectele interzise în colete</a>.</p>

<h2>Și invers: din Olanda și Belgia spre România</h2>
<p>Facem curse în ambele sensuri. Poți trimite colete și spre casă, cu aceeași procedură. Detalii în articolul despre <a href="/blog/colet-din-germania-in-romania">coletele din străinătate spre România</a>.</p>

<h2>Trimite coletul</h2>
<p>Ridicăm coletul de la tine și îl predăm în mână, fără depozite. Detalii pe pagina de <a href="/transport-colete-romania-europa">transport colete România – Europa</a>.</p>`,
    faq: [
      ["Cum scriu corect o adresă din Olanda?", "Strada, numărul, codul poștal de forma 1234 AB și orașul. Adaugă numele de pe sonerie și telefonul destinatarului."],
      ["Ce înseamnă „bus” într-o adresă din Belgia?", "E numărul de cutie poștală sau de apartament din clădire. Trebuie trecut în adresă."],
      ["Ce mâncare rezistă până în Olanda?", "Afumăturile, brânzeturile tari, conservele în borcan și dulciurile uscate rezistă cel mai bine."],
      ["Pot trimite un colet la o cazare de agenție?", "Da. Dă-ne camera sau apartamentul exact și asigură-te că destinatarul răspunde la telefon."],
      ["Trimiteți și colete mari?", "Da, avem remorci acoperite. Spune-ne dimensiunile la rezervare."],
    ],
  },

  {
    n: 38, published: true, date: D2, group: G, main: "COL",
    slug: "ce-nu-ai-voie-sa-trimiti-in-colet",
    title: "Ce nu ai voie să trimiți într-un colet internațional",
    desc: "Ce nu ai voie să trimiți într-un colet internațional: substanțe periculoase, arme, bani, medicamente în cantități mari, animale vii și alte interdicții.",
    h1: "Ce nu ai voie să trimiți într-un colet internațional",
    cardText: "Lista obiectelor interzise sau restricționate și ce faci în loc.",
    ...IMG.portbagaj,
    imgAlt: "Spațiu de încărcare în microbuz pentru colete verificate",
    related: ["cum-ambalezi-un-colet-corect", "trimitere-mancare-de-acasa-in-colet"],
    intro: `
<p><strong>Într-un colet internațional nu ai voie să trimiți substanțe periculoase sau inflamabile, arme și muniție, droguri, bani, bunuri contrafăcute, animale vii și produse interzise de lege.</strong> Unele lucruri, ca alcoolul, tutunul sau medicamentele, au reguli speciale și se trimit doar în cantități pentru uz personal.</p>
<p>Lista de mai jos te ajută să știi ce poți pune în cutie și ce nu. Dacă ai dubii despre un obiect, întreabă-ne înainte de ridicare.</p>`,
    body: `
<h2>De ce există aceste reguli</h2>
<p>Coletele noastre merg în același microbuz cu pasagerii, sau în remorca lui. Orice substanță periculoasă poate pune în pericol oamenii din mașină. În plus, unele lucruri sunt interzise de lege, iar transportatorul răspunde pentru ce are în mașină la un control. De aceea, nu primim colete cu lucruri interzise, iar la nevoie putem întreba ce conține coletul.</p>

<h2>Lista obiectelor interzise</h2>
<div class="tbl"><table>
<thead><tr><th>Categorie</th><th>Exemple</th></tr></thead>
<tbody>
<tr><td>Substanțe inflamabile</td><td>benzină, motorină, diluant, spirt, butelii de gaz, brichete reîncărcabile, artificii</td></tr>
<tr><td>Substanțe periculoase</td><td>acizi, solvenți, pesticide, produse chimice puternice, vopsele în spray</td></tr>
<tr><td>Arme și muniție</td><td>arme de foc, muniție, arme albe, spray-uri paralizante, imitații de arme</td></tr>
<tr><td>Droguri și substanțe interzise</td><td>orice drog sau substanță interzisă de lege, în orice cantitate</td></tr>
<tr><td>Bani și valori</td><td>bancnote, monede, cecuri, carduri cu bani pe ele</td></tr>
<tr><td>Animale vii</td><td>orice animal viu, inclusiv păsări, pești, insecte</td></tr>
<tr><td>Bunuri contrafăcute</td><td>haine, încălțăminte sau parfumuri false, cu mărci copiate</td></tr>
<tr><td>Produse care se strică ușor fără răcire</td><td>carne crudă, pește proaspăt, lactate proaspete, pe drumurile lungi</td></tr>
</tbody>
</table></div>

<h2>Obiecte cu reguli speciale</h2>
<h3>Alcool și tutun</h3>
<p>Se pot trimite în cantități mici, pentru uz personal, bine ambalate. Cantitățile mari pot fi considerate marfă și au reguli de accize. Limitele orientative pentru călători sunt explicate în ghidul despre <a href="/blog/ce-poti-lua-in-bagaj-alimente-ue">alimentele în bagaj</a>.</p>
<h3>Medicamente</h3>
<p>Medicamentele pentru uz personal, în cantități rezonabile, se pot trimite. Unele medicamente, de exemplu cele cu substanțe stupefiante sau psihotrope, au reguli stricte. Dacă trimiți medicamente pe rețetă, pune și o copie a rețetei în colet. Nu trimite cantități mari, care pot părea comerciale.</p>
<h3>Baterii și electronice</h3>
<p>Telefoanele, laptopurile și tabletele se pot trimite, bine ambalate. Bateriile mari sau deteriorate, cum sunt cele de la trotinete sau biciclete electrice, pot fi periculoase. Spune-ne dinainte dacă trimiți așa ceva.</p>
<h3>Parfumuri și spray-uri</h3>
<p>Parfumurile și deodorantele în cantități mici, pentru uz personal, se pot trimite. Spray-urile pot exploda la căldură mare, deci pune-le bine închise și în cantitate mică.</p>
<h3>Carne de porc de casă</h3>
<p>Din cauza pestei porcine africane, pot exista restricții temporare la produsele din carne de porc din anumite zone. Verifică pe site-ul ${SRC("https://www.ansvsa.ro", "ANSVSA")} înainte de trimitere.</p>

<h2>De ce nu se trimit bani în colet</h2>
<p>Banii nu se trimit în colet, nici în cantități mici. Un colet poate fi deteriorat, pierdut sau deschis la un control, iar banii nu pot fi recuperați. Pentru bani, folosește transferul bancar sau un serviciu autorizat de transfer. Detalii în ghidul despre <a href="/blog/bani-cash-limita-calatorie-ue">banii cash în UE</a>.</p>

<h2>Lucruri de valoare: cu atenție</h2>
<p>Bijuteriile, ceasurile scumpe sau actele originale importante se pot trimite, dar e mai bine să ne spui dinainte. Ambalează-le discret, fără să scrii pe cutie ce conține. Pentru acte foarte importante, de exemplu pașapoarte sau diplome originale, gândește-te dacă nu e mai bine să le duci personal.</p>

<h2>Ce se întâmplă dacă trimiți ceva interzis</h2>
<p>Dacă un obiect interzis e descoperit, coletul poate fi refuzat la ridicare sau reținut la un control. În cazurile grave, expeditorul poate răspunde legal. Nu ascunde niciodată lucruri în colet, chiar dacă cineva te roagă „doar de data asta”. Și nu trimite colete pentru persoane pe care nu le cunoști, fără să știi ce conțin.</p>

<h2>Dacă nu știi sigur</h2>
<p>Întreabă-ne înainte. La rezervare, spune-ne ce trimiți, iar noi îți spunem dacă se poate. E mult mai simplu decât să afli la ridicare că un obiect trebuie scos din cutie.</p>

<h2>Ce poți trimite fără probleme</h2>
<ul>
<li>haine, încălțăminte, lenjerie;</li>
<li>mâncare de casă care nu se strică repede, bine ambalată;</li>
<li>jucării, cărți, cadouri;</li>
<li>lucruri pentru casă: vase, textile, decorațiuni;</li>
<li>electronice, bine protejate;</li>
<li>acte și documente.</li>
</ul>
<p>Pentru ambalare, vezi ghidul despre <a href="/blog/cum-ambalezi-un-colet-corect">cum ambalezi un colet</a>, iar pentru mâncare, articolul despre <a href="/blog/trimitere-mancare-de-acasa-in-colet">mâncarea de acasă în colet</a>.</p>

<h2>Trimite coletul în siguranță</h2>
<p>Ridicăm coletul de la tine și îl predăm în mână, fără depozite. Detalii pe pagina de <a href="/transport-colete-romania-europa">transport colete România – Europa</a>.</p>`,
    faq: [
      ["Pot trimite bani într-un colet?", "Nu. Banii nu se trimit în colet. Folosește transferul bancar sau un serviciu autorizat."],
      ["Pot trimite țuică sau vin?", "În cantități mici, pentru uz personal, bine ambalate. Cantitățile mari pot fi considerate marfă."],
      ["Pot trimite medicamente?", "Da, pentru uz personal, în cantități rezonabile. Pune și o copie a rețetei. Unele medicamente au reguli stricte."],
      ["Pot trimite o baterie de trotinetă electrică?", "Spune-ne dinainte. Bateriile mari sau deteriorate pot fi periculoase și au reguli speciale."],
      ["Ce fac dacă nu știu dacă un obiect e permis?", "Întreabă-ne la rezervare. Îți spunem dacă se poate trimite."],
    ],
  },

  {
    n: 39, published: true, date: D2, group: G, main: "COL",
    slug: "cum-ambalezi-un-colet-corect",
    title: "Cum ambalezi un colet ca să ajungă întreg",
    desc: "Cum ambalezi corect un colet pentru drum lung: ce cutie alegi, cum umpli golurile, cum protejezi borcanele, sticlele și electronicele și cum îl etichetezi.",
    h1: "Cum ambalezi un colet ca să ajungă întreg",
    cardText: "Cutia potrivită, umplerea golurilor, borcane, sticle și electronice.",
    ...IMG.portbagaj,
    imgAlt: "Colete ambalate corect, pregătite pentru transport",
    related: ["ce-nu-ai-voie-sa-trimiti-in-colet", "trimitere-mancare-de-acasa-in-colet"],
    intro: `
<p><strong>Ca un colet să ajungă întreg, folosește o cutie rezistentă, umple toate golurile ca obiectele să nu se miște, protejează separat lucrurile fragile și lipește cutia bine pe toate marginile.</strong> La final, scrie pe ea numele și telefonul destinatarului.</p>
<p>Chiar dacă noi manevrăm coletele cu grijă și le predăm în mână, un drum de mii de kilometri înseamnă vibrații, frâne și încărcări. Ambalarea bună face diferența.</p>`,
    body: `
<h2>Pasul 1: alege cutia potrivită</h2>
<ul>
<li><strong>Carton rezistent</strong>, de preferat dublu, pentru obiectele grele sau fragile.</li>
<li><strong>Mărimea potrivită</strong>: nici prea mare, ca obiectele să nu se miște, nici prea mică, ca să nu se umfle.</li>
<li><strong>Fără cutii foarte vechi</strong> sau umede. Cartonul înmuiat se rupe ușor.</li>
<li><strong>Pentru haine</strong> poți folosi și o geantă de voiaj solidă sau un sac rezistent, bine închis.</li>
</ul>
<p>Cutiile de la magazin, folosite pentru electrocasnice sau pentru băuturi, sunt de obicei foarte rezistente.</p>

<h2>Pasul 2: umple golurile</h2>
<p>Cea mai frecventă cauză a obiectelor sparte e golul din cutie. Dacă obiectele se mișcă, se lovesc între ele la fiecare frână. Umple golurile cu:</p>
<ul>
<li>hârtie de ziar mototolită;</li>
<li>folie cu bule;</li>
<li>haine, prosoape, lenjerie (care trebuie trimise oricum);</li>
<li>bucăți de polistiren sau carton.</li>
</ul>
<p>Test simplu: închide cutia și scutur-o ușor. Dacă auzi că se mișcă ceva înăuntru, mai pune material de umplere.</p>

<h2>Pasul 3: protejează lucrurile fragile</h2>
<h3>Borcane</h3>
<ol>
<li>strânge bine capacul și, dacă poți, pune o bandă adezivă peste el;</li>
<li>pune fiecare borcan într-o pungă închisă, ca un eventual borcan spart să nu ude tot coletul;</li>
<li>înfășoară fiecare borcan în ziar sau într-un prosop;</li>
<li>așază borcanele în picioare, unul lângă altul, fără să se atingă direct.</li>
</ol>
<h3>Sticle</h3>
<p>Sticlele se înfășoară fiecare în folie cu bule sau în haine groase și se pun în mijlocul cutiei, nu la margini. Sticlele de plastic sunt mai sigure decât cele de sticlă, dacă poți alege.</p>
<h3>Vase, pahare, obiecte din ceramică</h3>
<p>Fiecare obiect se înfășoară separat. Farfuriile se pun în picioare, nu culcate una peste alta. Paharele se umplu și pe dinăuntru cu hârtie.</p>
<h3>Electronice</h3>
<p>Cel mai bine e în cutia originală. Dacă nu o mai ai, înfășoară aparatul în folie cu bule și pune-l într-o cutie cu material de umplere pe toate părțile. Ecranul televizorului sau al laptopului trebuie protejat cu carton.</p>

<h2>Pasul 4: așază obiectele în ordinea corectă</h2>
<ul>
<li>obiectele grele jos;</li>
<li>obiectele ușoare deasupra;</li>
<li>obiectele fragile la mijloc, înconjurate de lucruri moi;</li>
<li>lichidele separat de haine și acte, sau în pungi închise.</li>
</ul>

<h2>Pasul 5: închide și lipește</h2>
<p>Folosește bandă adezivă lată și rezistentă, nu bandă subțire de birou. Lipește cutia în formă de „H”: pe linia din mijloc și pe ambele margini, sus și jos. Pentru cutiile grele, mai pune o bandă pe lățime.</p>

<h2>Pasul 6: etichetează</h2>
<div class="tbl"><table>
<thead><tr><th>Ce scrii pe colet</th><th>De ce</th></tr></thead>
<tbody>
<tr><td>Numele destinatarului</td><td>Ca să știm cui îl predăm.</td></tr>
<tr><td>Telefonul destinatarului</td><td>Ca șoferul să-l poată suna.</td></tr>
<tr><td>Orașul de destinație</td><td>Ajută la încărcarea coletelor în ordinea predării.</td></tr>
<tr><td>„Fragil”, dacă e cazul</td><td>Atrage atenția la manevrare.</td></tr>
<tr><td>Numele tău</td><td>În caz că trebuie să te contactăm.</td></tr>
</tbody>
</table></div>
<p>Dacă trimiți mai multe cutii, numerotează-le: 1 din 3, 2 din 3, 3 din 3. Așa destinatarul știe imediat dacă le-a primit pe toate.</p>

<h2>Greșeli frecvente</h2>
<ul>
<li>cutie umplută doar pe jumătate, fără material de umplere;</li>
<li>borcane fără pungi, care udă tot coletul dacă se sparg;</li>
<li>cutii foarte grele, greu de ridicat, care se rup la colțuri;</li>
<li>sacoșe de plastic subțiri, care se rup la prima mișcare;</li>
<li>niciun nume și niciun telefon pe colet.</li>
</ul>

<h2>Cât de grea să fie o cutie</h2>
<p>O cutie care poate fi ridicată ușor de un om e cea mai sigură. Dacă ai mult de trimis, fă mai multe cutii de greutate potrivită în loc de una foarte grea. Cutiile foarte grele se manevrează mai greu și se deteriorează mai ușor.</p>

<h2>Ce nu pui în colet</h2>
<p>Înainte să închizi cutia, verifică dacă nu ai pus ceva interzis: substanțe inflamabile, bani, arme sau alte lucruri din lista din articolul despre <a href="/blog/ce-nu-ai-voie-sa-trimiti-in-colet">obiectele interzise în colete</a>. Pentru mâncare, vezi ghidul despre <a href="/blog/trimitere-mancare-de-acasa-in-colet">mâncarea de acasă în colet</a>.</p>

<h2>Trimite coletul</h2>
<p>Când coletul e gata, sună-ne la 0790 752 888 sau scrie-ne pe WhatsApp. Îl ridicăm de la tine și îl predăm în mână la destinație. Detalii pe pagina de <a href="/transport-colete-romania-europa">transport colete România – Europa</a>.</p>`,
    faq: [
      ["Ce cutie e cea mai bună pentru un colet?", "O cutie de carton rezistent, de preferat dublu, de mărime potrivită pentru ce trimiți."],
      ["Cum trimit borcane fără să se spargă?", "Strânge capacul, pune fiecare borcan într-o pungă, înfășoară-l în ziar sau prosop și așază-le în picioare, fără să se atingă."],
      ["Ce scriu pe colet?", "Numele și telefonul destinatarului, orașul de destinație, numele tău și „Fragil”, dacă e cazul."],
      ["Pot trimite colete în sacoșe de plastic?", "Nu e recomandat. Sacoșele subțiri se rup ușor. Folosește o cutie sau o geantă solidă."],
      ["E mai bine o cutie mare sau mai multe mici?", "Mai multe cutii de greutate potrivită sunt mai sigure decât o singură cutie foarte grea."],
    ],
  },

  {
    n: 40, published: true, date: D2, group: G, main: "COL",
    slug: "trimitere-mancare-de-acasa-in-colet",
    title: "Mâncare de acasă în colet: ce merge și ce nu",
    desc: "Ce mâncare de acasă poți trimite în colet în Germania, Austria, Olanda sau Belgia, ce rezistă pe drum, cum o ambalezi și ce e mai bine să nu trimiți.",
    h1: "Mâncare de acasă trimisă în colet: ce merge și ce nu",
    cardText: "Zacuscă, cozonac, afumături și sarmale: ce rezistă pe drum și cum le ambalezi.",
    ...IMG.portbagaj,
    imgAlt: "Colete cu mâncare de acasă pregătite pentru drum",
    related: ["cum-ambalezi-un-colet-corect", "ce-nu-ai-voie-sa-trimiti-in-colet"],
    intro: `
<p><strong>În colet poți trimite mâncare de acasă pentru familie sau prieteni, atâta timp cât e pentru consum propriu și rezistă pe drum.</strong> Cel mai bine merg conservele în borcan, afumăturile, brânzeturile tari și dulciurile uscate. Mâncarea gătită poate fi trimisă congelată, pe drumurile mai scurte.</p>
<p>Pentru că predăm coletele în mână, fără depozite, mâncarea ajunge mai repede decât printr-un curier clasic. Ambalarea rămâne totuși foarte importantă.</p>`,
    body: `
<h2>Ce rezistă cel mai bine pe drum</h2>
<div class="tbl"><table>
<thead><tr><th>Aliment</th><th>Cât de bine rezistă</th><th>Sfat</th></tr></thead>
<tbody>
<tr><td>Zacuscă, dulceață, compot, murături</td><td>Foarte bine</td><td>Borcane bine închise, fiecare într-o pungă.</td></tr>
<tr><td>Afumături, cârnați uscați, slănină</td><td>Foarte bine</td><td>Vidate sau înfășurate în hârtie și pungă.</td></tr>
<tr><td>Brânzeturi tari, cașcaval</td><td>Bine</td><td>Vidate, ca să nu miroasă.</td></tr>
<tr><td>Cozonac, cornulețe, prăjituri uscate</td><td>Bine</td><td>În pungi închise și în cutie, ca să nu se strivească.</td></tr>
<tr><td>Telemea în saramură</td><td>Bine, cu atenție</td><td>În recipient etanș, cu capac bine închis.</td></tr>
<tr><td>Sarmale, ciorbă, mâncare gătită</td><td>Doar congelată și pe drum mai scurt</td><td>În caserole etanșe, congelate dinainte.</td></tr>
<tr><td>Prăjituri cu cremă, frișcă</td><td>Slab</td><td>Mai bine nu.</td></tr>
<tr><td>Carne crudă, pește proaspăt, lapte proaspăt</td><td>Nu rezistă</td><td>Nu le trimite.</td></tr>
</tbody>
</table></div>

<h2>Reguli în UE pentru alimente</h2>
<p>Între România și celelalte țări UE, alimentele pentru consum propriu circulă liber. Totuși:</p>
<ul>
<li>cantitățile trebuie să fie pentru uz personal, nu pentru vânzare;</li>
<li>la produsele din carne de porc pot exista restricții temporare, din cauza pestei porcine africane. Verifică pe site-ul ${SRC("https://www.ansvsa.ro", "ANSVSA")} înainte de trimitere;</li>
<li>pentru alcool există praguri orientative. Vezi ghidul despre <a href="/blog/ce-poti-lua-in-bagaj-alimente-ue">alimentele în bagaj</a>.</li>
</ul>

<h2>Cum ambalezi mâncarea</h2>
<h3>Borcanele</h3>
<ol>
<li>verifică dacă borcanul nu e ciobit;</li>
<li>strânge bine capacul și pune o bandă adezivă peste el;</li>
<li>pune borcanul într-o pungă închisă;</li>
<li>înfășoară-l în ziar, haine sau folie cu bule;</li>
<li>așază borcanele în picioare, strâns, fără să se lovească.</li>
</ol>
<h3>Afumăturile și brânza</h3>
<p>Cel mai bine e vidarea. Dacă nu ai aparat de vidat, înfășoară produsul în hârtie de copt, apoi în folie alimentară și pune-l într-o pungă închisă. Așa nu miroase și nu se usucă.</p>
<h3>Mâncarea gătită</h3>
<p>Dacă vrei să trimiți sarmale sau altă mâncare gătită, congeleaz-o dinainte în caserole etanșe. Pune caserolele una lângă alta, într-o geantă frigorifică sau într-o cutie căptușită cu ziare. Așa se dezgheață încet. Pe drumurile spre Austria sau sudul Germaniei, merge mai bine decât spre Olanda sau Belgia, unde drumul e mai lung.</p>
<h3>Dulciurile</h3>
<p>Cozonacul se pune în pungă închisă, apoi într-o cutie. Cornulețele și biscuiții, în cutii de plastic sau metal, ca să nu se sfărâme.</p>

<h2>Mâncarea nu se pune peste haine</h2>
<p>Dacă trimiți și haine și mâncare, pune-le separat, în cutii diferite, sau mâncarea în partea de jos, bine închisă în pungi. Un borcan de zacuscă spart peste haine albe nu e o surpriză plăcută.</p>

<h2>Exemplu: un colet de sărbători</h2>
<p>O mamă din Argeș vrea să-i trimită fiului din Stuttgart un colet de Crăciun. Pune într-o cutie de carton dublu: doi cozonaci în pungi, un borcan de zacuscă și unul de dulceață, fiecare în pungă și înfășurat în ziar, un cârnat afumat vidat și o bucată de cașcaval vidată. Umple golurile cu un pulover nou pe care i-l trimite cadou. Lipește cutia în formă de „H” și scrie pe ea numele, telefonul fiului și „Fragil”. Coletul ajunge întreg, iar fiul are mâncare de acasă de sărbători.</p>

<h2>Cât să trimiți</h2>
<p>Trimite cât poate fi mâncat într-un timp rezonabil. Mâncarea care stă prea mult se strică, mai ales dacă destinatarul nu are frigider mare. Pentru cei care stau în cazări comune, uneori spațiul din frigider e limitat. Întreabă-i înainte ce și cât le trebuie.</p>

<h2>Cine primește coletul</h2>
<p>Asigură-te că destinatarul e acasă în ziua livrării sau că poate fi sunat. Mâncarea nu poate aștepta zile întregi la o ușă. Șoferul sună înainte să ajungă, iar coletul se predă în mână.</p>

<h2>Ce nu trimiți</h2>
<p>Pe lângă mâncarea care se strică, nu trimite niciun obiect interzis. Lista completă e în articolul despre <a href="/blog/ce-nu-ai-voie-sa-trimiti-in-colet">ce nu ai voie să trimiți într-un colet</a>. Pentru ambalarea restului de lucruri, vezi ghidul despre <a href="/blog/cum-ambalezi-un-colet-corect">cum ambalezi un colet</a>.</p>

<h2>Trimite mâncarea de acasă</h2>
<p>Ridicăm coletul de la tine și îl predăm în mână, fără depozite, în Germania, Austria, Olanda sau Belgia. Detalii pe pagina de <a href="/transport-colete-romania-europa">transport colete România – Europa</a>.</p>`,
    faq: [
      ["Pot trimite sarmale în Germania?", "Da, congelate dinainte, în caserole etanșe. Merg mai bine pe drumurile mai scurte."],
      ["Ce mâncare rezistă cel mai bine?", "Conservele în borcan, afumăturile, brânzeturile tari și dulciurile uscate."],
      ["Pot trimite carne de porc de casă?", "În general da, dar pot exista restricții din cauza pestei porcine africane. Verifică pe site-ul ANSVSA."],
      ["Cum trimit borcane fără să se spargă?", "Fiecare borcan bine închis, pus într-o pungă și înfășurat în ziar sau haine, așezat în picioare."],
      ["Ce nu ar trebui să trimit?", "Carne crudă, pește proaspăt, lactate proaspete și prăjituri cu cremă, care se strică pe drum."],
    ],
  },
];
