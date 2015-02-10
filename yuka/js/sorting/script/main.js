define(["data", "sort/bubble", "sort/count", "sort/insertion", "sort/merge", "sort/quick", "sort/quick_randomized", "sort/radix", "sort/selection" ],
    function (data, sortBubble, sortCounting, sortInsertion, sortMerge, sortQuick, sortQuickRandom, sortRadix, sortSelection){
        document.write("Input array: "               + data                  + "<br/>");
        document.write("Bubble sorted array: "       + sortBubble(data)      + "<br/>");
        document.write("Counting sorted array: "     + sortCounting(data)    + "<br/>");
        document.write("Insertion sorted array: "    + sortInsertion(data)   + "<br/>");
        document.write("Merge sorted array: "        + sortMerge(data)       + "<br/>");
        document.write("Quick sorted array: "        + sortQuick(data)       + "<br/>");
        document.write("Random quick sorted array: " + sortQuickRandom(data) + "<br/>");
        document.write("Radix sorted array: "        + sortRadix(data)       + "<br/>");
        document.write("Selection sorted array: "    + sortSelection(data)   + "<br/>");
    });