var templates = (function() {
    var handlebars = window.handlebars || window.Handlebars,
        Handlebars = window.handlebars || window.Handlebars;

    function get(name) {
                var template =  $('#' + name).html();

                   return handlebars.compile(template);

            };

    return {
        get : get
    }
}());