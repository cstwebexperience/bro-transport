// Valul 2 – Grup B (17–22). Fără reguli inventate despre bagaje, copii sau animale: ce nu e confirmat de firmă e marcat TODO.
import { IMG, D2, SRC } from "./_img.mjs";
const G = "Ghiduri de călătorie";

export default [
  {
    n: 17, published: true, date: D2, group: G, main: "DE",
    slug: "bagaje-permise-transport-persoane",
    title: "Bagaje la transportul de persoane: cât poți lua",
    desc: "Ce bagaje poți lua la transportul de persoane cu microbuzul spre Germania, Austria, Olanda sau Belgia, cum le pregătești și când e nevoie de remorcă.",
    h1: "Bagaje la transportul de persoane: cât poți lua",
    cardText: "Cum se stabilesc bagajele, ce pui în ele și când avem nevoie de remorcă.",
    ...IMG.portbagaj,
    imgAlt: "Portbagaj de microbuz încărcat cu valizele pasagerilor",
    related: ["ce-sa-iei-in-bagaj-calatorie-lunga-microbuz", "ruta-romania-germania-prin-ungaria-austria"],
    intro: `
<p><strong>La transportul de persoane cu microbuzul poți lua bagajele obișnuite pentru o călătorie: o valiză mare și o geantă mică pe care o ții lângă tine.</strong> Dacă ai mai multe bagaje sau ceva voluminos, spune-ne la rezervare, ca să planificăm locul în portbagaj sau în remorca acoperită.</p>
<p>Cel mai important e să ne spui dinainte ce ai. Un bagaj neanunțat, adus în ziua plecării, poate să nu mai aibă loc dacă mașina e plină.</p>`,
    body: `
<h2>De ce contează să anunți bagajele</h2>
<p>Un microbuz 8+1 locuri are un portbagaj de mărime limitată. Dacă fiecare pasager are o valiză mare și o geantă, de obicei încap toate. Când însă unul are trei valize, altul o bicicletă și altul un televizor, locul se termină repede. De aceea întrebăm la fiecare rezervare câte bagaje ai.</p>
<p>Când știm dinainte, putem să:</p>
<ul>
<li>atașăm o remorcă acoperită la cursă, dacă e nevoie;</li>
<li>împărțim pasagerii între mașini, ca bagajele să încapă;</li>
<li>îți spunem sincer dacă ceva nu poate fi luat și îți propunem o alternativă, de exemplu trimiterea separată ca și colet.</li>
</ul>
<!-- TODO: numărul/greutatea bagajelor incluse în preț și tariful pentru bagaj suplimentar – de confirmat de firmă. -->

<h2>Ce înseamnă „bagaje obișnuite”</h2>
<div class="tbl"><table>
<thead><tr><th>Tip de bagaj</th><th>Unde stă</th><th>Ce să știi</th></tr></thead>
<tbody>
<tr><td>Geantă mică sau rucsac</td><td>lângă tine, în microbuz</td><td>Pune aici tot ce îți trebuie pe drum: acte, apă, medicamente, încărcător.</td></tr>
<tr><td>Valiză mare</td><td>în portbagaj</td><td>O scoți abia la destinație.</td></tr>
<tr><td>Bagaje în plus</td><td>în portbagaj sau în remorcă</td><td>Le anunți la rezervare.</td></tr>
<tr><td>Obiecte voluminoase</td><td>în remorcă</td><td>Le anunți la rezervare, cu dimensiuni aproximative.</td></tr>
</tbody>
</table></div>

<h2>Remorca acoperită: când e nevoie de ea</h2>
<p>Microbuzele noastre pot merge cu remorci acoperite, care protejează bagajele de ploaie și de praf. Remorca ajută mult în câteva situații:</p>
<ul>
<li>când mulți pasageri pleacă pentru o perioadă lungă și au bagaje multe;</li>
<li>înainte de sărbători, când se iau cadouri și mâncare de acasă;</li>
<li>când cineva se mută și ia cu el lucruri mai mari;</li>
<li>când pe aceeași cursă se transportă și colete.</li>
</ul>

<h2>Cum îți pregătești bagajele</h2>
<h3>Valizele</h3>
<ul>
<li>Folosește valize rezistente, cu roți și mâner în stare bună.</li>
<li>Nu le încărca peste măsură. O valiză foarte grea e greu de ridicat și se poate rupe.</li>
<li>Pune lichidele (șampon, parfum, ulei) în pungi închise, ca să nu curgă peste haine.</li>
<li>Pune o etichetă cu numele și telefonul tău.</li>
</ul>
<h3>Sacoșele și cutiile</h3>
<p>Mulți pasageri iau cu ei sacoșe sau cutii cu mâncare și lucruri de acasă. Se pot lua, dar trebuie închise bine și să nu se rupă la ridicare. Cutiile de carton se înmoaie ușor, așa că lipește-le bine cu bandă și nu pune în ele lucruri foarte grele.</p>
<h3>Obiectele fragile</h3>
<p>Ce e fragil împachetează bine, între haine, în mijlocul valizei. Dacă e ceva foarte valoros sau foarte fragil, ține-l la tine, în geanta mică.</p>

<h2>Ce nu se transportă</h2>
<ul>
<li>arme, muniție, substanțe explozive;</li>
<li>butelii, combustibil, substanțe inflamabile;</li>
<li>substanțe interzise sau produse care nu au voie să circule în UE;</li>
<li>animale vii în bagaje. Pentru animalele de companie citește ghidul despre <a href="/blog/calatorie-cu-animale-de-companie-europa">călătoria cu câinele sau pisica</a>.</li>
</ul>

<h2>Bagaje cu mâncare de acasă</h2>
<p>Între România și celelalte țări din UE poți lua alimente pentru consum propriu. Există totuși câteva reguli și limite orientative, mai ales la alcool și tutun. Le găsești explicate în ghidul despre <a href="/blog/ce-poti-lua-in-bagaj-alimente-ue">ce alimente poți lua în bagaj</a>. Informațiile oficiale sunt pe portalul Uniunii Europene, la ${SRC("https://europa.eu/youreurope/citizens/travel/carry/index_ro.htm", "„Ce poți transporta”")}.</p>

<h2>Ai prea multe lucruri? Trimite o parte ca și colet</h2>
<p>Dacă ai mai multe lucruri decât încap într-o călătorie, nu trebuie să le iei pe toate cu tine. Le poți trimite separat, ca și colet, cu ridicare de la adresa ta și predare în mână la destinație. Detalii pe pagina de <a href="/transport-colete-romania-europa">transport colete România – Europa</a>.</p>

<h2>Bagajele la sosire</h2>
<p>La destinație, șoferul scoate bagajele din portbagaj sau din remorcă la fiecare adresă. Verifică înainte să pleci că ai luat tot ce e al tău, inclusiv geanta mică și haina din microbuz. Eticheta cu numele ajută mult când mai mulți pasageri au valize asemănătoare.</p>

<h2>Spune-ne bagajele când rezervi</h2>
<p>La rezervare, la telefon sau pe WhatsApp, spune-ne câte valize și genți ai și dacă ai ceva voluminos. Îți confirmăm dacă au loc și ce variantă e cea mai bună. Lista completă cu ce să pui în bagaje e în ghidul despre <a href="/blog/ce-sa-iei-in-bagaj-calatorie-lunga-microbuz">ce să iei cu tine la un drum lung</a>. Despre curse vezi pagina de <a href="/transport-persoane-romania-germania">transport persoane România – Germania</a>.</p>`,
    faq: [
      ["Câte bagaje pot lua în microbuz?", "De obicei o valiză mare și o geantă mică. Dacă ai mai multe, spune-ne la rezervare, ca să planificăm locul în portbagaj sau în remorcă."],
      ["Ce se întâmplă dacă vin cu bagaje în plus neanunțate?", "Dacă mașina e plină, se poate să nu mai fie loc. De aceea e important să anunți bagajele dinainte."],
      ["Pot lua cutii cu mâncare de acasă?", "Da, pentru consum propriu, dacă sunt închise bine și rezistente. Vezi și regulile despre alimente în bagaj."],
      ["Aveți remorcă pentru bagaje?", "Da, avem remorci acoperite, care protejează bagajele de ploaie și praf."],
      ["Ce fac dacă am prea multe lucruri?", "Poți trimite o parte ca și colet. Îl ridicăm de la tine și îl predăm în mână la destinație."],
    ],
  },

  {
    n: 18, published: true, date: D2, group: G, main: "DE",
    slug: "calatorie-cu-copii-in-microbuz",
    title: "Drum lung cu copiii în microbuz: sfaturi practice",
    desc: "Sfaturi practice pentru un drum lung cu copiii în microbuz: ce acte trebuie, ce iei în geanta mică, cum îi ții ocupați și cum îi ajuți să doarmă.",
    h1: "Drum lung cu copiii în microbuz: sfaturi practice",
    cardText: "Acte, gustări, jucării și somn: cum faci drumul ușor pentru cei mici.",
    ...IMG.banchete,
    imgAlt: "Banchete confortabile în microbuz pentru familii cu copii",
    related: ["acte-minor-calatorie-strainatate", "rau-de-masina-drum-lung"],
    intro: `
<p><strong>Un drum lung cu copiii în microbuz merge bine dacă ai trei lucruri pregătite: actele copilului, o geantă mică cu tot ce îi trebuie pe drum și câteva lucruri care îl țin ocupat.</strong> Restul, adică pauzele, temperatura din mașină și locul pentru picioare, sunt partea noastră.</p>
<p>Spune-ne la rezervare că vii cu copii și ce vârstă au. Așa putem organiza locurile și îți putem spune exact ce trebuie să ai pentru ei.</p>`,
    body: `
<h2>Actele copilului: cel mai important pas</h2>
<p>Orice copil care călătorește în străinătate are nevoie de act de identitate propriu: carte de identitate (de la 14 ani) sau pașaport. Pentru copiii mai mici, de regulă e nevoie de pașaport. Dacă un părinte nu călătorește cu copilul, e nevoie și de declarații notariale.</p>
<p>Regulile se schimbă din când în când, așa că verifică-le înainte de plecare pe site-ul ${SRC("https://www.politiadefrontiera.ro", "Poliției de Frontieră")}. Le găsești explicate pe larg în ghidurile noastre despre <a href="/blog/acte-minor-calatorie-strainatate">actele pentru minori</a> și despre <a href="/blog/minor-insotit-de-un-singur-parinte">copilul care călătorește cu un singur părinte</a>.</p>

<h2>Locul copilului în microbuz</h2>
<p>Copiii au, ca orice pasager, locul lor, cu centură de siguranță. Regulile despre scaunele auto și înălțătoare pentru copii sunt stricte în Uniunea Europeană. Spune-ne la rezervare vârsta și înălțimea copilului, ca să stabilim împreună ce e nevoie și dacă aduci tu scaunul copilului.</p>
<!-- TODO: politica BRO pentru scaune auto copii (le asigură firma sau le aduce părintele) – de confirmat. -->
<p>Încearcă să stai lângă copil. Dacă sunteți mai mulți în familie, spune-ne de la început, ca să vă așezăm împreună.</p>

<h2>Geanta copilului pentru drum</h2>
<ul>
<li><strong>haine de schimb</strong>: cel puțin un rând complet, inclusiv șosete;</li>
<li><strong>scutece și șervețele</strong>, pentru cei mici, în cantitate generoasă;</li>
<li><strong>gustări pe care le mănâncă sigur</strong>: biscuiți, fructe, covrigi;</li>
<li><strong>apă</strong> și, la nevoie, lapte praf și biberon;</li>
<li><strong>medicamente</strong> obișnuite pentru copii: pentru febră, pentru durere, pentru rău de mașină dacă e cazul, recomandate de medic;</li>
<li><strong>o pernă mică și o pătură subțire</strong>, pentru somn;</li>
<li><strong>pungi</strong> pentru gunoi sau pentru haine murdare.</li>
</ul>

<h2>Cum îi ții ocupați</h2>
<p>Un drum de o zi sau mai mult e lung pentru un copil. Alternează activitățile, ca să nu se plictisească de una singură:</p>
<h3>Pentru cei mici</h3>
<ul>
<li>jucăria preferată și una nouă, pe care o scoți la jumătatea drumului;</li>
<li>cărți cu imagini, autocolante, carnețele de colorat;</li>
<li>cântece și povești ascultate împreună.</li>
</ul>
<h3>Pentru cei mai mari</h3>
<ul>
<li>tabletă sau telefon cu filme și jocuri descărcate dinainte;</li>
<li>căști pentru copii, ca să nu-i deranjeze pe ceilalți pasageri;</li>
<li>cărți, reviste, jocuri de cuvinte sau de numărat mașini;</li>
<li>harta drumului: le place să vadă prin ce țări trec.</li>
</ul>
<p>Avem încărcătoare la fiecare loc, deci tableta nu rămâne fără baterie.</p>

<h2>Somnul pe drum</h2>
<p>Copiii dorm de obicei mai ușor în mașină decât adulții. Câteva lucruri ajută:</p>
<ul>
<li>păstrează, pe cât se poate, ora obișnuită de culcare;</li>
<li>îmbracă-l comod, în haine moi;</li>
<li>perna sau pătura de acasă îi dau siguranță;</li>
<li>pe Renault Master avem pat pentru dormit, util pentru drumurile lungi.</li>
</ul>

<h2>Pauzele</h2>
<p>Pe drum se fac pauze regulate pentru toaletă, masă și alimentare. Folosește-le ca cel mic să meargă la toaletă, chiar dacă spune că nu are nevoie, și să se miște puțin. Dacă e o urgență între pauze, spune-i șoferului. Pe autostradă nu se poate opri oriunde, dar se găsește cea mai apropiată parcare.</p>

<h2>Răul de mașină la copii</h2>
<p>Unii copii au rău de mașină. Ajută să stea cu fața în direcția de mers, să privească pe geam în depărtare, să nu citească și să nu mănânce mult înainte de plecare. Pentru medicamente, întreabă medicul pediatru înainte de călătorie. Mai multe sfaturi în articolul despre <a href="/blog/rau-de-masina-drum-lung">răul de mașină pe drum lung</a>.</p>

<h2>Sănătatea copilului în străinătate</h2>
<p>Ia cardul european de sănătate pentru copil, dacă îl are. Acesta ajută în cazul unor probleme medicale apărute pe drum sau la destinație, în țările UE. Cum îl obții, afli din ghidul despre <a href="/blog/card-european-sanatate-cest">cardul european de sănătate</a>.</p>

<h2>Rezervă pentru toată familia</h2>
<p>Pentru familiile care călătoresc împreună, prețul pe persoană e de obicei mai mic. Spune-ne câți adulți și câți copii sunteți, ce vârstă au și câte bagaje aveți. Te luăm de acasă și te lăsăm la adresă, fără să schimbi vreo mașină cu copiii după tine. Detalii pe pagina de <a href="/transport-persoane-romania-germania">transport persoane România – Germania</a>.</p>`,
    faq: [
      ["Ce acte îi trebuie copilului ca să călătorească?", "Un act de identitate propriu, de obicei pașaport pentru cei mici, și declarații notariale dacă un părinte nu călătorește. Verifică regulile pe site-ul Poliției de Frontieră."],
      ["Copilul are loc separat în microbuz?", "Da, fiecare copil are locul lui, cu centură de siguranță. Spune-ne vârsta copilului la rezervare."],
      ["Trebuie să aduc scaun auto?", "Spune-ne vârsta și înălțimea copilului la rezervare, ca să stabilim împreună ce e nevoie."],
      ["Putem sta împreună în microbuz?", "Da. Spune-ne de la început că sunteți o familie, ca să vă așezăm împreună."],
      ["Primim reducere pentru copii?", "Pentru familii și grupuri prețul pe persoană e de obicei mai mic. Întreabă la 0790 752 888."],
    ],
  },

  {
    n: 19, published: true, date: D2, group: G, main: "DE",
    slug: "calatorie-cu-animale-de-companie-europa",
    title: "Cu câinele sau pisica în Germania: reguli și sfaturi",
    desc: "Ce reguli se aplică dacă mergi cu câinele sau pisica în Germania sau alte țări UE: microcip, vaccin antirabic, pașaport pentru animale și sfaturi de drum.",
    h1: "Cu câinele sau pisica în Germania: reguli și sfaturi",
    cardText: "Microcip, vaccin, pașaport european și cum pregătești animalul pentru drum.",
    ...IMG.van,
    imgAlt: "Microbuz BRO Transport pentru călătoria spre Germania",
    related: ["acte-necesare-calatorie-germania", "ce-sa-iei-in-bagaj-calatorie-lunga-microbuz"],
    intro: `
<p><strong>Ca să călătorești cu câinele sau pisica dintr-o țară UE în alta, animalul are nevoie de microcip, de vaccin antirabic valabil și de pașaport european pentru animale de companie.</strong> Aceste reguli se aplică și pe drumul din România spre Germania, Austria, Olanda sau Belgia.</p>
<p>Dacă vrei să iei animalul cu tine în microbuz, spune-ne obligatoriu la rezervare. Trebuie să ne asigurăm că se poate și că ceilalți pasageri sunt de acord, de exemplu dacă cineva e alergic.</p>`,
    body: `
<h2>Cele trei cerințe de bază</h2>
<p>Regulile pentru călătoria animalelor de companie între țările UE sunt stabilite la nivel european. Pe scurt, pentru câini, pisici și dihori:</p>
<div class="tbl"><table>
<thead><tr><th>Cerință</th><th>Ce înseamnă</th></tr></thead>
<tbody>
<tr><td>Microcip</td><td>Animalul trebuie să fie identificat cu microcip, implantat de medicul veterinar.</td></tr>
<tr><td>Vaccin antirabic</td><td>Vaccinul trebuie făcut după implantarea microcipului și să fie valabil. După primul vaccin, de regulă trebuie așteptat un anumit număr de zile până la plecare.</td></tr>
<tr><td>Pașaport european</td><td>Documentul se eliberează de un medic veterinar autorizat și cuprinde microcipul și vaccinările.</td></tr>
</tbody>
</table></div>
<p>Detaliile oficiale, actualizate, sunt pe portalul Uniunii Europene, la ${SRC("https://europa.eu/youreurope/citizens/travel/carry/animal-plant/index_ro.htm", "„Călătoria cu animale de companie”")}. Verifică-le înainte de drum, împreună cu medicul veterinar.</p>
<!-- TODO: de verificat periodic termenul de 21 de zile după primul vaccin antirabic și regulile pentru animalele foarte tinere. -->

<h2>Reguli suplimentare de știut</h2>
<ul>
<li><strong>Animalele foarte tinere</strong> nu pot fi vaccinate antirabic înainte de o anumită vârstă, deci nu pot călători imediat.</li>
<li><strong>Unele rase de câini</strong> sunt considerate periculoase în anumite țări, inclusiv în unele landuri din Germania. Pentru ele pot exista restricții sau chiar interdicții. Verifică regulile din țara și regiunea unde mergi.</li>
<li><strong>Numărul de animale</strong>: regulile pentru animalele de companie se aplică, de regulă, până la cinci animale. Peste această limită se aplică regulile pentru comerț.</li>
<li><strong>Înregistrarea la destinație</strong>: în Germania, de exemplu, câinii plătesc o taxă locală („Hundesteuer”) și trebuie înregistrați la primăria orașului, dacă rămân acolo.</li>
</ul>

<h2>Animalul în microbuz: ce trebuie să știi</h2>
<p>Un drum de peste o zi e solicitant și pentru un animal. Dacă îl iei cu tine în microbuz, ține cont de câteva lucruri:</p>
<ul>
<li>animalul trebuie să stea într-o cușcă de transport închisă, bine aerisită, potrivită ca mărime;</li>
<li>cușca trebuie să fie curată și cu un așternut absorbant;</li>
<li>ceilalți pasageri trebuie să fie de acord. Unii au alergii sau frică de animale;</li>
<li>animalul nu are voie să stea liber prin mașină.</li>
</ul>
<!-- TODO: politica BRO privind animalele de companie (acceptă sau nu, condiții, tarif) – de confirmat de firmă. -->
<p>De aceea, nu veni cu animalul fără să ne fi anunțat. Spune-ne la rezervare ce animal ai, cât de mare e și dacă e obișnuit cu drumurile lungi.</p>

<h2>Cum pregătești animalul pentru drum</h2>
<h3>Înainte de plecare</h3>
<ul>
<li>mergi la veterinar și verifică dacă toate actele sunt în regulă;</li>
<li>obișnuiește animalul cu cușca, lăsând-o deschisă în casă câteva zile;</li>
<li>întreabă veterinarul dacă animalul are nevoie de ceva pentru stres sau rău de mașină.</li>
</ul>
<h3>În ziua plecării</h3>
<ul>
<li>dă-i o masă ușoară cu câteva ore înainte, nu chiar înainte de plecare;</li>
<li>scoate câinele la o plimbare lungă înainte să plecați;</li>
<li>pune în cușcă o jucărie sau o pătură care miroase a casă.</li>
</ul>
<h3>Pe drum</h3>
<ul>
<li>ia apă și un bol, mâncare și pungi;</li>
<li>la pauze, scoate câinele în lesă, departe de trafic;</li>
<li>pisicile nu se scot din cușcă la pauze, pentru că se pot speria și fugi.</li>
</ul>

<h2>Ce iei pentru animal</h2>
<ol>
<li>pașaportul european pentru animale de companie;</li>
<li>cușca de transport;</li>
<li>lesa, zgarda sau hamul, cu o plăcuță cu numărul tău de telefon;</li>
<li>apă, bol, mâncare pentru tot drumul și câteva zile;</li>
<li>pungi, șervețele, un prosop vechi;</li>
<li>medicamentele recomandate de veterinar.</li>
</ol>

<h2>Dacă animalul nu e potrivit pentru drum</h2>
<p>Pentru unele animale, un drum de o zi și jumătate e prea mult: animalele foarte bătrâne, cele bolnave sau cele care nu suportă deloc mașina. În astfel de cazuri, vorbește cu veterinarul despre variante. Poate e mai bine ca animalul să rămână o perioadă la cineva de încredere.</p>

<h2>Restul actelor pentru drum</h2>
<p>Pe lângă actele animalului, nu uita de ale tale: carte de identitate sau pașaport valabil. Ce îți trebuie ca să călătorești în Germania afli din ghidul despre <a href="/blog/acte-necesare-calatorie-germania">actele necesare pentru Germania</a>. Pentru rezervare și detalii despre curse, vezi pagina de <a href="/transport-persoane-romania-germania">transport persoane România – Germania</a>.</p>`,
    faq: [
      ["Ce acte îi trebuie câinelui pentru Germania?", "Microcip, vaccin antirabic valabil și pașaport european pentru animale de companie, eliberat de un medic veterinar autorizat."],
      ["Pot lua câinele în microbuz?", "Spune-ne obligatoriu la rezervare. Trebuie să verificăm dacă se poate pe cursa respectivă și dacă ceilalți pasageri sunt de acord."],
      ["Animalul trebuie să stea în cușcă?", "Da, într-o cușcă de transport închisă, aerisită și potrivită ca mărime. Nu are voie să stea liber prin mașină."],
      ["Cât timp înainte trebuie făcut vaccinul antirabic?", "După primul vaccin trebuie așteptat un număr de zile înainte de călătorie. Verifică termenul exact cu medicul veterinar și pe portalul UE."],
      ["Există rase de câini cu restricții în Germania?", "Da, unele landuri au reguli speciale pentru anumite rase. Verifică regulile din regiunea în care mergi."],
    ],
  },

  {
    n: 20, published: true, date: D2, group: G, main: "DE",
    slug: "rau-de-masina-drum-lung",
    title: "Rău de mașină pe drum lung: ce ajută",
    desc: "Ce ajută când ai rău de mașină pe un drum lung cu microbuzul: unde să stai, ce să mănânci, ce să eviți și ce poți face dacă ți se face rău pe drum.",
    h1: "Rău de mașină pe drum lung: ce ajută",
    cardText: "Locul potrivit, mâncarea potrivită și ce faci dacă ți se face rău pe drum.",
    ...IMG.lux,
    imgAlt: "Locuri în față în microbuz, potrivite pentru cei cu rău de mașină",
    related: ["calatorie-de-noapte-microbuz-confort", "calatorie-cu-copii-in-microbuz"],
    intro: `
<p><strong>Răul de mașină apare atunci când ochii și urechea internă primesc informații diferite despre mișcare.</strong> Pe un drum lung ajută cel mai mult să stai în față, să privești în depărtare, să mănânci ușor, să ai aer proaspăt și să nu citești sau să nu stai cu ochii în telefon.</p>
<p>Dacă știi că ai rău de mașină, spune-ne la rezervare. Încercăm să îți dăm un loc cât mai în față, iar pe drum îi poți spune oricând șoferului dacă nu te simți bine.</p>`,
    body: `
<h2>De ce apare răul de mașină</h2>
<p>Când stai în mașină, urechea internă simte mișcarea: virajele, frânele, accelerările. Ochii însă văd interiorul mașinii, care stă pe loc. Creierul primește două informații care nu se potrivesc, iar rezultatul poate fi amețeala, greața, transpirația sau durerea de cap.</p>
<p>Unii oameni sunt mai sensibili decât alții. Copiii între 2 și 12 ani, femeile însărcinate și cei care suferă de migrene au mai des rău de mașină. Vestea bună este că pe autostradă, unde drumul e drept și viteza constantă, răul de mașină apare mai rar decât pe drumurile cu serpentine.</p>

<h2>Unde să stai în microbuz</h2>
<ul>
<li><strong>Cât mai în față</strong>. În partea din față a mașinii mișcările se simt mai puțin, iar drumul se vede mai bine.</li>
<li><strong>La geam</strong>, ca să poți privi afară, în depărtare.</li>
<li><strong>Cu fața în direcția de mers</strong>. Dacă stai invers, răul de mașină apare mai ușor.</li>
</ul>
<p>Spune-ne de la rezervare că ai rău de mașină, ca să îți păstrăm, pe cât se poate, un loc potrivit.</p>

<h2>Ce să mănânci înainte și pe drum</h2>
<h3>Ce ajută</h3>
<ul>
<li>o masă ușoară cu câteva ore înainte de plecare. Nu pleca nici flămând, nici foarte sătul;</li>
<li>biscuiți simpli, covrigi, pâine prăjită;</li>
<li>apă, băută în înghițituri mici;</li>
<li>ghimbir (ceai, bomboane de ghimbir). Multora le face bine.</li>
</ul>
<h3>Ce să eviți</h3>
<ul>
<li>mâncarea grasă, prăjită sau foarte condimentată;</li>
<li>alcoolul, inclusiv cu o zi înainte;</li>
<li>multă cafea și băuturile acidulate;</li>
<li>mâncarea cu miros puternic. Uneori și mirosul mâncării altora te poate face să te simți rău.</li>
</ul>

<h2>Ce să faci în timpul drumului</h2>
<ul>
<li><strong>Privește în depărtare</strong>, spre orizont, nu la lucrurile din mașină.</li>
<li><strong>Nu citi</strong> și nu sta mult cu ochii în telefon sau pe tabletă. Dacă vrei să te distrezi, ascultă muzică, un podcast sau o carte audio.</li>
<li><strong>Închide ochii și încearcă să dormi</strong>. În somn, răul de mașină dispare aproape complet.</li>
<li><strong>Respiră adânc și rar</strong> când simți primele semne de greață.</li>
<li><strong>Aerul proaspăt ajută</strong>. Microbuzele au aer condiționat, iar la pauze poți ieși afară.</li>
<li><strong>Ține capul nemișcat</strong>, sprijinit de tetieră sau de o pernă de gât.</li>
</ul>

<h2>Medicamentele pentru rău de mașină</h2>
<p>Există medicamente care previn răul de mașină. Unele se iau cu ceva timp înainte de plecare, iar unele pot da somnolență. Nu lua nimic fără să întrebi farmacistul sau medicul, mai ales dacă iei și alte medicamente, ești însărcinată sau e vorba de un copil. Medicul îți spune ce e potrivit pentru tine și când să îl iei.</p>
<p>Există și brățări de acupresură, pe care unii oameni le folosesc pentru greață. Efectul diferă de la om la om.</p>

<h2>Dacă ți se face rău pe drum</h2>
<ol>
<li>spune-i imediat șoferului sau celui de lângă tine. Nu e nicio rușine, li se întâmplă multora;</li>
<li>privește drept înainte, în depărtare, și respiră rar;</li>
<li>ia câteva înghițituri de apă rece;</li>
<li>folosește o pungă, dacă e nevoie. E bine să ai la tine câteva pungi închise;</li>
<li>la prima oprire posibilă, ieși la aer și mergi puțin.</li>
</ol>
<p>Pe autostradă nu se poate opri oriunde, dar șoferul oprește în cea mai apropiată parcare sigură, dacă e nevoie.</p>

<h2>Ce iei în geanta mică dacă ai rău de mașină</h2>
<ul>
<li>pungi care se închid;</li>
<li>șervețele umede și uscate;</li>
<li>apă și biscuiți simpli;</li>
<li>bomboane de ghimbir sau de mentă;</li>
<li>medicamentul recomandat de medic;</li>
<li>un tricou de schimb.</li>
</ul>

<h2>Răul de mașină la copii</h2>
<p>La copii regulile sunt asemănătoare: să stea cu fața spre drum, să privească afară, să nu mănânce mult și să doarmă cât mai mult. Ține-i ocupați cu cântece sau jocuri de vorbit, nu cu tableta. Mai multe sfaturi găsești în ghidul despre <a href="/blog/calatorie-cu-copii-in-microbuz">drumul lung cu copiii</a>.</p>

<h2>Drumul spre Germania, Austria, Olanda sau Belgia</h2>
<p>Majoritatea drumului se face pe autostradă, unde mașina merge lin. Șoferii noștri conduc atent, fără frâne bruște, iar pauzele regulate te ajută să ieși la aer. Pentru detalii despre curse, vezi pagina de <a href="/transport-persoane-romania-germania">transport persoane România – Germania</a>.</p>`,
    faq: [
      ["Unde e cel mai bine să stau dacă am rău de mașină?", "Cât mai în față, la geam și cu fața în direcția de mers. Spune-ne la rezervare, ca să îți păstrăm un loc potrivit."],
      ["Ce să mănânc înainte de drum?", "O masă ușoară cu câteva ore înainte. Evită mâncarea grasă, alcoolul și băuturile acidulate."],
      ["Pot lua medicamente pentru rău de mașină?", "Da, dar întreabă întâi farmacistul sau medicul, mai ales pentru copii, femei însărcinate sau dacă iei și alte medicamente."],
      ["Ce fac dacă mi se face rău pe drum?", "Spune-i șoferului, privește în depărtare, respiră rar și bea puțină apă. Șoferul oprește în cea mai apropiată parcare sigură, dacă e nevoie."],
      ["Ajută somnul?", "Da. În somn, răul de mașină dispare aproape complet. Pe drumurile lungi se merge și noaptea, deci poți dormi o bună parte din drum."],
    ],
  },

  {
    n: 21, published: true, date: D2, group: G, main: "DE",
    slug: "calatorie-de-noapte-microbuz-confort",
    title: "Cum dormi bine pe o cursă de noapte cu microbuzul",
    desc: "Sfaturi pentru a dormi bine pe o cursă de noapte cu microbuzul spre Germania, Olanda sau Belgia: ce iei pentru somn, cum te îmbraci și ce eviți.",
    h1: "Cum dormi bine pe o cursă de noapte",
    cardText: "Perna, haina, mâncarea și obiceiurile care te ajută să ajungi odihnit.",
    ...IMG.lux,
    imgAlt: "Interior confortabil de microbuz pentru cursele de noapte",
    related: ["cat-dureaza-drumul-romania-olanda", "rau-de-masina-drum-lung"],
    intro: `
<p><strong>Ca să dormi bine pe o cursă de noapte cu microbuzul ai nevoie de o pernă de gât, o mască pentru ochi, dopuri de urechi, haine comode în straturi și o masă ușoară înainte de culcare.</strong> Contează și să nu bei cafea seara și să nu stai cu ochii în telefon până târziu.</p>
<p>Partea noastră e confortul din mașină: scaune cu loc lejer pentru picioare, temperatură plăcută cu aer condiționat sau Webasto și, pe Renault Master, pat pentru dormit.</p>`,
    body: `
<h2>De ce contează somnul pe drumurile lungi</h2>
<p>Pe drumurile spre Germania, Olanda sau Belgia se merge și noaptea, cu doi șoferi care se schimbă. Pentru tine, asta înseamnă că o parte din drum trece mai ușor dacă dormi. Cine doarme bine în prima noapte ajunge mult mai odihnit. Cine stă treaz toată noaptea ajunge obosit și cu dureri de spate.</p>

<h2>Ce iei pentru somn</h2>
<div class="tbl"><table>
<thead><tr><th>Obiect</th><th>De ce ajută</th></tr></thead>
<tbody>
<tr><td>Pernă de gât</td><td>Îți ține capul drept și nu te trezești cu gâtul înțepenit.</td></tr>
<tr><td>Mască pentru ochi</td><td>Te protejează de lumina farurilor și de ecranele altor pasageri.</td></tr>
<tr><td>Dopuri de urechi sau căști</td><td>Reduc zgomotul drumului și al celorlalți.</td></tr>
<tr><td>Pătură subțire sau hanorac</td><td>Te încălzește fără să te sufoce.</td></tr>
<tr><td>Șosete groase</td><td>Picioarele reci te țin treaz.</td></tr>
</tbody>
</table></div>

<h2>Cum te îmbraci</h2>
<ul>
<li><strong>Haine comode, largi</strong>: pantaloni de trening, tricou moale, hanorac. Blugii strâmți și curelele te deranjează după câteva ore.</li>
<li><strong>În straturi</strong>, ca să poți da jos sau pune ceva după cum îți e cald sau frig.</li>
<li><strong>Încălțăminte ușor de scos</strong>. Picioarele se umflă puțin pe drumurile lungi, iar fără pantofi stai mai bine.</li>
</ul>

<h2>Ce mănânci și ce bei seara</h2>
<ul>
<li>mănâncă ușor, cu cel puțin o oră înainte de somn;</li>
<li>evită cafeaua, energizantele și ceaiul negru după-amiaza și seara;</li>
<li>evită alcoolul. Te ajută să adormi, dar somnul e agitat și te trezești deshidratat;</li>
<li>bea apă, dar nu foarte multă înainte de somn, ca să nu te trezești des pentru toaletă.</li>
</ul>

<h2>Obiceiurile care te ajută să adormi</h2>
<h3>Lasă telefonul</h3>
<p>Lumina ecranului îi spune creierului că e încă zi. Dacă vrei să adormi, lasă telefonul cu cel puțin o jumătate de oră înainte. Poți asculta muzică liniștită sau o carte audio, cu ecranul stins.</p>
<h3>Folosește pauza de seară</h3>
<p>La ultima pauză de seară, mergi la toaletă, spală-te pe dinți și pe față, schimbă-te în ceva comod. E ca o pregătire de culcare acasă și îi spune corpului că urmează somnul.</p>
<h3>Găsește poziția bună</h3>
<p>Lasă spătarul puțin pe spate, dacă se poate și dacă nu îl deranjezi pe cel din spate. Sprijină-ți capul cu perna de gât. Dacă stai la geam, poți folosi și geamul ca sprijin, cu un hanorac împăturit.</p>

<h2>Patul din Renault Master</h2>
<p>Renault Master are un pat pentru dormit, util pe drumurile lungi. Să dormi întins câteva ore face diferența pentru spate și picioare. Dacă vrei să știi dacă se poate folosi pe cursa ta, întreabă la rezervare.</p>
<!-- TODO: regula de folosire a patului din Master (pe rând, contra cost, la cerere) – de confirmat de firmă. -->

<h2>Respectă somnul celorlalți</h2>
<p>Noaptea, în microbuz, toată lumea încearcă să doarmă. Câteva reguli simple ajută pe toată lumea:</p>
<ul>
<li>vorbește încet sau deloc;</li>
<li>folosește căști pentru muzică și filme;</li>
<li>redu luminozitatea telefonului;</li>
<li>nu mânca lucruri care miros puternic sau fac zgomot;</li>
<li>la pauze, coboară și urcă fără să trântești ușa.</li>
</ul>

<h2>Dacă nu poți dormi</h2>
<p>Nu toată lumea poate dormi într-o mașină în mișcare. Dacă nu reușești, nu te forța și nu te enerva. Stai cu ochii închiși, respiră rar și odihnește-te cât poți. Și odihna fără somn ajută. Mișcă-te la fiecare pauză, ca să nu ți se înțepenească picioarele, și dormi cât poți după ce ajungi.</p>

<h2>Sosirea după o noapte pe drum</h2>
<ul>
<li>bea apă și mănâncă ceva ușor;</li>
<li>dacă ajungi dimineața, încearcă să stai treaz până seara, ca să-ți revină ritmul;</li>
<li>nu conduce mașina imediat după ce ajungi, dacă n-ai dormit bine.</li>
</ul>

<h2>Cursele noastre</h2>
<p>Facem curse spre Germania, Austria, Olanda și Belgia, de la adresă la adresă, cu microbuze 8+1 locuri, loc lejer pentru picioare, aer condiționat, Webasto iarna și încărcătoare la fiecare loc. Cât durează fiecare drum afli din ghidurile despre <a href="/blog/cat-dureaza-drumul-romania-olanda">drumul până în Olanda</a> și <a href="/blog/cat-dureaza-drumul-romania-germania">drumul până în Germania</a>. Detalii pe pagina de <a href="/transport-persoane-romania-germania">transport persoane România – Germania</a>.</p>`,
    faq: [
      ["Se merge și noaptea cu microbuzul?", "Da, pe drumurile lungi se merge și noaptea, cu doi șoferi care se schimbă la volan."],
      ["Ce iau ca să pot dormi?", "O pernă de gât, o mască pentru ochi, dopuri de urechi, o pătură subțire sau un hanorac și șosete groase."],
      ["Există pat în microbuz?", "Pe Renault Master există pat pentru dormit. Întreabă la rezervare dacă îl poți folosi pe cursa ta."],
      ["E frig noaptea în microbuz?", "Nu. Avem aer condiționat vara și Webasto iarna. E bine totuși să ai un hanorac sau o pătură subțire."],
      ["Ce fac dacă nu pot dormi?", "Stai cu ochii închiși, respiră rar și odihnește-te. Mișcă-te la pauze și dormi după ce ajungi."],
    ],
  },

  {
    n: 22, published: true, date: D2, group: G, main: "DE",
    slug: "transport-persoane-sarbatori-craciun-paste",
    title: "Acasă de sărbători: cum îți rezervi locul la timp",
    desc: "Cum îți rezervi locul la timp pentru drumul acasă de Crăciun, Paște sau în vacanța de vară, ce perioade sunt aglomerate și ce să ai pregătit.",
    h1: "Acasă de sărbători: cum îți rezervi locul la timp",
    cardText: "Când să suni, ce perioade sunt pline și cum aduci cadourile acasă.",
    ...IMG.masterRemorca,
    imgAlt: "Microbuz cu remorcă pentru bagajele de sărbători",
    related: ["reduceri-transport-grup-familie", "bagaje-permise-transport-persoane"],
    intro: `
<p><strong>Ca să prinzi loc acasă de sărbători, rezervă cu câteva săptămâni înainte, mai ales pentru Crăciun și Paște.</strong> În zilele dinaintea sărbătorilor pleacă foarte mulți români din Germania, Austria, Olanda și Belgia spre casă, iar locurile se ocupă repede.</p>
<p>Spune-ne de la început data dorită, câte persoane sunteți, câte bagaje aveți și dacă vreți și întoarcerea. Cu cât afli mai devreme, cu atât ai mai multe variante.</p>`,
    body: `
<h2>Perioadele cele mai aglomerate</h2>
<div class="tbl"><table>
<thead><tr><th>Perioadă</th><th>Spre România</th><th>Înapoi spre străinătate</th></tr></thead>
<tbody>
<tr><td>Crăciun și Anul Nou</td><td>a doua jumătate a lunii decembrie</td><td>primele zile din ianuarie</td></tr>
<tr><td>Paștele ortodox</td><td>săptămâna dinainte de Paște</td><td>după a doua zi de Paște</td></tr>
<tr><td>Vacanța de vară</td><td>iulie – august</td><td>sfârșitul lui august, începutul lui septembrie</td></tr>
<tr><td>Rusalii, 1 Mai, alte zile libere</td><td>zilele dinaintea punții</td><td>la finalul punții</td></tr>
</tbody>
</table></div>
<p>În aceste perioade cererea e mare în ambele sensuri. Dacă ai o dată fixă, sună cât mai devreme.</p>

<h2>Când să rezervi</h2>
<ul>
<li><strong>Pentru Crăciun</strong>: cel mai bine din noiembrie sau chiar mai devreme, dacă știi deja când ai concediu.</li>
<li><strong>Pentru Paște</strong>: cu cel puțin câteva săptămâni înainte. Data Paștelui ortodox se schimbă de la an la an, deci verifică data exactă.</li>
<li><strong>Pentru vară</strong>: imediat ce îți știi concediul.</li>
</ul>
<p>Rezervarea se face simplu, la telefon sau pe WhatsApp. Nu trebuie să plătești online și nu trebuie să îți faci cont nicăieri.</p>

<h2>Ce să ne spui când rezervi</h2>
<ol>
<li>adresa din străinătate de unde te luăm;</li>
<li>adresa din România unde te lăsăm;</li>
<li>data dorită și dacă poți pleca și cu o zi înainte sau după;</li>
<li>câte persoane sunteți și dacă sunt copii;</li>
<li>câte bagaje aveți și dacă sunt mai multe decât de obicei;</li>
<li>data întoarcerii, dacă o știi.</li>
</ol>

<h2>Flexibilitatea te ajută</h2>
<p>Cele mai cerute zile sunt cele chiar dinaintea sărbătorilor, de exemplu 22–23 decembrie. Dacă poți pleca cu o zi sau două mai devreme, ai mai multe șanse să prinzi exact cursa care îți convine. La fel la întoarcere: zilele imediat după sărbători sunt cele mai pline.</p>

<h2>Bagajele de sărbători</h2>
<p>De sărbători, toată lumea are bagaje mai multe: cadouri pentru familie, haine groase, uneori electrocasnice sau lucruri cumpărate pentru casă. De aceea:</p>
<ul>
<li>spune-ne dinainte câte bagaje ai, ca să atașăm remorca acoperită dacă e nevoie;</li>
<li>pune cadourile fragile în mijlocul valizei, între haine;</li>
<li>pune pe fiecare bagaj o etichetă cu numele și telefonul.</li>
</ul>
<p>Detalii în ghidul despre <a href="/blog/bagaje-permise-transport-persoane">bagajele la transportul de persoane</a>.</p>

<h2>Cadourile mari le poți trimite separat</h2>
<p>Dacă vrei să trimiți acasă cadouri mari, de exemplu un televizor, o bicicletă pentru copii sau o cutie mare cu dulciuri, le poți trimite ca și colet, separat de tine. Le ridicăm de la adresa ta și le predăm în mână familiei. Așa nu le cari tu și nu ocupă locul din bagajul tău. Detalii pe pagina de <a href="/transport-colete-romania-europa">transport colete România – Europa</a>.</p>

<h2>Drumul iarna</h2>
<p>De Crăciun, drumul se face pe vreme de iarnă. Microbuzele noastre au anvelope de iarnă, verificate înainte de fiecare cursă, iar în mașină e cald datorită sistemului Webasto. Ninsoarea sau poleiul pot însă încetini drumul. Siguranța e mai importantă decât o oră câștigată, așa că nu-ți face planuri la fix pentru ziua sosirii.</p>

<h2>Mergeți mai mulți? Rezervați împreună</h2>
<p>Dacă vii acasă cu familia sau cu colegii, rezervați împreună. Pentru grupuri prețul pe persoană e de obicei mai mic, iar noi organizăm preluările ca să plecați împreună. Detalii în ghidul despre <a href="/blog/reduceri-transport-grup-familie">cum economisești când călătorești în grup</a>.</p>

<h2>Dacă ți se schimbă planurile</h2>
<p>Se întâmplă: concediul se mută, apare o problemă la muncă. Dacă nu mai poți pleca în ziua rezervată, anunță-ne cât mai repede. Un loc eliberat din timp poate fi dat altcuiva care așteaptă, iar noi îți căutăm o altă cursă.</p>

<h2>Rezervă acum drumul acasă</h2>
<p>Facem curse între România și Germania, Austria, Olanda și Belgia, de la adresă la adresă, în ambele sensuri. Detalii pe pagina de <a href="/transport-persoane-romania-germania">transport persoane România – Germania</a>.</p>`,
    faq: [
      ["Cu cât timp înainte să rezerv pentru Crăciun?", "Cât mai devreme, ideal din noiembrie sau imediat ce îți știi concediul. Zilele dinaintea Crăciunului se ocupă repede."],
      ["Pot rezerva și întoarcerea odată cu plecarea?", "Da. Spune-ne de la început data întoarcerii, ca să planificăm ambele curse."],
      ["Pot lua mai multe bagaje de sărbători?", "Da, dar spune-ne dinainte. Pentru bagaje multe atașăm remorca acoperită."],
      ["Pot trimite cadouri mari separat?", "Da, ca și colet. Îl ridicăm de la adresa ta și îl predăm în mână familiei din România."],
      ["Cum rezerv?", "La telefon, 0790 752 888, sau pe WhatsApp. Nu e nevoie de plată online sau de cont."],
    ],
  },
];
