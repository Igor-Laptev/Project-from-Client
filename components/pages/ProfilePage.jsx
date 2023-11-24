const React = require('react');
const AddBook = require('../AddBook');

const MainPage = require('./MainPage');
const Layout = require('../Layout');

function ProfilePage({ user, books, layout }) {
  return (
    <Layout user={user}>
      <div className="profile-page">
        <div>
          {user && <h2>Добро пожаловать, {user.name}!</h2>}
          <AddBook />
          <MainPage books={books} layout={layout} />
        </div>
      </div>
    </Layout>
  );
}

module.exports = ProfilePage;
