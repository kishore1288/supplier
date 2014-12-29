Unno.component('App', ['$dom'], function(DOM) {
	'use strict';

	var div = DOM.div;
	
	var App = {
		render: function() {
			return div(null, 'Supplier Application');
		}
	};

	return App;
});
