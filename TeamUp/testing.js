// // app.js

// const express = require('express');
// const { DataTypes } = require('sequelize');
// const { Sequelize } = require('sequelize');

// const app = express();

// // Sequelize setup (sequelize.js)
// const sequelize = new Sequelize({
//     dialect: 'mysql',
//     host: 'localhost',
//     username: 'root',
//     password: 'root',
//     database: 'testing',
// });

// // Model definition (models/User.js)
// const User = sequelize.define('User', {
//     // Existing columns
//     username: {
//         type: DataTypes.STRING,
//         allowNull: false,
//     },
//     email: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         unique: true,
//     },
//     // New column
//     address: {
//         type: DataTypes.STRING,
//         allowNull: true,
//     },
// });

// // Migration file (migrations/20220206123456-add-newColumn-to-Users.js)
// (async () => {
//     await sequelize.sync(); // Sync models with the database before running migrations

//     try {
//         await sequelize.getQueryInterface().addColumn('Users', 'address', {
//             type: DataTypes.STRING,
//             allowNull: true,
//         });

//         console.log('New column added successfully');
//     } catch (error) {
//         console.error('Error adding new column:', error);
//     } finally {
//         await sequelize.close(); // Close the Sequelize connection
//     }
// })();

// // Express app setup
// app.get('/', (req, res) => {
//     res.send('Hello, Express!');
// });

// // Start the server
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });
