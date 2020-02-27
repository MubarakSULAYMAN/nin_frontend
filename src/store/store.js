import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// export default new Vuex.Store({
//     state: {
//         something: 'So little'
//     },

//     mutations: {

//     },

//     actions:{

//     }
// })

export const store = new Vuex.Store({
    state: {
        output: ''
    },

    mutations: {
        formSubmit(state, output) {
            state.output = output
        }
    },

    getters: {
        output: state => state.output
    }
})