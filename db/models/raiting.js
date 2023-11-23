"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Raiting extends Model {
    static associate({ User, Book }) {
      this.belongsTo(User, { foreignKey: "userId" });
      this.belongsTo(Book, { foreignKey: "bookId" });
    }
  }
  Raiting.init(
    {
      raiting: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "Users",
          key: "id",
        },
        onDelete: "CASCADE",
      },
      bookId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "Books",
          key: "id",
        },
        onDelete: "CASCADE",
      },
    },
    {
      sequelize,
      modelName: "Raiting",
    }
  );
  return Raiting;
};
