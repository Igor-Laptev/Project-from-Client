const React = require("react");

function Header({ user }) {
  const headerStyle = {
    background: "#f2f2f2",
    padding: "10px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid #ccc",
  };

  const linkStyle = {
    marginRight: "10px",
    textDecoration: "none",
    color: "#333",
    fontSize: "16px",
    fontWeight: "bold",
  };

  return (
    <header style={headerStyle}>
      <div>
        <a href="/" style={linkStyle}>
          Главная страница
        </a>
      </div>
      <div>
        {!user && (
          <>
            <a href="/auth/registration" style={linkStyle}>
              Регистрация
            </a>
            <a href="/auth/login" style={linkStyle}>
              Вход
            </a>
          </>
        )}
        {user && (
          <>
            <a href="/favorite" style={linkStyle}>
              Избранное
            </a>
            <a href="/add" style={linkStyle}>
              Добавить книгу
            </a>
            <a href="/auth/logout" style={linkStyle}>
              Выход
            </a>
          </>
        )}
      </div>
    </header>
  );
}

module.exports = Header;
