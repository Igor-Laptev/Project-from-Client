const React = require('react');
const Layout = require('./Layout');
const CardBook = require('./CardBook');


function AddBook({ user }) {
  return (

    <div className="addPage add-container">
      <h1>Добавьте Вашу книгу!</h1>
      <form className="add-book ">
        <div className="iputCss">
          <label2>Название:</label2>
          <input type="text" name="name" />
        </div>
        <div className="iputCss">
          <label>Автор:</label>
          <input type="text" name="author" />
        </div>
        <div className="iputCss">
          <label2>Описание:</label2>
          <input type="text" name="description" />
        </div>
        <div className="image">
          <label2>Фото:</label2>
          <input type="file" name="img" />
        </div>
        <button type="submit">Добавить</button>
      </form>
    </div>

 
  );
}

module.exports = AddBook;
