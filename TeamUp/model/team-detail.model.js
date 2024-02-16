import sequelize from "../db/dbConfig";
import { DataTypes } from "sequelize";

const TeamDetail = sequelize.define("team-detail", {
    TeamDetail_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    no_of_batsman: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    no_of_bowler: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    no_of_wicketKeeper: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    no_of_allrounder: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    captain_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    team_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    achievement_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});
sequelize.sync()
    .then(() => {
        console.log("team-detail table is created");
    }).catch(err => {
        console.log("Something wrong");
        console.log(err);
    });

export default TeamDetail;