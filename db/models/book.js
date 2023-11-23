'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    static associate({ Comment, Favorite, Raiting, User }) {
      this.hasMany(Comment, { foreignKey: 'bookId' });
      this.hasMany(Favorite, { foreignKey: 'bookId' });
      this.hasMany(Raiting, { foreignKey: 'bookId' });
      this.belongsTo(User, { foreignKey: 'userId' });
    }
  }
  Book.init(
    {
      name: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      author: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      description: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      img: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
    },
    {
      sequelize,
      modelName: 'Book',
    }
  );
  return Book;
};
