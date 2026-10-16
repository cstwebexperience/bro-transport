// Valul 1 – 35 (colete), 45 și 53 (auto). Fapte oficiale: formulate general + link la sursă + TODO de verificat.
const D = "2026-10-16";

export default [
  {
    n: 35, published: true, date: D, group: "Colete", main: "COL",
    slug: "cum-trimiti-colet-in-germania",
    title: "Cum trimiți un colet în Germania: ghid complet",
    desc: "Cum trimiți un colet din România în Germania: ce poți pune în el, cum îl ambalezi, cum se ridică de acasă și se predă în mână. Ghid pas cu pas.",
    h1: "Cum trimiți un colet în Germania: ghid complet",
    cardText: "Ce pui în colet, cum îl ambalezi și cum ajunge din mâna ta în mâna destinatarului.",
    img: "/img/portbagaj.webp", imgW: 900, imgH: 678,
    imgAlt: "Spațiul pentru colete din microbuzul BRO Transport, pe ruta spre Germania",
    related: ["transport-de-la-adresa-la-adresa-avantaje", "transport-persoane-zilnic-germania"],
    intro: `
<p><strong>Ca să trimiți un colet în Germania cu BRO Transport, suni sau scrii pe WhatsApp, afli prețul, iar noi ridicăm coletul de la adresa ta și îl predăm în mâna destinatarului, la adresa lui din Germania.</strong> Nu trebuie să-l duci la vreun sediu și nu trece prin depozite intermediare.</p>
<p>Pentru că România și Germania sunt amândouă în Uniunea Europeană, un colet obișnuit cu lucruri personale nu trece prin vamă. Mai jos găsești ce poți trimite, cum îl ambalezi și ce să pregătești.</p>`,
    body: `
<h2>Pașii, de la tine până la destinatar</h2>
<ol>
<li><strong>Ne contactezi</strong> la 0790 752 888 sau pe WhatsApp și ne spui ce trimiți, de unde și până unde.</li>
<li><strong>Afli prețul</strong> înainte de ridicare.</li>
<li><strong>Stabilim ziua</strong> în care trecem să ridicăm coletul.</li>
<li><strong>Ridicăm coletul</strong> de la adresa ta.</li>
<li><strong>Îl predăm în mână</strong> destinatarului, la adresa lui din Germania.</li>
</ol>
<p>Avem plecări zilnice pe ruta spre Germania, în ambele sensuri, așa că ziua de ridicare o putem potrivi destul de ușor.</p>

<h2>Ce se trimite cel mai des</h2>
<ul>
<li><strong>haine și încălțăminte</strong>, de sezon sau pentru cineva care s-a mutat;</li>
<li><strong>mâncare de acasă:</strong> conserve, dulcețuri, produse bine ambalate;</li>
<li><strong>cadouri</strong> de ziua cuiva sau de sărbători;</li>
<li><strong>acte și documente</strong> care trebuie să ajungă sigur;</li>
<li>obiecte personale și lucruri mici pentru casă.</li>
</ul>

<h2>Ce nu ai voie să trimiți</h2>
<p>Nu transportăm bunuri interzise de lege. În general, nu se trimit: substanțe periculoase sau inflamabile, arme și muniție, droguri, bani în numerar ca pachet, obiecte furate sau contrafăcute. Alcoolul și tutunul au reguli speciale între țări. Dacă vrei să trimiți așa ceva, întreabă-ne înainte.</p>
<!-- TODO: lista completă de obiecte interzise / acceptate la BRO, limite de greutate și valoare – de confirmat de firmă. -->
<p>Dacă nu ești sigur de ceva, întreabă-ne la telefon înainte de ridicare. E mai simplu decât să desfaci coletul la ușă.</p>

<h2>Vamă? Nu, în interiorul Uniunii Europene</h2>
<p>Pentru un colet cu lucruri personale trimis din România în Germania nu se aplică formalități vamale, pentru că ambele țări sunt în piața unică a Uniunii Europene. Regulile speciale privesc anumite categorii de produse, cum ar fi alcoolul, tutunul sau unele produse alimentare de origine animală. Pentru detalii oficiale, vezi pagina Comisiei Europene despre <a href="https://europa.eu/youreurope/citizens/travel/carry/index_ro.htm" target="_blank" rel="noopener nofollow">ce poți transporta între țările UE</a>.</p>

<h2>Cum ambalezi coletul ca să ajungă întreg</h2>
<div class="tbl"><table>
<thead><tr><th>Ce trimiți</th><th>Cum îl ambalezi</th></tr></thead>
<tbody>
<tr><td>Haine</td><td>Saci sau cutii închise bine. Hainele pot proteja și alte lucruri.</td></tr>
<tr><td>Borcane și sticle</td><td>Capac strâns, pungă închisă, învelite în haine sau hârtie, puse pe verticală</td></tr>
<tr><td>Conserve</td><td>Pe fundul cutiei, ca să nu strivească restul</td></tr>
<tr><td>Obiecte fragile</td><td>Folie cu bule, fără goluri în cutie, cu „Fragil” scris pe ea</td></tr>
<tr><td>Acte</td><td>Plic sau folie separată, sus în colet, ca să nu se ude sau să se îndoaie</td></tr>
</tbody>
</table></div>
<p>Regula de bază: umple golurile. Un colet în care lucrurile nu se mișcă ajunge mult mai bine decât unul pe jumătate gol.</p>

<h2>Cum scrii datele pe colet</h2>
<ul>
<li><strong>numele destinatarului</strong>, exact cum apare la ușă sau pe cutia poștală;</li>
<li><strong>adresa completă</strong> din Germania, cu cod poștal;</li>
<li><strong>telefonul destinatarului</strong>, ca să-l putem anunța;</li>
<li>numele și telefonul tău, ca expeditor.</li>
</ul>
<p>În Germania, numele de pe sonerie e foarte important la predare. Dacă destinatarul locuiește la altcineva, scrie și numele de pe ușă.</p>

<h2>Ce să ne spui la telefon</h2>
<ul>
<li>adresa de ridicare din România și adresa de livrare din Germania;</li>
<li>ce conține coletul și cam cât de mare și de greu e;</li>
<li>când ai nevoie să ajungă (de exemplu, înainte de o sărbătoare);</li>
<li>datele destinatarului.</li>
</ul>
<!-- TODO: cum se calculează prețul coletelor la BRO (pe colet / pe kg / pe volum). -->

<h2>De ce microbuz și nu curier clasic</h2>
<p>La un curier mare, coletul trece prin mai multe depozite și sortări. La noi îl ridicăm personal și îl predăm personal, fără depozite intermediare. Știi tot timpul cu cine vorbești. Pentru mâncare de acasă, cadouri sau acte, asta contează.</p>

<h2>Colete și din Germania spre România</h2>
<p>Mergem în ambele sensuri, așa că și cei din Germania pot trimite acasă cadouri, haine sau acte. Ridicăm coletul de la adresa din Germania și îl predăm familiei din România.</p>
<p>Vezi toate detaliile pe pagina de <a href="/transport-colete-romania-europa">transport colete România – Europa</a>. Dacă vrei să mergi și tu, vezi <a href="/blog/transport-persoane-zilnic-germania">cursele zilnice spre Germania</a>.</p>`,
    faq: [
      ["Trebuie să duc coletul la un sediu?", "Nu. Ridicăm coletul de la adresa ta și îl predăm în mână destinatarului din Germania."],
      ["Trece coletul prin vamă?", "Pentru lucruri personale trimise între România și Germania nu există formalități vamale, pentru că ambele țări sunt în UE. Alcoolul, tutunul și unele alimente au reguli speciale."],
      ["Pot trimite mâncare gătită?", "Produsele bine ambalate, conservele și borcanele închise se pot trimite. Întreabă-ne înainte pentru ce nu ești sigur."],
      ["Cât durează până ajunge coletul?", "Depinde de ziua ridicării și de adresa din Germania. Avem plecări zilnice. Îți spunem estimarea la telefon."],
      ["Cât costă un colet în Germania?", "Depinde de traseu și de colet. Afli prețul la 0790 752 888, înainte de ridicare."],
      ["Pot trimite și colete din Germania în România?", "Da, mergem în ambele sensuri."],
    ],
  },

  {
    n: 45, published: true, date: D, group: "Mașini pe platformă", main: "AUTO",
    slug: "cum-aduci-masina-din-germania",
    title: "Cum aduci o mașină din Germania: pași, acte, costuri",
    desc: "Cum aduci o mașină cumpărată din Germania în România: verificare, acte, transport condus sau pe platformă și înmatriculare. Cu link la sursele oficiale.",
    h1: "Cum aduci o mașină din Germania: pași, acte, costuri",
    cardText: "De la verificarea mașinii până la înmatricularea în România, cu sursele oficiale.",
    img: "/img/master-remorca.webp", imgW: 1024, imgH: 688,
    imgAlt: "Renault Master BRO cu platformă dublă axă pentru adus mașini din Germania",
    related: ["cat-costa-transport-auto-platforma"],
    intro: `
<p><strong>Ca să aduci o mașină din Germania, parcurgi patru etape: verifici și cumperi mașina, pregătești actele de la vânzător, o transporți în România (condusă, cu numere temporare, sau pe platformă) și o înmatriculezi aici, după verificările cerute de RAR și de serviciul de înmatriculări.</strong></p>
<p>Regulile și taxele se pot schimba, așa că pentru fiecare pas îți dăm linkul către sursa oficială. Partea de transport o putem face noi: preluăm mașina de la vânzător și o aducem pe platformă, cu acoperire CMR.</p>`,
    body: `
<h2>Etapa 1: alegi și verifici mașina</h2>
<p>Înainte să plătești, verifică:</p>
<ul>
<li><strong>istoricul de service</strong> (carnetul de service sau facturile);</li>
<li><strong>kilometrajul</strong>, comparat cu istoricul și cu uzura reală a mașinii;</li>
<li><strong>seria de șasiu (VIN)</strong>, care trebuie să fie aceeași pe mașină și în acte;</li>
<li>dacă mașina a avut <strong>accidente sau reparații mari</strong>;</li>
<li>starea anvelopelor, a frânelor și a caroseriei.</li>
</ul>
<p>Dacă nu te pricepi, ia cu tine pe cineva care se pricepe sau cere o verificare la un service din zonă înainte de cumpărare.</p>

<h2>Etapa 2: actele pe care trebuie să le primești</h2>
<p>În Germania, documentele principale ale unei mașini sunt:</p>
<div class="tbl"><table>
<thead><tr><th>Document</th><th>Ce este</th></tr></thead>
<tbody>
<tr><td>Zulassungsbescheinigung Teil I</td><td>Certificatul de înmatriculare (talonul), cunoscut și ca „Fahrzeugschein”</td></tr>
<tr><td>Zulassungsbescheinigung Teil II</td><td>Documentul de proprietate al mașinii (cartea), cunoscut și ca „Fahrzeugbrief”</td></tr>
<tr><td>Contract de vânzare-cumpărare (Kaufvertrag)</td><td>Dovada că ai cumpărat mașina, cu datele ambelor părți și VIN-ul</td></tr>
<tr><td>Dovada radierii (Abmeldung), dacă e cazul</td><td>Arată că mașina a fost scoasă din evidența germană</td></tr>
</tbody>
</table></div>
<p>Păstrează originalele și fă-ți copii. Fără ele nu poți înmatricula mașina în România.</p>
<!-- TODO: de reverificat lista exactă de documente germane cerute la înmatricularea în RO. -->

<h2>Etapa 3: cum aduci mașina în România</h2>
<h3>Varianta A: o conduci tu</h3>
<p>Ca să circuli legal cu ea din Germania, mașina are nevoie de numere și asigurare valabile pentru drum. Pentru export există numere speciale (Ausfuhrkennzeichen), cu asigurare inclusă pe o perioadă limitată. Regulile și condițiile le găsești la autoritățile germane de înmatriculare. Trebuie să mergi până la vânzător, să conduci tot drumul și să plătești vignetele și taxele de drum ale țărilor prin care treci.</p>
<h3>Varianta B: o aducem pe platformă</h3>
<p>Preluăm mașina de la vânzător sau de la dealer, o încărcăm pe <strong>platforma dublă axă</strong>, o ancorăm cu chingi și o aducem până la adresa ta din România, cu acoperire CMR conform condițiilor transportului. Mașina nu rulează și nu adună kilometri, iar tu nu trebuie să mergi până în Germania. Detalii pe pagina de <a href="/transport-auto-platforma">transport auto pe platformă</a>.</p>
<p>Ca să alegi între variante, citește <a href="/blog/cat-costa-transport-auto-platforma">ce influențează costul transportului pe platformă</a>.</p>

<h2>Etapa 4: înmatricularea în România</h2>
<p>Pentru o mașină înmatriculată anterior în altă țară din UE, pașii obișnuiți sunt:</p>
<ol>
<li><strong>verificarea la RAR</strong> (Registrul Auto Român): certificatul de autenticitate și emiterea sau actualizarea cărții de identitate a vehiculului (CIV), plus inspecția tehnică, unde e cazul. Detalii pe <a href="https://www.rarom.ro" target="_blank" rel="noopener nofollow">rarom.ro</a>.</li>
<li><strong>asigurarea RCA</strong> pentru mașină;</li>
<li><strong>înregistrarea fiscală</strong> a mașinii la direcția de taxe și impozite locale de la domiciliu;</li>
<li><strong>programarea și dosarul la serviciul de înmatriculări</strong> (SPCRPCIV) din județul tău. Lista actualizată de documente și taxe e pe <a href="https://www.drpciv.ro" target="_blank" rel="noopener nofollow">drpciv.ro</a> și pe site-ul instituției prefectului din județ.</li>
</ol>
<!-- TODO: de verificat pe sursele oficiale ordinea pașilor, documentele și taxele actuale (RAR, DRPCIV, taxe locale) înainte de actualizarea articolului. -->
<p>Documentele exacte și taxele se pot schimba. Verifică întotdeauna lista de pe site-ul oficial al județului tău înainte să mergi la ghișeu.</p>

<h2>Ce costuri să iei în calcul</h2>
<p>Nu îți dăm sume, pentru că diferă mult de la caz la caz și se schimbă. Iată însă lista completă, ca să nu uiți nimic:</p>
<ul>
<li>prețul mașinii;</li>
<li>transportul: fie numere de export, asigurare, drum până la vânzător, carburant și vignete, fie transportul pe platformă;</li>
<li>taxele și verificările la RAR;</li>
<li>asigurarea RCA;</li>
<li>taxele de înmatriculare și plăcuțele;</li>
<li>eventuale reparații descoperite la verificări.</li>
</ul>

<h2>Ce pregătești ca să preluăm mașina rapid</h2>
<ul>
<li>adresa exactă a vânzătorului și un număr de telefon al lui;</li>
<li>marca, modelul și dacă mașina pornește și rulează normal;</li>
<li>acordul vânzătorului să ne predea mașina, cheile și actele, după cum stabiliți;</li>
<li>adresa din România unde o vrei livrată.</li>
</ul>
<!-- TODO: dacă BRO transportă și mașini nefuncționale; documente cerute la preluare. -->`,
    faq: [
      ["Ce acte primesc de la vânzătorul din Germania?", "De obicei: Zulassungsbescheinigung Teil I și Teil II, contractul de vânzare-cumpărare și, dacă e cazul, dovada radierii. Fără ele nu poți înmatricula mașina în România."],
      ["Trebuie să merg eu în Germania după mașină?", "Nu neapărat. Putem prelua mașina de la vânzător sau de la dealer și o aducem pe platformă până la adresa ta."],
      ["Mașina adusă pe platformă e asigurată?", "Transportul se face cu acoperire CMR, conform condițiilor transportului. Detaliile le stabilim la telefon."],
      ["Ce pași fac în România pentru înmatriculare?", "În general: verificarea la RAR, RCA, înregistrarea fiscală și dosarul la serviciul de înmatriculări. Verifică lista actuală pe drpciv.ro și rarom.ro."],
      ["Cât costă să aduc mașina pe platformă?", "Depinde de locul de preluare, de adresa de livrare și de mașină. Afli prețul la 0790 752 888."],
    ],
  },

  {
    n: 53, published: true, date: D, group: "Mașini pe platformă", main: "AUTO",
    slug: "cat-costa-transport-auto-platforma",
    title: "Cât costă transportul auto pe platformă și de ce variază",
    desc: "Ce influențează prețul unui transport auto pe platformă din Germania, Austria, Olanda sau Belgia în România și cum îl compari cu drumul la volan.",
    h1: "Cât costă transportul auto pe platformă și de ce variază",
    cardText: "Factorii care schimbă prețul și cum îl compari cu varianta de a conduce tu mașina.",
    img: "/img/platforma.webp", imgW: 900, imgH: 605,
    imgAlt: "Autoturism transportat pe platformă de BRO Transport",
    related: ["cum-aduci-masina-din-germania"],
    intro: `
<p><strong>Prețul unui transport auto pe platformă depinde în principal de distanța dintre locul de preluare și adresa de livrare, de mașină (mărime, greutate, dacă pornește) și de cât de ușor e de ajuns la ea.</strong> De aceea nu există un preț fix „din Germania în România”.</p>
<p>La BRO Transport afli prețul exact la telefon, înainte de preluare. Mai jos îți explicăm ce îl influențează și cum îl compari cu varianta de a merge tu după mașină.</p>`,
    body: `
<h2>Factorii care influențează prețul</h2>
<div class="tbl"><table>
<thead><tr><th>Factor</th><th>De ce contează</th></tr></thead>
<tbody>
<tr><td>Locul de preluare</td><td>Un oraș de pe ruta noastră e mai ușor de inclus decât o localitate aflată departe de ea</td></tr>
<tr><td>Adresa de livrare în România</td><td>La fel: distanța față de traseu contează</td></tr>
<tr><td>Mărimea și greutatea mașinii</td><td>Un autoturism mare sau greu se încarcă și se transportă altfel decât unul mic</td></tr>
<tr><td>Dacă mașina pornește</td><td>O mașină care nu pornește e mai greu de încărcat</td></tr>
<tr><td>Cât de flexibil ești cu data</td><td>Dacă preluarea se poate potrivi cu o cursă existentă, e mai simplu de organizat</td></tr>
</tbody>
</table></div>
<!-- TODO: dacă BRO transportă mașini nefuncționale și dacă există cost suplimentar. -->

<h2>Ce ar trebui să includă un preț corect</h2>
<ul>
<li>preluarea de la vânzător sau de la dealer;</li>
<li>încărcarea și ancorarea corectă pe platformă;</li>
<li>transportul până la adresa ta;</li>
<li>acoperire CMR, conform condițiilor transportului;</li>
<li>un preț final, fără costuri adăugate la livrare.</li>
</ul>
<p>Când compari oferte, întreabă exact ce include fiecare. Un preț mai mic care nu include preluarea de la vânzător sau acoperirea pe drum nu e o ofertă comparabilă.</p>

<h2>Platformă vs. condusă: ce costuri ai la fiecare</h2>
<div class="tbl"><table>
<thead><tr><th>Cost</th><th>O conduci tu</th><th>Pe platformă</th></tr></thead>
<tbody>
<tr><td>Drumul până la vânzător</td><td>Bilet de avion, autocar sau microbuz</td><td>Nu e nevoie</td></tr>
<tr><td>Numere și asigurare pentru drum</td><td>Numere de export sau temporare, cu asigurare</td><td>Nu e nevoie, mașina nu rulează</td></tr>
<tr><td>Carburant și taxe de drum</td><td>Le plătești tu, prin toate țările</td><td>Incluse în prețul transportului</td></tr>
<tr><td>Kilometri pe mașină</td><td>Se adaugă câteva mii</td><td>Zero</td></tr>
<tr><td>Timpul tău</td><td>Câteva zile</td><td>Doar telefonul și recepția</td></tr>
<tr><td>Riscul unei defecțiuni pe drum</td><td>Al tău, departe de casă</td><td>Mașina nu rulează</td></tr>
</tbody>
</table></div>
<p>Pentru o mașină ieftină, condusul poate părea mai avantajos. Pentru o mașină mai valoroasă sau una despre care nu știi sigur cum se comportă la un drum lung, platforma e de obicei alegerea mai liniștită.</p>

<h2>De ce platforma e mai sigură pentru mașină</h2>
<p>La BRO Transport mașina stă pe <strong>platforma dublă axă</strong>, tractată de Renault Master, ancorată cu chingi și verificată la opriri. Platforma și remorcile le verificăm înainte de fiecare drum: lumini, frâne, chingi. Mașina ta nu adună kilometri, nu se uzează și nu riști să rămâi cu ea în pană pe autostradă, la o mie de kilometri de casă.</p>

<h2>Cum obții cel mai bun preț</h2>
<ul>
<li><strong>Dă-ne toate detaliile de la început:</strong> adresa exactă a vânzătorului, marca și modelul, dacă pornește.</li>
<li><strong>Fii flexibil cu data</strong>, dacă se poate. E mai ușor să includem preluarea într-o cursă care trece prin zonă.</li>
<li><strong>Pregătește actele și cheile</strong> cu vânzătorul, ca preluarea să meargă repede.</li>
<li><strong>Combină:</strong> dacă ai și colete sau vii și tu pe aceeași rută, spune-ne.</li>
</ul>

<h2>Din ce țări aducem mașini</h2>
<p>Mergem pe ruta România – Austria – Germania – Olanda – Belgia, în ambele sensuri. Cele mai multe mașini aduse acasă vin din Germania, dar preluăm și din celelalte țări de pe rută.</p>
<!-- TODO: zonele exacte de preluare acoperite. -->
<p>Pentru tot procesul, de la cumpărare la înmatriculare, citește <a href="/blog/cum-aduci-masina-din-germania">cum aduci o mașină din Germania</a>. Detalii despre serviciu găsești pe pagina de <a href="/transport-auto-platforma">transport auto pe platformă</a>.</p>`,
    faq: [
      ["Cât costă să aduc o mașină pe platformă din Germania?", "Depinde de locul de preluare, de adresa de livrare și de mașină. Afli prețul exact la 0790 752 888, înainte de preluare."],
      ["De ce diferă prețurile între transportatori?", "Pentru că pot include lucruri diferite: preluarea de la vânzător, acoperirea pe drum, livrarea la adresă. Întreabă exact ce e inclus."],
      ["E mai ieftin să conduc eu mașina?", "Uneori pare mai ieftin. Adaugă însă drumul până la vânzător, numerele și asigurarea pentru drum, carburantul, vignetele și zilele tale libere."],
      ["Mașina adună kilometri pe platformă?", "Nu. Stă pe platforma dublă axă, ancorată cu chingi, și nu rulează."],
      ["Mașina e acoperită pe drum?", "Transportul se face cu acoperire CMR, conform condițiilor transportului."],
    ],
  },
];
