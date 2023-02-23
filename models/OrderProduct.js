module.exports = (sequelize, DataTypes) => {
    const OrderProduct = sequelize.define(
        'OrderProduct',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            quantity: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            total: {
                type: DataTypes.DECIMAL(10, 2),
                allowNull: false,
            },
        },
        {
            tableName: 'order_products',
        }
    );

    OrderProduct.associate = (models) => {
        OrderProduct.belongsTo(models.Order);
        OrderProduct.belongsTo(models.Product);
    };

    return OrderProduct;
};
