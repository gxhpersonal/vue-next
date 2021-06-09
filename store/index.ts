import { createStore } from "vuex";

const moduleA = {
  state: () => ({
    count: 0,
    list: [{ id: 1, name: "nick", age: "18", isShow: true }, { id: 2, name: "mack", age: "19", isShow: false }]
  }),
  getters: {
    formatList(state:any) {
      return state.list.filter((v: { isShow: any; }) => v.isShow)
    }
  },
  mutations: {
    increment(state:any, data:any) {
      console.log(state, data)
      state.count = data.amount;
    }
  },
  actions: {
    incrementAsync(store:any, data:any) {
      setTimeout(() => {
        store.commit('increment', data)
      }, 2000);
    }
  }
}

const store = createStore({
  modules: {
    a: moduleA
  }
})

export default store