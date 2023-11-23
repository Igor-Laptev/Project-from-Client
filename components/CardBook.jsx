const React = require("react");

function CardBook({ book }) {
  return (
    <div className="card">
      <div className="card-body">
        <img src={book.img} alt="" />
        <h5 className="card-title">{book.name}</h5>
        <h5 className="card-title">{book.author}</h5>
        <p className="card-text">{book.description}</p>
        <a href="#" className="btn btn-primary">
          Подробнее
        </a>
      </div>
    </div>
  );
}

module.exports = CardBook;
