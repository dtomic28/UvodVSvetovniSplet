currentIndex = 1;

function zgradiElement(imeKategorije) {
  return `<li class="list-group-item">${imeKategorije}</li>`;
}

function getDateTime() {
  var today = new Date();
  var date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  var time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  return date + " " + time;
}

function zgradiTask(imeTaska, imeKategorije) {
  return `<tr><td>${currentIndex}</td><td>${imeTaska}</td><td>${imeKategorije}</td><td>${getDateTime()}</td></tr>`;
}

function FillCategoryList() {
  let kategorije = ["Trening", "Šola", "Služba"];
  kategorije.forEach((kategorija) => {
    $("#category-list").append(zgradiElement(kategorija));
  });
}

$(document).on("click", "li", function () {
  $("#category-list>li.active").removeClass("active");
  $(this).addClass("active");
});

$(document).on("click", "tbody tr", function () {
  $(this).addClass("table-danger");
});

function izbrisiZbranega() {
  $("#category-list>li.active").remove();
}

function dodajKategorijo() {
  let inputVal = $("#CategoryInput").val();
  console.log(inputVal);
  if (inputVal != "") {
    $("#category-list").append(zgradiElement(inputVal));
  }
}

function dodajTask() {
  let inputVal = $("#TaskInput").val();
  let selectedTaskVal = $("li.active").text();
  if (inputVal != "" && selectedTaskVal != "") {
    $("tbody").append(zgradiTask(inputVal, selectedTaskVal));
    currentIndex++;
  }
}

function izbrisiIzbraneTaske() {
  $("table tbody tr.table-danger").remove();
}

FillCategoryList();
