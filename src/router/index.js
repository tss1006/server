const Router = require('koa-router')
const App = require('../controller/app')

module.exports = function(){
  var router = new Router({
    prefix: '/api'
  })

  router.get('/getData',App.getData)


  return router
}