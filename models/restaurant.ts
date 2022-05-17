"use strict";
import { DataTypes, Model } from "sequelize";
interface RestaurantAttributes {
  id: string;
  name: string;
  cashBalance: string;
  openingHours: string;
  restaurantName: string;
}
import sequelize from "sequelize/types/sequelize";

module.exports = (sequelize: any, DataTypes: { NUMBER: any; STRING: any }) => {
  class Restaurant
    extends Model<RestaurantAttributes>
    implements RestaurantAttributes
  {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    id!: string;
    name!: string;
    cashBalance!: string;
    openingHours!: string;
    restaurantName!: string;
    static associate(Models: any) {
      // define association here
      Restaurant.hasMany(Models.Menu, {
        foreignKey: "id",
        as: "menus",
      });
    }
  }

  Restaurant.init(
    {
      id: DataTypes.NUMBER,
      name: DataTypes.STRING,
      cashBalance: DataTypes.NUMBER,
      restaurantName: DataTypes.STRING,
      openingHours: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Restaurant",
    }
  );
  return Restaurant;
};
