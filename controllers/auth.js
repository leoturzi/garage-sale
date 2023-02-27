const controller = {
    signin: (req, res) => {
        res.status(200).json({
            message: 'Login successful',
        });
    },

    signup: (req, res) => {
        res.status(200).json({
            message: 'Signup successful',
        });
    },

    signout: (req, res) => {
        res.status(200).json({
            message: 'Signout successful',
        });
    },

    forgotPassword: (req, res) => {
        res.status(200).json({
            message: 'Forgot password',
        });
    },
};

module.exports = controller;
