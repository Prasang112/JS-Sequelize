import sequelize from "../db/dbConfig";
import { DataTypes } from "sequelize";

const SelectPlayer = sequelize.define("select_player", {
    selected_player_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    team_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    player_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

sequelize.sync()
    .then(() => {
        console.log("Select player table is created");
    }).catch(err => {
        console.log("Something wrong");
        console.log(err);
    });

export default SelectPlayer;