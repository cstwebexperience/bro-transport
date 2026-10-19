// Valul 3 – Grup C (23–28): acte și reguli. Fapte generale + linkuri la surse oficiale; detaliile care se schimbă se verifică acolo.
import { IMG, D2, SRC } from "./_img.mjs";
const G = "Acte și reguli";

export default [
  {
    n: 23, published: true, date: D2, group: G, main: "DE",
    slug: "acte-necesare-calatorie-germania",
    title: "Ce acte îți trebuie ca să călătorești în Germania",
    desc: "Ce acte îți trebuie ca să călătorești din România în Germania: buletin sau pașaport, acte pentru copii, card de sănătate și ce faci dacă rămâi acolo.",
    h1: "Ce acte îți trebuie ca să călătorești în Germania",
    cardText: "Buletin sau pașaport, acte pentru copii și ce mai faci dacă rămâi acolo.",
    ...IMG.master,
    imgAlt: "Microbuz BRO Transport pentru călătoria România – Germania",
    related: ["buletin-sau-pasaport-europa", "acte-minor-calatorie-strainatate"],
    intro: `
<p><strong>Ca cetățean român, pentru a călători în Germania îți ajunge o carte de identitate valabilă sau un pașaport valabil.</strong> Nu ai nevoie de viză și nici de alte documente speciale pentru o călătorie obișnuită.</p>
<p>Pentru copii sunt reguli în plus, iar dacă rămâi în Germania mai mult timp, trebuie să îți înregistrezi adresa. Mai jos găsești lista completă, cu linkuri la sursele oficiale.</p>`,
    body: `
<h2>Actul de identitate: buletin sau pașaport</h2>
<p>România și Germania sunt amândouă în Uniunea Europeană și în spațiul Schengen. Ca cetățean român poți călători în Germania cu:</p>
<ul>
<li><strong>cartea de identitate</strong> (buletinul), valabilă;</li>
<li><strong>cartea electronică de identitate</strong>, valabilă;</li>
<li><strong>pașaportul</strong>, valabil, simplu sau electronic.</li>
</ul>
<p>Cartea de identitate provizorie nu e acceptată pentru călătorii în străinătate. Dacă ai doar buletin provizoriu, ai nevoie de pașaport. Diferențele dintre acte sunt explicate în articolul despre <a href="/blog/buletin-sau-pasaport-europa">buletin sau pașaport în UE</a>.</p>
<p>Informațiile oficiale despre actele de călătorie sunt pe site-ul ${SRC("https://www.politiadefrontiera.ro", "Poliției de Frontieră Române")} și pe portalul UE ${SRC("https://europa.eu/youreurope/citizens/travel/entry-exit/eu-citizen/index_ro.htm", "Your Europe")}.</p>

<h2>Verifică valabilitatea înainte de drum</h2>
<p>Un act expirat te poate opri din drum. Uită-te la data de expirare cu câteva săptămâni înainte de plecare. Dacă trebuie să îl reînnoiești, programarea la pașapoarte sau la evidența persoanelor poate dura. Nu lăsa asta pe ultimele zile.</p>
<p>Pe tot drumul, ține actul de identitate la tine, în geanta mică, nu în valiza din portbagaj. La un control în trafic sau la graniță trebuie să îl poți arăta imediat.</p>

<h2>Actele pentru copii</h2>
<p>Orice copil are nevoie de un act de identitate propriu pentru a călători în străinătate. Pentru copiii sub 14 ani, care nu au carte de identitate, actul este de obicei pașaportul.</p>
<p>Dacă un copil călătorește fără unul dintre părinți sau fără niciun părinte, legea română cere declarații notariale. Regulile sunt explicate pe larg în ghidurile despre <a href="/blog/acte-minor-calatorie-strainatate">actele pentru minori</a> și despre <a href="/blog/minor-insotit-de-un-singur-parinte">copilul care călătorește cu un singur părinte</a>.</p>

<h2>Acte de sănătate</h2>
<p>Nu sunt obligatorii pentru a intra în Germania, dar sunt foarte utile:</p>
<ul>
<li><strong>Cardul european de asigurări sociale de sănătate (CEASS)</strong>, gratuit, eliberat de casa de asigurări de sănătate. Te ajută dacă ai nevoie de îngrijiri medicale urgente în timpul șederii. Detalii în ghidul despre <a href="/blog/card-european-sanatate-cest">cardul european de sănătate</a>.</li>
<li><strong>O asigurare de călătorie</strong>, opțională. Acoperă lucruri pe care cardul european nu le acoperă. Vezi articolul despre <a href="/blog/asigurare-de-calatorie-europa">asigurarea de călătorie</a>.</li>
<li><strong>Rețetele și un rezumat medical</strong>, dacă iei medicamente zilnic sau ai o boală cronică.</li>
</ul>

<h2>Dacă mergi la muncă în Germania</h2>
<p>Ca cetățean UE, ai dreptul să lucrezi în Germania fără permis de muncă. Ai nevoie însă de câteva acte, după ce ajungi:</p>
<ol>
<li><strong>Anmeldung</strong>: înregistrarea adresei la primărie, în primele două săptămâni după mutare. Vezi <a href="/blog/anmeldung-germania-ghid">ghidul despre Anmeldung</a>.</li>
<li><strong>Numărul fiscal (Steuer-ID)</strong>, primit prin poștă după Anmeldung.</li>
<li><strong>Asigurarea medicală (Krankenkasse)</strong>, obligatorie pentru toți cei care locuiesc în Germania.</li>
<li><strong>Contul bancar</strong>, pentru salariu.</li>
</ol>
<p>Pentru muncă e bine să iei și copii traduse după diplome și certificate de calificare. Informații oficiale pentru cei care vin la muncă găsești pe portalul ${SRC("https://www.make-it-in-germany.com", "Make it in Germany")} al guvernului german.</p>

<h2>Acte pentru drumul cu microbuzul</h2>
<p>Pentru transportul cu noi nu ai nevoie de bilet tipărit sau de alte acte. Rezervarea se face la telefon sau pe WhatsApp, iar în ziua plecării îți trebuie doar actul de identitate. Te rugăm să ne dai la rezervare numele corect, așa cum apare în act.</p>

<h2>Checklist cu actele pentru Germania</h2>
<div class="tbl"><table>
<thead><tr><th>Act</th><th>Obligatoriu?</th><th>Pentru cine</th></tr></thead>
<tbody>
<tr><td>Carte de identitate sau pașaport valabil</td><td>Da</td><td>Toți pasagerii adulți</td></tr>
<tr><td>Act de identitate propriu</td><td>Da</td><td>Fiecare copil</td></tr>
<tr><td>Declarații notariale</td><td>Da, când e cazul</td><td>Copiii care nu călătoresc cu ambii părinți</td></tr>
<tr><td>Card european de sănătate</td><td>Recomandat</td><td>Toți</td></tr>
<tr><td>Asigurare de călătorie</td><td>Opțional</td><td>Toți</td></tr>
<tr><td>Diplome și certificate traduse</td><td>Util</td><td>Cei care merg la muncă</td></tr>
</tbody>
</table></div>

<h2>Dacă îți pierzi actele în Germania</h2>
<p>Dacă îți pierzi sau îți este furat actul de identitate, anunță poliția locală și ia legătura cu ambasada sau consulatul României din Germania. Acolo poți obține un titlu de călătorie, ca să te poți întoarce acasă. Datele de contact ale misiunilor diplomatice sunt pe site-ul ${SRC("https://www.mae.ro", "Ministerului Afacerilor Externe")}.</p>
<p>Ca să fie mai ușor în asemenea situații, fă-ți o poză sau o copie după act și păstrează-o separat.</p>

<h2>Gata de drum?</h2>
<p>Cu actele în regulă, partea grea e făcută. Te luăm de acasă și te lăsăm la adresa din Germania, fără nicio schimbare pe drum. Detalii pe pagina de <a href="/transport-persoane-romania-germania">transport persoane România – Germania</a>.</p>`,
    faq: [
      ["Pot merge în Germania doar cu buletinul?", "Da, cu o carte de identitate valabilă. Buletinul provizoriu nu e acceptat pentru călătorii în străinătate."],
      ["Am nevoie de viză pentru Germania?", "Nu. Cetățenii români nu au nevoie de viză pentru Germania."],
      ["Ce acte îi trebuie copilului?", "Un act de identitate propriu, de obicei pașaport pentru cei sub 14 ani, și declarații notariale dacă nu călătorește cu ambii părinți."],
      ["Ce fac dacă rămân la muncă în Germania?", "Îți înregistrezi adresa (Anmeldung), îți faci asigurare medicală și cont bancar. Ca cetățean UE nu ai nevoie de permis de muncă."],
      ["Ce fac dacă îmi pierd buletinul în Germania?", "Anunți poliția și iei legătura cu ambasada sau consulatul României, unde poți obține un titlu de călătorie."],
    ],
  },

  {
    n: 24, published: true, date: D2, group: G, main: "DE",
    slug: "buletin-sau-pasaport-europa",
    title: "Buletin sau pașaport: cu ce poți călători în UE",
    desc: "Poți călători în Germania, Austria, Olanda sau Belgia doar cu buletinul? Află când îți ajunge cartea de identitate și când ai nevoie de pașaport.",
    h1: "Buletin sau pașaport: cu ce poți călători în UE",
    cardText: "Când îți ajunge buletinul, când ai nevoie de pașaport și ce nu e acceptat.",
    ...IMG.trafic,
    imgAlt: "Microbuz BRO Transport pentru călătorii în Uniunea Europeană",
    related: ["acte-necesare-calatorie-germania", "acte-minor-calatorie-strainatate"],
    intro: `
<p><strong>În țările Uniunii Europene, cetățenii români pot călători doar cu cartea de identitate, dacă e valabilă.</strong> Pașaportul nu e obligatoriu pentru Germania, Austria, Olanda sau Belgia, dar e o alternativă la fel de bună.</p>
<p>Există însă câteva situații în care buletinul nu ajunge: buletinul provizoriu, copiii fără carte de identitate și drumurile în afara UE. Le găsești explicate mai jos.</p>`,
    body: `
<h2>Ce acte sunt acceptate în UE</h2>
<div class="tbl"><table>
<thead><tr><th>Act</th><th>Acceptat în UE?</th><th>Observații</th></tr></thead>
<tbody>
<tr><td>Carte de identitate (buletin)</td><td>Da</td><td>Trebuie să fie valabilă.</td></tr>
<tr><td>Carte electronică de identitate</td><td>Da</td><td>Trebuie să fie valabilă.</td></tr>
<tr><td>Pașaport simplu sau electronic</td><td>Da</td><td>Trebuie să fie valabil.</td></tr>
<tr><td>Carte de identitate provizorie</td><td>Nu</td><td>Nu e document de călătorie în străinătate.</td></tr>
<tr><td>Permis de conducere</td><td>Nu</td><td>Nu e act de identitate pentru trecerea granițelor.</td></tr>
</tbody>
</table></div>
<p>Informații oficiale despre actele de călătorie găsești pe portalul ${SRC("https://europa.eu/youreurope/citizens/travel/entry-exit/eu-citizen/index_ro.htm", "Your Europe")} al Uniunii Europene și pe site-ul ${SRC("https://www.politiadefrontiera.ro", "Poliției de Frontieră")}.</p>

<h2>Buletinul: avantaje și limite</h2>
<h3>Avantaje</h3>
<ul>
<li>îl ai deja, nu trebuie să faci nimic în plus;</li>
<li>e mic și ușor de ținut la tine;</li>
<li>e suficient pentru toate țările UE și pentru alte câteva țări europene.</li>
</ul>
<h3>Limite</h3>
<ul>
<li>nu e valabil pentru țările din afara UE care cer pașaport;</li>
<li>buletinul provizoriu nu e acceptat;</li>
<li>unele firme sau instituții din străinătate îți pot cere uneori pașaportul, de exemplu pentru anumite contracte. Întreabă dinainte.</li>
</ul>

<h2>Pașaportul: când e mai bun</h2>
<p>Pașaportul e o alegere bună dacă:</p>
<ul>
<li>ai doar buletin provizoriu sau buletinul îți expiră curând;</li>
<li>vrei să călătorești și în țări din afara UE;</li>
<li>vrei un act de rezervă, dacă îți pierzi buletinul.</li>
</ul>
<p>Pașaportul se obține de la serviciile publice comunitare de pașapoarte, cu programare. Detalii despre acte și taxe găsești pe site-ul ${SRC("https://www.epasapoarte.ro", "Direcției Generale de Pașapoarte")}.</p>

<h2>Buletinul provizoriu: o capcană frecventă</h2>
<p>Mulți oameni primesc buletin provizoriu când își schimbă adresa sau nu au acte de proprietate. Acesta e valabil în România, dar nu e document de călătorie. Dacă ai buletin provizoriu și vrei să pleci în Germania, Austria, Olanda sau Belgia, ai nevoie de pașaport. Fă-l din timp, pentru că programările pot dura.</p>

<h2>Ce acte trebuie pentru copii</h2>
<p>Copiii sub 14 ani nu au, de regulă, carte de identitate. Pentru ei, actul de călătorie este pașaportul. Copiii peste 14 ani pot călători cu cartea de identitate proprie. În plus, dacă un copil nu călătorește cu ambii părinți, legea cere declarații notariale. Detalii în ghidul despre <a href="/blog/acte-minor-calatorie-strainatate">actele pentru minori</a>.</p>

<h2>Ce verifici înainte de plecare</h2>
<ol>
<li>data de expirare a actului. Dacă expiră în timp ce ești plecat, întoarcerea poate fi complicată;</li>
<li>că actul e în stare bună: o poză deteriorată sau un act rupt pot crea probleme la control;</li>
<li>că numele din act e același cu cel dat la rezervare;</li>
<li>că ai și o copie sau o poză a actului, păstrată separat.</li>
</ol>

<h2>Schengen nu înseamnă „fără acte”</h2>
<p>România face parte din spațiul Schengen, deci la granițele interne nu mai există controale sistematice. Asta nu înseamnă că poți călători fără act. Poliția poate face oricând verificări, în trafic sau la graniță, iar unele țări reintroduc temporar controalele la anumite frontiere. Ține actul la tine pe tot drumul.</p>

<h2>Dacă stai mult timp în altă țară</h2>
<p>Buletinul sau pașaportul îți ajung pentru a intra și a sta în altă țară UE. Dacă stai mai mult de câteva luni sau începi să lucrezi acolo, trebuie să te înregistrezi la autoritățile locale. Fiecare țară are regulile ei: <a href="/blog/anmeldung-germania-ghid">Anmeldung în Germania</a>, <a href="/blog/inregistrare-domiciliu-austria-meldezettel">Meldezettel în Austria</a>, <a href="/blog/inschrijving-olanda-bsn">BSN în Olanda</a> și <a href="/blog/inregistrare-belgia-comuna">înregistrarea la comună în Belgia</a>.</p>

<h2>Drumul cu noi</h2>
<p>Pentru o cursă cu BRO Transport ai nevoie doar de actul de identitate valabil. Nu există bilet tipărit. Rezervarea se face la telefon sau pe WhatsApp. Detalii pe pagina de <a href="/transport-persoane-romania-germania">transport persoane România – Germania</a>.</p>`,
    faq: [
      ["Pot merge în Austria doar cu buletinul?", "Da. În toate țările UE poți călători cu o carte de identitate valabilă."],
      ["E acceptat buletinul provizoriu?", "Nu. Buletinul provizoriu nu e document de călătorie în străinătate. Ai nevoie de pașaport."],
      ["Copilul meu de 10 ani poate călători cu certificatul de naștere?", "Nu. Copilul are nevoie de un act de călătorie propriu, de obicei pașaport."],
      ["Permisul de conducere e bun ca act de identitate?", "Nu, pentru trecerea granițelor nu e acceptat. Ai nevoie de buletin sau pașaport."],
      ["Mai trebuie să am actul la mine dacă suntem în Schengen?", "Da. Pot exista verificări oricând, iar unele țări fac controale temporare la graniță."],
    ],
  },

  {
    n: 25, published: true, date: D2, group: G, main: "DE",
    slug: "acte-minor-calatorie-strainatate",
    title: "Minor în străinătate: ce acte trebuie și declarații",
    desc: "Ce acte îi trebuie unui minor ca să călătorească în străinătate: act de identitate, declarații notariale, când e nevoie de ele și ce verifici înainte.",
    h1: "Minor în străinătate: ce acte trebuie și când e nevoie de declarație",
    cardText: "Act de identitate propriu, declarații notariale și situațiile speciale.",
    ...IMG.banchete,
    imgAlt: "Locuri pentru familii cu copii în microbuzul BRO Transport",
    related: ["minor-insotit-de-un-singur-parinte", "calatorie-cu-copii-in-microbuz"],
    intro: `
<p><strong>Un minor care călătorește în străinătate are nevoie de un act de identitate propriu și, dacă nu călătorește cu ambii părinți, de declarații notariale date de părintele sau părinții care nu merg cu el.</strong> Fără aceste acte, copilul poate fi oprit la ieșirea din țară.</p>
<p>Regulile vin din legea română privind libera circulație a cetățenilor români în străinătate și se pot schimba. Verifică-le întotdeauna înainte de plecare pe site-ul Poliției de Frontieră.</p>`,
    body: `
<h2>Actul de identitate al copilului</h2>
<p>Fiecare copil, indiferent de vârstă, are nevoie de act de călătorie propriu. Copilul nu mai poate fi „trecut” în pașaportul părintelui.</p>
<ul>
<li><strong>sub 14 ani</strong>: de regulă pașaport, pentru că copiii nu au încă carte de identitate;</li>
<li><strong>peste 14 ani</strong>: carte de identitate valabilă sau pașaport.</li>
</ul>
<p>Certificatul de naștere nu e document de călătorie. E util totuși să ai la tine o copie, pentru a dovedi legătura dintre tine și copil.</p>

<h2>Situațiile în care e nevoie de declarații</h2>
<div class="tbl"><table>
<thead><tr><th>Cu cine călătorește copilul</th><th>Ce acte sunt necesare, pe lângă actul copilului</th></tr></thead>
<tbody>
<tr><td>Cu ambii părinți</td><td>De regulă, nimic în plus.</td></tr>
<tr><td>Cu un singur părinte</td><td>Declarația notarială a celuilalt părinte, prin care își dă acordul pentru călătorie.</td></tr>
<tr><td>Cu o altă persoană adultă (bunic, rudă, prieten)</td><td>Declarația notarială a ambilor părinți, cu datele însoțitorului, plus cazierul judiciar al însoțitorului, conform legii.</td></tr>
<tr><td>Singur, fără însoțitor</td><td>Declarația ambilor părinți și alte condiții prevăzute de lege. Verifică pe site-ul Poliției de Frontieră.</td></tr>
</tbody>
</table></div>
<p>Există excepții, de exemplu când un părinte a decedat, a fost decăzut din drepturile părintești sau copilul a fost încredințat doar unui părinte prin hotărâre judecătorească. În aceste cazuri se prezintă documentele care dovedesc situația. Lista completă și actualizată e pe site-ul ${SRC("https://www.politiadefrontiera.ro", "Poliției de Frontieră Române")}.</p>
<!-- TODO: de reverificat periodic condițiile pe site-ul Poliției de Frontieră (Legea 248/2005 și modificările ulterioare). -->

<h2>Ce trebuie să cuprindă declarația</h2>
<p>Declarația se face la notar. Notarul știe formatul, dar e bine să ai pregătite informațiile:</p>
<ul>
<li>datele părintelui sau părinților care dau declarația;</li>
<li>datele copilului;</li>
<li>datele însoțitorului, dacă e cazul;</li>
<li>țara sau țările în care călătorește copilul;</li>
<li>perioada călătoriei.</li>
</ul>
<p>Ia la notar actele de identitate ale părinților și certificatul de naștere al copilului.</p>

<h2>Dacă un părinte e deja în străinătate</h2>
<p>Se întâmplă des: un părinte lucrează în Germania sau în altă țară, iar celălalt vrea să vină cu copilul la el. Părintele din străinătate poate da declarația la consulatul român din țara în care se află sau la un notar de acolo. Documentul trebuie să fie valabil în România, deci întreabă la consulat ce formalități sunt necesare. Datele consulatelor sunt pe ${SRC("https://www.mae.ro", "site-ul MAE")}.</p>

<h2>Ce verifici înainte de plecare</h2>
<ol>
<li>actul copilului e valabil pe toată durata călătoriei;</li>
<li>declarațiile sunt făcute pentru perioada și țara corecte;</li>
<li>ai originalele, nu doar copii;</li>
<li>însoțitorul are cazierul judiciar, dacă legea îl cere în situația voastră;</li>
<li>ai o copie a certificatului de naștere al copilului.</li>
</ol>

<h2>Cât de des se verifică actele</h2>
<p>Chiar dacă în Schengen nu mai există controale sistematice la granițe, poliția poate verifica oricând un minor, mai ales dacă nu e cu ambii părinți. Verificările au rolul de a proteja copiii. Nu te baza pe faptul că „nu m-a oprit nimeni data trecută”.</p>

<h2>Actele la întoarcere</h2>
<p>Păstrează declarațiile și la întoarcere. Ele acoperă de obicei toată perioada călătoriei, inclusiv drumul înapoi. Dacă perioada se prelungește, de exemplu copilul rămâne mai mult la părintele din străinătate, verifică dacă declarația e încă valabilă.</p>

<h2>Cu noi, spune-ne de la rezervare</h2>
<p>Când rezervi un loc pentru un copil, spune-ne vârsta lui și cu cine călătorește. Ca să nu existe neplăceri pe drum, ai grijă să ai toate actele în original la tine. Mai multe sfaturi pentru drum găsești în ghidul despre <a href="/blog/calatorie-cu-copii-in-microbuz">drumul lung cu copiii</a>, iar situația cu un singur părinte e explicată în <a href="/blog/minor-insotit-de-un-singur-parinte">acest articol</a>. Detalii despre curse pe pagina de <a href="/transport-persoane-romania-germania">transport persoane România – Germania</a>.</p>`,
    faq: [
      ["Copilul poate fi trecut în pașaportul meu?", "Nu. Fiecare copil are nevoie de un act de călătorie propriu."],
      ["Ce act îi trebuie unui copil de 8 ani?", "De regulă pașaport, pentru că sub 14 ani copiii nu au carte de identitate."],
      ["Ce fac dacă merg doar eu cu copilul?", "Ai nevoie de declarația notarială a celuilalt părinte, prin care își dă acordul pentru călătorie."],
      ["Copilul poate merge cu bunica în Germania?", "Da, cu declarația notarială a ambilor părinți și cu actele cerute însoțitorului, conform legii. Verifică pe site-ul Poliției de Frontieră."],
      ["Unde verific regulile actualizate?", "Pe site-ul Poliției de Frontieră Române, la secțiunea despre călătoria minorilor."],
    ],
  },

  {
    n: 26, published: true, date: D2, group: G, main: "DE",
    slug: "minor-insotit-de-un-singur-parinte",
    title: "Copilul călătorește cu un singur părinte: declarații",
    desc: "Ce declarații îți trebuie când copilul călătorește în străinătate cu un singur părinte, cum se face declarația la notar și ce faci în cazurile speciale.",
    h1: "Copilul călătorește cu un singur părinte: ce declarații trebuie",
    cardText: "Declarația celuilalt părinte, cum se face și ce faci în cazurile speciale.",
    ...IMG.lux,
    imgAlt: "Interiorul unui microbuz BRO Transport pentru familii",
    related: ["acte-minor-calatorie-strainatate", "calatorie-cu-copii-in-microbuz"],
    intro: `
<p><strong>Când un copil călătorește în străinătate doar cu unul dintre părinți, e nevoie de declarația notarială a celuilalt părinte, prin care își dă acordul pentru călătorie.</strong> Pe lângă declarație, copilul are nevoie de actul lui de identitate.</p>
<p>Dacă celălalt părinte nu poate sau nu vrea să dea declarația, există soluții prevăzute de lege. Le găsești mai jos. Regulile actualizate sunt mereu pe site-ul Poliției de Frontieră.</p>`,
    body: `
<h2>Declarația celuilalt părinte</h2>
<p>Declarația se face la notar, de către părintele care nu călătorește. Prin ea, acesta își exprimă acordul ca copilul să călătorească în străinătate cu celălalt părinte.</p>
<h3>Ce cuprinde de obicei</h3>
<ul>
<li>datele părintelui care dă acordul;</li>
<li>datele copilului;</li>
<li>datele părintelui care îl însoțește;</li>
<li>statul sau statele în care călătorește copilul;</li>
<li>perioada pentru care e dat acordul.</li>
</ul>
<h3>Ce iei la notar</h3>
<ul>
<li>actul de identitate al părintelui care dă declarația;</li>
<li>certificatul de naștere al copilului;</li>
<li>datele de identitate ale celuilalt părinte.</li>
</ul>
<p>Lista oficială și actualizată e pe site-ul ${SRC("https://www.politiadefrontiera.ro", "Poliției de Frontieră Române")}.</p>

<h2>Cazurile în care nu e nevoie de declarație</h2>
<p>Legea prevede câteva situații în care declarația celuilalt părinte nu e necesară, dar trebuie dovedită situația cu acte:</p>
<div class="tbl"><table>
<thead><tr><th>Situație</th><th>Ce prezinți în loc de declarație</th></tr></thead>
<tbody>
<tr><td>Celălalt părinte a decedat</td><td>Certificatul de deces.</td></tr>
<tr><td>Copilul a fost încredințat sau locuiește doar cu tine prin hotărâre judecătorească, iar exercitarea autorității părintești e doar a ta</td><td>Hotărârea judecătorească definitivă.</td></tr>
<tr><td>Celălalt părinte a fost decăzut din drepturile părintești</td><td>Hotărârea judecătorească.</td></tr>
<tr><td>Celălalt părinte e declarat dispărut</td><td>Documentul oficial care atestă situația.</td></tr>
</tbody>
</table></div>
<p>Atenție: dacă autoritatea părintească e comună, chiar dacă sunteți divorțați și copilul locuiește cu tine, de regulă tot e nevoie de acordul celuilalt părinte. Verifică exact ce scrie în hotărâre.</p>
<!-- TODO: de reverificat periodic excepțiile pe site-ul Poliției de Frontieră. -->

<h2>Dacă celălalt părinte refuză</h2>
<p>Dacă celălalt părinte nu vrea să dea declarația, poți cere instanței de judecată să suplinească acordul lui. Procesul durează, deci nu lăsa totul pe ultima sută de metri. Un avocat îți poate explica ce acte trebuie și cât poate dura.</p>

<h2>Dacă celălalt părinte e în străinătate</h2>
<p>Părintele care lucrează în străinătate poate da declarația la consulatul român din țara în care se află. Uneori se poate face și la un notar local, cu formalitățile cerute pentru a fi recunoscută în România. Întreabă la consulat ce variantă e potrivită. Datele de contact sunt pe ${SRC("https://www.mae.ro", "site-ul MAE")}.</p>

<h2>Exemplu: mama pleacă cu copilul la tata în Germania</h2>
<p>O situație foarte des întâlnită: tatăl lucrează în Germania, iar mama vrea să vină la el cu copilul pentru vacanță. Copilul călătorește doar cu mama, deci e nevoie de declarația tatălui. Tatăl o poate da la un notar din România înainte să plece sau la consulatul român din Germania. Declarația ajunge apoi, în original, la mamă. În ziua plecării, mama are la ea:</p>
<ol>
<li>actul ei de identitate;</li>
<li>pașaportul copilului;</li>
<li>declarația tatălui, în original;</li>
<li>o copie a certificatului de naștere al copilului.</li>
</ol>

<h2>Sfaturi practice</h2>
<ul>
<li>fă declarația pentru o perioadă puțin mai lungă decât călătoria, în caz că se schimbă data întoarcerii;</li>
<li>păstrează originalele în geanta mică, nu în valiza din portbagaj;</li>
<li>fă-ți și o copie sau o poză, separat;</li>
<li>dacă numele de familie al copilului e diferit de al tău, e și mai important să ai certificatul de naștere la tine.</li>
</ul>

<h2>Restul actelor pentru drum</h2>
<p>Pe lângă declarație, copilul are nevoie de act de identitate propriu. Toate actele pentru minori sunt explicate în ghidul despre <a href="/blog/acte-minor-calatorie-strainatate">actele pentru minorii care călătoresc în străinătate</a>. Pentru pregătirea drumului, vezi și <a href="/blog/calatorie-cu-copii-in-microbuz">sfaturile pentru drumul lung cu copiii</a>.</p>

<h2>Călătorește cu noi</h2>
<p>Când rezervi, spune-ne că vii cu copilul și ce vârstă are. Te luăm de acasă și te lăsăm la adresă, fără schimbări pe drum. Detalii pe pagina de <a href="/transport-persoane-romania-germania">transport persoane România – Germania</a>.</p>`,
    faq: [
      ["Am nevoie de declarația tatălui dacă plec doar eu cu copilul?", "Da, de regulă e nevoie de declarația notarială a celuilalt părinte, cu excepțiile prevăzute de lege."],
      ["Suntem divorțați. Mai trebuie declarația?", "Depinde de hotărârea judecătorească. Dacă autoritatea părintească e comună, de regulă e nevoie de acordul celuilalt părinte."],
      ["Unde poate da declarația părintele aflat în Germania?", "La consulatul român din Germania sau, cu formalitățile necesare, la un notar local. Întreabă la consulat."],
      ["Ce fac dacă celălalt părinte refuză?", "Poți cere instanței să suplinească acordul. Procesul durează, deci începe din timp."],
      ["Declarația e valabilă și la întoarcere?", "Dacă acoperă perioada călătoriei, da. Verifică datele scrise în declarație."],
    ],
  },

  {
    n: 27, published: true, date: D2, group: G, main: "DE",
    slug: "card-european-sanatate-cest",
    title: "Cardul european de sănătate: cum îl obții, ce acoperă",
    desc: "Ce este cardul european de asigurări sociale de sănătate, cum îl obții gratuit de la casa de asigurări, ce acoperă în Germania și ce nu acoperă.",
    h1: "Cardul european de sănătate: cum îl obții și ce acoperă",
    cardText: "Cine îl poate obține, de unde, ce acoperă și ce nu acoperă în străinătate.",
    ...IMG.trafic,
    imgAlt: "Microbuz pentru călătorii în Uniunea Europeană",
    related: ["asigurare-de-calatorie-europa", "acte-necesare-calatorie-germania"],
    intro: `
<p><strong>Cardul european de asigurări sociale de sănătate (CEASS) îți dă acces la îngrijiri medicale necesare în timpul unei șederi temporare în altă țară UE, în aceleași condiții ca localnicii asigurați.</strong> Se obține gratuit de la casa de asigurări de sănătate, dacă ești asigurat în România.</p>
<p>Nu înlocuiește însă o asigurare de călătorie și nu acoperă tot. Mai jos afli exact ce acoperă, cum îl obții și ce să știi înainte de drum.</p>`,
    body: `
<h2>Ce este cardul european</h2>
<p>Cardul european (în engleză EHIC) este un card emis de fiecare țară din Uniunea Europeană, plus Islanda, Liechtenstein, Norvegia și Elveția. În România îl eliberează casele de asigurări de sănătate, sub coordonarea ${SRC("https://cnas.ro", "Casei Naționale de Asigurări de Sănătate (CNAS)")}.</p>
<p>Cu el, dacă te îmbolnăvești sau ai un accident în timpul unei șederi temporare, poți primi îngrijirile medicale necesare în sistemul public de sănătate al țării respective. Informațiile oficiale la nivel european sunt pe portalul ${SRC("https://europa.eu/youreurope/citizens/health/unplanned-healthcare/temporary-stays/index_ro.htm", "Your Europe")}.</p>

<h2>Ce acoperă și ce nu acoperă</h2>
<div class="tbl"><table>
<thead><tr><th>Acoperă</th><th>Nu acoperă</th></tr></thead>
<tbody>
<tr><td>Îngrijirile medicale necesare în timpul șederii temporare (urgențe, boli apărute pe drum)</td><td>Tratamentele planificate, pentru care pleci special în străinătate</td></tr>
<tr><td>Îngrijirile pentru boli cronice existente, dacă devin necesare în timpul șederii</td><td>Serviciile medicale private</td></tr>
<tr><td>Îngrijirile legate de sarcină și naștere, în timpul unei șederi temporare</td><td>Transportul medical înapoi în România (repatrierea)</td></tr>
<tr><td>Serviciile în sistemul public, în aceleași condiții ca pentru localnici</td><td>Pierderea bagajelor, anularea călătoriei și alte riscuri de călătorie</td></tr>
</tbody>
</table></div>
<p>„În aceleași condiții ca localnicii” înseamnă că, dacă localnicii plătesc o contribuție pentru un serviciu, o vei plăti și tu. În unele țări poți cere apoi o parte din bani înapoi.</p>

<h2>Cine poate obține cardul</h2>
<p>Cardul îl poate obține orice persoană asigurată în sistemul de sănătate din România. Asta include, de exemplu, salariații, pensionarii, copiii și alte categorii asigurate prin lege. Dacă nu ești sigur că ești asigurat, poți verifica la casa de asigurări de sănătate din județul tău.</p>

<h2>Cum îl obții</h2>
<ol>
<li><strong>Depui cererea</strong> la casa de asigurări de sănătate de care aparții, personal sau online, după procedura stabilită de casa respectivă.</li>
<li><strong>Atașezi actele cerute</strong>, de obicei actul de identitate și dovada calității de asigurat, dacă e cazul.</li>
<li><strong>Primești cardul</strong> prin poștă sau îl ridici de la ghișeu, după procedura casei de asigurări.</li>
</ol>
<p>Cardul e gratuit. Durata de valabilitate și procedura exactă sunt pe site-ul CNAS și al casei de asigurări din județul tău. Fă cererea din timp, pentru că emiterea și trimiterea prin poștă pot dura.</p>
<!-- TODO: termenul de emitere și valabilitatea actuală a cardului – de verificat pe cnas.ro. -->

<h2>Dacă pleci urgent și nu ai cardul</h2>
<p>Dacă ai nevoie de card și nu l-ai primit încă, poți cere un certificat provizoriu de înlocuire. Acesta are același rol ca și cardul pentru o perioadă limitată. Se cere tot de la casa de asigurări. Poate fi trimis și în străinătate, dacă ai nevoie de el acolo.</p>

<h2>Cum îl folosești în Germania</h2>
<ul>
<li>mergi la un medic sau la un spital care lucrează cu sistemul public de asigurări (cei mai mulți medici din Germania lucrează cu el);</li>
<li>arată cardul și actul de identitate;</li>
<li>la medic ți se poate cere să completezi un formular;</li>
<li>la urgență, sună la 112, numărul unic european.</li>
</ul>
<p>Atenție: dacă te muți în Germania și lucrezi acolo, nu mai folosești cardul românesc. Devii asigurat în sistemul german și ai nevoie de o asigurare medicală germană. Detalii în ghidul despre <a href="/blog/asigurare-medicala-germania-krankenkasse">Krankenkasse</a>.</p>

<h2>Card european sau asigurare de călătorie?</h2>
<p>Cardul european e foarte util, dar nu acoperă repatrierea, serviciile private sau riscurile de călătorie. O asigurare de călătorie acoperă de obicei aceste lucruri. Cele două se completează, nu se înlocuiesc. Diferențele sunt explicate în articolul despre <a href="/blog/asigurare-de-calatorie-europa">asigurarea de călătorie în UE</a>.</p>

<h2>Sfaturi pentru drum</h2>
<ul>
<li>ia cardul european pentru fiecare membru al familiei, inclusiv pentru copii;</li>
<li>verifică data de expirare înainte de plecare;</li>
<li>ține cardul în geanta mică, lângă actul de identitate;</li>
<li>notează-ți numărul 112 și numărul de telefon al ambasadei sau consulatului român.</li>
</ul>

<h2>Gata de drum</h2>
<p>Cu actele în ordine, poți pleca liniștit. Te luăm de acasă și te lăsăm la adresă, în Germania, Austria, Olanda sau Belgia. Detalii pe pagina de <a href="/transport-persoane-romania-germania">transport persoane România – Germania</a>.</p>`,
    faq: [
      ["Cât costă cardul european de sănătate?", "Este gratuit. Se cere de la casa de asigurări de sănătate, dacă ești asigurat în România."],
      ["Ce acoperă cardul european?", "Îngrijirile medicale necesare în timpul unei șederi temporare, în sistemul public, în aceleași condiții ca localnicii."],
      ["Acoperă cardul transportul înapoi în România?", "Nu. Repatrierea nu e acoperită. Pentru asta ai nevoie de o asigurare de călătorie."],
      ["Ce fac dacă plec urgent și nu am cardul?", "Poți cere un certificat provizoriu de înlocuire de la casa de asigurări."],
      ["Pot folosi cardul dacă lucrez în Germania?", "Nu pentru o ședere permanentă. Dacă lucrezi acolo, devii asigurat în sistemul german."],
    ],
  },

  {
    n: 28, published: true, date: D2, group: G, main: "DE",
    slug: "asigurare-de-calatorie-europa",
    title: "Ai nevoie de asigurare de călătorie în UE?",
    desc: "Ai nevoie de asigurare de călătorie în Germania sau în alte țări UE? Ce acoperă, cum se completează cu cardul european și ce să verifici în contract.",
    h1: "Ai nevoie de asigurare de călătorie în UE?",
    cardText: "Când e utilă, ce acoperă în plus față de cardul european și ce verifici.",
    ...IMG.hero,
    imgAlt: "Microbuze BRO Transport pentru călătorii în Europa",
    related: ["card-european-sanatate-cest", "acte-necesare-calatorie-germania"],
    intro: `
<p><strong>Asigurarea de călătorie nu e obligatorie pentru a călători în țările UE, dar e utilă, pentru că acoperă lucruri pe care cardul european de sănătate nu le acoperă.</strong> Printre ele sunt transportul medical înapoi în România, serviciile medicale private și unele cheltuieli neprevăzute.</p>
<p>Dacă alegi să îți faci una, citește cu atenție ce acoperă și ce nu. Mai jos ai explicate diferențele și ce să verifici.</p>`,
    body: `
<h2>Cardul european și asigurarea de călătorie: diferențe</h2>
<div class="tbl"><table>
<thead><tr><th>Situație</th><th>Card european</th><th>Asigurare de călătorie (de obicei)</th></tr></thead>
<tbody>
<tr><td>Urgență medicală în sistemul public</td><td>Da</td><td>Da</td></tr>
<tr><td>Clinică sau medic privat</td><td>Nu</td><td>Da, în limita poliței</td></tr>
<tr><td>Transport medical înapoi în România</td><td>Nu</td><td>Da, în multe polițe</td></tr>
<tr><td>Contribuțiile pe care le plătesc și localnicii</td><td>Nu</td><td>Uneori</td></tr>
<tr><td>Bagaje pierdute, anularea călătoriei</td><td>Nu</td><td>Doar dacă polița le include</td></tr>
</tbody>
</table></div>
<p>Pe scurt, cele două se completează. Cardul european e gratuit și acoperă urgențele în sistemul public. Asigurarea acoperă ce rămâne în afara cardului, în funcție de ce cumperi. Despre card găsești mai multe în ghidul despre <a href="/blog/card-european-sanatate-cest">cardul european de sănătate</a>.</p>

<h2>Când e bine să îți faci asigurare</h2>
<ul>
<li>dacă ai o boală cronică și vrei să fii sigur că ești acoperit;</li>
<li>dacă pleci cu copii mici;</li>
<li>dacă ești în vârstă;</li>
<li>dacă stai mai mult timp, dar nu ești încă asigurat în țara respectivă;</li>
<li>dacă vrei să eviți orice cheltuială mare în caz de accident.</li>
</ul>

<h2>Ce trebuie să verifici în poliță</h2>
<h3>Suma asigurată</h3>
<p>Este suma maximă pe care o plătește asigurătorul. Spitalizarea în Germania sau în Olanda poate fi foarte scumpă, deci o sumă prea mică nu te ajută prea mult.</p>
<h3>Excluderile</h3>
<p>Fiecare poliță are o listă de situații pe care nu le acoperă. Citește-o cu atenție. Des întâlnite sunt bolile preexistente, sporturile periculoase și accidentele sub influența alcoolului.</p>
<h3>Franșiza</h3>
<p>Unele polițe au o franșiză, adică o sumă pe care o plătești tu în fiecare caz, înainte ca asigurătorul să plătească restul.</p>
<h3>Repatrierea</h3>
<p>Verifică dacă polița acoperă transportul medical înapoi în România și în ce condiții.</p>
<h3>Asistența telefonică</h3>
<p>Polițele bune au un număr de asistență, disponibil non-stop, la care suni dacă ai o problemă. Notează-l în telefon înainte de plecare.</p>
<h3>Perioada</h3>
<p>Asigurarea trebuie să acopere toată perioada călătoriei, de la plecare până la întoarcere. Pentru cei care călătoresc des, unele firme oferă polițe anuale.</p>

<h2>Ce faci dacă ai nevoie de asigurare pe drum</h2>
<ol>
<li>sună la numărul de asistență al asigurătorului, dacă situația o permite;</li>
<li>în urgență, sună la 112;</li>
<li>păstrează toate documentele: facturi, rapoarte medicale, rețete;</li>
<li>după întoarcere, depui documentele la asigurător pentru decontare, dacă ai plătit ceva.</li>
</ol>

<h2>Dacă mergi la muncă</h2>
<p>Dacă începi să lucrezi în altă țară UE, de regulă devii asigurat în sistemul de sănătate al țării respective prin contractul de muncă. În Germania, de exemplu, asigurarea medicală e obligatorie. Detalii în ghidul despre <a href="/blog/asigurare-medicala-germania-krankenkasse">Krankenkasse</a>. Până începi munca și ești asigurat acolo, cardul european și o asigurare de călătorie te pot acoperi pentru perioada de ședere temporară.</p>

<h2>Unde îți faci asigurarea</h2>
<p>Asigurările de călătorie se vând de firme de asigurări, de brokeri sau, uneori, împreună cu cardul bancar. Unele carduri bancare includ asigurare de călătorie, dar cu condiții. Verifică la banca ta. Compară mai multe oferte și citește condițiile, nu doar prețul.</p>
<p>Lista firmelor de asigurări autorizate în România e pe site-ul ${SRC("https://asfromania.ro", "Autorității de Supraveghere Financiară (ASF)")}.</p>

<h2>Asigurarea pe drumul cu microbuzul</h2>
<p>Asigurarea de călătorie ține de tine, ca pasager. Transportul de persoane are propriile obligații legale, iar mașinile noastre sunt verificate înainte de fiecare cursă, cu anvelope potrivite sezonului.</p>
<!-- TODO: asigurările BRO pentru pasageri (dacă există o asigurare specifică) – de confirmat de firmă. -->

<h2>Checklist sănătate înainte de plecare</h2>
<ul>
<li>cardul european de sănătate, valabil;</li>
<li>asigurarea de călătorie, dacă alegi să ai una, cu numărul de asistență notat;</li>
<li>medicamentele și rețetele;</li>
<li>numărul 112 și datele ambasadei sau consulatului român.</li>
</ul>
<p>Restul actelor pentru drum sunt în ghidul despre <a href="/blog/acte-necesare-calatorie-germania">actele necesare pentru Germania</a>. Pentru rezervare, vezi pagina de <a href="/transport-persoane-romania-germania">transport persoane România – Germania</a>.</p>`,
    faq: [
      ["E obligatorie asigurarea de călătorie în UE?", "Nu. Nu e obligatorie, dar e utilă, pentru că acoperă lucruri pe care cardul european nu le acoperă."],
      ["Ce acoperă asigurarea și nu acoperă cardul european?", "De obicei serviciile medicale private, transportul medical înapoi în România și alte cheltuieli prevăzute în poliță."],
      ["Am nevoie de amândouă?", "Ideal, da. Cardul european e gratuit și acoperă urgențele în sistemul public, iar asigurarea acoperă restul."],
      ["Ce verific când îmi fac asigurarea?", "Suma asigurată, excluderile, franșiza, repatrierea, numărul de asistență și perioada acoperită."],
      ["Dacă lucrez în Germania mai am nevoie de asigurare de călătorie?", "Dacă ești angajat acolo, devii asigurat în sistemul german. Până atunci, cardul european și o asigurare de călătorie te pot acoperi."],
    ],
  },
];
