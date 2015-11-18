(function(){
    var images,
    LOCAL_STORAGE_USERNAME_KEY = 'signed-in-user-username',
    LOCAL_STORAGE_AUTHKEY_KEY = 'signed-in-user-auth-key';
    
    localStorage.clear();

    var touristObj;
    var loginButton = $('#btn-login');

    var loginButton = $('#btn-login'),
        mapButton = $('#btn-map');

    mapButton.on('click', function(){
        $('svg').first().hide();
        $('h1').first().hide();
        $('#header-id').removeClass('codrops-header').addClass('map');
        $(this).hide();
    });
    
   data.images.getAll().then(function(res) {
        images = res;
        return templates.get('galery');
    })
        .then(function(template) {
            $('#photostack-1').html(template(images));
              [].slice.call( document.querySelectorAll( '.photostack' ) ).forEach( function( el ) { new Photostack( el ); } );
     			new Photostack( document.getElementById( 'photostack-1' ), {
     				callback : function( item ) {
                    }
     			} );
        });
        
    loginButton.on('click', function () {
        if (localStorage.getItem(LOCAL_STORAGE_USERNAME_KEY) != undefined) {
            localStorage.removeItem(LOCAL_STORAGE_USERNAME_KEY);
            localStorage.clear(LOCAL_STORAGE_AUTHKEY_KEY);
            $('#greetingDiv').remove();
            toastr.success('Successfully logged out');
        }
        
        else {
        
        var template = templates.get('loginTemplate');
        var formContainer = $('.loginForm');
        formContainer.html(template(''));
        $('#loginForm').submit(function (ev) {
            ev.preventDefault();
            var email = $('#emailInput').val();
            var pass = $('#passInput').val();
            data.users.login(email, pass)
                .then(function (res) {
                    localStorage.setItem(LOCAL_STORAGE_USERNAME_KEY, email);
                    localStorage.setItem(LOCAL_STORAGE_AUTHKEY_KEY, res['access_token']);
                    toastr.success('Successfully logged in');
                    loginButton.parent().append('<div id="greetingDiv">Hello ' + email + '</div>');
                    formContainer.html('');
                },function (rej) {
                    toastr.error('Invalid Username or Passoword');
                    console.log('register faild ' + rej['Message']);
                });
        });
        
        $('#register').on('click', function (ev) {
            var email = $('#emailInput').val();
            var pass = $('#passInput').val();
            data.users.register(email, pass)
                .then(function (res) {
                    toastr.success('Successfully logged in');
                    formContainer.html('');
                },function (rej) {
                    toastr.error('Invalid Username or Passoword');
                    console.log('register faild ' + rej['Message']);
                });
        });
        }
    });

    function touristSiteTemplate(id) {
        data.touristSites.getById(id).then(function(res) {
            touristObj = res;
            images = touristObj.Images;
            return templates.get('touristSiteTemplate');
        })
            .then(function(template) {
                $('.container').html(template(touristObj));
                var img = images[0].Url;
                $('.codrops-header').css('background-image', '../' + 'img');
                return templates.get('galery');
            })
            .then(function(template) {
                $('#photostack-1').html(template(images));
                [].slice.call( document.querySelectorAll( '.photostack' ) ).forEach( function( el ) { new Photostack( el ); } );
                new Photostack( document.getElementById( 'photostack-1' ), {
                    callback : function( item ) {
                    }
                } );
            });

        if (localStorage.getItem(LOCAL_STORAGE_USERNAME_KEY) == undefined) {

            $('#imageLoad').css('display', 'none');

        }
        else{

            $('#submit-image').on('click', function (ev) {
                var url = $('#url-image').val();
                console.log(url);
                data.images.addImage(url, touristObj.Id, LOCAL_STORAGE_AUTHKEY_KEY)
                    .then(function (res) {
                        toastr.success('Successfully upload picture');
                    },function (rej) {
                        toastr.error('Failed upload image');
                        console.log('register faild ' + rej['Message']);
                    });
            });
        }
    }

    $('.test').on('click', function (ev) {
        touristSiteTemplate(1);
    });

}());