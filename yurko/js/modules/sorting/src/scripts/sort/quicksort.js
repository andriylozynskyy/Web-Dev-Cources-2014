define(["sort/helpers"], function (helper) {

    // Quick sort function
    function quicksort(unsortedArray) {
        var orderedArray = unsortedArray;
        var leftArrayPart = [];
        var rightArrayPart = [];
        var pivot = orderedArray[0];

//      Another way to clone array
        orderedArray = helper.copyArray(unsortedArray);
//      orderedArray = unsortedArray.clone();

        if (orderedArray.length === 0) {
            return [];
        }

        for (var i = 1; i < orderedArray.length; i++) {
            if (orderedArray[i] < pivot) {
                leftArrayPart[leftArrayPart.length] = orderedArray[i];
            } else {
                rightArrayPart[rightArrayPart.length] = orderedArray[i];
            }
        }
        return quicksort(leftArrayPart).concat(pivot, quicksort(rightArrayPart));
    }
    return quicksort;
})

