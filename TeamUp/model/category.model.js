import sequelize from "../db/dbConfig";
import { DataTypes } from "sequelize";

const Category = sequelize.define("category", {
    Category_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Type: {
        type: DataTypes.STRING,
        allowNull:false
    }
});

sequelize.sync()
    .then(() => {
        console.log("Category table is created");
    }).catch(err => {
        console.log("Something wrong");
        console.log(err);
    });

export default Category;
