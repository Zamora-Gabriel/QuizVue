<template>
  <header>
    <h1>Welcome Host</h1>
    <br />
    <h1>Please Select a Game to Play</h1>
  </header>
</template>

<script>
import { defineComponent } from "@vue/composition-api";

export default {
  name: "HostLogin",
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
</style>