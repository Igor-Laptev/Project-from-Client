const AddBook = require("../../components/AddBook");

const router = require("express").Router();

router.get("/", (req, res) => {
    res.send(res.renderComponent(AddBook));
})

module.exports = router