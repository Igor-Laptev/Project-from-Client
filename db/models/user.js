'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Books, Favorites, Comments, Raiting }) {
      this.hasMany(Books, { foreignKey: 'userId' });
      this.hasMany(Comments, { foreignKey: 'userId' });
      this.hasMany(Raiting, { foreignKey: 'userId' });
      this.hasMany(Favorites, { foreignKey: 'userId' });
    }
  }
  User.init(
    {
      name: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      email: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      phone: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      password: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: 'User',
    }
  );
  return User;
};
