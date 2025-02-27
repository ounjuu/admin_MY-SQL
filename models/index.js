// "use strict";

// const fs = require("fs");
// const path = require("path");
// const Sequelize = require("sequelize");
// const process = require("process");
// const basename = path.basename(__filename);
// const env = process.env.NODE_ENV || "development";
// const config = require(__dirname + "/../config/config.json")[env];
// const db = {};

// let sequelize;
// if (config.use_env_variable) {
//   sequelize = new Sequelize(process.env[config.use_env_variable], config);
// } else {
//   sequelize = new Sequelize(
//     config.database,
//     config.username,
//     config.password,
//     config
//   );
// }
// fs.readdirSync(__dirname)
//   .filter((file) => {
//     return (
//       file.indexOf(".") !== 0 &&
//       file !== basename &&
//       file.slice(-3) === ".js" &&
//       file !== "someOtherFile.js"
//     );
//   })
//   .forEach((file) => {
//     const model = require(path.join(__dirname, file));

//     // ✅ 모델이 함수인지 확인 (모델 파일이 Sequelize 형식이 아닐 경우 대비)
//     if (typeof model === "function") {
//       db[model(sequelize, Sequelize.DataTypes).name] = model(
//         sequelize,
//         Sequelize.DataTypes
//       );
//     }
//   });

// console.log("Loaded models:", Object.keys(db));
// Object.keys(db).forEach((modelName) => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });

// db.sequelize = sequelize;
// db.Sequelize = Sequelize;

// module.exports = db;
