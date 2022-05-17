"use strict";
import { Model } from "sequelize";
interface PurchaseHistoryAttributes {
  id: number;
  dishName: string;
  restaurantName: number;
  transactionAmount: number;
  transactionDate: number;
}
module.exports = (
  sequelize: any,
  DataTypes: { STRING: any; NUMBER: any; DATE: any }
) => {
  class PurchaseHistory
    extends Model<PurchaseHistoryAttributes>
    implements PurchaseHistoryAttributes
  {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    id!: number;
    dishName!: string;
    restaurantName!: number;
    transactionAmount!: number;
    transactionDate!: number;
    static associate(models: any) {
      // define association here
      PurchaseHistory.belongsTo(models.user, {
        foreignKey: "id",
        as: "user",
      });
    }
  }
  PurchaseHistory.init(
    {
      id: DataTypes.NUMBER,
      dishName: DataTypes.STRING,
      restaurantName: DataTypes.STRING,
      transactionAmount: DataTypes.NUMBER,
      transactionDate: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "PurchaseHistory",
    }
  );
  return PurchaseHistory;
};
