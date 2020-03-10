import Vue from 'vue'
import Vuex from 'vuex'
// import Api from '../Api'
import Api from '@/Api'

Vue.use(Vuex)

let ext = ''
let term = this.$store.getters.queryTerm
let selected = this.$store.getters.selectedOption

if (selected === 'nin') {
    ext = 'filter_by_nin' + term
} else if (selected === 'issued_date') {
    ext = 'filter_by_date' + term
} else if (selected == 'tracking_id') {
    ext = 'filter_by_id' + term
}



export const store = new Vuex.Store({
    state: {
        queryTerm: '',
        selectedOption: '',
        queryResult: '',
        loading: true
    },

    mutations: {
        SET_QUERY_TERM(state, queryTerm) {
            state.queryTerm = queryTerm
        },

        SET_SELECTED_OPTION(state, selectedOption) {
            state.selectedOption = selectedOption
        },
        
        // SET_QUERY_RESULT(state, queryResult) {
        //     state.queryResult = queryResult
        // },
        
        SET_QUERY_RESULT(state, queryResult) {
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
        // }, queryResult) {
        //     commit('SET_QUERY_RESULT', queryResult)
        // },

        // loadData({
        //     commit
          }) {
            Api().get(ext).then((response) => {
              // console.log(response.data, this)
              commit('SET_QUERY_RESULT', response.data)
              commit('CHANGE_LOADING_STATE', false)
            })
          }
        // }
    },

    getters: {
        queryTerm: (state) => state.queryTerm,
        selectedOption: (state) => state.selectedOption,
        queryResult: (state) => state.queryResult
    }
})