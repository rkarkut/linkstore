App.IndexRoute = Ember.Route.extend({

	model: function() {
        
        return App.User;
    },

    setupController: function(controller, model) {
        
        controller.set('content', model);

        var store = this.get('store');

        var that = this;

        return $.getJSON("/session/authorized").then(function(response) {

            if(response.authorized == true) {
                
                App.authorized = true;
                that.transitionTo('links');
            }
        });
    }
});
