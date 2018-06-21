<template>
  <div id='app'>
    <div id='cover'>{{counter}} >> {{fullname}}</div>
    <Header></Header>
    <!-- <router-link to='/app'>app</router-link>&nbsp;&nbsp;
    <router-link to='/login'>login</router-link>&nbsp;&nbsp; -->
    <!-- <todo></todo> -->
    <transition name='fade'>
      <router-view></router-view>
    </transition>
    <button @click='clickme'>点我 qq</button>
    <!-- <notification content='test notify'/> -->
    <Footer></Footer>
    <!-- <router-view name='a'></router-view> -->
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
import Header from './views/layout/header.vue'
import Footer from './views/layout/footer.jsx'
import Todo from './views/todo/todo.vue'

export default {
  metaInfo: {
    title: 'app title'
  },
  methods: {
    // ...mapActions(['updateCountAsync', 'a/add', 'b/testAction']),
    // ...mapMutations(['updateCount', 'a/updateText'])
    ...mapActions(['updateCountAsync']),
    ...mapMutations(['updateCount']),
    clickme() {
      this.$notify({
        content: 'text $notify',
        btn: 'close'
      })
    }
  },
  computed: {
    // textA() {
    //   return this.$store.state.a.text
    // },
    // textB() {
    //   return this.$store.state.b.text
    // },
    ...mapState({
      counter: state => state.count
      // textA: state => state.a.text,
      // textC: state => state.c.text
    }),
    // ...mapState({
    //   counter: 'count'
    // }),
    // ...mapState(['count']),
    // count() {
    //   return this.$store.state.count
    // },
    // ...mapGetters(['fullname', 'a/textPlus'])
    ...mapGetters({
      fullname: 'fullname'
      // textPlus: 'a/textPlus'
    })
    // fullname() {
    //   return this.$store.getters.fullname
    // }
  },
  mounted() {
    // console.log(this.$route)
    // console.log(this.$store)

    // this.$store.dispatch('updateCountAsync', {
    //   num: 5,
    //   time: 2000
    // })

    // this.updateCountAsync({ num: 50, time: 2000 })

    // let i = 0
    // setInterval(() => {
    //   // this.$store.commit('updateCount', {num:i++})
    //   this.updateCount({ num: i++ })
    // }, 1000)

    // this.updateText('776655')
    // this['a/updateText']('44444')
    // this['a/add']()
    // this['b/testAction']()
  },
  components: {
    Header,
    Footer,
    Todo
  }
}
</script>

<style lang='stylus' scoped>
#app {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}

#cover {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: #999;
  opacity: 0.9;
  z-index: -1;
}
</style>


