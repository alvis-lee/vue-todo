// import model from '../../model/client-model'
import model from 'model'
import notify from '../../components/notification/function'
import bus from '../../util/bus'

const handleError = (err) => {
  if (err.code === 401) {
    notify({
      content: '请先登录'
    })
    bus.$emit('auth')
  }
}

export default {
  updateCountAsync(store, data) {
    setTimeout(() => {
      store.commit('updateCount', data)
    }, data.time)
  },
  fetchTodos({ commit }) {
    commit('startLoading')
    return model.getAllTodos()
      .then(data => {
        commit('endLoading')
        commit('fillTodos', data)
      })
      .catch(err => {
        handleError(err)
      })
  },
  addTodo({ commit }, todo) {
    commit('startLoading')
    model.createTodo(todo)
      .then(data => {
        commit('endLoading')
        commit('addTodo', data)
        notify({
          content: '你有多了一件事要做'
        })
      }).catch(err => {
        handleError(err)
      })
  },
  updateTodo({ commit }, { id, todo }) {
    commit('startLoading')
    model.updateTodo(id, todo)
      .then(data => {
        commit('endLoading')
        commit('updateTodo', { id, todo: data })
      }).catch(err => {
        handleError(err)
      })
  },
  deleteTodo({ commit }, id) {
    commit('startLoading')
    model.deleteTodo(id)
      .then(data => {
        commit('endLoading')
        commit('deleteTodo', { id, todo: data })
        notify({
          content: '你有少了一件事要做'
        })
      }).catch(err => {
        handleError(err)
      })
  },
  deleteAllCompleted({ commit, state }) {
    commit('startLoading')
    const ids = state.todos.filter(t => t.completed).map(t => t.id)
    model.deleteAllCompleted(ids)
      .then(() => {
        commit('endLoading')
        commit('deleteAllCompleted')
        notify({
          content: '清理一下'
        })
      }).catch(err => {
        handleError(err)
      })
  },
  login({ commit }, { username, password }) {
    commit('startLoading')
    return new Promise((resolve, reject) => {
      model.login(username, password)
        .then(data => {
          commit('doLogin', data)
          notify({
            content: '登陆成功'
          })
          resolve()
          commit('endLoading')
        }).catch(err => {
          handleError(err)
          reject(err)
        })
    })
  }
}
