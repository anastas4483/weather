import { defineStore } from "pinia";

export const useStore = defineStore("main", {
  state: () => ({
    city: "",
  }),
  actions: {
    setCity(newCity: string) {
      this.city = newCity;
    },
  },
});
