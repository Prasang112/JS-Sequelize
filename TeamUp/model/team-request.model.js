import sequelize from "../db/dbConfig";
import { DataTypes } from "sequelize";

const TeamRequest = sequelize.define("team-request", {
    TeamRequest_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    player_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    team_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    tournament_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    send_request: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

sequelize.sync()
    .then(() => {
        console.log("team request table is created");
    }).catch(err => {
        console.log("Something wrong");
        console.log(err);
    });

export default TeamRequest;