<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Weather from "./components/Weather.vue";
import SelectPlace from "./components/SelectPlace.vue";

@Options({
  components: {
    Weather,
    SelectPlace,
  },
})
export default class App extends Vue {}
</script>

<template>
  <SelectPlace />
  <Weather />
  sdf
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
