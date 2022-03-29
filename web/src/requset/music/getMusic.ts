import axios from "axios";
const instance = axios.create({
  baseURL: "https://api.uomg.com/api",
  timeout: 5000,
});
// export default instance.get("/rand.music?sort=热歌榜&format=json");
export default instance.get(
  `/rand.music?format=json&time=` + Math.random() * 10
);
