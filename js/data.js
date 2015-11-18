var data = (function () {

    var baseUrl = 'http://touristsites.azurewebsites.net/';

	// Images
	function getAllImages() {
		return jsonRequester.get( baseUrl + 'api/images')
			.then(function (res) {
				return res;
			});
	}
    
    function uploadImage(data, touristSiteId, token) {
		var promise = new Promise(function (resolve, reject) {
        var url = baseUrl + 'api/images';

        $.ajax(url, {
            type: 'POST',
            contentType: false,
            processData: false,
            headers: {
                'Autorization': 'Bearer ' + token,
                "touristSiteId": touristSiteId
            },
            data: data,
            success: function (res) {
                resolve(res);
            },
            error: function (err) {
                reject(err);
            }
        });
    });

    return promise
	}

	// TouristSites
	function getAllTouristSites() {
		return jsonRequester.get(baseUrl + 'api/TouristSites')
			.then(function (res) {
				return res.result;
			});
	}
	
	function getTouristSitesById(id) {
		return jsonRequester.get(baseUrl + 'api/TouristSites/' + id)
			.then(function (res) {
				return res.result;
			});
	}
	
	//Cities
	function getAllCities() {
		return jsonRequester.get(baseUrl + 'api/Cities')
			.then(function (res) {
				return res.result;
			});
	}
	
	//Accomodations
	function getAllAccomodations() {
		return jsonRequester.get(baseUrl + 'api/Accomodations')
			.then(function (res) {
				return res.result;
			});
	}
    
    
    //Users
    function register(email, password) {
        var options = {
            data: {
                'Email': email,
                'password': password,
                'ConfirmPassword': password
            }
        };
        
        return jsonRequester.post(baseUrl + 'api/Account/Register', options)
            .then(function (res) {
               return res; 
            });
    }
    
    
    function login(email, password) {
            var data= {
                'username': email,
                'password': password,
                'grant_type': 'password'
            };
            
            
      var promise = new Promise(function(resolve, reject) {
      $.ajax({
        url: baseUrl + 'Token',
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        data: data,
        success: function(res) {
          resolve(res);
        },
        error: function(err) {
          reject(err);
        }
      });
    });
    
    return promise;
    }


	return {
		images: {
			getAll: getAllImages,
            addImage: uploadImage
		},
		touristSites: {
			getAll: getAllTouristSites,
			getById: getTouristSitesById
		},
		cities: {
			getAll: getAllCities
		},
		accomodations: {
			getAll: getAllAccomodations
		},
        users: {
            register: register,
            login: login
        }
	}

} ());