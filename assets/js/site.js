(function () {
  "use strict";
  var PHONE = "40790752888";
  var form = document.getElementById("form");
  var f = form.elements;
  var err = document.getElementById("err");
  document.getElementById("y").textContent = new Date().getFullYear();

  // Data minimă = azi
  var t = new Date();
  f.data.min = f.data.value = t.getFullYear() + "-" + String(t.getMonth() + 1).padStart(2, "0") + "-" + String(t.getDate()).padStart(2, "0");

  // „Persoane” apare doar când transportăm persoane
  var nrField = form.querySelector('[data-for="Persoane"]');
  function syncTip() { nrField.hidden = f.tip.value !== "Persoane"; }
  Array.prototype.forEach.call(f.tip, function (r) { r.addEventListener("change", syncTip); });
  syncTip();

  function setTip(v) {
    Array.prototype.forEach.call(f.tip, function (r) { r.checked = r.value === v; });
    syncTip();
  }

  // Linkurile din carduri aleg serviciul în formular
  document.querySelectorAll("[data-tip]").forEach(function (a) {
    a.addEventListener("click", function () { setTip(a.dataset.tip); });
  });

  // Inversează traseul
  document.getElementById("swap").addEventListener("click", function () {
    var x = f.de.value; f.de.value = f.la.value; f.la.value = x;
  });

  // Trasee exemplu
  document.querySelectorAll(".routes button").forEach(function (b) {
    b.addEventListener("click", function () {
      f.de.value = b.dataset.de; f.la.value = b.dataset.la;
      f.data.focus();
    });
  });


  function fmtDate(v) { return v ? v.split("-").reverse().join(".") : ""; }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
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

    window.location.href = "https://wa.me/" + PHONE + "?text=" + encodeURIComponent(lines.join("\n"));
  });
})();
