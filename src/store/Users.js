// VUE's data store for users
// COPYRIGHT 2021 (C) GABRIEL ZAMORA

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default ({
    state: {
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
        setUser({ commit }, aUser) {
            commit(`SET_CURRENT_USER`, aUser)
        },
        addPlayer({ commit }, newPlayer) {
            commit(`ADD_PLAYER`, newPlayer)
        }
    },
    getters: {
        theUser: state => state.currentUser,
        thePlayerList: state => state.playerList
    }
})