import sequelize from "../db/dbConfig.js";
import { DataTypes } from "sequelize";
import bcrypt from "bcryptjs";

const Admin = sequelize.define("admin", {
    admin_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
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
    }
});

Admin.checkPassword = (originalPassword, encryptedPassword) => {
    console.log("check Password Called");
    let a = bcrypt.compareSync(originalPassword, encryptedPassword);
    console.log(a);
    return a;
}

sequelize.sync()
    .then(() => {
        console.log("Admin table is created");
    }).catch(err => {
        console.log("Something wrong");
        console.log(err);
    });

export default Admin;