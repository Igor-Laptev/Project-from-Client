const React = require("react");
const Layout = require("../Layout");

module.exports = function RegPage() {
  return (
    <Layout>
      <form className="js-form-rega">
        <input
          className="input-form"
          type="text"
          name="name"
          placeholder="name@example.com"
        />
        <input
          className="input-form"
          type="text"
          name="email"
          placeholder="email@example.com"
        />
        <input
          className="input-form"
          type="number"
          name="phone"
          pattern="[0-9]{11}"
          placeholder="+79999999999"
          required
        />
        <input
          className="input-form"
          type="password"
          name="password"
          placeholder="Введите пароль"
          minLength="6"
          required
        />
        <input
          className="input-form"
          type="password"
          name="passwordConfirm"
          placeholder="Повторите пароль"
          minLength="6"
          required
        />

        <button className="button-form" type="submit">
          Registration
        </button>
      </form>
    </Layout>
  );
};
