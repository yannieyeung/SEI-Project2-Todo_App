/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {
  // `dbPoolInstance` is accessible within this function scope

  let deleteTodo = (todo_id, callback) => {
    const values = todo_id;
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
    deleteTodo,
  };
};
