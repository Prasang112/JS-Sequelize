import { Sequelize } from "sequelize";
const sequelize = new Sequelize("teamup", "root", "root", {
    host: "localhost",
    dialect: "mysql"
});

sequelize.authenticate()
    .then(() => {
        console.log("Database Connected");
    }).catch(err => {
        console.log("Database Connection Failed");
        console.log(err);
    });

export default sequelize;