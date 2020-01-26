const Koa = require('koa');
const bodyparser = require('koa-bodyparser');
const router = require('./router/index')()

// 创建一个Koa对象表示web app本身:
const app = new Koa();

app.use(bodyparser());
app.use(router.routes())

// 在端口3000监听:
app.listen(3030);
console.log('app started at port 3030...');