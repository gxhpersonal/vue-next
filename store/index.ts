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
      state.count = data;
    }
  }
})

export default store