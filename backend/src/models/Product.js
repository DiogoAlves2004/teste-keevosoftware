const { Model, DataTypes } = require('sequelize')

class Product extends Model{

    static init(connection){
        super.init({
            name: DataTypes.STRING,
            description: DataTypes.TEXT,
            quantity: DataTypes.INTEGER,
            code: DataTypes.INTEGER,
            metricunit: DataTypes.STRING
        }, {
            sequelize: connection
        })
    }

}

module.exports = Product;