module.exports = (sequelize, DataTypes) => {
    const CartProduct = sequelize.define(
        'Cart',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            quantity: {
                type: DataTypes.INTEGER,
                defaultValue: 1,
                allowNull: false,
            },
        },
        {
            tableName: 'carts',
        }
    );

    CartProduct.associate = (models) => {
        CartProduct.belongsTo(models.Cart);
        CartProduct.belongsTo(models.Product);
    };

    return CartProduct;
};
