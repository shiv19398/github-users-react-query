import axios from "axios";

export const getUsers = () => {
  return axios.get("https://api.github.com/users");
};
