const React = require("react");
const AddBook = require("../AddBook");

const MainPage = require("./MainPage");
const Layout = require("../Layout");

function ProfilePage({ user, books, layout }) {
  return (

    <Layout user={user}>

      <div>
        {user && <h2>Добро пожаловать, {user.name}!</h2>}
        <AddBook />
        <MainPage books={books} layout={layout} profile={true} user={user}/>
      </div>
    </Layout>
  );
}

module.exports = ProfilePage;
