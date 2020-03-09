import Vue from 'vue'
import Vuex from 'vuex'
// import Api from '../Api'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        queryTerm: '',
        selectedOption: '',
    },

    // mutations: {
    //     submitForm(state, queryTerm, selectedOption) {
    //         state.queryTerm = queryTerm
    //         state.selectedOption = selectedOption
    //     }
    // },

    // actions: {
    // },

    getters: {
        // getSubmitForm: state => state.queryTerm,

        getSubmitForm: state => {
            return state.queryTerm
        },
    }
})