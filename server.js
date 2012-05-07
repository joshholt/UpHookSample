var up     = require('up'),
    http   = require('http'),
    uphook = require('up-hook'),
    port   = process.env.PORT || 1337,
    svr, httpServer;

httpServer = http.createServer();

svr = up(httpServer, __dirname + '/app');
svr.use(uphook('/redeploy', {branch: 'master', cmd: "echo 'a'"}));

httpServer.listen(port, function (err) {
  if (err) throw err;
  console.log(' \033[96m - listening on *:'+port+' \033[39m');
});