// Valul 4 – Grup F (55–58): muncă în străinătate. Reguli generale UE + surse oficiale; fără cifre de salarii inventate.
import { IMG, D2, SRC } from "./_img.mjs";
const G = "Viață în străinătate";

export default [
  {
    n: 55, published: true, date: D2, group: G, main: "DE",
    slug: "munca-in-germania-ghid-romani",
    title: "Muncă în Germania pentru români: primii pași",
    desc: "Primii pași pentru românii care vor să lucreze în Germania: dreptul de muncă în UE, contractul, actele, Anmeldung, asigurarea și cum eviți ofertele false.",
    h1: "Muncă în Germania pentru români: primii pași",
    cardText: "Dreptul de muncă, contractul, actele, primele formalități și ofertele false.",
    ...IMG.master,
    imgAlt: "Microbuz BRO Transport pentru românii care pleacă la muncă în Germania",
    related: ["prima-zi-in-germania-checklist", "anmeldung-germania-ghid"],
    intro: `
<p><strong>Ca cetățean român, ai dreptul să lucrezi în Germania fără permis de muncă, la fel ca un cetățean german.</strong> Ai nevoie de un contract de muncă, de un act de identitate valabil și, după ce ajungi, de câteva formalități: înregistrarea adresei, numărul fiscal, asigurarea medicală și un cont bancar.</p>
<p>Mai jos găsești pașii în ordine, de la căutarea locului de muncă până la primul salariu, plus semnalele care te ajută să recunoști o ofertă falsă.</p>`,
    body: `
<h2>Dreptul de muncă în UE</h2>
<p>Libera circulație a lucrătorilor e unul dintre drepturile de bază din Uniunea Europeană. Ca român, poți lucra în Germania ca angajat sau independent, fără viză și fără permis de muncă. Ai dreptul la aceleași condiții de muncă, salariu și protecție socială ca angajații germani. Informații oficiale găsești pe portalul ${SRC("https://europa.eu/youreurope/citizens/work/index_ro.htm", "Your Europe – Muncă")} și pe ${SRC("https://www.make-it-in-germany.com", "Make it in Germany")}.</p>

<h2>Cum găsești un loc de muncă</h2>
<ul>
<li><strong>Agenția federală pentru ocuparea forței de muncă</strong> (Bundesagentur für Arbeit) are un portal oficial cu oferte;</li>
<li><strong>rețeaua europeană EURES</strong>, prin agențiile județene de ocupare a forței de muncă din România;</li>
<li><strong>site-uri de anunțuri</strong> și site-urile firmelor;</li>
<li><strong>agenții de recrutare</strong> autorizate;</li>
<li><strong>recomandări</strong> de la cunoscuți care lucrează deja acolo.</li>
</ul>
<p>Portalul ${SRC("https://eures.europa.eu", "EURES")} e gratuit și are oferte verificate din toată Europa.</p>

<h2>Cum recunoști o ofertă falsă</h2>
<div class="tbl"><table>
<thead><tr><th>Semnal de alarmă</th><th>De ce e o problemă</th></tr></thead>
<tbody>
<tr><td>Ți se cer bani ca să primești locul de muncă</td><td>Agențiile serioase nu cer bani candidaților pentru plasare.</td></tr>
<tr><td>Nu primești contract scris înainte de plecare</td><td>Fără contract nu ai nicio garanție.</td></tr>
<tr><td>Ți se cere să lași actele la angajator</td><td>Actele tale de identitate rămân întotdeauna la tine.</td></tr>
<tr><td>Salariu mult peste piață, fără calificare</td><td>Ofertele prea frumoase sunt adesea capcane.</td></tr>
<tr><td>Nu știi numele și adresa firmei</td><td>O firmă reală are date clare, verificabile.</td></tr>
<tr><td>Ți se spune să lucrezi „fără acte” la început</td><td>Munca la negru te lasă fără asigurare și fără drepturi.</td></tr>
</tbody>
</table></div>
<p>Dacă ai dubii, verifică firma online, întreabă pe cineva care lucrează acolo sau cere sfatul agenției județene de ocupare.</p>

<h2>Contractul de muncă</h2>
<p>În Germania, contractul de muncă („Arbeitsvertrag”) trebuie să cuprindă condițiile esențiale ale muncii. Verifică, înainte să semnezi:</p>
<ul>
<li>numele și adresa angajatorului;</li>
<li>postul și ce vei face concret;</li>
<li>locul de muncă;</li>
<li>salariul brut și cum e plătit;</li>
<li>programul de lucru și orele suplimentare;</li>
<li>concediul;</li>
<li>perioada de probă și termenul de preaviz;</li>
<li>dacă e pe perioadă determinată sau nedeterminată.</li>
</ul>
<p>În Germania există un salariu minim legal, stabilit și actualizat periodic de guvern. Verifică valoarea actuală pe site-urile oficiale germane.</p>
<!-- TODO: nu publica valoarea salariului minim fără verificare la sursa oficială. -->

<h2>Actele pe care le iei de acasă</h2>
<ol>
<li>cartea de identitate sau pașaportul, valabile;</li>
<li>diplomele și certificatele de calificare, cu traduceri, dacă meseria o cere;</li>
<li>permisul de conducere, dacă ai nevoie;</li>
<li>certificatul de naștere și, dacă e cazul, de căsătorie;</li>
<li>cardul european de sănătate, pentru primele zile;</li>
<li>contractul de muncă sau oferta scrisă.</li>
</ol>
<p>Unele meserii sunt reglementate în Germania, de exemplu în sănătate sau în educație, și cer recunoașterea calificării. Informații despre recunoaștere găsești pe portalul oficial ${SRC("https://www.anerkennung-in-deutschland.de", "Anerkennung in Deutschland")}.</p>

<h2>Primele formalități după sosire</h2>
<ol>
<li><strong>Anmeldung</strong>, înregistrarea adresei, în primele două săptămâni. Vezi <a href="/blog/anmeldung-germania-ghid">ghidul despre Anmeldung</a>;</li>
<li><strong>Steuer-ID</strong>, numărul fiscal, vine prin poștă după Anmeldung;</li>
<li><strong>asigurarea medicală</strong>, obligatorie. Vezi ghidul despre <a href="/blog/asigurare-medicala-germania-krankenkasse">Krankenkasse</a>;</li>
<li><strong>contul bancar</strong>, pentru salariu. Vezi ghidul despre <a href="/blog/cont-bancar-germania-romani">contul bancar în Germania</a>;</li>
<li><strong>numărul de asigurare socială</strong>, de obicei făcut prin angajator.</li>
</ol>
<p>Ordinea completă, zi cu zi, e în <a href="/blog/prima-zi-in-germania-checklist">checklist-ul pentru primele 7 zile</a>.</p>

<h2>Salariul și impozitele</h2>
<p>În Germania, angajatorul reține din salariul brut impozitul pe venit și contribuțiile sociale (pensie, sănătate, șomaj, îngrijire). Ce primești în mână e salariul net. Clasa de impozitare („Steuerklasse”) depinde de situația ta familială și influențează cât ți se reține lunar. La final de an poți depune declarația fiscală și, uneori, primești bani înapoi.</p>

<h2>Cazarea</h2>
<p>Găsirea unei locuințe e una dintre cele mai grele părți, mai ales în orașele mari. Unii angajatori sau agenții oferă cazare la început. Dacă nu, poți sta temporar la cunoscuți sau într-o cameră închiriată. Atenție la anunțurile false de închiriere: nu plăti garanția înainte să vezi locuința și să semnezi contractul.</p>

<h2>Drumul spre Germania</h2>
<p>Te luăm de acasă și te lăsăm la adresa din Germania, cu bagaje cu tot, fără să schimbi vreo mașină pe drum. Pentru cei care pleacă pentru mult timp, avem remorci acoperite pentru bagaje. Detalii pe pagina de <a href="/transport-persoane-romania-germania">transport persoane România – Germania</a>.</p>`,
    faq: [
      ["Am nevoie de permis de muncă în Germania?", "Nu. Ca cetățean român, poți lucra în Germania fără permis de muncă."],
      ["Unde găsesc oferte de muncă sigure?", "Pe portalul Agenției federale germane pentru ocuparea forței de muncă, pe EURES și prin agenții autorizate."],
      ["Ce fac dacă mi se cer bani pentru un loc de muncă?", "E un semnal de alarmă. Agențiile serioase nu cer bani candidaților pentru plasare."],
      ["Ce formalități fac după ce ajung?", "Anmeldung, asigurarea medicală, contul bancar și numărul fiscal, care vine prin poștă."],
      ["Trebuie să-mi traduc diplomele?", "Depinde de meserie. Pentru meseriile reglementate e nevoie de recunoașterea calificării."],
    ],
  },

  {
    n: 56, published: true, date: D2, group: G, main: "AT",
    slug: "munca-in-austria-ghid-romani",
    title: "Muncă în Austria: ce trebuie să știi înainte să pleci",
    desc: "Ce trebuie să știi înainte să pleci la muncă în Austria: dreptul de muncă, contractele colective, Meldezettel, asigurarea socială și primele săptămâni.",
    h1: "Muncă în Austria: ce trebuie să știi înainte să pleci",
    cardText: "Contracte colective, Meldezettel, asigurare socială și primele săptămâni.",
    ...IMG.trafic,
    imgAlt: "Microbuz BRO Transport pe ruta spre Austria pentru cei care pleacă la muncă",
    related: ["inregistrare-domiciliu-austria-meldezettel", "cat-dureaza-drumul-romania-austria"],
    intro: `
<p><strong>Ca cetățean român, poți lucra în Austria fără permis de muncă, cu aceleași drepturi ca un lucrător austriac.</strong> Înainte să pleci, asigură-te că ai un contract scris, iar după ce ajungi, înregistrează-ți adresa (Meldezettel) în trei zile și verifică dacă angajatorul te-a înscris la asigurarea socială.</p>
<p>Austria e cea mai apropiată destinație dintre rutele noastre, iar mulți români lucrează acolo în construcții, turism, îngrijire, agricultură și industrie.</p>`,
    body: `
<h2>Dreptul de muncă</h2>
<p>Ca cetățean UE, ai acces liber la piața muncii din Austria. Nu ai nevoie de viză sau de permis de muncă. Informații oficiale găsești pe portalul ${SRC("https://www.oesterreich.gv.at", "oesterreich.gv.at")} și pe portalul european ${SRC("https://eures.europa.eu", "EURES")}.</p>

<h2>Contractele colective: o particularitate austriacă</h2>
<p>În Austria, salariile și multe condiții de muncă sunt stabilite prin contracte colective pe ramuri („Kollektivvertrag”). Asta înseamnă că, pentru fiecare domeniu (construcții, turism, comerț etc.), există un salariu minim și reguli comune, negociate între sindicate și angajatori. Cele mai multe locuri de muncă sunt acoperite de un astfel de contract.</p>
<p>Întreabă angajatorul ce contract colectiv se aplică postului tău. Așa poți verifica dacă salariul oferit e corect.</p>
<h3>Al 13-lea și al 14-lea salariu</h3>
<p>În multe contracte colective din Austria există plăți speciale, numite popular al 13-lea și al 14-lea salariu, plătite de obicei vara și înainte de Crăciun. Verifică în contractul tău dacă și cum se aplică.</p>
<!-- TODO: de verificat formularea despre plățile speciale (Sonderzahlungen) pentru contractele colective relevante. -->

<h2>Ce trebuie să conțină contractul</h2>
<ul>
<li>datele angajatorului;</li>
<li>postul și încadrarea în contractul colectiv;</li>
<li>salariul brut;</li>
<li>programul de lucru;</li>
<li>locul de muncă;</li>
<li>perioada de probă;</li>
<li>concediul;</li>
<li>durata contractului.</li>
</ul>
<p>Dacă primești doar o înțelegere verbală, cere un document scris. În Austria, angajatul are dreptul să primească în scris principalele condiții ale contractului („Dienstzettel”).</p>

<h2>Formalitățile după sosire</h2>
<div class="tbl"><table>
<thead><tr><th>Ce</th><th>Când</th><th>Unde</th></tr></thead>
<tbody>
<tr><td>Meldezettel (înregistrarea adresei)</td><td>în 3 zile de la mutare</td><td>biroul de evidență al orașului</td></tr>
<tr><td>Înscrierea la asigurarea socială</td><td>de obicei înainte de începerea muncii</td><td>se face de angajator</td></tr>
<tr><td>Certificatul de înregistrare UE</td><td>în 4 luni, dacă stai peste 3 luni</td><td>autoritatea pentru străini</td></tr>
<tr><td>Contul bancar</td><td>în primele zile</td><td>orice bancă</td></tr>
</tbody>
</table></div>
<p>Pașii pentru Meldezettel sunt în ghidul despre <a href="/blog/inregistrare-domiciliu-austria-meldezettel">Meldezettel în Austria</a>.</p>

<h2>Asigurarea socială</h2>
<p>În Austria, angajatorul trebuie să te înscrie la asigurarea socială, de regulă înainte să începi munca. Primești un card de asigurat („e-card”), cu care mergi la medic. Asigurarea acoperă sănătatea, pensia, șomajul și accidentele de muncă. Dacă nu primești e-card-ul la câteva săptămâni după ce ai început munca, întreabă angajatorul.</p>
<p>Verifică pe fluturașul de salariu („Lohnzettel”) că se rețin contribuțiile sociale. Dacă nu se rețin, e posibil să nu fii înregistrat corect.</p>

<h2>Munca în turism și sezonieră</h2>
<p>Mulți români lucrează sezonier în Austria, în stațiunile de schi iarna sau în turism vara. Chiar dacă e doar pentru câteva luni, ai aceleași drepturi: contract, asigurare, salariu conform contractului colectiv. Pentru șederile scurte, sub trei luni, nu e nevoie de certificatul de înregistrare UE, dar Meldezettel rămâne obligatoriu.</p>

<h2>Limba</h2>
<p>În Austria se vorbește germana, cu un accent și câteva cuvinte diferite față de Germania. Pentru multe locuri de muncă e nevoie de cel puțin câteva noțiuni de bază. Chiar dacă angajatorul nu o cere, să știi câteva sute de cuvinte îți ușurează mult viața de zi cu zi.</p>

<h2>Cazarea</h2>
<p>În Viena și în orașele mari, chiriile sunt mari, iar găsirea unei locuințe poate dura. Mulți angajatori din turism și construcții oferă cazare. Dacă îți cauți singur, nu plăti garanția înainte să vezi locuința și să semnezi contractul. Fii atent la anunțurile prea bune ca să fie adevărate.</p>

<h2>Ce iei de acasă</h2>
<ol>
<li>actul de identitate valabil;</li>
<li>contractul sau oferta de muncă, în scris;</li>
<li>diplomele și certificatele, cu traduceri, dacă e nevoie;</li>
<li>cardul european de sănătate, pentru primele zile;</li>
<li>haine de lucru și încălțăminte de protecție, dacă meseria o cere.</li>
</ol>

<h2>Drumul spre Austria</h2>
<p>Drumul până în Austria e cel mai scurt dintre rutele noastre. Cât durează, afli din ghidul despre <a href="/blog/cat-dureaza-drumul-romania-austria">drumul România – Austria</a>. Te luăm de acasă și te lăsăm la adresă. Detalii pe pagina de <a href="/transport-persoane-romania-austria">transport persoane România – Austria</a>.</p>`,
    faq: [
      ["Am nevoie de permis de muncă în Austria?", "Nu. Ca cetățean român, ai acces liber la piața muncii din Austria."],
      ["Ce este Kollektivvertrag?", "Contractul colectiv pe ramură, care stabilește salariile minime și multe condiții de muncă pentru un domeniu."],
      ["Cine mă înscrie la asigurarea socială?", "Angajatorul, de regulă înainte să începi munca. Primești apoi e-card-ul."],
      ["În câte zile fac Meldezettel?", "În termen de trei zile de la mutarea într-o locuință."],
      ["Pot lucra sezonier în Austria?", "Da, cu aceleași drepturi: contract, asigurare și salariu conform contractului colectiv."],
    ],
  },

  {
    n: 57, published: true, date: D2, group: G, main: "NL",
    slug: "munca-in-olanda-ghid-romani",
    title: "Muncă în Olanda pentru români: ghid practic",
    desc: "Ghid practic pentru românii care vor să lucreze în Olanda: agențiile de muncă, contractul, BSN, asigurarea medicală obligatorie, cazarea și primii pași.",
    h1: "Muncă în Olanda pentru români: ghid practic",
    cardText: "Agenții de muncă, BSN, asigurarea obligatorie, cazarea și primele săptămâni.",
    ...IMG.masterRemorca,
    imgAlt: "Microbuz cu remorcă pe ruta spre Olanda pentru cei care pleacă la muncă",
    related: ["inschrijving-olanda-bsn", "cat-dureaza-drumul-romania-olanda"],
    intro: `
<p><strong>Ca cetățean român, poți lucra în Olanda fără permis de muncă.</strong> Îți trebuie un act de identitate valabil, un contract, numărul BSN, pe care îl primești la înscrierea la primărie sau la RNI, și asigurarea medicală de bază, obligatorie pentru cei care lucrează acolo.</p>
<p>Mulți români ajung în Olanda prin agenții de muncă, în agricultură, sere, logistică și producție. Mai jos găsești ce să verifici la o agenție și care sunt primii pași.</p>`,
    body: `
<h2>Dreptul de muncă</h2>
<p>Ca cetățean UE, ai acces liber la piața muncii din Olanda. Informații oficiale, în engleză, găsești pe site-ul guvernului olandez, ${SRC("https://www.government.nl", "government.nl")}, și pe portalul european ${SRC("https://eures.europa.eu", "EURES")}.</p>

<h2>Agențiile de muncă: ce să verifici</h2>
<p>O mare parte din românii care lucrează în Olanda sunt angajați prin agenții de muncă temporară („uitzendbureau”). Multe sunt serioase, dar există și abuzuri. Înainte să semnezi:</p>
<ul>
<li><strong>verifică dacă agenția e certificată</strong>. În Olanda există un sistem de certificare pentru agenții (de exemplu, certificarea SNA). Întreabă agenția și verifică online;</li>
<li><strong>cere contractul în scris</strong>, într-o limbă pe care o înțelegi;</li>
<li><strong>întreabă ce se reține din salariu</strong> pentru cazare, transport sau asigurare și cât;</li>
<li><strong>nu lăsa actele tale</strong> la agenție;</li>
<li><strong>nu plăti bani</strong> ca să primești locul de muncă.</li>
</ul>
<!-- TODO: de verificat denumirea actuală a sistemului de certificare pentru agenții (SNA / NEN 4400) înainte de actualizare. -->

<h2>Contractul și salariul</h2>
<p>În Olanda există un salariu minim legal, actualizat periodic. Multe domenii au și contracte colective („cao”) care stabilesc salarii și condiții. Verifică pe site-ul guvernului olandez valoarea actuală a salariului minim și întreabă ce contract colectiv se aplică postului tău.</p>
<p>Ce trebuie să cuprindă contractul:</p>
<ul>
<li>angajatorul sau agenția;</li>
<li>postul și locul de muncă;</li>
<li>salariul brut pe oră sau pe lună;</li>
<li>numărul de ore pe săptămână;</li>
<li>reținerile pentru cazare sau alte servicii, dacă există;</li>
<li>durata contractului și preavizul.</li>
</ul>
<p>Pe fluturașul de salariu („loonstrook”) vezi tot ce ți s-a plătit și ce ți s-a reținut. Păstrează-le pe toate.</p>

<h2>BSN și înscrierea</h2>
<p>Fără BSN, angajatorul nu te poate plăti corect. Îl primești când te înscrii:</p>
<ul>
<li>la primărie (BRP), dacă stai mai mult de patru luni;</li>
<li>la un birou RNI, dacă stai mai puțin.</li>
</ul>
<p>Pașii sunt explicați în ghidul despre <a href="/blog/inschrijving-olanda-bsn">BSN și înscrierea în Olanda</a>.</p>

<h2>Asigurarea medicală obligatorie</h2>
<p>Dacă lucrezi în Olanda, de regulă trebuie să îți faci asigurarea medicală de bază („basisverzekering”) la o firmă olandeză de asigurări, în primele luni după ce începi munca. Unele agenții oferă o asigurare colectivă. Asigurarea se plătește lunar. Pentru unele categorii de venituri există o alocație („zorgtoeslag”) care acoperă o parte din cost. Informații oficiale pe ${SRC("https://www.government.nl/topics/health-insurance", "government.nl – Health insurance")}.</p>

<h2>Cazarea prin agenție</h2>
<p>Multe agenții oferă cazare, iar costul se reține din salariu. E practic, dar verifică:</p>
<ul>
<li>cât costă pe săptămână și ce include;</li>
<li>câte persoane stau în cameră și în locuință;</li>
<li>dacă pierzi cazarea în momentul în care pierzi locul de muncă;</li>
<li>dacă te poți înscrie la acea adresă la primărie.</li>
</ul>

<h2>Transportul la muncă</h2>
<p>În Olanda, mulți merg la muncă cu bicicleta. Unele agenții oferă transport cu microbuzul până la locul de muncă, uneori contra unei rețineri din salariu. Întreabă de la început cum ajungi la muncă și cât costă.</p>

<h2>Limba</h2>
<p>Mulți olandezi vorbesc bine engleza, iar pentru multe locuri de muncă din agricultură sau logistică nu e nevoie de olandeză. Pentru posturi mai bune sau pentru o viață mai ușoară pe termen lung, olandeza ajută mult. Multe primării au cursuri pentru nou-veniți.</p>

<h2>Ce iei de acasă</h2>
<ol>
<li>actul de identitate valabil;</li>
<li>certificatul de naștere, în formatul cerut pentru înscrierea la primărie;</li>
<li>contractul sau oferta de muncă;</li>
<li>cardul european de sănătate, pentru primele zile;</li>
<li>haine de lucru, încălțăminte comodă sau de protecție, haină de ploaie.</li>
</ol>

<h2>Drumul spre Olanda</h2>
<p>Drumul durează în jur de o zi și jumătate. Cum îl faci mai ușor afli din ghidul despre <a href="/blog/cat-dureaza-drumul-romania-olanda">câte ore sunt până în Olanda</a>. Te luăm de acasă și te lăsăm la adresă, inclusiv la cazarea de la agenție. Detalii pe pagina de <a href="/transport-persoane-romania-olanda">transport persoane România – Olanda</a>.</p>`,
    faq: [
      ["Am nevoie de permis de muncă în Olanda?", "Nu. Ca cetățean român, ai acces liber la piața muncii din Olanda."],
      ["Cum verific o agenție de muncă din Olanda?", "Întreabă de certificare, cere contractul în scris, verifică reținerile și nu lăsa actele la agenție."],
      ["E obligatorie asigurarea medicală în Olanda?", "Da, de regulă, pentru cei care lucrează acolo. Se face la o firmă olandeză de asigurări."],
      ["Ce este BSN?", "Numărul personal din Olanda, de care ai nevoie ca să fii plătit corect."],
      ["Mă puteți lăsa la cazarea agenției?", "Da, transportul e de la adresă la adresă. Spune-ne adresa exactă la rezervare."],
    ],
  },

  {
    n: 58, published: true, date: D2, group: G, main: "BE",
    slug: "munca-in-belgia-ghid-romani",
    title: "Muncă în Belgia: acte, contracte, primele săptămâni",
    desc: "Ce trebuie să știi dacă pleci la muncă în Belgia: dreptul de muncă, contractul, înregistrarea la comună, asigurarea de sănătate și primele săptămâni.",
    h1: "Muncă în Belgia: acte, contracte, primele săptămâni",
    cardText: "Contractul, înregistrarea la comună, casa de sănătate și limbile din Belgia.",
    ...IMG.lux,
    imgAlt: "Interior microbuz pentru drumul spre Belgia al celor care pleacă la muncă",
    related: ["inregistrare-belgia-comuna", "cat-dureaza-drumul-romania-belgia"],
    intro: `
<p><strong>Ca cetățean român, poți lucra în Belgia fără permis de muncă, cu aceleași drepturi ca un lucrător belgian.</strong> Ai nevoie de un contract, de un act de identitate valabil și, dacă stai mai mult de trei luni, de înregistrarea la comuna unde locuiești. Tot de la început te înscrii și la o casă de asigurări de sănătate.</p>
<p>Belgia are trei regiuni și trei limbi oficiale, iar asta contează la muncă și la acte. Mai jos găsești ce să știi înainte și după ce ajungi.</p>`,
    body: `
<h2>Dreptul de muncă</h2>
<p>Ca cetățean UE, ai acces liber la piața muncii din Belgia. Poți lucra ca angajat sau ca independent. Informații oficiale găsești pe portalul federal ${SRC("https://www.belgium.be", "belgium.be")} și pe portalul european ${SRC("https://eures.europa.eu", "EURES")}.</p>

<h2>Belgia, o țară cu trei limbi</h2>
<div class="tbl"><table>
<thead><tr><th>Regiune</th><th>Limba principală</th><th>Orașe</th></tr></thead>
<tbody>
<tr><td>Flandra (nord)</td><td>olandeză</td><td>Antwerpen, Gent, Brugge, Leuven</td></tr>
<tr><td>Valonia (sud)</td><td>franceză</td><td>Liège, Charleroi, Namur</td></tr>
<tr><td>Regiunea Bruxelles-Capitală</td><td>franceză și olandeză</td><td>Bruxelles</td></tr>
</tbody>
</table></div>
<p>În estul țării există și o mică comunitate de limbă germană. Limba regiunii contează la acte, la contracte și la comunicarea cu instituțiile. În Bruxelles poți folosi franceza sau olandeza.</p>

<h2>Contractul de muncă</h2>
<p>În Belgia, multe condiții de muncă și salariile minime sunt stabilite prin acorduri colective pe sectoare, negociate de comisii paritare. Asta înseamnă că salariul minim depinde și de sectorul în care lucrezi. Întreabă angajatorul de ce comisie paritară aparține postul tău.</p>
<p>Ce verifici în contract:</p>
<ul>
<li>angajatorul și locul de muncă;</li>
<li>postul;</li>
<li>salariul brut;</li>
<li>programul;</li>
<li>durata contractului (determinată sau nedeterminată);</li>
<li>concediul și preavizul.</li>
</ul>
<!-- TODO: de verificat formularea despre comisiile paritare și salariile minime sectoriale. -->

<h2>Munca prin agenții (interim)</h2>
<p>Mulți români lucrează în Belgia prin agenții de muncă temporară („interim”). Agenția e angajatorul tău, iar tu lucrezi la o firmă client. Regulile de bază sunt aceleași: contract scris, salariu conform sectorului, fără bani ceruți pentru plasare, actele rămân la tine.</p>

<h2>Înregistrarea la comună</h2>
<p>Dacă stai mai mult de trei luni, te prezinți la comuna unde locuiești în primele opt zile de la sosire. Urmează vizita agentului de cartier, care verifică adresa, apoi primești cardul de rezident pentru cetățenii UE. Pașii sunt în ghidul despre <a href="/blog/inregistrare-belgia-comuna">înregistrarea la comună în Belgia</a>.</p>

<h2>Asigurarea de sănătate</h2>
<p>Ca angajat în Belgia, trebuie să te înscrii la o casă de asigurări de sănătate („mutualité” în franceză, „ziekenfonds” în olandeză). Există mai multe, iar alegerea e a ta. După înscriere, poți merge la medic și primești o parte din costuri înapoi. Până te înscrii, cardul european de sănătate te ajută pentru urgențe.</p>

<h2>Numărul de registru național</h2>
<p>După înregistrare primești numărul de registru național. Îți trebuie pentru salariu, impozite, asigurarea de sănătate și multe alte lucruri. Păstrează-l la îndemână.</p>

<h2>Salariul și reținerile</h2>
<p>Din salariul brut se rețin contribuțiile sociale și impozitul pe venit. Pe fluturașul de salariu vezi tot ce ți s-a plătit și ce ți s-a reținut. În Belgia există și alte elemente de salarizare, de exemplu tichete de masă la unele firme sau prime de sfârșit de an, în funcție de sector. Verifică ce se aplică în cazul tău.</p>

<h2>Primele săptămâni, pe scurt</h2>
<ol>
<li>te prezinți la comună, în primele opt zile;</li>
<li>îți deschizi cont bancar;</li>
<li>te înscrii la o casă de asigurări de sănătate;</li>
<li>îți pui numele pe sonerie și pe cutia poștală, pentru vizita agentului de cartier;</li>
<li>păstrezi toate documentele primite într-un dosar.</li>
</ol>

<h2>Cazarea</h2>
<p>Chiriile în Bruxelles și Antwerpen sunt mari. Contractele de închiriere în Belgia prevăd de obicei o garanție, depusă adesea într-un cont blocat. Nu plăti garanția în numerar unei persoane pe care nu o cunoști și nu plăti înainte să vezi locuința.</p>

<h2>Ce iei de acasă</h2>
<ol>
<li>actul de identitate valabil;</li>
<li>certificatul de naștere și, dacă e cazul, de căsătorie, întreabă comuna dacă trebuie traduse sau apostilate;</li>
<li>contractul sau oferta de muncă;</li>
<li>diplomele, dacă meseria o cere;</li>
<li>cardul european de sănătate.</li>
</ol>

<h2>Drumul spre Belgia</h2>
<p>Drumul durează în jur de o zi și jumătate. Traseul și opririle sunt în ghidul despre <a href="/blog/cat-dureaza-drumul-romania-belgia">drumul România – Belgia</a>. Te luăm de acasă și te lăsăm la adresă. Detalii pe pagina de <a href="/transport-persoane-romania-belgia">transport persoane România – Belgia</a>.</p>`,
    faq: [
      ["Am nevoie de permis de muncă în Belgia?", "Nu. Ca cetățean român, ai acces liber la piața muncii din Belgia."],
      ["Ce limbă se vorbește în Belgia?", "Olandeza în Flandra, franceza în Valonia și ambele în Bruxelles. În est există și o comunitate de limbă germană."],
      ["Ce este o casă de asigurări de sănătate?", "Mutualité sau ziekenfonds, la care te înscrii ca angajat pentru a primi înapoi o parte din costurile medicale."],
      ["În câte zile mă înregistrez la comună?", "Dacă stai mai mult de trei luni, în primele opt zile de la sosire."],
      ["Pot lucra prin agenție în Belgia?", "Da, prin agenții de muncă temporară (interim), cu contract scris și salariu conform sectorului."],
    ],
  },
];
