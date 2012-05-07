express = require 'express'
routes  = require "#{__dirname}/routes"
http    = require 'http'
app     = express()
port    = process.env.PORT || 1337


app.configure ->
  app.set 'views', "#{__dirname}/views"
  app.set 'view engine', 'jade'
  app.use express.favicon()
  app.use express.logger 'dev'
  app.use require('stylus').middleware(src: "#{__dirname}/public")
  app.use express.static "#{__dirname}/public"
  app.use express.bodyParser()
  app.use express.methodOverride()
  app.use express.cookieParser "kfajdf;lakjal;kfjadfklj"
  app.use express.session()
  app.use app.router

app.configure 'development', ->
  app.use express.errorHandler()

app.get '/', routes.index

module.exports = http.createServer app