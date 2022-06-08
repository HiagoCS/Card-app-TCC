'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class funcionario_empresa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  funcionario_empresa.init({
    id_usuario: DataTypes.INTEGER,
    id_empresa: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'funcionario_empresa',
  });
  return funcionario_empresa;
};