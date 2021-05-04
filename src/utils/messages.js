const users = require("./users");

const generateMessage = (username, text) => {
  return {
    username,
    text,
    createdAt: new Date(),
  };
};

module.exports = {
  generateMessage,
};
