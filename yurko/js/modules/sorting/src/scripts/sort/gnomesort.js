define(["sort/helpers"], function (helper) {
    // Gnome sort function
    function gnomesort(unsortedArray) {
        var orderedArray;
        var i = 0;

//        Another way to clone array
//        orderedArray = unsortedArray.clone();

        orderedArray = helper.copyArray(unsortedArray);

        //    console.log(orderedArray);
        while (i < orderedArray.length) {
            if ((orderedArray[i - 1] <= orderedArray[i]) || (i < 1)) {
                i++;
            }
            else {
                //TODO: write swap function
                orderedArray=helper.swap(orderedArray, i, i-1);
                i--;
            }
        }
        return orderedArray;
    }
    return gnomesort;
})