var data = (function () {

	// Images
	function getAllImages() {
		return jsonRequester.get('http://localhost:49502/api/images')
			.then(function (res) {
				return res;
			});
	}

	// TouristSites
	function getAllTouristSites() {
		return jsonRequester.get('http://localhost:49502/api/TouristSites')
			.then(function (res) {
				return res.result;
			});
	}
	
	function getTouristSitesById(id) {
		return jsonRequester.get('http://touristsites.azurewebsites.net/api/TouristSites/' + id)
			.then(function (res) {
				return res.result;
			});
	}
	
	//Cities
	function getAllCities() {
		return jsonRequester.get('http://touristsites.azurewebsites.net/api/Cities')
			.then(function (res) {
				return res.result;
			});
	}
	
	//Accomodations
	function getAllAccomodations() {
		return jsonRequester.get('http://touristsites.azurewebsites.net/api/Accomodations')
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
        
        return jsonRequester.post('http://localhost:49502/api/Account/Register', options)
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
        url: 'http://localhost:49502/Token',
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
        
        // return jsonRequester.post('http://localhost:49502/Token', options)
        //     .then(function (res) {
        //        return res; 
        //     });
    }


	return {
		images: {
			getAll: getAllImages
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