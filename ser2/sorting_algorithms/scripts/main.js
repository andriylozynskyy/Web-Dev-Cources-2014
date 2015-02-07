var bubbleSort = require('./algorithms/bubbleSort').bubbleSort;
var injectionSort = require('./algorithms/injectionSort').injectionSort;
var mergeSort = require('./algorithms/mergeSort').mergeSort;
var quickSort = require('./algorithms/quickSort').quickSort;
var selectionSort = require('./algorithms/selectionSort').selectionSort;
var generateArray = require('./helpers/helpers').generateRandomArray;

var arrToSort = generateArray();
console.log('Input array is: ' + arrToSort);

bubbleSort(arrToSort);
injectionSort(arrToSort);
mergeSort(arrToSort);
quickSort(arrToSort);
selectionSort(arrToSort);