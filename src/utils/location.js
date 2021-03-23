const generateLocation = (text) => {
  return {
    text,
    createdAt: new Date(),
  };
};

module.exports = {
  generateLocation,
};
