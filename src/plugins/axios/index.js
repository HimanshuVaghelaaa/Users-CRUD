import axios from "axios";
import Vue from "vue";

const API_ENDPOINT = "http://localhost:3000/";

let config = {
  baseURL: `${API_ENDPOINT}`,
};

const axiosClient = axios.create(config);

axiosClient.interceptors.request.use((config) => {
  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosClient;

Vue.use({
  install(Vue) {
    Vue.prototype.$http = axiosClient;
  },
});
