import sequelize from "../db/dbConfig";
import { DataTypes } from "sequelize";

const Achievement = sequelize.define("achievement", {
    Achievement_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Achievement_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Description: {
        type: DataTypes.STRING
    },
    User_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});
sequelize.sync()
    .then(() => {
        console.log("Achievemnet table is created");
    }).catch(err => {
        console.log("Something wrong");
        console.log(err);
    });

export default Achievement;