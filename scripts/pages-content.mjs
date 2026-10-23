// Conținutul paginilor de rută și servicii. Doar informații confirmate pe site;
// tot ce trebuie confirmat de firmă e marcat cu TODO (comentariu HTML, invizibil pe pagină).

const ALL = ["România", "Austria", "Germania", "Olanda", "Belgia"];

export const routes = [
  {
    slug: "transport-persoane-romania-germania",
    short: "România – Germania",
    sub: "Transport persoane, plecări zilnice",
    crumb: "Transport persoane România – Germania",
    title: "Transport persoane România – Germania | BRO Transport",
    desc: "Transport persoane România – Germania cu microbuz 8+1, de la adresă la adresă. Plecări zilnice în ambele sensuri. Rezervă acum la 0790 752 888.",
    h1: "Transport persoane România – Germania, de la ușa ta până la adresă",
    lead: "Microbuz 8+1 locuri, plecări zilnice în ambele sensuri. Te luăm de acasă din România și te lăsăm la adresa din Germania, fără autogară și fără schimbări.",
    img: "/img/hero-master.webp", imgW: 1024, imgH: 688,
    imgAlt: "Microbuz Renault Master portocaliu BRO pentru transport persoane România – Germania",
    serviceName: "Transport persoane România – Germania",
    serviceType: "Transport persoane cu microbuzul",
    area: ["România", "Germania"],
    body: `
        <p>Germania e una dintre cele mai căutate destinații de către românii care lucrează, studiază sau au familie în străinătate. Drumul e lung, iar la final nu vrei să mai cauți o stație de autobuz, un tren de legătură sau un taxi scump. De aceea la <strong>BRO Transport International</strong> facem transport de persoane <strong>de la adresă la adresă</strong>: te luăm de la ușă în România și te lăsăm direct la adresa unde mergi în Germania. La fel și la întoarcere.</p>

        <h2>Cum decurge o cursă România – Germania</h2>
        <ol>
          <li><strong>Suni la 0790 752 888.</strong> Ne spui de unde pleci, adresa din Germania, data și câte persoane sunteți.</li>
          <li><strong>Afli prețul pe loc.</strong> Îți confirmăm locul, prețul și ora aproximativă la care trecem pe la tine. Nu există costuri ascunse și nu plătești nimic în plus la final.</li>
          <li><strong>Șoferul te sună înainte să ajungă.</strong> Nu stai cu bagajele în stradă ore întregi. Ieși când îți spune că e aproape.</li>
          <li><strong>Te lăsăm la adresa din Germania.</strong> Fără autogară și fără schimbări de mașină pe drum.</li>
        </ol>
        <p>Avem <strong>plecări zilnice</strong> pe ruta România – Austria – Germania – Olanda – Belgia, în ambele sensuri. Dacă ai nevoie să pleci repede, sună-ne și îți spunem prima plecare cu loc liber.</p>

        <h2>Unde te ducem în Germania</h2>
        <p>Pentru că lucrăm de la adresă la adresă, nu avem o listă fixă de stații. Ne spui orașul și adresa exactă, iar noi îți confirmăm la telefon cum o includem în cursa din ziua dorită. La fel și pentru adresa de plecare din România.</p>
        <!-- TODO: lista exactă de orașe/zone din Germania și din România acoperite curent (de completat de BRO Transport). Nu publicăm orașe neconfirmate. -->

        <h2>Confort pe un drum lung</h2>
        <p>Până în Germania stai multe ore pe scaun, așa că am ales microbuze în care chiar te poți odihni:</p>
        <ul>
          <li><strong>8+1 locuri</strong>, cu loc lejer pentru picioare;</li>
          <li><strong>aer condiționat</strong> vara și <strong>Webasto</strong> iarna, care ține cald chiar și cu motorul oprit;</li>
          <li><strong>pat pentru dormit</strong> în Renault Master;</li>
          <li><strong>apă și încărcătoare</strong> pentru telefon la fiecare loc;</li>
          <li>interior cu <strong>lumini LED</strong> ambientale.</li>
        </ul>
        <p>Mașinile sunt ale noastre, în culorile BRO, nu închiriate și nu de la terți. Le verificăm înainte de fiecare drum (frâne, lumini, ulei, presiunea în roți) și folosim anvelope noi, potrivite sezonului.</p>

        <h2>Bagaje, copii și animale de companie</h2>
        <p>Pe o cursă spre Germania mulți oameni pleacă pentru perioade lungi și au bagaje pe măsură. Pe lângă portbagaj, avem <strong>remorci acoperite</strong>, ca valizele și sacoșele să ajungă uscate și curate. Spune-ne la rezervare câte bagaje ai, ca să-ți păstrăm loc.</p>
        <!-- TODO: numărul/greutatea de bagaje incluse în preț și costul bagajelor suplimentare. -->
        <p>Dacă vii cu copii sau vrei să iei cu tine un animal de companie, anunță-ne de la început, la telefon. Așa organizăm locurile din timp și îți spunem exact ce condiții se aplică.</p>
        <!-- TODO: regulile pentru copii (scaun auto, vârstă minimă) și pentru animale de companie. -->

        <h2>Plata și prețul</h2>
        <p>Prețul depinde de traseu, de data plecării și de câte persoane sunteți. Îl afli <strong>înainte de plecare</strong>, la telefon, și rămâne cel stabilit. Dacă mergeți mai mulți, familie, prieteni sau colegi de muncă, cere prețul pentru grup. Cu cât sunteți mai mulți, cu atât plătește fiecare mai puțin.</p>
        <!-- TODO: modalitățile de plată acceptate (numerar, card, transfer) și moneda. -->

        <h2>De ce microbuz și nu autocar sau avion</h2>
        <p><strong>Avionul</strong> e rapid doar de la aeroport la aeroport. Mai pui drumul până la aeroport, așteptarea, taxele pentru bagaje și transferul până la adresa din Germania. <strong>Autocarul</strong> te lasă într-o autogară, adesea departe de unde ai treabă. Cu microbuzul BRO pleci de acasă și ajungi la adresă, cu toate bagajele lângă tine. Pentru o familie cu multe bagaje sau pentru cineva care se mută la muncă, de obicei e varianta cea mai simplă.</p>

        <h2>Ai și altceva de trimis în Germania?</h2>
        <p>Cu aceeași cursă transportăm și <a href="/transport-colete-romania-europa">colete între România și Germania</a>: haine, mâncare de acasă, cadouri, acte. Ți-ai cumpărat o mașină din Germania? O aducem acasă cu <a href="/transport-auto-platforma">transport auto pe platformă</a>, cu acoperire CMR. Mergem și spre <a href="/transport-persoane-romania-austria">Austria</a>, <a href="/transport-persoane-romania-olanda">Olanda</a> și <a href="/transport-persoane-romania-belgia">Belgia</a>.</p>
`,
    faq: [
      ["Cât durează drumul din România până în Germania?", "Depinde de orașul de plecare, de adresa din Germania și de câți pasageri luăm și lăsăm pe traseu. Îți spunem o estimare la telefon, când rezervi."],
      ["Mă luați de acasă sau trebuie să vin într-un punct de întâlnire?", "Te luăm de acasă. Facem transport de la adresă la adresă, atât la plecarea din România, cât și la sosirea în Germania. Șoferul te sună înainte să ajungă."],
      ["Cât de des aveți curse spre Germania?", "Avem plecări zilnice pe ruta România – Austria – Germania – Olanda – Belgia, în ambele sensuri. Sună la 0790 752 888 și îți spunem prima plecare cu loc liber."],
      ["Pot face rezervare și pentru întoarcerea din Germania în România?", "Da. Mergem în ambele sensuri, așa că poți rezerva și cursa de întoarcere din Germania până la adresa ta din România."],
      ["Aveți reducere dacă mergem mai mulți?", "Da. Pentru grupuri, familie, prieteni sau colegi, prețul pe persoană e mai mic. Spune-ne câți sunteți și îți facem o ofertă pentru grup. Grupurile de peste 6 persoane primesc și o masă gratuită, la tur sau la retur."],
    ],
  },
  {
    slug: "transport-persoane-romania-austria",
    short: "România – Austria",
    sub: "Transport persoane, plecări zilnice",
    crumb: "Transport persoane România – Austria",
    title: "Transport persoane România – Austria | BRO Transport",
    desc: "Transport persoane România – Austria, de acasă până la adresă, cu microbuz 8+1. Plecări zilnice, prețuri pentru grupuri. Sună la 0790 752 888.",
    h1: "Transport persoane România – Austria, cu plecare de acasă",
    lead: "Mergi la muncă, la familie sau te întorci acasă de sărbători? Te luăm de la ușă și te lăsăm la adresa din Austria, cu plecări zilnice în ambele sensuri.",
    img: "/img/trafic.webp", imgW: 900, imgH: 605,
    imgAlt: "Microbuz Renault Trafic portocaliu BRO pentru transport persoane România – Austria",
    serviceName: "Transport persoane România – Austria",
    serviceType: "Transport persoane cu microbuzul",
    area: ["România", "Austria"],
    body: `
        <p>Austria e prima țară mare de pe ruta noastră și, pentru mulți români, cea mai apropiată destinație de muncă din vestul Europei. Unii pleacă pentru un sezon, alții fac naveta lunar sau vin acasă de sărbători. Toți vor același lucru: să ajungă comod, la timp și fără să schimbe trei mijloace de transport. Asta facem la <strong>BRO Transport International</strong>: <strong>transport de persoane România – Austria de la adresă la adresă</strong>.</p>

        <h2>Cum rezervi o cursă spre Austria</h2>
        <p>Nu ai nevoie de cont, de aplicație sau de bilet tipărit. Rezervarea se face la telefon, în câteva minute:</p>
        <ol>
          <li>Suni la <strong>0790 752 888</strong> și ne spui adresa de plecare, adresa din Austria și ziua în care vrei să pleci.</li>
          <li>Îți confirmăm locul, prețul și ora aproximativă la care trecem să te luăm.</li>
          <li>În ziua plecării, șoferul te sună înainte să ajungă la tine.</li>
          <li>Te lăsăm la adresa ta din Austria, fără opriri în autogări și fără transferuri.</li>
        </ol>

        <h2>Plecări zilnice, în ambele sensuri</h2>
        <p>Avem <strong>plecări zilnice</strong> pe ruta România – Austria – Germania – Olanda – Belgia. Dacă ți s-a schimbat programul la muncă sau trebuie să ajungi urgent acasă, sună-ne și îți spunem prima plecare cu loc liber. Cursa funcționează la fel și invers, din Austria spre România.</p>

        <h2>Ce localități din Austria acoperim</h2>
        <p>Lucrăm de la adresă la adresă, deci nu avem stații fixe. Fie că mergi într-un oraș mare, fie într-o localitate mai mică, ne spui adresa exactă, iar noi îți confirmăm la telefon cum o includem în cursa din ziua aleasă.</p>
        <!-- TODO: orașele/regiunile din Austria (ex. Viena, Linz, Salzburg, Graz, Innsbruck) acoperite curent – de confirmat de BRO Transport înainte de publicare. -->

        <h2>Drum liniștit, vară și iarnă</h2>
        <p>Drumul spre Austria trece prin zone unde iarna e serioasă. De aceea punem accent pe siguranță: <strong>anvelope noi, potrivite sezonului</strong>, și mașini verificate înainte de fiecare cursă (frâne, lumini, ulei, presiunea în roți). În microbuz ai:</p>
        <ul>
          <li><strong>Webasto</strong>, ca să fie cald chiar și când mașina stă pe loc;</li>
          <li><strong>aer condiționat</strong> pentru verile toride;</li>
          <li>scaune comode, cu <strong>loc lejer pentru picioare</strong>, în microbuze de 8+1 locuri;</li>
          <li><strong>apă și încărcătoare</strong> la fiecare loc;</li>
          <li><strong>pat pentru dormit</strong> în Renault Master.</li>
        </ul>

        <h2>Bagaje și lucruri pentru o ședere lungă</h2>
        <p>Cine pleacă la muncă pentru câteva luni nu pleacă doar cu un rucsac. Pe lângă portbagaj, avem <strong>remorci acoperite cu prelată</strong>, ca bagajele să stea ferite de ploaie și praf. Spune-ne la rezervare ce ai de luat, ca să-ți păstrăm loc.</p>
        <!-- TODO: bagaje incluse în preț și tarif pentru bagaj suplimentar. -->
        <p>Călătorești cu un copil sau cu un animal de companie? Anunță-ne la telefon când rezervi, ca să organizăm locurile și să îți spunem condițiile.</p>
        <!-- TODO: reguli copii (scaun auto) și animale de companie. -->

        <h2>Cât costă transportul România – Austria</h2>
        <p>Prețul depinde de adresa de plecare, de adresa din Austria, de dată și de numărul de persoane. Îl afli exact la telefon, <strong>înainte de plecare</strong>, fără surprize la final. Pentru grupuri, familii, colegi de muncă sau prieteni, prețul pe persoană e mai mic. Grupurile de peste 6 persoane primesc și o masă gratuită, la tur sau la retur.</p>
        <!-- TODO: modalități de plată acceptate. -->

        <h2>Microbuz sau autocar?</h2>
        <p>Autocarul are orar fix și te lasă la autogară. Dacă locuința sau locul de muncă e în altă parte, mai ai de luat un tren sau un taxi. Microbuzul BRO te duce direct la adresă, iar într-un microbuz de 8+1 locuri nu ești unul dintre cincizeci de pasageri. Vorbești direct cu noi, nu cu un call-center.</p>

        <h2>Și altceva pentru Austria</h2>
        <p>Pe aceeași rută ducem și <a href="/transport-colete-romania-europa">colete România – Austria</a>, predate în mâna destinatarului, și <a href="/transport-auto-platforma">mașini pe platformă</a>. Mergem mai departe spre <a href="/transport-persoane-romania-germania">Germania</a>, <a href="/transport-persoane-romania-olanda">Olanda</a> și <a href="/transport-persoane-romania-belgia">Belgia</a>.</p>
`,
    faq: [
      ["Pot pleca spre Austria chiar mâine?", "Avem plecări zilnice, deci de multe ori da. Sună la 0790 752 888 și îți spunem dacă mai e loc liber în cursa de mâine."],
      ["Mă luați de la adresa mea din România?", "Da. Te luăm de acasă și te lăsăm la adresa din Austria. Șoferul te sună înainte să ajungă la tine."],
      ["Mergeți și în localități mici din Austria, nu doar în orașe mari?", "Lucrăm de la adresă la adresă. Spune-ne localitatea exactă la telefon și îți confirmăm cum o includem în cursa dorită."],
      ["Cum e drumul iarna?", "Folosim anvelope noi, potrivite sezonului, și verificăm mașina înainte de fiecare cursă. În microbuz avem Webasto, care ține cald chiar și cu motorul oprit."],
      ["Pot lua bagaje mai multe pentru o ședere lungă?", "Da. Pe lângă portbagaj avem remorci acoperite cu prelată. Spune-ne la rezervare ce bagaje ai, ca să-ți păstrăm loc."],
    ],
  },
  {
    slug: "transport-persoane-romania-olanda",
    short: "România – Olanda",
    sub: "Transport persoane, de la adresă la adresă",
    crumb: "Transport persoane România – Olanda",
    title: "Transport persoane România – Olanda | BRO Transport",
    desc: "Transport persoane România – Olanda cu microbuz confortabil, pat pentru dormit și Webasto. De la adresă la adresă, plecări zilnice. Tel. 0790 752 888.",
    h1: "Transport persoane România – Olanda, confortabil pe tot drumul",
    lead: "Cel mai lung drum de pe ruta noastră merită un microbuz în care chiar te odihnești. Te luăm de acasă și te lăsăm la adresa din Olanda.",
    img: "/img/interior-lux.webp", imgW: 1000, imgH: 672,
    imgAlt: "Interiorul microbuzului BRO cu scaune comode și lumini LED, pentru drumul România – Olanda",
    serviceName: "Transport persoane România – Olanda",
    serviceType: "Transport persoane cu microbuzul",
    area: ["România", "Olanda"],
    body: `
        <p>Olanda e printre cele mai îndepărtate destinații de pe ruta noastră. Drumul trece prin mai multe țări, așa că ce contează cel mai mult e cum îl petreci: dacă poți dormi, dacă ai unde să-ți încarci telefonul și dacă la final ajungi direct unde ai treabă. La <strong>BRO Transport International</strong> facem <strong>transport de persoane România – Olanda de la adresă la adresă</strong>, cu microbuze gândite pentru drumuri lungi.</p>

        <h2>Gândit pentru un drum lung</h2>
        <p>Pe un traseu de o asemenea lungime, câteva lucruri fac diferența între „am ajuns frânt” și „am ajuns odihnit”:</p>
        <ul>
          <li><strong>Pat pentru dormit</strong> în Renault Master, ca să te poți întinde;</li>
          <li><strong>loc lejer pentru picioare</strong> în microbuzele de 8+1 locuri;</li>
          <li><strong>Webasto</strong> iarna și <strong>aer condiționat</strong> vara;</li>
          <li><strong>apă la bord și încărcătoare</strong> pentru telefon la fiecare loc;</li>
          <li><strong>lumini LED</strong> ambientale, plăcute și noaptea.</li>
        </ul>
        <p>Mașinile sunt ale noastre și sunt verificate înainte de fiecare cursă. Folosim anvelope noi, potrivite sezonului. Pe un drum atât de lung, nu facem economie la siguranță.</p>

        <h2>Pașii, de la telefon până la adresa din Olanda</h2>
        <ol>
          <li>Suni la <strong>0790 752 888</strong> și ne spui adresa de plecare din România, adresa din Olanda și data.</li>
          <li>Îți confirmăm pe loc locul, prețul și ora aproximativă de plecare.</li>
          <li>Șoferul te sună înainte să ajungă la tine.</li>
          <li>Ajungi la adresa din Olanda, fără schimbări de mașină pe drum.</li>
        </ol>
        <p>Avem <strong>plecări zilnice</strong> pe ruta România – Austria – Germania – Olanda – Belgia, în ambele sensuri. Poți rezerva și întoarcerea din Olanda până acasă.</p>

        <h2>Unde mergem în Olanda</h2>
        <p>Nu avem stații fixe. Ne spui orașul și adresa, iar noi îți confirmăm la telefon cum o includem în cursa din ziua dorită.</p>
        <!-- TODO: orașele/zonele din Olanda acoperite curent (ex. Amsterdam, Rotterdam, Haga, Eindhoven) – de confirmat înainte de publicare. -->

        <h2>Bagajele pentru muncă în Olanda</h2>
        <p>Mulți români pleacă în Olanda pentru perioade mai lungi, la muncă sezonieră sau cu contract. Asta înseamnă bagaje mai multe decât la o vacanță. Pe lângă portbagaj avem <strong>remorci acoperite cu prelată</strong>, ca valizele să ajungă curate și uscate. Spune-ne la rezervare câte bagaje ai.</p>
        <!-- TODO: bagaje incluse și tarif bagaj suplimentar. -->
        <p>Copiii și animalele de companie se anunță la rezervare, ca să organizăm locurile și să-ți spunem condițiile.</p>
        <!-- TODO: reguli copii și animale de companie. -->

        <h2>Preț știut dinainte</h2>
        <p>Prețul depinde de distanță, de dată și de numărul de persoane. Îl afli la telefon <strong>înainte de plecare</strong> și nu se schimbă la final. Dacă mergeți mai mulți colegi spre același loc de muncă, cereți prețul pentru grup. Pe persoană iese mai puțin.</p>
        <!-- TODO: modalități de plată. -->

        <h2>De ce nu cu avionul?</h2>
        <p>Pe hârtie, avionul e mai rapid. În realitate adaugi drumul până la aeroport, așteptarea, limita de bagaje și transferul până la adresă. Cu multe bagaje sau cu un grup, costul și bătaia de cap cresc repede. Cu microbuzul pleci de la ușă, iei bagajele cu tine și ajungi la adresă.</p>

        <h2>Rezervă din timp înainte de sărbători</h2>
        <p>Înainte de Crăciun, de Paște și în vacanța de vară foarte mulți români din Olanda vor să vină acasă în aceleași zile, apoi să se întoarcă tot împreună. Dacă știi deja când pleci, sună-ne din timp. Așa ai locul sigur în ziua care îți convine și nu trebuie să-ți muți concediul după locurile rămase.</p>

        <h2>Întoarcerea din Olanda acasă</h2>
        <p>Cursa funcționează la fel și invers. Te luăm de la adresa din Olanda, cu bagajele pe care le-ai strâns în luni de muncă, și te lăsăm la ușa casei din România. Nu mai cari valize prin gări și aeroporturi la final de contract. Dacă vii împreună cu colegi din aceeași zonă, cereți prețul pentru grup.</p>

        <h2>Mai departe pe rută</h2>
        <p>Dacă ai treabă și în <a href="/transport-persoane-romania-belgia">Belgia</a>, ruta noastră ajunge și acolo. Trimitem și <a href="/transport-colete-romania-europa">colete între România și Olanda</a>, iar <a href="/transport-auto-platforma">mașinile cumpărate în vest</a> le aducem pe platformă. Vezi și cursele spre <a href="/transport-persoane-romania-germania">Germania</a> și <a href="/transport-persoane-romania-austria">Austria</a>.</p>
`,
    faq: [
      ["Pot dormi pe drumul spre Olanda?", "Da. Renault Master are pat pentru dormit, iar în celelalte microbuze ai scaune comode cu loc lejer pentru picioare."],
      ["Aveți curse și din Olanda spre România?", "Da, mergem în ambele sensuri. Poți rezerva și întoarcerea din Olanda până la adresa ta din România."],
      ["Mergem mai mulți colegi la același loc de muncă. Avem reducere?", "Da. Pentru grupuri prețul pe persoană e mai mic. Sună-ne, spune-ne câți sunteți și adresa, și îți facem o ofertă. Grupurile de peste 6 persoane primesc și o masă gratuită, la tur sau la retur."],
      ["Cum aflu prețul pentru Olanda?", "Suni la 0790 752 888. Prețul depinde de adresa de plecare, de adresa din Olanda și de dată și îl afli înainte de plecare."],
      ["Pot lua mai multe bagaje?", "Da. Avem portbagaj și remorci acoperite cu prelată. Anunță-ne la rezervare ce bagaje ai, ca să-ți păstrăm loc."],
    ],
  },
  {
    slug: "transport-persoane-romania-belgia",
    short: "România – Belgia",
    sub: "Transport persoane, ambele sensuri",
    crumb: "Transport persoane România – Belgia",
    title: "Transport persoane România – Belgia | BRO Transport",
    desc: "Transport persoane România – Belgia cu microbuz, de acasă până la adresă. Plecări zilnice în ambele sensuri și preț știut dinainte. Sună: 0790 752 888.",
    h1: "Transport persoane România – Belgia, fără autogară și fără schimbări",
    lead: "Te luăm de acasă și te lăsăm la adresa din Belgia, cu microbuze 8+1 locuri, aer condiționat și Webasto. Plecări zilnice, în ambele sensuri.",
    img: "/img/sharan-remorca.webp", imgW: 900, imgH: 605,
    imgAlt: "Volkswagen Sharan portocaliu BRO cu remorcă acoperită pentru bagaje, pe ruta România – Belgia",
    serviceName: "Transport persoane România – Belgia",
    serviceType: "Transport persoane cu microbuzul",
    area: ["România", "Belgia"],
    body: `
        <p>Belgia e capătul rutei noastre spre vest. Pentru cine merge acolo, alternativele obișnuite înseamnă de cele mai multe ori un zbor plus un tren sau un autocar care te lasă departe de adresă. La <strong>BRO Transport International</strong> facem <strong>transport de persoane România – Belgia de la adresă la adresă</strong>: un singur drum, o singură mașină, de la ușa ta până la destinație.</p>

        <h2>De ce un singur drum e mai simplu</h2>
        <p>Când pleci cu bagaje mari, cu copii sau cu părinți în vârstă, fiecare schimbare de mijloc de transport e o bătaie de cap: cobori, cari bagajele, aștepți, urci din nou. Cu microbuzul BRO:</p>
        <ul>
          <li>te luăm <strong>de acasă</strong>, iar șoferul te sună înainte să ajungă;</li>
          <li>bagajele stau în portbagaj sau în <strong>remorca acoperită</strong>, ferite de ploaie;</li>
          <li><strong>nu schimbi mașina</strong> pe drum;</li>
          <li>te lăsăm <strong>la adresa</strong> din Belgia.</li>
        </ul>

        <h2>Cum rezervi</h2>
        <p>Suni la <strong>0790 752 888</strong> și ne spui de unde pleci, adresa din Belgia, data și câte persoane sunteți. Îți confirmăm pe loc locul, prețul și ora aproximativă de plecare. Nu ai nevoie de cont sau aplicație. Avem <strong>plecări zilnice</strong> pe ruta România – Austria – Germania – Olanda – Belgia și mergem în ambele sensuri, deci poți rezerva și întoarcerea.</p>

        <h2>Adrese din Belgia</h2>
        <p>Nu lucrăm cu stații fixe. Ne dai adresa exactă și îți confirmăm la telefon cum o includem în cursa din ziua aleasă.</p>
        <!-- TODO: orașele/zonele din Belgia acoperite curent (ex. Bruxelles, Antwerpen, Gent, Liège) – de confirmat înainte de publicare. -->

        <h2>Cu ce mergem</h2>
        <p>Toate mașinile sunt ale noastre, în culorile BRO: <strong>Renault Master</strong> cu pat pentru dormit, <strong>Renault Trafic</strong> 8+1 locuri și <strong>Volkswagen Sharan</strong> cu remorcă acoperită. La bord ai aer condiționat, Webasto pentru iarnă, apă și încărcătoare pentru telefon. Verificăm mașinile înainte de fiecare cursă și folosim anvelope noi, potrivite sezonului.</p>

        <h2>Bagaje, copii, animale</h2>
        <p>Spune-ne la rezervare ce bagaje ai, ca să-ți păstrăm loc în portbagaj sau în remorcă. Dacă vii cu copii sau cu un animal de companie, anunță-ne tot la rezervare, ca să organizăm locurile și să-ți spunem condițiile.</p>
        <!-- TODO: bagaje incluse, reguli copii și animale de companie. -->

        <h2>Prețul</h2>
        <p>Prețul pentru Belgia depinde de adresa de plecare, de adresa de destinație, de dată și de numărul de persoane. Îl afli la telefon, <strong>înainte de plecare</strong>, și rămâne cel stabilit. Pentru grupuri prețul pe persoană e mai mic. Grupurile de peste 6 persoane primesc și o masă gratuită, la tur sau la retur.</p>
        <!-- TODO: modalități de plată. -->

        <h2>Cine ne alege pentru Belgia</h2>
        <p>Ne sună oameni care se mută la muncă și vor să-și ia tot bagajul dintr-o dată, familii care merg în vizită la rude, studenți care se întorc după vacanță sau părinți care merg să-și vadă copiii plecați. Toți au nevoie de același lucru: să fie luați de acasă și lăsați la adresă, fără griji pe drum.</p>

        <h2>Ce să ai la tine pe drum</h2>
        <p>Câteva lucruri care fac drumul mai ușor:</p>
        <ul>
          <li><strong>cartea de identitate sau pașaportul</strong>, valabile, la îndemână, nu în valiza din remorcă;</li>
          <li><strong>medicamentele</strong> de care ai nevoie, într-o geantă mică lângă tine;</li>
          <li><strong>telefonul și cablul de încărcare</strong>, avem încărcătoare la fiecare loc;</li>
          <li>ceva de mâncare pentru drum și haine comode;</li>
          <li><strong>adresa exactă din Belgia</strong> și un număr de telefon al persoanei care te așteaptă.</li>
        </ul>

        <h2>Rezervă din timp în perioadele aglomerate</h2>
        <p>De sărbători și în vacanța de vară se pleacă mult spre și dinspre Belgia. Dacă știi data, sună-ne cu câteva zile înainte, ca să ai locul sigur în ziua care îți convine.</p>

        <h2>Pe aceeași rută</h2>
        <p>Pe drumul spre Belgia trecem prin <a href="/transport-persoane-romania-austria">Austria</a>, <a href="/transport-persoane-romania-germania">Germania</a> și <a href="/transport-persoane-romania-olanda">Olanda</a>. Transportăm și <a href="/transport-colete-romania-europa">colete</a>, predate în mână, și <a href="/transport-auto-platforma">mașini pe platformă</a>.</p>
`,
    faq: [
      ["Aveți curse directe spre Belgia?", "Mergem pe ruta România – Austria – Germania – Olanda – Belgia, fără să schimbi mașina. Te luăm de acasă și te lăsăm la adresa din Belgia."],
      ["Pot rezerva și întoarcerea din Belgia?", "Da, mergem în ambele sensuri. Poți rezerva și cursa din Belgia până la adresa ta din România."],
      ["Cum știu când vine mașina după mine?", "Îți spunem ora aproximativă la rezervare, iar în ziua plecării șoferul te sună înainte să ajungă."],
      ["Cum se calculează prețul spre Belgia?", "Depinde de adresa de plecare, de adresa din Belgia, de dată și de numărul de persoane. Îl afli la 0790 752 888, înainte de plecare."],
      ["Pot trimite și un colet în Belgia fără să călătoresc?", "Da. Ridicăm coletul de la tine și îl predăm destinatarului din Belgia, în mână."],
    ],
  },
];

