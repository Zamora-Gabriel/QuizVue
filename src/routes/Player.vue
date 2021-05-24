<template>
  <section class="player-container">
    <div class="player-home">
      <center>
        <h1>Welcome {{ name }}</h1>
        <br />
        <h1>Please Type Your Nickname</h1>
        <br />
        <br />
        <form>
          <input type="text" id="nick-ph" name="nickname-area" />
          <br />
          <br />
          <a href="#" v-on:click="submit()">Submit</a>
        </form>
      </center>
    </div>

    <!--Stand by screen-->
    <div class="player-standby">
      <center>
        <div id="player-nickname"></div>
        <br />
        <h1>Score:</h1>
        <span id="score-val">0</span>
        <br />
        <button v-on:click="goToAnswer()" id="standby-bttn">
          Debug: Go to answer screen
        </button>
      </center>
    </div>

    <!--Submitting answers-->
    <div class="player-answers">
      <center>
        <div id="revealed-question">
          Question: Which reptile is mostly known because it camuflages?
        </div>
        <br />
        <h1>Please Type Your Answer</h1>
        <br />
        <br />
        <form>
          <input type="text" id="answer-ph" name="answer-area" />
          <br />
          <br />
          <a href="#" v-on:click="submitAns()">Submit</a>
        </form>
      </center>
    </div>
  </section>
</template>

<script>
import controller from "@/mixins/controller.js";

class PlayerController extends controller {
  constructor(name, subComponentList = []) {
    super(name, subComponentList);
    this.vm = {};
    this.props = {
      name: String,
    };

    this.methods = {
      submit() {
        let text = document.querySelector("#nick-ph").value;

        if (text == "" || text == " ") {
          alert("Please type a nickname");
          return;
        }

        alert(`Nickname is: ${text}`);

        let newNick = document.querySelector("#player-nickname");
        let nickname = document.createTextNode(`Welcome ${text}`);
        newNick.appendChild(nickname);

        let playHome = document.querySelector(".player-home");
        playHome.style.display = "none";

        let playStand = document.querySelector(".player-standby");
        playStand.style.display = "block";
      },
      goToAnswer() {
        let playStand = document.querySelector(".player-standby");
        playStand.style.display = "none";

        let playAns = document.querySelector(".player-answers");
        playAns.style.display = "block";
      },
      submitAns() {
        let text = document.querySelector("#answer-ph").value;

        if (text == "" || text == " ") {
          alert("Please type an answer");
          return;
        }

        alert(`Answer is: ${text}`);

        let playAns = document.querySelector(".player-answers");
        playAns.style.display = "none";

        let playStand = document.querySelector(".player-standby");
        playStand.style.display = "block";
      },
    };
  }

  onMounted() {
    // Hide all screens but the login one
    let playStand = document.querySelector(".player-standby");
    playStand.style.display = "none";

    let playAns = document.querySelector(".player-answers");
    playAns.style.display = "none";
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
  color: black;
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