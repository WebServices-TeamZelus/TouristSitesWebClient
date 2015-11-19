var homeController = (function () {

    function getHomePage() {
        var images,
            LOCAL_STORAGE_USERNAME_KEY = 'signed-in-user-username',
            LOCAL_STORAGE_AUTHKEY_KEY = 'signed-in-user-auth-key',
            initialText = 'Visiting our catalog for tourism is a good opportunity ' +
            'to make a virtual online tour to discover interesting places, different ' +
            'resorts, sightseeing and landmarks in Bulgaria. Discover the beauty of Bulgaria !'

        // localStorage.clear();
        var header = $('#header-id');
        header.css('background-image', 'url(img/17.jpg)');
        header.find('h1').text('Bulgaria Touristsites')
            .append($('<span></span>').text('Web Services Team "Zelus"'));
            
        $('#discriptionTemplates')
            .find('p').text(initialText)
            
        var touristObj;

        $('#btn-map').show();

        var loginButton = $('#btn-login');

        data.images.getAll().then(function (res) {
            images = res;
            return templates.get('galery');
        })
            .then(function (template) {
                $('#photostack-1').html(template(images));
                [].slice.call(document.querySelectorAll('.photostack')).forEach(function (el) { new Photostack(el); });
                new Photostack(document.getElementById('photostack-1'), {
                    callback: function (item) {
                    }
                });
            });

        loginButton.on('click', function () {
            if (localStorage.getItem(LOCAL_STORAGE_USERNAME_KEY) != undefined) {
                localStorage.removeItem(LOCAL_STORAGE_USERNAME_KEY);
                localStorage.clear(LOCAL_STORAGE_AUTHKEY_KEY);
                $('#greetingDiv').remove();
                $('#btn-login').css('background-image', 'url(img/login.png)');
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
                            $('#btn-login').css('background-image', 'url(img/logout.jpg)');
                            toastr.success('Successfully logged in');
                            loginButton.parent().append('<div id="greetingDiv">Hello ' + email + '</div>');
                            formContainer.html('');
                        }, function (rej) {
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
                        }, function (rej) {
                            toastr.error('Invalid Username or Passoword');
                            console.log('register faild ' + rej['Message']);
                        });
                });
            }
        });

    }

    return {
        getHomePage: getHomePage
    }
} ());