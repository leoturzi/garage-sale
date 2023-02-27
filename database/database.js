const { Sequelize } = require('sequelize');
require('dotenv').config();

module.exports = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: 'mysql',
        port: process.env.DB_PORT,
        logging: (msg) => {
            if (
                !msg.match(/Executing \(default\): SHOW INDEX FROM/) &&
                !msg.match(
                    /^(?!.*Executing \(default\): SELECT TABLE_NAME FROM INFORMATION_SCHEMA\.TABLES WHERE TABLE_TYPE = 'BASE TABLE' AND TABLE_NAME).*$/
                )
            ) {
                console.log(msg);
            }
        },
    }
);
