const React = require("react");
const Layout = require("../Layout");
const CardBook = require("../CardBook");

function MainPage({ books, favorites, user, layout,profile }) {
  return (
    <>
      {layout ? (
        <div className="js-book-container">
          {books.map((book) => (
            <CardBook key={book.id} book={book} favorites={favorites} user={user} profile={profile} />
          ))}
        </div>
      ) : (
        <Layout user={user}>
          <div className="js-book-container">
            {books.map((book) => (
              <CardBook key={book.id} book={book} favorites={favorites} user={user} profile={profile}/>
            ))}
          </div>
        </Layout>
      )}
    </>

  );
}

module.exports = MainPage;
