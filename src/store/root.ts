import { createStore, Store } from "vuex";

export interface State {
  city: string;
  cities: string[];
  weather: {
    temperature: number | undefined;
    windSpeed: number | undefined;
    windDirection: "СВ" | "С" | "СЗ" | "З" | "Ю" | "ЮВ" | "В" | undefined;
  };
}

export const store = createStore<State>({
  state: {
    city: "sdfg",
    cities: ["Voronezh", "Moscow", "Saint-Petersburg"],
    weather: {
      temperature: undefined,
      windSpeed: undefined,
      windDirection: undefined,
    },
  },
  mutations: {
    setCity(state, payload) {
      state.city = payload;
    },
    setWeather(state, payload) {
      state.weather = payload;
    },

    //
  },
  actions: {
    async getWeather({ commit, dispatch }) {
      const interpretateWindDirection = (windDirection: number) => {
        if (windDirection >= 23 && windDirection < 68) return "СВ";
        else if (windDirection >= 68 && windDirection < 113) return "С";
        else if (windDirection >= 113 && windDirection < 160) return "СЗ";
        else if (windDirection >= 160 && windDirection < 200) return "З";
        else if (windDirection >= 203 && windDirection < 245) return "СВ";
        else if (windDirection >= 245 && windDirection < 295) return "Ю";
        else if (windDirection >= 295 && windDirection < 338) return "ЮВ";
        else if (windDirection >= 338 && windDirection < 360) return "В";
        else if (
          (windDirection >= 335 && windDirection < 361) ||
          (windDirection >= 0 && windDirection < 23)
        )
          return "В";
      };
      fetch(
        "https://api.open-meteo.com/v1/forecast?latitude=51.6720400&longitude=39.1843000&current_weather=true&hourly=relativehumidity_2m"
      )
        .then((response) => response.json())
        .then((response) => {
          commit("setWeather", {
            temperature: response.current_weather.temperature,
            windSpeed: response.current_weather.windspeed,
            windDirection: interpretateWindDirection(
              response.current_weather.winddirection
            ),
          });
        })
        .catch((err) => console.error(err));
    },
  },
});
