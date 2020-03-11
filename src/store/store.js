import Vue from 'vue'
import Vuex from 'vuex'
import Api from '@/Api'

Vue.use(Vuex)

let ext = ''
// const term = this.$store.getters.queryTerm
// const selected = this.$store.getters.selectedOption

// if (this.$store.getters.selectedOption === 'nin') {
//     ext = 'filter_by_nin' + this.$store.getters.queryTerm
// } else if (this.$store.getters.selectedOption === 'issued_date') {
//     ext = 'filter_by_date' + this.$store.getters.queryTerm
// } else if (this.$store.getters.selectedOption == 'tracking_id') {
//     ext = 'filter_by_id' + this.$store.getters.queryTerm
// }



export const store = new Vuex.Store({
    state: {
        queryTerm: '',
        selectedOption: '',
        queryResult: '',
        loading: true,
        options: [{
                text: 'NIN',
                value: 'nin',
                name: 'nin',
            },
            {
                text: 'Issued Date',
                value: 'issued_date',
                name: 'issued_date',
            },
            {
                text: 'Tracking ID',
                value: 'tracking_id',
                name: 'tracking_id',
            }
        ],
    },

    mutations: {
        SET_QUERY_TERM(state, queryTerm) {
            state.queryTerm = queryTerm
        },

        SET_SELECTED_OPTION(state, selectedOption) {
            state.selectedOption = selectedOption
        },

        SET_QUERY_RESULT(state, queryResult) {
            state.queryResult = queryResult
        },

        CHANGE_LOADING_STATE(state, loading) {
            state.loading = loading
        },

        SET_OPTIONS(state, options) {
            state.options = options
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
            Api().get(ext).then((response) => {
                // eslint-disable-next-line no-console
                console.log(response.data, this)
                commit('SET_QUERY_RESULT', response.data)
                commit('CHANGE_LOADING_STATE', false)
            })
        },

        setOptions({ commit }, options) {
            commit('SET_OPTIONS', options)
        }
    },

    getters: {
        queryTerm: (state) => state.queryTerm,
        selectedOption: (state) => state.selectedOption,
        queryResult: (state) => state.queryResult,
        options: (state) => state.options
    }
})