(function() {

  module.exports = {
    index: function(req, res, next) {
      return res.render('index', {
        title: 'Holt\'s.no-ip.org'
      });
    }
  };

}).call(this);
