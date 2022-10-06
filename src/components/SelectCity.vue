<script>
import { Vue, Options } from "vue-class-component";
import { mapActions, mapState } from "pinia";
import { useStore } from "@/store/root";

@Options({
  methods: {
    ...mapActions(useStore, ["setCity"]),
    onClickText() {
      console.log(456);
      // this.setCity(newCity)
    },
  },
})
export default class SelectCity extends Vue {
  city2 = "";
}
</script>
<template>
  <div>
    <v-autocomplete
      :items="['Voronezh', 'Moscow', 'Saint-Petersburg']"
      @change="onClickText"
      v-model="city2"
      label="Select a city"
    >
    </v-autocomplete>
  </div>
</template>
<style lang=""></style>
