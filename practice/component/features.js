import Vue from 'vue'

const ChildComponent = {
  template: `<div>child component: {{value}}, {{data.value}}</div>`,
  inject: ['yeye', 'value', 'data'],
  mounted() {
    console.log(this.$parent.$options.name)
    console.log(this.yeye)
    console.log(this.value)
  }
}

const component = {
  name: 'comp1',
  components: {
    ChildComponent
  },
  template: `
    <div :style='style'>
      <div class='header'>
        <slot name='header'></slot>
      </div>
      <div class='body'>
        <slot name='body'></slot>
      </div>
      <div class='footer'>
        <slot name='footer' value='876' abc='丧失'></slot>
      </div>
      <div class='abcc'>
        <child-component></child-component>
      </div>
    </div>
  `,
  data() {
    return {
      style: {
        width: '200px',
        height: '200px',
        border: '1px solid #aaa'
      }
    }
  }
}

new Vue({
  el: '#root',
  template: `
    <div>
      <comp-one ref='comp1'>
        <span ref='span1' slot='header'>看我看我 {{value}}</span>
        <span slot='body'>我在这里</span>
        <span slot='footer' slot-scope='dv'>{{dv.value}} {{dv.abc}} {{value}}</span>
      </comp-one>
      <input type='text' v-model='value'>
    </div>
  `,
  data() {
    return {
      value: 123
    }
  },
  mounted() {
    console.log(this.$refs.comp1)
    console.log(this.$refs.span1)
  },
  components: {
    CompOne: component
  },
  // provide: {
  //   yeye: this,
  //   value: this.value
  // }
  provide() {
    const data = {}

    Object.defineProperty(data, 'value', {
      get: () => this.value,
      enumerable: true
    })

    return {
      yeye: this,
      value: this.value,
      data
    }
  }
})
