module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define(
        'Product',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            price: {
                type: DataTypes.DECIMAL(10, 2),
                allowNull: false,
            },
            description: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            image: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            category: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            discount: {
                type: DataTypes.DECIMAL(10, 2),
                allowNull: true,
            },
        },
        {
            tableName: 'products',
        }
    );

    Product.associate = (models) => {
        Product.belongsToMany(models.Order, { through: models.OrderProduct });
        Product.belongsToMany(models.Cart, { through: models.CartProduct });
    };

    return Product;
};
