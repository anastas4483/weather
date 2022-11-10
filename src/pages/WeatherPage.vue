<script lang="ts">
import { computed, defineComponent, ref, watch } from "vue";
import SelectCity from "@/components/SelectCity.vue";
import WidgetWeather from "@/components/WidgetWeather.vue";
import { useStore } from "vuex";

export default defineComponent({
  components: {
    WidgetWeather,
    SelectCity,
  },
  setup() {
    const store = useStore();
    const isLoading = ref(false);
    const isLoadingCityImg = computed(() => store.state.iLoadingCityImg);
    const isLoadingWeather = computed(() => store.state.isLoadingWeather);

    watch([isLoadingCityImg, isLoadingWeather], ([cityImg, weather]) => {
      console.log(weather);
      isLoading.value = cityImg || weather;
    });
    return {
      city: computed(() => store.state.city),
      isLoading,
    };
  },
});
</script>

<template>
  <div
    class="mainWrapper"
    v-loading="isLoading"
    :style="{
      backgroundImage: `url(${city?.imgSrc ?? require('../assets/bg.jpg')})`,
    }"
  >
    <SelectCity />
    <WidgetWeather />
  </div>
</template>

<style lang="scss">
.mainWrapper {
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
