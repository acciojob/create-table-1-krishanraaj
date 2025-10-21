function insert_Row() {
  let table = document.getElementById("sampleTable");

  // Insert new row at the TOP (index 0)
  let newRow = table.insertRow(0);

  let cell1 = newRow.insertCell(0);
  let cell2 = newRow.insertCell(1);

  cell1.textContent = "New Cell1";
  cell2.textContent = "New Cell2";
}
