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
        question: "none",
        value: 1,
        info: "Animals",
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
        ],
        themeArr: {},
        questionsObj: {},
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
                        state.question = state.questionsObj.quest1;
                    }
                    // Column2
                    if (val[1] == 2) {
                        state.question = state.questionsObj.quest2;
                    }
                    // Column3
                    if (val[1] == 3) {
                        state.question = state.questionsObj.quest3;
                    }
                    break;
                    // second question
                case (2):
                    // Column1
                    if (val[1] == 1) {
                        state.question = state.questionsObj.quest4;
                    }
                    // Column2
                    if (val[1] == 2) {
                        state.question = state.questionsObj.quest5;
                    }
                    // Column3
                    if (val[1] === 3) {

                        state.question = state.questionsObj.quest6;
                    }
                    break;
                    // third question
                case (3):
                    // Column1
                    if (val[1] === 1) {
                        state.question = state.questionsObj.quest7;
                    }
                    // Column2
                    if (val[1] === 2) {

                        state.question = state.questionsObj.quest8;
                    }
                    // Column3
                    if (val[1] === 3) {
                        state.question = state.questionsObj.quest9;
                    }
                    break;
                    // fourth question
                case (4):
                    // Column1
                    if (val[1] === 1) {
                        state.question = state.questionsObj.quest10;
                    }
                    // Column2
                    if (val[1] === 2) {
                        state.question = state.questionsObj.quest11;
                    }
                    // Column3
                    if (val[1] === 3) {
                        state.question = state.questionsObj.quest12;
                    }
                    break;
                    // fifth question
                default:
                    // Column1
                    if (val[1] === 1) {
                        state.question = state.questionsObj.quest13;
                    }
                    // Column2
                    if (val[1] === 2) {
                        state.question = state.questionsObj.quest14;
                    }
                    // Column3
                    if (val[1] === 3) {
                        state.question = state.questionsObj.quest15;
                    }
                    break;
            }

            return new Promise((resolve, reject) => {
                // get the rootstate's database information and from firebase grab gameInfo Collection
                val[2].db.collection('gameInfo')
                    .doc('information')
                    .update({ question: state.question })
                    .then(() => {
                        // Debug message, question was updated on cloud
                        console.log('question updated!')

                        // resolve the promise
                        resolve();
                    })
                    .catch(error => reject(error));
            });
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
        setQuestion({ state, commit, rootState }, val) {
            val[2] = rootState;
            commit(`SET_CURRENT_QUESTION`, val)
        },
        setTheme({ state, commit, rootState }, aTheme) {
            return new Promise((resolve, reject) => {
                // rootstate to get the database from root store
                rootState.db.collection('gameInfo')
                    .doc('information')
                    .update({ theme: aTheme })
                    .then(() => {
                        // Debug message, theme was updated on cloud
                        console.log('theme updated!')

                        // resolve the promise
                        resolve();
                    })
                    .catch(error => reject(error));
            });
        },
        setQuestArr({ state, commit, rootState }, questArray) {
            return new Promise((resolve, reject) => {
                // rootstate to get the database from root store
                rootState.db.collection('games').doc(`${questArray[0]}`).set({
                        quest1: `${questArray[1]}`,
                        quest2: `${questArray[2]}`,
                        quest3: `${questArray[3]}`,
                        quest4: `${questArray[4]}`,
                        quest5: `${questArray[5]}`,
                        quest6: `${questArray[6]}`,
                        quest7: `${questArray[7]}`,
                        quest8: `${questArray[8]}`,
                        quest9: `${questArray[9]}`,
                        quest10: `${questArray[10]}`,
                        quest11: `${questArray[11]}`,
                        quest12: `${questArray[12]}`,
                        quest13: `${questArray[13]}`,
                        quest14: `${questArray[14]}`,
                        quest15: `${questArray[15]}`,
                    })
                    .then(() => {
                        // Debug message, theme was updated on cloud
                        console.log('Game created!')

                        // resolve the promise
                        resolve();
                    })
                    .catch(error => reject(error));
            });
        },

        bindThemeData: firestoreAction(context => {
            return context.bindFirestoreRef('themeArr', context.rootState.db.collection('games'))
        }),

        bindQuestions: firestoreAction(context => {
            let docID = context.getters.theInformation.theme;
            return context.bindFirestoreRef('questionsObj', context.rootState.db.collection('games').doc(docID))
        }),

        bindCurrentInformation: firestoreAction(context => {
            return context.bindFirestoreRef('info', context.rootState.db.collection('gameInfo').doc("information"))
        }),
    },
    getters: {
        theQuestion: state => state.question,
        theValue: state => state.value,
        theQuestArr: state => state.questArr,
        theInformation: state => state.info,
        theThemeArr: state => state.themeArr
    }
})