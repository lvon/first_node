const Koa = require('koa');
const Router= require('koa-router')

const app = new Koa();
const router = new Router()

const prefix = '/api/v1'
router.get(`${prefix}/test`,(ctx)=>{
  ctx.body = {
    success:true,
    content:'hello world'
  }
})



app.use(router.routes());

app.listen(3333,()=>{
  console.log('server is running on port 3333')
});