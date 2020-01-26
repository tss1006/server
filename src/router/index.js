const Router = require('koa-router')
const App = require('../controller/app')

module.exports = function(){
  var router = new Router({
    prefix: '/miniserver'
  })

  router.get('/getData',App.getData)


  return router
}