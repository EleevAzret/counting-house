const countings = {
  namespaced: true,
  state: {
    countingDataList: {
      1: {
        type: 'INCOME',
        value: 200,
        comment: 'Some comment',
        id: 1,
      },
      2: {
        type: 'EXPENSES',
        value: -50,
        comment: 'Some expenses comment',
        id: 2,
      },
    },
  },
  getters: {
    getCountings: ({ countingDataList }) => Object.values(countingDataList),
    totalBalance: ({ countingDataList }) => Object.values(countingDataList).reduce((acc, item) => acc + item.value, 0),
  },
  mutations: {
    ADD_COUNT(state, data) {
      state.countingDataList[data.id] = data;
    },
    DEL_COUNT(state, id) {
      delete state.countingDataList[id];
    },
  },
  actions: {
    addNewCount({ commit }, data) {
      const newCount = { ...data, id: String(Math.random()) };
      commit('ADD_COUNT', newCount);
    },
    deleteCount({commit}, id) {
      commit('DEL_COUNT', id);
    }
  },
};

export default countings;
