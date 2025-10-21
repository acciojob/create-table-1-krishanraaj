function insert_Row() {
    let table = document.getElementById("sampleTable");
    let newRow = table.insertRow(1); // insert at top of data rows

    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);

    cell1.innerHTML = "New Cell1";
    cell2.innerHTML = "New Cell2";
}
