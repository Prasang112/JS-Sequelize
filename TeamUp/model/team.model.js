import sequelize from "../db/dbConfig";
import { DataTypes } from "sequelize";

const Team = sequelize.define("team", {
    Team_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Team_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Total_player: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    Contact: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
});

sequelize.sync()
    .then(() => {
        console.log("Team table is created");
    }).catch(err => {
        console.log("Something wrong");
        console.log(err);
    });

export default Team;