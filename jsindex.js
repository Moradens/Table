document.addEventListener('DOMContentLoaded', function () {
    // Přidání tlačítek
    var addButton = document.createElement('button');
    addButton.textContent = 'Přidat řádek';
    addButton.addEventListener('click', addRow);
    document.body.appendChild(addButton);

    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Smazat řádek';
    deleteButton.addEventListener('click', deleteRow);
    document.body.appendChild(deleteButton);

    var reverseButton = document.createElement('button');
    reverseButton.textContent = 'Přehodit pořadí';
    reverseButton.addEventListener('click', reverseOrder);
    document.body.appendChild(reverseButton);
    // Seznam slov pro buňky
    var words = ["Jedna", "Dva", "Tři", "Čtyři", "Pět", "Šest", "Sedm", "Osm", "Devět", "Deset"];

    // Funkce pro vytvoření náhodného slova
    function getRandomWord() {
        return words[Math.floor(Math.random() * words.length)];
    }

    // Funkce pro vytvoření tabulky
    function createTable() {
        var table = document.createElement('table');

        for (var i = 0; i < 10; i++) {
            var row = table.insertRow();
            for (var j = 0; j < 3; j++) {
                var cell = row.insertCell(j);
                cell.textContent = getRandomWord();
            }
        }

        document.body.appendChild(table);
    }

    // Funkce pro přidání řádku
    function addRow() {
        var table = document.querySelector('table');
        var newRow = table.insertRow();
        for (var i = 0; i < 3; i++) {
            var cell = newRow.insertCell(i);
            cell.textContent = getRandomWord();
        }
    }

    // Funkce pro smazání řádku
    function deleteRow() {
        var table = document.querySelector('table');
        var lastRow = table.rows.length - 1;
        if (lastRow > 0) {
            table.deleteRow(lastRow);
        }
    }

    // Funkce pro přehození pořadí
    function reverseOrder() {
        var table = document.querySelector('table');
        var rows = Array.from(table.rows);
        rows.reverse();
        table.innerHTML = ""; // Vyprázdnění tabulky
        rows.forEach(function(row) {
            table.appendChild(row);
        });
    }

    // Vytvoření tabulky při načtení stránky
    createTable();


});