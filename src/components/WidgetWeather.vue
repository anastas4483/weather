<script lang="ts">
import { State } from "@/store/root";
import { defineComponent, computed, ref } from "vue";
import { useStore } from "vuex";
import Properties from "./Properties.vue";
import Menu from "../assets/Menu.vue";

export default defineComponent({
  props: {
    msg: String,
  },
  components: {
    Properties,
    Menu,
  },

  setup() {
    const store = useStore<State>();
    const isOpen = ref(true);
    const onClickMenu = () => (isOpen.value = !isOpen.value);
    return {
      isOpen,
      city: computed(() => store.state.city),
      weather: computed(() => store.state.weather),
      isLoading: computed(() => store.state.isLoading),
      onClickMenu,
    };
  },
});
</script>

<template>
  <div class="wrapper" v-loading="isLoading">
    <div class="properties">
      <div class="menuWrapper">
        <Menu :width="40" class="menu" @click="onClickMenu" />
      </div>
      <Properties :weather="weather" v-if="city" :isOpen="isOpen" />
      <div v-else class="placeholder">
        To see the weather info select a city and click the button bellow
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  height: 100%;
  background-color: cornflowerblue;
  background-image: url(../assets/bg.jpg);

  .properties {
    background-color: rgba(0, 0, 0, 0.359);
    backdrop-filter: blur(4px);
    height: 100%;
    width: 300px;
    padding: 30px;

    .menuWrapper {
      display: flex;
      justify-content: flex-end;

      .menu {
        cursor: pointer;
      }
    }
  }
}
</style>
