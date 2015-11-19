(function(){
    
   homeController.getHomePage();

   var mapButton = $('#btn-map');

    mapButton.on('click', function() {
        $('svg').first().hide();
        $('h1').first().hide();
        $('#header-id').removeClass('codrops-header').addClass('map');
        $(this).hide();
        for (var i = 0; i < 5; i++) {
        	$('<div />').attr('id', 'pin' + (i + 1)).appendTo($('.container').first());
        }

        setTimeout(pins, 100);
    });

    function pins(){
    	transitions.moveToY('pin1', 500, 1500, "285px");
		transitions.moveToY('pin2', 600, 1500, "350px");
		transitions.moveToY('pin3', 700, 1500, "205px");
		transitions.moveToY('pin4', 800, 1500, "370px");
		transitions.moveToY('pin5', 900, 1500, "183px");
    }

    $('#photostack-1').on('click', 'figure a', function (ev) {
        var siteId = $(ev.target).attr('siteId');
      sidesController.getCurrentSide(siteId);
        console.log(siteId);
    });

}());