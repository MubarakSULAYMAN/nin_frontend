import Vue from 'vue'
import Vuex from 'vuex'
// import Api from '../Api'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        queryTerm: '',
    },

    mutations: {
        submitForm(state, queryTerm) {
            state.queryTerm = queryTerm
        }
    },

    // actions: {
    // },

    // getters: {
    //     getQueryTerm: state => state.queryTerm,
    // }
})