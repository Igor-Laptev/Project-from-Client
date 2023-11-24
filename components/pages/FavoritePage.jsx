const React = require("react");
const Layout = require("../Layout");
const CardBook = require("../CardBook");

function FavoritePage({books, user}) {
  return (
    <Layout user={user}>
      <div className="js-book-container add-container">
        {books.map((book) => (
          <CardBook key={book.id} book={book} user={user} />
        ))}
      </div>
    </Layout>
  );
}

module.exports = FavoritePage;
