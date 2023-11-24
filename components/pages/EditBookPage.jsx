// Во всех компонентах должен быть подключен React
const React = require("react");
const Layout = require("../Layout");

function EditBookPage({ user, book }) {
  return (
    <Layout user={user}>
      <h3>Изменить встречу 👇</h3>
      <form className="js-update-form" data-id={book.id}>
        <div className="mb-3">
          <label className="form-label">Название</label>
          <input
            type="text"
            className="form-control"
            value={book.name}
            name="name"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Автор</label>
          <input
            type="text"
            className="form-control"
            value={book.author}
            name="author"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Описание</label>
          <input
            type="text"
            className="form-control"
            value={book.description}
            name="description"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Фото</label>
          <input
            type="file"
            className="form-control"
            value={book.img}
            name="img"
          />
        </div>
        <button type="submit" className="btn btn-outline-warning">
          Изменить 👌
        </button>
      </form>
    </Layout>
  );
}

module.exports = EditBookPage;
