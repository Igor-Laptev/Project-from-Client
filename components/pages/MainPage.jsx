const React = require('react');
const Layout = require('../Layout');
const CardBook = require('../CardBook');

function MainPage({ books, layout }) {
  return (
    <>
      {layout ? (
        <div className="main-page">
          {books.map((book) => (
            <CardBook key={book.id} book={book} />
          ))}
        </div>
      ) : (
        <Layout>
          <div className="main-page">
            {books.map((book) => (
              <CardBook key={book.id} book={book} />
            ))}
          </div>
        </Layout>
      )}
    </>
  );
}

module.exports = MainPage;
