import Vue from 'vue'

new Vue({
  el: '#root',
  template: `
     <div>
       <div v-text='text'></div>
       <div v-html='html'></div>
     </div>
  `,
  data: {
    text: 0,
    active: false,
    html: '<span> this is html</span>'
  }
})
