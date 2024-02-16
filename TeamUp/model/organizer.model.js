import sequelize from "../db/dbConfig.js";
import { DataTypes } from "sequelize";
import bcrypt from "bcryptjs";

const Organizer = sequelize.define("organizer", {
    Organizer_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Organizer_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        set(value) {
            let saltKey = bcrypt.genSaltSync(10);
            let encryptedPassword = bcrypt.hashSync(value, saltKey);
            this.setDataValue("password", encryptedPassword);
        }
    },
    contact: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    is_active: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
});
Organizer.checkPassword = (originalPassword, encryptedPassword) => {
    console.log("checked Password called");
    return bcrypt.compareSync(originalPassword, encryptedPassword);
}

sequelize.sync()
    .then(() => {
        console.log("Organizer table is created");
    }).catch(err => {
        console.log("Something wrong");
        console.log(err);
    });

export default Organizer;