// VUE's data store for users
// COPYRIGHT 2021 (C) GABRIEL ZAMORA

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default ({
    state: {
        question: "none",
        value: 1
    },
    mutations: {
        SET_QUESTION_NUMBER: (state, aNumber) => {
            state.value = aNumber
        },
        SET_CURRENT_QUESTION: (state, aQuestion) => state.question = aQuestion
    },
    actions: {
        setQuestionNumber({ commit }, aNumber) {
            commit(`SET_QUESTION_NUMBER`, aNumber)
        },
        setQuestion({ commit }, val) {
            let aQuestion = ""
            switch (val[0]) {
                // first question
                case (1):
                    // Reptiles
                    if (val[1] == 1) {
                        aQuestion = "Which reptile is mostly known because it camuflages?"
                    }
                    // Mammals
                    if (val[1] == 2) {
                        aQuestion = "Which is the biggest mammal on earth?"
                    }
                    // Birds
                    if (val[1] == 3) {
                        aQuestion = "Which bird has the largest wingspan?"
                    }
                    break;
                    // second question
                case (2):
                    // Reptiles
                    if (val[1] == 1) {
                        aQuestion = "Where do tortoises lay their eggs?"
                    }
                    // Mammals
                    if (val[1] == 2) {
                        aQuestion = "What is the only mammal capable of true flight?"
                    }
                    // Birds
                    if (val[1] === 3) {
                        aQuestion = "How many species of birds are there?"
                    }
                    break;
                    // third question
                case (3):
                    // Reptiles
                    if (val[1] === 1) {
                        aQuestion = "Which feature is visibly different in crocodiles and alligators?"
                    }
                    // Mammals
                    if (val[1] === 2) {
                        aQuestion = "What is the smallest mammal in the world?"
                    }
                    // Birds
                    if (val[1] === 3) {
                        aQuestion = "What color are the american robin's eggs?"
                    }
                    break;
                    // fourth question
                case (4):
                    // Reptiles
                    if (val[1] === 1) {
                        aQuestion = "With what part of their body do lizards smell?"
                    }
                    // Mammals
                    if (val[1] === 2) {
                        aQuestion = "Which rodent can go its whole life without drinking any water?"
                    }
                    // Birds
                    if (val[1] === 3) {
                        aQuestion = "What is a group of owls called?"
                    }
                    break;
                    // fifth question
                default:
                    // Reptiles
                    if (val[1] === 1) {
                        aQuestion = "Which is the most dangerous reptile in the world?"
                    }
                    // Mammals
                    if (val[1] === 2) {
                        aQuestion = "What is the gestation period of a blue whale?"
                    }
                    // Birds
                    if (val[1] === 3) {
                        aQuestion = "What bird has the longest lifespan?"
                    }
                    break;
            }
            commit(`SET_CURRENT_QUESTION`, aQuestion)
        },
    },
    getters: {
        theQuestion: state => state.question,
        theValue: state => state.value
    }
})