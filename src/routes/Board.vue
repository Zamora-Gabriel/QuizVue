<template>
  <section class="player-container">
    <!--Board Screen-->
    <div class="board-home">
      <div class="question-container">
        <div class="question-col">
          <h2>Category 1: Reptiles</h2>
          <div class="question-pholder" id="quest1">100</div>
          <div class="question-pholder" id="quest2">200</div>
          <div class="question-pholder" id="quest3">300</div>
          <div class="question-pholder" id="quest4">400</div>
          <div class="question-pholder" id="quest5">500</div>
        </div>
        <div class="question-col">
          <h2>Category 2: Mammals</h2>
          <div class="question-pholder" id="quest6">100</div>
          <div class="question-pholder" id="quest7">200</div>
          <div class="question-pholder" id="quest8">300</div>
          <div class="question-pholder" id="quest9">400</div>
          <div class="question-pholder" id="quest10">500</div>
        </div>
        <div class="question-col">
          <h2>Category 3: Birds</h2>
          <div class="question-pholder" id="quest11">100</div>
          <div class="question-pholder" id="quest12">200</div>
          <div class="question-pholder" id="quest13">300</div>
          <div class="question-pholder" id="quest14">400</div>
          <div class="question-pholder" id="quest15">500</div>
        </div>
      </div>
      <center>
        <button v-on:click="goToQuestion()" id="standby-bttn">
          Debug: Go to question screen
        </button>
      </center>
    </div>

    <!--Stand by screen-->
    <div class="board-question">
      <center>
        Question:
        <div id="question-ph">
          Which reptile is mostly known because it camuflages?
        </div>
        <br />
        <h2>Type your answer in your player screen</h2>
        <button v-on:click="returnToBoard()" id="standby-bttn">
          Debug: Go to board screen
        </button>
      </center>
    </div>
  </section>
</template>

<script>
import controller from "@/mixins/controller.js";

class BoardController extends controller {
  constructor(name, subComponentList = []) {
    super(name, subComponentList);
    this.vm = {};
    this.props = {
      name: String,
    };

    this.methods = {
      goToQuestion() {
        let boardHome = document.querySelector(".board-home");
        boardHome.style.display = "none";

        let boardQuestion = document.querySelector(".board-question");
        boardQuestion.style.display = "block";
      },
      returnToBoard() {
        let boardHome = document.querySelector(".board-question");
        boardHome.style.display = "none";

        let boardQuestion = document.querySelector(".board-home");
        boardQuestion.style.display = "block";
      },
    };
  }

  onMounted() {
    // Hide all screens but the login one
    let boardQuestion = document.querySelector(".board-question");
    boardQuestion.style.display = "none";
  }
}

export default new BoardController("gsBoard");
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
.player-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  margin: 2vw;
  border: 1px solid black;
  background-color: lightgray;
  color: black;
  height: 78vh;
  width: 80vw;
}

/*Board home styles*/

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

/*Board question display styles*/
.board-question {
  font-size: 2vw;
}

#standby-bttn {
  font-size: 1vw;
}
</style>