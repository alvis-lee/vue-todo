// import Todo from '../views/todo/todo.vue'
import Login from '../views/login/login.vue'

export default [
  {
    path: '/',
    redirect: '/app'
  },
  {
    // path: '/app',
    path: '/app/:id',
    name: 'app',
    // props: true,
    // props: {
    //   id: 3421
    // },
    // props: (route) => ({ id: route.query.b }),
    // component: Todo,
    component: () => import('../views/todo/todo.vue'),
    // components: {
    //   default: Todo,
    //   a: Login
    // },
    meta: {
      title: 'app'
    },
    beforeEnter(to, from, next) {
      console.log(`app route config beforeEnter 。。。。`)
      next()
    },
    children: [

    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login
    // components: {
    //   default: Login,
    //   a: Todo
    // }
  }
]
