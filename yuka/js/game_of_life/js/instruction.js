var container = document.getElementsByClassName('life')[0];var title = document.createElement('h1');
title.className = 'life__title';
title.innerHTML = 'Game Of Life';
container.appendChild(title);

var instruction = document.createElement('article');
instruction.className = 'life__instruction';
instruction.innerHTML = 'This is a simple cellular automaton, which needs a minimum of players interaction. You can draw random forms and launch the Life. Also you can intervene the Life during the game.';
container.appendChild(instruction);