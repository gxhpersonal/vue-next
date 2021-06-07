import { createStore } from "vuex";

const store = createStore({
  state: {
    count: 0,
    list: [{ id: 1, name: "nick", isShow: true }, { id: 2, name: "mack", isShow: false }]
  },
  getters: {
    formateList(state) {
      return state.list.filter(v => v.isShow)
    }
  },
  mutations: {
    increment(state,data) {
      console.log(state,data)
      state.count = data.amount;
    }
  },
  actions:{
    incrementAsync (store,data) {
      setTimeout(() => {
        store.commit('increment',data)
      }, 2000);
    }
  }
})

export default store