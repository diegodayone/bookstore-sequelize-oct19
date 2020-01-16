const orm = require("../orm")
const Sequelize = require("sequelize")

const Author = orm.define("authors", {
    FullName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Website: {
        type: Sequelize.STRING,
        allowNull: true
    },
    Image: {
        type: Sequelize.STRING,
        allowNull: true
    },
    DateOfBirth: {
        type: Sequelize.DATE,
        allowNull: true
    }
}
, {
    timestamps: true
})

module.exports = Author