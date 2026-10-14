// Pagini legale. Datele firmei lipsesc → TODO vizibil ([de completat]) + comentariu HTML.
// Textele sunt un punct de plecare; recomandat să fie verificate de un jurist înainte de lansare.

const FIRMA = `
        <ul>
          <li><strong>Denumire:</strong> [de completat] <!-- TODO: denumirea juridică exactă (SRL/PFA) --></li>
          <li><strong>CUI:</strong> [de completat] <!-- TODO --></li>
          <li><strong>Nr. Registrul Comerțului:</strong> [de completat] <!-- TODO --></li>
          <li><strong>Sediu social:</strong> [de completat] <!-- TODO: adresa completă --></li>
          <li><strong>Telefon:</strong> <a href="tel:+40790752888">0790 752 888</a></li>
          <li><strong>E-mail:</strong> [de completat] <!-- TODO: adresa de e-mail de contact --></li>
        </ul>`;

const UPDATED = "14 octombrie 2026";

export const legal = [
  {
    slug: "termeni-si-conditii",
    crumb: "Termeni și condiții",
    title: "Termeni și condiții | BRO Transport International",
    desc: "Termenii și condițiile pentru serviciile BRO Transport International: transport persoane, colete și mașini pe platformă între România și Europa.",
    h1: "Termeni și condiții",
    updated: UPDATED,
    body: `
        <h2>1. Cine suntem</h2>
        <p>Site-ul www.brotransport.ro este operat de:</p>
${FIRMA}

        <h2>2. Serviciile</h2>
        <p>Oferim transport de persoane, transport de colete și transport de autoturisme pe platformă între România și Austria, Germania, Olanda și Belgia, în ambele sensuri. Informațiile de pe site au caracter de prezentare. Condițiile concrete ale fiecărei curse (data, ora aproximativă, adresele, prețul) se stabilesc la rezervare.</p>

        <h2>3. Rezervarea</h2>
        <p>Rezervarea se face la telefon, la 0790 752 888. Rezervarea este confirmată în momentul în care îți comunicăm locul, prețul și ora aproximativă de preluare. Te rugăm să ne dai date corecte: nume, telefon, adresa de preluare și adresa de destinație.</p>

        <h2>4. Prețul și plata</h2>
        <p>Prețul se comunică înainte de plecare și depinde de traseu, de dată, de numărul de persoane și de ce se transportă.</p>
        <p>[de completat] <!-- TODO: modalitățile de plată, momentul plății, moneda, emiterea documentelor fiscale. --></p>

        <h2>5. Anularea și modificarea rezervării</h2>
        <p>[de completat] <!-- TODO: până când se poate anula/modifica gratuit, ce se întâmplă la neprezentare, ce se întâmplă dacă transportatorul anulează sau întârzie. --></p>

        <h2>6. Bagaje</h2>
        <p>[de completat] <!-- TODO: bagaje incluse, bagaj suplimentar, obiecte interzise, răspunderea pentru bagaje. --></p>

        <h2>7. Colete</h2>
        <p>Expeditorul răspunde de conținutul coletului și de ambalarea corespunzătoare. Nu transportăm bunuri interzise de lege.</p>
        <p>[de completat] <!-- TODO: lista obiectelor interzise, limite de valoare/greutate, răspunderea pentru pierdere sau deteriorare. --></p>

        <h2>8. Transport auto pe platformă</h2>
        <p>Transportul autoturismelor se face cu acoperire CMR, conform condițiilor transportului stabilite la rezervare.</p>
        <p>[de completat] <!-- TODO: documente necesare, procesul-verbal la preluare/predare, condiții CMR. --></p>

        <h2>9. Comportamentul la bord</h2>
        <p>Pentru siguranța tuturor, pasagerii poartă centura de siguranță și respectă indicațiile șoferului.</p>
        <p>[de completat] <!-- TODO: reguli fumat, alcool, animale de companie, copii (scaun auto). --></p>

        <h2>10. Reclamații și litigii</h2>
        <p>Pentru orice nemulțumire ne poți contacta la 0790 752 888 sau la adresa de e-mail de mai sus. Încercăm să rezolvăm orice problemă amiabil.</p>
        <p>Consumatorii pot apela și la procedura de Soluționare Alternativă a Litigiilor (SAL) a Autorității Naționale pentru Protecția Consumatorilor: <a href="https://anpc.ro/ce-este-sal/" target="_blank" rel="noopener nofollow">anpc.ro/ce-este-sal</a>.</p>

        <h2>11. Legea aplicabilă</h2>
        <p>Acești termeni sunt guvernați de legea română.</p>
`,
  },
  {
    slug: "politica-confidentialitate",
    crumb: "Politica de confidențialitate",
    title: "Politica de confidențialitate | BRO Transport International",
    desc: "Cum prelucrează BRO Transport International datele personale ale clienților, conform GDPR: ce date, de ce, cât timp și ce drepturi ai.",
    h1: "Politica de confidențialitate",
    updated: UPDATED,
    body: `
        <p>Această politică explică ce date personale prelucrăm atunci când folosești site-ul www.brotransport.ro sau serviciile noastre, de ce le prelucrăm și ce drepturi ai, conform Regulamentului (UE) 2016/679 (GDPR).</p>

        <h2>1. Operatorul de date</h2>
${FIRMA}

        <h2>2. Ce date prelucrăm</h2>
        <ul>
          <li><strong>Când ne suni sau rezervi:</strong> numele, numărul de telefon, adresa de preluare și de destinație, data călătoriei, numărul de persoane și detaliile despre colete sau autoturism.</li>
          <li><strong>Când folosești formularul de pe site:</strong> formularul nu trimite datele către un server al nostru. El deschide WhatsApp cu un mesaj precompletat, pe care îl trimiți tu. Datele ajung la noi doar dacă trimiți mesajul.</li>
          <li><strong>Când vizitezi site-ul:</strong> date tehnice (adresa IP, tipul de browser, paginile vizitate) prelucrate de furnizorul de găzduire și de instrumentele de măsurare descrise în <a href="/cookies">Politica de cookies</a>.</li>
        </ul>

        <h2>3. De ce le prelucrăm</h2>
        <ul>
          <li>ca să putem rezerva și efectua transportul (executarea contractului);</li>
          <li>ca să te contactăm în legătură cu cursa (de exemplu, când șoferul ajunge);</li>
          <li>pentru obligații legale, de exemplu contabile și fiscale;</li>
          <li>pentru a măsura eficiența reclamelor noastre, doar cu acordul tău, acolo unde legea îl cere.</li>
        </ul>

        <h2>4. Cui le transmitem</h2>
        <p>Nu vindem datele tale. Le transmitem doar cât e necesar: șoferilor care efectuează cursa, furnizorului de găzduire a site-ului (Vercel Inc.), Google (pentru măsurarea reclamelor Google Ads) și autorităților, atunci când legea o cere.</p>
        <p>[de completat] <!-- TODO: alți împuterniciți (contabilitate, telefonie etc.). --></p>

        <h2>5. Cât timp le păstrăm</h2>
        <p>[de completat] <!-- TODO: perioada de păstrare pentru datele de rezervare și pentru documentele contabile. --></p>

        <h2>6. Drepturile tale</h2>
        <p>Ai dreptul de acces, de rectificare, de ștergere, de restricționare a prelucrării, de portabilitate și de opoziție, precum și dreptul de a-ți retrage consimțământul oricând. Pentru oricare dintre ele ne poți contacta la datele de mai sus.</p>
        <p>Ai și dreptul de a depune o plângere la Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP): <a href="https://www.dataprotection.ro" target="_blank" rel="noopener nofollow">www.dataprotection.ro</a>.</p>
`,
  },
  {
    slug: "cookies",
    crumb: "Politica de cookies",
    title: "Politica de cookies | BRO Transport International",
    desc: "Ce cookie-uri și tehnologii similare folosește site-ul BRO Transport International și cum le poți controla.",
    h1: "Politica de cookies",
    updated: UPDATED,
    body: `
        <p>Cookie-urile sunt fișiere mici pe care un site le salvează în browserul tău. Mai jos găsești ce folosește site-ul www.brotransport.ro.</p>

        <h2>1. Cookie-uri de măsurare a reclamelor (Google Ads)</h2>
        <p>Folosim eticheta Google (gtag.js) a serviciului Google Ads ca să aflăm câte persoane ne sună după ce au văzut o reclamă de-a noastră. Eticheta poate seta cookie-uri precum <code>_gcl_au</code> și poate transmite către Google informații despre vizită și despre apăsarea butonului de telefon. Detalii: <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener nofollow">politica Google privind publicitatea</a>.</p>
        <!-- TODO: implementare banner de consimțământ + Google Consent Mode v2 (obligatoriu pentru vizitatori din SEE). Până atunci, textul de mai sus descrie situația reală. -->

        <h2>2. Stocare locală necesară</h2>
        <p>Site-ul folosește <code>sessionStorage</code> doar ca să țină minte, pe durata vizitei, că ai închis caseta „Plecări zilnice”, ca să nu-ți mai apară. Informația se șterge când închizi browserul.</p>

        <h2>3. Servicii externe</h2>
        <p>Fonturile sunt încărcate de la Google Fonts. Pentru asta, browserul tău se conectează la serverele Google.</p>

        <h2>4. Cum controlezi cookie-urile</h2>
        <p>Poți șterge sau bloca cookie-urile din setările browserului. Poți dezactiva reclamele personalizate Google din <a href="https://adssettings.google.com" target="_blank" rel="noopener nofollow">setările de reclame Google</a>.</p>

        <h2>5. Contact</h2>
        <p>Pentru întrebări despre cookie-uri și date personale, vezi <a href="/politica-confidentialitate">Politica de confidențialitate</a> sau sună la <a href="tel:+40790752888">0790 752 888</a>.</p>
`,
  },
];
