App.IndexController = Ember.ObjectController.extend({
    
    loginFailed: false,
    loginSucceed: false,
    isProcessing: false,
    isSlowConnection: false,
    timeout: null,

    user: App.User,

    login: function() {
        this.setProperties({
            loginFailed: false,
            loginSucceed: false,
            isProcessing: true
        });

        this.set("timeout", setTimeout(this.slowConnection.bind(this), 5000));

        // var request = $.post("/user/create", this.getProperties("email", "password"));
        //     request.then(this.success.bind(this), this.failure.bind(this));
        // },

        var request = $.post("session/login", this.getProperties("email", "password"));
            request.then(this.success.bind(this), this.failure.bind(this));
        },

        success: function(response) {
            this.reset();

            if(response.status == 1) {
                this.set("loginFailed", false);
                this.set("loginSucceed", true);

                setTimeout(function(){
                    window.location.href="/";
                }, 1000);
            }
            else {
                this.set("loginFailed", true);
                this.set("loginSucceed", false);
            }
        },

        failure: function() {
            this.reset();
            this.set("loginFailed", true);
            this.set("loginSucceed", false);
        },

        slowConnection: function() {
            this.set("isSlowConnection", true);
            this.set("loginFailed", false);
            this.set("loginSucceed", false);
        },

        reset: function() {
            clearTimeout(this.get("timeout"));
        
            this.setProperties({
                isProcessing: false,
                isSlowConnection: false
            });
        }

});
