var bubbleSort = require('./algorithms/bubbleSort');
var injectionSort = require('./algorithms/injectionSort');
var mergeSort = require('./algorithms/mergeSort');
var quickSort = require('./algorithms/quickSort');
var selectionSort = require('./algorithms/selectionSort');
var generateArray = require('./helpers/helpers').generateRandomArray;

var arrToSort = generateArray();
console.log('Input array is: ' + arrToSort);

bubbleSort(arrToSort);
injectionSort(arrToSort);
mergeSort(arrToSort);
quickSort(arrToSort);
selectionSort(arrToSort);