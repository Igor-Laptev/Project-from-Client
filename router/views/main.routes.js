const MainPage = require('../../components/pages/MainPage');

const router = require('express').Router();


router.get("/", (req,res) =>{
    const html = res.renderComponent(MainPage)
    res.send(html)
})

module.exports = router