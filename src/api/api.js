import request from "./base";

export const loginApi = (user) => {
  return request({
    method: "POST",
    url: "/userAuth/login",
    data: user,
  });
};

export const registerApi = (user) => {
  return request({
    method: "POST",
    url: "/userAuth/register",
    data: user,
  });
};

export const testCookieApi = () => {
  return request({
    method: "GET",
    url: "/test",
  });
};
