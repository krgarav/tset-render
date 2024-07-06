// Sequelize Model

const initializeSequelize = require("../utils/database");

const Image = sequelize.define('Image', {
    url: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});
module.exports = Image;