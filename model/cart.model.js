import { DataTypes } from "sequelize";
import sequelize from "../db/dbConfig.js";

const Cart = sequelize.define("cart", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }
});

sequelize.sync({ alter: true }).then(() => {
    console.log("Cart table created");
}).catch(err => {
    console.log(err);
    console.log("Error in cart");
});

export default Cart;