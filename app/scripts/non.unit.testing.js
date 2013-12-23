/*console.log('non.unit.testing...');

var vredesbyrdann = new Backbone.Model({
	name: "<script>alert('xss');</script>"
});

var escapedName = vredesbyrdann.escape('name');
console.log(escapedName);*/

//(function () {

	var UserModel = Backbone.Model.extend({
		initialize: function () {
			console.log('Ready to go...');
		},
		mutators: {
			fullName: {
				get: function () {
					return this.get('firstName') + ' ' + this.get('lastName');
				}
			}
		}
	}), 	

	userModel = new UserModel({
		firstName: 'Ryan',
		lastName: 'Poplin'
	});

	console.log(userModel.get('fullName'));
	console.log(userModel.get('firstName'));
	console.log(userModel.get('lastName'));

//})();