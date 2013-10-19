App.LinksRoute = Ember.Route.extend({

	model: function() {

		var store = this.get('store');


		return $.getJSON("/links").then(function(response) {

			var items = [];

			response.links.forEach( function (item) {

				items.push( store.createRecord(App.Link, {

                    id: item.id, 
                    title: item.title,
                    link: item.link,
                    description: item.description,
                }));
			});

			return items;
		});

	}
});


