document.addEventListener('DOMContentLoaded', function () {
    // Přidání tlačítek
    let addButton = document.createElement('button');
    addButton.textContent = 'Přidat řádek';
    addButton.addEventListener('click', addRow);
    document.body.appendChild(addButton);

    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Smazat řádek';
    deleteButton.addEventListener('click', deleteRow);
    document.body.appendChild(deleteButton);

    let reverseButton = document.createElement('button');
    reverseButton.textContent = 'Přehodit pořadí';
    reverseButton.addEventListener('click', reverseOrder);
    document.body.appendChild(reverseButton);
    // Seznam slov pro buňky
    let words = ["Jedna", "Dva", "Tři", "Čtyři", "Pět", "Šest", "Sedm", "Osm", "Devět", "Deset"];

    function getRandomWord() {
        return words[Math.floor(Math.random() * words.length)];
    }

    function createTable() {
        let table = document.createElement('table');

        for (let i = 0; i < 10; i++) {
            let row = table.insertRow();
            for (let j = 0; j < 3; j++) {
                let cell = row.insertCell(j);
                cell.textContent = getRandomWord();
            }
        }

        document.body.appendChild(table);
    }

    function addRow() {
        let table = document.querySelector('table');
       let newRow = table.insertRow();
        for (let i = 0; i < 3; i++) {
            let cell = newRow.insertCell(i);
            cell.textContent = getRandomWord();
        }
    }

    function deleteRow() {
        let table = document.querySelector('table');
        let lastRow = table.rows.length - 1;
        if (lastRow > 0) {
            table.deleteRow(lastRow);
        }
    }

    function reverseOrder() {
        let table = document.querySelector('table');
        let rows = Array.from(table.rows);
        rows.reverse();
        table.innerHTML = "";
        rows.forEach(function(row) {
            table.appendChild(row);
        });
    }
    createTable();
});
//end