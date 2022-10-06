<script>
import { Vue, Options } from "vue-class-component";
import WidgetWeather from "@/components/WidgetWeather";
import SelectCity from "@/components/SelectCity";
import { mapState, mapActions } from "pinia";
import { useStore } from "@/store/root";

@Options({
  components: {
    WidgetWeather,
    SelectCity,
  },
  methods: {
    ...mapActions(useStore, ["setCity"]),
  },
  computed: {
    ...mapState(useStore, ["city"]),
  },
})
export default class WeatherPage extends Vue {
  onClickText() {
    this.setCity("sssss");
  }
}
</script>

<template lang="">
  <div class="mainWrapper">
    <SelectCity />
    <WidgetWeather />
    <button @click="onClickText">{{ city }}</button>
  </div>
</template>

<style lang="scss">
.mainWrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
