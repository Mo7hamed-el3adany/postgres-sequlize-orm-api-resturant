"use strict";
import { DataTypes, Model } from "sequelize";
interface UserAttributes {
  id: number;
  name: string;
  cashBalance: string;
}
module.exports = (sequelize: any, DataTypes: any) => {
  class User extends Model<UserAttributes> implements UserAttributes {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    id!: number;
    name!: string;
    cashBalance!: string;
    static associate(Models: any) {
      // define association here
      User.hasMany(Models.PurchaseHistory, {
        foreignKey: "id",
        as: "PurchaseHistory",
      });
    }
  }

  User.init(
    {
      id: DataTypes.NUMBER,
      name: DataTypes.STRING,
      cashBalance: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};

 
