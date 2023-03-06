// multer mw for file upload
const multer = require('multer');
const path = require('path');

// multer config

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images/products');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    },
});

const fileFilter = (req, file, cb) => {
    // Check if file type is allowed
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        // Pass the file
        cb(null, true);
    } else {
        // Reject the file
        cb(
            new Error(`There was an error ${file.originalname} file type`),
            false
        );
    }
};

const upload = multer({
    storage,
    fileFilter,
}).array('files', 2);

const uploadFiles = (req, res, next) => {
    upload(req, res, (err) => {
        if (err) {
            return res.status(400).json({
                message: err.message,
            });
        }
        if (req.files.length === 0) {
            return res.status(400).json({
                message: 'No files were uploaded',
            });
        } else {
            next();
        }
    });
};

module.exports = uploadFiles;
