<script lang="ts">
import { Options, Vue } from "vue-class-component";
import WeatherPage from "./pages/WeatherPage.vue";

@Options({
  components: {
    WeatherPage,
  },
})
export default class App extends Vue {}
</script>

<template>
  <WeatherPage />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
