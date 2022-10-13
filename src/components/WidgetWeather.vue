<script lang="ts">
import { defineComponent, ref, computed, onMounted } from "vue";
import { useStore } from "vuex";
import Compass from "../assets/Compass.vue";

export default defineComponent({
  props: {
    msg: String,
  },
  components: {
    Compass,
  },

  setup() {
    const store = useStore();
    onMounted(() => store.dispatch("getWeather"));
    return {
      city: computed(() => store.state.city),
      weather: computed(() => store.state.weather),
    };
  },
});
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
      <span class="city">{{ city }}</span>
    </div>
    <div class="info">
      <div class="temperatureValue">{{ weather.temperature }} C</div>
      <div class="detail">
        <span class="property windSpeed">
          <img
            :src="require('@/assets/wind.png')"
            title="Wind speed, km/h"
            width="30"
          />
          {{ weather.windSpeed }}
        </span>
        <span class="property windDirection">
          <Compass :width="25" :height="25" />
          {{ weather.windDirection }}
        </span>
        <span class="property humidity"> icon humidity </span>
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

  .property {
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
    gap: 7px;
  }
}
</style>
