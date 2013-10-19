App.Router.map(function() {

    this.resource("links");
    this.resource("link", { path: "/link/:id"});
    this.resource("login");

});
