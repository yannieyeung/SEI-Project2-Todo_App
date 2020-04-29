/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {
  // `dbPoolInstance` is accessible within this function scope

  // To check if user exists
  let userLoggedIn = (username, callback) => {
    const values = [username];
    let query = "SELECT * FROM users WHERE name = $1";

    dbPoolInstance.query(query, values, (error, queryResult) => {
      if (error) {
        // invoke callback function with results after query has executed
        callback(error, null);
      } else {
        // invoke callback function with results after query has executed

        if (queryResult.rows.length > 0) {
          console.log(queryResult.rows);

          console.log("moddddeeelll " + queryResult.rows.length);
          callback(null, queryResult.rows);
        } else {
          callback(null, null);
        }
      }
    });
  };

  // If user exists, select all of user's todo items

  let userTodoList = (user_id, callback) => {
    const values = [user_id];
    let query =
      "SELECT todo.todo_item, todo.id, users.name FROM todo INNER JOIN users ON (todo.user_id = users.id) WHERE users.id = $1";

    dbPoolInstance.query(query, values, (error, queryResult) => {
      if (error) {
        // invoke callback function with results after query has executed
        callback(error, null);
      } else {
        // invoke callback function with results after query has executed

        if (queryResult.rows.length > 0) {
          console.log(queryResult.rows);

          console.log("moddddeeelll " + queryResult.rows.length);
          callback(null, queryResult.rows);
        } else {
          callback(null, null);
        }
      }
    });
  };

  let deleteTodo = (todo_id, callback) => {
    const values = [todo_id];
    let query = "DELETE from todo WHERE id = $1";
    dbPoolInstance.query(query, values, (error, queryResult) => {
      if (error) {
        // invoke callback function with results after query has executed
        callback(error, null);
      } else {
        // invoke callback function with results after query has executed

        if (queryResult.rows.length > 0) {
          console.log(queryResult.rows);

          console.log("moddddeeelll " + queryResult.rows.length);
          callback(null, queryResult.rows);
        } else {
          callback(null, null);
        }
      }
    });
  };

  return {
    userLoggedIn,
    userTodoList,
    deleteTodo,
  };
};