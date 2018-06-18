import Vue from 'vue'

const component = {
  model: {
    prop: 'value1',
    event: 'input1'
  },
  props: ['value', 'value1'],
  template: `
   <div>
      value: <input type='text' :value='value1' @input='handleInput'>
   </div>
   `,
  methods: {
    handleInput(e) {
      // this.$emit('input', e.target.value)
      this.$emit('input1', e.target.value)
    }
  }
}

new Vue({
  el: '#root',
  template: `
    <div>
       <comp-one :value='value' @input='value = arguments[0]'></comp-one>
       <comp-one v-model='value'></comp-one>
       <span>{{value}}</span>
    </div>
  `,
  data() {
    return {
      value: 123
    }
  },
  components: {
    CompOne: component
  }
})
