var React = require("react");

class TodoForm extends React.Component {
  render() {
    let path = "/addtodo/" + this.props.user_id;

    return (
      <html>
        <head />
        <body>
          <form action={path} method="POST">
            <h3>Hello,</h3>
            <h1>{this.props.username}</h1>
            <input name="todo_item" type="text" placeholder="Todo"></input>
            <input
              name="user_id"
              type="hidden"
              value={this.props.user_id}
            ></input>
            <br />
            <button>Add</button>
          </form>
        </body>
      </html>
    );
  }
}

module.exports = TodoForm;
