import { createStore, Store } from "vuex";
import { unsplash } from "../utils/unsplash";
export interface City {
  name: string;
  latitude: number;
  longitude: number;
  imgSrc?: string;
}
export interface State {
  isLoadingWeather: boolean;
  isLoadingCityImg: boolean;
  city: City | null;
  cities: City[];
  weather: {
    temperature?: number;
    windSpeed?: number;
    windDirection?: string;
    humidity?: number;
  };
}
interface WeatherFromDto {
  current_weather: {
    temperature: number;
    windspeed: number;
    winddirection: number;
  };
  hourly: {
    time: string[];
    relativehumidity_2m: number[];
  };
}

export const store = createStore<State>({
  state: {
    isLoadingWeather: false,
    isLoadingCityImg: false,
    city: null,
    cities: [
      {
        latitude: 51.67204,
        longitude: 39.1843,
        name: "Voronezh",
      },
      {
        name: "Moscow",
        latitude: 55.75222,
        longitude: 37.61556,
      },
      {
        name: "Saint-Petersburg",
        latitude: 59.93863,
        longitude: 30.31413,
      },
    ],
    weather: {
      temperature: undefined,
      windSpeed: undefined,
      windDirection: undefined,
      humidity: undefined,
    },
  },
  mutations: {
    setCity(state, payload) {
      state.city = payload;
    },
    setWeather(state, payload) {
      state.weather = payload;
    },
    setIsLoadingCityImg(state, payload) {
      state.isLoadingCityImg = payload;
    },
    setIsLoadingWeather(state, payload) {
      state.isLoadingWeather = payload;
    },
  },
  actions: {
    getWeather({ state, commit }) {
      const getActualHumidity = ({
        time,
        relativehumidity_2m: humidity,
      }: {
        time: string[];
        relativehumidity_2m: number[];
      }): number => {
        const dateNow = new Date().toJSON().slice(0, 13);
        const actualDateIndex = time.findIndex((time) =>
          time.includes(dateNow)
        );
        return humidity[actualDateIndex];
      };

      const interpretateWindDirection = (windDirection: number) => {
        if (windDirection >= 23 && windDirection < 68) return "North - East";
        else if (windDirection >= 68 && windDirection < 113) return "North";
        else if (windDirection >= 113 && windDirection < 160)
          return "North - West";
        else if (windDirection >= 160 && windDirection < 200) return "West";
        else if (windDirection >= 200 && windDirection < 245)
          return "South - West";
        else if (windDirection >= 245 && windDirection < 295) return "South";
        else if (windDirection >= 295 && windDirection < 338)
          return "South - East";
        else if (
          (windDirection >= 338 && windDirection < 361) ||
          (windDirection >= 0 && windDirection < 23)
        )
          return "East";
      };
      state.city &&
        fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${state.city.latitude}&longitude=${state.city.longitude}&current_weather=true&hourly=relativehumidity_2m`
        )
          .then((response) => response.json())
          .then((response: WeatherFromDto) => {
            commit("setIsLoadingWeather", false);
            commit("setWeather", {
              temperature: response.current_weather.temperature,
              windSpeed: response.current_weather.windspeed,
              windDirection: interpretateWindDirection(
                response.current_weather.winddirection
              ),
              humidity: getActualHumidity(response.hourly),
            });
          })
          .catch((err) => console.error(err));
    },
    getCityImg({ state, commit }) {
      state.city &&
        unsplash.photos
          .getRandom({
            query: state.city.name.toLocaleLowerCase(),
            count: 1,
            orientation: "landscape",
          })
          .then((result) => {
            if (result.response) {
              commit("setIsLoadingCityImg", false);
              commit("setCity", {
                ...state.city,
                imgSrc: Array.isArray(result.response)
                  ? result.response[0].urls.regular
                  : result.response.urls.regular,
              });
            } else {
              console.log("error occurred: ", result.errors[0]);
            }
          });
    },
  },
});
