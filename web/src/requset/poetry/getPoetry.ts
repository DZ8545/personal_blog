import axios from "axios";
const instance = axios.create({
  baseURL: "https://v1.jinrishici.com",
  timeout: 5000,
});
export default function () {
  return instance.get("/all.json");
}
