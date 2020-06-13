const Router = require('koa-router')
const router = new Router

router.get('/', (ctx, next) => {
    // ctx.router available
});

module.exports = router