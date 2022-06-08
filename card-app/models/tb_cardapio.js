'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tb_cardapio extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tb_cardapio.init({
    id_empresa: DataTypes.INTEGER,
    id_produto: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'tb_cardapio',
  });
  return tb_cardapio;
};