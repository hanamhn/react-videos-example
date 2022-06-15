import axios from "axios";

const KEY = "AIzaSyA-x-z_K2ahGBFpEEZQhhoyjU39jGvr88M";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
