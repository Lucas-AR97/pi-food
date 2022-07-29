const { DataTypes } = require('sequelize')
module.exports = (sequelize) => {
  sequelize.define('recipe', {

    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false
    },

    title: {
      type: DataTypes.STRING,
      allowNull: false
    },

    summary: {
      type: DataTypes.STRING,
      allowNull: false
    },

    spoonacularScore: {
      type: DataTypes.INTEGER
    },

    healthScore: {
      type: DataTypes.INTEGER
    },

    steps: {
      type: DataTypes.STRING
    },

    image: {
      type: DataTypes.STRING
    },
    dishTypes: {
      type: DataTypes.ARRAY(DataTypes.STRING)
    }
  })
}
