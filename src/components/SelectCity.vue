<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    const store = useStore();
    const { cities } = store.state;
    const city = ref("");
    watch(city, (value: string) => store.commit("setCity", value));
    return {
      city,
      cities,
    };
  },
});
</script>
<template>
  <el-select class="m-2" v-model="city" placeholder="Select" size="large">
    <el-option
      v-for="(item, index) in cities"
      :key="item + index"
      :label="item"
      :value="item"
    />
  </el-select>
</template>
<style lang=""></style>
