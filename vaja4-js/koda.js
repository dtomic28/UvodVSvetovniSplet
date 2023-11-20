/**
 * @description Metoda, ki se pokliče onClick na kateremu koli divu. Preden označi element pogleda, če je že kateri označen in ga odznači, nato označi izbran el.
 */
function izberiElement(element) {
  var listItems = document.querySelectorAll("div");
  listItems.forEach(function (item) {
    item.classList.remove("izbran");
  });

  element.classList.add("izbran");
}
/**
 * @description Metoda nam vrne, div z pravilnim tekstom
 */
function ustvariElement(r, g, b) {
  return `<div style="background-color: rgb(${r}, ${g}, ${b});" onclick="izberiElement(this)"><span style="color: rgb(${
    255 - r
  }, ${255 - g}, ${255 - b});">rgb(${r}, ${g}, ${b})</span></div>`;
}
/**
 * @description (Val/stEl) nam vrne za koliko bomo povečali, nato pomnožimo z (štEl-i), da naredimo padajoče
 */
function izracunaj(val, steviloElementov, i) {
  return Math.round((val / steviloElementov) * (steviloElementov - i));
}

/**
 * @description Metoda nam narise N stevilov elementov z začetno vrednostjo R,G,B
 */
function narisiElemente(steviloElementov, r, g, b) {
  for (var i = 0; i < steviloElementov; i++) {
    document.write(
      ustvariElement(
        izracunaj(r, steviloElementov, i),
        izracunaj(g, steviloElementov, i),
        izracunaj(b, steviloElementov, i)
      )
    );
  }
}

var stEl = window.prompt("Vnesite število el: ");
var r = window.prompt("Vnesite vrednost r: ");
var g = window.prompt("Vnesite vrednost g: ");
var b = window.prompt("Vnesite vrednost b: ");

narisiElemente(parseInt(stEl), parseInt(r), parseInt(g), parseInt(b));
