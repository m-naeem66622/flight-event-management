const { DataTypes } = require("sequelize");
// const sequelize = new Sequelize("flight_event_management", "root", "password", {
//   logging: (...msg) => console.log(msg),
//   host: "localhost",
//   dialect: "mysql",
// });

// const Flight = sequelize.define(
//   "Flight",
//   {
//     // Model attributes are defined here
//     // email (required), deprarture date (required), return date (optional)
//     email: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     departDate: {
//       type: DataTypes.DATE,
//       allowNull: false,
//     },
//     returnDate: {
//       type: DataTypes.DATE,
//       allowNull: true,
//     },
//     // Additional attributes...
//   },
//   {
//     // Other model options go here
//   }
// );

// module.exports = Flight;

module.exports = (sequelize, Sequelize) => {
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
