var up     = require('up'),
    http   = require('http'),
    uphook = require('up-hook'),
    app    = require('./app'),
    svr;

svr = up(app, __dirname + '/app');
svr.use(uphook('/redeploy', {branch: 'master', cmd: "echo 'a'"}));

app.listen(80, function (err) {
  if (err) throw err;
  console.log(' \033[96m - listening on *:80 \033[39m');
});