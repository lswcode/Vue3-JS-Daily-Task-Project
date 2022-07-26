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

// 用户登录后返回用户信息
export const getUserInfo = () => {
  return request({
    method: "GET",
    url: `/userInfo`,
  });
};
