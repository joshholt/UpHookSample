(function() {

  module.exports = {
    index: function(req, res, next) {
      return res.render('index', {
        title: 'holts.no-ip.org'
      });
    }
  };

}).call(this);
