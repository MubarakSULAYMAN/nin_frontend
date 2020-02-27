import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        // output: ''
        queryTerm: []
    },

    mutations: {
        formSubmit(state, queryTerm) {
            state.queryTerm = queryTerm
        }
    },

    // actions: {
    //     searchRequest
    // }

    getters: {
        output: state => state.queryTerm
    }
})