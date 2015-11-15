var data = (function () {

	// Images
	function getAllImages() {
		return jsonRequester.get('http://touristsites.azurewebsites.net/api/images')
			.then(function (res) {
				return res.result;
			});
	}

	// TouristSites
	function getAllTouristSites() {
		return jsonRequester.get('http://touristsites.azurewebsites.net/api/TouristSites')
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
		}
	}

} ());