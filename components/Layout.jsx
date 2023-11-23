const React = require("react");
const Header = require("./Header.jsx");

module.exports = function Layout({ user, children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>{"Title"}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossOrigin="anonymous"/>
        <link rel="stylesheet" href="/css/style.css" />
        <script defer src="/script/regScript.js" />
      </head>
      <Header user={user} />
      <body>{children}</body>
    </html>
  );
};
