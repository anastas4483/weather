<script lang="ts">
import { State } from "@/store/root";
import { defineComponent, computed, ref } from "vue";
import { useStore } from "vuex";
import Properties from "./Properties.vue";
import Menu from "../assets/Menu.vue";
import { TabsPaneContext } from "element-plus";

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
    const activeName = ref("first");
    const onClickMenu = () => (isOpen.value = !isOpen.value);
    const handleClick = (tab: TabsPaneContext, event: Event) =>
      console.log(tab, event);
    return {
      isOpen,
      activeName,
      city: computed(() => store.state.city),
      weather: computed(() => store.state.weather),
      isLoading: computed(() => store.state.isLoading),
      onClickMenu,
      handleClick,
    };
  },
});
</script>

<template>
  <div class="wrapper">
    <div class="properties" v-loading="isLoading" :class="{ expanded: isOpen }">
      <div class="menuWrapper">
        <Menu :width="40" class="menu" @click="onClickMenu" />
      </div>
      <el-tabs
        v-if="city && isOpen"
        v-model="activeName"
        class="demo-tabs"
        @tab-click="handleClick"
      >
        <el-tab-pane label="Current" name="first">
          <Properties :weather="weather" :isOpen="isOpen" />
        </el-tab-pane>
        <el-tab-pane label="All day" name="second">Config</el-tab-pane>
      </el-tabs>
      <Properties v-if="city && !isOpen" :weather="weather" :isOpen="isOpen" />
      <div v-if="!city" class="placeholder">
        To see the weather info select a city and click the button bellow
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  height: 100%;

  .properties {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.359);
    backdrop-filter: blur(4px);
    height: 100%;
    padding-top: 30px;
    transition: all ease 0.5s;
    width: 100px;

    &.expanded {
      width: 250px !important;
      align-items: stretch;
      padding: 30px;
    }

    .menuWrapper {
      display: flex;
      justify-content: flex-end;

      .menu {
        cursor: pointer;
      }
    }
    .placeholder {
      color: #fff;
      text-align: center;
      padding: 15px;
      padding-top: 20px;
    }
  }
}
</style>
