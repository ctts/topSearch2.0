const Koa = require('koa');
const app = new Koa();

const test = require('./api/v1/test')

app.use(test.routes())

var routes = requireDirectory(module, './routes');
app.use(ctx => {
    ctx.response.body = { key: 'hello world' }
})
app.listen(3000);