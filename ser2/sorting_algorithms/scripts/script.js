(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"D:\\GITHUB\\Web-Dev-Cources-2014\\ser2\\sorting_algorithms\\scripts\\algorithms\\bubbleSort.js":[function(require,module,exports){
/**
 * Sorts input array using bubble algorithm. Returns sorted array.
 * @param arr {Array}
 * @returns {Array}
 */

var swap = require('../helpers/helpers').swap;

function bubbleSort(arr) {
    var newArr = arr.slice();  // create copy of input array

    console.time('BubbleSort time');  // start timer

    for (var i = newArr.length-1 ; i >= 0 ; i -= 1){
        for (var j = newArr.length-1 ; j >= 0 ; j-=1){
            if (newArr[j] < newArr[j-1]){
                swap(newArr, j, j-1);
            }
        }
    }

    console.timeEnd('BubbleSort time');  // end timer
    console.log('BubbleSort output: ' + newArr);  // show result
    return newArr;
}

exports.bubbleSort = bubbleSort;

},{"../helpers/helpers":"D:\\GITHUB\\Web-Dev-Cources-2014\\ser2\\sorting_algorithms\\scripts\\helpers\\helpers.js"}],"D:\\GITHUB\\Web-Dev-Cources-2014\\ser2\\sorting_algorithms\\scripts\\algorithms\\injectionSort.js":[function(require,module,exports){
/**
 * Sorts input array using injection algorithm. Returns sorted array.
 * @param arr {Array}
 * @returns {Array}
 */
function injectionSort(arr) {
    var newArr = arr.slice(), // create copy of input array
        sortedItem;

    console.time('InjectionSort time');  // start timer

    for (var i = 0 ; i < newArr.length ; i += 1) {
        sortedItem = newArr[i];
        for (var j = i - 1 ; j >= 0 && newArr[j] > sortedItem ; j -= 1) {
            newArr[j+1] = newArr[j];
        }
        newArr[j+1] = sortedItem;
    }

    console.timeEnd('InjectionSort time');  // end timer
    console.log('InjectionSort output: ' + newArr);  // show result
    return newArr;
}

exports.injectionSort = injectionSort;
},{}],"D:\\GITHUB\\Web-Dev-Cources-2014\\ser2\\sorting_algorithms\\scripts\\algorithms\\mergeSort.js":[function(require,module,exports){
/**
 * Sorts input array using merge algorithm. Returns sorted array.
 * @param arr {Array}
 * @return {Array}
 */
function mergeSort(arr) {
    var newArr = arr.slice(),  // create copy of input array
        result;

    function mergeSortFunc(arr) {
        if (arr.length < 2) return arr;

        var mid = Math.floor(arr.length / 2),
            left = arr.slice(0, mid),
            right = arr.slice(mid);

        return merge(mergeSortFunc(left), mergeSortFunc(right));
    }

    /**
     * Merges Two Arrays
     * @param leftPart {Array}
     * @param rightPart {Array}
     * @returns {Array}
     */
    function merge(leftPart, rightPart) {
        var result = [];

        while (leftPart.length && rightPart.length) {
            leftPart[0] < rightPart[0] ? result.push(leftPart.shift()) : result.push(rightPart.shift());
        }
        result = result.concat(leftPart).concat(rightPart);
        return result;
    }

    console.time('MergeSort time');  // start timer
    result = mergeSortFunc(newArr);
    console.timeEnd('MergeSort time');  // end timer
    console.log('MergeSort output: ' + result);  // show result
}

exports.mergeSort = mergeSort;

},{}],"D:\\GITHUB\\Web-Dev-Cources-2014\\ser2\\sorting_algorithms\\scripts\\algorithms\\quickSort.js":[function(require,module,exports){
/**
 * Sorts input array using quick-sort algorithm. Returns sorted array.
 * @param arr {Array}
 * @returns {Array}
 */
function quickSort(arr) {
    var newArr = arr.slice(),  // create copy of input array
        result;

    console.time('QuickSort time');  // start timer

    function quickSortFunc(arr){
        if (arr.length == 0) return [];

        var pivot = arr[0],
            left = [],
            right = [];

        for (var i = 1 ; i < arr.length ; i += 1) {
            arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
        }

        return quickSortFunc(left).concat(pivot, quickSortFunc(right));
    }

    result = quickSortFunc(newArr);
    console.timeEnd('QuickSort time');  // end timer
    console.log('QuickSort output: ' + result);  // show result js_courses-sorting-algorithms
}

exports.quickSort = quickSort;
},{}],"D:\\GITHUB\\Web-Dev-Cources-2014\\ser2\\sorting_algorithms\\scripts\\algorithms\\selectionSort.js":[function(require,module,exports){
/**
 * Sorts input array using selection algorithm. Returns sorted array.
 * @param arr {Array}
 * @returns {Array}
 */

var swap = require('../helpers/helpers').swap;

function selectionSort(arr) {
    var newArr = arr.slice(),  // create copy of input array
        min;

    console.time('SelectionSort time');  // start timer

    for (var i = 0 ; i < newArr.length-1 ; i += 1) {
        min = i;
        for (var j = i + 1 ; j < newArr.length ; j += 1) {
            if (newArr[j] < newArr[min]) min = j;
        }
        swap(newArr, i, min);
    }

    console.timeEnd('SelectionSort time');  // end timer
    console.log('SelectionSort output: ' + newArr);  // show result
    return newArr;
}

exports.selectionSort = selectionSort;

},{"../helpers/helpers":"D:\\GITHUB\\Web-Dev-Cources-2014\\ser2\\sorting_algorithms\\scripts\\helpers\\helpers.js"}],"D:\\GITHUB\\Web-Dev-Cources-2014\\ser2\\sorting_algorithms\\scripts\\helpers\\helpers.js":[function(require,module,exports){
/**
 *  Generates Random Array
 * @param arrayLength
 * @returns {Array}
 */
function generateRandomArray(arrayLength) {
    var randomArr = [];

    arrayLength = arrayLength || 15;

    for (i = 0 ; i < arrayLength; i += 1) {
        randomArr.push(Math.floor(Math.random()*100));
    }

    return randomArr;
}

/**
 * Swaps two elements in array.
 * @param inputArray {Array}
 * @param firstElementIndex {Number}
 * @param secondElementIndex {Number}
 * @return {Array}
 */
function swap(inputArray, firstElementIndex, secondElementIndex) {
    var temp;
    firstElementIndex = parseInt(firstElementIndex, 10);
    secondElementIndex = parseInt (secondElementIndex, 10);

    temp = inputArray[firstElementIndex];
    inputArray[firstElementIndex] = inputArray[secondElementIndex];
    inputArray[secondElementIndex] = temp;

    return inputArray;
}

exports.generateRandomArray = generateRandomArray;
exports.swap = swap;
},{}],"D:\\GITHUB\\Web-Dev-Cources-2014\\ser2\\sorting_algorithms\\scripts\\main.js":[function(require,module,exports){
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
},{"./algorithms/bubbleSort":"D:\\GITHUB\\Web-Dev-Cources-2014\\ser2\\sorting_algorithms\\scripts\\algorithms\\bubbleSort.js","./algorithms/injectionSort":"D:\\GITHUB\\Web-Dev-Cources-2014\\ser2\\sorting_algorithms\\scripts\\algorithms\\injectionSort.js","./algorithms/mergeSort":"D:\\GITHUB\\Web-Dev-Cources-2014\\ser2\\sorting_algorithms\\scripts\\algorithms\\mergeSort.js","./algorithms/quickSort":"D:\\GITHUB\\Web-Dev-Cources-2014\\ser2\\sorting_algorithms\\scripts\\algorithms\\quickSort.js","./algorithms/selectionSort":"D:\\GITHUB\\Web-Dev-Cources-2014\\ser2\\sorting_algorithms\\scripts\\algorithms\\selectionSort.js","./helpers/helpers":"D:\\GITHUB\\Web-Dev-Cources-2014\\ser2\\sorting_algorithms\\scripts\\helpers\\helpers.js"}]},{},["D:\\GITHUB\\Web-Dev-Cources-2014\\ser2\\sorting_algorithms\\scripts\\main.js"]);
