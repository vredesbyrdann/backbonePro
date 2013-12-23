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
		template: _.template('<%= logo %>'),
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
		template: _.template('<%= heading %>'),
		render: function () {
			var html = this.template({
				heading: this.model.get('heading'),
			});
			$(this.el).html(html);
		}
	});

	//
	// Roominate Router...
	//
	Roominate.Router = Backbone.Router.extend({
		routes: {
			'': 'index',
			'home': 'index'
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
				heading: 'It\'s an open-source conference room booking app...',
				_id: idGenerator()
			});
		
			var indexSectionView = new Roominate.Views.IndexSectionView({
				el: $('.section'),
				model: indexSectionModel
			});
		
			indexSectionView.render();
		
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