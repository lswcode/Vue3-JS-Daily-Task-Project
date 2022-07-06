let externals = {};
let cdn = { css: [], js: [] };
const isProduction = process.env.NODE_ENV === "production"; // 判断是否是生产环境
if (isProduction) {
  externals = {
    vue: "Vue",
    "element-plus": "ElementPlus",
    moment: "moment",
    "vue-router": "VueRouter", // 注意这个是router文件中导入的路由源头，main.js中的router不是源头，而是从这个router文件中导入的
    axios: "axios", // 在组件中import导入的依赖也会被检测到
  };
  cdn = {
    css: ["https://cdn.staticfile.org/element-plus/1.0.2-beta.63/theme-chalk/index.css"],
    js: [
      // vue must at first! vue必须写在最前面
      "https://cdn.staticfile.org/vue/3.2.31/vue.global.prod.min.js", // vue.js
      "https://cdn.staticfile.org/moment.js/2.19.3/moment.min.js",
      "https://cdn.staticfile.org/moment.js/2.19.3/locale/zh-cn.js", // moment 中文
      "https://cdn.staticfile.org/vue-router/4.0.14/vue-router.global.prod.min.js", // vue-router
      "https://cdn.staticfile.org/axios/0.26.1/axios.min.js", // axios
      "https://cdn.staticfile.org/element-plus/1.0.2-beta.63/index.full.min.js",
    ],
  };
}

module.exports = {
  publicPath: "./",
  devServer: {
    port: 8080,
    host: "0.0.0.0", // 设置为0.0.0.0后，同个区域网ip的人都可以访问到
    proxy: {
      "/api": {
        target: "http://localhost:7777",
        changeOrigin: true,
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
  productionSourceMap: false, // 生产打包时不输出map文件，增加打包速度

  configureWebpack: (config) => {
    if (process.env.NODE_ENV === "production") {
      //生产包取消console debugger打印
      config.externals = externals; // 导入上面定义好的externals
      config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true; // 移除log打印信息
      config.optimization.minimizer[0].options.terserOptions.compress.drop_debugger = true; // 移除debugger打印信息
    }
  },
  chainWebpack(config) {
    // 将定义好的cdn样式文件/JS文件使用link和script标签导入index.html中
    config.plugin("preload").tap(() => [
      {
        rel: "preload",
        fileBlacklist: [/\.map$/, /hot-update\.js$/, /runtime\..*\.js$/],
        include: "initial",
      },
    ]);
    // 注入cdn变量 (打包时会执行)
    config.plugin("html").tap((args) => {
      args[0].cdn = cdn; // 配置cdn给插件
      return args;
    });
  },
};
