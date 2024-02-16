import sequelize from "../db/dbConfig";
import { DataTypes } from "sequelize";

const Tournament = sequelize.define("tournament", {
    Tournament_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    tournament_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    banner: {
        type: DataTypes.BLOB,
        allowNull: false
    },
    tournament_team_limit: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    tournament_address: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tournament_start_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    tournament_apply_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    tournament_end_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    organizer_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    tournament_fees: {
        type: DataTypes.STRING,
        allowNull: false
    },
    first_price: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    second_price: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    third_price: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

sequelize.sync()
    .then(() => {
        console.log("tournament table is created");
    }).catch(err => {
        console.log("Something wrong");
        console.log(err);
    });

export default Tournament;