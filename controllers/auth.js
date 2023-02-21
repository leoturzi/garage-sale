const controller = {
    login: (req, res) => {
        res.status(200).json({
            message: 'Login successful',
        });
    },

    signup: (req, res) => {
        res.status(200).json({
            message: 'Signup successful',
        });
    },
};

module.exports = controller;
