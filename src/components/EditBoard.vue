<!--Copyright 2021 (C) Gabriel Zamora-->
<template>
  <section>
    <div class="host-questions">
      <center><h6>Editor</h6></center>
      <br />
      <center>
        <h2>Set Theme</h2>
        <form @submit.prevent="updateTheme()">
          <input type="text" id="theme-ph" name="nickname-area" />
          <input type="submit" value="Save theme" />
        </form>
      </center>
      <div class="question-container">
        <div class="question-col">
          <h2>Category 1:</h2>
          <button
            v-on:click="editQuest(1)"
            class="question-pholder"
            id="quest1"
          >
            100
          </button>
          <button
            v-on:click="editQuest(4)"
            class="question-pholder"
            id="quest2"
          >
            200
          </button>
          <button
            v-on:click="editQuest(7)"
            class="question-pholder"
            id="quest3"
          >
            300
          </button>
          <button
            v-on:click="editQuest(10)"
            class="question-pholder"
            id="quest4"
          >
            400
          </button>
          <button
            v-on:click="editQuest(13)"
            class="question-pholder"
            id="quest5"
          >
            500
          </button>
        </div>
        <div class="question-col">
          <h2>Category 2:</h2>
          <button
            v-on:click="editQuest(2)"
            class="question-pholder"
            id="quest6"
          >
            100
          </button>
          <button
            v-on:click="editQuest(5)"
            class="question-pholder"
            id="quest7"
          >
            200
          </button>
          <button
            v-on:click="editQuest(8)"
            class="question-pholder"
            id="quest8"
          >
            300
          </button>
          <button
            v-on:click="editQuest(11)"
            class="question-pholder"
            id="quest9"
          >
            400
          </button>
          <button
            v-on:click="editQuest(14)"
            class="question-pholder"
            id="quest10"
          >
            500
          </button>
        </div>
        <div class="question-col">
          <h2>Category 3:</h2>
          <button
            v-on:click="editQuest(3)"
            class="question-pholder"
            id="quest11"
          >
            100
          </button>
          <button
            v-on:click="editQuest(6)"
            class="question-pholder"
            id="quest12"
          >
            200
          </button>
          <button
            v-on:click="editQuest(9)"
            class="question-pholder"
            id="quest13"
          >
            300
          </button>
          <button
            v-on:click="editQuest(12)"
            class="question-pholder"
            id="quest14"
          >
            400
          </button>
          <button
            v-on:click="editQuest(15)"
            class="question-pholder"
            id="quest15"
          >
            500
          </button>
        </div>
      </div>
    </div>
    <!--Button to save editted questions-->
    <center>
      <button id="save-questions" @click="submitInfo()">Save Questions</button>
    </center>

    <!-- modal for editing questions-->
    <div class="modal-overlay" v-if="showModal"></div>
    <div class="modal" v-if="showModal">
      <h5>Edit question {{ QuestNum }}:</h5>
      <br />
      <form @submit.prevent="updateQuest()">
        <input type="text" id="quest-ph" name="nickname-area" />
        <br />
        <br />
        <input type="submit" value="join" />
      </form>
    </div>
  </section>
</template>
<script>
import Controller from "@/mixins/controller";

class QuestEditController extends Controller {
  constructor(name, subComponentList = []) {
    super(name, subComponentList);
    this.vm = {
      showModal: false,
      QuestNum: 0,
      QuestArr: [
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
      ],
    };

    this.injectGetters(["theQuestArr", "theTheme"]);

    this.injectActions([`setQuestArr`, `setTheme`]);
  }

  editQuest(questNum) {
    /*Edit the question that was clicked
     */
    this.showModal = true;
    this.QuestNum = questNum;
  }

  updateQuest() {
    let text = document.querySelector("#quest-ph").value;

    if (text == "" || text == " ") {
      alert("Please type a question");
      return;
    }

    this.QuestArr[this.QuestNum] = text;
    this.showModal = false;
  }

  updateTheme() {
    let text = document.querySelector("#theme-ph").value;

    if (text == "" || text == " ") {
      alert("Please type a theme to be saved");
      return;
    }

    this.setTheme(text);
  }

  submitInfo() {
    this.setQuestArr(this.QuestArr);
    alert("Questions updated");
  }
}

export default new QuestEditController("pgEdit");
</script>

<style>
.question-container {
  display: flex;
  justify-content: center;
}

h6 {
  color: white;
  font-size: 3vh;
}

h5 {
  color: black;
  font-size: 2vh;
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

.modal-overlay {
  position: absolute;
  top: 0;
  left: 12vw;
  bottom: 5.5vh;
  right: 0;
  z-index: 100;
  background: rgba(0, 0, 0, 0.4);
}

.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: gainsboro;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 3px 3px rgba(0, 0, 0, 0.4);
  z-index: 200;
}

#save-questions {
  font-size: 2.5vh;
}

#theme-ph {
  margin-right: 1vw;
}
</style>