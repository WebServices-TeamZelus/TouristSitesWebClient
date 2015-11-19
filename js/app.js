(function(){
    
   homeController.getHomePage();



    $('#photostack-1').on('click', 'figure', function (ev) {
        var siteId = $(ev.target)
        .parent('figure')
        .attr('siteId');
        
        console.log(this);
        
      sidesController.getCurrentSide(siteId);
        console.log(siteId);
    });

}());