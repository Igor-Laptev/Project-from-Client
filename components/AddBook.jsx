const React = require("react");
const Layout = require("./Layout");
const CardBook = require("./CardBook");


function AddBook({ user }) {
  return (
    
      <div className="add-container">

        <h1>Добавьте Вашу книгу!</h1>
        <form className="add-book ">
          <div>
            <label>Название:</label>
            <input type="text" name="name" />
          </div>
          <div>
            <label>Автор:</label>
            <input type="text" name="author" />
          </div>
          <div>
            <label>Описание:</label>
            <input type="text" name="description" />
          </div>
          <div className="image">
            <label>Фото:</label>
            <input type="file" name="img" />
          </div>
          <button type="submit">Добавить</button>
        </form>
      </div>
    
  );
}

module.exports = AddBook;
