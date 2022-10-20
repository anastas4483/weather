<script lang="ts">
import { defineComponent, onMounted } from "vue";
import SelectCity from "@/components/SelectCity.vue";
import WidgetWeather from "@/components/WidgetWeather.vue";
import { useStore } from "vuex";
import { State } from "@/store/root";

export default defineComponent({
  components: {
    WidgetWeather,
    SelectCity,
  },

  setup() {
    const store = useStore<State>();
    onMounted(() => store.dispatch("getWeather"));
  },
});
</script>

<template>
  <div class="mainWrapper">
    <SelectCity />
    <WidgetWeather />
    <button>Get the weather</button>
  </div>
</template>

<style lang="scss">
.mainWrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
}
</style>
