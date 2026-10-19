// Valul 3 – Grup C (29–34): înregistrări în țările de destinație, alimente și bani cash. Termenele se verifică pe sursele oficiale legate.
import { IMG, D2, SRC } from "./_img.mjs";
const G = "Acte și reguli";

export default [
  {
    n: 29, published: true, date: D2, group: G, main: "DE",
    slug: "anmeldung-germania-ghid",
    title: "Anmeldung în Germania: ce e și cum îl faci",
    desc: "Ce este Anmeldung, înregistrarea adresei în Germania: în cât timp trebuie făcut, ce acte îți trebuie, cum te programezi și ce primești după aceea.",
    h1: "Anmeldung în Germania: ce e și cum îl faci",
    cardText: "Termenul, actele, programarea și de ce fără el nu poți face aproape nimic.",
    ...IMG.master,
    imgAlt: "Microbuz BRO Transport pentru cei care se mută în Germania",
    related: ["prima-zi-in-germania-checklist", "cont-bancar-germania-romani"],
    intro: `
<p><strong>Anmeldung este înregistrarea adresei tale la primăria orașului din Germania în care locuiești.</strong> Oricine se mută într-o locuință din Germania trebuie să o facă, de regulă în primele două săptămâni după mutare. Se face la biroul de evidență a populației, numit „Bürgeramt” sau „Einwohnermeldeamt”.</p>
<p>Fără Anmeldung nu primești numărul fiscal, îți deschizi greu un cont bancar și nu poți rezolva multe alte lucruri. De aceea e primul pas după ce ajungi.</p>`,
    body: `
<h2>De ce e atât de important</h2>
<p>Certificatul de înregistrare („Meldebescheinigung”) e unul dintre cele mai cerute acte în Germania. Îți trebuie pentru:</p>
<ul>
<li>numărul de identificare fiscală (Steuer-ID), pe care îl primești automat prin poștă după înregistrare;</li>
<li>contul bancar;</li>
<li>contractul de muncă și salariu;</li>
<li>asigurarea medicală (Krankenkasse);</li>
<li>alocația pentru copii (Kindergeld) și înscrierea copiilor la școală;</li>
<li>contractele de telefon și internet.</li>
</ul>

<h2>În cât timp trebuie făcut</h2>
<p>Legea germană privind evidența populației (Bundesmeldegesetz) cere ca înregistrarea să se facă în termen de două săptămâni de la mutarea în locuință. În orașele mari, programările pot fi greu de găsit, așa că începe să cauți o programare imediat ce știi data mutării. Dacă nu găsești programare în termen, păstrează dovada că ai încercat.</p>
<p>Informații oficiale, în germană și engleză, găsești pe portalul guvernului german ${SRC("https://www.make-it-in-germany.com/en/living-in-germany/housing-mobility/registration", "Make it in Germany")} și pe site-ul primăriei orașului tău.</p>
<!-- TODO: de verificat periodic termenul și eventualele amenzi pe site-ul oficial. -->

<h2>Ce acte îți trebuie</h2>
<div class="tbl"><table>
<thead><tr><th>Act</th><th>Ce este</th></tr></thead>
<tbody>
<tr><td>Carte de identitate sau pașaport</td><td>Actul tău valabil. Pentru copii, actele lor.</td></tr>
<tr><td>Formularul de înregistrare („Anmeldeformular”)</td><td>Se descarcă de pe site-ul primăriei sau se primește la ghișeu.</td></tr>
<tr><td>Confirmarea proprietarului („Wohnungsgeberbestätigung”)</td><td>Un formular semnat de proprietar sau de administrator, care confirmă că te-ai mutat acolo.</td></tr>
<tr><td>Certificate de naștere sau căsătorie</td><td>Uneori, pentru familie. Unele primării cer traduceri.</td></tr>
</tbody>
</table></div>
<p>Confirmarea proprietarului e obligatorie. Dacă stai în chirie, cere-o de la proprietar când semnezi contractul. Dacă stai la rude sau la prieteni, persoana care îți dă locuința trebuie să o semneze.</p>

<h2>Pas cu pas</h2>
<ol>
<li><strong>Găsește biroul</strong>: caută pe internet „Bürgeramt” plus numele orașului tău.</li>
<li><strong>Fă-ți programare</strong> online sau la telefon. În unele orașe mici poți merge și fără programare.</li>
<li><strong>Completează formularul</strong>. Dacă nu știi germană, cere ajutorul cuiva care știe sau folosește traducerea de pe site-ul primăriei, unde există.</li>
<li><strong>Mergi la programare</strong> cu toate actele în original.</li>
<li><strong>Primești certificatul</strong> de înregistrare, de obicei pe loc. Păstrează-l bine.</li>
</ol>
<p>În multe orașe, înregistrarea e gratuită.</p>

<h2>Ce primești după Anmeldung</h2>
<ul>
<li><strong>Meldebescheinigung</strong>, certificatul de înregistrare, pe loc;</li>
<li><strong>Steuer-ID</strong>, numărul fiscal, prin poștă, după câteva săptămâni. E foarte important pentru salariu, așa că dă-l angajatorului imediat ce îl primești;</li>
<li>uneori, scrisori de la alte instituții, de exemplu despre taxa radio-TV („Rundfunkbeitrag”), care se plătește pe locuință.</li>
</ul>

<h2>Abmeldung: când pleci din Germania</h2>
<p>Dacă pleci definitiv din Germania, trebuie să faci „Abmeldung”, adică radierea adresei. Fără ea, poți primi în continuare scrisori și facturi, de exemplu pentru taxa radio-TV. Se face tot la Bürgeramt, de obicei cu un formular simplu. Dacă te muți în alt oraș din Germania, faci doar Anmeldung la noua adresă.</p>

<h2>Sfaturi de la cei care au trecut prin asta</h2>
<ul>
<li>caută programarea din prima zi. În orașe ca München, Berlin sau Frankfurt pot fi greu de găsit;</li>
<li>verifică dimineața devreme pe site, când se eliberează programări noi;</li>
<li>scrie numele exact cum apare pe ușă și pe cutia poștală. Scrisorile importante, inclusiv Steuer-ID, vin prin poștă;</li>
<li>păstrează o copie a certificatului în telefon și una pe hârtie.</li>
</ul>

<h2>Unde se încadrează în primele zile</h2>
<p>Anmeldung e doar unul dintre pașii din primele zile în Germania. Ordinea completă, cu cont bancar, asigurare medicală și telefon, o găsești în <a href="/blog/prima-zi-in-germania-checklist">checklist-ul pentru primele 7 zile</a>. Despre contul bancar găsești mai multe în ghidul despre <a href="/blog/cont-bancar-germania-romani">contul bancar în Germania</a>.</p>

<h2>Drumul până la noua adresă</h2>
<p>Te mutăm până la ușă: te luăm de acasă din România și te lăsăm la noua adresă din Germania, cu bagaje cu tot. Dacă ai multe lucruri, le poți trimite și separat, ca și colet. Detalii pe pagina de <a href="/transport-persoane-romania-germania">transport persoane România – Germania</a>.</p>`,
    faq: [
      ["În cât timp trebuie să fac Anmeldung?", "De regulă în termen de două săptămâni de la mutarea în locuință. Verifică pe site-ul primăriei orașului tău."],
      ["Ce acte îmi trebuie pentru Anmeldung?", "Actul de identitate, formularul de înregistrare și confirmarea proprietarului (Wohnungsgeberbestätigung)."],
      ["Costă ceva înregistrarea?", "În multe orașe e gratuită. Verifică pe site-ul primăriei."],
      ["Ce primesc după Anmeldung?", "Certificatul de înregistrare pe loc și, prin poștă, numărul fiscal (Steuer-ID)."],
      ["Ce fac când plec definitiv din Germania?", "Faci Abmeldung, adică radierea adresei, la Bürgeramt."],
    ],
  },

  {
    n: 30, published: true, date: D2, group: G, main: "AT",
    slug: "inregistrare-domiciliu-austria-meldezettel",
    title: "Meldezettel în Austria: înregistrarea adresei",
    desc: "Ce este Meldezettel, înregistrarea adresei în Austria: în câte zile trebuie făcută, ce formular completezi, ce semnează proprietarul și ce urmează.",
    h1: "Meldezettel în Austria: înregistrarea adresei pas cu pas",
    cardText: "Termenul de 3 zile, formularul, semnătura proprietarului și certificatul UE.",
    ...IMG.trafic,
    imgAlt: "Microbuz BRO Transport pe ruta România – Austria",
    related: ["munca-in-austria-ghid-romani", "cat-dureaza-drumul-romania-austria"],
    intro: `
<p><strong>Meldezettel este confirmarea înregistrării adresei tale în Austria.</strong> Oricine se mută într-o locuință din Austria trebuie să se înregistreze la biroul de evidență („Meldeamt” sau „Meldeservice”) în termen de trei zile de la mutare.</p>
<p>Dacă rămâi în Austria mai mult de trei luni, ca cetățean UE ai nevoie și de un certificat de înregistrare („Anmeldebescheinigung”). Mai jos găsești amândoi pașii.</p>`,
    body: `
<h2>Pasul 1: Meldezettel, în trei zile</h2>
<p>Legea austriacă privind evidența populației cere înregistrarea în termen de trei zile de la mutarea într-o locuință. E un termen scurt, așa că pregătește actele dinainte.</p>
<h3>Ce îți trebuie</h3>
<ul>
<li><strong>formularul de înregistrare („Meldezettel”)</strong>, completat. Se descarcă de pe portalul oficial ${SRC("https://www.oesterreich.gv.at", "oesterreich.gv.at")} sau se primește la ghișeu;</li>
<li><strong>semnătura proprietarului</strong> sau a persoanei care îți dă locuința („Unterkunftgeber”), pe formular;</li>
<li><strong>actul de identitate</strong> valabil, carte de identitate sau pașaport;</li>
<li>uneori, certificatul de naștere sau alte acte, în funcție de birou.</li>
</ul>
<h3>Unde mergi</h3>
<p>La biroul de evidență al orașului sau al comunei. În Viena sunt birourile „Meldeservice” din fiecare district. În orașele mai mici, de obicei la primărie („Gemeindeamt”).</p>
<h3>Ce primești</h3>
<p>Primești confirmarea înregistrării, numită tot „Meldezettel” sau „Meldebestätigung”. Păstreaz-o, pentru că o vei folosi des.</p>

<h2>Pasul 2: certificatul de înregistrare pentru cetățeni UE</h2>
<p>Ca cetățean român, poți locui în Austria fără viză. Dacă stai mai mult de trei luni, trebuie să ceri un certificat de înregistrare („Anmeldebescheinigung”) în termen de patru luni de la sosire. Se cere de la autoritatea competentă pentru străini din zona ta, de exemplu în Viena la MA 35.</p>
<div class="tbl"><table>
<thead><tr><th>Dacă ești…</th><th>Ce dovedești de obicei</th></tr></thead>
<tbody>
<tr><td>Angajat</td><td>Contractul de muncă sau confirmarea angajatorului.</td></tr>
<tr><td>Independent</td><td>Dovada activității.</td></tr>
<tr><td>Student</td><td>Înscrierea la studii, asigurarea medicală și mijloace de trai.</td></tr>
<tr><td>Fără activitate</td><td>Asigurare medicală și mijloace suficiente de trai.</td></tr>
</tbody>
</table></div>
<p>Lista exactă a actelor și eventualele taxe sunt pe ${SRC("https://www.oesterreich.gv.at", "oesterreich.gv.at")}, la secțiunea pentru cetățenii UE.</p>
<!-- TODO: de verificat periodic termenele (3 zile / 4 luni) și taxele pe oesterreich.gv.at. -->

<h2>De ce ai nevoie de Meldezettel</h2>
<ul>
<li>pentru contul bancar;</li>
<li>pentru angajare și pentru asigurarea socială;</li>
<li>pentru înscrierea copiilor la grădiniță sau la școală;</li>
<li>pentru contractele de telefon, internet sau curent;</li>
<li>pentru alocația familială („Familienbeihilfe”);</li>
<li>pentru înmatricularea unei mașini în Austria.</li>
</ul>

<h2>Când te muți sau pleci</h2>
<p>Dacă te muți la altă adresă în Austria, te înregistrezi la noua adresă tot în trei zile. Dacă pleci definitiv din Austria, faci deregistrarea („Abmeldung”), tot în trei zile, de la biroul de evidență. Se poate face uneori și online, cu identitate digitală.</p>

<h2>Sfaturi practice</h2>
<ul>
<li>cere-i proprietarului să semneze formularul încă de la semnarea contractului de închiriere;</li>
<li>dacă stai la rude sau la prieteni, ei trebuie să semneze ca „Unterkunftgeber”;</li>
<li>pune numele pe cutia poștală și pe sonerie. Scrisorile oficiale vin prin poștă;</li>
<li>fă-ți o copie a confirmării și păstreaz-o în telefon.</li>
</ul>

<h2>Locuință principală și secundară</h2>
<p>Pe formular alegi dacă adresa e locuința principală („Hauptwohnsitz”) sau secundară („Nebenwohnsitz”). Dacă locuiești și muncești în Austria, de regulă e locuința principală. Alegerea contează pentru unele drepturi și taxe locale, așa că întreabă la birou dacă nu ești sigur.</p>

<h2>Ce urmează după înregistrare</h2>
<p>După Meldezettel urmează, de obicei, contul bancar, asigurarea și începerea muncii. Ce să știi despre muncă afli din ghidul despre <a href="/blog/munca-in-austria-ghid-romani">munca în Austria</a>. Cât durează drumul până acolo, afli din articolul despre <a href="/blog/cat-dureaza-drumul-romania-austria">drumul România – Austria</a>.</p>

<h2>Ajungi la noua adresă cu noi</h2>
<p>Te luăm de acasă din România și te lăsăm la adresa din Austria, cu bagaje cu tot. Dacă ai multe lucruri, le poți trimite separat, ca și colet. Detalii pe pagina de <a href="/transport-persoane-romania-austria">transport persoane România – Austria</a>.</p>`,
    faq: [
      ["În cât timp trebuie făcut Meldezettel?", "În termen de trei zile de la mutarea într-o locuință din Austria."],
      ["Cine semnează formularul?", "Proprietarul sau persoana care îți dă locuința (Unterkunftgeber) și tu."],
      ["Mai am nevoie de alt act dacă stau mai mult de trei luni?", "Da. Ca cetățean UE ceri certificatul de înregistrare (Anmeldebescheinigung), în termen de patru luni de la sosire."],
      ["Unde fac Meldezettel în Viena?", "La unul dintre birourile Meldeservice din districtele Vienei."],
      ["Ce fac când plec din Austria?", "Faci deregistrarea la biroul de evidență, tot în termen de trei zile."],
    ],
  },

  {
    n: 31, published: true, date: D2, group: G, main: "NL",
    slug: "inschrijving-olanda-bsn",
    title: "BSN și înscrierea la primărie în Olanda",
    desc: "Ce este numărul BSN în Olanda, cum te înscrii la primărie (gemeente) dacă stai mai mult de patru luni și ce faci dacă stai mai puțin, prin RNI.",
    h1: "BSN și înscrierea la primărie în Olanda",
    cardText: "BRP sau RNI, ce acte îți trebuie și de ce fără BSN nu poți lucra.",
    ...IMG.masterRemorca,
    imgAlt: "Microbuz cu remorcă pe ruta România – Olanda",
    related: ["munca-in-olanda-ghid-romani", "cat-dureaza-drumul-romania-olanda"],
    intro: `
<p><strong>BSN („burgerservicenummer”) este numărul personal de identificare din Olanda, de care ai nevoie ca să lucrezi, să ai cont bancar și asigurare medicală.</strong> Îl primești când te înscrii la primărie („gemeente”), dacă stai mai mult de patru luni, sau prin registrul pentru nerezidenți (RNI), dacă stai mai puțin.</p>
<p>Fără BSN, angajatorul nu te poate plăti corect, așa că înscrierea e unul dintre primii pași după ce ajungi.</p>`,
    body: `
<h2>Două variante: BRP sau RNI</h2>
<div class="tbl"><table>
<thead><tr><th>Cât stai în Olanda</th><th>Unde te înscrii</th><th>Ce primești</th></tr></thead>
<tbody>
<tr><td>Mai mult de 4 luni</td><td>La primăria orașului unde locuiești, în registrul populației (BRP)</td><td>BSN și înregistrarea adresei</td></tr>
<tr><td>Mai puțin de 4 luni</td><td>La un birou RNI (registrul pentru nerezidenți), aflat în anumite primării</td><td>BSN, fără înregistrarea adresei ca locuitor</td></tr>
</tbody>
</table></div>
<p>Informațiile oficiale, în engleză, sunt pe site-ul guvernului olandez, ${SRC("https://www.government.nl/topics/personal-data/citizen-service-number-bsn", "government.nl")}, și pe site-ul primăriei orașului tău.</p>

<h2>Înscrierea în BRP (peste 4 luni)</h2>
<h3>Termenul</h3>
<p>Dacă vii să locuiești în Olanda pentru mai mult de patru luni, trebuie să te înscrii la primărie în primele cinci zile de la sosire. Programarea se face de obicei online sau la telefon.</p>
<!-- TODO: termenul de 5 zile – de reverificat periodic pe government.nl. -->
<h3>Ce acte îți trebuie</h3>
<ul>
<li>actul de identitate valabil, carte de identitate sau pașaport;</li>
<li>dovada adresei: contract de închiriere sau o declarație a persoanei la care locuiești, cu o copie a actului ei;</li>
<li>uneori, certificatul de naștere, cu apostilă sau în format multilingv, după cerințele primăriei.</li>
</ul>
<p>Certificatele de naștere și de căsătorie pot avea nevoie de o formă recunoscută în Olanda. Întreabă primăria din timp, ca să le pregătești înainte să pleci din România.</p>
<h3>Ce primești</h3>
<p>Primești BSN-ul, de obicei pe loc sau în câteva zile, prin scrisoare. Adresa ta e trecută în registrul populației.</p>

<h2>Înscrierea în RNI (sub 4 luni)</h2>
<p>Dacă vii pentru un contract scurt, de exemplu pentru muncă sezonieră, te înscrii într-un birou RNI. Acestea se află doar în anumite primării, așa că verifică pe site-ul guvernului care e cel mai apropiat. Îți trebuie actul de identitate valabil. Primești BSN-ul, cu care poți lucra.</p>
<p>Dacă rămâi apoi mai mult de patru luni, trebuie să te înscrii și în BRP, la primăria orașului unde locuiești.</p>

<h2>La ce îți trebuie BSN</h2>
<ul>
<li>la angajator, pentru salariu și impozite;</li>
<li>la bancă, pentru deschiderea contului;</li>
<li>la asigurarea medicală obligatorie („zorgverzekering”);</li>
<li>la medicul de familie („huisarts”);</li>
<li>la autoritățile fiscale și pentru alocații.</li>
</ul>

<h2>Asigurarea medicală în Olanda</h2>
<p>Dacă locuiești sau lucrezi în Olanda, asigurarea medicală de bază e de regulă obligatorie. Ți-o faci la o firmă de asigurări olandeză, după ce ai BSN. Întreabă angajatorul sau agenția ce trebuie să faci și în cât timp.</p>

<h2>Dacă vii prin agenție de muncă</h2>
<p>Multe agenții de muncă din Olanda te ajută cu înscrierea, uneori programându-te ele la RNI sau la primărie. Chiar și așa, e bine să știi ce acte ai nevoie și să verifici că primești BSN-ul pe numele tău corect. Dacă agenția îți dă și cazare, adresa aceea e cea la care te înscrii.</p>

<h2>Sfaturi practice</h2>
<ul>
<li>pregătește actele înainte de plecare, inclusiv certificatul de naștere în formatul cerut;</li>
<li>caută programarea din prima zi, mai ales în Amsterdam, Rotterdam sau Haga;</li>
<li>pune-ți numele pe cutia poștală. Scrisorile cu BSN și de la instituții vin prin poștă;</li>
<li>păstrează scrisoarea cu BSN într-un loc sigur și o poză în telefon.</li>
</ul>

<h2>Când pleci din Olanda</h2>
<p>Dacă pleci definitiv, anunță primăria că pleci din țară. Altfel rămâi înregistrat la adresa veche și poți primi în continuare scrisori și obligații. Se face de obicei cu puțin timp înainte de plecare.</p>

<h2>Ce urmează</h2>
<p>După BSN urmează contul bancar, asigurarea medicală și munca. Ce să știi înainte să pleci afli din ghidul despre <a href="/blog/munca-in-olanda-ghid-romani">munca în Olanda</a>. Cât durează drumul, afli din articolul despre <a href="/blog/cat-dureaza-drumul-romania-olanda">câte ore sunt până în Olanda</a>.</p>

<h2>Drumul spre Olanda</h2>
<p>Te luăm de acasă din România și te lăsăm la adresa din Olanda, cu bagaje cu tot. Avem remorci acoperite pentru bagajele celor care pleacă pentru mult timp. Detalii pe pagina de <a href="/transport-persoane-romania-olanda">transport persoane România – Olanda</a>.</p>`,
    faq: [
      ["Ce este BSN?", "Numărul personal de identificare din Olanda, de care ai nevoie pentru muncă, bancă și asigurare medicală."],
      ["Unde mă înscriu dacă stau mai mult de 4 luni?", "La primăria orașului unde locuiești, în registrul populației (BRP)."],
      ["Și dacă stau mai puțin de 4 luni?", "Te înscrii la un birou RNI, aflat în anumite primării, și primești tot un BSN."],
      ["Ce acte îmi trebuie?", "Actul de identitate valabil, dovada adresei și, uneori, certificatul de naștere în formatul cerut de primărie."],
      ["Mă poate ajuta agenția de muncă?", "Da, multe agenții ajută la înscriere. Verifică totuși că BSN-ul e pe numele tău corect."],
    ],
  },

  {
    n: 32, published: true, date: D2, group: G, main: "BE",
    slug: "inregistrare-belgia-comuna",
    title: "Înregistrarea la comună în Belgia pentru români",
    desc: "Cum te înregistrezi la comuna din Belgia unde locuiești: în câte zile, ce acte îți trebuie, vizita poliției de cartier și cum primești cardul de rezident.",
    h1: "Înregistrarea la comună în Belgia pentru români",
    cardText: "Termenul de 8 zile, actele, vizita agentului de cartier și cardul E.",
    ...IMG.lux,
    imgAlt: "Interior microbuz BRO Transport pe ruta România – Belgia",
    related: ["munca-in-belgia-ghid-romani", "cat-dureaza-drumul-romania-belgia"],
    intro: `
<p><strong>Dacă rămâi în Belgia mai mult de trei luni, trebuie să te prezinți la administrația comunei unde locuiești în primele opt zile de la sosire.</strong> După verificarea adresei și a actelor, ca cetățean UE primești un card de rezident, de obicei cardul E.</p>
<p>În Belgia, comuna („commune” în franceză, „gemeente” în olandeză) se ocupă de evidența populației. Mai jos găsești pașii, pe rând.</p>`,
    body: `
<h2>Pasul 1: declarația de sosire la comună</h2>
<p>În primele opt zile de la sosire, mergi la serviciul de populație sau la serviciul pentru străini al comunei unde locuiești. Te prezinți, declari că vrei să stai în Belgia și dai adresa.</p>
<h3>Ce iei cu tine</h3>
<ul>
<li>actul de identitate valabil, carte de identitate sau pașaport;</li>
<li>contractul de închiriere sau dovada adresei;</li>
<li>poze tip act, dacă sunt cerute;</li>
<li>uneori, certificatul de naștere sau de căsătorie, pentru familie.</li>
</ul>
<p>Primești un document care confirmă că ai depus cererea. Informațiile oficiale sunt pe portalul federal ${SRC("https://www.belgium.be", "belgium.be")} și pe site-ul ${SRC("https://dofi.ibz.be", "Oficiului pentru Străini (DOFI)")}.</p>
<!-- TODO: termenul de 8 zile și pașii exacți – de reverificat periodic pe dofi.ibz.be. -->

<h2>Pasul 2: vizita agentului de cartier</h2>
<p>După ce declari adresa, un agent de poliție de cartier („agent de quartier” sau „wijkagent”) vine să verifice că locuiești cu adevărat acolo. Vizita e normală și obligatorie, nu înseamnă că ai făcut ceva greșit.</p>
<ul>
<li>pune-ți numele pe sonerie și pe cutia poștală imediat ce te muți;</li>
<li>dacă agentul nu te găsește, îți lasă de obicei un aviz. Sună-l și stabilește o întâlnire;</li>
<li>ține la îndemână actul de identitate pentru vizită.</li>
</ul>

<h2>Pasul 3: dovada dreptului de ședere</h2>
<p>Ca cetățean UE, pentru o ședere mai lungă de trei luni trebuie să dovedești că ai un motiv: muncă, activitate independentă, studii sau mijloace de trai și asigurare medicală.</p>
<div class="tbl"><table>
<thead><tr><th>Situația ta</th><th>Ce prezinți de obicei</th></tr></thead>
<tbody>
<tr><td>Angajat</td><td>Contractul de muncă sau declarația angajatorului.</td></tr>
<tr><td>Independent</td><td>Înregistrarea firmei sau a activității.</td></tr>
<tr><td>Căutător de loc de muncă</td><td>Dovezi că îți cauți activ de muncă și ai șanse reale.</td></tr>
<tr><td>Student</td><td>Înscrierea la studii, asigurarea medicală și mijloacele de trai.</td></tr>
</tbody>
</table></div>
<p>Documentele exacte și termenul în care le prezinți îți sunt comunicate de comună.</p>

<h2>Pasul 4: cardul de rezident</h2>
<p>După ce verificările se termină, primești cardul de rezident pentru cetățenii UE, de obicei cardul E. El e dovada dreptului tău de ședere în Belgia. Pentru ridicarea cardului se plătește de regulă o taxă stabilită de comună.</p>

<h2>Numărul de registru național</h2>
<p>După înregistrare primești și un număr de registru național („numéro de registre national” / „rijksregisternummer”). Acesta îți trebuie pentru salariu, impozite, asigurarea medicală și multe alte lucruri.</p>

<h2>Asigurarea medicală în Belgia</h2>
<p>Dacă lucrezi în Belgia, trebuie să te înscrii la o casă de asigurări de sănătate („mutualité” / „ziekenfonds”). De obicei angajatorul sau colegii îți spun ce variante sunt. Până atunci, cardul european de sănătate te poate ajuta pentru urgențe. Detalii în ghidul despre <a href="/blog/card-european-sanatate-cest">cardul european de sănătate</a>.</p>

<h2>Sfaturi practice</h2>
<ul>
<li>numele pe sonerie e foarte important în Belgia, atât pentru agentul de cartier, cât și pentru poștă;</li>
<li>întreabă comuna dacă documentele românești trebuie traduse sau apostilate;</li>
<li>păstrează copii după toate documentele depuse;</li>
<li>Belgia are mai multe limbi oficiale. În Bruxelles poți vorbi franceză sau olandeză, în Flandra olandeză, în Valonia franceză.</li>
</ul>

<h2>Când te muți sau pleci</h2>
<p>Dacă te muți în altă comună, declari noua adresă acolo. Dacă pleci definitiv din Belgia, anunță comuna înainte de plecare, ca să fii radiat din registru. Altfel poți avea în continuare obligații fiscale sau administrative în Belgia.</p>

<h2>Ce urmează</h2>
<p>După înregistrare urmează contul bancar, asigurarea medicală și munca. Ce să știi despre contracte și primele săptămâni afli din ghidul despre <a href="/blog/munca-in-belgia-ghid-romani">munca în Belgia</a>. Cât durează drumul, afli din articolul despre <a href="/blog/cat-dureaza-drumul-romania-belgia">drumul România – Belgia</a>.</p>

<h2>Drumul spre Belgia</h2>
<p>Te luăm de acasă din România și te lăsăm la adresa din Belgia, fără schimbări pe drum. Detalii pe pagina de <a href="/transport-persoane-romania-belgia">transport persoane România – Belgia</a>.</p>`,
    faq: [
      ["În câte zile trebuie să mă înregistrez în Belgia?", "Dacă stai mai mult de trei luni, te prezinți la comună în primele opt zile de la sosire."],
      ["De ce vine poliția la mine acasă?", "Agentul de cartier verifică că locuiești la adresa declarată. E o procedură normală și obligatorie."],
      ["Ce card primesc ca cetățean român?", "De obicei cardul E, cardul de rezident pentru cetățenii UE."],
      ["Ce acte îmi trebuie?", "Actul de identitate, dovada adresei și documentele care arată motivul șederii, de exemplu contractul de muncă."],
      ["Trebuie traduse actele românești?", "Uneori da. Întreabă comuna ce cere pentru actele tale."],
    ],
  },

  {
    n: 33, published: true, date: D2, group: G, main: "DE",
    slug: "ce-poti-lua-in-bagaj-alimente-ue",
    title: "Ce alimente poți lua în bagaj spre Germania sau Austria",
    desc: "Ce alimente poți lua în bagaj din România spre Germania sau Austria: mâncare de casă, carne, brânză, alcool și țigări, plus limitele orientative din UE.",
    h1: "Ce alimente poți lua în bagaj spre Germania sau Austria",
    cardText: "Mâncare de casă, carne, brânză, alcool și țigări: ce se poate și ce limite sunt.",
    ...IMG.portbagaj,
    imgAlt: "Bagaje cu mâncare de acasă în portbagajul microbuzului",
    related: ["bagaje-permise-transport-persoane", "bani-cash-limita-calatorie-ue"],
    intro: `
<p><strong>Între România și celelalte țări din Uniunea Europeană poți lua în bagaj alimente pentru consum propriu, fără formalități vamale.</strong> Asta include mâncare gătită, carne, brânzeturi, dulciuri, conserve și băuturi, atâta timp cât sunt pentru tine sau familia ta, nu pentru vânzare.</p>
<p>Pentru alcool și tutun există niște limite orientative la nivelul UE, iar în caz de boli ale animalelor pot apărea restricții temporare. Le găsești mai jos.</p>`,
    body: `
<h2>Regula de bază: consum propriu</h2>
<p>Uniunea Europeană e o piață unică. Bunurile pentru uz personal circulă liber între țări, fără taxe vamale. Ce contează e ca ele să fie pentru consumul tău, nu pentru comerț. Informațiile oficiale sunt pe portalul UE, la ${SRC("https://europa.eu/youreurope/citizens/travel/carry/index_ro.htm", "„Ce poți transporta”")}.</p>

<h2>Ce poți lua, în general</h2>
<div class="tbl"><table>
<thead><tr><th>Aliment</th><th>Se poate?</th><th>Sfat</th></tr></thead>
<tbody>
<tr><td>Mâncare gătită (sarmale, ciorbă, prăjituri)</td><td>Da</td><td>În caserole sau borcane bine închise, la rece.</td></tr>
<tr><td>Carne afumată, cârnați, slănină</td><td>Da, cu atenție la restricțiile sanitare</td><td>Vezi mai jos despre pesta porcină africană.</td></tr>
<tr><td>Brânzeturi, telemea, cașcaval</td><td>Da</td><td>În ambalaje etanșe, ca să nu curgă și să nu miroasă.</td></tr>
<tr><td>Zacuscă, dulceață, compot, murături</td><td>Da</td><td>Borcane bine închise, înfășurate în haine sau ziare.</td></tr>
<tr><td>Cozonac, cornulețe, dulciuri</td><td>Da</td><td>În cutii rezistente.</td></tr>
<tr><td>Fructe și legume</td><td>Da, în cantitate normală</td><td>Fără pământ pe ele.</td></tr>
<tr><td>Vin, țuică, bere</td><td>Da, în limite rezonabile</td><td>Vezi limitele orientative de mai jos.</td></tr>
</tbody>
</table></div>

<h2>Atenție la carnea de porc: pesta porcină africană</h2>
<p>Pesta porcină africană este o boală a porcilor, periculoasă pentru animale, nu pentru oameni. În zonele afectate pot exista restricții privind mutarea cărnii de porc și a produselor din carne de porc, mai ales a celor făcute în gospodărie, nesupuse controlului sanitar-veterinar. Restricțiile se schimbă în funcție de situație.</p>
<p>Înainte de drum, verifică pe site-ul ${SRC("https://www.ansvsa.ro", "Autorității Naționale Sanitare Veterinare (ANSVSA)")} dacă există restricții pentru zona ta. Produsele cumpărate din magazin, cu etichetă, sunt de obicei mai sigure din acest punct de vedere decât cele de casă.</p>
<!-- TODO: de verificat situația actuală a restricțiilor ANSVSA pentru produse din carne de porc. -->

<h2>Alcool și țigări: limite orientative în UE</h2>
<p>Pentru alcool și tutun, legislația UE stabilește niște cantități orientative. Dacă ai mai mult, autoritățile te pot întreba dacă e pentru consum propriu.</p>
<div class="tbl"><table>
<thead><tr><th>Produs</th><th>Cantitate orientativă</th></tr></thead>
<tbody>
<tr><td>Țigarete</td><td>800 de bucăți</td></tr>
<tr><td>Țigări de foi</td><td>200 de bucăți</td></tr>
<tr><td>Tutun</td><td>1 kg</td></tr>
<tr><td>Băuturi spirtoase (țuică, palincă, vodcă)</td><td>10 litri</td></tr>
<tr><td>Vin</td><td>90 de litri</td></tr>
<tr><td>Bere</td><td>110 litri</td></tr>
</tbody>
</table></div>
<p>Acestea nu sunt limite maxime absolute, ci praguri orientative. Sursa: ${SRC("https://europa.eu/youreurope/citizens/travel/carry/alcohol-tobacco-cash/index_ro.htm", "Your Europe – alcool, tutun și numerar")}. Unele țări pot avea reguli specifice, mai ales la tutun, așa că verifică înainte dacă iei cantități mari.</p>
<p>Atenție: într-un microbuz, spațiul e limitat. Chiar dacă legea îți permite 90 de litri de vin, e puțin probabil să încapă în bagaj. Spune-ne dinainte dacă ai lichide multe.</p>

<h2>Cum ambalezi mâncarea pentru drum</h2>
<ul>
<li><strong>borcanele</strong>: capace strânse bine, fiecare borcan într-o pungă, apoi înfășurat în haine sau ziare;</li>
<li><strong>mâncarea gătită</strong>: în caserole cu capac, congelată dinainte, dacă se poate. Se dezgheață încet pe drum și rămâne rece mai mult;</li>
<li><strong>carnea și brânza</strong>: vidate sau în pungi bine închise, ca să nu miroasă;</li>
<li><strong>sticlele</strong>: în mijlocul valizei, între haine, nu la margine;</li>
<li><strong>lichidele</strong>: niciodată lângă acte sau electronice.</li>
</ul>

<h2>Cât rezistă mâncarea pe drum</h2>
<p>Pe un drum de o zi sau mai mult, mâncarea gătită rezistă doar dacă e ținută la rece. Cel mai bine iei produse care nu se strică ușor: afumături, brânzeturi tari, zacuscă, dulceață, cozonac. Mâncarea gătită congelată dinainte, pusă într-o geantă frigorifică, rezistă mai bine.</p>

<h2>Mâncare mai multă? Trimite-o în colet</h2>
<p>Dacă vrei să iei mai multă mâncare de acasă decât încape în bagaj, o poți trimite separat, într-un colet. Ce se poate trimite și cum se ambalează afli din ghidul despre <a href="/blog/trimitere-mancare-de-acasa-in-colet">mâncarea de acasă în colet</a>. Restul regulilor pentru bagaje sunt în articolul despre <a href="/blog/bagaje-permise-transport-persoane">bagajele la transportul de persoane</a>.</p>

<h2>Drumul cu noi</h2>
<p>Spune-ne la rezervare dacă ai bagaje cu mâncare multă, ca să le facem loc. Te luăm de acasă și te lăsăm la adresă, în Germania, Austria, Olanda sau Belgia. Detalii pe pagina de <a href="/transport-persoane-romania-germania">transport persoane România – Germania</a>.</p>`,
    faq: [
      ["Pot lua sarmale și cozonac în Germania?", "Da. Alimentele pentru consum propriu circulă liber în UE. Ambalează-le bine și ține-le la rece."],
      ["Pot lua carne de porc de casă?", "În general da, dar pot exista restricții din cauza pestei porcine africane. Verifică pe site-ul ANSVSA înainte de drum."],
      ["Câtă țuică pot lua?", "Pragul orientativ în UE pentru băuturi spirtoase e de 10 litri pentru consum propriu."],
      ["Câte țigări pot lua?", "Pragul orientativ în UE e de 800 de țigarete. Unele țări pot avea reguli specifice."],
      ["Ce fac dacă am prea multă mâncare?", "O poți trimite separat, într-un colet, cu ridicare de la adresă și predare în mână."],
    ],
  },

  {
    n: 34, published: true, date: D2, group: G, main: "DE",
    slug: "bani-cash-limita-calatorie-ue",
    title: "Câți bani cash poți avea la tine când călătorești în UE",
    desc: "Câți bani cash poți avea la tine când călătorești din România în Germania sau Austria, când trebuie să declari banii și cum îi transporți în siguranță.",
    h1: "Câți bani cash poți avea la tine când călătorești în UE",
    cardText: "Pragul de 10.000 de euro, când declari banii și cum îi ții în siguranță.",
    ...IMG.van,
    imgAlt: "Microbuz BRO Transport pentru călătorii în Uniunea Europeană",
    related: ["ce-poti-lua-in-bagaj-alimente-ue", "cont-bancar-germania-romani"],
    intro: `
<p><strong>Nu există o limită maximă pentru banii cash pe care îi poți avea la tine când călătorești în UE, dar sumele de 10.000 de euro sau mai mult trebuie declarate în anumite situații.</strong> La ieșirea și intrarea în UE, declararea e obligatorie. Între țările UE, multe state, inclusiv Germania, cer să declari suma dacă ești întrebat la un control.</p>
<p>Pentru sumele mari, transferul bancar e mai sigur decât banii în buzunar. Mai jos găsești regulile și câteva sfaturi practice.</p>`,
    body: `
<h2>Pragul de 10.000 de euro</h2>
<p>Regulile europene privind controlul numerarului stabilesc pragul de 10.000 de euro, sau echivalentul în altă monedă. Regulile se aplică la:</p>
<ul>
<li><strong>ieșirea din UE sau intrarea în UE</strong>: dacă ai 10.000 de euro sau mai mult, declarația la vamă e obligatorie;</li>
<li><strong>călătoriile între țări UE</strong>: aici se aplică regulile naționale. Multe țări cer ca, la un control, să declari sumele de 10.000 de euro sau mai mult, dacă ești întrebat.</li>
</ul>
<p>Informațiile oficiale sunt pe portalul ${SRC("https://europa.eu/youreurope/citizens/travel/carry/alcohol-tobacco-cash/index_ro.htm", "Your Europe")} și, pentru Germania, pe site-ul vămii germane, ${SRC("https://www.zoll.de", "zoll.de")}.</p>
<!-- TODO: de verificat periodic regulile naționale pentru Germania, Austria, Olanda și Belgia. -->

<h2>Ce înseamnă „numerar”</h2>
<p>Nu doar bancnotele și monedele intră în calculul sumei. Regulile europene includ, de exemplu:</p>
<ul>
<li>bancnote și monede, în orice monedă;</li>
<li>cecuri de călătorie și alte instrumente la purtător;</li>
<li>în anumite condiții, aurul sub formă de monede sau lingouri.</li>
</ul>

<h2>Ce se întâmplă dacă nu declari</h2>
<p>Dacă ești întrebat la un control și nu declari o sumă care trebuia declarată, sau declari greșit, poți primi amendă, iar banii pot fi reținuți până se clarifică proveniența lor. Declararea în sine nu înseamnă că plătești ceva. E doar o informare a autorităților.</p>

<h2>Exemplu practic</h2>
<p>Cineva care a lucrat un an în Germania vine acasă cu 12.000 de euro economisiți, în numerar. Pe drum, la un control al vămii germane, e întrebat dacă are mai mult de 10.000 de euro. Dacă spune adevărul și declară suma, de regulă trebuie să explice de unde provin banii și unde îi duce. Dacă are documente, de exemplu fluturașii de salariu, totul se rezolvă mai ușor. Dacă minte, riscă amendă și reținerea banilor.</p>
<p>În această situație, varianta mai simplă și mai sigură ar fi fost un transfer bancar din contul german în contul românesc.</p>

<h2>De ce e mai bine transferul bancar</h2>
<div class="tbl"><table>
<thead><tr><th>Cash în buzunar</th><th>Transfer bancar</th></tr></thead>
<tbody>
<tr><td>Risc de pierdere sau furt</td><td>Banii sunt în siguranță</td></tr>
<tr><td>Trebuie declarat peste prag, la control</td><td>Nicio declarație de făcut pe drum</td></tr>
<tr><td>Poate fi greu de dovedit proveniența</td><td>Proveniența e clară din extrase</td></tr>
<tr><td>Fără costuri, dar cu riscuri</td><td>Transferurile în euro în UE sunt de obicei ieftine sau gratuite</td></tr>
</tbody>
</table></div>
<p>Plățile în euro între țările UE (SEPA) sunt de multe ori gratuite sau foarte ieftine. Dacă nu ai cont într-o bancă din străinătate, vezi ghidul despre <a href="/blog/cont-bancar-germania-romani">contul bancar în Germania</a>.</p>

<h2>Sfaturi pentru banii pe care îi ai la tine</h2>
<ul>
<li>ia cash doar cât îți trebuie pentru drum și primele zile;</li>
<li>împarte banii în mai multe locuri: o parte în portofel, o parte în alt buzunar sau în altă geantă;</li>
<li>ține banii la tine, în geanta mică, nu în valiza din portbagaj;</li>
<li>nu număra banii în public, în zonele de servicii de pe autostradă;</li>
<li>ai la tine și un card bancar, pentru urgențe.</li>
</ul>

<h2>Câți bani îți trebuie pe drum</h2>
<p>Pe drumul cu microbuzul, cheltuielile sunt mici: mâncare și cafea la pauze, eventual toalete cu plată. Câteva zeci de euro sunt de obicei suficienți. Aproape peste tot se poate plăti cu cardul. Prețul transportului îl stabilim la rezervare.</p>

<h2>Bani trimiși acasă</h2>
<p>Banii nu se trimit prin colet. Pentru bani folosește întotdeauna căile bancare sau serviciile autorizate de transfer de bani. Ce nu ai voie să pui într-un colet afli din ghidul despre <a href="/blog/ce-nu-ai-voie-sa-trimiti-in-colet">obiectele interzise în colete</a>.</p>

<h2>Drumul cu noi</h2>
<p>Te luăm de acasă și te lăsăm la adresă, fără schimbări pe drum și fără să stai cu bagajele prin autogări. Pentru alte reguli despre ce iei cu tine, vezi și articolul despre <a href="/blog/ce-poti-lua-in-bagaj-alimente-ue">alimentele în bagaj</a>. Detalii despre curse pe pagina de <a href="/transport-persoane-romania-germania">transport persoane România – Germania</a>.</p>`,
    faq: [
      ["Există o limită maximă de cash în UE?", "Nu există o limită maximă, dar sumele de 10.000 de euro sau mai mult trebuie declarate în anumite situații."],
      ["Trebuie să declar banii între România și Germania?", "Între țări UE se aplică regulile naționale. În Germania trebuie să declari sumele de 10.000 de euro sau mai mult dacă ești întrebat la un control."],
      ["Ce se întâmplă dacă nu declar?", "Poți primi amendă, iar banii pot fi reținuți până se clarifică proveniența lor."],
      ["Ce intră în calculul sumei?", "Bancnote și monede în orice monedă, cecuri de călătorie și alte instrumente la purtător, iar în anumite condiții și aurul."],
      ["Pot trimite bani prin colet?", "Nu. Pentru bani folosește transferul bancar sau serviciile autorizate de transfer."],
    ],
  },
];
