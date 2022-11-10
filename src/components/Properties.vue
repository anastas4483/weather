<script lang="ts">
import { defineComponent } from "vue";
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
});
</script>

<template>
  <div class="info" :class="{ expanded: isOpen }">
    <div class="temperatureValue">
      <span class="value"> {{ weather.temperature }} </span>°C
    </div>
    <div class="detail" :class="{ expanded: isOpen }">
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
<style lang="scss" scoped>
.info {
  display: flex;
  flex-direction: column;
  gap: 22px;
  color: #fff;
  transition: all ease 0.5s;
  padding-top: 55px;

  &.expanded {
    padding-top: 0;

    .value {
      font-size: 60px;
    }
  }

  .temperatureValue {
    .value {
      font-size: 38px;
      transition: all ease 0.5s;
    }
  }

  .detail {
    display: flex;
    flex-direction: column;
    font-size: 20px;
    gap: 30px;
    align-items: center;
    transition: all ease 0.5s;

    &.expanded {
      align-items: flex-start;
    }

    .property {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 7px;
      white-space: nowrap;
    }
  }
}
</style>
