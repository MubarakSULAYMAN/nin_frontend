import Vue from 'vue'
import Vuex from 'vuex'
// import Api from '../Api'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        queryTerm: '',
        selectedOption: '',
    },

    mutations: {
        SET_QUERY_TERM (state, queryTerm) {
            state.queryTerm = queryTerm
        },

        SET_SELECTED_OPTION (state, option) {
            state.selectedOption = option
        }
    },

    actions: {
        setQueryTerm ({ commit }, queryTerm) {
            commit('SET_QUERY_TERM', queryTerm)
        },

        setSelectedOption ({ commit }, option) {
            commit('SET_SELECTED_OPTION', option)
        }
    },

    getters: {
        queryTerm: (state) => state.queryTerm
    }
})
