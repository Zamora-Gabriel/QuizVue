// VUE's data store for users
// COPYRIGHT 2021 (C) GABRIEL ZAMORA

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default ({
    state: {
        question: "none",
        value: 1,
        theme: "Animals",
        questArr: [
            "Animals",
            "Which reptile is mostly known because it camuflages?",
            "Which is the biggest mammal on earth?",
            "Which bird has the largest wingspan?",
            "Where do tortoises lay their eggs?",
            "What is the only mammal capable of true flight?",
            "How many species of birds are there?",
            "Which feature is visibly different in crocodiles and alligators?",
            "What is the smallest mammal in the world?",
            "What color are the american robin's eggs?",
            "With what part of their body do lizards smell?",
            "Which rodent can go its whole life without drinking any water?",
            "What is a group of owls called?",
            "Which is the most dangerous reptile in the world?",
            "What is the gestation period of a blue whale?",
            "What bird has the longest lifespan?"
        ]
    },
    mutations: {
        SET_QUESTION_NUMBER: (state, aNumber) => {
            state.value = aNumber
        },
        SET_CURRENT_QUESTION: (state, val) => {
            // Check question row number
            switch (val[0]) {
                // first question
                case (1):
                    // Column 1
                    if (val[1] == 1) {
                        console.log(state.questArr[1])
                        state.question = state.questArr[1]
                    }
                    // Column2
                    if (val[1] == 2) {

                        state.question = state.questArr[2]
                    }
                    // Column3
                    if (val[1] == 3) {

                        state.question = state.questArr[3]
                    }
                    break;
                    // second question
                case (2):
                    // Column1
                    if (val[1] == 1) {

                        state.question = state.questArr[4]
                    }
                    // Column2
                    if (val[1] == 2) {

                        state.question = state.questArr[5]
                    }
                    // Column3
                    if (val[1] === 3) {

                        state.question = state.questArr[6]
                    }
                    break;
                    // third question
                case (3):
                    // Column1
                    if (val[1] === 1) {

                        state.question = state.questArr[7]
                    }
                    // Column2
                    if (val[1] === 2) {

                        state.question = state.questArr[8]
                    }
                    // Column3
                    if (val[1] === 3) {

                        state.question = state.questArr[9]
                    }
                    break;
                    // fourth question
                case (4):
                    // Column1
                    if (val[1] === 1) {

                        state.question = state.questArr[10]
                    }
                    // Column2
                    if (val[1] === 2) {

                        state.question = state.questArr[11]
                    }
                    // Column3
                    if (val[1] === 3) {

                        state.question = state.questArr[12]
                    }
                    break;
                    // fifth question
                default:
                    // Column1
                    if (val[1] === 1) {

                        state.question = state.questArr[13]
                    }
                    // Column2
                    if (val[1] === 2) {

                        state.question = state.questArr[14]
                    }
                    // Column3
                    if (val[1] === 3) {

                        state.question = state.questArr[15]
                    }
                    break;
            }
        },

        SET_CURRENT_THEME: (state, aTheme) => {
            state.theme = aTheme
        },

        SET_CURRENT_QUESTARRAY: (state, questArray) => {
            let i = 0;
            questArray.forEach(element => {
                if (element != " ") {
                    state.questArr[i] = String(element);
                }
                i++;
            });
        }
    },
    actions: {
        setQuestionNumber({ commit }, aNumber) {
            commit(`SET_QUESTION_NUMBER`, aNumber)
        },
        setQuestion({ commit }, val) {

            commit(`SET_CURRENT_QUESTION`, val)
        },
        setTheme({ commit }, aTheme) {
            commit(`SET_CURRENT_THEME`, aTheme)
        },
        setQuestArr({ commit }, questArray) {
            commit(`SET_CURRENT_QUESTARRAY`, questArray)
        }
    },
    getters: {
        theQuestion: state => state.question,
        theValue: state => state.value,
        theQuestArr: state => state.questArr,
        theTheme: state => state.theme
    }
})