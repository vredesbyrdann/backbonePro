/**
* Roominate Core...
*/

(function ($) {

	'use strict';

	//
	// Namespace...
	//
	var Roominate = {
		Models: {},
		Collections: {},
		Views: {},
		Router: null
	};	
	
	//
	// Index Header Model...
	//
	Roominate.Models.IndexHeaderModel = Backbone.Model.extend({
		idAttribute: '_id',
		// attrs: attrs that were changed...
		validate: function (attrs) {
			if (attrs.logo || attrs._id === undefined) {
				return 'Necessary attrs were not defined...';
			}
		},
		initialize: function () {
			console.log('IndexHeaderModel...');
			console.log(this.id);
		}/*,
		defaults: {
			logo: 'Logo...'
		}*/
	});

	//
	// Index Header View...
	//
	Roominate.Views.IndexHeaderView = Backbone.View.extend({
		initialize: function () {
			console.log('IndexHeaderView...');
		},
		template: _.template($('#index-header-template').html()),
		render: function () {
			var html = this.template({
				logo: this.model.get('logo'),
			});
			$(this.el).html(html);
		}
	});

	//
	// Index Section Model...
	//
	Roominate.Models.IndexSectionModel = Backbone.Model.extend({
		idAttribute: '_id',
		initialize: function () {
			console.log('IndexSectionModel...');
			console.log(this.id)
		},
		defaults: {
			heading: 'Heading...'
		}
	});

	//
	// Index Section View...
	//
	Roominate.Views.IndexSectionView = Backbone.View.extend({
		initialize: function () {
			console.log('IndexSectionView...');
		},
		template: _.template($('#index-section-template').html()),
		render: function () {
			var html = this.template({
				heading: this.model.get('heading'),
			});
			$(this.el).html(html);
		}
	});

	//
	// Add Company Header View...
	//
	Roominate.Views.AddCompanyHeaderView = Backbone.View.extend({
		initialize: function () {
			console.log('AddCompanyHeaderView is ready...');
		},
		template: _.template($('#add-company-header-template').html()),
		render: function () {
			var html = this.template();
			$(this.el).html(html);
		}
	});

	//
	// Add Company Section View...
	//
	Roominate.Views.AddCompanySectionView = Backbone.View.extend({
		initialize: function () {
			console.log('AddCompanySectionView is ready...');
		},
		template: _.template($('#add-company-section-template').html()),
		render: function () {
			var html = this.template();
			$(this.el).html(html);
		}
	});

	//
	// Join Company Header View...
	//
	Roominate.Views.JoinCompanyHeaderView = Backbone.View.extend({
		initialize: function () {
			console.log('JoinCompanyHeaderView is ready...');
		},
		template: _.template($('#join-company-header-template').html()),
		render: function () {
			var html = this.template();
			$(this.el).html(html);
		}
	});

	//
	// Join Company Section View...
	//
	Roominate.Views.JoinCompanySectionView = Backbone.View.extend({
		initialize: function () {
			console.log('JoinCompanySectionView is ready...');
		},
		template: _.template($('#join-company-section-template').html()),
		render: function () {
			var html = this.template();
			$(this.el).html(html);
		}
	});
	
	//
	// Company Model...
	//
	var CompanyModel = Backbone.Model.extend({
		initialize: function () {
			console.log('CompanyModel is ready...');
		},
		validate: function (attrs) {
			if (attrs.companyName || attrs.email === undefined) {
				console.log('Validation error: companyModel...');
			} else {
				console.log('All is good...');
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
	tiyModel = new CompanyModel({
		companyName: 'The Iron Yard',
		email: 'tiy@gmail.com'
	});
	tiyModel.set('companyName', 'The Iron Yard', {validate: true});
	tiyModel.set('email', 'tiy@tiy.com', {validate: true});

	console.log(tiyModel.get('getCompanyName'));
	console.log(tiyModel.get('getEmail'));

	//
	// Roominate Router...
	//
	Roominate.Router = Backbone.Router.extend({
		routes: {
			'': 'index',
			'addCompany': 'addCompany',
			'joinCompany': 'joinCompany'
		},
		index: function () {
			
			//
			// Index Header...
			//
			var indexHeaderModel = new Roominate.Models.IndexHeaderModel({
				logo: 'Roominate',
				_id: idGenerator()
			});

			if (!indexHeaderModel.has('logo')) {
				console.log('Please add a logo attribute...');
				return 0;
			}

			// Useful model clones?
			// var indexHeaderModelClone = indexHeaderModel.clone();
		
			var indexHeaderView = new Roominate.Views.IndexHeaderView({
				el: $('.header'),
				model: indexHeaderModel
			});
		
			indexHeaderView.render();

			//
			// Index Section...
			//
			var indexSectionModel = new Roominate.Models.IndexSectionModel({
				heading: 'It\'s an open-source conference room booking app.',
				_id: idGenerator()
			});
		
			var indexSectionView = new Roominate.Views.IndexSectionView({
				el: $('.section'),
				model: indexSectionModel
			});
		
			indexSectionView.render();
		
		},
		addCompany: function () {
			var addCompanyHeaderView = new Roominate.Views.AddCompanyHeaderView({
				el: $('.header')
			});
			addCompanyHeaderView.render();
			var addCompanySectionView = new Roominate.Views.AddCompanySectionView({
				el: $('.section')
			});
			addCompanySectionView.render();
		},
		joinCompany: function () {
			var joinCompanyHeaderView = new Roominate.Views.JoinCompanyHeaderView({
				el: $('.header')
			});
			joinCompanyHeaderView.render();
			var joinCompanySectionView = new Roominate.Views.JoinCompanySectionView({
				el: $('.section')
			});
			joinCompanySectionView.render();
		}
	});

	//
	// Start...
	//
	new Roominate.Router();
	Backbone.history.start();	

	/**
	* Utility Functions...
	*/

	function idGenerator() {
		return Math.random().toString(36).substr(2);
	}

})(jQuery);
