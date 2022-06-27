import request from "./api";

export const login = (user) => {
  return request({
    method: "POST",
    url: "/user/login",
    data: user,
  });
};