export const services = [
  {
    slug: "transport-colete-romania-europa",
    short: "Colete România – Europa",
    sub: "Ridicare de acasă, predare în mână",
    crumb: "Transport colete România – Europa",
    title: "Transport colete România – Germania, Austria | BRO",
    desc: "Transport colete între România și Austria, Germania, Olanda, Belgia. Ridicăm de la tine și predăm în mână, fără depozite. Sună la 0790 752 888.",
    h1: "Transport colete între România și Europa, predate în mână",
    lead: "Haine, mâncare de acasă, cadouri sau acte. Ridicăm coletul de la tine și îl predăm personal destinatarului din Austria, Germania, Olanda sau Belgia, și invers.",
    img: "/img/portbagaj.webp", imgW: 900, imgH: 678,
    imgAlt: "Spațiul pentru colete din microbuzul BRO Transport",
    serviceName: "Transport colete România – Europa",
    serviceType: "Transport colete internațional",
    area: ALL,
    body: `
        <p>Un pachet de acasă înseamnă mai mult decât ce e în el. Pentru cineva plecat la muncă, o cutie cu mâncare gătită de mama sau un cadou de ziua lui contează enorm. La <strong>BRO Transport International</strong> transportăm <strong>colete între România și Austria, Germania, Olanda și Belgia</strong>, în ambele sensuri, cu aceleași microbuze cu care ducem oameni.</p>

        <h2>Cum funcționează</h2>
        <ol>
          <li><strong>Ne suni la 0790 752 888</strong> și ne spui ce trimiți, de unde și până unde.</li>
          <li><strong>Afli prețul înainte</strong>, la telefon.</li>
          <li><strong>Ridicăm coletul de la tine</strong>, de la adresă. Nu trebuie să-l duci nicăieri.</li>
          <li><strong>Îl predăm în mâna destinatarului</strong>, la adresa lui.</li>
        </ol>
        <p>Nu trebuie să călătorești ca să trimiți un colet. Poți trimite pachetul și dacă doar destinatarul e plecat.</p>

        <h2>Fără depozite intermediare</h2>
        <p>La firmele mari de curierat, un pachet trece prin mai multe depozite și mâini până ajunge. La noi coletul <strong>îl ridicăm personal și îl predăm personal</strong>, fără depozite intermediare. Știi tot timpul cine are grijă de el și pe cine să suni dacă ai o întrebare.</p>

        <h2>Ce poți trimite</h2>
        <p>Cel mai des transportăm:</p>
        <ul>
          <li><strong>haine și încălțăminte</strong>, de sezon sau pentru cei care se mută;</li>
          <li><strong>mâncare de acasă</strong>: conserve, dulcețuri, produse ambalate;</li>
          <li><strong>cadouri</strong> pentru zile de naștere și sărbători;</li>
          <li><strong>acte și documente</strong> care trebuie să ajungă sigur la cine trebuie;</li>
          <li>lucruri pentru casă și obiecte personale.</li>
        </ul>
        <p>Nu transportăm bunuri interzise de lege. Dacă nu ești sigur că ceva se poate trimite, întreabă-ne la telefon înainte.</p>
        <!-- TODO: lista completă de obiecte acceptate / interzise, limite de greutate și dimensiuni, tarife (pe kg sau pe colet). -->

        <h2>Cum să împachetezi coletul</h2>
        <p>Ca să ajungă totul întreg, câteva sfaturi simple:</p>
        <ul>
          <li>folosește o <strong>cutie rezistentă</strong> sau o geantă care se închide bine;</li>
          <li>pune <strong>lichidele și borcanele</strong> în pungi închise și învelește-le în haine sau hârtie;</li>
          <li>umple golurile ca lucrurile să nu se miște în cutie;</li>
          <li>scrie clar pe colet <strong>numele și telefonul destinatarului</strong>;</li>
          <li>actele importante pune-le într-un plic sau o folie separată.</li>
        </ul>

        <h2>Unde ajung coletele</h2>
        <p>Mergem pe ruta România – Austria – Germania – Olanda – Belgia, cu <strong>plecări zilnice în ambele sensuri</strong>. Ne spui adresa de ridicare și adresa de livrare, iar noi îți confirmăm la telefon când ajunge coletul.</p>
        <!-- TODO: localitățile acoperite pentru ridicare/livrare colete. -->

        <h2>Ce ne spui la telefon</h2>
        <p>Ca să-ți spunem prețul și ziua de ridicare, pregătește:</p>
        <ul>
          <li>adresa de unde ridicăm coletul și adresa unde îl livrăm;</li>
          <li>ce conține coletul și cam cât de mare și de greu e;</li>
          <li>numele și telefonul destinatarului, ca să-l anunțăm când ajungem.</li>
        </ul>

        <h2>Pachete de sărbători</h2>
        <p>Înainte de Crăciun și de Paște se trimit cele mai multe pachete: cozonac, preparate de casă, cadouri pentru copii. Dacă vrei ca pachetul să ajungă înainte de sărbătoare, sună-ne din timp, ca să-l prindem într-o cursă potrivită.</p>

        <h2>Colete și din străinătate spre România</h2>
        <p>Mergem în ambele sensuri, așa că și cei plecați pot trimite acasă cadouri, lucruri care nu le mai trebuie sau acte. Coletul e ridicat de la adresa din Austria, Germania, Olanda sau Belgia și predat în mână familiei din România.</p>

        <h2>Pleci și tu sau ai și o mașină de adus?</h2>
        <p>Dacă vrei să mergi chiar tu, vezi cursele de <a href="/transport-persoane-romania-germania">transport persoane România – Germania</a>, <a href="/transport-persoane-romania-austria">Austria</a>, <a href="/transport-persoane-romania-olanda">Olanda</a> și <a href="/transport-persoane-romania-belgia">Belgia</a>. Pentru o mașină cumpărată în străinătate avem <a href="/transport-auto-platforma">transport auto pe platformă</a>.</p>
`,
    faq: [
      ["Trebuie să duc coletul undeva?", "Nu. Ridicăm coletul de la adresa ta și îl predăm destinatarului, la adresa lui."],
      ["Pot trimite un colet fără să călătoresc?", "Da. Ridicăm coletul de la tine și îl predăm destinatarului, oriunde în România, Austria, Germania, Olanda sau Belgia."],
      ["Pot trimite mâncare gătită sau borcane?", "Produsele ambalate și borcanele bine închise se pot trimite. Ce nu se poate transporta îți spunem la telefon, înainte de ridicare."],
      ["Trimiteți și colete din Germania sau Austria spre România?", "Da, mergem în ambele sensuri, cu plecări zilnice."],
      ["Cât costă să trimit un colet?", "Prețul depinde de traseu și de colet. Îl afli la 0790 752 888, înainte să ridicăm coletul."],
    ],
  },
  {
    slug: "transport-auto-platforma",
    short: "Mașini pe platformă",
    sub: "Mașini aduse din Europa, cu CMR",
    crumb: "Transport auto pe platformă",
    title: "Transport auto pe platformă Germania – România | BRO",
    desc: "Transport auto pe platformă din Germania, Austria, Olanda, Belgia în România. Ridicăm mașina de la vânzător, cu acoperire CMR. Tel. 0790 752 888.",
    h1: "Transport auto pe platformă, din Europa până la ușa ta",
    lead: "Ți-ai cumpărat o mașină din Germania sau din altă țară de pe ruta noastră? O preluăm de la vânzător sau de la dealer, o încărcăm pe platformă și ți-o aducem acasă, cu acoperire CMR.",
    img: "/img/master-remorca.webp", imgW: 1024, imgH: 688,
    imgAlt: "Renault Master portocaliu BRO cu platformă dublă axă pentru transport auto",
    serviceName: "Transport auto pe platformă",
    serviceType: "Transport autoturisme pe platformă",
    area: ALL,
    body: `
        <p>Multe mașini bune se cumpără din vestul Europei. Problema apare după ce ai dat banii: cum aduci mașina acasă? Să mergi după ea înseamnă bilet de avion, zile libere, drum lung la volan și, de multe ori, numere provizorii și asigurare de tranzit. La <strong>BRO Transport International</strong> facem <strong>transport auto pe platformă</strong>: preluăm mașina de la vânzător sau de la dealer și o aducem până la adresa ta din România.</p>

        <h2>Cum aducem mașina</h2>
        <ol>
          <li><strong>Ne suni la 0790 752 888</strong> și ne spui de unde trebuie preluată mașina, ce mașină e și unde o vrei livrată.</li>
          <li><strong>Afli prețul înainte</strong> și stabilim ziua de preluare.</li>
          <li><strong>Preluăm autoturismul</strong> de la vânzător sau de la dealer.</li>
          <li><strong>O încărcăm pe platformă</strong> și o ancorăm corect.</li>
          <li><strong>O livrăm la adresa ta</strong>, cu acoperire CMR conform condițiilor transportului.</li>
        </ol>

        <h2>Platformă dublă axă, nu tractare</h2>
        <p>Mașina nu rulează pe drum și nu adună kilometri. Stă pe <strong>platforma dublă axă</strong> tractată de Renault Master, ancorată cu chingi și verificată la opriri. Platformele și remorcile le verificăm înainte de fiecare drum: lumini, frâne, chingi. Așa mașina ajunge în starea în care ai cumpărat-o.</p>

        <h2>Ce înseamnă acoperirea CMR</h2>
        <p>CMR este convenția internațională pentru transportul rutier de mărfuri. Pe scurt, transportul mașinii se face cu un document de transport, iar răspunderea transportatorului pe durata drumului e acoperită <strong>conform condițiilor transportului</strong>. Detaliile pentru mașina ta le stabilim la telefon, înainte de preluare.</p>
        <!-- TODO: detalii polița/acoperire CMR (limite, ce acoperă) – de confirmat de firmă. -->

        <h2>Ce să pregătești</h2>
        <p>Ca preluarea să meargă repede, e bine să ai pregătite:</p>
        <ul>
          <li><strong>actele mașinii</strong> și documentul de cumpărare;</li>
          <li><strong>datele vânzătorului</strong>: nume, adresă, telefon;</li>
          <li><strong>cheile</strong>, sau acordul vânzătorului să ni le predea;</li>
          <li>informații despre mașină: marcă, model și dacă pornește și rulează normal.</li>
        </ul>
        <p>Îți spunem la telefon exact ce documente sunt necesare pentru cazul tău.</p>
        <!-- TODO: lista exactă de documente cerute la preluare; dacă se transportă și mașini nefuncționale/avariate. -->

        <h2>De unde aducem mașini</h2>
        <p>Mergem pe ruta România – Austria – Germania – Olanda – Belgia, în ambele sensuri. Cele mai multe mașini aduse acasă vin din Germania, dar preluăm și din celelalte țări de pe rută. Dacă vrei să duci o mașină din România în una dintre aceste țări, ne poți suna la fel.</p>
        <!-- TODO: zonele exacte de preluare/livrare acoperite. -->

        <h2>Ce ne spui la telefon</h2>
        <ul>
          <li>adresa vânzătorului sau a dealerului de unde preluăm mașina;</li>
          <li>marca și modelul, ca să știm cum o încărcăm;</li>
          <li>dacă mașina pornește și rulează normal;</li>
          <li>adresa din România unde o vrei livrată și când ai nevoie de ea.</li>
        </ul>

        <h2>De ce pe platformă și nu la volan</h2>
        <ul>
          <li>nu pierzi zile de concediu și nu plătești avion până la vânzător;</li>
          <li>mașina <strong>nu adună kilometri</strong> și nu se uzează pe drum;</li>
          <li>nu conduci o mașină pe care încă n-o cunoști, pe un drum de mii de kilometri;</li>
          <li>o primești la adresă, gata pentru pașii de înmatriculare în România.</li>
        </ul>

        <h2>Cumperi de la dealer sau de la o persoană fizică?</h2>
        <p>Preluăm mașina în ambele situații. La dealer, preluarea e de obicei simplă, pentru că actele și cheile sunt pregătite. La o persoană fizică, e important să stabilești dinainte cu vânzătorul ora la care trecem, cine ne predă mașina și cheile. Dă-ne și numărul de telefon al vânzătorului, ca preluarea să fie coordonată și să nu găsim pe nimeni acasă.</p>

        <h2>Și alte transporturi pe aceeași rută</h2>
        <p>Dacă vrei să mergi chiar tu, vezi cursele de <a href="/transport-persoane-romania-germania">transport persoane România – Germania</a>, <a href="/transport-persoane-romania-austria">Austria</a>, <a href="/transport-persoane-romania-olanda">Olanda</a> sau <a href="/transport-persoane-romania-belgia">Belgia</a>. Pentru pachete avem <a href="/transport-colete-romania-europa">transport colete</a>, predate în mână.</p>
`,
    faq: [
      ["Preluați mașina direct de la vânzător sau dealer?", "Da. Preluăm autoturismul de la vânzător sau de la dealer și îl aducem pe platformă până la adresa ta."],
      ["Mașina este asigurată pe drum?", "Transportul se face cu acoperire CMR, conform condițiilor transportului. Detaliile pentru mașina ta le stabilim la telefon, înainte de preluare."],
      ["Mașina rulează pe drum sau e pe platformă?", "Mașina stă pe platforma dublă axă, ancorată cu chingi și verificată la opriri. Nu rulează și nu adună kilometri."],
      ["Din ce țări aduceți mașini?", "Din țările de pe ruta noastră: Austria, Germania, Olanda și Belgia. Cele mai multe vin din Germania."],
      ["Cât costă transportul unei mașini pe platformă?", "Prețul depinde de locul de preluare, de adresa de livrare și de mașină. Îl afli la 0790 752 888, înainte de preluare."],
      ["Ce acte trebuie să pregătesc?", "Actele mașinii, documentul de cumpărare și datele vânzătorului. Îți spunem exact ce mai e nevoie pentru cazul tău când suni."],
    ],
  },
];
