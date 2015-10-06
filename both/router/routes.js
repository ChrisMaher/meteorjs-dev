Router.route('/', {
  name: 'home'
});

Router.route('/dashboard', {
  name: 'dashboard',
  controller: 'DashboardController'
});

Router.plugin('ensureSignedIn', {
  only: ['dashboard']
});

Router.route('/createdeal', function () {
    this.render('createdeal');
});

Router.route('/deals/:_id', {
    name: 'dealPage',
    data: function () {
        return Deals.findOne(this.params._id);
    }
});


