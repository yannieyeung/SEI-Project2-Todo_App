var React = require("react");

class TodoList extends React.Component {
  render() {
    const allTodo = this.props.userTodoList.map((eachTodo) => {
      return (
        <div className="eachTodo">
          <h3 className="item">{eachTodo.todo_item}</h3>
          <button className="delete shapeshifter-play" >delete</button>
          <input type="hidden" value={eachTodo.name}></input>
          <input type="hidden" className="todo_id" value={eachTodo.id}></input>

          <br />
        </div>
      );
    });
    return (
      <html>
        <head />
        <script defer src="./todoList-script.js" />

        <link rel="stylesheet" href="todo.css" />
        <link
          href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;700&display=swap"
          rel="stylesheet"
        ></link>

        <body>
          <h3 className="hello">Hello,</h3>

          <h1> {this.props.username}</h1>
          {allTodo}
          <br />
        </body>
      </html>
    );
  }
}

module.exports = TodoList;
