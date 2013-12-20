(function ($) {

	var App = {
		Models: {},
		Collections: {},
		Views: {},
		Router: null
	};

	App.Models.InvoiceItemModel = Backbone.Model.extend({
		defaults: {
			price: 0,
			quantity: 0	
		},
		calculateAmount: function () {
			return this.get('price') * this.get('quantity');
		}
	});

	App.Views.PreviewInvoiceItemView = Backbone.View.extend({
		template: _.template('\
			Price: <%= price %>.\
			Quantity: <%= quantity %>.\
			Amount: <%= amount %>.\
		'),
		render: function () {
			var html = this.template({
				price: this.model.get('price'),
				quantity: this.model.get('quantity'),
				amount: this.model.calculateAmount()
			});
			$(this.el).html(html);
		}
	});

	$(function () {

		var invoiceItemModel = new App.Models.InvoiceItemModel({
			price: 2,
			quantity: 3
		});

		var previewInvoiceItemView = new App.Views.PreviewInvoiceItemView({
			model: invoiceItemModel,
			el: 'body'
		});

		previewInvoiceItemView.render();

	});

})(jQuery);