// VUE's data store for flags
// COPYRIGHT 2021 (C) GABRIEL ZAMORA

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default ({
    state: {
        playerAdded: false,
        questionFlag: false
    },
    mutations: {
        SET_PLAYER_ADDED: (state, aFlag) => state.playerAdded = aFlag,

        SET_QUESTION_FLAG: (state, aFlag) => state.questionFlag = aFlag
    },
    actions: {
        setPlayerAdded({ commit }, aFlag) {
            commit(`SET_PLAYER_ADDED`, aFlag)
        },
        setQuestionFlag({ commit }, aFlag) {
            commit(`SET_QUESTION_FLAG`, aFlag)
        }
    },
    getters: {
        playerAdded: state => state.playerAdded,
        questionFlagCheck: state => state.questionFlag
    }
})