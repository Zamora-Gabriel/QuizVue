// VUE's data store for flags
// COPYRIGHT 2021 (C) GABRIEL ZAMORA

import Vue from 'vue'
import Vuex from 'vuex'

import Axios from 'axios'

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
        },

        connectQuestionFlag({ commit }, aFlag) {
            Axios.post('/api/flags/question', { option: aFlag })
                .then(response => response.data)
                .then(data => {
                    commit(`SET_QUESTION_FLAG`, data)
                })
                .catch(error => console.log(error))
        },

        getQuestionFlag({ commit }) {
            Axios.get('/api/flags/question')
                .then(response => response.data)
                .then(data => {
                    commit(`SET_QUESTION_FLAG`, data)
                })
                .catch(error => console.log(error))
        }
    },
    getters: {
        playerAdded: state => state.playerAdded,
        questionFlagCheck: state => state.questionFlag
    }
})