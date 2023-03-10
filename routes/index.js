const routeHandlers = {};

const fs = require('fs');
const path = require('path');

// Read all files in the routes directory
fs.readdirSync(__dirname).forEach((file) => {
    // Only import .js files and skip index.js
    if (file.includes('.js') && file !== 'index.js') {
        const handler = require(path.join(__dirname, file));
        const name = path.basename(file, '.js');
        routeHandlers[name] = handler;
    }
});

module.exports = routeHandlers;
