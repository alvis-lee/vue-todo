import Vue from 'vue'

const component = {
  name: 'comp1',
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
    active: Boolean,
    propOne: {
      // required: true,
      type: String
    }
  },
  data() {
    return {
      text: 0
    }
  },
  methods: {
    clickHandler() {
      this.$emit('change')
    }
  },
  mounted() {
    console.log(`comp mounted ${this.$parent.$options.name}`)
  }
}

const parent = new Vue({
  name: 'parent'
})

const component2 = {
  // parent: parent,
  name: 'comp2',
  extends: component,
  data() {
    return {
      text: 321
    }
  },
  mounted() {
    console.log(`comp2 mounted ${this.$parent.$options.name}`)
    this.$parent.text = 88888
  }
}

// const CompVue = Vue.extend(component)

// new CompVue({
//   el: '#root',
//   // props: {
//   //   propOne: 'abc'
//   // },
//   propsData: {
//     propOne: 'abc'
//   },
//   data: {
//     text: 123
//   },
//   mounted() {
//     console.log('instance mounted')
//   }
// })

new Vue({
  parent: parent,
  name: 'Root',
  el: '#root',
  data: {
    text: 11111
  },
  components: {
    Comp: component2
  },
  template: `
    <div>
      <span>{{text}}</span>
      <comp></comp>
    </div>
  `,
  mounted() {
    console.log(`instance mounted ${this.$parent.$options.name}`)
  }
})
