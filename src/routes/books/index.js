const express = require("express")
const Books = require("../../models/book")

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const limit = req.query.limit || 10
        const offset = req.query.offset || 0
        const order = req.query.order || "ASC"
        delete req.query.limit;
        delete req.query.offset
        delete req.query.order

        res.send(await Books.findAll(
            {
                where: {
                    ...req.query //this will filter all the query string params
                },
                offset: offset, 
                limit: limit,
                order: [
                    ['title', order], // Sorts by COLUMN_NAME_EXAMPLE in ascending order
              ]
            }
        )) 
    }
    catch (e) {
        console.log(e)
        res.status(500).send(e)
    }
})

router.get("/:asin", async (req, res) => {
    try {
        const book = await Books.findOne({ where: { asin: req.params.asin } })

        if (book)
             res.send(book)
        else 
            res.status(404).send("Not found")
    }
    catch (e) {
        console.log(e)
        res.status(500).send(e)
    }
})

router.post("/", async (req, res) => {
    try {
        const book = await Books.create(req.body)
        res.send(book)
    }
    catch (e) {
        console.log(e)
        res.status(500).send(e)
    }
})

router.put("/:asin", async (req, res) => {
    try {
        const result = await Books.update({
            ...req.body
        }, {
            where: {
                asin: req.params.asin
            }
        });

        console.log(result)

        if (result[0] === 1)
            res.send("OK")
        else 
            res.status(404).send("Not found")
    }
    catch (e) {
        console.log(e)
        res.status(500).send(e)
    }
})

router.delete("/:asin", async (req, res)=>{
    try {
       const result = await Books.destroy({
           where: {asin: req.params.asin}
       })

       console.log(result)

       if (result === 1)
           res.send("OK")
       else 
           res.status(404).send("Not found")
    }
    catch (e) {
        console.log(e)
        res.status(500).send(e)
    }
})


module.exports = router;