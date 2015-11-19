var sidesController = (function touristSiteTemplate() {

    var touristObj,
        images,
        LOCAL_STORAGE_USERNAME_KEY = 'signed-in-user-username',
        LOCAL_STORAGE_AUTHKEY_KEY = 'signed-in-user-auth-key';

    function getCurrentSide(id) {
        data.touristSites.getById(id).then(function (res) {
            touristObj = res;
            images = touristObj['Images'];
            return templates.get('touristSiteHeader');
        })
            .then(function (template) {
                $('#headerTemplates').html(template(touristObj));
                var img = images[0];
                $('.codrops-header').css('background-image', 'url(' + img + ')');
                return templates.get('touristSiteDiscriptions');
            })
            .then(function (template) {
                $('#discriptionTemplates').html(template(touristObj));
                return templates.get('galery');
            })
            .then(function (template) {
                var imagesForTemplate = [];
                for (var index = 0; index < images.length; index++) {
                    imagesForTemplate[index] = {
                        'TouristSiteName' : touristObj.Name,
                        'Url': images[index],
                        'TouristSiteId': id
                    };
                }


                $('#photostack-1').html(template(imagesForTemplate));
                [].slice.call(document.querySelectorAll('.photostack')).forEach(function (el) { new Photostack(el); });
                new Photostack(document.getElementById('photostack-1'), {
                    callback: function (item) {
                    }
                });
            })
            .then(function () {
                // if (localStorage.getItem(LOCAL_STORAGE_USERNAME_KEY) != undefined){
                $('#imageLoad').css('display', 'block');

                $('#submit-image').on('click', function (ev) {
                    var data = new FormData();
                    var files = $('#url-image').get(0).files;
                    // var url = $('#url-image').val();
                    if (files.length > 0) {
                        data.append("MyImage", files[0]);
                        var userId = localStorage[LOCAL_STORAGE_AUTHKEY_KEY] || 1;
                        
                        // data.images.addImage(data, id, LOCAL_STORAGE_AUTHKEY_KEY)
                        //     .then(function (res) {
                        //         toastr.success('Successfully upload picture');
                        //     }, function (rej) {
                        //         toastr.error('Failed upload image');
                        //         console.log('register faild ' + rej['Message']);
                        //     });
                    }

                    else {
                        toastr.error('Invalid image file!');

                    }
                });

            });
    }

    return {
        getCurrentSide: getCurrentSide
    }

} ());