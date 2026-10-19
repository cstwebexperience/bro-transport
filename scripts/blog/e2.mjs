// Valul 3 – Grup E (50–52, 54): CMR, verificare mașină, mașini nefuncționale, RAR.
import { IMG, D2, SRC } from "./_img.mjs";
const G = "Mașini pe platformă";

export default [
  {
    n: 50, published: true, date: D2, group: G, main: "AUTO",
    slug: "ce-este-cmr-transport-auto",
    title: "Ce este CMR-ul și ce acoperă la transportul auto",
    desc: "Ce este CMR-ul la transportul auto pe platformă: documentul de transport internațional, ce cuprinde, pentru ce răspunde transportatorul și ce verifici.",
    h1: "Ce este CMR-ul și ce acoperă la transportul auto",
    cardText: "Documentul care însoțește mașina pe drum: ce scrie în el și de ce contează.",
    ...IMG.platforma,
    imgAlt: "Mașină pe platformă, transportată cu document CMR",
    related: ["transport-auto-platforma-vs-condus", "cum-aduci-masina-din-germania"],
    intro: `
<p><strong>CMR-ul este scrisoarea de trăsură internațională, documentul care însoțește marfa, inclusiv o mașină, în transportul rutier între țări.</strong> Numele vine de la Convenția privind contractul de transport internațional de mărfuri pe șosele, semnată la Geneva în 1956, la care România și Germania sunt părți.</p>
<p>Pentru tine, CMR-ul e dovada că mașina a fost predată transportatorului într-o anumită stare și că transportatorul are obligații clare până la predare.</p>`,
    body: `
<h2>Ce este, pe înțeles</h2>
<p>Când cineva transportă marfă dintr-o țară în alta pe șosea, între expeditor, transportator și destinatar există un contract de transport. Convenția CMR stabilește regulile acestui contract: cine răspunde, pentru ce, în ce condiții. Documentul CMR (scrisoarea de trăsură) e dovada scrisă a contractului.</p>
<p>Textul convenției e public și poate fi găsit pe site-ul ${SRC("https://unece.org/transport/road-transport", "Comisiei Economice ONU pentru Europa (UNECE)")}, care o administrează.</p>

<h2>Ce cuprinde un CMR</h2>
<div class="tbl"><table>
<thead><tr><th>Informație</th><th>De ce contează</th></tr></thead>
<tbody>
<tr><td>Expeditorul</td><td>Cine predă mașina: de obicei vânzătorul.</td></tr>
<tr><td>Destinatarul</td><td>Cine primește mașina: de obicei tu.</td></tr>
<tr><td>Transportatorul</td><td>Firma care face transportul.</td></tr>
<tr><td>Locul și data preluării</td><td>De unde și când a fost preluată mașina.</td></tr>
<tr><td>Locul de predare</td><td>Unde trebuie să ajungă.</td></tr>
<tr><td>Descrierea mărfii</td><td>Marca, modelul, seria de caroserie (VIN).</td></tr>
<tr><td>Observații</td><td>Starea mașinii la preluare, eventualele daune existente.</td></tr>
<tr><td>Semnăturile</td><td>Ale expeditorului, transportatorului și, la final, ale destinatarului.</td></tr>
</tbody>
</table></div>

<h2>De ce e important pentru tine</h2>
<h3>Dovada stării mașinii</h3>
<p>La preluare, starea mașinii se notează. Dacă mașina avea o zgârietură sau o lovitură înainte de transport, ea trebuie trecută. Așa e clar ce exista înainte și ce, eventual, a apărut pe drum.</p>
<h3>Dovada predării</h3>
<p>Când primești mașina, semnezi CMR-ul. Semnătura ta arată că ai primit mașina. Dacă observi ceva în neregulă, se notează în acel moment.</p>
<h3>Actele pe drum</h3>
<p>La un control pe drum, CMR-ul arată poliției sau vameșilor ce se transportă, de unde și unde. Fără el, transportul poate avea probleme.</p>

<h2>Ce responsabilități are transportatorul</h2>
<p>Conform convenției, transportatorul răspunde, în principiu, pentru pierderea totală sau parțială a mărfii și pentru avariile apărute între momentul preluării și cel al predării, precum și pentru întârzierea la livrare. Convenția prevede și situații în care transportatorul nu răspunde, de exemplu când paguba e cauzată de un defect propriu al mărfii.</p>
<p>Răspunderea transportatorului e limitată de convenție, în funcție de greutatea mărfii, dacă nu s-a declarat o valoare mai mare. Pentru o mașină de valoare mare, merită să întrebi ce acoperire există în plus.</p>
<!-- TODO: asigurarea CMR a BRO (dacă există și ce limită are) – de confirmat de firmă. -->

<h2>Ce verifici la preluare</h2>
<p>Dacă ești prezent la preluarea mașinii de la vânzător, sau dacă e vânzătorul acolo, verificați împreună:</p>
<ol>
<li>că seria de caroserie din CMR e aceeași cu cea de pe mașină și din acte;</li>
<li>că eventualele daune existente sunt notate;</li>
<li>ce acte se predau odată cu mașina (talon, chei, COC);</li>
<li>câte chei se predau.</li>
</ol>
<p>Fă și tu poze cu mașina din toate părțile, înainte de preluare, dacă poți. Pozele cu dată sunt o dovadă bună.</p>

<h2>Ce verifici la predare</h2>
<ol>
<li>ocolește mașina și uită-te la caroserie, geamuri, oglinzi, jante;</li>
<li>compară starea cu cea notată la preluare și cu pozele;</li>
<li>verifică dacă ai primit toate actele și toate cheile;</li>
<li>dacă observi ceva nou, spune pe loc și cere să fie notat în CMR, înainte de semnătură;</li>
<li>abia apoi semnează.</li>
</ol>
<p>Dacă semnezi fără observații, e mai greu să dovedești ulterior că o daună a apărut pe drum.</p>

<h2>CMR-ul și înmatricularea</h2>
<p>CMR-ul nu e un act de proprietate și nu înlocuiește contractul sau factura. Totuși, păstrează-l alături de actele mașinii. Poate fi util dacă apar întrebări despre momentul și modul în care mașina a intrat în țară. Actele de care ai nevoie pentru înmatriculare sunt în ghidul despre <a href="/blog/acte-masina-cumparata-din-germania">actele mașinii cumpărate din Germania</a>.</p>

<h2>CMR-ul la noi</h2>
<p>Transportul mașinilor pe platformă îl facem cu CMR. Preluăm mașina de la vânzător, completăm documentul și ți-o predăm la adresă. Comparația dintre platformă și varianta în care conduci tu mașina e în articolul despre <a href="/blog/transport-auto-platforma-vs-condus">platformă sau condusă</a>. Detalii pe pagina de <a href="/transport-auto-platforma">transport auto pe platformă</a>.</p>`,
    faq: [
      ["Ce înseamnă CMR?", "Vine de la Convenția privind contractul de transport internațional de mărfuri pe șosele, semnată la Geneva în 1956. Documentul CMR e scrisoarea de trăsură."],
      ["Ce scrie într-un CMR?", "Expeditorul, destinatarul, transportatorul, locul și data preluării, locul de predare, descrierea mașinii, observații despre stare și semnături."],
      ["Pentru ce răspunde transportatorul?", "În principiu, pentru pierderea sau avarierea mărfii între preluare și predare și pentru întârziere, în limitele stabilite de convenție."],
      ["Ce fac dacă văd o daună la predare?", "Spune pe loc și cere să fie notată în CMR, înainte să semnezi."],
      ["E CMR-ul act de proprietate?", "Nu. Proprietatea se dovedește cu contractul sau factura și cu actele mașinii."],
    ],
  },

  {
    n: 51, published: true, date: D2, group: G, main: "AUTO",
    slug: "verificare-masina-second-hand-germania",
    title: "Cum verifici o mașină second-hand din Germania",
    desc: "Cum verifici o mașină second-hand înainte să o cumperi din Germania: acte, istoric, kilometraj, caroserie, motor, test drive și semnale de alarmă la anunț.",
    h1: "Cum verifici o mașină second-hand înainte s-o cumperi din Germania",
    cardText: "Acte, istoric, kilometri, caroserie, motor și semnalele de alarmă din anunț.",
    ...IMG.platforma,
    imgAlt: "Mașină second-hand verificată, adusă pe platformă din Germania",
    related: ["acte-masina-cumparata-din-germania", "cum-aduci-masina-din-germania"],
    intro: `
<p><strong>Înainte să cumperi o mașină second-hand din Germania, verifică actele și seria de caroserie, istoricul de service, kilometrajul, caroseria, motorul și cutia de viteze, apoi fă un test drive.</strong> Dacă nu poți merge tu, cere o inspecție la un service independent sau la un expert auto din zonă.</p>
<p>Germania are multe mașini bune, dar și multe anunțuri înșelătoare. Mai jos ai lista de verificare, pas cu pas.</p>`,
    body: `
<h2>Pasul 1: verificarea anunțului</h2>
<p>Primele semnale le vezi încă din anunț, pe platforme ca mobile.de sau AutoScout24. Fii atent la:</p>
<ul>
<li><strong>preț mult sub piață</strong>: dacă o mașină costă jumătate din cât costă altele la fel, de obicei e o problemă;</li>
<li><strong>vânzător care cere avans</strong> înainte să vezi mașina sau actele;</li>
<li><strong>poze puține sau copiate</strong> de pe alte anunțuri;</li>
<li><strong>vânzător care „e în străinătate”</strong> și vrea să trimită mașina după plată;</li>
<li><strong>refuzul de a-ți trimite poze cu actele</strong> sau cu seria de caroserie.</li>
</ul>
<p>Nu plăti niciodată avans unui vânzător pe care nu l-ai verificat și nu trimite bani prin servicii de transfer greu de urmărit.</p>

<h2>Pasul 2: actele și seria de caroserie</h2>
<p>Cere vânzătorului poze clare cu talonul mare și cel mic (Zulassungsbescheinigung Teil I și II) și cu seria de caroserie (VIN) de pe mașină. Verifică:</p>
<ol>
<li>că VIN-ul din acte e același cu cel de pe mașină (pe parbriz, pe stâlpul ușii, sub capotă);</li>
<li>că numele din talonul mare e al vânzătorului sau că acesta e dealer;</li>
<li>că datele tehnice din acte corespund cu mașina din anunț.</li>
</ol>
<p>Lista completă de acte e în ghidul despre <a href="/blog/acte-masina-cumparata-din-germania">actele necesare pentru o mașină din Germania</a>.</p>

<h2>Pasul 3: istoricul mașinii</h2>
<h3>Cartea de service</h3>
<p>În Germania, multe mașini au carte de service („Serviceheft” sau „Scheckheft”) cu ștampilele reviziilor. O carte completă, cu revizii regulate la service autorizat, e un semn bun. Cere și facturile, dacă există.</p>
<h3>Inspecția tehnică</h3>
<p>Raportul ultimei inspecții tehnice periodice („HU”, făcută de organizații ca TÜV sau DEKRA) arată starea mașinii la acel moment și kilometrajul. Compară kilometrii din raport cu cei de pe bord.</p>
<h3>Istoric de daune</h3>
<p>Întreabă direct dacă mașina a avut accidente („Unfallschaden”). Dealerii sunt obligați să fie corecți în descriere. Există și servicii online care, pe baza VIN-ului, pot arăta date despre istoricul mașinii.</p>

<h2>Pasul 4: kilometrajul</h2>
<p>Kilometrajul dat înapoi e o problemă reală la mașinile second-hand. Semne care trebuie să te pună pe gânduri:</p>
<ul>
<li>volan, schimbător sau pedale foarte uzate la o mașină cu puțini kilometri;</li>
<li>kilometri din cartea de service sau din raportul de inspecție mai mari decât pe bord;</li>
<li>scaunul șoferului lăsat sau rupt;</li>
<li>lipsa oricărui istoric.</li>
</ul>

<h2>Pasul 5: caroseria și interiorul</h2>
<div class="tbl"><table>
<thead><tr><th>Ce verifici</th><th>La ce te uiți</th></tr></thead>
<tbody>
<tr><td>Vopseaua</td><td>Diferențe de nuanță între piese, urme de vopsea pe cauciucuri sau pe garnituri.</td></tr>
<tr><td>Spațiile dintre piese</td><td>Distanțe inegale între uși, capotă și aripi pot însemna reparații după accident.</td></tr>
<tr><td>Rugina</td><td>Pe praguri, sub uși, pe pasajele roților, sub mașină.</td></tr>
<tr><td>Geamurile</td><td>Același producător și același an pe toate geamurile.</td></tr>
<tr><td>Interiorul</td><td>Umezeală, miros de mucegai, pete pe plafon sau pe mochetă.</td></tr>
<tr><td>Anvelopele</td><td>Uzură inegală, care poate arăta probleme la direcție sau suspensie.</td></tr>
</tbody>
</table></div>

<h2>Pasul 6: motorul și cutia de viteze</h2>
<ul>
<li>pornește motorul la rece, nu după ce vânzătorul l-a încălzit;</li>
<li>ascultă zgomote ciudate: bătăi, fluierături, vibrații;</li>
<li>uită-te la fum: fum albastru sau negru la accelerare e un semnal de alarmă;</li>
<li>verifică scurgerile de ulei sub mașină și sub capotă;</li>
<li>verifică martorii de pe bord: toți trebuie să se aprindă la pornire și să se stingă după.</li>
</ul>

<h2>Pasul 7: test drive</h2>
<p>Un test de cel puțin 20–30 de minute, pe drumuri diferite, spune multe:</p>
<ol>
<li>cum pornește și cum accelerează;</li>
<li>cum schimbă vitezele, mai ales la cutiile automate;</li>
<li>cum frânează și dacă trage într-o parte;</li>
<li>dacă direcția e dreaptă;</li>
<li>dacă se aud zgomote la denivelări.</li>
</ol>

<h2>Pasul 8: inspecția profesională</h2>
<p>Dacă nu te pricepi la mașini sau nu poți merge tu, cere o inspecție la un service independent sau la un expert auto din zona vânzătorului. Asociațiile auto germane și organizații ca TÜV sau DEKRA oferă verificări înainte de cumpărare, contra cost. Costul unei inspecții e mic în comparație cu o mașină cu probleme ascunse.</p>

<h2>După ce ai decis</h2>
<p>După ce ai verificat mașina și ai semnat contractul, urmează drumul acasă. Poți să o conduci tu, cu numere de export, sau să o aducem noi pe platformă, fără kilometri în plus. Comparația e în articolul despre <a href="/blog/transport-auto-platforma-vs-condus">platformă sau condusă</a>, iar pașii completi în ghidul despre <a href="/blog/cum-aduci-masina-din-germania">cum aduci o mașină din Germania</a>. Detalii pe pagina de <a href="/transport-auto-platforma">transport auto pe platformă</a>.</p>`,
    faq: [
      ["Ce verific prima dată la o mașină din Germania?", "Actele și seria de caroserie: talonul mare și cel mic și VIN-ul de pe mașină, care trebuie să fie identic cu cel din acte."],
      ["Cum îmi dau seama dacă kilometrajul e dat înapoi?", "Compară kilometrii din cartea de service și din raportul de inspecție cu cei de pe bord și uită-te la uzura volanului, pedalelor și scaunului."],
      ["Ce înseamnă „Scheckheft”?", "Cartea de service cu ștampilele reviziilor. O carte completă e un semn bun."],
      ["Să plătesc avans înainte să văd mașina?", "Nu. Nu plăti avans unui vânzător pe care nu l-ai verificat."],
      ["Pot cere o inspecție dacă nu pot merge eu?", "Da, la un service independent sau la un expert auto din zona vânzătorului, contra cost."],
    ],
  },

  {
    n: 52, published: true, date: D2, group: G, main: "AUTO",
    slug: "transport-masina-nefunctionala-platforma",
    title: "Mașină care nu pornește: o poți aduce pe platformă?",
    desc: "Poți aduce pe platformă o mașină care nu pornește, avariată sau fără ITP? Ce să ne spui la rezervare, cum se încarcă și ce acte îți trebuie.",
    h1: "Mașină care nu pornește: o poți aduce pe platformă?",
    cardText: "Mașini avariate, fără baterie sau fără ITP: ce să ne spui și cum se încarcă.",
    ...IMG.platforma,
    imgAlt: "Platformă auto pentru mașini avariate sau care nu pornesc",
    related: ["transport-auto-platforma-vs-condus", "cat-costa-transport-auto-platforma"],
    intro: `
<p><strong>Da, o mașină care nu pornește poate fi adusă pe platformă, pentru că nu trebuie condusă, ci încărcată și transportată.</strong> Important e să ne spui de la început exact în ce stare e: dacă se rulează, dacă are roțile blocate, dacă are direcția funcțională și dacă are avarii mari.</p>
<p>În funcție de stare, ne pregătim pentru încărcare. Mai jos afli ce informații ne trebuie și ce să știi înainte.</p>`,
    body: `
<h2>Ce mașini pot fi transportate</h2>
<div class="tbl"><table>
<thead><tr><th>Starea mașinii</th><th>Se poate transporta?</th><th>Ce să ne spui</th></tr></thead>
<tbody>
<tr><td>Nu pornește, dar se rulează</td><td>De regulă da</td><td>Că roțile se învârt și direcția merge.</td></tr>
<tr><td>Bateria descărcată</td><td>Da</td><td>Dacă poate fi pornită cu cabluri sau nu.</td></tr>
<tr><td>Fără ITP sau fără numere</td><td>Da</td><td>Nu contează pentru platformă.</td></tr>
<tr><td>Avariată în accident</td><td>Se discută</td><td>Ce piese sunt afectate și dacă roțile se rulează.</td></tr>
<tr><td>Roți blocate sau lipsă</td><td>Se discută</td><td>Cu poze, ca să vedem ce se poate face.</td></tr>
<tr><td>Mașină de colecție sau de restaurat</td><td>Se discută</td><td>Starea generală și dimensiunile.</td></tr>
</tbody>
</table></div>
<!-- TODO: dotările platformei BRO pentru mașini nefuncționale (troliu etc.) și limitele de greutate – de confirmat de firmă. -->

<h2>De ce contează să știm dinainte</h2>
<p>O mașină care pornește urcă singură pe platformă. Una care nu pornește trebuie trasă sau împinsă, iar asta cere pregătire. Dacă află abia la fața locului că mașina are roțile blocate, șoferul poate să nu o poată încărca în siguranță. De aceea, cu cât ne spui mai multe dinainte, cu atât preluarea merge mai bine.</p>

<h2>Ce informații ne trebuie</h2>
<ol>
<li>marca, modelul și anul mașinii;</li>
<li>dacă pornește sau nu și de ce, dacă știi;</li>
<li>dacă se rulează: roțile se învârt, frâna de mână se poate elibera, direcția merge;</li>
<li>dacă e cutie automată și dacă se poate pune pe neutru (N);</li>
<li>ce avarii are, cu poze din toate părțile;</li>
<li>unde se află: stradă, parcare, curte, garaj, și dacă e loc pentru platformă;</li>
<li>dacă ai cheile și actele.</li>
</ol>

<h2>Cutia automată: un caz special</h2>
<p>La multe mașini cu cutie automată, fără motor pornit sau fără baterie, schimbătorul rămâne blocat pe „P”. Mașina nu se rulează. Unele modele au o deblocare de urgență a schimbătorului, explicată în manualul mașinii. Întreabă vânzătorul sau verifică manualul înainte de preluare.</p>

<h2>Locul de unde se preia mașina</h2>
<p>Platforma are nevoie de spațiu pentru a se apropia și pentru încărcare. Spune-ne dinainte dacă:</p>
<ul>
<li>mașina e într-un garaj subteran sau într-o curte strâmtă;</li>
<li>strada e îngustă sau cu parcare doar pe o parte;</li>
<li>mașina e blocată de alte mașini;</li>
<li>accesul se face pe o poartă cu înălțime sau lățime limitată.</li>
</ul>
<p>Dacă mașina nu poate fi scoasă ușor, vânzătorul trebuie să o aducă într-un loc accesibil înainte de preluare.</p>

<h2>Actele pentru o mașină avariată</h2>
<p>Actele sunt aceleași ca pentru orice mașină: contractul sau factura, talonul mare și cel mic și, ideal, COC-ul. Pentru o mașină avariată în accident, cere și documentele despre daună, dacă există, de exemplu raportul asigurătorului. Lista completă e în ghidul despre <a href="/blog/acte-masina-cumparata-din-germania">actele mașinii cumpărate din Germania</a>.</p>
<p>Atenție: o mașină cu avarii grave poate avea probleme la înmatricularea în România, dacă nu e reparată conform cerințelor tehnice. Verifică la RAR înainte să cumperi o mașină foarte avariată.</p>

<h2>Prețul transportului</h2>
<p>Prețul depinde de distanță, de tipul mașinii și de complexitatea încărcării. O mașină care nu se rulează sau e foarte avariată poate cere mai mult timp și mai multă muncă la încărcare și descărcare. Îți spunem prețul exact la telefon, după ce ne spui starea mașinii. Ce influențează prețul afli din articolul despre <a href="/blog/cat-costa-transport-auto-platforma">cât costă transportul auto pe platformă</a>.</p>

<h2>Exemplu: o mașină cumpărată pentru piese</h2>
<p>Marius cumpără din Austria o mașină cu motorul defect, ca să o repare acasă. Ne trimite poze și ne spune că mașina are cutie manuală, se rulează și are toate roțile. Vânzătorul o scoate din garaj în curte, unde platforma are acces. Șoferul o încarcă și o aduce la atelierul lui Marius, fără probleme.</p>

<h2>Ce faci la predare</h2>
<p>La predare, mașina e descărcată la adresa ta. Spune-ne dinainte dacă trebuie dusă direct la un service sau la un atelier. Verifică mașina și actele înainte să semnezi CMR-ul. Detalii despre CMR în articolul despre <a href="/blog/ce-este-cmr-transport-auto">ce este CMR-ul</a>.</p>

<h2>Adu mașina, chiar dacă nu pornește</h2>
<p>Sună-ne la 0790 752 888 sau scrie-ne pe WhatsApp, cu poze și detalii despre stare. Comparația dintre platformă și varianta condusă e în articolul despre <a href="/blog/transport-auto-platforma-vs-condus">platformă sau condusă</a>. Detalii pe pagina de <a href="/transport-auto-platforma">transport auto pe platformă</a>.</p>`,
    faq: [
      ["Puteți aduce o mașină care nu pornește?", "Da, de regulă, dacă ne spui dinainte starea ei. Mașina nu trebuie condusă, ci încărcată pe platformă."],
      ["Mașina trebuie să aibă ITP?", "Nu. Pentru transportul pe platformă nu contează dacă mașina are ITP sau numere."],
      ["Ce fac dacă mașina are cutie automată și nu se rulează?", "Verifică în manual dacă există deblocare de urgență a schimbătorului și spune-ne la rezervare."],
      ["Puteți aduce o mașină avariată în accident?", "Se discută. Trimite-ne poze și spune-ne ce e afectat și dacă roțile se rulează."],
      ["Costă mai mult o mașină care nu pornește?", "Poate, pentru că încărcarea cere mai mult timp. Îți spunem prețul exact după ce aflăm starea mașinii."],
    ],
  },

  {
    n: 54, published: true, date: D2, group: G, main: "AUTO",
    slug: "rar-omologare-masina-import",
    title: "Omologarea RAR pentru mașini aduse din UE",
    desc: "Ce face RAR pentru o mașină adusă din UE: certificatul de autenticitate, cartea de identitate a vehiculului, rolul COC-ului, programarea și actele cerute.",
    h1: "Omologarea RAR pentru mașini aduse din UE",
    cardText: "Certificat de autenticitate, CIV, rolul COC-ului și cum te pregătești.",
    ...IMG.platforma,
    imgAlt: "Mașină adusă din UE pe platformă, pregătită pentru RAR",
    related: ["inmatriculare-masina-adusa-din-germania", "acte-masina-cumparata-din-germania"],
    intro: `
<p><strong>Pentru o mașină adusă dintr-o țară UE, RAR (Registrul Auto Român) verifică mașina și actele ei și eliberează certificatul de autenticitate și cartea de identitate a vehiculului (CIV), necesare la înmatriculare.</strong> Dacă mașina are certificat de conformitate (COC), procedura e de obicei mai simplă.</p>
<p>Mai jos găsești ce face RAR, ce acte să ai și cum te pregătești. Lista oficială și tarifele sunt mereu pe rarom.ro.</p>`,
    body: `
<h2>Ce este RAR</h2>
<p>Registrul Auto Român este autoritatea tehnică din domeniul auto din România. Pentru mașinile aduse din străinătate, RAR confirmă că mașina e cea din acte și că îndeplinește cerințele tehnice pentru a fi înmatriculată. Informațiile oficiale sunt pe ${SRC("https://www.rarom.ro", "rarom.ro")}.</p>

<h2>Ce eliberează RAR</h2>
<div class="tbl"><table>
<thead><tr><th>Document</th><th>Ce este</th></tr></thead>
<tbody>
<tr><td>Certificat de autenticitate</td><td>Confirmă identitatea mașinii: seria de caroserie, datele tehnice, faptul că nu e furată sau modificată ilegal.</td></tr>
<tr><td>Cartea de identitate a vehiculului (CIV)</td><td>Documentul românesc care conține datele tehnice ale mașinii. E necesar la înmatriculare.</td></tr>
<tr><td>Inspecția tehnică periodică (ITP)</td><td>Dacă mașina are nevoie de ITP, poate fi făcută la RAR sau la stații autorizate.</td></tr>
</tbody>
</table></div>
<p>„Omologarea” e termenul folosit popular pentru acest proces, deși tehnic se vorbește despre certificarea autenticității și emiterea CIV, iar pentru unele mașini despre omologarea individuală.</p>

<h2>Rolul COC-ului</h2>
<p>COC-ul (Certificate of Conformity) e certificatul de conformitate emis de producător, care arată că mașina corespunde unui tip omologat în Uniunea Europeană. Cu el, RAR are datele tehnice oficiale ale mașinii, iar procedura e de obicei mai rapidă și mai simplă.</p>
<p>Dacă mașina nu are COC, de multe ori se poate cere de la reprezentanța mărcii, contra cost. Fără COC, procedura poate fi mai lungă, iar unele mașini pot avea nevoie de verificări suplimentare.</p>

<h2>Ce acte să ai la RAR</h2>
<ul>
<li>actele de înmatriculare din țara de origine (în Germania, talonul mare și cel mic);</li>
<li>COC-ul, dacă îl ai;</li>
<li>dovada proprietății: contract sau factură;</li>
<li>actul tău de identitate;</li>
<li>alte documente cerute de RAR pentru situația ta.</li>
</ul>
<p>Lista exactă depinde de mașină și de situație. Verific-o pe ${SRC("https://www.rarom.ro", "rarom.ro")} înainte de programare.</p>
<!-- TODO: lista exactă de acte și tarifele RAR – de verificat pe rarom.ro. -->

<h2>Pașii la RAR</h2>
<ol>
<li><strong>Programarea</strong>, de obicei online, pe site-ul RAR, la reprezentanța din județul tău.</li>
<li><strong>Prezentarea mașinii</strong> și a actelor, în ziua programării.</li>
<li><strong>Verificarea tehnică</strong>: seria de caroserie, starea mașinii, datele tehnice.</li>
<li><strong>Plata tarifelor</strong>.</li>
<li><strong>Primirea documentelor</strong>: certificatul de autenticitate și CIV-ul, pe loc sau după un termen stabilit.</li>
</ol>

<h2>Cum ajungi cu mașina la RAR</h2>
<p>O mașină adusă pe platformă nu are numere valabile pentru circulație în România. Ca să o duci la RAR, ai mai multe variante, în funcție de situație: o autorizație provizorie de circulație, transportul cu o platformă până la RAR sau alte soluții prevăzute de lege. Întreabă la serviciul de înmatriculări din județul tău ce se aplică în cazul tău.</p>
<p>Dacă știi de la început că mașina trebuie dusă direct la o anumită adresă, spune-ne la rezervare.</p>

<h2>Probleme frecvente</h2>
<ul>
<li><strong>Serie de caroserie greu de citit</strong> sau deteriorată: poate duce la verificări suplimentare.</li>
<li><strong>Modificări nedeclarate</strong>: jante, suspensie, eșapament sau alte piese care nu corespund cu omologarea pot crea probleme.</li>
<li><strong>Lipsa COC-ului</strong>: procedura poate dura mai mult.</li>
<li><strong>Avarii nereparate</strong>: o mașină cu avarii grave poate să nu treacă de verificare până nu e reparată.</li>
<li><strong>Acte incomplete</strong>: fără talonul mare original, procedura se blochează.</li>
</ul>

<h2>După RAR</h2>
<p>Cu certificatul de autenticitate și CIV-ul, poți face asigurarea RCA și te poți programa la înmatriculări. Pașii completi sunt în ghidul despre <a href="/blog/inmatriculare-masina-adusa-din-germania">înmatricularea mașinii aduse din Germania</a>.</p>

<h2>Cum te pregătești bine</h2>
<ol>
<li>verifică actele înainte să cumperi mașina. Lista e în ghidul despre <a href="/blog/acte-masina-cumparata-din-germania">actele necesare</a>;</li>
<li>cere COC-ul de la vânzător sau de la reprezentanța mărcii;</li>
<li>fă-ți programarea la RAR imediat ce știi când ajunge mașina;</li>
<li>fă-ți o mapă cu toate actele, în original și în copie.</li>
</ol>

<h2>Exemplu: o mașină cu COC și una fără</h2>
<p>Doi prieteni aduc fiecare câte o mașină din Germania. Primul are COC-ul de la dealer. La RAR, procedura merge repede, iar el primește CIV-ul fără probleme. Al doilea a cumpărat de la o persoană fizică, iar mașina nu avea COC. Trebuie să ceară COC-ul de la reprezentanța mărcii, ceea ce durează și costă. Abia apoi poate termina procedura la RAR. Lecția: întreabă de COC înainte de cumpărare.</p>

<h2>Transportul până acasă</h2>
<p>Noi ne ocupăm de partea de drum: preluăm mașina de la vânzător și o aducem pe platformă, cu CMR, la adresa ta. Detalii pe pagina de <a href="/transport-auto-platforma">transport auto pe platformă</a>.</p>`,
    faq: [
      ["Ce face RAR pentru o mașină adusă din UE?", "Verifică mașina și actele și eliberează certificatul de autenticitate și cartea de identitate a vehiculului (CIV)."],
      ["Ce este COC-ul?", "Certificatul de conformitate emis de producător. Cu el, procedura la RAR e de obicei mai simplă."],
      ["Ce fac dacă mașina nu are COC?", "De multe ori îl poți cere de la reprezentanța mărcii, contra cost. Fără el, procedura poate dura mai mult."],
      ["Cum mă programez la RAR?", "De obicei online, pe site-ul RAR, la reprezentanța din județul tău."],
      ["Cum duc mașina la RAR dacă nu are numere?", "Întreabă la serviciul de înmatriculări ce variantă se aplică, de exemplu o autorizație provizorie de circulație."],
    ],
  },
];
