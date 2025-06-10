import axios from "axios";

const instance = axios.create({
  baseURL: "https://fakestoreapi.com"
});

//------------------------------------------------------------- Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    config.chutiya = "Aayush chutiya hai";
    console.log("Request ---> ", config);
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

//-------------------------------------------------------- Add a response interceptor
instance.interceptors.response.use(
  function (response) {
    return response.data;
    // return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);
export default instance;
