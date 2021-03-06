'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    const { INTEGER, STRING, literal } = Sequelize;
    return queryInterface.createTable('orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: INTEGER,
      },
      no: {
        type: STRING,
      },
      user_id: {
        type: INTEGER,
      },
      status: {
        type: INTEGER,
        defaultValue: 0,
      },
      created_at: {
        allowNull: false,
        type: 'TIMESTAMP',
        defaultValue: literal('CURRENT_TIMESTAMP'),
      },
      updated_at: {
        allowNull: false,
        type: 'TIMESTAMP',
        defaultValue: literal('CURRENT_TIMESTAMP'),
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('orders');
  },
};
