const {Sequelize} = require("sequelize");
require('dotenv').config();
const dataBase = process.env.DB_PASSWORD

const sequelize = new Sequelize("Learning", "root", dataBase, {
  host: "localhost",
  dialect: "mysql",
  // port: process.env.PORT || 7089,
  logging: false,
  define: {
    timestamps: false, //Universal model config;
    underscore: true, //Universal model config;
  },
  timezone: "+05:30", //Indian Timezone add Method;
  transactionType: "IMMEDIATE", // Enable immediate transaction
  retry: {
    max: 5, // Maximum number of connection attempts
    match: ["Sequelize.ConnectionError"], // Retry only on specific errors
    delay: 1000, // Delay between retry attempts, in milliseconds
  },
  isolationLevel: "SERIALIZABLE", // Set the default isolation level to SERIALIZABLE
  // replication: {
  //     read: [
  //       { host: 'read1.example.com', username: 'read_user', password: 'read_password' },
  //       { host: 'read2.example.com', username: 'read_user', password: 'read_password' },
  //     ],
  //     write: { host: 'write.example.com', username: 'write_user', password: 'write_password' },
  //   },
  pool: {
    min: 5,
    max: 10,
    idle: 20000,
    acquire: 30000,
  },
});

try {
  sequelize.authenticate();
  console.log("Successfully connected");
} catch (error) {
  console.error("Database Connection", error);
}

module.exports = {
  sequelize,
};
