const React = require('react');

function CardBook({ book, favorites, user }) {

  let arr = ["favorites"];

  if (favorites) {
    arr = favorites.filter((favorite) => favorite.bookId === book.id);
  }

  return (
    <div className="card js-card" data-id={book.id}>
      <div className="card-body">
        <img src={book.img} alt="" />
        <h5 className="card-title">{book.name}</h5>
        <h5 className="card-title">{book.author}</h5>
        <p className="card-text">{book.description}</p>
        <a href="#" className="btn btn-primary">
          Подробнее
        </a>

        <button type="button" className="btn btn-success btn-fav ms-2">
          
          {arr.length ? "Удалить из избранного" : "Добавить в избранное"}

        </button>
      </div>
    </div>
  );
}

module.exports = CardBook;
