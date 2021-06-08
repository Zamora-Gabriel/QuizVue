// VUE's data store for users
// COPYRIGHT 2021 (C) GABRIEL ZAMORA

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default ({
    state: {
        currentScore: 0,
    },
    mutations: {
        SET_CURRENT_SCORE: (state, aScore) => state.currentScore = aScore,
    },
    actions: {
        setScore({ commit }, aScore) {
            commit(`SET_CURRENT_SCORE`, aScore)
        }
    },
    getters: {
        theScore: state => state.currentScore
    }
})