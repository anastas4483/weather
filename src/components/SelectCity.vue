<script lang="ts">
import { State, City } from "@/store/root";
import { defineComponent, ref, watch } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    const store = useStore<State>();
    const { cities } = store.state;
    const city = ref<City | null>(null);
    watch(city, (value) => {
      store.commit("setIsLoadingWeather", true);
      store.commit("setIsLoadingCityImg", true);
      store.commit("setCity", value);
      store.dispatch("getWeather");
      store.dispatch("getCityImg");
    });

    return {
      city,
      cities,
    };
  },
});
</script>
<template>
  <el-select v-model="city" value-key="name" placeholder="Select">
    <el-option
      v-for="(item, index) in cities"
      :key="item.name + index"
      :label="item.name"
      :value="item"
    />
  </el-select>
</template>
<style lang="scss">
.el-select {
  position: absolute !important;
  left: 50%;
  top: 30px;

  .el-input__wrapper {
    background: #0000006e;
    padding: 14px;
    box-shadow: 0 0 0 2px #ffffffa1;

    .el-input__inner {
      color: #fff;
      font-size: 20px;
    }
  }
}
</style>
