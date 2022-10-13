<script lang="ts">
import { defineComponent } from "vue";
import SelectCity from "@/components/SelectCity.vue";
import WidgetWeather from "@/components/WidgetWeather.vue";

export default defineComponent({
  components: {
    WidgetWeather,
    SelectCity,
  },

  setup() {
    const onClickText = () => {
      console.log("sssss");
    };

    return {
      onClickText,
    };
  },
});
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
