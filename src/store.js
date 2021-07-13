import Vue from 'vue'
import Vuex from 'vuex'
import user from "@/store/Users.js"
import answer from "@/store/Answer.js"
import question from "@/store/Question.js"
import score from "@/store/Score.js"
import flags from "@/store/Flags.js"
import Axios from 'axios'

import firebase from 'firebase/app'
import 'firebase/firestore'

/*const fbConfig = {
    apiKey: "AIzaSyD17-h8yp2ViXaf16qS0iESYff7dkqAWWA",
    authDomain: "gameshow-87080.firebaseapp.com",
    databaseURL: "https://gameshow-87080.firebaseio.com",
    projectId: "gameshow-87080",
}

const fb = firebase.initializeApp(fbConfig)

const db = {
    firestore: fb.firestore(),
    //storage: fb.storage()
}*/

Vue.use(Vuex, Axios)

Axios.defaults.baseURL = 'http://localhost:3000'

export default new Vuex.Store({
    modules: {
        user,
        answer,
        question,
        score,
        flags
    }
})