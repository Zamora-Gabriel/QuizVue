// VUE's data store for users
// COPYRIGHT 2021 (C) GABRIEL ZAMORA

import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

import firebase from 'firebase/app'
import 'firebase/firestore'

const fbConfig = {
    apiKey: "AIzaSyD17-h8yp2ViXaf16qS0iESYff7dkqAWWA",
    authDomain: "gameshow-87080.firebaseapp.com",
    databaseURL: "https://gameshow-87080.firebaseio.com",
    projectId: "gameshow-87080",
}

/*const fb = firebase.initializeApp(fbConfig)

const db = {
    firestore: fb.firestore(),
    //storage: fb.storage()
}*/

Vue.use(Vuex)

export default ({
    state: {
        db: firebase.initializeApp(fbConfig).firestore(),
        currentUser: "none",
        playerList: [],
        LoggedIn: false,
    },
    mutations: {
        SET_CURRENT_USER: (state, aUser) => state.currentUser = aUser,
        ADD_PLAYER: (state, newPlayer) => {
            state.playerList.push(newPlayer);
        }
    },
    actions: {
        connectUser({ commit }, aUser) {
            Axios.post('/api/player/connect', { name: `${aUser}` })
                .then(response => response.data)
                .then(data => {
                    commit(`ADD_PLAYER`, data);
                    commit(`SET_CURRENT_USER`, data)
                })
                .catch(error => console.log(error))
        },

        getUser({ commit }) {
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
        addPlayer({ commit }, newPlayer) {
            commit(`ADD_PLAYER`, newPlayer)
        },

        loadPlayerList({ commit }) {

            return new Promise((resolve, reject) => {

                let playerList = [];
                let playerCollection = this.getters.theDB.collection("players");
                // generate query id to filter out players that match the game
                let query = playerCollection; // TODO: replace 1
                // fetch all
                query.get()
                    .then(resultList => {
                        // Create a player obj, trigger mutation to save it
                        resultList.docs.forEach(doc => {
                            let tempPlayer = doc.nickname;
                            //new Player();
                            //tempPlayer.populate(doc);
                            console.log(`My Name is: ${doc.nickname}`);
                            commit('ADD_PLAYER', tempPlayer);
                        })
                        resolve(); // Do I need to hand something back?
                    })
                    .catch(error => reject(error));
            });
        },
    },
    getters: {
        theUser: state => state.currentUser,
        thePlayerList: state => state.playerList,
        theDB: state => state.db,
    }
})