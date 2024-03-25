import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "29d5f75681fd10e060ce63c524c3a99e",
    language: "ko-KR"
  }
})

export default instance;