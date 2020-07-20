document.addEventListener("DOMContentLoaded", function (evt) {
  evt.preventDefault();
  var wrapper = document.querySelector(".js-table");
  table = document.createElement("table");
  table.style = "border: 2px solid red; width: 500px; height: 200px;";
  for (var i = 0; i < 2; i++) {
    tr = document.createElement("tr");
    for (var y = 0; y < 4; y++) {
      td = document.createElement("td");
      td.style = "border: 2px solid black; text-align: center;"
      text = document.createTextNode(i + 1 + "." + (y + 1));
      td.appendChild(text);
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
  wrapper.appendChild(table);
});
