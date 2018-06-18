import Vue from 'vue'

// const data = {
//   text: 123
// }

const component = {
  template: `
   <div>
      <div>this is a component: {{text}}</div>
      <input type='text' v-model='text'>
      <span v-show='active'>这里有内容</span>
      <span>{{propOne}}</span>
      <button @click='clickHandler'>点我</button>
   </div>
   `,
  props: {
    active: {
      type: Boolean,
      required: true,
      // default: true
      default() {
        return false
      },
      validator(value) {
        return typeof value === 'boolean'
      }
    },
    propOne: String
    // onChange: Function
  },
  data() {
    // return data
    return {
      text: 123
    }
  },
  methods: {
    clickHandler() {
      // this.onChange()
      this.$emit('change')
    }
  },
  mounted() {
    // this.propOne = '我要改变你'
  }
}
// Vue.component('CompOne', component)

new Vue({
  el: '#root',
  template: `
    <div>
       <comp-one :active='true' @change='change'></comp-one>
       <comp-one ref='comp1' prop-one='给你'></comp-one>
    </div>
  `,
  methods: {
    change() {
      console.log('你要我改变')
    }
  },
  mounted() {
    console.log(this.$refs.comp1)
  },
  components: {
    CompOne: component
  }
})
