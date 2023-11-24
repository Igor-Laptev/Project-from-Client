const router = require('express').Router();
const ProfilePage = require('../../components/pages/ProfilePage');
const { Book } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    if(res.locals.user){
    const books = await Book.findAll({ where: { userId: res.locals.user.id } });

    const html = res.renderComponent(ProfilePage, { books, layout: 'No' });
    res.send(html);
    }else{
      res.redirect('/')
    }
  } catch (error) {
    console.log(error.message);
    res.end();
  }
});

module.exports = router;
