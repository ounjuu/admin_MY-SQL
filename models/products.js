// module.exports = (sequelize, DataTypes) => {
//   const products = sequelize.define(
//     "products",
//     {
//       id: {
//         type: DataTypes.INTEGER,
//         autoIncrement: true,
//         primaryKey: true,
//       },
//       product_id: {
//         type: DataTypes.INTEGER,
//         allowNull: false,
//         unique: true,
//       },
//       name: {
//         type: DataTypes.STRING(45),
//         allowNull: false,
//       },
//       price: {
//         type: DataTypes.DECIMAL(10, 2),
//         allowNull: false,
//       },

//       description: {
//         type: DataTypes.STRING(200),
//         allowNull: false,
//       },
//       category: {
//         type: DataTypes.STRING(100),
//         allowNull: false,
//       },

//       image_url_1: {
//         type: DataTypes.STRING(225),
//         allowNull: true,
//       },
//       image_url_2: {
//         type: DataTypes.STRING(225),
//         allowNull: true,
//       },
//     },
//     {
//       timestamps: false,
//       freezeTableName: true,
//     }
//   );

//   return products;
// };
