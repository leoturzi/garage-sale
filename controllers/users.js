const controller = {
    getUsers: (req, res) => {
        res.status(200).json({
            message: 'Users were fetched',
        });
    },

    getUser: (req, res) => {
        res.status(200).json({
            message: 'User details',
            userId: req.params.id,
        });
    },

    createUser: (req, res) => {
        res.status(201).json({
            message: 'User was created',
        });
    },

    updateUser: (req, res) => {
        res.status(200).json({
            message: 'User updated',
            userId: req.params.id,
        });
    },

    deleteUser: (req, res) => {
        res.status(200).json({
            message: 'User deleted',
            userId: req.params.id,
        });
    },
};

module.exports = controller;
