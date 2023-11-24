const React = require('react');
const AddBook = require('../AddBook');
const Layout = require('../Layout');
const MainPage = require('./MainPage');
const FavoritePage = require('./FavoritePage');

function ProfilePage({ user,books ,layout}) {
  return (
    <Layout >
      <div>
        {user && <h2>Добро пожаловать, {user.name}!</h2>}
        <AddBook />
        <FavoritePage books={books} />
      </div>
    </Layout>
  );
}

module.exports = ProfilePage;
