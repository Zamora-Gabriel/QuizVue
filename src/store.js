import Vue from 'vue'
import Vuex from 'vuex'
import user from "@/store/Users.js"
import answer from "@/store/Answer.js"
import question from "@/store/Question.js"
import score from "@/store/Score.js"

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        user,
        answer,
        question,
        score
    }
})