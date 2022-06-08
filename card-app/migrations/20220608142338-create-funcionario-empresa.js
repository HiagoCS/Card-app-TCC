'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('funcionario_empresas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_usuario: {
        type: Sequelize.INTEGER,
        references:{
          model:'tb_usuarios',
          key:'id'
        },
        onUpdate:'cascade',
        onDelete:'cascade'
      },
      id_empresa: {
        type: Sequelize.INTEGER,
        references:{
          model:'tb_empresas',
          key:'id'
        },
        onUpdate:'cascade',
        onDelete:'cascade'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('funcionario_empresas');
  }
};