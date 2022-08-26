const jwt = require("jsonwebtoken");
const config = {
  port: 8099,
  PRIVATE_KEY: "dz8545", //自定义jwt加密的私钥
  JWT_EXPIRED: 1 * 60, //过期时间是24小时
};

const setToken = (account) => {
  return jwt.sign(
    // payload 存储用户信息
    { account },
    // 私钥
    config.PRIVATE_KEY,
    // 设置过期时间
    { expiresIn: config.JWT_EXPIRED }
  );
};

module.exports = {
  setToken,
};
