var React = require("react");

class logInForm extends React.Component {
  render() {
    return (
      <html>
        <head />
        <body>
          <h1>Login</h1>
          <form action="/todolist" method="POST">
            <input name="username" type="text" placeholder="Username"></input>
            <input name="password" type="text" placeholder="Password"></input>
            <button>Log in</button>
          </form>
        </body>
      </html>
    );
  }
}

module.exports = logInForm;
