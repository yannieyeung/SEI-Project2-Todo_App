var React = require("react");

class TodoList extends React.Component {
  render() {
    const allTodo = this.props.userTodoList.map((eachTodo) => {
      return (
        <div class="eachTodo">
          <h3 className="item">{eachTodo.todo_item}</h3>
          <button className="delete">delete</button>
          <input type="hidden" value={eachTodo.name}></input>
          <input type="hidden" className="todo_id" value={eachTodo.id}></input>

          <br />
        </div>
      );
    });
    return (
      <html>
        <script defer src="./todoList-script.js" />
        <head />
        <body>
          <h1>Hello {this.props.username}</h1>
          {allTodo}
        </body>
      </html>
    );
  }
}

module.exports = TodoList;
