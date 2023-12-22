module.exports = {
  HOST: "127.0.0.1",
  USER: "root", // Replace with your own username
  PASSWORD: "12345", // Replace with your own password
  DB: "flight_event_management",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
