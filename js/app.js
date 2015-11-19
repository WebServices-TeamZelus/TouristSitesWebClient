(function(){
    
   homeController.getHomePage();

    $('.test').on('click', function (ev) {
        sidesController.getCurrentSide(1);
    });

}());