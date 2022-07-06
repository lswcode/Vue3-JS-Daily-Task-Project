import request from "./base";

export const loginApi = (user) => {
  return request({
    method: "POST",
    url: "/login",
    data: user,
  });
};
