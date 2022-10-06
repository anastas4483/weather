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

<style lang="scss"></style>
