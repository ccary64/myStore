module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('AttributeItems', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      attributeId: {
        unique: 'AttributeItemIndex',
        allowNull: false,
        type: Sequelize.INTEGER
      },
      label: {
        unique: 'AttributeItemIndex',
        allowNull: false,
        type: Sequelize.STRING,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    }),
  down: (queryInterface /* , Sequelize */) => queryInterface.dropTable('AttributeItems'),
};