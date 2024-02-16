import sequelize from "../db/dbConfig.js";
import { DataTypes } from "sequelize";
import bcrypt from "bcryptjs";


const User = sequelize.define("user", {
    user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: true
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
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
    age: {
        type: DataTypes.INTEGER,
    },
    height: {
        type: DataTypes.INTEGER,
    },
    address: {
        type: DataTypes.STRING,
    },
    gender: {
        type: DataTypes.STRING
    },
    no_of_matches: {
        type: DataTypes.INTEGER
    },
    image: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    },
    is_active: {
        type: DataTypes.STRING
    },
    category_id: {
        type: DataTypes.INTEGER
    }

});
User.checkPassword = (originalPassword, encryptedPassword) => {
    console.log("checked Password called");
    return bcrypt.compareSync(originalPassword, encryptedPassword);
}

sequelize.sync()
    .then(() => {
        console.log("User table is created");
    }).catch(err => {
        console.log("Something wrong");
        console.log(err);
    });

export default User;