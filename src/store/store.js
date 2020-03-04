import Vue from 'vue'
import Vuex from 'vuex'
// import Api from '../Api'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        queryTerm: '',
    },

    mutations: {
        changeQueryTerm(state, payload) {
            state.queryTerm = payload
        }
    },

    actions: {
    },

    getters: {
        getQueryTerm: state => state.queryTerm,
    }
})