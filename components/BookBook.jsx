const React = require("react");
const Layout = require("./Layout");

function BookBook({ book, user }) {
  return (
    <Layout user={user}>
      <div className="card js-card" data-id={book.id}>
        <div className="card-body">
          <img src={book.img} alt="" />
          <h5 className="card-title">{book.name}</h5>
          <h5 className="card-title">{book.author}</h5>
          <p className="card-text">{book.description}</p>
        </div>
      </div>
    </Layout>
  );
}

module.exports = BookBook;
