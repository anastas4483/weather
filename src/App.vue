<script lang="ts">
import { defineComponent } from "vue";
import WeatherPage from "./pages/WeatherPage.vue";

export default defineComponent({
  components: {
    WeatherPage,
  },
});
</script>

<template>
  <WeatherPage />
</template>

<style lang="scss">
#app {
  height: 100vh;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
