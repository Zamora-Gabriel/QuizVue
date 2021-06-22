<template>
  <section class="host-container">
    <!--Login Screen-->
    <div v-if="showHome" class="host-home" id="host-login">
      <center>
        <h1>Welcome {{ name }}</h1>
        <br />
        <h1>Please Select a Game to Play</h1>
        <select name="games" id="game-select">
          <!--Placeholder-->
          <option value="animals">{{ theTheme }}</option>
        </select>
        <br />
        <br />
        <button v-on:click="hideHostHome()" id="buttonPH">Start session</button>
      </center>
    </div>

    <!--Session Screen-->
    <div v-if="showSession" class="host-session">
      <center><h1>Game Session</h1></center>
      <div class="session-container">
        <div class="players-col">
          <div class="player-pholder" id="player1">
            Player 1: {{ thePlayerList[0] }}
          </div>
          <div class="player-pholder" id="player2">
            Player 2: Sonia<!--{{thePlayerList[1]}}-->
          </div>
          <div class="player-pholder" id="player3">
            Player 3: Alice
            <!-- {{thePlayerList[2]}}-->
          </div>
        </div>
        <div class="players-col">
          <div class="player-pholder" id="player4">Player 4: Jean</div>
          <div class="player-pholder" id="player5">Player 5: Robert</div>
          <div class="player-pholder" id="player6">Player 6: George</div>
        </div>
      </div>
      <center>
        <button v-on:click="hideHostSes()" id="button-ses">Start Game</button>
      </center>
    </div>

    <!--Questions Screen-->
    <div v-if="showQuestions" class="host-questions">
      <center><h1>Select a Question to reveal</h1></center>
      <div class="question-container">
        <div class="question-col">
          <h2>Category 1:</h2>
          <button
            v-on:click="hideQuest(1, 1)"
            class="question-pholder"
            id="quest1"
          >
            100
          </button>
          <button
            v-on:click="hideQuest(2, 1)"
            class="question-pholder"
            id="quest2"
          >
            200
          </button>
          <button
            v-on:click="hideQuest(3, 1)"
            class="question-pholder"
            id="quest3"
          >
            300
          </button>
          <button
            v-on:click="hideQuest(4, 1)"
            class="question-pholder"
            id="quest4"
          >
            400
          </button>
          <button
            v-on:click="hideQuest(5, 1)"
            class="question-pholder"
            id="quest5"
          >
            500
          </button>
        </div>
        <div class="question-col">
          <h2>Category 2:</h2>
          <button
            v-on:click="hideQuest(1, 2)"
            class="question-pholder"
            id="quest6"
          >
            100
          </button>
          <button
            v-on:click="hideQuest(2, 2)"
            class="question-pholder"
            id="quest7"
          >
            200
          </button>
          <button
            v-on:click="hideQuest(3, 2)"
            class="question-pholder"
            id="quest8"
          >
            300
          </button>
          <button
            v-on:click="hideQuest(4, 2)"
            class="question-pholder"
            id="quest9"
          >
            400
          </button>
          <button
            v-on:click="hideQuest(5, 2)"
            class="question-pholder"
            id="quest10"
          >
            500
          </button>
        </div>
        <div class="question-col">
          <h2>Category 3:</h2>
          <button
            v-on:click="hideQuest(1, 3)"
            class="question-pholder"
            id="quest11"
          >
            100
          </button>
          <button
            v-on:click="hideQuest(2, 3)"
            class="question-pholder"
            id="quest12"
          >
            200
          </button>
          <button
            v-on:click="hideQuest(3, 3)"
            class="question-pholder"
            id="quest13"
          >
            300
          </button>
          <button
            v-on:click="hideQuest(4, 3)"
            class="question-pholder"
            id="quest14"
          >
            400
          </button>
          <button
            v-on:click="hideQuest(5, 3)"
            class="question-pholder"
            id="quest15"
          >
            500
          </button>
        </div>
      </div>
      <center></center>
    </div>

    <!--Resolve player's answers Screen-->
    <div v-if="showAnswer" class="host-answers">
      <center>
        <div id="revealed-question">
          {{ theQuestion }}
        </div>
      </center>
      <div class="answers-container">
        <!--Answers given by the players-->
        <center>
          <div class="players-col">
            <div class="answer-placeholder">
              <div class="player-name">1st: {{ theUserAns[0] }}</div>
              <span class="player-pholder">Answer: {{ theAnswerList[0] }}</span>
              <button
                @click="addScore(100)"
                class="answer-bttn correct"
                id="corr-1"
              >
                Correct
              </button>
              <button
                @click="addScore(-100)"
                class="answer-bttn incorrect"
                id="incorr-1"
              >
                Incorrect
              </button>
            </div>
            <div class="answer-placeholder">
              <div class="player-name">2nd: Sonia</div>
              <span class="player-pholder">Answer: Monitor Lizard</span>
              <button class="answer-bttn correct" id="corr-2">Correct</button>
              <button class="answer-bttn incorrect" id="incorr-2">
                Incorrect
              </button>
            </div>
            <div class="answer-placeholder">
              <div class="player-name">3rd: Alice</div>
              <span class="player-pholder">Answer: Chameleon</span>
              <button class="answer-bttn correct" id="corr-3">Correct</button>
              <button class="answer-bttn incorrect" id="incorr-3">
                Incorrect
              </button>
            </div>
            <div class="answer-placeholder">
              <div class="player-name">4th: Jean</div>
              <span class="player-pholder">Answer: Crocodile</span>
              <button class="answer-bttn correct" id="corr-4">Correct</button>
              <button class="answer-bttn incorrect" id="incorr-4">
                Incorrect
              </button>
            </div>
            <div class="answer-placeholder">
              <div class="player-name">5th: Robert</div>
              <span class="player-pholder">Answer: Gecko</span>
              <button class="answer-bttn correct" id="corr-5">Correct</button>
              <button class="answer-bttn incorrect" id="incorr-5">
                Incorrect
              </button>
            </div>
            <div class="answer-placeholder">
              <div class="player-name">6th: George</div>
              <span class="player-pholder">Answer: Komodo Dragon</span>
              <button class="answer-bttn correct" id="corr-6">Correct</button>
              <button class="answer-bttn incorrect" id="incorr-6">
                Incorrect
              </button>
            </div>
          </div>
        </center>
      </div>
      <center>
        <button v-on:click="hideAns()" id="button-ses">Return</button>
      </center>
    </div>
  </section>
