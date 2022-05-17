'use strict';
module.exports = {
  async up(queryInterface: { createTable: (arg0: string, arg1: { id: { allowNull: boolean; autoIncrement: boolean; primaryKey: boolean; type: any; }; dishName: { type: any; }; restaurantName: { type: any; }; transactionAmount: { type: any; }; transactionDate: { type: any; }; createdAt: { allowNull: boolean; type: any; }; updatedAt: { allowNull: boolean; type: any; }; }) => any; }, Sequelize: { INTEGER: any; STRING: any; NUMBER: any; DATE: any; }) {
    await queryInterface.createTable("PurchaseHistory", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      dishName: {
        type: Sequelize.STRING,
      },
      restaurantName: {
        type: Sequelize.STRING,
      },
      transactionAmount: {
        type: Sequelize.NUMBER,
      },
      transactionDate: {
        type: Sequelize.DATE,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface: { dropTable: (arg0: string) => any; }, Sequelize: any) {
    await queryInterface.dropTable("PurchaseHistory");
  }
};