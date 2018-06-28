export default {
  updateCount(state, data) {
    state.count = data.num
  },
  fillTodos(state, todos) {
    state.todos = todos
  },
  doLogin(state, userinfo) {
    state.user = userinfo
  }
}
