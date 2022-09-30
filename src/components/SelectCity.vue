<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { mapActions } from "pinia";
import { useStore } from "@/store/root";
@Options({
  methods: {
    ...mapActions(useStore, ["setCity"]),
  },
})
export default class SelectCity extends Vue {
  onChangeCity() {
    console.log(345);
  }
}
</script>
<template>
  <div>
    <v-autocomplete
      :items="['Voronezh', 'Moscow', 'Saint-Petersburg']"
      @change="onChangeCity"
      label="Select a city"
    >
    </v-autocomplete>
  </div>
</template>
<style lang=""></style>
