<script>
import { Vue, Options } from "vue-class-component";
import WidgetWeather from "@/components/WidgetWeather";
import SelectCity from "@/components/SelectCity";

@Options({
  components: {
    WidgetWeather,
    SelectCity,
  },
})
export default class WeatherPage extends Vue {}
</script>

<template lang="">
  <div class="mainWrapper">
    <SelectCity />
    <WidgetWeather />
  </div>
</template>

<style lang="scss">
.mainWrapper {
  display: flex;
  flex-direction: column;
}
</style>
