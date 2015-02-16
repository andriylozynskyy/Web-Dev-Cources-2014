var Game_Of_Life = function (container) {
    'use strict';

    var model, // for drawing of next step
        drawInterval,
        field = document.createElement('table');

    field.className = 'life__table';
    container.appendChild(field);

    field.addEventListener('click', toggleCell);
    field.addEventListener('mousedown', function () {
        field.addEventListener('mousemove', toggleCell);
        field.addEventListener('mouseup', function () {
            field.removeEventListener('mousemove', toggleCell);
        });
    });

    function initField () {
        // stop animation
        if (drawInterval) {
            clearInterval(drawInterval);
            drawInterval = null;
        }

        var sideLength = 25, // the number of cells that includes a side of the square field
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
                cell.id = 'cell_' + i + '_' + j; // TODO: fix id to classes, 'cause can't create another life table
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

    /**
     * Looping the field
     * @param y {Number} coordinate y
     * @param x {Number} coordinate x
     * @returns {*}
     */
    function endlessModel(y, x) {
        var rx = (model[0].length + x) % model[0].length;
        var ry = (model.length + y) % model.length;
        return model[ry][rx];
    }

    /**
     * Counting a number of living neighbours
     * @param wasAlive
     * @param x {Number} coordinate x
     * @param y {Number} coordinate y
     * @returns {boolean}
     */
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

    // Control Buttons
    var playButton = document.createElement('button');
    playButton.className = 'life__control__button--pause';
    playButton.addEventListener('click', function () {
        if (drawInterval) {
            clearInterval(drawInterval);
            drawInterval = null;
        } else {
            drawInterval = setInterval(calculateStep, 50);
        }
    });

    var playIcon = document.createElement('i');
    playIcon.classList.add('fa', 'fa-play'); // TODO: make toggle for icons play/pause
    playButton.appendChild(playIcon);

    var initButton = document.createElement('button');
    initButton.classList.add('life__control__button--init');
    initButton.addEventListener('click', initField);
    var initIcon = document.createElement('i');
    initIcon.classList.add('fa', 'fa-refresh');
    initButton.appendChild(initIcon);

    var controls = document.createElement('div');
    controls.className = 'life__control';
    controls.appendChild(playButton);
    controls.appendChild(initButton);
    container.appendChild(controls);
    // end of Control Buttons

    initField();
};

// TODO: make figures for inputting in life table