const React = require('react');
const AddBook = require('../AddBook');
const Layout = require('../Layout');
const MainPage = require('./MainPage');

function ProfilePage({ user,books ,layout}) {
  return (
    <Layout>
      <div>
        {user && <h2>Добро пожаловать, {user.name}!</h2>}
        <AddBook />
        <MainPage books={books} layout={layout}/>
      </div>
    </Layout>
  );
}

module.exports = ProfilePage;
