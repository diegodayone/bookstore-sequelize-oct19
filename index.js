const express = require("express")
const dotenv = require("dotenv")
dotenv.config()
const bookRouter = require("./src/routes/books")
const sequelize = require("./src/orm")
// const Authors = require("./src/models/authors")

const server = express();
server.use(express.json())

server.use("/books", bookRouter)

server.listen(process.env.PORT || 5310, () => 
{
    console.log("Server is listening on " + process.env.PORT || 5400)
    sequelize.authenticate().then(()=> 
    {
        // Authors.sync()
        console.log("Connected with Sequelize")
    }, (err)=> console.log("Error with the connection", err))
})