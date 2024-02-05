'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      { name: 'User1', password: 'password1', cpf: '12345678901' },
      { name: 'User2', password: 'password2', cpf: '23456789012' },
      { name: 'User3', password: 'password3', cpf: '34567890123' },
      { name: 'User4', password: 'password4', cpf: '45678901234' },
      { name: 'User5', password: 'password5', cpf: '56789012345' },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
