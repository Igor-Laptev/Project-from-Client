'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Raiting extends Model {
    static associate({ User, Book }) {
      this.belongsTo(User, { foreignKey: 'userId' });
      this.belongsTo(Book, { foreignKey: 'bookId' });
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
      },
      bookId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: 'Raiting',
    }
  );
  return Raiting;
};
