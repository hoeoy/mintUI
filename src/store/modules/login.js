import { loginByUsername, logout} from '@/api/login'
import { getToken, setToken, removeToken } from '@/utils/auth'

const login = {
  state: {
    token: getToken()
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      if (token) {
        token = { 'access_token': token, 'create_timestamp': new Date().getTime() }
        setToken(token)
        state.token = token
      } else {
        removeToken()
        state.token = token
      }
    }
  },

  actions: {
    // 用户名登录
    LoginByUsername({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        loginByUsername(userInfo).then(token => {
          commit('SET_TOKEN', token)
          resolve()
          debugger
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 登出
    LogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        logout(state.token).then(() => {
          commit('SET_TOKEN', null)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 前端 登出
    FedLogOut({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', null)
        resolve()
      })
    }
  }
}

export default login
