import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "030b9aa3b3b74002ba911a63d988532f",
  },
});
