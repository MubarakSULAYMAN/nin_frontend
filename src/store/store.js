import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        queryTerm: '',
        selectedOption: '',
        queryResult: null,
        loading: true
    },

    mutations: {
        SET_QUERY_TERM(state, queryTerm) {
            state.queryTerm = queryTerm
        },

        SET_SELECTED_OPTION(state, selectedOption) {
            state.selectedOption = selectedOption
        },

        LOAD_QUERY_RESULT(state, queryResult) {
            state.queryResult = queryResult
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

        loadQueryResult({
            commit
        }) {
            commit('CHANGE_LOADING_STATE', false)
            // return get('').then((response) => {
            //     commit('', response.data.query_term)
            //     commit('CHANGE_LOADING_STATE', true)
            // })
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
        queryResult: (state) => state.queryResult,
        loading: (state) => state.loading
    }
})