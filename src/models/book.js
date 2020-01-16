const orm = require("../orm") //this is the instance of sequelize
const Sequelize = require("sequelize") //this is the package

const Book = orm.define("books", {
    asin: {
        type: Sequelize.STRING,
        primaryKey: true
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    category: {
        type: Sequelize.STRING,
        allowNull: false
    },
    image: {
        type: Sequelize.STRING,
        allowNull: false
    },
    price: {
        type: Sequelize.NUMBER,
        allowNull: false
    }
}, {
    timestamps: false //otherwise it will look for createdAt and updatedAt fields!
})

module.exports = Book;