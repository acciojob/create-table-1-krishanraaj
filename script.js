function insert_Row() {
    // Get the table by id
    const table = document.getElementById("sampleTable");

    // Insert a new row at the **top of tbody** (after the header row)
    // If table has only <tr> without <thead>, index 0 will work
    const newRow = table.insertRow(1); // 0 = header, 1 = top of data rows

    // Insert two cells
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);

    // Set text for the new cells
    cell1.innerText = "New Cell1";
    cell2.innerText = "New Cell2";
}
