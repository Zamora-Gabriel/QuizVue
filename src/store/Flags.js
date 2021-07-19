// VUE's data store for flags
// COPYRIGHT 2021 (C) GABRIEL ZAMORA

import Vue from 'vue'
import Vuex from 'vuex'

import Axios from 'axios'

import { vuexfireMutations, firestoreAction } from 'vuexfire'
import firebase from 'firebase/app'
import 'firebase/firestore'
import { firestorePlugin } from 'vuefire'

let db = ""

Vue.use(Vuex)

export default ({
    state: {
        db,
        playerAdded: false,
        questionFlag: false,
        flagsObj: { changeScreens: false },
    },
    mutations: {
        SET_PLAYER_ADDED: (state, aFlag) => state.playerAdded = aFlag,

        SET_QUESTION_FLAG: (state, aFlag) => state.questionFlag = aFlag
    },
    actions: {
        setPlayerAdded({ state, commit, rootState }, aFlag) {
            commit(`SET_PLAYER_ADDED`, aFlag)
        },

        setQuestionFlag({ state, commit, rootState }, aFlag) {
            commit(`SET_QUESTION_FLAG`, aFlag)
            return new Promise((resolve, reject) => {
                // rootstate to get the database from root store
                rootState.db.collection('flags')
                    .doc('flags')
                    .update({ changeScreens: aFlag })
                    .then(() => {
                        // Debug message, users were updated on cloud
                        console.log('flag updated!')

                        // resolve the promise
                        resolve();
                    })
                    .catch(error => reject(error));
            });
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
        },

        bindFlagsData: firestoreAction(context => {
            return context.bindFirestoreRef('flagsObj', context.rootState.db.collection('flags').doc("flags"))
        }),
    },
    getters: {
        playerAdded: state => state.playerAdded,
        questionFlagCheck: state => state.questionFlag,
        theFlags: state => state.flagsObj,
    }
})