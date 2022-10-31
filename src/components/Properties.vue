<script lang="ts">
import { State } from "@/store/root";
import { defineComponent } from "vue";
import { useStore } from "vuex";
import Compass from "../assets/Compass.vue";
import Wind from "../assets/Wind.vue";
import Humidity from "../assets/Humidity.vue";

export default defineComponent({
  props: ["weather", "isOpen"],
  components: {
    Compass,
    Wind,
    Humidity,
  },

  setup() {
    const store = useStore<State>();
    return {
      //   city: computed(() => store.state.city),
      //   weather: computed(() => store.state.weather),
      //   isLoading: computed(() => store.state.isLoading),
    };
  },
});
</script>

<template>
  <div class="info">
    <div class="temperatureValue">
      <span class="value">{{ weather.temperature }}</span
      >°C
    </div>
    <div class="detail">
      <span class="property windSpeed">
        <Wind :width="35" />
        <span v-if="isOpen">{{ weather.windSpeed }}</span>
      </span>
      <span class="property windDirection">
        <Compass :width="35" :height="35" />
        <span v-if="isOpen">{{ weather.windDirection }}</span>
      </span>
      <span class="property humidity">
        <Humidity :width="35" />
        <span v-if="isOpen">{{ weather.humidity }}%</span>
      </span>
    </div>
  </div>
</template>
<style lang="scss">
.info {
  display: flex;
  flex-direction: column;
  gap: 22px;
  color: #fff;

  .temperatureValue {
    .value {
      font-size: 60px;
    }
  }

  .detail {
    display: flex;
    flex-direction: column;
    font-size: 20px;
    gap: 30px;
    padding-left: 30px;
    align-items: flex-start;

    .property {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 7px;
    }
  }
}
</style>
