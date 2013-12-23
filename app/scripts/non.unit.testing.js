(function () {

	'use strict';

	// Company Models will have access to User Models Collection...

	//
	// Company Model...
	//
	var CompanyModel = Backbone.Model.extend({
		initialize: function () {
			console.log('Ready to go...');
		},
		validate: function (attrs) {
			if (attrs.userName || attrs.email === undefined) {
				console.log('Validation error: companyModel...');
			}
		},
		mutators: {
			getCompanyName: {
				get: function () {
					return 'Your Company is: ' + this.get('companyName');
				}
			},
			getEmail: {
				get: function () {
					return 'Your email address is: ' + this.get('email');
				}
			},
		}
	}), 	

	//
	// The Iron Yard...
	//
	companyModel = new CompanyModel({
		companyName: 'The Iron Yard',
		email: 'tiy@gmail.com'
	});

	console.log(companyModel.get('getCompanyName'));
	console.log(companyModel.get('getEmail'));

	// 
	// Byrdann Solutions...
	//
	var companyModel2 = new CompanyModel();
	companyModel2.set('companyName', 'Byrdann Solutions', {validate: true});
	companyModel2.set('email', 'email@email.com', {validate: true});

	console.log(companyModel2.get('getCompanyName'));
	console.log(companyModel2.get('getEmail'));

})();