const React = require("react");
const Header = require("./Header");
const Footer = require("./Footer");

module.exports = function Layout({ user, children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>{"Title"}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <Header user={user} />
      <body>{children}</body>
      <Footer />
    </html>
  );
};
