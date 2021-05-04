const generateLocation = (username, text) => {
  return {
    username,
    text,
    createdAt: new Date(),
  };
};

module.exports = {
  generateLocation,
};
