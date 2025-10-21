function insert_Row() {
    // Get the table by id
    const table = document.getElementById("sampleTable");

    // Insert a new row at the top (after the header row)
    const newRow = table.insertRow(1); // index 0 is header

    // Insert two cells
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);

    // Set text for the new cells
    cell1.innerHTML = "New Cell1";
    cell2.innerHTML = "New Cell2";
}
