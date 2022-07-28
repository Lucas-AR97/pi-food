const { DataTypes } = require('sequelize');
// Exportamos una función que define el modelo
// Luego le inyectamos la colección a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
