const Router = require('koa-router')

const userRouter = new Router({ prefix: '/user' })

userRouter.post('/login', async ctx => {
  const user = ctx.request.body
  if (user.username === 'abc' && user.password === 'abc123') {
    ctx.session.user = {
      username: 'abc'
    }
    ctx.body = {
      success: true,
      data: {
        username: 'abc'
      }
    }
  } else {
    ctx.status = 400
    ctx.body = {
      success: false,
      message: 'username or password error'
    }
  }
})

module.exports = userRouter
