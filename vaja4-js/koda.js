function izberiElement(element) {
  var listItems = document.querySelectorAll("div");
  listItems.forEach(function (item) {
    item.classList.remove("izbran");
  });

  element.classList.add("izbran");
}

ustvariElement = (r, g, b) => {
  return `<div style="background-color: rgb(${r}, ${g}, ${b});" onclick="izberiElement(this)"><span style="color: rgb(${
    255 - r
  }, ${255 - g}, ${255 - b});">rgb(${r}, ${g}, ${b})</span></div>`;
};

narisiElemente = (n) => {
  for (var i = 0; i < n; i++) {
    var st = Math.round((255 / n) * (n - i));
    document.write(ustvariElement(st, st, st));
  }
};

narisiElemente(20);
