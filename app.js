const express = require("express");
const cron = require('node-cron');
const app = express();
const initializeSequelize = require("./utils/database");

const PORT = 4000;

// Route for the homepage
app.get("/", (req, res) => {
    res.send("Hello from node server");
});

// Route for the cron job endpoint
app.get("/cronServer", (req, res) => {
    res.send("cron job running");
});

// Define your cron job
cron.schedule('*/5 * * * *', () => {
    // This function runs every 30 seconds
    console.log('Running a task every 30 seconds');
    // You can call an endpoint or perform a task here
    // Example: Call the /cronServer endpoint programmatically
    const axios = require('axios');
    axios.get('https://test2-render.onrender.com/cronServer')
        .then(response => console.log(response.data))
        .catch(error => console.error('Error calling /cronServer:', error.message));
});

// initializeSequelize().then((sequelize) => {
//     // Test the connection
//     sequelize.sync().then(() => {
//         console.log('Connection has been established successfully.');
app.listen(PORT, () => {
    console.log("Server is running on port ", PORT);
})
//     }).catch(err => {
//         console.error('Unable to connect to the database:', err);
//     });
// }).catch((error) => {
//     console.error('Failed to initialize Sequelize:', error);
// });


