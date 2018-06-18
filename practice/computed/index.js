import Vue from 'vue'

new Vue({
  el: '#root',
  template:
    `<div>
       <p>{{name}}</p>
       <p>{{getName()}}</p>
       <p id='abc'>{{text}}</p>
       <p><input type='text' v-model='text'></p>
       <p>fname: <input type='text' v-model='fname'></p>
       <p>lname: <input type='text' v-model='lname'></p>
       <p>name: <input type='text' v-model='name'></p>
       <p>obj.a: <input type='text' v-model='obj.a'></p>
     </div>`,
  data: {
    text: 0,
    lname: 'li',
    fname: 'alvis',
    obj: {
      a: 0
    }
  },
  computed: {
    name: {
      get() {
        console.log('computed get name')
        return `${this.lname} ${this.fname}`
      },
      set(value) {
        console.log(`computed set name ${value}`)
        const names = value.split(' ')
        this.lname = names[0]
        this.fname = names[1]
      }
    }
  },
  watch: {
    'obj.a': {
      immediate: true,
      deep: true,
      handler() {
        console.log('obj changed')
        // this.obj.a++
      }
    }
  },
  methods: {
    getName() {
      console.log('methods getName')
      return `${this.lname} ${this.fname}`
    }
  },
  mounted() {
    setTimeout(() => {
      const a = document.getElementById('abc')
      if (a) {
        a.innerText = 321
        a.remove()
      }
    }, 5000)
  }
})
