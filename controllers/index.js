const express = require('express');
const controllerHandlers = {};

const fs = require('fs');
const path = require('path');

// Read all files in the controllers directory
fs.readdirSync(__dirname).forEach((file) => {
    // Only import .js files and skip index.js
    if (file.includes('.js') && file !== 'index.js') {
        const handler = require(path.join(__dirname, file));
        const name = path.basename(file, '.js');
        controllerHandlers[name] = handler;
    }
});

module.exports = controllerHandlers;
