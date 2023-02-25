module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define(
        'Order',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            status: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            date: {
                type: DataTypes.DATE,
                allowNull: false,
            },
        },
        {
            tableName: 'orders',
        }
    );

    Order.associate = (models) => {
        Order.belongsTo(models.User);
        Order.hasMany(models.OrderProduct);
    };

    return Order;
};
