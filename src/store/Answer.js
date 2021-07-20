// VUE's data store for users
// COPYRIGHT 2021 (C) GABRIEL ZAMORA

import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'


import { vuexfireMutations, firestoreAction } from 'vuexfire'
import firebase from 'firebase/app'
import 'firebase/firestore'
import { firestorePlugin } from 'vuefire'

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
        setAnswer({ state, commit, rootState }, aAnswer) {
            return new Promise((resolve, reject) => {
                let playerCollection = rootState.db.collection("players");

                // Get all missing players
                let query = playerCollection.where("nickname", "==", aAnswer[1]); // TODO: replace 1

                // fetch all
                query.get()
                    .then(resultList => {
                        // Get the first document with no player logged in
                        rootState.db.collection('players')
                            .doc(resultList.docs[0].id)
                            .update({ answer: aAnswer[0] })
                            .then(() => {
                                // Debug message, user was updated on cloud
                                console.log('answer updated!')
                            })
                        resolve();
                    })
                    .catch(error => reject(error));
            });
        },
        clearAnswers({ state, commit, rootState }) {
            return new Promise((resolve, reject) => {
                // rootstate to get the database from root store
                let playerCollection = rootState.db.collection("players");

                // Get all players
                let query = playerCollection.where("playerLogged", "==", true);

                // fetch all
                query.get()
                    .then(resultList => {
                        // Get all documents and reset their logged flags
                        resultList.docs.forEach(doc => {
                            rootState.db.collection('players')
                                .doc(doc.id)
                                .update({ answer: "" })
                                .then(() => {
                                    // Debug message, users were updated on cloud
                                    console.log('user answers resetted!')
                                })
                        })

                        // resolve the promise
                        resolve();
                    })
                    .catch(error => reject(error));
            });
        },
        addUserAnswer({ state, commit, rootState }, newUserAns) {
            commit(`ADD_USER_ANSWER`, newUserAns)
        },
        addAnswer({ state, commit, rootState }, newAns) {
            commit(`ADD_ANSWER`, newAns)
        },
        bindAnswerData: firestoreAction(context => {
            return context.bindFirestoreRef('answerList', context.rootState.db.collection('answers').doc('playerAns'))
        }),
    },
    getters: {
        theAnswer: state => state.answer,
        theUserAns: state => state.userAnsList,
        theAnswerList: state => state.answerList
    }
})