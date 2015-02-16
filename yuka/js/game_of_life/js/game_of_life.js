var Game_Of_Life = function (container) {
    "use strict";

    var model, // for drawing of next step
        drawInterval;

    function initField () {
        // stop animation
        if (drawInterval) {
            clearInterval(drawInterval);
            drawInterval = null;
        }

        var sideLength = 25, // the field is square
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
            model.push(modelRow);
        }
    }

    function toggleCell(event) {
        var element = event.target;

        if (!element || !element.id || !element.classList.contains('life__cell')) {
            return;
        }

        var coordinates = element.id.split('_'),
            x = coordinates[1],
            y = coordinates[2];

        model[y][x] = !model[y][x];

        if(element.classList.contains('alive')) {
            element.classList.remove('alive');
            element.classList.remove('wasalive');
            element.classList.add('dead');
        } else {
            element.classList.remove('dead');
            element.classList.add('alive');
            element.classList.add('wasalive');
        }
    }

    function drawStep () {
        model.forEach(function (row, y) {
            row.forEach(function(cell, x) {
                var cellElement = document.querySelector('#cell_' + y + '_' + x);

                if (cell) {
                    cellElement.classList.add('alive');
                    cellElement.classList.add('wasalive');
                    cellElement.classList.remove('dead');
                } else {
                    cellElement.classList.add('dead');
                    cellElement.classList.remove('alive');
                }
            });
        })
    }

    function calculateStep () {
        var newModel = [];
        model.forEach(function (row, y) {
            var newRow = [];

            row.forEach(function (cell, x) {
                newRow.push(isAlive(cell, x, y));
            });
            newModel.push(newRow);
        });

        model = newModel;
        drawStep();
    }

    function endlessModel(y, x) {
        var rx = (model[0].length + x) % model[0].length;
        var ry = (model.length + y) % model.length;
        return model[ry][rx];
    }

    function isAlive(wasAlive, x, y) {
        var sum = 0;
        sum += endlessModel(y - 1, x - 1);
        sum += endlessModel(y, x - 1);
        sum += endlessModel(y + 1, x - 1);

        sum += endlessModel(y - 1, x);
        sum += endlessModel(y + 1, x);

        sum += endlessModel(y - 1, x + 1);
        sum += endlessModel(y, x + 1);
        sum += endlessModel(y + 1, x + 1);

        if (wasAlive) {
            return sum === 2 || sum === 3;
        } else {
            return sum === 3;
        }
    }

    document.getElementsByClassName('life__control__button--init')[0].addEventListener('click', initField);

    document.getElementsByClassName('life__control__button--pause')[0].addEventListener('click', function () {
        if (drawInterval) {
            clearInterval(drawInterval);
            drawInterval = null;
        } else {
            drawInterval = setInterval(calculateStep, 50);
        }
    });

    var field = document.createElement('table');
    field.className = 'life__table';
    container.appendChild(field);

    field.addEventListener('click', toggleCell);
    field.addEventListener('mousedown', function () {
        field.addEventListener('mousemove', toggleCell);
        field.addEventListener('mouseup', function () {
            field.removeEventListener('mousemove', toggleCell);
        });
    });

    initField();
};

var section = document.getElementsByClassName('life')[0],
    myLife = new Game_Of_Life(section);