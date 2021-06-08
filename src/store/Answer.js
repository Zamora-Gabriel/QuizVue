// VUE's data store for users
// COPYRIGHT 2021 (C) GABRIEL ZAMORA

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default ({
    state: {
        answer: "none",
        userAnsList: [],
        answerList: [],
    },
    mutations: {
        SET_CURRENT_ANSWER: (state, aAnswer) => state.answer = aAnswer,
        ADD_ANSWER: (state, newAns) => {
            state.answerList.push(newAns);
        },

        ADD_USER_ANSWER: (state, newUserAns) => {
            state.userAnsList.push(newUserAns);
        }
    },
    actions: {
        setAnswer({ commit }, aAnswer) {
            commit(`SET_CURRENT_ANSWER`, aAnswer)
        },
        addUserAnswer({ commit }, newUserAns) {
            commit(`ADD_USER_ANSWER`, newUserAns)
        },
        addAnswer({ commit }, newAns) {
            commit(`ADD_ANSWER`, newAns)
        }
    },
    getters: {
        theAnswer: state => state.answer,
        theUserAns: state => state.userAnsList,
        theAnswerList: state => state.answerList
    }
})