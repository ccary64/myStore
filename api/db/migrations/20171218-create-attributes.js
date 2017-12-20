module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('Attributes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        unique: true,
        allowNull: false,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      }
    },{
      uniqueKeys: {
        Items_unique: {
          fields: ['name']
        }
      }
    }
  ),
  down: (queryInterface /* , Sequelize */) => queryInterface.dropTable('Attributes'),
};