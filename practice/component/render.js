import Vue from 'vue'

const component = {
  name: 'comp1',
  // template: `
  //   <div :style='style'>
  //     <slot></slot>
  //   </div>
  // `,
  render(createElement) {
    return createElement('div',
      {
        style: this.style
      }, this.$slots.default)
  },
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
  // template: `
  //     <comp-one ref='comp1'>
  //       <span ref='span1'>看我看我 {{value}}</span>
  //     </comp-one>
  // `,
  render(createElement) {
    return createElement('comp-one',
      {
        ref: 'comp1'
      },
      [
        createElement('span',
          {
            ref: 'span1'
          }, this.value)
      ])
  },
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
  }
})
