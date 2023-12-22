const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  console.log("sequelize", sequelize);
  const Flight = sequelize.define("Flight", {
    // email (required), deprarture date (required), return date (optional)
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    departDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    returnDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  });

  return Flight;
};
