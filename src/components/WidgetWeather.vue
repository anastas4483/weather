<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    msg: String,
  },
  components: {},
})
export default class WidgetWeather extends Vue {
  msg!: string;
}
</script>

<template>
  <div class="wrapper">
    <div class="weatherIcon">
      <img
        :src="require('@/assets/weather/cloudy.png')"
        title="icon depends on time, season, cloud,storm sun etc. Imagine scripts to
      definetly icons"
        width="200"
      />
      <span class="city">Voronezh</span>
    </div>
    <div class="info">
      <div class="temperatureValue">TEMPERATURE</div>
      <div class="detail">
        <span class="windSpeed"> icon speed </span>
        <span class="windDirection"> icon direction </span>
        <span class="humidity"> icon humidity </span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: row;
  background-color: cornflowerblue;
  border-radius: 7px;
  min-height: 400px;
  justify-content: center;
  align-items: center;
  gap: 50px;
}

.info {
  display: flex;
  flex-direction: column;
}

.weatherIcon {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.detail {
  display: flex;
  flex-direction: column;
}
</style>
