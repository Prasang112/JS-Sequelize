import sequelize from "../db/dbConfig";
import { DataTypes } from "sequelize";

const TournamentTeamDetail = sequelize.define("Tournament-Team-Detail", {
    Tournament_Team_Detail_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    team_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    tournament_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
});

sequelize.sync()
    .then(() => {
        console.log("tournament team detail table is created");
    }).catch(err => {
        console.log("Something wrong");
        console.log(err);
    });

export default TournamentTeamDetail;