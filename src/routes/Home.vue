<!--
VFS VUE Single File Component

<pg-home user="User"></pg-home>

Copyright (c) 2018. Scott Henshaw, Kibble Online Inc. All Rights Reserved.
-->
<template>
  <section class="home-container">
    <div class="home">
      <center>
        <h2>Welcome to {{ name }}</h2>
        <form @submit.prevent="startGame()">
          <label style="color: black">Role: </label>
          <select name="roles" id="role-select">
            <!--Role selector-->
            <option
              v-for="(roles, index) in roleNames"
              :key="roles"
              :v-model="index"
            >
              {{ roles }}
            </option>
          </select>
          <br />
          <br />
          <br />
          <input type="submit" value="Start" />
        </form>
      </center>
    </div>
  </section>
</template>
<script>
import Controller from "@/mixins/controller";

class HomeController extends Controller {
  constructor(name, subComponentList = []) {
    super(name, subComponentList);
    this.vm = {
      roleNames: ["Host", "Player", "Board"],
    };
    this.props = {
      name: String,
    };
  }

  startGame() {
    var role = document.querySelector("#role-select");
    this.$router.push("/" + role.value);
  }
}

export default new HomeController("pgHome");
</script>
<style scoped>
h2 {
  color: black;
  padding: 2vh;
  font-size: 6vh;
}
/* Local styles for this template */
.home-container {
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

.home {
  padding-top: 1vw;
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
</style>
