(function () {
  var PHONE = "40790752888";
  var form = document.getElementById("form");
  var err = document.getElementById("err");
  document.getElementById("y").textContent = new Date().getFullYear();

  // Data minimă = azi
  var d = form.elements.data;
  var t = new Date();
  d.min = t.getFullYear() + "-" + String(t.getMonth() + 1).padStart(2, "0") + "-" + String(t.getDate()).padStart(2, "0");

  // „Persoane” apare doar când transportăm persoane
  var nrField = form.querySelector('[data-for="Persoane"]');
  function syncTip() {
    nrField.hidden = form.elements.tip.value !== "Persoane";
  }
  Array.prototype.forEach.call(form.elements.tip, function (r) { r.addEventListener("change", syncTip); });
  syncTip();

  // Bara fixă de jos apare după ce butoanele din hero ies din ecran
  var dock = document.querySelector(".dock");
  var heroCta = document.querySelector(".hero .cta");
  if ("IntersectionObserver" in window) {
    new IntersectionObserver(function (en) {
      dock.classList.toggle("on", !en[0].isIntersecting && en[0].boundingClientRect.top < 0);
    }).observe(heroCta);
  } else dock.classList.add("on");

  function fmtDate(v) {
    if (!v) return "";
    var p = v.split("-");
    return p[2] + "." + p[1] + "." + p[0];
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var f = form.elements;
    var de = f.de.value.trim(), la = f.la.value.trim();
    f.de.parentNode.classList.toggle("bad", !de);
    f.la.parentNode.classList.toggle("bad", !la);
    if (!de || !la) {
      err.hidden = false;
      (de ? f.la : f.de).focus();
      return;
    }
    err.hidden = true;

    var tip = f.tip.value;
    var lines = ["Bună ziua! Aș dori o ofertă de transport.", "", "Serviciu: " + tip, "Traseu: " + de + " → " + la];
    if (f.data.value) lines.push("Data: " + fmtDate(f.data.value));
    if (tip === "Persoane") lines.push("Persoane: " + f.nr.value);
    if (f.det.value.trim()) lines.push("Detalii: " + f.det.value.trim());
    if (f.nume.value.trim()) lines.push("Nume: " + f.nume.value.trim());

    window.location.href = "https://wa.me/" + PHONE + "?text=" + encodeURIComponent(lines.join("\n"));
  });
})();
