var Game_Of_Life = function () {
    "use strict";

    var model,
        drawInterval;

    function initField () {
        // stop animation
        if (drawInterval) {
            clearInterval(drawInterval);
            drawInterval = null;
        }

        var sideLength = 25,
            field = document.getElementsByClassName('life__table')[0];

        field.style.height = (sideLength*20) + 'px';
        field.style.width = (sideLength*20) + 'px';
        field.innerHTML = '';

        model = [];

        for (var i = 0; i < sideLength; i++) {
            var row = document.createElement('tr'),
                modelRow = [];

            for (var j = 0; j < sideLength; j++) {
                var cell = document.createElement('td');
                cell.className = 'life__cell';
                cell.id = 'cell_' + i + '_' + j;
                row.appendChild(cell);
                modelRow.push(false);
            }

            field.appendChild(row);
        }
    }
};