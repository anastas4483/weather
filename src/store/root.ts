import { createStore, Store } from "vuex";

export interface State {
  city: string;
  cities: string[];
}

export const store = createStore<State>({
  state: {
    city: "sdfg",
    cities: ["Voronezh", "Moscow", "Saint-Petersburg"],
  },
  mutations: {
    setCity(state, payload) {
      state.city = payload;
    },
  },
});
