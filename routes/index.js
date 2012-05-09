(function() {

  module.exports = {
    index: function(req, res, next) {
      return res.render('index', {
        title: 'Express'
      });
    }
  };

}).call(this);
