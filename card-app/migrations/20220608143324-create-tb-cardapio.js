'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tb_cardapios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
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
      id_produto: {
        type: Sequelize.INTEGER,
        references:{
          model:'tb_produtos',
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
    await queryInterface.dropTable('tb_cardapios');
  }
};