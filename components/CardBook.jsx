const React = require("react");

function CardBook({ book, favorites, user, favorite }) {
  let arr = ["favorites"];
  if (favorites) {
    arr = favorites.filter((favorite) => favorite.bookId === book.id);
  }

  return (
    <div className="card js-card" data-id={book.id} data-favorite={favorite}>
      <div className="card-body">
        <img src={book.img} alt="" />
        <h5 className="card-title">{book.name}</h5>
        <h5 className="card-title">{book.author}</h5>
        <p className="card-text">{book.description}</p>
        <a href={`/book/${book.id}`} className="btn btn-primary">
          Подробнее
        </a>

        {user && (
          <button type="button" className="btn btn-success btn-fav ms-2">
            {arr.length ? "Удалить из избранного" : "Добавить в избранное"}
          </button>
        )}
        {user && book.userId === user.id && (
          <>
            <button type="button" className="btn btn-warning btn-edit ms-2">
              Редактировать
            </button>
            <button type="button" className="btn btn-danger js-btn-remove">
              Удалить
            </button>
          </>
        )}
      </div>
    </div>
  );
}

module.exports = CardBook;
