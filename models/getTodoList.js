/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {
  // `dbPoolInstance` is accessible within this function scope

  // If user exists, select all of user's todo items

  let getUserTodoList = (user_id, callback) => {
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
  let getUser = (user_id, callback) => {
    const values = [user_id];
    let query = "SELECT * FROM users WHERE id = $1";

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
    getUserTodoList,
    getUser,
  };
};
