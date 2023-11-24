const React = require("react");
const Layout = require("../Layout");
const CardBook = require("../CardBook");


function MainPage({ books, favorites, user }) {
  // console.log(books, favorites, user);
  return (
    <Layout user={user}>
      <div className="js-book-container">
        {books.map((book) => (
          <CardBook key={book.id} book={book} favorites={favorites} user={user}/>
        ))}
      </div>
    </Layout>
  );
}


module.exports = MainPage;
