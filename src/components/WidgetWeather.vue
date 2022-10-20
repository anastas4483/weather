<script lang="ts">
import { State } from "@/store/root";
import { defineComponent, computed } from "vue";
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
    const store = useStore<State>();
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
      <span class="city"> &nbsp;{{ city?.name }}</span>
    </div>
    <div class="info">
      <div class="temperatureValue">
        <span class="value">{{ weather.temperature }}</span
        >°C
      </div>
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
        <span class="property humidity">
          <img
            :src="require('@/assets/humidity.png')"
            title="Humidity, %"
            width="30"
          />
          {{ weather.humidity }} %
        </span>
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

  .weatherIcon {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
  }

  .info {
    display: flex;
    flex-direction: column;
    gap: 22px;

    .temperatureValue {
      .value {
        font-size: 60px;
      }
    }

    .detail {
      display: flex;
      flex-direction: column;
      gap: 7px;

      .property {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 7px;
      }
    }
  }
}
</style>
