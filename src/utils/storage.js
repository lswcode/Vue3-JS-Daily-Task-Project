//  封装本地存储模块
export const getItem = (name) => {
  const data = window.localStorage.getItem(name);
  // 为什么把 JSON.parse 放到 try-catch 中？
  // 因为 data 可能不是 JSON 格式字符串
  try {
    return JSON.parse(data); // 尝试把 data 转为 JS 对象
  } catch (err) {
    return data; // data 不是 JSON 格式字符串，直接原样返回
  }
};

export const setItem = (name, value) => {
  // 如果 value 是对象，就把 value 转为 JSON 格式字符串再存储
  if (typeof value === "object") {
    value = JSON.stringify(value);
  }
  window.localStorage.setItem(name, value);
};

export const removeItem = (name) => {
  window.localStorage.removeItem(name);
};

// ------------设置cookie-----------------------------------------------
export const setCookie = (key, value, d) => {
  // 第三个参数表示过期时间，单位为天
  var oDate = new Date(); //创建日期对象
  oDate.setDate(oDate.getDate() + d); //设置过期时间
  document.cookie = key + "=" + value + ";expires=" + oDate.toGMTString(); //设置cookie的名称，数值，过期时间
};

// ------------获取cookie-----------------------------------------------
// 因为cookie存储的是字符串格式，并且使用的是等号赋值'firstname=John; lastname=Smith'，所以不能通过键名获取到对应的值，需要手动封装函数，分隔字符串
export const getCookie = (key) => {
  var arr1 = document.cookie.split("; "); //将cookie按 ; 分割，数组元素为 cookie名=cookie值
  for (var i = 0; i < arr1.length; i++) {
    //分割数组里的每个元素
    var arr2 = arr1[i].split("="); //按照 = 分割
    if (arr2[0] == key) {
      //如果数组的第一个元素等于给定的cookie名称
      return decodeURI(arr2[1]); //返回翻译编码后的cookie值
    }
  }
};
// ------------移除cookie-----------------------------------------------
export const removeCookie = (key) => {
  setCookie(key, "", -1); //cookie的过期时间设为昨天
};
