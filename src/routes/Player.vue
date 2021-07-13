<template>
  <section class="player-container">
    <div v-if="showHome" class="player-home">
      <center>
        <h1>Welcome {{ name }}</h1>
        <br />
        <h1>Please Type Your Nickname</h1>
        <br />
        <br />
        <form @submit.prevent="submitText()">
          <input type="text" id="nick-ph" name="nickname-area" />
          <br />
          <br />
          <input type="submit" value="join" />
        </form>
      </center>
    </div>

    <!--Stand by screen-->
    <div v-if="showStandby && !questionFlagCheck" class="player-standby">
      <center>
        <div id="player-nickname">Welcome {{ theUser }}</div>
        <br />
        <h1>Score:</h1>
        <span id="score-val">{{ theScore }}</span>
        <br />
        <button v-on:click="refreshFlag()" id="button-ses">
          Refresh question
        </button>
      </center>
    </div>

    <!--Submitting answers-->
    <div v-if="questionFlagCheck" class="player-answers">
      <center>
        <div id="revealed-question">Question: {{ theQuestion }}</div>
        <br />
        <h1>Please Type Your Answer</h1>
        <br />
        <br />
        <form @submit.prevent="submitAns()">
          <input type="text" id="answer-ph" name="answer-area" />
          <br />
          <br />
          <input type="submit" value="Submit" />
        </form>
        <button v-on:click="refreshFlag()" id="button-ses">
          Refresh question flag
        </button>
      </center>
    </div>
  </section>
</template>

<script>
import controller from "@/mixins/controller.js";

class PlayerController extends controller {
  constructor(name, subComponentList = []) {
    super(name, subComponentList);
    this.vm = {
      showHome: true,
      showStandby: false,
      showAnswers: false,
    };
    this.props = {
      name: String,
    };

    this.injectGetters([
      `theUser`,
      `thePlayerList`,
      `theAnswer`,
      `theUserAns`,
      `theAnswerList`,
      `theQuestion`,
      "theScore",
      "questionFlagCheck",
    ]);

    this.injectActions([
      `setUser`,
      `addPlayer`,
      `setAnswer`,
      `addAnswer`,
      `addUserAnswer`,
      `setPlayerAdded`,
      `connectUser`,
      `loadPlayerList`,
      `getQuestionFlag`,
    ]);
  }
  submitText() {
    let text = document.querySelector("#nick-ph").value;

    if (text == "" || text == " ") {
      alert("Please type a nickname");
      return;
    }

    //this.setUser(text);
    //this.addPlayer(text);

    // Send post to server
    this.connectUser(text);

    //this.loadPlayerList();

    this.showHome = false;
    this.showStandby = true;

    this.setPlayerAdded(true);
  }

  refreshFlag() {
    this.getQuestionFlag();
  }

  submitAns() {
    let text = document.querySelector("#answer-ph").value;

    if (text == "" || text == " ") {
      alert("Please type an answer");
      return;
    }

    this.setAnswer(text);
    this.addUserAnswer(this.theUser);
    this.addAnswer(text);

    alert(
      `Answer is: ${this.theAnswer} \n User: ${
        this.theUserAns[this.theUserAns.length - 1]
      }`
    );
  }
}

export default new PlayerController("gsPlayer");
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
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

  background-image: url("https://t3.ftcdn.net/jpg/02/42/46/98/360_F_242469806_Fxz3wrk48vTvQsbQxd5IMClGNhKZBkeH.jpg");
  background-repeat: no-repeat;
  background-size: 80vw 78vh;

  color: white;
  height: 78vh;
  width: 80vw;
}

/*Login Styles*/
.player-home {
  padding-top: 1vw;
}

#game-select {
  font-size: 3vw;
  margin-top: 3vw;
}

h1 {
  font-size: 2vw;
  color: white;
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

/*Player Standby styles*/
.player-standby {
  font-size: 2vw;
}

#standby-bttn {
  font-size: 1vw;
}

/* Player Answer styles*/
.player-answers {
  padding-top: 1vw;
}

#revealed-question {
  font-size: 1.5vw;
}

.answer-placeholder {
  font-size: 1vw;
}

.answer-bttn {
  font-size: 1vw;
}
</style>