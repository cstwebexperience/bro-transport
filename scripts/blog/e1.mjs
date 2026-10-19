// Valul 3 – Grup E (46–49): mașini pe platformă. Procedurile oficiale se rezumă general și trimit la RAR / DRPCIV pentru lista actuală.
import { IMG, D2, SRC } from "./_img.mjs";
const G = "Mașini pe platformă";

export default [
  {
    n: 46, published: true, date: D2, group: G, main: "AUTO",
    slug: "transport-auto-platforma-vs-condus",
    title: "Pe platformă sau condusă: cum aduci mașina mai sigur",
    desc: "Cum aduci mașina din străinătate: pe platformă sau condusă de tine? Comparăm costurile reale, riscurile, actele, uzura și timpul pierdut pe drum.",
    h1: "Pe platformă sau condusă: cum aduci mașina mai sigur",
    cardText: "Costuri reale, riscuri, acte și uzură: cele două variante, față în față.",
    ...IMG.platforma,
    imgAlt: "Platformă auto BRO Transport pentru mașini aduse din Germania",
    related: ["cum-aduci-masina-din-germania", "numere-de-export-germania"],
    intro: `
<p><strong>Pe platformă, mașina ajunge acasă fără kilometri în plus, fără uzură și fără să ai nevoie de numere de export sau de asigurare de drum; condusă de tine, eviți costul transportului, dar plătești drumul, combustibilul, numerele provizorii și riști o defecțiune pe drum.</strong> Care variantă e mai bună depinde de mașină, de starea ei și de cât timp ai.</p>
<p>Mai jos găsești comparația completă, ca să alegi ce ți se potrivește.</p>`,
    body: `
<h2>Cele două variante, pe scurt</h2>
<h3>Mașina adusă pe platformă</h3>
<p>Preluăm mașina de la vânzător, din Germania sau din altă țară, o urcăm pe platformă, o fixăm bine și o aducem la adresa ta din România. Transportul se face cu CMR, documentul care însoțește marfa în transportul internațional. Tu nu trebuie să călătorești.</p>
<h3>Mașina condusă de tine</h3>
<p>Mergi în Germania, de obicei cu avionul, cu autocarul sau cu microbuzul, plătești mașina, faci formalitățile pentru numere provizorii și asigurare, apoi conduci până acasă, adică în jur de 1.200–1.800 km, în funcție de unde ai cumpărat-o.</p>

<h2>Comparația, punct cu punct</h2>
<div class="tbl"><table>
<thead><tr><th>Criteriu</th><th>Pe platformă</th><th>Condusă de tine</th></tr></thead>
<tbody>
<tr><td>Drumul tău până în Germania</td><td>Nu e nevoie</td><td>Bilet de avion, autocar sau microbuz</td></tr>
<tr><td>Numere provizorii și asigurare de drum</td><td>Nu e nevoie</td><td>Trebuie făcute și plătite</td></tr>
<tr><td>Combustibil și taxe de drum</td><td>Incluse în transport</td><td>Le plătești tu</td></tr>
<tr><td>Kilometri pe bord</td><td>Zero în plus</td><td>Câteva sute sau peste o mie</td></tr>
<tr><td>Uzură</td><td>Niciuna</td><td>Anvelope, frâne, motor</td></tr>
<tr><td>Risc de defecțiune pe drum</td><td>Nu</td><td>Da, iar tractarea în străinătate e scumpă</td></tr>
<tr><td>Timpul tău</td><td>Nu pierzi zile</td><td>Două-trei zile, uneori mai mult</td></tr>
<tr><td>Mașini care nu pornesc</td><td>Se pot transporta</td><td>Imposibil</td></tr>
</tbody>
</table></div>

<h2>Costurile reale ale variantei „o aduc eu”</h2>
<p>Mulți aleg să conducă mașina acasă pentru că pare mai ieftin. Ca să compari corect, adună tot:</p>
<ol>
<li>biletul tău până în Germania;</li>
<li>cazarea, dacă stai o noapte;</li>
<li>numerele provizorii și asigurarea pentru drum;</li>
<li>combustibilul pentru tot drumul;</li>
<li>vinieta în Austria și în Ungaria;</li>
<li>mâncarea pe drum;</li>
<li>zilele libere luate de la muncă;</li>
<li>riscul unei defecțiuni pe drum: tractare, piese, service în străinătate.</li>
</ol>
<p>Abia după ce aduni toate acestea poți compara cu prețul transportului pe platformă. Prețul nostru îl afli la telefon. Detalii despre ce îl influențează găsești în articolul despre <a href="/blog/cat-costa-transport-auto-platforma">cât costă transportul auto pe platformă</a>.</p>

<h2>Riscurile mașinii conduse</h2>
<h3>Defecțiuni ascunse</h3>
<p>O mașină second-hand poate avea probleme care nu se văd la un test scurt: un turbo obosit, o cutie de viteze care cedează la cald, un sistem de răcire slab. Pe 1.500 km de autostradă, astfel de probleme ies la iveală. O tractare în Austria sau în Germania costă mult, iar reparația acolo și mai mult.</p>
<h3>Oboseala</h3>
<p>Un drum atât de lung, singur la volan, după o zi de formalități, e obositor și periculos. Mulți conduc noaptea ca să ajungă mai repede.</p>
<h3>Actele</h3>
<p>Pentru a conduce mașina din Germania până în România, ai nevoie de numere provizorii valabile și de asigurare. Dacă ceva nu e în regulă cu ele, poți avea probleme la un control. Despre numerele de export găsești detalii în ghidul despre <a href="/blog/numere-de-export-germania">numerele de export (Ausfuhrkennzeichen)</a>.</p>

<h2>Când merită platforma</h2>
<ul>
<li>pentru mașinile scumpe sau aproape noi, unde kilometrii și uzura contează la valoare;</li>
<li>pentru mașinile care nu pornesc, au avarii sau nu au ITP valabil;</li>
<li>când nu ai timp să mergi tu în Germania;</li>
<li>când mașina e departe, de exemplu în nordul Germaniei sau în Olanda;</li>
<li>când vrei să eviți formalitățile cu numerele provizorii;</li>
<li>când cumperi mai multe mașini odată.</li>
</ul>

<h2>Când poate merita să o conduci</h2>
<ul>
<li>dacă ești oricum în Germania, de exemplu lucrezi acolo;</li>
<li>dacă mașina e ieftină, verificată și în stare foarte bună;</li>
<li>dacă îți place drumul și ai timp;</li>
<li>dacă ai deja rezolvate numerele și asigurarea.</li>
</ul>

<h2>Cum funcționează transportul cu noi</h2>
<ol>
<li>ne suni și ne spui ce mașină e și unde se află;</li>
<li>stabilim prețul și ziua preluării;</li>
<li>preluăm mașina de la vânzător, împreună cu actele ei;</li>
<li>o urcăm pe platformă, o fixăm și completăm CMR-ul;</li>
<li>o aducem la adresa ta din România.</li>
</ol>
<p>Pașii completi, de la cumpărare la înmatriculare, sunt în ghidul despre <a href="/blog/cum-aduci-masina-din-germania">cum aduci o mașină din Germania</a>.</p>

<h2>Adu mașina în siguranță</h2>
<p>Preluăm mașina de la vânzător și o aducem pe platformă, cu CMR. Detalii pe pagina de <a href="/transport-auto-platforma">transport auto pe platformă</a>.</p>`,
    faq: [
      ["E mai ieftin să aduc mașina condusă de mine?", "Nu neapărat. Adună biletul tău, numerele provizorii, asigurarea, combustibilul, vinietele, zilele libere și riscul unei defecțiuni, apoi compară."],
      ["Am nevoie de numere provizorii dacă vine pe platformă?", "Nu. Mașina nu circulă pe drum, ci e transportată pe platformă."],
      ["Puteți aduce o mașină care nu pornește?", "Da, spune-ne la rezervare starea mașinii, ca să ne pregătim."],
      ["Ce act însoțește mașina pe platformă?", "CMR-ul, documentul de transport internațional al mărfii."],
      ["Trebuie să merg în Germania?", "Nu neapărat. Preluăm mașina de la vânzător, după ce ai stabilit cumpărarea și plata."],
    ],
  },

  {
    n: 47, published: true, date: D2, group: G, main: "AUTO",
    slug: "acte-masina-cumparata-din-germania",
    title: "Acte necesare pentru o mașină cumpărată din Germania",
    desc: "Ce acte îți trebuie pentru o mașină cumpărată din Germania: contractul, talonul mare și mic, COC, factura și actele cerute la RAR și la înmatriculare.",
    h1: "Acte necesare pentru o mașină cumpărată din Germania",
    cardText: "Ce primești de la vânzător și ce îți mai trebuie la RAR și la înmatriculare.",
    ...IMG.platforma,
    imgAlt: "Mașină adusă din Germania pe platforma BRO Transport",
    related: ["inmatriculare-masina-adusa-din-germania", "rar-omologare-masina-import"],
    intro: `
<p><strong>Pentru o mașină cumpărată din Germania ai nevoie, de la vânzător, de contractul de vânzare-cumpărare sau factura, de certificatul de înmatriculare partea I și partea a II-a (talonul mic și cel mare) și, ideal, de certificatul de conformitate (COC).</strong> Cu ele mergi apoi la RAR și la serviciul de înmatriculări din România.</p>
<p>Fără actele corecte de la vânzător, înmatricularea în România devine complicată sau imposibilă. De aceea, verifică-le înainte să plătești.</p>`,
    body: `
<h2>Actele pe care le primești de la vânzător</h2>
<div class="tbl"><table>
<thead><tr><th>Act</th><th>Denumirea în Germania</th><th>De ce contează</th></tr></thead>
<tbody>
<tr><td>Contract de vânzare-cumpărare sau factură</td><td>Kaufvertrag / Rechnung</td><td>Dovedește că ești proprietarul.</td></tr>
<tr><td>Certificat de înmatriculare partea I (talonul mic)</td><td>Zulassungsbescheinigung Teil I (Fahrzeugschein)</td><td>Cuprinde datele tehnice și ale înmatriculării.</td></tr>
<tr><td>Certificat de înmatriculare partea a II-a (talonul mare)</td><td>Zulassungsbescheinigung Teil II (Fahrzeugbrief)</td><td>E actul de proprietate al mașinii. Fără el nu poți înmatricula.</td></tr>
<tr><td>Certificat de conformitate</td><td>COC (Certificate of Conformity)</td><td>Ușurează mult procedura la RAR.</td></tr>
<tr><td>Dovada radierii, dacă e cazul</td><td>Abmeldebescheinigung</td><td>Arată că mașina a fost scoasă din evidența germană.</td></tr>
<tr><td>Cartea de service și raportul de inspecție</td><td>Serviceheft / HU-Bericht</td><td>Nu sunt obligatorii, dar arată istoricul mașinii.</td></tr>
</tbody>
</table></div>

<h2>Talonul mare: cel mai important act</h2>
<p>Partea a II-a a certificatului de înmatriculare (talonul mare, „Fahrzeugbrief”) e dovada proprietății. Verifică:</p>
<ul>
<li>că e originalul, nu o copie;</li>
<li>că numele de pe el e al vânzătorului sau că vânzătorul are dreptul să vândă mașina (de exemplu, un dealer);</li>
<li>că seria de caroserie (VIN) e aceeași cu cea de pe mașină;</li>
<li>că nu există mențiuni despre leasing sau bancă.</li>
</ul>
<p>Dacă mașina a fost cumpărată în leasing sau cu credit, talonul mare poate fi la bancă. În acest caz, nu plăti până nu ai talonul în mână.</p>

<h2>Contractul de vânzare-cumpărare</h2>
<p>Dacă cumperi de la o persoană fizică, se face un contract de vânzare-cumpărare. Multe asociații auto germane, de exemplu ADAC, oferă modele de contract. Ce trebuie să cuprindă:</p>
<ul>
<li>datele vânzătorului și ale cumpărătorului;</li>
<li>datele mașinii: marca, modelul, seria de caroserie (VIN), kilometrajul;</li>
<li>prețul și modul de plată;</li>
<li>data și ora vânzării;</li>
<li>starea mașinii și eventualele defecte cunoscute;</li>
<li>semnăturile ambelor părți.</li>
</ul>
<p>Dacă cumperi de la un dealer, primești o factură. Contractul sau factura vor trebui traduse în limba română de un traducător autorizat, pentru înmatriculare.</p>

<h2>Actele de care ai nevoie în România</h2>
<p>După ce mașina ajunge acasă, urmează două etape: RAR și înmatricularea. Lista de acte se poate schimba, așa că verific-o mereu pe site-urile oficiale.</p>
<h3>La RAR</h3>
<ul>
<li>actele mașinii de la vânzător;</li>
<li>COC-ul, dacă îl ai;</li>
<li>actul tău de identitate;</li>
<li>mașina, pentru verificare.</li>
</ul>
<p>RAR eliberează, după verificare, certificatul de autenticitate și cartea de identitate a vehiculului (CIV). Detalii pe ${SRC("https://www.rarom.ro", "rarom.ro")} și în ghidul despre <a href="/blog/rar-omologare-masina-import">omologarea RAR</a>.</p>
<h3>La înmatriculare</h3>
<ul>
<li>cererea de înmatriculare;</li>
<li>actul de identitate;</li>
<li>dovada proprietății, tradusă;</li>
<li>CIV-ul și certificatul de autenticitate de la RAR;</li>
<li>asigurarea RCA;</li>
<li>dovada plății taxelor;</li>
<li>alte documente cerute de serviciul de înmatriculări.</li>
</ul>
<p>Lista oficială e pe ${SRC("https://www.drpciv.ro", "drpciv.ro")} și pe site-ul instituției prefectului din județul tău. Pașii sunt explicați în ghidul despre <a href="/blog/inmatriculare-masina-adusa-din-germania">înmatricularea mașinii aduse din Germania</a>.</p>
<!-- TODO: lista exactă de acte la SPCRPCIV și taxele actuale – de verificat pe drpciv.ro înainte de fiecare actualizare. -->

<h2>TVA-ul la mașinile noi</h2>
<p>Pentru mașinile considerate „noi” după regulile UE (de obicei, cele cu puțini kilometri sau cumpărate la scurt timp după prima înmatriculare), TVA-ul se plătește în țara în care se înmatriculează. Pentru mașinile second-hand cumpărate de la persoane fizice, situația e de regulă mai simplă. Verifică la ${SRC("https://www.anaf.ro", "ANAF")} ce se aplică în cazul tău.</p>

<h2>Verifică actele înainte să plătești</h2>
<ol>
<li>cere poze clare cu talonul mare și cel mic înainte să mergi la vânzător;</li>
<li>compară seria de caroserie din acte cu cea de pe mașină;</li>
<li>întreabă dacă există COC. Dacă nu, întreabă dacă se poate obține de la producător;</li>
<li>nu plăti în avans fără să ai acte clare și fără să știi cine e vânzătorul.</li>
</ol>
<p>Cum verifici mașina în sine afli din ghidul despre <a href="/blog/verificare-masina-second-hand-germania">verificarea unei mașini second-hand</a>.</p>

<h2>Actele pe drumul de la vânzător până acasă</h2>
<p>Când aducem mașina pe platformă, actele ei călătoresc odată cu ea, iar transportul se face cu CMR. Spune-ne dinainte ce acte ți-a dat vânzătorul, ca să le preluăm corect. Detalii pe pagina de <a href="/transport-auto-platforma">transport auto pe platformă</a>.</p>`,
    faq: [
      ["Ce acte primesc de la vânzătorul din Germania?", "Contractul sau factura, talonul mic și talonul mare (Zulassungsbescheinigung Teil I și II) și, ideal, COC-ul."],
      ["Pot înmatricula mașina fără talonul mare?", "De regulă nu. Talonul mare e dovada proprietății."],
      ["Ce este COC-ul?", "Certificatul de conformitate al mașinii, emis de producător. Ușurează procedura la RAR."],
      ["Trebuie tradus contractul?", "Da, pentru înmatriculare e nevoie de o traducere autorizată în limba română."],
      ["Unde găsesc lista oficială de acte?", "Pe drpciv.ro, pe site-ul instituției prefectului din județ și pe rarom.ro."],
    ],
  },

  {
    n: 48, published: true, date: D2, group: G, main: "AUTO",
    slug: "inmatriculare-masina-adusa-din-germania",
    title: "Înmatricularea unei mașini aduse din Germania",
    desc: "Pașii pentru înmatricularea în România a unei mașini aduse din Germania: RAR, traduceri, RCA, taxe, programare la înmatriculări și numerele definitive.",
    h1: "Înmatricularea unei mașini aduse din Germania, pas cu pas",
    cardText: "De la RAR la numerele definitive: ordinea pașilor și actele de la fiecare.",
    ...IMG.platforma,
    imgAlt: "Mașină adusă pe platformă din Germania, gata de înmatriculare",
    related: ["acte-masina-cumparata-din-germania", "rar-omologare-masina-import"],
    intro: `
<p><strong>Ca să înmatriculezi în România o mașină adusă din Germania, treci prin câțiva pași: traduci actele, mergi la RAR pentru verificare și pentru cartea de identitate a vehiculului, faci asigurarea RCA, plătești taxele și te programezi la serviciul de înmatriculări.</strong> La final primești certificatul de înmatriculare și numerele definitive.</p>
<p>Procedura și actele exacte se pot schimba, așa că verifică-le mereu pe site-ul DRPCIV și al instituției prefectului din județul tău.</p>`,
    body: `
<h2>Ordinea pașilor</h2>
<ol>
<li>traducerea autorizată a actelor din Germania;</li>
<li>verificarea la RAR și obținerea CIV-ului;</li>
<li>asigurarea RCA;</li>
<li>plata taxelor;</li>
<li>programarea și depunerea dosarului la serviciul de înmatriculări;</li>
<li>primirea certificatului de înmatriculare și a numerelor.</li>
</ol>

<h2>Pasul 1: traducerea actelor</h2>
<p>Contractul de vânzare-cumpărare sau factura trebuie traduse în limba română de un traducător autorizat. Unele servicii pot cere și traducerea altor documente. Întreabă la serviciul de înmatriculări din județul tău ce trebuie tradus exact. Păstrează originalele, pentru că ți se vor cere și ele.</p>

<h2>Pasul 2: RAR</h2>
<p>La Registrul Auto Român, mașina e verificată tehnic și se confirmă datele ei. RAR eliberează:</p>
<ul>
<li><strong>certificatul de autenticitate</strong>, care confirmă identitatea mașinii;</li>
<li><strong>cartea de identitate a vehiculului (CIV)</strong>, dacă mașina nu are deja una românească;</li>
<li><strong>inspecția tehnică periodică (ITP)</strong>, dacă e cazul.</li>
</ul>
<p>Programarea se face de obicei online, pe ${SRC("https://www.rarom.ro", "rarom.ro")}. COC-ul mașinii ușurează mult procedura. Detalii în ghidul despre <a href="/blog/rar-omologare-masina-import">omologarea RAR</a>.</p>

<h2>Pasul 3: asigurarea RCA</h2>
<p>Înainte de înmatriculare ai nevoie de asigurare RCA pe numele tău, pentru mașina respectivă. Se face la orice asigurător autorizat, pe baza seriei de caroserie și a datelor din CIV. Fără RCA nu poți înmatricula mașina.</p>

<h2>Pasul 4: taxele</h2>
<p>La înmatriculare se plătesc câteva taxe, de exemplu pentru certificatul de înmatriculare și pentru plăcuțe. Valorile și modul de plată sunt pe site-ul ${SRC("https://www.drpciv.ro", "DRPCIV")} și pe site-ul instituției prefectului.</p>
<p>Separat, după înmatriculare, mașina trebuie declarată la direcția de taxe și impozite locale de la domiciliul tău, unde se stabilește impozitul anual pe mașină. Termenul de declarare îl afli de la primăria ta.</p>
<!-- TODO: taxele de înmatriculare actuale și termenul de declarare la taxe locale – de verificat la sursă. -->

<h2>Pasul 5: dosarul la înmatriculări</h2>
<p>Te programezi la serviciul public comunitar regim permise de conducere și înmatriculare a vehiculelor din județul tău. Programarea se face de obicei online. Dosarul conține, în general:</p>
<div class="tbl"><table>
<thead><tr><th>Document</th><th>Observații</th></tr></thead>
<tbody>
<tr><td>Cererea de înmatriculare</td><td>Formularul tip, completat.</td></tr>
<tr><td>Actul de identitate</td><td>Original.</td></tr>
<tr><td>Dovada proprietății</td><td>Contract sau factură, cu traducerea autorizată.</td></tr>
<tr><td>CIV și certificatul de autenticitate</td><td>De la RAR.</td></tr>
<tr><td>Actele de înmatriculare din Germania</td><td>Talonul mare și cel mic, după caz.</td></tr>
<tr><td>Asigurarea RCA</td><td>Valabilă.</td></tr>
<tr><td>Dovada plății taxelor</td><td>Chitanțe sau dovezi de plată.</td></tr>
</tbody>
</table></div>
<p>Lista exactă, actualizată, e pe ${SRC("https://www.drpciv.ro", "drpciv.ro")} și pe site-ul instituției prefectului din județul tău. Verific-o înainte de programare.</p>

<h2>Pasul 6: numerele definitive</h2>
<p>După verificarea dosarului primești certificatul de înmatriculare și plăcuțele cu numărul definitiv. Poți alege și un număr preferențial, contra unei taxe, dacă e disponibil. Din acest moment, mașina poate circula legal în România pe numele tău.</p>

<h2>Între sosire și înmatriculare</h2>
<p>Mașina adusă pe platformă ajunge acasă fără numere valabile pentru circulație. Ca să o duci la RAR sau la alte verificări înainte de înmatricularea definitivă, poate fi nevoie de o autorizație provizorie de circulație. Întreabă la serviciul de înmatriculări ce variantă se aplică în cazul tău.</p>

<h2>Greșeli frecvente</h2>
<ul>
<li>lipsa talonului mare original de la vânzător;</li>
<li>seria de caroserie din acte diferită de cea de pe mașină;</li>
<li>traducerea făcută de un traducător neautorizat;</li>
<li>RCA făcut pe alt nume sau cu date greșite;</li>
<li>programarea la înmatriculări făcută înainte de a avea CIV-ul de la RAR.</li>
</ul>

<h2>Cât durează tot procesul</h2>
<p>Durata depinde mai ales de programările la RAR și la înmatriculări, care diferă de la un județ la altul. Cu actele pregătite și cu programările făcute din timp, totul poate merge repede. Fără COC sau cu acte incomplete, durează mai mult.</p>

<h2>Începe cu actele corecte</h2>
<p>Cel mai important pas se face înainte de cumpărare: să ai toate actele de la vânzător. Lista completă e în ghidul despre <a href="/blog/acte-masina-cumparata-din-germania">actele necesare pentru o mașină din Germania</a>. Noi te ajutăm cu partea de transport: preluăm mașina de la vânzător și o aducem pe platformă, cu CMR. Detalii pe pagina de <a href="/transport-auto-platforma">transport auto pe platformă</a>.</p>`,
    faq: [
      ["Care e primul pas pentru înmatriculare?", "Traducerea autorizată a actelor din Germania, apoi verificarea la RAR."],
      ["Ce eliberează RAR?", "Certificatul de autenticitate, cartea de identitate a vehiculului (CIV) și, dacă e cazul, ITP-ul."],
      ["Am nevoie de RCA înainte de înmatriculare?", "Da. Fără asigurare RCA valabilă nu poți înmatricula mașina."],
      ["Unde găsesc lista oficială de acte?", "Pe drpciv.ro și pe site-ul instituției prefectului din județul tău."],
      ["Trebuie să declar mașina la primărie?", "Da, după înmatriculare o declari la direcția de taxe și impozite locale de la domiciliu."],
    ],
  },

  {
    n: 49, published: true, date: D2, group: G, main: "AUTO",
    slug: "numere-de-export-germania",
    title: "Numere de export din Germania: ce sunt și când ai nevoie",
    desc: "Ce sunt numerele de export din Germania (Ausfuhrkennzeichen), cum se obțin, ce asigurare includ, cât sunt valabile și când nu mai ai nevoie de ele.",
    h1: "Numere de export (Ausfuhrkennzeichen): ce sunt și când ai nevoie",
    cardText: "Cum arată, ce îți trebuie ca să le obții și de ce pe platformă nu ai nevoie.",
    ...IMG.platforma,
    imgAlt: "Platformă auto pentru aducerea mașinilor din Germania fără numere de export",
    related: ["transport-auto-platforma-vs-condus", "cum-aduci-masina-din-germania"],
    intro: `
<p><strong>Numerele de export din Germania („Ausfuhrkennzeichen”) sunt plăcuțe provizorii care îți permit să conduci o mașină cumpărată în Germania până în altă țară, pentru o perioadă limitată.</strong> Au o bandă roșie cu data de expirare și se obțin împreună cu o asigurare valabilă pentru aceeași perioadă.</p>
<p>Dacă aduci mașina pe platformă, nu ai nevoie de ele, pentru că mașina nu circulă pe drum. Mai jos afli când îți trebuie și ce implică.</p>`,
    body: `
<h2>Cum arată numerele de export</h2>
<p>Plăcuțele de export arată ca numerele germane obișnuite, dar au în dreapta o bandă roșie, cu data până la care sunt valabile. După acea dată, mașina nu mai poate circula legal cu ele. Numerele sunt însoțite de un certificat de înmatriculare provizoriu și de asigurarea pentru perioada respectivă.</p>

<h2>Când ai nevoie de ele</h2>
<ul>
<li>când cumperi o mașină din Germania și vrei să o conduci tu până acasă;</li>
<li>când mașina a fost deja radiată din evidența germană și nu mai are numere valabile;</li>
<li>când vânzătorul nu îți lasă numerele lui, ceea ce e situația obișnuită.</li>
</ul>
<p>Dacă mașina vine pe platformă, nu ai nevoie de numere de export. Mașina e transportată ca marfă, cu CMR, nu condusă pe drum.</p>

<h2>Ce îți trebuie ca să le obții</h2>
<p>Procedura se face la biroul de înmatriculări din Germania („Zulassungsstelle”). Cerințele pot varia de la un oraș la altul, dar de obicei îți trebuie:</p>
<div class="tbl"><table>
<thead><tr><th>Document</th><th>Observații</th></tr></thead>
<tbody>
<tr><td>Actul tău de identitate</td><td>Buletin sau pașaport valabil.</td></tr>
<tr><td>Talonul mare și cel mic</td><td>Zulassungsbescheinigung Teil I și Teil II.</td></tr>
<tr><td>Dovada proprietății</td><td>Contractul de vânzare-cumpărare sau factura.</td></tr>
<tr><td>Asigurarea de export</td><td>Se cumpără de la un asigurător, pentru perioada de valabilitate a numerelor.</td></tr>
<tr><td>Inspecția tehnică valabilă</td><td>Dacă mașina nu are inspecție valabilă, poate fi nevoie de una nouă.</td></tr>
</tbody>
</table></div>
<p>Informații oficiale despre înmatriculare găsești pe site-ul orașului german unde se face procedura. Multe firme din Germania oferă și servicii de numere de export „la cheie”, contra cost.</p>
<!-- TODO: perioadele de valabilitate și cerințele exacte pentru Ausfuhrkennzeichen – de verificat la Zulassungsstelle. -->

<h2>Cât costă</h2>
<p>Costul total cuprinde taxele de la biroul de înmatriculări, plăcuțele, asigurarea de export și, eventual, inspecția tehnică. Asigurarea e de obicei partea cea mai mare și depinde de mașină și de perioadă. Dacă folosești un intermediar, se adaugă și costul serviciului lui. Prețurile diferă mult, deci cere oferte înainte.</p>

<h2>Ce să verifici înainte să pleci la drum</h2>
<ul>
<li>data de expirare de pe banda roșie, ca să ai timp să ajungi acasă, chiar cu întârzieri;</li>
<li>că asigurarea e valabilă în toate țările prin care treci: Germania, Austria, Ungaria, România;</li>
<li>că ai la tine toate actele în original;</li>
<li>că mașina e în stare bună pentru un drum de peste o mie de kilometri;</li>
<li>vinietele pentru Austria și Ungaria.</li>
</ul>

<h2>Numere de export sau platformă?</h2>
<div class="tbl"><table>
<thead><tr><th></th><th>Numere de export</th><th>Platformă</th></tr></thead>
<tbody>
<tr><td>Trebuie să mergi în Germania</td><td>Da</td><td>Nu neapărat</td></tr>
<tr><td>Formalități la Zulassungsstelle</td><td>Da</td><td>Nu</td></tr>
<tr><td>Asigurare de export</td><td>Da</td><td>Nu</td></tr>
<tr><td>Kilometri și uzură</td><td>Da</td><td>Nu</td></tr>
<tr><td>Merge pentru mașini care nu pornesc</td><td>Nu</td><td>Da</td></tr>
</tbody>
</table></div>
<p>Comparația completă e în articolul despre <a href="/blog/transport-auto-platforma-vs-condus">mașina pe platformă sau condusă</a>.</p>

<h2>Ce se întâmplă cu numerele după ce ajungi</h2>
<p>După ce ajungi în România, numerele de export nu mai sunt necesare. Le păstrezi până la înmatricularea definitivă, pentru că pot fi utile ca dovadă la dosar. Pașii pentru înmatriculare sunt în ghidul despre <a href="/blog/inmatriculare-masina-adusa-din-germania">înmatricularea mașinii aduse din Germania</a>.</p>

<h2>Exemplu: două variante pentru aceeași mașină</h2>
<p>Radu cumpără un Volkswagen Passat din Köln. Prima variantă: zboară în Germania, merge la vânzător, apoi la biroul de înmatriculări, cumpără asigurarea de export, face numerele și conduce aproape 1.700 km până acasă. A doua variantă: plătește mașina, primește actele, iar noi preluăm mașina de la vânzător și o aducem pe platformă la el acasă. În a doua variantă, Radu nu pierde zile de concediu și mașina ajunge fără kilometri în plus.</p>

<h2>Adu mașina fără numere de export</h2>
<p>Preluăm mașina de la vânzător și o aducem pe platformă, cu CMR, la adresa ta din România. Pașii completi sunt în ghidul despre <a href="/blog/cum-aduci-masina-din-germania">cum aduci o mașină din Germania</a>. Detalii pe pagina de <a href="/transport-auto-platforma">transport auto pe platformă</a>.</p>`,
    faq: [
      ["Ce sunt numerele de export din Germania?", "Plăcuțe provizorii, cu bandă roșie și dată de expirare, cu care poți conduce o mașină cumpărată în Germania până în altă țară."],
      ["Am nevoie de numere de export dacă aduc mașina pe platformă?", "Nu. Mașina e transportată pe platformă, nu condusă pe drum."],
      ["Unde se fac numerele de export?", "La biroul de înmatriculări din Germania (Zulassungsstelle) sau prin firme care oferă acest serviciu."],
      ["Ce acte îmi trebuie?", "Actul de identitate, talonul mare și cel mic, dovada proprietății, asigurarea de export și, uneori, inspecția tehnică."],
      ["Ce fac cu numerele după ce ajung acasă?", "Le păstrezi până la înmatricularea definitivă în România."],
    ],
  },
];
