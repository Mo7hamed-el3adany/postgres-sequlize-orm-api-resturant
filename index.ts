require("dotenv").config();
import express from "express";
const app = express();
const port = process.env.PORT || 3000;
import db from "./models";
import { users } from "./seeders/users";
import { restaurants } from "./seeders/restaurants";

const createUsers = () => {
  users.map((user) => {
    db.User.create(user);
  });
};
const createRestaurents = () => {
  restaurants.map((restaurent) => {
    db.Restaurant.create(restaurent);
  });
};
createUsers();
createRestaurents();

db.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`App listening on port ${port}`);
  });
});
