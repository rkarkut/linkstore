App.LinkRoute = Ember.Route.extend({

	model: function(params) {

		var store = this.get('store');

        var url = '/link/'+params.id;

		return $.getJSON(url).then(function(response) {


            var item = store.createRecord(App.Link, {

                id: response.link.id, 
                title: response.link.title,
                link: response.link.link,
                description: response.link.description,
            });

            return item;
		});

	}
});


