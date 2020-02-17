import { SET_AUTHOR_INFO, SET_USER_LIST } from '../types';
import { fetchList } from '../../api/person';

const state = {
  author: 'DK',
  userList: []
};

const getters = {
  author: state => state.author,
  userList: state => state.userList
};

const mutations = {
  [SET_AUTHOR_INFO](state, msg) {
    state.author = msg;
  },
  [SET_USER_LIST](state, list) {
    state.userList = list;
  }
};

const actions = {
  changeAuthor({ commit }, name) {
    commit(SET_AUTHOR_INFO, name);
  },
  getUsers({ commit }) {
    fetchList().then(response => {
      console.log('getUsers = ', response);
      commit(SET_USER_LIST, response);
    });
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
