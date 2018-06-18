import Vue from 'vue'

const app = new Vue({
  // el: '#root',
  // template: '<div>{{text}}</div>',
  data: {
    text: 0
  },
  beforeCreate() {
    console.log(this, 'beforeCreate', this.$el)
  },
  created() {
    console.log(this, 'created', this.$el)
  },
  beforeMount() {
    console.log(this, 'beforeMount', this.$el)
  },
  mounted() {
    console.log(this, 'mounted', this.$el)
  },
  beforeUpdate() {
    console.log(this, 'beforeUpdate', this.$el)
  },
  updated() {
    console.log(this, 'updated', this.$el)
  },
  activated() {
    console.log(this, 'activated', this.$el)
  },
  deactivated() {
    console.log(this, 'deactivated', this.$el)
  },
  beforeDestroy() {
    console.log(this, 'beforeDestroy', this.$el)
  },
  destroyed() {
    console.log(this, 'destroyed', this.$el)
  },
  render(h) {
    // throw new TypeError('出错了')
    console.log('render')
    return h('div', {}, this.text)
  },
  renderError(h, err) {
    console.log('renderError')
    return h('div', {}, err.stack)
  },
  errorCaptured() {
    console.log('errorCaptured')
  }
})

app.$mount('#root')

// setInterval(() => {
//   app.text++
// }, 1000)

// setTimeout(() => {
//   app.$destroy()
// }, 3000)
