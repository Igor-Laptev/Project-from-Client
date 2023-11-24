// const CardBook = require("../../components/CardBook");
const BookBook = require("../../components/bookbook");
const { Book } = require("../../db/models");

const router = require("express").Router();

router.get("/:bookId", async(req, res) => {
    try {
        const { bookId } = req.params;

        const book = await Book.findOne({ where: { id: bookId } });
        const html = res.renderComponent(BookBook, { book });
        res.send(html);
        
    } catch (error) {
        res.status(500).send(error.message);
    }
    
})

module.exports = router