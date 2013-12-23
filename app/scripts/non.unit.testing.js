(function () {

	'use strict';

	// '.escape()' user returned text...

	// Company Models will have access to User Models Collection...

	// If the user clicks 'Add Company', a new CompanyModel is init...

	//
	// Company Model...
	//
	var CompanyModel = Backbone.Model.extend({
		initialize: function () {
			console.log('CompanyModel is ready...');
		},
		validate: function (attrs) {
			if (attrs.companyName === undefined) {
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
		email: 'tiy@gmail.com',
		password: 12341234
	});

	console.log(companyModel.get('getCompanyName'));
	console.log(companyModel.get('getEmail'));

	// 
	// Byrdann Solutions...
	//
	var companyModel2 = new CompanyModel();
	companyModel2.set('companyName', 'Byrdann Solutions', {validate: true});
	companyModel2.set('email', 'email@email.com', {validate: true});
	companyModel2.set('password', '12341234', {validate: true});

	console.log(companyModel2.get('getCompanyName'));
	console.log(companyModel2.get('getEmail'));



})();