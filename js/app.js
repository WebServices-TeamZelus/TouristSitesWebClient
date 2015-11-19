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

        $('#pin1').mouseenter(function(){
        	$(this).append($('#hover-1'));
			var localSites = touristSites.filter(function(item){
				return item.CityId === 1;
			});

			localSites.forEach(function(item){
				$('#hover-1').css('display', 'block').append($('<div class="ts-item" ts-id="' + item.TouristSiteId + '">' + item.Name + '</div>').click(function(){
					unpin();
					$('#pin1').trigger('mouseleave');
					$('#header-id').removeClass('map').addClass('codrops-header');
					$('svg').first().show();
        			$('h1').first().show();        			
					sidesController.getCurrentSide($(this).attr('ts-id'));
				}));
			});
		});

		$('#pin1').mouseleave(function(){
			$('#hover-1').empty();
		});
    });

    var touristSitesPromise = data.touristSites.getAll();
    var touristSites; 

    touristSitesPromise.then(function(res){
    	touristSites = res;
    });

    function pins(){
    	transitions.moveToY('pin1', 500, 1500, "285px");
		transitions.moveToY('pin2', 600, 1500, "350px");
		transitions.moveToY('pin3', 700, 1500, "205px");
		transitions.moveToY('pin4', 800, 1500, "370px");
		transitions.moveToY('pin5', 900, 1500, "183px");
    }

    function unpin(){
    	transitions.moveToY('pin1', 0, 0, "-100px");
		transitions.moveToY('pin2', 0, 0, "-100px");
		transitions.moveToY('pin3', 0, 0, "-100px");
		transitions.moveToY('pin4', 0, 0, "-100px");
		transitions.moveToY('pin5', 0, 0, "-100px");
    }



    	

    $('#photostack-1').on('click', 'figure', function (ev) {
        var siteId = $(this)
        .attr('siteId');
      sidesController.getCurrentSide(siteId);
    });

}());