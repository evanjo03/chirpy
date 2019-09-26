module.exports = function (sequelize, DataTypes) {
  var Chirp = sequelize.define("Chirp", {
    author: DataTypes.STRING,
    body: DataTypes.STRING,
    created_at: DataTypes.DATE
  });
  return Chirp;
};