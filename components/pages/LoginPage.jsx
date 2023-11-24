const React = require("react");
const Layout = require("../Layout");

module.exports = function LoginPage() {
  return (
    <Layout>
      <form className="js-form-login">
        <input
          className="input-form"
          type="text"
          name="email"
          placeholder="Введите Email"
        />
        <input
          className="input-form"
          type="password"
          name="password"
          placeholder="Введите пароль"
        />
        <button className="button-form" type="submit">
          Войти
        </button>
        <script defer src="/script/logScript.js" />
      </form>
    </Layout>
  );
};

// комментарий
// kommentghcj