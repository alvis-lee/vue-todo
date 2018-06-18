import Vuex from 'vuex'

import defaultState from './state/state'
import mutations from './mutations/mutations'
import getters from './getters/getters'
import actions from './actions/actions'

export default () => {
  const store = new Vuex.Store({
    strict: process.env.NODE_ENV === 'development',
    state: defaultState,
    mutations,
    getters,
    actions
    // plugins: [
    //   (store) => {
    //     console.log('store plugins 。。。')
    //   }
    // ]
    // modules: {
    //   a: {
    //     namespaced: true,
    //     state: {
    //       text: 1999
    //     },
    //     mutations: {
    //       updateText(state, text) {
    //         console.log('a.state', state)
    //         state.text = text
    //       }
    //     },
    //     getters: {
    //       textPlus(state, getters, rootState) {
    //         return state.text + rootState.count + rootState.b.text
    //       }
    //     },
    //     actions: {
    //       add({ state, commit, rootState }) {
    //         // commit('updateText', rootState.count)
    //         commit('updateCount', { num: 897888 }, { root: true })
    //       }
    //     }
    //   },
    //   b: {
    //     namespaced: true,
    //     state: {
    //       text: 2999
    //     },
    //     actions: {
    //       testAction({ commit }) {
    //         commit('a/updateText', 'bbb testaction', { root: true })
    //         // commit('a/updateText', 'bbb testaction')
    //       }
    //     }
    //   }
    // }
  })

  if (module.hot) {
    module.hot.accept([
      './state/state',
      './mutations/mutations',
      './actions/actions',
      './getters/getters'
    ], () => {
      const newState = require('./state/state').default
      const newMutations = require('./mutations/mutations').default
      const newActions = require('./actions/actions').default
      const newGetter = require('./getters/getters').default

      store.hotUpdate({
        state: newState,
        mutations: newMutations,
        actions: newActions,
        getters: newGetter
      })
    })
  }
  return store
}
