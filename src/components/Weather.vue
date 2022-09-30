<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    msg: String,
  },
  components: {},
})
export default class Weather extends Vue {
  msg!: string;
}
</script>

<template>
  <div class="wrapper">
    <div class="weatherIcon">
      big icon depends on time, season, cloud,storm sun etc. Imagine scripts to
      definetly icons
    </div>
    <div class="temperatureValue"></div>
    <div class="detail">
      <span class="windSpeed"> icon speed </span>
      <span class="windDirection"> icon direction </span>
      <span class="humidity"> icon humidity </span>
    </div>
  </div>
</template>

<style lang="scss">
.wrapper {
  width: 80%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
