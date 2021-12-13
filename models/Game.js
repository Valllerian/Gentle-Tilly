const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Game extends Model {}

Game.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    status: {
      type: DataTypes.STRING,
    },
    home_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    home_alias: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    home_points: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    away_points: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    away_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    away_alias: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date_played: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    broadcasts: {
      type: DataTypes.JSON,
      allowNull: true
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "game",
  }
);

module.exports = Game;
