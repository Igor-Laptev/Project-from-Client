const React = require("react");
const Layout = require("../Layout");
const CardBook = require("../CardBook");

function MainPage({ books, favorites, user }) {
  return (
    <Layout>
      <div className="js-book-container">
        {books.map((book) => (
          <CardBook key={book.id} book={book} favorites={favorites} />
        ))}
      </div>
    </Layout>
  );
}

module.exports = MainPage;
