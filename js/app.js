(function(){
    
   homeController.getHomePage();



    $('#photostack-1').on('click', 'figure a', function (ev) {
        // sidesController.getCurrentSide(1);
        console.log(ev.target);
    });

}());