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
      store.commit("setIsLoading", true);
      store.commit("setCity", value);
      store.dispatch("getWeather", city);
    });

    return {
      city,
      cities,
    };
  },
});
</script>
<template>
  <el-select
    class="m-2"
    v-model="city"
    value-key="name"
    placeholder="Select"
    size="large"
  >
    <el-option
      v-for="(item, index) in cities"
      :key="item.name + index"
      :label="item.name"
      :value="item"
    />
  </el-select>
</template>
<style lang=""></style>
