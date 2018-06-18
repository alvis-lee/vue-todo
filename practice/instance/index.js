import Vue from 'vue'

const app = new Vue({
  // el: '#root',
  template: '<div ref="abc">{{text}} {{obj.a}}</div>',
  data: {
    text: 0,
    obj: {}
  }
  // watch: {
  //   text (val, oldval) {
  //     console.log(`${val} ${oldval}`)
  //   }
  // }
})

app.$mount('#root')

// app.text = 'text1'

// let i = 0
// setInterval(() => {
//   app.text++
//   app.text++
//   app.text++
//   app.text++
//   app.text++
//   app.text++
//   app.text++

//   // app.$options.data.text++
//   // app.$data.text++
//   // i++
//   // app.obj.a = i
//   // app.$forceUpdate()
//   // app.$set(app.obj, 'a', i)
//   // app.$delete()
// }, 1000)

// console.log(app.$data)
// console.log(app.$props)
// console.log(app.$el)
// console.log(app.$options)
// app.$options.render = h => {
//   return h('div', {}, 'render')
// }
// console.log(app.$root)
// console.log(app.$root === app)
// console.log(app.$children)
// console.log(app.$slots)
// console.log(app.$scopedSlots)
// console.log(app.$refs)
// console.log(app.$isServer)

// const unWatch = app.$watch('text', (val, oldval) => {
//   console.log(`${val} ${oldval}`)
// })

// setTimeout(() => {
//   unWatch()
// }, 2000)

// app.$on('test', (a, b) => {
//   console.log(`${a} ${b}`)
// })

// app.$once('test', (a, b) => {
//   console.log('once', `${a} ${b}`)
// })

// setInterval(() => {
//   app.$emit('test', 1, 2)
// }, 1000)

// app.$nextTick(() => {
//   console.log('DOM updated')
// })
