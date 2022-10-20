<script lang="ts">
import { computed, defineComponent, onMounted } from "vue";
import SelectCity from "@/components/SelectCity.vue";
import WidgetWeather from "@/components/WidgetWeather.vue";
import { useStore } from "vuex";
import { State } from "@/store/root";

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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
}
</style>
