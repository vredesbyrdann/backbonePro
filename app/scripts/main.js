(function ($) {

	// Namespace...
	var Roominate = {
		Models: {},
		Collections: {},
		Views: {},
		Router: null
	};

	// Index Header...
	Roominate.Models.IndexHeaderModel = Backbone.Model.extend({
		initialize: function () {
			console.log('IndexHeaderModel...');
		},
		defaults: {
			logo: 'Logo...'
		}
	});

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

	// Index Section...
	Roominate.Models.IndexSectionModel = Backbone.Model.extend({
		initialize: function () {
			console.log('IndexSectionModel...');
		},
		defaults: {
			heading: 'Heading...'
		}
	});

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


	Roominate.Router = Backbone.Router.extend({
		routes: {
			'': 'index',
			'home': 'index'
		},
		index: function () {
			
			// Index Header...
			var indexHeaderModel = new Roominate.Models.IndexHeaderModel({
				logo: 'Roominate'
			});
		
			var indexHeaderView = new Roominate.Views.IndexHeaderView({
				el: $('.header'),
				model: indexHeaderModel
			});
		
			indexHeaderView.render();

			// Index Section...
			var indexSectionModel = new Roominate.Models.IndexSectionModel({
				heading: 'It\'s an open-source conference room booking app...'
			});
		
			var indexSectionView = new Roominate.Views.IndexSectionView({
				el: $('.section'),
				model: indexSectionModel
			});
		
			indexSectionView.render();
		
		}
	});

	new Roominate.Router();
	Backbone.history.start();	

})(jQuery);