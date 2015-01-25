define(["GOL"], function (GOL){
    /**
     * Created by ad on 21.01.2015.
     */
    var number_of_elements = 64;
    var start_option= [
        [ 1,  5] , [1,  6] , [ 2, 5] , [ 2, 6] , [11, 5] , [11, 6],
        [11,  7] , [12, 4] , [12, 8] , [13, 3] , [13, 9] , [14, 3],
        [14,  9] , [15, 6] , [16, 4] , [16, 8] , [17, 5] , [17, 6], [17, 7] , [18, 6],[21, 3],[21, 4],[21, 5],[22, 3],[22, 4],[22, 5],[23, 2],
        [23,  6] , [25, 1] , [25, 2] , [25, 6] , [25, 7] , [35, 3], [35, 4],[36, 3],[36, 4],
        [60, 47] , [61,47] , [62,47] ,
        [60, 48] , [61,48] , [62,48] ,
        [60, 49] , [61,49] , [62,49] ,
        [60, 51] , [61,51] , [62,51]
    ];
    var gol= new GOL(number_of_elements, start_option);

    gol.init();
    gol.set_start_option();

    var gol2= new GOL(number_of_elements);
    gol2.init();
    gol2.set_start_option(start_option);
})
