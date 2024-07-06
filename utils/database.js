// utils/database.js
const { Sequelize, DataTypes } = require('sequelize');
const axios = require('axios');
const dotenv = require("dotenv");
dotenv.config();

// URL to the CA certificate on Cloudinary
const caCertUrl = 'https://res.cloudinary.com/dje269eh5/raw/upload/v1720264687/ca_ok1t5v.pem';

// Function to fetch the CA certificate
async function fetchCACertificate(url) {
    const response = await axios.get(url);
    return response.data;
}

async function initializeSequelize() {
    const caCert = await fetchCACertificate(caCertUrl);

    // Sequelize Configuration
    const sequelize = new Sequelize('test', process.env.DBUSERNAME, process.env.DBPASSWORD, {
        host: process.env.DBHOSTNAME,
        dialect: 'mysql',
        port: 26370,
        dialectOptions: {
            ssl: {
                ca: caCert
            }
        }
    });

    return sequelize;
}

module.exports = initializeSequelize;
