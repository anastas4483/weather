import { defineStore } from "pinia";

export const useStore = defineStore("main", {
  state: () => ({
    city: "dfghjmnbvc",
  }),
  actions: {
    setCity(newCity: string) {
      this.city = newCity;
    },
  },
});
