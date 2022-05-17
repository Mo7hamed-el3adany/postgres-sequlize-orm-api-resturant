'use strict';
const {
  Model
} = require('sequelize');
interface MenuAttributes {
  id: string;
  dishName: string;
  price: number;
 
}
module.exports = (sequelize: any, DataTypes: { STRING: any; NUMBER: any; }) => {
  class Menu extends Model<MenuAttributes> implements MenuAttributes {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    id!: string;
    dishName!: string;
    price!: number;
    static associate(models: any) {
      // define association here
      Menu.belongsTo(models.Restaurant, {
        foreignKey: "id",
        as: "restaurant",
      });
    }
  }
  Menu.init({
    dishName: DataTypes.STRING,
    price: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'Menu',
  });
  return Menu;
};