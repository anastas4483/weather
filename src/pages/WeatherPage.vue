<script lang="ts">
import { defineComponent } from "vue";
import SelectCity from "@/components/SelectCity.vue";
import WidgetWeather from "@/components/WidgetWeather.vue";

export default defineComponent({
  components: {
    WidgetWeather,
    SelectCity,
  },
});
</script>

<template>
  <div class="mainWrapper">
    <SelectCity />
    <WidgetWeather />
  </div>
</template>

<style lang="scss">
.mainWrapper {
  height: 100%;
  background-image: url(../assets/bg.jpg);
}
</style>
