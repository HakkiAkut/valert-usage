<template>
  <div id="app">
    <v-alert />
    <router-view />
  </div>
</template>
<script>
import VAlert from "@hakut/valert";
export default {
  name: "App",
  components: {
    VAlert,
  },
};
</script>
<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  width: 100%;
  height: 100vh;
  background-color: #e5eaf9;
}

#app {
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
}
.container {
  justify-content: center;
  display: flex;
  width: 1240px;
}
</style>
