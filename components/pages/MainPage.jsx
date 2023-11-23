const React = require("react");
const Layout = require("../Layout");
const CardBook = require("../CardBook");

function MainPage({ books, user }) {
  return (
    <Layout user={user}>
      <div>
        {books.map((book) => (
          <CardBook key={book.id} book={book} />
        ))}
      </div>
    </Layout>
  );
}

module.exports = MainPage;
