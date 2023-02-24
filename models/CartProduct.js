module.exports = (sequelize, DataTypes) => {
    const CartProduct = sequelize.define(
        'CartProduct',
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
            tableName: 'cart_products',
        }
    );

    CartProduct.associate = (models) => {
        CartProduct.belongsTo(models.Cart);
        CartProduct.belongsTo(models.Product);
    };

    return CartProduct;
};
