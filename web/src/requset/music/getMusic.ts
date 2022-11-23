import axios from "axios";
const instance = axios.create({
  baseURL: "https://api.uomg.com/api", //https://api.uomg.com/api/rand.music?sort=热歌榜&format=json
  timeout: 5000,
});
export default function () {
  return instance.get(`/rand.music?sort=热歌榜&format=json`);
}
