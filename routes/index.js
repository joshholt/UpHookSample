(function() {

  module.exports = {
    index: function(req, res, next) {
      return res.render('index', {
        title: 'Holts.no-ip.org'
      });
    }
  };

}).call(this);
