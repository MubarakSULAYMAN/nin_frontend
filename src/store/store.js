import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        queryTerm: '',
        selectedOption: '',
        loading: true
    },

    mutations: {
        SET_QUERY_TERM(state, queryTerm) {
            state.queryTerm = queryTerm
        },

        SET_SELECTED_OPTION(state, selectedOption) {
            state.selectedOption = selectedOption
        },

        CHANGE_LOADING_STATE(state, loading) {
            state.loading = loading
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
        },

        setLoading({
            commit
        }, loading) {
            commit('CHANGE_LOADING_STATE', loading)
        }
    },

    getters: {
        queryTerm: (state) => state.queryTerm,
        selectedOption: (state) => state.selectedOption,
        loading: (state) => state.loading
    }
})