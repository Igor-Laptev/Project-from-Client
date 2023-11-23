const React = require("react");
const Layout = require("../Layout");
const CardBook = require("../CardBook");

function FavoritePage({books}) {
  return (
    <Layout>
      <div className="js-book-container">
        {books.map((book) => (
          <CardBook key={book.id} book={book} />
        ))}
      </div>
    </Layout>
  );
}

module.exports = FavoritePage;
