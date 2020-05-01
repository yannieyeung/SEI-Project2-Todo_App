var React = require("react");

class NoTodo extends React.Component {
  render() {
    return (
      <html>
        <head />
        <body>
          <form action="/addtodo" method="POST">
            <h3>Hi,</h3>
            <h1>{this.props.username}</h1>
            <h5>You have no Todo</h5>
            <button type="submit">Add</button>
          </form>
        </body>
      </html>
    );
  }
}

module.exports = NoTodo;