</template>

<script>
import controller from "@/mixins/controller.js";

class HostLogController extends controller {
  constructor(name, subComponentList = []) {
    super(name, subComponentList);
    this.vm = {
      showHome: true,
      showSession: false,
      showQuestions: false,
      showAnswer: false,
    };
    this.props = {
      name: String,
    };

    this.injectGetters([
      `theQuestion`,
      `theValue`,
      "thePlayerList",
      "theAnswerList",
      "theUserAns",
      "theScore",
      "playerAdded",
      "theTheme",
    ]);

    this.injectActions([
      `setQuestionNumber`,
      `setQuestion`,
      `setScore`,
      `clearAnswers`,
      `setQuestionFlag`,
    ]);
  }

  hideHostHome() {
    this.showHome = false;
    this.showSession = true;
  }
  hideHostSes() {
    if (this.playerAdded) {
      this.showSession = false;
      this.showQuestions = true;
      return;
    }

    alert("Not all players have joined");
  }
  hideQuest(questNum, questionType) {
    this.showQuestions = false;
    this.showAnswer = true;
    let val = [questNum, questionType];
    this.setQuestionNumber(questNum);
    this.setQuestion(val);

    this.setQuestionFlag(true);
  }
  hideAns() {
    this.showAnswer = false;
    this.showQuestions = true;

    this.setQuestionFlag(false);
    this.clearAnswers();
  }
  addScore(scorePoints) {
    this.setScore(this.theScore + scorePoints * this.theValue);
  }
}

export default new HostLogController("gsHostLogin");
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

h2 {
  color: black;
}

/* Local styles for this template */
.host-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  margin: 2vw;
  border: 1px solid black;
  background-color: lightgray;

  background-image: url("https://i.ytimg.com/vi/1w-rLKb5Cc8/maxresdefault.jpg");
  background-repeat: no-repeat;
  background-size: 80vw 78vh;

  color: black;
  height: 78vh;
  width: 80vw;
}

/*Login Styles*/
.host-home {
  padding-top: 1vw;
}

#game-select {
  font-size: 3vw;
  margin-top: 3vw;
}

h1 {
  font-size: 3.5vw;
  color: black;
}

select,
input,
button {
  font-size: 1.2em;
  font-weight: 700;
  height: 1.4em;
}

button {
  padding: 0.5em;
  margin: 0.25em;
  padding-bottom: 1.5em;
}

/*Session styles*/
.session-container {
  display: flex;
  justify-content: center;
}

.players-col {
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  margin: 4vw;
  height: 15vw;
}

.player-pholder {
  border: 2px solid black;
  font-size: 3vh;
}

#player1 {
  background: brown;
}

#player2 {
  background: burlywood;
}

#player3 {
  background: cadetblue;
}

#player4 {
  background: crimson;
}

#player5 {
  background: darkolivegreen;
}

#player6 {
  background: darkorange;
}

/*Questions Styles*/
.question-container {
  display: flex;
  justify-content: center;
}

.question-col {
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  margin: 4vw;
  height: 15vw;
}

.question-pholder {
  border: 2px solid black;
  font-size: 3vh;
  padding-left: 2vh;
  padding-right: 2vh;
  align-self: center;
}

#quest1,
#quest6,
#quest11 {
  background-color: brown;
}

#quest2,
#quest7,
#quest12 {
  background-color: burlywood;
}

#quest3,
#quest8,
#quest13 {
  background-color: cadetblue;
}

#quest4,
#quest9,
#quest14 {
  background-color: crimson;
}

#quest5,
#quest10,
#quest15 {
  background-color: darkolivegreen;
}

/*Answer Screen Styles*/
#revealed-question {
  font-size: 1.5vw;
}

.answer-placeholder {
  font-size: 1vw;
}

.answer-bttn {
  font-size: 1vw;
}

.correct {
  background-color: green;
}

.incorrect {
  background-color: red;
}
</style>