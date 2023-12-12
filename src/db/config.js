module.exports = {
  HOST: "127.0.0.1",
  USER: "root",
  PASSWORD: "12345",
  DB: "flight_event_management",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
