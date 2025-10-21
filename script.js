function insert_Row() {
    // Get the table
    const table = document.getElementById("sampleTable");

    // Insert new row at the top (index 1 = after header)
    const newRow = table.insertRow(1);

    // Insert two cells
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);

    // Set cell text
    cell1.innerText = "New Cell1";
    cell2.innerText = "New Cell2";
}
