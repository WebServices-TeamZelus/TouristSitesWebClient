(function(){
    var images;
   data.images.getAll().then(function(res) {
        images = res;
        return templates.get('Indexgalery');
    })
        .then(function(template) {
            $('#photostack-1').append(template(images));
        });


}());