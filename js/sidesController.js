var sidesController = (function touristSiteTemplate() {

    var touristObj,
        images;

    function getCurrentSide(id) {
        data.touristSites.getById(id).then(function (res) {
            touristObj = res;
            console.log(touristObj);
            images = new Array(touristObj.Images);
            console.log("Drugiiii" + images);
            return templates.get('touristSiteHeader');
        })
            .then(function (template) {
                $('#headerTemplates').html(template(touristObj));
                var img = images[0];
                $('.codrops-header').css('background-image', "\'url(" + img + ")\'");
                return templates.get('touristSiteDiscriptions');
            })
            .then(function (template) {
                $('#discriptionTemplates').html(template(touristObj));
                return templates.get('galery');
            })
            .then(function (template) {
                 console.log("Towa e >>>>>>>>>"+images);
                $('#photostack-1').html(template(images));
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
                    var url = $('#url-image').val();
                    console.log(url);
                    data.images.addImage(url, touristObj.Id, LOCAL_STORAGE_AUTHKEY_KEY)
                        .then(function (res) {
                            toastr.success('Successfully upload picture');
                        }, function (rej) {
                            toastr.error('Failed upload image');
                            console.log('register faild ' + rej['Message']);
                        });
                });

            });
    }

    return {
        getCurrentSide: getCurrentSide
    }

} ());