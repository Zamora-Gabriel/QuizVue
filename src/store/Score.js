// VUE's data store for users
// COPYRIGHT 2021 (C) GABRIEL ZAMORA

import Vue from 'vue'
import Vuex from 'vuex'


import { vuexfireMutations, firestoreAction } from 'vuexfire'
import firebase from 'firebase/app'
import 'firebase/firestore'
import { firestorePlugin } from 'vuefire'

Vue.use(Vuex)

export default ({
    state: {
        currentScore: 0,
    },
    mutations: {
        SET_CURRENT_SCORE: (state, aScore) => state.currentScore = aScore,
    },
    actions: {
        setScore({ state, commit, rootState }, aScore) {
            return new Promise((resolve, reject) => {
                let playerCollection = rootState.db.collection("players");

                // Get all missing players
                let query = playerCollection.where("nickname", "==", aScore[1]); // TODO: replace 1

                // fetch all
                query.get()
                    .then(resultList => {
                        // Get the first document with no player logged in
                        rootState.db.collection("players")
                            .doc(resultList.docs[0].id)
                            .update({ score: aScore[0] })
                            .then(() => {
                                // Debug message, user was updated on cloud
                                console.log('score updated!')
                            })
                        resolve();
                    })
                    .catch(error => reject(error));
            });

        }
    },
    getters: {
        theScore: state => state.currentScore
    }
})