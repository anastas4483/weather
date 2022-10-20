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
  * {
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
      "Microsoft YaHei", Arial, sans-serif;
    color: #e9e9e9;
  }
}
</style>
