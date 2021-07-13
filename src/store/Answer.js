// VUE's data store for users
// COPYRIGHT 2021 (C) GABRIEL ZAMORA

import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

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
        },

        CLEAR_ANSWERS: (state) => {
            state.userAnsList.pop()
            state.answerList.pop()
        }
    },
    actions: {
        connect({ commit }) {
            // Axios.get('/api/player/connect')
            // Axios.post('api/player/connect', userData)
            //           .then( response=> response.data )
            //           .then( data=> commit('USER_CONNECTED', data.payload))
            //           .catch( error => console.log(error))
        },
        setAnswer({ commit }, aAnswer) {
            commit(`SET_CURRENT_ANSWER`, aAnswer)
        },
        clearAnswers({ commit }) {
            commit(`CLEAR_ANSWERS`)
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