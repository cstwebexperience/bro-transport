/**
* Template Name: Logis
* Template URL: https://bootstrapmade.com/logis-bootstrap-logistics-website-template/
* Updated: Aug 07 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  mobileNavToggleBtn.addEventListener('click', mobileNavToogle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);
  /**
   * Frequently Asked Questions Toggle
   */
  document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle').forEach((faqItem) => {
    faqItem.addEventListener('click', () => {
      faqItem.parentNode.classList.toggle('faq-active');
    });
  });

  /**
   * BRO: anul curent, bara fixă de pe telefon, formularul -> WhatsApp
   */
  const PHONE = "40790752888";
  document.getElementById("y").textContent = new Date().getFullYear();

  // Bara de jos apare după ce butoanele din hero ies din ecran
  const dock = document.querySelector(".dock");
  const heroCta = document.querySelector(".hero-cta");
  if ("IntersectionObserver" in window) {
    new IntersectionObserver((en) => {
      dock.classList.toggle("on", !en[0].isIntersecting && en[0].boundingClientRect.top < 0);
    }).observe(heroCta);
  } else dock.classList.add("on");

  const form = document.getElementById("form");
  const err = document.getElementById("err");
  const f = form.elements;

  const t = new Date();
  f.data.min = t.getFullYear() + "-" + String(t.getMonth() + 1).padStart(2, "0") + "-" + String(t.getDate()).padStart(2, "0");

  // „Număr persoane” apare doar când transportăm persoane
  const nrField = form.querySelector('[data-for="Persoane"]');
  const syncTip = () => { nrField.hidden = f.tip.value !== "Persoane"; };
  Array.from(f.tip).forEach((r) => r.addEventListener("change", syncTip));
  syncTip();

  const fmtDate = (v) => v ? v.split("-").reverse().join(".") : "";

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const de = f.de.value.trim(), la = f.la.value.trim();
    f.de.classList.toggle("is-invalid", !de);
    f.la.classList.toggle("is-invalid", !la);
    if (!de || !la) {
      err.hidden = false;
      (de ? f.la : f.de).focus();
      return;
    }
    err.hidden = true;

    const tip = f.tip.value;
    const lines = ["Bună ziua! Aș dori o ofertă de transport.", "", "Serviciu: " + tip, "Traseu: " + de + " → " + la];
    if (f.data.value) lines.push("Data: " + fmtDate(f.data.value));
    if (tip === "Persoane") lines.push("Persoane: " + f.nr.value);
    if (f.det.value.trim()) lines.push("Detalii: " + f.det.value.trim());
    if (f.nume.value.trim()) lines.push("Nume: " + f.nume.value.trim());
    if (f.tel.value.trim()) lines.push("Telefon: " + f.tel.value.trim());

    window.location.href = "https://wa.me/" + PHONE + "?text=" + encodeURIComponent(lines.join("\n"));
  });

})();
