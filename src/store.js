import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const types = {
  SETSTEP: 'SETSTEP'
}

const rootStore = {
  state: {
    step: 'step1'
  },
  getters: {
    getStep: state => state.step
  },
  actions: {
    setStep ({ commit }, step) {
      commit(types.SETSTEP, step)
    }
  },
  mutations: {
    /**
     *
     * @param {*} state
     * @param {String} step
     */
    [types.SETSTEP] (state, step) {
      state.step = step
    }
  }
}

export default new Vuex.Store({
  ...rootStore,

  // 嚴格模式，禁止直接修改state
  strict: false
})
