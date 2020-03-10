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
        SET_QUERY_TERM(state, queryTerm) {
            state.queryTerm = queryTerm
        },

        SET_SELECTED_OPTION(state, selectedOption) {
            state.selectedOption = selectedOption
        }
    },

    actions: {
        setQueryTerm({
            commit
        }, queryTerm) {
            commit('SET_QUERY_TERM', queryTerm)
        },

        setSelectedOption({
            commit
        }, selectedOption) {
            commit('SET_SELECTED_OPTION', selectedOption)
        }
    },

    getters: {
        queryTerm: (state) => state.queryTerm
    }
})
