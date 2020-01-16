const Sequelize = require("sequelize")

const sequelize = new Sequelize(process.env.PGDATABASE,
       process.env.PGUSER, process.env.PGPASSWORD, {
            host: process.env.PGHOST,
            dialect: "postgres",
            pool: {
                max: 10,
                min: 0
            }
       })

module.exports = sequelize;