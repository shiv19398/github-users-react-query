import { useQuery } from "react-query";
import { getUsers } from "../services/user.service";

//returns the user object which has same login name as passed in the arguments
export const useGetUserFromUserName = (userName) => {
  return useQuery("users", getUsers, {
    select: (data) => data.data.find((user) => user.login === userName),
    enabled: false,
  });
};
