module.exports = (sequelize, DataTypes) => {
    const Cart = sequelize.define(
        'Cart',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            active: {
                type: DataTypes.BOOLEAN,
                defaultValue: true,
                allowNull: false,
            },
        },
        {
            tableName: 'carts',
        }
    );

    Cart.associate = (models) => {
        Cart.belongsTo(models.User);
        Cart.hasMany(models.CartProduct);
    };

    return Cart;
};
