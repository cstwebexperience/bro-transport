// Banner cookies + Google Consent Mode v2 (modul „basic”). Implicit „denied” (setat în <head>),
// iar scriptul Google se încarcă abia la „Accept” (broLoadTag din <head>). Alegerea se ține în localStorage.
(function () {
  "use strict";
  var KEY = "bro-consent";
  var ALL = ["ad_storage", "ad_user_data", "ad_personalization", "analytics_storage"];

  function get() { try { return localStorage.getItem(KEY); } catch (e) { return null; } }
  function set(v) { try { localStorage.setItem(KEY, v); } catch (e) {} }
  function apply(v) {
    if (typeof gtag !== "function") return;
    var o = {};
    ALL.forEach(function (k) { o[k] = v; });
    gtag("consent", "update", o);
    if (v === "granted" && typeof window.broLoadTag === "function") window.broLoadTag();
  }

  var box;
  function build() {
    box = document.createElement("div");
    box.className = "ck";
    box.setAttribute("role", "dialog");
    box.setAttribute("aria-live", "polite");
    box.setAttribute("aria-label", "Cookie-uri");
    box.innerHTML =
      '<p class="ck-t">Folosim cookie-uri Google Ads ca să vedem ce reclame aduc apeluri. Le activăm doar dacă ești de acord. <a href="/cookies">Detalii</a></p>' +
      '<div class="ck-b"><button type="button" class="ck-no">Refuz</button><button type="button" class="ck-ok">Accept</button></div>';
    box.querySelector(".ck-ok").addEventListener("click", function () { choose("granted"); });
    box.querySelector(".ck-no").addEventListener("click", function () { choose("denied"); });
    document.body.appendChild(box);
  }
  function show() {
    if (!box) build();
    box.hidden = false;
    document.body.classList.add("ck-on");
  }
  function choose(v) {
    set(v);
    apply(v);
    box.hidden = true;
    document.body.classList.remove("ck-on");
  }

  window.broConsentOpen = show;
  document.addEventListener("click", function (e) {
    var a = e.target.closest && e.target.closest("[data-cookie-settings]");
    if (a) { e.preventDefault(); show(); }
  });
  if (!get()) show();
})();
