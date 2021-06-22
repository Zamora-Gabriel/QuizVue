<template>
  <section class="host-container">
    <!--Questions Screen-->
    <pg-edit></pg-edit>
  </section>
</template>

<script>
import controller from "@/mixins/controller.js";

import pgEdit from "@/components/EditBoard.vue";

class EditController extends controller {
  constructor(name, subComponentList = []) {
    super(name, subComponentList);
    this.vm = {};
    this.props = {
      name: String,
    };
  }
}

export default new EditController("gsEditor", { pgEdit });
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

  background-image: url("https://i.pinimg.com/originals/3f/e1/23/3fe1234501fe1ee9379e8b460cb84385.jpg");
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