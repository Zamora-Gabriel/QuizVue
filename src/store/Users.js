// VUE's data store for users
// COPYRIGHT 2021 (C) GABRIEL ZAMORA

import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

import { vuexfireMutations, firestoreAction } from 'vuexfire'
import firebase from 'firebase/app'
import 'firebase/firestore'
import { firestorePlugin } from 'vuefire'

let db = ""
let docs = ""

Vue.use(Vuex, firestorePlugin)

export default ({
    state: {
        db,
        currentUser: "none",
        playerList: [],
        LoggedIn: false,
        docs,
    },
    mutations: {
        SET_CURRENT_USER: (state, aUser) => state.currentUser = aUser,
        ADD_PLAYER: (state, newPlayer) => {
            state.playerList.push(newPlayer);
        },
        UPDATE_DOCS: (state, anID) => state.docs = anID,
        UPDATE_DB: (state, myDB) => state.db = myDB,
        ...vuexfireMutations,
    },
    actions: {
        getDB({ state, commit, rootState }) {
            // get database from store root
            let myDb = rootState.db;
            commit(`UPDATE_DB`, myDb)
        },
        connectUser({ commit }, aUser) {
            // Server based function for connecting the user
            Axios.post('/api/player/connect', { name: `${aUser}` })
                .then(response => response.data)
                .then(data => {
                    commit(`ADD_PLAYER`, data);
                    commit(`SET_CURRENT_USER`, data)
                })
                .catch(error => console.log(error))
        },

        getUser({ commit }) {
            // Server based function for getting the user
            Axios.get('/api/player/connect')
                .then(response => response.data)
                .then(data => {
                    console.log(`user is: ${data}`);
                    if (data != "") {
                        commit(`ADD_PLAYER`, data);
                    }
                })
                .catch(error => console.log(error))
        },

        setUser({ commit }, aUser) {
            commit(`SET_CURRENT_USER`, aUser)
        },

        addPlayer({ state, commit, rootState }, newPlayer) {
            return new Promise((resolve, reject) => {
                let playerCollection = rootState.db.collection("players");

                // Get all missing players
                let query = playerCollection.where("playerLogged", "==", false); // TODO: replace 1

                // fetch all
                query.get()
                    .then(resultList => {
                        // Get the first document with no player logged in
                        rootState.db.collection('players')
                            .doc(resultList.docs[0].id)
                            .update({ nickname: newPlayer, playerLogged: true })
                            .then(() => {
                                // Debug message, user was updated on cloud
                                console.log('user updated!')
                            })

                        // Add to players list
                        commit('ADD_PLAYER', newPlayer);
                        commit('UPDATE_DOCS', resultList.docs[0].id)
                            // Set as current user
                            //commit(`SET_CURRENT_USER`, newPlayer)

                        // resolve the promise
                        resolve(resultList.docs[0]);
                    })
                    .catch(error => reject(error));
            });
        },

        resetPlayers({ state, commit, rootState }) {
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
                                .update({ nickname: "?", playerLogged: false, score: 0 })
                                .then(() => {
                                    // Debug message, users were updated on cloud
                                    console.log('users resetted!')
                                })
                        })

                        // resolve the promise
                        resolve();
                    })
                    .catch(error => reject(error));
            });
        },

        loadPlayerList({ state, commit, rootState }) {
            return new Promise((resolve, reject) => {
                let playerCollection = rootState.db.collection("players");

                // Get all missing players
                let query = playerCollection.where("playerLogged", "==", false); // TODO: replace 1

                // fetch all
                query.get()
                    .then(resultList => {
                        // Get list for all players
                        resultList.docs.forEach(doc => {
                            let tempPlayer = resultList.docs[0].data().nickname;

                            // Add to players list
                            commit('ADD_PLAYER', tempPlayer);
                        })

                        // resolve the promise
                        resolve();
                    })
                    .catch(error => reject(error));
            })
        },

        bindPlayerData: firestoreAction(context => {
            return context.bindFirestoreRef('playerList', context.rootState.db.collection('players'))
        }),

        bindUser: firestoreAction(context => {
            let docID = context.getters.theDocID;
            return context.bindFirestoreRef('currentUser', context.rootState.db.collection('players').doc(docID))
        }),
    },
    getters: {
        theUser: state => state.currentUser,
        thePlayerList: state => state.playerList,
        theDB: state => state.db,
        theDocID: state => state.docs,
    }
})