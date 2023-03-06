const path = require('path');
const fs = require('fs');
const basename = path.basename(__filename);

const middlewares = {};

fs.readdirSync(__dirname)
    .filter((file) => {
        return (
            file.indexOf('.') !== 0 &&
            file !== basename &&
            file.slice(-3) === '.js'
        );
    })
    .forEach((file) => {
        const middleware = require(path.join(__dirname, file));
        const fileName = path.basename(file, '.js');
        middlewares[fileName] = middleware;
    });

module.exports = middlewares;
