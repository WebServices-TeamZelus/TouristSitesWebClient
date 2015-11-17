(function(){
    var images;
   data.images.getAll().then(function(res) {
        images = res;
        return templates.get('galery');
    })
        .then(function(template) {
            $('#photostack-1').html(template(images));
              [].slice.call( document.querySelectorAll( '.photostack' ) ).forEach( function( el ) { new Photostack( el ); } );
     			new Photostack( document.getElementById( 'photostack-1' ), {
     				callback : function( item ) {
     					//console.log(item)
     				}
     			} );
        });
        
    $('.btn-login').on('click', function () {
        var template = templates.get('loginTemplate');
        var formContainer = $('.loginForm');
        formContainer.html(template(''));
        $('#loginForm').submit(function (ev) {
            ev.preventDefault();
            var email = $('#emailInput').val();
            var pass = $('#passInput').val();
            data.users.register(email, pass)
                .then(function (res) {
                    console.log('register success' + res['access_token']);
                    formContainer.html('');
                },function (rej) {
                    console.log('register faild ' + rej['Message']);
                });
        });
    });

    //$('.btn-login').on('click', function() {
    //    console.log("pesho");
    //   templates.get('login').then(function(template) {
    //       console.log("neeeeee");
    //       $('#loginForm').html(template());
    //        })
    //});

}());