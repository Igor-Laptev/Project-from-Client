'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Books', [
      {
        name: 'Война и Мир',
        author: 'Толстой',
        description: 'Описание книги',
        img: 'https://cdn.img-gorod.ru/310x500/nomenclature/27/550/2755010.jpg',
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Books', null, {});
  },
};
