(function(){
    
   homeController.getHomePage();



    $('#photostack-1').on('click', 'figure a', function (ev) {
        var siteId = $(ev.target).attr('siteId');
      sidesController.getCurrentSide(siteId);
        console.log(siteId);
    });

}());